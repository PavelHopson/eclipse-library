import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {Script} from 'node:vm';
import {fileURLToPath} from 'node:url';
import {inflateRawSync} from 'node:zlib';
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
test('download contains code and documentation only, never character portraits',()=>{
 const zip=readFileSync(resolve(demo,'downloads/erida-reveal.zip'));
 let end=-1;
 for(let i=zip.length-22;i>=Math.max(0,zip.length-65557);i--){if(zip.readUInt32LE(i)===0x06054b50){end=i;break;}}
 assert.ok(end>=0,'ZIP end record missing');
 const count=zip.readUInt16LE(end+10), names=[],contents=new Map();
 let p=zip.readUInt32LE(end+16);
 for(let n=0;n<count;n++){
  assert.equal(zip.readUInt32LE(p),0x02014b50);
  const method=zip.readUInt16LE(p+10),length=zip.readUInt32LE(p+20),unpacked=zip.readUInt32LE(p+24);
  const nameLength=zip.readUInt16LE(p+28),extraLength=zip.readUInt16LE(p+30),commentLength=zip.readUInt16LE(p+32),local=zip.readUInt32LE(p+42);
  const name=zip.subarray(p+46,p+46+nameLength).toString('utf8');names.push(name);
  assert.ok(unpacked<100000,'Unexpected embedded data');
  assert.equal(zip.readUInt32LE(local),0x04034b50);
  const start=local+30+zip.readUInt16LE(local+26)+zip.readUInt16LE(local+28),data=zip.subarray(start,start+length);
  assert.ok(method===0||method===8);
  contents.set(name,(method===8?inflateRawSync(data):data).toString('utf8'));
  p+=46+nameLength+extraLength+commentLength;
 }
 assert.deepEqual(names.sort(),['README.md','guide.html','index.html','prompt.txt']);
 assert.match(contents.get('README.md'),/Изображений Эриды или других персонажей в архиве нет/);
 assert.equal(contents.get('prompt.txt'),readFileSync(resolve(demo,'prompt.txt'),'utf8'));
 assert.ok(!/Erida Vice|Эрида|Эриды|data:image|https?:[^"'\s]+\/assets\//.test(contents.get('index.html')));
 const template=contents.get('index.html');
 const script=template.match(/<script>([\s\S]*?)<\/script>/)[1];
 assert.ok(template.includes('sha256-'+createHash('sha256').update(script).digest('base64')));
 new Script(script);
 const markdown=readFileSync(resolve(root,'guides/erida-canvas-mask-reveal.md'),'utf8');
 assert.ok(!markdown.includes('](../experiments/erida-reveal/assets/'));
 assert.match(markdown,/Изображения Эриды не входят в материалы для скачивания/);
});
