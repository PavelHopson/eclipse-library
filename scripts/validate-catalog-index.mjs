import { readFile } from 'node:fs/promises';
import { buildCatalogIndex } from './build-catalog-index.mjs';
import { canonicalUrl } from './catalog-source.mjs';

const root = new URL('../', import.meta.url);
const published = JSON.parse(await readFile(new URL('web/catalog-index.json', root), 'utf8'));
const expected = await buildCatalogIndex();
const errors = [];
const ids = new Set();
const urls = new Set();
const allowedReview = new Set(['verified', 'inferred']);
const allowedTrust = new Set(['official', 'verified', 'community', 'caution', 'unknown']);
const allowedDecision = new Set(['now', 'roadmap', 'reference', 'no']);
const allowedRisk = new Set(['low', 'medium', 'high']);
const allowedCost = new Set(['free', 'freemium', 'paid', 'unknown']);
const allowedSignup = new Set(['none', 'optional', 'required', 'unknown']);
const allowedRuntime = new Set(['local', 'self-host', 'cloud', 'hybrid', 'unknown']);

if (published?.schemaVersion !== 1) errors.push('schemaVersion must be 1.');
if (published?.sourceHash !== expected.sourceHash) errors.push('sourceHash does not match README.md and catalog-details.json.');
if (!Array.isArray(published?.items) || !published.items.length) errors.push('items must be a non-empty array.');

(published.items || []).forEach((item, index) => {
  const label = item?.id || `item ${index + 1}`;
  ['id', 'url', 'title', 'type', 'category', 'subcategory', 'simpleDescription', 'license', 'pricing', 'trustReason'].forEach((field) => {
    if (typeof item?.[field] !== 'string' || !item[field].trim()) errors.push(`${label}: ${field} is required.`);
  });
  ['useCases', 'platforms', 'risks', 'quickStart'].forEach((field) => {
    if (!Array.isArray(item?.[field]) || item[field].length < 1 || item[field].some((value) => typeof value !== 'string' || !value.trim())) errors.push(`${label}: ${field} must be a non-empty string array.`);
  });
  if (!Array.isArray(item?.projects)) errors.push(`${label}: projects must be an array.`);
  const minimumDescriptionLength = item?.reviewStatus === 'verified' ? 70 : 100;
  if ((item?.simpleDescription || '').length < minimumDescriptionLength) errors.push(`${label}: simpleDescription must explain the resource in at least ${minimumDescriptionLength} characters.`);
  if (!allowedReview.has(item?.reviewStatus)) errors.push(`${label}: unsupported reviewStatus.`);
  if (!allowedTrust.has(item?.trust)) errors.push(`${label}: unsupported trust.`);
  if (!allowedDecision.has(item?.decision)) errors.push(`${label}: unsupported decision.`);
  if (!allowedRisk.has(item?.riskLevel)) errors.push(`${label}: unsupported riskLevel.`);
  if (!allowedCost.has(item?.access?.cost) || !allowedSignup.has(item?.access?.signup) || !allowedRuntime.has(item?.access?.runtime)) errors.push(`${label}: invalid access metadata.`);
  if (item?.reviewStatus === 'verified' && !/^\d{4}-\d{2}-\d{2}$/.test(item?.verifiedAt || '')) errors.push(`${label}: verified item requires verifiedAt.`);
  if (item?.reviewStatus === 'inferred' && item?.verifiedAt !== null) errors.push(`${label}: inferred item must not claim a verification date.`);
  if (item?.source?.file !== 'README.md' || !Number.isInteger(item?.source?.line) || item.source.line < 1) errors.push(`${label}: source location is invalid.`);
  const url = canonicalUrl(item?.url);
  if (ids.has(item?.id)) errors.push(`${label}: duplicate id.`);
  if (urls.has(url)) errors.push(`${label}: duplicate canonical URL.`);
  ids.add(item?.id); urls.add(url);
});

const actualTotals = {
  all: published.items?.length || 0,
  verified: (published.items || []).filter((item) => item.reviewStatus === 'verified').length,
  inferred: (published.items || []).filter((item) => item.reviewStatus === 'inferred').length,
};
if (JSON.stringify(published?.totals) !== JSON.stringify(actualTotals)) errors.push('totals do not match item review statuses.');
if (JSON.stringify(published) !== JSON.stringify(expected)) errors.push('published index is not the deterministic builder output.');

if (errors.length) {
  console.error(`Catalog index validation failed with ${errors.length} error(s):`);
  errors.slice(0, 50).forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}
console.log(`Catalog index validation passed: ${actualTotals.all} unique items, ${actualTotals.verified} verified, ${actualTotals.inferred} transparently inferred.`);
