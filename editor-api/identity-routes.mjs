import crypto from 'node:crypto';
import { LibrarySessionStore } from './identity-session.mjs';
import { LibraryIdentity, clearFlowCookie } from './identity.mjs';
import { createSessionToken, hashSessionToken, parseCookie, sessionCookie, clearSessionCookie } from './auth.mjs';
import { json, readJson } from './http.mjs';

export function createIdentityRoutes({ pool, origin, env = process.env, fetchImpl = fetch, identity = new LibraryIdentity({ env, origin, fetchImpl }), sessionStore = new LibrarySessionStore({ pool, identity, env }) }) {
  async function localSession(tokenHash) {
    const { rows } = await pool.query(`select a.id from editor_sessions s join editor_accounts a on a.id=s.account_id where s.token_hash=$1 and s.expires_at>now() and s.identity_link_id is null and a.role='editor'`, [tokenHash]);
    return rows[0];
  }
  function redirect(res, location, cookies) {
    res.writeHead(303, { location, 'set-cookie': cookies, 'cache-control': 'no-store', 'referrer-policy': 'no-referrer' }); res.end();
  }
  return async function identityRoutes(req, res, path) {
    if (!path.startsWith('/api/editor/identity/')) return false;
    if (path === '/api/editor/identity/config' && req.method === 'GET') { json(res, 200, { enabled: identity.enabled }); return true; }
    if (!identity.enabled) { json(res, 503, { error: 'identity_disabled' }); return true; }
    if (path === '/api/editor/identity/status' && req.method === 'GET') {
      const account = await sessionStore.account(req);
      if (!account) { json(res, 401, { error: 'editor_auth_required' }); return true; }
      const { rows } = await pool.query('select id from editor_identity_links where account_id=$1 and issuer=$2 and revoked_at is null', [account.id, identity.issuer]);
      json(res, 200, { linked: rows.length > 0, authMethod: account.authMethod }); return true;
    }
    if (path === '/api/editor/identity/logout' && req.method === 'POST') {
      if (req.headers.origin !== origin) { json(res, 403, { error: 'origin_rejected' }); return true; }
      if (!await sessionStore.logoutEclipse(req)) { json(res, 401, { error: 'chat_session_required' }); return true; }
      json(res, 200, { ok: true }, { 'set-cookie': clearSessionCookie() }); return true;
    }
    if (path === '/api/editor/identity/start' && req.method === 'POST') {
      if (req.headers.origin !== origin) { json(res, 403, { error: 'origin_rejected' }); return true; }
      const body = await readJson(req); let linkSessionHash = null;
      if (body.link === true) {
        const token = parseCookie(req.headers.cookie).library_editor_session;
        if (!token) { json(res, 401, { error: 'local_login_required' }); return true; }
        linkSessionHash = hashSessionToken(token);
        if (!await localSession(linkSessionHash)) { json(res, 403, { error: 'local_login_required' }); return true; }
      }
      try { const flow = identity.start(linkSessionHash); json(res, 200, { authorizeUrl: flow.authorizeUrl }, { 'set-cookie': flow.cookie }); }
      catch { json(res, 503, { error: 'identity_busy' }); }
      return true;
    }
    if (path === '/api/editor/identity/callback' && req.method === 'GET') {
      try {
        const verified = await identity.complete(new URL(req.url, origin), req.headers.cookie);
        if (verified.linkSessionHash) {
          // The password session must still be live when the cross-site flow returns.
          const account = await localSession(verified.linkSessionHash);
          if (!account) throw new Error('local_login_required');
          await pool.query(`insert into editor_identity_links (id,account_id,issuer,subject) values ($1,$2,$3,$4) on conflict do nothing`, [crypto.randomUUID(), account.id, verified.issuer, verified.subject]);
          const linked = await pool.query(`select id from editor_identity_links where account_id=$1 and issuer=$2 and subject=$3 and revoked_at is null`, [account.id, verified.issuer, verified.subject]);
          if (!linked.rows[0]) throw new Error('identity_link_conflict');
          redirect(res, '/editor.html?identity=linked', [clearFlowCookie]);
          return true;
        }
        const { rows } = await pool.query(`select l.id,l.account_id from editor_identity_links l join editor_accounts a on a.id=l.account_id where l.issuer=$1 and l.subject=$2 and l.revoked_at is null and a.role='editor'`, [verified.issuer, verified.subject]);
        if (!rows[0]) throw new Error('identity_access_denied');
        const token = createSessionToken();
        const expiresAt = verified.sessionExpiresAt;
        const maxAge = Math.floor((expiresAt.getTime() - Date.now()) / 1000);
        if (maxAge <= 0) throw new Error('identity_failed');
        const id = crypto.randomUUID();
        const encrypted = sessionStore.cipher.seal(verified.grantToken, sessionStore.binding({session_id:id, identity_link_id:rows[0].id}));
        await pool.query(`insert into editor_sessions (id,account_id,token_hash,expires_at,identity_link_id,chat_grant) values ($1,$2,$3,$4,$5,$6)`, [id, rows[0].account_id, hashSessionToken(token), expiresAt, rows[0].id, encrypted]);
        redirect(res, '/editor.html', [clearFlowCookie, sessionCookie(token, maxAge)]);
      } catch (error) {
        const safe = ['local_login_required', 'identity_link_conflict', 'identity_access_denied'].includes(error.message) ? error.message : 'identity_failed';
        redirect(res, `/login.html?error=${safe}`, [clearFlowCookie]);
      }
      return true;
    }
    json(res, 404, { error: 'not_found' }); return true;
  };
}