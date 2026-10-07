// Compare the deployed site with this exact checkout. No credentials or redirects.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const web=new URL('../web/',import.meta.url),sha=b=>createHash('sha256').update(b).digest('hex');
const base=new URL(process.argv[2]);
assert.equal(base.origin,'https://library.eclipse-forge.ru');assert.equal(base.pathname,'/');assert.ok(!base.username&&!base.password&&!base.search&&!base.hash);
const files=new Set(['animations.html','images.html','image-prompt-codes.json','app.js','guides.json']);
const chars='experiments/character-heroes/';
for(const f of ['index.html','guide.html','style.css','script.mjs','scenes.mjs','motion.mjs','sources/prompt.txt'])files.add(chars+f);
for(const id of ['curious','fox','grumpy']){
 const manifest=`assets/${id}/manifest.json`;files.add(chars+manifest);
 for(const entry of JSON.parse(readFileSync(new URL(chars+manifest,web))).files)files.add(chars+entry.file);
}
for(const folder of ['artefakt','coffee-cat'])for(const file of ['index.html','guide.html'])files.add(`experiments/${folder}/${file}`);
files.add('experiments/artefakt/sources/original-prompt.txt');
for(const f of JSON.parse(readFileSync(new URL('experiments/coffee-cat/assets/manifest.json',web))).files)files.add('experiments/coffee-cat/'+f.file);
let next=0;const names=[...files];
await Promise.all(Array.from({length:4},async()=>{while(next<names.length){
 const path=names[next++];assert.ok(!path.includes('..')&&!path.startsWith('/'));
 const expected=readFileSync(new URL(path,web)),url=new URL(path,base);url.searchParams.set('verify',sha(expected).slice(0,16));
 const response=await fetch(url,{redirect:'error',cache:'no-store',signal:AbortSignal.timeout(25000)});assert.equal(response.status,200,path);
 let size=0;const chunks=[];for await(const chunk of response.body){size+=chunk.length;assert.ok(size<=expected.length+4096,'Unexpected response size: '+path);chunks.push(chunk);}
 assert.equal(sha(Buffer.concat(chunks)),sha(expected),'Deployed bytes differ: '+path);
 if(path.endsWith('.mjs'))assert.match(response.headers.get('content-type')||'',/javascript/,path);
 if(path.endsWith('.webp'))assert.match(response.headers.get('content-type')||'',/image\/webp/,path);
 console.log('Verified '+path);
}}));
console.log(`Production: ${names.length} exact files verified`);
