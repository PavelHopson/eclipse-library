import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const catalog = JSON.parse(await readFile(new URL("catalog/resources.json", root), "utf8"));
const guide = await readFile(new URL("guides/september-2026-old-youtube-video-review.md", root), "utf8");
const items = new Map(catalog.items.map((item) => [item.id, item]));
const expected = [
  "unreal-weekly-shooter-vertical-slice-video",
  "ai-only-game-release-postmortem-video",
  "flux-lora-consistent-character-video-reference",
];

for (const id of expected) {
  assert.ok(items.has(id), `${id} is missing from catalog`);
  const item = items.get(id);
  assert.equal(item.guide, "september-2026-old-youtube-video-review", `${id} guide link`);
  assert.equal(item.verifiedAt, "2026-09-01", `${id} verification date`);
  assert.ok(item.simpleDescription.length >= 120, `${id} description must include verdict and caveat`);
  assert.ok(item.licenseEvidence?.length, `${id} must have evidence`);
  assert.ok(item.projects?.length, `${id} must map to Eclipse projects`);
  assert.ok(item.quickStart?.length, `${id} must provide a bounded next step`);
}

assert.equal(items.get("unreal-weekly-shooter-vertical-slice-video").decision, "reference");
assert.equal(items.get("ai-only-game-release-postmortem-video").decision, "now");
assert.equal(items.get("flux-lora-consistent-character-video-reference").type, "grey");
assert.match(items.get("flux-lora-consistent-character-video-reference").limitations.join(" "), /No real-person cloning/);

const allVideoIds = [
  "CDpshK-DBCo",
  "G_2XOHxOoiY",
  "1pGoVd8z0lM",
  "v1iIw1D2iRE",
  "RYM6EbeTylk",
  "9VOXy8Rny8c",
  "UPWlOvcFSEE",
  "kvz1KFYiqB0",
];
for (const videoId of allVideoIds) assert.match(guide, new RegExp(videoId), `${videoId} must have an explicit verdict in the guide`);
assert.match(guide, /Не добавлять/);
assert.match(guide, /Godogen/);
assert.match(guide, /GameForge/);
assert.match(guide, /Eclipse Creative/);

console.log(`Legacy YouTube review contract passed: ${expected.length} catalog records and ${allVideoIds.length} explicit verdicts.`);
