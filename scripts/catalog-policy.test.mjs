import test from 'node:test';
import assert from 'node:assert/strict';
import { agentEligibility, categoryWithoutDate, dateFromCategory, normalizeLicense } from './catalog-policy.mjs';

test('moves exact and ranged catalog dates into addedAt', () => {
  assert.equal(dateFromCategory('Подборка Eclipse (03.08.2026)'), '2026-08-03');
  assert.equal(dateFromCategory('Подборка Eclipse (28.05–05.06.2026)'), '2026-05-28');
  assert.equal(categoryWithoutDate('Operational stack (02.08.2026)'), 'Operational stack');
  assert.equal(categoryWithoutDate('Подборка Eclipse (15–24.07.2026, продолжение)'), 'Подборка Eclipse');
});

test('normalizes repository license with evidence', () => {
  const result = normalizeLicense(
    { license: 'Нужно проверить в официальном источнике', reviewStatus: 'inferred', url: 'https://github.com/example/project' },
    { licenseInfo: { name: 'MIT License', spdxId: 'MIT', url: 'https://api.github.com/licenses/mit' } },
  );
  assert.equal(result.spdx, 'MIT');
  assert.equal(result.status, 'source-declared');
  assert.equal(result.requiresReview, false);
  assert.equal(result.evidence[0].kind, 'license');
});

test('fails closed for grey resources and direct installation', () => {
  const result = agentEligibility({ type: 'grey', decision: 'reference', riskLevel: 'high', reviewStatus: 'verified', url: 'https://example.com' }, null);
  assert.equal(result.eligible, false);
  assert.equal(result.installAllowed, false);
  assert.deepEqual(result.reasons, ['grey-resource']);
});

test('excludes insecure official sources from agent recommendations', () => {
  const result = agentEligibility({ type: 'service', decision: 'reference', riskLevel: 'low', reviewStatus: 'verified', url: 'http://example.com' }, null);
  assert.equal(result.eligible, false);
  assert.deepEqual(result.reasons, ['insecure-transport']);
});
