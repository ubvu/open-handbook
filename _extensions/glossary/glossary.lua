-- glossary.lua – `{{< glossary term-id >}}` shortcode
--
-- Renders a link to /glossary/<term-id>.html with the term's title and
-- description attached as data attributes, which js/glossary-popup.js uses
-- to show a hover/click popup. Term pages live in glossary/<id>.qmd: the
-- page title is the term, an optional `aliases` metadata field lists
-- alternative spellings, and the page body is the description.
--
-- Usage: For logging in {{< glossary mfa >}} is mandatory.
--
-- Peter Vos, 2026-06-16

local stringify = pandoc.utils.stringify

--- Resolve the glossary/ directory relative to the project root so the
--- shortcode works the same regardless of which subdirectory the current
--- file lives in.
local function glossary_dir()
  if quarto.project.directory then
    return quarto.project.directory .. '/glossary'
  end
  return 'glossary'
end

--- Read every glossary/*.qmd file once and cache id -> { id, title, description }.
local terms = nil

local function load_glossary()
  local index = {}
  local dir = glossary_dir()
  local ok, files = pcall(pandoc.system.list_directory, dir)
  if not ok or not files then
    return index
  end

  for _, file in ipairs(files) do
    local id = file:match '^(.*)%.qmd$' or file:match '^(.*)%.md$'
    if id then
      local fh = io.open(dir .. '/' .. file, 'r')
      if fh then
        local text = fh:read '*a'
        fh:close()

        local doc = pandoc.read(text, 'markdown')
        local title = doc.meta.title and stringify(doc.meta.title) or id

        -- Rendered as HTML (not stringify'd to plain text) so that links in a
        -- term's description survive into the popup and stay clickable.
        local description = pandoc.write(pandoc.Pandoc(doc.blocks), 'html'):gsub('%s+$', '')

        local term = { id = id, title = title, description = description }
        index[id:lower()] = term

        if doc.meta.aliases then
          for _, alias in ipairs(doc.meta.aliases) do
            local alias_id = stringify(alias):lower()
            if not index[alias_id] then
              index[alias_id] = term
            end
          end
        end
      end
    end
  end

  return index
end

return {
  ['glossary'] = function(args, kwargs, meta)
    if terms == nil then
      terms = load_glossary()
    end

    if #args == 0 then
      return quarto.shortcode.error_output('glossary', 'missing term id', 'inline')
    end

    local id = stringify(args[1]):lower()
    local term = terms[id]
    if not term then
      quarto.log.warning("glossary shortcode: unknown term '" .. id .. "'")
      return quarto.shortcode.error_output('glossary', "unknown term '" .. id .. "'", 'inline')
    end

    local link = pandoc.Link({ pandoc.Str(term.title) }, '/glossary/' .. term.id .. '.html')
    link.classes = { 'glossary-link' }
    link.attributes['data-glossary-title'] = term.title
    link.attributes['data-glossary-description'] = term.description
    link.attributes['tabindex'] = '0'
    return link
  end
}
