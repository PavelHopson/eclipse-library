import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import {
  PACKET_SCHEMA,
  assertNoCheckoutFilters,
  inspectPatch,
  summarizeCatalogChange,
  validateDecisionInput,
  validateReviewPacket,
} from './review-preview-policy.mjs';
import { cleanupPreview, preparePreview, recordDecision } from './review-preview.mjs';

function packet(id = 'safe-tool') {
  return {
    schemaVersion: PACKET_SCHEMA,
    authority: 'local-review-only',
    catalogMutationAllowed: false,
    resource: { id, title: 'Safe Tool' },
    review: { ready: true, outcome: 'approve', checks: { source: { passed: true }, terms: { passed: true }, risk: { passed: true }, fit: { passed: true } } },
    preview: { autoApply: false, autoMerge: false, autoDeploy: false },
  };
}

function runGit(cwd, args) {
  return execFileSync('git', args, { cwd, encoding: 'utf8', windowsHide: true }).trim();
}

test('packet and decision gates fail closed', () => {
  assert.equal(validateReviewPacket(packet()).resourceId, 'safe-tool');
  assert.throws(() => validateReviewPacket({ ...packet(), catalogMutationAllowed: true }), /non-mutating/);
  assert.throws(() => validateReviewPacket({ ...packet(), review: { ready: true, outcome: 'revise' } }), /outcome approve/);
  assert.throws(() => validateReviewPacket({ ...packet(), review: { ...packet().review, checks: { ...packet().review.checks, risk: { passed: false } } } }), /missing evidence checks: risk/);
  assert.throws(() => validateDecisionInput({ decision: 'approve', checks: ['quality'], confirmNoAutoMerge: true }), /missing required checks/);
  assert.throws(() => validateDecisionInput({ decision: 'approve', checks: ['quality', 'security', 'responsive', 'deploy'], confirmNoAutoMerge: true }), /unsupported checks: deploy/);
  const decision = validateDecisionInput({ decision: 'approve', checks: ['responsive', 'quality', 'security'], confirmNoAutoMerge: true });
  assert.equal(decision.mergeAllowed, false);
  assert.equal(decision.deployAllowed, false);
});

test('patch inspection rejects executable and escaping paths', () => {
  const safe = 'diff --git a/catalog/resources.json b/catalog/resources.json\n--- a/catalog/resources.json\n+++ b/catalog/resources.json\n';
  assert.deepEqual([...inspectPatch(safe).files], ['catalog/resources.json']);
  assert.throws(() => inspectPatch('diff --git a/web/app.js b/web/app.js\n--- a/web/app.js\n+++ b/web/app.js\n'), /outside the editorial allowlist/);
  assert.throws(() => inspectPatch('diff --git a/../outside b/../outside\n--- a/../outside\n+++ b/../outside\n'), /escapes the repository/);
  assert.throws(() => inspectPatch(`${safe}diff --git a/catalog/resources.json b/catalog/resources.json\n--- a/catalog/resources.json\n+++ b/catalog/resources.json\n`), /duplicate diff headers/);
  assert.throws(() => inspectPatch('diff --git a/guides/new.md b/guides/new.md\nnew file mode 100644\n--- /dev/null\n+++ b/guides/new.md\n'), /New, deleted/);
  assert.throws(() => assertNoCheckoutFilters([{ path: '.gitattributes', content: '*.json filter=evil' }]), /checkout filter/);
  assert.throws(() => inspectPatch(`${safe}GIT binary patch\n`), /Binary patches/);
});

test('semantic summary permits exactly one reviewed record', () => {
  const before = { items: [{ id: 'safe-tool', title: 'Before', risks: [] }, { id: 'other', title: 'Other' }] };
  const after = { items: [{ id: 'safe-tool', title: 'After', risks: ['Review permissions'] }, { id: 'other', title: 'Other' }] };
  const summary = summarizeCatalogChange(before, after, 'safe-tool', ['catalog/resources.json']);
  assert.deepEqual([...summary.changedFields], ['risks', 'title']);
  assert.throws(() => summarizeCatalogChange(before, { schemaVersion: 2, items: after.items }, 'safe-tool'), /catalog metadata/);
  assert.throws(() => summarizeCatalogChange(before, { items: [...after.items, after.items[0]] }, 'safe-tool'), /duplicate resource id/);
  assert.throws(() => summarizeCatalogChange(before, { items: after.items.map((item) => ({ ...item, title: `${item.title}!` })) }, 'safe-tool'), /exactly the reviewed/);
});

test('end-to-end preview uses a detached worktree and never mutates source branch', async (t) => {
  const root = await mkdtemp(join(tmpdir(), 'eclipse-review-preview-'));
  const repo = join(root, 'repo');
  const artifacts = join(repo, '.artifacts', 'review-previews');
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(join(repo, 'catalog'), { recursive: true });
  await writeFile(join(repo, '.gitignore'), '.artifacts/\n');
  const original = { schemaVersion: 1, items: [{ id: 'safe-tool', title: 'Before', risks: [] }] };
  await writeFile(join(repo, 'catalog', 'resources.json'), `${JSON.stringify(original, null, 2)}\n`);
  runGit(repo, ['init', '-b', 'main']);
  runGit(repo, ['config', 'user.email', 'review@example.invalid']);
  runGit(repo, ['config', 'user.name', 'Review Test']);
  runGit(repo, ['add', '.gitignore', 'catalog/resources.json']);
  runGit(repo, ['commit', '-m', 'base']);
  const base = runGit(repo, ['rev-parse', 'HEAD']);

  const changed = { schemaVersion: 1, items: [{ id: 'safe-tool', title: 'After', risks: ['Review permissions'] }] };
  await writeFile(join(repo, 'catalog', 'resources.json'), `${JSON.stringify(changed, null, 2)}\n`);
  const patchText = runGit(repo, ['diff', '--', 'catalog/resources.json']);
  await writeFile(join(repo, 'catalog', 'resources.json'), `${JSON.stringify(original, null, 2)}\n`);
  const packetPath = join(root, 'packet.json');
  const patchPath = join(root, 'proposal.diff');
  await writeFile(packetPath, `${JSON.stringify(packet(), null, 2)}\n`);
  await writeFile(patchPath, `${patchText}\n`);

  const preview = await preparePreview({ repoRoot: repo, artifactsRoot: artifacts, packetPath, patchPath, baseCommit: base });
  assert.equal(runGit(repo, ['status', '--porcelain']), '');
  assert.equal(preview.manifest.baseCommit, base);
  assert.deepEqual([...preview.semantic.changedFields], ['risks', 'title']);
  assert.match(await readFile(join(preview.previewRoot, 'semantic-summary.md'), 'utf8'), /Automatic merge\/deploy: \*\*disabled\*\*/);

  const decided = await recordDecision({ repoRoot: repo, artifactsRoot: artifacts, previewPath: preview.previewRoot, decision: 'approve', checks: ['quality', 'security', 'responsive'], confirmNoAutoMerge: true });
  assert.equal(decided.decision.mergeAllowed, false);
  await assert.rejects(() => recordDecision({ repoRoot: repo, artifactsRoot: artifacts, previewPath: preview.previewRoot, decision: 'reject' }), /not pending a human decision/);
  await cleanupPreview({ repoRoot: repo, artifactsRoot: artifacts, previewPath: preview.previewRoot });
  assert.equal(runGit(repo, ['status', '--porcelain']), '');
  assert.throws(() => runGit(join(preview.previewRoot, 'worktree'), ['status']), /ENOENT|spawnSync/);
});
