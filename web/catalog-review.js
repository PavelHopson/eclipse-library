/* Local, fail-closed editorial review packets for Eclipse Library records. */
(() => {
  'use strict';

  const STORAGE_KEY = 'eclipse-library:review-drafts:v1';
  const STORAGE_LIMIT = 40;
  const NOTE_LIMIT = 1600;
  const OUTCOMES = Object.freeze({
    approve: 'Готово к редакторскому merge',
    revise: 'Нужны правки',
    reject: 'Не публиковать предложение',
  });
  const CHECKS = Object.freeze([
    Object.freeze({ id: 'source', label: 'Источник и владелец подтверждены', hint: 'Официальный сайт или repository действительно принадлежат продукту.' }),
    Object.freeze({ id: 'terms', label: 'Лицензия и условия сверены', hint: 'Цена, регистрация, коммерческое использование и ограничения не взяты из рекламы.' }),
    Object.freeze({ id: 'risk', label: 'Риски описаны без пропусков', hint: 'Permissions, данные, telemetry, installer и supply chain учтены.' }),
    Object.freeze({ id: 'fit', label: 'Польза для Eclipse доказана', hint: 'Есть проект, сценарий, измеримая ценность и конкретный следующий шаг.' }),
  ]);
  const CHECK_IDS = new Set(CHECKS.map((item) => item.id));

  function safeText(value, limit = 240) {
    return typeof value === 'string' ? value.trim().slice(0, limit) : '';
  }

  function boundedNote(value) {
    return typeof value === 'string' ? value.slice(0, NOTE_LIMIT) : '';
  }

  function safeHttpUrl(value) {
    try {
      const url = new URL(value);
      return ['http:', 'https:'].includes(url.protocol) && !url.username && !url.password ? url.href : '';
    } catch (error) {
      return '';
    }
  }

  function resolveStorage(provided) {
    if (provided) return provided;
    try { return window.localStorage; }
    catch (error) {
      return Object.freeze({
        available: false,
        getItem: () => null,
        setItem: () => { throw new Error('Browser storage is unavailable.'); },
      });
    }
  }

  function emptyDraft(resourceId = '') {
    return {
      schemaVersion: 1,
      resourceId: safeText(resourceId, 120),
      checks: Object.fromEntries(CHECKS.map(({ id }) => [id, false])),
      outcome: '',
      note: '',
      updatedAt: null,
    };
  }

  function normalizeDraft(value, resourceId = '') {
    const draft = emptyDraft(resourceId || value?.resourceId);
    if (!value || typeof value !== 'object') return draft;
    CHECKS.forEach(({ id }) => { draft.checks[id] = value.checks?.[id] === true; });
    draft.outcome = Object.hasOwn(OUTCOMES, value.outcome) ? value.outcome : '';
    draft.note = boundedNote(value.note);
    draft.updatedAt = Number.isFinite(Date.parse(value.updatedAt || '')) ? new Date(value.updatedAt).toISOString() : null;
    return draft;
  }

  function isReady(draft) {
    return CHECKS.every(({ id }) => draft?.checks?.[id] === true) && Object.hasOwn(OUTCOMES, draft?.outcome);
  }

  function createReviewPacket(resource, draftValue, createdAt = new Date().toISOString()) {
    const draft = normalizeDraft(draftValue, resource?.id);
    const sourceBlocked = resource?.linkHealth?.status === 'blocked';
    const evidenceUrls = Array.isArray(resource?.evidence)
      ? resource.evidence.map((item) => safeHttpUrl(item?.url)).filter(Boolean).slice(0, 12)
      : [];
    return Object.freeze({
      schemaVersion: 'eclipse-library.review-packet.v2',
      authority: 'local-review-only',
      catalogMutationAllowed: false,
      createdAt: Number.isFinite(Date.parse(createdAt)) ? new Date(createdAt).toISOString() : new Date().toISOString(),
      resource: {
        id: safeText(resource?.id, 120),
        title: safeText(resource?.title, 240),
        url: sourceBlocked ? '' : safeHttpUrl(resource?.url),
        sourceBlocked,
        reviewStatus: resource?.reviewStatus === 'verified' ? 'verified' : 'inferred',
        verifiedAt: /^\d{4}-\d{2}-\d{2}$/.test(resource?.verifiedAt || '') ? resource.verifiedAt : null,
        decision: ['now', 'roadmap', 'reference', 'no'].includes(resource?.decision) ? resource.decision : 'reference',
        riskLevel: ['low', 'medium', 'high'].includes(resource?.riskLevel) ? resource.riskLevel : 'medium',
        license: {
          label: safeText(resource?.licenseInfo?.label || resource?.license, 240),
          requiresReview: resource?.licenseInfo?.requiresReview !== false,
        },
        evidenceUrls,
      },
      review: {
        outcome: draft.outcome || 'not-selected',
        outcomeLabel: OUTCOMES[draft.outcome] || 'Итог не выбран',
        checks: Object.fromEntries(CHECKS.map(({ id, label }) => [id, { label, passed: draft.checks[id] === true }])),
        note: draft.note,
        ready: isReady(draft),
      },
      preview: {
        command: 'node scripts/review-preview.mjs prepare --packet <review-packet.json> --patch <proposal.diff> --base <full-commit-sha>',
        allowedCatalogPath: 'catalog/resources.json',
        requiresFullCommitSha: true,
        patchRequired: true,
        autoApply: false,
        autoMerge: false,
        autoDeploy: false,
      },
      nextGate: isReady(draft)
        ? 'Show the semantic summary and full git diff, run quality/security/responsive checks, then request a separate human merge approval.'
        : 'Complete every evidence check and select an outcome before requesting merge approval.',
    });
  }

  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text != null) element.textContent = text;
    return element;
  }

  function loadDrafts(storage) {
    try {
      const parsed = JSON.parse(storage.getItem(STORAGE_KEY) || '[]');
      if (!Array.isArray(parsed)) return { drafts: new Map(), available: storage.available !== false };
      const safeEntries = parsed.slice(0, STORAGE_LIMIT).flatMap((entry) => {
        const id = safeText(entry?.resourceId, 120);
        return id ? [[id, normalizeDraft(entry, id)]] : [];
      });
      return { drafts: new Map(safeEntries), available: storage.available !== false };
    } catch (error) {
      return { drafts: new Map(), available: false };
    }
  }

  function createController(options = {}) {
    const root = options.root;
    if (!root) throw new Error('Review root is required.');
    const storage = resolveStorage(options.storage);
    const notify = typeof options.notify === 'function' ? options.notify : () => {};
    const confirmAction = typeof options.confirm === 'function' ? options.confirm : window.confirm.bind(window);
    const loaded = loadDrafts(storage);
    const drafts = loaded.drafts;
    let storageAvailable = loaded.available;
    let resource = null;
    let draft = null;
    let returnFocus = null;

    function persist() {
      if (!resource || !draft) return;
      draft.updatedAt = new Date().toISOString();
      drafts.delete(resource.id);
      drafts.set(resource.id, normalizeDraft(draft, resource.id));
      const payload = [...drafts.values()].slice(-STORAGE_LIMIT);
      try {
        storage.setItem(STORAGE_KEY, JSON.stringify(payload));
        storageAvailable = true;
      } catch (error) {
        storageAvailable = false;
      }
    }

    function completion() {
      const passed = CHECKS.filter(({ id }) => draft.checks[id]).length;
      return { passed, total: CHECKS.length, ready: isReady(draft) };
    }

    function updateState(message = '') {
      const progress = completion();
      const progressText = root.querySelector('[data-review-progress]');
      const copyButton = root.querySelector('[data-review-copy]');
      const downloadButton = root.querySelector('[data-review-download]');
      const counter = root.querySelector('[data-review-note-count]');
      const status = root.querySelector('[data-review-status]');
      if (progressText) progressText.textContent = progress.ready
        ? 'Пакет готов к копированию'
        : `${progress.passed} из ${progress.total} проверок · ${draft.outcome ? 'итог выбран' : 'выберите итог'}`;
      if (copyButton) copyButton.disabled = !progress.ready;
      if (downloadButton) downloadButton.disabled = !progress.ready;
      if (counter) counter.textContent = `${draft.note.length} / ${NOTE_LIMIT}`;
      if (status) status.textContent = message || (storageAvailable
        ? 'Черновик сохранён только в этом браузере.'
        : 'Браузер не разрешил сохранить черновик. Не закрывайте вкладку до копирования.');
      root.dataset.ready = String(progress.ready);
    }

    function render() {
      root.replaceChildren();
      root.dataset.resourceId = resource.id;

      const header = node('header', 'review-head');
      const close = node('button', 'review-close', '← К карточке');
      close.type = 'button';
      close.dataset.reviewClose = 'true';
      const label = node('span', 'review-head-label', 'Локальный review · каталог не изменяется');
      const clear = node('button', 'review-clear', 'Очистить черновик');
      clear.type = 'button';
      clear.dataset.reviewClear = 'true';
      header.append(close, label, clear);

      const body = node('article', 'review-body');
      const intro = node('section', 'review-intro');
      intro.append(
        node('span', 'review-eyebrow', 'Evidence-first approval'),
        node('h1', '', resource.title),
        node('p', '', 'Сверьте четыре обязательных пункта, выберите итог и скопируйте структурированный пакет. Публикация и изменение JSON потребуют отдельного review, diff и commit.'),
      );

      const snapshot = node('dl', 'review-snapshot');
      [
        ['Текущий статус', resource.reviewStatus === 'verified' ? 'Проверено редактором' : 'Требует ручной проверки'],
        ['Решение Library', options.decisions?.[resource.decision] || resource.decision || 'Reference'],
        ['Evidence', `${Array.isArray(resource.evidence) ? resource.evidence.length : 0} ссылок`],
      ].forEach(([term, value]) => {
        const item = node('div', '');
        item.append(node('dt', '', term), node('dd', '', value));
        snapshot.appendChild(item);
      });

      const checklist = node('fieldset', 'review-checklist');
      checklist.appendChild(node('legend', '', 'Что обязательно проверить'));
      CHECKS.forEach(({ id, label: checkLabel, hint }) => {
        const item = node('label', 'review-check');
        const input = node('input');
        input.type = 'checkbox';
        input.checked = draft.checks[id];
        input.dataset.reviewCheck = id;
        const copy = node('span', '');
        copy.append(node('b', '', checkLabel), node('small', '', hint));
        item.append(input, copy);
        checklist.appendChild(item);
      });

      const outcome = node('fieldset', 'review-outcomes');
      outcome.appendChild(node('legend', '', 'Какой итог зафиксировать'));
      const outcomeGrid = node('div', 'review-outcome-grid');
      Object.entries(OUTCOMES).forEach(([value, title]) => {
        const item = node('label', `review-outcome review-outcome-${value}`);
        const input = node('input');
        input.type = 'radio';
        input.name = 'review-outcome';
        input.value = value;
        input.checked = draft.outcome === value;
        input.dataset.reviewOutcome = 'true';
        item.append(input, node('span', '', title));
        outcomeGrid.appendChild(item);
      });
      outcome.appendChild(outcomeGrid);

      const noteLabel = node('label', 'review-note');
      const noteHead = node('span', 'review-note-head');
      noteHead.append(node('b', '', 'Что нужно изменить или сохранить'), node('small', '', `${draft.note.length} / ${NOTE_LIMIT}`));
      noteHead.querySelector('small').dataset.reviewNoteCount = 'true';
      const textarea = node('textarea');
      textarea.value = draft.note;
      textarea.maxLength = NOTE_LIMIT;
      textarea.rows = 5;
      textarea.placeholder = 'Например: сохранить описание, но заменить рекламную цифру на проверяемое условие из official pricing.';
      textarea.dataset.reviewNote = 'true';
      noteLabel.append(noteHead, textarea);

      const gate = node('section', 'review-gate');
      gate.append(
        node('span', 'review-gate-icon', '✓'),
        node('div', '', ''),
      );
      gate.lastChild.append(node('b', '', 'Что произойдёт после копирования'), node('p', '', 'Будет создан только текстовый review-пакет. Он не меняет карточку, не повышает статус verified и не запускает публикацию.'));

      const fallback = node('label', 'review-fallback');
      fallback.hidden = true;
      fallback.dataset.reviewFallback = 'true';
      fallback.append(node('b', '', 'Скопируйте пакет вручную'));
      const fallbackText = node('textarea');
      fallbackText.readOnly = true;
      fallbackText.rows = 8;
      fallbackText.dataset.reviewFallbackText = 'true';
      fallback.append(fallbackText, node('small', '', 'Текст уже выделен. Нажмите Ctrl/Cmd+C.'));

      const footer = node('footer', 'review-footer');
      const meta = node('div', 'review-footer-meta');
      const progressText = node('b', '', '');
      progressText.dataset.reviewProgress = 'true';
      const status = node('span', '', '');
      status.dataset.reviewStatus = 'true';
      status.setAttribute('aria-live', 'polite');
      meta.append(progressText, status);
      const copy = node('button', 'review-copy', 'Скопировать review-пакет');
      copy.type = 'button';
      copy.dataset.reviewCopy = 'true';
      const download = node('button', 'review-download', 'Скачать JSON');
      download.type = 'button';
      download.dataset.reviewDownload = 'true';
      const actions = node('div', 'review-footer-actions');
      actions.append(download, copy);
      footer.append(meta, actions);

      body.append(intro, snapshot, checklist, outcome, noteLabel, gate, fallback, footer);
      root.append(header, body);
      updateState();
    }

    function open(nextResource, trigger = null) {
      const id = safeText(nextResource?.id, 120);
      if (!id) {
        notify('Не удалось открыть review: у карточки нет стабильного ID.');
        return;
      }
      resource = nextResource;
      draft = normalizeDraft(drafts.get(id), id);
      returnFocus = trigger instanceof HTMLElement ? trigger : document.activeElement;
      render();
      root.hidden = false;
      document.body.classList.add('review-open');
      requestAnimationFrame(() => root.querySelector('[data-review-close]')?.focus({ preventScroll: true }));
    }

    function close() {
      if (root.hidden) return;
      root.hidden = true;
      document.body.classList.remove('review-open');
      const target = returnFocus;
      returnFocus = null;
      if (target instanceof HTMLElement && target.isConnected) target.focus({ preventScroll: true });
    }

    async function copyPacket() {
      if (!isReady(draft)) return;
      const text = JSON.stringify(createReviewPacket(resource, draft), null, 2);
      const fallback = root.querySelector('[data-review-fallback]');
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
        await navigator.clipboard.writeText(text);
        if (fallback) fallback.hidden = true;
        updateState('Review-пакет скопирован. Следующий gate — полный diff и отдельное подтверждение merge.');
        notify('Review-пакет скопирован. Каталог не изменён.');
      } catch (error) {
        const field = root.querySelector('[data-review-fallback-text]');
        if (fallback && field) {
          field.value = text;
          fallback.hidden = false;
          field.focus();
          field.select();
        }
        updateState('Автокопирование недоступно. Пакет показан ниже и выделен для ручного копирования.');
      }
    }

    function downloadPacket() {
      if (!isReady(draft)) return;
      const packet = JSON.stringify(createReviewPacket(resource, draft), null, 2);
      const blobUrl = URL.createObjectURL(new Blob([`${packet}\n`], { type: 'application/json' }));
      const link = node('a');
      link.href = blobUrl;
      const filenameId = (safeText(resource.id, 80) || 'resource').replace(/[^a-z0-9._-]+/gi, '-');
      link.download = `eclipse-library-review-${filenameId}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(blobUrl);
      updateState('JSON скачан. Для preview нужен отдельный unified diff и полный SHA базового commit.');
      notify('Review-пакет скачан. Каталог не изменён.');
    }

    root.addEventListener('input', (event) => {
      const note = event.target.closest('[data-review-note]');
      if (!note || !draft) return;
      draft.note = boundedNote(note.value);
      if (note.value !== draft.note) note.value = draft.note;
      persist();
      updateState();
    });

    root.addEventListener('change', (event) => {
      if (!draft) return;
      const check = event.target.closest('[data-review-check]');
      if (check && CHECK_IDS.has(check.dataset.reviewCheck)) draft.checks[check.dataset.reviewCheck] = check.checked === true;
      const outcome = event.target.closest('[data-review-outcome]');
      if (outcome && Object.hasOwn(OUTCOMES, outcome.value)) draft.outcome = outcome.value;
      persist();
      updateState();
    });

    root.addEventListener('click', (event) => {
      if (event.target.closest('[data-review-close]')) { close(); return; }
      if (event.target.closest('[data-review-clear]')) {
        if (!draft || !confirmAction(`Очистить локальный review-черновик «${safeText(resource?.title, 120)}»?`)) return;
        drafts.delete(resource.id);
        try { storage.setItem(STORAGE_KEY, JSON.stringify([...drafts.values()].slice(-STORAGE_LIMIT))); storageAvailable = true; }
        catch (error) { storageAvailable = false; }
        draft = emptyDraft(resource.id);
        render();
        root.querySelector('[data-review-clear]')?.focus({ preventScroll: true });
        notify('Локальный review-черновик очищен.');
        return;
      }
      if (event.target.closest('[data-review-copy]')) copyPacket();
      if (event.target.closest('[data-review-download]')) downloadPacket();
    });

    root.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(); return; }
      if (event.key !== 'Tab') return;
      const focusable = [...root.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])')].filter((item) => !item.hidden);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });

    return Object.freeze({ open, close, isOpen: () => !root.hidden });
  }

  window.EclipseCatalogReview = Object.freeze({
    CHECKS,
    OUTCOMES,
    NOTE_LIMIT,
    createController,
    createReviewPacket,
    emptyDraft,
    isReady,
    normalizeDraft,
    safeHttpUrl,
  });
})();
