import { readFile } from 'node:fs/promises';

const repoRoot = new URL('../', import.meta.url);
const snapshot = JSON.parse(await readFile(new URL('web/github-metadata.json', repoRoot), 'utf8'));
const allowedStates = new Set(['active', 'archived', 'disabled', 'unknown']);
const errors = [];

if (snapshot?.schemaVersion !== 1) errors.push('schemaVersion must be 1.');
if (!Number.isFinite(Date.parse(snapshot?.checkedAt))) errors.push('checkedAt must be an ISO date.');
if (!Array.isArray(snapshot?.repositories) || snapshot.repositories.length === 0) errors.push('repositories must be a non-empty array.');

const keys = new Set();
(snapshot?.repositories || []).forEach((repo, index) => {
  const label = `repository ${index + 1}`;
  if (!/^[a-z0-9_.-]+\/[a-z0-9_.-]+$/.test(repo?.key || '')) errors.push(`${label}: invalid normalized key.`);
  if (keys.has(repo?.key)) errors.push(`${label}: duplicate key.`);
  keys.add(repo?.key);
  if (!allowedStates.has(repo?.state)) errors.push(`${label}: unsupported state.`);
  try {
    const url = new URL(repo?.url);
    if (url.protocol !== 'https:' || url.hostname !== 'github.com') errors.push(`${label}: URL must be an HTTPS GitHub URL.`);
  } catch {
    errors.push(`${label}: invalid URL.`);
  }
  ['pushedAt', 'updatedAt'].forEach((field) => {
    if (repo?.[field] !== null && !Number.isFinite(Date.parse(repo?.[field]))) errors.push(`${label}: ${field} must be an ISO date or null.`);
  });
  if (repo?.licenseInfo !== null) {
    if (!repo?.licenseInfo || typeof repo.licenseInfo.name !== 'string' || !repo.licenseInfo.name.trim()) errors.push(`${label}: licenseInfo.name is required.`);
    if (repo?.licenseInfo?.spdxId !== null && (typeof repo.licenseInfo.spdxId !== 'string' || !repo.licenseInfo.spdxId.trim())) errors.push(`${label}: licenseInfo.spdxId must be a string or null.`);
    try {
      const licenseUrl = new URL(repo?.licenseInfo?.url);
      if (licenseUrl.protocol !== 'https:') errors.push(`${label}: licenseInfo.url must use HTTPS.`);
    } catch {
      errors.push(`${label}: invalid licenseInfo.url.`);
    }
  }
});

const totalFields = ['repositories', ...allowedStates];
totalFields.forEach((field) => {
  if (!Number.isInteger(snapshot?.totals?.[field]) || snapshot.totals[field] < 0) errors.push(`totals.${field} must be a non-negative integer.`);
});
if (snapshot?.totals?.repositories !== snapshot?.repositories?.length) errors.push('totals.repositories must equal repositories.length.');
if ([...allowedStates].reduce((sum, state) => sum + (snapshot?.totals?.[state] || 0), 0) !== snapshot?.repositories?.length) {
  errors.push('repository state totals must equal repositories.length.');
}

if (errors.length) {
  console.error(`GitHub metadata validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`GitHub metadata validation passed: ${snapshot.repositories.length} repositories, ${snapshot.totals.archived} archived.`);
