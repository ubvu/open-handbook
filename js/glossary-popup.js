// glossary-popup.js – show a glossary term's definition in a small popup
// when a reader hovers, focuses, or clicks a `.glossary-link` (created by
// utils/glossary.lua from `{{ glossary term-id }}` shortcodes).
//
// Clicking/tapping a link toggles a "pinned" popup instead of navigating,
// so touch users (who have no hover) can still read the definition; the
// link still has a real href to the glossary page for anyone who wants the
// full entry (e.g. ctrl/cmd/middle-click, or a screen reader following it).

document.addEventListener('DOMContentLoaded', function () {
  const tooltip = document.createElement('div');
  tooltip.className = 'glossary-tooltip';
  tooltip.setAttribute('role', 'tooltip');

  const title = document.createElement('strong');
  title.className = 'glossary-tooltip-title';
  const description = document.createElement('div');
  description.className = 'glossary-tooltip-description';
  tooltip.append(title, description);
  document.body.appendChild(tooltip);

  let activeLink = null;
  let pinned = false;

  function positionTooltip(link) {
    const rect = link.getBoundingClientRect();
    const margin = 10;
    const tooltipRect = tooltip.getBoundingClientRect();
    let top = window.scrollY + rect.bottom + margin;
    let left = window.scrollX + rect.left;

    if (left + tooltipRect.width > window.scrollX + window.innerWidth - margin) {
      left = window.scrollX + window.innerWidth - tooltipRect.width - margin;
    }
    if (top + tooltipRect.height > window.scrollY + window.innerHeight - margin) {
      top = window.scrollY + rect.top - tooltipRect.height - margin;
    }
    top = Math.max(top, window.scrollY + margin);
    left = Math.max(left, window.scrollX + margin);

    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
  }

  function showTooltip(link) {
    if (!link) return;
    activeLink = link;
    title.textContent = link.dataset.glossaryTitle || link.textContent;
    description.textContent = link.dataset.glossaryDescription || '';
    tooltip.classList.add('visible');
    positionTooltip(link);
  }

  function hideTooltip() {
    tooltip.classList.remove('visible');
    activeLink = null;
    pinned = false;
  }

  function isGlossaryLink(el) {
    return el && el.closest && el.closest('a.glossary-link');
  }

  document.querySelectorAll('a.glossary-link').forEach(function (link) {
    link.addEventListener('mouseenter', function () {
      if (!pinned) showTooltip(link);
    });
    link.addEventListener('focus', function () {
      showTooltip(link);
    });
    link.addEventListener('mouseleave', function () {
      if (!pinned) hideTooltip();
    });
    link.addEventListener('blur', function () {
      if (!pinned) hideTooltip();
    });
    link.addEventListener('click', function (event) {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
        return; // let the browser handle "open in new tab" etc. normally
      }
      event.preventDefault();
      if (pinned && activeLink === link) {
        hideTooltip();
      } else {
        pinned = true;
        showTooltip(link);
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (!isGlossaryLink(event.target)) {
      hideTooltip();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      hideTooltip();
    }
  });

  window.addEventListener('scroll', function () {
    if (activeLink && tooltip.classList.contains('visible')) {
      positionTooltip(activeLink);
    }
  });
});
