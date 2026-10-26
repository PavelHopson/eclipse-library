import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import { detailShardName } from './build-catalog-runtime.mjs';

const read = (path) => JSON.parse(readFileSync(new URL('../' + path, import.meta.url), 'utf8'));
const id = 'scenario-3d-collection';
const items = read('catalog/resources.json').items;
const entry = items.find((item) => item.id === id);

test('Scenario is one dataset record with bounded verification and attribution', () => {
  assert.equal(items.filter((item) => item.url.replace(/\/$/, '') === entry.url).length, 1);
  assert.equal(entry.type, 'media');
  assert.equal(entry.verifiedAt, '2026-10-26');
  assert.equal(entry.verification.runtimeTested, false);
  assert.equal(entry.verification.installed, false);
  assert.equal(Object.values(entry.verification.dataset.formats).reduce((a, b) => a + b, 0), 1500);
  assert.match(entry.license, /CC BY 4.0/);
  assert.match(entry.quickStart.join(' '), /Scenario.*ID.*URL.*Изменения/);
  assert.match(entry.quickStart.join(' '), /Get-FileHash/);
  assert.match(entry.risks.join(' '), /Hunyuan/);
  assert.deepEqual(entry.projects, []);
  assert.doesNotMatch(JSON.stringify(entry), /IDEA-\d+|codex:\/\/threads|поручен.*агент/);
});

test('Scenario is searchable and all generated views retain its evidence', () => {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(readFileSync(new URL('../web/catalog-search.js', import.meta.url), 'utf8'), context);
  const search = context.window.EclipseCatalogSearch;
  const summary = read('web/catalog-summary.json').items.find((item) => item.id === id);
  assert.ok(summary);
  const haystack = [summary.title, summary.simpleDescription, summary.category, summary.subcategory].join(' ');
  for (const query of ['Scenario', '3D ассеты', 'GLB']) {
    assert.equal(search.matches(haystack, search.createQueryPlan(query)), true, query);
  }
  const full = read('web/catalog-index.json').items.find((item) => item.id === id);
  assert.equal(full.licenseInfo.spdx, 'CC-BY-4.0');
  assert.equal(full.agentEligibility.installAllowed, false);
  assert.equal(full.evidence.length, 3);
  const shard = read('web/catalog-details/' + detailShardName(id) + '.json');
  assert.deepEqual(shard.items.find((item) => item.id === id).quickStart, entry.quickStart);
  const exported = read('web/api/v1/catalog.json');
  assert.ok(exported.items.some((item) => item.id === id));
});

test('CC BY content is not labelled as service terms or software in the card filter', () => {
  const app = readFileSync(new URL('../web/app.js', import.meta.url), 'utf8');
  const fn = app.match(/function licenseGroup\(value\) \{[\s\S]*?\n  \}/)?.[0];
  assert.ok(fn);
  const context = {};
  vm.createContext(context);
  vm.runInContext(fn + '; result = [licenseGroup("CC-BY-4.0"), licenseGroup("CC BY 4.0"), licenseGroup("MIT"), licenseGroup("Условия сервиса")]', context);
  assert.deepEqual(Array.from(context.result), ['content', 'content', 'open', 'service']);
  assert.match(app, /content: 'Открытый контент \(CC BY 4\.0\)'/);
});
