# Koboyo — локальная галерея импортированного набора

10.10.2026 · A-50 · `E:/projects/eclipse-library`, существующая ветка `master`.

Local: реализовано и проверено. Release: `0cf3298393ab7738bf0b3452d9cde43ea0991d35`
опубликован координатором в master, CI и deploy успешны. Production QA обнаружил два
пропущенных README; выпуск пока не принят полностью (подробности ниже).
Локальный runtime проверен в headless Edge 155.0.4283.45, без видимого окна/пользовательского профиля.
Кот «Лист» — отдельный результат в `2026-10-10-IDEA-028-library-mascot.md`.
В этом чате commit/push/deploy не выполнялись; публикацию выполнил координатор.
Новых веток, моделей или платных генераций не создавали.

## Открыть

- http://127.0.0.1:4216/mascots/koboyo/index.html
- http://127.0.0.1:4216/#guide/koboyo-page-mascot
- На сервере координатора тот же файл: http://127.0.0.1:4207/mascots/koboyo/index.html
  (сервер 4207 этой проверкой не использовался).

## Изменённые файлы

- `web/mascots/koboyo/index.html`, `gallery.css`, `gallery.mjs` — галерея на HTML/CSS/JS;
  русский поиск, четыре категории, постраничный выбор 58 вариантов; живой Canvas preview
  3×3 направлений и 3×3 эмоций; touch/keyboard; ручной и системный статичный режим.
- Загрузка/ошибка/повтор для manifest и изображения; ручное копирование при отказе
  clipboard; независимые ссылки на оба WebP, ZIP, инструкцию, MIT и источник автора.
- React snippet использует реальные props `directions`, `reactions`, `label` исходного
  компонента. React/пакет на страницу не устанавливались; сам React-runtime не тестировался.
- `web/app.js`: точный allowlist пяти root-relative файлов Koboyo в `absUrl` и `inlineG`
  перед README-правилом. Остальные ссылки по-прежнему идут через прежние правила.
- `scripts/koboyo-gallery.test.mjs`, `scripts/koboyo-gallery-qa.cjs` — проверки.

Assets, manifest, SOURCE, README, LICENSE, upstream и ZIP импортированы A-00. Мы их
не редактировали. Канонический каталог/guide/derived manifests — также зона A-00.

## Источник и права

