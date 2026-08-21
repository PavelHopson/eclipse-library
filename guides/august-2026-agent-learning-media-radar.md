# Agent, learning и media radar — 21 августа 2026

Проверенная редакторская выжимка из новостной подборки. Рекламные формулировки не считаются
доказательствами: карточки опираются на official product pages, canonical repositories, model cards,
license files и официальную документацию.

## Короткий итог

| Находка | Решение | Что подтверждено | Что исправлено |
|---|---|---|---|
| Huihui-Qwen3.8-27B-abliterated | Оставить reference | Community-модификация Qwen с Apache-2.0 repository | Ослабленные safety controls — риск, сравнение с Opus не подтверждено |
| PC-Tuning | Без новой карточки | Запись уже есть в Library | Повтор исключён |
| LLM-as-a-Verifier | Добавить в roadmap | MIT framework для best-of-N generation и verifier selection | Публичные benchmark claims нужно воспроизвести на наших fixtures |
| Minimalist Split Poster Prompt | Внедрить сейчас | First-party адаптация композиционного prompt pattern | Не копирует чужой визуал или автора; права на assets обязательны |
| Anthropic Dreaming video | Не публиковать пока | Идея интерактивного educational storytelling полезна | В сообщении нет официального URL, авторство и claims не проверены |
| HAPI | Оставить reference | Self-hosted remote control для coding agents, AGPL-3.0 | Не «безопасный удалённый доступ по умолчанию»: высокие auth и supply-chain риски |
| Magnitude | Добавить в roadmap | Apache-2.0 local-model agent с hardware profiling | «Оптимальная модель» определяется только нашим benchmark |
| ai-copywriter | Оставить reference | MIT copywriting workflow | Detector evasion не является quality metric и не внедряется |
| Happy Shrimp | Оставить reference | AI music service с full-song workflow | Права, retention и commercial terms требуют отдельной проверки |
| CraftingTable Computer | Добавить в roadmap | Интерактивный симулятор CPU/памяти для обучения | Это учебная модель, не точный hardware emulator |
| Seven Language Coach Workflows | Внедрить сейчас | First-party prompt pack: dialog, correction, vocabulary, listening, writing | Без обещаний «выучить язык»; нужен human/teacher review |
| Ornith 1.5 9B GGUF | Добавить в roadmap | MIT text-generation GGUF model | Не подтверждены multimodal, mobile и self-improving claims |
| MarketingSkills | Обновить и добавить в roadmap | MIT repository с reusable marketing skills | Дубликат не создан; внешние writes только через approval |
| CtxPort | Оставить reference | MIT local context export/import tool | Export может содержать чувствительный chat context |
| ffmpeg-webCLI | Добавить в roadmap | GPL-3.0 browser-local FFmpeg через WebAssembly | Не использовать для удаления provenance или обхода прав |
| Gemini Study Notebooks | Оставить reference | Официальный guided-learning notebook workflow | Это не доказательство всех заявленных функций Google Search |
| TeamSpeak 6 | Оставить reference | Актуальный cross-platform voice/chat product | Региональные и будущие claims не фиксируются без product evidence |
| Reverse API Engineer | Не использовать на чужих API | MIT HAR-to-code research tool | HAR может содержать cookies/tokens; только owned/staging APIs |
| Claude Academy | Внедрить сейчас | Официальная учебная платформа Anthropic | Количество курсов и certificate availability могут меняться |
| Ox Alpha | Не использовать в production | OpenRouter показывает stealth model и большой context window | Владелец, DPA, retention и стабильность неизвестны |
| ChatGPT Images: transparent backgrounds | Внедрить сейчас | Официальная справка подтверждает transparent image output | Не отменяет проверку прав на исходные и reference assets |

## Внедрить сейчас

### 1. Educator-AI: Claude Academy и Language Coach

- **Проблема:** пользователю трудно перейти от общей теории к короткой проверяемой практике.
- **Сценарий:** выбрать навык → выполнить bounded exercise → получить correction с объяснением →
  сохранить прогресс и следующий шаг.
- **Разработка:** learning-track manifest, evidence link, rubric, privacy warning для личных текстов,
  teacher/human review и local progress storage.
- **Ценность:** понятный путь обучения вместо россыпи ссылок.
- **Сложность / приоритет:** `S / P1`.
- **Следующий шаг:** собрать два pilot tracks: «Claude fundamentals» и «Language practice».

