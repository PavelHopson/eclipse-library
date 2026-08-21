# Eclipse Animation Lab: production workbench для motion-паттернов

## Что это

Animation Lab — не галерея красивых эффектов, а безопасный стенд для выбора, проверки и передачи UI-паттернов в проекты Eclipse Forge. Пользователь выбирает сценарий, переключает состояние и viewport, проверяет accessibility, затем скачивает автономный HTML или копирует integration contract.

Социальные скриншоты и Vivid Sites использовались только как behavioral reference. Код, графика, брендинг и платные материалы третьих лиц не копируются. Все семь demo созданы внутри Eclipse Forge и не делают сетевых запросов.

## Что доступно в workbench

- preview для Desktop, Tablet и Mobile;
- state presets для loading, error, success, cancel, retry и других сценариев;
- скорость 0.5×–2×, accent, glow и density;
- отдельные reduced-motion и high-contrast режимы;
- live mode и deterministic frame через `?t=N`;
- focus mode без лишней панели;
- export kit: sandboxed HTML embed, React state contract, motion tokens и blocking QA checklist;
- скачивание автономного HTML без установки из каталога.

Preview работает в `sandbox="allow-scripts"` без `allow-same-origin`, forms, popups и внешней сети.

## Семь оригинальных demos

| Паттерн | Для чего | Решение | Проекты |
|---|---|---|---|
| Upload Queue | Drag & drop, pause, retry, cancel, error recovery и FLIP reorder | Внедрить сейчас, P1/M | Eclipse Media, Eclipse Chat |
| AI Generation | Честные этапы AI-задачи, event log, checkpoint retry и cancel | Внедрить сейчас, P1/M | Eclipse AI Hub, Shotforge, Text2Image |
| OTP Auth Kit | Paste шести цифр, edit, resend timer, loading/error/success/expired | Внедрить сейчас, P1/M | Eclipse Chat, Eclipse DnD Forge |
| Guardian Login | Pointer feedback и состояние формы без вмешательства в auth | Reference до backend integration, P2/S | Eclipse Chat |
| Orbit Upload | Компактный progress для долгой операции | Внедрить сейчас, P1/S | Eclipse Media, Shotforge |
| Vault Dial | Кинематографичный 3D security concept: direct-manipulation dial, проверка кода, retracting pins и открытие тяжёлой двери | Concept only, P3/M | Sentinel |
| OTP Glass | Светлый mobile-first вариант OTP contract | Reference, P2/S | Eclipse Forge Landing |

## Vault Dial 3D contract

Vault Dial сохраняет понятный основной путь — локальный шестизначный код и заметная кнопка Unlock — но добавляет контролируемый объём:

- perspective и лёгкий pointer parallax только на desktop с точным устройством ввода;
- dial управляется drag, wheel и стрелками клавиатуры;
- неверная комбинация остаётся видимой, после исправления доступен retry;
- успешная проверка втягивает три механических pin и открывает дверь через ограниченный `rotateY`;
- mobile сохраняет тот же сценарий в одноколоночной раскладке без horizontal overflow;
- reduced motion отключает parallax и заменяет большой swing двери короткой сменой opacity;
- это визуальный concept, а не auth-компонент: production всё равно требует server validation, rate limit, audit и access control.
## Motion contract

1. Motion объясняет state change, hierarchy или spatial continuity.
2. Hot path ограничен `transform`, `opacity`, `clip-path` и SVG `stroke-dashoffset`; layout не пересчитывается на каждом кадре.
3. Mouse, touch и keyboard получают одинаковый результат. Hover не является единственным входом.
4. Reduced motion убирает displacement и декоративные циклы, но оставляет статус и полезную обратную связь.
5. Ошибки не исчезают сами: пользователь видит причину, retry и безопасный выход.
6. Progress не притворяется точным. AI Generation различает подтверждённый этап и оценку времени.
7. Auth/upload demo не заменяют server validation, rate limit, access control, antivirus scanning, object-storage policy или approval gates.

## Query contract

- `state=<preset>` — воспроизводимое состояние;
- `reduce=1` — reduced motion;
- `contrast=1` — усиленные границы;
- `speed=0.5|1|1.5|2` — скорость;
- `accent=%236ba3ff` — accent token;
- `glow=0..1` и `density=0..2` — визуальные настройки;
- `t=N` — deterministic frame для visual regression.

Отсутствие `t` нельзя преобразовывать через `Number(null)`: это ошибочно включает frozen frame zero. Regression-тест блокирует возврат этого бага.

## Blocking QA перед внедрением

- 1440×900, 768×1024 и 390×844 без horizontal overflow;
- keyboard-only, visible focus и touch targets не меньше 44×44 px;
- normal и reduced motion;
- loading, empty, error, success, disabled, cancel и retry;
- autoplay реально меняет кадры;
- нет remote scripts, secrets, `eval`, `document.write` и unsafe HTML injection;
- production integration проходит отдельный auth/API/upload security review;
- визуальная реализация сохраняет Eclipse design tokens и не превращает operational UI в marketing page.

Следующий cross-project шаг — переносить не standalone HTML целиком, а его state machine и tokens в существующие design systems проектов под feature flag и с visual regression.
