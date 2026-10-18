import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resultState } from '../web/library-mascot.mjs';
test('only real counted result maps to a reaction', () => {
  assert.equal(resultState({ active: true, count: 2 }), 'found');
  assert.equal(resultState({ active: true, count: 0 }), 'empty');
  assert.equal(resultState({ active: false, count: 99 }), 'welcome');
  for (const input of [null, {}, { active: true }, { active: true, count: -1 }, { active: true, count: NaN }, { active: 'true', count: 1 }, { active: true, count: 1.5 }]) assert.equal(resultState(input), null);
});
test('preview is opt-in; event never exposes raw query or changes catalog', () => {
  const js = readFileSync(new URL('../web/library-mascot.mjs', import.meta.url), 'utf8');
  const app = readFileSync(new URL('../web/app.js', import.meta.url), 'utf8');
  assert.match(js, /get\('mascot'\) === 'preview'/);
  assert.match(app, /detail: \{ active: Boolean\(q\), count: matched \}/);
  assert.doesNotMatch(js, /fetch\(|requestAnimationFrame\(|setInterval\(|pointermove|mousemove/);
  assert.match(js, /visibilitychange/);
  assert.match(js, /reduced.addEventListener\('change'/);
});
test('local sketch assets match A-40 snapshot and contain no active/external content', () => {
  const root = new URL('../web/assets/mascots/library-list-v0.1.0/', import.meta.url);
  const provenance = JSON.parse(readFileSync(new URL('provenance.json', root)));
  assert.equal(provenance.status, 'local-vector-sketches');
  assert.equal(Object.keys(provenance.files).length, 5);
  for (const [file, sha] of Object.entries(provenance.files)) {
    const data = readFileSync(new URL(file, root));
    assert.equal(createHash('sha256').update(data).digest('hex'), sha);
    assert.doesNotMatch(data.toString(), /<script|<foreignObject|\bon\w+=|(?:href|src)=|url\(/i);
  }
});
