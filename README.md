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
- [🧩 Скиллы для Claude](#-скиллы-для-claude)
- [🛒 Разработка интернет-магазинов](#-разработка-интернет-магазинов)
- [🎯 Лендинги — учебный курс](#-лендинги--учебный-курс)
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
- [📥 Подборка Eclipse (17.06.2026)](#-подборка-eclipse-17062026)
- [📥 Подборка Eclipse (19.06.2026)](#-подборка-eclipse-19062026)
- [📥 Подборка Eclipse (21.06.2026)](#-подборка-eclipse-21062026)
- [📥 Подборка Eclipse (23–27.06.2026)](#-подборка-eclipse-2327062026)
- [📥 Подборка Eclipse (28.06.2026)](#-подборка-eclipse-28062026)
- [📥 Подборка Eclipse (30.06–01.07.2026)](#-подборка-eclipse-300601072026)
- [📥 Подборка Eclipse (02.07.2026)](#-подборка-eclipse-02072026)
- [📥 Подборка Eclipse (05.07.2026)](#-подборка-eclipse-05072026)
- [📥 Подборка Eclipse (06.07.2026)](#-подборка-eclipse-06072026)
- [📥 Подборка Eclipse (08.07.2026)](#-подборка-eclipse-08072026)
- [📥 Подборка Eclipse (09–13.07.2026)](#-подборка-eclipse-0913072026)
- [📦 Наши проекты](#-наши-проекты)

---

## 🤖 AI & Claude Code

### Бесплатные API

> **Где взять бесплатный AI-ключ** под наши и любые приложения — без карты, по бесплатному тиру провайдера. Как вставить ключ в Eclipse AI Hub / Shotforge → [🔌 гайд «Как подключить AI»](guides/ai-services.md). Бесплатные лимиты меняются — сверяйтесь на странице провайдера.

**Получить ключ напрямую (бесплатно, обычно без карты):**

| Ресурс | Описание | Звёзды |
|--------|----------|--------|
| [Google AI Studio · Gemini](https://aistudio.google.com/apikey) | **Лучший старт.** Ключ за минуту без карты, ~1500 запросов/день на Gemini Flash, контекст 1M. Текст — бесплатно; картинки — у младшей модели Nano Banana, Pro-картинки платные | — |
| [Groq](https://console.groq.com/keys) | Без карты, **самый быстрый** инференс (LPU), тысячи запросов/день — Llama, Qwen, GPT-OSS и др. | — |
| [OpenRouter](https://openrouter.ai/keys) | Один ключ → 20+ **бесплатных** моделей (пометка `:free`), без карты. Удобно как фолбэк | — |
| [Cerebras](https://cloud.cerebras.ai/) | Без карты, очень быстрый инференс крупных опен-моделей, ~30 запросов/мин | — |
| [GitHub Models](https://github.com/marketplace/models) | Ключ = твой GitHub-токен (без карты). GPT / Llama / Mistral / Phi и др. для разработки | — |
| [Mistral · La Plateforme](https://console.mistral.ai/) | Бесплатный экспериментальный тир без карты; сильные код-модели, контекст до 256K | — |
| [Cohere](https://dashboard.cohere.com/api-keys) | Бесплатные trial-ключи (rate-limited) — Command / Embed / Rerank | — |
| [Cloudflare Workers AI](https://dash.cloudflare.com/) | Бесплатная дневная квота на инференс, OpenAI-совместимый эндпоинт | — |
| [NVIDIA Build (95 моделей)](https://build.nvidia.com/models) | Бесплатные API: Qwen, GLM, DeepSeek, Kimi, Gemma, Mistral, Nemotron (проверять условия) | — |
| [HuggingFace Inference](https://huggingface.co/settings/tokens) | Бесплатный rate-limited инференс тысяч моделей по токену | — |

> **Без ключа вообще — локально, бесплатно, без лимитов:** [Ollama](https://ollama.com) · [LM Studio](https://lmstudio.ai) · [Jan](https://jan.ai) · [GPT4All](https://gpt4all.io) (текст) · [ComfyUI](https://github.com/comfyanonymous/ComfyUI) (картинки, Stable Diffusion). Работают на твоём ПК — ключи не нужны. Жонглировать своими ключами автоматически → [freellmapi](#llm-роутинг-и-оптимизация) ниже.

**Списки и агрегаторы:**

| Ресурс | Описание | Звёзды |
|--------|----------|--------|
| [free-llm-api-resources](https://github.com/cheahjs/free-llm-api-resources) | 26 провайдеров бесплатных LLM API — OpenRouter, Google AI Studio, NVIDIA NIM, Mistral, Groq, Cohere и др. Лимиты и условия | [![Stars](https://img.shields.io/github/stars/cheahjs/free-llm-api-resources?style=flat)](https://github.com/cheahjs/free-llm-api-resources) |
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
| [⚡ Vibe Coding — мастер-промпты для сайтов](prompts/vibe-coding-website-prompts.md) | Два мастер-промпта: прямая генерация кода сайта (Next.js 14/15 + TS + Tailwind + shadcn/ui, Schema.org SEO, Error Boundaries) и AI-агент «WebCraft», который ведёт клиента по брифу и выдаёт готовый код. Вычищено + курор-фиксы (депрекейт `source.unsplash.com` → `picsum.photos`, обобщены имена моделей). **Фит:** быстрый каркас лендингов Eclipse Forge |
| [Photo Restoration Prompt](prompts/photo-restoration-upscale.md) | Промпт реставрации старых фото: убрать царапины/шум, восстановить повреждения, мягко повысить резкость и реалистично колоризировать. **Фит:** Shotforge, Text2Image, Eclipse Media |
| [Claude Finance — 6 prompts](prompts/finance-claude-6.md) | 6 практичных сценариев личных финансов: долги, аудит расходов, бюджет, анти-импульсные покупки, автосбережения, dashboard. **Фит:** Eclipse AI Hub / Smart Life Assistant, не финансовый совет |

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
| [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) · [ui-skills.com](https://ui-skills.com/) | UI/дизайн-скиллы для Claude Code. Конкретный installable: **ui-ux-pro-max** (67 UI-стилей, 161 палитра, 99 UX-правил; free, `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill`). `ui-skills.com` — сторонний агрегатор UI-скиллов (вайб-кодинг, accessibility, анимации, перф; **провенанс не верифицирован** — вет перед install). **Сильно пересекается** с `designer-skills (87)` и `Anthropic Skills` (выше) — ставить точечно нужное, прогоняя через [SkillSpector](#claude-code--security--skill-governance). **Фит:** eclipse-ai-hub, EclipseForgeLanding, web библиотеки, лендинги | [![Stars](https://img.shields.io/github/stars/nextlevelbuilder/ui-ux-pro-max-skill?style=flat)](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) |
| [Impeccable (pbakaus)](https://github.com/pbakaus/impeccable) · [impeccable.style](https://impeccable.style/) | **Дизайн-язык для AI-харнессов** (Paul Bakaus, free OSS): 20 команд — `/polish` `/audit` `/animate` `/typeset` `/critique` и др.; грузит 7 reference-файлов (типографика, цвет, **движение**, пространство, интеракции, адаптив, UX-копирайт) и сохраняет контекст проекта в `.impeccable.md`. Даёт агенту дизайн-словарь → меньше «AI-выглядящих» UI. **Фит:** eclipse-ai-hub, web библиотеки, лендинги. Дополняет `designer-skills`/`ui-ux-pro-max` (см. выше) | [![Stars](https://img.shields.io/github/stars/pbakaus/impeccable?style=flat)](https://github.com/pbakaus/impeccable) |
| [Emil Kowalski — Web Motion](https://animations.dev/) · [design-motion-principles](https://github.com/kylezantos/design-motion-principles) | **Движение, чтобы UI ощущался живым** (подход Emil Kowalski): ease-out по умолчанию, кастомные cubic-bezier/spring, анимировать только `transform`/`opacity` (GPU, без layout-thrash), микроинтеракции 150–250 мс (<300 мс), `prefers-reduced-motion`, прерываемые жесты. Курс «Animations on the Web» + skill `design-motion-principles` (43 правила / 7 категорий, дистилляция Emil Kowalski/Krehel/Tompkins). **Фит:** моушн-проход по нашим фронтендам (у меня уже есть `animation-principles`/`motion-system`/`micro-interaction-spec`) | [![Stars](https://img.shields.io/github/stars/kylezantos/design-motion-principles?style=flat)](https://github.com/kylezantos/design-motion-principles) |
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

## 🧩 Скиллы для Claude

> Рабочий shortlist от kirill.leeks: 6 скиллов, которые превращают Claude из универсального помощника в набор мини-специалистов. Не ставить всё подряд в production-контур: сначала проверить провенанс, лицензии, системные промпты и пересечения через SkillSpector / Loopy.
>
> **Token-saving стандарт для Codex / Claude:** [гайд по применению Ponytail, Context Engineering, caveman, sqz, Loopy и router-слоя](guides/token-saving-agent-stack.md). Это не “ставим всё подряд”, а рабочий режим: меньше лишнего контекста, меньше повторных чтений, меньше болтовни агента, больше проверяемого результата.
> **Что именно внедряем в проекты:** [Applied project plan — 2026-07-13](guides/applied-project-plan-2026-07-13.md).

| Skill | Что делает | Куда полезно нам |
|---|---|---|
| [Marketing Skills (coreyhaines31)](https://github.com/coreyhaines31/marketingskills) | Набор примерно из 40 marketing-skills: аудитория, боли, возражения, email-цепочки, SEO, конверсия, лид-магниты. Сильная идея — базовый product-context skill, на который опираются остальные | EclipseForgeLanding, kwork-офферы, Eclipse AI Hub Copywriter, StarMarket/Star CRM marketing flows |
| [Stop Slop Skill](https://github.com/hardikpandya/stop-slop) | Редакторский skill против нейро-шаблонного текста: проверяет прямоту, ритм, плотность, клише и переписывает без “AI-воды” | README, лендинги, автоответы, Telegram-посты, case copy |
| [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | UI/UX skill с готовыми стилями, палитрами, шрифтовыми парами, UX-принципами и генератором дизайн-системы. Уже есть в AI-разделе, здесь — как часть рабочего shortlist | Eclipse Chat, EclipseForgeLanding, Eclipse DnD Forge, все React/Vite интерфейсы |
| [Taste Skill](https://www.tasteskill.dev/) / [GitHub](https://github.com/Leonxlnx/taste-skill) | `design-taste-frontend` — anti-slop frontend skill: читает brief, выводит дизайн-направление, подбирает реальную дизайн-систему, усиливает типографику, motion, spacing и делает pre-flight перед сдачей. Install: `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"` | EclipseForgeLanding, landing/home Eclipse Chat, Eclipse DnD Forge, portfolio/project pages. Не основной инструмент для тяжёлых dashboards/admin/tables — там брать продуктовые паттерны Carbon/Fluent/Atlassian/Polaris |
| [Remotion Video Skill](https://github.com/wshuyi/remotion-video-skill) | Генерация анимированных видео через Remotion: текст, переходы, motion-сцены, шаблоны под серийный контент | Eclipse Media, Shotforge, промо Eclipse Forge, обучающие ролики Educator-AI |
| [Context Engineering Skills](https://github.com/muratcankoylan/agent-skills-for-context-engineering) | Context-engineering skills для длинных задач: меньше потери нити, меньше токенов, лучше структура агентских сессий | oh-my-claudecode, Hopson Sentinel, большие сессии по eclipse-chat |
| [Continuous Discovery Interview](https://awesomeskill.ai/skill/parcadei-continuous-claude-v3-discovery-interview) | Discovery-интервью: вытаскивает ТЗ из сырой идеи через 10-15 вопросов и превращает его в план разработки | Любой новый MVP, клиентский проект, kwork discovery, Eclipse DnD Forge mechanics |
| [Novitckii · 42 Claude design skills](https://www.novitckii.com/resources/claude-design-skills/) | Gated resource с картой 6 слоёв design-skills: frontend taste, motion, canvas, AI product interaction, prompt architecture, trust & safety. **Не ставить всё:** собирать стек из 3–4 скиллов под задачу. Разбор для наших проектов → [гайд](guides/claude-design-skills-map.md) | EclipseForgeLanding, Eclipse Chat, Eclipse DnD Forge, Eclipse Media, Shotforge, Hopson Sentinel, oh-my-claudecode |

## 🛒 Разработка интернет-магазинов

> **Раздел для команды: как и на чём делать интернет-магазин — бесплатно на старте.** Ниже путь по шагам и инструменты по этапам. **👉 Рекомендованный путь под наш React/Vite/TS-стек:** витрина на **Next.js (App Router) + Tailwind** из готового стартера → каталог/корзина на **Medusa** (Node/TS) → платежи **ЮKassa** (РФ) / **Stripe** (global) → база **Postgres (Neon)** → хостинг витрины на **Vercel / нашем VPS**, бэкенд — на **нашем VPS / Railway**. Всё с бесплатным стартом. **🎓 Учебный курс по шагам** (модули → уроки, формат «🎯 научишься · 📖 теория · 🛠 практика с нейросетью · ✅ чек») → **[открыть курс на сайте](guides/ecommerce-course.md)** — от «никогда не делал» (без кода, нейросетью) до своего headless-магазина на Medusa.

### Программа курса

| Модуль | О чём |
|---|---|
| **0 · Что такое магазин** | анатомия, части, выбор пути |
| **1 · Первый магазин за вечер** | сборка нейросетью из шаблона |
| **2 · Товары, каталог, контент** | каталог, карточки, фото и тексты |
| **3 · Корзина, заказ, оплата** | checkout + эквайринг (ЮKassa) |
| **4 · Доставка, юр-минимум, страницы** | доставка, самозанятость/ИП, оферта |
| **5 · Запуск** | хостинг, домен, SEO, аналитика, чеклист |
| **6 · Свой код: headless на Medusa** | Medusa + Next.js, Postgres, Coolify |
| **🏁 Финальный проект** | реальный магазин под клиента |

Полностью, с уроками и готовыми промптами → [🎓 Курс «Интернет-магазин с нуля»](guides/ecommerce-course.md).

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

### 🤖 Собрать магазин нейросетью (Claude · Codex · Kimi) — главный путь

> Не верстаем руками и не возимся с конструктором — **нейросеть пишет код магазина по твоим словам**. Берёшь готовый стартер (Vercel Commerce / Medusa), объясняешь обычным языком («добавь товары», «подключи ЮKassa», «задеплой») — AI делает и объясняет. Подробно, с готовыми промптами и уроками → [🎓 курс «Интернет-магазин с нуля»](guides/ecommerce-course.md).

| Ресурс | Описание |
|---|---|
| [Claude (Claude Code)](https://claude.com/product/claude-code) | Агент-программист: сам пишет файлы, ставит зависимости, чинит, деплоит. **Наш основной инструмент** для сборки магазина по описанию |
| [Codex (OpenAI)](https://openai.com/codex/) | Кодинг-агент OpenAI — в ChatGPT и как `codex` CLI. Скаффолдит и дорабатывает витрину |
| [Kimi (Moonshot)](https://www.kimi.com/products/kimi-work) | Kimi Code CLI + браузерный агент WebBridge (сам кликает в браузере) — сборка + автоматизация |
| [Стартер для AI: Vercel Commerce](https://github.com/vercel/commerce) | Дай нейросети этот шаблон (или Medusa) — она развернёт и допилит под тебя, не писать с нуля |

### 🟣 Наши сервисы для магазина (бери их — бесплатно и под рукой)

> Для удобства команды: где можно — берём свои сервисы Eclipse Forge и инструменты из этой библиотеки, а не плодим зоопарк.

| Задача в магазине | Наш сервис / инструмент |
|---|---|
| **Фото товаров** | [Shotforge](https://shotforge.eclipse-forge.ru) — AI-фотограф (предметка, стили) |
| **Картинки, баннеры, иллюстрации** | [Text2Image](https://text2image.eclipse-forge.ru) — генерация изображений по тексту |
| **Описания товаров, тексты, SEO-копирайт** | [Eclipse AI Hub](https://hub.eclipse-forge.ru) — модуль Copywriter |
| **Парсинг поставщиков/конкурентов** | [Eclipse-Claw](https://github.com/PavelHopson/Eclipse-Claw) — веб-парсер на Rust |
| **Хостинг магазина** | **Eclipse Forge VPS** — поддомен `*.eclipse-forge.ru` (фронт через Caddy, бэкенд systemd/Coolify) |
| **Устойчивые запросы к API платёжек/доставки** | [`retry-http`](https://github.com/PavelHopson/retry-http) — наш npm: ретраи с backoff |
| **AI-конфиги проекта (CLAUDE.md и т.п.)** | [ai-setup](https://github.com/PavelHopson/ai-setup) |
| **Подключить свой AI-ключ к нашим сервисам** | [🔌 Гайд: как подключить AI](guides/ai-services.md) — Shotforge / Hub и др. работают на вашем ключе (вставляется в Настройках) |
| **Любой инструмент по этапу** | эта **[библиотека](https://library.eclipse-forge.ru)** — поиск + фильтры по типам |

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

### No-code / без программирования (запасной вариант — если не хочешь даже нейросеть)

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

## 🎯 Лендинги — учебный курс

> **Учебный раздел для команды: научиться делать продающие лендинги.** Полный курс по шагам (модули → уроки, формат «🎯 научишься · 📖 теория · 🛠 практика с нейросетью · ✅ чек») → **[🎓 открыть курс на сайте](guides/landing-course.md)**. Ниже — программа и бесплатные инструменты по этапам. **Наш стек:** Next.js / Astro + Tailwind, собираем нейросетью.

### Программа курса

| Модуль | О чём |
|---|---|
| **0 · Что такое лендинг** | анатомия, секции, зачем каждая |
| **1 · Первый лендинг за час** | стек + сборка нейросетью из шаблона |
| **2 · Контент, который продаёт** | оффер (AIDA/PAS), структура, визуал |
| **3 · Дизайн «дорого»** | типографика, UI-киты, анимации |
| **4 · Конверсия и аналитика** | формы, SEO, скорость, метрики |
| **5 · Запуск** | хостинг, домен, чеклист |
| **6 · Дальше** | переиспользование, A/B, дизайн-система |
| **🏁 Финальный проект** | реальный лендинг под клиента |

Полностью, с уроками и готовыми промптами → [🎓 Курс «Лендинги с нуля»](guides/landing-course.md).

### 🤖 Собрать лендинг нейросетью (Claude · Codex · Kimi)

| Ресурс | Описание |
|---|---|
| [Claude (Claude Code)](https://claude.com/product/claude-code) · [Codex](https://openai.com/codex/) · [Kimi](https://www.kimi.com/products/kimi-work) | Агенты-программисты собирают лендинг по твоим словам: дай стартер → веди задачами («сделай hero», «добавь форму», «задеплой»). **Главный путь** |
| [Open Design + Codex — пошаговая шпаргалка](guides/open-design-codex-workflow.md) | Как развернуть Open Design внутри Codex, сгенерировать первый сайт на канве и дорабатывать дизайн точечными правками по блокам |
| [Стартер: Astro](https://github.com/withastro/astro) / [Next.js](https://github.com/vercel/next.js) | Дай нейросети готовый фреймворк-стартер — не пишем с нуля |

### 🟣 Наши сервисы для лендинга

| Задача | Наш сервис |
|---|---|
| Фото / предметка для hero | [Shotforge](https://shotforge.eclipse-forge.ru) |
| Баннеры, иллюстрации | [Text2Image](https://text2image.eclipse-forge.ru) |
| Оффер, заголовки, тексты | [Eclipse AI Hub](https://hub.eclipse-forge.ru) — Copywriter |
| Анимации (lottie из промпта) | skill [diffusionstudio/lottie](https://github.com/diffusionstudio/lottie) |
| Хостинг + домен | **Eclipse Forge VPS** — поддомен `*.eclipse-forge.ru` |

### Фреймворки и UI-киты (бесплатно)

| Ресурс | Описание | Stars |
|---|---|---|
| [Astro](https://astro.build) | Заточен под быстрые маркетинг-сайты/лендинги, нулевой JS по умолчанию. **Топ-выбор для лендинга** | [![Stars](https://img.shields.io/github/stars/withastro/astro?style=flat)](https://github.com/withastro/astro) |
| [shadcn/ui](https://ui.shadcn.com) | Копируемые компоненты (Radix + Tailwind): карточки, формы, диалоги | [![Stars](https://img.shields.io/github/stars/shadcn-ui/ui?style=flat)](https://github.com/shadcn-ui/ui) |
| [Flowbite](https://flowbite.com) | Готовые секции (hero, pricing, CTA, footer) на Tailwind | [![Stars](https://img.shields.io/github/stars/themesberg/flowbite?style=flat)](https://github.com/themesberg/flowbite) |
| [HyperUI](https://www.hyperui.dev) | Бесплатные копипаст-компоненты для маркетинга на Tailwind | [![Stars](https://img.shields.io/github/stars/markmead/hyperui?style=flat)](https://github.com/markmead/hyperui) |
| [Preline](https://preline.co) · [DaisyUI](https://daisyui.com) | Ещё наборы Tailwind-компонентов и блоков | — |

### Анимации (premium-ощущение)

| Ресурс | Описание | Stars |
|---|---|---|
| [Motion (framer-motion)](https://motion.dev) | Анимации для React: появление при скролле, hover, переходы | [![Stars](https://img.shields.io/github/stars/framer/motion?style=flat)](https://github.com/framer/motion) |
| [GSAP](https://gsap.com) | Мощные scroll-анимации/таймлайны (vanilla/любой фреймворк) | [![Stars](https://img.shields.io/github/stars/greensock/GSAP?style=flat)](https://github.com/greensock/GSAP) |
| [AOS](https://michalsnik.github.io/aos/) | Animate-On-Scroll одним атрибутом — для статики | [![Stars](https://img.shields.io/github/stars/michalsnik/aos?style=flat)](https://github.com/michalsnik/aos) |
| [lottie skill](https://github.com/diffusionstudio/lottie) | Готовая Lottie-анимация из промпта/SVG | [![Stars](https://img.shields.io/github/stars/diffusionstudio/lottie?style=flat)](https://github.com/diffusionstudio/lottie) |

### Формы заявок (без бэкенда)

| Ресурс | Описание |
|---|---|
| [Web3Forms](https://web3forms.com) · [Formspree](https://formspree.io) · [Getform](https://getform.io) | Принимают submit формы и шлют тебе на почту — бесплатный тариф |
| Telegram-бот / Google-таблица | Заявки прямо в чат/таблицу (попроси нейросеть подключить) |

### Хостинг (бесплатный старт)

| Ресурс | Описание |
|---|---|
| [Vercel](https://vercel.com) · [Cloudflare Pages](https://pages.cloudflare.com) · [Netlify](https://netlify.com) | Бесплатный хостинг статики/SSR + превью-деплои |
| Eclipse Forge VPS | Наш сервер, поддомен `*.eclipse-forge.ru` через Caddy |

### Дизайн-инспирация и ассеты

| Ресурс | Описание |
|---|---|
| [Land-book](https://land-book.com) · [Godly](https://godly.website) · [Lapa Ninja](https://www.lapa.ninja) | Галереи лучших лендингов — насмотренность и идеи |
| [Mobbin](https://mobbin.com) · [Awwwards](https://www.awwwards.com) | Паттерны и топовые сайты |
| [Unsplash](https://unsplash.com) · [Pexels](https://www.pexels.com) | Бесплатные фото |
| [Haikei](https://haikei.app) · [Hero Patterns](https://heropatterns.com) | SVG-волны/блобы/паттерны для фонов |
| [Lucide](https://lucide.dev) · [Phosphor](https://phosphoricons.com) | Иконки единого стиля |

### Аналитика и скорость

| Ресурс | Описание |
|---|---|
| Яндекс.Метрика / [GA4](https://analytics.google.com) | Счётчик + цели на отправку формы; тепловые карты (Метрика) |
| [Lighthouse](https://developer.chrome.com/docs/lighthouse) · [PageSpeed Insights](https://pagespeed.web.dev) | Проверка скорости/SEO/доступности (цель 90+) |

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
| [Open Design](https://github.com/nexu-io/open-design) | Open-source набор DESIGN.md-шаблонов, skills и визуальных стилей для AI-first интерфейсов. Практический workflow → [гайд Open Design + Codex](guides/open-design-codex-workflow.md) |
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
| **Gemma-4-12B coder (fable5-composer2.5)** ([HF yuxinlu1](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)) | ⚠️ **НЕ «Fable 5», как подаёт канал** — Fable 5 проприетарна, её нельзя скачать. Это `google/gemma-4-12B-it`, дистиллированная на CoT от **Cursor Composer 2.5** (реальные, прошедшие тесты решения) + синтетике «Fable 5» (доступ к ней, по словам автора, уже отозван). Локальный GGUF 4.8–12.7 ГБ, Ollama / LM Studio, заточена под **Python/алгоритмы**. **Каверы:** провенанс/ToS (дистилляция проприетарных рассуждений), сам автор: «reduced refusals — не safety-aligned, добавьте свои guardrails», hobby-проект без гарантий; цифры качества — на веру не брать. Reference / личный dev-эксперимент, **не** в продуктовый контур |
| **LocallyUncensored** ([repo](https://github.com/PurpleDoubleD/locally-uncensored) · [сайт](https://locallyuncensored.com/)) | ⚠️ **High-risk.** Агрегатор 80+ моделей без цензуры, генерит 18+; закрытый сайт + OSS-репо, авто-подбор под железо. Reference, вне scope продуктов |
| **flac.music.hi.cn** | 🚨 **Пиратство.** Нелицензионная музыка (китайский сайт) + классический вектор малвари. Не в продуктовом контуре; легальная задача «скачать своё» → наш [Eclipse Media](#-наши-проекты) (yt-dlp) |
| **«Fable 5 на торрентах 3.4ТБ»** | 🃏 **Фейк/хоакс** — автор поста с Reddit сам признал, что это шутка (UPD в самом дропе). Не ресурс, листаем чтобы не приняли всерьёз |
| **Hidden-city / mistake fares** (в [travel-hacking-10](prompts/travel-hacking-10.md)) | ⚠️ Нарушают условия авиакомпаний — риск аннуляции обратного билета / бана аккаунта. Для личного использования на свой риск, не для делового тревела |
| **Teleprompter-оверлеи** ([Virtual Teleprompter](https://www.vtpapps.com/) · [NotchPrompt](https://notchprompt.vercel.app/) · [teleprompter.works](https://teleprompter.works/online/)) | ⚠️ **Этически серо.** Прозрачный текст поверх Zoom / Teams / Meet (не виден при шеринге экрана). Легит для презентаций / стримов / съёмок; канал подаёт как шпаргалку на собесах и экзаменах — это нарушает правила работодателя / вуза и репутационно рискованно. Reference для полноты, **не** рекомендация |
| **OpenAI $50k credits** | Не grey, но **приватность**: шаринг данных = обучение на твоих промптах. Только некритичные данные |

---

## 📥 Подборка Eclipse (17.06.2026)

> Дроп Telegram «Eclipse Hopson» за **17.06**. Ни одна находка ещё не была в библиотеке (проверено grep'ом). Провенанс по репозиториям проверен, хайп канала помечен и дебанкнут.

### Claude Code — skills & инструменты

| Ресурс | Описание | Stars |
|---|---|---|
| [effective-html (plannotator)](https://github.com/plannotator/effective-html) | 3 скилла Claude Code / Codex для самодостаточных HTML-деливеров: **`html`** (любая страница в стиле «effective HTML»), **`html-diagram`** (полноэкранные SVG-схемы архитектуры/планов, минимум текста), **`html-plan`** (роадмапы / планы / стратегии). MIT, ставится `npx skills add plannotator/effective-html` или `/plugin marketplace add`. **⚠️ Дебанк:** демо-видео сделано Fable 5, а не самими скиллами — оценивать по реальному выводу. **Фит:** [EclipseForgeLanding](#-наши-проекты) + slides, `html-diagram` для арх-доков, `html-plan` для роадмапов | [![Stars](https://img.shields.io/github/stars/plannotator/effective-html?style=flat)](https://github.com/plannotator/effective-html) |
| [Understand-Anything (Egonex-AI)](https://github.com/Egonex-AI/Understand-Anything) | Строит интерактивный граф знаний кодовой базы (файлы/функции/классы/зависимости): tree-sitter (структура) + LLM (семантика) → force-directed визуализация по слоям, guided-tours по зависимостям, семантический поиск, diff-impact «что сломается перед изменением», бизнес-домен-маппинг. Плагины Claude Code / Cursor / VS Code+Copilot / Codex / Gemini CLI; MIT, `/plugin install understand-anything` или curl; пишет `.understand-anything/knowledge-graph.json` (шарится в команде). **⚠️ Дебанк:** «хватит читать код вслепую» — оверселл; структурный слой (tree-sitter) надёжен, семантические (guided-tours, бизнес-домен) LLM-зависимы и плавают. **Фит:** онбординг крупных репо (eclipse-chat, монорепо), [oh-my-claudecode](#-наши-проекты) | [![Stars](https://img.shields.io/github/stars/Egonex-AI/Understand-Anything?style=flat)](https://github.com/Egonex-AI/Understand-Anything) |

### Генерация музыки / аудио

| Ресурс | Описание | Stars |
|---|---|---|
| [StableDAW (Pinokio)](https://pinokio.co/posts/01kty98bwb20619q6274768kcm) | Локальная ИИ-аудиостудия на **Stable Audio 3** (Stability AI): генерация музыки по тексту/голосу + редактор (микс, DJ-инструменты, свои MIDI, ручная доводка, выгрузка нот). Один клик через Pinokio, всё локально (промпты/модели на машине), MIT. Модели: **Small ~3.5 ГБ** (CPU, до 120 с), **Medium ~10.4 ГБ** (NVIDIA ~8 ГБ VRAM, до 380 с). **⚠️ Дебанк «убийца Suno»:** сам пост такого не заявляет — это хайп канала; StableDAW про локальное владение и глубину правок, а не клауд «одной кнопкой». Для длинных треков нужен GPU. **Фит:** standalone ИИ-инструмент / reference для возможного аудио-модуля Eclipse | — |

### Обучение / гайды

| Ресурс | Описание |
|---|---|
| [«How to AI» — Ruben Hassid (Substack)](https://ruben.substack.com/archive?sort=new) | Ньюслеттер по Claude на практике: Claude Code / Cowork / Design, коннекторы (Gmail и пр.), интеграции с Excel / Word / PowerPoint, промптинг, сравнения моделей, объяснение skills / MCP. **⚠️** часть постов платная (free + Paid) — бесплатных достаточно для старта. **Фит:** обучение / референс для [Eclipse AI Hub](#-наши-проекты) и промпт-файлов |

### Mapping → наши проекты

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **effective-html** | EclipseForgeLanding · slides · arch-доки | `html-diagram` для схем архитектуры, `html-plan` для роадмапов, `html` для лендинг-блоков; ставить как skill в dev-workflow |
| **Understand-Anything** | oh-my-claudecode · eclipse-chat (онбординг) | Граф знаний перед рефактором/онбордингом крупного репо; коммитить `knowledge-graph.json` для команды. Доверять структуре, перепроверять семантику |
| **StableDAW** | reference / возможный аудио-модуль | Локальная генерация на Stable Audio 3; оценить как движок, если появится аудио-фича в Hub |
| **«How to AI» (Ruben)** | Eclipse AI Hub · prompts/ | Реальные паттерны Claude-интеграций (Office, коннекторы) → пресеты/гайды Hub |

### ⚠️ Reference — внесено по запросу владельца

> Легитимно, но вне AI/dev-контура Eclipse: листинг = документация для полноты, не продуктовый ресурс.

| Находка | Статус / дисклеймер |
|---|---|
| **Entry Conditions** ([entryconditions.com](https://entryconditions.com/)) | ✅ **Легит, вне AI/dev-контура** — тревел-справочник: визовые требования по паспорту, government-sourced с дословными цитатами офиц. источников + ссылки на офиц. порталы э-виз, бесплатно, есть репорт правок. **⚠️ Дебанк «убийца Passport Index / ВСЯ инфа»:** хорошая верифицированная база, но критичные правила въезда сверять с офиц. порталом перед поездкой (данные могут отставать). Reference для владельца |

---

## 📥 Подборка Eclipse (19.06.2026)

> Дроп Telegram «Eclipse Hopson» за **19.06**. Провенанс репозиториев проверен (WebFetch), хайп канала помечен и дебанкнут, дедуп grep'ом. **Часть дропа осознанно НЕ внесена** по соображениям этики/безопасности — см. Grey-секцию ниже.

### Локальные утилиты

| Ресурс | Описание | Stars |
|---|---|---|
| [KillerPDF (SteveTheKiller)](https://github.com/SteveTheKiller/KillerPDF) | Локальный PDF-редактор под Windows 10/11 (~6 МБ portable EXE): правка текста, объединение файлов, извлечение страниц, подписи, формы, закладки. **Всё локально — без телеметрии, облака и подписок.** C#/.NET 8, GPLv3 (форки тоже GPLv3 + открытые исходники), ставится winget / прямой загрузкой / сборкой из исходников. **⚠️ Дебанк «хороним Acrobat»:** лёгкий редактор, не полная замена Acrobat (нет тяжёлого препресса/продвинутого OCR) — но для правок, подписей и мержа отлично. Провенанс ОК (2.4k★, активный, v1.5.1, исходники открыты — проверено). **Фит:** standalone утилита, приватная альтернатива облачным PDF-сервисам | [![Stars](https://img.shields.io/github/stars/SteveTheKiller/KillerPDF?style=flat)](https://github.com/SteveTheKiller/KillerPDF) |

### AI & Claude Code — альтернативные бэкенды

| Ресурс | Описание | Stars |
|---|---|---|
| [GLM → Claude Code (z.ai DevPack)](https://docs.z.ai/devpack/tool/claude) | Подключение моделей **GLM** (Zhipu AI) как бэкенда Claude Code: API-ключ z.ai + env-переменные, маппинг Opus/Sonnet/Haiku → GLM (офиц. документация Z.AI). **⚠️ Дебанк хайпа** «бесплатно используем Claude / в 300 раз дешевле / без ограничений»: на деле — **платно, но дёшево**; есть **квота с множителями 2–3× в пиковые часы** (не «безлимит»); «уровня Opus» — заявление вендора, проверять на своих задачах. **⚠️ Приватность:** запросы уходят в Zhipu (КНР) — не для чувствительного кода. **Фит:** дешёвый альт-бэкенд для не-критичных dev-задач; для бесплатного/приватного приоритет — наши Groq / Cerebras / Ollama (см. [Бесплатные API](#-ai--claude-code)) | — |

### Mapping → наши проекты

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **KillerPDF** | standalone утилита | Локальный PDF-редактор для команды вместо облачных сервисов (приватность); GPLv3, без телеметрии |
| **GLM via z.ai** | Eclipse AI Hub · dev-workflow | Дешёвый Claude-Code-бэкенд как опция; но для бесплатного/приватного приоритет наши провайдеры (Groq/Cerebras/Ollama) |

### ⚠️ Grey / дебанк — НЕ рекомендуется

> Часть дропа — хайп вне этики либо инструмент злоупотребления. Внесено критически, для полноты; ссылку на offensive-тулзу намеренно не даём.

| Находка | Статус / дисклеймер |
|---|---|
| **Awesome-Journal-Skills** ([brycewang-stanford](https://github.com/brycewang-stanford/Awesome-Journal-Skills)) | 🚩 **Этика / дебанк.** Claude-скиллы для авто-написания научных статей + ответов рецензентам. Заявка «эссе для ВАК / престижных вузов как гений» = **академическая недобросовестность**: сдавать AI-сгенерированную работу в реальные журналы под своим именем нарушает их политику и научную этику. Допустимо лишь как ассистент черновика / литобзора **с полным раскрытием и собственным авторством** — не как «нейронка сама напишет диссер». Не рекомендуем как «имбу» |
| **Storm-Breaker** (фишинг: вебка / микрофон / гео жертвы) | ⛔ **Намеренно НЕ внесён, ссылка опущена.** Инструмент скрытой слежки/фишинга (захват камеры, микрофона, геолокации и данных устройства жертвы через обманную ссылку). Размещать в публичной «подборке полезного» = способствовать злоупотреблению. **Защитный вывод (зачем знать):** не переходить по чужим коротким ссылкам, относиться к browser-запросам доступа к камере/микро/гео как к красному флагу. Промо-листинг самой тулзы не даём |

---

## 📥 Подборка Eclipse (21.06.2026)

> Дроп Telegram «Eclipse Hopson» за **19–21.06**. Провенанс проверен (WebFetch), хайп помечен/дебанкнут, дедуп grep'ом. **Уже в библиотеке — не дублируем:** *KillerPDF* (Подборка 19.06), *loops.elorm.xyz* ([AI & Claude Code](#-ai--claude-code)), *GLM → Claude Code (z.ai)* (Подборка 19.06), *gemma-4-12B-fable5-composer2.5* (Grey-таблица 10–16.06 — вариант от `huihui-ai` тот же abliterated-дистиллят). *MiMo-V2.5* — см. Grey/дебанк ниже.

### Десктоп из веба

| Ресурс | Описание | Stars |
|---|---|---|
| [Pake (tw93)](https://github.com/tw93/Pake) | Превращает **любой сайт в десктоп-приложение** на **Rust + Tauri**: бандл ~5 МБ, вендор заявляет «в ~20× легче Electron». CLI или GitHub Actions-сборка, готовые пакеты (ChatGPT, YouTube...), Win/Mac/Linux, GPL-3.0 (собранные приложения распространяются свободно). 55k★, активен (v3.12.0). **⚠️ Уточнение:** это **webview-обёртка** сайта, а не нативное приложение — функционал = сам сайт + горячие клавиши / DnD / стили; офлайна и нативных API нет. **Фит:** быстрые desktop-обёртки веб-сервисов. Для **eclipse-chat** мы уже сделали свой Tauri 2-враппер (тот же стек) — Pake = валидатор подхода и reference для разовых обёрток | [![Stars](https://img.shields.io/github/stars/tw93/Pake?style=flat)](https://github.com/tw93/Pake) |

### AI-приложения — стартер-киты для заработка

| Ресурс | Описание | Stars |
|---|---|---|
| [awesome-generative-ai-apps (Anil-matcha)](https://github.com/Anil-matcha/awesome-generative-ai-apps) | 50+ **рабочих** опенсорс-шаблонов AI-SaaS (MIT) с продакшн-обвязкой: Google OAuth + Stripe + кредиты + Postgres/Prisma + деплой на Vercel. Категории: фото-студия товаров (карточки маркетплейсов), реставрация фото, нарезка reels/shorts, виртуальная примерка и др. **Это ДРУГОЙ репо** Anil-matcha — не путать с его [Open-Generative-AI](#-ai--claude-code) (200+ моделей). **⚠️ Экономика:** монетизация = перепродажа чужого инференса (MuAPI) с маржой ~95% — это reselling, не своя модель; «стартап проще, чем когда-либо» — гипербола. **⚠️ Этика/право:** часть шаблонов — удаление вотермарок (обход копирайта) и «видео-поцелуй из 2 фото» / состаривание лица (deepfake) — те же оговорки, что у [Sulphur-2 / Gemini Omni](#видеопродакшн-и-vfx): лица реальных людей только с согласием (РФ deepfake-нормы, EU AI Act). **Фит:** reference паттернов AI-SaaS-обвязки (Stripe / credits / deploy), не «бери и продавай» | [![Stars](https://img.shields.io/github/stars/Anil-matcha/awesome-generative-ai-apps?style=flat)](https://github.com/Anil-matcha/awesome-generative-ai-apps) |

### Бесплатные модели — промо (с оговоркой)

| Ресурс | Описание |
|---|---|
| [OpenModel — DeepSeek-V4-Flash free](https://www.openmodel.ai/event) | Промо: бесплатный API **DeepSeek-V4-Flash до 28.06.2026** (заявлено 1M контекста, агентские задачи, vision, ~100–127 t/s; ключ по логину). **⚠️ Провенанс не подтверждён:** openmodel.ai позиционируется как «multi-model LLM gateway / биллинг-консоль»; WebFetch не дал ToS и политику данных. Прежде чем слать реальный код/данные — проверить TOS и не уходят ли запросы в обучение; промо-ключ может отвалиться 28.06. **Для бесплатного DeepSeek безопаснее проверенные маршруты:** [NVIDIA Build](#-ai--claude-code), chat.deepseek.com, Notion (раздаёт Opus/DeepSeek). Reference, не для прод / чувствительных данных |

### Mapping → наши проекты

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **Pake** | eclipse-chat (desktop) · разовые обёртки | Тот же Tauri-стек, что наш EC-десктоп; для одноразовых web→desktop обёрток сервисов — reference, свой враппер уже есть |
| **awesome-generative-ai-apps** | Eclipse AI Hub · Shotforge / Text2Image (ref) | Паттерны SaaS-обвязки (Stripe / credits / OAuth / Vercel) как reference; перепродажу чужого инференса не копируем (свои провайдеры + ключ юзера) |
| **OpenModel / DeepSeek-V4-Flash** | dev-эксперименты | Бесплатный промо-бэкенд для не-критичных задач до 28.06; приоритет — проверенные free-маршруты |

### ⚠️ Grey / дебанк — НЕ рекомендуется

> Часть дропа — маркетинговый хайп либо дубли уже внесённого. Листинг для полноты и чтобы не приняли всерьёз.

| Находка | Статус / дисклеймер |
|---|---|
| **MiMo-V2.5** ([mimo.mi.com](https://mimo.mi.com/)) | ⚠️ **Дебанк хайпа** «Opus-уровень, в 28× дешевле, 482₽ за 4 МЛРД токенов». «Уровня Opus» = **бенчмарк-заявление вендора** (Xiaomi), проверять на своих задачах. Цена «482₽ / 4 млрд токенов» (≈$0.0014 за 1M) — **неправдоподобна**, похоже на промо/ошибку подачи; реальные тарифы сверять на сайте. Уже на радаре (INSTALL-16.06) — **держим на радаре, не эндорсим** |
| **Qwythos-9B-Claude-Mythos-5-1M** ([HF empero-ai](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)) | 🚩 **High-risk uncensored + фейк-«Claude»-провенанс.** Файн-тюн **Qwen3.5-9B** (НЕ Claude); «обучен на Claude Mythos / Claude Fable» — **таких моделей Anthropic НЕ существует** (внутренние обозначения Empero / синтетика, не официальный Claude). 1M контекст = YaRN rope-scaling поверх нативных 262K (качество на полном 1M под вопросом). **Намеренно без alignment** («deeply uncensored», cybersec/фарма/клиника без отказов; авторы прямо предупреждают — не safety-aligned). Apache-2.0, ~1.9k загрузок/мес. Тот же класс, что Gemma-4-OBLITERATED / gemma-4-12B-fable5 / HuiHui (см. Grey 10–16.06) — reference / личный R&D, **вне продуктового контура**. «Сделает ЛЮБУЮ задачу» = хайп (9B — скромная модель) |
| **KillerPDF · loops · GLM via z.ai · gemma-4-12B-fable5** | ♻️ **Дубли** — уже в библиотеке (см. шапку секции). «HuiHui убил цензуру Fable 5 / соберёт ядерное оружие» = тот же abliterated `gemma-4-12B` (это **НЕ** настоящая Fable 5 — она проприетарна; см. Grey 10–16.06); high-risk uncensored, вне продуктового контура |

---

## 📥 Подборка Eclipse (23–27.06.2026)

> Дроп Telegram «Eclipse Hopson» за **23–27.06**. Провенанс ключевых репозиториев
> проверен (WebFetch: звёзды/лицензия/активность), хайп помечен/дебанкнут, пиратка
> вынесена в Grey, дедуп grep'ом. **Уже в библиотеке — не дублируем:**
> *Qwythos-9B* (Grey-таблица 21.06 — фейк-«Claude»-провенанс), *agent-skills от
> Apify* ([AI & Claude Code](#-ai--claude-code) — это ДРУГОЙ репо, парсинг-скиллы;
> ниже — `tech-leads-club` с упором на безопасность).

### Мониторинг моделей и роутинг

| Ресурс | Описание | Stars |
|---|---|---|
| [AI Stupid Level](https://aistupidlevel.info/) | **«Тупометр» нейросетей в реальном времени** + smart-router. Отслеживает качество официальных моделей по категориям (reasoning, coding, agentic, цена) и **наглядно показывает просадки** — напр. модель «отупела» на 32% сегодня. Бесплатно, без регистрации. **Зачем нам:** подбор модели под агентов и фолбэк-цепочки — видно, кто сейчас топ, а кто деградировал. Прямо ложится на наш `AI_PROVIDER=auto` (StarCRM) и выбор модели для AI-советника FinFlow / модулей Hub | — |

### OCR и парсинг страниц (для парсеров и RAG)

| Ресурс | Описание | Stars |
|---|---|---|
| [Baidu Unlimited-OCR](https://github.com/baidu/Unlimited-OCR) | **OCR целого документа за один проход** (на базе DeepSeek-OCR), multi-page/PDF, контекст 32K, анти-галлюцинация (no-repeat n-gram). MIT, 11k★, есть paper + HF Space. **Зачем нам:** распознавание чеков/счетов/документов — будущая фича FinFlow (скан чека → авто-операция), парсинг документов в StarCRM | [![Stars](https://img.shields.io/github/stars/baidu/Unlimited-OCR?style=flat)](https://github.com/baidu/Unlimited-OCR) |
| [PixelRAG (StarTrail-org)](https://github.com/StarTrail-org/PixelRAG) | **RAG по СКРИНШОТАМ страниц**, а не по HTML — сохраняет таблицы/вёрстку/элементы, которые ломают обычные парсеры. CLI `pixelshot` + плагин Claude Code **pixelbrowse** (даёт Claude визуальное чтение страниц), VL-модель Qwen3-VL-Embedding. Apache-2.0, 5.5k★. **Зачем нам:** парсинг карточек WB/Ozon/ЯМ в StarMarket и card-audit StarCRM, когда HTML/анти-бот ломает текстовый парсинг (вспомни таймауты WB-баскетов). **POC-рецепт (скриншот→поля):** [guides/marketplace-screenshot-parsing.md](guides/marketplace-screenshot-parsing.md) | [![Stars](https://img.shields.io/github/stars/StarTrail-org/PixelRAG?style=flat)](https://github.com/StarTrail-org/PixelRAG) |

### Агенты, скиллы, dev-инструменты

| Ресурс | Описание | Stars |
|---|---|---|
| [agent-skills (tech-leads-club)](https://github.com/tech-leads-club/agent-skills) | **Библиотека ПРОВЕРЕННЫХ SKILL.md** для код-агентов (Claude Code / Cursor / Cline / Codex). Упор на безопасность: авторы приводят, что **>13% скиллов с маркетплейсов содержат критические уязвимости**, а тут — static analysis + Snyk Agent Scan + ручная курация, без бинарников. Установка `npx @tech-leads-club/agent-skills` (интерактивный визард). MIT (движок) / CC-BY-4.0 (скиллы), 4.8k★. **Зачем нам:** прямой ответ на риск «вирусы в SKILL.md» (см. наш разбор [ui-skills.com] — ставить по одному с ревью); тут — verified-набор на все проекты | [![Stars](https://img.shields.io/github/stars/tech-leads-club/agent-skills?style=flat)](https://github.com/tech-leads-club/agent-skills) |
| [Cua (trycua/cua)](https://github.com/trycua/cua) | **Computer-Use агент** — управляет любым приложением на ПК по скриншоту (определяет кнопки визуально), работает в изолированной среде/VM, CLI + MCP, Win/macOS/Linux. Cua Drivers интегрируются с Claude Code/Codex. MIT, 19.1k★. **Зачем нам:** UI-автоматизация и **QA/SDET** — прогон сценариев в реальном приложении (EC/FinFlow на устройстве), скриншот-driven проверки. **Гайд (device-QA + Claude Code):** [guides/cua-device-qa.md](guides/cua-device-qa.md) | [![Stars](https://img.shields.io/github/stars/trycua/cua?style=flat)](https://github.com/trycua/cua) |
| [ARGithub / alphaXiv](https://www.alphaxiv.org/) | Замени в ссылке `github` → `argithub` — ИИ-агент **прочитает код репо, разберёт структуру и попробует запустить**. Бесплатно. **Зачем нам:** быстрый разбор чужих репозиториев перед форком/интеграцией (мы часто форкаем — OMC, VisualStoryWriting и др.) | — |

### Обучение, курсы, сертификаты

| Ресурс | Описание | Stars |
|---|---|---|
| [Open Culture — Free Courses](https://www.openculture.com/freeonlinecourses) | **1700+ бесплатных курсов** топ-универов (Harvard, MIT, Oxford, Yale…) по всем специальностям. **Зачем нам:** источник учебного контента и тем для **Educator-AI** (educator.eclipse-forge.ru) | — |
| [Free-Certifications (ArslanYM)](https://github.com/ArslanYM/Free-Certifications) | Репозиторий **бесплатных сертификаций** (HubSpot, Google, Cisco, Fortinet, AWS, MongoDB, FreeCodeCamp, Scrum/Agile…) + экзамены под любой уровень. **Зачем нам:** карьерный модуль/референс для Educator-AI; прокачка стека команды | [![Stars](https://img.shields.io/github/stars/ArslanYM/Free-Certifications?style=flat)](https://github.com/ArslanYM/Free-Certifications) |
| [🗣️ 6 промптов для языка](prompts/language-learning-6.md) | Превращают любую нейросеть в репетитора (разговор, уроки, карточки, разбор ошибок, мок-экзамены, погружение) — для **любого** языка. Очищены/параметризованы. **Зачем нам:** пресет «Языковой репетитор» для Educator-AI | — |
| **Приём: «Gemini делает курсы»** | [Gemini](https://gemini.google.com/) собирает обучающую программу по любой теме блоками (лекции, иллюстрации, код, квизы), бесплатно. Не сервис, а **техника** — референс для генератора курсов Educator-AI (мы используем Gemini-ключ в Hub/Shotforge) | — |

### Privacy / Self-hosted

| Ресурс | Описание | Stars |
|---|---|---|
| [SimpleX Chat](https://github.com/simplex-chat/simplex-chat) | **Самый анонимный мессенджер** — без регистрации, без номера/логина/ID; чаты по одноразовой ссылке/QR; переписка хранится локально, сервер метаданных не видит; iOS/Android/desktop/terminal. **Зачем нам:** архитектурный референс приватности для **Eclipse Chat** — модель «нет идентификаторов / нет метаданных на сервере» как идея для эфемерных/temp-каналов и privacy-постуры | [![Stars](https://img.shields.io/github/stars/simplex-chat/simplex-chat?style=flat)](https://github.com/simplex-chat/simplex-chat) |

### Media & Download

| Ресурс | Описание | Stars |
|---|---|---|
| [pytube-downloader](https://github.com/thisal-d/pytube-downloader) | GUI-загрузчик YouTube: одиночные ролики и **плейлисты**, качество 144p–8K, MP4/MP3, мультизагрузка, запоминает качество. **Зачем нам:** референс/паритет фич для **Eclipse Media** (наш yt-dlp-загрузчик). ⚠️ Скачивание с YouTube — серая зона по ToS площадки; для личного использования | [![Stars](https://img.shields.io/github/stars/thisal-d/pytube-downloader?style=flat)](https://github.com/thisal-d/pytube-downloader) |

### Гайды

| Ресурс | Описание |
|---|---|
| [📸 Настройки камеры iPhone для контента](guides/iphone-camera-content.md) | Лучшие настройки фото/видео (4K/60, HDR-off, HEIF, 24Мп, сетка/уровень…) для визуального контента. **Зачем нам:** кадры для демо Shotforge, соцсетей и лендингов — меньше зависимость от стоков |
| [🤖 Cua для device-QA (+ Claude Code)](guides/cua-device-qa.md) | Computer-use агент гоняет smoke-сценарии в реальном app (Android-песочница = мобильная проверка PWA). Пути: MCP-драйвер в Claude Code или Python SDK. **Зачем нам:** снять с Pavel ручные пост-деплой проверки EC/FinFlow. ⚠️ Только изолированная среда + тестовые аккаунты |

### Mapping → наши проекты

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **AI Stupid Level** | StarCRM · FinFlow · Hub | Выбор модели для `AI_PROVIDER=auto` и AI-советника; мониторить деградацию провайдеров, переставлять порядок фолбэка |
| **Baidu Unlimited-OCR** | FinFlow · StarCRM | Скан чека/документа → текст → авто-операция (FinFlow attachments, будущее); парсинг документов CRM |
| **PixelRAG** | StarMarket · StarCRM | Скриншот-парсинг карточек WB/Ozon/ЯМ, когда HTML/анти-бот ломает текстовый парсер; card-audit |
| **agent-skills (tech-leads-club)** | Все репо (dev) · Security | Verified-скиллы вместо случайных SKILL.md (анти-малварь); единый набор на все проекты |
| **Cua** | EC · FinFlow (QA) · автоматизация | Computer-use для SDET-прогонов в реальном app + скриншот-проверки → [гайд](guides/cua-device-qa.md) |
| **ARGithub / alphaXiv** | Все репо (онбординг) | Быстрый разбор чужих репо перед форком/интеграцией |
| **Open Culture · Free-Certifications · язык-промпты · Gemini-курсы** | Educator-AI | Источники контента + пресеты (репетитор, генератор курсов, сертификации) |
| **SimpleX Chat** | Eclipse Chat | Референс privacy-архитектуры (no-id / no-metadata) для temp-каналов |
| **pytube-downloader** | Eclipse Media | Референс фич (8K, плейлисты) для нашего загрузчика |
| **iPhone-камера гайд** | Shotforge · маркетинг | Свои кадры для демо/соцсетей вместо стоков |

### ⚠️ Grey / дебанк — НЕ рекомендуется / пиратка

> Часть дропа — маркетинговый хайп, пиратка или дубли. Листинг для полноты.

| Находка | Статус / дисклеймер |
|---|---|
| **Sakana Fugu Ultra** ([sakana.ai/fugu](https://sakana.ai/fugu/)) | ⚠️ **Дебанк хайпа «японцы унизили Mythos».** Fugu Ultra — **не модель, а оркестратор**: раздаёт задачу Gemini/ChatGPT/Claude и выбирает лучший ответ. Не умеет перестраивать логику решения → при «тупняке» системы **жжёт миллионы токенов впустую**. Плюс — работает из РФ без VPN. У нас уже есть локальный/дешёвый роутер [ClawRouter](#llm-роутинг-и-оптимизация); концепт meta-роутинга — reference, не для прода (цена + зависимость от 3 чужих API сразу) |
| **Qwythos-9B-Claude-Mythos-5-1M** | ♻️ **Дубль** — уже в Grey-таблице 21.06 (фейк-«Claude»-провенанс, uncensored, вне продуктового контура). Не вносим повторно |
| **Bookracy** ([bookracy.com](https://bookracy.com/)) | 🏴‍☠️ **Пиратка.** Бесплатные книги/комиксы/манга «без оплат» = распространение копирайт-контента без лицензии. **Не интегрируем и не рекламируем** (правовой риск); листинг — чтобы не приняли как рекомендацию |
| **Streambert** ([truelockmc/streambert](https://github.com/truelockmc/streambert)) | 🏴‍☠️ **Пиратка-агрегатор.** «Свой Netflix» тянет стримы с неофициальных источников (VidSrc / 2Embed / AllManga), метаданные с TMDB. Дисклеймер автора «только поиск, не хостим контент» не снимает копирайт-риск у пользователя. GPL, 5.5k★. **Не для интеграции**; TMDB-токен сам по себе легитимен (его можно брать для своих афиш/каталогов) |
| **pytube-downloader** | ⚠️ Полезен (внесён в Media выше), но скачивание с YouTube — **серая зона ToS**; только личное использование, не как публичная фича без правовой оценки |

---

## 📥 Подборка Eclipse (28.06.2026)

> Дроп Telegram «Не баг, а фича» от 28.06 — 4 находки + разбор Habr по
> видео-классификации. Провенанс верифицирован (WebFetch: звёзды/лицензия/
> активность). Маркетинг/хайп канала помечен и дебанкнут; OSINT-«пробив»
> переоформлен в защитную рамку (self-audit), не как инструмент слежки за людьми.

### OCR и парсинг документов

| Ресурс | Описание | Stars |
|---|---|---|
| [MinerU (opendatalab)](https://github.com/opendatalab/mineru) | **Документ → Markdown/JSON одним проходом.** PDF / DOCX / PPTX / XLSX / изображения → чистый LLM-ready текст: формулы в LaTeX, таблицы в HTML, многоколоночная вёрстка, сканы. **109 языков** OCR, локально (Win/Lin/macOS) / Docker / онлайн mineru.net; VLM-бэкенд требует GPU. Кастомная лицензия на базе Apache-2.0, ~71k★, активен (v3.4.0). **Зачем нам:** сильнее «голого» текст-парсинга для **FinFlow** (PDF-счета/чеки → операции, рядом с уже встроенным Gemini-vision OCR чека) и **StarCRM** (разбор документов/счетов). Дополняет/альтернатива [Baidu Unlimited-OCR](#ocr-и-парсинг-страниц-для-парсеров-и-rag) — Baidu заточен под целый документ за проход, MinerU даёт богаче структуру (формулы/таблицы). ⚠️ Для прода на 1 ГБ VPS тяжёл (GPU) — гонять батчем/офлайн, не в реквест | [![Stars](https://img.shields.io/github/stars/opendatalab/mineru?style=flat)](https://github.com/opendatalab/mineru) |

### Обучение / dev-инструменты

| Ресурс | Описание | Stars |
|---|---|---|
| [Learn Git Branching](https://learngitbranching.js.org/?locale=ru_RU) | **Интерактивный тренажёр Git** с живым визуальным деревом коммитов: задания на branch/merge/rebase/cherry-pick/reset, видно что делает каждая команда. Есть RU-локаль. Open-source ([pcottle/learnGitBranching](https://github.com/pcottle/learnGitBranching)). **Зачем нам:** онбординг в git-флоу команды (особенно перед работой с нашей моделью веток feat/* → PR); референс **интерактивной обучающей механики** для **Educator-AI** (визуальные задания вместо текста) и training-каталога Eclipse Chat | [![Stars](https://img.shields.io/github/stars/pcottle/learnGitBranching?style=flat)](https://github.com/pcottle/learnGitBranching) |

### Аудио / синтез голоса

| Ресурс | Описание |
|---|---|
| [ByteDance Seed-Audio 1.0](https://fal.ai/models/bytedance/seed-audio-1.0) (на fal.ai) | TTS + **клонирование голоса** + звуковые эффекты: мульти-персонажные диалоги (свои эмоции/темп/тембр/акцент на героя), копирование голоса по 1–3 референсам, генерация по промпту / аудио / изображению. **⚠️ Дебанк хайпа «уничтожили ElevenLabs»:** это свежая модель, а не доказанный killer — доступ через fal.ai = **платный API** (не self-host), качество/языки vs ElevenLabs не замерены независимо. **⚠️ Этика/право:** клонирование голоса = риск impersonation/дипфейка/мошенничества и нарушения прав на голос — **только свой голос или с явного согласия**, не чужие без разрешения. **Зачем нам:** озвучка контента для **Shotforge/Eclipse Media** (демо, ролики), кандидат в TTS-слой **Hopson Sentinel** — но как один из провайдеров, с consent-гейтом, не как «клонируем кого угодно» |

### Безопасность / OSINT (dual-use — осторожно)

| Ресурс | Описание | Stars |
|---|---|---|
| [Aliens Eye (arxhr007)](https://github.com/arxhr007/Aliens_eye) | **OSINT-перечисление аккаунтов по нику** на 840+ площадках (соцсети/форумы/сайты) — ML + 25 эвристик (HTTP-статус, DOM, фингерпринты) вместо тупой проверки кода ответа; Tor/proxy, экспорт JSON/CSV/HTML/MD. MIT, ~870★, активен. Класс инструмента — как Sherlock/Maigret; в README автора дисклеймер «для образовательных целей и легитимного OSINT». **⚠️ Подача канала («пробить любого», «прощаемся с конфиденциальностью», «без ограничений») = doxxing-рамка — дебанкаем.** Легитимно: **аудит СВОЕГО цифрового следа** (что о вас находится по нику) и authorized pentest/OSINT-разведка с согласия. Масс-пробив чужих людей = doxxing + нарушение **152-ФЗ** (обработка персданных в РФ) и ToS площадок. **Не интегрируем** в продукты; ценность для нас — **сигнал «проверь свой/клиентский след»** + awareness в security-постуре (Hopson Sentinel) | [![Stars](https://img.shields.io/github/stars/arxhr007/Aliens_eye?style=flat)](https://github.com/arxhr007/Aliens_eye) |

### Видео-аналитика / классификация (ML)

| Ресурс | Описание |
|---|---|
| [Видео-трансформеры: ViViT / TimeSFormer / VideoMAE](https://habr.com/ru/articles/827474/) (разбор Habr) | Классификация видео тремя предобученными моделями HuggingFace (Kinetics-400): **ViViT** (`google/vivit`, 3D-патчи, точнее всех 90.55%, дорого — CPU 5.85с), **TimeSFormer** (`facebook/timesformer`, раздельное spatial+temporal внимание, длинные видео — 1.25с), **VideoMAE** (`MCG-NJU/videomae`, masked autoencoder self-supervised, **самый быстрый** — CPU 0.77с / GPU 0.17с). Transfer learning: feature-extractor + лёгкий классификатор (triplet loss, кэш эмбеддингов) дешевле полного дообучения. **Зачем нам:** авто-модерация/тегирование видео-обзоров **StarMarket** («товар vs мусор», NSFW, категория) перед публикацией — VideoMAE-эмбеддинги + свой классификатор. ⚠️ GPU для масштаба/обучения (на CPU VideoMAE ~0.77с/видео ОК для async-очереди MVP). **POC-рецепт:** [guides/starmarket-video-moderation.md](guides/starmarket-video-moderation.md) |

### Mapping → наши проекты

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **MinerU** | FinFlow · StarCRM | PDF/документ → Markdown/JSON (формулы/таблицы) → операции/разбор; офлайн-батч (GPU), не в реквест |
| **Learn Git Branching** | Команда (онбординг) · Educator-AI · Eclipse Chat (training) | Тренажёр git-флоу; референс интерактивной обучающей механики |
| **Seed-Audio 1.0** | Shotforge · Eclipse Media · Hopson Sentinel (TTS) | Озвучка/диалоги через fal.ai (платно); ⚠️ consent-гейт на клонирование голоса |
| **Aliens Eye** | Reference / awareness (НЕ интеграция) | Self-audit цифрового следа; масс-пробив чужих — doxxing/152-ФЗ, не делаем |
| **Видео-трансформеры (VideoMAE и др.)** | StarMarket (видео-модерация) · Reference | Async-очередь: VideoMAE-эмбеддинги + лёгкий классификатор перед публикацией; GPU для масштаба → [POC](guides/starmarket-video-moderation.md) |

---

## 📥 Подборка Eclipse (30.06–01.07.2026)

> Дроп Telegram «Eclipse Hopson / PushEnter» за **30.06–01.07**.
> Логика разбора: отделяем реально полезные референсы для наших систем от хайпа,
> grey-zone и duplicate-находок. Куда внедрять - см. отдельный снапшот
> [INSTALL-2026-07-01.md](INSTALL-2026-07-01.md) и сайт-гайд
> [July 2026 project integration](guides/july-2026-project-integration.md).
>
> Уже были в библиотеке и не дублируются как новые интеграции: **SimpleX Chat**
> (privacy-архитектура для Eclipse Chat), **Seed-Audio 1.0** (голос/диалоги),
> **Aliens Eye** (только self-audit / security awareness).

### LLM обучение и инженерия

| Ресурс | Описание | Stars |
|---|---|---|
| [Large Language Model Course (mlabonne)](https://github.com/mlabonne/llm-course?tab=readme-ov-file) | Структурный курс по LLM: fundamentals, training/fine-tuning, quantization, evaluation, deployment, LLM Engineer-путь и продуктовая упаковка AI-сервисов. **Зачем нам:** база для внутреннего обучения команды, контентный фундамент для **Educator-AI**, методички для **Eclipse AI Hub** и AI-агентов **Eclipse Chat**. Это не “фича”, а knowledge-layer: стандартизировать словарь, практики и onboarding в AI-инженерию | [![Stars](https://img.shields.io/github/stars/mlabonne/llm-course?style=flat)](https://github.com/mlabonne/llm-course) |

### Scientific research / reproducible workflows

| Ресурс | Описание |
|---|---|
| [Claude Science beta](https://claude.com/product/claude-science) | Официальная Anthropic-среда для научного workflow: анализы, поиск по научным базам, scientific renderers, Python/R kernels, работа с HPC/SSH/Modal, сохранение артефактов вместе с кодом, окружением и историей диалога. Есть background reviewer для некорректных цитат, untraceable numbers и фигур, не совпадающих с кодом. **Зачем нам:** reference для **Eclipse AI Hub Research/RAG**, **Educator-AI** (исследовательские курсы/проверяемые отчёты), **Eclipse Chat execution rooms** (реплицируемые артефакты с историей), **Hopson Sentinel** (оператор, который оставляет audit trail). **Оговорка:** beta, macOS/Linux, часть фич может быть sales/plan-gated; не считать open-source и не строить продукт на закрытых claims без теста |

### Agent memory / operator layer

| Ресурс | Описание | Stars |
|---|---|---|
| [OpenHuman](https://github.com/tinyhumansai/OpenHuman) | Персональный AI-ассистент с долгим контекстом: память между чатами, чтение документации/логов/почты, screen context, цели, интеграции с приложениями. **Зачем нам:** сильный референс для **Eclipse Chat AI Memory** (“since you were away”, room memory, project memory), **Hopson Sentinel** (локальный оператор с привычками пользователя) и **Smart Life Assistant**. Внедрять не “как есть”, а как архитектурную идею: memory store + consent + scoped permissions + audit trail | [![Stars](https://img.shields.io/github/stars/tinyhumansai/OpenHuman?style=flat)](https://github.com/tinyhumansai/OpenHuman) |
| [OpenClaw Mobile](https://apps.apple.com/us/app/openclaw-ai-that-does-things/id6780396132) / [Android](https://play.google.com/store/apps/details?id=ai.openclaw.app) | Мобильный control-plane для AI-агента: команды с телефона, approval flow, камера/геолокация/голос, контроль действий без компьютера. **Зачем нам:** референс мобильного пульта для **Hopson Sentinel** и будущего **Eclipse Chat operator mode**: “агент предлагает действие - человек подтверждает с телефона”. Не кодовая зависимость, а UX/permission-pattern | — |
| [Loopy](https://github.com/Forward-Future/loopy) | Аудит и оптимизация набора MCP/skills/automations: ищет дубли, пересечения, рискованные действия, сломанные циклы, предлагает fixes и новые loops. **Зачем нам:** governance для **oh-my-claudecode**, **eclipse-library** и всех агентских рабочих контуров. Перед массовым внедрением скиллов - прогонять через Loopy/SkillSpector-логику, чтобы агентская среда не стала свалкой | [![Stars](https://img.shields.io/github/stars/Forward-Future/loopy?style=flat)](https://github.com/Forward-Future/loopy) |

### LLM routing / model access

| Ресурс | Описание | Stars |
|---|---|---|
| [OmniRoute](https://github.com/diegosouzapw/OmniRoute) | Один API-слой для множества моделей, fallback между провайдерами, контекстное сжатие, MCP/skills support. **Зачем нам:** референс для **Eclipse AI Hub**, **Hopson Sentinel** и **Eclipse Chat AI Agents**: provider-router, cost-aware fallback, compression-before-call. **Оговорка:** claims про “бесплатные токены” и автоматический обход лимитов проверять по ToS; в продуктах использовать только легальные ключи/провайдеры и собственные квоты | [![Stars](https://img.shields.io/github/stars/diegosouzapw/OmniRoute?style=flat)](https://github.com/diegosouzapw/OmniRoute) |
| [Google Gemini image/video low-cost tier](https://deepmind.google/models/gemini-image/flash-lite/) | Дешёвый слой генерации/редактирования изображений и видео (канал называет Nano Banana 2 Lite / Omni Flash). **Зачем нам:** **Shotforge**, **Text2Image**, **Eclipse Media**, ассеты для **Eclipse Forge Landing** и project cards. **Проверка перед внедрением:** актуальные тарифы, доступность API, watermark/usage rights, качество текста на изображениях. В продукт - только после тестового набора промптов и расчёта unit economics | — |

### Agent-ready web / discoverability

| Ресурс | Описание |
|---|---|
| [Cloudflare Is It Agent Ready?](https://isitagentready.com/) | Проверка сайта на готовность к AI-агентам: SEO/AI Search, bot access, MCP/Web Bot Auth и рекомендации с промптом для правок. **Зачем нам:** прогонять **Eclipse Forge Landing**, **Eclipse Library**, **Eclipse Chat landing**, будущие продуктовые сайты и клиентские лендинги. Это напрямую ложится в позиционирование “строим системы для эпохи агентов”, а не просто красивые страницы |

### Privacy / communication references

| Ресурс | Описание | Stars |
|---|---|---|
| [SimpleX Chat](https://github.com/simplex-chat/simplex-chat) | Уже внесён в библиотеку как privacy-референс. В этом батче фиксируем конкретнее: для **Eclipse Chat** полезна не попытка “скопировать SimpleX”, а идеи **одноразовых ссылок**, **ephemeral rooms**, **минимизации метаданных**, локального хранения чувствительного контекста и режима “client/private channel” без лишних идентификаторов | [![Stars](https://img.shields.io/github/stars/simplex-chat/simplex-chat?style=flat)](https://github.com/simplex-chat/simplex-chat) |

### Product / UX references

| Ресурс | Описание | Stars |
|---|---|---|
| [TREK](https://github.com/mauriceboe/TREK) | Travel-workspace: карты, маршруты, бюджет, split expenses, погода, импорт мест, журнал, общий чат и опросы. **Зачем нам:** UX-референс для **Smart Life Assistant** (life-planning workspace), **Eclipse Chat client/project rooms** (shared planning + polls + budget tables) и **Eclipse DnD Forge** (party travel log, route planning, quest itinerary). Ценность не в туризме, а в паттерне “workspace вокруг процесса” | [![Stars](https://img.shields.io/github/stars/mauriceboe/TREK?style=flat)](https://github.com/mauriceboe/TREK) |

### Presentations / reports

| Ресурс | Описание | Stars |
|---|---|---|
| [PPT Master](https://github.com/hugohe3/ppt-master) | AI skill/workflow для генерации **реального редактируемого PowerPoint**, а не картинок-слайдов: native shapes/text/charts, анимации, speaker notes, audio narration, можно использовать свой `.pptx` template. Pipeline в основном локальный, кроме общения с выбранной AI-моделью; работает с Claude Code, Cursor, VS Code Copilot и разными моделями. MIT. **Зачем нам:** **Eclipse Chat** client reports/project recap → PPTX, **Educator-AI** учебные слайды из материала, **Eclipse AI Hub** как “document → deck” инструмент, коммерческие презентации Eclipse Forge. **Оговорка:** лучшие результаты зависят от сильной модели и нормального design spec; это не магическая кнопка без редакторского контроля | [![Stars](https://img.shields.io/github/stars/hugohe3/ppt-master?style=flat)](https://github.com/hugohe3/ppt-master) |

### Media / download (grey-zone)

| Ресурс | Описание | Stars |
|---|---|---|
| [Torlink](https://github.com/baairon/torlink) | CLI-клиент для поиска источников/сидов и загрузки файлов из терминала. **Зачем нам:** максимум как референс очередей загрузки, source health-check и CLI UX для **Eclipse Media**. **Не внедрять как публичную фичу скачивания “любых файлов”**: высокий риск пиратского контента, malware и нарушений ToS/закона. Если тестировать - только на легальных public-domain/open-data файлах и в sandbox | [![Stars](https://img.shields.io/github/stars/baairon/torlink?style=flat)](https://github.com/baairon/torlink) |

### Grey / дебанк - не интегрируем в продукты

| Находка | Статус / дисклеймер |
|---|---|
| [Qwen3.5-9B-Claude-4.6-HighIQ-THINKING-HERETIC-UNCENSORED](https://huggingface.co/DavidAU/Qwen3.5-9B-Claude-4.6-HighIQ-THINKING-HERETIC-UNCENSORED) | 🚩 **High-risk uncensored + сомнительный “Claude/Opus” провенанс.** Это не официальный Claude/Opus, а локальный fine-tune с маркетинговым названием. Не использовать в коммерческих продуктах, клиентских данных, Eclipse Chat agents или Sentinel по умолчанию. Допустимый контур - isolated red-team / safety-eval на своём железе без внешнего доступа, если вообще понадобится |
| **Aliens Eye** ([arxhr007/Aliens_eye](https://github.com/arxhr007/Aliens_eye)) | Уже внесён в 28.06 как **self-audit цифрового следа**, не как инструмент “пробива людей”. Не интегрируем в продукты |
| **Seed-Audio 1.0** ([fal.ai](https://fal.ai/models/bytedance/seed-audio-1.0)) | Уже внесён в 28.06 как аудио/TTS reference. Важное ограничение остаётся: voice cloning только со своим голосом или явным согласием |
| **Torlink** | Полезен как CLI/download reference, но продуктово - grey-zone; не делать публичный “скачать всё” сервис |

### Гайд внедрения

| Ресурс | Описание |
|---|---|
| [July 2026 project integration](guides/july-2026-project-integration.md) | Короткий план, куда раскладываем этот батч: Eclipse Chat, Hopson Sentinel, DnD Forge, Shotforge/Text2Image/Eclipse Media, Educator-AI и oh-my-claudecode. Открывается прямо на сайте библиотеки |

### Mapping → наши проекты

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **LLM Course** | Educator-AI · Eclipse AI Hub · команда | Учебный трек “LLM Engineer”; контент для AI-курсов и внутреннего onboarding |
| **OpenHuman** | Eclipse Chat · Hopson Sentinel · Smart Life Assistant | Room/project/user memory, consent-based context, экран/логи/доки как controlled inputs |
| **OpenClaw Mobile** | Hopson Sentinel · Eclipse Chat mobile/operator mode | Mobile approval/control-plane: агент предлагает действие, пользователь подтверждает |
| **OmniRoute** | Eclipse AI Hub · Hopson Sentinel · Eclipse Chat AI agents | Provider-router + fallback + compression; только легальные ключи и ToS-safe режим |
| **Loopy** | oh-my-claudecode · eclipse-library · все агентские репо | Аудит skills/MCP/loops, дедуп, risk scan перед установкой автоматизаций |
| **Cloudflare Agent Ready** | Eclipse Forge Landing · Eclipse Library · Eclipse Chat landing · клиентские сайты | Проверка AI-search/agent readiness и список правок для SEO/MCP/Web Bot Auth |
| **Google image/video low-cost tier** | Shotforge · Text2Image · Eclipse Media · Forge Landing | Дешёвый генератор ассетов; внедрять после price/quality/watermark теста |
| **SimpleX Chat** | Eclipse Chat | Ephemeral/private rooms, одноразовые invite links, минимизация метаданных |
| **TREK** | Smart Life Assistant · Eclipse DnD Forge · Eclipse Chat | Workspace-pattern: маршруты/планы/бюджеты/опросы вокруг процесса |
| **Torlink** | Eclipse Media (reference only) | Очереди загрузки/source health-check; не публичный downloader “любых файлов” |
| **Claude Science beta** | Eclipse AI Hub · Educator-AI · Eclipse Chat · Hopson Sentinel | Reproducible research workflow: artifacts + code + environment + conversation history; citation/figure reviewer |
| **PPT Master** | Eclipse Chat · Educator-AI · Eclipse AI Hub · Eclipse Forge sales | Document/project history/course material → editable PPTX, reports, client decks |
| **Uncensored Qwen/HF модель** | Safety reference only | Не интегрировать; максимум isolated red-team без продуктового доступа |

---

## 📥 Подборка Eclipse (02.07.2026)

> Хвост батча **25.06–02.07**. Большая часть ссылок уже была внесена в предыдущие
> подборки, поэтому здесь фиксируем только недостающие полезные референсы и явно
> помечаем grey-zone. План внедрения: [INSTALL-2026-07-02.md](INSTALL-2026-07-02.md),
> проектный радар: [July 2026 learning/security/product radar](guides/july-2026-learning-security-product-radar.md).

### Learning / knowledge systems

| Ресурс | Описание | Stars |
|---|---|---|
| [Computer Science Video Courses](https://github.com/Developer-Y/cs-video-courses) | Большой curated-каталог университетских CS-курсов с видео: algorithms, systems, databases, AI/ML, networks, security, graphics, robotics и др. **Зачем нам:** база для внутреннего engineering onboarding, **Educator-AI** curriculum, training rooms в **Eclipse Chat**. Не продуктовая фича, а источник структурированных учебных треков | [![Stars](https://img.shields.io/github/stars/Developer-Y/cs-video-courses?style=flat)](https://github.com/Developer-Y/cs-video-courses) |
| [InsightsLM](https://github.com/theaiautomators/insights-lm-public) | Open-source/self-hosted альтернатива NotebookLM: chat with documents, grounded answers, audio summaries; стек Supabase + n8n + React. **Зачем нам:** reference для **Eclipse AI Hub RAG**, **Educator-AI** и **Eclipse Chat knowledge rooms**. Проверить качество ingestion, privacy модель и зависимость от n8n перед внедрением | [![Stars](https://img.shields.io/github/stars/theaiautomators/insights-lm-public?style=flat)](https://github.com/theaiautomators/insights-lm-public) |
| [Gemini](https://gemini.google.com/) Learn / course generation | Канал подал как “Gemini делает курсы”: лекции, иллюстрации, примеры кода, квизы. **Зачем нам:** UX benchmark для **Educator-AI**: тема → программа → уроки → задания → quiz. Не отдельная интеграция, а конкурентный паттерн |
| [Atlas3D](https://atlas3d.space/) | Сервис из дропа: 3D-модель → объяснение объекта → детали → мини-квиз. **Зачем нам:** reference для **Educator-AI** и будущих 3D/engineering lessons; потенциально полезно для **DnD Forge** как “interactive object lore”. **Проверка:** публичная страница нестабильно открывается; перед интеграцией проверить доступ, privacy и формат входных 3D-файлов |

### Agent / dev productivity

| Ресурс | Описание | Stars |
|---|---|---|
| [Council of High Intelligence](https://github.com/0xNyk/council-of-high-intelligence) | Claude Code plugin: 18 AI-персон обсуждают сложное решение в несколько раундов и дают confidence-weighted verdicts. **Зачем нам:** reference для **Eclipse Chat decision rooms**, **Hopson Sentinel architecture review**, **oh-my-claudecode** “council review” команды. **Оговорка:** persona council легко превращается в красивый театр; нужен строгий output: assumptions, risks, dissent, decision log | [![Stars](https://img.shields.io/github/stars/0xNyk/council-of-high-intelligence?style=flat)](https://github.com/0xNyk/council-of-high-intelligence) |
| [ZCode 3.0](https://zcode.z.ai/en) | Уже есть в AI/model radar как GLM/Z.ai reference, но батч уточняет продуктовую сторону: coding-agent UI, long-running tasks, bot control через Telegram/WeChat, GLM-5.2 optimization. **Зачем нам:** benchmark для **Hopson Sentinel**, **oh-my-claudecode**, **Eclipse Chat operator mode**. Не “хороним Claude Code”, а изучаем UX и pricing/agent loop |
| [GFusion / Sber diffusion LLM](https://tass.ru/nauka/27878487) | По сообщению ТАСС: Сбер выложил open-source инструменты/модель с diffusion-подходом к генерации текста. **Зачем нам:** держать в **Eclipse AI Hub / ai-setup model radar** как альтернативную архитектуру. **Проверка перед добавлением как модели:** найти официальный repo, license, weights, inference recipe и независимые evals |
| [caveman](https://github.com/JuliusBrussee/caveman) | Уже есть в библиотеке как cost-control для AI-агентов. В этом батче фиксируем: полезен не как “магия 75%”, а как reminder о compression modes для дорогих agent loops. В production включать только там, где стиль ответа не важен и не теряется точность |

### Privacy / security / workstation

| Ресурс | Описание | Stars |
|---|---|---|
| [Fingerprint Detector](https://github.com/mr-r3b00t/fingerprintdetector) | Chrome extension для наблюдения за fingerprinting attempts; README сам предупреждает, что проект “very in development/test” и “use at own risk”. **Зачем нам:** reference для **Hopson Sentinel privacy/security doctor** и self-audit браузера. Не обещать “полную анонимность” и не ставить как обязательную защиту | [![Stars](https://img.shields.io/github/stars/mr-r3b00t/fingerprintdetector?style=flat)](https://github.com/mr-r3b00t/fingerprintdetector) |
| [FMHY Privacy](https://fmhy.net/privacy) | Кураторский список adblocking/privacy/security-инструментов: DNS filters, adblock lists, anti-telemetry, scanners, password/SMS/privacy notes. **Зачем нам:** checklist для личной workstation hygiene и справочник для **Hopson Sentinel security doctor**. **Оговорка:** FMHY - community list, каждый инструмент проверять отдельно |
| [TechTool Lite](https://www.micromat.com/products/techtool-lite/) | Бесплатная macOS-диагностика от Micromat: battery, storage, cache/system health style checks. **Зачем нам:** reference для workstation diagnostics в **Hopson Sentinel**; актуально только для Mac-контуров, не для наших Windows/Linux серверов |
| [edu mail benefits navigator](https://nav.edumails.cn/) | 🚩 **Do-not-use / grey.** Каталог скидок по student email сам по себе ок, но подача “получить студенческую почту, если вы не студент” = риск fraud/ToS violation. **Не используем** в проектах и не рекомендуем обход права на образовательные скидки |

### Product UX / hardware references

| Ресурс | Описание |
|---|---|
| [BoardRepo](https://boardrepo.com/browse) | Каталог open hardware / PCB проектов. **Зачем нам:** reference для **Educator-AI electronics track**: плата → схема → BOM → объяснение → мини-проект. Можно использовать как источник идей для hardware-learning, не как срочный продуктовый модуль |
| [Audio Guide](https://audio-guide.ykj13.ru/podbor/) | Мини-сервис подбора наушников по формату и бюджету. **Зачем нам:** UX reference для recommendation flows: короткий input → ограниченный shortlist → объяснение выбора. Может пригодиться **Smart Life Assistant** и AI Hub как простой product-advisor паттерн |

### Уже внесено, не дублируем

| Находка | Где уже учтено |
|---|---|
| pytube-downloader, agent-skills, ARGithub/alphaXiv | Подборка **23–27.06.2026** |
| SimpleX Chat, Aliens Eye, MinerU, Seed-Audio | Подборка **28.06.2026** / позже уточнено в **30.06–01.07** |
| TREK, OmniRoute, LLM Course, Torlink, OpenHuman, OpenClaw Mobile, Google image/video low-cost tier, Cloudflare Agent Ready, Loopy, Claude Science, PPT Master, uncensored Qwen/HF | Подборка **30.06–01.07.2026** |

### Mapping → наши проекты

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **InsightsLM** | Eclipse AI Hub · Eclipse Chat · Educator-AI | Self-hosted document chat / grounded notes / audio summaries |
| **CS Video Courses / Gemini Learn / Atlas3D** | Educator-AI · Eclipse Chat training rooms | Curriculum generation, interactive lessons, quizzes, 3D learning mechanics |
| **Council of High Intelligence** | Eclipse Chat · Hopson Sentinel · oh-my-claudecode | Decision room / architecture council with assumptions, dissent and decision log |
| **Fingerprint Detector / FMHY / TechTool Lite** | Hopson Sentinel · workstation hygiene | Security doctor checklist, browser privacy audit, local machine diagnostics |
| **BoardRepo** | Educator-AI · hardware learning | Electronics course modules: board → explanation → build task |
| **Audio Guide** | Smart Life Assistant · AI Hub | Compact recommendation UX pattern |
| **ZCode / GFusion** | ai-setup · Eclipse AI Hub · Sentinel | Provider/model radar, agent UX benchmark; verify licenses/evals |
| **edu mail navigator** | None | Do-not-use: student-benefit abuse risk |

---

## 📥 Подборка Eclipse (05.07.2026)

> Дроп Telegram «Eclipse Hopson» от **05.07.2026**. Разбор: что реально полезно,
> что является дублем уже внесённых находок, а что оставляем только как grey/reference.
> Куда внедрять - см. [INSTALL-2026-07-05.md](INSTALL-2026-07-05.md) и сайт-гайд
> [July 2026 audio/ops/agent radar](guides/july-2026-audio-ops-agent-radar.md).

### Voice / transcription / calls

| Ресурс | Описание |
|---|---|
| [Fish Audio API](https://fish.audio/ru/app/api-keys/) | TTS/API-ключи Fish Audio. Канал заявляет promo-доступ к S2.1 Pro до 24.07, 83 языка, RU, клонирование голоса, эмоции/интонации и realtime latency. **Проверка:** публичная страница API показывает key management/login, но промо/лимиты надо сверить внутри аккаунта перед интеграцией. **Зачем нам:** **Hopson Sentinel** (TTS/STT voice loop), **Eclipse Chat voice/AI transcription**, **DnD Forge** NPC-голоса, **Educator-AI** озвучка уроков, **Eclipse Media/Shotforge** voiceover. **Guardrail:** voice cloning только свой голос или явное согласие |
| [Audio Transcriber AI](https://audiotranscriber.io/) | Онлайн-транскрибация без установки: сайт заявляет no-signup, 120+ языков, speaker detection, summary/export; на странице встречаются разные лимиты (100 MB в форме и 5GB в feature-блоке) - перед workflow проверить фактический upload limit. **Зачем нам:** **Eclipse Chat** meeting transcripts, **Eclipse Media** video/audio → text, **Educator-AI** лекции → задания, **InterviewForge** интервью → structured notes. **Оговорка:** closed SaaS, не грузить чувствительные созвоны без privacy review |
| [Tactiq Russian Translate](https://tactiq.io/translate/russian-translate) / [YouTube transcript](https://tactiq.io/tools/youtube-transcript) | Browser-level real-time translation/transcripts, summaries and task extraction. **Зачем нам:** UX reference для **Eclipse Chat calls**: live captions, translation, action items, export PDF/TXT. Не core dependency - сначала как benchmark и ручной инструмент |

### Prompting / coding / content

| Ресурс | Описание |
|---|---|
| [Claude Code Prompt Library](https://code.claude.com/docs/en/prompt-library) | Официальная библиотека Anthropic с copy-paste prompts для Claude Code, tags by task/role, explanation “why this works”. **Зачем нам:** **oh-my-claudecode**, **Hopson Sentinel**, **eclipse-library/prompts**, onboarding команды. Ценность не в копировании промптов, а в паттернах: outcome-first, verification, reference files, measurable targets |
| [Editor Stylist Humanizer](prompts/editor-stylist-humanizer.md) | Новый более строгий prompt-asset для редактуры: убрать канцелярит, AI-ритм, симметричные абзацы, “не просто X, а Y”, сохранить голос автора. **Зачем нам:** **Eclipse AI Hub Copywriter**, **Star CRM AutoReply**, Telegram/LinkedIn тексты, landing copy. **Оговорка:** не использовать для академического обхода AI-detectors |
| [Google AI Studio API Keys](https://aistudio.google.com/api-keys) | ♻️ **Дубль/напоминание:** уже есть в блоке бесплатных API. Полезно держать как baseline provider для pet/POC проектов: **Eclipse AI Hub**, **Shotforge**, **Text2Image**, **Educator-AI**, агенты. Проверять актуальные квоты/модели в AI Studio |
| [Fable 5 system prompt leak](https://github.com/elder-plinius/CL4R1T4S/blob/main/ANTHROPIC/CLAUDE-FABLE-5.md) | ♻️ **Уже внесено как grey/reference.** Не “превращает Opus в Fable”. Это leak/сомнительный провенанс + возможная IP-проблема. Допустимо как study material по структуре system prompt, не как production prompt |

### Operational tables / business validation

| Ресурс | Описание |
|---|---|
| [MWS Tables](https://mws.ru/dev-tools/mws-tables/) | Платформа рабочих таблиц/процессов: совместная работа, базы, задачи, аналитика, шаблоны. Канал заявляет “Большие таблицы” до 1M строк / 200 столбцов / 1000 пользователей; на публичной странице виден общий product positioning, точные лимиты надо проверять в документации/тарифах. **Зачем нам:** сильный reference для **Eclipse Chat Tables/Databases**, **Business Data Platform**, **Star CRM**, **FinFlow**, client portals |
| [Draper Idea Validation](https://draper.chat/use-cases/idea-validation) | AI-чат для проверки бизнес-идей. **Зачем нам:** reference для **Eclipse AI Hub** / **Eclipse Forge sales intake**: idea → risks → questions → next experiment. Не интеграция, а шаблон discovery-flow |
| **AI career survival playbook** | Не сервис, а заметка: автоматизировать рутину, предлагать AI-улучшения руководству, держаться ближе к бизнес-процессам, проверять AI outputs вручную. **Зачем нам:** контент для **Educator-AI** и внутреннего “AI adoption” гайда |

### Browser automation / scraping

| Ресурс | Описание | Stars |
|---|---|---|
| [Obscura](https://github.com/h4ckf0r0day/obscura) | Rust headless browser for AI agents/web scraping: V8, Chrome DevTools Protocol, Puppeteer/Playwright compatibility, lightweight memory/binary, built-in anti-detect. **Зачем нам:** **Eclipse-webclaw**, **business-data-platform**, **Lead-Sniper**, QA agents. **Оговорка:** stealth/anti-detect - dual-use; использовать только для своих/авторизованных источников и legal scraping, не для обхода чужих защит | [![Stars](https://img.shields.io/github/stars/h4ckf0r0day/obscura?style=flat)](https://github.com/h4ckf0r0day/obscura) |
| [pxpipe](https://github.com/teamchong/pxpipe) | Эксперимент: рендерить bulk context как images для моделей, где vision-token path дешевле текста. В README прямо указаны caveats: lossy, byte-exact строки/хэши/секреты должны оставаться text, Opus/GPT модели могут читать хуже. **Зачем нам:** только R&D для **oh-my-claudecode/Hopson Sentinel** cost experiments. Не для production, не для кода/секретов/точных чисел | [![Stars](https://img.shields.io/github/stars/teamchong/pxpipe?style=flat)](https://github.com/teamchong/pxpipe) |

### Security / workstation diagnostics

| Ресурс | Описание | Stars |
|---|---|---|
| [NtWarden](https://github.com/mrT4ntr4/NtWarden) | Windows Analysis and Research Toolkit: processes, services, network, kernel internals, local/remote via WinSysServer. README автора предупреждает: kernel driver only in Test VM; network protocol has no auth and should run only in isolated lab/VM. **Зачем нам:** reference для **Hopson Sentinel security doctor** и workstation diagnostics; не ставить на рабочую машину без lab-песочницы | [![Stars](https://img.shields.io/github/stars/mrT4ntr4/NtWarden?style=flat)](https://github.com/mrT4ntr4/NtWarden) |

### Japan AI landscape watch

| Ресурс | Описание |
|---|---|
| [Sakana AI](https://sakana.ai/) · [Preferred Networks](https://preferred.jp/en) · [ABEJA](https://www.abejainc.com/) · [Rinna / Raena](https://raena.ai/) · LINE CLOVA | Радар японского AI-рынка: research/industrial AI, Japanese business/culture, creative language models, LINE ecosystem. **Зачем нам:** **Eclipse AI Hub provider radar**, **business localization**, international content. **Оговорка:** это watchlist, не интеграция. LINE CLOVA из дропа ведёт на Aptoide APK - не использовать как источник установки; искать официальный vendor channel |

### Mapping → наши проекты

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **Fish Audio** | Hopson Sentinel · Eclipse Chat · DnD Forge · Educator-AI · Eclipse Media | TTS/voiceover/provider spike; consent gate for cloning |
| **Audio Transcriber / Tactiq** | Eclipse Chat · Eclipse Media · Educator-AI · InterviewForge | Calls/video/audio → transcript → summary/action items/export |
| **Claude Prompt Library** | oh-my-claudecode · Hopson Sentinel · all repos | Prompt patterns for coding tasks, verification and onboarding |
| **Editor Stylist Humanizer** | Eclipse AI Hub · Star CRM · content workflows | Final rewriter step after fact-checking; not academic bypass |
| **MWS Tables** | Eclipse Chat · Business Data Platform · Star CRM · FinFlow | Operational tables/databases reference: permissions, filters, analytics, collaboration |
| **Obscura** | Eclipse-webclaw · business-data-platform · Lead-Sniper · QA agents | Lightweight browser automation; only authorized/legal scraping |
| **pxpipe** | oh-my-claudecode · Hopson Sentinel R&D | Cost experiment only; no exact strings/secrets/code-critical contexts |
| **NtWarden** | Hopson Sentinel · workstation security | Security doctor reference; lab/VM only |
| **Draper Idea Validation / AI career playbook** | Eclipse AI Hub · Educator-AI · Eclipse Forge sales | Discovery prompts, business validation, AI adoption content |
| **Japan AI watchlist** | Eclipse AI Hub · localization/content | Market radar, no immediate integration |

---

## 📥 Подборка Eclipse (06.07.2026)

> Дроп Telegram «Eclipse Hopson» от **06.07.2026**. Это не core-AI batch, а слой
> web utilities + risk-filter. Детальная раскладка по проектам:
> [July 2026 tooling / risk integration](guides/july-2026-tooling-risk-integration.md).

### No-signup utilities

| Ресурс | Описание | Stars |
|---|---|---|
| [FckSignups](https://github.com/BraveOPotato/FckSignups) | Каталог open-source browser-tools без аккаунтов, email и tracking; проект на React/TypeScript, есть категории productivity/design/dev/writing/privacy/utilities/data/media/education и schema для добавления инструментов. **Зачем нам:** усилить `Eclipse Library` фильтром “no-signup”, брать UX каталогизации для web-версии, собирать клиентские подборки быстрых утилит без регистрации | [![Stars](https://img.shields.io/github/stars/BraveOPotato/FckSignups?style=flat)](https://github.com/BraveOPotato/FckSignups) |

### Synthetic identity / test data

| Ресурс | Описание |
|---|---|
| [Duoguodizhi](https://duoguodizhi.com/) | Генератор многострановых адресов/профилей. **High-risk:** не использовать для обхода KYC, регистраций, виртуальных карт, App Store/Google Play регионов и любых действий, где требуется реальная личность. Допустимый use-case: synthetic QA data для форм, демо-скриншотов, seed-данных и тестов локально. Для продукта лучше использовать Faker/local fixtures, чтобы не провоцировать fraud-сценарии |

### Mapping → наши проекты

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **FckSignups** | Eclipse Library · Eclipse Forge internal ops | Навигационный паттерн “инструменты без регистрации”, теги `no-signup`, быстрые подборки для клиентов/команды |
| **Duoguodizhi** | QA fixtures only | Только synthetic data для тестов форм/онбординга; не добавлять как публично рекомендуемый сервис |

---

## 📥 Подборка Eclipse (08.07.2026)

> Дроп Telegram «Eclipse Hopson» от **08.07.2026**. Здесь главное — агентский поиск,
> media-pipeline prompts и несколько risk/reference находок. Бесплатные AI API из дропа
> отдельно не дублируем: они уже собраны в разделе [Бесплатные API](#бесплатные-api).

### Agent search / актуальный контекст

| Ресурс | Описание | Stars |
|---|---|---|
| [OpenSERP](https://github.com/karust/openserp) | Поисковый JSON API/CLI для AI-агентов поверх Google, Yandex, Baidu, Bing и DuckDuckGo без официальных search API-ключей. Есть HTTP/SOCKS5 proxy support, фильтры языка/региона/даты и выдача в формате, который легко кормить агенту. **Зачем нам:** **Eclipse Chat Knowledge/AI rooms**, **Hopson Sentinel**, Kwork #18 research-agent, Eclipse Library enrichment. **Риск:** проверять ToS поисковиков, captcha/proxy устойчивость и не строить критичный production-flow только на парсинге SERP | [![Stars](https://img.shields.io/github/stars/karust/openserp?style=flat)](https://github.com/karust/openserp) |

### Storage / privacy reference

| Ресурс | Описание | Stars |
|---|---|---|
| [unlim-cloud](https://github.com/inulute/unlim-cloud) | Desktop-приложение, которое использует Telegram как файловое хранилище: папки, gallery, фото/видео, загрузка через Telegram session/chat/bot. **Reference-only:** идея chat-backed personal vault интересная для UX, но не брать как production-storage из-за ToS, privacy, лимитов Telegram и риска потери доступа. **Зачем нам:** заметка для Eclipse Chat files/attachments и personal archive UX, не интеграция | [![Stars](https://img.shields.io/github/stars/inulute/unlim-cloud?style=flat)](https://github.com/inulute/unlim-cloud) |

### Security / OPSEC

| Ресурс | Описание | Stars |
|---|---|---|
| [T3MP3ST](https://github.com/elder-plinius/T3MP3ST) | Multi-agent cybersecurity research system от Pliny/elder-plinius. Позиционируется как набор агентов для поиска уязвимостей и тестирования защит. **High-risk:** только authorized security lab / собственные стенды / defensive review. Не запускать по чужим целям и не превращать в автоматический exploit-tool. **Зачем нам:** reference для Hopson Sentinel security pipeline, threat-model prompts и codex-security playbooks | [![Stars](https://img.shields.io/github/stars/elder-plinius/T3MP3ST?style=flat)](https://github.com/elder-plinius/T3MP3ST) |
| [SpamBlocker](https://github.com/aj3423/SpamBlocker) | Open-source Android blocker для spam calls/SMS: правила по оператору, стране, частоте, номеру и содержимому. **Зачем нам:** Privacy/OPSEC reference, личная защита, идея notification-safety слоя для мобильных сценариев. Не core product, но полезный бытовой инструмент | [![Stars](https://img.shields.io/github/stars/aj3423/SpamBlocker?style=flat)](https://github.com/aj3423/SpamBlocker) |

### Media / image generation

| Ресурс | Описание |
|---|---|
| [Seedream 5.0 Lite / Pro](https://higgsfield.ai/seedream-5.0) | Image generation/editing: region editing, layer-like правки, multi-image composition, изменение объекта по описанию, текст/инфографика/схемы, RU-friendly prompts. **Зачем нам:** **Shotforge**, **Text2Image**, **Eclipse Media**. Lite можно тестировать через Higgsfield / Dreamina, Pro API — только после проверки доступа, цены и лицензии |
| [Dreamina Seedream entry](https://dreamina.capcut.com/) | Альтернативная точка входа для теста Seedream Lite. **Зачем нам:** быстрый ручной benchmark качества до решения об API-интеграции |
| [Photo Restoration Prompt](prompts/photo-restoration-upscale.md) | Пресет для восстановления старых фото: царапины, пятна, шум, мягкое sharpening, естественная колоризация. **Зачем нам:** Shotforge/Text2Image/Eclipse Media как готовый prompt-asset для “restore old photo” workflow |

### Prompt assets / личные финансы

| Ресурс | Описание |
|---|---|
| [Claude Finance — 6 prompts](prompts/finance-claude-6.md) | Долги, аудит расходов, простой бюджет, фильтр импульсных покупок, автосбережения, личный financial dashboard. **Зачем нам:** Eclipse AI Hub / Smart Life Assistant. Это бытовой planning-flow, не трейдинг и не финансовая рекомендация |
| [finance-15.md](prompts/finance-15.md) | ♻️ Уже внесённый основной набор из 15 промптов. Новый файл выше добавлен как “операционный слой”: меньше теории, больше конкретных сценариев и действий |

### Уже учтено, не дублируем

| Находка | Где уже учтено |
|---|---|
| OpenRouter, NVIDIA NIM, GitHub Models, Cerebras, Groq, Mistral AI, Cloudflare Workers AI, Hugging Face Inference Providers | Раздел [Бесплатные API](#бесплатные-api). Если нужно — потом сделаем отдельный “provider decision matrix” для Eclipse AI Hub / Eclipse Chat, но сам список уже есть |

### Mapping → наши проекты

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **OpenSERP** | Eclipse Chat · Hopson Sentinel · Kwork #18 research-agent · Eclipse Library | Agent search provider: query → JSON SERP → source ranking → citations / memory |
| **Seedream 5.0 / Photo Restoration Prompt** | Shotforge · Text2Image · Eclipse Media | Image editing benchmark, old-photo restore preset, infographic/text rendering tests |
| **Claude Finance 6** | Eclipse AI Hub · Smart Life Assistant | Financial action-flow: debt plan, expense audit, dashboard, savings ritual |
| **SpamBlocker** | Privacy/OPSEC · mobile safety references | Anti-spam rule UX, notification trust, personal device hygiene |
| **unlim-cloud** | Eclipse Chat files/attachments reference | UX reference only; do not use Telegram as production object storage |
| **T3MP3ST** | Hopson Sentinel · codex-security notes | Authorized security lab reference only; defensive workflows and guardrails |

---

## 📥 Подборка Eclipse (09–13.07.2026)

> Дроп Telegram «Eclipse Hopson» от **09–13.07.2026**. В этом батче главный фокус:
> token-saving для агентов, safety-guardrails, RAG-обучение, voice/live-translation и быстрые
> прототипы. Рабочий стандарт по экономии токенов вынесен в отдельный гайд:
> [Token-saving agent stack](guides/token-saving-agent-stack.md).

### Token-saving / agent safety

| Ресурс | Описание | Stars |
|---|---|---|
| [sqz](https://github.com/ojuschugh1/sqz) | Token-saving слой для AI-сессий: дедупликация повторно прочитанных файлов/контекста, режимы shell hook / MCP server / browser extension / IDE extension. Канал заявляет экономию до 92%, но это надо проверять на наших задачах. **Зачем нам:** Codex/Claude workflows, oh-my-claudecode, Hopson Sentinel, Eclipse Chat AI agents. **Правило:** тестировать сначала на sandbox-репо, не отдавать секреты, сверить поведение с `AGENTS.md` и логированием | [![Stars](https://img.shields.io/github/stars/ojuschugh1/sqz?style=flat)](https://github.com/ojuschugh1/sqz) |
| [Destructive Command Guard](https://github.com/Dicklesworthstone/destructive_command_guard) | Guardrail против критических shell-команд: блокирует опасные действия до запуска и предлагает безопасную альтернативу по набору правил. **Зачем нам:** обязательный safety reference для локальных Codex/Claude/Sentinel окружений, особенно перед авто-агентами с shell-доступом. **Оговорка:** не заменяет review и sandboxing, но снижает риск “rm -rf по проекту” | [![Stars](https://img.shields.io/github/stars/Dicklesworthstone/destructive_command_guard?style=flat)](https://github.com/Dicklesworthstone/destructive_command_guard) |
| [OpenAI Model guidance / GPT-5.6](https://developers.openai.com/api/docs/guides/latest-model) | Официальный guide OpenAI по GPT-5.6: `gpt-5.6-sol` для flagship, `terra` для баланс цены/качества, `luna` для high-volume; leaner prompts, prompt caching, persisted reasoning, Programmatic Tool Calling, intentional `reasoning.effort`. **Зачем нам:** Eclipse AI Hub, Eclipse Chat agents, Hopson Sentinel, Codex migration playbook. **Смысл:** меньше повторяющихся инструкций, меньше лишних tools, больше benchmark-настройки по cost/quality | — |

### Local LLM / inference R&D

| Ресурс | Описание | Stars |
|---|---|---|
| [Colibri](https://github.com/JustVugg/colibri) | Pure C runtime для GLM-5.2 744B MoE: expert blocks лежат на диске, dense-часть держится в RAM, runtime без Python/GPU/BLAS после подготовки модели. Авторские цифры: int4 модель ~370 GB на диске, resident RAM ~9.9 GB, peak RSS ~20 GB, старт ~30s. **Reality check:** cold decode упирается в disk IO и может быть ~0.05-0.1 tok/s, поэтому это R&D/reference, а не быстрый “домашний ChatGPT”. **Зачем нам:** Hopson Sentinel, Eclipse AI Hub, oh-my-claudecode — идеи для local provider doctor, RAM/disk planning, JSON `plan/doctor`, streaming experts и safe model placement | [![Stars](https://img.shields.io/github/stars/JustVugg/colibri?style=flat)](https://github.com/JustVugg/colibri) |

### AI / RAG / learning

| Ресурс | Описание | Stars |
|---|---|---|
| [production-agentic-rag-course](https://github.com/jamwithai/production-agentic-rag-course) | 7-недельный курс production agentic RAG: Docker, FastAPI, arXiv/PDF, базы знаний, Telegram bot, agentic retrieval. **Зачем нам:** Kwork #18 research-agent, Educator-AI, Eclipse AI Hub Research/RAG, Eclipse Chat knowledge rooms. Хорош как учебный трек и reference architecture | [![Stars](https://img.shields.io/github/stars/jamwithai/production-agentic-rag-course?style=flat)](https://github.com/jamwithai/production-agentic-rag-course) |
| [ShipThatCode](https://shipthatcode.com/) | Практика программирования через сборку систем: Redis, Git, БД, OS kernel, game engine, blockchain и карьерные треки. **Зачем нам:** Educator-AI, portfolio-training, onboarding junior-to-middle. Closed platform, не интеграция, а learning reference | — |
| [prompts.chat](https://github.com/f/prompts.chat) | Огромная prompt-библиотека / UI вокруг Awesome ChatGPT Prompts. **Зачем нам:** source для curated prompt-паков Eclipse AI Hub и Library. **Правило:** не импортировать “165k prompts” как мусор; брать только проверенные пресеты, классифицировать и привязывать к нашим задачам | [![Stars](https://img.shields.io/github/stars/f/prompts.chat?style=flat)](https://github.com/f/prompts.chat) |

### Privacy / device / workstation

| Ресурс | Описание | Stars |
|---|---|---|
| [privacy.sexy](https://privacy.sexy/) / [desktop repo](https://github.com/undergroundwires/privacy.sexy) | Библиотека privacy/security scripts для Windows/macOS/Linux: telemetry off, browser/app hardening, firewall/settings cleanup. **Зачем нам:** Hopson Sentinel workstation doctor, privacy checklist, личная OPSEC. **Guardrail:** не запускать “одним кликом” вслепую; делать restore point/backup, читать diff скрипта, не ломать Defender/обновления без причины | [![Stars](https://img.shields.io/github/stars/undergroundwires/privacy.sexy?style=flat)](https://github.com/undergroundwires/privacy.sexy) |
| [RepoStore](https://github.com/samyak2403/RepoStore) | Поиск Android-приложений по GitHub-репозиториям в формате “app store”: категории, рейтинг, описание, APK. **Зачем нам:** Privacy/OPSEC app discovery, Android tooling research. **Риск:** APK supply-chain, подписи, malware; не ставить без проверки provenance | [![Stars](https://img.shields.io/github/stars/samyak2403/RepoStore?style=flat)](https://github.com/samyak2403/RepoStore) |
| [Fast File Explorer](https://github.com/conaticus/FileExplorer) | Быстрый cross-platform file manager: поиск, preview, remote servers, checksums, templates. **Зачем нам:** workstation productivity, Hopson Sentinel file-navigation reference, checksum UX. Проверить зрелость проекта до замены проводника | [![Stars](https://img.shields.io/github/stars/conaticus/FileExplorer?style=flat)](https://github.com/conaticus/FileExplorer) |
| [PCLink](https://github.com/BYTEDz/PCLink/) | Управление ПК с телефона: файлы, медиа, клавиатура/мышь, screenshots, reboot, QR pairing; Windows/Linux. **Зачем нам:** reference для Hopson Sentinel mobile control-plane и OpenClaw Mobile идей. **Guardrail:** только локальная сеть/VPN, auth, не открывать в публичный интернет | [![Stars](https://img.shields.io/github/stars/BYTEDz/PCLink?style=flat)](https://github.com/BYTEDz/PCLink) |
| [Internxt Temporary Email](https://internxt.com/temporary-email) | Одноразовая временная почта: random inbox, анонимное получение писем, срок жизни зависит от активности. **Зачем нам:** QA регистраций, privacy hygiene, тесты signup-flow без засорения основного inbox. **Guardrail:** не использовать для fraud, обхода банов/KYC, массовых регистраций или действий, где нужна реальная идентичность; для production-тестов лучше controlled test inboxes. Checklist: [QA temporary email](guides/qa-temporary-email.md) | — |

### Media / voice / content

| Ресурс | Описание | Stars |
|---|---|---|
| [MaxFusion](https://maxfusion.ai/) | AI-сервис для генерации рекламных/обучающих/разговорных роликов: идеи → вопросы → hooks/script → video variants. **Зачем нам:** Eclipse Media, Shotforge, промо Eclipse Forge, Kwork content packages. Closed SaaS, использовать как benchmark workflow, не как зависимость | — |
| [ChatCut](https://chatcut.io/) | AI video editor/plugin: чистка речи, субтитры, inserts, motion graphics, voice/music/effects, редактирование проекта. **Зачем нам:** Eclipse Media roadmap, video-use benchmark, content ops. Проверить privacy/export/pricing перед использованием |
| [Voicetypr](https://github.com/moinulmoin/voicetypr) | Local speech-to-text app для macOS/Windows, 99+ языков, hardware acceleration. **Зачем нам:** Eclipse Chat voice notes/call transcription, Educator-AI lectures, Eclipse Media transcripts, InterviewForge. Плюс: локальность и меньше privacy риска | [![Stars](https://img.shields.io/github/stars/moinulmoin/voicetypr?style=flat)](https://github.com/moinulmoin/voicetypr) |
| [Sokuji](https://github.com/kizuna-ai-lab/sokuji) | Realtime speech translation + virtual microphone + subtitles; offline mode and cloud providers; Windows/macOS/Linux + browser extensions. **Зачем нам:** Eclipse Chat voice/calls, Hopson Sentinel voice operator, DnD Forge multilingual sessions. **Guardrail:** voice cloning/translation only with consent, clear disclosure in calls | [![Stars](https://img.shields.io/github/stars/kizuna-ai-lab/sokuji?style=flat)](https://github.com/kizuna-ai-lab/sokuji) |
| **AI interior design toolkit** | Набор сервисов для ремонта/интерьера: ChatGPT, Midjourney, Reimagine Home AI, Interior AI, RoomGPT, Coolors, Khroma, Planner 5D, Homestyler, Canva AI и др. **Зачем нам:** Smart Life Assistant “home planning” module, DnD Forge locations reference, content ideas. Не отдельная интеграция, а checklist |

### Deploy / web ops

| Ресурс | Описание |
|---|---|
| [Cloudflare Drop](https://www.cloudflare.com/drop/) | Drag-and-drop deploy для статических сайтов/ZIP: быстрый прототип в браузере, temporary preview без регистрации, production через Cloudflare после входа. **Зачем нам:** мгновенные previews для EclipseForgeLanding, Kwork demos, client approvals. Не заменяет нормальный CI/CD |

### Не тащим в продукт / только как заметка

| Находка | Решение |
|---|---|
| **Steam realtime priority hack** | Не используем и не рекомендуем как системный совет. `Realtime` priority может вызвать лаги, starvation системных процессов и нестабильность. В библиотеке фиксируем только как “не продуктовый fit” |
| **MaxFusion / ChatCut closed SaaS** | Держим как benchmark UX/workflow, но не строим core features на закрытом сервисе без API, privacy и pricing review |

### Mapping → наши проекты

| Tool | Project(s) | Integration pattern |
|---|---|---|
| **sqz + Ponytail + Context Engineering + caveman** | Все dev-репо · oh-my-claudecode · Hopson Sentinel | Token-saving stack: fewer repeated reads, minimal code, compact internal loops, scoped context |
| **Destructive Command Guard** | Все dev-окружения · Sentinel | Safety hook before shell execution; especially for autonomous agents |
| **GPT-5.6 guide** | Eclipse AI Hub · Eclipse Chat · Sentinel · Codex workflows | Model migration, lean prompts, caching, reasoning effort benchmarks |
| **Colibri** | Hopson Sentinel · Eclipse AI Hub · oh-my-claudecode | Local giant-model runtime R&D: disk-streamed MoE, RAM/disk doctor, provider planning JSON |
| **production-agentic-rag-course** | Kwork #18 · Educator-AI · Eclipse AI Hub · Eclipse Chat | Agentic RAG architecture, arXiv/PDF research bot, Telegram integration |
| **privacy.sexy / RepoStore / FileExplorer / PCLink / Internxt Temporary Email** | Hopson Sentinel · workstation hygiene · mobile control · QA | Privacy scripts, app provenance, fast file ops, phone control-plane, disposable test inboxes |
| **Voicetypr / Sokuji** | Eclipse Chat · Eclipse Media · Educator-AI · DnD Forge | Local transcription, live translation, voice sessions with consent |
| **Cloudflare Drop** | EclipseForgeLanding · Kwork demos · client previews | Fast static previews, not production CI/CD |

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
