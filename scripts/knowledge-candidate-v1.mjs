import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import net from 'node:net';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const MAX_MARKDOWN_BYTES = 512 * 1024;
const topLevel = ['schemaVersion', 'candidateId', 'createdAtEpochMs', 'source', 'content', 'trust', 'review'];
const sourceLevel = ['url', 'title', 'contentHashSha256', 'extractor', 'publicOnly'];
const contentLevel = ['markdown', 'byteLength', 'wordCount'];
const trustLevel = ['content', 'instructions', 'license', 'sourcePolicy'];
const reviewLevel = ['status', 'canonical', 'agentEligible'];

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function exactKeys(value, expected, label, errors) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    errors.push(`${label} must be an object`);
    return;
  }
  for (const key of Object.keys(value)) {
    if (!expected.includes(key)) errors.push(`${label} has unknown field: ${key}`);
  }
  for (const key of expected) {
    if (!(key in value)) errors.push(`${label} is missing field: ${key}`);
  }
}

function isBlockedHost(hostname) {
  const host = hostname.replace(/\.$/, '').toLowerCase();
  if (host === 'localhost' || host.endsWith('.localhost') || host.endsWith('.local')) return true;
  if (net.isIP(host) === 4) {
    const [a, b] = host.split('.').map(Number);
    return a === 10 || a === 127 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || a === 0 || a >= 224;
  }
  if (net.isIP(host) === 6) return host === '::1' || host === '::' || host.startsWith('fc') || host.startsWith('fd') || host.startsWith('fe80:');
  return false;
}

function hasUserinfo(rawUrl) {
  return String(rawUrl || '').split('://')[1]?.split('/')[0]?.includes('@') === true;
}

export function validateCandidate(candidate) {
  const errors = [];
  exactKeys(candidate, topLevel, 'candidate', errors);
  if (candidate?.schemaVersion !== 'knowledge.candidate.v1') errors.push('schemaVersion must be knowledge.candidate.v1');
  if (!/^[a-f0-9]{64}$/.test(candidate?.candidateId || '')) errors.push('candidateId must be lowercase SHA-256 hex');
  if (!Number.isInteger(candidate?.createdAtEpochMs) || candidate.createdAtEpochMs < 1) errors.push('createdAtEpochMs must be a positive integer');

  exactKeys(candidate?.source, sourceLevel, 'source', errors);
  let sourceUrl;
  try {
    sourceUrl = new URL(candidate?.source?.url);
    if (!['http:', 'https:'].includes(sourceUrl.protocol) || hasUserinfo(candidate?.source?.url) || sourceUrl.hash || isBlockedHost(sourceUrl.hostname)) {
      errors.push('source.url must be a public http(s) URL without credentials');
    }
  } catch {
    errors.push('source.url must be a valid URL');
  }
  if (candidate?.source?.title !== null && typeof candidate?.source?.title !== 'string') errors.push('source.title must be string or null');
  if (!/^[a-f0-9]{64}$/.test(candidate?.source?.contentHashSha256 || '')) errors.push('source.contentHashSha256 must be lowercase SHA-256 hex');
  if (candidate?.source?.extractor !== 'eclipse-claw') errors.push('source.extractor must be eclipse-claw');
  if (candidate?.source?.publicOnly !== true) errors.push('source.publicOnly must be true');

  exactKeys(candidate?.content, contentLevel, 'content', errors);
  const markdown = candidate?.content?.markdown;
  const byteLength = typeof markdown === 'string' ? Buffer.byteLength(markdown, 'utf8') : 0;
  if (typeof markdown !== 'string' || markdown.length === 0) errors.push('content.markdown must be non-empty');
  if (byteLength > MAX_MARKDOWN_BYTES) errors.push(`content.markdown exceeds ${MAX_MARKDOWN_BYTES} bytes`);
  if (candidate?.content?.byteLength !== byteLength) errors.push('content.byteLength must match UTF-8 markdown length');
  if (!Number.isInteger(candidate?.content?.wordCount) || candidate.content.wordCount < 0) errors.push('content.wordCount must be a non-negative integer');

  exactKeys(candidate?.trust, trustLevel, 'trust', errors);
  if (candidate?.trust?.content !== 'untrusted') errors.push('trust.content must be untrusted');
  if (candidate?.trust?.instructions !== 'data_only') errors.push('trust.instructions must be data_only');
  if (candidate?.trust?.license !== 'unknown') errors.push('trust.license must be unknown until review');
  if (candidate?.trust?.sourcePolicy !== 'public_only') errors.push('trust.sourcePolicy must be public_only');

  exactKeys(candidate?.review, reviewLevel, 'review', errors);
  if (candidate?.review?.status !== 'needs_review') errors.push('review.status must be needs_review');
  if (candidate?.review?.canonical !== false) errors.push('review.canonical must be false');
  if (candidate?.review?.agentEligible !== false) errors.push('review.agentEligible must be false');

  if (typeof markdown === 'string' && /^[a-f0-9]{64}$/.test(candidate?.source?.contentHashSha256 || '')) {
    const contentHash = sha256(markdown);
    if (candidate.source.contentHashSha256 !== contentHash) errors.push('source.contentHashSha256 does not match markdown');
    if (sourceUrl && candidate.candidateId !== sha256(`${sourceUrl.toString()}\n${contentHash}`)) errors.push('candidateId does not match source URL and content hash');
  }
  return errors;
}

export async function readCandidate(file) {
  return JSON.parse(await readFile(file, 'utf8'));
}

const invoked = process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;
if (invoked) {
  const root = new URL('../', import.meta.url);
  const file = process.argv[2] || new URL('contracts/knowledge-candidate-v1.example.json', root);
  try {
    const candidate = await readCandidate(file);
    const errors = validateCandidate(candidate);
    if (errors.length) {
      console.error(`knowledge.candidate.v1 validation failed with ${errors.length} error(s):`);
      errors.forEach((error) => console.error(`- ${error}`));
      process.exit(1);
    }
    console.log(`knowledge.candidate.v1 validation passed: ${candidate.candidateId}`);
  } catch (error) {
    console.error(`knowledge.candidate.v1 validation failed: ${error.message}`);
    process.exit(1);
  }
}
