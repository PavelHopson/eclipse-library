# Eclipse Library Roadmap

Последнее обновление: **31.07.2026**

## Текущее состояние

- `README.md` — канонический каталог.
- `web/app.js` — client-side каталог, полнотекстовый поиск, составные фильтры,
  подробные карточки и guide viewer.
- `web/catalog-details.json` — проверенный структурированный слой для приоритетных
  материалов; старые записи получают честную пометку о необходимости аудита.
- `web/catalog-index.json` — детерминированный полный индекс 525 уникальных материалов:
  73 редакторски проверены, 452 структурированы из README и явно помечены `inferred`.
- `web/link-health.json` — безопасный публичный snapshot weekly-аудита: доступность ссылки
  показывается отдельно от редакторского доверия и не считается security endorsement.
- Deploy: GitHub Actions → VPS/Caddy из ветки `master`.
- Production синхронизирован с `master` commit `2a9a068`: deploy
  [#30525800668](https://github.com/PavelHopson/eclipse-library/actions/runs/30525800668)
  от 30.07.2026 успешно завершён через VPS/Caddy; independent smoke подтвердил `app.js?v=29`,
  520 материалов, 22 проекта, 307 GitHub repository statuses и 5 MCP audit records.

## Приоритеты

### P0

- [x] Восстановить deploy на VPS: повторный run 24.07.2026 прошёл SSH setup и rsync.
- [x] Убрать TOFU для production SSH: pin host key через `VPS_KNOWN_HOSTS`, включить
      `StrictHostKeyChecking=yes`, bounded retry и post-deploy smoke по точной версии assets/data.
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
- [x] Stage 9 — перевести MCP-рекомендации в безопасные project integrations: Sentinel CLI presets,
      OMC unified registry baseline и developer-only generator для browser-based AI Hub.
- [x] Stage 10 — отделить доступность URL от жизненного цикла GitHub-проекта: weekly metadata snapshot,
      archived/disabled badges, repository-state filter и исключение неподдерживаемых repositories из рекомендаций.
- [x] Stage 11 — добавить task-first discovery, shareable URL состояния фильтров и мобильную bottom-sheet
      панель, которая не блокирует страницу при открытии ссылки и не ломает вертикальный скролл.
- [x] Stage 12 — нормализовать стоимость, регистрацию и место запуска для подробно проверенных карточек,
      добавить shareable access filters, incremental duplicate gate и честный MCP runtime-audit status.
- [ ] Eclipse Webclaw / Kwork #18: benchmark Lightpanda как optional beta JS-renderer против
      Playwright на representative page set — success rate, extraction quality, p95, RAM, robots/rate limits;
      telemetry off, pinned image/source и AGPL review обязательны.
- [ ] Eclipse Media / Educator-AI: isolated transcript-first video understanding spike по паттерну
      Claude Video — allowlisted URLs, size/time limits, scene frames, timestamp citations и только
      opt-in Whisper fallback без client/private media.
- [ ] Eclipse Media / DnD Forge / Shotforge: server-side Gemini API Lyria 3 Clip/Pro spike с
      credits/pricing, RU/EN quality, SynthID/provenance, content-rights gate; consumer Flow Music UI
      использовать только как UX reference, не автоматизировать.
- [ ] oh-my-claudecode / ai-setup / Sentinel: pilot Skillcheck на трёх публичных skills и synthetic
      tasks с pinned model/config, raw JSON и повторными trials; private instructions и code не отправлять.
- [ ] Eclipse AI Hub / Sentinel / oh-my-claudecode: direct Kimi K3 API benchmark на фиксированных
      synthetic coding/agent tasks — quality, p50/p95 latency, tokens, cost и long-context stability;
      только server-side low-limit key, redaction и без client/private repositories.

- [x] Перевести все записи из неструктурированных Markdown-описаний в schema с полями:
      `type`, `category`, `platform`, `license`, `trust`, `risk`, `projects`, `verifiedAt`.
- [x] Блокировать новые дубли по canonical URL, GitHub `owner/repo`, normalized title и redirect target;
      текущие исторические повторы закреплены baseline и не могут незаметно расти.
- [x] Объединить исторические canonical-URL duplicate groups в README: 27 повторных строк удалены,
      для каждого URL сохранена наиболее полная запись; canonical URL/title duplicate groups равны нулю.
- [x] Добавить фильтры по platform, license, trust/risk и Eclipse project applicability.
- [x] Добавить visible badges «официальный источник», «лицензия», «risk» и
      «проверено <дата>», не заставляя пользователя читать всю карточку.

### P2

- [x] Стабильные deep links на каждую запись.
- [x] Freshness review — UI различает недавно проверенные карточки и
      записи без даты, а weekly snapshot показывает `ok` / `restricted` / `unavailable` /
      `unknown` / `broken` / `blocked`; archived repository metadata показывается отдельным lifecycle status.
- [x] Автоматический GitHub metadata refresh без доверия к stars как quality score.
- [x] Отдельные landing routes для skills, MCP, models, prompts, courses и security.
- [ ] Sentinel / oh-my-claudecode: сравнить Jcode memory/swarm/resume на synthetic repository,
      собранном из pinned source с отключёнными telemetry, sponsored discovery, hooks, MCP и self-dev.
- [ ] Eclipse DnD Forge: отдельно аудировать и адаптировать три MengTo GameDev skills —
      `author-game-levels`, `test-playable-web-games`, `build-game-audio-feedback`; коллекцию целиком не ставить.
- [ ] Educator-AI: адаптировать официальный GitHub for Beginners roadmap в короткий практический
      onboarding repository → commit → branch → pull request → conflict, не копируя статью целиком.

## Changelog

### 2026-07-31

- Разобрано 46 сообщений из июльской ленты: 36 уже опубликованных ресурсов не продублированы,
  повтор Shipper внутри вложения схлопнут; добавлены Footrue ToolBox, официальный GitHub for
  Beginners roadmap, Language Model Builder, VCamdroid и TokenRouter.
- Существующая карточка Kimi K3 обновлена без нового ID: официально подтверждены 2,8T parameters,
  context до 1M, vision, coding/agent focus и API reasoning modes. Сравнение с «Fable 5» и
  «GPT Sol 5.6» удалено как неподтверждённое.
- Рекламная акция TokenRouter на 50 млн Kimi K3 tokens, отсутствие карты и срок предложения
  не подтвердились в публичных official materials. Gateway получил решение `Не использовать`
  до проверки vendor identity, Terms/DPA, upstream routing, retention и billing limits.
- Mailwave, Leon benchmark demo, Stolen Compute и coupon-testing prompt отклонены как дубликат
  сценария, не самостоятельный продукт, несанкционированная схема или небезопасная автоматизация.
- Добавлен `guides/july-2026-backfill-tokenrouter-radar.md` с решениями, projects, scenarios,
  complexity, priority, risks, dependencies и конкретными next steps.
- Supply-chain pass не запускал сторонние binaries или code. VCamdroid и TokenRouter помечены
  high risk; Language Model Builder, Footrue ToolBox и Kimi K3 — medium; GitHub roadmap — low.
  Каталог вырос с 520 до 525 карточек, проверенный слой — с 67 до 73, inferred — с 453 до 452.
- Network link audit проверил 533 unique URLs: 490 `ok`, 27 `restricted`, 0 `broken`,
  0 unsafe и 0 redirect duplicates; все шесть новых/обновлённых primary links доступны.
  Единственный `503` относится к прежней записи Robokassa, ещё 15 endpoints не дали
  однозначный machine-readable ответ. Browser QA на 1440×900 и 390×844 подтвердил
  counters 525/73, detail/guide deep links, отсутствие horizontal overflow и console errors;
  mobile detail сохранил `scrollTop=720` после ожидания и не выбросил пользователя наверх.

### 2026-07-30

- Обработано 19 сообщений Telegram за 24–30 июля: добавлены 11 новых редакторски проверенных
  материалов — FluentTweaker, Claude Code in Action, Lightpanda, Claude Video, NoSubscription,
  Paranoia Privacy Wiki, MengTo Skills, The Long Silence, Jcode, Skillcheck и Google Flow Music.
  Каталог вырос с 509 до 520 карточек, подробный слой — с 56 до 67; 453 исторические записи
  сохранили честный `inferred` status.
- SongGeneration Studio, ODS и beautify-github-readme найдены в текущем каталоге и не продублированы.
  OBLITERATUS, Stolen Compute, тестовая Kimi-K3-0.40B, desktop-pets prompt и coupon checkout prompt
  отклонены как небезопасные, вводящие в заблуждение или не дающие измеримой продуктовой ценности.
- Рекламные claims исправлены по первичным источникам: Lightpanda остаётся beta с неполным Web API
  и telemetry default; Kimi-K3-0.40B — scratch architecture fixture, а не маленький frontier model;
  авторский «Opus 5» у The Long Silence не совпадает с официальной линейкой Anthropic; Google Flow
  Music, напротив, подтверждён официальным Google Help, но consumer UI не является API.
- Добавлен decision radar `guides/july-2026-music-agents-tooling-radar.md` с решениями, complexity,
  priority, risks, dependencies и next steps для Eclipse Webclaw, Media, DnD Forge, AI Hub,
  Educator-AI, Shotforge, Sentinel, oh-my-claudecode, ai-setup и Library.
- Supply-chain review не запускал сторонний код: Jcode, Claude Video, Lightpanda и FluentTweaker
  получили high-risk boundaries; skills, model providers, remote downloads, telemetry, OAuth/API keys,
  PowerShell/system tweaks и media rights явно вынесены в карточки и roadmap gates.
- Финальный link audit проверил 528 уникальных URL: 451 `ok`, 22 `restricted`, 0 `broken`,
  0 unsafe/blocked и 0 новых redirect-duplicate groups; единственный временный `503` относится к
  прежней записи Robokassa. Browser QA на 1440×900 и 390×844 подтвердил 520 карточек,
  deep link новой записи, полные safe-start/risk блоки, отсутствие horizontal overflow и console errors;
  mobile scroll сохранился на 2300 px после ожидания и больше не возвращает страницу наверх.
- Исправлены две старые повреждённые UTF-8 строки в описаниях AI Agents for Beginners и TryHackMe;
  генератор перенёс исправления в полный индекс без изменения identity карточек.
- Commit `2a9a068` отправлен в `origin/master`; catalog CI
  [#30525800736](https://github.com/PavelHopson/eclipse-library/actions/runs/30525800736) и production deploy
  [#30525800668](https://github.com/PavelHopson/eclipse-library/actions/runs/30525800668) прошли успешно.
  Независимый live smoke подтвердил совпадение production payload с опубликованным commit.

### 2026-07-29

- MCP runtime workflow расширен pinned GitHub MCP `0.31.0` и Playwright MCP `0.0.78`. GitHub server
  запускается в read-only/lockdown `stdio` container без сети, Linux capabilities и рабочего token;
  Playwright — с точной browser dependency, `--isolated`, пустым profile/output и только owned loopback
  fixtures. Активные проверки запрещают write surface, чтение без credentials, второй origin и `file:` вне
  workspace; production secrets и пользовательские browser sessions workflow не получает.
- Для Context7 зафиксирована privacy boundary: local package и remote MCP отправляют свободный query во
  внешний Context7 API. API key влияет на authentication/limits, но не делает содержимое запроса локальным,
  поэтому private code, secrets, персональные и закрытые бизнес-данные передавать нельзя.
- Runtime run [#30471854284](https://github.com/PavelHopson/eclipse-library/actions/runs/30471854284)
  завершён успешно без repository secrets и пользовательских sessions. GitHub MCP — 19 tools, hash
  `bc1a74c6…8d198`, 3/3 tests, ручной review без findings: `runtime-reviewed` только для pinned stdio
  read-only/lockdown конфигурации. Playwright MCP — 24 tools, hash `4ab6f26e…eea4c`, 4/4 tests, но metadata
  публикует `browser_run_code_unsafe` с RCE-equivalent доступом: статус `runtime-scanned`, решение reference.
  Filesystem и Context7 сохранили утверждённые hashes; Context7 остаётся conditional из-за external query.
  Artifact сокращён до `summary.json` и raw metadata (около 70 KB), npm cache в evidence больше не попадает.
- UI различает окончательный approval и условный review: GitHub/Filesystem показывают «Runtime-аудит пройден»,
  Playwright/Context7 — «Проверено с ограничениями» с конкретным finding в title и полном detail notice.
  Локальный browser QA прошёл на 1440×900 и 390×844: 509 карточек, 5 MCP badges, без horizontal overflow
  и console errors; mobile scroll сохранился на 2154 px после ожидания и не вернул страницу наверх.
- Commits `22c7d97` и `194f0cd` отправлены в `origin/master`; первый добавил GitHub/Playwright runtime coverage,
  второй исправил Playwright fixture assertion через отдельный accessibility snapshot и очистил artifact.
- Commit `60d2ad2` отправлен в `origin/master`; catalog CI
  [#30472947626](https://github.com/PavelHopson/eclipse-library/actions/runs/30472947626) и production deploy
  [#30472952267](https://github.com/PavelHopson/eclipse-library/actions/runs/30472952267) прошли. Live smoke подтвердил
  `app.js?v=29`, 509 материалов, 22 проекта, 307 repository statuses и 5 MCP audit records.
- Stage 13 завершил полный data layer: `web/catalog-index.json` содержит 509 уникальных карточек с единым
  contract для описания, сценариев, платформ, лицензии, цены, доступа, доверия, рисков, проектов, решения,
  безопасного старта и source location. 56 карточек имеют `reviewStatus=verified`, остальные 453 — честный
  `inferred` без ложной даты проверки; deterministic builder и validator блокируют stale или неполный index.
- Исторический cleanup удалил 27 повторных строк из 26 canonical URL groups. После консолидации baseline
  содержит 0 canonical URL duplicates и 0 normalized-title duplicates; две разные записи Telegram/Discord
  внутри `anthropics/claude-plugins-official` остаются намеренно как разные материалы одного repository.
- Добавлен ручной GitHub Actions runtime-аудит для pinned Filesystem MCP `2026.7.10` и Context7 `3.2.5`.
  Одноразовый runner получает только `tools/list`, не вызывает tools, не получает secrets, ограничивает
  Filesystem пустой temporary directory, ищет опасные metadata-паттерны и считает стабильный SHA-256.
  Raw descriptions сохраняются только в private artifact на 7 дней; в logs выводятся counts/hash/findings.
- Snyk Agent Scan не подключён автоматически: официальный scanner теперь требует Snyk token и передаёт
  tool names/descriptions в Snyk. Это отдельное решение о third-party data sharing, а не безопасный default.
- Runtime run [#30464504976](https://github.com/PavelHopson/eclipse-library/actions/runs/30464504976)
  завершён успешно: Filesystem MCP — 14 tools, hash `31ebd4eb…b1324`; Context7 — 2 tools,
  hash `6d3469e…365e1`; 0 automated findings. Оба получили честный статус `runtime-scanned`, а не
  `runtime-reviewed`: private raw metadata ещё должен просмотреть человек перед рабочим подключением.
- Ручной metadata review и активный boundary run
  [#30467513692](https://github.com/PavelHopson/eclipse-library/actions/runs/30467513692) завершены.
  Filesystem MCP прошёл 5/5 разрешённых тестов: scoped-directory listing и чтение внутри workspace,
  отказ для `/etc/passwd`, parent traversal и symlink escape; hash совпал, findings нет, статус повышен до
  `runtime-reviewed`. Context7 metadata не содержит скрытых инструкций, но явно управляет связкой двух tools
  и передаёт query во внешний API; это Low/accepted risk, поэтому без auth/privacy verification он остаётся
  `runtime-scanned`. Weekly workflow теперь блокирует изменение pinned toolset hash.
- Static payload проверен в браузере: 509 карточек, 56 verified, отсутствие horizontal overflow на desktop
  и 390×844; mobile scroll остался на 790 px спустя 3 секунды и не вернул страницу наверх.

- Stage 12 добавил к 56 редакторски проверенным карточкам нормализованный `access` contract:
  `cost`, `signup`, `runtime`. Для остальных материалов UI использует консервативное inference и оставляет
  `unknown`, если утверждение нельзя сделать из опубликованного описания.
- Advanced filters теперь отвечают на три бытовых вопроса: можно ли начать бесплатно, нужен ли аккаунт и
  где запускается продукт. Они комбинируются с остальными условиями, сохраняются в URL и на mobile остаются
  внутри той же bottom sheet; карточки сразу показывают эти признаки простыми словами.
- Добавлен incremental duplicate gate с тестами и baseline: новые или выросшие повторы canonical URL,
  GitHub repository и normalized title блокируют CI. Weekly link audit продолжает отдельно ловить redirect-target
  duplicates. В baseline остаётся 21 историческая canonical group — это редакторский cleanup, а не скрытый долг.
- Пять MCP-карточек получили отдельный audit status. Четыре официальных server отмечены `runtime-pending`,
  архивный PostgreSQL reference — `blocked`; публичный snapshot не содержит raw tool descriptions или secrets.
  Добавлен sandbox-runbook и validator, который требует SHA-256 toolset hash перед `runtime-reviewed`.
- Фактический runtime scan не запускался: Docker/disposable sandbox на рабочей машине отсутствует, а запуск
  MCP packages или `mcp-scan` напрямую нарушил бы правило изоляции непроверенного кода.
- Commits `2963dc6`, `409a2f5` и `28f8398` отправлены в `origin/master`; catalog CI
  [#30458603501](https://github.com/PavelHopson/eclipse-library/actions/runs/30458603501) и production deploy
  [#30458596879](https://github.com/PavelHopson/eclipse-library/actions/runs/30458596879) завершены успешно.
  Independent smoke и live browser QA подтвердили `app.js?v=25`, 509 карточек, 98 результатов для
  «бесплатно + без регистрации + local/self-host», 5 MCP audit badges, 9 mobile filters и стабильный scroll.
- Добавлены шесть простых входов по задаче: local AI, автоматизация, исследование, security, media и
  commerce. Выбор работает совместно с поиском, типами и advanced filters; вся подборка кодируется в URL,
  восстанавливается после reload и копируется одной кнопкой без аккаунта.
- На mobile дополнительные фильтры открываются как доступная bottom sheet с явными действиями
  «Закрыть» и «Показать», live-счётчиком результатов, блокировкой фонового скролла только на время
  открытия и восстановлением обычного скролла после закрытия. Shared URL не раскрывает sheet автоматически.
- Deploy hardened: VPS RSA/ED25519 identity закреплена в GitHub secret `VPS_KNOWN_HOSTS`, workflow
  использует strict host verification, таймауты и три ограниченные попытки для `rsync`/SSH. Новый
  post-deploy smoke принимает только canonical HTTPS origin, сверяет `app.js` байт-в-байт с commit и
  валидирует live metadata/projects/README; contract покрыт unit tests и добавлен в quality workflow.
- Commits `7970b3b` и `d246337` отправлены в `origin/master`; catalog CI
  [#30456286673](https://github.com/PavelHopson/eclipse-library/actions/runs/30456286673) и hardened deploy
  [#30456287345](https://github.com/PavelHopson/eclipse-library/actions/runs/30456287345) завершены успешно.
  Независимый production smoke и live browser QA подтвердили `app.js?v=24`, 509 карточек, 6 task routes,
  22 проекта, 307 repository statuses, отсутствие horizontal overflow и стабильный scroll на 390×844.
- Исправлен mobile scroll-jump: scrollspy больше не вызывает вертикальный `scrollIntoView()` для
  горизонтальной ленты категорий на ширине до 960 px. Активная категория прокручивается только внутри
  самой ленты; проверено на 390×844 длинным скроллом каталога без возврата страницы наверх.
- Добавлен автоматический GitHub lifecycle layer для 307 repositories: GraphQL refresh получает только
  публичные `active` / `archived` / `disabled` статусы и даты активности, не публикует private metadata,
  descriptions или tokens. Snapshot проходит отдельную schema validation и обновляется weekly.
- UI сразу объясняет, что repository архивирован или отключён, показывает статус в resource/project cards
  и detail view, позволяет фильтровать каталог и не поднимает неподдерживаемые проекты в recommended sort
  и related materials. На первой проверке найдены 4 архивированных repository, включая OMC.
- Infrastructure recheck подтвердил внешний blocker публикации: `library` и `hub` резолвятся в
  `111.88.125.84`, а HTTPS/SSH port 22 недоступны; основной `eclipse-forge.ru` на GitHub Pages отвечает 200.
  DNS не менялся без подтверждённого нового VPS IP.
- Commit `44d34ae` отправлен в `origin/master`; catalog CI
  [#30451805813](https://github.com/PavelHopson/eclipse-library/actions/runs/30451805813) прошёл. После пополнения
  баланса VPS снова открыл ports 22/80/443, повторный deploy
  [#30451805450](https://github.com/PavelHopson/eclipse-library/actions/runs/30451805450) завершил `rsync` за 7 секунд.
  Production QA подтвердил `app.js?v=23`, 509 карточек, lifecycle-фильтр, отсутствие horizontal overflow
  и чистую browser console.
- MCP-рекомендации переведены в implementation: Sentinel получил `mcp add-preset`, OMC —
  `omc mcp-baseline` с синхронизацией Claude/Codex, AI Hub — ignored project-local generator без
  browser-side credentials и автоматического запуска servers. Implementation commits: Sentinel
  `91ccd07`, OMC `e7fe1e44`, AI Hub `60a0a56`.
- Во всех трёх проектах закреплены Filesystem `2026.7.10`, Context7 `3.2.5` и GitHub MCP `0.31.0`;
  Filesystem требует одну существующую directory, GitHub включается read-only + lockdown с ограниченными
  toolsets, а literal tokens не записываются в repository config.
- Карточки GitHub MCP, Filesystem MCP и Context7 обновлены фактическими командами и датой проверки.
  Runtime tool descriptions ещё не загружались: перед первым пользовательским запуском требуется ручной
  inspect или `mcp-scan`, поскольку даже официальный MCP metadata остаётся недоверенным вводом.
- Production workflow больше не зависит от отдельного блокирующего `ssh-keyscan`; SSH host принимается
  на первом реальном соединении через `StrictHostKeyChecking=accept-new` вместо небезопасного `no`.
- Commits `0650dbd` и `5986c30` отправлены в `origin/master`; catalog CI
  [#30446188360](https://github.com/PavelHopson/eclipse-library/actions/runs/30446188360) прошёл. Deploy
  [#30446354919](https://github.com/PavelHopson/eclipse-library/actions/runs/30446354919) дошёл до `rsync`,
  но VPS не ответил на SSH port 22; production и live responsive QA остаются незавершёнными.

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
