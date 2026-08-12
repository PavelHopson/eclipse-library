# Creator Ops Stack: контент, desktop-инструменты и UI без магических обещаний

> Проверено 12.08.2026. Этот гайд превращает подборки со скриншотов в безопасные решения
> для Eclipse Forge. Каталог не устанавливает приложения, skills, CLI или MCP и не подключает
> аккаунты. Любая публикация остаётся ручным действием.

## Что внедряем

| Находка | Решение | Где полезна | Следующий шаг |
|---|---|---|---|
| Editor Stylist | Внедрить сейчас, P1/S | AI Hub, Library, Landing, Chat | Один preset с locked facts, semantic diff и approval |
| Claude SEO | Внедрить сейчас, P1/M | Library, Landing, Growth OS | Read-only audit публичных URL с evidence |
| ShareX | Внедрить сейчас, P1/S | Library, Media, Shotforge | Local-only capture profile без automatic upload |
| QuickLook | Внедрить сейчас, P2/S | Media, Shotforge, Library | Preview assets без third-party plugins |
| Everything | Внедрить сейчас, P2/S | Sentinel, Media, Library | Локальный bounded search; servers/history выключены |
| TweakCN | Внедрить сейчас как design tool, P2/S | Chat, AI Hub, Landing | Экспортировать только token diff и проверить WCAG |
| FocuSee | Pilot/reference, P2/S | Media, Shotforge, product demos | Один public demo; без AI/cloud для закрытых экранов |
| Flow Launcher | Reference, P3/S | Sentinel и workstation | Только official build, сначала без plugins |
| Magic UI / SmoothUI | Reference, P2/M | Landing, Chat, AI Hub, Media | Один component в isolated prototype |
| NeoBrutalism | Reference, P3/S | Campaign pages, DnD Forge | Не переносить стиль в dense dashboards |
| Humanizer by blader | Reference, P2/S | AI Hub Copywriter | Использовать patterns, не ставить scripts автоматически |
| Social Media Skills | Reference / fail closed, P2/M | Growth OS | Review одного skill, не импорт 106 skills |
| Unlumen UI | Reference / fail closed, P3/S | Landing, Media | Source link недоступен; код не копировать |
| Manus | Reference / fail closed, P3/M | AI Hub, Chat, Growth OS | Только public synthetic benchmark без integrations |
| Caveman | Внедрить для internal loops, P2/S | Sentinel, oh-my-claudecode | Benchmark token/correctness; учитывать split license |
| Claude Ads | Уже внедрён read-only | AI Hub, Chat, Sentinel | Write scopes остаются за approval/rollback gate |

## Creator workflow для Eclipse Forge

```text
Owned result or verified finding
  -> Audience brief
  -> Sources and rights review
  -> Hypothesis and one measurable goal
  -> 2–3 draft variants
  -> Claim Auditor
  -> Human preview and approval
  -> Manual publication
  -> 72-hour and 30-day measurement
  -> Keep / change / stop decision
```

Это расширение [Eclipse Growth OS](eclipse-growth-os.md), а не отдельная «контент-машина».
Главная ценность — целевые переходы и обращения. Количество постов, «вирусность» и просмотры
без связи с продуктом не являются результатом.

## Как исправить «режим инженера охвата»

Скриншоты выдают меняющийся Instagram ranking за одну фиксированную цепочку:
первый тест -> удержание -> повторы -> реакции -> расширение. Это полезная гипотеза, но не
подтверждённый универсальный алгоритм. Ranking зависит от поверхности, аудитории, времени,
формата и изменений платформы.

Перед работой нужно спросить:

1. Какой продукт Eclipse продвигаем и какое действие считаем успехом?
2. Кто должен увидеть материал впервые?
3. Какое проверяемое обещание несёт материал?
4. Какой формат и канал доступны без покупки новых tools?
5. Какой baseline у impressions, watch time, saves, clicks, product visits и leads?

### Эксперимент на 5–10 выпусков

| Выпуск | Меняем одну переменную | Проверяем |
|---|---|---|
| 1–2 | Первые две секунды / первая строка | 3-second hold и ранний drop-off |
| 3–4 | Порядок доказательства | Median watch time и completion |
| 5–6 | Визуальный ритм | Replays и completion, не «красоту» |
| 7–8 | CTA | Product visits и qualified actions |
| 9–10 | Topic/format repeat | Повторяемость результата, а не один lucky hit |

Для каждого выпуска фиксируются `hypothesis`, `source`, `rightsStatus`, `audience`, `variant`,
`publishedAt`, `impressions`, `watchTime`, `saves`, `shares`, `clicks`, `leads` и effort.
Сравнивать нужно median и rates на сопоставимых периодах, а не абсолютные screenshots.

## Промпт: evidence-first reach experiment

