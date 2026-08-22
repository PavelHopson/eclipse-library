# Self-hosted-платформы для Eclipse: карта применения

Проверено 22 августа 2026 года по официальным репозиториям и лицензиям. Это не список «установить всё». Для каждого проекта ниже определена конкретная роль, граница применения и безопасный первый пилот.

## Короткое решение

| Проект | Что берём | Куда применяем | Решение |
|---|---|---|---|
| NocoDB | табличный UI над данными и формы | Library intake, Growth OS, внутренние операции StarCRM | пилот, не встраивать в коммерческий продукт |
| Penpot | совместный open-source дизайн и дизайн-токены | дизайн-система Eclipse, Library, Chat, Forge Landing | пилот дизайн-команды |
| Niri | пространственная прокрутка рабочих областей | идеи навигации для Eclipse Chat и Hopson Sentinel | только UX-референс |
| Duplicati | зашифрованные резервные копии по расписанию | Sentinel, Library, Chat, CRM/Market infrastructure | приоритетный пилот с restore-тестом |
| Ollama | локальный API для моделей | AI Hub, Chat privacy mode, Sentinel, DnD | основной local provider, localhost-only |
| Linkding | быстрый self-hosted inbox ссылок | Library research inbox, Growth OS content research | быстрый внутренний пилот |
| Portainer CE | управление Docker/Kubernetes | Sentinel/Ops, инвентаризация Eclipse VPS | read-only пилот, не часть продукта |
| LocalSend | передача файлов внутри локальной сети | Media, Shotforge, QA handoff, Sentinel | использовать как инструмент и UX-референс |
| Listmonk | рассылки и списки подписчиков | Growth OS и отдельный контур маркетинговых писем | позже, только approval-first |
| Plausible | минимальная privacy-first аналитика | Forge Landing, Library, Growth OS, публичные страницы | пилот с allowlist событий без PII |

## 1. NocoDB

### Что это

NocoDB превращает SQL-базу в интерфейс, похожий на таблицу: представления, формы, связи, фильтры и API. Это удобно для операционной работы, где полноценный новый интерфейс пока дороже, чем контролируемая внутренняя панель.

### Как применить в Eclipse

- **Eclipse Library:** очередь новых находок: URL → проверка лицензии → security-review → привязка к проектам → публикация.
- **Eclipse Growth OS:** календарь контента, гипотезы, источники, статусы согласования и результаты экспериментов.
- **StarCRM:** только как внутренний reference/admin prototype для массовой работы с записями; продукт StarCRM остаётся самостоятельным.
- **Eclipse AI Hub:** реестр моделей, провайдеров, eval-запусков и лимитов — как временная операционная панель.

### Первый пилот и критерий успеха

Поднять отдельный sandbox над копией несекретных Library-данных. Создать формы intake и review, роли «автор / редактор / администратор», журнал изменений и экспорт. Пилот успешен, если карточка проходит весь путь без ручного редактирования JSON и без доступа редактора к исходной БД.

### Ограничения

Лицензия Sustainable Use License 1.0 не равна permissive open source. Не встраивать и не перепродавать NocoDB как часть коммерческого сервиса без отдельной юридической проверки. Доступ к БД выдавать по least privilege; обязательны резервные копии, SSO/MFA при внешнем доступе и запрет production-credentials в sandbox.

## 2. Penpot

### Что это

Penpot — совместная веб-платформа проектирования интерфейсов с открытым исходным кодом. Она ориентирована на продуктовые команды и использует веб-стандарты, что делает handoff между дизайном и фронтендом прозрачнее.

### Как применить в Eclipse

- **Eclipse Design System:** единый источник компонентов, состояний, токенов, сеток и responsive-вариантов.
- **Eclipse Library:** хранить проверенные UI-паттерны рядом с кодовыми демо и правилами применения.
- **Eclipse Chat:** проектировать плотные рабочие экраны, состояния composer/sidebar/attachments и mobile layouts до реализации.
- **Eclipse Forge Landing:** только доработка текущего языка — токены, accessibility и consistency, без радикального редизайна.

