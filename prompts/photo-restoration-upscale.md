# Photo Restoration Prompt

> Источник: Telegram «Eclipse Hopson», 08.07.2026.
> Сценарий: восстановление старых повреждённых фото, аккуратная цветокоррекция и реалистичная колоризация.

**Куда внедрить:** Shotforge, Text2Image, Eclipse Media. Хорошо подходит как пресет “restore old photo” рядом с upscale / product-photo / portrait workflows.

**Guardrail:** не менять личность человека, не “омолаживать” агрессивно, не добавлять детали, которых нет в исходнике, если задача — архивная реставрация.

```text
Restore and enhance an old damaged photo. Remove scratches, stains, and noise.
Reconstruct faded or torn areas while preserving original details. Slightly sharpen
the image for better clarity, but keep it realistic. Apply natural and era-appropriate
colors to skin, hair, and clothing. Use a soft, balanced background color without
being too striking. The final result should look like an old photo that has been
realistically restored and colorized, while respecting its original appearance.
```

## Вариант для русского интерфейса

```text
Восстанови и улучши старую повреждённую фотографию. Убери царапины, пятна и шум.
Аккуратно восстанови выцветшие или порванные участки, сохраняя исходные детали.
Слегка повысь резкость для лучшей читаемости, но оставь изображение реалистичным.
Добавь естественные цвета, соответствующие эпохе: кожа, волосы, одежда и фон
не должны выглядеть слишком современно или искусственно. Итог должен выглядеть
как бережно восстановленная и реалистично колоризированная старая фотография.
```
