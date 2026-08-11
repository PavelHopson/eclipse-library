import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const repoRoot = new URL('../', import.meta.url);
const allowedHost = 'library.eclipse-forge.ru';

export function validateBaseUrl(value) {
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.hostname !== allowedHost || url.username || url.password) {
    throw new Error(`Production smoke is restricted to https://${allowedHost}/.`);
  }
  url.pathname = '/';
  url.search = '';
  url.hash = '';
  return url;
}

export function extractVersionedAsset(html, filename) {
  const escaped = filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = html.match(new RegExp(`(?:src|href)=["'](${escaped}\\?v=\\d+)["']`));
  if (!match) throw new Error(`Versioned ${filename} was not found in index.html.`);
  return match[1];
}

export function assertMobileScrollGuard(appSource) {
  const mobileGuard = "if (window.matchMedia('(max-width: 960px)').matches) {";
  const desktopReveal = "link.scrollIntoView({ block: 'nearest' });";
  const guardStart = appSource.indexOf(mobileGuard);
  assert.notEqual(guardStart, -1, 'Mobile scrollspy guard is missing.');

  const openBrace = appSource.indexOf('{', guardStart);
  let depth = 0;
  let guardEnd = -1;
  for (let index = openBrace; index < appSource.length; index += 1) {
    if (appSource[index] === '{') depth += 1;
    if (appSource[index] === '}') depth -= 1;
    if (depth === 0) {
      guardEnd = index + 1;
      break;
    }
  }
  assert.notEqual(guardEnd, -1, 'Mobile scrollspy guard is malformed.');

  const desktopRevealStart = appSource.indexOf(desktopReveal, guardEnd);
  assert.notEqual(desktopRevealStart, -1, 'Desktop scrollspy reveal is missing.');
  const mobileBranch = appSource.slice(guardStart, guardEnd);
  assert.match(mobileBranch, /nav\.scrollLeft/, 'Mobile scrollspy must move only the horizontal category strip.');
  assert.match(mobileBranch, /return;/, 'Mobile scrollspy must return before the desktop reveal.');
  assert.doesNotMatch(mobileBranch, /scrollIntoView/, 'Mobile scrollspy must not move the document vertically.');
}

export function assertMobileGuideTocGuard(appSource) {
  const functionStart = appSource.indexOf('function revealActiveGuideLink(link)');
  assert.notEqual(functionStart, -1, 'Guide TOC scroll guard is missing.');
  const functionEnd = appSource.indexOf('function buildGuideToc', functionStart);
  assert.notEqual(functionEnd, -1, 'Guide TOC scroll guard is malformed.');
  const guard = appSource.slice(functionStart, functionEnd);
  assert.match(guard, /min-width: 1080px/, 'Guide TOC may reveal active links only in the desktop sidebar.');
  assert.match(guard, /scrollIntoView/, 'Desktop guide TOC reveal is missing.');
  assert.match(appSource, /tocDetails && !window\.matchMedia\('\(min-width: 1080px\)'\)\.matches/, 'Mobile guide TOC must collapse after section selection.');
}

export function assertTopicRouteResetOrder(appSource) {
  const browseBranch = "if (/^#browse\\//.test(h))";
  const browseStart = appSource.indexOf(browseBranch);
  assert.notEqual(browseStart, -1, 'Browse topic route is missing.');

  const browseEnd = appSource.indexOf('return; }', browseStart);
  assert.notEqual(browseEnd, -1, 'Browse topic route is malformed.');

  const clearStart = appSource.indexOf('clearTopicRoute();', browseEnd);
  const catalogViewStart = appSource.indexOf("setView('catalog');", browseEnd);
  assert.notEqual(clearStart, -1, 'Topic reset after the browse route is missing.');
  assert.notEqual(catalogViewStart, -1, 'Catalog view restoration after the browse route is missing.');
  assert.ok(
    clearStart < catalogViewStart,
    'Topic state must be cleared before the catalog reapplies filters for a normal category route.',
  );
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { accept: 'text/html,application/json;q=0.9,*/*;q=0.8' },
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) throw new Error(`${url} returned HTTP ${response.status}.`);
  return response.text();
}

