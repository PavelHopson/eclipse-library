# July 2026 music / agents / tooling radar

Дата проверки: **30.07.2026**

Источник пачки: Telegram «Eclipse Hopson», сообщения 24–30.07.2026.

## Результат intake

- Получено 19 сообщений; ссылки и claims разделены на самостоятельные находки.
- В каталог добавлено 11 новых проверенных материалов.
- SongGeneration Studio, ODS и beautify-github-readme уже были опубликованы и не продублированы.
- Пять материалов отклонены: снятие model safeguards, каталог чужих открытых inference servers,
  непроверенный coupon-abuse prompt, novelty desktop-pet prompt и тестовая Kimi-K3-0.40B,
  ошибочно представленная как полезная компактная модель.
- Проверка выполнялась по официальным product pages, help/docs, model cards и canonical repositories.
- Сторонние installers, binaries, models и agent skills не запускались; выполнен статический review.

## Решения по применимости

| Находка | Решение | Проблема и сценарий | Проект / что разработать | Ценность | Сложность / приоритет | Риски и зависимости | Следующий шаг |
|---|---|---|---|---|---|---|---|
| Claude Code in Action | **Внедрить сейчас** | Команде нужен общий базовый уровень по context, hooks, MCP, SDK и GitHub integration | Все dev-репо: пройти официальный курс и превратить уроки в короткий internal checklist | Меньше случайных agent-настроек и опасных hooks | S / **P1** | Нужна регистрация; курс Anthropic-specific | Пройти курс на одном аккаунте и выписать только применимые к нашим workflows правила |
| Skillcheck | **Внедрить сейчас** | Нельзя судить о пользе SKILL.md по красивому описанию | oh-my-claudecode, ai-setup, Sentinel: A/B pilot на 3 публичных skills с одинаковыми задачами и моделью | Убирает placebo/harmful skills и измеряет token overhead | S / **P1** | Model/judge bias, API cost, skill и outputs уходят провайдеру | Запустить pinned CLI на синтетических задачах без private code и сохранить raw JSON |
| Lightpanda | **Добавить в roadmap** | Chromium дорог по RAM/CPU для массового research и browser agents | Eclipse Webclaw, Kwork #18, Sentinel: optional JS-rendering backend за существующим fetch interface | Больше параллельных страниц при меньшем resource budget | M / **P1** | Beta, неполный Web API, AGPL-3.0, telemetry default, untrusted web content | Сравнить 100 representative pages с Playwright по success rate, p95, RAM и extraction quality |
| Claude Video | **Добавить в roadmap** | Видео трудно искать и конспектировать без полного просмотра | Eclipse Media, Educator-AI, AI Hub: transcript-first pipeline, scene frames и timestamped summary | Быстрее обучение, bug-video triage и media research | M / **P1** | yt-dlp/ToS/copyright, URL download surface, ffmpeg, audio уходит Groq/OpenAI при fallback | Сделать isolated worker на 10 разрешённых роликах; Whisper fallback только opt-in |
| Google Flow Music / Lyria | **Добавить в roadmap** для API, service оставить reference | Нужны легальные soundtrack, ambience и короткие musical loops | Eclipse Media, DnD Forge, Shotforge: server-side Lyria 3 API adapter, provenance и export metadata | Новые media-сценарии без локальной тяжёлой модели | M / **P1** | Credits/regions, Google account, copyrights, SynthID, consumer Flow Music не является API | Сравнить Clip/Pro на 20 prompts и проверить pricing, RU lyrics, права и disclosure |
| Jcode | **Добавить в roadmap** | Нужен benchmark лёгкого multi-session harness с memory/swarm | Sentinel и oh-my-claudecode: isolated harness comparison, не замена default CLI | Идеи для cheap sessions, resume, memory и conflict-aware swarms | M / **P2** | Широкий доступ к repo/OAuth, hooks/MCP, self-dev, telemetry и sponsored discovery | Собрать из pinned source в sandbox, отключить telemetry/discovery и прогнать одинаковый coding eval |
| MengTo Skills | **Добавить в roadmap** | DnD/browser games не хватает повторяемого процесса camera/combat/VFX/audio/QA | Eclipse DnD Forge: выбрать 3 из 17 GameDev skills, адаптировать к текущей архитектуре и design system | Меньше пропущенных gameplay/QA слоёв | M / **P2** | Skill instructions являются supply-chain; 118 skills нельзя ставить wholesale | Аудировать `author-game-levels`, `test-playable-web-games`, `build-game-audio-feedback` по одному |
| FluentTweaker | **Не использовать** в продукте | Нужен прозрачный Windows tweak UI, но автоматические registry/policy/app изменения слишком рискованны | Hopson Sentinel: только UX reference для preview/diff/undo | Полезный паттерн объяснения последствий до действия | S / **P3** | Нет явной лицензии, destructive registry/app changes, PowerShell plugin store, Defender/update risks | Не запускать на рабочей машине; для личной проверки — disposable VM + snapshot + ручной diff scripts |
| Paranoia Privacy Wiki | **Оставить как reference** | Privacy-советы часто обещают магическую анонимность без threat model | Library security education, Chat/Sentinel privacy copy: threat-model-first объяснения | Лучше объясняет границы VPN, metadata и compartmentalization | S / **P2** | Community source; crypto/no-KYC разделы не legal/financial advice | Использовать только threat-model/metadata материал и перепроверять high-stakes claims по первичным источникам |
| NoSubscription.org | **Оставить как reference** | Нужен discovery бесплатных, open-source и perpetual-license альтернатив | Eclipse Library intake: очередь кандидатов, не автоматический импорт | Снижает стоимость поиска альтернатив | S / **P3** | Смешивает free, paid и open-source; sponsored placement; отдельные карточки могут ошибаться | Раз в месяц выбирать кандидатов и заново проверять canonical source, цену, license и privacy |
| The Long Silence | **Оставить как reference** | Нужен пример проверяемого AI-assisted 3D prototype workflow | DnD Forge, Shotforge portfolio: visual regression, interaction assertions, performance survey | Идеи для evidence-first GameDev QA и showcase | S / **P2** | Авторский claim «Opus 5» не подтверждён; тяжёлый WebGL; это demo, не reusable engine | Изучить tools/play/survey/levels и перенести только verification patterns |

