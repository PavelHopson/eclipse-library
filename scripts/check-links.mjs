import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { lookup } from 'node:dns/promises';
import { isIP } from 'node:net';

const repoRoot = new URL('../', import.meta.url);
const networkEnabled = process.argv.includes('--network');
const readme = await readFile(new URL('README.md', repoRoot), 'utf8');
const allowlist = JSON.parse(await readFile(new URL('scripts/link-check-allowlist.json', repoRoot), 'utf8'));
const outputDir = new URL('.artifacts/', repoRoot);
const outputFile = new URL('link-check-report.json', outputDir);

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

function normalizedTitle(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/<[^>]+>/g, ' ')
    .replace(/[^a-zа-яё0-9]+/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function githubRepoKey(value) {
  try {
    const url = new URL(value);
    if (url.hostname.replace(/^www\./, '') !== 'github.com') return null;
    const [owner, repo] = url.pathname.split('/').filter(Boolean);
    return owner && repo ? `${owner.toLowerCase()}/${repo.replace(/\.git$/i, '').toLowerCase()}` : null;
  } catch {
    return null;
  }
}

function extractResources(markdown) {
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

function duplicateGroups(resources, keyFn) {
  const groups = new Map();
  resources.forEach((resource) => {
    const key = keyFn(resource);
    if (!key) return;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(resource);
  });
  return [...groups.entries()]
    .filter(([, items]) => items.length > 1)
    .map(([key, items]) => ({ key, items: items.map(({ title, url, line }) => ({ title, url, line })) }));
}

function isPrivateAddress(value) {
  const address = value.toLowerCase().split('%')[0];
  if (address.startsWith('::ffff:')) return isPrivateAddress(address.slice(7));
  if (isIP(address) === 4) {
    const [a, b, c] = address.split('.').map(Number);
    return a === 0 || a === 10 || a === 127 || (a === 169 && b === 254) ||
      (a === 100 && b >= 64 && b <= 127) || (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && ((b === 0 && c === 0) || b === 168)) || (a === 198 && (b === 18 || b === 19)) ||
      a >= 224;
  }
  if (isIP(address) === 6) {
    return address === '::' || address === '::1' || address.startsWith('fc') ||
      address.startsWith('fd') || address.startsWith('fe8') || address.startsWith('fe9') ||
      address.startsWith('fea') || address.startsWith('feb') || address.startsWith('ff');
  }
  return true;
}

function assertAddressSafetyRules() {
  const cases = [
    ['127.0.0.1', true],
    ['10.0.0.1', true],
    ['169.254.169.254', true],
    ['100.100.100.200', true],
    ['172.16.0.1', true],
    ['192.168.1.1', true],
    ['::1', true],
    ['fc00::1', true],
    ['fe80::1', true],
    ['ff02::1', true],
    ['1.1.1.1', false],
    ['8.8.8.8', false],
    ['192.0.66.4', false],
    ['2606:4700:4700::1111', false],
  ];
  cases.forEach(([address, expected]) => {
    if (isPrivateAddress(address) !== expected) {
      throw new Error(`address safety regression for ${address}`);
    }
  });
}

assertAddressSafetyRules();

async function assertPublicDestination(value) {
  const url = new URL(value);
  const hostname = url.hostname.toLowerCase().replace(/^\[|\]$/g, '');
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error('blocked scheme');
  if (url.port && !['80', '443'].includes(url.port)) throw new Error('blocked non-standard port');
  if (hostname === 'localhost' || hostname.endsWith('.local') || hostname === 'metadata.google.internal') throw new Error('blocked private hostname');
  const addresses = isIP(hostname) ? [{ address: hostname }] : await lookup(hostname, { all: true, verbatim: true });
  if (!addresses.length || addresses.some(({ address }) => isPrivateAddress(address))) throw new Error('blocked private destination');
}

async function requestWithTimeout(initialUrl, options, timeoutMs) {
  let currentUrl = new URL(initialUrl).toString();
  for (let redirectCount = 0; redirectCount <= 5; redirectCount++) {
    await assertPublicDestination(currentUrl);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    let response;
    try {
      response = await fetch(currentUrl, { ...options, redirect: 'manual', signal: controller.signal });
    } finally {
      clearTimeout(timeout);
    }
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location');
      if (!location) return { response, finalUrl: currentUrl };
      await response.body?.cancel();
      currentUrl = new URL(location, currentUrl).toString();
      continue;
    }
    return { response, finalUrl: currentUrl };
  }
  throw new Error('too many redirects');
}

async function checkUrl(resource, timeoutMs = 8000) {
  const startedAt = Date.now();
  try {
    const hostname = new URL(resource.url).hostname.replace(/^www\./, '').toLowerCase();
    if (allowlist.skipDomains.includes(hostname)) return { ...resource, status: 'skipped', finalUrl: resource.url, httpStatus: null, durationMs: 0 };
    let { response, finalUrl } = await requestWithTimeout(resource.url, {
      method: 'HEAD',
      headers: { 'user-agent': 'Eclipse-Library-Link-Audit/1.0' },
    }, timeoutMs);
    if (response.status >= 400 && !allowlist.acceptedStatuses.includes(response.status)) {
      ({ response, finalUrl } = await requestWithTimeout(resource.url, {
        method: 'GET',
        headers: { 'user-agent': 'Eclipse-Library-Link-Audit/1.0' },
      }, timeoutMs));
    }
    const restricted = allowlist.acceptedStatuses.includes(response.status);
    const status = response.ok
      ? 'ok'
      : restricted
        ? 'restricted'
        : response.status >= 500
          ? 'unavailable'
          : 'broken';
    return {
      ...resource,
      status,
      finalUrl,
      httpStatus: response.status,
      durationMs: Date.now() - startedAt,
    };
  } catch (error) {
    return {
      ...resource,
      status: /^blocked /.test(String(error?.message || '')) ? 'blocked' : 'unknown',
      finalUrl: resource.url,
      httpStatus: null,
      durationMs: Date.now() - startedAt,
      error: error?.name === 'AbortError' ? 'timeout' : String(error?.message || error),
    };
  }
}

async function mapConcurrent(items, concurrency, mapper) {
  const results = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await mapper(items[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
  return results;
}

const extracted = extractResources(readme);
const uniqueByUrl = [...new Map(extracted.map((resource) => [canonicalUrl(resource.url), resource])).values()];
const offlineDuplicates = {
  canonicalUrl: duplicateGroups(extracted, (item) => canonicalUrl(item.url)),
  githubRepo: duplicateGroups(extracted, (item) => githubRepoKey(item.url)),
  normalizedTitle: duplicateGroups(extracted, (item) => normalizedTitle(item.title)),
};
let checked = networkEnabled ? await mapConcurrent(uniqueByUrl, 12, (item) => checkUrl(item)) : [];
if (networkEnabled) {
  const retryItems = checked.filter((item) => ['broken', 'unavailable', 'unknown'].includes(item.status));
  const retries = await mapConcurrent(retryItems, 4, (item) => checkUrl(item, 15000));
  const retryByUrl = new Map(retries.map((item) => [canonicalUrl(item.url), item]));
  checked = checked.map((item) => retryByUrl.get(canonicalUrl(item.url)) || item);
}
const redirectDuplicates = networkEnabled
  ? duplicateGroups(checked.filter((item) => item.status === 'ok'), (item) => canonicalUrl(item.finalUrl))
  : [];
const report = {
  generatedAt: new Date().toISOString(),
  mode: networkEnabled ? 'network' : 'offline',
  totals: {
    extracted: extracted.length,
    unique: uniqueByUrl.length,
    checked: checked.length,
    ok: checked.filter((item) => item.status === 'ok').length,
    restricted: checked.filter((item) => item.status === 'restricted').length,
    broken: checked.filter((item) => item.status === 'broken').length,
    unavailable: checked.filter((item) => item.status === 'unavailable').length,
    unknown: checked.filter((item) => item.status === 'unknown').length,
    blocked: checked.filter((item) => item.status === 'blocked').length,
    skipped: checked.filter((item) => item.status === 'skipped').length,
  },
  duplicates: { ...offlineDuplicates, redirectTarget: redirectDuplicates },
  links: checked,
};

await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

const summary = [
  '## Eclipse Library link audit',
  '',
  `- Mode: **${report.mode}**`,
  `- Resource rows: **${report.totals.extracted}**`,
  `- Unique canonical URLs: **${report.totals.unique}**`,
  `- Checked: **${report.totals.checked}**`,
  `- OK / restricted / broken: **${report.totals.ok} / ${report.totals.restricted} / ${report.totals.broken}**`,
  `- Temporary unavailable / network unknown: **${report.totals.unavailable} / ${report.totals.unknown}**`,
  `- Blocked unsafe destinations: **${report.totals.blocked}**`,
  `- Redirect-target duplicate groups: **${redirectDuplicates.length}**`,
  '',
  'The JSON artifact contains exact URLs, redirects, response codes and duplicate groups.',
  '',
].join('\n');

if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, summary, 'utf8');
console.log(summary);
if (!extracted.length) process.exitCode = 1;
if (networkEnabled && (report.totals.broken > 0 || report.totals.blocked > 0)) {
  console.error(`Link audit gate failed: ${report.totals.broken} broken and ${report.totals.blocked} blocked unsafe destination(s).`);
  process.exitCode = 1;
}