export async function smokeProduction(baseValue, deploySha = '') {
  const base = validateBaseUrl(baseValue);
  const cacheKey = encodeURIComponent(deploySha || Date.now().toString());
  const [localIndex, localApp, localRuntime, localCatalog, localMetadata, localProjects, localMcpAudit, localGuides, localAgentExport, localRegistryPage, localRegistryScript, localRegistryStyle, localRegistry] = await Promise.all([
    readFile(new URL('web/index.html', repoRoot), 'utf8'),
    readFile(new URL('web/app.js', repoRoot), 'utf8'),
    readFile(new URL('web/catalog-runtime.js', repoRoot), 'utf8'),
    readFile(new URL('web/catalog-index.json', repoRoot), 'utf8').then(JSON.parse),
    readFile(new URL('web/github-metadata.json', repoRoot), 'utf8').then(JSON.parse),
    readFile(new URL('web/projects.json', repoRoot), 'utf8').then(JSON.parse),
    readFile(new URL('web/mcp-audit.json', repoRoot), 'utf8').then(JSON.parse),
    readFile(new URL('web/guides.json', repoRoot), 'utf8').then(JSON.parse),
    readFile(new URL('web/api/v1/agents.json', repoRoot), 'utf8').then(JSON.parse),
    readFile(new URL('web/registry.html', repoRoot), 'utf8'),
    readFile(new URL('web/registry.js', repoRoot), 'utf8'),
    readFile(new URL('web/registry.css', repoRoot), 'utf8'),
    readFile(new URL('web/star-technology-registry.json', repoRoot), 'utf8').then(JSON.parse),
  ]);
  const liveIndex = await fetchText(new URL(`?deploy=${cacheKey}`, base));
  const localAppAsset = extractVersionedAsset(localIndex, 'app.js');
  const liveAppAsset = extractVersionedAsset(liveIndex, 'app.js');
  assert.equal(liveAppAsset, localAppAsset, 'Production index references an unexpected app version.');

  const appUrl = new URL(liveAppAsset, base);
  appUrl.searchParams.set('deploy', cacheKey);
  const liveApp = await fetchText(appUrl);
  assert.equal(liveApp, localApp, 'Production app.js does not match the deployed commit.');
  const localRuntimeAsset = extractVersionedAsset(localIndex, 'catalog-runtime.js');
  const liveRuntimeAsset = extractVersionedAsset(liveIndex, 'catalog-runtime.js');
  assert.equal(liveRuntimeAsset, localRuntimeAsset, 'Production index references an unexpected catalog runtime version.');
  const runtimeUrl = new URL(liveRuntimeAsset, base);
  runtimeUrl.searchParams.set('deploy', cacheKey);
  assert.equal(await fetchText(runtimeUrl), localRuntime, 'Production catalog-runtime.js does not match the deployed commit.');
  assert.doesNotMatch(liveIndex, /fonts\.googleapis\.com|fonts\.gstatic\.com/, 'Production must not depend on Google Fonts.');
  assertMobileScrollGuard(localApp);
  assertMobileScrollGuard(liveApp);
  assertMobileGuideTocGuard(localApp);
  assertMobileGuideTocGuard(liveApp);
  assertTopicRouteResetOrder(localApp);
  assertTopicRouteResetOrder(liveApp);

  const registryPageUrl = new URL(`registry.html?deploy=${cacheKey}`, base);
  const liveRegistryPage = await fetchText(registryPageUrl);
  assert.doesNotMatch(liveRegistryPage, /fonts\.googleapis\.com|fonts\.gstatic\.com/, 'Star Registry must not depend on Google Fonts.');
  assert.equal(liveRegistryPage, localRegistryPage, 'Production registry.html does not match the deployed commit.');
  const registryScriptAsset = extractVersionedAsset(localRegistryPage, 'registry.js');
  assert.equal(extractVersionedAsset(liveRegistryPage, 'registry.js'), registryScriptAsset, 'Production registry references an unexpected script version.');
  const registryScriptUrl = new URL(registryScriptAsset, base);
  registryScriptUrl.searchParams.set('deploy', cacheKey);
  assert.equal(await fetchText(registryScriptUrl), localRegistryScript, 'Production registry.js does not match the deployed commit.');
  const registryStyleAsset = extractVersionedAsset(localRegistryPage, 'registry.css');
  assert.equal(extractVersionedAsset(liveRegistryPage, 'registry.css'), registryStyleAsset, 'Production registry references an unexpected style version.');
  const registryStyleUrl = new URL(registryStyleAsset, base);
  registryStyleUrl.searchParams.set('deploy', cacheKey);
  assert.equal(await fetchText(registryStyleUrl), localRegistryStyle, 'Production registry.css does not match the deployed commit.');

  const [liveCatalog, liveMetadata, liveProjects, liveMcpAudit, liveGuides, liveAgentExport, liveRegistry] = await Promise.all([
    fetchText(new URL(`catalog-index.json?deploy=${cacheKey}`, base)).then(JSON.parse),
    fetchText(new URL(`github-metadata.json?deploy=${cacheKey}`, base)).then(JSON.parse),
    fetchText(new URL(`projects.json?deploy=${cacheKey}`, base)).then(JSON.parse),
    fetchText(new URL(`mcp-audit.json?deploy=${cacheKey}`, base)).then(JSON.parse),
    fetchText(new URL(`guides.json?deploy=${cacheKey}`, base)).then(JSON.parse),
    fetchText(new URL(`api/v1/agents.json?deploy=${cacheKey}`, base)).then(JSON.parse),
    fetchText(new URL(`star-technology-registry.json?deploy=${cacheKey}`, base)).then(JSON.parse),
  ]);
  assert.equal(liveCatalog?.schemaVersion, 2, 'Production catalog index schema is invalid.');
  assert.equal(liveCatalog?.sourceHash, localCatalog.sourceHash, 'Production catalog index is stale.');
  assert.deepEqual(liveCatalog?.totals, localCatalog.totals, 'Production catalog index totals are stale.');
  assert.equal(liveMetadata?.schemaVersion, 1, 'Production GitHub metadata schema is invalid.');
  assert.equal(liveMetadata?.totals?.repositories, localMetadata.totals.repositories, 'Production GitHub metadata is stale.');
  assert.equal(liveProjects?.schemaVersion, 1, 'Production projects schema is invalid.');
  assert.equal(liveProjects?.projects?.length, localProjects.projects.length, 'Production projects catalog is stale.');
  assert.equal(liveMcpAudit?.schemaVersion, 1, 'Production MCP audit schema is invalid.');
  assert.equal(liveMcpAudit?.servers?.length, localMcpAudit.servers.length, 'Production MCP audit status is stale.');
  assert.deepEqual(liveGuides?.totals, localGuides.totals, 'Production guides manifest is stale.');
  assert.deepEqual(liveAgentExport?.totals, localAgentExport.totals, 'Production agent export is stale.');
  assert.ok(liveAgentExport.items.every((item) => item.type !== 'grey'), 'Production agent export contains a grey resource.');
  assert.ok(liveAgentExport.items.every((item) => item.actions?.installFromCatalog === false), 'Production agent export allows direct install.');
  assert.equal(liveRegistry?.schemaVersion, 1, 'Production Star technology registry schema is invalid.');
  assert.equal(liveRegistry?.updatedAt, localRegistry.updatedAt, 'Production Star technology registry is stale.');
  assert.equal(liveRegistry?.entries?.length, localRegistry.entries.length, 'Production Star technology registry entries are stale.');
  assert.equal(liveRegistry?.policy?.approvalTimeout, 'deny', 'Production Star technology registry must fail closed on approval timeout.');

  return {
    appAsset: liveAppAsset,
    catalogItems: liveCatalog.totals.all,
    projects: liveProjects.projects.length,
    repositories: liveMetadata.totals.repositories,
    mcpServers: liveMcpAudit.servers.length,
    registryEntries: liveRegistry.entries.length,
  };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  try {
    const result = await smokeProduction(process.argv[2] || `https://${allowedHost}/`, process.env.DEPLOY_SHA);
    console.log(`Production smoke passed: ${result.appAsset}, ${result.catalogItems} catalog items, ${result.projects} projects, ${result.repositories} repositories, ${result.mcpServers} MCP audit records, ${result.registryEntries} Star registry entries.`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}