[nilbuild/page-mascot](https://github.com/nilbuild/page-mascot), revision
`76a44ed9180063bf4852b9dd724b656f4a828ac7`; Kamran Ahmed, MIT.
README разрешает скачать пару листов и передать их компоненту; исходный `mascot.tsx`
подтверждает порядок 9 направлений и 9 реакций. Галерея явно сохраняет чужое авторство.
Никакие внешние инструкции/skills из набора не активировались.

## Доказательства

1. `node --test scripts/koboyo-gallery.test.mjs scripts/library-mascot.test.mjs scripts/catalog-client-contract.test.mjs scripts/library-navigation.test.mjs`: **11/11 PASS**.
2. `node scripts/koboyo-gallery-qa.cjs`: **13 браузерных сценариев PASS**, результаты в
   `reports/koboyo-gallery/qa.json`. Ошибок JS 0, внешних запросов 0.
3. Все **116 WebP / 58 вариантов** проверены по размеру, SHA-256 и Git blob SHA;
   суммарно **21 440 188 байт**. Pillow декодировал все 116: **1080×1080 RGBA**.
4. Браузер отрисовал **18 различных кадров** выбранного персонажа; поиск, empty/reset,
   четыре категории, все 58 кнопок после pagination; Enter/Space, touch, reduced-motion;
   реальные повторные загрузки после отказа manifest/изображения.
5. В первой загрузке 1440×1050 запрошено **10 листов / 1 630 588 байт**, без reactions.
   Превью lazy, список по 12; реакции — только по запросу. Кеш большого preview ограничен
   четырьмя листами. Полный архив автоматически не скачивается.
6. Два WebP и ZIP скачаны браузером, сохранены в QA-папке и совпали с источниками по SHA.
   ZIP **21 429 896 байт**, SHA-256
   `0e3dddcffaab8b88745432dc2fbf9692a4dedbdde9a8053896e9824955e5b1fd`.
   В скачанном ZIP 123 записи, все 116 WebP совпадают с manifest, LICENSE совпадает,
   `zipfile.testzip()` → None. Содержимое не запускалось.
7. Настоящий гайд в `#guideBody`: gallery/ZIP/README/LICENSE сохраняют локальные href.
   Клик по галерее приводит к рабочему preview, скачивание ZIP прямо из гайда
   также проверено по SHA. Пятый allowlisted manifest покрыт unit-проверкой.
8. Desktop, 390px и 320px — без горизонтального overflow. Скриншоты просмотрены:
   [desktop](koboyo-gallery/desktop.png), [320px](koboyo-gallery/mobile-320.png),
   [мобильный preview](koboyo-gallery/mobile-preview-320.png),
   [reduced motion](koboyo-gallery/reduced-motion.png).
9. `git diff --check -- web/app.js web/index.html`: PASS. Остальные dirty-изменения сохранены.

## Ограничения

Первоначальные проверки выше относятся к локальной галерее, не установленному React-компоненту.
Собственные иллюстрации A-40 и готовая сторонняя коллекция Koboyo не смешиваются.
Релиз выполнен отдельно из scoped checkout, без всего грязного основного checkout.
QA-скачивания/скриншоты — внутренние evidence, не часть web payload.

Узкая проверка безопасности: manifest не допускает произвольные URL/traversal,
названия выводятся через textContent; нет external CDN, аналитики, генерации, eval
или исполнения скачанного архива. В этой поверхности новых High/Critical не выявлено;
это не общий аудит Library. Автоматического frame-loop нет; точный FPS на целевых
устройствах не измерялся. Навыки accessible-animation и 60fps-animation повлияли на
статичный режим, отсутствие фонового цикла и короткую opacity-реакцию.

## Release / production QA — 10.10.2026

- Release checkout: `C:/Users/garaa/Documents/Codex/2026-08-22/eclipse-forge/library-koboyo-release-20261010`.
- SHA: `0cf3298393ab7738bf0b3452d9cde43ea0991d35`, существующий master, commit/push — координатор.
- [Quality 38089472415](https://github.com/PavelHopson/eclipse-library/actions/runs/38089472415): success.
- [Deploy 38089496522](https://github.com/PavelHopson/eclipse-library/actions/runs/38089496522): success.
- Scoped preflight: 52/52 проверок PASS; 773 прежние карточки без изменений.
- HTTP-проверка production: **130/132 файлов совпадают побайтно с release checkout**.
  Все 116 WebP, ZIP, manifest, SOURCE, LICENSE, JS/CSS/HTML галереи, основной app.js,
  каталог, guide manifest и сам гайд совпали по SHA-256. HTTP 200 не считался успехом
  без совпадения содержимого.
- **Открытый дефект:** `/mascots/koboyo/README.md` и
  `/mascots/koboyo/upstream/README.md` отсутствуют в commit и production; HTTP 200
  возвращает HTML главной страницы. Причина: `web/.gitignore:2: README.md`.
  Нужен scoped follow-up координатора с двумя оригинальными файлами и повторной
  проверкой этих URL/хешей после deploy. Не менять остальные материалы.
- Полный JSON: `C:/Users/garaa/Documents/Codex/2026-08-22/eclipse-forge/koboyo-release-qa/production-hashes.json`.
- 13 сценариев локального browser QA остаются PASS. В этом чате production browser QA
  повторно не запускался: пользователь выбрал ручную проверку во встроенном браузере.
- Координатор отдельно сообщил production acceptance в **headless Edge 155**, не IAB:
  гайд→галерея, 58 вариантов, реакция drone, реальные WebP/ZIP с SHA, поиск 390px,
  0 JS errors; его evidence — `G:/codex-review/koboyo-production-acceptance/receipt.json`.
  Эта проверка не отменяет обнаруженные отсутствующие README.
- Собственные маскоты Лист/Такт/Кверк и следующий Three.js-пилот в выпуск не входят.
