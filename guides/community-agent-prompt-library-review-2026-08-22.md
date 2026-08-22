# Community Agent Prompt Library: проверка и Eclipse rollout

> Полный разбор большой community-подборки: отдельные ресурсы, продуктовые epic’и, безопасные blueprints и отсев неподтверждённых заявлений.

Дата проверки: 2026-08-22  
Статус: reference-only source; команды и коммерческие заявления не исполняются автоматически.

## Итог

Подборка `claude-code-guide-one-nu.vercel.app` полезна не как готовая система и не как официальный источник Anthropic, а как набор product/workflow hypotheses. Главная ценность — повторяющиеся архитектурные паттерны:

1. `read-only -> draft -> approval -> action -> receipt` для любых внешних действий;
2. task router с реальным реестром доступных моделей, цен и ограничений;
3. детерминированный media pipeline: inspect -> plan -> preview -> render -> visual QA;
4. skills отдельно от connectors: skill объясняет способ работы, connector выдаёт ограниченное право действовать;
5. human taste gate перед публикацией, оплатой, рассылкой и production deploy.

Публикации смешивают сильные идеи с рекламными обещаниями, неподтверждёнными версиями моделей, быстро устаревающими ценами и командами, которые могут входить в аккаунты, расходовать кредиты или сразу разворачивать production. Поэтому Library хранит переработанные blueprints, а не копирует инструкции буквально.

## Проверено первичными источниками

