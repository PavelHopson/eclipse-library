import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { metadataFindings } from './mcp-metadata-policy.mjs';

const outputDirectory = process.env.MCP_AUDIT_OUTPUT || '.artifacts/mcp-runtime';
const scopedDirectory = process.env.MCP_FILESYSTEM_ROOT;
if (!scopedDirectory) throw new Error('MCP_FILESYSTEM_ROOT is required.');
const activeTestsEnabled = process.env.MCP_ACTIVE_TESTS === 'true';
const expectedAudit = JSON.parse(await readFile('web/mcp-audit.json', 'utf8'));
const expectedHashById = new Map(expectedAudit.servers.map((server) => [server.id, server.toolsetHash || null]));

async function startFixture(marker) {
  const fixture = createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
    response.end(`<!doctype html><title>MCP audit fixture</title><main>${marker}</main>`);
  });
  await new Promise((resolve, reject) => {
    fixture.once('error', reject);
    fixture.listen(0, '127.0.0.1', resolve);
  });
  const address = fixture.address();
  if (!address || typeof address === 'string') throw new Error('Could not allocate a loopback fixture port.');
  return { fixture, origin: `http://127.0.0.1:${address.port}` };
}

const playwrightAllowed = activeTestsEnabled ? await startFixture('ECLIPSE_PLAYWRIGHT_ALLOWED_MARKER') : null;
const playwrightDenied = activeTestsEnabled ? await startFixture('ECLIPSE_PLAYWRIGHT_DENIED_MARKER') : null;
const playwrightOutput = process.env.MCP_PLAYWRIGHT_OUTPUT || join(outputDirectory, 'playwright-output');