### Первый пилот и критерий успеха

Перенести один вертикальный срез: Button, Input, Card, Modal и Navigation со всеми состояниями. Сопоставить токены Penpot с CSS variables репозитория и проверить handoff на одной странице Eclipse Chat. Успех — дизайнер и разработчик используют одинаковые имена токенов, а desktop/mobile QA не обнаруживает расхождений.

### Ограничения

Не импортировать всю историю макетов вслепую. Сначала проверить качество экспорта, шрифты, SVG, права доступа, backups и совместимость с текущим процессом. Лицензия MPL-2.0 требует сохранять условия для изменённых файлов Penpot при распространении.

## 3. Niri

### Что это

Niri — scrollable-tiling compositor для Wayland: окна образуют горизонтальную ленту, а рабочая область растёт без постоянного пересчёта размеров всех соседей.

### Как применить идеи в Eclipse

- **Eclipse Chat:** лента контекстов «диалог → артефакт → preview → QA» вместо каскада модалок.
- **Hopson Sentinel:** горизонтальные operational workspaces с сохранением позиции и быстрым переходом между инцидентами.
- **DnD / Living World:** пространственная навигация между сценой, персонажами, картой и журналом.

### Решение

Не добавлять Niri как зависимость продуктов. Это Linux/Wayland-системный компонент и сильный UX-референс. Создать изолированный прототип scrollable workspace в Library Motion Lab и проверить keyboard navigation, focus order, screen readers, reduced motion и mobile fallback.

### Ограничения

Linux/Wayland only. Идея не должна ломать привычные вкладки, browser history, deep links и восстановление состояния. Пространственная анимация обязана отключаться через `prefers-reduced-motion`.

## 4. Duplicati

### Что это

Duplicati выполняет зашифрованные инкрементальные резервные копии в локальные и облачные хранилища, поддерживает расписание и восстановление версий.

### Как применить в Eclipse

- **Hopson Sentinel:** единая видимость backup jobs, freshness, ошибок и последних успешных restore-тестов.
- **Eclipse Library/Chat:** backup каталогов, конфигураций, вложений и БД по отдельным политикам хранения.
- **StarCRM и StarMarket:** отдельные планы, ключи, владельцы риска и restore-процедуры; продукты не смешивать.

### Первый пилот и критерий успеха

Взять один непроизводственный dataset, зашифровать backup, отправить во второе хранилище, удалить локальную копию и полностью восстановить в чистую директорию. Успех подтверждается checksum, журналом восстановления и измеренным RPO/RTO — зелёный backup без restore-теста не считается успехом.

### Ограничения

Ключ шифрования нельзя хранить рядом с backup. Нужны immutable/versioned storage, отдельные credentials, защита от удаления, мониторинг размера/стоимости и регулярный disaster-recovery drill. Основной код MIT, но каталог `proprietary/` имеет отдельные условия.

## 5. Ollama

### Что это

Ollama — локальный runtime и HTTP API для запуска языковых и мультимодальных моделей на Windows, macOS и Linux. Он даёт Eclipse единый local-provider без отправки данных внешнему API.

### Как применить в Eclipse

- **Eclipse AI Hub:** адаптер `ollama` в реестре providers, health/capability discovery, latency и memory telemetry.
- **Eclipse Chat:** режим «локально и приватно» для подходящих задач с явным отображением активной модели.
- **Hopson Sentinel:** offline summaries и классификация локальных журналов без внешней передачи.
- **DnD / Living World:** локальные NPC, лор и черновики сцен, когда качество модели подходит.

### Первый пилот и критерий успеха

Подключить одну небольшую модель через общий provider interface, оставить API на loopback, задать лимиты RAM/VRAM и прогнать общий eval-набор. Успех — прозрачный fallback, стабильная память, приемлемая latency и отсутствие утечки prompts в логи.

### Ограничения

