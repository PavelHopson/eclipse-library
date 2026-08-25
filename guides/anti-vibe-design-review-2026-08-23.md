# Anti-vibe Design Review: как отличить шаблонный AI UI от рабочего продукта

Список из social screenshots полезен как набор сигналов, но вреден как 30 абсолютных запретов.
Lucide, белый фон, Bento, glass, Inter, hover и пастель сами по себе не делают сайт плохим.
Проблема появляется, когда они заменяют product brief, доказательства, состояния и бренд.

## Сначала проверяем не стиль

1. За три секунды понятны продукт, аудитория и главное действие.
2. Primary flow работает без инструкции и tooltip.
3. Есть loading, empty, error, success, disabled, keyboard focus и recovery.
4. Claims имеют evidence; отзывы, клиенты, цифры и цены не выдуманы.
5. Mobile не является уменьшенным desktop; нет horizontal overflow.
6. Motion объясняет изменение состояния и отключается через reduced motion.
7. Формы имеют label, inline error, сохранение введённых данных и понятный результат.
8. Privacy/legal/security информация присутствует там, где реально нужна.

## 30 сигналов — контекстная оценка

| Сигнал из поста | Решение review |
|---|---|
| 1. Резкие gradients | Дефект при banding, слабом контрасте или конкуренции с CTA; допустим один брендовый gradient в marketing surface |
| 2. Lucide icons | Нормальная библиотека; дефект — случайное смешение icon families и неоднозначные icon-only actions |
| 3. Чисто белый фон | Нейтральный выбор; проверяем glare, contrast hierarchy и длинные reading surfaces |
| 4. Радужная палитра | Обычно ломает semantic color; оставляем один accent и отдельные status colors |
| 5. Тени повсюду | Убираем, если shadow не объясняет elevation или focus |
| 6. Три одинаковые карточки | Дефект, когда primary value теряется; иерархия должна следовать задаче |
| 7. Emoji | Не использовать как UI-icon; в пользовательском контенте и brand voice допустимы |
| 8. Liquid glass | Только малые навигационные/hero surfaces с AA contrast; не для таблиц и форм |
| 9. Длинные тире | Редакторская привычка, не UI-дефект; проверяем естественность текста и локаль |
| 10. Inter / Geist / Grotesk | Допустимы; проблема — default typography без собственной scale, metrics и voice |
| 11. Цветная полоса слева | Оставлять, если это устойчивый semantic marker, а не декор каждой карточки |
| 12. Выдуманные отзывы | Всегда запрещено. Нужны source, consent и точная цитата либо честный placeholder |
| 13. Bento grid | Допустим для overview; дефект — равные декоративные блоки вместо user flow |
| 14. Окно терминала | Только для реального developer product и копируемой команды; не universal tech-decoration |
| 15. «Не X, а Y» | Использовать редко и только если контраст доказуем; не заменять value proposition |
| 16. Checklists | Хороши для status/progress; плохи как бесконечный marketing filler |
| 17. Три pricing tier | Использовать только для реальных тарифов и сравнимых limits, с одним ясным default |
| 18. Нет live demo | Существенный дефект для интерактивного продукта, если нет video/sandbox/evidence fallback |
| 19. Мягкие скругления | Нейтральны; важно ограничить radius scale и не превращать всё в capsules |
| 20. Фиолетовый + чёрный | Не запрещён, но требует причины в бренде; AI-purple по умолчанию заменяем brand tokens |
| 21. Нет loading states | Всегда дефект для async flow |
| 22. Светящиеся blobs | Marketing accent максимум в одном месте; не под controls и текстом |
| 23. Dot grid | Допустимый secondary background; проверяем noise, contrast и GPU cost |
| 24. Spark icons | Не маркировать ими каждую AI-функцию; icon должен различать действие |
| 25. Animated arrows | Только как краткая affordance; бесконечный loop и motion-only meaning запрещены |
| 26. Нет соглашения/условий | Дефект там, где есть account, upload, payment, tracking или sensitive data |
| 27. Нет privacy | Дефект при сборе данных; ссылка должна вести на реальный актуальный документ |
| 28. Hover animation | Нужна keyboard/touch equivalent; не менять layout и не скрывать обязательные действия |
| 29. Neon colors | Допустимы как gaming/media accent; текст и focus проходят contrast |
| 30. Pastel colors | Допустимы для calm/education; не использовать низкоконтрастный текст |

## Профили

### Operational dashboard

Тихий, плотный, task-focused интерфейс. Один accent, компактные controls, таблицы и статусы.
Никаких full-screen slogans, декоративной 3D-сцены вместо списка, ambient loops и скрытых actions.

### Marketing landing

Можно больше типографики и motion, но primary CTA, evidence, реальный demo и mobile performance
важнее визуального эффекта. Один memorable device сильнее десяти трендов одновременно.

### Library / research

Editorial hierarchy, удобная длина строки, быстрый поиск, stable deep links, provenance и дата
проверки. Карточки — навигация к знаниям, а не одинаковые декоративные контейнеры.

## Definition of done

- В макете есть states, не только happy screenshot.
- Каждый визуальный приём имеет одну product-причину.
- Нет fake data и скрытых внешних действий.
- 390 px и desktop проверены визуально и клавиатурой.
- `prefers-reduced-motion` сохраняет смысл и управление.
- После удаления эффектов primary flow остаётся понятным.
