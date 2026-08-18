# August 2026 research, privacy and tooling radar

Проверено: 18.08.2026. Источники: официальные сайты, GitHub API, repository license files, model cards и Steam product API. Новостные формулировки не считаются evidence.

## Результат приёма

Из 21 находки:

- 8 новых карточек добавлены: Firecrawl PDF Inspector, Qwen3.8-Max, Qwen3.8-27B, Porthole, After Enter, Text Grab, Morphe и PC-Tuning;
- 12 находок уже были в Library и не продублированы: Agent Reach, Claude SEO, Echoed, Waku Agent, RepoWise, nodumbmode, Grok Imagine, Roamers, TabiToken, Diagram Design, Learn Harness Engineering и DeepSeek Harness;
- 1 находка исключена из каталога: Claude Watermark Remover — нет официального подтверждения Anthropic о существовании заявленных «криптометок», а продукт продвигает сокрытие происхождения текста.

## Что подтверждено, а что исправлено

| Находка | Подтверждённый смысл | Что исправлено в новости | Решение |
|---|---|---|---|
| Agent Reach | MIT orchestration skill для нескольких web/social connectors | Не даёт гарантированный доступ «ко всему интернету»; cookies, proxy и fallback меняют privacy/ToS boundary | Оставить reference; использовать собственный Eclipse Webclaw connector registry |
| Claude SEO | MIT набор SEO skills/agents и команд | Число модулей не доказывает качество; write-операции нельзя запускать без preview и approval | Внедрить read-only audit в Eclipse Growth OS |
| Echoed | Реальный cross-platform gaming messenger | «В 5 раз меньше RAM» — сравнительное заявление сервиса, не наш независимый benchmark | Reference для Eclipse Chat performance budget |
| Waku Agent | Локальный Python agent loop с SQLite memory и несколькими interfaces | «Саморазвитие» не означает безопасное автономное изменение skills | Reference для Sentinel memory/evaluation loop |
| Firecrawl PDF Inspector | MIT Rust parser/classifier с Node, Python, WASM и CLI bindings | Benchmark 200 PDF выполнен на конкретном corpus и Apple M4 Pro; это не универсальные 0,002 секунды на страницу | Внедрить сейчас через изолированный benchmark |
| Qwen3.8-Max | Официальная cloud model family Qwen | 10 дней автономной работы — не SLA; benchmark и 2,4T parameters являются vendor disclosure | Roadmap: AI Hub provider benchmark |
| Porthole | Бесплатный Steam proxy выбранных TCP/UDP ports | Это не замена всей LAN/VPN; открывается конкретный listener | Reference для закрытых DnD playtests |
| After Enter | Интерактивный русско-английский разбор browser request path | В repository нет license grant: код, JSON и иллюстрации нельзя переносить | Reference для оригинального Educator-AI lesson |
| RepoWise | AGPL codebase intelligence и dependency graph | Экономия 96% tokens и 36% стоимости не принимается без воспроизводимого Eclipse benchmark | Reference; сравнить с нашим repository map |
| Morphe | GPL Android APK patcher и community ecosystem | Open-source license не даёт право обходить Terms и распространять модифицированные proprietary apps | Не использовать; grey/security reference |
| nodumbmode | Набор четырёх agent skills без license file | Публичный SKILL.md не даёт права копировать его в продукт | Reference идей; формулировать собственные policies |
| Grok Imagine | Официальная xAI image-generation capability | Название «Imagine Image 2.0» и место в Arena не являются стабильным product contract | Roadmap: controlled image benchmark |
| Roamers | Personalized GitHub discovery feed | Авторизация расширяет OAuth/privacy boundary и не гарантирует качество рекомендаций | Reference для Library discovery UX |
| TabiToken | Сторонний API proxy с промо-кредитом | Владелец, upstream routing, retention, Terms/DPA и model identity не подтверждены | Не использовать |
| Text Grab | MIT local Windows OCR utility | Локальность снижает cloud exposure, но screen/clipboard capture остаётся чувствительным permission | Roadmap: opt-in Sentinel OCR capability |
| Diagram Design | MIT skill, который создаёт self-contained HTML diagrams | HTML нужно sanitise и проверять; skill не заменяет design contract | Внедрить через Eclipse Diagram Contract |
| Claude Watermark Remover | Сторонний web service | Anthropic не подтверждает наличие удаляемой текстовой watermark; цель связана с сокрытием происхождения | Исключить |
| Learn Harness Engineering | MIT course на 13 lessons | Курс — учебный reference, а не доказательство надёжности конкретного harness | Внедрить в Educator-AI track |
| Qwen3.8-27B | Официальная Apache-2.0 27B vision-language model, native context 262k | RTX 3090 не является универсальной системной рекомендацией: нужны quantization, offload и измерения | Roadmap: local model benchmark + Hardware Doctor |
| DeepSeek Harness | MIT extensible agent environment | Community plugins нельзя считать доверенными только из-за популярности; цифры stars и plugins быстро меняются | Sandbox-only roadmap |
| PC-Tuning | GPL guide по Windows и hardware tuning | «100 пунктов» не являются безопасным one-click recipe; часть изменений затрагивает BIOS, registry и security | Reference, только read-only diagnostics |

## Приоритеты внедрения

### P1 — внедрить сейчас

#### Firecrawl PDF Inspector adapter — M