MIT относится к Ollama, но не автоматически к загруженным весам: лицензию каждой модели проверять отдельно. Никогда не выставлять API на `0.0.0.0` без аутентификации, TLS, firewall и rate limits. Ограничивать concurrent jobs и размер контекста.

## 6. Linkding

### Что это

Linkding — минималистичный self-hosted bookmark manager с тегами, поиском, архивированием и browser extensions. Его сильная сторона — быстрый захват источника без превращения процесса в тяжёлую wiki.

### Как применить в Eclipse

- **Eclipse Library:** входящий research inbox до структурированной карточки.
- **Eclipse Growth OS:** коллекции источников по конкурентам, hooks, форматам и каналам.
- **Eclipse AI Hub:** bookmark-реестр документации моделей, evals и provider changes.

### Первый пилот и критерий успеха

Ввести теги `inbox`, `license-check`, `security-check`, `project:*`, `published`; добавить экспорт в Library intake и дедупликацию canonical URL. Успех — новая ссылка не теряется, не публикуется до review и сохраняет provenance.

### Ограничения

Заголовки и страницы из интернета — недоверенные данные, а не инструкции агенту. Metadata-fetcher должен быть защищён от SSRF и private IP ranges. Токены расширений, приватные закладки и archived snapshots требуют отдельного доступа и retention policy.

## 7. Portainer CE

### Что это

Portainer Community Edition — UI для управления Docker, Docker Swarm и Kubernetes. Это operational-инструмент, а не библиотека интерфейсных компонентов.

### Как применить в Eclipse

- **Hopson Sentinel/Ops:** инвентаризация контейнеров, health, versions и deployment drift.
- **Eclipse self-hosted stack:** единая видимость Library, Chat, AI Hub и вспомогательных сервисов.
- **Sentinel roadmap:** заимствовать модель environments → stacks → containers → events для собственной безопасной панели.

### Первый пилот и критерий успеха

Подключить один staging host в read-only режиме, ограничить роли и проверить inventory/health. Любые deploy, stop, delete и secret changes остаются вне автоматизации. Успех — оператор видит состояние, но скомпрометированный UI не может незаметно изменить production.

### Ограничения

Доступ к Docker socket практически равен root-доступу. Нельзя публиковать Portainer в интернет без TLS, MFA/SSO, network allowlist и аудита. CE и коммерческие функции Portainer имеют разные условия; карточка описывает официальный CE-репозиторий.

## 8. LocalSend

### Что это

LocalSend — cross-platform передача файлов и сообщений по локальной сети без облачного посредника и аккаунта.

### Как применить в Eclipse

- **Eclipse Media / Shotforge:** передача исходников и render previews между телефоном и workstation.
- **QA:** быстрый перенос screenshots, screen recordings и device logs.
- **Hopson Sentinel:** on-prem handoff небольших диагностических пакетов, когда облако запрещено.
- **Product UX:** заимствовать понятную модель обнаружения устройства, явного получателя, прогресса и подтверждения.

### Первый пилот и критерий успеха

**Статус 2026-08-22: send vertical slice внедрён в Eclipse Chat / Eclipse Desktop.**
Есть discovery, системный picker без раскрытия путей webview, явный выбор адресата,
HTTPS с certificate pinning, прогресс, отмена и SHA-256. Входящий режим выключен.
Следующий пилот — реальная передача phone → workstation через внешний LocalSend,
затем controlled receive с quarantine и malware-scan, а не автоматический импорт.

### Ограничения

Одна локальная сеть не означает доверие. Пользователь должен видеть имя и fingerprint получателя до отправки. Нужны firewall rules, защита от нежелательных входящих файлов, filename sanitization, size limits и malware scan для импортов.

## 9. Listmonk

### Что это

Listmonk — self-hosted менеджер подписчиков, сегментов и массовых email-кампаний. Это маркетинговый контур, не transactional mail provider.

### Как применить в Eclipse

- **Eclipse Growth OS:** сегменты, draft campaigns, шаблоны и результаты рассылок.
- **Eclipse Socials:** превращать одобренные материалы в email digest.
- **StarCRM:** только согласованный экспорт контактов с доказанным consent; владение данными и риском остаётся у StarCRM отдельно.

