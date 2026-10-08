import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const root = new URL('../', import.meta.url);
const json = async (path) => JSON.parse(await readFile(new URL(path, root), 'utf8'));
const base = 'docs/references/media-provenance/';
const example = await json(`${base}library-mark-report.json`);
const template = await json(`${base}report-template.json`);
const hash = /^[a-f0-9]{64}$/;
const date = (value) => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}(?:T.*Z)?$/.test(value) && Number.isFinite(Date.parse(value));

// Local fixture/contract checks only. This is not an upload endpoint or a detector.
function checkReport(report) {
  assert.equal(report.schema_version, '1.0');
  for (const field of ['asset_id', 'filename', 'media_type', 'source_claim']) assert.ok(typeof report[field] === 'string' && report[field].trim());
  assert.match(report.sha256, hash);
  assert.ok(Boolean(report.source_url) !== Boolean(report.source_ref));
  if (report.source_url) assert.ok(['https:', 'http:'].includes(new URL(report.source_url).protocol));
  if (report.source_ref) assert.ok(!/^([a-z]:|\/|\\)/i.test(report.source_ref) && !report.source_ref.split(/[\\/]/).includes('..'));
  assert.ok(date(report.observed_at));
  assert.ok(report.created_at === null || date(report.created_at));
  for (const field of ['model_id', 'revision']) assert.ok(report[field] === null || typeof report[field] === 'string');
  assert.ok(report.parent_sha256 === null || hash.test(report.parent_sha256));
  assert.ok(Array.isArray(report.evidence));
  for (const item of report.evidence) for (const field of ['kind', 'ref', 'observation']) assert.equal(typeof item[field], 'string');
  assert.ok(Array.isArray(report.transformations));
  for (const item of report.transformations) {
    assert.equal(typeof item.operation, 'string');
    for (const field of ['tool', 'version', 'evidence_ref']) assert.ok(item[field] === null || typeof item[field] === 'string');
    assert.ok(item.performed_at === null || date(item.performed_at));
  }
  assert.equal(typeof report.rights.status, 'string');
  assert.ok(report.rights.evidence_ref === null || typeof report.rights.evidence_ref === 'string');
  const v = report.verification;
  assert.ok(['detected', 'not_detected', 'not_checked'].includes(v.status));
  assert.ok(v.checked_at === null || (date(v.checked_at) && v.checked_at.includes('T')));
  if (v.status === 'not_checked') assert.ok(typeof v.reason === 'string' && v.reason.trim());
  else {
    assert.equal(new URL(v.service_url).protocol, 'https:');
    assert.ok(v.checked_at);
    assert.ok(typeof v.raw_result === 'string' && v.raw_result.trim());
    assert.ok(typeof v.evidence_ref === 'string' && v.evidence_ref.trim());
  }
  assert.ok(!Object.hasOwn(v, 'confidence'));
}

test('local report conforms to v1 and matches exact existing bytes', async () => {
  checkReport(example);
  assert.equal(example.sha256, createHash('sha256').update(await readFile(new URL(example.source_ref, root))).digest('hex'));
  assert.equal(example.verification.status, 'not_checked');
  assert.equal(example.verification.checked_at, null);
});
test('template is deliberately incomplete and has no fabricated result', () => {
  assert.deepEqual(Object.keys(template).sort(), Object.keys(example).sort());
  assert.throws(() => checkReport(template));
  assert.equal(template.verification.status, 'not_checked');
  assert.equal(template.sha256, null);
  assert.equal(template.verification.raw_result, null);
});
test('incomplete negative or positive result cannot pass', () => {
  for (const status of ['detected', 'not_detected', 'error']) {
    const copy = structuredClone(example);
    copy.verification.status = status;
    assert.throws(() => checkReport(copy));
  }
});
test('not_checked requires a reason; unknown source and malformed hash fail', () => {
  for (const mutate of [r => r.verification.reason = '', r => r.source_ref = null, r => r.sha256 = 'unknown', r => r.source_ref = '../private.png']) {
    const copy = structuredClone(example); mutate(copy);
    assert.throws(() => checkReport(copy));
  }
});
test('catalog has one SynthID card, existing C2PA reference, and indexed guide', async () => {
  const catalog = await json('catalog/resources.json');
  assert.equal(catalog.totals.items, catalog.items.length);
  const matches = catalog.items.filter(i => i.id === 'synthid-detector-media-provenance');
  assert.equal(matches.length, 1);
  assert.equal(matches[0].verification.runtimeTested, false);
  assert.equal(matches[0].verification.fileVerificationStatus, 'not_checked');
  assert.ok(catalog.items.some(i => i.id === matches[0].relatedResources[0]));
  const guides = await json('web/guides.json');
  assert.ok(guides.guides.some(g => g.name === matches[0].guide));
  const text = await readFile(new URL(`guides/${matches[0].guide}.md`, root), 'utf8');
  for (const [, slug] of text.matchAll(/\]\(([a-z0-9-]+)\.md\)/g)) await readFile(new URL(`guides/${slug}.md`, root));
  assert.ok(!text.includes('](#guide/'), 'guide renderer requires relative markdown links');
  assert.ok(text.includes(example.sha256));
});
test('notice correction preserves not_checked and distinguishes claims from deletion proof', async () => {
  const catalog = await json('catalog/resources.json');
  const item = catalog.items.find(i => i.id === 'synthid-detector-media-provenance');
  assert.equal(item.verification.publicNoticeObservedAt, '2026-10-08T12:36:09.919Z');
  assert.equal(item.verification.deletionIndependentlyVerified, false);
  assert.equal(item.verification.fileVerificationStatus, 'not_checked');
  assert.equal(item.correctionHistory.length, 2);
  const text = await readFile(new URL(`guides/${item.guide}.md`, root), 'utf8');
  for (const term of ['https://policies.google.com/terms', 'https://policies.google.com/privacy', '24 часов', 'frontend-as-API', 'не независимый аудит удаления']) assert.ok(text.includes(term));
  assert.equal(example.verification.raw_result, null);
  assert.equal(example.verification.checked_at, null);
});

test('public downloads match canonical neutral reports and are linked by guide', async () => {
  for (const name of ['report-template.json','library-mark-report.json']) {
    assert.equal(await readFile(new URL('web/assets/media-provenance/'+name,root),'utf8'),await readFile(new URL(base+name,root),'utf8'));
  }
  const text=await readFile(new URL('guides/synthid-media-provenance-checklist.md',root),'utf8');
  for(const name of ['report-template.json','library-mark-report.json'])assert.ok(text.includes('](https://library.eclipse-forge.ru/assets/media-provenance/'+name+')'));
});
