import crypto from 'node:crypto';

const SCRYPT = { N: 16384, r: 8, p: 1, keylen: 64 };

export function normalizeEmail(value) { return String(value || '').trim().toLowerCase(); }

export function hashPassword(password, salt = crypto.randomBytes(16).toString('base64url')) {
  if (typeof password !== 'string' || password.length < 12) throw new Error('Password must be at least 12 characters');
  const hash = crypto.scryptSync(password, salt, SCRYPT.keylen, { N: SCRYPT.N, r: SCRYPT.r, p: SCRYPT.p }).toString('base64url');
  return { salt, hash };
}

export function verifyPassword(password, salt, expectedHash) {
  if (typeof password !== 'string' || !salt || !expectedHash) return false;
  const actual = hashPassword(password, salt).hash;
  const a = Buffer.from(actual); const b = Buffer.from(expectedHash);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function createSessionToken() { return crypto.randomBytes(32).toString('base64url'); }
export function hashSessionToken(token) { return crypto.createHash('sha256').update(String(token)).digest('hex'); }

export function parseCookie(header = '') {
  return Object.fromEntries(String(header).split(';').map((part) => part.trim().split('='))
    .filter(([key, value]) => key && value).map(([key, ...value]) => [key, decodeURIComponent(value.join('='))]));
}

export function sessionCookie(token, maxAgeSeconds) { return `library_editor_session=${encodeURIComponent(token)}; Max-Age=${maxAgeSeconds}; Path=/; HttpOnly; Secure; SameSite=Strict`; }
export function clearSessionCookie() { return 'library_editor_session=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict'; }
