# Радар 26–30 августа 2026: маршрутизация агентов, медиапроизводство и developer intelligence

> Проверка 14 новостей по каноническим репозиториям, официальным страницам, лицензиям и текущим ограничениям. Карточка в Library означает «изучено», а не «можно безопасно установить».

## Модуль 1. Короткий итог

### Урок 1. Что берём в работу

Самые полезные идеи складываются в четыре независимых vertical slice:

1. **Provider Router для Eclipse AI Hub / Jarvis / AI Office** — единый каталог облачных и локальных моделей, Anthropic/OpenAI-compatible adapters, health-check, retry, fallback, отдельная модель на сотрудника, квоты и стоимость.
2. **Безопасная творческая фабрика** — typed timeline/game tools, отдельный sandbox, visual QA, preview, approval, provenance и receipt вместо бесконтрольного «сделай всё одним промптом».
3. **Русская диктовка и медиатранскрибация** — одинаковый тест live/file STT, честная diarization, явное согласие на cloud audio и локальный fallback.
4. **Developer intelligence** — evidence-backed diagrams и skill regression loop, где предложения не применяются автоматически.

### Урок 2. Что исправлено в новостных формулировках

| Новость | Что подтверждено | Что исправлено |
|---|---|---|
| Free Claude Code | 50 заявленных providers, fallback, agent adapters, voice и RTK | README говорит **1,3B+**, а не 1,5B токенов; экономия 90% — publisher claim и относится к optional terminal-output compression |
| Godogen | Godot 4, Bevy, Babylon.js, Claude Code/Codex, запуск и visual proof | Один prompt не гарантирует production-ready игру; нужны toolchains, API-ключи, время и приёмка |
| Amicro | MIT, loaders, mono charts, modular component install | Компоненты всё равно требуют pin, review, accessibility и performance QA |
| GLM-5.3-Flash | 320B total / 18B active, multimodal, MIT, несколько serving frameworks | «Убила GPT-5.6» не подтверждено; приближение к Opus 4.8 и цена — собственные оценки Z.ai |
| Palmier Pro | macOS editor, local MCP, agent-assisted editing, GPL-3.0 source | Бинарные релизы после v0.7.6 имеют отдельные proprietary terms; не «полностью бесплатный open source» |
| Gemini 3.5 Transcribe | 85+ languages, streaming/file APIs, timestamps, filler cleanup | Официальный блог обещает стабильную attribution до 3 speakers; 3+ experimental, а предел 8 не равен гарантированной точности |
| 3D landing prompt | Ссылка существует | Контент не открылся напрямую, через search или reader; лицензия и авторство не проверены |
| AI Image Prompts Skill | MIT-код, 10k+ claimed prompts, multilingual search | Root MIT не подтверждает права на каждый community prompt и preview |
| Video Scraping APIs | Большой discovery index внешних providers | Это не 979 единообразных production APIs; LICENSE отсутствует, у каждого сервиса свои ToS |
| How to Train Your GPT | 17M и 151M учебные конфигурации, современный decoder stack | Это учебный стенд, не современный production ChatGPT |
| Auto-Company | 14 ролей, cycles, dashboard, Claude/Codex adapters | LICENSE не найден; bypass permissions и автономность несовместимы с Eclipse security boundary |
| Furever Dock | Windows/macOS desktop pet from photo | Privacy page на дату проверки — незавершённый draft; пользовательские фото не загружаем |
| Skill Doctor | Claude Code/Codex/Warp conversation scoring и proposed edits | Transcripts чувствительны; только bounded local pilot и ручной diff review |
| Archify | MIT, typed diagrams, HTML/SVG, validation и evidence receipts | Популярность не заменяет pin и supply-chain review; diagram остаётся derived view |

## Модуль 2. Единый Provider Router

### Урок 1. Что взять из Free Claude Code

