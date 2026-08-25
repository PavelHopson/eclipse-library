import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const catalog = JSON.parse(await readFile(new URL("catalog/resources.json", root), "utf8"));
const guide = await readFile(new URL("guides/august-2026-sovereign-agents-media-radar.md", root), "utf8");
const items = new Map(catalog.items.map((item) => [item.id, item]));

const expected = [
  "block-buzz-agent-workspace",
  "phone-number-osint-claims-warning",
  "threeui-community-components",
  "rampstack-claude-skills-catalog",
  "robotics-coursework-learning-index",
  "wangp-local-media-worker",
  "opengym-local-first-fitness",
  "render-free-demo-hosting",
  "graft-code-context-engine",
  "codebase-memory-mcp-local-graph",
  "openmontage-agent-video-studio",
  "orca-multi-agent-development-environment",
  "fakecam-deceptive-presence-warning",
  "camloop-deceptive-presence-warning",
  "cliply-rights-safe-video-import",
  "vercel-ai-agent-harness-course",
  "aeon-qwen38-27b-safety-reduced-bf16",
  "orcarouter-qwen38-27b-safety-reduced-fp8",
];

for (const id of expected) {
  assert.ok(items.has(id), `${id} is missing from catalog`);
  const item = items.get(id);
  assert.equal(item.guide, "august-2026-sovereign-agents-media-radar", `${id} guide link`);
  assert.equal(item.verifiedAt, "2026-08-25", `${id} verification date`);
  assert.ok(item.simpleDescription.length >= 120, `${id} description should explain verdict and caveat`);
  assert.ok(item.licenseEvidence?.length, `${id} must have license/source evidence`);
  assert.ok(item.projects?.length, `${id} must map to Eclipse projects`);
  assert.ok(item.quickStart?.length, `${id} must provide a safe next step`);
}

for (const id of [
  "phone-number-osint-claims-warning",
  "fakecam-deceptive-presence-warning",
  "camloop-deceptive-presence-warning",
  "aeon-qwen38-27b-safety-reduced-bf16",
  "orcarouter-qwen38-27b-safety-reduced-fp8",
]) {
  const item = items.get(id);
  assert.equal(item.type, "grey", `${id} must remain in grey zone`);
  assert.equal(item.decision, "no", `${id} must be blocked from recommendations`);
  assert.equal(item.riskLevel, "high", `${id} must retain high-risk label`);
}

assert.equal(items.get("graft-code-context-engine").url, "https://github.com/trailhq/Graft");
assert.match(items.get("wangp-local-media-worker").license, /Community License 2\.0/);
assert.match(items.get("cliply-rights-safe-video-import").license, /GPL-3\.0/);
assert.match(items.get("openmontage-agent-video-studio").license, /AGPL-3\.0/);
assert.equal(items.get("render-free-demo-hosting").decision, "reference");
assert.equal(items.get("vercel-ai-agent-harness-course").decision, "now");

const agency = items.get("agency-agents-template-collection");
assert.equal(agency.guide, "august-2026-sovereign-agents-media-radar");
assert.equal(agency.verifiedAt, "2026-08-25");
assert.match(agency.simpleDescription, /более чем 230/);
assert.ok(agency.projects.includes("Eclipse AI Office"));

assert.match(guide, /Code Context Pilot/);
assert.match(guide, /Safe Agent Harness/);
assert.match(guide, /Rights-safe Media Worker/);
assert.match(guide, /Не использовать/);

console.log(`August news radar contract passed: ${expected.length} new records plus Agency Agents refresh.`);
