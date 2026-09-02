import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const web = new URL('web/', root);
const manifest = JSON.parse(await readFile(new URL('animation-lab-manifest.json', web), 'utf8'));
const expected = ['text-cascade', 'directional-action', 'magnetic-dock'];

for (const id of expected) {
  const demo = manifest.demos.find((item) => item.id === id);
  assert.ok(demo, `${id} is missing from Animation Lab`);
  const source = await readFile(new URL(demo.file, web), 'utf8');
  assert.match(source, /Clean-room motion/, `${id} must declare its clean-room origin`);
  assert.match(source, /prefers-reduced-motion/, `${id} must support reduced motion`);
  assert.match(source, /window\.__ready=true/, `${id} must expose deterministic readiness`);
  assert.doesNotMatch(source, /<script\s+src=|\bfetch\s*\(|XMLHttpRequest|WebSocket/i, `${id} must stay offline`);
  assert.doesNotMatch(source, /localStorage|sessionStorage|indexedDB/i, `${id} must not persist data`);
  assert.doesNotMatch(source, /@keyframes[^}]*\b(?:top|left|right|bottom|width|height|margin|padding|filter|box-shadow)\s*:/is, `${id} must not animate layout or paint properties`);
  assert.doesNotMatch(source, /https?:\/\//i, `${id} must not contain remote origins`);
}

assert.match(manifest.license, /React Bits was used only to select interaction categories/);
assert.equal(manifest.version, 8);
assert.equal(manifest.demos.length, 33);

console.log('React Bits clean-room contract passed for three first-party scenes.');
