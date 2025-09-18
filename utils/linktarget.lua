--- linktarget.lua – add "target='_blank'" to external links so they open in a new tab
--- Peter Vos, 2025-09-11

function Link(link)
    if link.target:match '^https?%:' then
      link.attributes.target = '_blank'
      return link
    end
end
