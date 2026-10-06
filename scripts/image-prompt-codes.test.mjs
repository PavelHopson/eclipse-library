import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { filterEntries, expandedText, validateCodebook } from '../web/image-prompts.mjs';

const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');
const data = JSON.parse(await read('web/image-prompt-codes.json'));
// Independent acceptance fixture: labels supplied by the owner, checked against
// the source on 2026-10-06. No descriptions or examples copied from the article.
const control = `lowangle highangle eyelevel dutchangle OTS POV wormsview birdsview droneview isometric
closeup extremecloseup mediumshot fullbody wideframe symmetry centerframe ruleofthirds negativeSpace foregroundframe
cinematic filmstill anamorphic imax noir neonnoir vintagefilm 70scinema 80saction indiefilm
goldenhour bluehour hardlight softlight rimlight backlight silhouette chiaroscuro spotlight practicallight
producthero luxuryad applestyle billboard editorialad beautyshot floatingproduct macroproduct explodedview packshot
freezeaction motionblur speedramp midair impactframe windblown runningframe jumpcutframe collision chaosframe
impossibleangle gravityoff giantobject miniworld mirrorworld dreamlogic infinite portal scaleillusion realityshift
fashioneditorial streetphoto paparazzi polaroid 35mm mediumformat disposablecam contactsheet lookbook coverstory
BTS behindthescenes setphoto camerarig lightingrig directorview videovillage studiofloor beforeafter makingof
fisheye tinyplanet reflection throughglass underwater xraystyle thermal blueprint cutaway conceptart`.split(/\s+/).map(code => `/${code}`);

test('100 exact case-sensitive codes, sequence 01–100, ten groups of ten', () => {
  assert.equal(validateCodebook(data), data);
  assert.equal(new Set(data.entries.map(entry => entry.code)).size, 100);
  assert.deepEqual(data.entries.map(entry => entry.code), control);
  assert.deepEqual(data.entries.map(entry => String(entry.number).padStart(2, '0')), Array.from({ length: 100 }, (_, i) => String(i + 1).padStart(2, '0')));
  for (const group of data.groups) assert.equal(data.entries.filter(entry => entry.group === group.id).length, 10);
});
test('each record has Russian fields and a distinct concrete example', () => {
  for (const entry of data.entries) {
    for (const field of ['title', 'effect', 'when', 'example', 'limitation']) {
      assert.match(entry[field], /[А-Яа-яЁё]/, `${entry.code}.${field}`);
      assert.ok(entry[field].length >= (field === 'title' ? 3 : 20), `${entry.code}.${field} is too short`);
    }
  }
  assert.equal(new Set(data.entries.map(entry => entry.example)).size, 100);
});
test('search code, meaning, multiword, case and ё; combined filters and empty result', () => {
  assert.deepEqual(filterEntries(data.entries, data.groups, '/oTs').map(entry => entry.code), ['/OTS']);
  assert.ok(filterEntries(data.entries, data.groups, 'фокусное расстояние').some(entry => entry.code === '/35mm'));
  assert.ok(filterEntries(data.entries, data.groups, 'полный рост').some(entry => entry.code === '/fullbody'));
  assert.deepEqual(filterEntries(data.entries, data.groups, 'плёнка'), filterEntries(data.entries, data.groups, 'пленка'));
  assert.equal(filterEntries(data.entries, data.groups, '', 'light').length, 10);
  assert.equal(filterEntries(data.entries, data.groups, '/softlight', 'light').length, 1);
  assert.equal(filterEntries(data.entries, data.groups, '/softlight', 'angle').length, 0);
  assert.equal(filterEntries(data.entries, data.groups, '<img src=x onerror=alert(1)>').length, 0);
});
test('copy descriptions include example, limitation and not-a-command notice', () => {
  for (const entry of data.entries) {
    const copy = expandedText(entry);
    assert.ok(copy.includes(entry.code) && copy.includes(entry.example) && copy.includes(entry.limitation));
    assert.match(copy, /не команда генератора/);
  }
});
test('required ambiguities remain explicit', () => {
  const get = code => data.entries.find(entry => entry.code === code);
  assert.match(get('/35mm').limitation, /плёнки.*фокусное расстояние/);
  assert.match(get('/speedramp').limitation, /не создаёт реальное изменение скорости видео/);
  assert.match(get('/thermal').limitation, /не измерение/);
  assert.match(get('/xraystyle').limitation, /не физический/);
  assert.match(get('/contactsheet').limitation, /не гарантирует одинаковое лицо/);
});
test('broken payload fails closed: duplicate, missing, out-of-order, unknown group', () => {
  for (const mutate of [d => d.entries.pop(), d => { d.entries[1].code = d.entries[0].code; }, d => { d.entries[0].number = 5; }, d => { d.entries[0].group = 'unknown'; }, d => { d.entries[0].example = ''; }]) {
    const copy = structuredClone(data); mutate(copy); assert.throws(() => validateCodebook(copy));
  }
});
test('five recipes use 2–4 existing codes and original Russian prompts', () => {
  assert.deepEqual(data.recipes.map(recipe => recipe.id), ['portrait', 'irl', 'lookbook', 'product', 'cover']);
  for (const recipe of data.recipes) {
    assert.ok(recipe.codes.length >= 2 && recipe.codes.length <= 4);
    assert.match(recipe.prompt, /[А-Яа-яЁё]/);
    assert.ok(recipe.prompt.length > 100);
  }
});
test('source, dates, canonical card, guide and both navigation entries exist', async () => {
  assert.equal(data.source.author, 'Abhijay Arora Vuyyuru');
  assert.equal(data.source.publishedAt, '2026-08-31');
  assert.equal(data.source.checkedAt, '2026-10-06');
  assert.match(data.source.verification, /не тестировались/);
  const catalog = JSON.parse(await read('catalog/resources.json'));
  const matches = catalog.items.filter(item => item.url === data.source.url);
  assert.equal(matches.length, 1);
  assert.equal(matches[0].category, 'Изображения');
  assert.equal(matches[0].guide, 'image-generation-codebook');
  assert.equal(matches[0].verification.generationTested, false);
  assert.match(await read('guides/image-generation-codebook.md'), /\]\(\/images\.html\)/);
  assert.equal((await read('web/index.html')).match(/href="images\.html"/g)?.length, 2);
  // Only these two local guide destinations are allowlisted; no broad URL rewrite.
  const app = await read('web/app.js');
  assert.ok(app.includes("if (u === '/images.html' || u === '/image-prompt-codes.json') return u;"));
});
test('UI uses safe DOM, shared styles, loading/retry, manual-copy fallback and reduced motion', async () => {
  const html = await read('web/images.html');
  const js = await read('web/image-prompts.mjs');
  const css = await read('web/image-prompts.css');
  assert.match(html, /styles\.css/); assert.match(html, /library-v2\.css/);
  assert.match(html, /type="module"/); assert.match(html, /id="empty-results"/);
  assert.match(html, /id="retry-load"/); assert.match(html, /aria-live="polite"/);
  assert.match(js, /textContent/); assert.doesNotMatch(js, /innerHTML|eval\(|new Function/);
  assert.match(js, /await navigator\.clipboard\.writeText/);
  assert.match(js, /showModal\(/); assert.match(js, /copyTrigger\?\.focus/);
  assert.match(css, /prefers-reduced-motion/); assert.match(css, /focus-visible/);
});
