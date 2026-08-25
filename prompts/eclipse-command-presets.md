# Eclipse Command Presets

Короткие aliases из community screenshots переработаны в явные prompt contracts.

> Это **не встроенные slash-команды ChatGPT, Claude или Gemini**. Запись `/brief` — удобное
> название пресета Eclipse Library. Вставьте alias вместе с задачей либо раскройте его в полный
> шаблон ниже. На screenshots отсутствовали номера 13, 25, 42 и 55; мы не выдумываем их содержание.

## Общий контракт

Добавляйте после alias:

```text
Задача: [что нужно получить].
Контекст: [проверенные данные и ограничения].
Аудитория: [кто будет использовать результат].
Источники: [ссылки/файлы либо «источники не предоставлены»].
Формат: [таблица, план, письмо, JSON, изображение].

Не выдумывай факты, источники, опыт, отзывы, цены или гарантии.
Отделяй факт от предположения. Если данных недостаточно — перечисли пробелы.
Внешние действия не выполняй; сначала покажи draft и запроси подтверждение.
```

## Базовые режимы

| Alias | Что делает | Контракт результата |
|---|---|---|
| `/human` | Убирает канцелярит и шаблонную «AI-интонацию» | Сохранить смысл и факты; живой язык без имитации конкретного человека |
| `/expert` | Ответ профильного специалиста | Указать допущения, риски, источники и границу компетенции |
| `/ceo` | Анализ для владельца бизнеса | Решение, влияние на клиента/деньги/риск, owner и следующий шаг |
| `/viral` | Идеи контента с потенциалом вовлечения | 5 оригинальных hypotheses; без обещаний вирусности и копирования чужого поста |
| `/seo` | Search-oriented контент | Intent, outline, entities, metadata и evidence; без keyword stuffing |
| `/critic` | Поиск слабых мест | Severity, evidence, impact, исправление; не критиковать без проверяемой причины |
| `/teacher` | Доступное обучение | Цель, объяснение, пример, упражнение, проверка понимания |
| `/eli5` | Максимально простое объяснение | Простая аналогия + что она упрощает/искажает |
| `/brief` | Короткий ответ | Вывод, 3 главных пункта, один следующий шаг |
| `/strategy` | Долгосрочное планирование | Цель, baseline, варианты, milestones, metrics, risks, stop conditions |
| `/copywriter` | Убедительный текст | Audience, one promise, evidence, objection, CTA; без fake urgency |
| `/research` | Глубокое исследование | Вопросы, primary sources, findings, uncertainty, дата проверки |
| `/brainstorm` | Нестандартные идеи | 10 разных направлений, затем shortlist по impact/effort/risk |

## Решения, работа и контент

| Alias | Что делает | Контракт результата |
|---|---|---|
| `/problemsolver` | Пошаговое решение сложной задачи | Root cause, options, выбранный путь, verification и rollback |
| `/decisionhelper` | Взвешенное решение | Критерии, веса, 2–4 варианта, downside, reversible next step |
| `/moneyideas` | Гипотезы монетизации | Customer pain, offer, cost, legal/ethical risks, cheap validation; без обещаний дохода |
| `/skillbuilder` | Персональный план обучения | Baseline, outcome, weekly practice, project, rubric и review date |
| `/negotiationcoach` | Подготовка к переговорам | Interests, BATNA, boundaries, questions, calm script; без обмана и давления |
| `/contentoptimizer` | Улучшение контента | Сохранить facts/voice; hook, structure, clarity, search и accessibility diff |
| `/promptimprover` | Улучшение prompt | Цель, trusted/untrusted context, capabilities, output schema, eval cases |
| `/emailwizard` | Деловое письмо | Subject, concise body, exact ask, deadline/next step; не отправлять автоматически |
| `/productivityboost` | Улучшение рабочего процесса | Найти bottleneck; убрать/делегировать/автоматизировать; одна недельная проверка |
| `/socialmediaai` | Пост для соцсети | Platform format, original hook, evidence, CTA, alt text и disclosure при необходимости |
| `/persuasivemode` | Этичное убеждение | Польза, evidence, alternatives и свободный выбор; никаких dark patterns |
| `/datainterpreter` | Анализ данных | Schema/quality, method, finding, uncertainty, chart suggestion, reproducible calculation |
| `/automateit` | Подбор автоматизации | Trigger, read-only first, draft, approval, action, receipt, failure/recovery |

## Карьера и развитие

