import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import pg from 'pg';
const databaseUrl=process.env.LIBRARY_ADMIN_TEST_DATABASE_URL;
test('Library admin: actual PostgreSQL and HTTP permissions/history', {skip:!databaseUrl,timeout:60000}, async t=>{
 const url=new URL(databaseUrl);assert.equal(url.hostname,'127.0.0.1');assert.equal(url.pathname,'/library_admin_qa');
 const pool=new pg.Pool({connectionString:databaseUrl});
 await pool.query('drop schema public cascade; create schema public');
 const schema=await fs.readFile(new URL('../schema.sql',import.meta.url),'utf8');await pool.query(schema);await pool.query(schema);
 const origin='http://127.0.0.1:18988',base='http://127.0.0.1:18789';
 const password='Local-test-password-2026!';
 const server=spawn(process.execPath,['server.mjs'],{cwd:new URL('..',import.meta.url),env:{...process.env,DATABASE_URL:databaseUrl,EDITOR_EMAIL:'owner@example.test',EDITOR_PASSWORD:password,PORT:'18789',ALLOWED_ORIGIN:origin,LIBRARY_CHAT_LOGIN_ENABLED:'false',IMAGE_DIR:new URL('../../.artifacts/admin-qa/images',import.meta.url).pathname.replace(/^\/([A-Z]:)/,'$1')},stdio:['ignore','pipe','pipe'],windowsHide:true});
 let output='';server.stderr.on('data',b=>output+=b);server.stdout.on('data',b=>output+=b);
 const call=async(path,method='GET',body,cookie='',requestOrigin=origin)=>{const res=await fetch(base+'/api/editor/'+path,{method,headers:{'content-type':'application/json',origin:requestOrigin,cookie},body:body===undefined?undefined:JSON.stringify(body)});return {status:res.status,data:await res.json(),cookie:res.headers.get('set-cookie')?.split(';')[0]};};
 try{
 for(let i=0;i<100;i++){try{if((await fetch(base+'/healthz')).ok)break;}catch{} await new Promise(r=>setTimeout(r,100));}
 const owner=await call('login','POST',{email:'owner@example.test',password});assert.equal(owner.status,200,output);assert.equal(owner.data.account.role,'owner');
 let editor,viewer,eid,vid,revision,version;
 await t.test('guest denied; cross-origin rejected',async()=>{assert.equal((await call('admin/overview')).status,401);assert.equal((await call('admin/accounts','POST',{},owner.cookie,'https://other.invalid')).status,403);});
 await t.test('owner creates editor/viewer, cannot create owner or overwrite an account',async()=>{
  for(const role of ['editor','viewer']){const a=await call('admin/accounts','POST',{email:role+'@example.test',password,role},owner.cookie);assert.equal(a.status,201);if(role==='editor')eid=a.data.account.id;else vid=a.data.account.id;}
  assert.equal((await call('admin/accounts','POST',{email:'bad@example.test',password,role:'owner'},owner.cookie)).status,400);
  assert.equal((await call('admin/accounts','POST',{email:'viewer@example.test',password,role:'viewer'},owner.cookie)).status,409);
  editor=await call('login','POST',{email:'editor@example.test',password});viewer=await call('login','POST',{email:'viewer@example.test',password});assert.equal(editor.status,200);assert.equal(viewer.status,200);
 });
 await t.test('editor/viewer cannot manage accounts or self-escalate',async()=>{for(const a of [editor,viewer]){assert.equal((await call('admin/accounts','GET',undefined,a.cookie)).status,403);assert.equal((await call('admin/accounts/'+vid,'PATCH',{role:'editor'},a.cookie)).status,403);assert.equal((await call('admin/accounts','POST',{},a.cookie)).status,403);}});
 const example={id:'admin-qa',title:'Проверка панели',project:'Library',description:'Тест',prompt:'Первая версия',format:'PNG',status:'draft'};
 await t.test('viewer reads dashboard but cannot mutate prompts or upload',async()=>{assert.equal((await call('admin/overview','GET',undefined,viewer.cookie)).status,200);for(const [p,m] of [['prompts','POST'],['prompts/admin-qa','PATCH'],['prompts/admin-qa','DELETE'],['prompts/admin-qa/image','POST'],['prompts/admin-qa/image','DELETE']])assert.equal((await call(p,m,example,viewer.cookie)).status,403);});
 await t.test('editor saves prompt; migration/reapplication does not duplicate baseline',async()=>{const a=await call('prompts','POST',example,editor.cookie);assert.equal(a.status,201);await pool.query(schema);const h=await call('admin/history/admin-qa','GET',undefined,editor.cookie);assert.equal(h.data.revisions.length,1);revision=h.data.revisions[0].id;assert.equal(h.data.revisions[0].snapshot.image_path,undefined);});
 await t.test('history records edits atomically, restore preserves status and image',async()=>{
  const changed=await call('prompts/admin-qa','PATCH',{prompt:'Вторая версия',status:'archived'},editor.cookie);assert.equal(changed.status,200);version=changed.data.example.updated_at;
  assert.equal((await call('admin/history/admin-qa/'+revision+'/restore','POST',{expectedUpdatedAt:version},viewer.cookie)).status,403);
  const restored=await call('admin/history/admin-qa/'+revision+'/restore','POST',{expectedUpdatedAt:version},editor.cookie);assert.equal(restored.status,200);assert.equal(restored.data.example.status,'archived');
  assert.equal((await call('admin/history/admin-qa/'+revision+'/restore','POST',{expectedUpdatedAt:version},editor.cookie)).status,409);
  const data=await call('prompts','GET',undefined,editor.cookie);assert.equal(data.data.examples[0].prompt,'Первая версия');
  const history=await call('admin/history/admin-qa','GET',undefined,editor.cookie);assert.equal(history.data.revisions.length,3);
 });
 await t.test('owner cannot be demoted; role change invalidates existing sessions',async()=>{
  assert.equal((await call('admin/accounts/'+owner.data.account.id,'PATCH',{role:'disabled'},owner.cookie)).status,409);
  assert.equal((await call('admin/accounts/'+eid,'PATCH',{role:'viewer'},owner.cookie)).status,200);
  assert.equal((await call('me','GET',undefined,editor.cookie)).status,401);
  const downgraded=await call('login','POST',{email:'editor@example.test',password});assert.equal((await call('prompts','POST',example,downgraded.cookie)).status,403);
  assert.equal((await call('admin/accounts/'+vid,'PATCH',{role:'disabled'},owner.cookie)).status,200);
  assert.equal((await call('me','GET',undefined,viewer.cookie)).status,401);
  assert.equal((await call('login','POST',{email:'viewer@example.test',password})).status,401);
 });
 await t.test('dashboard uses actual counts and only Library is managed',async()=>{const a=await call('admin/overview','GET',undefined,owner.cookie);assert.equal(a.data.counts.archived,1);assert.deepEqual(a.data.projects.filter(p=>p.managed).map(p=>p.id),['library']);});
 // Leave only isolated fixtures for the optional browser runner; never production data.
 }finally{server.kill();await once(server,'exit');await pool.end();}
});
