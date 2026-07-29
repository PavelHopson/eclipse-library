import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { join } from 'node:path';
import { metadataFindings } from './mcp-metadata-policy.mjs';

const outputDirectory = process.env.MCP_AUDIT_OUTPUT || '.artifacts/mcp-runtime';
const scopedDirectory = process.env.MCP_FILESYSTEM_ROOT;
if (!scopedDirectory) throw new Error('MCP_FILESYSTEM_ROOT is required.');

const servers = [
  { id: 'official-filesystem-mcp-server', version: '2026.7.10', command: 'npx', args: ['-y', '@modelcontextprotocol/server-filesystem@2026.7.10', scopedDirectory] },
  { id: 'upstash-context7-mcp', version: '3.2.5', command: 'npx', args: ['-y', '@upstash/context7-mcp@3.2.5'] },
];
function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]));
  return value;
}

function send(child, message) {
  child.stdin.write(`${JSON.stringify(message)}\n`);
}

async function inspect(server) {
  const child = spawn(server.command, server.args, {
    stdio: ['pipe', 'pipe', 'pipe'], shell: false,
    env: { PATH: process.env.PATH, HOME: process.env.HOME, npm_config_cache: process.env.npm_config_cache || join(outputDirectory, 'npm-cache'), NO_COLOR: '1' },
  });
  let buffer = '';
  let stderrBytes = 0;
  const responses = new Map();
  child.stderr.on('data', (chunk) => { stderrBytes += chunk.length; });
  child.stdout.on('data', (chunk) => {
    buffer += chunk.toString('utf8');
    const lines = buffer.split(/\r?\n/);
    buffer = lines.pop() || '';
    lines.forEach((line) => {
      try { const message = JSON.parse(line); if (message.id !== undefined) responses.set(message.id, message); } catch { /* Never print untrusted server output. */ }
    });
  });
  const waitFor = async (id, timeoutMs = 45_000) => {
    const started = Date.now();
    while (!responses.has(id)) {
      if (child.exitCode !== null) throw new Error(`${server.id} exited before response ${id}.`);
      if (Date.now() - started > timeoutMs) throw new Error(`${server.id} timed out waiting for response ${id}.`);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    const response = responses.get(id);
    if (response.error) throw new Error(`${server.id} returned JSON-RPC error ${response.error.code}.`);
    return response.result;
  };
  try {
    send(child, { jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'eclipse-library-audit', version: '1.0.0' } } });
    const initialized = await waitFor(1);
    send(child, { jsonrpc: '2.0', method: 'notifications/initialized' });
    send(child, { jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} });
    const listed = await waitFor(2);
    const tools = (listed?.tools || []).map((tool) => ({ name: String(tool.name || ''), description: String(tool.description || ''), inputSchema: stable(tool.inputSchema || {}) })).sort((a, b) => a.name.localeCompare(b.name));
    if (!tools.length) throw new Error(`${server.id} returned no tools.`);
    const findings = [];
    tools.forEach((tool) => findings.push(...metadataFindings(tool)));
    const normalized = { server: server.id, serverVersion: server.version, protocolVersion: initialized?.protocolVersion || null, tools };
    const serialized = JSON.stringify(stable(normalized));
    return { raw: normalized, summary: { id: server.id, version: server.version, protocolVersion: initialized?.protocolVersion || null, toolCount: tools.length, toolsetHash: createHash('sha256').update(serialized).digest('hex'), automatedFindings: findings, stderrBytes } };
  } finally {
    child.kill('SIGTERM');
  }
}

await mkdir(outputDirectory, { recursive: true });
const raw = [];
const summaries = [];
for (const server of servers) {
  const result = await inspect(server);
  raw.push(result.raw); summaries.push(result.summary);
}
const report = { schemaVersion: 1, scanner: 'eclipse-library-offline-inspector@1', generatedAt: new Date().toISOString(), servers: summaries };
await writeFile(join(outputDirectory, 'raw-tool-metadata.json'), `${JSON.stringify(raw, null, 2)}\n`, { encoding: 'utf8', mode: 0o600 });
await writeFile(join(outputDirectory, 'summary.json'), `${JSON.stringify(report, null, 2)}\n`, 'utf8');
summaries.forEach((server) => console.log(`${server.id}: ${server.toolCount} tools, SHA-256 ${server.toolsetHash}, ${server.automatedFindings.length} automated finding(s).`));
if (summaries.some((server) => server.automatedFindings.length)) process.exitCode = 2;
