import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../', import.meta.url).pathname.replace(/^\/(?:([A-Za-z]:))/, '$1');
const web = join(root, 'web');
const html = await readFile(join(web, 'animations-v9-preview.html'), 'utf8');
const css = await readFile(join(web, 'animation-v9-preview.css'), 'utf8');
const js = await readFile(join(web, 'animation-v9-preview.js'), 'utf8');
const all = `${html}\n${css}\n${js}`;

const scenes = [
  'light-tabs', 'order-confirm', 'auth-blade', 'payment-authorize',
  'panda-light', 'kinetic-delete', 'creative-orbit', 'card-payment',
  'lamp-auth', 'login-v5', 'card-receipt', 'mascot-otp',
  'payment-v3', 'cloud-auth', 'animated-cart', 'svg-hover',
  'file-upload', 'fly-cart'
];

test('v9 contains 18 custom, directly addressable scenes', () => {
  assert.equal((html.match(/<template id="scene-/g) || []).length, 18);
  assert.equal((html.match(/data-scene="/g) || []).length, 18);
  for (const scene of scenes) {
    assert.match(html, new RegExp(`id="scene-${scene}"`));
    assert.match(js, new RegExp(`'${scene}'`));
  }
  assert.match(js, /searchParams\.set\('scene'/);
  assert.match(js, /window\.__ready\s*=\s*true/);
});

test('the previously static scenes have explicit choreography', () => {
  for (const handler of [
    'setupLightTabs', 'setupAuthBlade', 'setupPaymentAuthorize', 'setupPanda',
    'setupDelete', 'setupCardPayment', 'setupLampAuth', 'setupLoginV5',
    'setupPaymentV3', 'setupCloud', 'setupAnimatedCart', 'setupIcons', 'setupFlyCart'
  ]) assert.match(js, new RegExp(`function ${handler}\\(`));
  assert.match(js, /safeAnimate\(/);
  assert.match(js, /getBoundingClientRect\(\)/);
  assert.match(js, /data\.phase|dataset\.phase/);
});

test('auth blade is one translating rectangle over two real forms', () => {
  const template = html.slice(html.indexOf('id="scene-auth-blade"'), html.indexOf('id="scene-payment-authorize"'));
  const authCss = css.slice(css.indexOf('/* 03'), css.indexOf('/* 04'));
  assert.equal((template.match(/class="auth-blade-v9"/g) || []).length, 1);
  assert.equal((template.match(/class="auth-form-v9"/g) || []).length, 2);
  assert.equal((template.match(/<input/g) || []).length, 4);
  assert.match(authCss, /translate3d\(/);
  assert.doesNotMatch(authCss, /rotate\(|skew\(/);
});

test('accessibility covers keyboard tabs, inert forms, status and reduced motion', () => {
  assert.match(html, /role="tablist"/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /\sinert/);
  assert.match(js, /ArrowRight/);
  assert.match(js, /ArrowLeft/);
  assert.match(js, /prefers-reduced-motion/);
  assert.match(js, /setInert\(/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)/);
  assert.match(css, /html\[data-reduce=true\]/);
  assert.match(css, /html\[data-freeze=true\]/);
});

test('motion is crisp and compositor-oriented', () => {
  assert.doesNotMatch(css, /box-shadow|filter\s*:\s*blur/i);
  const blocks = [];
  for (const match of css.matchAll(/@keyframes\s+[^{]+\{/g)) {
    let depth = 1;
    let cursor = match.index + match[0].length;
    while (depth && cursor < css.length) {
      if (css[cursor] === '{') depth += 1;
      if (css[cursor] === '}') depth -= 1;
      cursor += 1;
    }
    blocks.push(css.slice(match.index, cursor));
  }
  const keyframes = blocks.join('\n');
  assert.doesNotMatch(keyframes, /(?:width|height|left|right|top|bottom|margin|padding)\s*:/);
  assert.doesNotMatch(js, /requestAnimationFrame\([\s\S]*getBoundingClientRect/);
});

test('preview is local-only and does not execute or persist untrusted content', () => {
  assert.doesNotMatch(all, /https?:\/\//);
  assert.doesNotMatch(all, /fetch\(|XMLHttpRequest|WebSocket\(|localStorage|sessionStorage|\.innerHTML\s*=|eval\(|new Function/i);
  assert.doesNotMatch(all, /api[_-]?key|authorization:\s*bearer|private[_-]?key/i);
  assert.match(js, /replaceChildren\(template\.content\.cloneNode\(true\)\)/);
});

test('upload demonstration remains local and bounded', () => {
  assert.match(html, /type="file"/);
  assert.match(html, /До 3 демонстрационных файлов/);
  assert.match(js, /names\.slice\(0, 3\)/);
  assert.doesNotMatch(js, /FormData|FileReader|URL\.createObjectURL/);
});
