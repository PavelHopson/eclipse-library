import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const appUrl = new URL('../web/app.js', import.meta.url);
const styleUrl = new URL('../web/styles.css', import.meta.url);
const libraryStyleUrl = new URL('../web/library-v2.css', import.meta.url);
const indexUrl = new URL('../web/index.html', import.meta.url);

test('catalog boot uses the compact summary and validates lazy detail shards', async () => {
  const app = await readFile(appUrl, 'utf8');
  assert.match(app, /SUMMARY_URL = 'catalog-summary\.json\?v=1'/);
  assert.doesNotMatch(app, /DETAILS_URL/);
  assert.match(app, /function detailShardForId/);
  assert.match(app, /payload\?\.sourceHash !== catalogSourceHash/);
  assert.match(app, /detailShardPromises\.delete\(shard\)/);
  assert.match(app, /aria-busy/);
  assert.match(app, /retry-detail/);
});

test('product motion stays bounded and respects the operating-system preference', async () => {
  const [app, styles, libraryStyles, html] = await Promise.all([
    readFile(appUrl, 'utf8'),
    readFile(styleUrl, 'utf8'),
    readFile(libraryStyleUrl, 'utf8'),
    readFile(indexUrl, 'utf8'),
  ]);
  assert.doesNotMatch(styles, /forgeOrbitPresence/);
  assert.doesNotMatch(app, /behavior: 'smooth'/);
  assert.match(app, /prefers-reduced-motion: reduce/);
  assert.match(styles, /animation-iteration-count: 1 !important/);
  assert.doesNotMatch(html, /class="view-switcher(?:-indicator)?"/);
  assert.match(app, /function syncActiveNavRail/);
  assert.match(styles, /\.nav-active-rail/);
  assert.match(libraryStyles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(libraryStyles, /transition: opacity \.12s linear !important/);
  assert.doesNotMatch(libraryStyles, /animation:\s*[^;]*infinite/);
});

test('changed assets carry an explicit cache-bust version', async () => {
  const html = await readFile(indexUrl, 'utf8');
  assert.match(html, /styles\.css\?v=29/);
  assert.match(html, /library-v2\.css\?v=1/);
  assert.match(html, /app\.js\?v=43/);
  assert.match(html, /library-shell\.js\?v=1/);
});
