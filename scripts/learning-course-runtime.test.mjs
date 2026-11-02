import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { webcrypto } from 'node:crypto';
import vm from 'node:vm';
const R = createRequire(import.meta.url)('../web/learning-course-runtime.js');
const fixture = () => ({ title: 'Курс', summary: 'Учимся локально', level: 'Начальный', modules: [{ title: 'Основы', lessons: [{ heading: 'Первый', content: 'Текст <b>как текст</b>', example: 'Пример' }, { heading: 'Второй', content: 'Проверка' }], quiz: [{ question: 'Как?', answer: 'Так' }] }] });
const memory = () => { const map = new Map(); return { getItem: k => map.get(k) ?? null, setItem: (k, v) => map.set(k, v) }; };
async function entry(data = fixture()) { const e = await R.parseCourse(data); return { ...e, progress: R.initialProgress(e) }; }

test('published course example preserves four lesson marks through portable bundle', async () => {
  const e = await R.parseCourse(readFileSync(new URL('../web/learning-examples/course.json', import.meta.url), 'utf8'));
  let p = R.initialProgress(e);
  for (const ref of ['0:0', '0:1', '1:0', '1:1']) p = R.completeLesson(e, p, ref);
  p = R.setCurrent(e, p, '1:1');
  const restored = await R.importBundle(R.exportBundle(e, p));
  assert.equal(restored.progress.completed.length, 4);
  assert.equal(restored.progress.current, '1:1');
  assert.equal(restored.course.modules.length, 2);
});
test('canonical content SHA is stable across property order and distinct for same title different content', async () => {
  const a = fixture(), b = { modules: a.modules, level: a.level, summary: a.summary, title: a.title };
  const e = await R.parseCourse(a); assert.equal((await R.parseCourse(b)).id, e.id);
  b.summary = 'Другая версия'; assert.notEqual((await R.parseCourse(b)).id, e.id);
  assert.ok(Object.isFrozen(e.course.modules[0].lessons));
});
test('progress and bundle roundtrip preserve current lesson and self marks through storage reload', async () => {
  const e = await R.parseCourse(fixture()), initial = R.initialProgress(e);
  let p = R.completeLesson(e, initial, '0:0'); p = R.setCurrent(e, p, '0:1');
  assert.deepEqual(initial.completed, []);
  const restored = await R.importBundle(R.exportBundle(e, p)); assert.deepEqual(restored.progress, p);
  const storage = memory(), first = await R.saveCollection(storage, [restored], null);
  assert.equal(first.ok, true); assert.equal(first.revision, 1);
  const loaded = await R.loadCollection(storage); assert.equal(loaded.error, null); assert.deepEqual(loaded.entries[0], restored);
  assert.equal(R.completeLesson(loaded.entries[0], p, '0:0', false).completed.length, 0);
});
test('bundle rejects wrong IDs, altered course, invalid version and cross-course lesson references', async () => {
  const e = await R.parseCourse(fixture()), raw = R.exportBundle(e, R.initialProgress(e));
  for (const change of [b => b.id = '0'.repeat(64), b => b.course.summary = 'Изменён', b => b.schemaVersion = 2, b => b.progress.current = '9:0', b => b.progress.completed = ['0:0', '0:0'], b => b.progress.completed = ['2:0'], b => b.progress.extra = true]) {
    const b = JSON.parse(raw); change(b); await assert.rejects(R.importBundle(b));
  }
});
test('schema rejects extra/proto/accessor fields and collection bounds', async () => {
  for (const change of [c => c.extra = true, c => c.modules[0].lessons[0].imageUrl = 'https://example.com', c => c.modules = [], c => c.modules[0].lessons = [], c => c.level = 7, c => c.modules[0].quiz[0].extra = 1, c => c.title = '\u0000bad']) {
    const c = fixture(); change(c); await assert.rejects(R.parseCourse(c));
  }
  await assert.rejects(R.parseCourse('{"__proto__":{},"title":"x"}'));
  await assert.rejects(R.parseCourse(Object.assign(Object.create({ hidden: true }), fixture())));
  const c = fixture(); Object.defineProperty(c, 'title', { get() { throw Error('getter called'); }, enumerable: true }); await assert.rejects(R.parseCourse(c), /небезопасное/);
  const big = fixture(); big.modules = Array.from({ length: 20 }, () => ({ title: 'm', lessons: Array.from({ length: 6 }, () => ({ heading: 'h', content: 'c' })) })); await assert.rejects(R.parseCourse(big), /100/);
});
test('raw byte bound and bundle separate budget reject overflow but allow near-limit course export', async () => {
  await assert.rejects(R.parseCourse(' '.repeat(R.MAX_BYTES + 1)));
  const c = fixture(); c.modules[0].lessons = Array.from({ length: 12 }, (_, i) => ({ heading: 'h' + i, content: 'x'.repeat(21000) }));
  const e = await R.parseCourse(c); await R.importBundle(R.exportBundle(e, R.initialProgress(e)));
  c.modules[0].lessons.push({ heading: 'overflow', content: 'x'.repeat(21000) }); await assert.rejects(R.parseCourse(c), /размер/);
  await assert.rejects(R.importBundle(' '.repeat(R.MAX_BUNDLE_BYTES + 1)));
});
test('five-course collection never autoevicts and duplicates cannot replace progress accidentally', async () => {
  const storage = memory(), values = [];
  for (let i = 0; i < 6; i++) { const c = fixture(); c.summary += i; values.push(await entry(c)); }
  const save = await R.saveCollection(storage, values.slice(0, 5), null); assert.equal(save.ok, true);
  const over = await R.saveCollection(storage, values, save.raw); assert.equal(over.code, 'LIMIT'); assert.equal(storage.getItem(R.STORAGE_KEY), save.raw);
  const dup = await R.saveCollection(storage, [values[0], values[0]], save.raw); assert.equal(dup.ok, false); assert.equal(storage.getItem(R.STORAGE_KEY), save.raw);
  const removed = await R.saveCollection(storage, values.slice(1, 5), save.raw); assert.equal(removed.ok, true); assert.equal((await R.loadCollection(storage)).entries.length, 4);
});
test('corruption is reported and never overwritten including valid-looking altered fingerprint', async () => {
  const storage = memory(); storage.setItem(R.STORAGE_KEY, '{bad');
  const loaded = await R.loadCollection(storage); assert.equal(loaded.code, 'CORRUPT'); assert.equal(loaded.raw, '{bad');
  const save = await R.saveCollection(storage, [await entry()], loaded.raw); assert.equal(save.code, 'CORRUPT'); assert.equal(storage.getItem(R.STORAGE_KEY), '{bad');
  const other = memory(), good = await R.saveCollection(other, [await entry()], null), data = JSON.parse(good.raw); data.entries[0].course.title = 'Подмена'; other.setItem(R.STORAGE_KEY, JSON.stringify(data));
  assert.equal((await R.loadCollection(other)).code, 'CORRUPT');
});
test('quota and blocked storage produce actionable errors and preserve in-memory export', async () => {
  const e = await R.parseCourse(fixture()), values = [{ ...e, progress: R.initialProgress(e) }];
  const quota = { getItem: () => null, setItem() { const error = new Error(); error.name = 'QuotaExceededError'; throw error; } };
  assert.equal((await R.saveCollection(quota, values, null)).code, 'QUOTA');
  const denied = { getItem() { throw Error('denied'); } };
  assert.equal((await R.loadCollection(denied)).code, 'STORAGE_UNAVAILABLE');
  assert.equal((await R.saveCollection(denied, values, null)).code, 'STORAGE_UNAVAILABLE');
  assert.equal((await R.importBundle(R.exportBundle(e, values[0].progress))).id, e.id);
});
test('stale raw and changes during async validation fail conflict without overwriting', async () => {
  const storage = memory(), values = [await entry()];
  const first = await R.saveCollection(storage, values, null); assert.equal((await R.saveCollection(storage, values, null)).code, 'CONFLICT');
  let reads = 0, written = false;
  const racing = { getItem() { return ++reads === 1 ? first.raw : 'other-tab'; }, setItem() { written = true; } };
  assert.equal((await R.saveCollection(racing, values, first.raw)).code, 'CONFLICT'); assert.equal(written, false);
});
test('browser UMD uses native SHA-256 without network', async () => {
  const context = vm.createContext({ TextEncoder, crypto: webcrypto }); vm.runInContext(readFileSync(new URL('../web/learning-course-runtime.js', import.meta.url), 'utf8'), context);
  context.raw = JSON.stringify(fixture()); const id = await vm.runInContext('EclipseLearningCourses.parseCourse(raw).then(e=>e.id)', context);
  assert.equal(id, (await R.parseCourse(fixture())).id);
});

