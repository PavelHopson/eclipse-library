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
- [🎮 GameDev](#-gamedev)
- [🎓 Компьютерные науки (MIT)](#-компьютерные-науки-mit)
- [📦 Наши проекты](#-наши-проекты)

---

## 🤖 AI & Claude Code

### ML Training & Research

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [autoresearch](https://github.com/karpathy/autoresearch) | Автономный AI-инженер от Андрея Карпаты — 100 тренировок модели за ночь, 630 строк кода, 1 GPU. Обучает, оптимизирует, сравнивает и улучшает нейросети 24/7 | [![Stars](https://img.shields.io/github/stars/karpathy/autoresearch?style=flat)](https://github.com/karpathy/autoresearch) |

### LLM роутинг и оптимизация

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [ClawRouter](https://github.com/BlockRunAI/ClawRouter) | Локальный LLM-роутер — 55+ моделей, <1ms роутинг по 15 параметрам, OpenAI-compatible API, профили auto/eco/premium, экономия до 92% | [![Stars](https://img.shields.io/github/stars/BlockRunAI/ClawRouter?style=flat)](https://github.com/BlockRunAI/ClawRouter) |
| [MetaClaw](https://github.com/aiming-lab/MetaClaw) | Meta-learning прокси — создаёт скиллы из диалогов, инжектит в промпт, опционально LoRA-дообучение (GRPO). 3 режима: skills_only / rl / auto | [![Stars](https://img.shields.io/github/stars/aiming-lab/MetaClaw?style=flat)](https://github.com/aiming-lab/MetaClaw) |

### Промпт-коллекции

| Ресурс | Описание |
|--------|----------|
| [9 промптов для презентаций](https://github.com/PavelHopson/eclipse-library#-промпт-коллекции) | План, хук, сценарий слайдов, упрощение, визуал из данных, убийство возражений, 1-слайд сводка, сюжетная арка, речь — встроены как пресеты в [Eclipse AI Hub](https://github.com/PavelHopson/eclipse-ai-hub) Copywriter |

### Генерация изображений

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [Awesome Nano Banana](https://github.com/PicoTrex/Awesome-Nano-Banana-images) | 110+ промптов для Google Nano Banana — манга, пиксель-арт, продуктовое фото, 3D, комиксы, миниатюры, LEGO, стиль-трансфер и др. | [![Stars](https://img.shields.io/github/stars/PicoTrex/Awesome-Nano-Banana-images?style=flat)](https://github.com/PicoTrex/Awesome-Nano-Banana-images) |

### AI Coding Agents

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [OpenCode](https://github.com/anomalyco/opencode) | Open-source AI coding agent — provider-agnostic (Claude/OpenAI/Google/локальные), client/server архитектура, remote с телефона, MCP + LSP, MIT | [![Stars](https://img.shields.io/github/stars/anomalyco/opencode?style=flat)](https://github.com/anomalyco/opencode) |

### Claude Code Channels (Telegram & Discord)

| Плагин | Описание |
|--------|----------|
| [Telegram Channel](https://github.com/anthropics/claude-plugins-official/blob/main/external_plugins/telegram/README.md) | Официальный MCP-мост Telegram ↔ Claude Code — управляй агентом с телефона 24/7, файлы до 50MB, pairing + allowlist |
| [Discord Channel](https://github.com/anthropics/claude-plugins-official/blob/main/external_plugins/discord/README.md) | Официальный MCP-мост Discord ↔ Claude Code — треды, история (100 сообщений), файлы до 25MB, реакции |

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

## 🛠️ Dev Tools & CLI

| Проект | Стек | Описание |
|--------|------|----------|
| [LocalSend](https://github.com/localsend/localsend) | Flutter/Dart | Передача файлов по локальной сети без интернета — HTTPS, P2P discovery, все платформы | [![Stars](https://img.shields.io/github/stars/localsend/localsend?style=flat)](https://github.com/localsend/localsend) |
| [GitHub Store](https://github.com/OpenHub-Store/GitHub-Store) | Kotlin/Compose | App Store для GitHub — установка софта из Releases в 1 клик, авто-обновления, Android/Win/macOS/Linux | [![Stars](https://img.shields.io/github/stars/OpenHub-Store/GitHub-Store?style=flat)](https://github.com/OpenHub-Store/GitHub-Store) |
| [Eclipse Claw](https://github.com/PavelHopson/Eclipse-Claw) | Rust | Высокопроизводительный веб-парсер — CLI + API |

---

## 🎬 Media & Download

| Проект | Стек | Описание |
|--------|------|----------|
| [Eclipse Media](https://github.com/PavelHopson/eclipse-media) | React 19 + FastAPI | Self-hosted загрузчик видео/аудио — 1000+ сайтов, SSE прогресс, TTL |
| [Reclip](https://github.com/averygan/reclip) | Python + Flask | Оригинальный минималистичный загрузчик (вдохновение для Eclipse Media) |
| [TADA](https://huggingface.co/collections/HumeAI/tada) | Python / HuggingFace | Open-source TTS — до 700 сек экспрессивной речи, 5x быстрее аналогов, без галлюцинаций |
| [WhisperLiveKit](https://github.com/QuentinFuxa/WhisperLiveKit) | Python / FastAPI | Real-time STT с разделением спикеров — Whisper + diarization, WebSocket, 200+ языков, локально | [![Stars](https://img.shields.io/github/stars/QuentinFuxa/WhisperLiveKit?style=flat)](https://github.com/QuentinFuxa/WhisperLiveKit) |

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

**Eclipse Chat — планируемый стек:**
```
Backend:  Node.js · Fastify · Socket.io · Prisma · PostgreSQL · Redis
Frontend: React 19 · TypeScript · Vite · Tailwind CSS 4 · Zustand
Файлы:    MinIO (self-hosted S3)
Инфра:    Docker Compose · Caddy
```

---

## 🎮 GameDev

### AI Game Studio

| Проект | Описание | Звёзды |
|--------|----------|--------|
| [Claude Code Game Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | 49 AI-агентов = виртуальная игровая студия — директора, дизайнеры, программисты, QA. 72 команды, 39 шаблонов (GDD, ADR), Godot 4 / Unity / UE5 | [![Stars](https://img.shields.io/github/stars/Donchitos/Claude-Code-Game-Studios?style=flat)](https://github.com/Donchitos/Claude-Code-Game-Studios) |

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

---

<div align="center">
<sub>Eclipse Forge · Обновляется по мере находок</sub>
</div>
