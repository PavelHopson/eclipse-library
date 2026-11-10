/* Builds one catalog card on demand. Resource text is escaped by the caller. */
(() => {
  'use strict';

  function createCatalogCard(resource, context) {
    const {
      el, esc, types, trust, decisions, risks,
      runtime, cost, licenseGroups, licenseGroup, compareButton, favoriteButton, workflowControl,
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
    top.appendChild(compareButton(resource, true));
    top.appendChild(favoriteButton(resource));
    card.appendChild(top);

    const title = el('h4', 'card-title');
    title.innerHTML = '<a href="#item/' + encodeURIComponent(resource.id) + '">' + esc(resource.title) + '<span class="ext" aria-hidden="true">→</span></a>';
    card.appendChild(title);

    const description = String(resource.simpleDescription || resource.rawText || '').trim();
    if (description) {
      const preview = description.length > 220
        ? description.slice(0, 220).replace(/\s+\S*$/, '') + '…'
        : description;
      const summary = el('p', 'desc card-description');
      summary.textContent = preview;
      card.appendChild(summary);
    }

    const proof = el('div', 'card-proof');
    const proofStatus = resource.reviewStatus === 'verified' ? 'Источники проверены' : 'Требует проверки';
    const proofFreshness = resource.freshness === 'fresh' ? 'Актуально' : (resource.freshness === 'stale' ? 'Нужна перепроверка' : 'Дата проверки уточняется');
    const evidenceCount = Array.isArray(resource.evidence) ? resource.evidence.length : 0;
    proof.append(
      el('span', 'card-proof-item', proofStatus),
      el('span', 'card-proof-item', proofFreshness),
      el('span', 'card-proof-item', evidenceCount ? `${evidenceCount} источн.` : 'Источник не добавлен'),
    );
    card.appendChild(proof);

    const use = el('p', 'card-use');
    use.innerHTML = `<b>Когда пригодится:</b> ${esc(resource.useCases[0] || 'для небольшой тестовой задачи')}`;
    card.appendChild(use);


    const meta = el('div', 'card-meta');
    meta.appendChild(el('span', 'meta-chip', esc(runtime[resource.runtime] || runtime.unknown)));
    meta.appendChild(el('span', 'meta-chip meta-price', esc(cost[resource.cost] || cost.unknown)));
    const license = el('span', 'meta-chip', esc(licenseGroups[licenseGroup(resource.license)]));
    license.title = `Точные условия: ${resource.license}`;
    meta.appendChild(license);
    const risk = el('span', 'meta-chip', esc('Риск: ' + (risks[resource.riskLevel] || risks.medium)));
    meta.appendChild(risk);
    card.appendChild(meta);

    const foot = el('div', 'card-foot');
    const inspect = el('button', 'inspector-link', 'Как начать');
    inspect.type = 'button';
    inspect.dataset.inspectId = resource.id;
    inspect.setAttribute('aria-pressed', 'false');
    inspect.setAttribute('aria-label', 'Как начать: ' + resource.title);
    const detail = el('a', 'detail-link', 'Подробнее');
    detail.href = '#item/' + encodeURIComponent(resource.id);
    const sourceHref = resource.linkHealth?.status === 'blocked' ? '' : window.EclipseCatalogInspector.safeHttpUrl(resource.url);
    if (sourceHref) {
      const source = el('a', 'detail-link', 'Открыть источник ↗');
      source.href = sourceHref;
      source.target = '_blank';
      source.rel = 'noopener noreferrer';
      foot.appendChild(source);
    }
    foot.append(inspect, detail);
    const personal = el('div', 'card-personal');
    personal.appendChild(workflowControl(resource));
    card.appendChild(personal);
    card.appendChild(foot);
    return card;
  }

  window.EclipseCatalogCard = Object.freeze({ createCatalogCard });
})();
