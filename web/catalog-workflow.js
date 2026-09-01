/* Local-only catalog workflow. No account, network request or catalog mutation. */
(() => {
  'use strict';

  const SCHEMA_VERSION = 1;
  const MAX_ITEMS = 500;
  const MAX_NOTE_LENGTH = 1200;
  const STATUSES = Object.freeze([
    Object.freeze({ id: 'backlog', label: 'Проверить' }),
    Object.freeze({ id: 'active', label: 'Изучаю' }),
    Object.freeze({ id: 'adopted', label: 'Внедрено' }),
    Object.freeze({ id: 'rejected', label: 'Не подходит' }),
  ]);
  const STATUS_IDS = new Set(STATUSES.map(({ id }) => id));

  const empty = () => ({ schemaVersion: SCHEMA_VERSION, items: {} });
  const validKey = (value) => typeof value === 'string' && /^https?:\/\/[^\s]+$/i.test(value) && value.length <= 2048;
  const cleanNote = (value) => typeof value === 'string' ? value.replace(/\r\n?/g, '\n').trim().slice(0, MAX_NOTE_LENGTH) : '';
  const cleanDate = (value) => {
    if (typeof value !== 'string' || !value || !Number.isFinite(Date.parse(value))) return '';
    return new Date(value).toISOString();
  };

  function sanitize(input) {
    const output = empty();
    if (!input || typeof input !== 'object' || input.schemaVersion !== SCHEMA_VERSION || !input.items || typeof input.items !== 'object') return output;
    Object.entries(input.items).slice(0, MAX_ITEMS).forEach(([key, value]) => {
      if (!validKey(key) || !value || typeof value !== 'object') return;
      const status = STATUS_IDS.has(value.status) ? value.status : '';
      const note = cleanNote(value.note);
      if (!status && !note) return;
      output.items[key] = { status, note, updatedAt: cleanDate(value.updatedAt) };
    });
    return output;
  }

  function load(storage, key) {
    try { return sanitize(JSON.parse(storage.getItem(key) || 'null')); }
    catch (error) { return empty(); }
  }

  function save(storage, key, state) {
    const clean = sanitize(state);
    storage.setItem(key, JSON.stringify(clean));
    return clean;
  }

  function get(state, key) {
    return sanitize(state).items[key] || { status: '', note: '', updatedAt: '' };
  }

  function update(state, key, patch, now = new Date().toISOString()) {
    const next = sanitize(state);
    if (!validKey(key)) return next;
    const current = next.items[key] || { status: '', note: '' };
    const status = patch && Object.hasOwn(patch, 'status') ? (STATUS_IDS.has(patch.status) ? patch.status : '') : current.status;
    const note = patch && Object.hasOwn(patch, 'note') ? cleanNote(patch.note) : current.note;
    if (!status && !note) delete next.items[key];
    else next.items[key] = { status, note, updatedAt: cleanDate(now) || new Date().toISOString() };
    return sanitize(next);
  }

  function entries(state) {
    return Object.entries(sanitize(state).items)
      .map(([key, value]) => ({ key, ...value }))
      .sort((a, b) => (Date.parse(b.updatedAt) || 0) - (Date.parse(a.updatedAt) || 0));
  }

  function counts(state) {
    const result = Object.fromEntries(STATUSES.map(({ id }) => [id, 0]));
    entries(state).forEach(({ status }) => { if (status) result[status] += 1; });
    return result;
  }

  window.EclipseCatalogWorkflow = Object.freeze({
    SCHEMA_VERSION, MAX_ITEMS, MAX_NOTE_LENGTH, STATUSES,
    empty, sanitize, load, save, get, update, entries, counts,
  });
})();
