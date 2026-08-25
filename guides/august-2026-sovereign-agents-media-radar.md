# Радар августа 2026: агенты, локальные инструменты и медиапроизводство

> Проверенный разбор новостной подборки от 25 августа 2026 года: что действительно умеют проекты, какие заявления преувеличены, какие лицензии ограничивают внедрение и куда идеи подходят в экосистеме Eclipse Forge.

## Модуль 1. Как читать этот радар

### Урок 1. Четыре редакционных решения

Каждый источник получает одно решение:

- **Внедрять сейчас** — идея закрывает уже существующий пробел и может быть реализована самостоятельно без небезопасного копирования.
- **В план** — полезный источник, но сначала нужен ограниченный пилот, сравнение или лицензионное согласование.
- **Справочник** — изучаем архитектуру, UX или учебные материалы; не подключаем проект к рабочей системе.
- **Не использовать** — риск, этика, лицензия или несоответствие заявленным возможностям перевешивают пользу.

Карточка в каталоге — не рекомендация слепо установить репозиторий. Перед любым пилотом фиксируем commit SHA, проверяем лицензию, зависимости, install scripts, сетевые обращения, телеметрию и границы доступа к данным.

### Урок 2. Главный итог

Самая сильная связка для наших продуктов — не один «суперагент», а пять совместимых принципов:

1. **Vercel Agent Harness** — безопасный цикл инструментов, approvals, sandbox, subagents и проверка результата.
2. **Buzz** — единый журнал событий, каналы людей и агентов, идентичности и аудит.
3. **Orca** — отдельный worktree на исполнителя, наблюдение, сравнение изменений и управляемое слияние.
4. **Codebase Memory MCP и Graft** — локальный структурный контекст кодовой базы вместо повторного чтения всего репозитория.
5. **Agency Agents и Rampstack Skills** — роли и навыки как проверяемые шаблоны, а не как безусловные полномочия.

Это напрямую ложится на Eclipse Chat / Jarvis и AI Office: runtime остаётся источником истины, Office показывает состояние, а каждый внешний шаг имеет preview, approval и receipt.

## Модуль 2. Командная работа людей и агентов

### Урок 1. Buzz: архитектурный ориентир для Eclipse Chat и AI Office

