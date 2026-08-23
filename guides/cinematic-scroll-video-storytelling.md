# Cinematic Scroll Video Storytelling: от трёх роликов до браузерного фильма

> Практический production-гайд по scroll-controlled video: драматургия, единая временная шкала, инерционный скраббинг, переходы, звук, accessibility, производительность и доказательная QA. В качестве учебного референса используется NØRTHBOUND Андрея Мея; идеи переносим, авторство и ассеты — нет.

Дата фиксации: **23.08.2026**
Статус: **внедрено как атрибутированная техническая реконструкция на лендинге Eclipse Forge**.

## Короткий вывод

Такой формат нужен не обычной продуктовой странице, а проекту, где само движение является
доказательством компетенции: creative development, премиальный launch, интерактивный фильм,
портфолио motion-инженера или история бренда. Поэтому решение разделено на два слоя:

- на основном лендинге — лёгкая карточка с постером и понятной меткой `Reference`;
- по клику — отдельный статический microsite, который загружает видео только после входа;
- в библиотеке — этот guide, чтобы паттерн можно было воспроизвести на собственных материалах.

Не встраивайте 70–100 МБ видео в главную страницу: это ухудшает LCP, мобильный трафик и путь к
основному CTA. Scroll-cinema должен быть осознанным вторым шагом пользователя.

## Права, provenance и честная презентация

