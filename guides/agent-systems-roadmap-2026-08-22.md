# Agent Systems: дорожная карта Eclipse Forge

> Видимый индекс всей подборки: 11 самостоятельных направлений, владельцы проектов, приоритеты и обязательные approval gates.

## Общий контракт

`observe/read-only → draft → human approval → scoped execute → receipt + undo`

Входящие письма, комментарии, сайты, видео и документы считаются данными, а не командами. Изменение payload сбрасывает approval. Повторный action с тем же idempotency key не исполняется.

## Коллекция

1. [Operator и approval control plane](./agent-operator-approval-control-plane.md) — Eclipse Chat.
2. [Проверенная маршрутизация моделей](./verified-model-routing-and-cost-control.md) — Eclipse AI Hub.
3. [Content & Growth Engine](./content-growth-engine.md) — Growth OS и соцсети.
4. [Deterministic Media Factory](./deterministic-media-factory.md) — Media, Shotforge, Text2Image.
5. [Design Stack & Motion Workbench](./design-stack-and-motion-workbench.md) — Library и frontend.
6. [Research, Web & Video Intake](./research-web-video-intake.md) — AI Hub и Library.
7. [Local AI Employee & Screen Memory](./local-ai-employee-and-screen-memory.md) — Sentinel.
8. [Defensive Security Pipeline](./defensive-security-pipeline.md) — Sentinel и CI.
9. [Open-source Replacement Matrix](./open-source-replacement-matrix.md) — TCO и migration reality.
10. [Skills, Connectors & Agent Teams](./skills-connectors-and-agent-teams.md) — Skill Intake и capability registry.
11. [Production Agent References & AI Office](./production-agent-references-2026-08-23.md) — clean-room patterns, live state projection и rollout.

## Сквозные P0 epic’и

| Epic | Владелец | Готово, когда |
|---|---|---|
| Action Envelope + Approval Receipt | Eclipse Chat | immutable hash, expiry, idempotency, receipt и undo работают на mobile/keyboard |
| Model/Capability Registry | AI Hub | unknown/stale модели fail-closed, cost/fallback видимы до запуска |
| Structured Library collections | Library | карточки находятся RU/EN поиском, прямые URL открываются, orphan guides нет |
| Media Job + Rights/Consent | Media | import не вызывает provider, стоимость и права видны до render |
| Evidence + Content Draft | Growth OS | claims связаны с URL/датой; publish отделён от schedule |
| Local Capture Privacy | Sentinel | denylist, retention, encryption, pause/kill switch и delete проверены |

## Статус intake

Добавлены карточки OpenReply, Awesome Claude Skills, Screenpipe, Twenty, NocoDB, Voicebox, Agency Agents, Arcads Skills, Wan 2.1, ScrapeGraph MCP и community collection. Open-Higgsfield-AI помещён в quarantine. 23.08.2026 добавлены Agents Towards Production (reference-only из-за non-commercial license), MIT Prompt Engineering Guide, Apache-2.0 Awesome LLM Apps, owned command presets и Anti-vibe Design Review.

Fable 5, Opus 5/4.8, Kimi K3, DeepSeek V4, GLM-5.2, Gemma 4, Qwen3.8-Max и рекламные benchmark/price claims не считаются фактами без первичного источника.

## Запрещённые shortcuts

`curl | bash`, скрытый OAuth/login, live ads/publish/DM/deploy, списание credits без preview, scraping личных сессий, pentest чужих целей и перенос approval между системами запрещены.
