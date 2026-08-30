import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import test from 'node:test';

const directory = new URL('../web/diagrams/', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('evidence-manifest.json', directory), 'utf8'));
const repositories = new Set([
  'eclipse-library',
  'eclipse-ai-hub',
  'eclipse-hopson-sentinel',
  'eclipse-media',
  'eclipse-dnd-forge',
]);

test('diagram evidence manifest covers every published diagram', async () => {
  assert.equal(manifest.schemaVersion, 'eclipse.diagram-evidence.v1');
  assert.deepEqual(Object.keys(manifest).sort(), ['diagrams', 'generatedAt', 'policy', 'schemaVersion']);
  assert.match(manifest.generatedAt, /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(typeof manifest.policy.claimRule, 'string');
  assert.equal(typeof manifest.policy.driftRule, 'string');
  assert.equal(typeof manifest.policy.executionBoundary, 'string');

  const files = (await readdir(directory)).filter((name) => name.endsWith('.html')).sort();
  assert.deepEqual(manifest.diagrams.map((item) => item.file).sort(), files);
  assert.equal(new Set(manifest.diagrams.map((item) => item.id)).size, manifest.diagrams.length);
});

test('every diagram claim has bounded local source evidence and explicit unknowns', () => {
  for (const diagram of manifest.diagrams) {
    assert.deepEqual(
      Object.keys(diagram).sort(),
      ['claims', 'file', 'id', 'sources', 'status', 'title', 'unknowns'],
      `${diagram.id} contains an unsupported evidence field`,
    );
    assert.match(diagram.id, /^[a-z0-9-]+$/);
    assert.equal(diagram.file, `${diagram.id}.html`);
    assert.equal(diagram.status, 'verified');
    assert.ok(diagram.claims.length > 0 && diagram.claims.every((claim) => typeof claim === 'string' && claim.length <= 240));
    assert.ok(diagram.unknowns.length > 0 && diagram.unknowns.every((item) => typeof item === 'string' && item.length <= 300));
    assert.ok(diagram.sources.length > 0);

    for (const source of diagram.sources) {
      assert.deepEqual(Object.keys(source).sort(), ['evidence', 'path', 'repository', 'snapshotSha256']);
      assert.ok(repositories.has(source.repository));
      assert.match(source.path, /^(?:[A-Za-z0-9._-]+\/)*[A-Za-z0-9._-]+$/);
      assert.doesNotMatch(source.path, /(?:^|\/)\.\.(?:\/|$)|^[A-Za-z]:|^\/|\\|:|https?:/i);
      assert.match(source.snapshotSha256, /^[a-f0-9]{64}$/);
      assert.ok(typeof source.evidence === 'string' && source.evidence.length <= 160);
    }
  }
});

test('evidence manifest is inert data', async () => {
  const raw = await readFile(new URL('evidence-manifest.json', directory), 'utf8');
  assert.doesNotMatch(raw, /<script|javascript:|\bfetch\s*\(|WebSocket|Authorization|api[_-]?key|token/i);
});
