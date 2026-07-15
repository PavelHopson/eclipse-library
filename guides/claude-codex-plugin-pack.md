# Claude Code + Codex plugin pack

> Практический разбор 6 плагинов с `vibecodd-skills`: что они делают, где реально работают
> в Claude Code и Codex, и как применять без магического мышления.

## Короткий вывод

| Инструмент | Простыми словами | Codex-статус | Что делаем у нас |
|---|---|---|---|
| `skill-creator` | Конструктор навыков: создать, улучшить, проверить и сравнить skill | Встроен | Используем `$skill-creator`, Anthropic-плагин отдельно не нужен |
| `superpowers` | Дисциплина разработки: brainstorm -> plan -> implement, TDD, YAGNI, DRY | Работает | Ставим как skills-набор для сложных задач и планов |
| `caveman` | Сжимает ответы в короткий технический стиль и экономит output-токены | Работает | Уже стоит; включать только для внутренних summaries, не для финального текста |
| `context mode` | Большие логи и снапшоты превращает в сводки, чтобы не забивать контекст | Частично | В Codex это ручной MCP-инструмент, без автоматического PreToolUse hook |
| `claude-seo` | SEO-аудитор: technical SEO, Schema, GEO/AEO, локальное и e-commerce SEO | Частично | Ставим skills, но сложные аудиты идут последовательнее, чем в Claude Code |
| `security guidance` | Фоновый security-review на edit/model turn/commit/push | Не работает как плагин | В Codex заменяем нашим AI Code Shield + security skills |

## 1. skill-creator

Нужен, когда мы хотим не просто написать промпт, а оформить повторяемый навык для агента.

Использование:

```text
$skill-creator
```

Когда применять:

- Если один и тот же workflow повторяется в нескольких проектах.
- Если нужна короткая инструкция, которую Codex будет подхватывать сам.
- Если надо превратить удачный ручной процесс в `SKILL.md`.

Ограничение: eval/benchmark из Anthropic-версии завязаны на orchestration Claude Code. В Codex используем встроенный authoring-flow.

## 2. superpowers

Нужен, когда задача легко расползается: много файлов, неопределённые требования, риск сделать лишнее.

Что даёт:

- Сначала уточнить проблему.
- Потом написать план.
- Потом выполнять маленькими шагами.
- Не тащить dependency и архитектуру без причины.

Codex-install:

```powershell
git clone https://github.com/obra/superpowers.git C:\Users\garaa\.codex\superpowers
New-Item -ItemType Junction -Path C:\Users\garaa\.agents\skills\superpowers -Target C:\Users\garaa\.codex\superpowers\skills
```

Когда применять:

- Крупный refactor.
- Новый модуль.
- Задача с неясным продуктовым поведением.
- Тест-first bugfix, где важно не сломать соседние сценарии.

## 3. caveman

Нужен не для “красивого ответа”, а для дешёвых внутренних циклов агента.

Что делает:

- Режет воду.
- Сжимает intermediate summaries.
- Оставляет техническую суть.

Codex-install:

```bash
npx skills add https://github.com/juliusbrussee/caveman --skill caveman
```

Правило Eclipse Forge: не включать caveman в финальных отчётах пользователю, UI-copy, продажных текстах и объяснениях, где важны тон и доверие.

## 4. context mode

Нужен, когда инструмент возвращает огромный лог, Playwright snapshot, API dump или build output.

В Claude Code это мощнее: MCP + PreToolUse hook автоматически перехватывает большие outputs.

В Codex статус частичный:

- MCP можно подключить.
- `batch_execute` и `search` доступны вручную.
- Автоматического перехвата всех tool outputs нет.

Codex MCP пример:

```toml
[mcp_servers.context-mode]
command = "npx"
args = ["-y", "context-mode"]
```

Решение для нас: включать точечно после benchmark. Не надо глобально менять MCP-конфиг ради одной потенциальной экономии.

## 5. claude-seo

Нужен для аудита сайтов и лендингов: technical SEO, Schema.org, GEO/AEO, локальное SEO, e-commerce SEO.

Codex-install:

```powershell
git clone https://github.com/AgriciDaniel/claude-seo.git C:\Users\garaa\.codex\claude-seo
New-Item -ItemType Junction -Path C:\Users\garaa\.agents\skills\claude-seo -Target C:\Users\garaa\.codex\claude-seo\skills
```

