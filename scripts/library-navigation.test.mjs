import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const html = read('web/index.html');
const app = read('web/app.js');
const shell = read('web/library-shell.js');
const css = read('web/library-v2.css');

assert.match(html, /library-v2\.css\?v=1/);
assert.match(html, /library-shell\.js\?v=1/);
assert.ok(html.indexOf('app.js?v=43') < html.indexOf('library-shell.js?v=1'));
assert.doesNotMatch(html, /class="view-switcher"/);
assert.match(html, /id="orientationPanel"/);
assert.match(html, /id="libraryGuideDialog"/);
assert.match(html, /id="librarySidebar"[^>]+aria-hidden="true"/);
assert.match(html, /data-library-guide-open/);
assert.match(html, /data-guide-action="search"/);
assert.match(html, /data-guide-action="tasks"/);

const staticIds = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = staticIds.filter((id, index) => staticIds.indexOf(id) !== index);
assert.deepEqual(duplicateIds, [], `Duplicate static ids: ${duplicateIds.join(', ')}`);

const primaryNav = html.match(/<nav class="primary-nav"[\s\S]*?<\/nav>/)?.[0] || '';
assert.match(primaryNav, />Каталог</);
assert.match(primaryNav, />Гайды</);
assert.match(primaryNav, />Проекты</);
assert.match(primaryNav, /href="animations\.html"[^>]*>Анимации/);
assert.doesNotMatch(primaryNav, /Registry/);

assert.match(app, /const GUIDE_GROUPS = \{/);
assert.match(app, /guideDirectorySearch/);
assert.match(app, /guideDirectoryMore/);
assert.match(app, /data-quick-task/);
assert.match(app, /esc\(g\.title\)/);
assert.match(app, /esc\(g\.description\)/);
assert.match(app, /encodeURIComponent\(g\.name\)/);
assert.match(app, /orientationPanel\.hidden = filtering/);

assert.match(shell, /showModal\(\)/);
assert.match(shell, /aria-expanded/);
assert.match(shell, /prefers-reduced-motion: reduce/);
assert.doesNotMatch(shell, /innerHTML|eval\(|document\.write/);

assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
assert.match(css, /@media \(max-width: 680px\)/);
assert.match(css, /transform: translate3d/);
assert.doesNotMatch(css, /transition:\s*(?:width|height|top|left|margin|padding|box-shadow)/);
assert.doesNotMatch(css, /https?:\/\//);

console.log('Eclipse Library navigation contract: passed');
