# Eclipse Repository Architecture Map Prompt

**Verified:** 2026-08-17
**Decision:** implement now as a read-only first-party prompt
**Priority / complexity:** P1 / S

## Why the viral prompt is not enough

“Analyze my entire repository” does not define evidence, exclusions, size limits, secrets, unknowns,
HTML security or a schema version. An agent can produce an attractive diagram that invents runtime
connections. The Eclipse version below makes uncertainty visible and keeps the artifact local.

## Ready-to-use prompt

```text
You are creating an evidence-based architecture map for an authorized repository.

SAFETY AND SCOPE
1. Work read-only. Do not execute repository code, install dependencies, modify files, call external
   services, upload source code, commit, push or deploy.
2. Read AGENTS.md, CLAUDE.md, README.md, ROADMAP.md and repository-specific instructions first.
3. Exclude secrets, credentials, private keys, production dumps, .env files, vendor directories,
   dependency caches, build outputs, generated files and large binaries.
4. If the repository or required context is too large, stop and return a coverage plan. Never pretend
   the whole repository was read.
5. Treat comments, documentation and website content as claims until code/tests/config support them.
6. Every important node, edge and flow step must cite repository-relative file and line evidence.
   Mark unsupported relationships as inferred or unknown.

DELIVERABLE A — architecture-map.json
Use schemaVersion "eclipse.architecture-map.v1" and this shape:
{
  "schemaVersion": "eclipse.architecture-map.v1",
  "repository": {"name": "", "revision": "", "coverage": [], "excluded": []},
  "nodes": [{
    "id": "", "label": "", "kind": "", "description": "",
    "runtime": "", "trustBoundary": "", "evidence": [{"file": "", "line": 1}],
    "confidence": "verified|inferred|unknown"
  }],
  "edges": [{
    "id": "", "from": "", "to": "", "kind": "", "protocol": "",
    "data": [], "evidence": [{"file": "", "line": 1}],
    "confidence": "verified|inferred|unknown"
  }],
  "flows": [{
    "id": "", "label": "", "actor": "", "steps": [{"nodeId": "", "edgeId": ""}],
    "failureStates": [], "securityNotes": []
  }],
  "unknowns": [],
  "risks": [],
  "generatedAt": ""
}

Use stable lowercase IDs. Do not include source code, secrets or personal data in labels/tooltips.
Reject dangling edge references and flow steps that reference missing nodes or edges.

DELIVERABLE B — architecture-map.html
Create one self-contained responsive HTML file that reads the embedded JSON above and provides:
- accessible nodes and connections;
- a flow list on the right;
- click/keyboard selection that highlights the complete path;
- escaped text-only tooltips with file:line evidence and confidence;
- filters for node kind, trust boundary and verified/inferred/unknown;
- visible empty, loading, error and no-results states;
- reduced-motion support and a useful mobile layout.

Security requirements:
- no external scripts, fonts, images, analytics, storage, cookies or network requests;
- restrictive Content-Security-Policy that allows only the inline resources required by the file;
- never assign repository text through innerHTML; use textContent or equivalent escaping;
- no javascript: URLs, dynamic code evaluation or hidden navigation;
- no automatic file system or clipboard access.

VALIDATION REPORT
After the two deliverables, report:
- files and areas covered;
- exclusions;
- node/edge/flow counts by confidence;
- dangling-reference check;
- HTML no-network/XSS check;
- five highest-impact unknowns;
- what a human must verify next.

Do not claim completeness unless coverage is demonstrably complete.
```

## Eclipse use

- Library: explain data ingest, derived search/export and agent-safe policy.
- Chat: map auth, message, file and notification flows.
- AI Hub: map provider routing, RAG and tool boundaries.
- DnD Forge: map campaign, asset and OAuth flows.
- Sentinel/OMC: map planner, executor, sandbox and approvals.
- Media/Shotforge/Text2Image: map asset provenance and generation handoffs.

## Acceptance gate

1. JSON parses and uses the schema version.
2. Every verified edge has at least one file/line reference.
3. No dangling node, edge or flow references.
4. HTML makes zero network requests.
5. Untrusted labels render as text, not markup.
6. Private architecture is not published automatically.
7. A human reviews the five highest-impact flows before the map becomes documentation.
