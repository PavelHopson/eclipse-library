import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../', import.meta.url).pathname.replace(/^\/(?:([A-Za-z]:))/, '$1');
const web = join(root, 'web');
const files = {
  preview: 'animations-v8-preview.html',
  tabs: 'animation-v8-light-tabs.html',
  order: 'animation-v8-order-confirm.html',
  auth: 'animation-v8-auth-blade.html',
  css: 'animation-v8-preview.css',
  js: 'animation-v8-preview.js'
};

const source = {};
for (const [key, file] of Object.entries(files)) source[key] = await readFile(join(web, file), 'utf8');

test('preview keeps production catalogue isolated', () => {
  assert.match(source.preview, /основной каталог не изменён/i);
  assert.match(source.preview, /sandbox="allow-scripts"/);
  assert.doesNotMatch(source.preview, /allow-same-origin/);
  for (const file of [files.tabs, files.order, files.auth]) assert.match(source.preview + source.js, new RegExp(file.replace('.', '\\.')));
});

test('all demos are local-only and expose deterministic readiness', () => {
  for (const [key, html] of Object.entries(source).filter(([name]) => ['tabs', 'order', 'auth', 'preview'].includes(name))) {
    assert.doesNotMatch(html, /https?:\/\//, `${key} must not load remote content`);
    assert.match(html, /animation-v8-preview\.js\?v=8/);
  }
  assert.match(source.js, /window\.__ready\s*=\s*true/);
  assert.match(source.js, /URLSearchParams/);
  assert.match(source.js, /prefers-reduced-motion/);
});

test('light tabs support tabs semantics and keyboard movement', () => {
  assert.match(source.tabs, /role="tablist"/);
  assert.equal((source.tabs.match(/role="tab"/g) || []).length, 4);
  assert.match(source.tabs, /class="light-energy"/);
  assert.match(source.js, /ArrowRight/);
  assert.match(source.js, /ArrowLeft/);
  assert.match(source.js, /element\.animate/);
});

test('order demo includes a real visual sequence', () => {
  for (const part of ['depot', 'gate', 'package', 'truck', 'order-check']) assert.match(source.order, new RegExp(`class="[^"]*${part}`));
  for (const state of ['loading', 'driving', 'complete']) assert.match(source.js, new RegExp(`setState\\('${state}'\\)`));
  assert.match(source.order, /<svg[\s\S]*Машина доставки/);
});

test('auth uses one blade, two real forms, and no simulated submission', () => {
  assert.equal((source.auth.match(/class="auth-blade-v8"/g) || []).length, 1);
  assert.equal((source.auth.match(/data-pane=/g) || []).length, 2);
  assert.equal((source.auth.match(/<input/g) || []).length, 4);
  assert.doesNotMatch(source.auth, /<form|action=/i);
  const authCss = source.css.slice(source.css.indexOf('/* One blade'), source.css.indexOf('/* Preview shell'));
  assert.match(authCss, /translate3d\(-96\.15%/);
  assert.doesNotMatch(authCss, /rotate\(|skew\(/);
});

test('motion stays on compositor-friendly properties', () => {
  const keyframes = [...source.css.matchAll(/@keyframes[^}]+\{([\s\S]*?)\}\s*\}/g)].map(match => match[0]).join('\n');
  assert.doesNotMatch(keyframes, /(?:width|height|left|right|top|bottom|margin|padding)\s*:/);
  assert.doesNotMatch(source.css, /box-shadow|filter\s*:\s*blur/i);
  assert.doesNotMatch(source.js, /requestAnimationFrame\([\s\S]*getBoundingClientRect/);
});

test('security baseline: no network, storage, unsafe HTML, or dynamic execution', () => {
  const all = Object.values(source).join('\n');
  assert.doesNotMatch(all, /fetch\(|XMLHttpRequest|WebSocket\(|localStorage|sessionStorage|\.innerHTML\s*=|eval\(|new Function/i);
  assert.doesNotMatch(all, /api[_-]?key|authorization:\s*bearer|private[_-]?key/i);
});
