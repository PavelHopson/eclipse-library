# GitHub Spec Kit: Eclipse Spec Gate

**Verified:** 2026-08-13  
**Decision:** implement now as a repository-owned workflow, not a quality guarantee  
**Priority / complexity:** P1 / M

## In plain language

Spec Kit helps a team agree on what to build before code is written. It keeps the intended outcome,
constraints, architecture plan and verifiable tasks next to the project. The core route is
constitution, specify, clarify, plan, tasks and implement.

It does not prevent every mistake. Tests, security review, factual checks and human approval stay mandatory.

## Verified facts

- The canonical repository belongs to GitHub and uses the MIT license.
- Latest release on 2026-08-13: v0.16.2.
- About 127k stars and 11.3k forks at review time.
- Official documentation lists 35 agent integrations.
- The repository is active and not archived.

The news claim of 95k stars and 8k forks is stale. The claim that an unclear prompt can no longer
break a project is marketing language: Spec Kit reduces ambiguity but cannot remove it automatically.

## Eclipse Spec Gate

1. Constitution: AGENTS, CLAUDE, UX baseline, security baseline and repository constraints.
2. Specify: user outcome, non-goals, data, UI states and measurable success.
3. Clarify: unknown requirements, licenses, privacy, external APIs and destructive actions.
4. Plan: architecture, contracts, trust boundaries, rollback and explicit trade-offs.
5. Tasks: atomic changes with typecheck, tests, build and visual/security QA.
6. Implement: only after plan review; commit, push and deploy are separate approval boundaries.

## First pilot

- eclipse.campaign-map-asset.v1: DnD Forge accepts at most 60 validated Azgaar locations,
  without URL fields or hidden network import.
- eclipse.media-asset.v1: Text2Image exports a metadata-only passport, while Eclipse Media
  validates it locally and keeps rights approval manual.

## Project decisions

| Decision | Project | Value | Next step |
|---|---|---|---|
| Implement now | Eclipse Chat, AI Hub, DnD Forge | aligned product changes before code | pilot one feature with human plan approval |
| Implement now | Hopson Sentinel, oh-my-claudecode | less agent drift and implicit permissions | add security and rollback gates to constitution |
| Roadmap | Eclipse Media, Shotforge, Text2Image | versioned contracts between apps | add compatibility fixtures and tests |
| Reference | Educator-AI | teach spec-driven work | publish a no-auto-execution lesson |

## Limits and security

- The CLI and templates write prompt/code authority into a repository. Run them in a bounded worktree.
- Pin a reviewed release or commit. Do not trust moving main or automatic updates.
- Audit community extensions, presets and catalogs separately.
- Do not provide secrets, production dumps or private customer material to model context.
- Treat generated specs as untrusted drafts and verify claims, licenses, acceptance criteria and threats.
- Eclipse Library never installs Spec Kit for the user.

## Evidence

- [Canonical repository](https://github.com/github/spec-kit)
- [Official documentation](https://github.github.io/spec-kit/)
- [MIT license](https://github.com/github/spec-kit/blob/main/LICENSE)
- [Release v0.16.2](https://github.com/github/spec-kit/releases/tag/v0.16.2)
- [Security policy](https://github.com/github/spec-kit/blob/main/SECURITY.md)
- [GitHub introduction](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)
