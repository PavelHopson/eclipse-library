# ANURA — визуальная и функциональная приёмка

- Дата: 2026-09-05. Checkout: E:/projects/eclipse-library, master. Опубликован релиз 15a10bc0ae62a6f30499ecf82ec867b4a0344d63; production verification passed.
- Отчёт хранится вне публичной web-папки, отдельно от другой задачи Gwen.
- Source visual truth: предоставленный JPEG (2752×1536) и MOV (1920×1080, 600 кадров). Рабочий эталон композиции/состояния — web/experiments/anura/assets/poster.webp (1280×720, кадр 0 видео) плюс подробный пользовательский бриф. Готового макета с типографикой не было: проверяется соответствие арт-направлению, не вымышленная попиксельная идентичность макету.
- Implementation: http://127.0.0.1:4186/experiments/anura/index.html.
- Full-view evidence: .artifacts/anura/qa-optimized/compare-desktop.jpg — исходный кадр и screenshot desktop вместе. Source нормализован до 720 px ширины, desktop 1440×900 при DPR 1 — до 900 px; это сравнение композиции с отмеченными разными canvas-пропорциями, не pixel-diff.
- Responsive evidence: .artifacts/anura/qa-v4/compare-responsive.jpg; финальные scene-390x844.png, scene-320x740.png, scene-768x1024.png и compare-responsive.jpg в qa-optimized. Исходник сохраняет персонажа и свет; mobile имеет другую согласованную раскладку.
- Focused evidence: qa-optimized/focus-1440.png (кнопка/фокус), qa-edge/library-viewport.png (реальный viewport 390×844, screenshot 780×1688 при DPR 2, кнопка не перекрыта), qa-optimized/guide-1440-top.jpg, qa-edge/guide-viewport.png; .artifacts/anura/docx-page-3.png и docx-contact.jpg.

## Findings и история сравнения

- [P1, исправлено] На первом визуальном осмотре qa-v3 планшет 768×1024 обрезал половину головы. Исправлены положение кадра, высота сцены и вертикальное размещение CTA. В qa-v4/qa-optimized персонаж помещается справа целиком.
- [P2, исправлено] Mobile qa-v3 показывал прямоугольную границу видео под заголовком. Уменьшена высота сцены, добавлено затухание края; повторное сравнение qa-v4 подтверждает непрерывный фон и читаемый текст.
- [P2, исправлено] Слишком тесные пробелы заголовка. Добавлен word-spacing без замены установленного шрифта; сравнение qa-optimized/compare-desktop.jpg.
- [P1, исправлено] Touch pointerleave сразу сбрасывал выбранный кадр. Возврат в центр теперь только для мыши; browser touch regression passed.
- [P2, исправлено] В мобильном HTML-гайде широкая лента кадров обрезалась. Лента ограничена шириной контейнера; проверка 320 px и новый viewport passed.
- Setup-проблемы до визуальной приёмки: неверные MIME в локальном Windows preview исправлены явной картой типов; публичный модуль имеет расширение .js. Проверка кадров использует RIFF/WEBP, размер ограничивается до накопления целого ответа. Это не считалось успешной visual QA-итерацией.
- Test-only исправления: ожидание live reduced-motion события перед движением; ожидание объявления ANURA после навигации. Ошибки ожиданий не выдаются за исправление продукта.
- Не осталось actionable P0/P1/P2. P3: более точная траектория возможна с новым роликом, специально снятым под непрерывную карту направлений. Текущий исходник — look-around, а не настоящая 3D-модель.

## Обязательные поверхности

- **Fonts/typography:** локальный Inter Tight с кириллицей, контурная вторая строка, моноширинная обвязка; крупный заголовок не обрезается на 320–1920 px. Размеры вторичных метрик соответствуют брифу. Заголовки, пробелы и основной текст проверены визуально.
- **Spacing/layout:** нет внутренних вертикальных разделителей; контур по краю, две горизонтальные линии; desktop текст слева/персонаж справа, portrait tablet сохраняет персонажа справа, mobile — персонаж выше текста. В коротких окнах разрешена вертикальная прокрутка ради доступности, горизонтального скролла нет. Это осознанное отклонение от абсолютного 100vh.
- **Colors/tokens:** тёмный бирюзовый, молочный текст и точечный салатовый; затемнение обеспечивает читаемость. Нет новых SaaS-блоков/декоративных стопок карточек. Существующая Library-система сохранена у кнопок входа.
- **Image quality:** реальный предоставленный видеоряд без синтеза/дорисовки глаз. 240 кадров 1280×720; на большом дисплее допустима мягкость при увеличении. Исходный JPEG отдельно показан в гайде. Кадры не заменены SVG/CSS-рисунком.
- **Copy/content:** русский основной UI, правильные состояния, честное XY вместо 360°. Ссылки явные index.html, возврат детерминированный без referrer/history-зависимости. Исходный промпт целиком, отделён от реализации.

## Проверки и результат