- Проблема: AI Hub, Library и Educator-AI тратят время и OCR-cost одинаково на текстовые и сканированные документы.
- Проект: Eclipse AI Hub ingestion service; затем Educator-AI и Eclipse Library.
- Сценарий: пользователь загружает PDF, система показывает тип документа, confidence и способ обработки до индексации.
- Разработка: pinned parser worker, malware scan, limits по bytes/pages/time/memory, per-page provenance, fallback на существующий OCR.
- Ценность: ниже latency/cost и понятнее причины плохого extraction.
- Риски: native parser, malformed PDF, тихое повреждение таблиц/цифр, optional OCR supply chain.
- Следующий шаг: frozen corpus из 50–100 публичных PDF, golden Markdown и сравнительный report success/latency/memory.

#### Claude SEO read-only audit — M

- Проблема: продвижение Eclipse Forge выполняется отдельными ручными проверками без единой доказательной очереди.
- Проект: Eclipse Growth OS, Landing и Library.
- Сценарий: Researcher собирает crawl evidence, SEO specialist формирует issues, Claim Auditor проверяет рекомендации, пользователь утверждает изменения.
- Разработка: allowlisted crawl, immutable evidence snapshot, severity/impact/confidence, preview diff; никаких автономных публикаций и backlink outreach.
- Ценность: регулярный SEO audit с измеримым backlog вместо «магических» советов.
- Риски: внешние SEO APIs, неверная причинность, массовые low-value pages.
- Следующий шаг: один read-only baseline для Landing и Library, затем вручную выбрать три проверяемых исправления.

#### Educator-AI harness learning track — S

- Проблема: знания об agent harness, state, limits и recovery разрознены.
- Проект: Educator-AI.
- Сценарий: ученик проходит lesson → выполняет безопасное задание → сдаёт artifact и объясняет ограничения.
- Разработка: оригинальные конспекты, quiz, lab fixtures и rubric на основе официальных источников и Learn Harness; не копировать материалы без соблюдения MIT attribution.
- Ценность: практическое обучение управляемой agent engineering.
- Риски: курс быстро устаревает, задания могут подтолкнуть к опасным permissions.
- Следующий шаг: первый модуль «State, budget, stop condition, approval gate» с локальным toy-agent.

### P1 — добавить в roadmap

#### AI Hub Qwen3.8 benchmark — M

- Проблема: router не знает реальную цену и success rate новых Qwen моделей на Eclipse tasks.
- Проект: Eclipse AI Hub, затем Sentinel и oh-my-claudecode.
- Сценарий: оператор выбирает benchmark pack, видит точный provider/model ID, retention boundary, стоимость, latency и artifact score.
- Разработка: две разные entries — cloud Qwen3.8-Max и self-host Qwen3.8-27B; frozen prompts, deterministic validators, spend/time caps.
- Ценность: решение о provider routing на измерениях, а не рейтингах из соцсетей.
- Риски: data egress, changing endpoints, vendor benchmarks, GPU cost.
- Следующий шаг: 20 repository tasks + 10 multimodal tasks; никаких production secrets.

#### Sentinel local OCR capture — M

- Проблема: пользователь не может передать текст из legacy UI без облачного screenshot upload.
- Проект: Hopson Sentinel.
- Сценарий: пользователь явно выбирает область, видит local OCR preview и redaction, затем подтверждает передачу в agent context.
- Разработка: user-gesture only, visible capture indicator, secret detector, no background recording, audit entry and one-click clear.
- Ценность: быстрее работать с desktop apps при меньшем cloud exposure.
- Риски: passwords/PII in screen and clipboard, OCR mistakes, accessibility permissions.
- Следующий шаг: threat model и prototype на synthetic screen fixtures; Text Grab использовать как UX/reference, не встраивать binary.

### P2 — reference и ограниченные pilots

- Porthole: только закрытые playtests Eclipse DnD Forge на disposable game host; complexity S; не часть production architecture.
- After Enter: внешний lesson link и оригинальный интерактивный модуль Educator-AI; complexity M; не копировать source/content без license.
- Echoed: замерить memory/startup/voice metrics Eclipse Chat против целевых budgets; complexity M.
- Waku Agent: взять идею видимого evaluate-memory loop для Sentinel, но запретить self-modifying skills; complexity M.
- RepoWise: benchmark repository map на трёх Eclipse repos; AGPL не смешивать с proprietary modules; complexity M.
- Roamers: взять onboarding и discovery feedback, но не добавлять GitHub OAuth до privacy review; complexity S.
- PC-Tuning: только terminology/read-only health checks в Hardware Doctor; complexity S.

## Запрещённые автоматизации

- нет автоматической установки tools/skills прямо из Library;
- нет импорта browser cookies, primary social sessions или production API keys;
- нет автономной публикации, backlink outreach, изменения рекламы или бюджета;
- нет открытия RDP, databases, Docker API, dashboards и unauthenticated services через Porthole;
- нет загрузки patched APK, community Morphe bundles или обхода paid features;
- нет отправки OCR/screen content в model до local preview, redaction и user approval;
- нет доверия vendor benchmark без зафиксированного harness, model ID, dataset и повторяемого результата.

## Security acceptance criteria

1. Любой parser/browser/OCR/agent работает в отдельном process или container с минимальным filesystem и network access.
2. Внешние inputs имеют size, time, memory, concurrency и decompression limits.
3. Tool output считается untrusted data, а не instructions; prompt injection не получает shell, secrets или write permissions.
4. Все model/provider calls записывают exact model ID, endpoint class, data classification, cost and approval decision без содержимого secrets.
5. Любой third-party skill фиксируется по commit SHA и проходит static source/manifests/workflow review; глобальная установка запрещена.
