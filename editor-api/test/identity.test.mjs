import test from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPairSync, sign } from 'node:crypto';
import { LibraryIdentity } from '../identity.mjs';
const issuer='https://chat.example.test/eclipse-chat';
const origin='https://library.example.test';
const {privateKey,publicKey}=generateKeyPairSync('ed25519');
const jwk={...publicKey.export({format:'jwk'}),kid:'test-key',alg:'EdDSA',use:'sig'};
function token(overrides={}, headerOverrides={}) {
  const now=Math.floor(Date.now()/1000);
  const parts=[{alg:'EdDSA',typ:'JWT',kid:'test-key',...headerOverrides},{iss:issuer,aud:'eclipse-library',sub:'editor-1',name:'Editor',iat:now,exp:now+300,jti:'00000000-0000-4000-8000-000000000001',...overrides}].map(x=>Buffer.from(JSON.stringify(x)).toString('base64url'));
  return [...parts,sign(null,Buffer.from(parts.join('.')),privateKey).toString('base64url')].join('.');
}
function fixture(overrides={}, header={}) {
  const calls=[];
  const identity=new LibraryIdentity({origin,env:{LIBRARY_CHAT_LOGIN_ENABLED:'true',LIBRARY_CHAT_ISSUER:issuer},fetchImpl:async (url,options)=>{
    calls.push({url,options});
    return Response.json(url.endsWith('jwks.json') ? {keys:[jwk]} : url.endsWith('/inspect') ? {active:true,subject:'editor-1',clientId:'eclipse-library',expiresAt:new Date(Date.now()+3600000).toISOString()} : {access_token:token(overrides,header),token_type:'Bearer',sessionGrant:{token:'g'.repeat(43)}});
  }});
  const flow=identity.start(); const request=new URL(flow.authorizeUrl);
  const callback=new URL(identity.callback);callback.searchParams.set('state',request.searchParams.get('state'));callback.searchParams.set('code','c'.repeat(43));
  return {identity,flow,request,callback,calls};
}
test('SSO is disabled by default and does not create a flow',()=>{
  const client=new LibraryIdentity({origin,env:{}});assert.equal(client.enabled,false);assert.throws(()=>client.start(),/identity_disabled/);
});
test('PKCE flow uses the real Chat authorize hash and a bound secure cookie',async()=>{
  const f=fixture();assert.equal(f.request.hash,'#authorize');assert.equal(f.request.searchParams.get('client_id'),'eclipse-library');assert.equal(f.request.searchParams.get('code_challenge_method'),'S256');assert.match(f.flow.cookie,/HttpOnly; Secure; SameSite=Lax/);
  const result=await f.identity.complete(f.callback,f.flow.cookie);assert.equal(result.subject,'editor-1');assert.equal(result.issuer,issuer);
  const body=JSON.parse(f.calls[0].options.body);assert.equal(body.redirectUri,f.identity.callback);assert.equal(body.codeVerifier.length,43);assert.equal(f.calls[0].options.redirect,'error');
  await assert.rejects(()=>f.identity.complete(f.callback,f.flow.cookie),/invalid_identity_flow/);
});
test('missing or wrong browser cookie cannot redeem the flow',async()=>{
  const f=fixture();await assert.rejects(()=>f.identity.complete(f.callback,''),/invalid_identity_flow/);await assert.rejects(()=>f.identity.complete(f.callback,'library_identity_flow=wrong'),/invalid_identity_flow/);assert.equal(f.calls.length,0);
});
test('wrong, duplicate and expired states are rejected before exchange',async()=>{
  for(const mode of ['wrong','duplicate','expired']) {const f=fixture();if(mode==='wrong')f.callback.searchParams.set('state','z'.repeat(43));if(mode==='duplicate')f.callback.searchParams.append('state','x'.repeat(43));if(mode==='expired')for(const flow of f.identity.pending.values())flow.expiresAt=0;await assert.rejects(()=>f.identity.complete(f.callback,f.flow.cookie),/invalid_identity_flow/);assert.equal(f.calls.length,0);}
});
for(const [label,claims,header] of [
  ['wrong audience',{aud:'eclipse-dnd-forge'},{}],['wrong issuer',{iss:'https://evil.test'},{}],['expired',{exp:1},{}],['future issuance',{iat:Math.floor(Date.now()/1000)+120},{}],['extended lifetime',{exp:Math.floor(Date.now()/1000)+3600},{}],['untrusted key URL',{}, {jku:'https://evil.test/jwks'}],['wrong algorithm',{}, {alg:'none'}],
]) test(`rejects ${label}`,async()=>{const f=fixture(claims,header);await assert.rejects(()=>f.identity.complete(f.callback,f.flow.cookie));});
test('rejects a signature made with a different key',async()=>{
  const f=fixture(); const other=generateKeyPairSync('ed25519');const parts=token().split('.');parts[2]=sign(null,Buffer.from(parts.slice(0,2).join('.')),other.privateKey).toString('base64url');
  const original=f.identity.fetchImpl;f.identity.fetchImpl=async(url,options)=>url.endsWith('/token')?Response.json({access_token:parts.join('.'),token_type:'Bearer'}):original(url,options);
  await assert.rejects(()=>f.identity.complete(f.callback,f.flow.cookie),/signature is invalid/);
});
test('rejects unsafe identity configuration',()=>{
  for(const value of ['http://chat.example.test','https://user:pass@chat.example.test','https://chat.example.test/?next=x'])assert.throws(()=>new LibraryIdentity({origin,env:{LIBRARY_CHAT_LOGIN_ENABLED:'true',LIBRARY_CHAT_ISSUER:value}}));
});
import { GrantCipher, LibrarySessionStore } from '../identity-session.mjs';
import { randomBytes } from 'node:crypto';
test('grant encryption is authenticated and bound to its Library row',()=>{
 const cipher=new GrantCipher(randomBytes(32).toString('base64')), token='g'.repeat(43);
 const encrypted=cipher.seal(token,'session:1'); assert.equal(cipher.open(encrypted,'session:1'),token);
 assert.ok(!encrypted.includes(token)); assert.notEqual(cipher.seal(token,'session:1'),encrypted);
 assert.throws(()=>cipher.open(encrypted,'session:2'));
 assert.throws(()=>new GrantCipher(randomBytes(32).toString('base64')).open(encrypted,'session:1'));
 assert.throws(()=>new GrantCipher(''));
});
test('provider outage preserves session for retry; definitive revocation removes it',async()=>{
 let deleted=false,fail=true;
 const row={id:'account',session_id:'s',identity_link_id:'l',issuer,subject:'editor-1',expires_at:new Date(Date.now()+3600000)};
 const pool={query:async sql=>sql.startsWith('delete')?(deleted=true,{rows:[]}):({rows:[row]})};
 const identity={enabled:true,issuer,clientId:'eclipse-library',sessionRequest:async()=>{if(fail)throw Object.assign(new Error('identity_unavailable'),{statusCode:503});return {active:false};}};
 const store=new LibrarySessionStore({pool,identity,env:{LIBRARY_IDENTITY_STORAGE_KEY_B64:randomBytes(32).toString('base64')}});
 row.chat_grant=store.cipher.seal('g'.repeat(43),store.binding(row));
 const req={headers:{cookie:'library_editor_session=test'}};
 await assert.rejects(()=>store.account(req),/identity_unavailable/);assert.equal(deleted,false);
 fail=false;assert.equal(await store.account(req),null);assert.equal(deleted,true);
});
