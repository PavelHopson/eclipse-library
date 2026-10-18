# IDEA-028-LIB — локальная примерка кота Library

10.10.2026 · A-50 · checkout `E:/projects/eclipse-library`, существующая ветка `master`.

## Результат и границы

Local: реализован и проверен. Merged: нет. Deployed: нет. Runtime: проверен только
локальный сайт в изолированном headless Edge 155.0.4283.45, без пользовательского профиля.
Не создавались ветки/коммиты, не запускалась публикация. Старые незавершённые задачи не закрыты.

Открыть: http://127.0.0.1:4216/?mascot=preview . Обычная `/` остаётся без кота.
Loopback server: существующий `scripts/serve-gwen-preview.py --port 4216`.

- `web/library-mascot.mjs`, `web/library-mascot.css`: отдельный статический компонент;
  нажатие, скрытие/возврат с восстановлением фокуса, локальные настройки, статичный режим.
- `web/index.html`: одна строка подключения модуля, CSS загружается только в preview.
- `web/app.js`: событие `library:catalog-results` после фактического подсчёта и отображения
  результатов; `{active:boolean,count:integer}`, без текста запроса. Сохранение preview-параметра.
  Поиск, сортировка, источники и основная логика не изменены.
- `web/assets/mascots/library-list-v0.1.0/`: точный snapshot пяти SVG A-40 «Лист»,
  версия 0.1.0, SHA-256 в `provenance.json`. Общий вес SVG 11 258 байт.
- Скрипт 5 981 байт + CSS 1 835 байт (несжатые). Нет React, CDN, моделей, трекеров,
  cursor-follow или бесконечного цикла. Реакция — один opacity fade 180 ms.

Семантика: приветствие → greet; нажатие → delight; реальная непустая выдача → curious
(не success); пустая выдача → idle; ручная/системная тишина → rest.
При ошибке картинки один fallback на idle, затем текст без повторяющихся запросов.
Скрытая вкладка и объект вне экрана отменяют анимацию. Эти два обработчика проверены
по коду, отдельный runtime background-tab/performance trace не проводился.

## Проверки

- `node --test scripts/library-mascot.test.mjs scripts/catalog-client-contract.test.mjs scripts/library-navigation.test.mjs`: 7/7 PASS.
- `node scripts/library-mascot-qa.cjs`: 11 сценариев PASS; `reports/library-mascot/qa.json`.
- Реальный поиск `LocalSend` → карточка `localsend-github-com` → загруженный полный гайд,
  с котом и со скрытым котом; пустая выдача; touch-поиск из hero; Enter/Space;
  скрытие/возврат, сохранение настроек, live reduced-motion, fallback при блокировке SVG.
- Desktop 1440px; mobile 390/320px, без горизонтального переполнения; скриншоты просмотрены.
- Ошибок JavaScript: 0; заблокированных внешних запросов в успешном сценарии: 0.
- Пять SVG: SHA совпадают, нет script/foreignObject/event handlers/external refs.
- `git diff --check -- web/index.html web/app.js`: PASS.

Скриншоты: [desktop](library-mascot/desktop.png), [320px](library-mascot/mobile-320.png),
[reduced motion](library-mascot/reduced-motion.png), [середина реакции](library-mascot/motion-mid.png).

## Не готово к публикации

Графика A-40 имеет статус `local-vector-sketches` и `LicenseRef-Eclipse-Internal-Review`:
это локальные эскизы, не финальные/публично лицензированные спрайты. Нужны приёмка
внешности и отдельное решение о публикации. Не заявляем 60 fps без performance trace
на целевом устройстве. Навыки accessible-animation/60fps-animation использованы для
короткой opacity-реакции, отсутствия фонового цикла и отключения движения.

Канонический каталог, Koboyo guide, PROJECT-CONTEXT и generated manifests не изменялись
этой задачей. Ранее существовавшие dirty-правки `app.js/index.html` сохранены.
Отдельная галерея стороннего Koboyo ведётся другим отчётом и не заменяет этот пилот.
