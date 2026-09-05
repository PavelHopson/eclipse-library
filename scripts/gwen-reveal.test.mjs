import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const scene = resolve(root, 'web/experiments/gwen-reveal');
const html = readFileSync(resolve(scene, 'index.html'), 'utf8');
const css = readFileSync(resolve(scene, 'styles.css'), 'utf8');
const js = readFileSync(resolve(scene, 'script.js'), 'utf8');

test('runtime consists of local HTML/CSS/JS, with no remote scripts or network calls', () => {
  assert.deepEqual([...html.matchAll(/<script\b[^>]*src="([^"]+)"/g)].map(m => m[1]), ['script.js']);
  assert.doesNotMatch(js, /\b(?:fetch|XMLHttpRequest|WebSocket|eval)\s*\(/);
  assert.doesNotMatch(js, /\b(?:localStorage|sessionStorage|document\.cookie|innerHTML)\b/);
  assert.match(html, /connect-src 'none'/);
  assert.match(html, /form-action 'none'/);
  assert.match(html, /object-src 'none'/);
  assert.match(html, /noindex, nofollow/);
  assert.doesNotMatch(html, /<iframe|<form/);
  new vm.Script(js);
});

test('all local runtime resources exist, and processed images share geometry', () => {
  const files = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(m => m[1]).filter(u => !/^https?:/.test(u));
  for (const file of files) assert.ok(existsSync(resolve(scene, file)), file);
  for (const file of [...css.matchAll(/url\(([^)]+)\)/g)].map(m => m[1]).filter(u => !u.startsWith('#'))) assert.ok(existsSync(resolve(scene,file)), file);
  const p=JSON.parse(readFileSync(resolve(scene,'assets/provenance.json'),'utf8'));
  assert.deepEqual([p.width,p.height],[1400,1248]);
  assert.deepEqual(p.commonCrop,[247,5,1130,792]);
  for (const hash of Object.values(p.sourceHashes)) assert.match(hash,/^[a-f0-9]{64}$/);
});

test('time-normalized spring converges equally at 30, 60, and 120 FPS', () => {
  const expression = js.match(/const frameK = \(base, dt\) => ([^;]+);/)[1];
  const k = vm.runInNewContext(`(base,dt)=>${expression}`);
  const simulate = fps => { let v=0; for (let i=0;i<fps;i++) v+=(1-v)*k(.06,1000/fps); return v; };
  assert.ok(Math.abs(simulate(30)-simulate(120))<1e-12);
  assert.ok(Math.abs(simulate(60)-simulate(120))<1e-12);
  assert.equal(k(.42,0),0);
});

test('reference compositing, filter test, and motion safety remain explicit', () => {
  assert.match(js,/destination-in/); assert.match(js,/destination-out/); assert.match(js,/source-atop/);
  assert.match(js,/faint < 20/); assert.match(js,/center > 200 && outside < 40/);
  assert.match(js,/blur\(6px\)/); assert.match(js,/Array\.from\(\{ length: 9 \}/);
  assert.match(js,/document\.hidden/); assert.match(js,/reduceQuery\.addEventListener\('change'/);
  assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);
  assert.match(css,/@media\(max-width:900px\)/);
  assert.match(css,/:focus-visible/);
  assert.match(html,/<dialog/); assert.match(html,/id="announcement" role="status"/);
  const wrapper = css.match(/\.hero-wrap\{([^}]+)\}/)[1];
  assert.doesNotMatch(wrapper, /transform|z-index/);
});

test('guide, full original, DOCX and library entry are included', () => {
  const guide = readFileSync(resolve(root,'guides/gwen-stacy-canvas-reveal.md'),'utf8');
  assert.equal([...guide.matchAll(/^## Модуль /gm)].length,6);
  assert.equal([...guide.matchAll(/^### Урок /gm)].length,12);
  const original = readFileSync(resolve(scene,'assets/original-brief.txt'),'utf8');
  assert.match(original,/ЗАДАЧА/); assert.match(original,/КАЧЕСТВО \/ ПРИЁМКА/);
  assert.match(readFileSync(resolve(scene,'guide.html'),'utf8'),/Полный исходный промпт/);
  assert.ok(readFileSync(resolve(scene,'assets/Gwen-Stacy-Guide.docx')).subarray(0,2).equals(Buffer.from('PK')));
  const manifest = JSON.parse(readFileSync(resolve(root,'web/guides.json'),'utf8'));
  assert.equal(manifest.guides.filter(g=>g.name==='gwen-stacy-canvas-reveal').length,1);
  assert.match(readFileSync(resolve(root,'web/animations.html'),'utf8'),/experiments\/gwen-reveal\/index.html/);
});
