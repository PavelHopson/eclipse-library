import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {Script} from 'node:vm';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const demo=resolve(root,'web/experiments/erida-reveal');
test('inline executable and style have exact CSP hashes',()=>{
 for(const name of ['index.html','guide.html']){
  const s=readFileSync(resolve(demo,name),'utf8');
  assert.ok(!s.includes('unsafe-inline'));
  for(const tag of ['script','style']){
   const m=s.match(new RegExp('<'+tag+'>([\\s\\S]*?)</'+tag+'>'));
   if(m){assert.ok(s.includes('sha256-'+createHash('sha256').update(m[1]).digest('base64')));if(tag==='script')new Script(m[1]);}
  }
  assert.ok(!/E:[\\/]|C:[\\/]|garaa|api[_-]?key\s*[=:]|sk-[a-zA-Z0-9]{20}/i.test(s));
 }
});
test('all public image derivatives have the recorded bytes and checksum',()=>{
 const manifest=JSON.parse(readFileSync(resolve(demo,'assets/manifest.json'),'utf8'));
 assert.equal(manifest.assets.length,4);
 for(const asset of manifest.assets){
  const data=readFileSync(resolve(demo,'assets',asset.name));assert.equal(data.length,asset.bytes);assert.equal(createHash('sha256').update(data).digest('hex'),asset.sha256);assert.ok(data.length<350000);
 }
});
test('guide includes the exact repeatable prompt, package and indexed record',()=>{
 const prompt=readFileSync(resolve(demo,'prompt.txt'),'utf8');
 const markdown=readFileSync(resolve(root,'guides/erida-canvas-mask-reveal.md'),'utf8');
 assert.ok(markdown.includes(prompt));assert.ok(existsSync(resolve(demo,'downloads/erida-reveal.zip')));
 const manifest=JSON.parse(readFileSync(resolve(root,'web/guides.json'),'utf8'));
 assert.equal(manifest.guides.filter(g=>g.name==='erida-canvas-mask-reveal').length,1);
 assert.equal(manifest.guides.find(g=>g.name==='erida-canvas-mask-reveal').modules,8);
 assert.ok(readFileSync(resolve(root,'web/animations.html'),'utf8').includes('id="erida-reveal-experiment"'));
});
