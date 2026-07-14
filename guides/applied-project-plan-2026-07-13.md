# Applied project plan — 2026-07-13

> Практическая раскладка новых находок по проектам Eclipse Forge.
> Это не “ставим всё подряд”, а pipeline внедрения: first slice, guardrails, acceptance criteria.

## Global Codex / Claude workflow

**Применяем сразу**

- Ponytail mindset: меньше кода, меньше зависимостей, меньше архитектурных перестроек без нужды.
- Context Engineering: читать только нужные файлы, фиксировать решения в docs/roadmap, не гонять один и тот же контекст по кругу.
- Loopy перед новыми MCP/skills/hooks: audit duplicates, risky actions, циклы автоматизаций.
- The Taste / `design-taste-frontend`: дефолт для лендингов, портфолио, project showcase и редизайна; перед генерацией фиксировать дизайн-read, motion/density/variance и pre-flight. Для dashboards/admin/tables использовать только как polish-layer поверх продуктовых паттернов.
- Caveman только для внутренних summaries/log review, не для финальных отчётов.

**Sandbox only**

- `sqz` — сначала benchmark на 3 типовых задачах: small fix, UI change, repo audit.
- `pxpipe` — только R&D, не для кода, секретов, юридических текстов, миграций и точных строк.
- Destructive Command Guard — сначала локальная проверка команд и allowlist/denylist, потом решение о включении в Sentinel/dev окружение.

## Eclipse Chat

**First slices**

- Voice intelligence: Voicetypr/Sokuji-style local transcription, live subtitles, call summary, action-item extraction.
- Memory extraction: message/action item -> memory entry -> digest “since you were away”.
- Operational tables: MWS Tables как reference для больших tables, фильтров, inline editing и серверных вычислений.
- Client reports: PPT Master-style project recap -> editable PPTX.

**Guardrails**

- Voice clone / live translation только с consent и явной индикацией в call UI.
- AI provider routing только через легальные ключи и видимые cost/latency diagnostics.
- Any “agent executes action” flow требует confirmation, audit log и rollback/undo где возможно.

## Hopson Sentinel

**First slices**

- Safety shell layer: Destructive Command Guard as reference для pre-command checks.
- Workstation doctor: privacy.sexy / FileExplorer / NtWarden as references, но без “one click fix” по умолчанию.
- Mobile control plane: OpenClaw Mobile / PCLink pattern — action proposal на ПК, approve с телефона.
- Voice operator: Sokuji/Voicetypr/Fish Audio-style STT/TTS provider experiments.

**Guardrails**

- Local-first memory, explicit consent, memory deletion.
- Remote control only behind localhost/VPN/auth token rotation.
- Security tools запускаются сначала в lab/VM.

## Eclipse DnD Forge

**First slices**

- TREK pattern -> party travel log, route board, quest itinerary, party polls.
- Session transcript -> recap -> unresolved hooks.
- Sokuji pattern -> multilingual party sessions and live subtitles.
- Fish Audio pattern -> consent-safe NPC/DM voices.
- Interior design toolkit -> tavern/dungeon/room visual prompts, не runtime dependency.

**Guardrails**

- No runaway autonomous DM: player-gated turns remain default.
- Voice/persona cloning only with consent or fictional/generated voices.

## Educator-AI

**First slices**

- LLM Course -> “LLM Engineer” learning path: lesson -> quiz -> escape room -> final project.
- production-agentic-rag-course -> research bot course: arXiv/PDF -> RAG -> cited answer.
- ShipThatCode -> build-systems track: Redis/Git/DB concepts as practical quests.
- Voicetypr -> lecture/audio upload -> transcript -> quiz.
- PPT Master -> course recap -> editable slides.

## Shotforge / Text2Image / Eclipse Media

**First slices**

- Fixed benchmark set for Google low-cost image/video tier: price, latency, watermark, RU text, rights.
- Photo restoration prompt pack -> Shotforge/Text2Image preset.
- ChatCut/MaxFusion/video-use as workflow references: script -> subtitles -> voice -> variants.
- Sokuji/Fish Audio as voiceover/translation references, consent-gated.
- Torlink only as CLI queue/source-health reference, not product downloader.

## oh-my-claudecode

**First slices**

- Loopy audit runbook: before adding skills/MCP, scan duplicates, risky commands, overlapping hooks.
- Trace-based skill usage audit: use existing flow tracer/replay, no new telemetry until privacy rules are written.
- Token economy mode: context-compression + caveman-style internal summaries + explicit output contracts.

## Not using as product dependency

- Steam realtime priority hack — unsafe workstation advice, not product fit.
- Uncensored/Heretic models — high-risk provenance/safety, isolated research only.
- Aliens Eye / OSINT tools — self-audit only, no “пробив” product.
- Torlink/downloader tools — legal/open-data reference only.
