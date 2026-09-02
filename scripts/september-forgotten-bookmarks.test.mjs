import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const catalog = JSON.parse(await readFile(new URL("catalog/resources.json", root), "utf8"));
const guide = await readFile(new URL("guides/september-2026-forgotten-bookmarks-radar.md", root), "utf8");
const items = new Map(catalog.items.map((item) => [item.id, item]));
const expected = [
  "base44-controlled-builder-sandbox-reference",
  "playtorrio-rejected-media-source",
  "hailuo-image-to-video-consent-gated-pilot",
  "dyad-local-first-builder-reference",
  "arena-ai-model-evaluation-evidence-reference",
  "unicorn-studio-motion-design-reference",
  "deevid-ai-video-provider-benchmark",
  "artlist-media-rights-receipt-reference",
  "kemono-rejected-content-source",
  "loki-build-discontinued-design-reference",
  "toolfolio-discovery-feed-reference",
  "wireguard-bot-archived-reference",
  "replit-agent-checkpoint-workflow-reference",
  "fontspace-gothic-license-gated-discovery",
  "heroui-chat-controlled-ui-export-reference",
  "adaptive-ai-growth-action-ledger-reference",
  "seedbox-lite-rejected-torrent-reference",
  "taggui-local-dataset-curation-reference",
  "kohya-ss-isolated-gpu-training-reference",
  "udemy-downloader-gui-rejected-content-tool",
  "aperant-multisession-agent-architecture-reference",
  "phantombuster-compliance-gated-growth-reference",
  "nekoray-archived-network-tool-reference",
];

for (const id of expected) {
  assert.ok(items.has(id), `${id} is missing from catalog`);
  const item = items.get(id);
  assert.equal(item.guide, "september-2026-forgotten-bookmarks-radar", `${id} guide link`);
  assert.equal(item.verifiedAt, "2026-09-01", `${id} verification date`);
  assert.equal(item.reviewStatus, "verified", `${id} review status`);
  assert.ok(item.simpleDescription.length >= 150, `${id} needs an actionable verdict and caveat`);
  assert.ok(item.licenseEvidence?.length >= 2, `${id} needs primary-source evidence`);
  assert.ok(item.projects?.length >= 1, `${id} must map to an Eclipse project`);
  assert.ok(item.quickStart?.length >= 3, `${id} needs bounded next steps`);
  assert.equal(item.riskLevel, "high", `${id} remains gated until implementation review`);
}

for (const id of [
  "playtorrio-rejected-media-source",
  "kemono-rejected-content-source",
  "seedbox-lite-rejected-torrent-reference",
  "udemy-downloader-gui-rejected-content-tool",
]) {
  assert.match(items.get(id).limitations.join(" "), /No integration/);
}

assert.equal(items.get("dyad-local-first-builder-reference").decision, "now");
assert.match(items.get("artlist-media-rights-receipt-reference").quickStart.join(" "), /rights-receipt/i);
assert.match(items.get("kohya-ss-isolated-gpu-training-reference").limitations.join(" "), /Not for current VPS/);
assert.match(items.get("aperant-multisession-agent-architecture-reference").limitations.join(" "), /No source copying/);

const antiMiner = items.get("anti-miner-github-com");
assert.equal(antiMiner.guide, "september-2026-forgotten-bookmarks-radar");
assert.equal(antiMiner.riskLevel, "high");
assert.match(antiMiner.limitations.join(" "), /No automatic deletion/);

const reve = items.get("reve-2-0-app-reve-com");
assert.equal(reve.guide, "september-2026-forgotten-bookmarks-radar");
assert.match(reve.limitations.join(" "), /No generic public provider gateway/);

const wan = items.get("wan22-animate-offline-provider-reference");
assert.ok(wan.licenseEvidence.some((entry) => entry.url === "https://create.wan.video/"));
assert.match(wan.limitations.join(" "), /No sensitive upload to the web playground/);

assert.match(guide, /Что внедряем первым/);
assert.match(guide, /Отклонённые и карантинные источники/);
assert.match(guide, /Security и supply-chain gate/);
assert.match(guide, /PlayTorrio, Kemono, seedbox-lite и Udemy Downloader/);

console.log(`Forgotten bookmarks intake contract passed: ${expected.length} new records and 3 refreshed records.`);
