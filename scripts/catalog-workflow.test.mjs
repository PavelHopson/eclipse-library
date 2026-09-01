import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const source = fs.readFileSync(path.join(root, 'web', 'catalog-workflow.js'), 'utf8');
const context = { window: {}, Date, JSON, Object, Set, Number };
vm.runInNewContext(source, context, { filename: 'catalog-workflow.js' });
const workflow = context.window.EclipseCatalogWorkflow;

test('workflow fails closed on malformed local data', () => {
  assert.deepEqual(JSON.parse(JSON.stringify(workflow.sanitize(null))), { schemaVersion: 1, items: {} });
  const clean = workflow.sanitize({ schemaVersion: 1, items: {
    'javascript:alert(1)': { status: 'adopted', note: 'x' },
    'https://example.com/tool': { status: 'owner', note: '<b>plain local text</b>', updatedAt: 'bad' },
  } });
  assert.equal(clean.items['javascript:alert(1)'], undefined);
  assert.equal(clean.items['https://example.com/tool'].status, '');
  assert.equal(clean.items['https://example.com/tool'].note, '<b>plain local text</b>');
  assert.equal(clean.items['https://example.com/tool'].updatedAt, '');
});

test('workflow keeps bounded status and journal data', () => {
  const key = 'https://example.com/tool';
  const started = workflow.update(workflow.empty(), key, { status: 'active', note: ' Проверить permissions. ' }, '2026-09-01T12:00:00.000Z');
  assert.equal(workflow.get(started, key).status, 'active');
  assert.equal(workflow.get(started, key).note, 'Проверить permissions.');
  assert.equal(workflow.counts(started).active, 1);
  assert.equal(workflow.entries(workflow.update(started, key, { status: '', note: '' })).length, 0);
});

test('workflow storage round-trip never executes or expands records', () => {
  const values = new Map();
  const storage = { getItem: (key) => values.get(key) || null, setItem: (key, value) => values.set(key, value) };
  const key = 'https://example.com/tool';
  const state = workflow.update(workflow.empty(), key, { status: 'adopted', note: 'Готово' }, '2026-09-01T12:00:00.000Z');
  workflow.save(storage, 'workflow', state);
  assert.equal(workflow.load(storage, 'workflow').items[key].status, 'adopted');
  assert.ok(values.get('workflow').length < 500);
});
