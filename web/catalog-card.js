/* Builds one catalog card on demand. Resource text is escaped by the caller. */
(() => {
  'use strict';

  function createCatalogCard(resource, context) {
    const {
      el, esc, escAttr, types, trust, linkHealth, mcpAudit, decisions, risks,
      runtime, cost, signup, licenseGroups, licenseGroup, compareButton, favoriteButton,
    } = context;
    const repositoryInactive = ['archived', 'disabled'].includes(resource.repositoryState);
    const card = el('article', 'card' + (resource.riskLevel === 'high' || resource.trust === 'caution' ? ' risk' : '') + (resource.detail ? ' enriched' : '') + (repositoryInactive ? ' repository-inactive' : ''));
    card.dataset.type = resource.type;
    card.dataset.itemId = resource.id;
    card.dataset.freshness = resource.freshness;

    const top = el('div', 'card-top');
    top.appendChild(el('span', 'type-chip t-' + resource.type, esc(types[resource.type] || resource.type)));
    top.appendChild(el('span', `trust-chip trust-${resource.trust}`, esc(trust[resource.trust] || trust.unknown)));
    const health = el('span', `link-health health-${resource.linkHealth.status}`, esc(linkHealth[resource.linkHealth.status] || linkHealth.unchecked));
    health.title = 'Автоматическая проверка доступности ссылки, а не гарантия безопасности продукта';
    top.appendChild(health);
    if (repositoryInactive) {
      const repository = el('span', `repository-state repository-${resource.repositoryState}`, esc(resource.repositoryState === 'archived' ? 'Репозиторий архивирован' : 'Репозиторий отключён'));
      repository.title = 'Проект больше не принимает обычные изменения; используйте как reference и ищите поддерживаемую альтернативу.';
      top.appendChild(repository);
    }
    if (resource.mcpAudit) {
      const auditStatus = ['runtime-reviewed', 'runtime-scanned', 'blocked'].includes(resource.mcpAudit.status) ? resource.mcpAudit.status : 'runtime-pending';
      const auditLabel = resource.mcpAudit.status === 'runtime-scanned' && resource.mcpAudit.manualReview?.outcome === 'conditional'
        ? 'Проверено с ограничениями'
        : mcpAudit[resource.mcpAudit.status] || mcpAudit['runtime-pending'];
      const audit = el('span', `mcp-audit mcp-audit-${auditStatus}`, esc(auditLabel));
      audit.title = resource.mcpAudit.status === 'runtime-reviewed'
        ? 'Tool descriptions проверены вручную, а разрешённые boundary tests пройдены в изолированном окружении.'
        : resource.mcpAudit.status === 'blocked'
          ? resource.mcpAudit.summary
          : resource.mcpAudit.status === 'runtime-scanned'
            ? resource.mcpAudit.manualReview?.outcome === 'conditional'
              ? `Ручной review завершён с ограничением: ${resource.mcpAudit.manualReview.finding}`
              : 'Pinned server проверен автоматическим inspector в disposable runner; перед рабочим подключением ещё нужен ручной review приватного artifact.'
            : 'Сервер не запускался на основной машине: перед подключением нужен sandbox-аудит tool descriptions.';
      top.appendChild(audit);
    }
    if (/^[a-z0-9_.-]+\/[a-z0-9_.-]+$/i.test(resource.starsRepo || '')) {
      const img = el('img', 'stars');
      img.loading = 'lazy';
      img.alt = 'GitHub stars';
      img.src = `https://img.shields.io/github/stars/${resource.starsRepo}?style=flat&color=8b5cf6&labelColor=15151c&logo=github&logoColor=cfcfe0`;
      top.appendChild(img);
    }
    top.appendChild(compareButton(resource));
    top.appendChild(favoriteButton(resource));
    card.appendChild(top);

    const title = el('h4', 'card-title');
    title.innerHTML = `<a href="#item/${encodeURIComponent(resource.id)}">${esc(resource.title)}<svg class="ext" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 18l6-6-6-6"/></svg></a>`;
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
    meta.appendChild(el('span', 'meta-chip', esc(signup[resource.signup] || signup.unknown)));
    const license = el('span', 'meta-chip', esc(licenseGroups[licenseGroup(resource.license)]));
    license.title = `Точные условия: ${resource.license}`;
    meta.appendChild(license);
    card.appendChild(meta);

    let domain = '';
    try { domain = new URL(resource.url).hostname.replace(/^www\./, ''); } catch (error) {}
    const foot = el('div', 'card-foot');
    foot.innerHTML =
      `<a class="detail-link" href="#item/${encodeURIComponent(resource.id)}">Открыть полный анализ →</a>` +
      (resource.linkHealth.status === 'blocked'
        ? '<span class="source-link source-blocked">Источник заблокирован</span>'
        : `<a class="source-link" href="${escAttr(resource.url)}" target="_blank" rel="noopener" aria-label="Открыть официальный источник">${esc(domain || 'Источник')} ↗</a>`);
    card.appendChild(foot);
    return card;
  }

  window.EclipseCatalogCard = Object.freeze({ createCatalogCard });
})();
