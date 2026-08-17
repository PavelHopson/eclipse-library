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

test('preserves mixed code and model license terms instead of collapsing to repository SPDX', () => {
  const original = 'NeMo code — Apache-2.0; VoiceChat model — OpenMDW-1.1';
  const result = normalizeLicense(
    { license: original, reviewStatus: 'verified', url: 'https://github.com/nvidia-nemo/speech' },
    { licenseInfo: { name: 'Apache License 2.0', spdxId: 'Apache-2.0', url: 'https://api.github.com/repos/nvidia-nemo/speech/license' } },
  );
  assert.equal(result.label, original);
  assert.equal(result.spdx, null);
  assert.equal(result.kind, 'custom');
  assert.equal(result.status, 'editor-reviewed');
  assert.equal(result.requiresReview, false);
});
test('normalizes Creative Commons catalog licenses', () => {
  const cc0 = normalizeLicense(
    { license: 'CC0 1.0 for the list; every linked application has its own license', reviewStatus: 'verified', url: 'https://github.com/example/list' },
    null,
  );
  const attribution = normalizeLicense(
    { license: 'CC-BY-4.0', reviewStatus: 'verified', url: 'https://example.com/spec' },
    null,
  );
  assert.equal(cc0.spdx, 'CC0-1.0');
  assert.equal(cc0.kind, 'open-source');
  assert.equal(attribution.spdx, 'CC-BY-4.0');
});


test('keeps non-commercial and rider licenses out of the open-source bucket', () => {
  const nonCommercial = normalizeLicense(
    { license: 'CC-BY-NC-4.0; non-commercial content license', reviewStatus: 'verified', url: 'https://example.com/license' },
    null,
  );
  const rider = normalizeLicense(
    { license: 'MIT with an additional rider restricting named parties', reviewStatus: 'verified', url: 'https://example.com/license' },
    { licenseInfo: { name: 'Other', spdxId: 'NOASSERTION', url: 'https://api.github.com/repos/example/project/license' } },
  );
  assert.equal(nonCommercial.spdx, 'CC-BY-NC-4.0');
  assert.equal(nonCommercial.kind, 'custom');
  assert.equal(nonCommercial.requiresReview, false);
  assert.equal(rider.spdx, null);
  assert.equal(rider.kind, 'custom');
});

test('normalizes reviewed copyleft and source-available licenses', () => {
  const lgpl = normalizeLicense(
    { license: 'LGPL-3.0-or-later', reviewStatus: 'verified', url: 'https://example.com/license' },
    null,
  );
  const elastic = normalizeLicense(
    { license: 'Elastic-2.0', reviewStatus: 'verified', url: 'https://example.com/license' },
    null,
  );
  assert.equal(lgpl.spdx, 'LGPL-3.0-or-later');
  assert.equal(lgpl.kind, 'open-source');
  assert.equal(elastic.spdx, 'Elastic-2.0');
  assert.equal(elastic.kind, 'source-available');
});
