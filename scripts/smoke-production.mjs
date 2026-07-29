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
  const [localIndex, localApp, localMetadata, localProjects] = await Promise.all([
    readFile(new URL('web/index.html', repoRoot), 'utf8'),
    readFile(new URL('web/app.js', repoRoot), 'utf8'),
    readFile(new URL('web/github-metadata.json', repoRoot), 'utf8').then(JSON.parse),
    readFile(new URL('web/projects.json', repoRoot), 'utf8').then(JSON.parse),
  ]);
  const liveIndex = await fetchText(new URL(`?deploy=${cacheKey}`, base));
  const localAppAsset = extractVersionedAsset(localIndex, 'app.js');
  const liveAppAsset = extractVersionedAsset(liveIndex, 'app.js');
  assert.equal(liveAppAsset, localAppAsset, 'Production index references an unexpected app version.');

  const appUrl = new URL(liveAppAsset, base);
  appUrl.searchParams.set('deploy', cacheKey);
  const liveApp = await fetchText(appUrl);
  assert.equal(liveApp, localApp, 'Production app.js does not match the deployed commit.');

  const [liveMetadata, liveProjects, liveReadme] = await Promise.all([
    fetchText(new URL(`github-metadata.json?deploy=${cacheKey}`, base)).then(JSON.parse),
    fetchText(new URL(`projects.json?deploy=${cacheKey}`, base)).then(JSON.parse),
    fetchText(new URL(`README.md?deploy=${cacheKey}`, base)),
  ]);
  assert.equal(liveMetadata?.schemaVersion, 1, 'Production GitHub metadata schema is invalid.');
  assert.equal(liveMetadata?.totals?.repositories, localMetadata.totals.repositories, 'Production GitHub metadata is stale.');
  assert.equal(liveProjects?.schemaVersion, 1, 'Production projects schema is invalid.');
  assert.equal(liveProjects?.projects?.length, localProjects.projects.length, 'Production projects catalog is stale.');
  assert.match(liveReadme, /Eclipse Library/i, 'Production README data is missing.');

  return {
    appAsset: liveAppAsset,
    projects: liveProjects.projects.length,
    repositories: liveMetadata.totals.repositories,
  };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  try {
    const result = await smokeProduction(process.argv[2] || `https://${allowedHost}/`, process.env.DEPLOY_SHA);
    console.log(`Production smoke passed: ${result.appAsset}, ${result.projects} projects, ${result.repositories} repositories.`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}