## Уже опубликовано — не дублируем

| Материал | Текущее решение |
|---|---|
| SongGeneration Studio | Reference-only: нет явной лицензии, минимум 10 GB NVIDIA VRAM, права на reference audio/output требуют проверки |
| ODS | Roadmap: local AI appliance reference; installer и широкий service graph — только pinned static audit + disposable VM |
| beautify-github-readme | Внедрить сейчас выборочно: evidence-first README и asset-only pilot без выдуманных функций |

## Отклонено

| Материал | Причина |
|---|---|
| OBLITERATUS | Инструмент целенаправленно удаляет refusal/safety directions из model weights. Для Eclipse Forge это повышает abuse и compliance risk; допустим только внешний research reference, не продуктовая зависимость |
| Stolen Compute | Каталог эксплуатировал чужие открытые inference endpoints без разрешения и уже закрыт. Это не «бесплатный AI», а несанкционированное использование чужих ресурсов |
| Kimi-K3-0.40B | Model card прямо говорит: weights инициализированы с нуля и дообучены на toy copypasta; checkpoint занимает около 15.7 GB. Это architecture fixture, а не компактный аналог frontier models |
| Desktop pets prompt | Нет продукта, исходника, лицензии или воспроизводимого результата; использование лиц друзей требует согласия, а standalone EXE — отдельного security audit |
| Coupon-testing prompt | Нет первичного продукта; автоматический checkout может нарушать ToS, создавать нагрузку и случайные заказы. Сценарий не даёт уникальной возможности Eclipse Forge |

## Security review

### High

- **Jcode:** получает доступ к repository, provider OAuth/API keys, hooks, MCP и памяти;
  self-dev меняет собственный binary/runtime. Только isolated repo, pinned source, minimal scopes,
  telemetry и sponsored discovery выключены до пилота.
- **Claude Video:** skill скачивает недоверенные URL и запускает `yt-dlp`/`ffmpeg`; fallback
  отправляет аудио Groq или OpenAI. Нужны allowlist/size/time limits, sandbox и явный opt-in.
- **Lightpanda:** browser/agent/MCP обрабатывает враждебный web content и может иметь cookies;
  telemetry включена по умолчанию. Не давать ему secrets и другие privileged tools в одной сессии.
- **FluentTweaker:** registry, policies, apps, Defender/updates и PowerShell plugins затрагивают
  системную безопасность. Отсутствие license также запрещает переиспользование кода.

### Medium

- **Skillcheck:** skill text, generated tasks и outputs обрабатывает выбранный model provider;
  hosted token/keys и auto-update check требуют отдельного privacy boundary.
- **MengTo Skills:** Markdown-инструкции и scripts нужно рассматривать как код; устанавливать
  по одному, проверять permissions, external URLs и соответствие текущему design system.
- **Google Flow Music:** prompts, audio/images, conversation memory и публикации проходят Google;
  не загружать client media без прав и не считать consumer UI стабильным API.
- **Paranoia Privacy Wiki:** threat-model материал полезен, но crypto/no-KYC советы являются
  high-stakes и зависят от юрисдикции; перепроверять по первичным источникам.

### Low / informational

- Source review статический: third-party binaries, installers, npm packages и models не запускались.
- Stars, авторские benchmarks и generated demo не являются доказательством безопасности или качества.
- Vesperfall Asset Ledger — inventory конкретной игры, а не свободная универсальная asset library;
  отдельно в каталог не добавлен.
