import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const web = path.join(root, 'web');
const manifest = JSON.parse(fs.readFileSync(path.join(web, 'animation-lab-manifest.json'), 'utf8'));
const newDemos = manifest.demos.slice(11);

assert.equal(newDemos.length, 22, 'the product-pattern intake must contain 22 scenes');

for (const demo of newDemos) {
  const html = fs.readFileSync(path.join(web, demo.file), 'utf8');

  assert.match(html, /window\.__ready\s*=\s*true/, `${demo.file}: missing deterministic ready marker`);
  assert.match(html, /prefers-reduced-motion/, `${demo.file}: missing reduced-motion path`);
  assert.match(html, /URLSearchParams/, `${demo.file}: missing state/freeze harness`);
  assert.doesNotMatch(html, /\b(?:fetch|XMLHttpRequest|WebSocket)\s*\(/, `${demo.file}: network calls are forbidden`);
  assert.doesNotMatch(html, /\b(?:localStorage|sessionStorage|indexedDB)\b/, `${demo.file}: persistence is forbidden`);
  assert.doesNotMatch(html, /<script[^>]+src=|<link[^>]+href=["']https?:/i, `${demo.file}: remote runtime dependency detected`);
  assert.doesNotMatch(html, /<form[^>]+action=/i, `${demo.file}: demo forms must not submit`);
  assert.doesNotMatch(html, /@keyframes[^}]*\b(?:top|left|right|bottom|width|height|margin|padding)\s*:/is, `${demo.file}: layout property animated in keyframes`);
}

const blade = fs.readFileSync(path.join(web, 'animation-auth-blade.html'), 'utf8');
assert.match(blade, /\.auth-blade\{[^}]*transform:translateX\(100%\)/, 'auth blade must use one horizontal transform on mobile');
assert.doesNotMatch(blade, /\.auth-blade\{[^}]*translateY/i, 'auth blade must never rotate into a vertical transition');
assert.match(blade, /\.pane-signin\{padding:[^}]*50%/, 'mobile sign-in content must stay in the uncovered half');
assert.match(blade, /\.pane-signup\{padding:[^}]*50%/, 'mobile sign-up content must stay in the uncovered half');
assert.match(blade, /\.blade-scene\[data-state=signup\] \.auth-blade/, 'auth blade state selector must target the rendered scene');

const panda = fs.readFileSync(path.join(web, 'animation-panda-lamp-login.html'), 'utf8');
assert.match(panda, /inert/, 'dark panda form must be removed from the interaction tree');
assert.match(panda, /aria-hidden/, 'dark panda form must be removed from the accessibility tree');

const upload = fs.readFileSync(path.join(web, 'animation-file-upload.html'), 'utf8');
assert.match(upload, /textContent\s*=/, 'uploaded filenames must be rendered as text');
assert.doesNotMatch(upload, /innerHTML\s*=/, 'uploaded filenames must not reach an HTML sink');

const manifestFiles = new Set(manifest.demos.map((demo) => demo.file));
assert.equal(manifestFiles.size, manifest.demos.length, 'manifest files must be unique');

const workbench = fs.readFileSync(path.join(web, 'animations.html'), 'utf8');
assert.equal((workbench.match(/id="demo-search"/g) || []).length, 1, 'workbench search must be rendered once');
assert.equal((workbench.match(/id="demo-filters"/g) || []).length, 1, 'workbench filters must be rendered once');
assert.equal((workbench.match(/animation-demos\.js\?v=8/g) || []).length, 1, 'demo catalog must be loaded once');

console.log(`Animation product-pattern checks passed for ${newDemos.length} scenes.`);
