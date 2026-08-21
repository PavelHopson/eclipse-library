import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const web=path.join(root,'web');
const manifest=JSON.parse(fs.readFileSync(path.join(web,'animation-lab-manifest.json'),'utf8'));
assert.equal(manifest.version,3,'Animation Lab manifest must use the workbench contract');
assert.equal(manifest.demos.length,7,'All seven product patterns must be present');
assert.equal(new Set(manifest.demos.map(item=>item.id)).size,manifest.demos.length,'Demo ids must be unique');
for(const demo of manifest.demos){
  const source=fs.readFileSync(path.join(web,demo.file),'utf8');
  assert.match(source,/prefers-reduced-motion|reduce/,'Reduced motion path is required: '+demo.file);
  assert.match(source,/URLSearchParams/,'Query harness is required: '+demo.file);
  assert.match(source,/viewport/,'Responsive viewport is required: '+demo.file);
  assert.doesNotMatch(source,/<script\s+src=/i,'Remote scripts are forbidden: '+demo.file);
  assert.doesNotMatch(source,/\beval\s*\(|document\.write/i,'Unsafe execution is forbidden: '+demo.file);
  assert.doesNotMatch(source,/https?:\/\//i,'Standalone demos must not call remote origins: '+demo.file);
  assert.doesNotMatch(source,/(?:const|let|var)\s+\w+\s*=\s*Number\([^\n;]*\.get\(["']t["']\)\)/,'Missing t must not become frozen frame zero: '+demo.file);
}
const upload=fs.readFileSync(path.join(web,'animation-upload-queue.html'),'utf8');
assert.match(upload,/escapeHtml\(f\.name\)/,'User-controlled file names must be output encoded before innerHTML rendering');
const page=fs.readFileSync(path.join(web,'animations.html'),'utf8');
const app=fs.readFileSync(path.join(web,'animation-lab.js'),'utf8');
const css=fs.readFileSync(path.join(web,'animation-lab.css'),'utf8');
assert.match(page,/sandbox="allow-scripts"/,'Preview iframe must be sandboxed');
assert.doesNotMatch(page,/allow-same-origin|allow-forms|allow-popups/,'Preview sandbox must stay minimal');
assert.match(page,/Проверьте паттерн до внедрения/);
assert.match(page,/aria-label="Размер экрана"/);
assert.match(page,/id="export-dialog"/);
assert.match(app,/renderActive\(true\)/,'First animation must autoplay');
assert.match(app,/URLSearchParams/,'Workbench must generate deterministic preview URLs');
assert.match(app,/navigator\.clipboard/,'Export must support copy');
assert.match(app,/download/,'Export must support safe local download');
assert.match(css,/\.lab-shell\{grid-template-columns:minmax\(0,1fr\);width:100%\}/,'Mobile grid must not expand to the demo rail min-content width');
assert.match(css,/\.lab-shell>\*\{min-width:0\}/,'Workbench children must be allowed to shrink without horizontal overflow');
for(const demo of manifest.demos){assert.ok(app.includes(demo.file),demo.file+' must be wired into the stage')}
console.log('Animation Lab checks passed for '+manifest.demos.length+' demos.');
