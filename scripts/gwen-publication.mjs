import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, lstatSync, realpathSync, existsSync } from 'node:fs';
import { resolve, sep, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const contract = JSON.parse(readFileSync(resolve(root, 'contracts/gwen-publication.json'), 'utf8'));
const textExtensions = new Set(['.html', '.css', '.js', '.json', '.md', '.txt']);

export function safePath(value) {
  assert.equal(typeof value, 'string');
  assert.match(value, /^[a-zA-Z0-9][a-zA-Z0-9._/-]*$/, 'Unsafe publication path');
  assert.ok(value.split('/').every(p => p && p !== '.' && p !== '..'), 'Unsafe publication path');
  return value;
}

export function checkPublicText(value, name) {
  assert.doesNotMatch(value, /\b[A-Za-z]:[\\/]|\\\\[^\s\\]+\\|file:\/\/|\/Users\/|\/home\/[^\s/]+\//, `Local path in ${name}`);
  assert.doesNotMatch(value, /-----BEGIN (?:[A-Z]+ )?PRIVATE KEY-----|\bgh[pousr]_[A-Za-z0-9]{20,}|\bsk-(?:proj-|ant-)?[A-Za-z0-9_-]{25,}/, `Possible credential in ${name}`);
}

export function canonicalBytes(name, bytes) {
  return textExtensions.has(extname(name)) ? Buffer.from(bytes.toString('utf8').replace(/\r\n?/g, '\n')) : bytes;
}

function walk(base, prefix = '') {
  return readdirSync(base).sort().flatMap(name => {
    const path = resolve(base, name), stat = lstatSync(path);
    assert.ok(!stat.isSymbolicLink(), `Symlink is not a publication asset: ${prefix}${name}`);
    return stat.isDirectory() ? walk(path, `${prefix}${name}/`) : [`${prefix}${name}`];
  });
}

export function validateTree(base, expected) {
  assert.deepEqual(walk(base), [...expected].sort(), 'Unexpected or missing files in Gwen publication tree');
}

export function publicEntries(sourceRoot = root) {
  assert.equal(contract.schemaVersion, 1);
  assert.equal(contract.entry, `${contract.route}/index.html`, 'Use the explicit static entry, not the server directory fallback');
  [contract.projectRoot, contract.route, contract.guide, ...contract.publicFiles, ...contract.internalFiles].forEach(safePath);
  assert.equal(new Set(contract.publicFiles).size, contract.publicFiles.length, 'Duplicate public entry');
  const project = resolve(sourceRoot, contract.projectRoot);
  const internalPresent = contract.internalFiles.filter(name => existsSync(resolve(project, name)));
  validateTree(project, [...contract.publicFiles, ...internalPresent]);
  const specs = contract.publicFiles.map(name => ({ source: `${contract.projectRoot}/${name}`, path: `${contract.route}/${name}` }));
  specs.push({ source: contract.guide, path: contract.guide });
  return specs.map(({ source, path }) => {
    assert.ok(!lstatSync(resolve(sourceRoot, source)).isSymbolicLink(), `Symlink is not a publication asset: ${path}`);
    const actual = realpathSync(resolve(sourceRoot, source));
    assert.ok(actual.startsWith(realpathSync(sourceRoot) + sep), 'Publication asset escaped checkout');
    assert.ok(lstatSync(actual).isFile(), `Not a file: ${path}`);
    const bytes = canonicalBytes(path, readFileSync(actual));
    assert.ok(bytes.length > 0 && bytes.length < 5_000_000, `Unexpected size: ${path}`);
    if (textExtensions.has(extname(path))) checkPublicText(bytes.toString('utf8'), path);
    return { path, bytes, size: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex') };
  });
}

export function validateStage(stageRoot) {
  const stage = resolve(stageRoot);
  assert.ok(stage !== root && !root.startsWith(stage + sep), 'Stage must not be checkout or its ancestor');
  validateTree(resolve(stage, contract.route), contract.publicFiles);
  for (const entry of publicEntries()) {
    assert.ok(canonicalBytes(entry.path, readFileSync(resolve(stage, entry.path))).equals(entry.bytes), `Stage mismatch: ${entry.path}`);
  }
}

export function smokeBase(value) {
  const url = new URL(value);
  assert.ok(!url.username && !url.password, 'Smoke URL cannot contain credentials');
  const prod = url.protocol === 'https:' && url.hostname === 'library.eclipse-forge.ru' && !url.port;
  const local = url.protocol === 'http:' && url.hostname === '127.0.0.1';
  assert.ok(prod || local, 'Smoke is limited to canonical production or loopback preview');
  assert.equal(url.pathname, '/', 'Smoke base must use the site root');
  assert.ok(!url.search && !url.hash, 'Smoke base cannot contain query or fragment');
  return url;
}

export async function smoke(value) {
  const base = smokeBase(value);
  for (const entry of publicEntries()) {
    const url = new URL(entry.path, base);
    url.searchParams.set('gwen', entry.sha256.slice(0, 12));
    const response = await fetch(url, { redirect: 'error', signal: AbortSignal.timeout(12000), cache: 'no-store' });
    assert.equal(response.status, 200, `${entry.path}: HTTP ${response.status}`);
    assert.ok(response.body, `Empty response: ${entry.path}`);
    const chunks = []; let total = 0;
    for await (const chunk of response.body) {
      total += chunk.length;
      assert.ok(total <= entry.size * 2 + 1024, `Oversized response: ${entry.path}`);
      chunks.push(chunk);
    }
    assert.ok(canonicalBytes(entry.path, Buffer.concat(chunks)).equals(entry.bytes), `Live asset differs: ${entry.path}`);
    if (entry.path.endsWith('.docx')) assert.match(response.headers.get('content-type') || '', /wordprocessingml|octet-stream/, 'DOCX MIME is not downloadable');
  }
  return publicEntries().length;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const [mode, value] = process.argv.slice(2);
    if (mode === '--check') console.log(`Gwen public surface passed: ${publicEntries().length} files; internal documents excluded.`);
    else if (mode === '--check-stage' && value) { validateStage(value); console.log('Gwen staged payload passed.'); }
    else if (mode === '--smoke' && value) console.log(`Gwen HTTP smoke passed: ${await smoke(value)} exact assets.`);
    else throw new Error('Usage: --check | --check-stage DIRECTORY | --smoke BASE_URL');
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
