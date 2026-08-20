import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = new URL('../', import.meta.url);
const indexUrl = new URL('web/catalog-index.json', root);
const summaryUrl = new URL('web/catalog-summary.json', root);
const detailRootUrl = new URL('web/catalog-details/', root);

export const DETAIL_SHARD_COUNT = 16;

export function detailShardForId(value) {
  const text = String(value || '');
  let hash = 0x811c9dc5;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0) % DETAIL_SHARD_COUNT;
}

export function detailShardName(value) {
  return detailShardForId(value).toString(16).padStart(2, '0');
}

function summaryItem(item) {
  return {
    id: item.id,
    url: item.url,
    title: item.title,
    type: item.type,
    category: item.category,
    subcategory: item.subcategory,
    simpleDescription: item.simpleDescription,
    useCases: (item.useCases || []).slice(0, 2),
    platforms: item.platforms || [],
    license: item.license,
    pricing: item.pricing,
    access: item.access,
    trust: item.trust,
    projects: item.projects || [],
    decision: item.decision,
    riskLevel: item.riskLevel,
    risks: (item.risks || []).slice(0, 2),
    verifiedAt: item.verifiedAt,
    quickStart: (item.quickStart || []).slice(0, 2),
    reviewStatus: item.reviewStatus,
    addedAt: item.addedAt,
    catalogOrder: item.catalogOrder,
    licenseInfo: item.licenseInfo ? {
      label: item.licenseInfo.label,
      spdx: item.licenseInfo.spdx,
      kind: item.licenseInfo.kind,
      status: item.licenseInfo.status,
      requiresReview: item.licenseInfo.requiresReview,
    } : null,
    evidence: item.evidence || [],
    agentEligibility: item.agentEligibility,
    guide: item.guide || '',
  };
}

export function buildCatalogRuntime(index) {
  if (index?.schemaVersion !== 2 || !Array.isArray(index.items)) {
    throw new Error('catalog-index.json must use schemaVersion 2 and contain items.');
  }
  const shards = Array.from({ length: DETAIL_SHARD_COUNT }, (_, shard) => ({
    schemaVersion: 1,
    sourceHash: index.sourceHash,
    shard: shard.toString(16).padStart(2, '0'),
    items: [],
  }));
  index.items.forEach((item) => shards[detailShardForId(item.id)].items.push(item));
  const summary = {
    schemaVersion: 1,
    sourceHash: index.sourceHash,
    policy: index.policy,
    totals: index.totals,
    details: { shards: DETAIL_SHARD_COUNT, baseUrl: 'catalog-details/' },
    items: index.items.map(summaryItem),
  };
  return { summary, shards };
}

function serialize(value) {
  return JSON.stringify(value) + '\n';
}

async function main() {
  const index = JSON.parse(await readFile(indexUrl, 'utf8'));
  const runtime = buildCatalogRuntime(index);
  const outputs = [
    [summaryUrl, serialize(runtime.summary)],
    ...runtime.shards.map((shard, indexValue) => [
      new URL(indexValue.toString(16).padStart(2, '0') + '.json', detailRootUrl),
      serialize(shard),
    ]),
  ];

  if (process.argv.includes('--check')) {
    const stale = [];
    for (const [url, content] of outputs) {
      if (await readFile(url, 'utf8').catch(() => '') !== content) stale.push(fileURLToPath(url));
    }
    if (stale.length) {
      console.error('Runtime catalog is stale:\n' + stale.join('\n'));
      process.exitCode = 1;
      return;
    }
    console.log('Runtime catalog is current: ' + runtime.summary.items.length + ' summaries, ' + runtime.shards.length + ' detail shards.');
    return;
  }

  await mkdir(detailRootUrl, { recursive: true });
  await Promise.all(outputs.map(([url, content]) => writeFile(url, content, 'utf8')));
  console.log('Runtime catalog built: ' + runtime.summary.items.length + ' summaries, ' + runtime.shards.length + ' detail shards.');
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) await main();
