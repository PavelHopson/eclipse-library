# Eclipse Animation Lab: как использовать motion без ущерба UX

## Что изменилось после browser QA

Animation Lab теперь устроен как рабочая motion-витрина, а не отдельный promo landing:

1. слева выбирается один из шести паттернов;
2. активное демо открывается на большой интерактивной сцене;
3. анимацию можно повторить без перезагрузки Library;
4. автономный HTML можно открыть отдельно или скачать;
5. mobile использует горизонтальный selector без видимого scrollbar.

Исправлен критический autoplay bug: отсутствие query-параметра `t` раньше превращалось через
`Number(null)` в ноль и ошибочно включало frozen frame. Теперь deterministic frame активируется
только когда `?t=N` действительно передан. Regression-тест запрещает возвращать этот паттерн.

Код создан внутри Eclipse Forge. Социальные скриншоты используются только как behavioral reference:
неизвестный код, изображения, брендинг и стили авторов не копируются.

## Шесть оригинальных демо

| Сценарий | Решение | Проекты | Ценность | Приоритет / сложность |
|---|---|---|---|---|
| Upload Queue | Внедрить сейчас | Eclipse Chat, Eclipse Media, AI Hub | Очередь, реальный progress и состояние каждого файла понятны без инструкции | P1 / M |
| Orbit Upload | Внедрить сейчас | Eclipse Media, Shotforge, Text2Image | Долгая операция получает заметный progress, cancel и completed state | P1 / S |
| OTP Terminal | Добавить в roadmap | Eclipse Chat, Eclipse DnD Forge | Paste, keyboard flow и ясные ошибки уменьшают срывы входа | P1 / M |
| OTP Glass | Оставить как visual variant | Mobile onboarding | Светлая версия полезна только в продукте со светлой темой | P2 / S |
| Guardian Login | Оставить как reference | Landing, onboarding Chat | Усиливает характер бренда, но не должен отвлекать от входа | P2 / S |
| Vault Dial | Оставить как reference | Sentinel, AI Hub secrets | Метафора защищённого действия, но не замена auth или approval | P3 / M |

Следующий продуктовый шаг: вынести Upload Queue, Progress и OTP в общий
`@eclipse-forge/ui-motion` только после подключения реальных состояний, validation,
visual regression и feature flag.

## Motion contract

1. Анимация объясняет state change, hierarchy или spatial continuity.
2. В hot path используются `transform`, `opacity`, `clip-path` и SVG `stroke-dashoffset`;
   layout не пересчитывается на каждом кадре.
3. Основное действие доступно с keyboard и touch; hover не является единственным входом.
4. `prefers-reduced-motion` и переключатель Library убирают большие перемещения и декоративные циклы.
5. Демо поддерживают `?reduce=1`, replay cache-buster и deterministic `?t=N` для QA.
6. Preview работает в `sandbox="allow-scripts"` без forms, popups, same-origin и внешней сети.
7. Auth/upload demos ничего не отправляют и не заменяют server validation, rate limit,
   access control, virus scanning или storage policy.

## Проверка перед внедрением

- desktop 1440 px и mobile 390 px;
- фактическое изменение кадров autoplay, а не только наличие CSS animation;
- keyboard-only, visible focus и touch;
- normal и reduced motion;
- loading, success, error, disabled и cancel states;
- отсутствие remote scripts, secrets, `eval`, `document.write` и unsafe HTML injection;
- production integration проходит отдельный auth/API/upload security review.
