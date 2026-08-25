# Eclipse Library Roadmap

Последнее обновление: **25.08.2026**

### 2026-08-25 — task-first navigation and library guide

- [x] Главный экран перестроен вокруг понятных задач вместо типов ресурсов и внутренней терминологии.
- [x] Верхний уровень сокращён до трёх направлений: каталог, гайды и проекты; полный список разделов перенесён в доступную выдвижную панель.
- [x] Добавлен встроенный путеводитель с выбором маршрута, прямым переходом к поиску или задачам и возвратом фокуса после закрытия.
- [x] Гайды сгруппированы по темам, получили собственный поиск, пустое состояние и progressive disclosure по девять карточек.
- [x] Анимации ограничены `transform`/`opacity`, отключаются через `prefers-reduced-motion`; mobile viewport проверен без горизонтального скролла.
- [ ] После production deploy проверить реальные Web Vitals и поисковые формулировки, которые не дали результата, без сбора текста запросов или персональных данных.

### 2026-08-23 — production agent references, command presets and AI Office

- [x] Проверены official repositories Agents Towards Production, Prompt Engineering Guide и Awesome LLM Apps; добавлены evidence, license, risk и project mapping.
- [x] Community slash-like labels оформлены как 49 Eclipse presets, а не как выдуманные native-команды моделей; /blueprint, /stickynotes и /cutaway имеют rights/evidence gates.
- [x] Опубликован Anti-vibe Design Review: fake testimonials, отсутствие states/privacy и instruction-dependent flow отделены от нейтральных приёмов вроде Lucide, Bento или Inter.
- [x] Зафиксирована AI Office architecture: runtime остаётся source of truth, 2D/3D — только projection; secrets server-side, tools deny-by-default, actions через approval receipt.
- [ ] P1: подключить к Agent Office bounded Research, Build, QA/Security и Content rooms; каждая роль получает scope, budget, timeout и stop.
- [ ] P2: lightweight 3D floor как опциональный обзор после accessibility/performance QA; очередь и approvals всегда остаются доступной primary surface.
- Agents Towards Production имеет custom non-commercial license: только reference/clean-room design до письменного разрешения на коммерческий reuse.

### 2026-08-22 — community prompt library review and safe rollout

- [x] Community prompt dump разобран как reference source; ключевые проекты сверены с primary sources,
  опубликован evidence-first review вместо слепого импорта команд и рекламных claims.
- [ ] P0: registry-backed model router с `verifiedAt`, лимитом стоимости, fail-closed для неизвестных
  model id и без скрытого перехода на дорогую модель.
- [ ] P0: единый контур `read-only -> draft -> approval -> action -> receipt` для Growth OS,
  Telegram control plane, рекламы, публикаций и DM.
- [ ] P1: OpenReply sandbox только на тестовом Instagram Business/Creator account; worker, PostgreSQL,
  Redis, Meta review/rate limits и secrets остаются отдельными production gates.
- [ ] P1: selective ECC/Composio review по provenance, permissions, hooks, outbound endpoints и OAuth
  scopes; полная установка коллекций не является default.
- [ ] P1: deterministic Remotion/HyperFrames media contract — rights, preview, известная стоимость,
  reduced motion, frame QA и human approval до публикации.
- Legacy `@21st-dev/magic` не рекомендован для новой установки; использовать unified 21st.dev MCP.
- Неподтверждённые model names, prices и benchmarks не попадают в router без canonical audit.
- Запрещены remote install pipes, auto-login, расход credits, live ad writes и deploy без approval.

## Текущее состояние

- Animation Lab v4 работает как production workbench: 11 first-party standalone demos включают семь проверенных product-state паттернов и четыре новых reference-derived механики — Glass Navigation, Hologram CTA, Spatial Sidebar и Destination Card. Все новые демо click/touch-first, keyboard accessible, поддерживают reduced motion, sandbox preview и автономное скачивание без внешней сети.

- Owned Growth OS MVP завершён без Teamly: Eclipse AI Hub исполняет пять bounded ролей и выдаёт
  `growth.run.v1`, Eclipse Chat даёт tenant-scoped Command Room с budget, cancel, provenance и
  approval. В AI Hub готовы четыре локальных экрана Content Command Center: Hook Vault, Channel Analytics,
  public-only Competitor Tracker и evidence-backed Content Planner.

- Diagram Contract расширен на product workflows: Eclipse DnD Forge получил схему безопасного
  Azgaar Minimal JSON import с 8 MB gate, `pack.burgs`, очисткой, dedupe, preview и explicit confirm;
  Shotforge / Eclipse Media / Text2Image получили схему versioned storyboard handoff с 64 KB gate,
  exact 5-scene/15-second contract и ручными render/publish boundaries. Обе схемы static-only,
  используют локальные шрифты и отдельные desktop/mobile SVG без выдуманной автоматизации.

- `catalog/resources.json` — канонический structured catalog из 698 уникальных записей;
  `README.md` сокращён до документации и больше не является runtime-источником данных.
- `web/catalog-review.js` и `web/review.css` — собственный локальный editorial review-flow:
  четыре evidence gates, явный итог, bounded draft, clipboard fallback и downloadable v2 JSON packet.
  `scripts/review-preview.mjs` создаёт detached worktree на полном SHA, semantic summary и полный diff;
  apply к текущей ветке, commit, merge и deploy отсутствуют по контракту.
- `web/app.js` — command-first поиск, фильтры, detail view и guide viewer; structured adapter,
  карточки, editorial feed, progressive DOM и evidence-first Inspector вынесены в модули. При старте
  в DOM создаются только первые 36 карточек вместо всех 648; mobile Inspector открывается как sheet.
- Стартовый каталог теперь загружает compact catalog-summary вместо полного production index:
  initial JSON на 31% меньше compact index и примерно на 44% меньше прежнего pretty payload.
  Полные evidence, ограничения и исходное описание распределены по 16 deterministic shards;
  detail view имеет честные loading, error и retry состояния.
- `web/catalog-index.json` — production schema v2: 329 записей редакторски проверены,
  369 честно помечены `inferred`; даты хранятся отдельно от category.
- License layer: у 483 записей лицензия или условия нормализованы с evidence URL;
  215 остаются в детерминированной manual-review очереди.
- Agent policy: 615 записей доступны автоматическим consumers, 83 исключены fail closed;
  все 75 grey-ресурсов скрыты от recommendations, direct install запрещён для всех записей.
- `web/api/v1/` — versioned static exports для full catalog, agents, Eclipse CRM и Eclipse AI;
  consumers больше не должны читать README.
- `web/star-technology-registry.json` и `web/registry.html` — отдельный read-only decision
  registry для Eclipse Market, Eclipse CRM и Eclipse AI: 26 решений с lifecycle, owner, risk, benchmark,
  evidence, fallback и следующим шагом; runtime health намеренно остаётся отдельным snapshot.
- `web/link-health.json` — безопасный публичный snapshot weekly-аудита: доступность ссылки
  показывается отдельно от редакторского доверия и не считается security endorsement.