const servers = [
  {
    id: 'github-official-mcp-server',
    version: '0.31.0',
    command: 'docker',
    args: [
      'run', '--interactive', '--rm', '--network=none', '--cap-drop=ALL', '--security-opt=no-new-privileges:true',
      '--read-only', '--tmpfs=/tmp:rw,noexec,nosuid,size=64m', '--env', 'GITHUB_PERSONAL_ACCESS_TOKEN=invalid-audit-token',
      'ghcr.io/github/github-mcp-server:v0.31.0', 'stdio', '--read-only', '--lockdown-mode',
      '--toolsets=repos,issues,pull_requests',
    ],
  },
  { id: 'official-filesystem-mcp-server', version: '2026.7.10', command: 'npx', args: ['-y', '@modelcontextprotocol/server-filesystem@2026.7.10', scopedDirectory] },
  {
    id: 'microsoft-playwright-mcp',
    version: '0.0.78',
    command: 'npx',
    args: [
      '-y', '@playwright/mcp@0.0.78', '--headless', '--isolated', '--browser=chromium', '--block-service-workers',
      '--image-responses=omit', '--output-mode=stdout', `--output-dir=${playwrightOutput}`,
      ...(playwrightAllowed ? [`--allowed-origins=${playwrightAllowed.origin}`] : []),
    ],
  },
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
  const childEnvironment = {
    PATH: process.env.PATH,
    HOME: process.env.HOME,
    NO_COLOR: '1',
    npm_config_cache: process.env.npm_config_cache || join(tmpdir(), 'eclipse-library-mcp-npm-cache'),
    npm_config_ignore_scripts: process.env.npm_config_ignore_scripts || 'true',
    npm_config_audit: process.env.npm_config_audit || 'true',
    PLAYWRIGHT_BROWSERS_PATH: process.env.PLAYWRIGHT_BROWSERS_PATH,
  };
  Object.keys(childEnvironment).forEach((key) => childEnvironment[key] === undefined && delete childEnvironment[key]);
  const child = spawn(server.command, server.args, {
    stdio: ['pipe', 'pipe', 'pipe'], shell: false,
    env: childEnvironment,
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
  const waitForMessage = async (id, timeoutMs = 45_000) => {
    const started = Date.now();
    while (!responses.has(id)) {
      if (child.exitCode !== null) throw new Error(`${server.id} exited before response ${id}.`);
      if (Date.now() - started > timeoutMs) throw new Error(`${server.id} timed out waiting for response ${id}.`);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    return responses.get(id);
  };
  const waitFor = async (id, timeoutMs = 45_000) => {
    const response = await waitForMessage(id, timeoutMs);
    if (response.error) throw new Error(`${server.id} returned JSON-RPC error ${response.error.code}.`);
    return response.result;
  };
  const callTool = async (id, name, args) => {
    send(child, { jsonrpc: '2.0', id, method: 'tools/call', params: { name, arguments: args } });
    return waitForMessage(id);
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
    const toolsetHash = createHash('sha256').update(serialized).digest('hex');
    const expectedHash = expectedHashById.get(server.id);
    if (expectedHash && expectedHash !== toolsetHash) findings.push({ code: 'toolset-hash-changed', toolHash: toolsetHash.slice(0, 16) });
    const activeTests = [];
    if (activeTestsEnabled && server.id === 'official-filesystem-mcp-server') {
      const allowedMarker = 'ECLIPSE_MCP_ALLOWED_MARKER';
      const outsideMarker = 'ECLIPSE_MCP_OUTSIDE_MARKER';
      const responseText = (response) => JSON.stringify(response || {});
      const isDenied = (response) => Boolean(response?.error || response?.result?.isError);

      const allowedDirectories = await callTool(10, 'list_allowed_directories', {});
      const allowedText = responseText(allowedDirectories);
      activeTests.push({ id: 'reports-only-scoped-directory', passed: allowedText.includes(scopedDirectory) && !/\\n\/home\/runner(?:\\n|")/.test(allowedText) });

      const allowedRead = await callTool(11, 'read_text_file', { path: process.env.MCP_TEST_FILE });
      activeTests.push({ id: 'reads-synthetic-file-inside-scope', passed: !isDenied(allowedRead) && responseText(allowedRead).includes(allowedMarker) });

      const outsideRead = await callTool(12, 'read_text_file', { path: '/etc/passwd' });
      activeTests.push({ id: 'denies-absolute-path-outside-scope', passed: isDenied(outsideRead) && !responseText(outsideRead).includes('root:x:') });

      const traversalRead = await callTool(13, 'read_text_file', { path: join(scopedDirectory, '..', 'eclipse-library-mcp-outside.txt') });
      activeTests.push({ id: 'denies-parent-traversal', passed: isDenied(traversalRead) && !responseText(traversalRead).includes(outsideMarker) });

      const symlinkRead = await callTool(14, 'read_text_file', { path: process.env.MCP_SYMLINK_FILE });
      activeTests.push({ id: 'denies-symlink-escape', passed: isDenied(symlinkRead) && !responseText(symlinkRead).includes(outsideMarker) });
    }
    if (activeTestsEnabled && server.id === 'github-official-mcp-server') {
      const responseText = (response) => JSON.stringify(response || {});
      const isDenied = (response) => Boolean(response?.error || response?.result?.isError);
      const writeToolName = /^(?:add|assign|cancel|convert|create|delete|dismiss|fork|manage|mark|merge|push|remove|reopen|rerun|request|run|submit|trigger|update)_/i;

      activeTests.push({ id: 'read-only-toolset-has-no-write-tools', passed: !tools.some((tool) => writeToolName.test(tool.name)) });
      const hasReadTool = tools.some((tool) => tool.name === 'get_file_contents');
      activeTests.push({ id: 'exposes-approved-read-tool', passed: hasReadTool });
      const unauthenticatedRead = hasReadTool
        ? await callTool(20, 'get_file_contents', { owner: 'PavelHopson', repo: 'eclipse-library', path: 'README.md' })
        : { error: { code: -32601 } };
      const unauthenticatedText = responseText(unauthenticatedRead);
      activeTests.push({ id: 'rejects-read-without-real-token', passed: isDenied(unauthenticatedRead) && !unauthenticatedText.includes('invalid-audit-token') });
    }
    if (activeTestsEnabled && server.id === 'microsoft-playwright-mcp') {
      const responseText = (response) => JSON.stringify(response || {});
      const isDenied = (response) => Boolean(response?.error || response?.result?.isError);
      const isolatedConfig = server.args.includes('--isolated')
        && !server.args.some((argument) => /--(?:extension|storage-state|user-data-dir|secrets)(?:=|$)/.test(argument));
      activeTests.push({ id: 'uses-empty-isolated-profile', passed: isolatedConfig });

      const allowedNavigation = await callTool(30, 'browser_navigate', { url: playwrightAllowed.origin });
      const allowedSnapshot = !isDenied(allowedNavigation) ? await callTool(34, 'browser_snapshot', {}) : allowedNavigation;
      activeTests.push({ id: 'loads-owned-loopback-fixture', passed: !isDenied(allowedNavigation) && !isDenied(allowedSnapshot) && responseText(allowedSnapshot).includes('ECLIPSE_PLAYWRIGHT_ALLOWED_MARKER') });

      const deniedNavigation = await callTool(31, 'browser_navigate', { url: playwrightDenied.origin });
      const deniedNavigationText = responseText(deniedNavigation);
      activeTests.push({ id: 'blocks-unlisted-origin', passed: !deniedNavigationText.includes('ECLIPSE_PLAYWRIGHT_DENIED_MARKER') && (isDenied(deniedNavigation) || /blocked|denied|ERR_/i.test(deniedNavigationText)) });

      const fileNavigation = await callTool(32, 'browser_navigate', { url: 'file:///etc/passwd' });
      const fileNavigationText = responseText(fileNavigation);
      activeTests.push({ id: 'blocks-file-url-outside-workspace', passed: !fileNavigationText.includes('root:x:') && (isDenied(fileNavigation) || /blocked|denied|not allowed|ERR_/i.test(fileNavigationText)) });
      if (tools.some((tool) => tool.name === 'browser_close')) await callTool(33, 'browser_close', {});
    }
    activeTests.filter((test) => !test.passed).forEach((test) => findings.push({ code: `active-test-failed:${test.id}`, toolHash: createHash('sha256').update(test.id).digest('hex').slice(0, 16) }));
    return { raw: normalized, summary: { id: server.id, version: server.version, protocolVersion: initialized?.protocolVersion || null, toolCount: tools.length, toolsetHash, hashMatchesApproved: expectedHash ? expectedHash === toolsetHash : null, automatedFindings: findings, activeTests, stderrBytes } };
  } finally {
    child.kill('SIGTERM');
  }
}

await mkdir(outputDirectory, { recursive: true });
const raw = [];
const summaries = [];
try {
  for (const server of servers) {
    const result = await inspect(server);
    raw.push(result.raw); summaries.push(result.summary);
  }
} finally {
  await Promise.all([playwrightAllowed, playwrightDenied].filter(Boolean).map(({ fixture }) => new Promise((resolve) => fixture.close(resolve))));
}
const report = { schemaVersion: 1, scanner: 'eclipse-library-offline-inspector@1', generatedAt: new Date().toISOString(), servers: summaries };
await writeFile(join(outputDirectory, 'raw-tool-metadata.json'), `${JSON.stringify(raw, null, 2)}\n`, { encoding: 'utf8', mode: 0o600 });
await writeFile(join(outputDirectory, 'summary.json'), `${JSON.stringify(report, null, 2)}\n`, 'utf8');
summaries.forEach((server) => console.log(`${server.id}: ${server.toolCount} tools, SHA-256 ${server.toolsetHash}, ${server.automatedFindings.length} automated finding(s), ${server.activeTests.filter((test) => test.passed).length}/${server.activeTests.length} active tests passed.`));
if (summaries.some((server) => server.automatedFindings.length)) process.exitCode = 2;
