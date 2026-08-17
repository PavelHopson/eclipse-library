# August 2026: harness, media and code radar

**Verified:** 2026-08-17
**Scope:** eight published records, two excluded claims
**Rule:** no third-party code was installed or executed

## Editorial result

| Finding | Facts after verification | Decision | Eclipse next step |
|---|---|---|---|
| Google AI for App Building | Google beginner course on Coursera, 3 modules, about 2 hours; checkout and locale vary | Implement now · P1/S | Educator-AI lesson with production-readiness checklist |
| Learn Harness Engineering | MIT course/repository; curriculum counters differ inside README | Implement now · P0/M | adopt handoff, progress and completion gates without curl-to-shell |
| MiniMax Music 3 | up to 5 minutes, CUDA, 32 kHz stereo, custom community license | Roadmap · P1/M | isolated Eclipse Media/Shotforge benchmark |
| Google CodeWiki | public-repository preview with wiki, diagrams, code links and chat | Implement now · P1/S | pilot one public Eclipse repository; keep docs in repo |
| Cube YouTube Downloader | GPL WPF GUI around yt-dlp; parallel queue is not implemented | Reference · P2/M | legal-first Media Intake UX only |
| DeepSeek Harness | official MIT developer preview; plugin architecture on Cordis | Roadmap · P1/L | sandbox architecture benchmark; no community plugins |
| Anthropic system prompts | official history for listed Claude.ai/mobile snapshots, not Claude API | Reference · P2/S | prompt governance and regression examples |
| Repository architecture prompt | user idea rewritten with evidence, schema and no-network HTML | Implement now · P1/S | use the first-party prompt and review JSON before HTML |

## Corrections to the news

### Google course

The official Coursera page confirms Google as the instructor, beginner level, three modules, roughly
two hours and a 98% positive learner reaction. It also shows enrolment/free-trial language. Do not
promise a permanently free certificate. The fetched page did not explicitly confirm Russian for the
current account, so locale remains a checkout-time check.

### Learn Harness Engineering

The repository has an MIT license. One part of its current README says 13 lectures and 7 projects,
another says 14 and 8. The stable fact is the workflow, not the counter. The provided curl-to-shell
installer is not an Eclipse recommendation.

### MiniMax Music 3

The official model card says up to five minutes, not ten. It describes lyrics plus a detailed music
description, CUDA inference, 32 kHz 16-bit stereo output and significant VRAM needs. The custom
community license requires attribution and introduces revenue and hosted-service obligations.
Original/public-domain lyrics, rights provenance and AI disclosure are mandatory. Voice impersonation
and undisclosed synthetic public content are out of scope.

### CodeWiki

Google describes a public preview for public repositories. Private/local support through a Gemini CLI
extension is future work. Generated pages are an onboarding aid and cannot replace repository-owned
README, ADR, tests or code review.

### Cube YouTube Downloader

The repository describes a WPF GUI for yt-dlp/youtube-dl and optional FFmpeg. It does not bundle the
downloader. Parallel queue support remains planned work. Eclipse does not support downloading paid,
private or copyrighted material without permission, bypassing platform controls or promising “any
video”.

### DeepSeek Harness

The canonical repository belongs to `deepseek-ai`, uses MIT and calls itself a developer preview.
At review time GitHub reported about 147.8k stars and 6,571 repositories under `topic:dsh-plugin`.
These are volatile popularity signals, not an audit. An “everything is a plugin” runtime makes model,
session, sandbox, tool and UI plugins high-trust code. Pilot only in a disposable VM/container with a
pinned commit, reviewed lockfile, no host workspace, no secrets and denied outbound network by default.

### Anthropic system prompts

Anthropic publishes core system prompts for listed Claude.ai and mobile model snapshots. The page says
these prompts do not apply to the Claude API. Use the diffs to learn prompt governance; do not present
them as leaked prompts, universal model behavior or a way around controls.

## Excluded from confirmed catalog

### AI wrestler revenue story

No original account, analytics, invoices, platform or source URL was provided. The figures, follower
count, subscriber count and claim that Claude handles DMs are unverified marketing claims. We keep
only the product lessons: consistent character, content operations and conversation state. Any Eclipse
experiment would require clear AI disclosure, consent, platform compliance, human-reviewed messages
and no deceptive identity, sexual private-content funnel or autonomous outreach.

### 167-minute agent/graph course

The message has timestamps but no title, instructor or URL. It cannot be checked or catalogued. The
sequence “prompt → context → memory → agent → loop → graph → harness” is a useful editorial model,
not evidence that the unnamed course is authoritative.

## Project backlog

| Decision | Project | Deliverable | Value | Complexity | Risk | Priority |
|---|---|---|---:|---:|---|---:|
| Implement now | Educator-AI | AI Studio beginner lab + Spec Gate | clearer path from prototype to production | S | cloud data and false confidence | P1 |
| Implement now | Eclipse Library | handoff contract + weekly evidence audit | fewer stale/unverified recommendations | M | automation scope | P0 |
| Implement now | Public Eclipse repos | CodeWiki comparison report | faster onboarding | S | generated errors | P1 |
| Roadmap | Eclipse Media / Shotforge | MiniMax Music 3 isolated benchmark | original music drafts | M | rights, license, GPU | P1 |
| Roadmap | Sentinel / OMC / AI Hub | DeepSeek Harness architecture benchmark | better plugin boundaries | L | supply chain and preview churn | P1 |
| Reference | AI Hub / Educator-AI | Anthropic prompt evolution lesson | versioned prompt governance | S | product/API confusion | P2 |
| Reference | Eclipse Media | legal media intake UX | safer import flow | M | copyright and external binaries | P2 |

## Evidence

- [Google AI for App Building](https://www.coursera.org/learn/google-ai-for-app-building)
- [Learn Harness Engineering](https://walkinglabs.github.io/learn-harness-engineering/en/)
- [MiniMax Music 3 model card](https://huggingface.co/MiniMaxAI/MiniMax-Music3)
- [MiniMax Music 3 license](https://huggingface.co/MiniMaxAI/MiniMax-Music3/blob/main/LICENSE)
- [Google CodeWiki announcement](https://developers.googleblog.com/introducing-code-wiki-accelerating-your-code-understanding/)
- [Cube YouTube Downloader](https://github.com/database64128/youtube-dl-wpf)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Anthropic system prompts](https://platform.claude.com/docs/en/release-notes/system-prompts)