### 2. Text2Image / Eclipse Media / Shotforge: прозрачные assets и poster workflow

- **Проблема:** подготовка reusable asset и social poster требует ручной очистки фона и композиции.
- **Сценарий:** brief → rights check → transparent asset или poster draft → preview → human approval → export.
- **Разработка:** explicit alpha-background option, checkerboard preview, safe PNG/WebP export,
  source/rights metadata и 1:1/4:5/9:16 templates.
- **Ценность:** быстрее выпускать собственные обложки, release cards и product visuals.
- **Сложность / приоритет:** `S / P1`.
- **Риски:** trademark, likeness, copyrighted references; автоматическая публикация запрещена.

## Добавить в roadmap

### 3. Sentinel / AI Hub / oh-my-claudecode: Verifier Pipeline

- **Проблема:** один agent draft может выглядеть уверенно и при этом содержать скрытый дефект.
- **Сценарий:** несколько bounded candidates → independent read-only verifier → evidence-backed ranking →
  человек принимает итог.
- **Разработка:** synthetic fixtures с известными дефектами, provider allowlist, budget/timeout,
  disagreement report и запрет verifier на запись.
- **Ценность:** измеримое снижение дефектов в code review, research и structured outputs.
- **Сложность / приоритет:** `M / P1`.

### 4. AI Hub / Sentinel: Local Model Hardware Doctor

- **Проблема:** пользователь не понимает, какую локальную модель потянет его компьютер.
- **Сценарий:** read-only hardware scan → совместимые model profiles → реальный short benchmark →
  объяснимый выбор без автоматической установки.
- **Разработка:** Magnitude как архитектурный reference; Ornith и другие модели — только fixtures;
  RAM/VRAM/disk, latency, quality, energy и license gates.
- **Ценность:** меньше неудачных загрузок и понятный local/private route.
- **Сложность / приоритет:** `M / P1`.

### 5. Eclipse Media: browser-local media preview

- **Проблема:** простой trim/transcode сейчас может потребовать server upload.
- **Сценарий:** пользователь выбирает свой файл → браузер оценивает размер/codec → выполняет bounded
  local preview → показывает export size до сохранения.
- **Разработка:** ffmpeg-webCLI как GPL reference, отдельный worker, memory/time limits, cancel,
  progress и fallback в server queue только по согласию.
- **Ценность:** приватность и экономия backend compute для коротких файлов.
- **Сложность / приоритет:** `M / P1`.

### 6. Educator-AI: Computer Lab

- **Проблема:** CPU, memory и data flow трудно понять по статичному тексту.
- **Сценарий:** пошаговое выполнение простой программы с видимыми регистрами, памятью и ошибками.
- **Разработка:** собственная учебная модель по мотивам CraftingTable, accessibility-first controls,
  deterministic lessons и reduced-motion mode.
- **Ценность:** практическое понимание архитектуры компьютера.
- **Сложность / приоритет:** `S / P2`.

## Только reference и ограничения

- **HAPI:** изучить remote-agent UX, но не подключать production repositories, cookies или secrets.
  Любой pilot — только disposable container, short-lived token, TLS, audit log и explicit revoke.
- **MarketingSkills:** брать структуру skills, но не давать автономные publish/ad/payment scopes.
- **CtxPort:** полезен как reference для portable context; экспортировать только выбранные поля с preview.
- **Happy Shrimp и ai-copywriter:** сравнивать workflow и UX, не зависеть от закрытого сервиса и не
  оптимизировать тексты под «обход AI detectors».
- **Gemini Study Notebooks и TeamSpeak 6:** product/UX references без срочной интеграции.

## Не использовать без отдельного решения

- **Huihui abliterated:** исключить из user-facing и autonomous production routes; возможен только
  isolated safety benchmark на synthetic data.
- **Reverse API Engineer:** не применять к третьим сторонам или production traffic. Для owned API
  сначала удалить cookies, bearer tokens, personal data и подписанные URLs из HAR.
- **Ox Alpha:** не передавать private code, customer data или secrets до подтверждения владельца,
  Terms/DPA, retention, pricing stability и incident process.
- **Anthropic Dreaming video:** вернуться к проверке после получения официальной ссылки.
