import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const repoRoot = new URL('../', import.meta.url);
const baselineUrl = new URL('scripts/catalog-identity-baseline.json', repoRoot);

export function canonicalUrl(value) {
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

export function normalizedTitle(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/<[^>]+>/g, ' ')
    .replace(/[^a-zа-яё0-9]+/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function githubRepoKey(value) {
  try {
    const url = new URL(value);
    if (url.hostname.replace(/^www\./, '').toLowerCase() !== 'github.com') return null;
    const [owner, repo] = url.pathname.split('/').filter(Boolean);
    if (!owner || !repo || ['marketplace', 'features', 'topics', 'collections', 'orgs', 'users'].includes(owner.toLowerCase())) return null;
    return `${owner.toLowerCase()}/${repo.replace(/\.git$/i, '').toLowerCase()}`;
  } catch {
    return null;
  }
}

export function extractResources(markdown) {
  const resources = [];
  markdown.split('\n').forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed.startsWith('|') || /^\|?[\s:|-]+\|?$/.test(trimmed)) return;
    const firstCell = trimmed.split('|')[1] || '';
    const link = firstCell.match(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/);
    if (!link || /img\.shields\.io|cdn\.rawgit\.com/i.test(link[2])) return;
    resources.push({ title: link[1].replace(/[*`]/g, '').trim(), url: link[2], line: index + 1 });
  });
  return resources;
}

function duplicateCounts(resources, keyFn) {
  const groups = new Map();
  resources.forEach((resource) => {
    const key = keyFn(resource);
    if (!key) return;
    groups.set(key, (groups.get(key) || 0) + 1);
  });
  return Object.fromEntries([...groups].filter(([, count]) => count > 1).sort(([a], [b]) => a.localeCompare(b)));
}

export function buildIdentitySnapshot(markdown) {
  const resources = extractResources(markdown);
  return {
    resourceCount: resources.length,
    duplicates: {
      canonicalUrl: duplicateCounts(resources, (item) => canonicalUrl(item.url)),
      githubRepo: duplicateCounts(resources, (item) => githubRepoKey(item.url)),
      normalizedTitle: duplicateCounts(resources, (item) => normalizedTitle(item.title)),
    },
  };
}

export function compareWithBaseline(snapshot, baseline) {
  const errors = [];
  for (const kind of ['canonicalUrl', 'githubRepo', 'normalizedTitle']) {
    const allowed = baseline?.duplicates?.[kind] || {};
    Object.entries(snapshot.duplicates[kind]).forEach(([key, count]) => {
      if (!Number.isInteger(allowed[key])) errors.push(`${kind}: new duplicate "${key}" (${count} entries).`);
      else if (count > allowed[key]) errors.push(`${kind}: duplicate "${key}" grew from ${allowed[key]} to ${count} entries.`);
    });
  }
  return errors;
}

export async function validateCatalogIdentity({ updateBaseline = false } = {}) {
  const readme = await readFile(new URL('README.md', repoRoot), 'utf8');
  const snapshot = buildIdentitySnapshot(readme);
  if (updateBaseline) {
    const baseline = { schemaVersion: 1, generatedAt: new Date().toISOString(), ...snapshot };
    await writeFile(baselineUrl, `${JSON.stringify(baseline, null, 2)}\n`, 'utf8');
    return { snapshot, errors: [], updated: true };
  }
  const baseline = JSON.parse(await readFile(baselineUrl, 'utf8'));
  if (baseline?.schemaVersion !== 1) throw new Error('Catalog identity baseline schemaVersion must be 1.');
  return { snapshot, errors: compareWithBaseline(snapshot, baseline), updated: false };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const result = await validateCatalogIdentity({ updateBaseline: process.argv.includes('--update-baseline') });
  const counts = Object.fromEntries(Object.entries(result.snapshot.duplicates).map(([kind, groups]) => [kind, Object.keys(groups).length]));
  if (result.updated) {
    console.log(`Catalog identity baseline updated: ${result.snapshot.resourceCount} resources, ${counts.canonicalUrl}/${counts.githubRepo}/${counts.normalizedTitle} duplicate groups.`);
  } else if (result.errors.length) {
    console.error(`Catalog identity validation failed with ${result.errors.length} error(s):`);
    result.errors.forEach((error) => console.error(`- ${error}`));
    process.exitCode = 1;
  } else {
    console.log(`Catalog identity validation passed: ${result.snapshot.resourceCount} resources; no new URL, GitHub repository or title duplicates.`);
  }
}
