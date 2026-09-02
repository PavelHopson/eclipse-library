import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const catalog = JSON.parse(await readFile(new URL("catalog/resources.json", root), "utf8"));
const guide = await readFile(new URL("guides/september-2026-agent-architecture-companion-radar.md", root), "utf8");
const items = new Map(catalog.items.map((item) => [item.id, item]));
const expected = [
  "500-ai-agents-recipe-catalog-reference",
  "devildev-spec-architecture-gate-reference",
  "openspot-local-audio-shelf-reference",
  "wan22-animate-offline-provider-reference",
];

for (const id of expected) {
  assert.ok(items.has(id), `${id} is missing from catalog`);
  const item = items.get(id);
  assert.equal(item.guide, "september-2026-agent-architecture-companion-radar", `${id} guide link`);
  assert.equal(item.verifiedAt, "2026-09-01", `${id} verification date`);
  assert.ok(item.simpleDescription.length >= 160, `${id} description must include verdict and caveat`);
  assert.ok(item.licenseEvidence?.length >= 2, `${id} must include source and license evidence`);
  assert.ok(item.projects?.length, `${id} must map to Eclipse projects`);
  assert.ok(item.quickStart?.length >= 3, `${id} must provide bounded implementation steps`);
  assert.equal(item.riskLevel, "high", `${id} must remain gated`);
}

assert.match(items.get("500-ai-agents-recipe-catalog-reference").limitations.join(" "), /No bulk install/);
assert.match(items.get("devildev-spec-architecture-gate-reference").quickStart.join(" "), /Block code generation/);
assert.match(items.get("openspot-local-audio-shelf-reference").limitations.join(" "), /No stream extraction/);
assert.match(items.get("wan22-animate-offline-provider-reference").limitations.join(" "), /Not for the current VPS/);

const bella = items.get("bella-visual-persona-concept-only");
assert.equal(bella.guide, "september-2026-agent-architecture-companion-radar");
assert.match(bella.simpleDescription, /idle, listening, thinking, speaking and error/);
assert.match(bella.limitations.join(" "), /No code, model, weight, image, video, voice, animation or branding reuse/);
assert.match(guide, /Матрица применения/);
assert.match(guide, /Bella: забираем продуктовый язык, не поставку/);

console.log(`Agent architecture and companion radar contract passed: ${expected.length} new records and Bella scope refresh.`);
