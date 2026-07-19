# July 2026 Kimi / Research / Media radar

> Практическая раскладка батча **18-19.07.2026**: что кладём в продуктовый backlog,
> что используем как reference, а что держим только в risk radar.
> Это не приказ "внедрить всё", а фильтр по ценности, риску и fit для Eclipse Forge.

## Быстрый вывод

**Сразу полезно для работы:**

- **Foglamp Scan** - строить карту кода перед сложным refactor или onboarding в большой репозиторий.
- **Hyper Research** - усилить research-agent / library intake / cited reports.
- **Shipper anti-slop guide** - добавить как design QA reference рядом с The Taste.
- **MOSS SoundEffect v2.0** - кандидат для кастомных notification/SFX packs в Eclipse Chat и DnD.
- **MaddyPix** - локальная image utility для Shotforge/Text2Image/Eclipse Media.

**R&D, но не production по умолчанию:**

- **Kimi K3 / Kimi Code** - проверить API, pricing, privacy, качество на наших бенчмарках.
- **LLMs-local** - отличный каталог для local provider doctor, но это справочник, не зависимость.
- **awesome-hermes-skills** - ставить только точечно после audit.

**Только с guardrails:**

- **Lucy 2.5** - video/deepfake editing только с consent, disclosure и проверкой прав.
- **Conversation Steganography** - threat-model / privacy research, не фича для сокрытия нарушений.
- **Звук "Сингл"** - контент и музыка только после проверки rights/export/commercial use.

## Eclipse Chat

**Что можно внедрять:**

- **MOSS SoundEffect v2.0** -> кастомные sound packs:
  - join/leave voice room;
  - DM/message/mention/task sounds;
  - soft operational audio вместо generic beep;
  - локальный asset-generation pipeline без внешнего CDN.
- **Hyper Research** -> AI research room:
  - room topic -> source matrix -> cited summary;
  - "since you were away" с источниками, если обсуждали внешние материалы;
  - knowledge room для проектных решений.
- **Foglamp Scan** -> dev/admin feature reference:
  - прикрепить code graph к technical rooms;
  - генерировать архитектурные карты для внутренних обсуждений;
  - использовать при диагностике voice/socket/API модулей.
- **Kimi K3** -> provider benchmark для `@ai`:
  - длинный context;
  - code/reasoning prompts;
  - cost/latency/failure rate.

**Что не делаем как фичу:**

- **Conversation Steganography** не добавляем как "скрытые сообщения". Это открывает abuse surface: обход модерации, harassment, exfiltration. Использовать только как threat-model и privacy research.
- **Lucy 2.5** не встраиваем в chat media flow без consent UX и moderation/watermark policy.

## Hopson Sentinel

**Наиболее сильный fit:**

- **Foglamp Scan** - "scan current repo" как visual map перед изменениями:
  - modules/entities/functions;
  - risky dependency edges;
  - agent/action graph.
- **LLMs-local** - база для Local Provider Doctor:
  - Ollama/LM Studio/llama.cpp/LocalAI profiles;
  - RAM/VRAM/disk planning;
  - recommended model by hardware;
  - "can run locally?" answer before provider setup.
- **Kimi K3** - provider profile:
  - code benchmark;
  - long-context planning;
  - swarm/research mode vs Claude/Codex/OpenRouter.
- **awesome-hermes-skills** - skill catalog, not bulk install:
  - run Loopy / security review first;
  - install one skill at a time;
  - keep rollback notes.
- **Shipper anti-slop** - UI generation checklist for Sentinel dashboards.

## Eclipse AI Hub

**Product candidates:**

- **Kimi K3** - new provider in model arena / coding arena after API verification.
- **Hyper Research** - standalone "Research" mode:
  - topic coverage matrix;
  - source collection;
  - cross-check;
  - cited final report.
- **LLMs-local** - "Local AI setup" page / wizard.
- **MaddyPix** - Image Studio utilities:
  - resize/compress/convert;
  - pre-upscale;
  - cleanup before generation/editing.

