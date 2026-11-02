import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const R = createRequire(import.meta.url)('../web/learning-games.js');
const quiz = () => ({ title: 'Тест', description: 'Локальная викторина', type: 'QUIZ', quizData: [0, 1].map(i => ({ id: 'q' + i, question: 'Вопрос ' + i, explanation: 'Пояснение', options: [{ id: 'a', text: 'Да', isCorrect: true }, { id: 'b', text: 'Нет', isCorrect: false }] })) });
const scene = (id, choices = [], itemFound) => ({ id, title: id, description: 'Описание', choices, ...(itemFound ? { itemFound } : {}) });
const choice = (nextSceneId, requiredItem) => ({ text: 'Перейти', nextSceneId, ...(requiredItem ? { requiredItem } : {}) });
const escape = () => ({ title: 'Квест', description: 'Описание квеста', type: 'ESCAPE_ROOM', escapeRoomData: { startSceneId: 'start', scenes: [scene('start', [choice('key'), choice('end', 'ключ')]), scene('key', [choice('start')], 'ключ'), scene('end')] } });

test('published examples validate and can reach their result', () => {
  const q = R.parseGame(readFileSync(new URL('../web/learning-examples/quiz.json', import.meta.url), 'utf8'));
  let quizState = R.initialQuiz(q);
  for (const question of q.quizData) quizState = R.nextQuiz(q, R.answerQuiz(q, quizState, question.options.find(o => o.isCorrect).id));
  assert.equal(R.quizResult(q, quizState).correct, q.quizData.length);
  const e = R.parseGame(readFileSync(new URL('../web/learning-examples/escape-room.json', import.meta.url), 'utf8'));
  let escapeState = R.initialEscape(e);
  for (const index of [0, 0, 1, 0]) escapeState = R.moveEscape(e, escapeState, index);
  assert.equal(escapeState.ended, true);
});

