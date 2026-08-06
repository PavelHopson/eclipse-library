/* Renders the small verified-recent feed without owning catalog state. */
(() => {
  'use strict';

  function renderEditorialRecent(context) {
    const { cards, $, el, esc, escAttr, formatAddedAt, decisions, risks } = context;
    let section = $('#recentEditorial');
    if (!section) {
      section = el('section', 'recent-editorial');
      section.id = 'recentEditorial';
      section.setAttribute('aria-labelledby', 'recentEditorialTitle');
      $('#hero').insertAdjacentElement('afterend', section);
    }
    const latest = cards
      .filter((card) => card.resource.detail && card.resource.addedAt)
      .sort((a, b) => (Date.parse(b.resource.addedAt) || 0) - (Date.parse(a.resource.addedAt) || 0) || b.resource.catalogOrder - a.resource.catalogOrder)
      .slice(0, 6);
    section.hidden = latest.length === 0;
    section.innerHTML =
      `<header class="recent-editorial-head"><div><span>Редакционная лента</span><h2 id="recentEditorialTitle">Новое и проверенное</h2><p>Свежие разборы: что это, можно ли доверять и куда применить.</p></div><a href="#browse/recent">Показать все новые →</a></header>` +
      `<div class="recent-editorial-list">${latest.map((card) => {
        const resource = card.resource;
        const projects = resource.projects.slice(0, 2).join(', ') || 'Применимость уточняется';
        return `<a class="recent-editorial-item decision-${resource.decision}" href="#item/${encodeURIComponent(resource.id)}"><div class="recent-editorial-meta"><time datetime="${escAttr(resource.addedAt)}">${esc(formatAddedAt(resource.addedAt))}</time><span>${esc(decisions[resource.decision] || decisions.reference)}</span></div><h3>${esc(resource.title)}</h3><p>${esc(resource.simpleDescription)}</p><footer><span>Для: ${esc(projects)}</span><b>${esc(risks[resource.riskLevel] || risks.medium)}</b></footer></a>`;
      }).join('')}</div>`;
  }

  window.EclipseCatalogEditorial = Object.freeze({ renderEditorialRecent });
})();
