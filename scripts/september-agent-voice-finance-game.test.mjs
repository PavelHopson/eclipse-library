import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const catalog = JSON.parse(await readFile(new URL("catalog/resources.json", root), "utf8"));
const guide = await readFile(new URL("guides/september-2026-agent-voice-finance-game-radar.md", root), "utf8");
const items = new Map(catalog.items.map((item) => [item.id, item]));
const expected = [
  "stockagent-market-simulation-reference",
  "intelligent-internet-ii-agent",
  "realtime-voice-chat-reference",
  "claude-flow-ruvnet-github-com",
  "moeru-ai-airi-companion-reference",
  "backloggd-game-collection-ux-reference",
  "fmhy-privacy-fmhy-net",
];

for (const id of expected) {
  assert.ok(items.has(id), `${id} is missing from catalog`);
  const item = items.get(id);
  assert.equal(item.guide, "september-2026-agent-voice-finance-game-radar", `${id} guide link`);
  assert.equal(item.verifiedAt, "2026-09-01", `${id} verification date`);
  assert.ok(item.simpleDescription.length >= 120, `${id} description must include verdict and caveat`);
  assert.ok(item.licenseEvidence?.length, `${id} must have source or license evidence`);
  assert.ok(item.projects?.length, `${id} must map to Eclipse projects`);
  assert.ok(item.quickStart?.length, `${id} must provide a bounded next step`);
}

assert.equal(items.get("stockagent-market-simulation-reference").type, "grey");
assert.match(items.get("stockagent-market-simulation-reference").limitations.join(" "), /No live trading/);
assert.equal(items.get("realtime-voice-chat-reference").type, "grey");
assert.match(items.get("realtime-voice-chat-reference").risks.join(" "), /safety-reduced model/);
assert.equal(items.get("claude-flow-ruvnet-github-com").url, "https://github.com/ruvnet/ruflo");
assert.match(items.get("claude-flow-ruvnet-github-com").quickStart.join(" "), /Do not run npx/);
assert.equal(items.get("fmhy-privacy-fmhy-net").type, "grey");
assert.match(items.get("fmhy-privacy-fmhy-net").limitations.join(" "), /torrenting/);
assert.match(items.get("backloggd-game-collection-ux-reference").limitations.join(" "), /No scraping/);
assert.match(guide, /StockAgent/);
assert.match(guide, /II-Agent/);
assert.match(guide, /RealtimeVoiceChat/);
assert.match(guide, /Ruflo/);
assert.match(guide, /AIRI/);
assert.match(guide, /Backloggd/);
assert.match(guide, /FMHY/);

console.log(`September source radar contract passed: ${expected.length} reviewed records.`);
