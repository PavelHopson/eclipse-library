import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { agentEligibility, categoryWithoutDate, dateFromCategory, githubRepoKey, normalizeLicense } from './catalog-policy.mjs';

const root = new URL('../', import.meta.url);
const outputUrl = new URL('web/catalog-index.json', root);

function sha256(...values) {
  const hash = createHash('sha256');
  values.forEach((value, index) => hash.update(index ? '\0' : '').update(value.replace(/\r\n/g, '\n')));
  return hash.digest('hex');
}

function evidenceFor(item, licenseInfo) {
  const evidence = [{ kind: 'official-source', label: 'Официальный источник', url: item.url }];
  licenseInfo.evidence.forEach((entry) => {
    if (!evidence.some((current) => current.url === entry.url)) evidence.push(entry);
  });
  return evidence;
}

export async function buildCatalogIndex() {
  const [sourceText, metadataText] = await Promise.all([
    readFile(new URL('catalog/resources.json', root), 'utf8'),
    readFile(new URL('web/github-metadata.json', root), 'utf8'),
  ]);
  const source = JSON.parse(sourceText);
  const metadata = JSON.parse(metadataText);
  if (source?.schemaVersion !== 1 || !Array.isArray(source.items)) throw new Error('catalog/resources.json must use schemaVersion 1 and contain items.');
  const repositories = new Map((metadata.repositories || []).map((repository) => [repository.key, repository]));
  const items = source.items.map((sourceItem, index) => {
    const repository = repositories.get(githubRepoKey(sourceItem.url)) || null;
    const licenseInfo = normalizeLicense(sourceItem, repository);
    const legacyCategory = sourceItem.source?.category || sourceItem.category;
    const category = categoryWithoutDate(sourceItem.category) || sourceItem.category;
    const addedAt = sourceItem.addedAt || dateFromCategory(legacyCategory);
    const eligibility = agentEligibility(sourceItem, repository);
    return {
      ...sourceItem,
      category,
      subcategory: categoryWithoutDate(sourceItem.subcategory) || category,
      addedAt,
      catalogOrder: Number.isInteger(sourceItem.catalogOrder) ? sourceItem.catalogOrder : (sourceItem.source?.line || index + 1),
      license: licenseInfo.label,
      licenseInfo,
      evidence: evidenceFor(sourceItem, licenseInfo),
      agentEligibility: eligibility,
      source: {
        file: 'catalog/resources.json',
        key: sourceItem.id,
        legacy: sourceItem.source || null,
      },
    };
  }).sort((a, b) => a.catalogOrder - b.catalogOrder || a.id.localeCompare(b.id, 'en'));
  const totals = {
    all: items.length,
    verified: items.filter((item) => item.reviewStatus === 'verified').length,
    inferred: items.filter((item) => item.reviewStatus === 'inferred').length,
    licenseReviewRequired: items.filter((item) => item.licenseInfo.requiresReview).length,
    agentSafe: items.filter((item) => item.agentEligibility.eligible).length,
    agentExcluded: items.filter((item) => !item.agentEligibility.eligible).length,
    grey: items.filter((item) => item.type === 'grey').length,
    withAddedAt: items.filter((item) => item.addedAt).length,
  };
  return {
    schemaVersion: 2,
    sourceHash: sha256(sourceText, metadataText),
    policy: {
      canonicalSource: 'catalog/resources.json',
      directInstallForbidden: true,
      greyResourcesExcludedFromAgentRecommendations: true,
    },
    totals,
    items,
  };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const index = await buildCatalogIndex();
  const output = `${JSON.stringify(index, null, 2)}\n`;
  if (process.argv.includes('--check')) {
    const current = await readFile(outputUrl, 'utf8').catch(() => '');
    if (current !== output) {
      console.error('catalog-index.json is stale. Run node scripts/build-catalog-index.mjs.');
      process.exitCode = 1;
    } else {
      console.log(`Catalog index is current: ${index.totals.all} items, ${index.totals.agentSafe} agent-safe.`);
    }
  } else {
    await writeFile(outputUrl, output, 'utf8');
    console.log(`Catalog index built: ${index.totals.all} items, ${index.totals.agentSafe} agent-safe, ${index.totals.licenseReviewRequired} licenses need review.`);
  }
}
