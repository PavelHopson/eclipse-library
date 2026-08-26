import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const web = resolve(root, 'web');
const manifestSource = readFileSync(resolve(web, 'source-motion-manifest.js'), 'utf8');
const sandbox = { SOURCE_MOTION_ITEMS: [] };
new Function('window', manifestSource)(sandbox);
const items = sandbox.SOURCE_MOTION_ITEMS;

test('source motion manifest contains 24 unique local demos', () => {
  assert.equal(items.length, 24);
  assert.equal(new Set(items.map(item => item.id)).size, items.length);
  assert.equal(new Set(items.map(item => item.path)).size, items.length);
  for (const item of items) {
    assert.match(item.path, /^source-motion\/[a-z0-9-]+\/[A-Za-z0-9_.-]+\.html$/);
    assert.equal(existsSync(resolve(web, item.path)), true, `Missing ${item.path}`);
    assert.ok(item.title && item.category && item.hint, `Incomplete metadata for ${item.id}`);
  }
});

test('gallery keeps every demo in a script-only sandbox', () => {
  const html = readFileSync(resolve(web, 'source-motion.html'), 'utf8');
  assert.match(html, /sandbox="allow-scripts"/);
  assert.doesNotMatch(html, /allow-same-origin|allow-popups|allow-forms|allow-top-navigation/);
  assert.match(html, /source-motion-manifest\.js/);
  assert.match(html, /source-motion\.js/);
});

test('active demo documents are self-contained and reduced-motion aware', () => {
  for (const item of items) {
    const file = resolve(web, item.path);
    const html = readFileSync(file, 'utf8');
    assert.match(html, /href="\.\.\/common\.css"/, `Missing common layer in ${item.path}`);
    for (const match of html.matchAll(/\b(?:src|href|action)\s*=\s*["']([^"']+)["']/gi)) {
      const value = match[1].trim();
      assert.doesNotMatch(value, /^(?:https?:)?\/\//i, `Remote reference in ${item.path}: ${value}`);
      assert.doesNotMatch(value, /^(?:javascript|data):/i, `Unsafe reference in ${item.path}: ${value}`);
    }
  }
  const common = readFileSync(resolve(web, 'source-motion/common.css'), 'utf8');
  assert.match(common, /prefers-reduced-motion:\s*reduce/);
  assert.match(common, /:focus-visible/);
});

test('styles and active scripts do not initiate remote runtime traffic', () => {
  const forbidden = [
    /@import\s+(?:url\()?\s*["']?(?:https?:)?\/\//i,
    /url\(\s*["']?(?:https?:)?\/\//i,
    /\b(?:fetch|importScripts|WebSocket|EventSource)\s*\(\s*["'](?:https?:)?\/\//i
  ];
  for (const item of items) {
    const htmlPath = resolve(web, item.path);
    const html = readFileSync(htmlPath, 'utf8');
    const references = [...html.matchAll(/\b(?:src|href)\s*=\s*["']([^"']+\.(?:css|js))(?:\?[^"']*)?["']/gi)].map(match => match[1]);
    for (const reference of references) {
      const asset = resolve(dirname(htmlPath), reference);
      if (!existsSync(asset)) continue;
      const source = readFileSync(asset, 'utf8');
      for (const pattern of forbidden) assert.doesNotMatch(source, pattern, `Remote runtime reference in ${asset}`);
    }
  }
});

test('vendored GSAP file is pinned to the reviewed checksum', () => {
  const file = resolve(web, 'source-motion/vendor/gsap-3.13.0.unpkg.min.js');
  const digest = createHash('sha256').update(readFileSync(file)).digest('hex').toUpperCase();
  assert.equal(digest, '96C01B81F44A3290E2B4532F55E2C9534B2ADC43273A19F3756B2CB41F0FD0B6');
});
