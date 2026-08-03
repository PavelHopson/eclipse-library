import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const repoRoot = new URL('../', import.meta.url);
const defaultOutput = new URL('web/github-metadata.json', repoRoot);
const allowedStates = new Set(['active', 'archived', 'disabled', 'unknown']);
const reservedGithubRoutes = new Set(['collections', 'events', 'features', 'login', 'marketplace', 'new', 'orgs', 'search', 'settings', 'sponsors', 'topics', 'users']);

export function githubRepoKey(value) {
  try {
    const url = new URL(String(value).replace(/[.,;:!?]+$/, ''));
    if (url.hostname.toLowerCase().replace(/^www\./, '') !== 'github.com') return null;
    const [owner, rawRepo] = url.pathname.split('/').filter(Boolean);
    const repo = rawRepo?.replace(/\.git$/i, '');
    if (!owner || !repo || reservedGithubRoutes.has(owner.toLowerCase()) || !/^[A-Za-z0-9_.-]+$/.test(owner) || !/^[A-Za-z0-9_.-]+$/.test(repo)) return null;
    return `${owner.toLowerCase()}/${repo.toLowerCase()}`;
  } catch {
    return null;
  }
}

export function extractGithubRepos(markdown, projects = {}) {
  const urls = [
    ...[...markdown.matchAll(/https?:\/\/github\.com\/[^\s)"'<>]+/gi)].map((match) => match[0]),
    ...(projects.projects || []).map((project) => project.repoUrl).filter(Boolean),
  ];
  return [...new Set(urls.map(githubRepoKey).filter(Boolean))].sort();
}

export function buildRepositoryQuery(keys) {
  const fields = keys.map((key, index) => {
    const [owner, name] = key.split('/');
    return `r${index}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { nameWithOwner url isArchived isDisabled isPrivate pushedAt updatedAt licenseInfo { name spdxId url } }`;
  });
  return `query EclipseLibraryRepositoryStatus { ${fields.join('\n')} }`;
}

async function requestBatch(keys, token) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      accept: 'application/vnd.github+json',
      authorization: `Bearer ${token}`,
      'content-type': 'application/json',
      'user-agent': 'Eclipse-Library-Metadata/1.0',
      'x-github-api-version': '2022-11-28',
    },
    body: JSON.stringify({ query: buildRepositoryQuery(keys) }),
  });
  if (!response.ok) throw new Error(`GitHub GraphQL request failed with HTTP ${response.status}.`);
  const payload = await response.json();
  if (!payload?.data || (payload.errors && !Object.keys(payload.data).length)) {
    throw new Error('GitHub GraphQL response did not contain repository data.');
  }
  return keys.map((key, index) => {
    const repo = payload.data[`r${index}`];
    if (!repo || repo.isPrivate) return { key, state: 'unknown', url: `https://github.com/${key}`, pushedAt: null, updatedAt: null };
    const state = repo.isDisabled ? 'disabled' : repo.isArchived ? 'archived' : 'active';
    return {
      key,
      state: allowedStates.has(state) ? state : 'unknown',
      url: repo.url,
      pushedAt: repo.pushedAt || null,
      updatedAt: repo.updatedAt || null,
      licenseInfo: repo.licenseInfo ? {
        name: repo.licenseInfo.name,
        spdxId: repo.licenseInfo.spdxId || null,
        url: `https://api.github.com/repos/${key}/license`,
      } : null,
    };
  });
}

export async function refreshGithubMetadata({ token, output = defaultOutput } = {}) {
  if (!token) throw new Error('GITHUB_TOKEN is required to refresh public repository metadata.');
  const [catalog, projects] = await Promise.all([
    readFile(new URL('catalog/resources.json', repoRoot), 'utf8').then(JSON.parse),
    readFile(new URL('web/projects.json', repoRoot), 'utf8').then(JSON.parse),
  ]);
  const keys = [...new Set([
    ...(catalog.items || []).map((item) => githubRepoKey(item.url)).filter(Boolean),
    ...(projects.projects || []).map((project) => githubRepoKey(project.repoUrl)).filter(Boolean),
  ])].sort();
  const repositories = [];
  for (let index = 0; index < keys.length; index += 50) {
    repositories.push(...await requestBatch(keys.slice(index, index + 50), token));
  }
  const snapshot = {
    schemaVersion: 1,
    checkedAt: new Date().toISOString(),
    totals: {
      repositories: repositories.length,
      active: repositories.filter((repo) => repo.state === 'active').length,
      archived: repositories.filter((repo) => repo.state === 'archived').length,
      disabled: repositories.filter((repo) => repo.state === 'disabled').length,
      unknown: repositories.filter((repo) => repo.state === 'unknown').length,
    },
    repositories,
  };
  await writeFile(output, `${JSON.stringify(snapshot, null, 2)}\n`, { encoding: 'utf8', mode: 0o600 });
  return snapshot;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  try {
    const snapshot = await refreshGithubMetadata({ token: process.env.GITHUB_TOKEN });
    console.log(`GitHub metadata written: ${snapshot.totals.repositories} repositories, ${snapshot.totals.archived} archived.`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}
