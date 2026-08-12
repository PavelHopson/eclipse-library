import { spawnSync } from 'node:child_process';
import { lstat, mkdir, readFile, realpath, rm, writeFile } from 'node:fs/promises';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  MAX_PACKET_BYTES,
  PREVIEW_SCHEMA,
  assertNoCheckoutFilters,
  inspectPatch,
  renderSemanticSummary,
  sha256,
  summarizeCatalogChange,
  validateDecisionInput,
  validateReviewPacket,
} from './review-preview-policy.mjs';

const scriptRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const defaultArtifactsRoot = join(scriptRoot, '.artifacts', 'review-previews');

function git(repoRoot, args, { allowFailure = false } = {}) {
  const hooksRoot = join(resolve(repoRoot), '.artifacts', 'review-empty-hooks');
  const result = spawnSync('git', ['-c', `core.hooksPath=${hooksRoot}`, '-c', 'core.fsmonitor=false', '-c', 'core.untrackedCache=false', ...args], {
    cwd: repoRoot,
    env: { ...process.env, GIT_ATTR_NOSYSTEM: '1', GIT_CONFIG_NOSYSTEM: '1', GIT_CONFIG_GLOBAL: process.platform === 'win32' ? 'NUL' : '/dev/null' },
    encoding: 'utf8',
    windowsHide: true,
    maxBuffer: 8 * 1024 * 1024,
  });
  if (result.error) throw result.error;
  if (!allowFailure && result.status !== 0) throw new Error((result.stderr || result.stdout || `git exited ${result.status}`).trim().slice(0, 4000));
  return result;
}

function parseArgs(argv) {
  const [command, ...rest] = argv;
  const values = {};
  for (let index = 0; index < rest.length; index += 1) {
    const token = rest[index];
    if (!token.startsWith('--')) throw new Error(`Unexpected argument: ${token}`);
    const key = token.slice(2);
    if (key === 'confirm-no-auto-merge') { values[key] = true; continue; }
    const value = rest[index + 1];
    if (!value || value.startsWith('--')) throw new Error(`Missing value for --${key}.`);
    values[key] = value;
    index += 1;
  }
  return { command, values };
}

async function readBoundedRegularFile(path, maxBytes, label) {
  const info = await lstat(path);
  if (!info.isFile() || info.isSymbolicLink()) throw new Error(`${label} must be a regular non-symlink file.`);
  if (info.size > maxBytes) throw new Error(`${label} exceeds the ${maxBytes} byte limit.`);
  return readFile(path, 'utf8');
}

function isInside(parent, child) {
  const result = relative(parent, child);
  return result && !result.startsWith(`..${sep}`) && result !== '..' && !isAbsolute(result);
}

function normalizeArtifactsRoot(repoRoot, artifactsRoot) {
  const expected = join(resolve(repoRoot), '.artifacts', 'review-previews');
  const candidate = resolve(artifactsRoot);
  if (candidate !== expected) throw new Error('Preview artifacts must stay in this repository at .artifacts/review-previews.');
  return candidate;
}

async function resolvePreviewDirectory(artifactsRoot, value) {
  const root = await realpath(artifactsRoot);
  const candidate = await realpath(resolve(value));
  if (!isInside(root, candidate)) throw new Error('Preview path must stay inside .artifacts/review-previews.');
  const info = await lstat(candidate);
  if (!info.isDirectory() || info.isSymbolicLink()) throw new Error('Preview path must be a regular directory.');
  return candidate;
}
async function resolveWorktreeDirectory(previewRoot) {
  const candidate = join(previewRoot, 'worktree');
  const info = await lstat(candidate);
  if (!info.isDirectory() || info.isSymbolicLink()) throw new Error('Preview worktree must be a regular directory.');
  const resolved = await realpath(candidate);
  if (!isInside(previewRoot, resolved)) throw new Error('Preview worktree escapes its evidence directory.');
  return resolved;
}