**Acceptance criteria for provider add:**

- API endpoint is official or documented.
- Pricing and rate limits are visible.
- Data retention/privacy policy is acceptable.
- Fallback route exists.
- Prompt/result logging does not leak secrets.

## Eclipse Media / Shotforge / Text2Image

**Good fits:**

- **MaddyPix** - local browser-side preprocessing before upload/generation.
- **MOSS SoundEffect v2.0** - SFX library:
  - short UI stingers;
  - ambience loops;
  - DnD location soundscapes;
  - promo sounds.
- **Lucy 2.5** - benchmark/reference for video editing UX:
  - object removal;
  - background replacement;
  - style transfer;
  - effects.
- **Звук "Сингл"** - closed SaaS reference for quick music/proto songs.

**Guardrails:**

- No deepfake/person replacement without consent.
- Check commercial rights before using generated songs/sounds in client work.
- Prefer local/open models for product dependencies.
- Keep closed SaaS as benchmark until API, export and pricing are clear.

## Eclipse DnD Forge

**High-value ideas:**

- **MOSS SoundEffect v2.0**:
  - tavern ambience;
  - dungeon doors/monsters/weather;
  - combat stingers;
  - location-specific sound packs.
- **Звук "Сингл"**:
  - bard songs;
  - faction themes;
  - session intro/outro;
  - player-recognizable motifs.
- **Kimi K3**:
  - fast encounter/NPC/quest prototypes;
  - long-context campaign continuity tests.
- **MaddyPix**:
  - map/image preprocessing;
  - token portraits cleanup;
  - handout conversion.

## Educator-AI

**Learning tracks to add:**

- **AI Engineering From Scratch** -> "AI Engineer from zero" path:
  - math/ML basics;
  - LLM/RAG/agents;
  - practical code labs.
- **CS Self Learning** -> "Computer Science foundations" path:
  - programming;
  - systems;
  - algorithms;
  - OS/DB/networking;
  - real projects.
- **LLMs-local** -> local AI setup module:
  - choose runtime;
  - choose model;
  - check hardware;
  - run first local assistant.
- **Hyper Research** -> cited research assignments.

## oh-my-claudecode

**Fit:**

- **Foglamp Scan** - graph view for repo/agent workflows.
- **awesome-hermes-skills** - skill discovery source, but only after audit.
- **Shipper anti-slop** - frontend/design output gate.
- **Hyper Research** - research loop / source matrix skill.
- **Kimi K3** - coding model benchmark through BYOK/provider adapter.

## Implementation priority

| Priority | Item | Why |
|---|---|---|
| P0 | Add resources to Eclipse Library | Done in this batch; makes everything searchable |
| P1 | MOSS SoundEffect test pack for Eclipse Chat | Directly improves notification/audio identity |
| P1 | Foglamp Scan trial on Eclipse Chat + Sentinel | Helps understand large repos and reduce onboarding friction |
| P1 | Hyper Research evaluation | Strong fit for research-agent, library intake and cited reports |
| P1 | Shipper anti-slop checklist merged with The Taste | Improves visual output quality across web projects |
| P2 | Kimi K3 provider benchmark | Potential cost/quality win, but requires verification |
| P2 | MaddyPix local image utility benchmark | Useful for media/image projects with low risk |
| P3 | Lucy 2.5 / Звук "Сингл" | Good creative references, but closed SaaS and rights questions |
| Risk only | Conversation Steganography | Threat model, not product feature |

## Security / legal guardrails

- Do not install skill packs wholesale. Review prompt files, scripts, hooks and permissions first.
- Do not send private production code to closed SaaS/codegraph tools without privacy review.
- Treat Kimi K3 performance/pricing claims as unverified until tested.
- Voice/music/video generation must respect consent, likeness rights and commercial license.
- Steganography is dual-use: document for threat modeling, not for evasion flows.
- Keep all new providers env-gated and disabled by default.