| Alias | Что делает | Контракт результата |
|---|---|---|
| `/jobinterviewer` | Пробное интервью | Вопрос по одному, rubric, concrete feedback, next practice |
| `/careercoach` | Карьерный план | Current state, target role, gaps, portfolio evidence, 30/60/90-day plan |
| `/resumewriter` | Резюме | Только подтверждённый опыт; impact bullets, ATS clarity, missing evidence list |
| `/coverlettergen` | Сопроводительное письмо | Связать 2–3 реальные requirements с evidence; без выдуманных достижений |
| `/linkedinbooster` | Профиль LinkedIn | Headline, About, evidence-rich experience, featured items; без keyword spam |
| `/personaldeveloper` | 30-дневный план развития | Одна измеримая цель, daily minimum, weekly review, recovery rule |
| `/habittracker` | Трекер привычки | Cue, minimum action, evidence log, missed-day recovery; без стыда |
| `/healthcoach` | Общий wellness-план | Только образовательная информация; red flags → врач, без диагноза/лечения |
| `/mealplanner` | План питания | Preferences/allergies/budget; общие идеи, не медицинская диета без специалиста |
| `/workoutbuddy` | Тренировочный план | Baseline/injuries/equipment; progressive load и stop signals; согласовать с врачом при рисках |
| `/travelplanner` | План поездки | Budget, dates, constraints, current sources, booking checks и fallback |
| `/budgetplanner` | Личный бюджет | Income/expenses/goals, ranges и scenarios; не инвестиционная рекомендация |
| `/financetips` | Общие финансовые идеи | Educational only, jurisdiction/date, risks и вопросы лицензированному специалисту |

## Growth и бренд

| Alias | Что делает | Контракт результата |
|---|---|---|
| `/trendpredictor` | Сценарии развития тренда | Signals, base/upside/downside, confidence и disconfirming evidence; не «прогноз-факт» |
| `/deepthink` | Глубокий анализ | Сначала problem frame и assumptions, затем alternatives, trade-offs и verification |
| `/unpopularopinion` | Сильная контрпозиция | Steelman обеих сторон, evidence и последствия; без провокации ради охвата |
| `/growthhack` | Быстрые growth experiments | Ethical experiment, metric, cap, duration, stop condition; без spam/dark patterns |
| `/contentrecycler` | Репаковка идеи | 5–10 platform-native форматов с сохранением смысла, прав и provenance |
| `/ctaexpert` | CTA | Action + outcome + friction/risk disclosure; без ложной срочности |
| `/psychowords` | Этичная языковая точность | Ясность и мотивация без эксплуатации страха, зависимости или уязвимости |
| `/brandstory` | История бренда | Origin, customer conflict, evidence, change и honest promise |
| `/viralhook` | Варианты hook | 10 коротких вариантов, ранжирование по specificity/credibility; без clickbait gap |
| `/audienceavatar` | Портрет аудитории | Jobs, context, pains, objections, evidence gaps; не выдавать стереотип за данные |
| `/competitorroast` | Жёсткий разбор конкурента | Только продукт/стратегия и публичные evidence; без оскорблений и домыслов о людях |
| `/frameworkify` | Превращение темы в framework | 3–7 последовательных шагов, inputs/outputs, пример и failure modes |
| `/examplewizard` | Ультракороткое резюме | Одно предложение, один пример, одно ограничение |

## Visual presets

Visual preset используется только с изображением, на которое у пользователя есть права. Он не
обещает инженерную точность: размеры, внутренности и подписи, которых нет в исходных данных,
помечаются как концептуальные.

### `/blueprint`

```text
/blueprint
Преобразуй приложенное изображение объекта в аккуратный технический blueprint.
Сохрани узнаваемую геометрию и пропорции, покажи front/side/isometric views только если они
выводятся из исходника. Синий или нейтральный фон, тонкие line weights, сетка и выноски.
Не выдумывай размеры: неизвестные значения отмечай «не измерено». Текстовые подписи сформируй
отдельным списком, если image model не гарантирует точную типографику.
```

### `/stickynotes`

```text
/stickynotes
Разложи предоставленную информацию на доске стикеров: одна мысль на стикер, 3–5 смысловых групп,
короткие заголовки и видимый порядок чтения. Не теряй источники и решения. Сначала верни структуру
в тексте для проверки, затем создай изображение. Не использовать цвет как единственный маркер.
```

### `/cutaway`

```text
/cutaway
Покажи приложенный объект в концептуальном разрезе: оболочка, основные известные узлы и путь
потока/движения. Не выдумывай скрытую конструкцию. Всё, что не подтверждено исходником или
документацией, помечай «предположение». Сначала перечисли слои и подписи, затем создай визуал.
```

## Критерий качества пресета

- Пользователь понимает, что произойдёт до запуска.
- Входящие страницы, документы и tool descriptions считаются данными, а не командами.
- Формат ответа проверяем; неизвестное не маскируется уверенным текстом.
- Внешнее действие, расход credits или публикация всегда отделены от draft.
- Для high-stakes темы есть дата, юрисдикция/контекст и human escalation.