Учебный кейс основан на публичном [NØRTHBOUND — The Last Train North](https://panda-orchid-barn.pagey.site/)
и сохраняет титр `BY ANDREI MEI`, ссылки на [портфолио автора](https://andrey-may-pf.netlify.app/)
и [Telegram автора](https://t.me/andreymei_web). Eclipse Forge маркирует страницу как
`attributed technical reconstruction`, а не выдаёт арт-дирекцию за собственную.

Для коммерческого проекта до публикации нужны четыре подтверждения:

1. права на видео, музыку, шрифты, постеры и персонажей;
2. разрешение на адаптацию, если повторяется чужая конкретная композиция;
3. manifest происхождения каждого файла и его лицензии;
4. собственные copy, art direction и media при превращении study в клиентский кейс.

## Модуль 1. Когда scroll-cinema действительно подходит

### Урок 1. Критерий ценности

Формат оправдан, если без движения теряется главный смысл. Хорошие сценарии:

- кинематографический launch продукта или фильма;
- премиальный travel / automotive / real-estate storytelling;
- интерактивная демонстрация motion- и frontend-инженерии;
- музейная, музыкальная или fashion-история;
- эмоциональный кейс, где последовательность важнее быстрого чтения.

Не используйте его для CRM, кабинета оператора, формы бронирования или страницы с частой задачей.
Там пользователь должен действовать, а не ждать режиссёрского темпа.

### Урок 2. 3-second test

Первый кадр без инструкции обязан объяснить:

- что это за мир;
- что здесь есть движение;
- куда смотреть;
- что делает колесо или свайп;
- как выключить звук и вернуться.

Подсказка `SCROLL TO DEPART` поддерживает очевидную композицию, но не спасает непонятный экран.

## Модуль 2. Драматургия до кода

### Урок 1. Монтажная карта

Сначала посмотрите каждый ролик целиком и выпишите физические события, а не DOM-секции.

| Акт | Событие | Эмоция | Визуальный переход |
|---|---|---|---|
| Departure | двери закрываются, поезд уходит | ожидание → необратимость | бордовый физический wipe |
| Darkness | город исчезает | потеря ориентира | тёплая световая щель |
| Carriage | движение к окну | краткая безопасность | окно поглощает интерьер |
| Whiteout | метель достигает пика | тревога | copy появляется только после удара |
| Passage | вспышки туннеля | лиминальность | текст привязан к свету |
| Aurora | пространство раскрывается | освобождение | никакого большого текста |
| Ice / Water | проход сквозь поверхность | невозможное становится физическим | снег превращается в пузыри |
| Credits | почти неподвижная глубина | послевкусие | титры поверх живого финального кадра |

### Урок 2. Виртуальная длина

Каждому акту назначается длина в `vh`. Это не декоративное число: оно определяет, сколько колесо
прокрутки «времени» отдаёт конкретному событию. В учебном кейсе активная история занимает 1635vh:

```text
departure 220 → intertitle 100 → carriage 210 → intertitle 90
→ whiteout 165 → storm copy 95 → final 580 → credits 175
```

Не делайте все акты одинаковыми. Короткий flash и медленный pullback требуют разной плотности.

## Модуль 3. Архитектура одной сцены

### Урок 1. Sticky stage + невидимая timeline

Вместо десятка `position: sticky` используется одна сцена:

```html
<main class="story">
  <div class="cinematic-stage">
    <!-- videos, overlays, text, navigation -->
  </div>
  <div class="timeline">
    <!-- empty sections with CONFIG-driven heights -->
  </div>
</main>
```

```css
.cinematic-stage {
  position: sticky;
  top: 0;
  height: 100svh;
  overflow: clip;
  isolation: isolate;
}

.timeline {
  margin-top: -100svh;
  padding-bottom: 100svh;
}
```

Прокрутка двигается по timeline, а один renderer получает нормализованный progress `0..1` и
управляет всеми слоями. Это убирает рассинхронизацию нескольких scroll-компонентов.

### Урок 2. Central CONFIG

Пути, media times, длины актов, flashes, chapters, интенсивность эффектов и motion должны жить
в одном объекте. Запрещены рассыпанные magic numbers. Минимальная форма:

```js
const CONFIG = {
  videos: {
    departure: { path: "...", start: 0.62, end: 1.58 },
    carriage: { path: "...", interiorEnd: 3.72, stormStart: 3.75, end: 6.65 },
    final: { path: "...", aurora: 13, iceEntry: 30.9, creditsFrame: 35.7 },
  },
  sections: { departure: 220, carriage: 210, final: 580 },
  motion: { scrollLerp: 1.7, seekIntervalMs: 30, seekEpsilon: 0.008 },
};
```

## Модуль 4. Инерция и скраббинг видео

### Урок 1. Один RAF-контур

Scroll handler обновляет только `targetProgress`. Рендер происходит в одном `requestAnimationFrame`:

```js
current += (target - current) * (1 - Math.exp(-lerpSpeed * deltaSeconds));
render(current);
```

Так движение продолжает мягко затухать после wheel input и одинаково работает при обратной
прокрутке. Ограничивайте `deltaSeconds` после возврата на вкладку, иначе сцена прыгнет.

### Урок 2. Seek budget

`video.currentTime` — дорогая запись. Обновляйте её только если:

- прошёл минимальный интервал, например 30 мс;
- разница превышает один кадр или заданный epsilon;
- видео активно или участвует в переходе;
- metadata уже загружена.

Для длинного финала нужен нелинейный map: туннель можно пройти быстрее, а выход к сиянию и
погружение под лёд — замедлить. Линейный `progress * duration` редко даёт режиссёрский результат.

### Урок 3. Подготовка видео

Для надёжного reverse seeking:

- используйте локальные файлы и сервер с HTTP Range;
- проверьте keyframe cadence через `ffprobe`;
- не запускайте три видео одновременно;
- preload следующего акта, pause предыдущего;
- при необходимости перекодируйте рабочую копию с частыми ключевыми кадрами, сохранив master.

Нельзя ухудшать исходник «ради скорости» без визуального A/B и подтверждения владельца.

## Модуль 5. Переходы, которые ощущаются физически

### Урок 1. Не fade, а причина

Каждый переход должен вытекать из изображения:

- корпус поезда закрывает кадр → бордовый wipe;
- горизонтальная лампа → light slit → раскрытие вагона;
- окно заполняется снегом → whiteout;
- вспышка туннеля проявляет copy;
- поверхность льда создаёт blur/refraction;
- снежные частицы после погружения становятся пузырями.

Generic fade допустим как fallback, но не как главная режиссура.

### Урок 2. Текст следует монтажу

Copy появляется только после физического события. Например, `NO SIGNAL` нельзя показывать в
уютном вагоне до максимальной метели. На сиянии большой текст вообще убирается — payoff должен
дышать. Титры разрешены только после фактического достижения позднего подводного кадра, поэтому
проверяется не только scroll progress, но и `video.currentTime`.

## Модуль 6. Motion, звук и доступность

### Урок 1. Sound is opt-in

Сайт всегда стартует с `SOUND OFF`. AudioContext создаётся или resume только после клика.
Процедурный low-frequency bed дешевле отдельного аудиофайла и может менять mix по сценам:

- rail + low wind на станции;
- тихий drone в вагоне;
- сильнее wind в whiteout;
- свободнее и тише на aurora;
- low-pass и исчезновение rail под водой.

Никакого autoplay громкого звука и резких скачков gain — только ramp / `setTargetAtTime`.

### Урок 2. Reduced motion — полноценный маршрут

`prefers-reduced-motion` не означает «показать чёрный экран». Нужен понятный вариант:

- секции сокращаются до 100vh;
- частицы и синхронный seek отключаются;
- выбранные fragments играют muted обычным способом;
- переходы становятся opacity fade около 650 мс;
- весь copy и chapter navigation остаются доступны.

Также нужны keyboard focus, 44px touch targets, live region главы, skip link, fallback внутри
`<video>`, `<noscript>` и текстовые подписи к состояниям — не только цвет и движение.

## Модуль 7. Производительность и безопасность

### Урок 1. Performance contract

- один RAF;
- пассивные scroll/resize listeners;
- canvas вместо сотен DOM-частиц;
- particle canvas в пониженном разрешении;
- DPR cap на desktop и mobile;
- `will-change` только на реально движущихся слоях;
- не более одного тяжёлого full-screen blur одновременно;
- poster и первый video frame доступны до завершения preload;
- пауза media при `visibilitychange`;
- отдельный route, чтобы основной landing не скачивал видео заранее.

### Урок 2. Security/privacy contract

Статическая страница всё равно имеет поверхность риска:

- не переносите стороннюю analytics и free-host banner из референса;
- все внешние ссылки получают `rel="noopener noreferrer"`;
- никаких ключей, user data и browser storage;
- production CSP разрешает только собственные media/font/script, если нет обоснованных исключений;
- проверяйте MIME, Range responses, размер и checksum ассетов;
- vendor GSAP должен быть локальным, pinned и учитываться в dependency review;
- права на media проверяются отдельно от лицензии JavaScript-библиотеки.

## Модуль 8. QA как доказательство

### Урок 1. Обязательные контрольные кадры

Снимите reference и prototype в одинаковом viewport и состоянии:

1. paused opening;
2. first intertitle;
3. warm carriage;
4. maximum whiteout;
5. tunnel copy на flash;
6. чистая aurora без headline;
7. exterior pullback;
8. ice entry;
9. underwater credits;
10. mobile opening `390×844`;
11. 4K opening `3840×2160`.

Скриншот сам по себе не QA. Сначала соберите side-by-side/contact sheet, затем исправьте отличия
в crop, opacity, type size, tracking, safe areas, filters и моменте видео.

### Урок 2. Поведенческая матрица

| Проверка | Desktop | Mobile | Reduced motion |
|---|---:|---:|---:|
| forward и reverse scroll | ✓ | ✓ | n/a |
| fast scroll не открывает credits рано | ✓ | ✓ | ✓ |
| sound default OFF | ✓ | ✓ | ✓ |
| chapter jump / return to top | ✓ | compact | ✓ |
| нет horizontal overflow | ✓ | ✓ | ✓ |
| console errors | 0 | 0 | 0 |
| media Range / seek | ✓ | ✓ | fragment play |
| keyboard focus | ✓ | ✓ | ✓ |

После возврата наверх video time должен вернуться к opening frame, hero и scroll prompt — к
исходному состоянию. Проверьте это отдельно, а не считайте автоматическим следствием progress `0`.

## Как применить паттерн в проектах Eclipse

- **Eclipse Forge Landing:** только entry-card и отдельный case route.
- **Premium Rent:** кинематографический launch конкретного автомобиля, но не booking flow.
- **Shotforge:** обучающий case о переходе storyboard → final render.
- **Eclipse Media:** showcase media pipeline, не основной downloader UI.
- **Agent Office:** не применять к dashboard; допустим только отдельный launch-film продукта.

## Definition of Done

- история понятна без инструкции и без звука;
- источник, автор и права явно обозначены;
- видео локальны и не загружаются с главной страницы;
- первый кадр точный и не прыгает при старте;
- reverse scroll не ломает media/copy;
- титры gated фактическим media time;
- mobile не имеет overflow и сохраняет живой video hero;
- reduced-motion маршрут завершён;
- все видимые controls работают;
- source/prototype сравнение и console QA зафиксированы;
- основной лендинг проходит прежние build/test/bundle budgets.

## Связанные материалы

- [Оригинальный NØRTHBOUND](https://panda-orchid-barn.pagey.site/)
- [Портфолио Андрея Мея](https://andrey-may-pf.netlify.app/)
- [Frontend motion references: evidence, accessibility and performance review](frontend-motion-reference-review-2026-08-20.md)
- [AI Landing Sprint](ai-landing-sprint.md)
