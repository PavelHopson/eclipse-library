# Радар 1 сентября 2026: агенты, архитектура, музыка и визуальный компаньон

> Источники проверены по официальным репозиториям, model card и лицензиям. Library фиксирует решение и границы. Она не устанавливает найденные проекты автоматически.

## Матрица применения

| Источник | Решение | Проект | Что берём |
|---|---|---|---|
| 500+ AI Agent Projects | Добавить сейчас как каталог рецептов | Eclipse AI Hub, Jarvis | Метаданные, сравнение framework, очередь проверенных agent recipes |
| DevilDev | Roadmap reference | Eclipse Forge, AI Hub | Gate `спецификация -> архитектура -> review -> код` |
| OpenSpot | UX reference | Eclipse Media | Локальная аудиотека, очередь, мини-плеер, offline и recoverable jobs |
| Wan2.2 Animate 14B | Optional provider | Eclipse Media, AI Hub | Асинхронный GPU worker для оригинального персонажа и consented video |
| Bella | Clean-room concept only | Eclipse AI Hub, Jarvis | Полноценное визуальное присутствие Альтрона без чужих assets и кода |

## 500+ AI Agent Projects: строим очередь рецептов

[Репозиторий](https://github.com/ashishpatel26/500-AI-Agents-Projects) полезен не как пакет из сотен готовых агентов, а как карта решений. MIT-лицензия относится к самому репозиторию. Ссылки внутри ведут на независимые проекты, модели и сервисы со своими условиями.

В Eclipse AI Hub добавляем сущность `Agent recipe`: цель, framework, входы, tools, данные, модель, бюджет, evaluation, owner и review status. Первая безопасная выборка: PII sanitizer, memory guard, research assistant, media trend analysis и agent evaluation. Каждый recipe проходит отдельный dependency, license, permission, data и cost gate.

## DevilDev: архитектура до генерации кода

[DevilDev](https://github.com/lak7/devildev) под Apache-2.0 подтверждает правильное направление для Eclipse Forge: сначала явная спецификация и архитектура, потом реализация. Целевая цепочка:

`запрос -> scope -> evidence map -> modules -> interfaces -> threats -> approval -> code plan`

Полную поставку DevilDev не переносим. Ей нужны публичные webhooks, Clerk, GitHub App, Supabase, PostgreSQL, Inngest, OpenAI и платёжный контур. Для Eclipse первая версия должна быть локальной и read-only: анализ разрешённого репозитория, ссылки на файлы, список unknowns и ручное утверждение до генерации кода.

## OpenSpot: только права-чистая аудиотека

[OpenSpot](https://github.com/BlackHatDevX/openspot-music-app) под MIT даёт хорошие продуктовые паттерны: mobile/desktop parity, persistent queue, mini-player, offline state и восстановление фоновой загрузки. В Eclipse Media они подходят для загруженных пользователем, локальных и лицензированных файлов.

Streaming core, извлечение потоков и скачивание из сторонних сервисов не берём. Для нашей версии источник всегда видим, права подтверждены, storage quota задана, удаление доступно, а listening history не покидает устройство без отдельного согласия.

## Wan2.2 Animate 14B: provider, а не зависимость интерфейса

[Wan2.2 Animate 14B](https://huggingface.co/Wan-AI/Wan2.2-Animate-14B) публикуется с Apache-2.0 и поддерживает animation и character replacement по паре `video + character image`. Модель слишком тяжёлая для текущего VPS и не должна загружаться в web-приложение.

Сначала создаём только provider contract: queued job, pinned model revision, expected hashes, GPU profile, quota, timeout, cancel, provenance receipt и review state. Тестовый запуск возможен позже на изолированном GPU worker с оригинальным персонажем и synthetic driving video. Real-person replacement запрещён без явного согласия и подтверждения прав.

## Bella: забираем продуктовый язык, не поставку

[Bella](https://github.com/Jackywine/Bella) остаётся concept-only. Надёжной лицензии на повторное использование кода и assets не найдено. Поэтому Eclipse не копирует видео, модели, голос, CSS, изображения, branding или репозиторий.

Забираем общую механику цифрового компаньона и строим её заново для Альтрона:

- постоянное, но отключаемое визуальное присутствие;
- оригинальный first-party образ Valkyrie;
- состояния `idle`, `listening`, `thinking`, `speaking`, `error`;
- реакция изображения, рамки и статуса только через `transform` и `opacity`;
- отдельный transcript/chat layer;
- микрофон выключен до явного действия пользователя;
- renderer не получает доступ к tools, файлам, памяти или ключам;
- reduced motion, keyboard navigation и mobile layout обязательны.

Wan2.2 может позже создавать короткие motion clips для нашего собственного образа. Эти клипы проходят provenance и rights review и никогда не дают модели прямой доступ к голосовой сессии.

## Порядок внедрения

1. Довести clean-room companion surface Альтрона в Eclipse AI Hub.
2. Добавить schema и quarantine queue для `Agent recipe`.
3. Встроить локальный Architecture Gate перед AI Builder.
4. Спроектировать local audio shelf в Eclipse Media без stream extraction.
5. Добавить disabled-by-default Wan provider contract без скачивания модели.

## Security gate

- никакого bulk install из каталогов;
- no secrets и no customer data в чужих examples;
- network, filesystem, microphone и tools выключены по умолчанию;
- repository analysis read-only, с исключением secrets, vendor и generated outputs;
- model weights pinned по revision и hash;
- likeness, voice и media требуют provenance, consent и rights confirmation;
- output не публикуется автоматически;
- каждое включение provider проходит quota, cancel, timeout, audit и human approval.
