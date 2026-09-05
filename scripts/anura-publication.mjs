import assert from 'node:assert/strict';
import {readFileSync,lstatSync,realpathSync} from 'node:fs';
import {resolve,sep,extname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {root,canonicalBytes,checkPublicText,validateTree,smokeBase} from './gwen-publication.mjs';

const route='experiments/anura';
export const publicFiles=[
 'index.html','styles.css','script.js','motion.js','guide.html','guide.css',
 'assets/ANURA-Guide.docx','assets/look-directions.webp','assets/original-brief.txt',
 'assets/poster.webp','assets/sequence.json','assets/source.webp',
 ...Array.from({length:240},(_,i)=>`frames/${String(i).padStart(3,'0')}.webp`),
];
export function publicEntries(sourceRoot=root){
 const base=resolve(sourceRoot,'web',route);validateTree(base,publicFiles);
 const files=publicFiles.map(name=>({source:`web/${route}/${name}`,path:`${route}/${name}`}));
 files.push({source:'guides/anura-interactive-frog.md',path:'guides/anura-interactive-frog.md'});
 return files.map(({source,path})=>{
  const file=resolve(sourceRoot,source),stat=lstatSync(file);
  assert.ok(stat.isFile()&&!stat.isSymbolicLink(),'Public file must be regular');
  assert.ok(realpathSync(file).startsWith(realpathSync(sourceRoot)+sep),'Escaped checkout');
  const bytes=canonicalBytes(path,readFileSync(file));
  assert.ok(bytes.length>0&&bytes.length<1_000_000,`Unexpected size: ${path}`);
  if(['.html','.css','.js','.json','.md','.txt'].includes(extname(path)))checkPublicText(bytes.toString('utf8'),path);
  return {path,bytes,size:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')};
 });
}
export function validateStage(stageRoot){
 const stage=resolve(stageRoot);assert.ok(stage!==root&&!root.startsWith(stage+sep));
 validateTree(resolve(stage,route),publicFiles);
 for(const entry of publicEntries())assert.ok(canonicalBytes(entry.path,readFileSync(resolve(stage,entry.path))).equals(entry.bytes),`Stage mismatch: ${entry.path}`);
}
export async function smoke(value){
 const base=smokeBase(value),entries=publicEntries();let next=0;
 async function worker(){
  while(next<entries.length){
   const entry=entries[next++],url=new URL(entry.path,base);url.searchParams.set('anura',entry.sha256.slice(0,12));
   const response=await fetch(url,{redirect:'error',cache:'no-store',signal:AbortSignal.timeout(15000)});
   assert.equal(response.status,200,`${entry.path}: HTTP ${response.status}`);assert.ok(response.body);
   let total=0;const chunks=[];
   for await(const chunk of response.body){total+=chunk.length;assert.ok(total<=entry.size*2+1024,'Oversized response');chunks.push(chunk);}
   assert.ok(canonicalBytes(entry.path,Buffer.concat(chunks)).equals(entry.bytes),`Live mismatch: ${entry.path}`);
   if(entry.path.endsWith('.js'))assert.match(response.headers.get('content-type')||'',/javascript/,'Module MIME');
   if(entry.path.endsWith('.docx'))assert.match(response.headers.get('content-type')||'',/wordprocessingml|octet-stream/,'DOCX MIME');
  }
 }
 await Promise.all(Array.from({length:4},worker));return entries.length;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{
  const [mode,value]=process.argv.slice(2);
  if(mode==='--check')console.log(`ANURA public surface passed: ${publicEntries().length} files.`);
  else if(mode==='--check-stage'&&value){validateStage(value);console.log('ANURA stage passed.');}
  else if(mode==='--smoke'&&value)console.log(`ANURA HTTP smoke passed: ${await smoke(value)} exact assets.`);
  else throw new Error('Usage: --check | --check-stage DIRECTORY | --smoke BASE_URL');
 }catch(error){console.error(error.message);process.exitCode=1;}
}
