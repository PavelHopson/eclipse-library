import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const repoRoot = fileURLToPath(new URL('../', import.meta.url));
const read = (path) => readFile(resolve(repoRoot, path), 'utf8');

const [indexHtml, registryHtml, styles, primaryMark, monochromeMark, favicon] = await Promise.all([
  read('web/index.html'),
  read('web/registry.html'),
  read('web/styles.css'),
  read('web/assets/brand/eclipse-library-mark.svg'),
  read('web/assets/brand/eclipse-library-mark-monochrome.svg'),
  read('web/assets/brand/eclipse-library-favicon.svg'),
]);

test('publishes the same versioned brand assets on catalog and registry pages', () => {
  for (const html of [indexHtml, registryHtml]) {
    assert.match(html, /href="assets\/brand\/eclipse-library-favicon\.svg"/);
    assert.match(html, /src="assets\/brand\/eclipse-library-mark\.svg"/);
    assert.match(html, /href="styles\.css\?v=29"/);
    assert.doesNotMatch(html, /brand-orb|brand-spark|>⚡</u);
  }
});

test('keeps SVG assets static, local and script-free', () => {
  for (const svg of [primaryMark, monochromeMark, favicon]) {
    assert.match(svg, /viewBox="0 0 128 128"/);
    assert.doesNotMatch(svg, /<script|<foreignObject|(?:href|xlink:href)\s*=|on\w+\s*=/i);
  }
});

test('uses only canonical Eclipse Library colours in the primary mark', () => {
  const colors = new Set(primaryMark.match(/#[0-9A-Fa-f]{6}/g)?.map((color) => color.toUpperCase()));
  assert.deepEqual(colors, new Set(['#F2F5F9', '#D4AF37', '#6BA3FF']));
});

test('keeps brand motion bounded and reduced-motion safe', () => {
  assert.match(styles, /--ease-presence:\s*cubic-bezier\(/);
  assert.match(styles, /@keyframes\s+brandEclipseSweep/);
  assert.match(styles, /\.brand:hover\s+\.brand-mark::after/);
  assert.match(styles, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
});
