# July 2026 project integration

> Куда раскладываем находки из батча 30.06-01.07.2026.
> Это не список "всё срочно внедрить", а фильтр: что идёт в продукт, что в roadmap,
> что остаётся только reference.

## Eclipse Chat

**Добавить в стратегический backlog:**

- **OpenHuman** - референс для AI Memory: room memory, project memory, "since you were away", semantic search, память решений и файлов.
- **SimpleX Chat** - privacy-модель. ✅ **УЖЕ СДЕЛАНО (не backlog):** реализовано и в проде как 3 приватность-среза EC — одноразовые/истекающие invites (PR #106), исчезающие сообщения по TTL канала (PR #107), temp-комнаты. Остаётся опц-полиш: QR/одноразовые ссылки в UI, пер-сообщение TTL-override, дальнейшая минимизация метаданных.
- **OpenClaw Mobile** - mobile operator control: подтверждение действий агента с телефона, voice/camera/location только через явные permissions.
- **OmniRoute** - provider-router для AI agents: fallback, cost-aware routing, context compression. ⚠️ Пересекается с уже листнутым **ClawRouter** и `AI_PROVIDER=auto` (StarCRM, фолбэк Groq→Gemini) — не плодить второй роутер; взять как источник доп-идей (context compression, cost-метрики) поверх существующего.
- **TREK** - project/client rooms как workspace вокруг процесса: планы, опросы, чеклисты, budget/table layer.
- **Cloudflare Agent Ready** - проверять public landing/download/docs на AI Search, Web Bot Auth, MCP и agent discoverability.
- **PPT Master** - client/project reports: история проекта, решения, задачи и deliverables -> редактируемая PPTX-презентация.
- **Claude Science** - reference для execution rooms: проверяемые артефакты, код, окружение и conversation history рядом с результатом.

## Hopson Sentinel

- **OpenHuman** - долгосрочная память локального оператора: привычки пользователя, cwd/session context, docs/logs, audit trail.
- **OpenClaw Mobile** - мобильный approval/control-plane для удалённого оператора.
- **OmniRoute** - безопасный model-router: локальные/облачные провайдеры, fallback, метрики стоимости и отказов.

## Eclipse DnD Forge

- **TREK** - UX-референс маршрутов, журнала партии и планирования:
  - party travel log;
  - route board;
  - itinerary по квестам;
  - polls для решений группы;
  - shared checklist перед сессией.

## Shotforge / Text2Image / Eclipse Media

- **Google image/video low-cost tier** - проверить как дешёвый provider для генерации изображений, карточек проектов, preview и коротких видео.
- **Seed-Audio 1.0** - reference для озвучки/диалогов, только с consent-gate на клонирование голоса.
- **Torlink** - только reference для CLI UX, очередей загрузки и source health-check; не делать публичный downloader "любых файлов".

## Educator-AI

- **Large Language Model Course** - учебный трек "LLM Engineer": fundamentals, fine-tuning, quantization, evals, deployment, продажа AI-сервисов.
- **Claude Science** - reference для проверяемых исследовательских проектов: источник -> анализ -> график -> отчёт -> ревью цитат/расчётов.
- **PPT Master** - учебные слайды из PDF/конспекта/курса, editable PPTX вместо картинки-слайда.

## Eclipse AI Hub

- **Claude Science** - reference для отдельного Research/RAG workspace: scientific sources, notebooks, charts, reviewer, full trace.
- **PPT Master** - модуль "Document -> Deck": документ, отчёт или исследование превращается в редактируемую презентацию.

## oh-my-claudecode

- **Loopy** - audit step для skills/MCP/automation loops:
  - найти дубли;
  - найти рискованные действия;
  - проверить пересечения skills;
  - сформировать отчёт перед установкой новых автоматизаций.

## Не тащим в продукт

- **Uncensored Qwen / "Claude Opus" HF model** - сомнительный провенанс, high-risk uncensored, только isolated safety reference.
- **Aliens Eye** - только self-audit цифрового следа с согласием, не инструмент "пробива".
- **Torlink** - не публичный downloader.
- **Voice cloning** - только свой голос или явное согласие.
- **Claude Science** - закрытая beta-среда, не open-source; сначала тестируем доступ/планы/экспорт.
