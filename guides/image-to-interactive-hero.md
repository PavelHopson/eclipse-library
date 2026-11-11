# Из картинки — в интерактивного героя: персонаж следит за курсором

> Практический гайд в три шага: меняем фон у готового персонажа, делаем 4-секундный ролик с поворотами головы и превращаем его в покадровую сцену на сайте, которая следует за мышью. Без видеоплеера и библиотек.

Дата проверки: **11 ноября 2026**. Версия материала: **1.0**. Тип: практический guide. Редакционный статус: **verified** — техника проверена на двух опубликованных примерах библиотеки; генерация в Google Flow в этом сеансе заново не запускалась. Автор редакционного материала: Eclipse Forge.

[Живой пример: кофейный кот](../experiments/coffee-cat/index.html) · [Разбор кофейного кота](../experiments/coffee-cat/guide.html) · [Три живых персонажа](../experiments/character-heroes/index.html) · [Разбор трёх персонажей](../experiments/character-heroes/guide.html).

Исходная идея — публикация «Turn Images into Interactive Heroes» в Notion (автор указывает себя как @thinkingods). Промпты ниже — наши переработанные шаблоны на основе этой схемы, а не дословная копия. Оригинальные формулировки, на которых собран кофейный кот, сохранены в материалах примера.

## Модуль 1. Что мы собираем

### Урок 1. Результат и границы

Первый экран сайта с персонажем, который «смотрит» туда, где находится курсор. На самом деле это не 3D и не нейросеть в реальном времени: это короткий ролик, разложенный на кадры. Положение курсора по горизонтали выбирает номер кадра, а плавный переход между кадрами создаёт ощущение живого взгляда.

Что нужно:

- изображение персонажа — своё или с правами на использование;
- Google Flow или другой генератор видео, который принимает картинку как опорный кадр;
- FFmpeg для нарезки кадров;
- Claude или Codex, чтобы написать сцену, либо готовый код из примеров библиотеки.

Чего техника не даёт: настоящего слежения по вертикали и по кругу, если таких поз нет в ролике. Персонаж может смотреть только в те стороны, которые реально сгенерировал видеоредактор.

## Модуль 2. Подготовка кадра и ролика

### Урок 2. Шаг 1 — меняем только фон

Загрузите изображение персонажа в Google Flow как референс. Задача — сохранить персонажа без изменений и подобрать фон под ваш бренд. Однотонный градиент без предметов лучше всего: на нём не будет «плывущих» деталей при анимации.

Шаблон промпта:

```text
Use the uploaded image as the exact character reference. Do not change the character:
same pose, texture, expression, proportions and props. Replace only the background
with [ваш фон: например, a smooth gradient from deep coffee brown to warm caramel,
soft vignette, cozy light]. No text, no extra objects. Keep the original camera angle
and the light that already falls on the character.
```

Проверка результата: сравните кадр с исходником рядом. Если изменились глаза, пальцы, логотипы или предметы в руках — перегенерируйте, а не правьте маской. Мелкие правки по маске потом заметно мерцают в анимации.

### Урок 3. Шаг 2 — ролик, где двигается только взгляд

Загрузите кадр из шага 1 и сгенерируйте ролик длиной 4 секунды. Главное в промпте — неподвижная камера, неподвижное тело и понятная последовательность взглядов.

Шаблон промпта:

```text
Treat the uploaded image as a strict reference: character, framing, lighting and
background stay exactly the same. The camera is locked: no zoom, pan, rotation or cuts.
Animate only the eyes and head, as if the character follows something moving around it.
Eyes lead, the head follows a moment later; ears and hair move slightly.
Sequence: look far left, lower-left, upper-left, back through center, far right,
lower-right, upper-right, then return to the exact starting pose.
Short pauses before each change of direction, smooth easing, light natural overshoot.
Body, shoulders and hands stay still. Do not add any new objects, cursors, particles
or shadows. The first and last frames must match. Length: 4 seconds.
```

Что проверить перед следующим шагом:

1. Камера не сдвинулась — фон на первом и последнем кадре совпадает.
2. Лицо не «плывёт» и не меняется между кадрами.
3. В ролике нет новых предметов.
4. Есть участок, где голова плавно идёт слева направо, — он и станет зоной слежения.

Генераторы часто выполняют промпт не полностью. В нашем примере с котом ролик не бесшовный: в конце кот поднимает стакан. Мы не стали это прятать: повороты головы отданы курсору, а глоток — отдельной кнопке.

## Модуль 3. Кадры и атлас

### Урок 4. Шаг 3 — вытаскиваем все кадры

Сначала узнайте точные параметры ролика, а не полагайтесь на «4 секунды» из промпта:

```bash
ffprobe -v error -select_streams v:0 -count_frames -show_entries stream=width,height,r_frame_rate,nb_read_frames -of csv=p=0 hero.mp4
```

Для ролика 4 секунды при 24 кадрах в секунду получится 96–97 кадров. Соберите их в атлас — одну картинку, где кадры лежат сеткой:

```bash
ffmpeg -i hero.mp4 -vf "scale=480:270,tile=12x8" -frames:v 1 -quality 85 atlas.webp
ffmpeg -i hero.mp4 -vf "scale=320:180,tile=12x8" -frames:v 1 -quality 80 atlas-mobile.webp
```

