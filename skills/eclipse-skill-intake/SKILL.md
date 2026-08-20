---
name: eclipse-skill-intake
description: Review and admit an external Codex, Claude Code, Cursor, or MCP skill into the Eclipse Forge allowlist. Use when a user asks to install, import, enable, recommend, or operationalize a third-party agent skill; do not use for ordinary documentation links that will remain reference-only.
---

# Eclipse Skill Intake

Treat a skill as executable supply-chain input. A `SKILL.md` can instruct an agent to run scripts, read files, use credentials, contact services, or mutate external state.

## Required outcome

Return one decision: `approved`, `restricted`, `reference`, or `rejected`, with a pinned source revision, license evidence, capability boundary, risks, and the smallest safe test.

## Workflow

1. Find the canonical repository and owner. Remove tracking and session parameters from URLs.
2. Pin a commit SHA or signed release. Do not evaluate a moving branch as an installable artifact.
3. Read the complete `SKILL.md` and every referenced instruction, script, dependency manifest, hook, MCP configuration, and bundled binary description.
4. Record filesystem, network, secrets, browser/session, shell, account, publication, payment, and production capabilities.
5. Verify license and provenance. A public repository without a license is reference-only.
6. Check telemetry, subprocesses, remote downloads, post-install hooks, obfuscated code, prompt injection exposure, and update behavior.
7. Test only in an isolated disposable workspace with synthetic data, no secrets, least privilege, and outbound network disabled unless the test explicitly requires an allowlisted host.
8. Produce the manifest described in [references/security-manifest.md](references/security-manifest.md). Installation remains a separate user-approved action.

## Fail-closed rules

- Never install directly from a catalog or ranking page.
- Never pipe a remote script into a shell.
- Never import cookies, browser sessions, production tokens, SSH keys, cloud credentials, or personal message history for evaluation.
- Do not enable telemetry by default. Record an explicit opt-out when available.
- Do not allow publication, payments, ads, account changes, destructive filesystem actions, or production deploys without a separate human approval at execution time.
- Do not mark a skill safe merely because its repository is popular, open source, or security-scanned by its directory.
- If the source revision, license, or executable surface cannot be established, choose `reference` or `rejected`.

## Eclipse Library contract

Catalog records must keep `installAllowed: false`. An approved intake may add the skill to a separate runtime allowlist, but it does not change the Library into an installer.
