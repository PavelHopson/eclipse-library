import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const contractPath=path.join(root,'contracts/original-motion-publication.json');
const textExtensions=new Set(['.html','.css','.js','.json','.md','.txt']);
export const canonical=(name,bytes)=>textExtensions.has(path.extname(name))?Buffer.from(bytes.toString('utf8').replace(/\r\n?/g,'\n')):bytes;
export const sha256=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
export function safePath(value){assert.equal(typeof value,'string');assert.match(value,/^[a-zA-Z0-9][a-zA-Z0-9._/-]*$/);assert.ok(value.split('/').every(part=>part&&part!=='.'&&part!=='..'));return value}
export function readContract(){return JSON.parse(fs.readFileSync(contractPath,'utf8'))}
const walk=(base,prefix='')=>fs.readdirSync(base,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name,'en')).flatMap(entry=>{assert.ok(!entry.isSymbolicLink(),'Symlink in publication');return entry.isDirectory()?walk(path.join(base,entry.name),prefix+entry.name+'/'):[prefix+entry.name]});
export function checkText(text,name){
 assert.doesNotMatch(text,/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|\bgh[pousr]_[A-Za-z0-9]{36,}|\bgithub_pat_[A-Za-z0-9_]{50,}|\bAKIA[A-Z0-9]{16}/,'Possible secret in '+name);
 assert.doesNotMatch(text,/\b[A-Za-z]:[\\/]|file:\/\/|\/Users\/|E:\\ADMIN/,'Machine path in '+name);
}
export function inspect(base=path.join(root,'web')){
 const dir=path.join(base,'original-motion'),manifest=JSON.parse(fs.readFileSync(path.join(dir,'manifest.json'),'utf8'));
 assert.equal(manifest.items.length,43);assert.equal(new Set(manifest.items.map(item=>item.id)).size,43);assert.match(manifest.buildVersion,/^[a-f0-9]{16}$/);
 const expected=new Set(['manifest.json','THIRD_PARTY_NOTICES.md']);
 for(const item of manifest.items){
  assert.deepEqual(item.missing,[]);safePath(item.path);assert.equal(item.path,`original-motion/${item.id}/${item.files.find(file=>file.file.endsWith('.html')).file}`);
  for(const file of item.files)expected.add(safePath(item.id+'/'+file.file));
  if(item.bundle)expected.add(safePath(item.id+'/'+item.bundle.file));
  const html=fs.readFileSync(path.join(base,item.path),'utf8');
  for(const policy of ["connect-src 'none'","form-action 'none'","object-src 'none'","base-uri 'none'"])assert.ok(html.includes(policy),item.id+': '+policy);
  assert.doesNotMatch(html,/<script[^>]+src=['"]https?:/i,'Runtime external script: '+item.id);
 }
 for(const resource of manifest.resources){assert.equal(resource.status,'ready');assert.match(resource.file,/^vendor\//);expected.add(safePath(resource.file));assert.doesNotMatch(resource.url,/jquery-2\.2\.4/)}
 assert.deepEqual(walk(dir).sort(),[...expected].sort(),'Unexpected or missing original collection file');
 for(const page of ['animations.html','animation-original.html']){
  const html=fs.readFileSync(path.join(base,page),'utf8');assert.match(html,/sandbox="allow-scripts"/);assert.doesNotMatch(html,/allow-same-origin|allow-forms|allow-popups|allow-top-navigation/);
  assert.ok(html.includes('original-motion-manifest.js?v='+manifest.buildVersion),'Stale version: '+page);
 }
 const names=['animations.html','animation-original.html','original-motion.js','original-motion.css','original-motion-standalone.js','original-motion-manifest.js',...[...expected].map(name=>'original-motion/'+name)].sort();
 const entries=names.map(name=>{safePath(name);const file=path.join(base,name);assert.ok(!fs.lstatSync(file).isSymbolicLink());const bytes=canonical(name,fs.readFileSync(file));assert.ok(bytes.length>0&&bytes.length<16e6,name+' size');if(textExtensions.has(path.extname(name)))checkText(bytes.toString('utf8'),name);assert.ok(!bytes.subarray(0,160).toString().includes('jQuery v2.2.4'),'Retired jQuery');return {path:name,bytes:bytes.length,sha256:sha256(bytes)}});
 return {schemaVersion:1,buildVersion:manifest.buildVersion,sceneIds:manifest.items.map(item=>item.id),authorization:{scope:'all-43-original-scenes',basis:'Explicit owner authorship declaration and production publication approval',confirmedAt:'2026-09-05',thirdPartyNotices:'original-motion/THIRD_PARTY_NOTICES.md'},entries};
}
export function check(base=path.join(root,'web')){const actual=inspect(base),contract=readContract();assert.deepEqual(actual,contract,'Publication contract drift');return contract}
export function smokeBase(value){const url=new URL(value);assert.ok(!url.username&&!url.password&&!url.search&&!url.hash);assert.ok((url.protocol==='https:'&&url.hostname==='library.eclipse-forge.ru'&&!url.port)||(url.protocol==='http:'&&url.hostname==='127.0.0.1'));url.pathname='/';return url}
export async function smoke(value){
 const base=smokeBase(value),contract=readContract();let next=0;
 await Promise.all(Array.from({length:4},async()=>{while(next<contract.entries.length){const entry=contract.entries[next++],url=new URL(entry.path,base);url.searchParams.set('release',contract.buildVersion);const response=await fetch(url,{redirect:'error',cache:'no-store',signal:AbortSignal.timeout(25000)});assert.equal(response.status,200,entry.path+': HTTP '+response.status);let total=0;const chunks=[];for await(const chunk of response.body){total+=chunk.length;assert.ok(total<entry.bytes*2+2048,'Response size limit');chunks.push(chunk)}const bytes=canonical(entry.path,Buffer.concat(chunks));assert.equal(sha256(bytes),entry.sha256,'Production bytes differ: '+entry.path);if(entry.path.endsWith('.js'))assert.match(response.headers.get('content-type')||'',/javascript/);if(entry.path.endsWith('.css'))assert.match(response.headers.get('content-type')||'',/text\/css/);if(entry.path.endsWith('.html'))assert.match(response.headers.get('content-type')||'',/text\/html/)}}));
 return {version:contract.buildVersion,scenes:contract.sceneIds.length,verifiedFiles:contract.entries.length};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{const [mode,value]=process.argv.slice(2);if(mode==='--write'){const contract=inspect();fs.writeFileSync(contractPath,JSON.stringify(contract,null,2)+'\n');console.log({version:contract.buildVersion,files:contract.entries.length})}else if(mode==='--check'){const c=check();console.log({version:c.buildVersion,files:c.entries.length})}else if(mode==='--check-stage'&&value){check(path.resolve(value));console.log('Original motion stage passed')}else if(mode==='--smoke'&&value)console.log(await smoke(value));else throw Error('Use --write, --check, --check-stage DIR, or --smoke BASE')}
 catch(error){console.error(error.message);process.exitCode=1}
}
