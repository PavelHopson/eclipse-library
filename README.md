# Eclipse Library

Кураторская библиотека AI-инструментов, сервисов, моделей, skills, MCP, промптов, курсов и security-материалов для экосистемы Eclipse Forge.

[Открыть библиотеку](https://library.eclipse-forge.ru/) · [Каталог проектов](https://library.eclipse-forge.ru/#projects) · [Курсы и гайды](https://library.eclipse-forge.ru/#browse/courses)

## Текущее состояние

- 535 уникальных записей доступны пользователям.
- 88 карточек прошли ручную редакторскую проверку.
- 447 карточек честно помечены как `inferred` и ожидают углублённого review.
- 219 лицензий подтверждаются official GitHub license metadata.
- 280 лицензий или наборов условий всё ещё требуют отдельной проверки.
- 64 grey-ресурса видны человеку как reference, но исключены из agent recommendations.
- Всего 71 запись исключена из agent exports по risk, editorial, transport или repository policy.
- 247 записей получили отдельное поле `addedAt`; неизвестные даты не выдумываются.

## Как устроены данные

README больше не является базой данных и не разбирается в браузере.

| Слой | Назначение |
|---|---|
| [`catalog/resources.json`](catalog/resources.json) | Канонические structured records. Новые записи и редакторские правки вносятся сюда. |
| [`web/catalog-index.json`](web/catalog-index.json) | Production index schema v2: normalized license, evidence, `addedAt`, agent policy и счётчики. |
| [`web/catalog-details.json`](web/catalog-details.json) | Исторический набор ручных editorial reviews; его содержимое уже мигрировано в canonical records. |
| [`web/github-metadata.json`](web/github-metadata.json) | Official GitHub state и license evidence для repository URL. |
| [`web/guides.json`](web/guides.json) | Manifest учебных материалов. |
| [`web/api/v1/`](web/api/v1/) | Static JSON exports для внешних consumers и AI-агентов. |
| [`lists/catalog-legacy-2026-08-03.md`](lists/catalog-legacy-2026-08-03.md) | Read-only архив старого Markdown-каталога; application его не читает. |

## API и exports

Production endpoints:

- [Full catalog](https://library.eclipse-forge.ru/api/v1/catalog.json) — все записи для human-facing interfaces.
- [Agent-safe catalog](https://library.eclipse-forge.ru/api/v1/agents.json) — без grey и других fail-closed exclusions.
- [StarCRM export](https://library.eclipse-forge.ru/api/v1/starcrm.json) — стабильный consumer contract без чтения README.
- [StarAI export](https://library.eclipse-forge.ru/api/v1/starai.json) — стабильный consumer contract без чтения README.
- [Manifest](https://library.eclipse-forge.ru/api/v1/manifest.json) — версия каталога, счётчики и ссылки на endpoints.

Static exports предназначены для server-side или controlled consumers. Для browser-to-browser cross-origin чтения нужно отдельно подтвердить CORS configuration на production proxy.

### Safety contract

- Каталог никогда не устанавливает инструмент сам.
- В agent exports у всех записей `actions.installFromCatalog` равно `false`.
- Grey resources остаются доступными для ручного исследования, но не рекомендуются агентами автоматически.
- External mutations, публикации, платежи и работа с production accounts требуют отдельного human approval.
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
- JavaScript syntax, mobile scroll guards и production smoke contract.

## Документация

- [ROADMAP](ROADMAP.md)
- [Eclipse Growth OS](guides/eclipse-growth-os.md)
- [Operational agent stack](guides/august-2026-operational-agent-stack.md)
- [Agent Reach security review](guides/agent-reach-security-review-2026-07-31.md)
- [Azgaar DnD map workflow](guides/azgaar-dnd-map-workflow.md)
- [MCP runtime audit](guides/mcp-runtime-audit.md)

## License

Редакционные материалы Eclipse Library принадлежат Eclipse Forge. Каждый внешний ресурс, repository, model, dataset, prompt и service сохраняет собственные license и Terms; точный статус указан в соответствующей карточке.