[Free Claude Code](https://github.com/Alishahryar1/free-claude-code) полезен не обещанием «бесплатности», а адаптерным слоем:

- единый provider catalog с canonical model ID;
- OpenAI- и Anthropic-compatible contracts;
- health-check и короткий canary до выдачи рабочей задачи;
- retry только для идемпотентных запросов;
- fallback с явной записью, какая модель фактически ответила;
- сохранение tools, images, thinking/reasoning и streaming semantics;
- отдельная квота, цена и fallback policy на каждого Office-сотрудника.

Что не переносим: remote install scripts, хранение ключей в пользовательском shell config, неявное переключение provider и обещание фиксированного бесплатного объёма. Ключи остаются server-side, adapter pinится по revision, а любое изменение privacy/cost отображается до запуска.

### Урок 2. GLM-5.3-Flash как кандидат, а не победитель

[GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) добавляется в Model Registry как `candidate`. Полные веса на текущую рабочую станцию не загружаем: 320B-модель создаст новый disk/GPU bottleneck. Начинаем с официального API или ограниченного hosted endpoint.

Одинаковый benchmark для Eclipse AI Hub:

1. 20 coding и 10 multimodal задач с versioned fixtures.
2. Одинаковые tools, timeout, retry и max cost.
3. Метрики: accuracy, latency, input/output tokens, стоимость, tool success, fallback и число небезопасных действий.
4. Никаких production secrets, клиентских файлов и автоматического routing по результатам publisher charts.

**Решение:** Provider Router — делать; free-claude и GLM — источники контрактов и кандидаты, не production dependencies.

## Модуль 3. Творческая фабрика с контролем

### Урок 1. Godogen: generator → runtime → visual QA

[Godogen](https://github.com/htdt/godogen) показывает полезный цикл:

1. Brief создаёт новый disposable repository.
2. Engine adapter декларирует toolchain, allowed commands, network и budget.
3. Агент пишет код и assets только внутри workspace.
4. Runtime запускается с timeout и resource limits.
5. Скриншоты, запись, tests и logs становятся proof bundle.
6. Reviewer сравнивает brief, результат и diff; merge/publish требует approval.

Применение: **Eclipse DnD Forge** и будущий **GameForge**. Office Core может показывать прогресс, но engine runtime остаётся источником истины.

### Урок 2. Palmier Pro: безопасный монтаж

[Palmier Pro](https://github.com/palmier-io/palmier-pro) подтверждает ценность agent-controlled timeline, но GPL/source и proprietary binary split исключают слепое встраивание. Для **Eclipse Media** и **Shotforge** реализуем свои typed actions:

- `importAsset(receipt)` — только права-cleared source, MIME/codec/size validation;
- `cut(range)`, `moveClip`, `addCaption`, `setVolume`, `exportDraft`;
- preview diff до применения;
- authenticated localhost IPC/MCP с origin check;
- никаких arbitrary shell/FFmpeg arguments от модели;
- MP4/XML/export receipt с source hashes, edits и license provenance.

Это продолжает ранее выбранный порядок: **изоляция агентов → тест русской диктовки → безопасный монтаж**.

### Урок 3. Video Scraping APIs — только taxonomy

[Video Scraping APIs](https://github.com/cporter202/video-scraping-apis) не подключаем как scraper и не зеркалируем. Список можно использовать только для поиска канонического provider, после чего отдельно проверяются API docs, Terms, privacy, pricing, retention и разрешённые типы URL.

Запрещены DRM/paywall bypass, импорт без прав и передача cookies/credentials неизвестным services.

## Модуль 4. Голос и русская диктовка

### Урок 1. Gemini 3.5 Transcribe

[Gemini 3.5 Transcribe](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/) достоин ограниченного benchmark для **Jarvis Control**, **Hopson Sentinel** и **Eclipse Media**. [Jot](https://github.com/google-gemini/jot-gemini-transcribe-macOS) полезен как Apache-2.0 reference для local capture и Keychain boundary, но это macOS sample и не официально поддерживаемый продукт Google.

Тест русской диктовки:

1. 30 consented/synthetic clips: тихая комната, шум, имена, код, смешанный русский/английский.
2. Live и file режимы тестируются отдельно.
3. Сохраняются raw и cleaned transcript; удаление слов-паразитов нельзя применять к юридическим или медицинским записям без явного режима.
4. Speaker labels оцениваются как вероятностные; они не подтверждают личность.
5. Метрики: WER, entity accuracy, timestamp drift, speaker attribution, first-token/final latency и стоимость.
6. До отправки audio пользователь видит cloud disclosure и retention policy; секреты и чужие разговоры исключены.

**Решение:** roadmap pilot. Локальный STT остаётся privacy fallback.

## Модуль 5. Library, дизайн и обучение

### Урок 1. Amicro в Animation Lab

[Amicro](https://github.com/Subhan-code/Amicro--Micro-transitions-) можно использовать сейчас, но по одному компоненту:

- loader обязан объяснять фактическое состояние, а не просто развлекать;
- chart показывает units, empty/error/loading и keyboard-accessible summary;
- используются Eclipse tokens и существующая icon family;
- reduced-motion сохраняет понятный feedback;
- desktop/mobile проверяются визуально, animation — по FPS и layout stability.

Подходит для **Eclipse Library**, **AI Hub**, Media dashboards. Не превращаем Chat, CRM или approvals в маркетинговую страницу.

### Урок 2. 3D prompt и image prompt catalog

Недоступный [3D landing prompt](https://telegra.ph/Universalnyj-prompt-3D-lending-dlya-produkta-08-27) не копируем. На его месте Library создаёт first-party guide: цель → story sections → asset manifest → motion budget → reduced-motion → mobile fallback → visual QA.

[AI Image Prompts Skill](https://github.com/YouMind-OpenLab/ai-image-prompts-skill) используем для taxonomy и search UX в **Text2Image** и **Eclipse AI Hub**. Каждая реально импортируемая запись требует source URL, author, item-level license, model, version, negative constraints и права на examples. Community assets автоматически не переносим.

### Урок 3. How to Train Your GPT

[How to Train Your GPT](https://github.com/raiyanyahya/how-to-train-your-gpt) — хороший практический курс для **Educator-AI** и воспроизводимый маленький benchmark для **ModelForge**. Первый lesson запускает только 17M configuration на rights-cleared corpus с seed/config/data hash. 151M вариант — отдельный optional lab с GPU и disk budget.

## Модуль 6. AI Office и Presence

### Урок 1. Auto-Company: идеи без кода

[Auto-Company](https://github.com/MaxMiksa/Auto-Company) остаётся architecture reference из-за отсутствия LICENSE и небезопасных permission modes. В **Office Core** переносим собственными силами:

- 14 ролей превращаются в capabilities, inputs, outputs и acceptance criteria;
- каждый сотрудник имеет model profile, budget и fallback;
- циклы `plan → execute → verify → review → approve` ограничены по времени и стоимости;
- consensus не заменяет фактические tests;
- внешние действия проходят Action Firewall;
- UI показывает event log и receipts, но не владеет состоянием runtime.

### Урок 2. Furever Dock: Presence без пользовательских фото

[Furever Dock](https://www.fureverdock.com/) подтверждает привлекательность desktop companion, но privacy draft блокирует загрузку личных фотографий. Для **Jarvis Presence** используем first-party synthetic avatar, отдельный sandboxed renderer и состояния `idle/listening/thinking/speaking/action/approval/error`. Renderer не получает keys, clipboard, filesystem или PC tools.

## Модуль 7. Developer intelligence

### Урок 1. Archify — первый безопасный пилот

[Archify](https://github.com/tt-a1i/archify) лучше всего подходит для немедленного bounded pilot:

- pin revision и полный review package/scripts;
- индексировать небольшой public/synthetic repository;
- исключить `.env`, dumps, attachments и secrets;
- требовать evidence path для каждого node и edge;
- validation падает на unresolved references;
- diagram сохраняет source commit и generated receipt.

Применение: Library architecture guides, Eclipse Chat event flow, AI Office approvals, Sentinel action receipts.

### Урок 2. Skill Doctor — только на синтетических разговорах

[Warp Skill Doctor](https://www.warp.dev/skill-doctor) читает прошлые agent conversations и предлагает изменения skills. Начальный pilot использует только synthetic transcripts в свежем temp directory. Реальные чаты, ключи, клиентский код и auto-edit production skills исключены. Метрики дополняются task success, regressions, permissions и security findings — одного «overall score» недостаточно.

## Модуль 8. Очерёдность внедрения

### Урок 1. Следующие четыре шага

1. **Сейчас:** добавить Archify-like evidence contract и один Amicro pattern в Library QA, без установки полного стороннего стека.
2. **Затем:** Provider Router contract + synthetic canaries для двух approved providers и GLM API candidate.
3. **После этого:** русская STT benchmark suite с local baseline и Gemini public-preview candidate.
4. **Далее:** Eclipse Media typed timeline slice с rights-cleared clips, preview, approval и export receipt.

Godogen/GameForge, Auto-Company roles и Jarvis Presence идут после этих основ. Массовые provider installs, полная 320B-модель, чужие prompt/assets, пользовательские фото и bypass permissions не входят в текущий rollout.

## Модуль 9. Общий security gate

Перед любым пилотом:

- pin commit/model/version и сохранить license evidence;
- проверить install/build scripts, SBOM, advisories и сетевые обращения;
- secrets только server-side или в OS credential store;
- deny-by-default filesystem/network/tools;
- validate URLs, files, MIME, size, duration и archive contents;
- rate limits, time/token/cost budgets и cancellation;
- preview + approval для external или destructive actions;
- immutable receipt и простое восстановление;
- synthetic data first; personal/customer data только по отдельному согласию;
- никакого direct install из Library и никакого auto-merge предложенных skill changes.