test('quiz checks are immutable and idempotent, next requires answer, result is computed', () => {
  const g = R.parseGame(JSON.stringify(quiz())), empty = R.initialQuiz(g);
  assert.throws(() => R.nextQuiz(g, empty));
  assert.throws(() => R.answerQuiz(g, empty, 'missing'));
  let s = R.answerQuiz(g, empty, 'a');
  assert.equal(R.answerQuiz(g, s, 'b'), s);
  assert.equal(empty.answers.length, 0);
  assert.equal(R.quizResult(g, s).correct, 1);
  s = R.nextQuiz(g, s); s = R.answerQuiz(g, s, 'b'); s = R.nextQuiz(g, s);
  assert.deepEqual(R.quizResult(g, s), { correct: 1, total: 2, answered: 2, complete: true });
  assert.equal(R.nextQuiz(g, s), s); assert.equal(R.answerQuiz(g, s, 'a'), s);
  assert.ok(Object.isFrozen(g.quizData[0].options)); assert.ok(Object.isFrozen(s.answers));
});
test('quiz rejects forged completion, invalid history and mismatched question IDs', () => {
  const g = R.parseGame(quiz()), s = R.initialQuiz(g);
  for (const bad of [{ ...s, complete: true }, { ...s, index: 99 }, { ...s, answers: [{ questionId: 'q1', optionId: 'a' }] }, { ...s, extra: 1 }]) assert.throws(() => R.quizResult(g, bad));
});
test('escape locked move, pickup, revisit and terminal work with bounded immutable history', () => {
  const g = R.parseGame(escape()), empty = R.initialEscape(g);
  assert.throws(() => R.moveEscape(g, empty, 1), /Нужен предмет/);
  let s = R.moveEscape(g, empty, 0); s = R.moveEscape(g, s, 0);
  assert.deepEqual(s.inventory, ['ключ']); assert.equal(empty.history.length, 0);
  s = R.moveEscape(g, s, 1); assert.equal(s.ended, true); assert.equal(s.sceneId, 'end');
  assert.throws(() => R.moveEscape(g, s, 0));
  assert.throws(() => R.moveEscape(g, { ...empty, inventory: ['ключ'] }, 1), /истории/);
  assert.throws(() => R.moveEscape(g, { ...empty, history: [1], sceneId: 'end', ended: true }, 0));
});
test('first scene grants its item before gates and route validation', () => {
  const data = escape(); data.escapeRoomData.scenes = [scene('start', [choice('end', 'ключ')], 'ключ'), scene('end')];
  const g = R.parseGame(data), s = R.initialEscape(g);
  assert.deepEqual(s.inventory, ['ключ']); assert.equal(R.moveEscape(g, s, 0).ended, true);
});
test('a single terminal is valid, cycles with an exit are valid but history is capped', () => {
  const data = escape(); data.escapeRoomData.scenes = [scene('start')];
  assert.equal(R.initialEscape(R.parseGame(data)).ended, true);
  data.escapeRoomData.scenes = [scene('start', [choice('start'), choice('end')]), scene('end')];
  const g = R.parseGame(data); let s = R.initialEscape(g);
  for (let i = 0; i < R.MAX_HISTORY; i++) s = R.moveEscape(g, s, 0);
  assert.throws(() => R.moveEscape(g, s, 1), /512/);
});
test('rejects unknown refs, unreachable scenes, missing items, deadlocked branch and terminal-free cycles', () => {
  const routes = [
    [scene('start', [choice('unknown')])],
    [scene('start'), scene('unreachable')],
    [scene('start', [choice('end', 'missing')]), scene('end')],
    [scene('start', [choice('loop'), choice('end')]), scene('loop', [choice('loop')]), scene('end')],
    [scene('start', [choice('start')])],
    [scene('start', [choice('key'), choice('end', 'ключ')]), scene('key', [choice('end', 'другой')], 'ключ'), scene('end')]
  ];
  for (const scenes of routes) { const data = escape(); data.escapeRoomData.scenes = scenes; assert.throws(() => R.parseGame(data)); }
});
test('strict schema rejects unsupported formats, image URLs, duplicate IDs and unknown fields', () => {
  const changes = [g => g.type = 'SIMULATION', g => g.extra = 'x', g => g.quizData[0].options[1].isCorrect = true, g => g.quizData[0].options[0].isCorrect = false, g => g.quizData[1].id = 'q0', g => g.quizData[0].options[1].id = 'a', g => g.quizData[0].options = [], g => g.quizData[0].options[0].isCorrect = 'true', g => g.escapeRoomData = {}];
  for (const change of changes) { const g = quiz(); change(g); assert.throws(() => R.parseGame(g)); }
  const e = escape(); e.escapeRoomData.scenes[0].imageUrl = 'https://example.com/x.png'; assert.throws(() => R.parseGame(e));
  assert.throws(() => R.parseGame('{"__proto__":{},"type":"QUIZ"}'));
  assert.throws(() => R.parseGame(Object.assign(Object.create({ hidden: true }), quiz())));
  const q = quiz(); Object.defineProperty(q, 'title', { get() { throw Error('getter called'); }, enumerable: true }); assert.throws(() => R.parseGame(q), /небезопасное/);
  assert.equal({}.polluted, undefined);
});
test('byte size, text and collection bounds reject abusive import', () => {
  assert.throws(() => R.parseGame(' '.repeat(R.MAX_BYTES + 1)), /128/);
  assert.throws(() => R.parseGame('{broken'));
  const q = quiz(); q.title = 'x'.repeat(201); assert.throws(() => R.parseGame(q));
  q.title = 'x'; q.quizData[0].question = '\u0000'; assert.throws(() => R.parseGame(q));
  const large = quiz(); large.quizData = Array.from({ length: 30 }, (_, i) => ({ ...quiz().quizData[0], id: 'q' + i, question: 'я'.repeat(4000) }));
  assert.throws(() => R.parseGame(large), /128/);
  const tooMany = quiz(); tooMany.quizData = Array.from({ length: 31 }, (_, i) => ({ ...quiz().quizData[0], id: 'q' + i })); assert.throws(() => R.parseGame(tooMany));
});
test('UMD browser entry works without network or module dependencies', () => {
  const context = vm.createContext({ TextEncoder }); vm.runInContext(readFileSync(new URL('../web/learning-games.js', import.meta.url), 'utf8'), context);
  assert.equal(typeof context.EclipseLearningGames.parseGame, 'function');
  context.raw = JSON.stringify(quiz());
  assert.equal(vm.runInContext('EclipseLearningGames.initialQuiz(EclipseLearningGames.parseGame(raw)).index', context), 0);
});
test('combinatorial inventory maps fail closed within bounded state exploration', { timeout: 3000 }, () => {
  const g = escape(), scenes = [];
  g.escapeRoomData.startSceneId = 'stage0';
  for (let i = 0; i < 13; i++) {
    const next = i === 12 ? 'end' : 'stage' + (i + 1);
    scenes.push(scene('stage' + i, [choice(next), choice('item' + i)]));
    scenes.push(scene('item' + i, [choice(next)], 'ключ' + i));
  }
  scenes.push(scene('end')); g.escapeRoomData.scenes = scenes;
  assert.throws(() => R.parseGame(g), /Слишком сложная карта/);
});
test('invalid array getters and prototype changes cannot execute during parsing', () => {
  const q = quiz(); Object.defineProperty(q.quizData, '0', { get() { throw Error('getter called'); } });
  assert.throws(() => R.parseGame(q), /массив/);
  const other = quiz(); Object.setPrototypeOf(other.quizData, {}); assert.throws(() => R.parseGame(other));
});
