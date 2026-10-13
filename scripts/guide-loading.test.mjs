import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../web/app.js', import.meta.url), 'utf8');
const start = source.indexOf('  async function openGuide(name) {');
const end = source.indexOf('  function closeGuide()', start);
assert.ok(start >= 0 && end > start);

async function load(responses) {
  const nodes = Object.fromEntries(['guideView', 'guideBody', 'guideTitle', 'guideToc', 'guideGh'].map(id => [id, {}]));
  const urls = [];
  const context = {
    $: selector => nodes[selector.slice(1)],
    closeItem() {}, closeCompare() {}, buildGuideToc() {},
    document: { body: { classList: { add() {} } } },
    REPO_URL: 'https://github.com/example/library', REPO: 'example/library',
    mdToHtml: text => `rendered:${text}`,
    async fetch(url) { urls.push(url); const next = responses.shift(); if (!next) throw new Error('Unexpected fetch'); return { ok: next.ok, text: async () => next.text }; },
  };
  vm.createContext(context);
  vm.runInContext(source.slice(start, end) + '\nglobalThis.load = openGuide;', context);
  await context.load('rea-owned-application-analysis');
  return { nodes, urls };
}

test('local guide is rendered without external fallback', async () => {
  const { nodes, urls } = await load([{ ok: true, text: '# Local guide' }]);
  assert.equal(urls.length, 1);
  assert.equal(nodes.guideBody.innerHTML, 'rendered:# Local guide');
});
test('missing local guide uses successful upstream response', async () => {
  const { nodes, urls } = await load([{ ok: false }, { ok: true, text: '# Published guide' }]);
  assert.equal(urls.length, 2);
  assert.equal(nodes.guideTitle.textContent, 'Published guide');
});
test('upstream 404 is an error, never rendered as guide content', async () => {
  const { nodes } = await load([{ ok: false }, { ok: false, text: '404: Not Found' }]);
  assert.match(nodes.guideBody.innerHTML, /Гайд не найден/);
  assert.doesNotMatch(nodes.guideBody.innerHTML, /404/);
});