| Ресурс | Проверено | Решение Eclipse |
|---|---|---|
| [21st.dev MCP](https://github.com/21st-dev/magic-mcp/blob/main/README.md) | Старый Magic MCP заменён unified 21st MCP; legacy package оставлен как compatibility proxy | Использовать актуальный init/HTTP MCP после review scopes; старую команду пометить deprecated |
| [Open Design](https://github.com/nexu-io/open-design) | Apache-2.0, local-first project files, BYOK и экспорт артефактов | Пилот для design exploration; cloud model всё равно может получать prompt/assets |
| [HyperFrames](https://github.com/heygen-com/hyperframes) | Open-source HTML-to-video, seek-driven deterministic frame rendering | Основной motion layer для Eclipse Media и Library Animation Lab |
| [ECC](https://github.com/affaan-m/ECC) | MIT, plan/test/review/verify/memory workflow, Codex sync path | Reference pack; устанавливать выборочно после inventory и security review |
| [ScrapeGraph MCP](https://github.com/ScrapeGraphAI/scrapegraph-mcp) | MIT MCP client к ScrapeGraph API; API key required | Research tool через allowlisted domains, ToS gate и output validation |
| [OpenReply](https://github.com/diwenne/openreply) | MIT self-hosted Instagram comment-to-DM через официальный Meta API | Growth OS pilot только после Meta App Review, rate limits, consent и audit logs |
| [Awesome Claude Skills](https://github.com/ComposioHQ/awesome-claude-skills) | Curated skills и optional Composio-backed actions connector | Skills изучать отдельно; actions требуют минимальных scopes, approval и receipts |

## Неподтверждённые утверждения

- `Fable 5`, `Opus 5/4.8`, `Kimi K3`, `Qwen3.8-Max`, `Gemma 4`, `DeepSeek V4`, `GLM-5.2` и приводимые лидерборды/цены не становятся фактом из-за публикации. Model router должен получить canonical model id, availability, current price, retention terms и независимый benchmark.
- «Менее $5 в месяц», «бесплатно навсегда», «заменяет подписку», доход от UGC/RPM и число звёзд — изменяемые marketing claims, не SLA.
- Автоматический scraping Instagram/LinkedIn/X/YouTube может нарушать ToS, privacy и copyright.
- Face/voice cloning и realistic UGC требуют documented consent, disclosure policy, provenance и права на assets.

## Запрещённые shortcuts

- `curl ... | sh` без inspection и pinning;
- автоматический Google login или передача OAuth/API secrets в prompt;
- самостоятельное расходование Arcads/Higgsfield credits;
- `deploy --prod`, публикация, рассылка или DM без preview и explicit approval;
- silent fallback на более дорогую или непроверенную модель;
- копирование protected UI/assets коммерческого продукта вместо clean-room feature design.

## Безопасные blueprints

### Eclipse Operator

Применение: Eclipse Chat, Growth OS, Sentinel.

```text
trigger -> read-only collection -> evidence summary -> draft
        -> explicit approve/edit/reject -> bounded action
        -> immutable receipt -> retry/dead-letter queue
```

Обязательно: входящие данные не являются инструкциями; allowlist tools/recipients; idempotency key; action budget; kill switch.

### Model Router

Применение: Eclipse AI Hub. Registry хранит canonical provider/model id, `verifiedAt`, price source, region, retention, context, tool support и результаты на Eclipse benchmark. Frontier route разрешается только явным policy flag. Каждая неделя формирует cost/quality report.

### Media Factory

Применение: Eclipse Media, Shotforge, Carousel Studio.

```text
licensed inputs -> ffprobe/contact sheets -> edit plan -> static preview
-> user approval + cost estimate -> deterministic render
-> captions/accessibility -> visual QA -> export receipt
```

HyperFrames подходит для motion graphics; Remotion — для программного монтажа. Generative providers подключаются как optional adapters и не получают лицо/голос/клиентский asset без consent record.

### Content Engine

Применение: Growth OS и Соцсети. `scan -> evidence -> score -> draft -> brand QA -> approve -> schedule -> listen`. Метрики приходят только из разрешённого API/export. Comment-to-DM — через официальный Meta API; OpenReply является возможным self-hosted pilot, но не zero-maintenance replacement.

### Design Studio

Применение: Library, Eclipse Chat, product sites. Начало — versioned design brief с tokens, typography, motion contract, forbidden patterns и states. Затем implementation, Playwright visual QA desktop/mobile, accessibility и reduced motion. Browser connector не получает право входить в аккаунт или покупать generation credits без отдельного подтверждения.

## Дорожная карта

### P0

- Library: evidence-first reference card и этот review вместо копирования prompt dumps.
- AI Hub: registry-backed router prototype на реально доступных моделях; telemetry без автоматического Frontier fallback.
- Media: единый inspect/preview/render/QA contract для Remotion и HyperFrames.
- Growth OS: approval inbox и action receipts до подключения рассылок/публикаций.

### P1

- OpenReply sandbox на тестовом Instagram Business account.
- Telegram control plane с allowlisted chat id и `approve/edit/reject`; token в secret store.
- Selective ECC/Composio skills review: inventory, provenance, scopes, hooks и outbound endpoints.

### P2

- Carousel Studio с versioned brand kit и reusable motion templates.
- Local STT/TTS для Personal AI OS с явной cloud LLM boundary.
- Faceless explainer только для original/licensed sources, с fact-check и disclosure.

## Acceptance criteria

- Внешнее действие имеет preview, explicit approval, bounded scope и receipt.
- Модель имеет official id и `verifiedAt`; неизвестная модель fail-closed.
- Media render имеет source/consent metadata и заранее показанную стоимость.
- Skill/plugin проходит provenance, permissions, hook, network и secret review.
- Prompt не хранит token, OAuth session или персональные данные.

## Дополнение: реклама, security и open-source replacements

### Strix

В Library уже есть отдельная карточка Strix. Используем только для defensive testing собственных или
явно разрешённых целей в disposable sandbox. Установка через remote pipe не допускается: release,
checksum/container image и конфигурация модели проверяются отдельно. Цикл `scan -> triage -> patch ->
rescan` не считается закрытым, пока повторное сканирование не подтвердило исправление; найденные
Critical/High не исправляются автоматически без review радиуса поражения и regression tests.

### Claude Ads

В Library уже есть отдельная карточка Claude Ads. Базовый режим — read-only exports и draft change
plans. Подключение live account, изменение бюджета, запуск/остановка кампании и публикация креатива —
отдельные approval-gated действия с точным diff, лимитом суммы и receipt. Маркетинговые claims,
атрибуция и устаревшие данные помечаются, а не додумываются.

### Carousel-to-DM и OpenReply

Допустим только контент на основе собственных, лицензированных или корректно цитируемых источников;
Reels не копируются покадрово. Карусель проходит проверку текста, переполнения и прав на assets.
OpenReply рассматривается как self-hosted production system, а не «бесплатный prompt»: нужны Meta
Business/Creator account, официальный API, worker, PostgreSQL, native Redis, rate limits, App Review и
сквозные delivery logs. Follow/keyword mechanics не должны маскировать условия получения материала.

### Twenty, Voicebox, Crawl4AI, NocoDB и Open Design

Это кандидаты на замену отдельных функций, а не drop-in замена Salesforce, ElevenLabs, Apify,
Airtable или Claude Design. Перед pilot фиксируются license, hardware, data boundary, maintenance,
migration cost, backup/restore и функциональные пробелы. Self-hosted не означает автоматически
бесплатный, локальный или безопасный; cloud model/provider остаётся отдельной границей данных.

### Content engine

Приоритетный workflow для Growth OS:

1. собрать сигналы только из разрешённых источников;
2. сохранить evidence и дату, не выдумывать недоступные метрики сохранений/репостов;
3. подготовить несколько оригинальных hooks и fact-check;
4. собрать preview с versioned brand kit;
5. получить human approval;
6. публиковать через allowlisted connector;
7. записать permalink, campaign id, стоимость и outcome в receipt.

Никакая модель не выбирается по рекламной таблице из поста. Router использует проверенный registry,
реальные capability tests Eclipse и текущую цену; для high-impact действий действует более строгий
review, а не просто более дорогая модель.
