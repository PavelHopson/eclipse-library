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
const allowedLicenseStatus = new Set(['source-declared', 'editor-reviewed', 'unverified']);

if (published?.schemaVersion !== 2) errors.push('schemaVersion must be 2.');
if (published?.sourceHash !== expected.sourceHash) errors.push('sourceHash does not match canonical resources and GitHub metadata.');
if (!Array.isArray(published?.items) || !published.items.length) errors.push('items must be a non-empty array.');
if (published?.policy?.directInstallForbidden !== true) errors.push('direct install policy must be fail-closed.');

(published.items || []).forEach((item, index) => {
  const label = item?.id || `item ${index + 1}`;
  ['id', 'url', 'title', 'type', 'category', 'subcategory', 'simpleDescription', 'license', 'pricing', 'trustReason'].forEach((field) => {
    if (typeof item?.[field] !== 'string' || !item[field].trim()) errors.push(`${label}: ${field} is required.`);
  });
  ['useCases', 'platforms', 'risks', 'quickStart', 'evidence'].forEach((field) => {
    if (!Array.isArray(item?.[field]) || item[field].length < 1) errors.push(`${label}: ${field} must be non-empty.`);
  });
  if (!Array.isArray(item?.projects)) errors.push(`${label}: projects must be an array.`);
  if (!allowedReview.has(item?.reviewStatus)) errors.push(`${label}: unsupported reviewStatus.`);
  if (!allowedTrust.has(item?.trust)) errors.push(`${label}: unsupported trust.`);
  if (!allowedDecision.has(item?.decision)) errors.push(`${label}: unsupported decision.`);
  if (!allowedRisk.has(item?.riskLevel)) errors.push(`${label}: unsupported riskLevel.`);
  if (!allowedCost.has(item?.access?.cost) || !allowedSignup.has(item?.access?.signup) || !allowedRuntime.has(item?.access?.runtime)) errors.push(`${label}: invalid access metadata.`);
  if (!allowedLicenseStatus.has(item?.licenseInfo?.status) || typeof item?.licenseInfo?.requiresReview !== 'boolean') errors.push(`${label}: invalid normalized license.`);
  if (!item.evidence.every((entry) => entry?.url && /^https?:\/\//.test(entry.url))) errors.push(`${label}: evidence links must use HTTP(S).`);
  if (item?.addedAt !== null && !/^\d{4}-\d{2}-\d{2}$/.test(item?.addedAt || '')) errors.push(`${label}: addedAt must be an ISO date or null.`);
  if (item?.reviewStatus === 'verified' && !/^\d{4}-\d{2}-\d{2}$/.test(item?.verifiedAt || '')) errors.push(`${label}: verified item requires verifiedAt.`);
  if (item?.reviewStatus === 'inferred' && item?.verifiedAt !== null) errors.push(`${label}: inferred item must not claim a verification date.`);
  if (item?.source?.file !== 'catalog/resources.json' || item?.source?.key !== item.id) errors.push(`${label}: canonical source location is invalid.`);
  if (item.type === 'grey' && item.agentEligibility?.eligible !== false) errors.push(`${label}: grey resource must be excluded from agent recommendations.`);
  if (item.agentEligibility?.installAllowed !== false) errors.push(`${label}: install must be forbidden in catalog policy.`);
  const url = canonicalUrl(item?.url);
  if (ids.has(item?.id)) errors.push(`${label}: duplicate id.`);
  if (urls.has(url)) errors.push(`${label}: duplicate canonical URL.`);
  ids.add(item?.id); urls.add(url);
});

const actualTotals = {
  all: published.items?.length || 0,
  verified: (published.items || []).filter((item) => item.reviewStatus === 'verified').length,
  inferred: (published.items || []).filter((item) => item.reviewStatus === 'inferred').length,
  licenseReviewRequired: (published.items || []).filter((item) => item.licenseInfo?.requiresReview).length,
  agentSafe: (published.items || []).filter((item) => item.agentEligibility?.eligible).length,
  agentExcluded: (published.items || []).filter((item) => !item.agentEligibility?.eligible).length,
  grey: (published.items || []).filter((item) => item.type === 'grey').length,
  withAddedAt: (published.items || []).filter((item) => item.addedAt).length,
};
if (JSON.stringify(published?.totals) !== JSON.stringify(actualTotals)) errors.push('totals do not match item metadata.');
if (JSON.stringify(published) !== JSON.stringify(expected)) errors.push('published index is not the deterministic builder output.');

if (errors.length) {
  console.error(`Catalog index validation failed with ${errors.length} error(s):`);
  errors.slice(0, 80).forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}
console.log(`Catalog index validation passed: ${actualTotals.all} human-visible, ${actualTotals.agentSafe} agent-safe, ${actualTotals.licenseReviewRequired} licenses need review.`);
