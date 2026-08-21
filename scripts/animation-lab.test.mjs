import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const web=path.join(root,'web');
const manifest=JSON.parse(fs.readFileSync(path.join(web,'animation-lab-manifest.json'),'utf8'));
assert.equal(new Set(manifest.demos.map(item=>item.id)).size,manifest.demos.length,'Demo ids must be unique');
for(const demo of manifest.demos){
  const source=fs.readFileSync(path.join(web,demo.file),'utf8');
  assert.match(source,/prefers-reduced-motion|reduce/,'Reduced motion path is required');
  assert.match(source,/URLSearchParams/,'Deterministic query harness is required');
  assert.doesNotMatch(source,/<script\s+src=/i,'Remote scripts are forbidden');
  assert.doesNotMatch(source,/\beval\s*\(|document\.write/i,'Unsafe execution is forbidden');
  assert.doesNotMatch(source,/https?:\/\//i,'Standalone demos must not call remote origins');
}
const page=fs.readFileSync(path.join(web,'animations.html'),'utf8');
const app=fs.readFileSync(path.join(web,'animation-lab.js'),'utf8');
assert.match(app,/sandbox="allow-scripts"/,'Preview iframes must be sandboxed');
assert.doesNotMatch(app,/allow-same-origin|allow-forms|allow-popups/,'Preview sandbox must stay minimal');
for(const demo of manifest.demos){assert.match(app,new RegExp(demo.file.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')))}
assert.match(page,/Уменьшить движение/);
console.log(`Animation Lab checks passed for ${manifest.demos.length} demos.`);
