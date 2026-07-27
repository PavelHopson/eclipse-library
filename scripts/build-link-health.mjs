import { readFile, writeFile } from 'node:fs/promises';

const repoRoot = new URL('../', import.meta.url);
const input = process.argv[2] ? new URL(process.argv[2].replace(/\\/g, '/'), `file:///${process.cwd().replace(/\\/g, '/')}/`) : new URL('.artifacts/link-check-report.json', repoRoot);
const output = process.argv[3] ? new URL(process.argv[3].replace(/\\/g, '/'), `file:///${process.cwd().replace(/\\/g, '/')}/`) : new URL('web/link-health.json', repoRoot);
const allowedStatuses = new Set(['ok', 'restricted', 'broken', 'unavailable', 'unknown', 'blocked', 'skipped']);

const report = JSON.parse(await readFile(input, 'utf8'));
if (report?.mode !== 'network' || !Array.isArray(report.links) || report.links.length === 0) {
  throw new Error('A non-empty network link audit report is required.');
}

const links = report.links.map((item) => {
  const url = new URL(item.url);
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error(`Unsupported URL scheme: ${item.url}`);
  if (!allowedStatuses.has(item.status)) throw new Error(`Unsupported link status: ${item.status}`);
  return {
    url: item.url,
    status: item.status,
    httpStatus: Number.isInteger(item.httpStatus) ? item.httpStatus : null,
  };
});

const totals = {
  extracted: Number.isInteger(report?.totals?.extracted) ? report.totals.extracted : links.length,
  unique: links.length,
  checked: links.length,
  ok: 0,
  restricted: 0,
  broken: 0,
  unavailable: 0,
  unknown: 0,
  blocked: 0,
  skipped: 0,
};
links.forEach((item) => { totals[item.status] += 1; });

const snapshot = {
  schemaVersion: 1,
  checkedAt: report.generatedAt,
  totals,
  links,
};

await writeFile(output, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8');
console.log(`Link-health snapshot written: ${links.length} URLs checked at ${snapshot.checkedAt}.`);
