import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const require = createRequire(import.meta.url);
const R = require('../web/learning-runtime.js');
const { courses } = require('../web/learning-content.js');
const course = courses[0], lesson = course.lessons[0];
const memory = () => { const values = new Map(); return { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) }; };
function filled(c = course) {
  let state = R.emptyProgress(c);
  for (const l of c.lessons) for (const f of l.fields) state = R.editAnswer(c, state, l.id, f.id, 'Проверенный учебный результат. '.repeat(Math.ceil(f.minLength / 25)));
  return state;
}
const deckFixture = () => ({ schemaVersion: 'deck.job.v1', id: 'synthetic-deck', status: 'approved', createdAt: '2026-11-02T10:00:00Z', updatedAt: '2026-11-02T10:00:00Z', input: { title: 'Учебный разбор', objective: 'Разобрать простой учебный пример.', audience: 'Начинающие', format: 'lesson', sourceText: 'Это вымышленный учебный материал без клиентских данных и секретов.', evidenceUrls: ['https://example.com/source'] }, policy: { externalActions: false, toolsAllowed: false, sourceContentTrusted: false, autoPublishAllowed: false, pptxRendered: false }, approval: { claimsVerified: true, rightsConfirmed: true, finalReviewComplete: true, approvedAt: '2026-11-02T10:00:00Z' }, slides: ['cover', 'content', 'summary'].map((kind, index) => ({ id: 'slide-' + index, kind, title: 'Слайд ' + (index + 1), bullets: ['Учебный тезис'], speakerNotes: 'Проверить понимание.', sourceRefs: [] })) });

