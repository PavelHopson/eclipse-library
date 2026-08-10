/* Builds one catalog card on demand. Resource text is escaped by the caller. */
(() => {
  'use strict';

  function createCatalogCard(resource, context) {
    const {
      el, esc, types, trust, decisions, risks,
      runtime, cost, licenseGroups, licenseGroup, compareButton, favoriteButton,
    } = context;
    const repositoryInactive = ['archived', 'disabled'].includes(resource.repositoryState);
    const card = el('article', 'card' + (resource.riskLevel === 'high' || resource.trust === 'caution' ? ' risk' : '') + (resource.detail ? ' enriched' : '') + (repositoryInactive ? ' repository-inactive' : ''));
    card.dataset.type = resource.type;
    card.dataset.itemId = resource.id;
    card.dataset.freshness = resource.freshness;

    const top = el('div', 'card-top');
    top.appendChild(el('span', 'type-chip t-' + resource.type, esc(types[resource.type] || resource.type)));
    top.appendChild(el('span', `trust-chip trust-${resource.trust}`, esc(trust[resource.trust] || trust.unknown)));
    if (repositoryInactive) {
      const repository = el('span', `repository-state repository-${resource.repositoryState}`, esc(resource.repositoryState === 'archived' ? 'Репозиторий архивирован' : 'Репозиторий отключён'));
      repository.title = 'Проект больше не принимает обычные изменения; используйте как reference и ищите поддерживаемую альтернативу.';
      top.appendChild(repository);
    }
    top.appendChild(compareButton(resource));
    top.appendChild(favoriteButton(resource));
    card.appendChild(top);

    const title = el('h4', 'card-title');
    title.innerHTML = '<a href="#item/' + encodeURIComponent(resource.id) + '">' + esc(resource.title) + '<span class="ext" aria-hidden="true">→</span></a>';
    card.appendChild(title);
    card.appendChild(el('p', 'desc', esc(resource.simpleDescription)));

    const use = el('p', 'card-use');
    use.innerHTML = `<b>Когда пригодится:</b> ${esc(resource.useCases[0] || 'для небольшой тестовой задачи')}`;
    card.appendChild(use);

    const decision = el('div', `card-decision decision-${resource.decision}`);
    decision.innerHTML =
      `<span><small>Решение</small><b>${esc(decisions[resource.decision] || decisions.reference)}</b></span>` +
      `<span><small>Куда применить</small><b>${esc(resource.projects[0] || 'Нужен отдельный выбор проекта')}</b></span>` +
      `<span><small>Риск</small><b>${esc(risks[resource.riskLevel] || risks.medium)}</b></span>`;
    card.appendChild(decision);

    const meta = el('div', 'card-meta');
    meta.appendChild(el('span', 'meta-chip', esc(runtime[resource.runtime] || runtime.unknown)));
    meta.appendChild(el('span', 'meta-chip meta-price', esc(cost[resource.cost] || cost.unknown)));
    const license = el('span', 'meta-chip', esc(licenseGroups[licenseGroup(resource.license)]));
    license.title = `Точные условия: ${resource.license}`;
    meta.appendChild(license);
    card.appendChild(meta);

    const foot = el('div', 'card-foot');
    const inspect = el('button', 'inspector-link', 'Быстрый обзор');
    inspect.type = 'button';
    inspect.dataset.inspectId = resource.id;
    inspect.setAttribute('aria-pressed', 'false');
    inspect.setAttribute('aria-label', 'Показать быстрый обзор: ' + resource.title);
    const detail = el('a', 'detail-link', 'Полный анализ');
    detail.href = '#item/' + encodeURIComponent(resource.id);
    foot.append(inspect, detail);
    card.appendChild(foot);
    return card;
  }

  window.EclipseCatalogCard = Object.freeze({ createCatalogCard });
})();
