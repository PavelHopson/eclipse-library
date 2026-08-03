import { readFile } from 'node:fs/promises';
import { parseCatalogRows } from './catalog-source.mjs';

const repoRoot = new URL('../', import.meta.url);
const [readme, detailsText, indexHtml] = await Promise.all([
  readFile(new URL('README.md', repoRoot), 'utf8'),
  readFile(new URL('web/catalog-details.json', repoRoot), 'utf8'),
  readFile(new URL('web/index.html', repoRoot), 'utf8'),
]);

const details = JSON.parse(detailsText);
const errors = [];
const requiredStrings = [
  'id',
  'url',
  'simpleDescription',
  'license',
  'pricing',
  'trust',
  'trustReason',
  'decision',
  'riskLevel',
  'verifiedAt',
];
const requiredArrays = ['useCases', 'platforms', 'projects', 'risks'];
const allowedTrust = new Set(['official', 'verified', 'community', 'caution', 'unknown']);
const allowedDecisions = new Set(['now', 'roadmap', 'reference', 'no']);
const allowedRisk = new Set(['low', 'medium', 'high']);
const allowedType = new Set(['skill', 'agent', 'model', 'api', 'prompt', 'learn', 'media', 'privacy', 'ours', 'drop', 'grey', 'oss', 'tool', 'shop']);
const allowedCost = new Set(['free', 'freemium', 'paid', 'unknown']);
const allowedSignup = new Set(['none', 'optional', 'required', 'unknown']);
const allowedRuntime = new Set(['local', 'self-host', 'cloud', 'hybrid', 'unknown']);

function canonicalUrl(value) {
  try {
    const url = new URL(value);
    url.hash = '';
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref', 'erid'].forEach((key) => url.searchParams.delete(key));
    url.hostname = url.hostname.toLowerCase().replace(/^www\./, '');
    url.pathname = url.pathname.replace(/\/+$/, '') || '/';
    return url.toString().replace(/\/$/, '');
  } catch {
    return String(value || '').trim().toLowerCase().replace(/#.*$/, '').replace(/\/$/, '');
  }
}

if (!Array.isArray(details)) {
  errors.push('catalog-details.json must contain an array.');
} else {
  const ids = new Set();
  const urls = new Set();
  const readmeUrls = new Set(parseCatalogRows(readme).rows.map((row) => canonicalUrl(row.url)));

  details.forEach((item, index) => {
    const label = item?.id || `item ${index + 1}`;
    requiredStrings.forEach((field) => {
      if (typeof item?.[field] !== 'string' || !item[field].trim()) {
        errors.push(`${label}: "${field}" must be a non-empty string.`);
      }
    });
    requiredArrays.forEach((field) => {
      if (!Array.isArray(item?.[field]) || item[field].length === 0 || item[field].some((value) => typeof value !== 'string' || !value.trim())) {
        errors.push(`${label}: "${field}" must be a non-empty string array.`);
      }
    });
    if ((item?.simpleDescription || '').length < 70) {
      errors.push(`${label}: simpleDescription is too short to explain the resource clearly.`);
    }
    if (!allowedTrust.has(item?.trust)) errors.push(`${label}: unsupported trust value "${item?.trust}".`);
    if (!allowedDecisions.has(item?.decision)) errors.push(`${label}: unsupported decision value "${item?.decision}".`);
    if (!allowedRisk.has(item?.riskLevel)) errors.push(`${label}: unsupported riskLevel "${item?.riskLevel}".`);
    if (item?.type !== undefined && !allowedType.has(item.type)) errors.push(`${label}: unsupported type "${item?.type}".`);
    if (item?.guide !== undefined && (typeof item.guide !== 'string' || !/^[a-z0-9-]+$/.test(item.guide))) {
      errors.push(`${label}: optional "guide" must be a safe lowercase slug.`);
    }
    if (!item?.access || typeof item.access !== 'object' || Array.isArray(item.access)) {
      errors.push(`${label}: access metadata is required.`);
    } else {
      if (!allowedCost.has(item.access.cost)) errors.push(`${label}: unsupported access.cost "${item.access.cost}".`);
      if (!allowedSignup.has(item.access.signup)) errors.push(`${label}: unsupported access.signup "${item.access.signup}".`);
      if (!allowedRuntime.has(item.access.runtime)) errors.push(`${label}: unsupported access.runtime "${item.access.runtime}".`);
    }
    if (ids.has(item?.id)) errors.push(`${label}: duplicate id.`);
    ids.add(item?.id);
    const url = canonicalUrl(item?.url);
    if (urls.has(url)) errors.push(`${label}: duplicate canonical URL.`);
    urls.add(url);
    if (!readmeUrls.has(url)) errors.push(`${label}: URL is missing from README.md.`);
  });
}

const htmlIds = [...indexHtml.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicateHtmlIds = htmlIds.filter((id, index) => htmlIds.indexOf(id) !== index);
if (duplicateHtmlIds.length) errors.push(`web/index.html has duplicate ids: ${[...new Set(duplicateHtmlIds)].join(', ')}`);

if (errors.length) {
  console.error(`Catalog validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Catalog validation passed: ${details.length} enriched resources, ${htmlIds.length} unique UI ids.`);
