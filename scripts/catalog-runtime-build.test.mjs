import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { buildCatalogRuntime, DETAIL_SHARD_COUNT, detailShardForId } from './build-catalog-runtime.mjs';

const indexUrl = new URL('../web/catalog-index.json', import.meta.url);

test('runtime summary stays compact and every detail has one deterministic shard', async () => {
  const fullText = await readFile(indexUrl, 'utf8');
  const index = JSON.parse(fullText);
  const { summary, shards } = buildCatalogRuntime(index);

  assert.equal(summary.schemaVersion, 1);
  assert.equal(summary.sourceHash, index.sourceHash);
  assert.deepEqual(summary.totals, index.totals);
  assert.equal(summary.policy.directInstallForbidden, true);
  assert.equal(summary.items.length, index.items.length);
  assert.equal(shards.length, DETAIL_SHARD_COUNT);

  const seen = new Set();
  shards.forEach((shard, shardIndex) => {
    assert.equal(shard.schemaVersion, 1);
    assert.equal(shard.sourceHash, index.sourceHash);
    assert.equal(shard.shard, shardIndex.toString(16).padStart(2, '0'));
    shard.items.forEach((item) => {
      assert.equal(detailShardForId(item.id), shardIndex);
      assert.equal(seen.has(item.id), false, 'duplicate detail: ' + item.id);
      seen.add(item.id);
    });
  });
  assert.equal(seen.size, index.items.length);

  summary.items.forEach((item) => {
    assert.equal(Object.hasOwn(item, 'rawText'), false);
    assert.equal(Object.hasOwn(item, 'source'), false);
    assert.equal(Object.hasOwn(item, 'trustReason'), false);
    assert.ok(Array.isArray(item.evidence));
    assert.ok(item.useCases.length <= 2);
    assert.ok(item.risks.length <= 2);
    assert.ok(item.quickStart.length <= 2);
  });

  const summaryBytes = Buffer.byteLength(JSON.stringify(summary));
  const compactFullBytes = Buffer.byteLength(JSON.stringify(index));
  assert.ok(summaryBytes < compactFullBytes * 0.7, 'summary is not at least 30% smaller than the compact full index');
});
