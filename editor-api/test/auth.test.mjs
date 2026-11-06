import test from 'node:test';
import assert from 'node:assert/strict';
import { clearSessionCookie, hashPassword, hashSessionToken, normalizeEmail, parseCookie, sessionCookie, verifyPassword } from '../auth.mjs';

test('password hashes verify without storing plaintext', () => {
  const { salt, hash } = hashPassword('correct horse battery staple');
  assert.notEqual(hash, 'correct horse battery staple');
  assert.equal(verifyPassword('correct horse battery staple', salt, hash), true);
  assert.equal(verifyPassword('wrong password', salt, hash), false);
});

test('session cookies are strict and httpOnly', () => {
  const token = 'abc';
  assert.match(sessionCookie(token, 10), /HttpOnly/);
  assert.match(sessionCookie(token, 10), /Secure/);
  assert.match(sessionCookie(token, 10), /SameSite=Strict/);
  assert.match(clearSessionCookie(), /Max-Age=0/);
  assert.equal(parseCookie('a=1; library_editor_session=abc').library_editor_session, 'abc');
  assert.equal(hashSessionToken(token).length, 64);
});

test('email normalization is stable', () => assert.equal(normalizeEmail('  EDITOR@Example.COM '), 'editor@example.com'));
