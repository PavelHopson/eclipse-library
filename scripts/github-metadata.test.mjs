import assert from 'node:assert/strict';
import test from 'node:test';
import { buildRepositoryQuery, extractGithubRepos, githubRepoKey, normalizeRepositoryResult } from './refresh-github-metadata.mjs';

test('normalizes GitHub repository URLs without treating profiles as repositories', () => {
  assert.equal(githubRepoKey('https://github.com/OpenAI/openai-node/tree/main'), 'openai/openai-node');
  assert.equal(githubRepoKey('https://github.com/OpenAI/openai-node.git'), 'openai/openai-node');
  assert.equal(githubRepoKey('https://github.com/OpenAI'), null);
  assert.equal(githubRepoKey('https://github.com/marketplace/models'), null);
  assert.equal(githubRepoKey('https://example.com/OpenAI/openai-node'), null);
});

test('extracts unique public repository identities from catalog inputs', () => {
  const markdown = '[One](https://github.com/OpenAI/openai-node) [Duplicate](https://github.com/openai/openai-node/issues)';
  const projects = { projects: [{ repoUrl: 'https://github.com/PavelHopson/eclipse-library' }] };
  assert.deepEqual(extractGithubRepos(markdown, projects), ['openai/openai-node', 'pavelhopson/eclipse-library']);
});

test('builds a bounded GraphQL query from validated repository keys', () => {
  const query = buildRepositoryQuery(['openai/openai-node']);
  assert.match(query, /repository\(owner: "openai", name: "openai-node"\)/);
  assert.match(query, /isArchived/);
  assert.match(query, /isPrivate/);
  assert.match(query, /licenseInfo \{ name spdxId url \}/);
});

test('fails closed when GitHub no longer returns a public repository', () => {
  assert.deepEqual(normalizeRepositoryResult('example/deleted', null), {
    key: 'example/deleted',
    state: 'unknown',
    url: 'https://github.com/example/deleted',
    pushedAt: null,
    updatedAt: null,
    licenseInfo: null,
  });
});
