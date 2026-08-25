# Production Agent References: разбор и применение в Eclipse Forge

Дата проверки: **23.08.2026**
Статус: официальные GitHub-источники проверены; установка и перенос кода не выполнялись.

## Короткий вывод

Эти три repository закрывают разные уровни и не заменяют друг друга:

| Источник | Сильная сторона | Как используем | Чего не делаем |
|---|---|---|---|
| [Agents Towards Production](https://github.com/NirDiamant/agents-towards-production) | Production checklist: Docker, FastAPI, memory, tracing, evals, guardrails, multi-agent | Reference для архитектурных пробелов AI Hub и Agent Office | Не переносим код/тексты в коммерческий Eclipse без письменного разрешения |
| [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | Системная учебная база по prompting, context, RAG и agents | Curriculum, prompt contracts и regression fixtures | Не считаем prompt заменой данным, evals и policy |
| [Awesome LLM Apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Большая коллекция запускаемых agent/RAG examples | Быстрый sandbox для проверки product pattern | Не подключаем всю коллекцию и production credentials |

## 1. Agents Towards Production

Repository содержит 28 code-first tutorials: stateful workflows, память, web search, Docker,
FastAPI, security, GPU deployment, browser automation, multi-agent coordination, tracing и
evaluation. Это полезнее обычной подборки «100 агентов», потому что внимание направлено на
границу между demo и эксплуатацией.

### Главная оговорка — лицензия

В repository действует **custom non-commercial license**. Она разрешает некоммерческое
использование с атрибуцией, но запрещает коммерческое использование без письменного разрешения.
Поэтому для Eclipse Forge допустимы:

- изучение тем и формирование собственного checklist;
- сравнение архитектур и постановка независимых экспериментов;
- ссылка на оригинальный tutorial;
- clean-room реализация общего инженерного принципа.

Нельзя считать допустимыми прямое копирование notebooks, кода, текста или графики в
коммерческие продукты Eclipse. Sponsor tutorial также не считается независимым подтверждением
качества соответствующего provider.

### Применение по проектам

- **Eclipse AI Hub:** tracing contract, eval datasets, provider isolation, memory lifecycle,
  timeout/cancel, budget и degraded mode.
- **Eclipse Chat / Agent Office:** server-owned lifecycle, human gate, event projection и receipts.
- **Hopson Sentinel:** security regression, runtime health, alert triage и incident evidence.
- **Educator-AI:** лабораторные работы «prototype → tested service» без переноса licensed code.

## 2. Prompt Engineering Guide

MIT-руководство полезно как единый словарь техник: zero/few-shot, structured prompting,
reasoning, RAG, agents, reliability и исследовательские ссылки. Его главная ценность для Eclipse —
не коллекция магических формулировок, а дисциплина сравнения подходов.

### Как внедряем

Каждый prompt становится versioned contract:

```text
task + trusted context + untrusted data boundary + allowed capabilities
-> bounded output schema -> citations/abstention -> eval fixtures -> cost/latency report
```

Техника принимается только если она улучшает заранее выбранные fixtures. Для reasoning не храним
скрытый chain-of-thought; продукт получает краткое проверяемое обоснование, evidence и результат.

### Применение по проектам

- **Educator-AI:** русскоязычная траектория prompt/context/RAG.
- **Growth OS:** evidence-backed research, claim extraction и abstention.
- **Eclipse Chat:** короткие task contracts и predictable output.
- **AI Hub:** prompt registry, eval version, model compatibility и rollback.

## 3. Awesome LLM Apps

Apache-2.0 collection содержит отдельные runnable projects: agent teams, RAG, local-model
variants, games, research, finance, legal, travel и другие сценарии. У каждого подпроекта есть
собственные README, requirements и runtime assumptions.

### Правильный способ использования

1. Выбрать **один** product gap Eclipse.
2. Найти минимальный example, который демонстрирует нужный pattern.
3. Прочитать его README, requirements, tool scopes, network calls и storage.
4. Запустить только в disposable sandbox с test key.
5. Зафиксировать, что реально работает, стоимость, ограничения и failure states.
6. Реализовать проверенный pattern внутри Eclipse design/security contracts.

Apache-2.0 repository не делает автоматически безопасными внешние SDK, models, datasets и
assets. Demo, который запускается, всё ещё может не иметь tenant isolation, idempotency, abuse
protection, recovery и production observability.

## Что переносим в AI Office

Первый рабочий слой AI Office строится без 3D-зависимости:

```text
Task / Run source of truth
  -> fixed role sequence and capability policy
  -> provider adapter chosen server-side
  -> concise events (not hidden reasoning)
  -> 2D operational projection
  -> human approval for external action
  -> immutable receipt
```

3D-office позже может визуализировать те же события, но не хранит состояние, не выдаёт права и
не становится единственным способом управления.

### Обязательные состояния агента

`idle · ready · working · waiting · blocked · degraded · completed · cancelled · error`

Статус всегда сопровождается текстом и timestamp; цвет и анимация не являются единственным
носителем смысла. Provider/model показываются только из runtime data, а не из декоративной карточки.

### Capability policy

- tool description и retrieved content считаются недоверенными данными;
- scope выдаёт server-owned registry по pinned identifier и metadata hash;
- URL fetch блокирует loopback, private network, metadata services и redirect-to-private;
- remote MCP требует auth, tenant check, audit и re-approval после изменения metadata;
- key находится server-side, не в prompt, browser storage или event stream;
- `read-only → draft → approval → scoped execute → receipt` остаётся общим контрактом.

## Дорожная карта внедрения

### Slice A — готово в текущей работе

- каталог из трёх evidence-first карточек;
- этот разбор с license/security boundaries;
- первый operational team projection в Growth Command Room на реальных run data;
- prompt preset pack и anti-vibe UI review.

### Slice B — следующий

- общий `office.run.v1` read model поверх Growth, Spec, Audit, Voice и Builder runs;
- department/role registry с owner, model capability, budget и approval policy;
- event normalization без prompt content и chain-of-thought;
- единый Command Inbox для blocked/waiting-approval событий.

### Slice C

- provider adapters OpenAI/Anthropic/Gemini/Ollama через Eclipse AI Hub;
- per-provider eval, latency, cost, retention и fallback policy;
- MCP registry с metadata pinning и scheduled poisoning/rug-pull scan.

### Slice D

- optional isometric/3D view с static fallback;
- progressive loading, reduced motion и keyboard-equivalent controls;
- no 3D-only action: любое решение доступно в спокойной 2D-панели.

## Acceptance criteria

- Runtime, а не картинка, определяет status и provider.
- Внешнее действие невозможно без preview и explicit approval.
- Любой tool имеет pinned provenance, минимальный scope и audit trail.
- Любой tutorial/example проходит отдельный license, dependency и secret review.
- Desktop и mobile проходят loading/empty/error/success/disabled/focus/reduced-motion QA.
