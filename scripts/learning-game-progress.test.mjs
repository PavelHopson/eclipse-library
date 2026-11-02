import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { webcrypto } from 'node:crypto';
import vm from 'node:vm';
const require = createRequire(import.meta.url), R = require('../web/learning-games.js'), P = require('../web/learning-game-progress.js');
const fixture = name => JSON.parse(readFileSync(new URL('../web/learning-examples/' + name + '.json', import.meta.url), 'utf8'));
const quiz = () => fixture('quiz');
const escape = () => ({ title: 'Квест', description: 'Описание', type: 'ESCAPE_ROOM', escapeRoomData: { startSceneId: 'start', scenes: [{ id: 'start', title: 'Начало', description: 'Предмет', itemFound: 'ключ', choices: [{ text: 'Круг', nextSceneId: 'start' }, { text: 'Выход', nextSceneId: 'end', requiredItem: 'ключ' }] }, { id: 'end', title: 'Конец', description: 'Готово', choices: [] }] } });
const memory = () => { const map = new Map(); return { getItem: k => map.get(k) ?? null, setItem: (k, v) => map.set(k, v) }; };
const roundtrip = e => P.importBundle(P.exportBundle(e));
test('published quiz supports selection, checked answers and complete results roundtrip without double score', async () => {
  let e = await P.createEntry(quiz()), q = e.game.quizData[0];
  e = P.withProgress(e, e.state, q.options[0].id); assert.deepEqual(await roundtrip(e), e);
  e = P.withProgress(e, R.answerQuiz(e.game, e.state, e.selected));
  assert.equal(e.selected, null); e = await roundtrip(e);
  assert.equal(R.quizResult(e.game, e.state).answered, 1);
  assert.equal(R.answerQuiz(e.game, e.state, q.options[0].id), e.state);
  while (!e.state.complete) {
    if (e.state.answers.length === e.state.index) e = P.withProgress(e, R.answerQuiz(e.game, e.state, e.game.quizData[e.state.index].options[0].id));
    e = P.withProgress(e, R.nextQuiz(e.game, e.state));
  }
  assert.deepEqual((await roundtrip(e)).state, e.state);
});
test('escape pickup, terminal and exact 512-step state replay roundtrip without extra move', async () => {
  let e = await P.createEntry(escape()); assert.deepEqual(e.state.inventory, ['ключ']);
  for (let i = 0; i < 511; i++) e = P.withProgress(e, R.moveEscape(e.game, e.state, 0));
  const cycle = P.withProgress(e, R.moveEscape(e.game, e.state, 0));
  assert.deepEqual((await roundtrip(cycle)).state, cycle.state);
  e = P.withProgress(e, R.moveEscape(e.game, e.state, 1));
  const restored = await roundtrip(e); assert.equal(restored.state.ended, true); assert.equal(restored.state.history.length, 512);
  assert.throws(() => R.moveEscape(restored.game, restored.state, 0));
});
test('content identity uses canonical game, not title or source property order', async () => {
  const g = quiz(), a = await P.createEntry(g), b = await P.createEntry({ quizData: g.quizData, type: g.type, description: g.description, title: g.title });
  assert.equal(a.id, b.id); g.description += ' другая'; assert.notEqual((await P.createEntry(g)).id, a.id);
});
test('forged progress, ID, selection, proto and altered content are rejected', async () => {
  const e = await P.createEntry(quiz()), raw = P.exportBundle(e);
  for (const change of [b => b.id = '0'.repeat(64), b => b.game.description += 'changed', b => b.state.complete = true, b => b.state.index = 99, b => b.state.extra = 1, b => b.selected = 'missing', b => b.schemaVersion = 2, b => delete b.selected]) {
    const b = JSON.parse(raw); change(b); await assert.rejects(P.importBundle(b));
  }
  await assert.rejects(P.importBundle('{"__proto__":{}}'));
  const x = await P.createEntry(escape()), b = JSON.parse(P.exportBundle(x)); b.state.inventory = ['forged']; await assert.rejects(P.importBundle(b));
  b.state = x.state; b.selected = 'x'; await assert.rejects(P.importBundle(b));
  const checked = R.answerQuiz(e.game, e.state, e.game.quizData[0].options[0].id); assert.throws(() => P.withProgress(e, checked, e.game.quizData[0].options[0].id));
});
test('reload collection preserves selected answer and completed escape; corrupt collection stays untouched', async () => {
  const storage = memory(); let q = await P.createEntry(quiz()), e = await P.createEntry(escape());
  q = P.withProgress(q, q.state, q.game.quizData[0].options[0].id); e = P.withProgress(e, R.moveEscape(e.game, e.state, 1));
  const saved = await P.saveCollection(storage, [q, e], null); assert.equal(saved.ok, true);
  const loaded = await P.loadCollection(storage); assert.deepEqual(loaded.entries, [q, e]); assert.equal(loaded.revision, 1);
  assert.deepEqual(P.withProgress(loaded.entries[0], loaded.entries[0].state, loaded.entries[0].selected), q);
  storage.setItem(P.STORAGE_KEY, '{corrupt'); const bad = await P.loadCollection(storage); assert.equal(bad.code, 'CORRUPT');
  assert.equal((await P.saveCollection(storage, [q], bad.raw)).code, 'CORRUPT'); assert.equal(storage.getItem(P.STORAGE_KEY), '{corrupt');
});
test('five entry limit and duplicates never evict older games', async () => {
  const storage = memory(), entries = [];
  for (let i = 0; i < 6; i++) { const g = quiz(); g.description += i; entries.push(await P.createEntry(g)); }
  const saved = await P.saveCollection(storage, entries.slice(0, 5), null); assert.equal(saved.ok, true);
  assert.equal((await P.saveCollection(storage, entries, saved.raw)).code, 'LIMIT');
  assert.equal((await P.saveCollection(storage, [entries[0], entries[0]], saved.raw)).ok, false);
  assert.equal(storage.getItem(P.STORAGE_KEY), saved.raw);
});
test('quota, blocked storage and both stale-write checks report errors without losing export', async () => {
  const e = await P.createEntry(quiz()), storage = memory(), saved = await P.saveCollection(storage, [e], null);
  assert.equal((await P.saveCollection(storage, [e], null)).code, 'CONFLICT');
  let calls = 0, writes = 0; const racing = { getItem: () => ++calls === 1 ? saved.raw : 'changed', setItem() { writes++; } };
  assert.equal((await P.saveCollection(racing, [e], saved.raw)).code, 'CONFLICT'); assert.equal(writes, 0);
  const quota = { getItem: () => null, setItem() { const error = new Error(); error.name = 'QuotaExceededError'; throw error; } };
  assert.equal((await P.saveCollection(quota, [e], null)).code, 'QUOTA');
  const denied = { getItem() { throw Error('blocked'); } }; assert.equal((await P.loadCollection(denied)).code, 'STORAGE_UNAVAILABLE');
  assert.equal((await P.saveCollection(denied, [e], null)).code, 'STORAGE_UNAVAILABLE'); assert.equal((await roundtrip(e)).id, e.id);
});
test('oversized bundle and unsupported object properties fail before import', async () => {
  await assert.rejects(P.importBundle(' '.repeat(P.MAX_BUNDLE_BYTES + 1)));
  const e = await P.createEntry(quiz()), b = JSON.parse(P.exportBundle(e)); b.extra = true; await assert.rejects(P.importBundle(b));
  const altered = Object.assign(Object.create({ hidden: true }), b); await assert.rejects(P.importBundle(altered));
});
test('UMD loads with native crypto and published escape fixture exports independently', async () => {
  const context = vm.createContext({ TextEncoder, crypto: webcrypto });
  for (const file of ['learning-games.js', 'learning-game-progress.js']) vm.runInContext(readFileSync(new URL('../web/' + file, import.meta.url), 'utf8'), context);
  context.raw = JSON.stringify(fixture('escape-room'));
  const result = await vm.runInContext('EclipseLearningGameProgress.createEntry(raw).then(e=>EclipseLearningGameProgress.exportBundle(e))', context);
  assert.equal((await P.importBundle(result)).game.type, 'ESCAPE_ROOM');
});
