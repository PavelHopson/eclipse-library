# Eclipse Library Roadmap

Последнее обновление: **27.07.2026**

## Текущее состояние

- `README.md` — канонический каталог.
- `web/app.js` — client-side каталог, полнотекстовый поиск, составные фильтры,
  подробные карточки и guide viewer.
- `web/catalog-details.json` — проверенный структурированный слой для приоритетных
  материалов; старые записи получают честную пометку о необходимости аудита.
- `web/link-health.json` — безопасный публичный snapshot weekly-аудита: доступность ссылки
  показывается отдельно от редакторского доверия и не считается security endorsement.
- Deploy: GitHub Actions → VPS/Caddy из ветки `master`.
- Production синхронизирован с `master`: deploy
  [#30296773866](https://github.com/PavelHopson/eclipse-library/actions/runs/30296773866)
  от 27.07.2026 успешно завершён через VPS/Caddy.

## Приоритеты

### P0

- [x] Восстановить deploy на VPS: повторный run 24.07.2026 прошёл SSH setup и rsync.
- [ ] Убрать `StrictHostKeyChecking=no` и pin host key через secret/known_hosts.
- [x] Добавить scheduled link checker с redirect resolution, retry и честным разделением
      `broken` / `unavailable` / `unknown` / rate-limited сайтов.

### P1

- [x] Stage 1 — понятная библиотека: отдельный каталог проектов Eclipse Forge, глобальная навигация,
      компактный mobile hero, сокращённый sidebar и progressive results по 36 карточек.
- [x] Stage 2 — упростить discovery controls: объединить 13 внутренних типов в 7 пользовательских
      групп, свести лицензии к понятным категориям, скрыть advanced filters до запроса и показать
      сценарий применения прямо на карточке.
- [x] Stage 3 — добавить понятный порядок выдачи: исходная структура каталога, редакторская
      рекомендация, доверие, свежесть проверки и название; расширить следующую группу cloud AI API.
- [x] Stage 4 — добавить локальное избранное: сохранение с карточки и detail view, отдельная
      выдача сохранённых материалов, persistence после reload и явная success/empty feedback.
- [x] Stage 5 — добавить личную стартовую панель, локальную историю последних просмотров и
      интерактивное сравнение 2–3 материалов по назначению, платформе, цене, лицензии, доверию,
      риску и применимости к проектам Eclipse Forge.
- [x] Stage 6 — расширить подробный слой локальными AI-инструментами и добавить в detail view
      объяснимые рекомендации похожих проверенных материалов с быстрым сравнением.
- [x] Stage 7 — добавить быстрый маршрут только по вручную проверенным материалам и расширить
      подробный security/skill-governance слой официальными и community-инструментами.
- [x] Stage 8 — собрать базовый MCP-набор с явными границами доступа, secret handling,
      tool-poisoning рисками и отдельным решением для неподдерживаемых servers.

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
      записи без даты, а weekly snapshot показывает `ok` / `restricted` / `unavailable` /
      `unknown` / `broken` / `blocked`; archived repository metadata ещё нужно добавить отдельно.
- [ ] Автоматический GitHub metadata refresh без доверия к stars как quality score.
- [x] Отдельные landing routes для skills, MCP, models, prompts, courses и security.

## Changelog

### 2026-07-27

- Stage 8 discovery завершён: добавлены GitHub MCP, Filesystem MCP, Playwright MCP, Context7 MCP
  и архивный PostgreSQL reference. Каталог вырос с 504 до 509 материалов, structured details —
  с 51 до 56; canonical URL-дубли отсутствуют.
- Для каждого MCP простым языком описаны доступные действия и безопасный старт: fine-grained token,
  read-only/lockdown, allowed directories, отдельный browser profile, data minimization, version pinning
  и ручная проверка tool descriptions. PostgreSQL reference отмечен решением «Не использовать»:
  canonical repository архивирован и больше не поддерживается.
- GitHub MCP и Filesystem MCP рекомендованы к ограниченному внедрению, Context7 — к внедрению без
  private code/secrets в search query, Playwright MCP оставлен reference из-за уже доступного browser
  tooling и рекомендации Microsoft рассмотреть более компактный CLI + Skills workflow.
- Live QA выявил и устранил нерелевантную cross-topic рекомендацию: для подробной MCP-карточки
  related materials теперь сначала выбираются по MCP-названию, а не по случайному упоминанию MCP
  в security-тексте; записи с решением «Не использовать» исключены из рекомендаций.
- Commits `5f902a0`, `00fc0d4` и `c63a550` отправлены в `origin/master`; финальные CI
  [#30296774021](https://github.com/PavelHopson/eclipse-library/actions/runs/30296774021) и production deploy
  [#30296773866](https://github.com/PavelHopson/eclipse-library/actions/runs/30296773866) завершены успешно.
  Production QA подтвердил 509 карточек, 33 MCP-материала, `app.js?v=20`, тематические related cards
  и отсутствие horizontal overflow на desktop и 390×844; browser console без warnings/errors.
- Stage 7 discovery завершён: Security Guidance, NVIDIA Skills, SkillSpector, AgentShield и
  Anthropic Cybersecurity Skills получили подробные карточки с provenance, условиями, ограничениями,
  safe start и применимостью. Structured details выросли с 46 до 51 без новых URL-дублей.
- Быстрый маршрут `#browse/verified` показывает только материалы, для которых редактор вручную
  проверил источник, лицензию, риски и применимость. Счётчик формируется из фактической schema.
- Устаревшие claims Security Guidance и AgentShield исправлены по актуальной документации:
  reviews не считаются blocking gate, model-backed этапы расходуют usage, community findings требуют
  ручной проверки. Для skill installers зафиксированы sandbox, pinning и least-privilege defaults.
- Commit `33e2ee2` отправлен в `origin/master`; CI
  [#30295183804](https://github.com/PavelHopson/eclipse-library/actions/runs/30295183804) и production deploy
  [#30295183765](https://github.com/PavelHopson/eclipse-library/actions/runs/30295183765) завершены успешно.
  Read-only production smoke подтвердил `app.js?v=17`, 51 detail entry и все пять новых ID.
  Визуальный live browser QA не засчитан: Browser URL-policy заблокировала local и production URL.
- Stage 6 discovery завершён: Ollama, LM Studio, Jan, GPT4All и ComfyUI получили подробные карточки
  простым языком — с безопасным стартом, лицензией/условиями, ограничениями, рисками и применимостью
  к Eclipse Forge. Каталог вырос с 499 до 504 материалов, structured details — с 41 до 46.
- Detail view теперь предлагает три похожих проверенных материала. Рекомендации формируются
  прозрачно по типу, категории, проектам, платформе и лицензии; из рекомендации можно сразу открыть
  карточку или добавить материал к сравнению. Для записей с явным `type` validator проверяет enum.
- Локальный browser QA пройден на 1440×900 и 390×844: direct link, related cards, compare action,
  mobile horizontal scroll и отсутствие page overflow; console warnings/errors отсутствуют.
  XSS-focused security pass не выявил новых уязвимых sinks или утечек секретов.
- Commit `3bb0233` отправлен в `origin/master`; CI
  [#30294357154](https://github.com/PavelHopson/eclipse-library/actions/runs/30294357154) и production deploy
  [#30294356925](https://github.com/PavelHopson/eclipse-library/actions/runs/30294356925) завершены успешно.
  Live QA подтвердил `app.js?v=16`, Ollama deep link, три related cards и отсутствие overflow на 390×844.
- Stage 5 interaction завершён: стартовая панель объединяет избранное и до 8 последних просмотров,
  история хранится только в `localStorage` и очищается одним действием. Сравнение поддерживает 2–3
  материала, доступно из карточек и detail view и показывает 9 практических критериев без скрытого score.
- Добавлены persistent, empty, disabled, limit и clear states, keyboard Escape/focus trap, адаптивная
  таблица и компактный mobile tray. Local browser QA: сравнение 2/3/4 материалов, persistence истории
  и избранного после reload, очистка истории и 0 px horizontal overflow на 390×844.
- Security review изменённой поверхности не выявил Critical/High/Medium/Low findings: значения каталога
  в новых `innerHTML`-шаблонах проходят context-appropriate escaping, URL истории допускают только
  `http(s)` и сопоставляются с существующими карточками; секреты, telemetry и сторонние зависимости не добавлены.
- Commit `4e42176` отправлен в `origin/master`; CI
  [#30293358447](https://github.com/PavelHopson/eclipse-library/actions/runs/30293358447) и deploy
  [#30293358121](https://github.com/PavelHopson/eclipse-library/actions/runs/30293358121) завершены успешно.
  Production отдаёт `app.js?v=15` / `styles.css?v=14` и новый compare/personal markup.

- Stage 4 interaction завершён: каждая карточка получила доступную кнопку-закладку, а фильтры —
  отдельное «Избранное» со счётчиком. Выбор сохраняется только в `localStorage` текущего браузера,
  не требует аккаунта и не передаётся на сервер; устаревшие URL автоматически очищаются.
- Сохранение доступно и в подробном просмотре. Добавлены понятные `saved`, disabled, empty и toast
  states, keyboard focus и `prefers-reduced-motion`-совместимая анимация в существующем стиле Library.
- Local browser QA на desktop/mobile проверил add/remove, фильтр 1 из 499, persistence после reload,
  detail view, нулевой horizontal overflow и отсутствие console errors.
- Commit `ba48052` отправлен в `origin/master`; CI
  [#30291057122](https://github.com/PavelHopson/eclipse-library/actions/runs/30291057122) и deploy
  [#30291057165](https://github.com/PavelHopson/eclipse-library/actions/runs/30291057165) завершены успешно.
  Live QA подтвердил `app.js?v=14` / `styles.css?v=13`, add/remove, фильтр 1 из 499,
  persistence после reload и mobile layout без horizontal overflow.

- Stage 3 discovery завершён: пользователь может глобально упорядочить результаты по редакторской
  рекомендации, доверию, свежести проверки или названию и в любой момент вернуть структуру каталога.
  Сортировка работает вместе с поиском, фильтрами и progressive results по 36 карточек.
- Подробный слой расширен с 36 до 41 карточки: Cerebras Inference, Mistral La Plateforme, Cohere,
  Cloudflare Workers AI и Hugging Face Inference Providers получили простые описания, use cases,
  условия, privacy boundaries, безопасный quick start и mapping на проекты Eclipse Forge.
- Удалены устаревшие обещания «без карты», фиксированных RPM и безусловно бесплатного inference:
  формулировки сверены с официальными pricing/limits docs по состоянию на 27.07.2026.
- Local desktop/mobile browser QA: global sorting, deep link Cohere, 36-result pagination,
  0 horizontal overflow на 390×844 и отсутствие console errors. Security review не нашёл
  Critical/High/Medium/Low findings в изменённой поверхности; секреты и исполняемый сторонний код не добавлялись.
- Commit `aff8a68` отправлен в `origin/master`; CI
  [#30290065620](https://github.com/PavelHopson/eclipse-library/actions/runs/30290065620) и deploy
  [#30290065646](https://github.com/PavelHopson/eclipse-library/actions/runs/30290065646) завершены успешно.
  Live QA подтвердил asset keys `app.js?v=13` / `styles.css?v=12`, 499 карточек, 41 подробную
  запись, рабочую сортировку и отсутствие horizontal overflow на desktop/mobile.

- Stage 2 discovery завершён: 13 технических типов сведены к 7 сценариям, а десятки точных
  формулировок лицензии — к группам «Open-source», «Условия сервиса» и «Лицензия неясна».
  Точные условия не потеряны: они остаются в detail reader и доступны в title карточного badge.
- Пять составных фильтров перенесены в progressive disclosure «Дополнительные фильтры» с видимым
  счётчиком выбранных условий. На mobile type-группы прокручиваются горизонтально без увеличения экрана.
- Все 499 карточек получили простую строку «Когда пригодится». Курсы и гайды перемещены после
  результатов, чтобы фильтры находились сразу после hero, а не после длинной учебной секции.
- Commit `dc59cab` отправлен в `origin/master`; CI
  [#30289006414](https://github.com/PavelHopson/eclipse-library/actions/runs/30289006414) и deploy
  [#30289006452](https://github.com/PavelHopson/eclipse-library/actions/runs/30289006452) завершены успешно.
  Asset cache keys повышены отдельным release-doc commit перед финальным live QA.

- Stage 1 discovery завершён: добавлен валидируемый каталог 18 проектов Eclipse Forge с главным
  лендингом, понятными описаниями задачи, аудитории и способа запуска. Инструменты, проекты и гайды
  разведены в глобальной навигации; ссылка на `eclipse-forge.ru` доступна в header, project view и footer.
- Каталог сначала показывает 36 из 499 материалов и догружает следующие порции по явному действию.
  В mobile первый выбор раздела расположен сразу после компактной навигации; длинная инструкция скрыта,
  quick routes прокручиваются горизонтально, архив подборок больше не заполняет основной sidebar.
- Добавлены `projects.json`, schema-validator в CI и включение project URL в SSRF-safe link audit.
  Browser QA пройден на 1440×900 и 390×844: 18 project cards, поиск проектов, 36→72 результатов,
  отсутствие horizontal overflow. Сетевая проверка нашла и позволила исправить ошибочный repository URL
  главного лендинга; фактический remote подтверждён через `git ls-remote`.
- Commit `9a0e9c9` отправлен в `origin/master`; CI
  [#30286323277](https://github.com/PavelHopson/eclipse-library/actions/runs/30286323277) и production deploy
  [#30286322878](https://github.com/PavelHopson/eclipse-library/actions/runs/30286322878) завершены успешно.
  Live QA подтвердил 18 проектов, 36 из 499 стартовых resource cards и отсутствие horizontal overflow на 390×844.
- Каталог проектов расширен с 18 до 22 записей: добавлены Eclipse Chat, Eclipse DnD Forge,
  ai-setup и oh-my-claudecode. Обратная ссылка на Library добавляется в header, mobile menu и footer
  главного Eclipse Forge landing, чтобы переход между витриной и базой знаний работал в обе стороны.

- Weekly link audit теперь публикует минимальный `web/link-health.json`, а сайт показывает
  доступность источника на каждой карточке и дату проверки. Trust и link health разведены явно;
  при ошибке загрузки каталог остаётся рабочим и честно показывает «не проверялось». Успешное
  завершение audit запускает deploy через `workflow_run`, потому что bot push с `GITHUB_TOKEN`
  намеренно не создаёт следующий Actions run.
- Подробный слой расширен с 32 до 36 карточек: Google AI Studio, Groq, OpenRouter и GitHub Models
  описаны простым языком с текущей моделью оплаты, privacy boundary, ограничениями и безопасным стартом.
- Старые рекламные обещания о фиксированных бесплатных квотах и «самом быстром» provider удалены;
  лимиты теперь предлагается читать в официальной панели конкретного аккаунта и модели.
- Desktop/mobile browser QA пройден на 1440×900 и 390×844: 499 карточек, 36 подробно проверенных,
  нет horizontal overflow; отдельно проверен отказ `link-health.json` без поломки каталога.
- Commits `48f571d` и `45c8858` отправлены в `origin/master`; bot snapshot `9da636c` затронул только
  `web/link-health.json`. CI [#30257051912](https://github.com/PavelHopson/eclipse-library/actions/runs/30257051912),
  audit [#30257323630](https://github.com/PavelHopson/eclipse-library/actions/runs/30257323630) и вызванный им
  deploy [#30257385810](https://github.com/PavelHopson/eclipse-library/actions/runs/30257385810) завершены успешно.
- Структурированный слой расширен с 26 до 32 карточек: простым языком описаны Vane,
  Crawl4AI, Hermes Agent, Understand-Anything, MinerU и privacy.sexy, включая безопасный
  старт, цену, лицензию, ограничения и применимость к проектам Eclipse Forge.
- Старая запись Perplexica обновлена до актуального имени Vane и canonical repository;
  redirect не превращён в отдельный дубликат.
- Commits `eb1b1e1`, `07c4e45`, `f1ac15b` отправлены в `origin/master`; CI
  [#30255861747](https://github.com/PavelHopson/eclipse-library/actions/runs/30255861747),
  deploy `#30255861738` и blocking audit
  [#30255872521](https://github.com/PavelHopson/eclipse-library/actions/runs/30255872521)
  завершены успешно. Audit: 479 URL, 447 OK, 25 restricted, 0 broken, 1 временно
  недоступен, 6 network unknown, 0 blocked/redirect-дублей.
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
