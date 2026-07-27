import { readFile } from 'node:fs/promises';

const repoRoot = new URL('../', import.meta.url);
const snapshot = JSON.parse(await readFile(new URL('web/link-health.json', repoRoot), 'utf8'));
const allowedStatuses = new Set(['ok', 'restricted', 'broken', 'unavailable', 'unknown', 'blocked', 'skipped']);
const statusNames = [...allowedStatuses];
const errors = [];

if (snapshot?.schemaVersion !== 1) errors.push('schemaVersion must be 1.');
if (!Number.isFinite(Date.parse(snapshot?.checkedAt))) errors.push('checkedAt must be an ISO date.');
if (!Array.isArray(snapshot?.links) || snapshot.links.length === 0) errors.push('links must be a non-empty array.');

const urls = new Set();
(snapshot?.links || []).forEach((item, index) => {
  const label = `link ${index + 1}`;
  try {
    const url = new URL(item?.url);
    if (!['http:', 'https:'].includes(url.protocol)) errors.push(`${label}: URL must use http/https.`);
  } catch {
    errors.push(`${label}: invalid URL.`);
  }
  if (urls.has(item?.url)) errors.push(`${label}: duplicate URL.`);
  urls.add(item?.url);
  if (!allowedStatuses.has(item?.status)) errors.push(`${label}: unsupported status.`);
  if (item?.httpStatus !== null && !Number.isInteger(item?.httpStatus)) errors.push(`${label}: httpStatus must be an integer or null.`);
});

if (snapshot?.totals?.checked !== snapshot?.links?.length) errors.push('totals.checked must equal links.length.');
statusNames.forEach((status) => {
  if (!Number.isInteger(snapshot?.totals?.[status]) || snapshot.totals[status] < 0) errors.push(`totals.${status} must be a non-negative integer.`);
});
if (statusNames.reduce((sum, status) => sum + (snapshot?.totals?.[status] || 0), 0) !== snapshot?.links?.length) {
  errors.push('status totals must equal links.length.');
}
if (errors.length) {
  console.error(`Link-health validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Link-health validation passed: ${snapshot.links.length} URLs checked at ${snapshot.checkedAt}.`);
