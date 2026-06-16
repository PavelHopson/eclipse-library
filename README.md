<div align="center">

# ⚡ Eclipse Library

### Кураторская библиотека инструментов, ресурсов и знаний

*Собираем лучшее — ничего не теряем*

### 🌐 [library.eclipse-forge.ru](https://library.eclipse-forge.ru) — веб-версия с поиском и навигацией

[![Web](https://img.shields.io/badge/%F0%9F%8C%90_веб--версия-library.eclipse--forge.ru-8b5cf6?style=flat)](https://library.eclipse-forge.ru)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e?style=flat)](LICENSE)

</div>

---

## Содержание

- [🤖 AI & Claude Code](#-ai--claude-code)
- [🛒 Разработка интернет-магазинов](#-разработка-интернет-магазинов)
- [🛠️ Dev Tools & CLI](#️-dev-tools--cli)
- [🎬 Media & Download](#-media--download)
- [💬 Self-hosted Платформы](#-self-hosted-платформы)
- [🛡 Privacy / OPSEC](#-privacy--opsec)
- [🖥️ Hardware & Workstation](#️-hardware--workstation)
- [🎮 GameDev](#-gamedev)
- [🎓 Компьютерные науки (MIT)](#-компьютерные-науки-mit)
- [📥 Подборка Eclipse (апрель 2026)](#-подборка-eclipse-апрель-2026)
- [📥 Подборка Eclipse (май 2026)](#-подборка-eclipse-май-2026)
- [📥 Подборка Eclipse (27.05.2026)](#-подборка-eclipse-27052026)
- [📥 Подборка Eclipse (28.05–05.06.2026)](#-подборка-eclipse-280505062026)
- [📥 Подборка Eclipse (08.06.2026)](#-подборка-eclipse-08062026)
- [📥 Подборка Eclipse (09.06.2026)](#-подборка-eclipse-09062026)
- [📥 Подборка Eclipse (10–16.06.2026)](#-подборка-eclipse-1016062026)
- [📦 Наши проекты](#-наши-проекты)

---

## 🤖 AI & Claude Code

### Бесплатные API

| Ресурс | Описание | Звёзды |
|--------|----------|--------|
| [free-llm-api-resources](https://github.com/cheahjs/free-llm-api-resources) | 26 провайдеров бесплатных LLM API — OpenRouter, Google AI Studio, NVIDIA NIM, Mistral, Groq, Cohere и др. Лимиты и условия | [![Stars](https://img.shields.io/github/stars/cheahjs/free-llm-api-resources?style=flat)](https://github.com/cheahjs/free-llm-api-resources) |
| [NVIDIA Build (95 моделей)](https://build.nvidia.com/models) | 95 бесплатных API: Qwen, GLM, DeepSeek, Kimi, Gemma, Mistral, Nemotron — без лимитов на момент публикации (проверять условия) | — |
| [Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) | Агрегатор 200+ моделей для генерации видео и картинок — Seedance Pro, Kling, Veo, Flux, Midjourney и др. Подключение к Claude Code / Codex одним кликом. **С оговоркой:** проверять статус каждой модели — у части могут отключиться бесплатные эндпоинты | [![Stars](https://img.shields.io/github/stars/Anil-matcha/Open-Generative-AI?style=flat)](https://github.com/Anil-matcha/Open-Generative-AI) |

### Grey-zone API-прокси (только для pet-проектов)

> ⚠️ **Юридические и ToS-риски.** Эти проекты обходят официальные лимиты Anthropic / OpenAI / Windsurf через ротацию аккаунтов или нелегальные эндпоинты. **Не использовать** в Star CRM, Eclipse AI Hub, Hopson Sentinel, любых коммерческих / продуктивных средах — гарантированный путь к cease-and-desist или внезапной потере доступа. Только для личных экспериментов на свой риск. Легитимные бесплатные альтернативы — таблица **Бесплатные API** выше + локальные модели (Ollama, LM Studio).

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [WindsurfAPI](https://github.com/dwgx/WindsurfAPI) | Прокси-доступ к Claude Opus / GPT-5 / 50+ моделям с автоматической ротацией между чужими аккаунтами при исчерпании лимитов. Та же категория, что *free-claude-code* — может перестать работать в любой момент | [![Stars](https://img.shields.io/github/stars/dwgx/WindsurfAPI?style=flat)](https://github.com/dwgx/WindsurfAPI) |

### ML Training & Research

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [autoresearch](https://github.com/karpathy/autoresearch) | Автономный AI-инженер от Андрея Карпаты — 100 тренировок модели за ночь, 630 строк кода, 1 GPU. Обучает, оптимизирует, сравнивает и улучшает нейросети 24/7 | [![Stars](https://img.shields.io/github/stars/karpathy/autoresearch?style=flat)](https://github.com/karpathy/autoresearch) |
| [HuggingFace Skills](https://github.com/huggingface/skills) | ML-скиллы для AI-агентов — файн-тюнинг (SFT/DPO/GRPO), создание датасетов, бенчмарки, публикация на arXiv, мониторинг обучения | [![Stars](https://img.shields.io/github/stars/huggingface/skills?style=flat)](https://github.com/huggingface/skills) |

### LLM роутинг и оптимизация

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [ClawRouter](https://github.com/BlockRunAI/ClawRouter) | Локальный LLM-роутер — 55+ моделей, <1ms роутинг по 15 параметрам, OpenAI-compatible API, профили auto/eco/premium, экономия до 92% | [![Stars](https://img.shields.io/github/stars/BlockRunAI/ClawRouter?style=flat)](https://github.com/BlockRunAI/ClawRouter) |
| [MetaClaw](https://github.com/aiming-lab/MetaClaw) | Meta-learning прокси — создаёт скиллы из диалогов, инжектит в промпт, опционально LoRA-дообучение (GRPO). 3 режима: skills_only / rl / auto | [![Stars](https://img.shields.io/github/stars/aiming-lab/MetaClaw?style=flat)](https://github.com/aiming-lab/MetaClaw) |
| [freellmapi](https://github.com/tashfeenahmed/freellmapi) | Агрегатор бесплатных тиров под одним API — вводишь **свои** ключи (Google, Groq, Cerebras, SambaNova, NVIDIA, Mistral, GitHub, Cohere, Cloudflare, Z.ai), система роутит, следит за лимитами, переключает провайдера и балансирует нагрузку. **Важно — это НЕ серая зона:** в отличие от `WindsurfAPI`, здесь используются собственные легально полученные ключи, а не ротация чужих аккаунтов. Маркетинговая подача «800M токенов на халяву» — гипербола, по факту это сумма ваших же free-tier лимитов. Легитимная замена ручного жонглирования ключами | [![Stars](https://img.shields.io/github/stars/tashfeenahmed/freellmapi?style=flat)](https://github.com/tashfeenahmed/freellmapi) |

### Финансовый AI

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [Dexter](https://github.com/virattt/dexter) | Автономный AI-агент для инвестиционного ресёрча — 3 агента (action/validation/answer), финансовая отчётность, самопроверка, TypeScript/Bun, MIT | [![Stars](https://img.shields.io/github/stars/virattt/dexter?style=flat)](https://github.com/virattt/dexter) |

### AI Security

| Проект | Описание |
|--------|----------|
| [OpenAI Daybreak](https://openai.com/daybreak/) | OpenAI security-агент — GPT-5.5 Cyber + Codex Security, поиск уязвимостей в сервисах. Sales-gated (нужно общаться с отделом продаж). Reference для security-pipeline в Hopson Sentinel / внутренних аудитах |
| [claude-for-legal](https://github.com/anthropics/claude-for-legal) | Anthropic legal-агенты: 60+ AI-юристов для контрактного / корпоративного / трудового права, IP. Чтение и проверка контрактов, претензии, отслеживание дедлайнов, MCP-коннекторы. Ставится в Claude Code или через API. **Верификация:** репозиторий анонсирован 14.05.2026 — перед использованием убедиться, что это официальный Anthropic-репо, а не маркетинговый клон |

### AI-поиск и исследования

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [Perplexica](https://github.com/ItzCrazyKns/Perplexica) | Self-hosted клон Perplexity — AI-поиск с источниками и фактчекингом, Ollama / OpenAI / Anthropic, загрузка файлов/видео/аудио, полная приватность | [![Stars](https://img.shields.io/github/stars/ItzCrazyKns/Perplexica?style=flat)](https://github.com/ItzCrazyKns/Perplexica) |
| [Open Researcher](https://github.com/firecrawl/open-researcher) | AI-исследователь от FireCrawl — парсинг всего (фото/видео/статьи/соцсети), анализ, отчёт с источниками, экран раздумий | [![Stars](https://img.shields.io/github/stars/firecrawl/open-researcher?style=flat)](https://github.com/firecrawl/open-researcher) |
| [Sci-Bot](https://sci-bot.ru/) | Научный AI-ассистент поверх Sci-Hub — 85М исследований, цитаты со ссылками. **Грей-зона:** для академического ресёрча, не для коммерческой репликации | — |

### Мультиагентные платформы

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [Paperclip](https://github.com/paperclipai/paperclip) | AI-компания из виртуальных сотрудников — босс нанимает агентов (инженеры, маркетологи, дизайнеры), панель управления, бюджет, поддержка любых AI-агентов | [![Stars](https://img.shields.io/github/stars/paperclipai/paperclip?style=flat)](https://github.com/paperclipai/paperclip) |
| [Agent Orchestrator](https://github.com/ComposioHQ/agent-orchestrator) | 30 параллельных кодинг-агентов на одном ПК — PR, баги, тесты, задачи. TypeScript, 40K строк, 17 плагинов, панель управления | [![Stars](https://img.shields.io/github/stars/ComposioHQ/agent-orchestrator?style=flat)](https://github.com/ComposioHQ/agent-orchestrator) |
| [Maestro](https://github.com/RunMaestro/Maestro) | GUI-оркестратор агентов — параллельный запуск, git worktrees, playbooks, групповой чат, remote с телефона, Win/Mac/Linux | [![Stars](https://img.shields.io/github/stars/RunMaestro/Maestro?style=flat)](https://github.com/RunMaestro/Maestro) |

### Парсинг и данные

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [Apify Agent Skills](https://github.com/apify/agent-skills) | Скиллы парсинга для AI-агентов — 55+ платформ (Twitter, TikTok, YouTube, Google Maps, Amazon...), Claude Code плагин, Apify Store | [![Stars](https://img.shields.io/github/stars/apify/agent-skills?style=flat)](https://github.com/apify/agent-skills) |

### Видеопродакшн и VFX

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [Director's Console](https://github.com/NickPittas/DirectorsConsole) | AI VFX-студия — 67 кинопресетов (Interstellar, Parasite...), 43 анимационных (Pixar, Ghibli...), storyboard canvas, 13 LLM для промптов, multi-model генерация | [![Stars](https://img.shields.io/github/stars/NickPittas/DirectorsConsole?style=flat)](https://github.com/NickPittas/DirectorsConsole) |
| [HY-World 2.0](https://github.com/Tencent-Hunyuan/HY-World-2.0) | Tencent — 3D миры за один клик из промпта/фото/видео, экспорт в Unreal/Unity, интерактивная физика | [![Stars](https://img.shields.io/github/stars/Tencent-Hunyuan/HY-World-2.0?style=flat)](https://github.com/Tencent-Hunyuan/HY-World-2.0) |
| [CADAM](https://github.com/Adam-CAD/CADAM) | 3D-моделирование по тексту/картинке — экспорт STL/SCAD, локально, опенсорс | [![Stars](https://img.shields.io/github/stars/Adam-CAD/CADAM?style=flat)](https://github.com/Adam-CAD/CADAM) |
| [Gemini Omni](https://gemini.google/overview/video-generation/) | Промпт-редактирование видео от Google — замена и добавление объектов в кадре, смена одежды, удаление людей по текстовому описанию. Облачный сервис. **Дисклеймер о deepfake** (как у Sulphur-2 ниже): редактирование видео с узнаваемыми лицами реальных людей требует их согласия — РФ deepfake-нормы, EU AI Act | — |

### Uncensored generative models (high-risk)

> 🚨 **Высокий риск злоупотребления.** Эти модели идут на HuggingFace с маркетинговой подачей «без цензуры» — то есть safety-фильтры намеренно сняты. Возможные вектора злоупотребления: **non-consensual deepfakes**, **NSFW без согласия моделируемого лица**, **CSAM** (при определённых датасетах и промптах). HuggingFace такие модели иногда снимает по abuse-report — ссылка может отвалиться. **Не использовать** в продуктах для публичного релиза (Star CRM, Eclipse AI Hub, eclipse-chat, eclipse-dnd-forge, любой клиентский deliverable). Допустимая зона — закрытый R&D, fantasy-сцены без узнаваемых лиц, тесты ограничений генеративных пайплайнов. Для legit video-gen задач в наших продуктах есть [HY-World 2.0](#видеопродакшн-и-vfx) выше и open-source альтернативы вне «uncensored» позиционирования (Hunyuan Video, Mochi-1, CogVideoX, LTX-Video — добавим при первом реальном продуктовом use-case).

| Модель | Описание |
|--------|----------|
| [Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | Open-weights text-to-video / image-to-video без safety-фильтров. Локальный запуск + ComfyUI-интеграция. **Карантин:** только closed-R&D без распознаваемых лиц / детских образов. Любое использование с лицами реальных людей требует их письменного согласия (deepfake-законодательство в РФ, EU AI Act, US state laws) |

### Презентации и документы

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [Allweone Presentation AI](https://github.com/allweonedev/presentation-ai) | Локальный генератор презентаций — OpenAI/Gemini/локальные модели, поиск через Tavily, бесплатная альтернатива Gamma | [![Stars](https://img.shields.io/github/stars/allweonedev/presentation-ai?style=flat)](https://github.com/allweonedev/presentation-ai) |

### Промпт-коллекции

| Ресурс | Описание |
|--------|----------|
| [9 промптов для презентаций](https://github.com/PavelHopson/eclipse-library#-промпт-коллекции) | План, хук, сценарий слайдов, упрощение, визуал из данных, убийство возражений, 1-слайд сводка, сюжетная арка, речь — встроены как пресеты в [Eclipse AI Hub](https://github.com/PavelHopson/eclipse-ai-hub) Copywriter |
| [Auto Prompt](https://github.com/AIDotNet/auto-prompt) | Оптимизатор промптов — классифицирует, переписывает, переводит, добавляет reasoning-команды, сотни готовых шаблонов | [![Stars](https://img.shields.io/github/stars/AIDotNet/auto-prompt?style=flat)](https://github.com/AIDotNet/auto-prompt) |
| [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts) | Александрийская библиотека промптов — сотни шаблонов: IT, тексты, карьера, образование, креатив и др. | [![Stars](https://img.shields.io/github/stars/f/awesome-chatgpt-prompts?style=flat)](https://github.com/f/awesome-chatgpt-prompts) |
| [GPT-5.5 Prompt Guide (OpenAI)](https://developers.openai.com/api/docs/guides/prompt-guidance?model=gpt-5.5) | Официальный гайд OpenAI: НЕ переиспользовать старые длинные промпты, минимизировать инструкции, давать данные + ожидаемый формат |
| [Nano Banana Upscaling Prompt](https://arena.ai/ru/image/direct) | Шаблон «Аналитическая Реконструкция Микро-Деталей» — апскейл фото с сохранением идентичности |
| [Humanize Rewriter](prompts/humanize-rewriter.md) | Промпт для humanize-rewrite текста под автоответы маркетплейсов / SMM / контент. **С оговоркой:** широко распространяется в студенческой среде как обход AI-детекторов — используем только в операторских/контент-задачах, не для академического обхода (та же планка, что у `talk-normal` в разделе агентов) |
| [Lyra Prompt Optimizer](prompts/lyra-prompt-optimizer.md) | Мета-промпт: «промпт, который пишет промпты». 4-D методология (Deconstruct → Diagnose → Develop → Deliver), 2 режима (DETAIL / BASIC), универсальный — ChatGPT / Claude / Gemini. Используем как препроцессор в Eclipse AI Hub Copywriter и как первый шаг в `/ultrawork` (oh-my-claudecode) |

### Генерация изображений

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [Awesome Nano Banana](https://github.com/PicoTrex/Awesome-Nano-Banana-images) | 110+ промптов для Google Nano Banana — манга, пиксель-арт, продуктовое фото, 3D, комиксы, миниатюры, LEGO, стиль-трансфер и др. | [![Stars](https://img.shields.io/github/stars/PicoTrex/Awesome-Nano-Banana-images?style=flat)](https://github.com/PicoTrex/Awesome-Nano-Banana-images) |

### OpenClaw экосистема

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [awesome-openclaw-usecases](https://github.com/hesamsheikh/awesome-openclaw-usecases) | 42+ реальных юзкейсов OpenClaw — соцсети, креатив, DevOps, продуктивность, ресёрч, финансы | [![Stars](https://img.shields.io/github/stars/hesamsheikh/awesome-openclaw-usecases?style=flat)](https://github.com/hesamsheikh/awesome-openclaw-usecases) |
| [awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | 1700+ скиллов — отфильтрованный реестр без мусора, Agent Skill конвенция, сотни категорий (DevOps, поиск, умный дом) | [![Stars](https://img.shields.io/github/stars/VoltAgent/awesome-openclaw-skills?style=flat)](https://github.com/VoltAgent/awesome-openclaw-skills) |
| [Build Your Own OpenClaw](https://github.com/czl9707/build-your-own-openclaw) | Гайд на 18 шагов — от чат-бота до мультиагентной системы с памятью, код + примеры | [![Stars](https://img.shields.io/github/stars/czl9707/build-your-own-openclaw?style=flat)](https://github.com/czl9707/build-your-own-openclaw) |
| [Composio](https://github.com/ComposioHQ/openclaw-composio) | Авто-авторизация API-сервисов (Google, GitHub...) — без ручного ввода ключей |  |
| [Memory LanceDB](https://github.com/openclaw/openclaw/blob/main/extensions/memory-lancedb) | Векторная память для OpenClaw — долгосрочный контекст вместо встроенной памяти |  |
| [MemOS Cloud](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin) | Облачная память с изоляцией между агентами, синхронизация между устройствами |  |
| [OpenClaw Foundry](https://github.com/lekt9/openclaw-foundry) | Агент сам наблюдает за паттернами работы и пишет себе новые инструменты |  |
| [Better Gateway](https://github.com/ThisIsJeron/openclaw-better-gateway) | Стабильный шлюз — авто-переподключение, не теряет соединения |  |
| [QClaw (Tencent)](https://qclawsg.qq.com/) | Локальный Computer Use агент на базе OpenClaw — мессенджер-управление (Telegram/Discord), долгосрочная память |  |

### AI Coding Agents

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [OpenCode](https://github.com/anomalyco/opencode) | Open-source AI coding agent — provider-agnostic (Claude/OpenAI/Google/локальные), client/server архитектура, remote с телефона, MCP + LSP, MIT | [![Stars](https://img.shields.io/github/stars/anomalyco/opencode?style=flat)](https://github.com/anomalyco/opencode) |
| [OpenDevin](https://github.com/AI-App/OpenDevin.OpenDevin) | Автономный AI-разработчик — терминал + редактор + браузер, уточняющие вопросы, open-source | [![Stars](https://img.shields.io/github/stars/AI-App/OpenDevin.OpenDevin?style=flat)](https://github.com/AI-App/OpenDevin.OpenDevin) |
| [Kimi WebBridge](https://www.kimi.com/features/webbridge) | Браузерный агент от Moonshot/Kimi — ресёрчит сотни сайтов в таблицу, клонирует UI по клику, автоматизирует рутину. Интеграция с Claude Code, Codex, Hermes, Kimi Code CLI. Работает в Edge / Chrome / Firefox. Бесплатный. **С оговоркой:** browser-агент видит все вкладки — не запускать в профиле с банковскими сессиями / прод-консолями | — |
| [Google Antigravity 2.0](https://antigravity.google/) | Агентная IDE от Google — суб-агенты для параллельных задач, агенты делегируют задачи друг другу, исследование + генерация кода. Интеграция Nano Banana (ассеты / текстуры) и других Google-инструментов. Появился **Antigravity CLI** — терминальный клиент в стиле Claude Code. Лучше всего работает в связке с Gemini 3.5 Flash. Конкурент Claude Code / Codex — стоит держать на радаре как альтернативный workflow | — |
| [OpenAI Codex Use-Cases](https://developers.openai.com/codex/use-cases) | Официальный сборник 50+ воркфлоу для Codex — от разбора почты до автоматизации браузера. По каждому: кому подходит, готовый стартовый промпт, инструкция повторения. Reference-материал для проектирования собственных агентных пайплайнов (oh-my-claudecode, Hopson Sentinel) | — |

### Claude Code Channels (Telegram & Discord)

| Плагин | Описание |
|--------|----------|
| [Telegram Channel](https://github.com/anthropics/claude-plugins-official/blob/main/external_plugins/telegram/README.md) | Официальный MCP-мост Telegram ↔ Claude Code — управляй агентом с телефона 24/7, файлы до 50MB, pairing + allowlist |
| [Discord Channel](https://github.com/anthropics/claude-plugins-official/blob/main/external_plugins/discord/README.md) | Официальный MCP-мост Discord ↔ Claude Code — треды, история (100 сообщений), файлы до 25MB, реакции |
| [claudecode-telegram](https://github.com/hanxiao/claudecode-telegram) | Альтернативный Telegram-мост — Cloudflare Tunnel для безопасного удалённого доступа, standalone бот без MCP | [![Stars](https://img.shields.io/github/stars/hanxiao/claudecode-telegram?style=flat)](https://github.com/hanxiao/claudecode-telegram) |

**Быстрый старт (Telegram):**
```bash
# В Claude Code сессии
/plugin install telegram@claude-plugins-official
/reload-plugins
/telegram:configure <BOT_TOKEN_FROM_BOTFATHER>
# Перезапустить
claude --channels plugin:telegram@claude-plugins-official
# В Telegram: написать боту → получить код → в Claude: /telegram:access pair <code>
```

### Оркестрация и агенты

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [oh-my-claudecode](https://github.com/PavelHopson/oh-my-claudecode) | Multi-agent оркестрация для Claude Code — 5 режимов, 19 агентов, eco mode | [![Stars](https://img.shields.io/github/stars/yeachan-heo/oh-my-claudecode?style=flat)](https://github.com/yeachan-heo/oh-my-claudecode) |
| [claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | Рабочие имплементации + сравнение 10+ workflow фреймворков — агенты, скиллы, хуки, MCP, примеры `.claude/` конфигов | [![Stars](https://img.shields.io/github/stars/shanraisshan/claude-code-best-practice?style=flat)](https://github.com/shanraisshan/claude-code-best-practice) |
| [Antigravity Awesome Skills](https://github.com/sickn33/antigravity-awesome-skills) | 860+ скиллов для любых AI-агентов — Claude Code, OpenCode, Gemini, Codex, Cursor. Разработка, DevOps, SEO, бизнес | [![Stars](https://img.shields.io/github/stars/sickn33/antigravity-awesome-skills?style=flat)](https://github.com/sickn33/antigravity-awesome-skills) |
| [claude-skills](https://github.com/alirezarezvani/claude-skills) | 230+ skills по категориям: дизайн, маркетинг, бизнес, копирайт, кибербез, Dev — установка из шаблона в терминале | [![Stars](https://img.shields.io/github/stars/alirezarezvani/claude-skills?style=flat)](https://github.com/alirezarezvani/claude-skills) |
| [designer-skills (87)](https://github.com/Owl-Listener/designer-skills) | 87 узкоспециализированных дизайн-скиллов для Claude Code от практикующих дизайнеров: типографика, верстка, композиция, цветовые палитры, дизайн-ресёрч, сайты / приложения / баннеры / соцсети. Дополняет более общие каталоги — берём конкретно когда нужна дизайн-плоскость в Claude Code workflow (eclipse-ai-hub Copywriter / Image Studio, Romark лендинг, Shotforge, маркетплейс-карточки в Star CRM) | [![Stars](https://img.shields.io/github/stars/Owl-Listener/designer-skills?style=flat)](https://github.com/Owl-Listener/designer-skills) |
| [Auto Claude](https://github.com/AndyMik90/Auto-Claude) | 19 AI-агентов в параллельных терминалах — авто-трекинг задач, логи, roadmap, 24/7 кодинг | [![Stars](https://img.shields.io/github/stars/AndyMik90/Auto-Claude?style=flat)](https://github.com/AndyMik90/Auto-Claude) |
| [everything-claude-code](https://github.com/worldflowai/everything-claude-code) | 28 агентов + 119 навыков + хуки + MCP-конфиги одним пакетом — готовые `.claude/` конфиги | [![Stars](https://img.shields.io/github/stars/worldflowai/everything-claude-code?style=flat)](https://github.com/worldflowai/everything-claude-code) |
| [awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) | 100+ субагентов под конкретные задачи: qa, security, db-migration, api-contract, devops | [![Stars](https://img.shields.io/github/stars/VoltAgent/awesome-claude-code-subagents?style=flat)](https://github.com/VoltAgent/awesome-claude-code-subagents) |
| [Anthropic Skills](https://github.com/anthropics/skills) | Официальный репозиторий скиллов от Anthropic — каноничные паттерны | [![Stars](https://img.shields.io/github/stars/anthropics/skills?style=flat)](https://github.com/anthropics/skills) |
| [awesome-claude-code](https://github.com/jqueryscript/awesome-claude-code) | Агрегатор всего лучшего по теме Claude Code — meta-каталог | [![Stars](https://img.shields.io/github/stars/jqueryscript/awesome-claude-code?style=flat)](https://github.com/jqueryscript/awesome-claude-code) |
| [Superpowers](https://github.com/obra/superpowers) | Фреймворк навыков для Claude Code и Cursor — агент сначала уточняет требования, потом действует | [![Stars](https://img.shields.io/github/stars/obra/superpowers?style=flat)](https://github.com/obra/superpowers) |
| [Get Shit Done](https://github.com/gsd-build/get-shit-done) | Контекст-инжиниринг — чтобы AI не забывал задачу на третьем шаге, дисциплина для длинных сессий | [![Stars](https://img.shields.io/github/stars/gsd-build/get-shit-done?style=flat)](https://github.com/gsd-build/get-shit-done) |
| [claude-mem](https://github.com/thedotmack/claude-mem) | Плагин памяти для Claude Code — persistent context между сессиями | [![Stars](https://img.shields.io/github/stars/thedotmack/claude-mem?style=flat)](https://github.com/thedotmack/claude-mem) |
| [andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | Гайдлайны Карпаты, портированные в скиллы Claude Code — best practices от автора nanoGPT | [![Stars](https://img.shields.io/github/stars/forrestchang/andrej-karpathy-skills?style=flat)](https://github.com/forrestchang/andrej-karpathy-skills) |
| [talk-normal](https://github.com/hexiecs/talk-normal) | Скиллы humanize-генерации текста (обход AI-детекторов). **С оговоркой:** пересекается с политикой академической честности | [![Stars](https://img.shields.io/github/stars/hexiecs/talk-normal?style=flat)](https://github.com/hexiecs/talk-normal) |

**Маркетплейсы скиллов для AI-агентов:**
- [skills.sh](https://skills.sh/) · [skillhub.club](https://skillhub.club/) · [skillsmp.com](https://skillsmp.com/)
| [ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | Клонирует **любой** сайт за один промпт — скилл `/clone-website` для Claude Code. Параллельные агенты в worktrees, `getComputedStyle()`, pixel-perfect вывод. | [![Stars](https://img.shields.io/github/stars/JCodesMore/ai-website-cloner-template?style=flat)](https://github.com/JCodesMore/ai-website-cloner-template) |

**Режимы oh-my-claudecode:**
- `/autopilot "задача"` — верхнеуровневая задача, Claude всё делает сам
- `/team 2:executor "задача"` — параллельные агенты (например, backend + frontend одновременно)
- `/ultrawork "задача"` — pipeline: research → plan → code → verify
- `/deep-interview "идея"` — Сократовские вопросы перед стартом, уточняет требования
- Eco mode — автоматически использует Haiku для мелких задач, Opus для сложных

**ai-website-cloner-template — 5-фазный конвейер:**
- **Reconnaissance** — скриншоты на всех брейкпоинтах, sweep по hover/scroll/click
- **Foundation** — скачивает все ассеты, токены, шрифты, настраивает глобальные стили
- **Component Specs** — для каждого компонента пишет `.SPEC.md` с точными `getComputedStyle()` значениями
- **Parallel Build** — отдельный агент на каждый компонент в изолированном git worktree
- **Assembly & QA** — мержит всё, visual diff, TypeScript check, `npm run build`

```bash
# Запуск (нужен Chrome MCP)
claude --chrome
/clone-website https://linear.app
```

**Установка:**
```bash
/plugin marketplace add https://github.com/PavelHopson/oh-my-claudecode
/plugin install oh-my-claudecode
/omc-setup
```

---

### Reverse Engineering & Config Generation

| Проект | Описание |
|--------|----------|
| [GitReverse](https://www.gitreverse.com/) | Конвертирует любой GitHub репо в rebuild prompt для AI-IDE |
| [ai-setup](https://github.com/PavelHopson/ai-setup) | CLI автогенерации CLAUDE.md, .cursor/rules, AGENTS.md + команда `reverse` |

**Команда `reverse` в ai-setup:**
```bash
# Без API ключей (шаблон)
ai-setup reverse PavelHopson/CryptoPulse

# С Claude AI улучшением
ANTHROPIC_API_KEY=sk-... ai-setup reverse owner/repo --ai

# Только промпт (для пайпинга)
ai-setup reverse owner/repo --stdout
```

---

## 🛒 Разработка интернет-магазинов

> **Раздел для команды: как и на чём делать интернет-магазин — бесплатно на старте.** Ниже путь по шагам и инструменты по этапам. **👉 Рекомендованный путь под наш React/Vite/TS-стек:** витрина на **Next.js (App Router) + Tailwind** из готового стартера → каталог/корзина на **Medusa** (Node/TS) → платежи **ЮKassa** (РФ) / **Stripe** (global) → база **Postgres (Neon)** → хостинг витрины на **Vercel / нашем VPS**, бэкенд — на **нашем VPS / Railway**. Всё с бесплатным стартом. Полный гайд по шагам → [guides/ecommerce-dev.md](guides/ecommerce-dev.md).

### С чего начать — путь (бесплатно)

| Шаг | Что делать |
|---|---|
| **1 · Выбери подход** | **No-code** (клиенту срочно, без кода) · **Open-source-движок** (готовый магазин, self-host) · **Headless** (макс. контроль, наш путь — отдельный фронт + API-бэкенд) |
| **2 · Витрина (frontend)** | Next.js App Router + Tailwind. Берём **готовый бесплатный стартер** (ниже), не пишем с нуля |
| **3 · Каталог + корзина (backend)** | Headless-движок (**Medusa / Saleor / Vendure**) ИЛИ корзина-как-сервис (**Snipcart**), если витрина статическая |
| **4 · Платежи** | РФ — **ЮKassa / Тинькофф / CloudPayments**; global — **Stripe**. Подключается готовым SDK/плагином |
| **5 · База данных** | **Postgres** на бесплатном тарифе **Neon / Supabase** (или наш VPS) |
| **6 · Хостинг** | Витрина → **Vercel / Cloudflare / наш VPS**; бэкенд → **наш VPS / Railway / Render** |
| **7 · Запуск** | Поддомен `*.eclipse-forge.ru` + SEO (см. раздел ниже) + аналитика + платёжный аккаунт |

### Headless-движки (для разработчиков · self-host · бесплатно)

| Ресурс | Описание | Stars |
|---|---|---|
| [Medusa](https://medusajs.com) | API-first commerce на **Node/TypeScript** (REST). Полный контроль, модульная архитектура, официальный Next.js-стартер. **Наш дефолт** под кастомные магазины — стартует за минуты | [![Stars](https://img.shields.io/github/stars/medusajs/medusa?style=flat)](https://github.com/medusajs/medusa) |
| [Saleor](https://saleor.io) | Headless на **Python/Django**, весь API — **GraphQL**. Мультиканальность/мультивалюта в ядре. Self-host бесплатно (Saleor Cloud — enterprise) | [![Stars](https://img.shields.io/github/stars/saleor/saleor?style=flat)](https://github.com/saleor/saleor) |
| [Vendure](https://www.vendure.io) | **NestJS + GraphQL + Postgres**, маленькое ядро, чистый plugin-API. Если команда любит TS и хочет модульный бэкенд | [![Stars](https://img.shields.io/github/stars/vendure-ecommerce/vendure?style=flat)](https://github.com/vendure-ecommerce/vendure) |
| [Sylius](https://sylius.com) | **PHP/Symfony**, гибкий, под сложную бизнес-логику и нестандартные процессы | [![Stars](https://img.shields.io/github/stars/Sylius/Sylius?style=flat)](https://github.com/Sylius/Sylius) |
| [Bagisto](https://bagisto.com) | **Laravel**, быстрый старт, многоязычный, есть marketplace-расширение | [![Stars](https://img.shields.io/github/stars/bagisto/bagisto?style=flat)](https://github.com/bagisto/bagisto) |

### Готовые витрины / стартеры (Next.js · React · free)

| Ресурс | Описание | Stars |
|---|---|---|
| [Vercel Next.js Commerce](https://github.com/vercel/commerce) | Эталонная Next.js-витрина от Vercel (App Router + React Server Components), 11k+⭐. База под headless-Shopify или любой API. **С неё проще всего начать** | [![Stars](https://img.shields.io/github/stars/vercel/commerce?style=flat)](https://github.com/vercel/commerce) |
| [Saleor Storefront](https://github.com/saleor/storefront) | **Next.js 16 + React 19 + TS + Tailwind + GraphQL**, готовый многошаговый checkout (гость/аккаунт), мультиканал/мультивалюта, варианты, a11y | [![Stars](https://img.shields.io/github/stars/saleor/storefront?style=flat)](https://github.com/saleor/storefront) |
| [Medusa Next.js Storefront](https://docs.medusajs.com/learn/installation) | Официальная витрина к Medusa: мультирегион, каталог с вариантами, корзина, checkout, аккаунты, заказы. Ставится `npx create-medusa-app` (бэкенд+фронт в одном) | — |
| [Payload (e-commerce шаблон)](https://payloadcms.com) | Full-stack Next.js-шаблон с визуальным редактированием + Stripe (Payload CMS на TS) | [![Stars](https://img.shields.io/github/stars/payloadcms/payload?style=flat)](https://github.com/payloadcms/payload) |
| [Your Next Store](https://yournextstore.com) | Минималистичная Next.js-витрина под Stripe, без тяжёлого бэкенда — для быстрых магазинов | — |

### Классические open-source движки («магазин из коробки» · self-host)

| Ресурс | Описание | Stars |
|---|---|---|
| [WooCommerce](https://woocommerce.com) | Плагин для **WordPress** — самый массовый способ. Тысячи тем/расширений, низкий порог входа, бесплатно | [![Stars](https://img.shields.io/github/stars/woocommerce/woocommerce?style=flat)](https://github.com/woocommerce/woocommerce) |
| [PrestaShop](https://prestashop.com) | Самостоятельная CMS-платформа (PHP), популярна в Европе и РФ | [![Stars](https://img.shields.io/github/stars/PrestaShop/PrestaShop?style=flat)](https://github.com/PrestaShop/PrestaShop) |
| [OpenCart](https://www.opencart.com) | Лёгкая PHP-платформа, простой старт для небольших магазинов | [![Stars](https://img.shields.io/github/stars/opencart/opencart?style=flat)](https://github.com/opencart/opencart) |
| [Spree](https://spreecommerce.org) | **Ruby on Rails**, headless-friendly, API-first | [![Stars](https://img.shields.io/github/stars/spree/spree?style=flat)](https://github.com/spree/spree) |
| [nopCommerce](https://www.nopcommerce.com) | **.NET / C#**, корпоративная, бесплатная | [![Stars](https://img.shields.io/github/stars/nopSolutions/nopCommerce?style=flat)](https://github.com/nopSolutions/nopCommerce) |

### No-code / быстрый старт (бесплатный план)

| Ресурс | Описание |
|---|---|
| [Ecwid (Lightspeed)](https://www.ecwid.com) | Виджет-магазин, встраивается на любой сайт, есть бесплатный план — для срочной задачи без кода |
| [Tilda](https://tilda.cc) | RU-конструктор сайтов со встроенным магазином: быстрый лендинг + корзина |
| [Square Online](https://squareup.com/online-store) | Бесплатный конструктор магазина на платёжке Square |
| [Gumroad](https://gumroad.com) · [Lemon Squeezy](https://www.lemonsqueezy.com) | Для **цифровых товаров** (файлы, подписки) — берут платежи и налоги на себя |

### Корзина / checkout как сервис (на статичную витрину без бэкенда)

| Ресурс | Описание |
|---|---|
| [Snipcart](https://snipcart.com) | Корзина + checkout на любой статичный сайт через `data-`атрибуты. Free на dev/тест |
| [Swell](https://www.swell.is) | Headless-commerce API + JS SDK, есть free-план |
| [Reflow](https://reflowhq.com) | Корзина/платежи поверх статики, простой JS-SDK |
| [Shopify Buy Button](https://www.shopify.com/buy-button) | Если у клиента Shopify — встроить товары на свой сайт скриптом |

### Платежи

> **РФ:** подключаются готовым SDK/плагином; нужен договор (ИП/ООО/самозанятость). **Global:** Stripe — стандарт для разработки; MoR-сервисы берут налоги мира на себя.

| Ресурс | Описание |
|---|---|
| [ЮKassa (YooMoney)](https://yookassa.ru) | Самый ходовой РФ-эквайринг: карты, СБП, кошельки. Готовые SDK/плагины под все движки. **Наш дефолт для РФ** |
| [Тинькофф Касса (T-Bank)](https://www.tbank.ru/kassa/) | РФ-эквайринг, быстрый онбординг, хорошее API/SDK |
| [CloudPayments](https://cloudpayments.ru) | РФ-эквайринг, гибкое API, виджет-форма |
| [Robokassa](https://robokassa.com) | РФ-агрегатор, простой старт для мелких продаж |
| [Stripe](https://stripe.com) | Мировой стандарт для dev: карты, подписки, отличное API и тест-режим (РФ — через зарубежное юрлицо) |
| [Paddle](https://www.paddle.com) · [Lemon Squeezy](https://www.lemonsqueezy.com) | Merchant of Record: продаёшь цифровое — они берут НДС/налоги на себя |

### Контент / Headless CMS (товары, страницы, блог)

| Ресурс | Описание | Stars |
|---|---|---|
| [Strapi](https://strapi.io) | OSS headless CMS на Node, REST/GraphQL, self-host бесплатно | [![Stars](https://img.shields.io/github/stars/strapi/strapi?style=flat)](https://github.com/strapi/strapi) |
| [Directus](https://directus.io) | OSS data-platform поверх своей БД: админка + автоматический API | [![Stars](https://img.shields.io/github/stars/directus/directus?style=flat)](https://github.com/directus/directus) |
| [Payload](https://payloadcms.com) | OSS headless CMS на Next/TS — идеально с нашим стеком | [![Stars](https://img.shields.io/github/stars/payloadcms/payload?style=flat)](https://github.com/payloadcms/payload) |
| [Sanity](https://www.sanity.io) | Структурированный контент, щедрый free-tier, real-time | — |

### База данных + хостинг (бесплатный старт)

| Ресурс | Описание | Stars |
|---|---|---|
| [Neon](https://neon.tech) | Serverless **Postgres**, щедрый free-tier, ветки БД. Дефолт под Medusa/Vendure | — |
| [Supabase](https://supabase.com) | Postgres + auth + storage + API на free-tier | [![Stars](https://img.shields.io/github/stars/supabase/supabase?style=flat)](https://github.com/supabase/supabase) |
| [Vercel](https://vercel.com) | Лучший хост для Next.js-витрины: free-tier, превью-деплои | — |
| [Cloudflare Pages](https://pages.cloudflare.com) | Бесплатный статик/SSR-хостинг без лимита бэндвидса | — |
| [Railway](https://railway.app) · [Render](https://render.com) | PaaS под **бэкенд** (Medusa/Saleor) + БД, free-tier/кредит | — |
| [Coolify](https://coolify.io) | OSS self-host PaaS («свой Heroku») — поднять Medusa+Postgres на **нашем VPS** одной панелью | [![Stars](https://img.shields.io/github/stars/coollabsio/coolify?style=flat)](https://github.com/coollabsio/coolify) |
| Eclipse Forge VPS | Наш VPS (Mara): фронт через Caddy, бэкенд systemd-сервисом, поддомен `*.eclipse-forge.ru` | — |

### Дизайн / UI (бесплатно)

| Ресурс | Описание |
|---|---|
| [Tailwind CSS](https://tailwindcss.com) · [shadcn/ui](https://ui.shadcn.com) | База стилей + копируемые компоненты (карточки/формы/диалоги) — на них все стартеры |
| [Flowbite](https://flowbite.com) · [Preline](https://preline.co) | Готовые e-commerce-блоки (товар, корзина, checkout) на Tailwind, free |
| [Untitled UI](https://www.untitledui.com) · Figma e-commerce kits | Бесплатные Figma-киты под магазины — дизайн до кода |

### Обучение / гайды (бесплатно)

| Ресурс | Описание |
|---|---|
| [Medusa docs](https://docs.medusajs.com) | Официальный гайд «магазин с нуля», шаг за шагом — **начинать отсюда** |
| [Saleor docs](https://docs.saleor.io) · [Vendure docs](https://docs.vendure.io) | Официальная документация с quickstart |
| [Next.js Commerce](https://github.com/vercel/commerce) | Эталонный код-референс — учиться по нему |
| [roadmap.sh](https://roadmap.sh) | Карты навыков frontend/backend — видеть пробелы в команде |
| [freeCodeCamp](https://www.freecodecamp.org) | Полные бесплатные видео-сборки магазина «build an e-commerce» |

## 📈 SEO & Маркетинг

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [awesome-seo-tools](https://github.com/serpapi/awesome-seo-tools) | Полная коллекция SEO-инструментов — ключевые слова, анализ ссылок, оптимизация контента, рейтинги, расширения для браузера | [![Stars](https://img.shields.io/github/stars/serpapi/awesome-seo-tools?style=flat)](https://github.com/serpapi/awesome-seo-tools) |
| [ai-marketing-skills](https://github.com/ericosiu/ai-marketing-skills) | Skills для Claude Code под маркетолога: стратегия, трафик, SMM, контент, shortы, аналитика, SEO (подборка) | [![Stars](https://img.shields.io/github/stars/ericosiu/ai-marketing-skills?style=flat)](https://github.com/ericosiu/ai-marketing-skills) |
| [geo-seo-claude](https://github.com/zubair-trabzada/geo-seo-claude) | SEO-аудит на видимость для AI-поиска — ChatGPT, Perplexity, Bing AI Overviews. Скоринг 0-10 + план оптимизации | [![Stars](https://img.shields.io/github/stars/zubair-trabzada/geo-seo-claude?style=flat)](https://github.com/zubair-trabzada/geo-seo-claude) |
| [job-ops](https://github.com/DaKheera47/job-ops) | Авто-поиск работы — AI прочёсывает сайты, адаптирует CV под вакансию, обходит ATS-скрининг, локально | [![Stars](https://img.shields.io/github/stars/DaKheera47/job-ops?style=flat)](https://github.com/DaKheera47/job-ops) |
| [Higgsfield Virality Predictor](https://higgsfield.ai/apps/virality-predictor) | Скоринг хука / удержания / виральности видео до релиза + Ad Reference перемонтаж. **С оговоркой:** "карта зон мозга" — маркетинговая обёртка (без EEG никаких реальных активационных карт), но как hook/retention heuristic годится. Free trial на момент находки | — |

---

## 🛠️ Dev Tools & CLI

| Проект | Стек | Описание |
|--------|------|----------|
| [LocalSend](https://github.com/localsend/localsend) | Flutter/Dart | Передача файлов по локальной сети без интернета — HTTPS, P2P discovery, все платформы | [![Stars](https://img.shields.io/github/stars/localsend/localsend?style=flat)](https://github.com/localsend/localsend) |
| [GitHub Store](https://github.com/OpenHub-Store/GitHub-Store) | Kotlin/Compose | App Store для GitHub — установка софта из Releases в 1 клик, авто-обновления, Android/Win/macOS/Linux | [![Stars](https://img.shields.io/github/stars/OpenHub-Store/GitHub-Store?style=flat)](https://github.com/OpenHub-Store/GitHub-Store) |
| [Ghost Downloader 3](https://github.com/XiaoYouChR/Ghost-Downloader-3) | Python | Ускоритель загрузок +30% — параллельные части, AI-выбор сервера, Win/Linux/Mac | [![Stars](https://img.shields.io/github/stars/XiaoYouChR/Ghost-Downloader-3?style=flat)](https://github.com/XiaoYouChR/Ghost-Downloader-3) |
| [Eclipse Claw](https://github.com/PavelHopson/Eclipse-Claw) | Rust | Высокопроизводительный веб-парсер — CLI + API, MCP-сервер, TLS-отпечатки, -67% токенов |
| [Scrapy](https://github.com/scrapy/scrapy) | Python | Классический краулинг-фреймворк — обход всего сайта, пагинация, pipelines, robots.txt, 53K+ звёзд | [![Stars](https://img.shields.io/github/stars/scrapy/scrapy?style=flat)](https://github.com/scrapy/scrapy) |
| [Scrapling](https://github.com/D4Vinci/Scrapling) | Python | Лёгкий парсер без зависимостей — точечный поиск элементов, таблицы, текст, картинки, кастомные запросы | [![Stars](https://img.shields.io/github/stars/D4Vinci/Scrapling?style=flat)](https://github.com/D4Vinci/Scrapling) |
| [Scraping APIs](https://github.com/cporter202/scraping-apis-for-devs) | Каталог | 2622 API для парсинга — соцсети, маркетплейсы, новости, игры, БД и др. | [![Stars](https://img.shields.io/github/stars/cporter202/scraping-apis-for-devs?style=flat)](https://github.com/cporter202/scraping-apis-for-devs) |
| [API-mega-list](https://github.com/cporter202/API-mega-list) | Каталог | 10498 API (тот же автор, что Scraping APIs) — сбор данных, автоматизация, аналитика, лиды, e-commerce, соцсети, недвижимость, рынок труда, AI-интеграции. Расширенный надмножество к строке выше — годится как reference для data-ingestion в Lead-Sniper / Eclipse-webclaw | [![Stars](https://img.shields.io/github/stars/cporter202/API-mega-list?style=flat)](https://github.com/cporter202/API-mega-list) |
| [CyberScraper 2077](https://github.com/itsOwen/CyberScraper-2077) | Python | AI-парсер по промпту — описываешь что нужно, обход капчи/антибота, экспорт JSON/CSV/Excel | [![Stars](https://img.shields.io/github/stars/itsOwen/CyberScraper-2077?style=flat)](https://github.com/itsOwen/CyberScraper-2077) |
| [ScraperAI](https://github.com/scraperai/scraperai) | Python | AI-парсер с локальными моделями — Selenium, минимизация HTML, маскировка, гибкие настройки | [![Stars](https://img.shields.io/github/stars/scraperai/scraperai?style=flat)](https://github.com/scraperai/scraperai) |
| [TGSpyder](https://github.com/Darksight-Analytics/tgspyder) | Python | Telegram-парсер — участники чатов, история сообщений, инвайт-ссылки, поиск по ID, экспорт в CSV | [![Stars](https://img.shields.io/github/stars/Darksight-Analytics/tgspyder?style=flat)](https://github.com/Darksight-Analytics/tgspyder) |
| [Telegram Files](https://github.com/jarvis2f/telegram-files) | — | Telegram-загрузчик — все типы файлов, параллельная загрузка, превью, локально | [![Stars](https://img.shields.io/github/stars/jarvis2f/telegram-files?style=flat)](https://github.com/jarvis2f/telegram-files) |
| [Repomix](https://github.com/yamadashy/repomix) | Node.js / CLI | Упаковщик кодбазы в один MD-файл — для AI-ревью больших модулей, фильтры по include/exclude | [![Stars](https://img.shields.io/github/stars/yamadashy/repomix?style=flat)](https://github.com/yamadashy/repomix) |
| [AB Download Manager](https://abdownloadmanager.com/) | Multi-platform | Менеджер загрузок: одновременные потоки, планировщик, авто-сортировка по папкам, Android | — |
| [hackingtool](https://github.com/Z4nzu/hackingtool) | Python | 185 инструментов пентеста — OSINT, веб-аудит, Wi-Fi, реверс. **Только для своих систем, в обучающих целях** | [![Stars](https://img.shields.io/github/stars/Z4nzu/hackingtool?style=flat)](https://github.com/Z4nzu/hackingtool) |
| [GTweak](https://github.com/Greedeks/GTweak) | C# / WPF | Windows-комбайн: debloat (OneDrive / Edge / Copilot / Recall / UWP-апы), блокировка телеметрии (MS / NVIDIA / Intel), отключение служб, темы. **С оговоркой:** содержит HWID/KMS-активацию (нарушение Microsoft EULA) и опции выключения Defender/SmartScreen/UAC (ослабление защиты) — **эти модули не используем**, только debloat / privacy. Альтернативы без активаторов — Win11Debloat / privacy.sexy | [![Stars](https://img.shields.io/github/stars/Greedeks/GTweak?style=flat)](https://github.com/Greedeks/GTweak) |
| [CloakBrowser](https://github.com/CloakHQ/CloakBrowser) | Python / Chromium | Антидетект-браузер на пропатченном Chromium: реалистичный TLS, прохождение reCAPTCHA v3 (~0.9), Cloudflare Turnstile, drop-in под Playwright. **С оговоркой:** инструмент по дизайну обходит антибот-защиту чужих сайтов, что нарушает их ToS (Cloudflare / Google) и в ряде юрисдикций сближается с CFAA-составами. Допустимые сценарии: тестирование собственных сайтов; автоматизация **собственных авторизованных** аккаунтов на маркетплейсах (Star CRM use-case: валидный токен селлера + сайт с антибот-слоем). **Не для** скрапинга чужих защищённых данных, mass-registration, обхода ATS / CAPTCHA на платформах без собственной авторизации | [![Stars](https://img.shields.io/github/stars/CloakHQ/CloakBrowser?style=flat)](https://github.com/CloakHQ/CloakBrowser) |
| [TorBot](https://github.com/DedSecInside/TorBot) | Python | OSINT-бот для onion-сегмента — карта переходов, проверка живости, JSON-экспорт. **Только для легальных pentest-сценариев** | [![Stars](https://img.shields.io/github/stars/DedSecInside/TorBot?style=flat)](https://github.com/DedSecInside/TorBot) |
| [awesome-free-apps](https://github.com/Axorax/awesome-free-apps) | Каталог | Бесплатный софт по категориям (видео, фото, музыка, игры, утилиты) для всех ОС | [![Stars](https://img.shields.io/github/stars/Axorax/awesome-free-apps?style=flat)](https://github.com/Axorax/awesome-free-apps) |
| [Witr](https://github.com/pranshuparmar/witr) | Cross-platform | Process inspector / killer — показывает источник каждого процесса (зачем запущен, сколько освободит после kill), флагает подозрительное (удалённые файлы, но процесс жив), массовое завершение. Win / macOS / Linux / FreeBSD. **Не путать с anti-malware** — это диагностический инструмент, не сканер угроз | [![Stars](https://img.shields.io/github/stars/pranshuparmar/witr?style=flat)](https://github.com/pranshuparmar/witr) |
| [RevPDF 4.0](https://revpdf.com/) | Desktop / Offline | Альтернатива Adobe Acrobat — 20 МБ, полностью офлайн, редактирование текста и картинок, redaction, split / merge, без облака и регистрации. Бесплатный | — |

**CloakBrowser — integration points в наших проектах** (только в допустимых сценариях из дисклеймера):
- **Eclipse Claw** — antibot-обход как опциональный backend поверх Playwright-пути; полезно когда целевые сайты для собственной валидной автоматизации добавили Turnstile.
- **Star CRM AutoReply** — продакшн-кейс: валидные WB / Ozon токены продавца, но маркетплейсы катят антибот-слой даже на авторизованные сессии. Собственный токен + собственный аккаунт + оплаченные API-операции = legit-зона.
- **Eclipse-webclaw / Lead-Sniper** — web-scraping с явным ToS-claim'ом со своей стороны (договорной парсинг, открытые источники).

---

## 🎬 Media & Download

| Проект | Стек | Описание |
|--------|------|----------|
| [Eclipse Media](https://github.com/PavelHopson/eclipse-media) | React 19 + FastAPI | Self-hosted загрузчик видео/аудио — 1000+ сайтов, SSE прогресс, TTL |
| [Reclip](https://github.com/averygan/reclip) | Python + Flask | Оригинальный минималистичный загрузчик (вдохновение для Eclipse Media) |
| [TADA](https://huggingface.co/collections/HumeAI/tada) | Python / HuggingFace | Open-source TTS — до 700 сек экспрессивной речи, 5x быстрее аналогов, без галлюцинаций |
| [Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS) | Python / Alibaba | TTS нового поколения — 10 языков (вкл. русский), 49 голосов, 97ms задержка, клонирование голоса, 5 моделей | [![Stars](https://img.shields.io/github/stars/QwenLM/Qwen3-TTS?style=flat)](https://github.com/QwenLM/Qwen3-TTS) |
| [Inworld Realtime TTS-2](https://inworld.ai/blog/realtime-tts-2) | Cloud + On-device | TTS на живых диалогах — принимает на вход аудио предыдущей реплики, prompt-controlled подача (`[говори уставшим, но теплым голосом]`), 100+ языков с тембром, смена языка в середине предложения, клон голоса с 15 сек, латентность до 200 мс. **Локальный релиз доступен** — [on-device build](https://inworld.ai/on-device) (14.05.2026) и [realtime.ai](https://realtime.ai/) для онлайн-теста. ТОП-1 Artificial Analysis на 12.05.2026 (обошёл OpenAI TTS, Gemini, ElevenLabs) | — |
| [CosyVoice 3](https://github.com/FunAudioLLM/CosyVoice) | Python / Alibaba | Мини-TTS 0.5B — 9 языков (русский!), zero-shot клон голоса за 3 сек, 150ms стриминг, запускается на слабом железе | [![Stars](https://img.shields.io/github/stars/FunAudioLLM/CosyVoice?style=flat)](https://github.com/FunAudioLLM/CosyVoice) |
| [Frame](https://github.com/66HEX/frame) | Electron / FFmpeg | GUI-комбайн для видео — сжатие, конвертация, апскейл, русский язык, Win/Mac | [![Stars](https://img.shields.io/github/stars/66HEX/frame?style=flat)](https://github.com/66HEX/frame) |
| [Linly-Dubbing](https://github.com/Kedreamix/Linly-Dubbing) | Python / ML | AI-дубляж видео на 100+ языков — перевод речи, клон голоса, липсинк, авто-субтитры | [![Stars](https://img.shields.io/github/stars/Kedreamix/Linly-Dubbing?style=flat)](https://github.com/Kedreamix/Linly-Dubbing) |
| [Translumo](https://github.com/ramjke/Translumo) | C# / .NET | Перевод текста на экране в реальном времени — фильмы, игры, аниме. EN/JP/ZH/KO → RU, несколько движков | [![Stars](https://img.shields.io/github/stars/ramjke/Translumo?style=flat)](https://github.com/ramjke/Translumo) |
| [ACE-Step 1.5](https://github.com/ACE-Step/ACE-Step-1.5) | Python / ML | AI-генератор музыки — 10 сек на трек, до 10 мин длительность, 1000 инструментов, 50 языков, коммерческое использование | [![Stars](https://img.shields.io/github/stars/ACE-Step/ACE-Step-1.5?style=flat)](https://github.com/ACE-Step/ACE-Step-1.5) |
| [Comic-translate](https://github.com/ogkalu2/comic-translate) | Python | AI-перевод манги и комиксов — сохраняет шрифты и форматирование, нужен API (Gemini/OpenAI) | [![Stars](https://img.shields.io/github/stars/ogkalu2/comic-translate?style=flat)](https://github.com/ogkalu2/comic-translate) |
| [Final2x](https://github.com/EutropicAI/Final2x) | Python | AI-апскейлер изображений — восстановление деталей из пиксельных фото, Win/Mac/Linux | [![Stars](https://img.shields.io/github/stars/EutropicAI/Final2x?style=flat)](https://github.com/EutropicAI/Final2x) |
| [WhisperLiveKit](https://github.com/QuentinFuxa/WhisperLiveKit) | Python / FastAPI | Real-time STT с разделением спикеров — Whisper + diarization, WebSocket, 200+ языков, локально | [![Stars](https://img.shields.io/github/stars/QuentinFuxa/WhisperLiveKit?style=flat)](https://github.com/QuentinFuxa/WhisperLiveKit) |
| [Hearica](https://hearica.com/) | Desktop / Cloud | Live-субтитры поверх любых приложений (Zoom / Meet / игры / мессенджеры), перевод на 60+ языков на лету, разделение спикеров цветом, экспорт PDF/DOC/TXT/SRT. Автор глухой → дизайн ориентирован на accessibility. **Cloud-based** — для конфиденциальных созвонов оценивать отдельно; для self-hosted альтернативы — WhisperLiveKit выше | — |
| [MOSS-TTS-Nano](https://github.com/OpenMOSS/MOSS-TTS-Nano) | Python / OpenMOSS | TTS на CPU без GPU — 100M параметров, 20 языков (русский), 48 кГц, real-time, клонирование голоса | [![Stars](https://img.shields.io/github/stars/OpenMOSS/MOSS-TTS-Nano?style=flat)](https://github.com/OpenMOSS/MOSS-TTS-Nano) |
| [Supertonic 3](https://github.com/supertone-inc/supertonic) | Python / Supertone | Лёгкий TTS — имитация эмоций (вздохи, кашель), 31 язык (русский), локальный запуск даже на мобильных, безлимитный | [![Stars](https://img.shields.io/github/stars/supertone-inc/supertonic?style=flat)](https://github.com/supertone-inc/supertonic) |
| [TranslateBooksWithLLMs](https://github.com/hydropix/TranslateBooksWithLLMs) | Python | Переводчик документов через GPT/Gemini/Mistral/DeepSeek/Ollama — EPUB / SRT / DOCX / TXT | [![Stars](https://img.shields.io/github/stars/hydropix/TranslateBooksWithLLMs?style=flat)](https://github.com/hydropix/TranslateBooksWithLLMs) |
| [sliceyt](https://sliceyt.com/) | Web | Скачивание YouTube + кусочный отрез (например 30 сек) — MP4 / MP3, любое качество, в браузере | — |

**Улучшения Eclipse Media над Reclip:**

| Reclip | Eclipse Media |
|--------|--------------|
| Polling статуса | SSE (реальный прогресс в %) |
| Файлы не удаляются | Авто-удаление через 1 час (TTL) |
| Один URL | Массовая загрузка + дедупликация |
| Нет истории | История в localStorage |
| Vanilla JS | React 19 + TypeScript + Zustand |

---

## 💬 Self-hosted Платформы

| Проект | Стек | Описание |
|--------|------|----------|
| [OwnCord](https://github.com/cofedish/OwnCord) | Go + TypeScript (Tauri) | Self-hosted Discord — голос/видео, каналы, DMs. Early alpha |
| [Eclipse Chat](https://github.com/PavelHopson/eclipse-chat) | React 19 + Fastify + Socket.io | Наш Discord-альтернатив — в разработке |
| [Office Website](https://github.com/baotlake/office-website) | Web | Self-hosted офисный пакет — документы, таблицы, презентации, PDF прямо в браузере | [![Stars](https://img.shields.io/github/stars/baotlake/office-website?style=flat)](https://github.com/baotlake/office-website) |
| [MiroTalk P2P](https://p2p.mirotalk.com/) | Web / WebRTC | P2P-звонки в браузере — 4К видео, e2e-шифрование, передача файлов без лимитов, без регистрации | — |
| [Viseron](https://github.com/roflcoopter/viseron) | Python / Docker | Умное видеонаблюдение с AI — запись только при событиях (человек/животное), всё локально, opensource | [![Stars](https://img.shields.io/github/stars/roflcoopter/viseron?style=flat)](https://github.com/roflcoopter/viseron) |

**Eclipse Chat — планируемый стек:**
```
Backend:  Node.js · Fastify · Socket.io · Prisma · PostgreSQL · Redis
Frontend: React 19 · TypeScript · Vite · Tailwind CSS 4 · Zustand
Файлы:    MinIO (self-hosted S3)
Инфра:    Docker Compose · Caddy
```

---

## 🛡 Privacy / OPSEC

> Инструменты и гайды для приватности, изоляции профилей и контроля цифрового следа. **Используем только в рамках закона и ToS площадок.**

### Антидетект и изоляция

| Ресурс | Стек | Описание | Звёзды |
|--------|------|----------|--------|
| [Donutbrowser](https://github.com/zhom/donutbrowser) | Chromium / Firefox | Опенсорс антидетект-браузер — изолированные профили (свой fingerprint, куки, плагины), e2e-облачная синхронизация, без телеметрии | [![Stars](https://img.shields.io/github/stars/zhom/donutbrowser?style=flat)](https://github.com/zhom/donutbrowser) |
| [Shelter](https://f-droid.org/ru/packages/net.typeblog.shelter/) | Android | Песочница для приложений — клонирует Android-апп в изолированный work-профиль (изоляция от VPN, основного профиля) | — |
| [Anubis](https://github.com/sogonov/anubis) | Android | VPN-страж: гарантирует, что российские приложения не запустятся пока активен VPN. [Habr-обзор](https://habr.com/ru/articles/1023352/) | [![Stars](https://img.shields.io/github/stars/sogonov/anubis?style=flat)](https://github.com/sogonov/anubis) |
| [GoofCord](https://github.com/Milkshiift/GoofCord) | Win / Linux / macOS | Privacy-форк Discord-клиента — блокировка телеметрии, опциональное шифрование сообщений паролем, встроенные Vencord / Equicord / Shelter, темы, быстрее и легче официального, стрим со звуком на Linux. **С оговоркой:** клиент-моды (Vencord / Equicord) формально нарушают Discord ToS — теоретический риск бана аккаунта (на практике массовых банов за них нет, но это решение на свой риск). «Шифрование паролем» защищает только от чтения Discord-ом, не заменяет полноценный E2EE-мессенджер | [![Stars](https://img.shields.io/github/stars/Milkshiift/GoofCord?style=flat)](https://github.com/Milkshiift/GoofCord) |

**iOS «Команды» VPN-trick** — авто-отключение VPN при открытии нужных приложений через Shortcuts → авто-включение при закрытии.

### Email-алиасы и одноразовые контакты

| Ресурс | Описание |
|--------|----------|
| [SimpleLogin](https://simplelogin.io/) | Email-алиасы — одноразовая почта на каждую регистрацию, при утечке просто удаляется |
| [Hide My Email (Apple)](https://support.apple.com/en-us/HT210425) | Алиасы Apple — встроены в iCloud+, прячут реальный email |
| [email-fake.com](https://email-fake.com/) | Временная почта (см. также «Тесты регистраций» в Подборке Eclipse) |

### AppSec / Security tooling (defensive)

| Ресурс | Стек | Описание | Звёзды |
|--------|------|----------|--------|
| [SecretScanner](https://github.com/deepfence/SecretScanner) | Go / Deepfence | Поиск секретов (API keys, токены, пароли, приватные ключи) в Docker-образах и файловых системах. Большая БД сигнатур. **Defensive usage:** сканируем СВОИ репозитории / образы перед публикацией, чтобы не утекли ключи (CI-gate в Eclipse AI Hub, Hopson Sentinel, Star CRM build). Маркетинговая подача в Telegram-каналах «тащим чужие данные» некорректна — инструмент задумывался Deepfence как часть defensive supply-chain pipeline. **Не использовать** против чужих образов / систем без авторизации | [![Stars](https://img.shields.io/github/stars/deepfence/SecretScanner?style=flat)](https://github.com/deepfence/SecretScanner) |

#### Anti-malware / процессы

> ⚠️ **Парадокс доверия.** «Антивирус с GitHub» запускается с правами администратора и имеет полный доступ к системе — то есть сам по себе идеальный носитель для малвари. Доверять можно вендору с репутацией (**KVRT** — Kaspersky) или давно известному OSS с большой историей (**maltrail** — автор `stamparm`, проект с 2014 г.). Малоизвестные репозитории-однодневки (`Anti-Miner`, `MinerSearch`, `MatrixDefender-4.2`) — запускать только после чтения исходников, в одноразовой VM / sandbox, **никогда** на машине с боевыми ключами и доступами Eclipse. Для реальной защиты рабочих станций база — Defender + Malwarebytes + здоровый OPSEC, а не сборная солянка из Telegram.

| Ресурс | Стек | Описание | Звёзды |
|--------|------|----------|--------|
| [KVRT](https://www.kaspersky.ru/downloads/free-virus-removal-tool) | Win / Linux | Kaspersky Virus Removal Tool — портативный сканер от вендора с репутацией: трояны, руткиты, шпионское ПО. **Самый доверенный пункт списка** — официальный продукт Kaspersky, не сторонний форк | — |
| [maltrail](https://github.com/stamparm/maltrail) | Python | Детектор вредоносного сетевого трафика по чёрным спискам и эвристикам (DNS / URL / IP). Зрелый OSS-проект, автор `stamparm`. Полезен как сетевой IDS-слой для self-hosted инфры | [![Stars](https://img.shields.io/github/stars/stamparm/maltrail?style=flat)](https://github.com/stamparm/maltrail) |
| [witr](https://github.com/pranshuparmar/witr) | Cross-platform | Process inspector — источник каждого процесса, ресурсы, флаг подозрительного. **Не anti-malware**, диагностика. Также в [Dev Tools & CLI](#️-dev-tools--cli) | [![Stars](https://img.shields.io/github/stars/pranshuparmar/witr?style=flat)](https://github.com/pranshuparmar/witr) |
| [Anti-Miner](https://github.com/Daiwv/Anti-Miner) | Windows | Поиск и удаление скрытых майнеров. **Малоизвестный репо** — проверять исходники, запускать в sandbox | [![Stars](https://img.shields.io/github/stars/Daiwv/Anti-Miner?style=flat)](https://github.com/Daiwv/Anti-Miner) |
| [MinerSearch](https://github.com/BlendLog/MinerSearch) | Windows | Поиск майнеров с эвристикой, карантином и обновляемой базой угроз. **Малоизвестный репо** — те же предосторожности | [![Stars](https://img.shields.io/github/stars/BlendLog/MinerSearch?style=flat)](https://github.com/BlendLog/MinerSearch) |
| [MatrixDefender-4.2](https://github.com/belrinn/MatrixDefender-4.2) | Windows | Удаление RAT-троянов (вкл. LimeRAT), майнеров. **Малоизвестный репо, версия в названии — красный флаг сомнительного нейминга. Повышенная осторожность**, только sandbox + чтение кода | — |

### Гайды по чистке цифрового следа

**7-step гайд** (источник: Telegram «Не баг, а фича», апрель 2026):
1. **GetContact / Truecaller** — отписаться: Управление профилем → Скрыть данные / Unlist phone number
2. **Google removal form** — «Запрос на удаление личной информации Google» по страницам с телефоном/адресом/почтой
3. **Забытые аккаунты** — поиск в почте `подтвердите ваш email` / `verify email`, удалить ненужные
4. **Утечки** — [haveibeenpwned.com](https://haveibeenpwned.com/) → проверить email на утечки, скомпрометированные пароли сменить
5. **Слежка Google** — [myactivity.google.com](https://myactivity.google.com/) → Удалить всё → За всё время; отключить историю поиска / местоположения / YouTube
6. **Старые посты** — Twitter/X через TweetDelete (авто >30 дней); VK История активности → фильтр по годам → удалить
7. **Защита от будущих утечек** — SimpleLogin / Hide My Email, Brave (трекеры по умолчанию)

---

## 🖥️ Hardware & Workstation

> Не AI, не automation — но полезное при сборке/апгрейде рабочих машин под Eclipse-нагрузку.

| Ресурс | Описание |
|--------|----------|
| [BuildCores](https://www.buildcores.com/) | Конфигуратор ПК — 3000+ компонентов с проверкой совместимости, 3D-режим (вращать сборку), визуализация воздушных потоков для расстановки вентиляторов. Полезно при сборке workstation под локальные LLM / video-pipeline |

---

## 🎮 GameDev

### AI Game Studio

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [Claude Code Game Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | 49 AI-агентов = виртуальная игровая студия — директора, дизайнеры, программисты, QA. 72 команды, 39 шаблонов (GDD, ADR), Godot 4 / Unity / UE5 | [![Stars](https://img.shields.io/github/stars/Donchitos/Claude-Code-Game-Studios?style=flat)](https://github.com/Donchitos/Claude-Code-Game-Studios) |

### Нарративные инструменты

| Проект | Стек | Описание | Звёзды |
|--------|------|----------|--------|
| [VisualStoryWriting](https://github.com/m-damien/VisualStoryWriting) | React + Vite + Tailwind + GPT-4o | AI-генератор рассказов с интерактивной картой мира и таймлайном — таскай персонажей, история меняется | [![Stars](https://img.shields.io/github/stars/m-damien/VisualStoryWriting?style=flat)](https://github.com/m-damien/VisualStoryWriting) |
| [VIGA](https://github.com/Fugtemypt123/VIGA) | Python / Blender | AI-генератор 3D-сцен из фото — автономно создаёт модели, анимации и физику в Blender | [![Stars](https://img.shields.io/github/stars/Fugtemypt123/VIGA?style=flat)](https://github.com/Fugtemypt123/VIGA) |

### Ресурсы

> 10 лет кураторской работы энтузиастов — крупнейшая подборка ресурсов по геймдеву

**→ [GameDev-Resources](https://github.com/Kavex/GameDev-Resources)**

### Что внутри

| Раздел | Содержимое |
|--------|-----------|
| **Движки и фреймворки** | Unity, Godot, Unreal, Phaser, Love2D и десятки других |
| **Исходники классик** | Quake, Doom, Diablo, SimCity, Prince of Persia и др. |
| **2D/3D гайды** | Пошаговые туториалы по каждому аспекту разработки |
| **Анимация** | Инструменты и туториалы по анимации персонажей |
| **Аудио** | Генераторы звуков, библиотеки, гайды |
| **Вокселная графика** | Редакторы, туториалы, примеры |
| **Книги** | Большая подборка книг по геймдеву — бесплатно |
| **Ассеты** | Бесплатные спрайты, текстуры, модели |

### Концепты и эмуляторы

| Ресурс | Описание |
|--------|----------|
| [WenWare](https://wen-ware.com/) | GeoGuessr во времени — угадай место и год, реконструкция исторических панорам через GPT Image 2 (концепт-вдохновение) |
| [vibesail](https://vibesail.com/lang/ru/) | Браузерный симулятор парусника на любой точке мира |
| [javagames.cc](https://javagames.cc/) | Архив Java-игр кнопочных телефонов — графика 240×320 |
| [play-cs.com](https://play-cs.com/) | CS 1.6 в браузере — десятки серверов |
| [Flashpoint Archive](https://flashpointarchive.org/) | 170К Flash-игр — сохранённая эпоха 2020 |
| [dos.zone](https://dos.zone/) | DOS-эмулятор: GTA Vice City, Half-Life, Doom, HoMM3, Duke Nukem 3D, UT99 |
| [segazona.ru](https://segazona.ru/) | Эмулятор Sega Mega Drive 2 в браузере |

---

## 🎓 Обучение IT (бесплатно)

> Избранные ресурсы, которые стоят внимания — не очевидные справочники, а реально полезные платформы

| Ресурс | Тема | Почему стоит внимания |
|--------|------|----------------------|
| [javascript.info](https://javascript.info) | JavaScript | Лучший учебник по JS — от основ до async/await, с интерактивными задачами |
| [refactoring.guru](https://refactoring.guru) | Паттерны / Архитектура | Паттерны проектирования и рефакторинг — с визуальными схемами и примерами на 10 языках |
| [roadmap.sh](https://roadmap.sh) | Карьерные карты | Структурированные роадмапы: Frontend, Backend, DevOps, AI — что учить и в каком порядке |
| [elements of ai](https://elementsofai.com) | AI основы | Курс от Хельсинкского университета — основы AI понятным языком, без кода |
| [NVIDIA DLI](https://www.nvidia.com/en-us/training/) | AI / ML / Робототехника | Бесплатные курсы от NVIDIA — обработка видео, приложения, робототехника + сертификат |
| [LLM Interview Questions](https://github.com/Devinterview-io/llms-interview-questions) | LLM / AI | 63 вопроса к собесу — Transformer, tokenization, attention, fine-tuning, prompt engineering | [![Stars](https://img.shields.io/github/stars/Devinterview-io/llms-interview-questions?style=flat)](https://github.com/Devinterview-io/llms-interview-questions) |
| [AI Agents for Beginners](https://github.com/microsoft/ai-agents-for-beginners) | AI-агенты | Курс от Microsoft — 11 уроков с видео и ��одом: проектирование, создание и деплой агентов (Azure, Python) | [![Stars](https://img.shields.io/github/stars/microsoft/ai-agents-for-beginners?style=flat)](https://github.com/microsoft/ai-agents-for-beginners) |
| [FastAI](https://course.fast.ai/) | Deep Learning | Лучший практический курс по DL — от нуля до реальных моделей, top-down подход |
| [DeepLearning.AI](https://deeplearning.ai/) | ML / AI | Курсы Эндрю Ына — специализации по ML, DL, NLP, LLM, промпт-инженерия |
| [Hugging Face Learn](https://huggingface.co/learn) | NLP / Transformers | Официальные курсы HF — NLP, Transformers, Diffusion, RL, Audio |
| [OpenAI Cookbook](https://github.com/openai/openai-cookbook) | API / Промпты | Рецепты и примеры кода для OpenAI API — embeddings, fine-tuning, agents | [![Stars](https://img.shields.io/github/stars/openai/openai-cookbook?style=flat)](https://github.com/openai/openai-cookbook) |
| [TryHackMe](https://tryhackme.com) | Кибербезопасность | Геймифицированное обуче��ие этичному взлому с реальными симуляциями |
| [Linux Journey](https://linuxjourney.com) | Linux | Пошаговый маршрут от нуля до уверенного администрирования |
| [CryptoZombies](https://cryptozombies.io) | Web3 / Solidity | Смарт-контракты через геймификацию — собираешь армию зомби |
| [everything-ai-ml](https://github.com/viveknaskar/everything-ai-ml) | AI / ML карьера | Курсы, статьи, роадмапы, собесы, агенты, бизнес-кейсы — разветвлённая база | [![Stars](https://img.shields.io/github/stars/viveknaskar/everything-ai-ml?style=flat)](https://github.com/viveknaskar/everything-ai-ml) |
| [engoo](http://engoo.com/) | Языки | Изучение английского / японского / китайского по новостям. Уровни A1+, тренажёры с диалогами и грамматикой |

---

## 🎓 Компьютерные науки (MIT)

> 20 бесплатных курсов от MIT — от нуля до продвинутого уровня

### Программирование

| Курс | Ссылка |
|------|--------|
| Введение в программирование на Python | [YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP62A-ynp6v6-LGBCzeH3VAQB) |
| Программирование на Java | [YouTube](https://www.youtube.com/playlist?list=PL0065A2C3177ACC8A) |
| Введение в вычислительное мышление | [YouTube](https://www.youtube.com/playlist?list=PLP8iPy9hna6Q2Kr16aWPOKE0dz9OnsnIJ) |

### Алгоритмы и структуры данных

| Курс | Ссылка |
|------|--------|
| Структуры данных и алгоритмы | [YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY) |
| Проектирование и анализ алгоритмов | [YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp) |
| Продвинутые структуры данных | [YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf) |

### Системы

| Курс | Ссылка |
|------|--------|
| Операционные системы | [YouTube](https://www.youtube.com/playlist?list=PLTsf9UeqkReZHXWY9yJvTwLJWYYPcKEqK) |
| Системы управления БД | [YouTube](https://www.youtube.com/playlist?list=PLfciLKR3SgqOxCy1TIXXyfTqKzX2enDjK) |

### AI & Machine Learning

| Курс | Ссылка |
|------|--------|
| Искусственный интеллект | [YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi) |
| Машинное обучение | [YouTube](https://www.youtube.com/playlist?list=PLxC_ffO4q_rW0bqQB80_vcQB09HOA3ClV) |
| Глубокое обучение | [YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP63Wy1oqQTFvkFhgUNTQWqkm) |
| Машинное обучение в здравоохранении | [YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP60B0PQXVQyGNdCyCTDU1Q5j) |

### Математика

| Курс | Ссылка |
|------|--------|
| Математика для компьютерных наук | [YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP61VNvICqk2HXJTonnKgAc9d) |
| Линейная алгебра | [YouTube](https://www.youtube.com/playlist?list=PL221E2BBF13BECF6C) |
| Матричное исчисление для ML | [YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP62EaLLH92E_VCN4izBKK6OE) |
| Математический анализ (одна переменная) | [YouTube](https://www.youtube.com/playlist?list=PL590CCC2BC5AF3BC1) |
| Математический анализ (много переменных) | [YouTube](https://www.youtube.com/playlist?list=PL4C4C8A7D06566F38) |
| Введение в теорию вероятностей | [YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP60hI9ATjSFgLZpbNJ7myAg6) |
| Статистика | [YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP60uVBMaoNERc6knT_MgPKS0) |
| Теория вероятностей и статистика | [YouTube](https://www.youtube.com/playlist?list=PLl8XY7QVSa4aUyZAtL2Hlf_mx3LaSix9B) |

---

## 📥 Подборка Eclipse (апрель 2026)

> Сводка находок (в т.ч. [Telegram: Не баг, а фича](https://t.me/bugnotfeature)) — детали частично дублируют строки в [SEO & Маркетинг](#-seo--маркетинг), [Оркестрация и агенты](#оркестрация-и-агенты) и [Обучение IT](#-обучение-it-бесплатно).

### Skills, маркетинг, агенты

| Ресурс | Описание |
|--------|----------|
| [ai-marketing-skills](https://github.com/ericosiu/ai-marketing-skills) | Скиллы под маркетолога / таргет / SMM / контент в Claude Code |
| [claude-skills (230+)](https://github.com/alirezarezvani/claude-skills) | Каталог по категориям; см. также таблицу «Оркестрация и агенты» выше |
| [Kimi K2.6](https://www.kimi.com/) | Долгие сессии, много tool-calls, Agent Swarm — проверяйте актуальные условия и API |
| [DeepSeek — чат](https://chat.deepseek.com/) | V4 Pro / Flash, длинный контекст (уточняйте цены и лимиты) |

### Модели для локального запуска (GGUF, Ollama, LM Studio, Colab)

| Ресурс | Описание |
|--------|----------|
| [Qwen3.6-35B Opus-style reasoning (GGUF)](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF) | Дистилляция под reasoning; Ollama / LM Studio; качество оценивайте сами |
| [Qwen3.6-Max-Preview](https://chat.qwen.ai/) | Облачный чат Alibaba — код и длинный контекст |

### Дизайн-спеки для агентов

| Ресурс | Описание |
|--------|----------|
| [design.md (Google Labs)](https://github.com/google-labs-code/design.md) | Формат DESIGN.md, чтобы агент собирал UI по спецификации |
| [designdotmd.directory](http://designdotmd.directory/) | Каталог стилей и примеров под `design.md` |
| [neuform.ai](https://neuform.ai/) | 400+ DESIGN.md шаблонов с UI-дизайнами — копируй промпт под секцию/блок/анимацию |

### Медиа, 3D, монтаж, транскрипция

| Ресурс | Тип | Описание |
|--------|------|----------|
| [Edit-Banana](https://github.com/BIT-DataLab/Edit-Banana) | GitHub | Правка текста на картинках, таблицы, экспорт в Drawio / SVG / PPT; [веб](https://editbanana.anxin6.cn/app) |
| [Modly](https://github.com/lightningpixel/modly) | GitHub | Фото → 3D, локальный запуск |
| [OpenShorts](https://github.com/mutonby/openshorts) | GitHub | Рилзы из длинного видео, сабы, 9:16, сценарий, озвучка |
| [Buzz](https://github.com/chidiwilliams/buzz) | GitHub | Транскрипция (Whisper), офлайн, шумодав, real-time |
| [Dreamina](https://dreamina.capcut.com/) | Web | Картинки / видео / музыка (ByteDance) — внешний сервис |
| [Blender Buddy](https://superhivemarket.com/products/blenderbuddy) | Add-on | Помощник в Blender, контекст сцены, локально |

### Тесты регистраций, приватность, хостинг

| Ресурс | Описание |
|--------|----------|
| [email-fake.com](https://email-fake.com/) | Временная почта для OTP при e2e и сомнительных регистрациях |
| **Receive-SMS (тесты)** | [SMSCodeOnline](https://smscodeonline.com/) · [receive-sms-online](https://www.receive-sms-online.info/) · [mianfeijiema](https://mianfeijiema.com/) · [us-phone-number](https://us-phone-number.com/) · [sms24](https://www.sms24.me/) · [receive-sms](https://receive-sms.cc/) · [tempsmss](https://tempsmss.com/) — только **в рамках ToS площадок и применимого права** |
| [WispByte](https://wispbyte.com/) | Бесплатный зарубежный хостинг (реклама, мало RAM/диска) — пет-проекты, боты |

**Про бесплатные форки с обходом оплаты API** (например, публичные *free-claude-code*): юридические и ToS-риски; для продуктивной работы разумнее официальные клиенты, OpenRouter, Ollama и т.д.

### Языки, EdTech (вне репозиториев кода)

| Ресурс | Описание |
|--------|----------|
| [AO3 Reader (Android)](https://play.google.com/store/apps/details?id=com.katkrasner.ao3_reader) | Чтение с AO3, слова в словарь, карточки; iOS в планах у авторов |

**С оговорками:** сервисы вроде [humanizer.org](https://humanizer.org/ru) — пересекаются с политикой академической честности. Онлайн-скрининги здоровья (в т.ч. RAADS-R) не заменяют специалиста.

---

## 📥 Подборка Eclipse (май 2026)

> Новые находки, которые полезны как R&D-база, дизайн-референсы и вспомогательные пайплайны. Сюда не включены сомнительные вещи с ToS/юридическими рисками вроде hacked API, обходов лимитов и серых форков.

### AI, навыки, ресёрч

| Ресурс | Описание |
|--------|----------|
| [Gemini 3.5 Flash](https://gemini.google/) | Новая модель Google под кодинг и агентов (релиз 21.05.2026): планирование больших проектов, параллельные субагенты, заявлено в 2× быстрее Gemini 3.1 Pro. Бесплатна для всех. Доступна через Google AI Studio (см. `free-llm-api-resources`), пара с Antigravity 2.0 / CLI. Бенчмарки проверять самостоятельно — цифры из анонса |
| [caveman](https://github.com/JuliusBrussee/caveman) | Сжатие ответов и экономия токенов для AI-агентов — полезно для cost-control, agent loops и долгих сессий |
| [Autoskill](https://github.com/midudev/autoskills) | Автоподбор skills под проект — сканирует кодовую базу и подтягивает подходящие способности из curated-реестра |
| [Local Deep Research](https://github.com/LearningCircuit/local-deep-research) | Локальный research-агент: PubMed / arXiv / PDF / книги, проверка качества источников, отчёт в PDF/Markdown |

### Дизайн и UI для агентов

| Ресурс | Описание |
|--------|----------|
| [Design MD Generator](https://www.figma.com/community/plugin/1612814320994608244/design-md-generator) | Плагин Figma → DESIGN.md / SKILL.md для передачи полного визуального контекста AI-агентам |
| [Open Design](https://github.com/nexu-io/open-design) | Open-source набор DESIGN.md-шаблонов, skills и визуальных стилей для AI-first интерфейсов |
| [Refero Styles](https://styles.refero.design/) | 2000+ UI-стилей и design-файлов как база для визуальных референсов и direction-setting |
| [thesvg](https://github.com/glincker/thesvg) | Большая библиотека SVG-иконок и логотипов с API/CDN/React-пакетами |
| [LazyWeb](https://www.lazyweb.com/) | 250К+ скринов реальных приложений, поиск похожих UI-паттернов, генерация интерфейса по запросу, MCP-подключение к Claude / Cursor. Reference-кладовая для design-pipeline и UI-research |

### Медиа, аватары, монтаж

| Ресурс | Тип | Описание |
|--------|------|----------|
| [video-use](https://github.com/browser-use/video-use) | GitHub | Агентный видеомонтаж: чистка пауз, субтитры, цветокор, работа по папке с сырьём, память в `project.md` |
| [PrunaAI p-video-avatar](https://replicate.com/prunaai/p-video-avatar) | Web / API | Генерация видео-аватара из фото и аудио — полезно для talking avatars, NPC и медиапрезентаций |
| [AdventureGen AI Upscaler](https://www.adventuregen.ai/dashboard/upscaler) | Web | Апскейл изображений и восстановление деталей — пригодится для артов, скриншотов, портретов и карт |

### Утилиты и проверки

| Ресурс | Описание |
|--------|----------|
| [AI File Sorter](https://github.com/hyperfield/ai-file-sorter) | Поиск, сортировка, переименование и группировка файлов по содержимому; есть preview перед действиями |
| [WhatIsMyIPAddress Security Check](https://whatismy-ipaddress.com/learn-more-security.html#term-privacy) | Проверка IP, DNS, WebRTC, fingerprint, blacklist и утечек — полезно для privacy/QA-сценариев |
| [OpenPostings](https://github.com/Masterjx9/OpenPostings) | Парсер и агрегатор вакансий — интересен как reference для data ingestion и large-scale job scraping |
| [Веб-утилиты — кураторский каталог](lists/web-utilities.md) | ~80 бесплатных веб-сервисов по задачам: контент / наука / PDF / графика / код-визуал / dev-утилиты / транскрипция / музыка / приватность. Слиты подборки 35 (14.05) и 50 (21.05) сайтов, дедуп, с дисклеймерами по grey-zone (12ft.io, libgen, Sci-Hub) |

### GameDev / DnD inspiration

| Ресурс | Описание |
|--------|----------|
| [Unity AI](https://unity.com/features/ai?utm_campaign=unity-ai-beta) | Генерация сцен, ассетов и AI-помощник внутри Unity — референс для AI-assisted worldbuilding и scene pipelines |

## 📥 Подборка Eclipse (27.05.2026)

> Дроп Telegram-канала «Не баг, а фича» от 27.05 — 17 находок. Тип: AI-агенты и
> скиллы (Claude Code), security-инструментарий, парсинг, media-pipeline,
> приватность, мета-каталоги. Распределены по основным разделам ниже + сводка
> применимости в [наши проекты](#-наши-проекты) в финальной таблице.

### Claude Code / AI-agents skills

| Ресурс | Описание | Stars |
|---|---|---|
| [Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Bug-hunting "стая спецов" для Claude Code: 51 скилл + слеш-команды + 574 reporting patterns по 24 классам уязвимостей + интеграция с Burp MCP + Red Team workflows. Реальные pentest-задачи в формате skill-pipeline | [![Stars](https://img.shields.io/github/stars/elementalsouls/Claude-BugHunter?style=flat)](https://github.com/elementalsouls/Claude-BugHunter) |
| [Anthropic Cybersecurity Skills (754)](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 754 кибербез-скилла для Claude: malware analysis, SSL/cert verify, pentest, phishing detection, memory dump analysis. Гениев фанбейс собрал — каталог несовместимый с production-only фильтром, проверять каждый skill при подключении (community-collated) | [![Stars](https://img.shields.io/github/stars/mukul975/Anthropic-Cybersecurity-Skills?style=flat)](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) |
| [knowledge-work-plugins (Anthropic)](https://github.com/anthropics/knowledge-work-plugins) | Официальный Anthropic-репозиторий, 11 плагинов под white-collar роли: marketing/sales/finance, psychology/productivity/onboarding/PM, legal/IP/data protection, data analysis/dashboards/presentations, support/customer-service, work-with-docs/PDFs/spreadsheets, biоresearch. Plug-and-play через Claude Code marketplace | [![Stars](https://img.shields.io/github/stars/anthropics/knowledge-work-plugins?style=flat)](https://github.com/anthropics/knowledge-work-plugins) |
| [AI Engineer Coach (Microsoft)](https://github.com/microsoft/AI-Engineering-Coach) | VS Code / Cursor / Antigravity plugin. Analytics layer для AI-агентов: парсит session logs (Copilot / Claude Code / Codex CLI / OpenCode / Xcode), оценивает workflow по 5 параметрам (context handling + prompt quality + др.), проверяет 45 error patterns (token waste / long sessions), находит repeating prompt patterns. Все правила в Markdown — легко редачить | [![Stars](https://img.shields.io/github/stars/microsoft/AI-Engineering-Coach?style=flat)](https://github.com/microsoft/AI-Engineering-Coach) |
| [SkillOpt (Microsoft)](https://github.com/microsoft/SkillOpt) | Auto-optimizer для skill.md файлов. Пробует skill-set, выполняет задачи, замечает ошибки, переписывает skill.md, добавляет инструкции, устраняет слабые места. Заявлен +25% к точности AI-агентов. Сам контролит и правит behavior. R&D-grade — проверять реальный лифт на конкретных скиллах | [![Stars](https://img.shields.io/github/stars/microsoft/SkillOpt?style=flat)](https://github.com/microsoft/SkillOpt) |

### Парсинг — топ-6 AI/headless scrapers (single drop)

> Pavel-каталог 27.05: «6 лучших ИИ-парсеров» с фокусом на CAPTCHA-обход и
> JS-сайты. Распределение по архитектурным нишам:

| Парсер | Стек | Ниша | Stars |
|---|---|---|---|
| [Crawl4AI](https://github.com/unclecode/crawl4ai) | Python | Самый быстрый AI-краулер: рендерит JS, выдаёт **LLM-ready output** (markdown с структурой). Топ-1 по token-efficient рассылке в context | [![Stars](https://img.shields.io/github/stars/unclecode/crawl4ai?style=flat)](https://github.com/unclecode/crawl4ai) |
| [Firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript / Python | Универсальный парсер для AI-агентов: site → markdown. SaaS + self-hosted. Самый mature для agent-pipelines (наш [Open Researcher](#ai-поиск-и-исследования) на нём построен) | [![Stars](https://img.shields.io/github/stars/firecrawl/firecrawl?style=flat)](https://github.com/firecrawl/firecrawl) |
| [Scrapy](https://github.com/scrapy/scrapy) | Python | Classic фреймворк для bulk scraping с pagination + pipelines + robots.txt. **Уже в** [Dev Tools & CLI](#️-dev-tools--cli) выше | [![Stars](https://img.shields.io/github/stars/scrapy/scrapy?style=flat)](https://github.com/scrapy/scrapy) |
| [Crawlee (Apify)](https://github.com/apify/crawlee) | Node.js + Python | Сам борется с блокировками, proxy rotation, browser fingerprints. От той же команды что Apify Agent Skills ([выше](#парсинг-и-данные)) | [![Stars](https://img.shields.io/github/stars/apify/crawlee?style=flat)](https://github.com/apify/crawlee) |
| [Playwright (Microsoft)](https://github.com/microsoft/playwright) | Multi-lang | Browser-automation. Обходит JS-protected sites через realistic browser session. Industry standard для headless test/scrape | [![Stars](https://img.shields.io/github/stars/microsoft/playwright?style=flat)](https://github.com/microsoft/playwright) |
| [Scrapegraph AI](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | Python | Declarative: говоришь WHAT нужно извлечь, LLM делает HOW. Самый "AI-first" из шестёрки | [![Stars](https://img.shields.io/github/stars/ScrapeGraphAI/Scrapegraph-ai?style=flat)](https://github.com/ScrapeGraphAI/Scrapegraph-ai) |

**Выбор стека под задачу:**
- Bulk / structured data → **Scrapy**
- LLM-context подача → **Crawl4AI** или **Firecrawl**
- Anti-bot heavy targets → **Crawlee** + [CloakBrowser](#️-dev-tools--cli)
- Declarative single-page → **Scrapegraph AI**
- Browser automation (auth-walls) → **Playwright**

### Media & content

| Ресурс | Стек | Описание |
|---|---|---|
| [ByteDance Video Upscaler](https://replicate.com/bytedance/video-upscaler) | Cloud / Replicate | Апскейл до 4K @ 60 FPS на длинных видео за секунды. Пресеты под AI-ролики / shorts / restoration старых фильмов. Replicate API → можно через сервер. **Не локально** (требует GPU кластер) |
| [LongCat-Video-Avatar 1.5](https://huggingface.co/spaces/victor/LongCat-Video-Avatar-1.5) | Cloud / HF Space | Talking avatar generator: точный lip-sync, 99 языков, multi-character dialogs, до 720p. Работает с фото людей / аниме / животных. Бесплатно на HF Space. Production usage — clone и run на собственной GPU |
| [Removerized](https://github.com/yossTheDev/removerized) | Web / Local | Background-removal в браузере: даёшь фотку → получаешь без фона. Локальный inference (ONNX), не отправляет на сервер. БЕЗ регистрации и облака | [![Stars](https://img.shields.io/github/stars/yossTheDev/removerized?style=flat)](https://github.com/yossTheDev/removerized) |
| [transitions.dev](https://transitions.dev/) | Web / Resource | Кураторская коллекция UI animations: cards / menus / toggles / transitions. На каждый — code-copy. Подключается как Claude Code skill через MCP. Visual reference + готовый CSS/JS код |

### Self-hosted security

| Ресурс | Стек | Описание |
|---|---|---|
| [Frigate](https://github.com/blakeblackshear/frigate) | Python / Docker / TensorFlow Lite | Self-hosted NVR с AI object detection (object-aware recording). Local-only: ноль cloud subscription как у Ring / Google Nest. Поддержка IP camera RTSP. Альтернатива нашему уже залистанному [Viseron](#-self-hosted-платформы) — Frigate более активен (60K+ stars, eco-system: integrations с Home Assistant) | [![Stars](https://img.shields.io/github/stars/blakeblackshear/frigate?style=flat)](https://github.com/blakeblackshear/frigate) |

### Privacy / OPSEC

| Ресурс | Стек | Описание |
|---|---|---|
| [bypass-paywalls-chrome-clean-magnolia1234](https://github.com/csns1/bypass-paywalls-chrome-clean-magnolia1234) | Chromium extension | Обход pay-wall на сотнях news / academic / paid-content sites одним кликом. Без трекинга, без телеметрии, не мешает uBlock Origin. Все Chromium-браузеры. **Grey-zone:** морально/юридически спорно (publishers теряют revenue). Личное использование на свой риск; **не использовать** в продуктовых пайплайнах как content-source | [![Stars](https://img.shields.io/github/stars/csns1/bypass-paywalls-chrome-clean-magnolia1234?style=flat)](https://github.com/csns1/bypass-paywalls-chrome-clean-magnolia1234) |

### Infrastructure

| Ресурс | Описание | Stars |
|---|---|---|
| [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain) | 165K stars — благотворительные бесплатные домены: регистрация, продление, ноль рекламы. Личное и коммерческое использование. DNS-провайдеры: Cloudflare, FreeDNS и др. **Use case:** pet-проекты, prototypes, test-deployments. Production — лучше платный domain с reputation (SEO, trust) | [![Stars](https://img.shields.io/github/stars/DigitalPlatDev/FreeDomain?style=flat)](https://github.com/DigitalPlatDev/FreeDomain) |

### Промпт-коллекции

| Ресурс | Описание |
|---|---|
| [Anti-AI-Text — 6 промптов](prompts/anti-ai-text-6-prompts.md) | 6 атакующих промптов: убирают клише / форсируют позицию / режут воду / ломают механический ритм / удаляют шаблонные обороты / повышают убедительность. Совместимо с Claude / GPT / Gemini / DeepSeek. Chain-pattern: 1️⃣ → 4️⃣ → 6️⃣ для maximum-impact humanize. Дополняет уже залистанный [Humanize Rewriter](prompts/humanize-rewriter.md) (single-shot) и [Lyra Prompt Optimizer](prompts/lyra-prompt-optimizer.md) (мета-уровень) |

### Native apps generation

| Ресурс | Описание |
|---|---|
| [Google AI Studio — Apps](https://aistudio.google.com/apps) | Free Android app generation: AI Studio генерирует native files перед глазами, авто-цикл compile→fix→retry до working build, инкрементальные feature additions, Gemini API integration built-in, in-browser preview. **Не replacement для Capacitor/Tauri** в нашем case (Eclipse Chat native apps идёт по Tauri+Capacitor пути) — но reference для **rapid prototyping** mobile-side concepts (например, для Smart-Fitness-Booking-Agent или Educator-AI MVP); для prod stack remains Tauri/Capacitor per [eclipse_chat_native_apps_plan](https://github.com/PavelHopson/eclipse-chat) |

### Meta-каталоги

| Ресурс | Описание | Stars |
|---|---|---|
| [100-free-open-source-github-repos](https://github.com/Moh4696/100-free-open-source-github-repos) | 100 OSS-репозиториев по 9 категориям: AI-agents + skills, локальные SaaS alternatives, frameworks + plugins, dev tools, courses + references, design + frontend, data extraction + analytics, security + privacy, content tools. Все с лицензиями + разбором назначения. **Use case:** периодический skim для находок которые не докатились до основных curated-каналов | [![Stars](https://img.shields.io/github/stars/Moh4696/100-free-open-source-github-repos?style=flat)](https://github.com/Moh4696/100-free-open-source-github-repos) |

### Mapping → наши проекты

> Где каждая находка из 27.05-батча может реально применяться:

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **Claude-BugHunter** | Eclipse Hopson Sentinel · Eclipse AI Hub Security module · Star CRM build pipeline | Install as Claude Code skill collection → `/bug-hunt` команды на code review этапе |
| **Anthropic Cybersec Skills (754)** | Eclipse Hopson Sentinel · Eclipse AI Hub Security module | Cherry-pick relevant skills (cert verify, malware analysis) → не installать all 754 — проверять каждый |
| **knowledge-work-plugins (Anthropic)** | Eclipse AI Hub (7 modules — exactly target audience) · Star CRM (sales/marketing roles) | Install plugins в Eclipse AI Hub как extension modules (legal → contract review, finance → invoice analysis, presentations → Allweone alternative) |
| **AI Engineer Coach (Microsoft)** | oh-my-claudecode (analytics layer) · personal Claude Code workflow | VS Code/Cursor plugin install → пассивно собирает session logs → отчёт по prompt quality + token waste |
| **SkillOpt (Microsoft)** | oh-my-claudecode skill files · Eclipse AI Hub skill catalogs | Self-optimization: запустить на existing skills (`/loop`, `/ultrareview`, `/init`) → измерить лифт |
| **Crawl4AI / Firecrawl** | Eclipse-webclaw · Lead-Sniper-CAT-Analytics · business-data-platform-mvp · Eclipse AI Hub RAG | Замена на Crawl4AI для LLM-ready output где сейчас raw HTML; Firecrawl для agent-pipelines |
| **Crawlee + CloakBrowser** | Star CRM AutoReply (marketplace antibot) · Eclipse-webclaw (защищённые targets) | Headless browser pool с anti-detection — для маркетплейсов с Turnstile |
| **ByteDance Video Upscaler** | Eclipse Media (post-upload upscale option) · Shotforge (image-to-video pipeline) · StreamForge-AI | Replicate API integration: user opt-in upscale 4K, оплата pay-per-second через прокси |
| **LongCat-Video-Avatar 1.5** | AI-Face-Fusion-Pro · Eclipse Chat (animated avatars для voice channels?) · Eclipse DnD Forge (NPC видео-портреты) · Educator-AI (видео-лекторы) | HF Space → API endpoint → backend job queue |
| **Removerized** | Eclipse Chat (user avatar upload preprocessing) · Shotforge (product photo pipeline) · Text2Image (output cleanup) | Embed как client-side preprocessor в upload flow |
| **transitions.dev** | Eclipse Chat (composer/modal micro-interactions) · все frontends (zefir-gift-landing, EclipseForgeLanding, RentKldRedesign, modern-2048) | Skill add для Claude Code → cherry-pick анимации при UI work |
| **Frigate** | Eclipse Hopson Sentinel (if surveillance ever in scope) — пока только reference | Reference, not active install — Hopson Sentinel другая ниша (coding agent), а не NVR |
| **Bypass paywalls** | Личное использование Pavel | Не в продукты |
| **FreeDomain** | Prototypes, test deployments, demo subdomains | Регистрировать перед каждым новым prototype-launch (избегаем production reliance) |
| **Anti-AI-Text 6 prompts** | Eclipse AI Hub Copywriter · Star CRM AutoReply · Eclipse Chat AI bot personality | Add as preprocessing step → user text → Lyra Optimizer → Anti-AI-text chain → output |
| **Google AI Studio Apps** | Smart-Fitness-Booking-Agent prototype · Educator-AI MVP · любой mobile-first concept | Rapid prototyping only — production остаётся Tauri/Capacitor |
| **100-free-OSS-repos** | Reference библиотека | Периодически listать на новые tools |

---

## 📥 Подборка Eclipse (28.05–05.06.2026)

> Недельный дроп Telegram-каналов «Не баг, а фича» / «PushEnter» (28.05–05.06).
> ~33 находки; после верификации провенанса (часть репо хайп-канал переврал
> или перезалил) оставлено ядро по разделам ниже + сводка применимости в
> [наши проекты](#-наши-проекты). Маркетинговые гиперболы помечены, пиратское
> и закрыто-серое — в карантине внизу.

### Claude Code — security & skill-governance

| Ресурс | Описание | Stars |
|---|---|---|
| [Security Guidance (Anthropic, официальный)](https://code.claude.com/docs/en/security-guidance) | **Бесплатный** plugin в составе [anthropics/claude-code](https://github.com/anthropics/claude-code/tree/main/plugins/security-guidance): pre-tool hook перехватывает Write/Edit/MultiEdit и ловит 25 опасных паттернов в 8 категориях (command injection в GitHub Actions, `child_process.exec`, `eval`/`new Function`, `dangerouslySetInnerHTML`/`innerHTML` XSS, Python `pickle`, `os.system`). 3 уровня ревью (inline → анализ → подтверждение на коммите). У Anthropic −30–40% security-комментов на PR. **Ставим сразу** во все наши Claude Code workflow | — |
| [NVIDIA/skills](https://github.com/NVIDIA/skills) | Каталог из 110 **верифицированных** скиллов по 24 продуктам: каждый перед попаданием прогоняется через SkillSpector + криптоподпись (OpenSSF Model Signing) + machine-readable skill cards. Решает ровно ту боль, что у нас с community-каталогами (754 кибербез-скилла, 1700+ openclaw) — «проверять каждый skill» | [![Stars](https://img.shields.io/github/stars/NVIDIA/skills?style=flat)](https://github.com/NVIDIA/skills) |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | Сам сканер (open-source): 64 паттерна уязвимостей в 16 категориях — vulnerable deps, suspicious scripts, credential access, data exfiltration + agent-native (hidden instructions, prompt injection, tool poisoning, excessive agency, mismatch declared-purpose↔access). 2 стадии: быстрый static → опциональный LLM-семантический разбор. **Гоняем по ЛЮБЫМ скиллам**, в т.ч. своим и из community-каталогов перед install | [![Stars](https://img.shields.io/github/stars/NVIDIA/SkillSpector?style=flat)](https://github.com/NVIDIA/SkillSpector) |
| [ECC — Everything Claude Code](https://github.com/affaan-m/ECC) | Сетап победителя хакатона Anthropic (Affaan Mustafa), 10 мес работы, ~160K+ stars: **249 скиллов · 63 сабагента · 79 слеш-команд · 14 MCP-конфигов · trigger-автоматизации · Continuous Learning** (замечает паттерны → пишет скиллы). Запускается в Claude Code / Cursor / OpenCode / Codex из одного конфига. Числа из ТГ (183/48/69) устарели — репо растёт | [![Stars](https://img.shields.io/github/stars/affaan-m/ECC?style=flat)](https://github.com/affaan-m/ECC) |
| [AgentShield (часть ECC)](https://github.com/affaan-m/agentshield) | Отдельный security-аудитор из ECC: сканит `.claude/` на уязвимости, prompt injection, config drift, guardrail gaps. Red-team/blue-team/auditor pipeline на Opus 4.6, 102 static rules, 1282 теста (98% coverage). CLI / GitHub Action / ECC-plugin / GitHub App. **Прямой конкурент-дополнение** к нашему `/ultrareview` и NVIDIA SkillSpector | [![Stars](https://img.shields.io/github/stars/affaan-m/agentshield?style=flat)](https://github.com/affaan-m/agentshield) |

### Claude Code — мега-стек оркестрации (single drop)

> Pavel-каталог «гигантский стек для Claude Code». Распределение по нишам
> (дополняет наши [oh-my-claudecode](https://github.com/PavelHopson/oh-my-claudecode),
> [Auto Claude](#оркестрация-и-агенты), [everything-claude-code](#оркестрация-и-агенты)):

| Проект | Ниша | Stars |
|---|---|---|
| [Claude Flow (ruvnet)](https://github.com/ruvnet/claude-flow) | 100+ агентов и навыков, hive-mind оркестрация, swarm-режимы. Самый «тяжёлый» из стека | [![Stars](https://img.shields.io/github/stars/ruvnet/claude-flow?style=flat)](https://github.com/ruvnet/claude-flow) |
| [SuperClaude Framework](https://github.com/SuperClaude-Org/SuperClaude_Framework) | «Команда разработчиков» — роли + команды + персоны поверх Claude Code | [![Stars](https://img.shields.io/github/stars/SuperClaude-Org/SuperClaude_Framework?style=flat)](https://github.com/SuperClaude-Org/SuperClaude_Framework) |
| [Claude Code Router (musistudio)](https://github.com/musistudio/claude-code-router) | Роутинг Claude Code на другие модели/провайдеры (OpenRouter, локальные). Мастхэв когда нужен не-Anthropic бэкенд | [![Stars](https://img.shields.io/github/stars/musistudio/claude-code-router?style=flat)](https://github.com/musistudio/claude-code-router) |
| [CCPlugins](https://github.com/brennercruvinel/CCPlugins) | Готовые команды/плагины под рутину (cleanup, review, refactor) — экономия часов | [![Stars](https://img.shields.io/github/stars/brennercruvinel/CCPlugins?style=flat)](https://github.com/brennercruvinel/CCPlugins) |
| [Claude Code Action (Anthropic)](https://github.com/anthropics/claude-code-action) | Официальный GitHub Action — Claude в CI/PR (ревью, фиксы по комментам). **Реальный кандидат** в наши репозитории на CI-gate | [![Stars](https://img.shields.io/github/stars/anthropics/claude-code-action?style=flat)](https://github.com/anthropics/claude-code-action) |
| [Claude Squad (smtg-ai)](https://github.com/smtg-ai/claude-squad) | TUI для управления несколькими агентами параллельно (git worktrees, как наш Maestro-кейс) | [![Stars](https://img.shields.io/github/stars/smtg-ai/claude-squad?style=flat)](https://github.com/smtg-ai/claude-squad) |
| [Claude Code Templates (davila7)](https://github.com/davila7/claude-code-templates) | Шаблоны `.claude/` конфигов под стеки/задачи — быстрый bootstrap новых проектов | [![Stars](https://img.shields.io/github/stars/davila7/claude-code-templates?style=flat)](https://github.com/davila7/claude-code-templates) |
| [Agentic Project Management](https://github.com/sdi2200262/agentic-project-management) | Превращает Claude Code в PM — раздаёт задачи остальным агентам, ведёт roadmap | [![Stars](https://img.shields.io/github/stars/sdi2200262/agentic-project-management?style=flat)](https://github.com/sdi2200262/agentic-project-management) |

**Выбор под задачу:** не-Anthropic бэкенд → **Claude Code Router**; CI/PR-автоматизация → **Claude Code Action**; параллельные агенты → **Claude Squad**; bootstrap → **Templates**; тяжёлая оркестрация → **Claude Flow**. Не ставить всё разом — конфликты команд/хуков с уже стоящим `oh-my-claudecode`.

### Память для агентов

| Ресурс | Описание | Stars |
|---|---|---|
| [agentmemory (rohitg00)](https://github.com/rohitg00/agentmemory) | «#1 persistent memory» для кодинг-агентов: тихо пишет действия → сжимает в searchable память → инжектит контекст в начале новой сессии. MCP-сервер на 53 tools, 6 lifecycle-хуков (SessionStart/PreToolUse/PreCompact/Stop…), 8 скиллов (`/recall`, `/remember`, `/handoff`, `/recap`…), knowledge-graph + health dashboard. Подключается к Claude Code / Cursor / Gemini CLI / Codex / Hermes / OpenClaw / pi / OpenCode. **Гипербола канала «−95% токенов, в 20× дешевле» — маркетинг**, реальный выигрыш зависит от задачи. Пересекается с нашей file-based памятью и [Memory LanceDB](#openclaw-экосистема)/[MemOS](#openclaw-экосистема) — оценить, не плодит ли дубль | [![Stars](https://img.shields.io/github/stars/rohitg00/agentmemory?style=flat)](https://github.com/rohitg00/agentmemory) |

### AI-воркспейсы и автономные агенты

| Ресурс | Описание | Stars |
|---|---|---|
| [Odysseus (PewDiePie)](https://github.com/pewdiepie-archdaemon/odysseus) | Self-hosted AI-воркспейс: чат + автономные агенты (bash/files/web/memory + любой MCP), serving 270+ моделей в один клик, hardware-aware рекомендации, редактор документов, long-term память, работа с телефона/офлайн. Local-first, no telemetry, Python 3.11+. **Прямой reference/конкурент** для [Eclipse AI Hub](#-наши-проекты) — посмотреть архитектуру model-serving и MCP-слоя. Маркетинг «закопал ChatGPT» — гипербола | [![Stars](https://img.shields.io/github/stars/pewdiepie-archdaemon/odysseus?style=flat)](https://github.com/pewdiepie-archdaemon/odysseus) |
| [Hermes Agent (Nous Research)](https://github.com/nousresearch/hermes-agent) | Самый быстрорастущий OSS-агент 2026 (~180K stars): теперь **desktop-приложение** (Mac/Win) поверх общего ядра — та же память/скиллы/сессии из CLI и GUI. Запуск в Docker/Modal/SSH, голосовой режим, GEPA self-improvement loop (агент дорабатывает себя по ходу). **Канал давал `hermes-ai.net` — официальное это `nousresearch/hermes-agent`.** Reference для [Eclipse Hopson Sentinel](#-наши-проекты) (локальный AI-оператор + память + голос — та же ниша) | [![Stars](https://img.shields.io/github/stars/nousresearch/hermes-agent?style=flat)](https://github.com/nousresearch/hermes-agent) |

### Локальный запуск больших моделей

| Ресурс | Описание | Stars |
|---|---|---|
| [AirLLM](https://github.com/lyogavin/airllm) | Послойный инференс: гоняет 70B–405B модели на GPU от 4 ГБ (грузит слои по очереди, не всю модель). Любые HF-модели, все форматы. **Важная оговорка:** «405B летает на 4 ГБ» вводит в заблуждение — это размен памяти на **скорость** (диск↔GPU своп каждый слой → медленно, не realtime). Юзкейс: разовый batch-inference больших моделей на слабом железе, а не интерактив. Для Hopson Sentinel / Eclipse AI Hub local — нишево | [![Stars](https://img.shields.io/github/stars/lyogavin/airllm?style=flat)](https://github.com/lyogavin/airllm) |

### Голос / TTS (для Hopson Sentinel · Eclipse Chat voice)

| Ресурс | Стек | Описание |
|---|---|---|
| [GPT-SoVITS (RVC-Boss)](https://github.com/RVC-Boss/GPT-SoVITS) | Python / WebUI / Local | Few-shot клон голоса: 5–10 сек → zero-shot, 1 мин → fine-tune. Кросс-лингвальный (RU↔ZH↔EN↔JP↔KO), сохраняет тембр/паузы/эмоции, локально. **Провенанс:** канал давал перезалив `huggingface.co/fuckSelf/GPT-SoVITS-Russian` — берём **upstream RVC-Boss** (реуплоады со случайными именами = риск подменённых весов). Сильнейший RU-вариант на свой хост; дополняет уже залистанные [CosyVoice 3](#-media--download) / [MOSS-TTS-Nano](#-media--download) / [Supertonic 3](#-media--download) |
| [MisoTTS 8B (MisoLabs)](https://github.com/MisoLabsAI/MisoTTS) | Python / Local | 8B эмотивный TTS (RVQ Transformer на Llama-3.2 + Sesame CSM), one-shot клон с ~10 сек, латентность 110 мс, modified MIT. Под аудиокниги/озвучки/подкасты. **Только английский** на 28.05–05.06 → для RU остаётся GPT-SoVITS / CosyVoice. На радар как самый «человечный» по эмоциям ([HF demo](https://huggingface.co/MisoLabs/MisoTTS)) |

### Генерация изображений

| Ресурс | Описание |
|---|---|
| [Reve 2.0](https://app.reve.com/) | Layout-based генератор: представляет картинку как **код/слои** (у каждого элемента позиция+размер+описание) → каждый элемент addressable и редактируется отдельно. #2 на Text-to-Image Arena (03.06, 1280 — обошёл Nano Banana, уступил GPT Image 2), 4K/16MP под печать, ~$0.0067/img. **Закрытый SaaS** (не локально). Differentiator vs Nano Banana — точное редактирование композиции и текста. Кандидат в [Shotforge](#-наши-проекты) / [Text2Image](#-наши-проекты) / Eclipse AI Hub Image Studio / карточки Star CRM (где важна правка отдельных зон) |

### Media-промпты и enhancers

| Ресурс | Описание | Stars |
|---|---|---|
| [awesome-video-prompts](https://github.com/songguoxs/awesome-video-prompts) | Большая коллекция промптов для Veo 3.1 / SeeDance 2 / Kling и др.: реклама, LEGO, аниме-баттлы — с разбором света/камеры/движения/звука/реплик и видео-примером на каждый. Промпты EN, описания CN. Для [Shotforge](#-наши-проекты) image→video, StreamForge-AI, маркетинг-роликов | [![Stars](https://img.shields.io/github/stars/songguoxs/awesome-video-prompts?style=flat)](https://github.com/songguoxs/awesome-video-prompts) |
| [Gemini Voyager (Nagi-ovo)](https://github.com/Nagi-ovo/gemini-voyager) | Браузер-расширение, прокачка Gemini-веба: фикс рендера Markdown/диаграмм, экспорт чатов в PDF/MD/JSON, выгрузка reasoning из Deep Research, избранное промптов, навигация/содержание, синхронизация папок через Drive, удаление вотермарок (Nano Banana). **С оговоркой:** удаление вотермарок — grey; sync через Drive = расширение видит контент. Полезно тем, кто гоняет Gemini-модули | [![Stars](https://img.shields.io/github/stars/Nagi-ovo/gemini-voyager?style=flat)](https://github.com/Nagi-ovo/gemini-voyager) |

### Dev-утилиты

| Ресурс | Стек | Описание |
|---|---|---|
| [browserytools (aghyad97)](https://github.com/aghyad97/browserytools) | Web / Local | 130+ браузерных утилит без облака: PDF/ZIP/CSV-Excel, конвертеры, сжатие картинок, формат кода, аудио, запись экрана, текст, date/math. Всё клиент-сайд (приватно, работает на рабочей машине без установки софта). Дополняет уже залистанный [Office Website](#-self-hosted-платформы); годится как reference для собственного self-hosted utility-набора | [![Stars](https://img.shields.io/github/stars/aghyad97/browserytools?style=flat)](https://github.com/aghyad97/browserytools) |
| [LocalSend Web](https://web.localsend.org/) | Web | Браузерная версия уже залистанного [LocalSend](#️-dev-tools--cli) — передача файлов любого размера между устройствами в одной Wi-Fi-сети без установки приложения. Удобно для разовых передач на чужой/новый машине |

### Privacy / OPSEC

| Ресурс | Описание |
|---|---|
| [Burner Emails / burnermail.io](https://burnermail.io/) | Расширение Chrome: генерит одноразовые адреса, письма форвардятся на реальную почту (email-прокси), любой алиас отключается от спама. Та же ниша, что уже залистанные [SimpleLogin](#email-алиасы-и-одноразовые-контакты) / Hide My Email — **SimpleLogin предпочтительнее** (open-source, можно self-host); burnermail — закрытый SaaS (видит метаданные форвардинга), для не-критичных регистраций |
| [OSINT-библиотека (1387 парсеров)](https://osint.juanmathewsrebellosantos.com/) | 1387 OSINT-инструментов в 52 категориях с поиском: парсеры соцсетей/Telegram, поисковики утечек/метаданных, сетевые анализаторы. **⚠️ Grey/высокий риск:** среди категорий — «пробив» (people-search/деанон), что в РФ-контексте незаконно (152-ФЗ о перс. данных). Допустимо только: legit OSINT по **открытым** источникам, авторизованный pentest, проверка собственного цифрового следа (как наш [7-step гайд](#гайды-по-чистке-цифрового-следа)). **Не для** деанона физлиц / mass-сбора ПДн. Та же планка, что [hackingtool](#️-dev-tools--cli) / [TorBot](#️-dev-tools--cli) |

### Meta-каталоги

| Ресурс | Описание |
|---|---|
| [TrendShift](https://trendshift.io/) | Агрегатор трендов GitHub: срезы за день/неделю/месяц, живая лента из Twitter, поиск по темам (AI agent / RAG / MCP), топы кодинг-ассистентов и скиллов. **Прямой инструмент для пополнения этой библиотеки** — периодический skim, как [100-free-OSS-repos](#meta-каталоги). Ловит годноту до того, как её разнесут хайп-каналы |

### Промпт-коллекции

| Ресурс | Описание |
|---|---|
| [Skeptical Verifier](prompts/skeptical-verifier.md) | System-промпт против sycophancy: модель перепроверяет каждое утверждение, явно помечает неопределённость, не подмахивает «ты прав». Для Eclipse AI Hub (Code Review/RAG/Security), Hopson Sentinel, CryptoPulse. Комплемент к [Lyra](prompts/lyra-prompt-optimizer.md) |
| [Feedback Protocols — 6 промптов](prompts/feedback-protocols-6.md) | Управление диалогом: сбор контекста до ответа, анти-«угадайка», лаконичность, стоп-краны «Дум-Дум» / «Подожди, блин». Ловят главную проблему долгих агентных сессий — агент понёсся не туда. Дополняет [skeptical-verifier](prompts/skeptical-verifier.md) |
| [Resume Toolkit — 7 промптов](prompts/resume-toolkit-7.md) | Полный путь найма: аудит резюме → ATS-обход → опыт в результаты → summary → адаптация → сопроводительное → STAR-симулятор. Связка с [job-ops](#-seo--маркетинг) + пресеты в Eclipse AI Hub Copywriter |

> **Дубли / не добавлены отдельно:** «4 промпта для презентаций» из дропа 04.06 — подмножество уже залистанных [9 промптов для презентаций](#промпт-коллекции) (Eclipse AI Hub Copywriter). Академический «humanizer для диплома» — тот же класс, что [Humanize Rewriter](prompts/humanize-rewriter.md) / [Anti-AI-Text](prompts/anti-ai-text-6-prompts.md), но с прямой рамкой «обход AI-детектора для курсовой» → **не листаем** (наша планка: операторские/контент-задачи, не academic-обход).

### Возможности доступа

| Ресурс | Описание |
|---|---|
| [Codex for OSS (OpenAI)](https://openai.com/form/codex-for-oss/) | OpenAI раздаёт ChatGPT Pro + Codex + GPT-5.5 Pro + API-кредиты + Codex Security на ~полгода для open-source проектов (заявка: ссылка на репо, звёзды/загрузки, как ИИ поможет). **Актуально для нас** — у `PavelHopson` куча OSS-репозиториев (eclipse-library, eclipse-chat, eclipse-media, oh-my-claudecode, shotforge…). Низкий риск, прямая выгода — стоит подать на самый заметный репо |

### Feature-инспирация (не репозиторий)

| Источник | Идея для нашего продукта |
|---|---|
| Discord — пространственный звук | **Eclipse Chat voice-каналы:** spatial audio (слышишь тиммейта «из его точки в комнате») — настройка размера помещения, позиций и дистанции. Дифференциатор vs голый WebRTC-микс; реализуемо через WebAudio `PannerNode` (HRTF) поверх Socket.io-сигналинга. В бэклог voice-фич рядом с [баннер-identity](https://github.com/PavelHopson/eclipse-chat) |

### Mapping → наши проекты

> Где находки 28.05–05.06 реально применяются:

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **Security Guidance (Anthropic)** | Все Claude Code workflow · Star CRM build · Eclipse AI Hub Security · Hopson Sentinel | `/plugin install` → pre-tool hook авто-ловит vuln-паттерны при Write/Edit. Ставим первым |
| **NVIDIA/skills + SkillSpector** | Eclipse AI Hub Security · Hopson Sentinel · любой skill-install | SkillSpector как gate перед подключением community-скиллов (754-кибербез, 1700+ openclaw); skills как trusted-источник |
| **ECC + AgentShield** | oh-my-claudecode (сравнить/cherry-pick) · CI-аудит `.claude/` | AgentShield в CI на репозитории с `.claude/`; из ECC брать скиллы точечно, не весь конфиг (конфликт с OMC) |
| **Claude Code мега-стек (8)** | oh-my-claudecode · все репо | Router → не-Anthropic бэкенд; Action → CI/PR; Squad → параллельные агенты; Templates → bootstrap. Не ставить всё разом |
| **agentmemory** | Hopson Sentinel · oh-my-claudecode · личный workflow | Оценить vs текущая file-based память + MemOS — взять, если меньше дублирует и реально экономит контекст (не верить «−95%») |
| **Odysseus** | Eclipse AI Hub (reference архитектуры) | Изучить model-serving (270+) + MCP-слой; не replace, а заимствовать паттерны |
| **Hermes Agent** | Eclipse Hopson Sentinel (reference) | Та же ниша (локальный оператор + память + голос) — изучить GEPA self-improve loop и desktop-shell поверх ядра |
| **AirLLM** | Hopson Sentinel · Eclipse AI Hub local (нишево) | Только batch-inference больших моделей на слабом GPU; не для realtime |
| **GPT-SoVITS / MisoTTS** | Hopson Sentinel (TTS/STT/PTT) · Eclipse Chat voice · Educator-AI · DnD Forge (NPC-голоса) | GPT-SoVITS (RVC-Boss upstream) для RU-озвучек на свой хост; MisoTTS — EN-эмоции на радар |
| **Reve 2.0** | Shotforge · Text2Image · Eclipse AI Hub Image Studio · Star CRM карточки | API opt-in где нужна правка отдельных зон/текста (layout-edit), pay-per-image через прокси |
| **awesome-video-prompts** | Shotforge (img→video) · StreamForge-AI · маркетинг | Каталог пресетов; cherry-pick под сцену |
| **Gemini Voyager** | Личный Gemini-workflow · reference UX для Eclipse AI Hub | Расширение для удобства; вотермарк/Drive-sync — на свой риск |
| **browserytools / LocalSend Web** | Office-утилиты · reference для self-hosted utility-набора · разовые передачи файлов | browserytools — образец клиент-сайд тулз; LocalSend Web — без установки |
| **Burner Emails** | Регистрации (не критичные) | SimpleLogin приоритетнее (self-host); burnermail — закрытый, для мелочей |
| **OSINT 1387** | Авторизованный OSINT · проверка своего следа | Только открытые источники / pentest; «пробив» — НЕ использовать (152-ФЗ) |
| **TrendShift** | Пополнение eclipse-library | Периодический skim трендов по AI agent / MCP / RAG |
| **Skeptical Verifier / Feedback / Resume промпты** | Eclipse AI Hub Copywriter · Hopson Sentinel · личный workflow | System-пресеты «Критик» / «Карьера»; feedback-протоколы — стоп-краны в `/loop` |
| **Codex for OSS** | Заявка на PavelHopson OSS-репо | Подать на самый звёздный репо → ChatGPT Pro + Codex на полгода |
| **Discord spatial audio** | Eclipse Chat voice (фича) | WebAudio `PannerNode`/HRTF поверх Socket.io — в бэклог voice |

### ⚠️ Grey / high-risk и reference — внесено по запросу владельца

> Эти находки внесены в библиотеку по **явному запросу владельца репозитория**.
> Маркеры риска и дисклеймеры **сохранены**: листинг = документация для полноты
> подборки, а не рекомендация к использованию. Пиратское / закрыто-серое —
> только на свой страх и риск и в рамках закона; **вне продуктового контура Eclipse**.

| Находка | Статус / дисклеймер |
|---|---|
| **SFF / «Пиратский Steam»** ([Midrags/SFF](https://github.com/Midrags/SFF)) | 🚨 **Высокий риск.** Взлом Denuvo, обход лицензий, «взлом мультиплеера» = пиратство (нарушение авторских прав) + классический вектор малвари в подобных репо. Запускать **только** в одноразовой VM, **никогда** на машине с боевыми ключами/доступами Eclipse. Несовместимо с легальным продуктовым контуром — исключительно личное использование на свой риск |
| **KuKuTool** ([dy.kukutool.com](https://dy.kukutool.com/ru)) | ⚠️ **Grey.** Закрытый веб-сервис: качает чужой контент + **снимает вотермарки** (нарушение прав авторов) + грузит ваши URL на свой сервер (приватность). Для легальной задачи «скачать своё» приоритетен наш self-hosted [Eclipse Media](#-наши-проекты) (yt-dlp) |
| **Epicure** ([epicure.kaikaku.ai](https://epicure.kaikaku.ai/)) | Reference. Рецепт по фото холодильника (4M рецептов / 1790 ингредиентов). Вне scope продуктов, но архитектурно любопытно: vision→structured data — тот же паттерн, что анализ товарных фото в Star CRM / Shotforge |
| **Kaspersky «AI vs AI» стрим** ([lp.kaspersky.com](https://lp.kaspersky.com/ru/ai-vs-ai)) | Reference-событие (02.06, прошло). Темы — LLM в кибератаках, ИИ для SOC-команд, исследование Kaspersky × К2 — релевантны Hopson Sentinel как доклад/материал, не инструмент |
| **Selectel «домен за рубль»** ([slc.tl](https://slc.tl/fuhsm)) | Платное промо хостера (перенос/продление домена ₽1 до 30.06, бесплатный DNS+SSL). Альтернатива нашему бесплатному [FreeDomain](#infrastructure) для prototype-доменов |
| **Opus 4.8 jailbreak** ([новость](https://claude.com/)) | Red-team **reference** (не инструмент): Opus 4.7 сломал 4.8 атакой «продолжи обрывки глав учебника» → выдача запрещённого контента. Тест-кейс устойчивости к textbook-continuation jailbreak для Eclipse AI Hub Security / Hopson Sentinel |
| **«Вайб-кодинг» подборка** ([YouTube](https://youtu.be/QkyTCTH2kWY)) | Reference. Motion-graphics starter (Remotion-style: 195 анимационных паттернов, kinetic typography + dashboard, 5 Claude-промптов для `.tsx`) через гейтед-док. Полезно для UI-роликов; верифицируемый легит-аналог уже листан — [transitions.dev](#media--content) |

---

## 📥 Подборка Eclipse (08.06.2026)

> Дроп Telegram «Не баг, а фича» от 08.06 — 4 находки. Провенанс верифицирован
> веб-поиском. Jina Reader **уже внедрён** в Eclipse AI Hub RAG (PR), остальное —
> по разделам ниже + mapping. Маркетинг канала помечен.

### Agent skills — коннекторы приложений

| Ресурс | Описание | Stars |
|---|---|---|
| [application-skills (membranedev)](https://github.com/membranedev/application-skills) | 3000+ app-скиллов по Agent Skills spec: один скилл на приложение (gmail, slack, hubspot, salesforce, github…) — описывает структуру и действия аппки, агент сам понимает «как работать». Claude Code / Cursor / Copilot / Gemini CLI / OpenClaw. **⚠️ Ключевой нюанс:** «больше не передаём ключи вручную» работает через **Membrane** — сторонний брокер учёток (OAuth/токены идут через их сервис). Для прода это означает доверие third-party к вашим креденшелам — оценивать отдельно по каждому коннектору; для не-чувствительных аппок ок. Дополняет [NVIDIA/skills](#claude-code--security--skill-governance) (но те верифицированы SkillSpector'ом, а эти — нет → прогнать перед install) | [![Stars](https://img.shields.io/github/stars/membranedev/application-skills?style=flat)](https://github.com/membranedev/application-skills) |

### Web-extraction / RAG

| Ресурс | Описание | Stars |
|---|---|---|
| [Jina Reader (jina-ai/reader)](https://github.com/jina-ai/reader) | Любой URL → LLM-friendly Markdown префиксом `https://r.jina.ai/<url>`. Free-tier без ключа (~20 req/min; 200 + 1M токенов с бесплатным API-ключом), парсит и `.pdf` (PDF.js). Mainstream-инструмент для RAG/агентов. **Канал подал как «обход всех пейволов»** — серверная выборка действительно проходит soft-paywalls и CORS (та же grey-зона, что [bypass-paywalls](#privacy--opsec) — в рамках закона/ToS источника). **✅ Внедрён** в [Eclipse AI Hub](#-наши-проекты) RAG (`parseUrl` + UI «Загрузить из URL»). Кандидат также в Eclipse-webclaw / business-data-platform / Lead-Sniper / Open Researcher как fallback-экстрактор | [![Stars](https://img.shields.io/github/stars/jina-ai/reader?style=flat)](https://github.com/jina-ai/reader) |

### ML training & research

| Ресурс | Описание | Stars |
|---|---|---|
| [ml-intern (HuggingFace)](https://github.com/huggingface/ml-intern) | Официальный HF — автономный ML-инженер на smolagents: читает статьи, исследует HF-доки/датасеты/репы, пишет/правит код, запускает fine-tuning, тестит/деплоит. 170k auto-compaction контекста, **Doom-Loop detector** (ловит зацикленные tool-call'ы), ToolRouter к HF-экосистеме + sandbox-исполнение. Обошёл Claude Code на GPQA (Qwen3-1.7B 10%→32% за <10ч на 1×H100). **🔑 Нужен серьёзный GPU** (H100-класс) для реального обучения. Фит → [ModelForge](#-наши-проекты) (управление/обучение моделей); дополняет [HuggingFace Skills](#ml-training--research) / [autoresearch](#ml-training--research). Есть community-порт в Claude Code skill ([AlexWortega/claude-ml-intern-skill](https://github.com/AlexWortega/claude-ml-intern-skill)) | [![Stars](https://img.shields.io/github/stars/huggingface/ml-intern?style=flat)](https://github.com/huggingface/ml-intern) |

### Reference (провенанс под вопросом)

| Ресурс | Статус / дисклеймер |
|---|---|
| **Учебник по разработке ИИ-агентов** ([Google Drive PDF](https://drive.google.com/file/d/1949IkidExSJSLj091OO30eUQOAahptf8/view)) | Темы: планирование, память, инструменты, мультизадачность, многосостоянные задачи, отличия от LLM. **⚠️ Неверифицируемый источник:** случайный Drive-дамп без автора/лицензии — возможен копирайт (пиратская книга) или подменённый файл. **Не эндорсю скачивание.** Для тех же тем есть верифицируемые источники в библиотеке: [Build Your Own OpenClaw](#openclaw-экосистема), [awesome-openclaw-usecases](#openclaw-экосистема), [OpenAI Codex Use-Cases](#ai-coding-agents), [claude-code-best-practice](#оркестрация-и-агенты). Скачивать Drive-PDF — на свой риск, проверив в sandbox |

### Mapping → наши проекты

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **Jina Reader** | ✅ Eclipse AI Hub RAG (сделано) · Eclipse-webclaw · business-data-platform-mvp · Lead-Sniper · Open Researcher | `r.jina.ai/<url>` → markdown fallback-экстрактор где сейчас raw HTML; free-tier без ключа |
| **application-skills** | Eclipse AI Hub (app-коннекторы) · Hopson Sentinel · oh-my-claudecode | Cherry-pick коннекторы → прогнать [SkillSpector](#claude-code--security--skill-governance) перед install; оценить Membrane-брокер для чувствительных учёток |
| **ml-intern** | ModelForge (обучение моделей) · Eclipse AI Hub local | 🔑 Нужен GPU H100-класс; автономный fine-tuning loop под свои small-модели |
| **Agents textbook** | Reference (с осторожностью) | Предпочесть верифицируемые источники из библиотеки |

---

## 📥 Подборка Eclipse (09.06.2026)

> Дроп Telegram «PushEnter» от 09.06 — 3 поста, но **2 из 3 — повтор батча
> [08.06](#-подборка-eclipse-08062026):** учебник по ИИ-агентам (тот же
> Google Drive-линк, уже в reference с провенанс-оговоркой) и [ml-intern](#ml-training--research)
> (уже листан, фит → ModelForge, нужен GPU). Новое — одно.

### Генерация рукописного текста

| Ресурс | Описание | Stars |
|---|---|---|
| [HandwritingGeneration (NastyBoget)](https://github.com/NastyBoget/HandwritingGeneration) | Генерация рукописного **кириллического** текста: `write_text()` (абзацы/страницы), `write_word()` (слова), `transforms.py` (наклон, загогулины, разрывы, шум «ручка перестала писать», контраст), дообучение на своём почерке. Локально, тянет слабый ПК. **Легит-применение:** синтетическая **аугментация данных для OCR** — у того же автора есть [hrtr](https://github.com/NastyBoget/hrtr) (распознавание рукописного русского), для обучения которого такая генерация и нужна. **⚠️ Grey-рамка канала** («студентам — генерить конспекты/лекции») = подделка рукописных работ (academic integrity) — та же планка, что [humanize-промпты](#промпт-коллекции): **не для** обхода проверок/выдачи за рукописное. **Фит в наши проекты:** прямого нет (никто не делает handwriting-OCR) — листаем как reference на случай OCR-датасетов | [![Stars](https://img.shields.io/github/stars/NastyBoget/HandwritingGeneration?style=flat)](https://github.com/NastyBoget/HandwritingGeneration) |

---

## 📥 Подборка Eclipse (10–16.06.2026)

> Дропы Telegram «Не баг, а фича» / «PushEnter» за **09.06 (вечер) – 16.06** — большой батч
> с сильным внутренним дублированием (LocallyUncensored · Pi-hole · Ponytail · loops · Stack AI
> повторялись по дням). **Уже в библиотеке** (не дублируем): [SkillSpector](#claude-code--security--skill-governance),
> [Kimi WebBridge](#ai-coding-agents) / [Kimi K2.6](#модели-для-локального-запуска-gguf-ollama-lm-studio-colab),
> [application-skills](#agent-skills--коннекторы-приложений), [Jina Reader](#web-extraction--rag),
> [ml-intern](#ml-training--research), учебник-PDF, [HandwritingGeneration](#генерация-рукописного-текста).
> Провенанс проверен где возможно, хайп канала помечен. Промпт-коллекции вынесены в `prompts/`.

### Claude Code — skills & оркестрация

| Ресурс | Описание | Stars |
|---|---|---|
| [Ponytail (DietrichGebert)](https://github.com/DietrichGebert/ponytail) | Skill против «графомании» в коде: прогоняет задачу через вопросы «точно нужно? есть в stdlib? нативная фича платформы? одной строкой?» → агент пишет минимально необходимое. Заявлено −80–94% генерации, −47–77% стоимости, ×3–6 скорость (числа из ТГ — проверять на своих задачах). Cursor / Windsurf / Cline / Copilot / Antigravity / OpenCode / Claude Code. **Фит:** [oh-my-claudecode](#-наши-проекты) + любой dev-workflow | [![Stars](https://img.shields.io/github/stars/DietrichGebert/ponytail?style=flat)](https://github.com/DietrichGebert/ponytail) |
| [supergoal (robzilla1738)](https://github.com/robzilla1738/supergoal) | Skill для Claude Code / Codex: `/supergoal` смотрит проект+тулзы+цель → делит на фазы, создаёт файлы плана/состояния/контекста; `/goal` исполняет + финальный аудит + пишет ошибки в память проекта. **Пересекается** с нашим [oh-my-claudecode](#-наши-проекты) (та же ниша roadmap-оркестрации) — cherry-pick идею файлов состояния, не ставить весь конфиг поверх OMC | [![Stars](https://img.shields.io/github/stars/robzilla1738/supergoal?style=flat)](https://github.com/robzilla1738/supergoal) |
| [lottie skill (diffusionstudio)](https://github.com/diffusionstudio/lottie) | Skill: собирает Lottie-анимацию из текстового промпта или SVG (графики, анимированный текст, живой логотип). Claude Code / Codex / skill-агенты. **Фит:** [Shotforge](#-наши-проекты) / [Text2Image](#-наши-проекты) (анимэйшн-ассеты), EclipseForgeLanding и любой фронт (лоадеры, micro-interactions) | [![Stars](https://img.shields.io/github/stars/diffusionstudio/lottie?style=flat)](https://github.com/diffusionstudio/lottie) |
| [loops.elorm.xyz](https://loops.elorm.xyz/) | Сайт-каталог популярных community «loops» — готовых последовательностей действий для Claude Code (автоматизация рутины без повторных объяснений). Веб, не репо. **Фит:** reference для oh-my-claudecode / личных `/loop`-сценариев | — |

### AI Coding Agents (терминальные / альтернативы)

| Ресурс | Описание | Stars |
|---|---|---|
| [CodeWhale (Hmbown)](https://github.com/Hmbown/CodeWhale) | Терминальный кодинг-агент «Claude Code для DeepSeek/локалок»: API DeepSeek / OpenRouter / Ollama, привязка «личности» к сессии, долгосрочная память, суб-агенты, skills + tools + MCP. `npm i -g codewhale`, активная разработка. **Фит:** [ai-setup](#-наши-проекты) (цель конфигов), oh-my-claudecode (сравнить), Hopson Sentinel (локальный оператор — reference) | [![Stars](https://img.shields.io/github/stars/Hmbown/CodeWhale?style=flat)](https://github.com/Hmbown/CodeWhale) |
| [MiMo Code (Xiaomi)](https://mimo.xiaomi.com/coder) | Терминальный кодинг-агент Xiaomi. **⚠️ Маркетинг:** «база Claude Sonnet 4.6» неправдоподобно (Xiaomi не строит на закрытой модели Anthropic — вероятно своя модель + Claude-совместимый агентский UX); «безлимитный контекст» и «обходит по 3 бенчам» — непроверяемый хайп. Держать на радаре как альтернативу, не эндорсить | — |

### Модели / LLM

| Ресурс | Описание | Stars |
|---|---|---|
| [GLM 5.2 (Z.ai / Zcode)](https://zcode.z.ai/en) | Китайская опен-модель (Zhipu/Z.ai), бесплатна в клиенте Zcode, токены кратно дешевле. **⚠️ Хайп канала** («сильнее Fable 5 в ризонинге, 42.8 по „Bridgebench" с отрывом») — бенч непроверяемый. GLM-серия реально конкурентна, но «> Fable 5» — на веру не брать. **Фит:** ai-setup (опция модели), free-API роутинг | — |

### Мультиагентные платформы

| Ресурс | Описание | Stars |
|---|---|---|
| [Kimi Work (Moonshot)](https://www.kimi.com/products/kimi-work) | Продукт Moonshot: Agent Swarm до 300 агентов локально + браузерный контроль (расширение WebBridge — **уже листан** [Kimi WebBridge](#ai-coding-agents)), встроенные данные Yahoo Finance + World Bank без API, память, Python-исполнение, планировщик. **Фит:** [CryptoPulse](#-наши-проекты) (Yahoo Finance / World Bank — релевантно), Hopson Sentinel (browser-control reference), oh-my-claudecode (swarm reference). Оценить локальное vs облако | — |
| [Stack AI](https://www.stackai.com/) | No-code платформа агентов: бесплатно 500 запусков/мес + (по словам юзеров) 1M токенов/день, библиотека шаблонов (финансы, ресёрч, Excel, почта…), бэкенды GPT-5.5 / Gemini 3.5 Flash / Grok 4.3. **Фит:** reference — шаблоны как инспирация для [Eclipse AI Hub](#-наши-проекты); SaaS, не self-host | — |

### Бесплатный доступ к моделям / гранты

| Ресурс | Описание |
|---|---|
| [Claude Max для OSS](https://claude.com/contact-sales/claude-for-oss) | **🎯 Actionable.** Anthropic даёт 6 мес Claude Max (~$1200) разрабам опен-сорса: публичный репо с коммитами/релизами/ревью за последние 3 мес. До **30.06**, 10 000 разрабов. **Подать на самый активный/звёздный репо PavelHopson** (аналог листанного [Codex for OSS](#mapping--наши-проекты-1)) |
| [Notion — Opus 4.8 free](https://app.notion.com/) | Notion раздаёт Opus 4.8 бесплатно в AI-меню (+ Gemini 3.1 Pro, GPT-5.5, DeepSeek V4). Reference — бесплатный доступ к топ-моделям для разовых задач |
| [OpenAI API credits (data-sharing)](https://platform.openai.com/) | Data Controls → Sharing: включаешь шаринг данных → API-кредиты (250k tok/день GPT-5.5, до 10M на mini). **⚠️ Цена:** твои промпты/данные идут в обучение OpenAI. **Не включать** для чувствительных/клиентских данных — только некритичные эксперименты |

### Prompt-engineering (official + reference)

| Ресурс | Статус / описание |
|---|---|
| [Claude Fable 5 prompting guide](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5) | **Официальный** гайд Anthropic по промптингу Fable 5: актуальные шаблоны, особенности модели, «длинные промпты теперь могут мешать». (Mythos=Fable 5 во всех подписках до 22.06, потом кредиты.) **Фит:** prompt-eng reference для [Eclipse AI Hub](#-наши-проекты) / Hopson Sentinel / промпт-файлов |
| [Fable 5 system prompt (leak)](https://github.com/elder-plinius/CL4R1T4S/blob/main/ANTHROPIC/CLAUDE-FABLE-5.md) | **⚠️ Reference, провенанс/копирайт под вопросом** (утечка IP Anthropic). Полезно для изучения структуры system-промпта. **Дебанк хайпа:** «Mythos = самая опасная нейронка, скорректируй запрос и получишь Mythos» — чушь: слитый системный промпт не «разблокирует» другую модель, это просто инструкции |

### Обучение / гайды

| Ресурс | Описание | Stars |
|---|---|---|
| [Hands-On-AI-Engineering (Sumanth077)](https://github.com/Sumanth077/Hands-On-AI-Engineering) | 50+ гайдов: AI-агенты, RAG, OCR, голос — с кодом и инструкцией запуска. Бесплатно. **Фит:** reference/обучение — паттерны для Eclipse AI Hub, Hopson Sentinel | [![Stars](https://img.shields.io/github/stars/Sumanth077/Hands-On-AI-Engineering?style=flat)](https://github.com/Sumanth077/Hands-On-AI-Engineering) |
| [Kaggle 5-day AI Agents (vibecoding, Google)](https://www.kaggle.com/competitions/5-day-ai-agents-intensive-vibecoding-course-with-google) | Бесплатный 5-дневный интенсив Kaggle×Google: агентный кодинг, скиллы/память/контекст, безопасность агентов; задания + трансляции + сертификат. Старт 15.06 | — |

### Генерация изображений

| Ресурс | Описание |
|---|---|
| [ImageToPrompt (Chrome ext)](https://chromewebstore.google.com/detail/ImageToPrompt/pgabcjhpgdcgbflabemecpficpknnpfn) | Расширение: картинка → промпт для генерации похожей. **Фит:** [Shotforge](#-наши-проекты) / [Text2Image](#-наши-проекты) (reverse-prompt / «повторить стиль»). **⚠️** закрытое расширение, грузит изображение на свой сервис — для некритичных пикч |

### Privacy / OPSEC / Self-hosted

| Ресурс | Описание | Stars |
|---|---|---|
| [Pi-hole (docker)](https://github.com/pi-hole/docker-pi-hole) | Сетевой блок рекламы/телеметрии: лёгкий приватный DNS, фильтрует на уровне подключения для всех устройств, Docker одной командой, авто-обновление блок-листов. **Фит:** можно поднять на VPS Mara (сетевой адблок для своих устройств) или reference. Mainstream, легит | [![Stars](https://img.shields.io/github/stars/pi-hole/docker-pi-hole?style=flat)](https://github.com/pi-hole/docker-pi-hole) |
| [Universal Android Debloater NG](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation) | Удаляет OEM-блоат/телеметрию (Samsung/Xiaomi/Huawei…) **без root** через ADB, показывает утечки, экономит батарею. **Фит:** личное / Hardware reference. Легит OSS | [![Stars](https://img.shields.io/github/stars/Universal-Debloater-Alliance/universal-android-debloater-next-generation?style=flat)](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation) |

### Промпт-коллекции (вынесено в `prompts/`)

| Коллекция | Описание |
|---|---|
| [finance-15.md](prompts/finance-15.md) | 15 промптов личных финансов: распределение зарплаты, долги, инвестиции, подушка, рост дохода. **Фит:** пресет-персона «Финансовый стратег» в Eclipse AI Hub. (Это **не** трейдинг CryptoPulse — бытовое планирование) |
| [travel-hacking-10.md](prompts/travel-hacking-10.md) | 10 промптов travel: дешёвые билеты, отели, маршруты. **⚠️** hidden-city / mistake fares нарушают ToS авиакомпаний — каркас риска сохранён в файле |
| [resume-boost-3.md](prompts/resume-boost-3.md) | 3 промпта подгонки CV под вакансию (gap-анализ, ключевые слова, achievements). Дополняют [resume-toolkit-7.md](prompts/resume-toolkit-7.md). **Фит:** InterviewForge, Eclipse AI Hub Copywriter |
| [2r.ru — анализатор HH](https://2r.ru/top-skills-and-resumes/) | Веб-сервис: сканит профили топ-соискателей по специальности → рейтинг ключевых скиллов + готовые резюме. Закрытый RU-сервис. **Фит:** InterviewForge / resume reference |

### Mapping → наши проекты

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **Ponytail** | oh-my-claudecode · весь dev-workflow | Skill-гейт «минимальный код» — экономия токенов на всех репо; поставить рано в цепочку |
| **supergoal** | oh-my-claudecode (сравнить) | Cherry-pick идею файлов фаз/состояния; не ставить поверх OMC целиком (конфликт ниши) |
| **lottie skill** | Shotforge · Text2Image · EclipseForgeLanding | Анимэйшн-ассеты из промпта/SVG; лоадеры / micro-interactions на фронте |
| **CodeWhale** | ai-setup · Hopson Sentinel (ref) | «Claude Code для DeepSeek/Ollama» — локальный кодинг-агент; сравнить с нашим стеком |
| **Kimi Work** | CryptoPulse · Hopson Sentinel · oh-my-claudecode | Yahoo Finance / World Bank данные → CryptoPulse; browser-control + swarm как reference |
| **Claude Fable 5 guide** | Все AI-проекты · prompts/ | Ревизия system-пресетов по официальным шаблонам; короче ≠ хуже |
| **Claude Max OSS** | 🎯 Заявка на топ-репо PavelHopson | До 30.06 — 6 мес Max за публичный активный репо (коммиты/релизы за 3 мес) |
| **finance-15 / resume-boost-3** | Eclipse AI Hub (пресеты) · InterviewForge | Персоны «Финансовый стратег» / «Карьера» |
| **Pi-hole** | VPS Mara (опц.) | Сетевой адблок на сервере для своих устройств; Docker один-команда |
| **ImageToPrompt** | Shotforge · Text2Image | Reverse-prompt фича «повторить стиль картинки» (своя реализация, не расширение) |
| **Hands-On-AI-Engineering** | Eclipse AI Hub · Hopson Sentinel (ref) | Паттерны RAG / agents / voice / OCR |

### ⚠️ Grey / high-risk и reference — внесено по запросу владельца

> Маркеры риска сохранены: листинг = документация для полноты подборки, не рекомендация.
> Пиратское / уязвимое — на свой риск и в рамках закона; **вне продуктового контура Eclipse**.

| Находка | Статус / дисклеймер |
|---|---|
| **Gemma 4 Obliterated** ([HF OBLITERATUS](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)) | ⚠️ **Uncensored.** Abliteration сняла safety-слой («0 отказов из 842»), 22ГБ, ollama / LM Studio / llama.cpp. Только reference / исследование устойчивости — **не** в продуктовый контур. Та же планка, что [Uncensored generative models](#uncensored-generative-models-high-risk) |
| **LocallyUncensored** ([repo](https://github.com/PurpleDoubleD/locally-uncensored) · [сайт](https://locallyuncensored.com/)) | ⚠️ **High-risk.** Агрегатор 80+ моделей без цензуры, генерит 18+; закрытый сайт + OSS-репо, авто-подбор под железо. Reference, вне scope продуктов |
| **flac.music.hi.cn** | 🚨 **Пиратство.** Нелицензионная музыка (китайский сайт) + классический вектор малвари. Не в продуктовом контуре; легальная задача «скачать своё» → наш [Eclipse Media](#-наши-проекты) (yt-dlp) |
| **«Fable 5 на торрентах 3.4ТБ»** | 🃏 **Фейк/хоакс** — автор поста с Reddit сам признал, что это шутка (UPD в самом дропе). Не ресурс, листаем чтобы не приняли всерьёз |
| **Hidden-city / mistake fares** (в [travel-hacking-10](prompts/travel-hacking-10.md)) | ⚠️ Нарушают условия авиакомпаний — риск аннуляции обратного билета / бана аккаунта. Для личного использования на свой риск, не для делового тревела |
| **OpenAI $50k credits** | Не grey, но **приватность**: шаринг данных = обучение на твоих промптах. Только некритичные данные |

---

## 📦 Наши проекты

> Проекты Eclipse Forge, связанные с ресурсами из этой библиотеки

| Проект | Описание | Репо |
|--------|----------|------|
| **Eclipse Media** | Self-hosted загрузчик видео/аудио (вдохновлён Reclip) | [→](https://github.com/PavelHopson/eclipse-media) |
| **Eclipse Chat** | Self-hosted Discord-альтернатив (вдохновлён OwnCord) | [→](https://github.com/PavelHopson/eclipse-chat) |
| **ai-setup** | CLI генерации AI-конфигов + reverse команда (вдохновлён GitReverse) | [→](https://github.com/PavelHopson/ai-setup) |
| **oh-my-claudecode** | Форк OMC оркестратора | [→](https://github.com/PavelHopson/oh-my-claudecode) |
| **Shotforge** | AI-фотограф: 14 стилевых пресетов (Old Money, Manga, Product...) + Gemini + Flux | [→](https://github.com/PavelHopson/shotforge) |
| **Text2Image** | Генератор изображений по тексту — Gemini / DALL-E / Flux + каталог промптов | [→](https://github.com/PavelHopson/Text2Image) |
| **Eclipse AI Hub** | 7 AI-модулей: Chat, Arena, RAG, Code Review, Copywriter, Security, Image Studio | [→](https://github.com/PavelHopson/eclipse-ai-hub) |
| **Eclipse Hopson Sentinel** | Локальный AI-оператор — coding agent + voice (TTS/STT/PTT) + Bridge API + Rust runtime | [→](https://github.com/PavelHopson/eclipse-hopson-sentinel) |
| **CryptoPulse 2077** | Финансовый терминал с AI-аналитикой — крипто/форекс/фьючерсы, симулятор торговли, Cyberpunk стиль | [→](https://github.com/PavelHopson/CryptoPulse) |
| **Eclipse DnD Forge** | AI D&D Campaign Manager — карта мира, таймлайн, генератор NPC/квестов (форк VisualStoryWriting) | [→](https://github.com/PavelHopson/eclipse-dnd-forge) |

---

<div align="center">
<sub>Eclipse Forge · Обновляется по мере находок</sub>
</div>
