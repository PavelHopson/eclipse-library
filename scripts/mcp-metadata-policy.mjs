import { createHash } from 'node:crypto';

const suspiciousRules = [
  ['hidden-instruction', /ignore (?:all |any )?(?:previous|prior)|do not (?:tell|show|reveal)|never mention|system prompt/i],
  ['credential-file-access', /\.ssh(?:\/|\\)|\.env(?:\b|\/|\\)|browser cookies?|private key|credential files?/i],
  ['credential-exfiltration', /(?:read|access|collect|send|upload|return|exfiltrat)[^.\n]{0,80}(?:api[_ -]?key|secret|token|credential)/i],
  ['cross-tool-request', /call (?:another|the) tool|invoke (?:another|the) tool|use (?:another|the) tool/i],
  ['encoded-instruction', /(?:decode|encoded|hidden)[^.\n]{0,80}(?:base64|atob|fromcharcode)|eval\s*\(/i],
  ['opaque-payload', /[A-Za-z0-9+/]{500,}={0,2}/],
  ['invisible-unicode', /[\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF]/],
];

export function metadataFindings(tool) {
  const text = `${tool.name}\n${tool.description}\n${JSON.stringify(tool.inputSchema)}`;
  const toolHash = createHash('sha256').update(tool.name).digest('hex').slice(0, 16);
  const findings = suspiciousRules.filter(([, rule]) => rule.test(text)).map(([code]) => ({ code, toolHash }));
  if (text.length > 40_000) findings.push({ code: 'oversized-metadata', toolHash });
  return findings;
}
