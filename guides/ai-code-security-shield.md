# AI Code Shield / ЩИТ

> Pre-release security gate для AI-сгенерированного кода. Цель простая:
> перед публикацией проекта агент обязан найти типовые уязвимости, разложить
> их по критичности, исправить critical/high в нашем коде и объяснить результат
> человеческим языком.

## Что ставим

Базовый источник:

- [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)

По README репозитория: 817 structured cybersecurity skills, 29 security domains, 6 framework mappings,
Apache 2.0, agentskills.io standard, Claude Code / GitHub Copilot / Codex CLI / Cursor / Gemini CLI
и 20+ совместимых платформ.

Важная оговорка: это community project, не официальный Anthropic. Внутри есть dual-use техники,
поэтому применять только для своих проектов, разрешённых аудитов, defensive review и обучения.

## Установка

Рекомендуемый путь:

```bash
npx skills add mukul975/Anthropic-Cybersecurity-Skills
```

Если агент работает в Claude Code и нужно без ручного CLI:

```text
Установи навыки безопасности из
https://github.com/mukul975/Anthropic-Cybersecurity-Skills
следуя README репозитория. Перед установкой проверь README, LICENSE,
SECURITY.md и не подключай опасные хуки без отдельного подтверждения.
```

## Команда проверки перед публикацией

Использовать перед deploy, релизом, merge в production branch или публикацией клиентского результата:

```text
Прогони проект по навыкам безопасности.

Цель: defensive pre-release audit только для текущего репозитория.

Найди уязвимости и покажи список по критичности:
critical, high, medium, low.

Для каждой находки укажи:
- файл и строку;
- что именно опасно;
- как это может сломать продукт или открыть доступ;
- как исправить;
- как проверить исправление.

Исправь critical и high, если это безопасно сделать локально.
Не выполняй destructive-команды, внешние атаки, сканирование чужих целей,
эксплуатацию уязвимостей, перебор паролей или сетевые действия без явного разрешения.

После исправлений запусти доступные проверки проекта:
typecheck, lint, tests, build или ближайшие эквиваленты.

В конце дай короткий отчёт простым языком:
что было не так, что исправлено, что осталось проверить вручную.
```

## Формат отчёта

Агент должен возвращать не “всё ок”, а проверяемый отчёт:

| Severity | Что требует |
|---|---|
| Critical | Исправить до публикации. Если нельзя исправить сразу - блокировать release и объяснить риск |
| High | Исправить до merge/deploy или явно принять риск |
| Medium | Запланировать fix, если не влияет на релизный путь |
| Low | Записать как hardening / cleanup |

Минимальный output:

```text
Security Shield Result

Status: pass / blocked / pass with warnings
Checked scope: current repository
Critical: 0
High: 0
Medium: N
Low: N

Fixed:
- ...

Needs manual review:
- ...

Verification:
- npm run build: pass
- tests: pass / not available
```

## Что проверять в первую очередь

- Auth и session handling.
- API endpoints и permission checks.
- Secrets, `.env`, tokens, logs.
- SQL/NoSQL injection.
- XSS, HTML injection, dangerous markdown rendering.
- SSRF, arbitrary URL fetch, file upload.
- Path traversal и unsafe file access.
- Command injection и shell execution.
- WebSocket / realtime permissions.
- CORS, cookies, CSRF.
- Dependency and supply-chain risk.
- AI-specific risks: prompt injection, tool poisoning, unsafe agent actions, MCP permissions.

## Где применяем в Eclipse

| Проект | Как использовать |
|---|---|
| Eclipse Chat | Перед каждым deploy: auth, uploads, WebSocket, LiveKit, roles, AI routes, memory/actions |
| Eclipse AI Hub | Security module, RAG uploads, provider keys, prompt injection, tool permissions |
| Hopson Sentinel | Safety shell, command execution, local memory, remote control, workstation doctor |
| EclipseForgeLanding | Forms, contact flows, external links, embedded scripts, asset handling |
| Eclipse Library | External links, grey-zone пометки, prompt safety, no unsafe instructions |
| oh-my-claudecode | Audit skills/MCP/hooks before installing or publishing |

## Guardrails

- Не запускать по чужим доменам, IP, аккаунтам и API без письменного разрешения.
- Не превращать skill-pack в автоматический exploit-tool.
- Не хранить реальные токены, cookies, дампы и персональные данные в отчётах.
- Не устанавливать весь security-stack поверх проекта вслепую: сначала README, LICENSE, SECURITY.md.
- Для community skills использовать SkillSpector / Loopy, если подключаем их в постоянный workflow.

## Решение по умолчанию

Для всех AI-сгенерированных проектов Eclipse Forge:

1. Перед публикацией запускаем AI Code Shield.
2. Critical/high блокируют release.
3. Medium/low идут в backlog, если не ломают релизный путь.
4. Отчёт сохраняем в PR / roadmap / release notes.