function resolveCommit(repoRoot, value = '') {
  if (!/^[a-f0-9]{40}$/i.test(value)) throw new Error('--base is required and must be a full 40-character commit SHA.');
  return git(repoRoot, ['rev-parse', '--verify', `${value}^{commit}`]).stdout.trim().toLowerCase();
}
function verifyCheckoutFilters(repoRoot, commit, files) {
  const paths = git(repoRoot, ['ls-tree', '-r', '--name-only', commit]).stdout.split(/\r?\n/).filter((path) => path === '.gitattributes' || path.endsWith('/.gitattributes'));
  const entries = paths.map((path) => ({ path, content: git(repoRoot, ['show', `${commit}:${path}`]).stdout }));
  assertNoCheckoutFilters(entries);
  files.forEach((path) => {
    const result = git(repoRoot, ['check-attr', '--source', commit, 'filter', '--', path]).stdout.trim();
    if (result && !result.endsWith(': unspecified') && !result.endsWith(': unset')) throw new Error(`Base commit activates a checkout filter for ${path}.`);
  });
}
function verifyBaseFiles(repoRoot, commit, files) {
  files.forEach((path) => {
    const entry = git(repoRoot, ['ls-tree', commit, '--', path]).stdout.trim();
    if (!/^100644 blob [a-f0-9]+\t/.test(entry)) throw new Error(`Base path must be an existing regular file: ${path}`);
  });
}