test('four offline paths expose 12 valid distinct lessons, two practices and five-stage tracks', () => {
  assert.deepEqual(courses.map(c => c.id), ['practice-form', 'practice-support', 'github-onboarding', 'production-track']);
  assert.deepEqual(courses.map(c => c.lessons.length), [1, 1, 5, 5]);
  for (const c of courses) { const state = R.emptyProgress(c); assert.equal(Object.keys(state.lessons).length, c.lessons.length); assert.deepEqual(R.importProgress(c, R.exportProgress(c, state)), state); }
});
test('production evidence survives storage reload and JSON export/import, not only completion IDs', () => {
  const c = courses[3], storage = memory();
  let state = filled(c);
  state = R.setAssessment(c, state, c.lessons[0].id, [0, 1]);
  state = R.completeLesson(c, state, c.lessons[0].id);
  assert.deepEqual(R.saveProgress(c, state, storage), { ok: true, error: null });
  const loaded = R.loadProgress(c, storage);
  assert.equal(loaded.error, null); assert.deepEqual(loaded.state, state);
  assert.ok(loaded.state.lessons['vibe-coding'].answers['evidence-1'].length > 3);
  assert.deepEqual(R.importProgress(c, R.exportProgress(c, state)), state);
});
test('edits reset all self-assessment and completion without mutating previous state', () => {
  let state = filled();
  state = R.setAssessment(course, state, lesson.id, [0, 1, 2, 3]);
  state = R.completeLesson(course, state, lesson.id);
  const next = R.editAnswer(course, state, lesson.id, 'answer', 'Новый ответ');
  assert.equal(state.lessons[lesson.id].completed, true);
  assert.equal(next.lessons[lesson.id].completed, false);
  assert.deepEqual(next.lessons[lesson.id].assessment, []);
  assert.equal(R.validateLesson(lesson, next.lessons[lesson.id]).ok, false);
});
test('completion requires answers plus all explicit criteria; assessment edits reopen completion', () => {
  const empty = R.emptyProgress(course);
  assert.throws(() => R.completeLesson(course, empty, lesson.id));
  assert.throws(() => R.setAssessment(course, empty, lesson.id, [0]));
  const full = filled();
  assert.throws(() => R.completeLesson(course, full, lesson.id));
  const completed = R.completeLesson(course, R.setAssessment(course, full, lesson.id, [0, 1, 2, 3]), lesson.id);
  assert.equal(R.setAssessment(course, completed, lesson.id, [0]).lessons[lesson.id].completed, false);
});
test('strict progress import rejects wrong version/course/IDs/types/unknown keys and forged completion', () => {
  const base = filled();
  const invalid = [s => s.version = 2, s => s.courseId = 'other', s => s.extra = true, s => s.lessons.unknown = {}, s => delete s.lessons[lesson.id], s => s.lessons[lesson.id].answers.extra = 'bad', s => s.lessons[lesson.id].answers.answer = 42, s => s.lessons[lesson.id].assessment = [99], s => s.lessons[lesson.id].assessment = [0, 0], s => s.lessons[lesson.id].completed = true];
  for (const change of invalid) { const s = JSON.parse(JSON.stringify(base)); change(s); assert.throws(() => R.importProgress(course, JSON.stringify(s))); }
  assert.throws(() => R.importProgress(course, '{"__proto__":{"polluted":true}}'));
  assert.throws(() => R.importProgress(course, JSON.stringify(base).replace('"answer":', '"constructor":')));
  const withPrototype = Object.assign(Object.create({ hidden: true }), base);
  assert.throws(() => R.exportProgress(course, withPrototype));
  assert.equal({}.polluted, undefined);
});
test('bounds and control characters are rejected, HTML stays inert answer text', () => {
  assert.throws(() => R.editAnswer(course, filled(), lesson.id, 'answer', 'x'.repeat(8001)));
  assert.throws(() => R.editAnswer(course, filled(), lesson.id, 'answer', '\u0000bad'));
  assert.throws(() => R.importProgress(course, ' '.repeat(R.MAX_PROGRESS_BYTES + 1)));
  const state = R.editAnswer(course, filled(), lesson.id, 'answer', '<img src=x onerror=alert(1)>');
  assert.equal(R.importProgress(course, R.exportProgress(course, state)).lessons[lesson.id].answers.answer, '<img src=x onerror=alert(1)>');
});
test('storage failure is explicit, corrupted original is not overwritten by load', () => {
  let writes = 0;
  const broken = { getItem: () => '{broken', setItem: () => { writes++; } };
  assert.ok(R.loadProgress(course, broken).error); assert.equal(writes, 0);
  const denied = { getItem: () => { throw new Error('denied'); }, setItem: () => { throw new Error('quota'); } };
  assert.ok(R.loadProgress(course, denied).error);
  assert.equal(R.saveProgress(course, filled(), denied).ok, false);
  const storage = memory(); R.saveProgress(course, filled(), storage);
  assert.deepEqual(R.loadProgress(courses[1], storage).state, R.emptyProgress(courses[1]));
});
test('validated approved deck exports lesson notes and warns about self-declared approval', () => {
  const deck = R.parseApprovedDeckJob(JSON.stringify(deckFixture()));
  assert.equal(deck.slides.length, 3); assert.equal(deck.input.title, 'Учебный разбор');
  const md = R.deckToLessonMarkdown(deck);
  assert.match(md, /Проверить понимание/); assert.match(md, /не заменяют проверку преподавателем/);
});
test('deck rejects unsafe policy, URLs, approval, duplicate IDs, oversized and prototype structures', () => {
  const invalid = [d => d.policy.toolsAllowed = true, d => d.approval.finalReviewComplete = false, d => d.input.evidenceUrls = ['javascript:alert(1)'], d => d.input.evidenceUrls = ['https://user:pass@example.com'], d => d.slides[1].id = d.slides[0].id, d => d.slides = [], d => d.status = 'draft', d => d.extra = true, d => d.slides[0].html = '<script>bad</script>'];
  for (const change of invalid) { const d = deckFixture(); change(d); assert.throws(() => R.parseApprovedDeckJob(JSON.stringify(d))); }
  assert.throws(() => R.parseApprovedDeckJob('{"__proto__":{}}'));
  assert.throws(() => R.parseApprovedDeckJob(' '.repeat(128 * 1024 + 1)));
});
test('browser UMD installs globals without CommonJS or network', () => {
  const context = vm.createContext({ TextEncoder, URL });
  vm.runInContext(readFileSync(new URL('../web/learning-runtime.js', import.meta.url), 'utf8'), context);
  vm.runInContext(readFileSync(new URL('../web/learning-content.js', import.meta.url), 'utf8'), context);
  assert.equal(vm.runInContext('EclipseLearningRuntime.emptyProgress(EclipseLearningContent.courses[0]).version', context), 1);
  assert.equal(typeof context.fetch, 'undefined');
});

test('optional practicum goals preserve legacy version-one progress and survive portable restore', () => {
  for (const c of courses.slice(0, 2)) {
    const legacy = filled(c); delete legacy.goal;
    const loaded = R.importProgress(c, JSON.stringify(legacy));
    assert.equal(loaded.version, 1); assert.equal(loaded.goal, '');
    assert.deepEqual(loaded.lessons, legacy.lessons);
    const state = R.editGoal(c, loaded, 'Проверить повторную попытку без потери данных.');
    const storage = memory(); assert.equal(R.saveProgress(c, state, storage).ok, true);
    assert.deepEqual(R.loadProgress(c, storage).state, state);
    assert.deepEqual(R.importProgress(c, R.exportProgress(c, state)), state);
    assert.equal(loaded.goal, '');
  }
  for (const c of courses.slice(2)) {
    assert.equal(R.supportsGoal(c), false);
    assert.equal(Object.hasOwn(R.emptyProgress(c), 'goal'), false);
    assert.throws(() => R.editGoal(c, filled(c), 'Другая цель'), /только для практикумов/);
    assert.throws(() => R.importProgress(c, JSON.stringify({ ...filled(c), goal: '' })), /неизвестное поле/);
  }
});