Почему атлас, а не одна длинная полоса: WebP не поддерживает изображения шире 16 383 пикселей, а 96 кадров по 320 пикселей дают ленту шириной 30 720. Сетка 12 × 8 укладывает те же кадры в 5760 × 2160 для компьютера и 3840 × 1440 для телефона. Браузер загружает только один подходящий атлас.

### Урок 5. Выбираем рабочий диапазон кадров

Нельзя просто приравнять левый край экрана к первому кадру, а правый — к последнему: в ролике персонаж несколько раз меняет направление. Просмотрите кадры и найдите отрезок, где голова идёт строго слева направо. У кофейного кота это кадры 28–56, а центр и поза покоя — кадр 40.

Запишите это в небольшой manifest рядом с атласом: число кадров, колонки, рабочий диапазон, кадр покоя. Тогда сцену можно перенастроить под новый ролик без правки кода.

## Модуль 4. Сцена на сайте

### Урок 6. Покадровый движок на чистом JavaScript

Логика укладывается в несколько десятков строк:

1. Положение курсора по горизонтали переводится в число от 0 до 1.
2. Это число переводится в целевой кадр внутри рабочего диапазона.
3. Текущий кадр плавно догоняет целевой. Сглаживание зависит от прошедшего времени, а не от частоты экрана, поэтому на мониторе 60 Гц и 144 Гц движение одинаковое.
4. Canvas перерисовывается только при смене кадра; когда персонаж успокоился, цикл анимации останавливается.
5. Курсор ушёл из сцены — персонаж плавно возвращается в позу покоя.

```js
const FIRST = 28, LAST = 56, IDLE = 40;
let current = IDLE, target = IDLE, last = 0, raf = 0;

function ease(cur, tgt, dt) {
  return cur + (tgt - cur) * (1 - Math.exp(-Math.min(dt, 50) / 65));
}

scene.addEventListener('pointermove', (e) => {
  const box = scene.getBoundingClientRect();
  const x = Math.min(1, Math.max(0, (e.clientX - box.left) / box.width));
  target = FIRST + x * (LAST - FIRST);
  wake();
});
scene.addEventListener('pointerleave', () => { target = IDLE; wake(); });

function tick(time) {
  const dt = last ? time - last : 16; last = time;
  current = ease(current, target, dt);
  if (Math.abs(current - target) < 0.05) current = target;
  draw(Math.round(current));
  raf = current === target ? 0 : requestAnimationFrame(tick);
}
function wake() { if (!raf) { last = 0; raf = requestAnimationFrame(tick); } }
```

Функция `draw(index)` вырезает кадр из атласа: колонка — `index % 12`, строка — `Math.floor(index / 12)`, и рисует его через `ctx.drawImage`.

### Урок 7. Доступность и мобильные устройства

- **Телефон.** Курсора нет — управляйте проведением пальца по сцене, а после отпускания возвращайте позу покоя. Не блокируйте вертикальную прокрутку страницы.
- **Клавиатура.** Сделайте сцену фокусируемой: стрелки ← / → двигают взгляд, Home возвращает в центр.
- **Уменьшение движения.** При системной настройке `prefers-reduced-motion: reduce` показывайте статичный кадр покоя и реагируйте на смену настройки без перезагрузки.
- **Кнопка «Остановить».** Даёт выключить движение тем, кому оно мешает.
- **Скрытая вкладка.** По событию `visibilitychange` останавливайте цикл.
- **Постер.** Пока атлас грузится, покажите статичный кадр, чтобы первый экран не был пустым.

Все эти пункты реализованы в примере [кофейного кота](../experiments/coffee-cat/index.html) — его код можно взять за основу.

### Урок 8. Промпт для Claude или Codex

Если собираете сцену с нуля, дайте модели ролик и чёткое задание:

```text
Build an interactive hero section from the attached 4-second clip.
1. Use FFprobe to get the real frame count, size and fps.
2. Use FFmpeg to pack every frame into a 12-column WebP atlas (desktop 480x270 frames,
   mobile 320x180) and write a manifest.json with frames, columns, idle frame
   and tracking range.
3. Write vanilla JavaScript with Canvas: map pointer X to a frame inside the tracking
   range, ease toward it with time-based smoothing, stop the loop when settled,
   return to the idle frame on pointerleave.
4. Support touch drag, keyboard arrows and Home, prefers-reduced-motion,
   a pause button and visibilitychange. No external libraries or CDNs.
Keep the original composition with the character centred.
```

Сначала попросите модель показать найденный рабочий диапазон кадров и проверить его глазами — это самая частая ошибка.

## Модуль 5. Проверка перед публикацией

### Урок 9. Чек-лист

- Персонаж на всех кадрах тот же, что на исходной картинке.
- Камера и фон неподвижны.
- При медленном движении мыши нет рывков и «дёргания» головы туда-обратно.
- Курсор ушёл — персонаж вернулся в позу покоя.
- Палец на телефоне двигает взгляд, а страница при этом прокручивается.
- При включённом уменьшении движения показан статичный кадр.
- Загружается только один атлас; объём на телефоне разумный.
- Права на изображение персонажа подтверждены; чужих логотипов и персонажей в кадре нет.

Готовые примеры для сравнения: [кофейный кот](../experiments/coffee-cat/index.html) — одна сцена с отдельной кнопкой «глоток»; [три живых персонажа](../experiments/character-heroes/index.html) — один движок на несколько роликов с разной длиной и своими позами.
