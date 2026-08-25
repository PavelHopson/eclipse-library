import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const agentExport = JSON.parse(await readFile(new URL("web/api/v1/agents.json", root), "utf8"));
const ids = new Set(agentExport.items.map((item) => item.id));

for (const blocked of [
  "phone-number-osint-claims-warning",
  "fakecam-deceptive-presence-warning",
  "camloop-deceptive-presence-warning",
  "aeon-qwen38-27b-safety-reduced-bf16",
  "orcarouter-qwen38-27b-safety-reduced-fp8",
]) {
  assert.equal(ids.has(blocked), false, `${blocked} must not appear in agent-safe exports`);
}

for (const reference of [
  "block-buzz-agent-workspace",
  "codebase-memory-mcp-local-graph",
  "vercel-ai-agent-harness-course",
]) {
  assert.equal(ids.has(reference), true, `${reference} should remain discoverable to agents as reviewed reference`);
}

console.log("August radar agent-export policy passed: rejected records excluded, reviewed references retained.");