test('goal bounds and types fail before a saved answer can be overwritten', () => {
  const storage = memory(), initial = R.editGoal(course, filled(), 'Прежняя цель');
  R.saveProgress(course, initial, storage);
  const raw = storage.getItem(R.storageKey(course));
  for (const goal of [null, 42, {}, undefined, 'x'.repeat(R.MAX_GOAL + 1), 'bad\u0000goal']) {
    assert.throws(() => R.editGoal(course, initial, goal));
    const invalid = { ...initial, goal };
    assert.equal(R.saveProgress(course, invalid, storage).ok, false);
    assert.equal(storage.getItem(R.storageKey(course)), raw);
  }
  for (const goal of ['', 'x'.repeat(R.MAX_GOAL), '<img src=x onerror=alert(1)>']) {
    assert.equal(R.importProgress(course, R.exportProgress(course, R.editGoal(course, initial, goal))).goal, goal);
  }
});

test('changing or clearing a goal keeps the completed answer and explicit self-assessment', () => {
  const completed = R.completeLesson(course, R.setAssessment(course, filled(), lesson.id, [0, 1, 2, 3]), lesson.id);
  const changed = R.editGoal(course, completed, 'Другой контекст для того же навыка');
  assert.deepEqual(changed.lessons, completed.lessons);
  assert.notEqual(changed.lessons, completed.lessons);
  assert.equal(changed.lessons[lesson.id].completed, true);
  assert.equal(completed.goal, '');
  assert.deepEqual(R.editGoal(course, changed, '').lessons, completed.lessons);
});

test('manual practicum planning supports only explicit directions and validates the goal', () => {
  assert.deepEqual(R.planPracticum('  Отработка ошибок формы  ', 'accessible-form'), { courseId: 'practice-form', goal: 'Отработка ошибок формы' });
  assert.deepEqual(R.planPracticum('Баланс обращений', 'support-analysis'), { courseId: 'practice-support', goal: 'Баланс обращений' });
  for (const focus of ['other', '', 'constructor', '__proto__', null]) assert.throws(() => R.planPracticum('Моя цель', focus), /пока нет/);
  for (const goal of ['', ' \n ', null, 17, 'x'.repeat(R.MAX_GOAL + 1), '\u0000']) assert.throws(() => R.planPracticum(goal, 'accessible-form'));
});

test('plain practicum report covers empty, partial and completed answers without claiming certification', () => {
  const emptyReport = R.practicumReport(course, R.emptyProgress(course));
  assert.match(emptyReport, /Не указана — свободная практика/);
  assert.match(emptyReport, /Ответ пока не заполнен/);
  assert.match(emptyReport, /Статус: Не завершён/);
  assert.match(emptyReport, /самооценка пользователя, не независимая проверка и не сертификат/);
  assert.equal((emptyReport.match(/\[ \]/g) || []).length, lesson.criteria.length);
  let partial = R.editGoal(course, filled(), 'Проверить доступность');
  partial = R.setAssessment(course, partial, lesson.id, [1]);
  const partialReport = R.practicumReport(course, partial);
  assert.match(partialReport, /Цель обучения: Проверить доступность/);
  assert.ok(partialReport.includes(partial.lessons[lesson.id].answers.answer));
  assert.ok(partialReport.includes('[x] ' + lesson.criteria[1]));
  assert.ok(partialReport.includes('[ ] ' + lesson.criteria[0]));
  assert.ok(partialReport.includes(lesson.transfer));
  const complete = R.completeLesson(course, R.setAssessment(course, partial, lesson.id, [0, 1, 2, 3]), lesson.id);
  assert.match(R.practicumReport(course, complete), /Завершён по самооценке/);
  assert.equal((R.practicumReport(course, complete).match(/\[x\]/g) || []).length, 4);
  const support = R.practicumReport(courses[1], filled(courses[1]));
  assert.ok(support.includes(courses[1].lessons[0].task));
  assert.throws(() => R.practicumReport(courses[2], filled(courses[2])), /только для практикумов/);
  assert.throws(() => R.practicumReport(course, { ...complete, courseId: 'practice-support' }));
});
