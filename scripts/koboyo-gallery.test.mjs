import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import vm from 'node:vm';
import { validateManifest, spriteCell, reactExample } from '../web/mascots/koboyo/gallery.mjs';
const root = new URL('../web/mascots/koboyo/', import.meta.url);
const data = JSON.parse(readFileSync(new URL('manifest.json', root)));
test('complete collection: 58 variants, 116 original WebP, sizes and SHA match', () => {
  validateManifest(data);
  assert.equal(data.totalVariants, 58); assert.equal(data.totalFiles, 116);
  assert.equal(readdirSync(new URL('assets/', root)).filter(p => p.endsWith('.webp')).length, 116);
  let total = 0;
  for (const item of data.items) for (const file of item.files) {
    const bytes = readFileSync(new URL(file.path, root));
    assert.equal(bytes.length, file.bytes);
    assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
    assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
    assert.equal(createHash('sha256').update(bytes).digest('hex'), file.sha256);
    assert.equal(createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex'), file.gitBlobSha);
    total += bytes.length;
  }
  assert.equal(total, data.totalBytes);
  assert.match(readFileSync(new URL('LICENSE.txt', root), 'utf8'), /Copyright \(c\) 2026 Kamran Ahmed/);
});
test('manifest rejects traversal, missing/duplicate items and inconsistent counts', () => {
  const bad = change => { const c = structuredClone(data); change(c); assert.throws(() => validateManifest(c)); };
  bad(d => d.items[0].directions = '../private.webp');
  bad(d => d.items[0].reactions = 'https://example.com/file.webp');
  bad(d => d.items[0].id = d.items[1].id);
  bad(d => d.items[0].category = '__proto__');
  bad(d => d.totalFiles--); bad(d => d.totalBytes++); bad(d => d.items.pop());
});
test('3x3 cell mapping and React props match original component', () => {
  assert.deepEqual(spriteCell(0), { x: 0, y: 0 });
  assert.deepEqual(spriteCell(4), { x: 1, y: 1 });
  assert.deepEqual(spriteCell(8), { x: 2, y: 2 });
  for (const i of [-1, 9, 1.2]) assert.throws(() => spriteCell(i));
  const code = reactExample(data.items[0]);
  assert.match(code, /import \{ Mascot \} from 'page-mascot'/);
  assert.ok(code.includes(`directions="/mascots/${data.items[0].id}-directions.webp"`));
  assert.ok(code.includes(`reactions="/mascots/${data.items[0].id}-reactions.webp"`));
});
test('guide allowlist preserves only the five explicit local Koboyo paths', () => {
  const source = readFileSync(new URL('../web/app.js', import.meta.url), 'utf8');
  const helpers = source.slice(source.indexOf('  function esc(s)'), source.indexOf('  function inline(md)'));
  const inlineG = source.slice(source.indexOf('  function inlineG(s)'), source.indexOf('  function mdToHtml(md)'));
  const context = vm.createContext({ REPO_URL: 'https://github.com/PavelHopson/eclipse-library' });
  vm.runInContext(helpers + inlineG, context);
  for (const file of ['index.html', 'downloads/koboyo-page-mascot.zip', 'README.md', 'LICENSE.txt', 'manifest.json']) {
    const url = '/mascots/koboyo/' + file;
    assert.equal(context.absUrl(url), url);
    assert.equal(context.inlineG(`[Открыть](${url})`), `<a href="${url}">Открыть</a>`);
  }
  assert.match(context.absUrl('/mascots/koboyo/other.html'), /^https:\/\/github.com\//);
  assert.match(context.inlineG('[Назад](README.md)'), /href="#top"/);
  assert.match(context.inlineG('[Гайд](guides/other-guide.md)'), /href="#guide\/other-guide"/);
});
