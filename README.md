<div align="center">

# ⚡ Eclipse Library

### Кураторская библиотека инструментов, ресурсов и знаний

*Собираем лучшее — ничего не теряем*

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e?style=flat)](LICENSE)

</div>

---

## Содержание

- [🤖 AI & Claude Code](#-ai--claude-code)
- [🛠️ Dev Tools & CLI](#️-dev-tools--cli)
- [🎬 Media & Download](#-media--download)
- [💬 Self-hosted Платформы](#-self-hosted-платформы)
- [🛡 Privacy / OPSEC](#-privacy--opsec)
- [🎮 GameDev](#-gamedev)
- [🎓 Компьютерные науки (MIT)](#-компьютерные-науки-mit)
- [📥 Подборка Eclipse (апрель 2026)](#-подборка-eclipse-апрель-2026)
- [📦 Наши проекты](#-наши-проекты)

---

## 🤖 AI & Claude Code

### Бесплатные API

| Ресурс | Описание | Звёзды |
|--------|----------|--------|
| [free-llm-api-resources](https://github.com/cheahjs/free-llm-api-resources) | 26 провайдеров бесплатных LLM API — OpenRouter, Google AI Studio, NVIDIA NIM, Mistral, Groq, Cohere и др. Лимиты и условия | [![Stars](https://img.shields.io/github/stars/cheahjs/free-llm-api-resources?style=flat)](https://github.com/cheahjs/free-llm-api-resources) |
| [NVIDIA Build (95 моделей)](https://build.nvidia.com/models) | 95 бесплатных API: Qwen, GLM, DeepSeek, Kimi, Gemma, Mistral, Nemotron — без лимитов на момент публикации (проверять условия) | — |

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

### Финансовый AI

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [Dexter](https://github.com/virattt/dexter) | Автономный AI-агент для инвестиционного ресёрча — 3 агента (action/validation/answer), финансовая отчётность, самопроверка, TypeScript/Bun, MIT | [![Stars](https://img.shields.io/github/stars/virattt/dexter?style=flat)](https://github.com/virattt/dexter) |

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

## 📈 SEO & Маркетинг

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [awesome-seo-tools](https://github.com/serpapi/awesome-seo-tools) | Полная коллекция SEO-инструментов — ключевые слова, анализ ссылок, оптимизация контента, рейтинги, расширения для браузера | [![Stars](https://img.shields.io/github/stars/serpapi/awesome-seo-tools?style=flat)](https://github.com/serpapi/awesome-seo-tools) |
| [ai-marketing-skills](https://github.com/ericosiu/ai-marketing-skills) | Skills для Claude Code под маркетолога: стратегия, трафик, SMM, контент, shortы, аналитика, SEO (подборка) | [![Stars](https://img.shields.io/github/stars/ericosiu/ai-marketing-skills?style=flat)](https://github.com/ericosiu/ai-marketing-skills) |
| [geo-seo-claude](https://github.com/zubair-trabzada/geo-seo-claude) | SEO-аудит на видимость для AI-поиска — ChatGPT, Perplexity, Bing AI Overviews. Скоринг 0-10 + план оптимизации | [![Stars](https://img.shields.io/github/stars/zubair-trabzada/geo-seo-claude?style=flat)](https://github.com/zubair-trabzada/geo-seo-claude) |
| [job-ops](https://github.com/DaKheera47/job-ops) | Авто-поиск работы — AI прочёсывает сайты, адаптирует CV под вакансию, обходит ATS-скрининг, локально | [![Stars](https://img.shields.io/github/stars/DaKheera47/job-ops?style=flat)](https://github.com/DaKheera47/job-ops) |

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
| [CyberScraper 2077](https://github.com/itsOwen/CyberScraper-2077) | Python | AI-парсер по промпту — описываешь что нужно, обход капчи/антибота, экспорт JSON/CSV/Excel | [![Stars](https://img.shields.io/github/stars/itsOwen/CyberScraper-2077?style=flat)](https://github.com/itsOwen/CyberScraper-2077) |
| [ScraperAI](https://github.com/scraperai/scraperai) | Python | AI-парсер с локальными моделями — Selenium, минимизация HTML, маскировка, гибкие настройки | [![Stars](https://img.shields.io/github/stars/scraperai/scraperai?style=flat)](https://github.com/scraperai/scraperai) |
| [TGSpyder](https://github.com/Darksight-Analytics/tgspyder) | Python | Telegram-парсер — участники чатов, история сообщений, инвайт-ссылки, поиск по ID, экспорт в CSV | [![Stars](https://img.shields.io/github/stars/Darksight-Analytics/tgspyder?style=flat)](https://github.com/Darksight-Analytics/tgspyder) |
| [Telegram Files](https://github.com/jarvis2f/telegram-files) | — | Telegram-загрузчик — все типы файлов, параллельная загрузка, превью, локально | [![Stars](https://img.shields.io/github/stars/jarvis2f/telegram-files?style=flat)](https://github.com/jarvis2f/telegram-files) |
| [Repomix](https://github.com/yamadashy/repomix) | Node.js / CLI | Упаковщик кодбазы в один MD-файл — для AI-ревью больших модулей, фильтры по include/exclude | [![Stars](https://img.shields.io/github/stars/yamadashy/repomix?style=flat)](https://github.com/yamadashy/repomix) |
| [AB Download Manager](https://abdownloadmanager.com/) | Multi-platform | Менеджер загрузок: одновременные потоки, планировщик, авто-сортировка по папкам, Android | — |
| [hackingtool](https://github.com/Z4nzu/hackingtool) | Python | 185 инструментов пентеста — OSINT, веб-аудит, Wi-Fi, реверс. **Только для своих систем, в обучающих целях** | [![Stars](https://img.shields.io/github/stars/Z4nzu/hackingtool?style=flat)](https://github.com/Z4nzu/hackingtool) |
| [TorBot](https://github.com/DedSecInside/TorBot) | Python | OSINT-бот для onion-сегмента — карта переходов, проверка живости, JSON-экспорт. **Только для легальных pentest-сценариев** | [![Stars](https://img.shields.io/github/stars/DedSecInside/TorBot?style=flat)](https://github.com/DedSecInside/TorBot) |
| [awesome-free-apps](https://github.com/Axorax/awesome-free-apps) | Каталог | Бесплатный софт по категориям (видео, фото, музыка, игры, утилиты) для всех ОС | [![Stars](https://img.shields.io/github/stars/Axorax/awesome-free-apps?style=flat)](https://github.com/Axorax/awesome-free-apps) |

---

## 🎬 Media & Download

| Проект | Стек | Описание |
|--------|------|----------|
| [Eclipse Media](https://github.com/PavelHopson/eclipse-media) | React 19 + FastAPI | Self-hosted загрузчик видео/аудио — 1000+ сайтов, SSE прогресс, TTL |
| [Reclip](https://github.com/averygan/reclip) | Python + Flask | Оригинальный минималистичный загрузчик (вдохновение для Eclipse Media) |
| [TADA](https://huggingface.co/collections/HumeAI/tada) | Python / HuggingFace | Open-source TTS — до 700 сек экспрессивной речи, 5x быстрее аналогов, без галлюцинаций |
| [Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS) | Python / Alibaba | TTS нового поколения — 10 языков (вкл. русский), 49 голосов, 97ms задержка, клонирование голоса, 5 моделей | [![Stars](https://img.shields.io/github/stars/QwenLM/Qwen3-TTS?style=flat)](https://github.com/QwenLM/Qwen3-TTS) |
| [CosyVoice 3](https://github.com/FunAudioLLM/CosyVoice) | Python / Alibaba | Мини-TTS 0.5B — 9 языков (русский!), zero-shot клон голоса за 3 сек, 150ms стриминг, запускается на слабом железе | [![Stars](https://img.shields.io/github/stars/FunAudioLLM/CosyVoice?style=flat)](https://github.com/FunAudioLLM/CosyVoice) |
| [Frame](https://github.com/66HEX/frame) | Electron / FFmpeg | GUI-комбайн для видео — сжатие, конвертация, апскейл, русский язык, Win/Mac | [![Stars](https://img.shields.io/github/stars/66HEX/frame?style=flat)](https://github.com/66HEX/frame) |
| [Linly-Dubbing](https://github.com/Kedreamix/Linly-Dubbing) | Python / ML | AI-дубляж видео на 100+ языков — перевод речи, клон голоса, липсинк, авто-субтитры | [![Stars](https://img.shields.io/github/stars/Kedreamix/Linly-Dubbing?style=flat)](https://github.com/Kedreamix/Linly-Dubbing) |
| [Translumo](https://github.com/ramjke/Translumo) | C# / .NET | Перевод текста на экране в реальном времени — фильмы, игры, аниме. EN/JP/ZH/KO → RU, несколько движков | [![Stars](https://img.shields.io/github/stars/ramjke/Translumo?style=flat)](https://github.com/ramjke/Translumo) |
| [ACE-Step 1.5](https://github.com/ACE-Step/ACE-Step-1.5) | Python / ML | AI-генератор музыки — 10 сек на трек, до 10 мин длительность, 1000 инструментов, 50 языков, коммерческое использование | [![Stars](https://img.shields.io/github/stars/ACE-Step/ACE-Step-1.5?style=flat)](https://github.com/ACE-Step/ACE-Step-1.5) |
| [Comic-translate](https://github.com/ogkalu2/comic-translate) | Python | AI-перевод манги и комиксов — сохраняет шрифты и форматирование, нужен API (Gemini/OpenAI) | [![Stars](https://img.shields.io/github/stars/ogkalu2/comic-translate?style=flat)](https://github.com/ogkalu2/comic-translate) |
| [Final2x](https://github.com/EutropicAI/Final2x) | Python | AI-апскейлер изображений — восстановление деталей из пиксельных фото, Win/Mac/Linux | [![Stars](https://img.shields.io/github/stars/EutropicAI/Final2x?style=flat)](https://github.com/EutropicAI/Final2x) |
| [WhisperLiveKit](https://github.com/QuentinFuxa/WhisperLiveKit) | Python / FastAPI | Real-time STT с разделением спикеров — Whisper + diarization, WebSocket, 200+ языков, локально | [![Stars](https://img.shields.io/github/stars/QuentinFuxa/WhisperLiveKit?style=flat)](https://github.com/QuentinFuxa/WhisperLiveKit) |
| [MOSS-TTS-Nano](https://github.com/OpenMOSS/MOSS-TTS-Nano) | Python / OpenMOSS | TTS на CPU без GPU — 100M параметров, 20 языков (русский), 48 кГц, real-time, клонирование голоса | [![Stars](https://img.shields.io/github/stars/OpenMOSS/MOSS-TTS-Nano?style=flat)](https://github.com/OpenMOSS/MOSS-TTS-Nano) |
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

**iOS «Команды» VPN-trick** — авто-отключение VPN при открытии нужных приложений через Shortcuts → авто-включение при закрытии.

### Email-алиасы и одноразовые контакты

| Ресурс | Описание |
|--------|----------|
| [SimpleLogin](https://simplelogin.io/) | Email-алиасы — одноразовая почта на каждую регистрацию, при утечке просто удаляется |
| [Hide My Email (Apple)](https://support.apple.com/en-us/HT210425) | Алиасы Apple — встроены в iCloud+, прячут реальный email |
| [email-fake.com](https://email-fake.com/) | Временная почта (см. также «Тесты регистраций» в Подборке Eclipse) |

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
