# Радар 1 сентября 2026: визуальные персонажи, builders и media pipeline

> Решения зафиксированы по официальным сайтам, репозиториям, лицензиям и условиям. Добавление в Library не означает установку чужого кода или передачу проектам широких полномочий.

## Короткое решение

| Источник | Решение | Куда применить | Что именно взять |
|---|---|---|---|
| Bella | Concept only, no install | Eclipse AI Hub / Альтрон | Женский визуальный профиль, состояния `idle / thinking / speaking / error`, first-party анимации |
| React Bits | Внедрять выборочно | Animation Lab | Изолированные эффекты с собственным QA, без перепубликации библиотеки |
| Freebeat | Roadmap prototype | Eclipse Media | `музыка → карта битов → план сцен` на собственном или лицензированном аудио |
| Bolt | Roadmap sandbox | Eclipse AI Hub | Быстрое прототипирование только в изоляции, затем export, review и импорт в наш репозиторий |
| Rocket | Product reference | Growth OS | Постоянный контекст, журнал решений и конкурентный мониторинг с доказуемыми источниками |
| Aura | Design-process reference | Eclipse Forge / Landing | Цепочка brief → варианты → Figma/HTML handoff → responsive QA |

## 1. Bella: идея принята, поставка отклонена

[Bella](https://github.com/Jackywine/Bella) полезна как визуальная идея женского AI-персонажа, но не как зависимость. У репозитория нет надёжно подтверждённой лицензии и provenance, внутри обнаружены поставленные зависимости и загрузка внешних весов без обязательных revision и hash. Ничего из репозитория не запускаем, не копируем и не загружаем.

Для Альтрона сделан first-party профиль **«Валькирия»**: оригинальный образ без сходства с персонажами Bella, Marvel, Diablo или другими франшизами. Renderer знает только публичные UI-состояния, provider и model label; он не получает микрофон, файлы, tools, API keys или память диалога. Анимации используют только `transform` и `opacity`, поддерживают reduced motion и отключение профиля.

## 2. React Bits: паттерны, а не новый монолит

[React Bits](https://github.com/DavidHDev/react-bits) даёт сильные примеры текстовых, фоновых и интерактивных эффектов. В **Animation Lab** каждый выбранный эффект должен становиться отдельным first-party showcase с:

- понятным назначением, а не декоративным шумом;
- keyboard/focus и screen-reader поведением;
- `prefers-reduced-motion`;
- измерением FPS, long tasks и bundle delta;
- isolated source manifest и проверкой лицензии.

Лицензия репозитория сочетает MIT и Commons Clause, поэтому нельзя перепаковывать коллекцию как конкурирующую библиотеку компонентов. Берём идеи и ограниченные фрагменты только после item-level review; предпочтительна собственная реализация поведения.

## 3. Freebeat: музыка превращается в монтажный план

[Freebeat](https://freebeat.ai/) рассматриваем как product reference для **Eclipse Media**, а не как backend или источник чужих треков. Первый прототип принимает загруженное пользователем аудио, для которого он подтверждает права, и строит:

1. tempo, downbeats и confidence;
2. секции intro / verse / chorus / bridge / outro;
3. energy curve и transition candidates;
4. editable scene plan с длительностью, типом кадра и монтажным акцентом;
5. export JSON/EDL-like plan без автоматической публикации.

Никаких downloader-функций, обхода DRM или скрытой отправки аудио третьим сторонам. До cloud processing интерфейс показывает провайдера, retention и согласие; по умолчанию используем локальный анализ или синтетический fixture.

## 4. Bolt: песочница обязана заканчиваться экспортом

[Bolt](https://bolt.new/) полезен как benchmark короткого prompt-to-app цикла. Для Eclipse целевой contract такой:

`brief → disposable sandbox → preview → export patch → dependency/security review → tests → user-approved import`

Песочница не получает production secrets, customer data, широкую GitHub installation или прямой deploy. Экспорт должен быть обычным diff/archive с manifest, lockfile, provenance и scan result. Только после review код попадает в существующую ветку нашего репозитория; vendor workspace не становится единственным местом хранения продукта.

## 5. Rocket: память должна быть проверяемой

[Rocket](https://www.rocket.new/) используем как reference для **Growth OS**. Ценность не в постоянном чате самом по себе, а в структуре памяти:

- утверждённые факты о продукте и аудитории;
- hypothesis → evidence → decision → outcome;
- watchlist конкурентов с URL, датой и снимком изменения;
- явный owner и срок актуальности записи;
- разделение внешнего факта, вывода агента и решения человека.

Мониторинг соблюдает robots/terms и не обходит авторизацию. Любое изменение цены, оффера или позиционирования требует источника и human approval; устаревший контекст автоматически помечается, но не переписывается задним числом.

## 6. Aura: процесс передачи важнее генерации

[Aura](https://www.aura.build/) полезна как reference для **Eclipse Forge** и landing-проектов: быстрее переходить от brief к нескольким направлениям, затем к Figma/HTML и рабочему репозиторию. Мы не копируем визуальный стиль сервиса. Берём gate:

`brief → 2–3 направления → выбор → design tokens → Figma/HTML handoff → semantic implementation → desktop/mobile/accessibility QA`

Экспортированный HTML считается черновиком. Перед production он проходит проверку семантики, focus order, responsive layout, performance, CSP/XSS surface, лицензий assets и соответствия установленной дизайн-системе проекта.

## Что исключено

**Saiga Mistral 7B GGUF удалена из этого плана и не добавляется в Library.** Мы не используем её ни как production provider, ни как regression benchmark. Если позже понадобится локальный русский benchmark, набор данных и модель будут выбраны заново по актуальным лицензиям, качеству и hardware budget.

## Порядок внедрения

1. **Сделано сейчас:** first-party женский профиль Альтрона «Валькирия» в Eclipse AI Hub, без зависимости Bella.
2. **Animation Lab:** взять три React Bits-кандидата и пропустить каждый через license, accessibility и 60 FPS gate.
3. **Eclipse Media:** локальный beat-map fixture и редактируемый scene-plan JSON.
4. **Eclipse AI Hub:** disposable builder sandbox с обязательным export patch и security receipt.
5. **Growth OS:** evidence-backed context ledger и watchlist конкурентов.
6. **Eclipse Forge:** шаблон design handoff из brief в Figma/HTML и responsive QA.

## Общий security gate

- no install из Library и no production secrets в builders;
- pin commit/version, verify license, lockfile, install scripts и dependency advisories;
- network, filesystem, microphone и tools выключены по умолчанию;
- uploaded media только first-party, licensed или consented;
- export содержит provenance, hashes, dependency diff и результаты тестов;
- внешние публикации, deploy и изменения репозитория требуют preview и approval;
- сгенерированный UI проходит XSS/CSP, accessibility, reduced-motion и responsive review.