async function writeJson(path, value, { exclusive = false } = {}) {
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`, { encoding: 'utf8', mode: 0o600, flag: exclusive ? 'wx' : 'w' });
}

export async function preparePreview({ repoRoot = scriptRoot, artifactsRoot = defaultArtifactsRoot, packetPath, patchPath, baseCommit = '' }) {
  if (!packetPath || !patchPath) throw new Error('prepare requires --packet and --patch.');
  artifactsRoot = normalizeArtifactsRoot(repoRoot, artifactsRoot);
  const packetFile = resolve(packetPath);
  const patchFile = resolve(patchPath);
  const packetText = await readBoundedRegularFile(packetFile, MAX_PACKET_BYTES, 'Review packet');
  let packet;
  try { packet = JSON.parse(packetText); } catch { throw new Error('Review packet is not valid JSON.'); }
  const { resourceId } = validateReviewPacket(packet);
  const patchText = await readBoundedRegularFile(patchFile, 2 * 1024 * 1024, 'Patch');
  const patch = inspectPatch(patchText);
  const pinnedCommit = resolveCommit(repoRoot, baseCommit);
  verifyCheckoutFilters(repoRoot, pinnedCommit, patch.files);
  verifyBaseFiles(repoRoot, pinnedCommit, patch.files);

  await mkdir(artifactsRoot, { recursive: true, mode: 0o700 });
  await mkdir(join(repoRoot, '.artifacts', 'review-empty-hooks'), { recursive: true, mode: 0o700 });
  const previewId = `${resourceId}-${sha256(`${packetText}\0${patchText}\0${pinnedCommit}`).slice(0, 12)}`;
  const previewRoot = join(artifactsRoot, previewId);
  const worktree = join(previewRoot, 'worktree');
  let previewCreated = false;
  let worktreeAdded = false;
  try {
    await mkdir(previewRoot, { recursive: false, mode: 0o700 });
    previewCreated = true;
    git(repoRoot, ['worktree', 'add', '--detach', worktree, pinnedCommit]);
    worktreeAdded = true;
    const check = git(worktree, ['apply', '--check', '--whitespace=error-all', patchFile], { allowFailure: true });
    if (check.status !== 0) throw new Error(`Patch validation failed: ${(check.stderr || check.stdout).trim().slice(0, 3000)}`);
    git(worktree, ['apply', '--whitespace=error-all', patchFile]);

    const beforeCatalog = JSON.parse(git(repoRoot, ['show', `${pinnedCommit}:catalog/resources.json`]).stdout);
    const afterCatalog = JSON.parse(await readFile(join(worktree, 'catalog', 'resources.json'), 'utf8'));
    const semantic = summarizeCatalogChange(beforeCatalog, afterCatalog, resourceId, patch.files);
    const fullDiff = git(worktree, ['diff', '--no-ext-diff', '--no-textconv', '--src-prefix=a/', '--dst-prefix=b/']).stdout;
    if (!fullDiff.trim()) throw new Error('Applied patch produced no diff.');

    const manifest = {
      schemaVersion: PREVIEW_SCHEMA,
      status: 'pending-human-decision',
      createdAt: new Date().toISOString(),
      resourceId,
      baseCommit: pinnedCommit,
      packetSha256: sha256(packetText),
      patchSha256: patch.sha256,
      fullDiffSha256: sha256(fullDiff),
      files: patch.files,
      worktree: 'worktree',
      autoApply: false,
      autoMerge: false,
      autoDeploy: false,
    };
    await Promise.all([
      writeFile(join(previewRoot, 'review-packet.json'), packetText, { encoding: 'utf8', mode: 0o600 }),
      writeFile(join(previewRoot, 'proposal.patch'), patchText, { encoding: 'utf8', mode: 0o600 }),
      writeFile(join(previewRoot, 'full.diff'), fullDiff, { encoding: 'utf8', mode: 0o600 }),
      writeFile(join(previewRoot, 'semantic-summary.md'), renderSemanticSummary(semantic, pinnedCommit, patch.sha256), { encoding: 'utf8', mode: 0o600 }),
      writeJson(join(previewRoot, 'manifest.json'), manifest),
    ]);
    return Object.freeze({ previewRoot, manifest, semantic });
  } catch (error) {
    if (worktreeAdded) git(repoRoot, ['worktree', 'remove', '--force', worktree], { allowFailure: true });
    if (previewCreated) await rm(previewRoot, { recursive: true, force: true });
    throw error;
  }
}

async function verifyPreview({ repoRoot, previewRoot }) {
  const manifestText = await readBoundedRegularFile(join(previewRoot, 'manifest.json'), MAX_PACKET_BYTES, 'Preview manifest');
  const manifest = JSON.parse(manifestText);
  if (manifest.schemaVersion !== PREVIEW_SCHEMA || manifest.status !== 'pending-human-decision') throw new Error('Preview is not pending a human decision.');
  if (manifest.worktree !== 'worktree' || !/^[a-f0-9]{40}$/.test(manifest.baseCommit || '') || !/^[a-f0-9]{64}$/.test(manifest.packetSha256 || '') || !/^[a-f0-9]{64}$/.test(manifest.patchSha256 || '') || !/^[a-f0-9]{64}$/.test(manifest.fullDiffSha256 || '')) throw new Error('Preview manifest contains invalid integrity fields.');
  const packetText = await readBoundedRegularFile(join(previewRoot, 'review-packet.json'), MAX_PACKET_BYTES, 'Stored review packet');
  const patchText = await readBoundedRegularFile(join(previewRoot, 'proposal.patch'), 2 * 1024 * 1024, 'Stored patch');
  const diffText = await readBoundedRegularFile(join(previewRoot, 'full.diff'), 8 * 1024 * 1024, 'Stored diff');
  if (sha256(packetText) !== manifest.packetSha256 || sha256(patchText) !== manifest.patchSha256 || sha256(diffText) !== manifest.fullDiffSha256) throw new Error('Preview evidence hashes do not match the manifest.');
  const worktree = await resolveWorktreeDirectory(previewRoot);
  const head = git(worktree, ['rev-parse', 'HEAD']).stdout.trim().toLowerCase();
  const liveDiff = git(worktree, ['diff', '--no-ext-diff', '--no-textconv', '--src-prefix=a/', '--dst-prefix=b/']).stdout;
  if (head !== manifest.baseCommit || sha256(liveDiff) !== manifest.fullDiffSha256) throw new Error('Disposable worktree changed after preview creation.');
  return { manifest, packetText, patchText, diffText, worktree };
}

export async function recordDecision({ repoRoot = scriptRoot, artifactsRoot = defaultArtifactsRoot, previewPath, decision, checks = [], confirmNoAutoMerge = false, note = '' }) {
  artifactsRoot = normalizeArtifactsRoot(repoRoot, artifactsRoot);
  const previewRoot = await resolvePreviewDirectory(artifactsRoot, previewPath);
  const verified = await verifyPreview({ repoRoot, previewRoot });
  const normalized = validateDecisionInput({ decision, checks, confirmNoAutoMerge, note });
  const record = { ...normalized, recordedAt: new Date().toISOString(), resourceId: verified.manifest.resourceId, baseCommit: verified.manifest.baseCommit, patchSha256: verified.manifest.patchSha256 };
  try { await writeJson(join(previewRoot, 'decision.json'), record, { exclusive: true }); }
  catch (error) { if (error.code === 'EEXIST') throw new Error('Preview already has an immutable decision.'); throw error; }
  await writeJson(join(previewRoot, 'manifest.json'), { ...verified.manifest, status: decision === 'approve' ? 'approved-for-manual-transfer' : 'rejected', decidedAt: record.recordedAt, autoApply: false, autoMerge: false, autoDeploy: false });
  return Object.freeze({ previewRoot, decision: record });
}

export async function cleanupPreview({ repoRoot = scriptRoot, artifactsRoot = defaultArtifactsRoot, previewPath }) {
  artifactsRoot = normalizeArtifactsRoot(repoRoot, artifactsRoot);
  const previewRoot = await resolvePreviewDirectory(artifactsRoot, previewPath);
  const manifest = JSON.parse(await readBoundedRegularFile(join(previewRoot, 'manifest.json'), MAX_PACKET_BYTES, 'Preview manifest'));
  if (!['approved-for-manual-transfer', 'rejected'].includes(manifest.status)) throw new Error('Record approve/reject before removing the disposable worktree.');
  if (manifest.worktree !== 'worktree' || !/^[a-f0-9]{40}$/.test(manifest.baseCommit || '') || !/^[a-f0-9]{64}$/.test(manifest.patchSha256 || '') || !/^[a-f0-9]{64}$/.test(manifest.fullDiffSha256 || '')) throw new Error('Preview manifest contains invalid cleanup integrity fields.');
  const decision = JSON.parse(await readBoundedRegularFile(join(previewRoot, 'decision.json'), MAX_PACKET_BYTES, 'Preview decision'));
  const expectedStatus = decision.decision === 'approve' ? 'approved-for-manual-transfer' : decision.decision === 'reject' ? 'rejected' : '';
  if (decision.authority !== 'local-human-review-only' || decision.resourceId !== manifest.resourceId || decision.baseCommit !== manifest.baseCommit || decision.patchSha256 !== manifest.patchSha256 || decision.mergeAllowed !== false || decision.deployAllowed !== false || manifest.status !== expectedStatus) throw new Error('Preview decision does not match its manifest.');
  const worktree = await resolveWorktreeDirectory(previewRoot);
  const head = git(worktree, ['rev-parse', 'HEAD']).stdout.trim().toLowerCase();
  const liveDiff = git(worktree, ['diff', '--no-ext-diff', '--no-textconv', '--src-prefix=a/', '--dst-prefix=b/']).stdout;
  if (head !== manifest.baseCommit || sha256(liveDiff) !== manifest.fullDiffSha256) throw new Error('Disposable worktree changed after the recorded decision; cleanup refused.');
  git(repoRoot, ['worktree', 'remove', '--force', worktree]);
  await writeJson(join(previewRoot, 'manifest.json'), { ...manifest, worktreeRemovedAt: new Date().toISOString() });
  return Object.freeze({ previewRoot });
}

async function main() {
  const { command, values } = parseArgs(process.argv.slice(2));
  if (command === 'prepare') {
    const result = await preparePreview({ packetPath: values.packet, patchPath: values.patch, baseCommit: values.base || '' });
    console.log(`Preview ready: ${result.previewRoot}`);
    console.log('Read semantic-summary.md and full.diff. No catalog, merge or deploy action was performed.');
    return;
  }
  if (command === 'decide') {
    const result = await recordDecision({ previewPath: values.preview, decision: values.decision, checks: String(values.checks || '').split(','), confirmNoAutoMerge: values['confirm-no-auto-merge'] === true, note: values.note || '' });
    console.log(`Decision recorded: ${result.decision.decision}. Automatic merge/deploy remain disabled.`);
    return;
  }
  if (command === 'cleanup') {
    const result = await cleanupPreview({ previewPath: values.preview });
    console.log(`Disposable worktree removed; evidence retained: ${result.previewRoot}`);
    return;
  }
  throw new Error('Usage: review-preview.mjs prepare --packet <json> --patch <diff> --base <full-sha> | decide --preview <dir> --decision approve|reject [--checks quality,security,responsive --confirm-no-auto-merge] | cleanup --preview <dir>');
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  main().catch((error) => { console.error(`Review preview failed: ${error.message}`); process.exitCode = 1; });
}
