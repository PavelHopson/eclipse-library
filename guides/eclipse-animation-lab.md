# Eclipse Animation Lab: как использовать motion без ущерба UX

## Что добавлено

Animation Lab — отдельная витрина оригинальных UI-анимаций Eclipse Forge. Каждое демо можно:

1. посмотреть в sandboxed preview;
2. повторно запустить;
3. открыть отдельно;
4. скачать как один автономный HTML-файл.

Код создан внутри Eclipse Forge. Скриншоты из социальных сетей использованы только как reference поведения: неизвестные исходники, изображения и стили из них не копируются.

## Самые ценные сценарии

| Сценарий | Решение | Проекты | Ценность | Приоритет / сложность |
|---|---|---|---|---|
| Upload Queue | Внедрить сейчас | Eclipse Chat, Eclipse Media, AI Hub | Пользователь понимает порядок, прогресс и состояние каждого файла | P1 / M |
| Orbit Upload | Внедрить сейчас | Eclipse Media, Shotforge, Text2Image | Долгая генерация получает видимый прогресс, cancel и completed state | P1 / S |
| Accessible OTP | Добавить в roadmap | Eclipse Chat, Eclipse DnD Forge | Вставка полного кода, keyboard flow и ясные ошибки уменьшают срывы входа | P1 / M |
| Reactive Login | Оставить как reference | Landing, onboarding Chat | Может усилить характер бренда, но не должен отвлекать от входа | P2 / S |
| Vault Dial | Оставить как reference | Sentinel, AI Hub secrets | Подходит как необязательная метафора защищённого действия, но не как основной auth | P3 / M |

Следующий шаг: вынести проверенные Upload Queue, Progress и OTP patterns в общий `@eclipse-forge/ui-motion` package, добавить visual regression и внедрять по одному продукту через feature flag.

## Дизайн-стек

- **Taste Skill / design-taste-frontend** задаёт визуальное направление и защищает интерфейс от шаблонного AI-slop. В Library он уже есть, повторная карточка не создаётся.
- **Vercel Web Design Guidelines** используется как rule-based review по accessibility, forms, navigation, typography, content и performance. Это проверка, а не генератор дизайна.
- **Design.md** хранит проверяемый design contract проекта: токены, компоненты, states и ограничения. Запись уже есть в Library.
- **21st.dev Agent Skill** помогает искать React/shadcn-компоненты. Skill имеет Apache-2.0, но лицензия найденного marketplace-компонента проверяется отдельно до копирования.
- **Microsoft Playwright CLI** управляет реальным браузером, снимает screenshots и проверяет сценарии. Он не заменяет человеческую оценку композиции; это воспроизводимый QA-инструмент. Запись уже есть в Library.
- **Vivid Sites** полезен как визуальный reference и генератор для собственных/client sites. Его Terms не разрешают перепаковывать материалы в конкурирующую библиотеку, поэтому Vivid assets не попадают в Animation Lab.

## Motion contract

1. Анимация объясняет state change, hierarchy или spatial continuity.
2. В hot path меняются только `transform` и `opacity`; progress SVG использует `stroke-dashoffset`.
3. Любое действие доступно с keyboard и touch, hover не является единственным входом.
4. `prefers-reduced-motion` убирает большие перемещения, spin и декоративную реакцию.
5. Автономные демо поддерживают `?reduce=1` и детерминированный кадр `?t=N` для QA.
6. Preview работает в iframe с `sandbox="allow-scripts"` без forms, popups, same-origin и внешней сети.
7. Демо auth/upload ничего не отправляют и не заменяют server validation, rate limit, access control или storage policy.

## Проверка перед внедрением

- desktop и 390 px mobile;
- keyboard-only и visible focus;
- touch target не меньше 44 px для основного действия;
- 200% zoom без потери функций;
- normal motion и reduced motion;
- loading, success, error, disabled и cancel states;
- отсутствие remote scripts, secrets, `eval`, `document.write` и небезопасного HTML injection;
- production integration дополнительно проходит auth/API/upload security review.