- Deploy: GitHub Actions → VPS/Caddy из ветки `master`.
- Production синхронизирован с controlled skills rollout commit `63fed1c`: quality
  [#32372130649](https://github.com/PavelHopson/eclipse-library/actions/runs/32372130649)
  и deploy [#32372130687](https://github.com/PavelHopson/eclipse-library/actions/runs/32372130687)
  от 20.08.2026 успешно завершены. Production manifest и HTTP smoke подтвердили 648 материалов,
  569 agent-safe записей, 79 policy exclusions, 331 repository, 42 guide и 26 решений Eclipse.
  Последний полный сетевой audit от 18.08.2026 проверил 665 уникальных URL: 0 broken и 0 unsafe;
  новые ссылки пока покрыты редакторской проверкой и offline identity audit, не live network sweep.

## Приоритеты

### P0

- [x] Восстановить deploy на VPS: повторный run 24.07.2026 прошёл SSH setup и rsync.
- [x] Убрать TOFU для production SSH: pin host key через `VPS_KNOWN_HOSTS`, включить
      `StrictHostKeyChecking=yes`, bounded retry и post-deploy smoke по точной версии assets/data.
- [x] Добавить scheduled link checker с redirect resolution, retry и честным разделением
      `broken` / `unavailable` / `unknown` / rate-limited сайтов.
- [x] Внедрить Chat → Work → Codex operating model: versioned `eclipse.handoff.v1`, явные
      permissions/stop conditions, session tree и еженедельный read-only evidence audit без write,
      install, commit, push, deploy или внешних действий.

### P1

- [ ] Hopson Sentinel / Eclipse Chat: провести P0/M 30-дневный Public Monitoring Digest pilot —
      один niche, пять allowlisted публичных источников, baseline/change detection, citations,
      confidence, budget/timeout и approval card; никаких account cookies, autonomous outreach или
      отправки отчёта без человека. Критерии выхода: precision, false-positive rate, review time и cost.
- [ ] Text2Image / Shotforge / Eclipse Media: собрать P1/S Product Photo Pack — только owned/consented
      assets, ограниченные light/background/crop edits, side-by-side preview, product-identity change
      warning, provenance receipt и ручной export; запрещено улучшать товар до несоответствия продаже.
- [ ] Shotforge / Eclipse Media / Growth OS: собрать P1/M Creative Variant Pack — problem/demo/FAQ
      angles, existing storyboard handoff, subtitle safe zones, Claim Auditor, budget и manual publish;
      эффективность измерять по принятым вариантам и client metrics, а не обещать заранее.
- [ ] Growth OS / Eclipse Chat / Eclipse Media: добавить P1/M Longform Repurposing с permission gate,
      transcript timestamps, speaker attribution, semantic-change warning и rights review; чужие видео
      не скачивать и не перерабатывать без разрешения владельца.
- [ ] Eclipse Forge Landing / Eclipse AI Hub: добавить P1/M Lead Calculator/Quiz template — versioned
      formulas, ranges instead of false precision, keyboard flow, server validation, consent and anti-spam;
      не использовать для медицинских, юридических или кредитных решений.
- [ ] Eclipse Chat / Eclipse AI Hub: собрать P1/M Evidence FAQ Assistant — tenant isolation, allowlisted
      knowledge base, citations/freshness, `не знаю`, prompt-injection fixtures, PII redaction, rate limit
      и human escalation; изменения заказов, платежи и обещания условий остаются отдельными actions.

- [ ] Sentinel / Eclipse AI Hub / oh-my-claudecode: провести P1/M Verifier Pipeline benchmark
      на synthetic fixtures с известными дефектами — несколько bounded candidates, независимый
      read-only verifier, disagreement report, budget/timeout и human approval; не считать claims
      LLM-as-a-Verifier доказанными до воспроизводимого сравнения с single-pass baseline.
- [ ] Eclipse AI Hub / Sentinel: реализовать P1/M Local Model Hardware Doctor — read-only RAM/VRAM/disk
      scan, explainable compatibility profiles и короткий benchmark Magnitude/Ornith fixtures;
      загрузка и установка моделей из Library остаются запрещены.
- [ ] Text2Image / Eclipse Media / Shotforge: добавить P1/S transparent-asset и poster workflow —
      alpha preview, rights/provenance metadata, safe PNG/WebP export, 1:1/4:5/9:16 templates и
      human approval перед публикацией.
- [ ] Educator-AI: собрать P1/S Claude fundamentals и Language Coach pilot tracks с rubric,
      privacy warning, local progress и teacher/human review.

- [x] Снизить license/terms backlog с 279 до 240: вручную проверить 20 GitHub NOASSERTION
      repositories и 19 owned Eclipse Library records; публиковать evidence URL, не выдавать
      custom/non-commercial/source-available условия за open source и не разрешать direct install.
- [x] Закрыть P1 license queue: проверить 14 приоритетных записей и снизить общий backlog
      с 240 до 226. Отсутствие публичного grant у SkillUI/Atlas3D и запрет на извлечение
      BuildCores зафиксированы как evidence-backed ограничения, а не как разрешение на reuse.
- [x] Исправить Coursera/Learn Harness audit semantics: Learn Harness подтверждён HTTP 200;
      Coursera честно маркируется restricted при fetch failure с датой повторной проверки 17.09.2026.
      Broken Apple Hide My Email URL заменён актуальной официальной статьёй.
- [x] Выполнить первый cross-project rollout: AI Hub получил opt-in GPT-5.6 Responses router,
      Sentinel — fixed model profiles, Eclipse Media — dry-run Music 3 benchmark contract,
      Educator-AI — локальный app-building learning track. Production canary/live model runs
      остаются отдельными eval/deploy gates.
- [ ] Eclipse AI Hub / Sentinel / oh-my-claudecode: провести benchmark GPT-5.6 Sol/Terra/Luna
      на 20–30 реальных fixtures с quality, latency, token cost, budget cap и fallback; DeepSeek Harness
      исследовать отдельно в pinned disposable sandbox без community plugins и production credentials.
- [ ] Eclipse Media / Shotforge: провести MiniMax Music 3 benchmark только на оригинальных или
      public-domain lyrics; сохранить revision, rights provenance и AI disclosure, проверить custom
      license, GPU budget и запрет voice impersonation до продуктовой интеграции.
- [x] Educator-AI: адаптировать Google AI for App Building в локальный beginner path с обязательным
      Eclipse production-readiness checklist; не обещать бесплатный сертификат или русскую локализацию
      без проверки текущего Coursera checkout.

- [x] Перевести Library с README parsing на canonical `catalog/resources.json`, добавить schema v2,
      normalized license evidence, `addedAt`, agent-safe exports, fail-closed install policy,
      локальные WOFF2 fonts и разбить frontend runtime.
- [x] Снизить initial catalog payload через deterministic summary/detail split, добавить
      sourceHash validation, retryable lazy loading, CI freshness gate и post-deploy smoke;
      убрать бесконечную hero-анимацию и уважать prefers-reduced-motion при scroll.

- [x] Добавить `AI Landing Sprint`: безопасный путь brief → evidence/rights → wireframe → AI drafts → code → claims/QA/security → human approval → deploy; добавить отдельные verified-карточки Krea, Google Nano Banana Pro и Kling AI 3.0 с актуальными pricing, rollout, privacy, IP и biometric boundaries.

- [x] Добавить доказательный Eclipse Growth OS: разобрать SMM-шаблоны без рекламных claims,
      подготовить заполненную основу бренда, 30-дневный pilot, lead magnets, KPI, approval gate,
      Claim Auditor, семь copy-ready промптов и task-first маршрут «Продвигать бренд».
- [x] Проверить Teamly.to как отдельный proprietary SaaS и отказаться от платного pilot:
      No Plan оказался configuration-only, checkout и integrations не начинаются; Cells, роли,
      activity stream и approval gates остаются только архитектурным reference.
- [x] Eclipse Chat / AI Hub: собрать owned Growth OS MVP без зависимости от Teamly — один bounded
      workflow `Finding -> Brief -> Draft -> Claims review -> Approved artifact`, observable run log,
      stop/pause, budget, provenance и deny-by-default approval; без connectors и публикации.
- [ ] Eclipse Chat / AI Hub / Library: расширить owned Growth OS до Content Command Center P1/L —
      Hook Vault, normalized channel analytics, public-only Competitor Tracker, Planner, Content Plan
      и Trends; source/rights/provenance обязательны, публикация и account access только после approval.
      Hook Vault, normalized analytics, public-only Competitor Tracker и Planner готовы;
      Content Plan и Trends остаются в работе.
- [ ] Growth OS / Library / Chat / Sentinel: реализовать Automation Playbook P1/L первыми десятью
      bounded workflows — official news scanner, draft + repurposing, Content Plan, SEO audit,
      weekly performance review, competitor/industry monitor, survey/FAQ synthesis, voice note → tasks,
      consented testimonials и weekly review. Каждый workflow обязан иметь evidence, budget, timeout,
      cancel, human approval для внешнего действия и versioned receipt; browser cookies, production
      secrets, autonomous publish/send/delete/payment запрещены.
- [x] Eclipse Library: провести P1/S adaptive navigation pilot — сохранить task-first information
      architecture, добавить спокойный segmented active state на mobile и moving active rail в desktop
      sidebar. Проверены touch, 390 px overflow, устойчивый scroll и reduced motion; liquid/blob/orbit
      effects не внедрены.
- [ ] Eclipse Chat / AI Hub / Sentinel / DnD Forge: провести P1/M sidebar interaction audit —
      `aria-expanded/current`, mobile drawer/focus management, long labels и expand/collapse без
      per-frame `height`/blur. Использовать CSS grid, WAAPI или FLIP после Performance evidence.
- [ ] Eclipse Forge Landing: собрать P2/M accessible project accordion для 6–8 флагманов —
      click/focus/touch selection, stable DOM, FLIP + opacity, static reduced-motion fallback и собственная
      композиция. Hover-only social snippet и чужие assets/code не копировать.
- [ ] Eclipse AI Hub / Growth OS: встроить Editor Stylist v2 P1/S — три понятных режима,
      locked facts, voice samples, `claimsChanged`, semantic diff и human approval; без detector bypass.
- [x] Eclipse Library: завершить owned Human Review pilot P1/M — v2 packet, обязательный полный
      commit SHA, editorial path allowlist, detached worktree, semantic summary, полный diff,
      SHA-256 evidence и write-once approve/reject через CLI готовы; auto-apply/merge/deploy отсутствуют.
- [ ] Landing / Chat / AI Hub: адаптировать Library review protocol P1/L к собственным schemas и
      disposable previews; не переносить решение вслепую и не расширять path allowlist без threat model.
- [ ] Eclipse AI Hub / Sentinel / oh-my-claudecode: провести Rejudge benchmark P1/M на synthetic
      fixtures с известными дефектами — только read-only reviewers, provider allowlist, budget/timeout,
      redacted logs и сравнение с одним сильным reviewer; `--unsafe`, `--full` и auto-fix запрещены.
- [ ] Eclipse Media / Shotforge / Text2Image: добавить C2PA verification-only Provenance Passport
      P1/M со статусами valid/invalid/missing/unsupported, локальной проверкой и сохранением report;
      signing, key custody, rotation и revocation вынести в отдельный security project.
- [ ] Eclipse Library / Landing: провести read-only Claude SEO audit P1/M публичных URL с evidence,
      затем применять исправления отдельными PR и измерять Search Console/conversion.
- [ ] Eclipse Media / Shotforge: проверить Desktop Creator Kit P2/S — ShareX local-only,
      QuickLook без plugins, Everything без servers/history и один FocuSee public-demo benchmark;
      recordings с secrets, client data и automatic cloud upload запрещены.
- [ ] Eclipse Chat / AI Hub / Landing: провести UI pattern pilot P2/M с TweakCN и одним
      Magic UI/SmoothUI component — semantic tokens, WCAG, reduced motion, mobile и performance gate;
      Unlumen/NeoBrutalism остаются только reference.
- [ ] Hopson Sentinel / AI Hub Security: провести Strix benchmark P1/M только в disposable vulnerable
      lab — pinned source/images, egress и target allowlist, isolated LLM key, ручная проверка findings;
      remote install script, production targets и automatic fixes запрещены.
- [ ] Eclipse AI Hub / Educator-AI: внедрить AnyDoc как изолированный document-intake P1/M —
      pinned Rust dependency, magic-byte/type/size/page/time limits, no-network parser, zip-bomb и
      malformed-file fixtures, запрет macros/embedded execution и гарантированное удаление temp files.
- [ ] Eclipse Chat / AI Hub / Sentinel: спроектировать собственный Agent Memory P1/L по reference
      TencentDB Agent Memory — tenant ACL, retention/delete, provenance, synthetic retrieval benchmark;
      Waku Agent, OpenWorker и Cloudflare OS использовать только как architecture/approval reference.
- [ ] Eclipse AI Hub / Sentinel / oh-my-claudecode: добавить NVIDIA Build и OpenCode Zen в единый
      provider benchmark P1/M — без production routing, на обезличенных fixtures, с budget cap,
      retention/Terms check и отдельной фиксацией временных free model IDs.
- [ ] Hopson Sentinel / Eclipse Chat / Educator-AI: провести isolated NemotronLabs VoiceChat
      benchmark P1/L — отдельный 80 GB GPU sandbox, RU/EN interruptions и tool accuracy, максимум
      пять read-only tools, consent/retention/approval; production actions и voice cloning запрещены.
- [ ] Eclipse Media / Educator-AI / DnD Forge: собрать legal-first audiobook spike P1/M на
      public-domain тексте — sandbox parsers, type/size/page limits, встроенный голос, без voice
      cloning; измерить русский TTS, VRAM, скорость и ошибки до собственного pipeline.
- [ ] Eclipse AI Hub / Text2Image / Eclipse Media: добавить Grok Imagine Quality Mode в provider
      benchmark P1/M — official model id, цена, retention, rights и единый набор text/edit/reference
      prompts; рекламное название «Imagine Image 2.0» и текущий rank не считать устойчивыми фактами.
- [ ] Провести первый 30-дневный brand pilot: зафиксировать Landing/channel baseline, выпустить
      12 evidence-backed материалов, измерить product visits, qualified leads, conversion и effort,
      затем принять решение continue/change/stop по каждому формату. Начинать только после owned MVP.
- [x] Проверить и добавить Operational Agent Stack: Claude Ads, Fincept Terminal, Vibe Trading,
      Camofox Browser, HyperFrames и Open-Generative-AI с лицензиями, trust/risk границами,
      проектной применимостью и понятным порядком внедрения.
- [ ] Eclipse AI Hub / Chat / Educator-AI: провести isolated PPT Master proof-of-concept на
      публичном документе и фирменном template; после claim/copyright/provider review спроектировать
      собственный `DeckJob` flow `source -> outline approval -> render -> preview -> export`.
- [ ] Eclipse Media: спроектировать legal-first Media Intake и TV navigation по UX-reference
      YTSage/Reiverr — allowlisted sources, явное подтверждение прав, без browser cookies, arbitrary
      commands, Torrent-Stream и скрытого AGPL-кода.
- [x] Запустить P0 внедрение HyperFrames в Eclipse Media как локальный release-video pipeline;
      публикация остаётся ручной после human review.
- [x] Завершить HyperFrames P0: проверить integrity exact `hyperframes@0.7.88`, зафиксировать
      lockfile, пройти unified check и подтвердить реальные MP4 renders 16:9, 9:16 и 1:1.
- [x] Реализовать read-only Ads Audit в Eclipse AI Hub без write-scopes, автоприменения
      изменений и хранения рекламных токенов в клиенте; добавить approval preset в Chat и
      notify-only spend anomaly detector в Sentinel.
- [x] Подключить Sentinel browser policy к реальному env-gated `BrowserRead`: только disposable
      create/snapshot/stats/close, public allowlist и untrusted-content boundary; Camofox runtime
      не устанавливать до отдельного container/privacy/egress review.
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
- [x] Stage 13 — добавить редакционную ленту «Новое и проверенное», решение, целевой проект и риск прямо на карточку, decision summary в detail view, сортировку по `addedAt` и убрать дублирующую desktop-навигацию.
- [x] Stage 14 — карточка, редакционная лента и progressive DOM вынесены из `web/app.js`; live DOM ограничен текущей порцией по 36 результатов, unit regression фиксирует budget, desktop/mobile browser QA обязателен перед публикацией.
- [x] Stage 15 — Knowledge Navigator: command-first hero, спокойные decision-first cards, desktop master-detail Inspector, mobile bottom sheet, fixed bottom navigation, keyboard shortcut `Ctrl/Cmd+K`, reduced motion и safe-URL regression без scroll listener.
- [x] Stage 16 — Search & Trust Workspace: добавлены RU/EN synonyms и tolerance
      к одной опечатке, объяснение расширенного запроса, сохраняемый режим «Карточки / Компактно»,
      Trust Passport в Inspector и скрытый scrollbar без отключения wheel, touch или keyboard scroll.
      Direct Edge visual QA пройден на 1434×934 и 390×844: Inspector прокручивается без видимой
      полосы, mobile sheet возвращает фокус, страница не прыгает вверх и horizontal overflow отсутствует.
- [x] Stage 17 — Eclipse Technology Registry: отдельный operational workspace с 26 решениями
      для трёх независимых продуктов, product/search/lifecycle filters, evidence, risk, benchmark,
      approval policy и stable deep links. Неподтверждённый Ollama benchmark не считается production;
      external sources остаются reference/manual-only, grey sources fail closed, direct install запрещён.
      Edge QA пройден на 1440×900, 820×1000 и 390×844 без overflow, scroll jump, console errors и DOM XSS.
- [ ] Eclipse Webclaw / Kwork #18: benchmark Lightpanda как optional beta JS-renderer против
      Playwright на representative page set — success rate, extraction quality, p95, RAM, robots/rate limits;
      telemetry off, pinned image/source и AGPL review обязательны.
- [x] Eclipse Webclaw / Kwork #18, Phase 1: собственный static allowlisted connector registry,
      capability/data-boundary/provenance contract, read-only `doctor` в REST и MCP и fail-closed
      local → cloud fallback с отдельным explicit opt-in. Реализовано в Eclipse-Claw
      [PR #4](https://github.com/PavelHopson/Eclipse-Claw/pull/4), merged в `main` как `51a5d6c`;
      до отдельного release/deploy не считать production.
- [x] Eclipse Webclaw / Kwork #18, Phase 2A: public-only egress/SSRF policy в transport DNS
      resolver и redirects, untrusted content boundary для MCP/REST/LLM, robots wildcard/
      Allow/Disallow/Crawl-delay, response/concurrency limits, loopback/token server policy,
      explicit cookies/proxy-DNS/CDP gates и redacted structured audit events. Реализовано в
      [PR #5](https://github.com/PavelHopson/Eclipse-Claw/pull/5), merged как `3ef26a8`;
      PR CI [#30743170976](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30743170976)
      и post-merge main CI
      [#30743202888](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30743202888) зелёные.
- [x] Eclipse Webclaw / Kwork #18, Phase 2B: отдельные authenticated OS/container workers для
      browser/LLM, fail-closed required isolation, durable privacy audit с rotation/retention/read
      policy, fixed public-page + hostile-content benchmarks и attested release contract. Реализовано
      собственным кодом в [PR #6](https://github.com/PavelHopson/Eclipse-Claw/pull/6), merged как
      `c5c90a1`; release-патч с честным optional Homebrew publish и portable fixture checksums merged
      через [PR #7](https://github.com/PavelHopson/Eclipse-Claw/pull/7) как `d19a803`. Supply-chain и
      installer hardening merged через [PR #8](https://github.com/PavelHopson/Eclipse-Claw/pull/8)
      как `3502bdb`: Docker bases pinned by digest, core/CDP Trivy scan и безопасный checksum-verified
      installer source. PR CI `30750813826` и post-merge main CI `30750946382` зелёные; release workflow
      [#30751080889](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30751080889) выпустил
      [v0.4.2](https://github.com/PavelHopson/Eclipse-Claw/releases/tag/v0.4.2). RustSec не находит
      известных уязвимостей; после удаления `fxhash` остаётся только Low-risk unmaintained `ttf-parser`.
      Независимый runtime pentest не выполнен, npm package `0.1.4` не опубликован без `NPM_TOKEN`.
      Сам Agent Reach и primary-account browser cookies в production не используются.
- [ ] Eclipse Media / Educator-AI: isolated transcript-first video understanding spike по паттерну
      Claude Video — allowlisted URLs, size/time limits, scene frames, timestamp citations и только
      opt-in Whisper fallback без client/private media.
- [ ] Eclipse Media / DnD Forge / Shotforge: server-side Gemini API Lyria 3 Clip/Pro spike с
      credits/pricing, RU/EN quality, SynthID/provenance, content-rights gate; consumer Flow Music UI
      использовать только как UX reference, не автоматизировать.
- [ ] oh-my-claudecode / ai-setup / Sentinel: pilot Skillcheck на трёх публичных skills и synthetic
      tasks с pinned model/config, raw JSON и повторными trials; private instructions и code не отправлять.
- [x] Eclipse AI Hub / Sentinel / oh-my-claudecode: реализовать единый network-gated direct Kimi K3
      benchmark harness с отдельными synthetic suites, фиксированным official endpoint/model,
      двойным execution gate и отчётом без raw prompts/outputs.
- [ ] Запустить все direct Kimi K3 suites дважды с отдельным low-limit test key — quality,
      p50/p95 latency, tokens, cost и long-context stability; до этого Kimi не добавлять
      в production allowlist.

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

- [ ] Educator-AI: создать P2/S accessible Computer Lab по мотивам CraftingTable — deterministic
      CPU/memory lessons, keyboard controls, error states и reduced-motion fallback.

- [ ] Eclipse AI Hub Model Registry: проверить Soup CLI в isolated GPU lab P2/L на одном public
      dataset и небольшой open model — pinned dependencies, network deny-by-default, license gate,
      holdout evaluation, resource budget и provenance; не запускать training на основной машине.

- [ ] Eclipse AI Hub / Sentinel: проверить Razer AIKit v0.6.0 в hardened isolated NVIDIA GPU lab
      P2/L: pinned image digests, auth/network isolation, public model/dataset и benchmark против
      текущего baseline; официальный Compose нельзя выставлять в сеть без переработки defaults.
- [x] Eclipse Library: провести первый Diagram Design pilot на публичной architecture fixture по
      Eclipse Diagram Contract v1 — добавлены responsive static HTML/SVG, local tokens/fonts, fidelity
      ledger, a11y/reduced-motion и automated no-script/no-remote-runtime gate.
- [x] Eclipse AI Hub / Hopson Sentinel: опубликовать первую controlled rollout wave Diagram Contract
      с model-provider readiness boundary и capability/approval boundary; диаграммы документируют
      существующие policy, не добавляют runtime permissions, provider integration или execution.
- [ ] Eclipse Forge docs/products: распространить Diagram Contract P1/M на остальные проекты после
      human visual review AI Hub/Sentinel wave; внешний skill использовать только с pinned commit и bounded diff.
- [ ] Hopson Sentinel / Eclipse Chat / Media: проверить wearable assistant flow P2/L без покупки
      Oakley Meta Vanguard — phone/headset prototype, explicit recording indicator, consent, retention,
      delete и offline fallback; Meta/fitness integration только после API, Terms, privacy и DPA review.
- [x] Стабильные deep links на каждую запись.
- [x] Freshness review — UI различает недавно проверенные карточки и
      записи без даты, а weekly snapshot показывает `ok` / `restricted` / `unavailable` /
      `unknown` / `broken` / `blocked`; archived repository metadata показывается отдельным lifecycle status.
- [x] Автоматический GitHub metadata refresh без доверия к stars как quality score.
- [x] Отдельные landing routes для skills, MCP, models, prompts, courses и security.
- [ ] Eclipse Library: собрать read-only RSS intake P2/M по reference FreshRSS — allowlist
+      official feeds, sanitization, provenance, dedupe и ручной editorial approval; feed content
+      считать untrusted и никогда не публиковать автоматически.
+- [ ] Educator-AI / Eclipse DnD Forge: проверить Kiwix/ZIM offline knowledge packs P2/M на
+      маленьком архиве с явной content license, snapshot date, attribution и controlled updates.
+- [ ] Eclipse Media / Chat / AI Hub: провести Sia Storage S3d benchmark P2/M на synthetic data —
+      client publisher/checksum, key recovery, deletion, durability, latency, jurisdiction и exit plan;
+      единственную production-копию и персональные данные не переносить.
+- [ ] Hopson Sentinel: спроектировать read-only Home Assistant adapter P2/L — отдельный test
+      instance, entity allowlist и audit; physical write actions только после отдельного threat model,
+      explicit confirmation и emergency stop.
+- [ ] Sentinel / oh-my-claudecode: сравнить Jcode memory/swarm/resume на synthetic repository,
      собранном из pinned source с отключёнными telemetry, sponsored discovery, hooks, MCP и self-dev.
- [ ] Eclipse DnD Forge: отдельно аудировать и адаптировать три MengTo GameDev skills —
      `author-game-levels`, `test-playable-web-games`, `build-game-audio-feedback`; коллекцию целиком не ставить.
- [ ] Eclipse DnD Forge: проверить собственный system-discovery flow P2/M по taxonomy reference NRI Atlas —
      жанр, сложность, длительность и размер группы; descriptions и ratings создать самостоятельно,
      потому что у reference repository нет разрешающей лицензии.
- [ ] Eclipse Chat: провести competitor benchmark Echoed P2/S на одном устройстве — startup, idle RAM,
      voice latency, task-board flow и privacy disclosures; claims владельца не принимать без измерений.
- [ ] Hopson Sentinel: сделать read-only Windows Privacy Doctor P2/M по идеям O&O ShutUp10++ —
      только объяснимый diff, official-source evidence, restore point и ручной approval; не запускать
      proprietary utility и не менять Registry автоматически.
- [x] Educator-AI: адаптировать официальный GitHub Hello World в интерактивный практический
      onboarding repository → branch → commit → pull request → merge с локальным прогрессом,
      self-check, EN/RU copy и без обязательного API key.

## Changelog

### 2026-08-23 — Production agents and AI Office intake

- Каталог расширен до 698 записей: три проверенных external references и два owned editorial assets — command presets и Anti-vibe Design Review.
- Добавлен production guide с clean-room license boundary, threat model и rollout по проектам.
- Runtime/index/API exports пересобраны; blocking validators и 21 catalog tests прошли.
- В Eclipse Chat начат first-party AI Office projection: пять Growth-ролей показывают фактические states и provider/model, но не получают новых tools или external actions.

### 2026-08-22 — Animation Lab navigation and conversion pack

- По двум Instagram-подборкам собраны четыре оригинальных Eclipse Forge demo: Glass Navigation,
  Hologram CTA, Spatial Sidebar и Destination Card; сторонний код, графика и branding не копировались.
- Hover-only механики заменены click/touch-first управлением, добавлены Escape, outside click,
  focus trap для dialog, локальная validation, mobile layouts и reduced-motion fallback.
- Manifest и blocking validator переведены на v4 / 11 demos; production asset cache key обновлён до v4.

### 2026-08-22 — Seven AI service offers review

- Проверено видео Web3nity `Uk7HHfF9n2Q`: официальные metadata, главы и русские автосубтитры
  разобраны полностью; семь сценариев отделены от неподтверждённых обещаний дохода и цены `$1,200`.
- Добавлены verified-карточки видео и Abacus.AI Agent/AppLLM с official pricing, credit mechanics,
  model-specific commercial-rights boundary и запретом production accounts/autonomous publishing.
- Подготовлен first-party implementation guide: Product Photo Pack, Creative Variant Pack,
  rights-safe repurposing, existing AI Landing Sprint, Lead Quiz, Evidence FAQ и P0 Monitoring Digest.
- В roadmap зафиксированы шесть bounded cross-project pilots с metrics, evidence, consent,
  provenance, tenant isolation и human approval; первым выбран 30-дневный public monitoring pilot.

### 2026-08-21 — Agent, learning и media radar

- Добавлены 18 проверенных записей: models, agent frameworks, learning products, media workflows,
  prompts и privacy-sensitive tooling; MarketingSkills обновлён без дубликата, PC-Tuning повторно не добавлялся.
- Рекламные claims разделены с фактами: Huihui, Reverse API Engineer и Ox Alpha опубликованы как
  grey/reference с fail-closed agent policy; detector bypass и неавторизованный reverse engineering не рекомендуются.
- Добавлен подробный guide `guides/august-2026-agent-learning-media-radar.md` с решениями now,
  roadmap, reference и no-use, проектами, ценностью, сложностью, рисками и следующими шагами.
- Production catalog: 672 human-visible, 590 agent-safe, 303 verified, 369 inferred,
  214 license/terms records остаются в manual review; direct install запрещён для всех записей.

### 2026-08-21 — Animation Lab full cinematic 3D system
- Единый cinematic 3D contract распространён с Vault Dial на остальные шесть first-party demo без унификации их поведения: Upload Queue получил spatial file stack, AI Generation — reactor core, OTP Auth — code-cell depth, Guardian — layered companion, Orbit Upload — transfer portal, OTP Glass — translucent layers.
- Pointer parallax ограничен desktop `pointer:fine`; mobile и reduced-motion уплощают композицию, сохраняя focus, error, success и primary action. Regression-тест теперь требует depth/readiness contract для всех семи demo.
- Playwright QA пройден на 900×760, 390×844 и OS reduced motion: 7/7 demos, ключевые interaction paths, нулевой horizontal overflow, console/page/request errors отсутствуют.
### 2026-08-21 — Vault Dial cinematic 3D
- Flat Vault Dial concept rebuilt as an Eclipse-owned 3D security interaction: perspective chamber, direct-manipulation mechanical dial, three retracting pins and bounded door opening.
- Pointer drag, wheel, keyboard arrows, Enter/Space and the primary Unlock action share one state machine with visible idle, checking, error and open feedback.
- Mobile, reduced motion, numeric input sanitization, focus visibility and deterministic QA harness are covered. Browser QA passed at 900×760 and 390×844 with zero page/console/request errors.
- Security boundary remains explicit: this is a local visual concept and does not replace server-side validation, rate limiting, access control or audit logging.

### 2026-08-21 — Animation Lab production workbench
- Витрина motion-паттернов преобразована в тихий product/developer workbench с 7 оригинальными demos, device preview, state selector, speed, accent/glow/density, accessibility toggles, focus mode и deterministic timeline.
- Upload Queue получил real file input/drop, pause/retry/cancel/error, progress и FLIP reorder; добавлен AI Generation с честными stages/event log/checkpoint retry; OTP Auth Kit получил paste/edit/resend/loading/error/success/expired.
- Export kit выдаёт sandboxed embed, React state contract, tokens и blocking QA checklist. Direct install отсутствует; standalone files не подключают remote scripts и не выполняют сетевых запросов.
- Manifest обновлён до v3, regression suite проверяет 7 demos, minimal iframe sandbox, reduced motion, deterministic query harness, отсутствие remote/unsafe execution и wiring всех файлов.
- Browser QA на 1440×900, 1280×800 reduced-motion и 390×844 проверил все 7 standalone demos, live progress, state/device/export flows и runtime errors. Найден и исправлен mobile grid min-content overflow 1086→390 px; regression-test закрепляет shrink contract. Defensive XSS test подтвердил output encoding опасного file name.

### 2026-08-21 — Animation Lab motion remediation
- После пользовательского QA витрина полностью перестроена из generic promo-grid в operational
  motion workbench: compact selector, одна крупная live-сцена, replay/open/download и responsive mobile rail.
- Исправлен корень остановки autoplay: `Number(URLSearchParams.get('t'))` превращал отсутствующий
  параметр в frozen frame 0. Deterministic mode теперь включается только при реальном `?t=N`;
  regression-тест блокирует возврат ошибки.
- Все пять прежних demos переработаны ближе к behavioral references, добавлен шестой отдельный
  `OTP Glass`. Демо остаются first-party, автономными, sandboxed, без внешнего кода и сетевых запросов.
- Edge headless QA выполнен на 1440×1000 и 390×844; отдельные autoplay-кадры на 0.15 и 2.6 секунды,
  а также deterministic кадры `t=0`/`t=12` имеют разные SHA-256, что подтверждает реальное движение.


### 2026-08-21 — Eclipse Animation Lab MVP
- Добавлена отдельная Animation Lab витрина с шестью оригинальными first-party demos: Upload Queue,
  Orbit Upload, Reactive Login, Accessible OTP, Vault Dial и OTP Glass. Preview изолирован sandboxed iframe;
  каждое демо можно повторить, открыть отдельно и скачать как автономный HTML без внешних requests.
- Motion contract закрепляет transform/opacity hot path, deterministic `?t=N`, forced `?reduce=1`,
  keyboard/touch paths и reduced-motion fallback. Social screenshots остаются reference и не копируются.
- В каталог добавлены Vercel Web Design Guidelines, 21st.dev Agent Skill и Vivid Sites. Taste Skill,
  Design.md и Microsoft Playwright CLI уже существовали и не дублировались. 21st marketplace требует
  per-component license review; Vivid assets нельзя перепаковывать в конкурирующую библиотеку.
- P1 rollout: Upload Queue для Chat/Media/AI Hub, long-job progress для Media/Shotforge/Text2Image,
  Accessible OTP для Chat/DnD после auth security review. Reactive Login и Vault Dial оставлены reference.

### 2026-08-20 — adaptive motion navigation pilot
- В Library внедрён собственный motion-паттерн на основе присланных segmented dock/sidebar
  references: mobile view switcher получил общий moving indicator, desktop sidebar — один shared
  active rail вместо независимых скачущих подсветок.
- Все переходы ограничены compositor-friendly `transform`/`opacity`, карточки получили короткое
  hover elevation без новой runtime-зависимости; `prefers-reduced-motion` сохраняет статичное состояние.
- Edge QA пройден на 1440×1000 и 390×844: нет console/page errors и horizontal overflow, mobile
  indicator перемещается между вкладками, scroll остаётся на 2400 после scrollspy и не прыгает наверх.
- Добавлен regression-контракт motion-разметки, runtime и reduced-motion fallback; asset cache обновлён
  до `styles.css?v=29` и `app.js?v=42`.
- Commit `f1018fb` отправлен в `origin/master`; validation [#32418671308](https://github.com/PavelHopson/eclipse-library/actions/runs/32418671308) и deploy [#32418671302](https://github.com/PavelHopson/eclipse-library/actions/runs/32418671302) завершены успешно; production вернул HTTP 200 с новыми asset versions.

### 2026-08-20 — automation playbook and frontend motion references
- Каталог вырос до 651 материала: добавлен first-party Eclipse Automation Playbook на 45 сценариев
  и две community reference-карточки Prozavlly/FrontendJoe. Social snippets не считаются reusable
  components: canonical repository/license не подтверждены, direct install и копирование запрещены.
- Опубликован приоритизированный cross-project rollout: десять P1 bounded workflows для Growth OS,
  evidence/approval/receipt contract, отдельные ограничения для legal/financial/file actions и метрики.
- Статичные navigation/footer/sidebar/accordion references разобраны по accessibility и performance:
  в roadmap попали segmented dock, sidebar audit и accessible FLIP accordion; liquid/blob/orbit оставлены
  reference. MP4 не содержит демонстрации движения, поэтому timing и 60 fps по нему не подтверждались.

### 2026-08-20 — controlled skill intake and owned Voice OS rollout
- Каталог вырос до 648 материалов: добавлены skills.sh, собственный Eclipse Skill Intake,
  Reference Board System, Vengeance UI, Skiper UI, AnimMasterLib, Buildcoolshit, Vlipsy,
  Oceon Form Vault, Vibehub Academy и Jarvis Claude Code Guide. Существующие shadcn/ui,
  Refero Styles и tweakcn повторно не добавлялись; ChatPlace исключён как tracking/lead redirect.
- Добавлен fail-closed skill `eclipse-skill-intake`: canonical source, pinned revision, license,
  scripts, dependencies, telemetry и capabilities проверяются до sandbox-пробы; secrets,
  cookies, production accounts, direct install и внешние mutations запрещены.
- Опубликован guide Brain → Markdown Memory → local push-to-talk Voice → calm HUD с authority
  ladder observe → propose → diff → approve → execute → verify → receipt. Внешние lead magnets
  используются только как reference, без копирования закрытого контента и marketing claims.
- В общей Eclipse Forge таблице создан лист `Rollout 20.08.2026` с 20 инициативами, owner,
  приоритетом, рисками, evidence и следующим шагом; cross-project работа распределена между
  Growth OS, Social, Future, Chat, DnD Living World, DnD Legal Cleanup и Design задачами.
- Commit `63fed1c` отправлен в `origin/master`; quality `#32372130649` и deploy
  `#32372130687` зелёные. Production manifest вернул 648 total / 569 agent-safe / 79 excluded,
  homepage и новый guide отвечают HTTP 200.

### 2026-08-19 — catalog payload and product motion QA
- Клиент переведён с полного catalog-index.json на compact catalog-summary.json; полный анализ
  подгружается из одного из 16 deterministic shards только после явного открытия карточки.
- Добавлены sourceHash/schema validation, request race guard, aria-busy, error/retry UI,
  generator freshness check, client contract tests и production smoke для summary и shard.
- Product motion стал спокойнее: удалён постоянный hero orbit, entrance cascade сокращён,
  два оставшихся smooth-scroll сценария теперь учитывают системный reduced motion.
- Mobile QA дополнительно убрал непомещающийся keyboard shortcut, сократил подпись Registry
  в bottom navigation и подтвердил поиск/открытие lazy detail для GitHub Spec Kit на точном 390px.
- Cache bust поднят до styles.css?v=28 и app.js?v=41; production deploy ещё не выполнялся.
### 2026-08-18 — P2 content and frontend license review
- Проверены 15 P2-карточек по canonical license-файлам и официальным Terms: AOS, Astro,
  Claude Code Prompt Library, Claude Fable 5 guide, Cloudflare Is It Agent Ready?,
  CryptoZombies, Elements of AI, GPT-5.5 Prompt Guide, GSAP, Haikei, HyperUI,
  JavaScript.info, Lighthouse, Linux Journey и Lucide.
- Исправлена классификация frontend-ресурсов: libraries и generators больше не показаны как
  учебные курсы. Отдельно зафиксированы MIT/Apache/ISC/CC permissions, proprietary service terms,
  GSAP non-compete boundary, Haikei output rights и ограничения non-commercial/share-alike.
- Manual license queue снижена с 226 до 211 (P1: 0, P2: 175, P3: 36); direct install остаётся
  запрещён, 560 записей доступны agent-safe export и 77 исключены policy.

### 2026-08-18 — verified research radar and P1 license closure

- Added eight non-duplicate records: Firecrawl PDF Inspector, Qwen3.8 Max, Qwen3.8-27B,
  Porthole, After Enter, Text Grab, Morphe and PC-Tuning. Twelve existing records were
  updated through the shared radar; the unsupported Claude watermark-removal claim was excluded.
- Reviewed all 14 P1 license records from official product pages, terms, repositories and
  model cards. The remaining queue is 226 items (P1: 0, P2: 190, P3: 36); direct install remains
  forbidden and proprietary/no-grant records remain reference-only or blocked.
- Linked the completed bounded rollout already present in AI Hub, Eclipse Media and Educator-AI:
  opt-in GPT-5.6 routing, dry-run Music 3 benchmark and a local AI app-building learning track.
  Live provider canaries, model execution and autonomous publication are still separate gates.

### 2026-08-17 — license evidence queue and cross-project rollout

- Reviewed 39 previously unresolved records: 20 repository licenses/terms from official
  license files and 19 owned Eclipse Library editorial records. Remaining manual queue:
  240 items with deterministic priority, bucket, reason, and next action.
- Expanded license normalization for reviewed copyleft, non-commercial, source-available,
  Commons Clause, mixed and custom rider cases without enabling direct installation.
- Hardened link audit with browser-compatible GET fallback and expiring fetch-failure
  restrictions. Learn Harness returns 200; Coursera is restricted until 17.09.2026 instead
  of being reported as healthy; the outdated Apple link was replaced with official article 105078.
- Started real project rollout with bounded contracts in AI Hub, Sentinel, Eclipse Media,
  and Educator-AI. No live model execution or autonomous external action was enabled.

### 2026-08-17

- Проверена новая пачка без установки или запуска стороннего кода. В canonical catalog добавлены
  девять недублирующихся записей: ChatGPT Work + Codex operating model, Google AI for App Building,
  Learn Harness Engineering, MiniMax Music 3, Google CodeWiki, Cube YouTube Downloader, DeepSeek
  Harness, Anthropic system prompts и first-party Repository Architecture Map Prompt. Две старые
  карточки OpenAI повышены из inferred до verified. Каталог вырос до 629 записей: 195 verified,
  434 inferred, 553 agent-safe; 279 лицензий/условий ещё требуют review.
- Исправлены рекламные преувеличения: MiniMax Music 3 создаёт до 5 минут и использует custom
  community license; CodeWiki сейчас предназначен для public repositories; youtube-dl-wpf не имеет
  готовой parallel queue; published Anthropic prompts не описывают Claude API; DeepSeek Harness
  остаётся developer preview, а 6,571 topic plugins не считаются безопасными автоматически.
- История про AI-борца и 167-минутный курс без URL исключены из подтверждённого каталога. Revenue,
  followers и automation claims не имеют evidence; концептуальная цепочка курса сохранена только как
  editorial reference до получения оригинальной ссылки.
- Добавлены `eclipse.handoff.v1` schema/example/validator, Chat → Work → Codex guide, evidence-based
  architecture prompt, radar и durable registry восьми закреплённых Codex tasks. Создана automation
  `eclipse-library-weekly-evidence-audit`: понедельник 09:00, GPT-5.6 Luna, строго read-only.
- Supply-chain pass запрещает direct install, curl-to-shell, moving plugins и запуск DeepSeek/MiniMax/
  yt-dlp на основной машине. Для pilots обязательны pinned revision, hashes/lockfile review, sandbox,
  no secrets, default-deny egress и ручные approval gates.
- Full SSRF-safe network audit проверил 657 уникальных URL: 603 `ok`, 30 `restricted`,
  2 `unavailable`, 22 `unknown`, 0 `broken`, 0 unsafe/blocked и 0 redirect duplicates.
  Новые MiniMax, CodeWiki, youtube-dl-wpf, DeepSeek, Anthropic и OpenAI endpoints ответили;
  Coursera и Learn Harness Engineering остаются `unknown` из-за сетевого fetch failure, а не
  подтверждённой поломки.

### 2026-08-14

- Eclipse Library получила собственный production-знак: затмение переходит в раскрытую книгу,
  синяя закладка фиксирует продуктовую принадлежность, а точечный warm-gold highlight сохраняет
  связь с Eclipse Forge без возврата к фиолетовой палитре.
- Primary, monochrome и favicon SVG встроены в каталог и Technology Registry; wordmark остаётся
  живым Outfit-текстом. Hover/focus даёт один короткий световой проход, а reduced-motion
  отключает декоративную динамику. CI блокирует возврат emoji favicon, внешние SVG-ссылки и scripts.
- Owned Growth OS MVP отмечен завершённым по фактическому состоянию AI Hub и Chat: bounded roles,
  run log, budget/cancel, provenance и human approval работают без Teamly, connectors и публикации.
- Content Command Center получил четыре shipped screen. Hook Vault хранит source-backed паттерны и
  переносит их в brief без fetch, AI call или publication action. Channel Analytics хранит до
  24 агрегированных периодов / 64 КБ под `growth.channel-snapshot.v1`, требует HTTPS evidence,
  проверяет воронку и сравнивает только один продукт, канал и окно 7/30/90 дней. Public-only
  Competitor Tracker хранит до 30 ручных observations / 64 КБ под
  `growth.competitor-observation.v1`, требует нормализованный HTTPS source, дедуплицирует URL и
  переносит только pattern/provenance/Eclipse hypothesis с reference-only boundary. OAuth,
  scraping, account access, автоматического сбора и user-level data нет. Content Planner добавляет
  `growth.planner-item.v1`: до 30 локальных draft/review-задач с HTTPS evidence, owner, audience,
  KPI, effort, CTA и датой review; scheduler, approval и publish authority отсутствуют. Остаются
  Content Plan и Trends.

### 2026-08-13

#### GitHub Spec Kit and Eclipse Spec Gate

- Verified the canonical GitHub Spec Kit repository, MIT license, security policy and release v0.16.2.
- Added one non-duplicate verified card, bringing the canonical catalog to 620 resources and the agent-safe export to 544.
- Corrected stale news metrics to 126,991 stars and 11,352 forks at review time; the claim that an unclear prompt cannot break a project is not treated as fact.
- Published the repository-owned Eclipse Spec Gate and used the first pilot for versioned DnD map and Text2Image to Eclipse Media contracts.
- Full SSRF-safe network audit: 647 checked, 0 broken, 0 unsafe blocked; the canonical Spec Kit URL returned HTTP 200.

- Product workflow rollout Diagram Contract добавил две factual static diagrams: безопасный Azgaar
  Minimal JSON import в Eclipse DnD Forge и versioned Shotforge storyboard handoff в Eclipse Media
  с честно отдельным Text2Image asset path. Схемы фиксируют 8 MB / 24 или 60 locations и
  64 KB / 5 scenes / 15 seconds / 3 formats, preview, fail-closed и human approval boundaries.
- Local Edge QA на 1440×900 и 390×844 подтвердила по одному responsive SVG без overflow,
  console/page/network errors; manual screenshot review подтвердил читаемую desktop DnD и mobile media
  композицию. Static security contract и полный quality pipeline прошли без findings.

- Проверены по canonical source и добавлены Razer AIKit и Diagram Design без дубликатов; каталог
  вырос до 619 материалов. Рекламное «убийца Ollama/LM Studio» и «диаграммы по любой задаче»
  не приняты как подтверждённые claims.
- Razer AIKit направлен в P2/L isolated GPU benchmark: preview v0.6.0, NVIDIA Compute Capability
  7.0+, Windows через WSL2. Официальный Compose помечен high-risk для сетевого запуска из-за host
  network/IPC, unauthenticated Jupyter/Open WebUI, admin/admin anonymous Grafana и moving image tags.
- Diagram Design прошёл первый Library pilot и направлен на controlled rollout P1/M. Зафиксирован owned Eclipse Diagram Contract v1:
  pinned source, bounded brief, factual fidelity ledger, local brand tokens/fonts, static-first
  HTML/SVG, accessibility/reduced-motion и no remote runtime. Первый responsive data-flow pilot
  опубликован как static artifact; CI блокирует scripts, remote assets, forms, iframe и inline handlers.
- Внешние Docker images, models, notebooks, plugins и skill scripts не устанавливались и не
  запускались; direct install из каталога остаётся запрещён.
- Полный SSRF-safe network audit проверил 647 canonical URL: 601 ok, 30 restricted, 1 temporary unavailable, 15 network unknown, 0 broken, 0 unsafe и 0 redirect duplicates; обе новые canonical GitHub-ссылки отвечают HTTP 200.
- Local Edge/Playwright QA первого Diagram Contract pilot на 1440×900 и 390×844 подтвердил читаемый responsive layout без horizontal clipping; после проверки удалён неоднозначный mobile connector между независимыми policy outputs.
- Первая controlled rollout wave Diagram Contract добавила две factual static diagrams: AI Hub
  model-provider readiness boundary и Hopson Sentinel capability/approval boundary. Визуалы используют
  локальные шрифты/tokens, не содержат runtime JavaScript или remote assets и не меняют права систем. Local Edge QA на 1440×900 и 390×844 нашёл и устранил переполнение batch label; финальные screenshots подтверждают отдельные desktop/mobile композиции.

### 2026-08-12 — Landing cursor light parity

- Added the same three-layer desktop cursor light used by Eclipse Forge Landing without replacing the native pointer.
- The effect is disabled on touch, coarse pointers, narrow viewports and `prefers-reduced-motion`; all layers are non-interactive and do not alter catalog scrolling.
- Bumped the Library style asset to `styles.css?v=25` and loaded the isolated `cursor-light.js?v=1` module before the catalog runtime.

### 2026-08-12 — Eclipse Forge visual-system pilot

- Applied the `product` profile of `eclipse-forge.visual-system.v1` to Library semantic tokens,
  typography, eclipse hero and motion while preserving the dense catalog interaction model.
- Added a local versioned token snapshot and self-hosted Outfit/Inter assets with OFL licenses;
  the Library does not make runtime font or design-system requests to another origin.
- Kept all ambient motion behind `prefers-reduced-motion` and avoided new animation dependencies.

### 2026-08-12

- Завершён owned Human Review pilot для Library: browser review теперь скачивает v2 JSON packet,
  а `scripts/review-preview.mjs` принимает только полный pinned SHA и недоверенный unified diff,
  создаёт detached disposable worktree, `semantic-summary.md`, `full.diff` и SHA-256 manifest.
- Preview fail closed: обязательны четыре evidence gates и итог `approve`; допускается изменение
  ровно одной существующей карточки и только editorial allowlist. Binary/new/deleted/mode/rename,
  path traversal, checkout filters, catalog metadata и другие records блокируются до `git apply`.
- Отдельная команда `decide` записывает approve/reject; approve требует quality/security/responsive
  и `--confirm-no-auto-merge`. В decision всегда `mergeAllowed: false` и `deployAllowed: false`;
  cleanup разрешён только после решения и удаляет worktree, сохраняя evidence в `.artifacts/`.
- Реализован owned editorial review-flow без установки community Human Review CLI: кнопка доступна
  из Inspector и полного анализа, четыре обязательных evidence gates и выбранный итог блокируют
  экспорт до завершения проверки. Copy-ready packet явно содержит `authority: local-review-only`,
  `catalogMutationAllowed: false` и следующий gate с semantic summary, полным diff и отдельным approval.
- Review draft хранится только в текущем browser `localStorage`, ограничен 40 карточками и 1600
  символами заметки. Любая заметка выводится через `textContent`/`value`; URL допускают только HTTP(S)
  без credentials. Clipboard failure показывает read-only выделенный JSON, очистка требует подтверждения.
- CI/deploy проверяют syntax нового модуля, regression test фиксирует fail-closed gates, unsafe URL и
  сохранение literal HTML как данных. Local Edge QA на 1440×900 и 390×844 подтвердил persistence
  после reload, XSS payload как текст, clipboard fallback, focus return, 0 horizontal overflow,
  скрытый scrollbar, отсутствие console/network errors и разблокировку body после закрытия.
- Commit `a0a69e9` опубликован в `origin/master`; quality [#31621023989](https://github.com/PavelHopson/eclipse-library/actions/runs/31621023989) и deploy [#31621024001](https://github.com/PavelHopson/eclipse-library/actions/runs/31621024001) завершены успешно. Independent smoke подтвердил live `app.js?v=40`, `catalog-review.js?v=1` и `review.css?v=1`.

- Проверена подборка из 21 сообщения: первые 11 тем сопоставлены с уже существующими карточками
  и не продублированы. Добавлены восемь verified-записей — Roamers, TabiToken, Human Review,
  Vectras VM, Rejudge, Awesome Mac, Soup CLI и C2PA Content Credentials; каталог вырос до 617
  материалов, 541 agent-safe записей, 323 GitHub repositories и 33 guides.
- Старая inferred-карточка `cheahjs/free-llm-api-resources` удалена после подтверждённых
  GitHub API/HTTPS `404`; её назначение уже покрывает verified-карточка freeLLM на `freellm.sh`.
- Human Review, Rejudge, C2PA и Soup направлены в bounded roadmap с конкретными benchmark,
  approval и isolation gates. Roamers, Vectras и Awesome Mac оставлены reference; TabiToken
  помечен high-risk/no-use и исключён из agent recommendations до проверки owner, Terms,
  Privacy/DPA, routing, retention и model provenance.
- Не приняты рекламный Selectel VDS, курс без идентифицируемой ссылки, советы по поиску чужих
  API-ключей, универсальный C2PA-watermark для текста Claude и способы обхода provenance.
  Добавлен defensive secret-response и verification-only provenance workflow; direct install
  внешних CLI/APK/skills по-прежнему запрещён.

- Полный SSRF-safe network audit после очистки проверил 645 canonical URL: 598 ok,
  31 restricted, 1 temporary unavailable, 15 network unknown, 0 broken, 0 unsafe и 0 redirect
  duplicates; `web/link-health.json` обновлён отдельным availability snapshot.
- Local Edge QA на 1440×900 и 390×844 подтвердил поиск Human Review, detail TabiToken,
  решение «Не использовать», high-risk badge, отсутствие horizontal overflow, console/network errors
  и mobile scroll jump (`900 -> 900`). Устаревший числовой placeholder поиска заменён на
  стабильную task-first формулировку.
- Разобрана новая подборка из 25 изображений: вместо пяти дубликатов «humanizer»-промптов
  Editor Stylist обновлён до evidence-preserving workflow с тремя режимами, locked facts,
  semantic diff и approval. Instagram/faceless claims превращены в 5–10-выпускный эксперимент
  с baseline, одной переменной, rights review и keep/change/stop, без обещаний охвата, RPM и дохода.
- Добавлены 14 verified-карточек: Humanizer, Social Media Skills, Claude SEO, FocuSee, ShareX,
  Flow Launcher, QuickLook, Everything, TweakCN, Unlumen UI, Magic UI, SmoothUI, NeoBrutalism
  и Manus. Caveman и Claude Ads перепроверены; каталог вырос до 610 материалов, 535 agent-safe.
- Зафиксированы лицензии и границы: Caveman имеет MIT/BSL split, Everything является freeware,
  Unlumen source link недоступен, FocuSee/Manus proprietary, Social Media Skills и installers
  считаются supply-chain input. Social Media Skills, Unlumen и Manus исключены из agent-safe
  рекомендаций; direct install, OAuth, автопубликация и cloud upload остаются запрещены.
- Добавлен Creator Ops Stack: проектная матрица Eclipse Forge, Desktop Creator Kit,
  UI adoption gate, security/rights gate и два copy-ready Growth prompts с доказательным output.
- Разобраны 28 изображений и два Instagram-поста как отдельные claims, products и workflows. Добавлены
  verified-карточки Microsoft Playwright CLI, Mottor AI, Oakley Meta Vanguard, SkillUI, Strix,
  MassGen и File Search Skill; Anthropic Skills, Superpowers, Eclipse Growth OS и website prompt pack
  обогащены вместо дублей. Каталог вырос до 596 материалов.
- Исправлены claims: Oakley Meta Vanguard использует Meta AI, а не подтверждённый ChatGPT; Stryx
  идентифицирован как Strix; File Search отделён от MassGen; ускорение skills, гарантированная
  автономность и conversion от шаблонов не приняты без benchmark evidence. Устаревшая команда
  `/install-github-skill` не рекомендована, direct install остаётся запрещён.
- Growth OS получил evidence-first Content Command Center с шестью экранами и безопасными defaults.
  AI Landing Sprint дополнен полной SaaS-структурой, reference Mottor и browser QA через Playwright CLI;
  prompt pack — двенадцатью constraints-driven visual directions без копирования чужих assets.
- Security review зафиксировал tool-poisoning, prompt-injection, browser-profile, remote-shell,
  biometric/privacy и dual-use boundaries. Strix отправлен только в authorized lab roadmap, SkillUI
  оставлен reference до source/license evidence, Oakley — P2 research без покупки и production data.

### 2026-08-11

- Публичные названия продуктовых контуров унифицированы с брендом Eclipse Forge: Eclipse Market (5 решений), Eclipse CRM (11) и Eclipse AI (10). Обновлены Registry, карточки, guides, consumer labels и документация; стабильные machine IDs, deep links и API paths сохранены для обратной совместимости.
  Commit 5ceb9d6; quality #31472006597 и deploy #31472006604 завершились успешно. Независимый production smoke подтвердил 26 решений и отсутствие старых display names.
- Stage 17 завершён: подготовлена отдельная Eclipse Technology Registry surface с 26 решениями,
  read-only governance contract, lifecycle/runtime boundary, владельцами, evidence, рисками,
  benchmark и следующими шагами. Добавлены stable entry links, CSP, safe URL/HTML rendering,
  loading/empty/error/retry, responsive filters и production smoke для HTML/CSS/JS/JSON.
- Security audit подтвердил SHA-pinned GitHub Actions, `contents: read`, отсутствие event-expression
  injection, credential patterns и новых dependencies. Hostile JSON не исполняется; неподтверждённый
  Ollama smoke status снижен с `production` до `approved` до появления immutable evidence.
- Stage 16 завершён: внутренний Inspector сохраняет wheel/touch/keyboard scroll, но больше не показывает
  системную полосу; добавлены compact layout, Trust Passport и deterministic RU/EN smart search.
  Edge QA пройден на desktop 1434×934 и mobile 390×844 без console errors, horizontal overflow и
  возврата страницы наверх; source/implementation comparison зафиксирован в `design-qa.md`.

### 2026-08-10

- Stage 15 переводит Library из «сетки ссылок» в Knowledge Navigator: главный экран начинает с задачи пользователя, популярные сценарии включают фильтр одним действием, а карточки оставляют только назначение, решение, проект и ключевые условия.
- Добавлен evidence-first Inspector: на desktop он остаётся рядом с выдачей, на tablet/mobile открывается доступным bottom sheet с focus return. External source показывается только для безопасного `http/https` URL и скрывается при security block; regression закрывает `javascript:`/`file:` ссылки.
- Новый `navigator.css` добавляет спокойный premium devtool-стиль, fixed mobile navigation, responsive master-detail, loading/empty/focus/reduced-motion states. Cursor spotlight и глобальный scroll listener удалены, чтобы снизить шум и не возвращать мобильный scroll jump.

- Local browser QA в Edge/Playwright на 1440×900 и 390×844 подтвердил 36-card DOM budget, working command search и `Ctrl/Cmd+K`, ширину mobile layout/sheet ровно 390 px без horizontal overflow, scroll guard `1000 → 1000` и focus return без console errors.
- Быстрые маршруты больше не показывают системный horizontal scrollbar: на desktop они перестраиваются в responsive grid, на mobile сохраняют touch swipe со скрытой полосой прокрутки.
- Разобрано видео «30 минут + ИИ = сайт, который можно продать за 100 000 ₽»: подтверждён быстрый prototype workflow, но не production-ready сайт и не заявленная стоимость. Зафиксированы отсутствующие mobile/backend/deploy gates, неподтверждённые claims, права на marketplace-фотографии и опасность blind agent permissions.
- Добавлены три отдельные verified-карточки: Krea AI, Google Nano Banana Pro (Gemini 3 Pro Image) и Kuaishou Kling AI 3.0. Каталог вырос до 589 материалов и 147 ручных reviews; 306 записей имеют addedAt, 516 доступны agent consumers.
- Повторная legal/source-проверка уточнила cloud boundaries. У Krea subscription и API balance разделены, API публикует Kling 2.6 по $0.07/сек, Trust Center перечисляет US subprocessors и request-gated DPA; полный текст Notion Terms/Privacy независимо не прочитан. Nano Banana Pro остаётся controlled benchmark.
- Kling AI 3.0 подтверждён как доступный продукт, а официальный guide публикует расход 6–12 credits/сек и +2 credits/сек за Voice Control. Карточка перенесена из roadmap в reference: consumer Terms требуют письменного разрешения для коммерческого Output, attribution Kling AI и дают сервису широкую лицензию на Content; production-интеграция закрыта до отдельного API/enterprise contract.
- Добавлено руководство «AI Landing Sprint» с business brief, evidence и asset registers, human approvals, production checklist и картой внедрения для Landing, AI Hub, Chat, Media, Shotforge, Sentinel, Text2Image и DnD Forge.
- Пересобраны production index, guide manifest и API exports. Прямые установки из каталога по-прежнему запрещены; cloud uploads, API keys, лица, голоса и публикация закрыты fail-closed правилами.
- Commit `aeb0aab` безопасно объединён с bot link-health refresh в `fd0ed36` без force push. GitHub quality и deploy зелёные; production API и guide проверены независимым smoke.

### 2026-08-09

- Проверена новостная пачка 07–09.08.2026: 26 новых подробных карточек и три редакторских обновления вместо дублей. Каталог вырос до 586 материалов, verified queue — до 144; `addedAt` есть у 303 записей.
- Добавлены OriginKit, Hermes Skills Hub, NemotronLabs VoiceChat, Qwen Audiobook Converter, freeLLM, nodumbmode, Checklist Design, Grok Imagine Quality Mode, Sia Storage, восемь self-hosted сервисов и девять актуальных design references. Ollama уже был verified; Frigate, Mobbin и Hermes Agent обогащены без новых дублей.
- Исправлены рекламные claims: VoiceChat требует 80 GB GPU, имеет один голос и не поддерживает cloning; официальный xAI release называется Quality Mode, а не Imagine Image 2.0; FreeLLM предупреждает об устаревании; nodumbmode не имеет LICENSE. Selectel affiliate-реклама не добавлена.
- В roadmap отправлены voice, audiobook, Grok image, RSS intake, offline knowledge и S3-storage benchmarks. OriginKit, skills hubs и self-hosted/design stack оставлены reference с license, copyleft, privacy, prompt-injection и supply-chain boundaries.
- GitHub metadata refresh расширен до 305 repositories и исправлен fail-closed edge case: удалённый или private repository теперь явно получает `state: unknown` и `licenseInfo: null`, поэтому schema validator не падает и не выдумывает лицензию.
- License normalizer больше не сворачивает mixed code/model terms в первый GitHub SPDX: Nemotron VoiceChat показывает Apache-2.0 для кода и OpenMDW-1.1 для checkpoint целиком, с отдельным regression test.

### 2026-08-06

- Stage 14: карточки каталога теперь создаются по требованию порциями по 36, а не все 560 при загрузке. Card renderer, редакционная лента и progressive DOM вынесены в отдельные модули; добавлен regression test на DOM budget, detach/mount и порядок подключения assets.
- Проверены Banana Prompts, Nucleo SVG Pattern Generator, MotionSites AI и NØRTHBOUND Recreation Prompt. Nucleo принят для безопасного использования отдельных SVG-экспортов; Banana Prompts и MotionSites оставлены reference; NØRTHBOUND помечен `Не использовать` и исключён из agent exports из-за exact-copy инструкции и отсутствия лицензии на prompt/media/fonts.
- Каталог вырос до 560 материалов и 116 ручных разборов. UI получил ленту «Новое и проверенное», decision-first карточки, первый безопасный шаг в detail header, сортировку по `addedAt`, компактный hero и одну desktop-навигацию; asset keys подняты до `app.js?v=36` / `styles.css?v=23`.
- Local browser QA на 1440×900 и 390×844 подтвердил шесть свежих карточек, корректный Nucleo detail, отсутствие horizontal overflow и стабильный mobile scroll на 900 px. Data/API/policy/MCP/smoke regression checks зелёные; новые ссылки проверены по официальным источникам, полный weekly link snapshot не перезаписывался.
- Разобрана подборка из 26 находок: добавлена 21 новая карточка и редакторски обновлены три дубля —
  NVIDIA Build, ScraperAI и Taste Skill. Каталог вырос до 556 материалов, verified queue — до 112.
- Добавлены Waku Agent, TencentDB Agent Memory, OpenWorker, Cloudflare OS, AnyDoc, RepoWise,
  OpenCode Zen, Echoed, NeuralDeep, 50languages, Invidious, O&O ShutUp10++, NRI Atlas, e4steam,
  Chase AI+ и официальный Apple Stolen Device Protection с лицензиями, trust/risk и Eclipse mapping.
- Четыре исходных prompt-идеи переработаны в безопасные evidence-first шаблоны: presentation workflow,
  software engineering roles, procrastination self-reflection и defensive digital-footprint self-audit.
  Последний помечен `grey`, поэтому виден человеку, но не попадает в agent recommendations.
- Не добавлены как подтверждённые материалы: несуществующий в официальном каталоге `Qwen 3.8 Max`
  и недоступный для проверки Google Doc `GPT Image 2 Prompts`. Claims про 60/96% token savings,
  «100 млрд бесплатных токенов», piracy, native fluency и гарантированный доход удалены или уточнены.
- В roadmap зафиксированы P1 AnyDoc intake, собственная Agent Memory и provider benchmark;
  Echoed, NRI Atlas и O&O ShutUp10++ оставлены P2/reference с clean-room и approval boundaries.

### 2026-08-04

- Добавлен YTSage и редакторски обновлены пять найденных дублей: PPT Master, NtWarden,
  Reiverr, Shipper.now и FluentTweaker. Каталог вырос до 535 материалов; verified queue — до 88.
- Карточка Shipper исправлена по официальному сайту: это proprietary cloud AI app builder, а не
  anti-slop guide. Зафиксированы public-only free projects, противоречивые цены, auto-renewal,
  обработка prompts/project logs, retention до 12 месяцев и неподтверждённые marketing claims.
- PPT Master отправлен в roadmap как основа собственного `DeckJob` для AI Hub, Chat и Educator-AI.
  MIT подтверждена, но affiliate API relays, внешние модели, web images и voice cloning требуют
  отдельных provider, copyright, privacy и biometric approval gates.
- YTSage, Reiverr и NtWarden оставлены только reference: для Eclipse Media берём intake/TV UX,
  для Sentinel — read-only user-mode diagnostics. Cookies, arbitrary downloader commands, torrents,
  unauthenticated TCP server и kernel driver в production не допускаются.
- FluentTweaker остаётся `Не использовать`: лицензия отсутствует, а Windows system tweaks можно
  изучать только по одному в disposable VM. Все записи имеют official evidence; direct install
  из Library по-прежнему запрещён.

### 2026-08-03

- README-каталог мигрирован в `catalog/resources.json`: основной README сокращён с 390 KB
  до документации, старый Markdown сохранён только как read-only legacy archive.
- Production index переведён на schema v2. Даты публикации вынесены из category в `addedAt`
  для 247 записей; для остальных точная дата не выдумывается.
- GitHub metadata расширены official license evidence. Queue непроверенных лицензий сокращена
  с 434 до 281; 219 получают `source-declared`, но это не считается security endorsement.
- Все 64 grey-ресурса и ещё семь fail-closed записей исключены из automatic agent recommendations.
  Catalog UI и exports явно запрещают direct install и внешние mutations без human approval.
- Добавлены static API exports `catalog`, `agents`, `starcrm`, `starai` и manifest; UI больше не
  читает README. `app.js` сокращён с 1927 до 1688 строк, adapter вынесен в `catalog-runtime.js`.
- Google Fonts удалены: Manrope, Unbounded и JetBrains Mono обслуживаются локальными WOFF2.
  Browser QA подтвердил desktop/mobile без overflow, console errors и прыжка mobile scroll;
  Security route сужен с 476 до 107 тематических записей.
- Structured catalog опубликован commits `3bb8ecb`, `74abbc4`, `6aa88ac`, `7fa7055`;
  финальные quality [#30840491593](https://github.com/PavelHopson/eclipse-library/actions/runs/30840491593)
  и deploy [#30840492554](https://github.com/PavelHopson/eclipse-library/actions/runs/30840492554) зелёные.
  LF-нормализация guide sources устранила четыре обрезанных описания и сделала manifest одинаковым
  на Windows и Ubuntu; live-проверка подтвердила `app.js?v=35` и schema v2.

- Решение по Teamly.to обновлено после проверки No Plan: платный pilot отменён, checkout и OAuth
  integrations не начинаются. Teamly остаётся только reference для Cells, ролей, activity stream
  и approval gates; рабочий контур строится как owned Eclipse Growth OS в Chat и AI Hub.
- Опубликован guide `guides/eclipse-growth-os.md`: рекламные обещания «SMM за 150 000 ₽» и
  «$3 000 в месяц» исключены как неподтверждённые; вместо них добавлены brand foundation,
  conversion path, 12 материалов на 30 дней, пять lead magnets, KPI, Teamly reference, owned MVP roadmap,
  семь evidence-first промптов и единый checklist перед публикацией.
- В task-first навигацию добавлена цель «Продвигать бренд»: она собирает marketing, content,
  SEO, ads, lead-magnet и conversion материалы и сохраняется в shareable URL как `task=growth`.
- Карточки собственных материалов получили прямую кнопку в on-site guide через безопасный
  `guide` slug. Длинное содержание guide на mobile теперь свёрнуто по умолчанию, закрывается
  после выбора раздела и не вызывает `scrollIntoView` из IntersectionObserver; regression gate
  отдельно фиксирует desktop-only auto-reveal.
- Проверен и добавлен Azgaar’s Fantasy Map Generator: официальный GitHub Pages и repository,
  актуальный JSON export, MIT license и разрешение на коммерческое использование созданных карт.
  Рекламная формулировка «генератор карт» раскрыта как полноценный редактор world layers с
  performance, backup и optional third-party privacy ограничениями.
- Добавлен guide `guides/azgaar-dnd-map-workflow.md`: внешний handoff без iframe/runtime,
  безопасный Minimal JSON preview/import, защита от дублей и roadmap для Campaign Map Asset v1.
  Полный upstream dependency tree не включается в Eclipse Forge.
- Sentinel получил реальный fail-closed `BrowserRead` для optional Camofox worker: инструмент скрыт
  без isolation/telemetry/persistence-off/access-key/allowlist настроек, использует только create/snapshot/stats/close
  и маркирует web content как недоверенный. Сам browser runtime не устанавливался и требует отдельного
  container, DNS/egress и privacy smoke review.
- CryptoPulse устранил хранение локального demo password и AI API key в постоянном browser storage:
  пароль теперь проверяется через PBKDF2-HMAC-SHA256 с уникальной солью, legacy profile мигрируется,
  а AI key и demo session живут только до закрытия вкладки. Это остаётся local demo, не server auth/2FA.
- Shotforge больше не загружает Tailwind, Google Fonts или import map с runtime CDN: CSS собирается
  локально exact Tailwind CLI `3.4.19`, а source/output SHA-256 manifest блокирует устаревший bundle.

### 2026-08-02

- Каталог расширен до 531 материала и 81 редакторски проверенной карточки: Claude Ads,
  Fincept Terminal, Vibe Trading, Camofox Browser, HyperFrames и Open-Generative-AI получили
  простые объяснения, quick start, лицензии, trust/risk границы и привязку к проектам Eclipse Forge.
- Добавлен guide `guides/august-2026-operational-agent-stack.md` с приоритетами P0–P3:
  HyperFrames release-video pipeline → read-only Ads Audit → Model Registry/isolated browser →
  financial research и только paper-trading. Fincept используется как reference из-за dual license,
  а live trading и скрытый browser anti-detect не включаются.
- Внедрения доведены до безопасных первых срезов: AI Hub получил Ads Audit, Financial Research Room
  и Model Registry; CryptoPulse — historical/paper Strategy Lab; FinFlow — portfolio-health scenario;
  Eclipse-Claw и Sentinel — явный isolated-browser contract; Chat — advertising execution-room preset;
  Shotforge и Eclipse Media — storyboard-to-video handoff с форматами 16:9, 9:16 и 1:1.
- HyperFrames закреплён как exact `hyperframes@0.7.88` с lockfile и fail-closed runner. Unified check,
  offline audit и три реальных 15-секундных H.264 render прошли; browser QA подтвердил desktop/mobile
  preview и итоговые разрешения 1920×1080, 1080×1920 и 1080×1080. Автопубликация не включена.
- P0 уже начат в Eclipse Media commit `cbf54e5`: отдельная Video Studio, 15-секундная
  детерминированная композиция, responsive UI, offline preview и contract check. GSAP 3.14.2 хранится
  локально с SHA-256/SRI; HyperFrames runner fail closed и не скачивает CLI. Реальный lint/validate/render
  ожидает восстановления npm registry, integrity review и exact lockfile; автоматической публикации нет.
- Supply-chain и installer hardening Eclipse-Claw merged через
  [PR #8](https://github.com/PavelHopson/Eclipse-Claw/pull/8) как `3502bdb`: Docker bases закреплены
  по multi-platform digest, CI отклоняет mutable external `FROM`, Trivy проверяет core/CDP runtime,
  `scraper` обновлён и `fxhash` удалён. Installer source `0.1.4` теперь проверяет HTTPS, exact
  `SHA256SUMS` и archive paths, не использует shell command strings, подтверждает config writes и
  сохраняет их через backup + atomic replace. PR CI
  [#30750813826](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30750813826) и post-merge main CI
  [#30750946382](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30750946382) зелёные.
- Выпущен [Eclipse Claw v0.4.2](https://github.com/PavelHopson/Eclipse-Claw/releases/tag/v0.4.2):
  release workflow [#30751080889](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30751080889)
  опубликовал четыре platform archives, `SHA256SUMS`/provenance и два multi-arch GHCR indexes.
  Optional npm publish корректно пропущен без `NPM_TOKEN`, поэтому `create-eclipse-claw 0.1.4` нельзя
  считать опубликованным. RustSec сообщает 0 известных уязвимостей; открыты Low-risk unmaintained
  `ttf-parser` и отдельный независимый runtime pentest.
- Eclipse-Claw Phase 2B merged через
  [PR #6](https://github.com/PavelHopson/Eclipse-Claw/pull/6) как `c5c90a1`: production REST
  обращается к LLM/CDP только через отдельные authenticated workers, required isolation fail closed,
  durable JSONL audit не хранит URL/content/secrets, а fixed public-page и hostile-content fixtures
  стали release gates. Release archives требуют четыре binaries, checksums и provenance; контейнеры
  разделяют service/egress networks и запускаются non-root с dropped capabilities.
- RustSec сначала обнаружил уязвимые PDF/XML/QUIC/TLS/MCP/browser/random dependency chains. Они
  обновлены без advisory allowlist, obsolete `async-std` runtime удалён; PR CI
  [#30746506226](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30746506226) и post-merge CI
  [#30746632082](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30746632082) прошли Test,
  Clippy `-D warnings`, Docs, RustSec и container/Compose contract.
- Release-патч Eclipse-Claw merged через
  [PR #7](https://github.com/PavelHopson/Eclipse-Claw/pull/7) как `d19a803`: Homebrew publish теперь
  честно пропускается без `HOMEBREW_TAP_TOKEN`, документация не обещает несуществующий публичный tap,
  а fixture verifier одинаково проверяет LF/CRLF. PR CI
  [#30747425725](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30747425725) и post-merge main CI
  [#30747551757](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30747551757) зелёные.
- Создан [Eclipse Claw v0.4.1](https://github.com/PavelHopson/Eclipse-Claw/releases/tag/v0.4.1),
  release workflow [#30747730887](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30747730887)
  зелёный: четыре platform archives, `SHA256SUMS`, GitHub Release и multi-arch GHCR images опубликованы;
  optional Homebrew job корректно завершился success с пропуском tap-шагов без секрета.
  RustSec сообщает 0 известных уязвимостей; `fxhash` и `ttf-parser` остаются двумя Low-risk
  предупреждениями `unmaintained`, а не скрытыми исключениями.
  Library-карточка и Agent Reach review теперь простым языком объясняют CLI/REST/MCP, workers,
  privacy audit, безопасный старт и оставшиеся границы. Upstream Agent Reach не запускался.
- Eclipse-Claw Phase 2A merged через
  [PR #5](https://github.com/PavelHopson/Eclipse-Claw/pull/5) как
  `3ef26a85d0e51f85ec261d95ea6df186329de90f`: transport-level public DNS/redirect policy,
  private/metadata blocking, explicit proxy-DNS consent, untrusted MCP/REST/LLM boundary,
  robots/Crawl-delay, 20 MiB response cap, bounded server, loopback/token auth defaults,
  cookies/CDP gates и redacted audit events. Upstream Agent Reach не устанавливался.
- PR CI [#30743170976](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30743170976)
  и post-merge main CI
  [#30743202888](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30743202888)
  прошли workspace Test, Clippy `-D warnings` и Docs. Остались release/deploy,
  OS/container isolation, durable audit storage и fixed public-page benchmark; их нельзя
  считать закрытыми текущими in-process limits и tracing logs.
- В Library добавлена отдельная редакторски проверенная карточка Eclipse Claw с простым
  объяснением CLI/REST/MCP, безопасного старта, opt-in boundaries и честных ограничений;
  Agent Reach review и applicability обновлены без новой дублирующей записи.
- Library commit `5736fc8` опубликован в `master`: quality
  [#30743367591](https://github.com/PavelHopson/eclipse-library/actions/runs/30743367591), deploy
  [#30743367592](https://github.com/PavelHopson/eclipse-library/actions/runs/30743367592) и independent
  production smoke прошли; live JSON содержит `eclipse-claw-github-com`.
- В Eclipse-Claw реализован безопасный Phase 1 по reference-паттернам Agent Reach:
  отдельный internal crate со static allowlist, machine-readable readiness/provenance/data boundary,
  read-only `doctor` для REST/MCP и единая fail-closed policy. Наличие API key больше не означает
  согласие на автоматическую передачу URL/контента в cloud — требуется отдельный opt-in.
- [Eclipse-Claw PR #4](https://github.com/PavelHopson/Eclipse-Claw/pull/4) squash-merged в `main`
  как `51a5d6c`; post-merge CI
  [#30741248009](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30741248009) прошёл Test,
  Lint и Docs. Production status ожидает отдельный release/deploy.
- Agent Reach не устанавливался и не запускался: installer, browser cookies, mutable community CLI
  и автоматическое подключение источников не перенесены. SSRF/egress, content sanitization,
  isolated workers и audit log оставлены отдельным Phase 2 P1.
- Library commit `7a1d67b` опубликован в `master`: quality
  [#30741017229](https://github.com/PavelHopson/eclipse-library/actions/runs/30741017229) и deploy
  [#30741017228](https://github.com/PavelHopson/eclipse-library/actions/runs/30741017228) завершены успешно;
  live smoke подтвердил `app.js?v=30`, 526 материалов, 22 проекта, 307 repositories и 5 MCP records.
- Финальный merged-status опубликован catalog commit `47b25e9`: quality
  [#30741378055](https://github.com/PavelHopson/eclipse-library/actions/runs/30741378055), deploy
  [#30741378062](https://github.com/PavelHopson/eclipse-library/actions/runs/30741378062) и independent
  live smoke завершены успешно с теми же 526 материалами без дубля Agent Reach.

### 2026-07-31

- Реальный browser QA на 390×844 подтвердил production mobile-layout и загрузку `app.js?v=29`,
  а route-проверка обнаружила соседний navigation regression: после `#browse/*` обычная категория
  сохраняла старый topic-filter. Порядок исправлен — `clearTopicRoute()` теперь выполняется до
  повторного `setView('catalog')`; добавлен local/production smoke contract, asset поднят до `app.js?v=30`.
- Mobile scroll fix теперь защищён production smoke contract: проверка требует horizontal `nav.scrollLeft`,
  ранний `return` и запрещает `scrollIntoView()` внутри mobile scrollspy branch. Contract применяется
  и к локальному, и к фактически опубликованному `app.js`; интерактивный browser backend в этой сессии
  по-прежнему не предоставил navigation API.
- Добавлен Agent Reach с подробной карточкой и отдельным static security review: существование,
  MIT license и текущий `main` commit подтверждены, рекламные обещания «весь интернет»,
  «бесплатно» и `privacy-safe` ограничены фактическими account/cookie/proxy/API/ToS границами.
  Решение — `Reference`, risk — High; installer и upstream CLI на основной машине не запускались.
- Для Eclipse Webclaw / Kwork #18 в roadmap добавлен собственный allowlisted connector registry
  с read-only `doctor`, provenance и controlled fallback. Sentinel, OMC и AI Hub получают только
  архитектурный reference; Eclipse Media продолжает отдельный transcript-first video pipeline.
- Catalog commit `4cf5208` опубликован в `master`; quality
  [#30619594895](https://github.com/PavelHopson/eclipse-library/actions/runs/30619594895)
  и production deploy [#30619594864](https://github.com/PavelHopson/eclipse-library/actions/runs/30619594864)
  завершены успешно. Live smoke подтвердил 526 items и наличие
  `agent-reach-panniantong` в production index. Повторный interactive browser pass не выполнен:
  после предыдущего cleanup backend не выдал navigation/Playwright methods; UI-код не менялся,
  а mobile scroll regression ранее был пройден на 390×844.
- Kimi legal/privacy review дополнен официальными API security, Open Platform privacy и DPA
  материалами: API data заявлены как не используемые для обучения, но zero retention,
  фиксированный общий срок, полный subprocessor list и self-service DPA не подтверждены.
  Synthetic live suite остаётся заблокирован отсутствием отдельного low-limit test key.
- В Educator-AI внедрён интерактивный пятишаговый GitHub onboarding без CLI и AI key:
  repository, branch, commit, pull request и merge; прогресс хранится только локально,
  reset требует подтверждения, secrets и personal data явно запрещены.
- В Eclipse AI Hub добавлен единый direct Kimi K3 benchmark harness с suites `ai-hub`,
  `sentinel` и `omc`. Default — dry run без network; live требует `--execute`,
  `KIMI_BENCHMARK_ALLOW_NETWORK=1` и environment-only key. Raw model output и prompts
  в отчёт не попадают. Live provider benchmark остаётся невыполненным.
- Sentinel и oh-my-claudecode получили project-specific benchmark runbooks и roadmap boundary
  без новых provider adapters или shared keys. TokenRouter исключён из всех трёх путей.
- Language Model Builder, VCamdroid и Footrue закреплены как reference: без встраивания
  закрытого binary/site и без запуска VCamdroid admin DLL/APK/ADB stack.
- Добавлены `guides/kimi-github-implementation-2026-07-31.md` и
  `guides/tokenrouter-vendor-risk-gate.md`. TokenRouter получил High vendor-risk tier
  и остаётся blocked до owner/Terms/DPA/routing/retention/subprocessors/promotion evidence.

- Разобрано 47 сообщений из июльской ленты и дополнительной новости: 36 уже опубликованных
  ресурсов не продублированы, повтор Shipper внутри вложения схлопнут; добавлены Agent Reach,
  Footrue ToolBox, официальный GitHub for Beginners roadmap, Language Model Builder, VCamdroid
  и TokenRouter.
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
- Catalog commit `6f16ff1` опубликован в `master`; quality
  [#30612972893](https://github.com/PavelHopson/eclipse-library/actions/runs/30612972893)
  и production deploy [#30612972889](https://github.com/PavelHopson/eclipse-library/actions/runs/30612972889)
  завершены успешно. Live smoke подтвердил 525 catalog items и актуальный `app.js?v=29`.

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

### 2026-08-21 — Animation Lab containment hardening

- All six task forms now use their visible 3D card as a strict layout boundary: Vault, Guardian Login, Upload Queue, AI Progress and both OTP variants keep decorative depth, controls and status content inside the frame.
- Vault chamber height follows available `100dvh`; the remaining demos use `100dvh`, capped responsive widths and shrink-safe rows/columns instead of negative backplate insets.
- Exact browser regression at 626×586, 500×520, 690×578, 783×541, 523×455, 590×455 and 390×844 confirms containment in normal and reduced-motion modes, zero document overflow and zero console/page errors.
