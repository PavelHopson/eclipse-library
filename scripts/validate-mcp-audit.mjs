import { readFile } from 'node:fs/promises';

const repoRoot = new URL('../', import.meta.url);
const [auditText, detailsText] = await Promise.all([
  readFile(new URL('web/mcp-audit.json', repoRoot), 'utf8'),
  readFile(new URL('web/catalog-details.json', repoRoot), 'utf8'),
]);

const audit = JSON.parse(auditText);
const details = JSON.parse(detailsText);
const errors = [];
const allowedStatuses = new Set(['static-reviewed', 'runtime-pending', 'runtime-reviewed', 'blocked']);
const allowedStaticReview = new Set(['passed', 'failed']);
const detailById = new Map(details.map((item) => [item.id, item]));
const ids = new Set();
const urls = new Set();

if (audit?.schemaVersion !== 1) errors.push('mcp-audit.json schemaVersion must be 1.');
if (!Number.isFinite(Date.parse(audit?.updatedAt))) errors.push('mcp-audit.json updatedAt must be an ISO date.');
if (!Array.isArray(audit?.servers) || audit.servers.length === 0) {
  errors.push('mcp-audit.json must contain at least one server.');
} else {
  audit.servers.forEach((server, index) => {
    const label = server?.id || `server ${index + 1}`;
    if (typeof server?.id !== 'string' || !server.id.trim()) errors.push(`${label}: id is required.`);
    if (ids.has(server?.id)) errors.push(`${label}: duplicate id.`);
    ids.add(server?.id);
    let canonical;
    try {
      const url = new URL(server.url);
      if (url.protocol !== 'https:') throw new Error('HTTPS required');
      url.hash = '';
      url.hostname = url.hostname.toLowerCase().replace(/^www\./, '');
      url.pathname = url.pathname.replace(/\/+$/, '') || '/';
      canonical = url.toString().replace(/\/$/, '');
    } catch {
      errors.push(`${label}: url must be a public HTTPS URL.`);
    }
    if (canonical && urls.has(canonical)) errors.push(`${label}: duplicate canonical URL.`);
    if (canonical) urls.add(canonical);
    if (typeof server?.version !== 'string' || !server.version.trim()) errors.push(`${label}: version is required.`);
    if (!allowedStatuses.has(server?.status)) errors.push(`${label}: unsupported status "${server?.status}".`);
    if (!allowedStaticReview.has(server?.staticReview)) errors.push(`${label}: unsupported staticReview "${server?.staticReview}".`);
    if (typeof server?.summary !== 'string' || server.summary.length < 80 || server.summary.length > 600) errors.push(`${label}: summary must be 80-600 characters.`);
    if (!Array.isArray(server?.riskAreas) || server.riskAreas.length === 0 || server.riskAreas.some((risk) => typeof risk !== 'string' || !risk.trim())) errors.push(`${label}: riskAreas must be a non-empty string array.`);
    const detail = detailById.get(server?.id);
    if (!detail) errors.push(`${label}: matching structured catalog detail is missing.`);
    if (detail && canonical) {
      const detailUrl = new URL(detail.url);
      detailUrl.hash = '';
      detailUrl.hostname = detailUrl.hostname.toLowerCase().replace(/^www\./, '');
      detailUrl.pathname = detailUrl.pathname.replace(/\/+$/, '') || '/';
      if (detailUrl.toString().replace(/\/$/, '') !== canonical) errors.push(`${label}: audit URL does not match catalog detail URL.`);
    }
    if (server?.status === 'runtime-reviewed' && !/^[a-f0-9]{64}$/.test(server?.toolsetHash || '')) errors.push(`${label}: runtime-reviewed server requires a SHA-256 toolsetHash.`);
    if (server?.status === 'blocked' && server?.staticReview !== 'failed') errors.push(`${label}: blocked server must have failed staticReview.`);
  });
}

if (errors.length) {
  console.error(`MCP audit validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

const pending = audit.servers.filter((server) => server.status === 'runtime-pending').length;
const blocked = audit.servers.filter((server) => server.status === 'blocked').length;
console.log(`MCP audit validation passed: ${audit.servers.length} servers, ${pending} runtime pending, ${blocked} blocked.`);