```text
Ты — Growth Strategist Eclipse Forge. Не обещай вирусность и не описывай алгоритм платформы
как известный факт.

Сначала задай вопросы:
- продукт и один измеримый outcome;
- аудитория, которая ещё не знает автора;
- подтверждённое обещание материала;
- канал, формат, бюджет и доступное время;
- baseline и предыдущие публикации;
- допустимые источники и права на media.

Затем предложи 5–10 выпусков как последовательный эксперимент.
Для каждого укажи:
- hypothesis;
- hook, понятный новому человеку за две секунды;
- evidence внутри материала;
- один изменяемый фактор;
- сценарий с естественными смысловыми поворотами;
- CTA;
- primary и guardrail metrics;
- критерий keep/change/stop.

Не копируй конкурентов, не выдумывай RPM, доход, статистику или правила ranking.
Если данных нет, обозначь это и предложи способ получить baseline.
```

## Промпт: anonymous/faceless channel без спама

Анонимный формат допустим, если он не имитирует реального человека, не скрывает рекламу,
не крадёт media и не обещает доход. «Найди прибыльную нишу за 30 дней» без доступа к
подтверждённым revenue/RPM данным создаёт выдуманную аналитику.

```text
Исследуй публичные контент-направления для faceless-формата вокруг [ПРОДУКТ/НИША].

Раздели данные на:
1. Наблюдаемое: URL, дата, формат, длительность, публичные views/comments.
2. Недоступное: реальный RPM, revenue, conversion и затраты автора.
3. Гипотезы: почему format мог сработать и как это безопасно проверить.

Не считай публичные views доказательством дохода. Не копируй title, script, voice, cover
или media. Предложи три оригинальные стратегии, связанные с реальным продуктом Eclipse.
Для каждой дай rights plan, production effort, CTA, metrics и stop condition.
```

## Desktop Creator Kit

### Быстрый безопасный путь

1. **ShareX** — screenshot/GIF/annotation локально. Automatic upload выключен.
2. **QuickLook** — preview собственного asset перед использованием.
3. **Everything** — поиск по имени в разрешённых папках; network servers и histories выключены.
4. **Shotforge / Eclipse Media** — сценарий, rights metadata, варианты и export.
5. **FocuSee** — только опциональный benchmark авто-zoom на публичном demo.

### Почему не ставим всё автоматически

- screen recorders видят экран, микрофон, камеру и уведомления;
- launchers и plugins исполняют локальный код;
- search index раскрывает структуру файлов;
- cloud AI-функции могут передавать media третьим providers;
- любой installer, CLI, registry или MCP является supply-chain surface.

Перед установкой пользователь самостоятельно подтверждает official source, version, checksum
или signature, permissions, telemetry, privacy и update channel.

## UI adoption gate

Eclipse Library работает на собственном static frontend, а не на React/shadcn. Поэтому
TweakCN, Magic UI, SmoothUI и NeoBrutalism нельзя просто «вшить» в каталог. Их patterns
можно использовать в React-проектах или переписать минимально под текущую архитектуру.

Один UI-pattern допускается в проект только если:

- решает конкретную задачу, а не добавляет decoration;
- использует Eclipse design tokens и существующую icon family;
- имеет loading, empty, error, success, disabled и focus states;
- поддерживает keyboard, screen reader и `prefers-reduced-motion`;
- не создаёт horizontal overflow и работает на 390 px;
- не ухудшает LCP, CLS, INP и bundle заметно относительно baseline;
- license и provenance записаны рядом с изменением.

## Security и rights gate

- Каталог не показывает кнопку прямой установки.
- Большие skill packs и недоступные sources исключены из agent-safe рекомендаций.
- Scraping конкурентов допускается только для public allowlist с соблюдением Terms,
  robots, rate limits и copyright.
- Accounts, cookies, mail, ads, payments и publication connectors не подключаются в pilot.
- Screenshots, video и prompts проверяются на secrets, PII, customer data и права.
- Любой внешний action требует preview, понятный diff, human approval, audit и rollback.

## Официальные источники

- [Humanizer](https://github.com/blader/humanizer)
- [Social Media Skills](https://github.com/social-media-skills/skills)
- [Claude SEO](https://github.com/AgriciDaniel/claude-seo)
- [FocuSee](https://focusee.imobie.com/)
- [ShareX](https://github.com/ShareX/ShareX)
- [Flow Launcher](https://github.com/Flow-Launcher/Flow.Launcher)
- [QuickLook](https://github.com/QL-Win/QuickLook)
- [Everything](https://www.voidtools.com/)
- [TweakCN](https://github.com/jnsahaj/tweakcn)
- [Unlumen UI](https://ui.unlumen.com/)
- [Magic UI](https://github.com/magicuidesign/magicui)
- [SmoothUI](https://github.com/educlopez/smoothui)
- [NeoBrutalism](https://github.com/neobrutalism/neobrutalism)
- [Manus pricing](https://www.manus.im/pricing)
- [Caveman licensing](https://github.com/JuliusBrussee/caveman/blob/master/LICENSING.md)
