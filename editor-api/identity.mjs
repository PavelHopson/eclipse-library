import { createHash, randomBytes } from 'node:crypto';
import { JwksVerifier } from './identity-verifier.mjs';
import { parseCookie } from './auth.mjs';

const digest = value => createHash('sha256').update(value).digest('hex');
const random = () => randomBytes(32).toString('base64url');
export const FLOW_COOKIE = 'library_identity_flow';
export const clearFlowCookie = `${FLOW_COOKIE}=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Lax`;
const fail = code => Object.assign(new Error(code), { code });
function secureUrl(value) {
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) throw new Error('Identity URLs must use HTTPS without credentials, query or fragment');
  return url;
}

export class LibraryIdentity {
  constructor({ env = process.env, origin, fetchImpl = fetch } = {}) {
    this.enabled = env.LIBRARY_CHAT_LOGIN_ENABLED === 'true';
    this.pending = new Map();
    this.fetchImpl = fetchImpl;
    if (!this.enabled) return;
    const publicOrigin = secureUrl(origin);
    if (publicOrigin.pathname !== '/') throw new Error('Library origin must not contain a path');
    this.issuer = secureUrl(env.LIBRARY_CHAT_ISSUER || 'https://app.star-crm.ru/eclipse-chat').href.replace(/\/$/, '');
    this.clientId = 'eclipse-library';
    this.callback = `${publicOrigin.origin}/editor-api/api/editor/identity/callback`;
    this.verifier = new JwksVerifier({ issuer: this.issuer, audience: this.clientId, jwksUrl: `${this.issuer}/api/ecosystem/.well-known/jwks.json`, fetchImpl });
  }
  start(linkSessionHash = null) {
    if (!this.enabled) throw fail('identity_disabled');
    for (const [key, flow] of this.pending) if (flow.expiresAt <= Date.now()) this.pending.delete(key);
    if (this.pending.size >= 1000) throw fail('identity_busy');
    const state = random(), cookie = random(), verifier = random();
    const challenge = createHash('sha256').update(verifier, 'ascii').digest('base64url');
    this.pending.set(digest(state), { cookieHash: digest(cookie), verifier, linkSessionHash, expiresAt: Date.now() + 300_000 });
    const url = new URL(`${this.issuer}/`);
    url.searchParams.set('client_id', this.clientId);
    url.searchParams.set('redirect_uri', this.callback);
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('code_challenge_method', 'S256');
    url.searchParams.set('code_challenge', challenge);
    url.searchParams.set('state', state);
    url.hash = 'authorize';
    return { authorizeUrl: url.href, cookie: `${FLOW_COOKIE}=${cookie}; Max-Age=300; Path=/; HttpOnly; Secure; SameSite=Lax` };
  }
  async sessionRequest(action, token) {
    if (!this.enabled || !['inspect', 'revoke'].includes(action)) throw fail('identity_disabled');
    try {
      const response = await this.fetchImpl(`${this.issuer}/api/ecosystem/session/${action}`, {
        method: 'POST', redirect: 'error', signal: AbortSignal.timeout(10_000),
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({ clientId: this.clientId, token }),
      });
      if (!response.ok || !response.body) { await response.body?.cancel(); throw fail('identity_unavailable'); }
      const reader=response.body.getReader(); let size=0; const chunks=[];
      while(true) { const {done,value}=await reader.read(); if(done)break; size+=value.byteLength; if(size>4096){await reader.cancel();throw fail('identity_unavailable');}chunks.push(Buffer.from(value)); }
      return JSON.parse(Buffer.concat(chunks).toString('utf8'));
    } catch { throw Object.assign(fail('identity_unavailable'), { statusCode: 503 }); }
  }
  async complete(url, cookieHeader) {
    if (!this.enabled) throw fail('identity_disabled');
    const state = url.searchParams.get('state') || '';
    const code = url.searchParams.get('code') || '';
    if (url.searchParams.getAll('state').length !== 1 || url.searchParams.getAll('code').length !== 1 || !/^[A-Za-z0-9_-]{43}$/.test(state) || !/^[A-Za-z0-9_-]{43}$/.test(code)) throw fail('invalid_identity_flow');
    const key = digest(state), flow = this.pending.get(key);
    const cookie = parseCookie(cookieHeader)[FLOW_COOKIE] || '';
    if (!flow || flow.cookieHash !== digest(cookie) || flow.expiresAt <= Date.now()) throw fail('invalid_identity_flow');
    this.pending.delete(key);
    const response = await this.fetchImpl(`${this.issuer}/api/ecosystem/token`, {
      method: 'POST', redirect: 'error', signal: AbortSignal.timeout(10_000),
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({ clientId: this.clientId, code, codeVerifier: flow.verifier, redirectUri: this.callback, grantType: 'authorization_code' }),
    });
    if (!response.ok) { await response.body?.cancel(); throw fail('identity_exchange_failed'); }
    // Bound the response body as well as the request time.
    if (!response.body) throw fail('identity_exchange_failed');
    const reader = response.body.getReader(); let size = 0; const chunks = [];
    while (true) { const { done, value } = await reader.read(); if (done) break; size += value.byteLength; if (size > 32768) { await reader.cancel(); throw fail('identity_exchange_failed'); } chunks.push(Buffer.from(value)); }
    const payload = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (payload.token_type !== 'Bearer') throw fail('identity_exchange_failed');
    const identity = await this.verifier.verify(payload.access_token);
    const grant = payload.sessionGrant;
    if (!grant || !/^[A-Za-z0-9_-]{43}$/.test(grant.token)) throw fail('identity_session_required');
    const live = await this.sessionRequest('inspect', grant.token);
    const expiresAt = Date.parse(live.expiresAt);
    if (live.active !== true || live.subject !== identity.subject || live.clientId !== this.clientId || !Number.isFinite(expiresAt) || expiresAt <= Date.now() || expiresAt > Date.now() + 8 * 3600_000) throw fail('identity_session_required');
    return { ...identity, issuer: this.issuer, linkSessionHash: flow.linkSessionHash, grantToken: grant.token, sessionExpiresAt: new Date(expiresAt) };
  }
}