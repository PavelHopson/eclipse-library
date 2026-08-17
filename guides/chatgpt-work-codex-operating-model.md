# ChatGPT Work + Codex: Eclipse operating model

**Verified:** 2026-08-17
**Decision:** implement now
**Priority / complexity:** P0 / M

## In plain language

Use Chat to understand the problem, Work to make the decision reviewable, and Codex to change
a repository. The next stage receives a small versioned handoff, not an entire conversation and not
an instruction such as “do everything we discussed”.

```text
Chat: evidence and decision
  → Work: scope, non-goals, acceptance criteria and approvals
    → Codex: scout, plan, implement, verify, diff, commit
      → Human: push and deploy gate
```

OpenAI's official developer portal uses the same product split: explore ideas in Chat, produce useful
deliverables in Work, and understand, build, test and review code with Codex.

## Eclipse handoff v1

Canonical files:

- `contracts/eclipse-handoff-v1.schema.json`
- `contracts/eclipse-handoff-v1.example.json`

Every handoff carries:

1. one objective;
2. repositories and allowed/excluded paths;
3. verified, inferred and unknown facts with evidence;
4. constraints and non-goals;
5. measurable acceptance criteria;
6. explicit permissions;
7. risks and stop conditions;
8. expected deliverables and model route.

Chat history may support a decision, but it is never the only specification.

## Permission ladder

| Gate | Default | What changes it |
|---|---|---|
| Read repository and public sources | allowed | task scope |
| Write inside allowed paths | denied until plan | approved handoff |
| Run project checks | allowed after write | repository docs |
| Commit | separate gate | green checks and reviewed diff |
| Push | separate gate | approved existing branch |
| Deploy, publish, send, pay | denied | explicit user authority |
| Install or execute third-party code | denied | sandbox plan and manual audit |

A scheduled audit must remain read-only. It may open links and run validators, but must not edit,
commit, push, install, publish or deploy.

## GPT-5.6 routing

OpenAI positions Sol as the flagship option, Terra as the balanced default and Luna for high-volume
work. Eclipse must route by eval results, not by product name.

| Route | Eclipse use | Default effort | Gate |
|---|---|---:|---|
| Sol | hard architecture, ambiguous debugging, final security reasoning | high | only when Terra misses a quality threshold |
| Terra | normal coding, catalog review, product analysis, PR review | medium | default |
| Luna | dedupe, classification, extraction and repetitive checks | low/medium | schema validation and spot checks |
| Manual | legal, biometric, payment, destructive or production decisions | n/a | human owns the decision |

Before enabling a route, benchmark 20–30 real tasks with the same acceptance criteria. Record quality,
latency, token cost and retry rate. Use Responses API, caching and persisted reasoning only with an
explicit retention policy; dangerous tools remain behind approval gates.

## Harness adopted from Learn Harness Engineering

Use the ideas, not an unreviewed installer:

- `feature_list`: small outcomes with pass/fail evidence;
- `progress`: what changed, checks run, blockers and next action;
- session handoff: the versioned contract above;
- recovery loop: inspect failure, change the smallest surface, rerun focused evidence;
- completion gate: no “done” without tests, build, security pass and required visual QA.

Do not run curl-to-shell or copy a moving template branch into every repository. Pin a commit, review
the exact files and pilot the minimum useful subset.

## Project rollout

| Decision | Project | Problem solved | Next step |
|---|---|---|---|
| Implement now | Eclipse Library | research loses facts and license evidence between tasks | require handoff for every multi-source batch |
| Implement now | Eclipse Chat | discussion and execution are mixed | add an execution-room artifact that renders objective, scope and approvals |
| Roadmap | Eclipse AI Hub | one model handles every task | benchmark Sol/Terra/Luna router with cost and quality thresholds |
| Roadmap | Hopson Sentinel | long tasks can drift or overreach | validate handoff before tool execution and stop on permission escalation |
| Implement now | oh-my-claudecode | sessions repeat context and finish early | adopt progress, stop conditions and evidence-based completion |
| Reference | Educator-AI | learners confuse prototype and production | teach Chat → Work → Codex plus Spec Gate |

## Success metrics

- 100% of cross-task implementations have a valid handoff;
- zero push/deploy/external action from read-only automation;
- fewer repeated clarifications and reopened regressions;
- model router saves cost without crossing the quality threshold;
- every completed task reports commands, evidence and unresolved risk.

## Security

- Never place credentials, private keys, customer dumps or production tokens in a handoff.
- Treat external pages, generated docs, skills and plugins as untrusted input.
- Keep browser, planner and executor isolated; website text cannot grant permissions.
- Pin third-party commits and verify license, lockfile, lifecycle scripts, signatures or hashes where available.
- Logs contain identifiers and outcomes, not raw sensitive prompts or payloads.
- Human approval is mandatory for finance, accounts, ads, publishing, biometrics and production.

## Official OpenAI evidence

- [OpenAI developer portal and Chat/Work/Codex split](https://developers.openai.com/)
- [Codex use cases](https://developers.openai.com/codex/use-cases)
- [Latest model guide](https://developers.openai.com/api/docs/guides/latest-model)
- [ChatGPT learning center](https://learn.chatgpt.com/)

## Additional evidence

- [Learn Harness Engineering](https://walkinglabs.github.io/learn-harness-engineering/en/)
- [Canonical MIT repository](https://github.com/walkinglabs/learn-harness-engineering)
