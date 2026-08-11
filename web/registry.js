(() => {
  'use strict';

  const REGISTRY_URL = 'star-technology-registry.json?v=1';
  const CATALOG_URL = 'catalog-index.json?v=2';
  const lifecycleLabels = new Map();
  let searchTimer;
  const state = { registry: null, catalogById: new Map(), productId: 'star-market', lifecycle: '', priority: '', execution: '', verifiedOnly: true, query: '' };
  const $ = (selector, root = document) => root.querySelector(selector);
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const attr = esc;
  const executionLabels = { local: 'локально', 'self-host': 'свой сервер', cloud: 'облако', hybrid: 'гибрид' };
  const approvalLabels = { 'read-only': 'read-only', 'confirm-required': 'нужно подтверждение', 'manual-only': 'только вручную' };
  const benchmarkLabels = { required: 'benchmark обязателен', planned: 'benchmark запланирован', passed: 'benchmark пройден', 'not-applicable': 'benchmark не требуется' };

  function safeHref(value) {
    if (typeof value !== 'string') return '';
    if (/^guides\/[a-z0-9-]+\.md$/i.test(value)) return value;
    try {
      const url = new URL(value);
      if (url.protocol === 'https:' && !url.username && !url.password) return url.href;
    } catch {
      return '';
    }
    return '';
  }

  function guideViewerHref(value) {
    const match = value.match(/^guides\/([a-z0-9-]+)\.md$/i);
    return match ? `index.html#guide/${encodeURIComponent(match[1])}` : value;
  }

  function sourceFor(entry) {
    if (entry.source.kind === 'catalog') {
      const item = state.catalogById.get(entry.source.ref);
      return {
        title: item?.title || entry.source.ref,
        href: item ? `index.html#item/${encodeURIComponent(item.id)}` : '',
        verified: item?.reviewStatus === 'verified',
        highRisk: item?.riskLevel === 'high',
        detail: item?.trustReason || 'Карточка каталога недоступна.'
      };
    }
    if (entry.source.kind === 'external') {
      const source = state.registry.sources.find((item) => item.id === entry.source.ref);
      return { title: source?.title || entry.source.ref, href: source?.url || '', verified: source?.reviewStatus === 'verified', highRisk: source?.riskLevel === 'high', detail: source?.decision === 'reference' ? 'Только архитектурный reference.' : '' };
    }
    return { title: entry.source.title, href: guideViewerHref(entry.source.href), verified: true, highRisk: false, detail: 'Внутренний проверяемый контракт.' };
  }

  function isVerified(entry) { return sourceFor(entry).verified; }

  function entryIdFromHash() {
    const match = window.location.hash.match(/^#entry\/([a-z0-9-]+)$/i);
    return match ? match[1].toLocaleLowerCase('en') : '';
  }

  function clearEntryHash() {
    if (!entryIdFromHash()) return;
    history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  }

  function configureEntryState(entryId) {
    const entry = state.registry?.entries.find((item) => item.id === entryId);
    if (!entry) return false;
    state.productId = entry.productId;
    state.lifecycle = '';
    state.priority = '';
    state.execution = '';
    state.verifiedOnly = true;
    state.query = '';
    $('#registryLifecycle').value = '';
    $('#registryPriority').value = '';
    $('#registryExecution').value = '';
    $('#registryVerified').checked = true;
    $('#registrySearch').value = '';
    return true;
  }

  function focusEntry(entryId) {
    if (!entryId) return;
    requestAnimationFrame(() => {
      const article = document.getElementById(`entry-${entryId}`);
      if (!article) return;
      const details = $('details', article);
      if (details) details.open = true;
      article.scrollIntoView({ block: 'center' });
      $('.registry-entry-link', article)?.focus({ preventScroll: true });
    });
  }

  function matches(entry) {
    if (entry.productId !== state.productId) return false;
    if (state.lifecycle && entry.lifecycle !== state.lifecycle) return false;
    if (state.priority && entry.priority !== state.priority) return false;
    if (state.execution && entry.execution !== state.execution) return false;
    if (state.verifiedOnly && !isVerified(entry)) return false;
    if (!state.query) return true;
    const capability = state.registry.capabilities.find((item) => item.id === entry.capabilityId);
    const source = sourceFor(entry);
    return [entry.title, entry.role, entry.owner, entry.targetService, entry.nextStep, entry.fallback, capability?.name, capability?.outcome, source.title, ...entry.risks]
      .join(' ').toLocaleLowerCase('ru').includes(state.query);
  }

  function renderProducts() {
    const container = $('#registryProducts');
    if (!container.childElementCount) {
      container.innerHTML = state.registry.products.map((product) => `
        <button class="registry-product" type="button" aria-pressed="${product.id === state.productId}" data-product-id="${attr(product.id)}">
          <b>${esc(product.name)}</b><span>${esc(product.summary)}</span>
        </button>`).join('');
      return;
    }
    container.querySelectorAll('[data-product-id]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.productId === state.productId));
    });
  }

  function renderLifecycleOptions() {
    $('#registryLifecycle').insertAdjacentHTML('beforeend', state.registry.lifecycles.map((item) => `<option value="${attr(item.id)}">${esc(item.label)}</option>`).join(''));
  }

  function renderSummary(productEntries) {
    $('#summaryTotal').textContent = productEntries.length;
    $('#summaryReady').textContent = productEntries.filter((entry) => ['approved', 'production'].includes(entry.lifecycle)).length;
    $('#summaryPilots').textContent = productEntries.filter((entry) => entry.lifecycle === 'pilot').length;
    $('#summaryBlocked').textContent = productEntries.filter((entry) => entry.lifecycle === 'blocked').length;
    $('#summaryP0').textContent = productEntries.filter((entry) => entry.priority === 'P0').length;
  }

  function renderEntry(entry) {
    const entryHref = `#entry/${encodeURIComponent(entry.id)}`;
    const source = sourceFor(entry);
    const sourceHref = safeHref(source.href) || (/^index\.html#/.test(source.href) ? source.href : '');
    const sourceClass = source.highRisk ? 'registry-source-high' : source.verified ? 'registry-source-verified' : '';
    const risks = entry.risks.map((risk) => `<li>${esc(risk)}</li>`).join('');
    const benchmarkMetrics = entry.benchmark.metrics
      ? Object.entries(entry.benchmark.metrics).map(([key, value]) => `${key}: ${value}`).join(' · ')
      : 'Метрики ещё не записаны.';
    return `<article class="registry-entry" id="entry-${attr(entry.id)}" data-entry-id="${attr(entry.id)}">
      <div class="registry-entry-priority"><span class="priority-${attr(entry.priority)}">${esc(entry.priority)}</span></div>
      <div class="registry-entry-main">
        <div class="registry-entry-title">
          <h4><a class="registry-entry-link" href="${attr(entryHref)}">${esc(entry.title)}</a></h4>
          <span class="registry-badge lifecycle-${attr(entry.lifecycle)}">${esc(lifecycleLabels.get(entry.lifecycle) || entry.lifecycle)}</span>
          <span class="registry-badge">${esc(approvalLabels[entry.approval] || entry.approval)}</span>
        </div>
        <p>${esc(entry.role)}</p>
        <div class="registry-entry-meta">
          <span><b>Владелец:</b> ${esc(entry.owner)}</span>
          <span><b>Сервис:</b> ${esc(entry.targetService)}</span>
          <span><b>Контур:</b> ${esc(executionLabels[entry.execution] || entry.execution)}</span>
        </div>
        <details>
          <summary>Риски, benchmark и следующий шаг</summary>
          <div class="registry-entry-details">
            <div><h5>Риски</h5><ul>${risks}</ul></div>
            <div><h5>Benchmark</h5><p>${esc(benchmarkLabels[entry.benchmark.status] || entry.benchmark.status)} · ${esc(entry.benchmark.qualityMetric)}<br>${esc(benchmarkMetrics)}</p></div>
            <div><h5>Fallback</h5><p>${esc(entry.fallback)}</p></div>
            <div><h5>Следующий шаг</h5><p>${esc(entry.nextStep)}</p></div>
          </div>
        </details>
      </div>
      <div class="registry-entry-side">
        ${sourceHref ? `<a href="${attr(sourceHref)}"${/^https:/.test(sourceHref) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${entry.source.kind === 'catalog' ? 'Открыть карточку' : entry.source.kind === 'internal' ? 'Открыть гайд' : 'Открыть источник'}</a>` : '<span>Источник недоступен</span>'}
        <span class="${sourceClass}">${source.verified ? 'источник проверен' : 'требует проверки'}${source.highRisk ? ' · высокий риск' : ''}</span>
        <span>${esc(source.title)}</span>
      </div>
    </article>`;
  }

  function render() {
    if (!state.registry) return;
    const product = state.registry.products.find((item) => item.id === state.productId);
    const allProductEntries = state.registry.entries.filter((entry) => entry.productId === state.productId);
    const visible = state.registry.entries.filter(matches);
    renderProducts();
    renderSummary(allProductEntries);
    $('#registryResultsTitle').textContent = product ? `Решения для ${product.name}` : 'Решения';
    $('#registryCount').textContent = `${visible.length} из ${allProductEntries.length}`;
    const capabilities = state.registry.capabilities.filter((capability) => capability.productId === state.productId);
    $('#registryGroups').innerHTML = capabilities.map((capability) => {
      const entries = visible.filter((entry) => entry.capabilityId === capability.id);
      if (!entries.length) return '';
      return `<section class="registry-capability">
        <header class="registry-capability-head"><h3>${esc(capability.name)}</h3><p>${esc(capability.outcome)}</p></header>
        ${entries.map(renderEntry).join('')}
      </section>`;
    }).join('');
    $('#registryEmpty').hidden = visible.length !== 0;
    $('#registryStatus').hidden = true;
    $('#registryError').hidden = true;
  }

  function resetSummary() {
    ['#summaryTotal', '#summaryReady', '#summaryPilots', '#summaryBlocked', '#summaryP0'].forEach((selector) => {
      $(selector).textContent = '…';
    });
    $('#registryResultsTitle').textContent = 'Загружаю реестр…';
    $('#registryCount').textContent = '';
    $('#registryGroups').innerHTML = '';
    $('#registryProducts').innerHTML = '';
    $('#registryEmpty').hidden = true;
  }

  function resetFilters({ keepProduct = true } = {}) {
    clearTimeout(searchTimer);
    clearEntryHash();
    if (!keepProduct) state.productId = 'star-market';
    state.lifecycle = '';
    state.priority = '';
    state.execution = '';
    state.verifiedOnly = true;
    state.query = '';
    $('#registryLifecycle').value = '';
    $('#registryPriority').value = '';
    $('#registryExecution').value = '';
    $('#registryVerified').checked = true;
    $('#registrySearch').value = '';
    render();
  }

  function bindEvents() {
    $('#registryProducts').addEventListener('click', (event) => {
      const button = event.target.closest('[data-product-id]');
      if (!button) return;
      clearEntryHash();
      state.productId = button.dataset.productId;
      render();
    });
    $('#registryLifecycle').addEventListener('change', (event) => {
      clearEntryHash();
      state.lifecycle = event.target.value;
      render();
    });
    $('#registryPriority').addEventListener('change', (event) => {
      clearEntryHash();
      state.priority = event.target.value;
      render();
    });
    $('#registryExecution').addEventListener('change', (event) => {
      clearEntryHash();
      state.execution = event.target.value;
      render();
    });
    $('#registryVerified').addEventListener('change', (event) => {
      clearEntryHash();
      state.verifiedOnly = event.target.checked;
      render();
    });
    $('#registryReset').addEventListener('click', () => resetFilters());
    $('[data-reset-registry]').addEventListener('click', () => resetFilters());
    $('#registryRetry').addEventListener('click', load);
    $('#registrySearch').addEventListener('input', (event) => {
      clearTimeout(searchTimer);
      const query = event.target.value.trim().toLocaleLowerCase('ru');
      searchTimer = setTimeout(() => {
        clearEntryHash();
        state.query = query;
        render();
      }, 100);
    });
    window.addEventListener('hashchange', () => {
      const entryId = entryIdFromHash();
      if (!entryId || !configureEntryState(entryId)) return;
      render();
      focusEntry(entryId);
    });
  }

  async function load() {
    clearTimeout(searchTimer);
    state.registry = null;
    resetSummary();
    $('#registryError').hidden = true;
    $('#registryStatus').hidden = false;
    $('#registryStatus').textContent = 'Загружаю данные и проверяю связи с каталогом…';
    try {
      const [registryResponse, catalogResponse] = await Promise.all([
        fetch(REGISTRY_URL, { cache: 'no-cache' }),
        fetch(CATALOG_URL, { cache: 'no-cache' })
      ]);
      if (!registryResponse.ok) throw new Error(`registry: HTTP ${registryResponse.status}`);
      if (!catalogResponse.ok) throw new Error(`catalog: HTTP ${catalogResponse.status}`);
      const [registry, catalog] = await Promise.all([registryResponse.json(), catalogResponse.json()]);
      if (registry.schemaVersion !== 1 || !Array.isArray(registry.entries) || !Array.isArray(registry.products) || !Array.isArray(registry.lifecycles) || !Number.isFinite(Date.parse(registry.updatedAt))) throw new Error('Некорректный формат реестра.');
      if (!Array.isArray(catalog.items)) throw new Error('Некорректный формат каталога.');
      state.registry = registry;
      state.catalogById = new Map(catalog.items.map((item) => [item.id, item]));
      lifecycleLabels.clear();
      registry.lifecycles.forEach((item) => lifecycleLabels.set(item.id, item.label));
      $('#registryUpdated').textContent = `Проверено ${new Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium' }).format(new Date(`${registry.updatedAt}T00:00:00Z`))}`;
      if (!$('#registryLifecycle').dataset.ready) {
        renderLifecycleOptions();
        $('#registryLifecycle').dataset.ready = 'true';
      }
      const entryId = entryIdFromHash();
      if (entryId) configureEntryState(entryId);
      render();
      focusEntry(entryId);
    } catch (error) {
      state.registry = null;
      $('#registryStatus').hidden = true;
      $('#registryGroups').innerHTML = '';
      $('#registryResultsTitle').textContent = 'Реестр недоступен';
      $('#registryCount').textContent = '';
      $('#registryError').hidden = false;
      $('#registryErrorText').textContent = `Не удалось получить проверенный snapshot: ${error.message}`;
      console.error(error);
    }
  }

  bindEvents();
  load();
})();
