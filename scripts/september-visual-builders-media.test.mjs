import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const catalog = JSON.parse(await readFile(new URL("catalog/resources.json", root), "utf8"));
const guide = await readFile(new URL("guides/september-2026-visual-builders-and-media-radar.md", root), "utf8");
const items = new Map(catalog.items.map((item) => [item.id, item]));
const expected = [
  "bella-visual-persona-concept-only",
  "react-bits-animation-lab-reference",
  "freebeat-media-scene-plan-reference",
  "bolt-new-isolated-builder-reference",
  "rocket-new-growth-context-reference",
  "aura-build-design-handoff-reference",
];

for (const id of expected) {
  assert.ok(items.has(id), `${id} is missing from catalog`);
  const item = items.get(id);
  const expectedGuide = id === "bella-visual-persona-concept-only"
    ? "september-2026-agent-architecture-companion-radar"
    : "september-2026-visual-builders-and-media-radar";
  assert.equal(item.guide, expectedGuide, `${id} guide link`);
  assert.equal(item.verifiedAt, "2026-09-01", `${id} verification date`);
  assert.ok(item.simpleDescription.length >= 120, `${id} description must include verdict and caveat`);
  assert.ok(item.licenseEvidence?.length, `${id} must include source or license evidence`);
  assert.ok(item.projects?.length, `${id} must map to Eclipse projects`);
  assert.ok(item.quickStart?.length, `${id} must provide a bounded next step`);
}

const bella = items.get("bella-visual-persona-concept-only");
assert.equal(bella.type, "grey");
assert.equal(bella.decision, "reference");
assert.match(bella.limitations.join(" "), /No code, model, weight, image, video, voice, animation or branding reuse/);
assert.match(items.get("react-bits-animation-lab-reference").license, /Commons Clause/);
assert.match(items.get("freebeat-media-scene-plan-reference").limitations.join(" "), /No YouTube/);
assert.match(items.get("bolt-new-isolated-builder-reference").quickStart.join(" "), /Export a patch/);
assert.match(items.get("rocket-new-growth-context-reference").limitations.join(" "), /No un-sourced fact/);
assert.match(items.get("aura-build-design-handoff-reference").limitations.join(" "), /No direct production deploy/);

const saiga = catalog.items.filter((item) => /saiga|IlyaGusev\/saiga_mistral_7b_gguf/i.test(`${item.id} ${item.title} ${item.url}`));
assert.equal(saiga.length, 0, "Saiga must remain excluded from the catalog");
assert.match(guide, /Saiga Mistral 7B GGUF удалена/);
assert.match(guide, /Сделано сейчас/);

console.log(`Visual builders and media radar contract passed: ${expected.length} records, Saiga excluded.`);
