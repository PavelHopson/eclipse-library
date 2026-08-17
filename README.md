# Eclipse Library

Визуальный слой использует локальный snapshot `eclipse-forge.visual-system.v1` из
`web/assets/eclipse-forge.tokens.json` в профиле `product`: канонические deep-black,
warm-gold и signal-blue tokens, self-hosted Outfit/Inter и reduced-motion-safe motion.
Runtime-зависимости от главного лендинга нет.
На desktop с точным указателем Library повторяет фирменный cursor light лендинга; обычный
курсор остаётся системным, а на touch и при `prefers-reduced-motion` эффект отключён.
Новый production-знак объединяет затмение и раскрытую книгу; SVG, favicon, monochrome fallback
и правила использования хранятся в [`web/assets/brand/`](web/assets/brand/README.md).

Кураторская библиотека AI-инструментов, сервисов, моделей, skills, MCP, промптов, курсов и security-материалов для экосистемы Eclipse Forge.

[Открыть библиотеку](https://library.eclipse-forge.ru/) · [Eclipse Technology Registry](https://library.eclipse-forge.ru/registry.html) · [Каталог проектов](https://library.eclipse-forge.ru/#projects) · [Курсы и гайды](https://library.eclipse-forge.ru/#browse/courses)

## Текущее состояние

- 629 уникальных записей доступны пользователям.
- 195 карточек прошли ручную редакторскую проверку.
- 434 карточки честно помечены как `inferred` и ожидают углублённого review.
- У 350 записей лицензия или условия уже нормализованы и подкреплены evidence.
- 279 лицензий или наборов условий всё ещё требуют отдельной проверки.
- 69 grey-ресурсов видны человеку как reference, но исключены из agent recommendations.
- Всего 76 записей исключены из agent exports по risk, editorial, transport или repository policy; 553 доступны для agent consumers.
- 348 записей получили отдельное поле `addedAt`; неизвестные даты не выдумываются.

## Как устроены данные

README больше не является базой данных и не разбирается в браузере.

| Слой | Назначение |
|---|---|
| [`catalog/resources.json`](catalog/resources.json) | Канонические structured records. Новые записи и редакторские правки вносятся сюда. |
| [`web/catalog-index.json`](web/catalog-index.json) | Production index schema v2: normalized license, evidence, `addedAt`, agent policy и счётчики. |
| [web/license-review-queue.json](web/license-review-queue.json) | Deterministic evidence queue для оставшихся ручных проверок: bucket, P1–P3, причина и следующий шаг без автоматического approval. |
| [`web/catalog-details.json`](web/catalog-details.json) | Исторический набор ручных editorial reviews; его содержимое уже мигрировано в canonical records. |
| [`web/github-metadata.json`](web/github-metadata.json) | Official GitHub state и license evidence для repository URL. |
| [`web/guides.json`](web/guides.json) | Manifest учебных материалов. |
| [`web/star-technology-registry.json`](web/star-technology-registry.json) | Read-only decision registry для Eclipse Market, Eclipse CRM и Eclipse AI; lifecycle хранится отдельно от runtime health. |
| [`web/registry.html`](web/registry.html) | Поиск, product filters, evidence, risks, approval policy и stable deep links для решений Eclipse. |
| [`web/catalog-card.js`](web/catalog-card.js), [`web/catalog-editorial.js`](web/catalog-editorial.js), [`web/catalog-progressive.js`](web/catalog-progressive.js) | UI-модули карточки, редакционной ленты и progressive DOM; первая страница ограничена 36 карточками. |
| [`web/catalog-inspector.js`](web/catalog-inspector.js), [`web/navigator.css`](web/navigator.css) | Безопасный evidence-first быстрый обзор и отдельный responsive visual layer Knowledge Navigator. |
| [`web/catalog-review.js`](web/catalog-review.js), [`web/review.css`](web/review.css) | Локальный editorial review: четыре обязательные проверки, явный итог, ограниченный draft и copy-ready JSON packet без изменения каталога. |
| [`web/catalog-search.js`](web/catalog-search.js) | Детерминированный RU/EN search planner: синонимы, короткий stopword-list и tolerance к одной опечатке без отправки запросов во внешний сервис. |
| [`web/api/v1/`](web/api/v1/) | Static JSON exports для внешних consumers и AI-агентов. |
| [`lists/catalog-legacy-2026-08-03.md`](lists/catalog-legacy-2026-08-03.md) | Read-only архив старого Markdown-каталога; application его не читает. |

## API и exports

Production endpoints:

- [Full catalog](https://library.eclipse-forge.ru/api/v1/catalog.json) — все записи для human-facing interfaces.
- [Agent-safe catalog](https://library.eclipse-forge.ru/api/v1/agents.json) — без grey и других fail-closed exclusions.
- [Eclipse CRM export](https://library.eclipse-forge.ru/api/v1/starcrm.json) — стабильный consumer contract без чтения README.
- [Eclipse AI export](https://library.eclipse-forge.ru/api/v1/starai.json) — стабильный consumer contract без чтения README.
- [Manifest](https://library.eclipse-forge.ru/api/v1/manifest.json) — версия каталога, счётчики и ссылки на endpoints.

Static exports предназначены для server-side или controlled consumers. Для browser-to-browser cross-origin чтения нужно отдельно подтвердить CORS configuration на production proxy.

### Safety contract

- Каталог никогда не устанавливает инструмент сам.
- В agent exports у всех записей `actions.installFromCatalog` равно `false`.
- Grey resources остаются доступными для ручного исследования, но не рекомендуются агентами автоматически.
- External mutations, публикации, платежи и работа с production accounts требуют отдельного human approval.
- Кнопка «Проверить карточку» создаёт только локальный review-пакет: он не повышает `reviewStatus`, не меняет JSON и не является разрешением на merge или deploy.
- Наличие ссылки или GitHub license metadata не является security endorsement.

## Поля записи

Каждая production-запись содержит:

- стабильные `id`, `url`, `title`, `type`, `category` и `subcategory`;
- простое описание, use cases, платформы, стоимость и требования к аккаунту;
- `addedAt` отдельно от категории;
- `licenseInfo` с normalized label, SPDX, статусом проверки и evidence links;
- trust, risk, limitations, решение Eclipse и применимость к проектам;
- `agentEligibility` с причинами исключения и fail-closed install policy;
- ссылку на canonical source record.

## Как проверить карточку локально

1. Открыть «Полный анализ» или Inspector и нажать «Проверить карточку».
2. Подтвердить источник, условия, риски и практическую пользу, затем выбрать итог.
3. Добавить короткую заметку и скопировать packet или скачать его как JSON.
4. Для proposal запустить [локальный disposable preview](guides/editorial-review-preview.md) на полном SHA базового commit.
5. Прочитать semantic summary и полный `git diff`, запустить quality/security/responsive checks и отдельно записать approve/reject.

Draft хранится только в `localStorage` текущего браузера, ограничен 40 карточками и 1600 символами на заметку. Очистка browser data удаляет draft. Если Clipboard API недоступен, интерфейс показывает выделенный JSON для ручного копирования. Preview CLI принимает только завершённый v2 packet с итогом `approve`, меняет ровно одну уже существующую карточку и никогда не выполняет auto-apply, merge или deploy.

## Как добавить или обновить ресурс

1. Найти дубликат по canonical URL, GitHub repository и normalized title.
2. Проверить официальный источник, владельца, активность, лицензию, Terms, privacy и pricing.
3. Добавить или обновить запись в `catalog/resources.json`.
4. Не повышать `reviewStatus` до `verified` без ручной проверки и даты `verifiedAt`.
5. Для рискованных материалов использовать `type: grey`, `decision: no/reference` и конкретные ограничения.
6. Пересобрать derived data и exports.
7. Запустить validators, security pass и browser QA.

Команды:

```bash
node scripts/build-catalog-index.mjs
node scripts/build-catalog-exports.mjs
node scripts/build-guides-manifest.mjs
node scripts/validate-catalog-index.mjs
node scripts/validate-catalog.mjs
node scripts/validate-star-technology-registry.mjs
node scripts/check-links.mjs
```

GitHub metadata с license evidence обновляется отдельно авторизованным maintainer:

```bash
GITHUB_TOKEN=... node scripts/refresh-github-metadata.mjs
```

## Проверки

Quality workflow проверяет:

- deterministic build canonical catalog и static exports;
- duplicate URL, repository и title identities;
- normalized license/evidence schema;
- запрет grey resources в agent exports;
- запрет direct install;
- link-health, GitHub metadata, MCP audit и projects schemas;
- JavaScript syntax, progressive DOM budget в 36 карточек, mobile scroll guards и production smoke contract;
- review packet/patch policy и end-to-end detached worktree lifecycle без mutation/merge/deploy.

## Документация

- [ROADMAP](ROADMAP.md)
- [Editorial Review Preview](guides/editorial-review-preview.md)
- [Eclipse Growth OS](guides/eclipse-growth-os.md)
- [Creator Ops Stack](guides/creator-ops-stack.md)
- [Discovery, review и provenance radar](guides/august-2026-discovery-review-security-radar.md)
- [Razer AIKit и Diagram Design: проверка и план внедрения](guides/razer-aikit-diagram-design-review.md)
- [GitHub Spec Kit: Eclipse Spec Gate](guides/github-spec-kit-eclipse-gate.md)\n- [ChatGPT Work + Codex operating model](guides/chatgpt-work-codex-operating-model.md)\n- [August 2026 harness, media and code radar](guides/august-2026-harness-media-code-radar.md)\n- [Eclipse Repository Architecture Map Prompt](guides/repository-architecture-map.md)\n- [Eclipse Forge Codex session tree](guides/eclipse-session-tree.md)
- [Eclipse Diagram Contract: первый static data-flow pilot](web/diagrams/catalog-data-flow.html)
- [Eclipse AI Hub: model provider boundary](web/diagrams/ai-hub-provider-boundary.html)
- [Hopson Sentinel: capability и approval boundary](web/diagrams/sentinel-capability-boundary.html)
- [Eclipse DnD Forge: безопасный Azgaar import](web/diagrams/dnd-azgaar-import-boundary.html)
- [Shotforge, Eclipse Media и Text2Image: storyboard handoff](web/diagrams/media-storyboard-handoff.html)
- [AI Landing Sprint](guides/ai-landing-sprint.md)
- [Operational agent stack](guides/august-2026-operational-agent-stack.md)
- [Agent Reach security review](guides/agent-reach-security-review-2026-07-31.md)
- [Azgaar DnD map workflow](guides/azgaar-dnd-map-workflow.md)
- [MCP runtime audit](guides/mcp-runtime-audit.md)
- [Eclipse Technology Registry](guides/star-technology-registry.md)

## License

Редакционные материалы Eclipse Library принадлежат Eclipse Forge. Каждый внешний ресурс, repository, model, dataset, prompt и service сохраняет собственные license и Terms; точный статус указан в соответствующей карточке.