[Buzz](https://github.com/block/buzz) — open-source workspace от Block, где люди и агенты работают в общих комнатах. Подтверждены relay, каналы, треды, личные сообщения, canvases, media, search, audit log, desktop-приложение, CLI, ACP harness для Goose, Codex и Claude Code, YAML-workflows и Git events.

Что важно взять:

- подписанный event log как единый источник событий;
- отдельная идентичность агента и ограниченное членство в комнатах;
- один поиск по сообщениям, коду, запускам инструментов и approvals;
- представление Git-ветки как рабочей комнаты;
- локальный relay для self-hosted режима.

Что не подтверждено: это не «продукт Джека Дорси лично», а проект Block; настройка не сводится к пяти минутам — нужны Docker и актуальные Rust, Node, pnpm и `just`. Mobile clients и часть approval glue в README всё ещё отмечены как развивающиеся.

**Решение:** архитектурный пилот для Eclipse Chat и AI Office. Не переносить весь продукт; сначала реализовать совместимый внутренний event contract и agent identity model.

### Урок 2. Orca: понятная операционная модель параллельной разработки

[Orca](https://github.com/stablyai/orca) запускает Codex, Claude, OpenCode и Pi параллельно, изолирует работу через Git worktrees, показывает diff, поддерживает follow-up и мобильное наблюдение.

Для Eclipse AI Office берём не оболочку целиком, а workflow:

- задача создаёт изолированный worktree;
- сотрудник-агент получает ограниченный scope и бюджет;
- изменения отображаются как diff с аннотациями;
- пользователь сравнивает варианты и выбирает победителя;
- merge выполняется только после проверок и подтверждения.

**Решение:** внедрять в Office Core и Jarvis Control после threat model для shell, SSH, credentials и Git operations.

### Урок 3. Agency Agents и Rampstack Skills: библиотека ролей без магии

[Agency Agents](https://github.com/msitarzewski/agency-agents) содержит более 230 специализированных agent templates. [Rampstack Claude Skills](https://github.com/rampstackco/claude-skills) заявляет 103 готовых skills с `SKILL.md` и справочными файлами.

Они полезны как материал для нашего Capability Registry:

- роль описывает вход, выход и критерии готовности;
- skill декларирует нужные tools, network, filesystem и secrets;
- запрошенные права пересекаются с явно выданными правами хоста;
- внешние действия по умолчанию остаются read-only или требуют approval;
- версия шаблона и результаты проверок сохраняются в библиотеке.

Нельзя устанавливать весь каталог автоматически. Каждый skill проходит pin, license review, dependency scan, поиск удалённых инструкций и тест в sandbox.

**Решение:** выборочный импорт в Eclipse Library и Eclipse AI Hub; Agency Agents уже была в каталоге и обновляется без дубля.

## Модуль 3. Контекст кода и безопасный agent runtime

### Урок 1. Codebase Memory MCP против Graft

[Codebase Memory MCP](https://github.com/DeusData/codebase-memory-mcp) строит локальный граф кода, использует tree-sitter и предоставляет 15 MCP-инструментов. Заявлена поддержка 158 языков, но это синтаксические языки парсера, а не «158 человеческих языков». Маркетинговые цифры о сокращении токенов противоречат друг другу: на странице встречаются 99%, 120× и 10×, поэтому считаем их publisher benchmarks.

[Graft](https://github.com/trailhq/Graft) — новое каноническое расположение прежнего `NanoNets/Graft`. Он строит локальную архитектурную и символьную карту, умеет `--dry-run` и настраивает agent hooks. Формулировка «в четыре раза дешевле и в три раза быстрее» не подтверждается независимым тестом; в README приведены собственные показатели проекта: 46% меньше tool calls, 42% экономии токенов и 60% экономии времени.

Предлагаемый честный тест на Eclipse Chat:

1. Зафиксировать одинаковый commit и набор из 20 задач по навигации, impact analysis и поиску ошибок.
2. Сравнить baseline, Codebase Memory MCP и Graft по accuracy, latency, tokens, cold-start и объёму индекса.
3. Запретить чтение `.env`, ключей, dumps и пользовательских вложений.
4. Проверить telemetry и все создаваемые config/hooks до записи.
5. Оставить структурный слой детерминированным; генеративные summary считать только кэшем.

**Решение:** пилот обоих решений. Предварительно Codebase Memory подходит на роль структурного слоя, а Graft — опционального слоя резюме и навигации.

### Урок 2. Vercel Academy: каркас для Sentinel и Jarvis

[Build an AI Agent Harness](https://vercel.com/academy/build-ai-agent-harness) — официальный практический курс Vercel. Он охватывает ToolLoopAgent, `read/grep/write/edit/bash`, subagents, ask-user flow, sandbox abstraction, context pruning, lifecycle state, verification, event bus и progressive skills.

В наши проекты переносим принципы, а не облачную зависимость:

- typed tools вместо произвольных координатных действий;
- allowlist на уровне исполнения;
- preview и approval перед необратимым действием;
- отдельный sandbox adapter;
- лимиты времени, токенов, файлов и сети;
- проверка результата до статуса `done`;
- единый event stream для 2D/3D Office и мониторинга.

**Решение:** внедрять сейчас в Sentinel/Jarvis runtime и Office Core через собственные contracts и тесты.

## Модуль 4. Локальная медиастудия и 3D-интерфейсы

### Урок 1. WanGP: мощный worker с коммерческими ограничениями

[WanGP](https://github.com/deepbeepmeep/Wan2GP) — текущее имя проекта по прежнему URL Wan2GP. Подтверждены очереди, web UI, headless/API режим, LoRA, text-to-video, image-to-video и поддержка нескольких video/image/audio моделей.

Фраза «студия на 6 ГБ ОЗУ» некорректна: речь идёт о VRAM для отдельных моделей и конфигураций, а не о системной памяти и не обо всех pipelines. Главный стоп-фактор — [WanGP Community License 2.0](https://github.com/deepbeepmeep/Wan2GP/blob/main/LICENSE.txt): локальное использование и продажа результатов разрешены, но встраивание в платный продукт, SaaS, API, white-label или OEM требует отдельной коммерческой лицензии. У весов моделей остаются собственные условия.

**Решение:** изолированный локальный пилот для Eclipse Media и Shotforge; не встраивать в коммерческий backend без письменного разрешения.

### Урок 2. OpenMontage и Cliply: конвейер только для материалов с правами

[OpenMontage](https://github.com/calesthio/OpenMontage) объединяет research, сценарий, ассеты, монтаж и render. Код AGPL-3.0, поэтому сетевое и продуктовое использование требует отдельного лицензионного решения. Заявленные стоимость и качество — оценки автора, а не независимая гарантия.

[Cliply](https://github.com/Cliply/Cliply) — GPL-3.0 desktop-приложение на Electron, React, FastAPI, yt-dlp и FFmpeg. Оно поддерживает выбор качества, audio-only, playlist и trimming. Сайт подтверждает Windows и macOS, а Linux помечен как будущий; заявление «любая ОС» неверно.

Для Eclipse Media берём безопасную схему:

- импорт только собственных, лицензированных или явно разрешённых URL;
- allowlist источников, лимиты размера и времени;
- yt-dlp и FFmpeg в отдельном worker без secrets;
- provenance и license receipt на каждый asset;
- запрет обхода DRM, paywall и технических ограничений;
- карантин загруженных файлов и проверка MIME/codec.

**Решение:** OpenMontage — архитектурный reference, Cliply — reference для локального trim/download UX. Прямое закрытое встраивание не планировать без GPL/AGPL compliance.

### Урок 3. ThreeUI: 3D только там, где оно помогает

[ThreeUI Community](https://github.com/MengTo/threeui) содержит 50 parent components, 111 routes, 141 бесплатный variant и 23 singleton — всего 164 browse-result. Код MIT, шрифты OFL, но удалённые previews и thumbnails с threeui.com не входят в разрешение на распространение.

Подходящие места:

- Eclipse Library Animation Lab — отдельные проверяемые 3D-паттерны;
- Eclipse Forge landing и case studies — hero и narrative transitions;
- Jarvis Presence — лёгкое ambient-присутствие.

Неподходящие места: плотные таблицы, CRM, approvals и админка. Там 3D увеличит когнитивную нагрузку.

Перед внедрением обязательны reduced-motion, keyboard/focus states, lazy loading, GPU budget, mobile fallback и лицензирование каждого asset.

**Решение:** выборочный reference для Animation Lab и landing; не копировать Pro/Beta и remote assets.

## Модуль 5. Локальные данные, обучение и инфраструктура

### Урок 1. openGym: образец local-first персональных данных

[openGym](https://opengym.duarte-santos.ch/) — AGPL-3.0 fitness application с 1 324 упражнениями, Android-клиентом, self-hosted Docker, passkeys, export/import и offline-first подходом. Исходный GitHub-аккаунт автора был заблокирован, поэтому официальный сайт указывает новый канонический репозиторий в GitLab.

Для Jarvis ценны не медицинские советы, а модель данных:

- пользователь владеет историей и может экспортировать её;
- локальный read-only MCP запрашивает тренировки без права менять записи;
- health data имеет отдельное согласие, retention и encryption policy;
- аналитика не превращается в диагноз.

**Решение:** reference для будущего Personal Health модуля и локального read-only коннектора Jarvis. Не смешивать health data с общими логами чата.

### Урок 2. Robotics Coursework: учебная карта, а не архив курсов

[Robotics Coursework](https://github.com/mithi/robotics-coursework) — Unlicense-индекс ссылок на внешние курсы, лекции, книги, симуляторы и проекты. Он не содержит «все файлы MIT, Stanford и CMU»: доступность и лицензии каждого внешнего материала проверяются отдельно.

**Решение:** справочная curriculum map для Educator-AI и будущих simulation/robotics экспериментов Jarvis; прямой runtime integration не нужен.

### Урок 3. Render: демо, но не бесплатный production

[Render Free](https://render.com/docs/free) подходит для disposable demo и учебных проектов: бесплатный web service засыпает после 15 минут без трафика, пробуждается около минуты, имеет ephemeral filesystem и 750 free instance hours. Бесплатная PostgreSQL удаляется через 30 дней, а сам Render прямо пишет, что free resources не предназначены для production.

В актуальных [workspace limits](https://render.com/docs/new-workspace-plans) подтверждены до 25 services, 5 GB outbound bandwidth, 500 build minutes и 2 custom domains для Hobby workspace.

**Решение:** использовать для публичных учебных demo Educator-AI и временных previews. Не размещать production Eclipse, клиентские данные или stateful workers.

## Модуль 6. Серая зона: сохраняем знания, блокируем внедрение

### Урок 1. PhoneNumber-OSINT не делает того, что обещает пост

[PhoneNumber-OSINT](https://github.com/spider863644/PhoneNumber-OSINT) использует Python-пакет `phonenumbers`: определяет регион, оператора и часовой пояс, а также извлекает номера из локального текстового файла. В коде нет заявленного поиска по соцсетям, магазинам и мессенджерам.

Даже расширенный телефонный OSINT несёт риск доксинга, преследования и нарушения условий сервисов. Поэтому карточка хранится только как предупреждение.

**Решение:** не интегрировать и не рекомендовать агентам. Для defensive OSINT использовать отдельный правовой и этический процесс.

### Урок 2. FakeCam и CamLoop: технически возможно, продуктово неприемлемо

[FakeCam](https://www.fakecam.net/) и [CamLoop](https://camloop.app/) — проприетарные virtual camera utilities, а не open-source проекты. Новостной сценарий предлагает скрывать отсутствие на встрече, то есть вводить коллег и работодателя в заблуждение. [Условия CamLoop](https://camloop.app/terms) отдельно возлагают на пользователя ответственность за раскрытие и соблюдение правил платформы и организации.

**Решение:** не интегрировать. Единственная безопасная идея — прозрачный режим статуса «перерыв / недоступен» с согласованием команды, без имитации присутствия.

### Урок 3. Safety-reduced Qwen3.8: только изолированный red-team corpus

[AEON Qwen3.8-27B](https://huggingface.co/AEON-7/Qwen3.8-27B-AEON-ULTIMATE-UNCENSORED-BF16) и [orcarouter Qwen3.8-27B FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) — сторонние safety-reduced derivatives от [официальной Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B). Их карточки и поведенческие заявления принадлежат авторам derivatives, а не Qwen.

AEON прямо предупреждает о раннем draft, повторениях/зацикливании, слабой длинноконтекстной проверке и небезопасности production без downstream controls. Для полного контекста автор указывает примерно 140 GB GPU memory, поэтому лозунг «локальный монстр для всех» вводит в заблуждение.

**Решение:** не подключать к пользователям, сети, инструментам, секретам или автоматическим рекомендациям. Если понадобится исследование safety, использовать только синтетические fixtures в изолированной лаборатории Sentinel с ручным доступом и без внешних действий.

## Модуль 7. План внедрения в наши проекты

### Урок 1. Первые четыре вертикальных среза

#### 1. Code Context Pilot — Eclipse Chat / Jarvis

- Codebase Memory MCP и Graft на одинаковом commit.
- 20 versioned задач, baseline и одинаковые лимиты.
- Метрики: accuracy, latency, tokens, cold start, размер индекса, утечки.
- Результат: один approved structural context adapter.

#### 2. Safe Agent Harness — Sentinel / AI Office

- typed tools, sandbox adapter, quotas и cancellation;
- preview, approval, receipt и verification;
- state/events отделены от 2D/3D presentation;
- regression tests для каждого опасного действия.

#### 3. Agent Workspace — Eclipse Chat / AI Office

- Buzz-подобный signed event contract;
- agent identities и room memberships;
- Orca-подобные worktrees и diff review;
- единый поиск по chat, code, tools и approvals.

#### 4. Rights-safe Media Worker — Eclipse Media / Shotforge

- отдельный import/FFmpeg sandbox;
- provenance на каждый asset;
- OpenMontage-подобный pipeline state;
- WanGP только как лицензированная локальная опция;
- Cliply-подобный trim UX только для разрешённых материалов.

### Урок 2. Что не делать

- Не подключать весь сторонний каталог skills одной командой.
- Не доверять publisher benchmark без воспроизводимого теста.
- Не хранить API-ключи в renderer, `localStorage`, prompts или event log.
- Не давать visual/3D-слою права выполнять действия.
- Не смешивать health data, чаты и общую телеметрию.
- Не использовать free hosting как production SLO.
- Не превращать «без отказов» в критерий качества модели.
- Не скачивать или переиспользовать медиа без подтверждённых прав.

## Источники и дата проверки

Все карточки и ссылки проверены по официальным репозиториям, model cards, сайтам, лицензиям и документации 25 августа 2026 года. Число звёзд, набор функций, тарифы и статусы разработки меняются; библиотека хранит дату проверки и не использует популярность как доказательство безопасности или качества.
