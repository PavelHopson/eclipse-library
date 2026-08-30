import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const catalog = JSON.parse(await readFile(new URL("catalog/resources.json", root), "utf8"));
const guide = await readFile(new URL("guides/august-2026-agent-creative-runtime-radar.md", root), "utf8");
const items = new Map(catalog.items.map((item) => [item.id, item]));

const expected = [
  "free-claude-code-provider-router",
  "godogen-agent-game-factory",
  "amicro-micro-transitions",
  "zai-glm-5-3-flash",
  "palmier-pro-agent-video-editor",
  "gemini-3-5-transcribe-and-jot",
  "telegraph-universal-3d-landing-prompt",
  "youmind-ai-image-prompts-skill",
  "video-scraping-apis-directory",
  "how-to-train-your-gpt-course",
  "auto-company-multi-agent-reference",
  "furever-dock-desktop-pet-reference",
  "warp-skill-doctor",
  "archify-evidence-backed-diagrams",
];

for (const id of expected) {
  assert.ok(items.has(id), `${id} is missing from catalog`);
  const item = items.get(id);
  assert.equal(item.guide, "august-2026-agent-creative-runtime-radar", `${id} guide link`);
  assert.equal(item.verifiedAt, "2026-08-30", `${id} verification date`);
  assert.ok(item.simpleDescription.length >= 120, `${id} description must include verdict and caveat`);
  assert.ok(item.licenseEvidence?.length, `${id} must have source or license evidence`);
  assert.ok(item.projects?.length, `${id} must map to Eclipse projects`);
  assert.ok(item.quickStart?.length, `${id} must provide a bounded safe next step`);
}

assert.match(items.get("free-claude-code-provider-router").simpleDescription, /1,3 млрд/);
assert.match(items.get("free-claude-code-provider-router").simpleDescription, /1,5 млрд.+не подтверждена/);
assert.match(items.get("zai-glm-5-3-flash").simpleDescription, /18B active/);
assert.match(items.get("palmier-pro-agent-video-editor").license, /GPL-3\.0/);
assert.match(items.get("palmier-pro-agent-video-editor").license, /proprietary/i);
assert.match(items.get("gemini-3-5-transcribe-and-jot").simpleDescription, /трёх говорящих/);
assert.equal(items.get("video-scraping-apis-directory").type, "grey");
assert.equal(items.get("video-scraping-apis-directory").decision, "reference");
assert.equal(items.get("auto-company-multi-agent-reference").type, "grey");
assert.match(items.get("auto-company-multi-agent-reference").license, /No license grant/);
assert.equal(items.get("furever-dock-desktop-pet-reference").decision, "reference");
assert.equal(items.get("archify-evidence-backed-diagrams").decision, "now");
assert.equal(items.get("amicro-micro-transitions").decision, "now");

assert.match(guide, /Provider Router/);
assert.match(guide, /русской диктовки/);
assert.match(guide, /безопасный монтаж/i);
assert.match(guide, /Furever Dock/);
assert.match(guide, /не открылся/i);

console.log(`Agent and creative runtime radar contract passed: ${expected.length} verified records.`);
