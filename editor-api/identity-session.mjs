import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto';
import { hashSessionToken, parseCookie } from './auth.mjs';

export class GrantCipher {
  constructor(encoded) {
    if (typeof encoded !== 'string' || !/^[A-Za-z0-9+/]{43}=$/.test(encoded)) throw new Error('LIBRARY_IDENTITY_STORAGE_KEY_B64 must be a base64 32-byte key');
    this.key = Buffer.from(encoded, 'base64');
    if (this.key.length !== 32) throw new Error('Invalid identity storage key');
  }
  seal(token, binding) {
    const iv = randomBytes(12), cipher = createCipheriv('aes-256-gcm', this.key, iv);
    cipher.setAAD(Buffer.from(binding));
    const body = Buffer.concat([cipher.update(token, 'utf8'), cipher.final()]);
    return [iv, cipher.getAuthTag(), body].map(x => x.toString('base64url')).join('.');
  }
  open(value, binding) {
    if (typeof value !== 'string' || value.length > 512) throw new Error('Invalid encrypted grant');
    const parts = value.split('.'); if (parts.length !== 3 || parts.some(x => !/^[A-Za-z0-9_-]+$/.test(x))) throw new Error('Invalid encrypted grant');
    const [iv, tag, body] = parts.map(x => Buffer.from(x,'base64url'));
    if (iv.length !== 12 || tag.length !== 16) throw new Error('Invalid encrypted grant');
    const decipher = createDecipheriv('aes-256-gcm', this.key, iv); decipher.setAuthTag(tag); decipher.setAAD(Buffer.from(binding));
    const token = Buffer.concat([decipher.update(body), decipher.final()]).toString('utf8');
    if (!/^[A-Za-z0-9_-]{43}$/.test(token)) throw new Error('Invalid encrypted grant');
    return token;
  }
}

export class LibrarySessionStore {
  constructor({ pool, identity, env = process.env }) {
    this.pool = pool; this.identity = identity;
    this.cipher = identity.enabled ? new GrantCipher(env.LIBRARY_IDENTITY_STORAGE_KEY_B64) : null;
  }
  binding(row) { return `eclipse-library-session:${row.session_id}:${row.identity_link_id}`; }
  async row(req) {
    const token = parseCookie(req.headers.cookie).library_editor_session;
    if (!token) return null;
    const { rows } = await this.pool.query(`select a.id,a.email,a.role,s.id as session_id,s.identity_link_id,s.chat_grant,s.expires_at,l.issuer,l.subject
      from editor_sessions s join editor_accounts a on a.id=s.account_id left join editor_identity_links l on l.id=s.identity_link_id
      where s.token_hash=$1 and s.expires_at>now() and (s.identity_link_id is null or (l.revoked_at is null and l.account_id=a.id))`, [hashSessionToken(token)]);
    return rows[0] || null;
  }
  async account(req) {
    const row = await this.row(req); if (!row || !['owner','editor','viewer'].includes(row.role)) return null;
    if (row.identity_link_id) {
      if (!this.identity.enabled || row.issuer !== this.identity.issuer) return null;
      let grant; try { grant = this.cipher.open(row.chat_grant, this.binding(row)); } catch { return null; }
      const live = await this.identity.sessionRequest('inspect', grant);
      if (!live.active || live.subject !== row.subject || live.clientId !== this.identity.clientId || !Number.isFinite(Date.parse(live.expiresAt)) || Date.parse(live.expiresAt) <= Date.now()) {
        await this.pool.query('delete from editor_sessions where id=$1', [row.session_id]); return null;
      }
    }
    return { id: row.id, email: row.email, role: row.role, authMethod: row.identity_link_id ? 'chat' : 'password', sessionExpiresAt: row.expires_at };
  }
  async logoutEclipse(req) {
    // Do not inspect first: a retry must still be able to confirm revocation after a lost response.
    const row = await this.row(req);
    if (!row?.identity_link_id || !this.identity.enabled || row.issuer !== this.identity.issuer) return false;
    const grant = this.cipher.open(row.chat_grant, this.binding(row));
    const result = await this.identity.sessionRequest('revoke', grant);
    if (result.ok !== true) throw Object.assign(new Error('identity_unavailable'), { statusCode: 503 });
    await this.pool.query('delete from editor_sessions where id=$1', [row.session_id]);
    return true;
  }
}