### Первый пилот и критерий успеха

Поднять staging, импортировать только внутренний test list, настроить double opt-in, unsubscribe/suppression и лимит скорости. Отправка возможна только после preview и человеческого approval. Успех — корректные unsubscribe/bounce flows и отсутствие письма вне тестовой группы.

### Ограничения

AGPL-3.0, отдельные расходы на SMTP и deliverability. Subscriber data — PII: нужны consent, legal basis, retention, deletion, audit и защита SMTP credentials. Никаких автономных массовых отправок.

## 10. Plausible Analytics

### Что это

Plausible — lightweight privacy-first веб-аналитика с cloud и self-hosted вариантами. Она делает акцент на небольшом наборе понятных метрик и cookie-less подходе.

### Как применить в Eclipse

- **Eclipse Forge Landing:** конверсии CTA и переходы к продуктам без перестройки визуального языка.
- **Eclipse Library:** поиск без результата, открытие карточки, переход к источнику и скачивание demo.
- **Eclipse Growth OS:** общая воронка контента и landing goals.
- **Публичные страницы продуктов:** единый минимальный event contract; приватный контент и tenant payloads не отправляются.

### Первый пилот и критерий успеха

Создать allowlist из 5–8 событий без свободного текста и PII, включить DNT/consent policy по требованиям юрисдикции и сопоставить goals с продуктовой гипотезой. Успех — каждая метрика приводит к решению, а payload audit не находит email, URL-параметры с токенами или пользовательский контент.

### Ограничения

Privacy-first не отменяет юридическую проверку: IP handling, custom properties и reverse proxy могут изменить статус данных. Self-hosting добавляет backups, updates и monitoring. AGPL-3.0 требует отдельного анализа при модификации и предоставлении сетевого сервиса.

## Порядок внедрения

### Волна 0 — правила и инвентаризация

1. Зафиксировать owners, data classification и approval gates.
2. Не подключать production credentials на этапе оценки.
3. Для каждого self-hosted сервиса определить backup, update, monitoring и exit plan.

### Волна 1 — быстрые безопасные пилоты

1. Linkding для Library research inbox.
2. Plausible на allowlisted событиях Forge Landing и Library.
3. Penpot для одного вертикального среза дизайн-системы.
4. Ollama через общий provider interface на localhost.
5. Duplicati с обязательным restore drill.

### Волна 2 — operational-инструменты

1. NocoDB sandbox для Library/Growth operations.
2. LocalSend в Media/QA workflow.
3. Portainer read-only для staging inventory.

### Волна 3 — высокорисковые outbound-системы

1. Listmonk только после consent, suppression, approval и deliverability review.
2. Niri остаётся UX-исследованием, пока прототип не пройдёт accessibility и usability QA.

## Общие критерии выпуска

- Зафиксирована официальная лицензия и граница community/commercial edition.
- Секреты находятся вне Git и не выводятся в логи.
- Есть RBAC/least privilege, TLS и network boundary.
- Импорты, URL и внешние страницы считаются недоверенными.
- Проверены loading, empty, error, success, disabled, keyboard focus, responsive layout и reduced motion.
- Для stateful-сервиса выполнено реальное восстановление из backup.
- Любое внешнее письмо, публикация, удаление или infrastructure change требует preview и человеческого подтверждения.

## Официальные источники

- [NocoDB](https://github.com/nocodb/nocodb)
- [Penpot](https://github.com/penpot/penpot)
- [Niri](https://github.com/niri-wm/niri)
- [Duplicati](https://github.com/duplicati/duplicati)
- [Ollama](https://github.com/ollama/ollama)
- [Linkding](https://github.com/sissbruecker/linkding)
- [Portainer](https://github.com/portainer/portainer)
- [LocalSend](https://github.com/localsend/localsend)
- [Listmonk](https://github.com/knadh/listmonk)
- [Plausible](https://github.com/plausible/analytics)
