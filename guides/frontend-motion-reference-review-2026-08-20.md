# Frontend motion references: что взять в Eclipse, а что оставить картинкой

> Разбор MP4, 16 скриншотов и двух Instagram-профилей от 20.08.2026. Это direction board, а не лицензированный component pack: код, изображения и визуальную идентичность авторов Eclipse не копирует.

## Evidence quality

- MP4 длится около пяти секунд, 1920×1080, 60 fps, но показывает статичную Instagram-карусель. Он не демонстрирует реальные transitions, easing, input latency или frame stability.
- Скриншоты содержат фрагменты HTML/CSS/React без repository, полного source tree, license и тестов.
- Instagram ограничил автоматическую проверку профилей: один URL не загрузился, второй вернул rate limit. Поэтому профили остаются community inspiration sources, а не verified reusable libraries.

## Решение по паттернам

| Паттерн | Решение | Где полезен | Как реализовать безопасно | Главный риск |
|---|---|---|---|---|
| Minimal / segmented mobile dock | **Добавить в roadmap, P1/S** | Library mobile navigation, Media workspace | стабильные 48 px targets, transform/opacity active state, видимый label | horizontal overflow и неясный active state |
| Magnetic dock | **Reference, P2/S** | DnD/Media contextual actions | selected item может подняться на 2–4 px без смещения соседей | декоративность вместо иерархии |
| Liquid/blob/orbit navigation | **Не использовать в operational UI** | только moodboard marketing experiment | если тестировать — isolated prototype и static reduced-motion fallback | motion sickness, filter cost, плохая читаемость |
| Glass footer | **Reference, P2/S** | только Landing/marketing footer | статичный translucent surface, solid fallback, contrast gate; не анимировать blur | дорогой `backdrop-filter`, слабый контраст |
| Expandable glass sidebar | **Внедрить как interaction rule, P1/M** | AI Hub, Sentinel, DnD, Library | `aria-expanded`, keyboard, mobile drawer, CSS grid/FLIP вместо per-frame height | fixed sidebar, focus trap, layout thrash |
| People/project accordion | **Roadmap, P2/M** | Landing project/team showcase | click/focus selection, FLIP transform, opacity, stable DOM and touch fallback | hover-only UX и скрытый контент |

## Motion contract

1. Анимация объясняет state change, hierarchy или spatial continuity.
2. Для обычного UI используются CSS/WAAPI; GSAP появляется только после доказанной timeline-задачи.
3. На каждом frame меняются в основном `transform` и `opacity`. `width`, `height`, `top`, `left`, `filter` и `box-shadow` не анимируются в горячем цикле.
4. Layout reads и writes разделяются; expand/collapse реализуется CSS grid `0fr → 1fr`, WAAPI или FLIP.
5. Hover никогда не является единственным входом: нужны click, keyboard focus и touch.
6. `prefers-reduced-motion` убирает blob/liquid/parallax/large slide/zoom/auto-carousel; допустим короткий fade до 200 ms.
7. Autoplay дольше пяти секунд получает pause; navigation не двигается сама.
8. QA: desktop, 390 px mobile, keyboard, touch, 200% zoom, reduced motion и Performance panel без Layout/Paint spikes.

## Почему код со скриншотов нельзя вставить как есть

- Glass footer использует `backdrop-filter: blur(32px)` без показанного fallback и contrast evidence.
- Sidebar измеряет `getBoundingClientRect().height` и затем transition-ит `height`: это провоцирует layout work и требует отдельного mobile/focus поведения.
- Card accordion построен вокруг `:hover`, меняет flex geometry и скрывает content через visibility/opacity; на touch и keyboard основной сценарий недоступен.
- Фрагменты не показывают cleanup, error/loading states, RTL, long labels, localization, tests и license.

## Применение по проектам

### Eclipse Library

Оставить текущую task-first архитектуру. Улучшать только mobile bottom navigation: спокойный segmented active state, без blob и без нового горизонтального scrollbar. Sidebar expand/collapse — отдельный accessibility/performance audit, не декоративный redesign.

### Eclipse Forge Landing

Собрать один accessible project accordion для 6–8 флагманов. Selection меняется click/focus, анимация — FLIP + crossfade; reduced motion показывает мгновенную смену. Glass можно использовать как статичную surface, но не как универсальный стиль всего сайта.

### Eclipse Chat / AI Hub / Sentinel

Expandable sidebar полезен для operational hierarchy, но active route должен оставаться явным и плотным. Никакой liquid navigation, auto morphing или hover-only controls.

### Eclipse Media / Shotforge / Text2Image

Segmented dock подходит для режимов Script / Assets / Timeline / Export. Magnetic lift допустим только как secondary feedback; он не заменяет label, focus и selected state.

### Eclipse DnD Forge

Контекстный dock можно применить на VTT для Map / Journal / Encounter / Dice, если он не перекрывает сцену и работает с keyboard/touch. Animated orbit navigation оставить reference.

## Источники и права

- [Prozavlly on Instagram](https://www.instagram.com/prozavlly/) — community inspiration stream, reuse license не подтверждена.
- [FrontendJoe on Instagram](https://www.instagram.com/frontendjoe/) — community frontend snippets, canonical repository и reuse license проверяются для каждого конкретного примера отдельно.

Скриншот или social post не даёт автоматического права копировать code, assets, typography или композицию. Для каждого будущего внедрения нужен canonical source, license evidence и самостоятельная реализация в Eclipse visual contract.
