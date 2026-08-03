import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = new URL('../', import.meta.url);
const apiRoot = new URL('web/api/v1/', root);

function safeAgentItem(item) {
  return {
    id: item.id,
    title: item.title,
    url: item.url,
    type: item.type,
    category: item.category,
    subcategory: item.subcategory,
    addedAt: item.addedAt,
    description: item.simpleDescription,
    useCases: item.useCases,
    platforms: item.platforms,
    license: item.licenseInfo,
    access: item.access,
    trust: item.trust,
    decision: item.decision,
    riskLevel: item.riskLevel,
    projects: item.projects,
    evidence: item.evidence,
    actions: {
      openOfficialSource: true,
      installFromCatalog: false,
      mutateExternalSystems: false,
    },
  };
}

function consumerExport(name, catalogVersion, items) {
  return {
    schemaVersion: 1,
    consumer: name,
    catalogVersion,
    generatedAt: null,
    policy: {
      greyResourcesExcluded: true,
      directInstallForbidden: true,
      externalMutationsRequireHumanApproval: true,
    },
    totals: { items: items.length },
    items,
  };
}

export async function buildCatalogExports({ check = false } = {}) {
  const catalog = JSON.parse(await readFile(new URL('web/catalog-index.json', root), 'utf8'));
  const agentItems = catalog.items.filter((item) => item.agentEligibility?.eligible).map(safeAgentItem);
  const files = new Map([
    ['catalog.json', { ...catalog, policy: { directInstallForbidden: true } }],
    ['agents.json', consumerExport('generic-agent', catalog.sourceHash, agentItems)],
    ['starcrm.json', consumerExport('StarCRM', catalog.sourceHash, agentItems)],
    ['starai.json', consumerExport('StarAI', catalog.sourceHash, agentItems)],
    ['manifest.json', {
      schemaVersion: 1,
      catalogVersion: catalog.sourceHash,
      generatedAt: null,
      totals: { all: catalog.totals.all, agentSafe: agentItems.length, excludedFromAgents: catalog.totals.all - agentItems.length },
      policy: { greyResourcesExcluded: true, directInstallForbidden: true },
      endpoints: {
        catalog: './catalog.json',
        agents: './agents.json',
        starcrm: './starcrm.json',
        starai: './starai.json',
      },
    }],
  ]);
  await mkdir(apiRoot, { recursive: true });
  const stale = [];
  for (const [name, payload] of files) {
    const output = `${JSON.stringify(payload, null, 2)}\n`;
    const url = new URL(name, apiRoot);
    if (check) {
      const current = await readFile(url, 'utf8').catch(() => '');
      if (current !== output) stale.push(name);
    } else {
      await writeFile(url, output, 'utf8');
    }
  }
  if (stale.length) throw new Error(`Catalog exports are stale: ${stale.join(', ')}`);
  return { all: catalog.totals.all, agentSafe: agentItems.length, files: [...files.keys()] };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  try {
    const result = await buildCatalogExports({ check: process.argv.includes('--check') });
    console.log(`Catalog exports ${process.argv.includes('--check') ? 'verified' : 'built'}: ${result.all} human-visible, ${result.agentSafe} agent-safe.`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}
