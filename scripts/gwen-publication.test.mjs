import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync, readFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { safePath, checkPublicText, canonicalBytes, publicEntries, validateTree, smokeBase, root } from './gwen-publication.mjs';

test('publication paths deny traversal, absolute paths and protocol syntax', () => {
  assert.equal(safePath('assets/suit.webp'), 'assets/suit.webp');
  for (const path of ['../file', '/tmp/file', 'C:/file', 'a//file', 'a/./file', 'a\\file', 'https://example.com/file']) assert.throws(() => safePath(path));
});
test('text guard blocks local paths and credential-shaped values without exposing them', () => {
  checkPublicText('Read https://example.org/guide and assets/suit.webp', 'sample');
  for (const text of ['C:' + '\\Users\\test', 'file:///secret', '-----BEGIN PRIVATE KEY-----', 'ghp_' + 'x'.repeat(30)]) assert.throws(() => checkPublicText(text, 'sample'));
});
test('Windows line endings normalize; binary assets remain unchanged', () => {
  assert.equal(canonicalBytes('x.html', Buffer.from('a\r\nb\r')).toString(), 'a\nb\n');
  assert.deepEqual(canonicalBytes('x.webp', Buffer.from([13,10,0,255])), Buffer.from([13,10,0,255]));
});
test('public package has exact reviewed files and no service documents', () => {
  const entries = publicEntries();
  assert.equal(entries.length, 18);
  assert.ok(entries.some(e => e.path.endsWith('Gwen-Stacy-Guide.docx')));
  assert.ok(entries.every(e => !/README|design-qa|reports\//.test(e.path)));
  for (const entry of entries) assert.match(entry.sha256, /^[a-f0-9]{64}$/);
});
test('unexpected staged files fail closed, including hidden files', () => {
  const parent = resolve(tmpdir()), dir = mkdtempSync(join(parent, 'gwen-publication-test-'));
  try {
    writeFileSync(join(dir, 'index.html'), 'ok');
    validateTree(dir, ['index.html']);
    writeFileSync(join(dir, '.env'), 'not a real credential');
    assert.throws(() => validateTree(dir, ['index.html']), /Unexpected/);
  } finally {
    assert.equal(resolve(dir, '..'), parent);
    assert.ok(dir.startsWith(join(parent, 'gwen-publication-test-')));
    rmSync(dir, { recursive: true });
  }
});
test('clean checkout does not depend on ignored local README or QA documents', () => {
  const parent = resolve(tmpdir()), dir = mkdtempSync(join(parent, 'gwen-publication-test-'));
  try {
    for (const entry of publicEntries()) {
      const target = join(dir, entry.path.startsWith('experiments/') ? 'web/' + entry.path : entry.path);
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, entry.bytes);
    }
    assert.equal(publicEntries(dir).length, 18);
  } finally {
    assert.equal(resolve(dir, '..'), parent);
    assert.ok(dir.startsWith(join(parent, 'gwen-publication-test-')));
    rmSync(dir, { recursive: true });
  }
});
test('HTTP verification cannot be repurposed for arbitrary hosts or credentials', () => {
  assert.equal(smokeBase('https://library.eclipse-forge.ru/').hostname, 'library.eclipse-forge.ru');
  assert.equal(smokeBase('http://127.0.0.1:4186/').port, '4186');
  for (const url of ['https://example.com/', 'http://library.eclipse-forge.ru/', 'http://169.254.169.254/', 'https://user:pass@library.eclipse-forge.ru/', 'https://library.eclipse-forge.ru:444/', 'http://127.0.0.1/a', 'http://127.0.0.1/?q=1']) assert.throws(() => smokeBase(url));
});
test('CI validates Gwen before SSH and checks exact assets after deploy', () => {
  const deploy = readFileSync(join(root, '.github/workflows/deploy-vps.yml'), 'utf8');
  const quality = readFileSync(join(root, '.github/workflows/quality.yml'), 'utf8');
  assert.match(quality, /gwen-publication\.test\.mjs/);
  const gate = deploy.indexOf('gwen-publication.mjs --check-stage _site');
  assert.ok(gate >= 0 && gate < deploy.indexOf('- name: Setup SSH'));
  assert.match(deploy, /gwen-publication\.mjs --smoke https:\/\/library\.eclipse-forge\.ru\//);
  assert.match(deploy, /_site\/experiments\/gwen-reveal\/README\.md/);
  assert.match(deploy, /_site\/experiments\/gwen-reveal\/design-qa\.md/);
});
test('live browser QA uses the explicit static entry instead of the directory SPA fallback', () => {
  const main = readFileSync(join(root, 'scripts/gwen-browser-qa.cjs'), 'utf8');
  const edge = readFileSync(join(root, 'scripts/gwen-browser-edge-cases.cjs'), 'utf8');
  assert.match(main, /const base = directory \+ 'index.html'/);
  assert.match(main, /gp.goto\(directory\+'guide.html'\)/);
  assert.match(edge, /gwen-reveal\/index.html/);
});
