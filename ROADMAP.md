# Eclipse Library Roadmap

Последнее обновление: **27.07.2026**

## Текущее состояние

- `README.md` — канонический каталог.
- `web/app.js` — client-side каталог, полнотекстовый поиск, составные фильтры,
  подробные карточки и guide viewer.
- `web/catalog-details.json` — проверенный структурированный слой для приоритетных
  материалов; старые записи получают честную пометку о необходимости аудита.
- Deploy: GitHub Actions → VPS/Caddy из ветки `master`.
- Production синхронизирован с `master`: deploy
  [#30253279596](https://github.com/PavelHopson/eclipse-library/actions/runs/30253279596)
  от 27.07.2026 успешно завершён через VPS/Caddy.

## Приоритеты

### P0

- [x] Восстановить deploy на VPS: повторный run 24.07.2026 прошёл SSH setup и rsync.
- [ ] Убрать `StrictHostKeyChecking=no` и pin host key через secret/known_hosts.
- [x] Добавить scheduled link checker с redirect resolution, retry и честным разделением
      `broken` / `unavailable` / `unknown` / rate-limited сайтов.

### P1

- [ ] Частично: перевести все записи из неструктурированных Markdown-описаний в schema с полями:
      `type`, `category`, `platform`, `license`, `trust`, `risk`, `projects`, `verifiedAt`.
- [ ] Частично: добавить автоматический duplicate check по canonical URL, GitHub `owner/repo`,
      normalized title и redirect target.
- [x] Добавить фильтры по platform, license, trust/risk и Eclipse project applicability.
- [x] Добавить visible badges «официальный источник», «лицензия», «risk» и
      «проверено <дата>», не заставляя пользователя читать всю карточку.

### P2

- [x] Стабильные deep links на каждую запись.
- [ ] Частично: freshness review — UI уже различает недавно проверенные карточки и
      записи без даты; archived/stale/dead-link metadata ещё нужно переносить из audit report.
- [ ] Автоматический GitHub metadata refresh без доверия к stars как quality score.
- [x] Отдельные landing routes для skills, MCP, models, prompts, courses и security.

## Changelog

### 2026-07-27

- Структурированный слой расширен с 26 до 32 карточек: простым языком описаны Vane,
  Crawl4AI, Hermes Agent, Understand-Anything, MinerU и privacy.sexy, включая безопасный
  старт, цену, лицензию, ограничения и применимость к проектам Eclipse Forge.
- Старая запись Perplexica обновлена до актуального имени Vane и canonical repository;
  redirect не превращён в отдельный дубликат.
- Weekly link audit теперь является release gate: подтверждённые HTTP 4xx и переходы на
  private/link-local/reserved destinations завершают job с ошибкой; временные 5xx,
  rate limits и network unknown остаются диагностикой. Добавлены regression cases для
  IPv4/IPv6 destination guard.
- Все используемые `actions/checkout`, `actions/setup-node` и `actions/upload-artifact`
  закреплены по immutable commit SHA с сохранением версии в комментарии.
- Открытый риск deploy не скрыт: `StrictHostKeyChecking=no` можно убрать только после
  добавления проверенного VPS host key/fingerprint в GitHub secret.

- Добавлены стабильные тематические routes `#browse/skills`, `mcp`, `models`,
  `prompts`, `security` и `courses` с коротким объяснением назначения и автоматическим
  применением нужной выборки.
- Добавлен фильтр актуальности: «Проверено недавно», «Нужно перепроверить» и
  «Без даты проверки»; состояние также видно в подробной карточке.
- Добавлен weekly/manual link audit для 479 canonical URL: HEAD/GET fallback,
  retry с меньшей параллельностью, redirect-target duplicates, GitHub repo/title
  identity report, rate-limit allowlist и JSON artifact на 14 дней.
- Удалены redirect-дубликат старого `Awesome ChatGPT Prompts`, просроченная реклама
  Selectel и Foundry: старый URL перенаправлял на `unbrowse-ai/foundry`, но canonical
  repo уже отвечает 404 через официальный GitHub API.
- Desktop/mobile QA: topic routes, combined freshness filters, reset, detail reader,
  focus management и отсутствие horizontal overflow проверены в браузере.
- Commits `8a56a29`, `b7f229b`, `135ddf4` отправлены в `origin/master`;
  CI [#30253279553](https://github.com/PavelHopson/eclipse-library/actions/runs/30253279553),
  deploy `#30253279596` и финальный link audit
  [#30253313409](https://github.com/PavelHopson/eclipse-library/actions/runs/30253313409)
  завершены успешно. Audit: 479 URL, 447 OK, 25 restricted, 0 broken,
  1 временно недоступен, 6 network unknown, 0 redirect-дублей.

### 2026-07-25

- Каталог очищен от служебных строк и повторов по canonical URL: в интерфейсе
  отображаются 502 уникальные записи вместо 776 смешанных строк README.
- Для 26 материалов из последней пачки добавлены расширенные карточки простым языком:
  назначение, сценарии, платформа, лицензия/цена, доверие к источнику, риски,
  быстрый безопасный старт и применимость к Eclipse Forge.
- Добавлены фильтры по платформе, лицензии, доверию и проекту, понятный счётчик
  результатов, reset и отдельное no-results состояние.
- Добавлены стабильные ссылки `#item/<id>` и полноэкранный reader с возвратом фокуса,
  keyboard navigation и адаптивной mobile-раскладкой.
- Старые непроверенные записи больше не выглядят подтверждёнными: интерфейс явно
  сообщает, что подробный редакторский аудит ещё не выполнен.
- Добавлен CI-validator структурированного каталога, обязательных полей, enum,
  повторов URL/id и уникальности HTML id.
- Commit `257f302` отправлен в `origin/master`; CI validation
  [#30151809774](https://github.com/PavelHopson/eclipse-library/actions/runs/30151809774)
  и production deploy `#30151809770` завершены успешно.

### 2026-07-24

- Обработана пачка из 48 Telegram-сообщений за 15–24 июля.
- Удалены повторы Kimi K3 и PriceGhost; 13 уже опубликованных ресурсов не продублированы.
- Добавлены проверенные local AI, agent skills, media, workstation и product-research
  материалы с лицензиями, trust/risk notes и Eclipse Forge mapping.
- Risk-sensitive записи теперь получают заметный marker в карточках; placeholder поиска
  больше не содержит устаревающий вручную счётчик.
- Исправлены рекламные и неточные claims для Kimi Code, PriceGhost, Reiverr,
  SongGeneration Studio, AnimeGen и других материалов.
- Добавлен подробный decision radar:
  `guides/july-2026-agents-local-product-radar.md`.
- Медицинский self-test, genealogy/doxxing prompts и low-value novelty исключены.
- Commit `7d13e37` отправлен в `origin/master`; production deploy
  [#30112663215](https://github.com/PavelHopson/eclipse-library/actions/runs/30112663215)
  завершён успешно, live README/app/guide проверены.
