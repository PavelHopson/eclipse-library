import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { randomUUID, randomBytes } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import pg from 'pg';
const databaseUrl=process.env.LIBRARY_IDENTITY_TEST_DATABASE_URL;

test('real TLS Chat routes + PostgreSQL → Library session, rotation, CRUD and common logout', {skip:!databaseUrl,timeout:60000}, async()=>{
 for(const [value,name] of [[databaseUrl,'library_identity_qa'],[process.env.DATABASE_URL,'chat_identity_qa']]){const url=new URL(value);assert.equal(url.hostname,'127.0.0.1');assert.equal(url.pathname,'/'+name);}
 const {startChat,db,EcosystemSessionService}=await import(pathToFileURL(process.env.CHAT_IDENTITY_TEST_MODULE));
 const pool=new pg.Pool({connectionString:databaseUrl});let api,chat;
 const origin='https://library.example.test',issuer='https://localhost:18898',base='http://127.0.0.1:18797';
 const storageKey=randomBytes(32).toString('base64');
 try {
  await pool.query(await fs.readFile(new URL('../schema.sql',import.meta.url),'utf8'));
  await pool.query('truncate image_prompt_examples,editor_sessions,editor_identity_links,editor_accounts cascade');
  await db.user.deleteMany({where:{email:'identity-qa@example.test'}});
  const user=await db.user.create({data:{email:'identity-qa@example.test',passwordHash:'test-only',displayName:'QA'}});
  async function device(){return db.refreshToken.create({data:{id:randomUUID(),userId:user.id,tokenHash:randomBytes(32).toString('hex'),expiresAt:new Date(Date.now()+86400000)}});}
  let parent=await device();const other=await device();
  process.env.AUTH_PROTOCOL_V2_REQUIRED='true';
  chat=await startChat(origin,process.env.IDENTITY_TEST_CERT,process.env.IDENTITY_TEST_KEY);
  api=spawn(process.execPath,['server.mjs'],{cwd:new URL('../',import.meta.url),windowsHide:true,env:{...process.env,DATABASE_URL:databaseUrl,EDITOR_EMAIL:'editor@example.test',EDITOR_PASSWORD:'qa-only-password-123456',IMAGE_DIR:new URL('../../.artifacts/identity-sessions/images',import.meta.url).pathname.replace(/^\/([A-Z]:)/,'$1'),PORT:'18797',ALLOWED_ORIGIN:origin,LIBRARY_CHAT_LOGIN_ENABLED:'true',LIBRARY_CHAT_ISSUER:issuer,LIBRARY_IDENTITY_STORAGE_KEY_B64:storageKey},stdio:['ignore','pipe','pipe']});
  let logs='';api.stdout.on('data',d=>logs+=d);api.stderr.on('data',d=>logs+=d);
  for(let i=0;i<100;i++){try{if((await fetch(base+'/healthz')).ok)break;}catch{}if(api.exitCode!==null)throw new Error('Test API failed to start: '+logs.slice(-500));await new Promise(r=>setTimeout(r,50));}
  const local=await fetch(base+'/api/editor/login',{method:'POST',headers:{origin,'content-type':'application/json'},body:JSON.stringify({email:'editor@example.test',password:'qa-only-password-123456'})});assert.equal(local.status,200);
  const localCookie=local.headers.getSetCookie()[0].split(';')[0];
  async function flow({link=false,cookie=''}={}){
   const start=await fetch(base+'/api/editor/identity/start',{method:'POST',headers:{origin,cookie,'content-type':'application/json'},body:JSON.stringify({link})});assert.equal(start.status,200);
   const auth=new URL((await start.json()).authorizeUrl);
   const authorize=await fetch(issuer+'/api/ecosystem/authorize',{method:'POST',headers:{'content-type':'application/json',authorization:'Bearer '+chat.jwt.sign({sub:user.id,sid:parent.id,authProtocol:2},{expiresIn:'15m'})},body:JSON.stringify({clientId:'eclipse-library',codeChallenge:auth.searchParams.get('code_challenge'),codeChallengeMethod:'S256',redirectUri:auth.searchParams.get('redirect_uri'),responseType:'code',state:auth.searchParams.get('state')})});assert.equal(authorize.status,200);
   const callback=new URL((await authorize.json()).redirectTo);
   return fetch(base+'/api/editor/identity/callback'+callback.search,{headers:{cookie:start.headers.getSetCookie()[0].split(';')[0]},redirect:'manual'});
  }
  const me=cookie=>fetch(base+'/api/editor/me',{headers:{cookie}});
  const cookieOf=res=>res.headers.getSetCookie().find(x=>x.startsWith('library_editor_session=')).split(';')[0];
  assert.match((await flow()).headers.get('location'),/identity_access_denied/);
  assert.equal((await flow({link:true,cookie:localCookie})).headers.get('location'),'/editor.html?identity=linked');
  const result=await flow();assert.equal(result.headers.get('location'),'/editor.html');const sso=cookieOf(result);
  assert.match(result.headers.getSetCookie().join(';'),/Max-Age=28\d{3}/);
  assert.equal((await me(sso)).status,200);
  const row=(await pool.query('select chat_grant from editor_sessions where identity_link_id is not null')).rows[0];assert.ok(row.chat_grant.includes('.'));
  const publicAccount=await (await me(sso)).text();assert.ok(!publicAccount.includes(row.chat_grant));assert.ok(!publicAccount.includes(storageKey));
  await db.refreshToken.update({where:{id:parent.id},data:{tokenHash:randomBytes(32).toString('hex')}});assert.equal((await me(sso)).status,200);
  const prompt={id:'qa-'+randomUUID(),title:'QA identity',project:'Eclipse Library',description:'QA',prompt:'Full prompt',format:'PNG',status:'published'};
  const created=await fetch(base+'/api/editor/prompts',{method:'POST',headers:{origin,cookie:sso,'content-type':'application/json'},body:JSON.stringify(prompt)});assert.equal(created.status,201);
  assert.ok((await (await fetch(base+'/api/public/image-examples')).json()).examples.some(x=>x.id===prompt.id));
  assert.equal((await fetch(base+'/api/editor/identity/logout',{method:'POST',headers:{origin:'https://evil.test',cookie:sso}})).status,403);
  // Provider is unavailable: preserve local session and recover, never accept stale authority.
  process.env.AUTH_PROTOCOL_V2_REQUIRED='false';assert.equal((await me(sso)).status,503);
  process.env.AUTH_PROTOCOL_V2_REQUIRED='true';assert.equal((await me(sso)).status,200);
  const second=cookieOf(await flow());
  assert.equal((await fetch(base+'/api/editor/logout',{method:'POST',headers:{origin,cookie:second}})).status,200);
  assert.ok(await db.refreshToken.findUnique({where:{id:parent.id}}));assert.equal((await me(sso)).status,200);
  const third=cookieOf(await flow());
  assert.equal((await fetch(base+'/api/editor/identity/logout',{method:'POST',headers:{origin,cookie:sso}})).status,200);
  assert.equal(await db.refreshToken.findUnique({where:{id:parent.id}}),null);
  assert.ok(await db.refreshToken.findUnique({where:{id:other.id}}));
  assert.equal(await db.ecosystemSession.count({where:{refreshSessionId:parent.id}}),0);
  assert.equal((await me(third)).status,401);assert.equal((await me(localCookie)).status,200);
  parent=await device();const fourth=cookieOf(await flow());
  await db.user.update({where:{id:user.id},data:{bannedAt:new Date()}});assert.equal((await me(fourth)).status,401);
  await db.user.update({where:{id:user.id},data:{bannedAt:null}});
  const fifth=cookieOf(await flow());await pool.query('update editor_identity_links set revoked_at=now()');assert.equal((await me(fifth)).status,401);
  // Wrong project or credential cannot revoke a session, and retries are safe.
  const sessions=new EcosystemSessionService();const grant=await sessions.issue({sessionId:other.id,subject:user.id,clientId:'eclipse-library'});assert.ok(grant);
  assert.equal(await sessions.revoke('eclipse-dnd-forge',grant.token),null);assert.deepEqual(await sessions.inspect('eclipse-library','z'.repeat(43)),{active:false});assert.ok(await db.refreshToken.findUnique({where:{id:other.id}}));
  assert.equal(await sessions.issue({sessionId:other.id,subject:'wrong-subject',clientId:'eclipse-library'}),null);
  await db.user.update({where:{id:user.id},data:{deletedAt:new Date()}});assert.deepEqual(await sessions.inspect('eclipse-library',grant.token),{active:false});
  await db.user.update({where:{id:user.id},data:{deletedAt:null}});
  await db.ecosystemSession.updateMany({where:{refreshSessionId:other.id},data:{expiresAt:new Date(0)}});assert.deepEqual(await sessions.inspect('eclipse-library',grant.token),{active:false});
  assert.equal(await sessions.revoke('eclipse-library',grant.token),null);assert.ok(await db.refreshToken.findUnique({where:{id:other.id}}));
  await db.ecosystemSession.updateMany({where:{refreshSessionId:other.id},data:{expiresAt:new Date(Date.now()+3600000)}});
  assert.equal(await sessions.revoke('eclipse-library',grant.token),other.id);assert.equal(await sessions.revoke('eclipse-library',grant.token),null);
 } finally {
  if(api&&api.exitCode===null){const ended=once(api,'exit');api.kill();await ended;}
  if(chat)await chat.close();await pool.end();await db.$disconnect();
 }
});
