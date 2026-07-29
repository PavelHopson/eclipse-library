import assert from 'node:assert/strict';
import test from 'node:test';
import { buildIdentitySnapshot, canonicalUrl, compareWithBaseline, githubRepoKey, normalizedTitle } from './catalog-identity.mjs';

test('normalizes tracking URLs, titles and GitHub subpaths', () => {
  assert.equal(canonicalUrl('https://www.Example.com/tool/?utm_source=test#readme'), 'https://example.com/tool');
  assert.equal(normalizedTitle('  Open-Tool · PRO  '), 'open tool pro');
  assert.equal(githubRepoKey('https://github.com/OpenAI/openai-node/tree/main'), 'openai/openai-node');
  assert.equal(githubRepoKey('https://github.com/marketplace/models'), null);
});

test('detects duplicate table resources and blocks baseline growth', () => {
  const markdown = [
    '| Resource | Description |',
    '|---|---|',
    '| [Tool](https://example.com/tool?utm_source=a) | one |',
    '| [Tool](https://www.example.com/tool/#readme) | two |',
  ].join('\n');
  const snapshot = buildIdentitySnapshot(markdown);
  assert.equal(snapshot.duplicates.canonicalUrl['https://example.com/tool'], 2);
  assert.deepEqual(compareWithBaseline(snapshot, { duplicates: { canonicalUrl: {}, githubRepo: {}, normalizedTitle: {} } }), [
    'canonicalUrl: new duplicate "https://example.com/tool" (2 entries).',
    'normalizedTitle: new duplicate "tool" (2 entries).',
  ]);
});