- Edge/Chromium 152.0.4191.66, отдельные контексты, пользовательский профиль не использовался. 25/25 main browser checks; 8/8 edge checks. Ошибок JS 0; сторонних запросов main QA 0.
- Размеры: 1440×900, 1920×1080, 1366×768, 1024×768, 768×1024, 390×844, 320×740, 667×375. Touch, keyboard Enter/focus, pause, загрузка/ошибка/retry, no-JS, reduced motion, возврат из гайда, маскировка HTML под WebP и synthetic visibilitychange проверены.
- 46/46 локальных команд quality workflow; в том числе 12 ANURA Node tests, 240 SHA-256 проверок, manifest и регрессии Gwen/Library. git diff --check passed.
- Память: encoded sequence 4 454 170 bytes; observed decoded-cache max 12, mobile cap 8, decode in-flight ≤2. В простое draws не растёт, rAF выключен. Это не полный GPU/OS-memory benchmark и не обещание 60 fps на любом железе. Видеоряд имеет 24 fps после подготовки.
- DOCX: 11 страниц после реальной пагинации Word в read-only режиме с отключёнными макросами; 177 абзацев, 2 иллюстрации, 98/98 исходных абзацев, OLE/macros/external relationships 0. Контакт всех страниц и страница 3 визуально осмотрены.
- Security pass статической сцены: новых Critical/High/Medium/Low технических findings не обнаружено; same-origin CSP, фиксированные URL, bounded streaming, отсутствие eval/innerHTML/секретов/пользовательского хранилища. Отдельный High CI finding и его исправление описаны ниже. Встроенный OLE исходного DOCX не исполнялся и не распространяется. Это не утверждение, что исходник вредоносен. Права на распространение изображений и видео отдельно не подтверждены.
- Не проверено: Safari/Firefox, реальное iOS/Android устройство, аппаратный GPU frame timing. Production проверен ниже. Проверка скрытой вкладки синтетическая. Noindex не является контролем доступа.

final result: passed

## Оптимизация после пользовательского просмотра

- Выявлена пропущенная отрисовка: decode завершался, но следующий tick уже выбирал другой кадр. Исправлено немедленной отрисовкой запрошенного готового кадра; добавлен regression test.
- Снято до/после в свежем Edge, 3 секунды движения + пять направлений, обычный CPU и 4× throttling. Evidence: .artifacts/anura/performance/before-refresh-sampled/results.json и after-refresh-sampled/results.json.
- Длинные переходы (1×): 642/324/570/349 ms → 186/151/181/157 ms. Короткий первый переход: 155→196 ms — ускорились не все отдельные траектории. Число смен кадров при движении: 82→209; при 4× CPU: 78→148. Не выдаём количество браузерных rAF-сэмплов за гарантированный физический FPS. Load-time старой route-replay и новой версии несопоставим.
- Canvas ограничен 1280 px и DPR 1.25; decoded-cache 12/8, mobile ImageBitmap 960×540 (~16 MiB пикселей cache). Fallback Image использует исходное разрешение (~28 MiB mobile). Код не удерживает 240 декодированных изображений. Старые ImageBitmap закрываются.
- Сняты тяжёлый CSS-фильтр сцены и повторные измерения внутри paint; движение курсора объединено в rAF. Idle draw=0; ограничения памяти не расширялись.
- Повторная QA: qa-optimized 25/25, qa-edge 8/8. Новые desktop/responsive сравнения визуально просмотрены; читаемость и исходный видеоряд сохранены. Чистый DOCX пересобран с объяснением оптимизации: 11 страниц, 177 абзацев, 550 942 bytes, 98/98 исходных абзацев; contact proof осмотрен.

## Security выпуска

- High, исправлено и опубликовано: старый deploy workflow_run проверял success, но не тип исходного события/владельца репозитория. Привилегированный checkout теперь разрешён только для push/master/этого репозитория, manual — только master. Регрессия реально вычисляет guard для trusted push/manual и запрещённых PR/fork/failure/feature. Production deploy выполнился по разрешённому trusted push. Это предотвращение риска, не свидетельство компрометации. [GitHub: риски workflow_run и untrusted checkout](https://docs.github.com/en/actions/reference/security/secure-use).
- Сохранены read-only GITHUB_TOKEN, pinned 40-hex action SHAs, strict known-host SSH и существующие secrets. Секреты не выводились и не менялись. Добавлены проверки public/staged allowlist и exact HTTP-содержимого ANURA после деплоя.
- Critical: 0 найдено. High: 1 закрыт и опубликован. Medium/Low: 0 новых findings в изменённой поверхности. Это пропорциональный review, не полный аудит инфраструктуры.

## Выпуск и финальная проверка

По текущему запросу пользователя опубликовано через существующую master, commit 15a10bc. Staged/production manifest — 79 гайдов, рабочий manifest — 80 с несвязанным diagnostics draft. Чистый staged-снимок release-checkout-lf: 46/46 quality-команд; ANURA/Gwen stage allowlists passed. Первый Windows archive добавил CRLF (байты нормализованно совпали с index), поэтому четыре точные generated-file проверки вернули stale; повтор с core.autocrlf=false прошёл без изменения каталога.

- CI [33970998492](https://github.com/PavelHopson/eclipse-library/actions/runs/33970998492) и deploy [33971046707](https://github.com/PavelHopson/eclipse-library/actions/runs/33971046707): success, точный headSha 15a10bc0ae62a6f30499ecf82ec867b4a0344d63.
- Публичные проверки: Library smoke passed; Gwen 18 exact assets; ANURA 253 exact assets; отдельное byte comparison animations.html/animation-lab.css/guides.json passed. Не опубликованы source MOV, reports, diagnostics draft и исходный OLE.
- Браузер на production: .artifacts/anura/qa-production/results.json 25/25, qa-edge-production/results.json 8/8; JS errors/third-party requests 0. Production screenshot desktop/responsive/reduced-motion визуально осмотрены; layout и оригинальный персонаж сохранены. Проверены работоспособность кнопок, возврат, гайд/DOCX, размеры 320–1920 px и сценарии ошибок.
- .artifacts/anura/release-proof.json фиксирует точные публичные navigation bytes, 79 guides и reduced-motion check. Физические телефоны, Safari/Firefox и аппаратные GPU timings остаются непроверенными; синтетическая CPU-метрика не обещает универсальных 60 fps.
- Финальный результат: published + production verified. Следующий безопасный шаг — пользовательский просмотр на собственном устройстве.