Когда применять:

- EclipseForgeLanding перед релизом.
- `library.eclipse-forge.ru` после крупных изменений навигации.
- Kwork / client landing pages.
- Страницы продуктов с AI Search / GEO / Schema requirements.

Ограничение: original plugin рассчитан на много параллельных Claude Code subagents. В Codex навыки полезны, но аудит может идти медленнее и последовательнее.

## 6. security guidance

Нужен как автоматический фоновой security-review в Claude Code.

В Codex он недоступен как полноценный plugin, потому что зависит от hook-системы Claude Code.

Наш Codex-заменитель:

- `AI Code Shield / ЩИТ` перед commit/push/deploy.
- Установленные `Anthropic Cybersecurity Skills`.
- Точечные security skills под изменённую поверхность: auth, uploads, API, WebSocket, secrets, CI/CD.

Перед публикацией:

```text
Прогони проект по навыкам безопасности: найди уязвимости, покажи список по критичности от critical до low, исправь critical/high и объясни простыми словами, что было не так.
```

## Бонус: Trail of Bits skills

Эталонный defensive-набор для security research: CodeQL/SARIF, audit-context-building, insecure defaults, variant analysis, differential review.

Codex-install из репозитория:

```bash
git clone https://github.com/trailofbits/skills.git ~/.codex/trailofbits-skills
~/.codex/trailofbits-skills/.codex/scripts/install-for-codex.sh
```

Решение для нас: держать как следующий security-layer после уже установленного `Anthropic Cybersecurity Skills`, не смешивать без аудита Loopy/SkillSpector.

## Бонус: Sentry MCP

Нужен не для написания кода, а для диагностики production: issues, traces, spans, crash analytics, Seer-разбор.

Codex MCP:

```bash
codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp
```

Решение для нас: подключать только когда есть Sentry-проект и OAuth-доступ. Не включать глобально “на всякий случай”.

## Claudish

`Claudish` - это не skill Codex, а CLI для Claude Code: он проксирует запросы через локальный Anthropic-compatible сервер и даёт использовать OpenRouter, Gemini, OpenAI, Kimi, GLM, OllamaCloud, Ollama, LM Studio и другие провайдеры.

Зачем нам:

- R&D альтернативных моделей для coding tasks.
- Сравнить Gemini / GPT / GLM / local models на одном интерфейсе Claude Code.
- Держать BYOK-подход: свои ключи, понятная стоимость, без серых прокси.

Быстрый запуск без установки:

```bash
npx claudish@latest --model openrouter@anthropic/claude-3.5-sonnet "review this repo"
```

Глобальная установка:

```bash
npm install -g claudish
```

Важно: это не заменяет Codex-встроенные модели и не должно получать секреты/production-код без отдельного privacy review провайдера.

## i-want-fable

`i-want-fable` - не installable skill, а reference-лендинг “креативные сайты на Claude”.

Как использовать:

- Как moodboard для необычных лендингов.
- Как reminder: не копировать шаблон SaaS-карточек, а искать визуальную идею.
- Для EclipseForgeLanding / Eclipse Chat landing / portfolio pages как источник композиционных ходов.

Не использовать как доказательство существования “Fable 5” или как production prompt leak.

## Наш install-status

| Пункт | Статус |
|---|---|
| `skill-creator` | Уже встроен в Codex |
| `skill-installer` | Уже встроен в Codex |
| `caveman` | Уже установлен |
| `superpowers` | Добавлен как `.agents/skills/superpowers` |
| `claude-seo` | Добавлен как `.agents/skills/claude-seo` |
| `security skills` | Уже есть большой набор в `.agents/skills` |
| `context-mode` | Не включён глобально, только reference |
| `Sentry MCP` | Не включён без проекта/OAuth |
| `Claudish` | Использовать через `npx` или отдельную npm-установку |

## Источники

- [Vibecodd Skills](https://vibecodd-skills.vercel.app/)
- [superpowers](https://github.com/obra/superpowers)
- [claude-seo](https://github.com/AgriciDaniel/claude-seo)
- [Trail of Bits skills](https://github.com/trailofbits/skills)
- [Claudish](https://github.com/MadAppGang/claudish)
- [i-want-fable](https://i-want-fable.vercel.app/)
