import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { githubRepoKey } from './catalog-policy.mjs';

const root = new URL('../', import.meta.url);
const outputUrl = new URL('web/license-review-queue.json', root);

function classify(item, repository) {
  if (item.type === 'grey') {
    return {
      bucket: 'grey-reference',
      priority: 'P3',
      reason: 'Grey resources stay excluded from agent recommendations; review only if a human needs this reference.',
      nextStep: 'Confirm ownership, redistribution rights and legal/safety boundaries before any use.',
    };
  }
  if (repository && !repository.licenseInfo) {
    return {
      bucket: 'repository-license-not-detected',
      priority: item.decision === 'implement' ? 'P1' : 'P2',
      reason: 'GitHub does not expose a detected repository license. Source availability alone grants no reuse rights.',
      nextStep: 'Inspect repository root, README and package-specific directories; if no grant exists, mark reference-only.',
    };
  }
  if (repository?.licenseInfo?.spdxId === 'NOASSERTION') {
    return {
      bucket: 'repository-custom-license',
      priority: item.decision === 'implement' ? 'P1' : 'P2',
      reason: 'GitHub found a license file but could not map it to a standard SPDX identifier.',
      nextStep: 'Read the exact license file and record commercial, hosting, redistribution and attribution limits.',
    };
  }
  if (item.type === 'model' || /huggingface\.co$/i.test(new URL(item.url).hostname)) {
    return {
      bucket: 'model-or-dataset-terms',
      priority: 'P1',
      reason: 'Model code, weights, training data and generated output can have different terms.',
      nextStep: 'Review model card, repository license, acceptable-use policy, data provenance and commercial-output terms.',
    };
  }
  if (['shop', 'api', 'agent', 'tool', 'privacy', 'drop'].includes(item.type)) {
    return {
      bucket: 'service-terms',
      priority: item.decision === 'implement' || item.riskLevel === 'high' ? 'P1' : 'P2',
      reason: 'A service page is not a license grant; current Terms, Privacy/DPA and pricing conditions control use.',
      nextStep: 'Capture direct Terms and Privacy URLs, retention/subprocessor terms and the exact plan used by Eclipse.',
    };
  }
  if (item.type === 'learn' || item.type === 'prompt') {
    return {
      bucket: 'content-terms',
      priority: 'P2',
      reason: 'Public access does not automatically permit copying, republishing or commercial reuse of content.',
      nextStep: 'Confirm the content license and separate it from platform Terms and third-party assets.',
    };
  }
  return {
    bucket: 'manual-other',
    priority: item.riskLevel === 'high' ? 'P1' : 'P2',
    reason: 'The current official source does not provide enough normalized license evidence.',
    nextStep: 'Open the official source and record the exact grant, restrictions, owner and evidence URL.',
  };
}

export async function buildLicenseReviewQueue() {
  const [indexText, metadataText] = await Promise.all([
    readFile(new URL('web/catalog-index.json', root), 'utf8'),
    readFile(new URL('web/github-metadata.json', root), 'utf8'),
  ]);
  const index = JSON.parse(indexText);
  const metadata = JSON.parse(metadataText);
  const repositories = new Map((metadata.repositories || []).map((entry) => [entry.key, entry]));
  const items = index.items
    .filter((item) => item.licenseInfo?.requiresReview)
    .map((item) => {
      const repository = repositories.get(githubRepoKey(item.url)) || null;
      const classification = classify(item, repository);
      return {
        id: item.id,
        title: item.title,
        type: item.type,
        url: item.url,
        decision: item.decision,
        riskLevel: item.riskLevel,
        currentLicense: item.license,
        reviewStatus: item.reviewStatus,
        ...classification,
        evidence: item.licenseInfo.evidence,
      };
    })
    .sort((a, b) => a.priority.localeCompare(b.priority) || a.bucket.localeCompare(b.bucket) || a.title.localeCompare(b.title, 'ru'));

  const byBucket = Object.fromEntries([...new Set(items.map((item) => item.bucket))]
    .sort()
    .map((bucket) => [bucket, items.filter((item) => item.bucket === bucket).length]));
  const byPriority = Object.fromEntries(['P1', 'P2', 'P3'].map((priority) => [
    priority,
    items.filter((item) => item.priority === priority).length,
  ]));

  return {
    schemaVersion: 1,
    sourceHash: index.sourceHash,
    policy: {
      automaticApprovalForbidden: true,
      directInstallForbidden: true,
      missingLicenseMeansNoReusePermission: true,
    },
    totals: {
      reviewRequired: items.length,
      byPriority,
      byBucket,
    },
    items,
  };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const queue = await buildLicenseReviewQueue();
  const output = `${JSON.stringify(queue, null, 2)}\n`;
  if (process.argv.includes('--check')) {
    const current = await readFile(outputUrl, 'utf8').catch(() => '');
    if (current !== output) {
      console.error('license-review-queue.json is stale. Run node scripts/build-license-review-queue.mjs.');
      process.exitCode = 1;
    } else {
      console.log(`License review queue is current: ${queue.totals.reviewRequired} items.`);
    }
  } else {
    await writeFile(outputUrl, output, 'utf8');
    console.log(`License review queue built: ${queue.totals.reviewRequired} items.`);
  }
}