test('Markdown export includes all course content and keeps portable progress unchanged', async () => {
  const data = fixture();
  data.modules.push({ title: 'Практика', lessons: [{ heading: 'Третий', content: 'Самостоятельная работа' }] });
  const e = await R.parseCourse(data), p = R.completeLesson(e, R.initialProgress(e), '0:0');
  const bundle = R.exportBundle(e, p), restored = await R.importBundle(bundle);
  const md = R.courseToMarkdown(restored);
  for (const expected of ['# Курс', 'Уровень: Начальный', 'Учимся локально', '## 1. Основы', '### Первый', '### Второй', 'Пример:', '```text\nПример\n```', 'Вопрос 1: Как?', 'Ответ: Так', '## 2. Практика', '### Третий', 'Самостоятельная работа']) assert.ok(md.includes(expected), expected);
  assert.equal(md, R.courseToMarkdown(e));
  assert.equal(R.exportBundle(restored, restored.progress), bundle);
});

test('Markdown export treats imported HTML, links, headings and markup as plain text', async () => {
  const data = fixture();
  data.title = 'Title\n# forged';
  data.level = 'level\r\n## forged';
  data.modules[0].title = 'Module\t---';
  data.modules[0].lessons[0].heading = 'Lesson\n<script>alert(1)</script>';
  data.summary = '<img src=x onerror=alert(1)> &amp;';
  data.modules[0].lessons[0].content = '[click](javascript:alert(1))\n![image](https://example.com/track)\n<a href="https://example.com">link</a>\n# Heading\n---\nhttps://example.com\nname@example.com\n**bold** | ~strike~';
  data.modules[0].quiz[0] = { question: '<script>ask()</script>', answer: '[link](javascript:alert(1))' };
  const e = await R.parseCourse(data), md = R.courseToMarkdown(e);
  assert.ok(md.includes('# Title \\# forged'));
  assert.ok(md.includes('Уровень: level \\#\\# forged'));
  assert.ok(md.includes('&lt;img src=x onerror=alert\\(1\\)&gt; &amp;amp;'));
  assert.ok(md.includes('\\[click\\]\\(javascript\\:alert\\(1\\)\\)'));
  assert.ok(md.includes('\\!\\[image\\]\\(https\\://example\\.com/track\\)'));
  assert.ok(md.includes('https\\://example\\.com'));
  assert.ok(md.includes('name\\@example\\.com'));
  assert.ok(md.includes('\\*\\*bold\\*\\* \\| \\~strike\\~'));
  assert.ok(!md.includes('<script>')); assert.ok(!md.includes('<img'));
  assert.ok(!md.includes('\n# forged')); assert.ok(!md.includes('\n---'));
  assert.deepEqual(e.course, data);
});

test('example fence always exceeds embedded backtick runs and preserves literal examples', async () => {
  const data = fixture();
  data.modules[0].lessons[0].example = 'before\n```\n<script>alert(1)</script>\n`````\n[link](javascript:alert(1))\nafter';
  const md = R.courseToMarkdown(await R.parseCourse(data));
  assert.ok(md.includes('``````text\n' + data.modules[0].lessons[0].example + '\n``````'));
  assert.equal((md.match(/^``````(?:text)?$/gm) || []).length, 2);
});

test('Markdown requires a validated runtime entry, including entries restored from storage', async () => {
  const e = await R.parseCourse(fixture());
  for (const value of [null, undefined, { ...e }, { course: fixture() }, JSON.parse(JSON.stringify(e))]) assert.throws(() => R.courseToMarkdown(value), /Сначала загрузите курс/);
  const storage = memory();
  await R.saveCollection(storage, [{ ...e, progress: R.initialProgress(e) }], null);
  const loaded = await R.loadCollection(storage);
  assert.equal(R.courseToMarkdown(loaded.entries[0]), R.courseToMarkdown(e));
});
