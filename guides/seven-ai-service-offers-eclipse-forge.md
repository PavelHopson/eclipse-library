# Семь AI-услуг: проверка офферов и план Eclipse Forge

> Практическая выжимка из видео Web3nity от 21 августа 2026 года. Это не обещание дохода: видео подтверждает полезные сценарии, но не доказывает спрос, конверсию, маржинальность или заявленные цены. Каждый оффер проходит маленький платный pilot, evidence review и ручное подтверждение результата.

Источник: [«Как зарабатывать на ИИ: 7 конкретных способов, которые можно повторить»](https://www.youtube.com/watch?v=Uk7HHfF9n2Q), канал Web3nity, 22:27.

## Что действительно есть в видео

Автор предлагает продавать не «доступ к AI», а понятный результат для малого бизнеса:

1. улучшенные фотографии товаров и меню;
2. пакеты коротких рекламных роликов;
3. переупаковку длинного контента в shorts, посты и письма;
4. лендинги для локального бизнеса;
5. калькуляторы и квизы для квалификации заявок;
6. FAQ-ботов на материалах компании;
7. регулярный мониторинг публичных данных по подписке.

Полезный общий принцип — сначала найти повторяющуюся проблему, сделать один ограниченный пример
`до / после`, измерить реакцию клиента и только затем строить автоматизацию. Рекламные тезисы о
лёгкости, стоимости лендинга в `$1,200` и существующем заработке других людей не сопровождаются
проверяемой выборкой, договорами, расходами или данными о конверсии.

## Решения Eclipse Forge

| Оффер | Решение | Проект | Ценность | Сложность / приоритет |
|---|---|---|---|---|
| Product Photo Pack | Внедрить сейчас | Text2Image, Shotforge, Eclipse Media | Быстрый owned-asset workflow с честным `до / после` | `S / P1` |
| Creative Variant Pack | Внедрить сейчас | Shotforge, Eclipse Media, Growth OS | 3–5 проверяемых углов подачи вместо одного случайного ролика | `M / P1` |
| Longform Repurposing | Добавить в roadmap | Growth OS, Eclipse Chat, Eclipse Media | Один разрешённый источник превращается в набор draft-форматов | `M / P1` |
| Local Business Landing | Использовать существующий путь | Eclipse Forge Landing, AI Landing Sprint | Уже покрыт brief, claims, QA, security и approval gates | `M / P1` |
| Lead Calculator / Quiz | Добавить в roadmap | Eclipse Forge Landing, Eclipse AI Hub | Квалификация заявки и понятный следующий шаг | `M / P1` |
| Evidence FAQ Assistant | Добавить в roadmap | Eclipse Chat, Eclipse AI Hub | Снижение повторных вопросов без выдуманных ответов | `M / P1` |
| Public Monitoring Digest | Внедрить первым pilot | Hopson Sentinel, Eclipse Chat | Повторяемая подписная ценность и измеримый read-only результат | `M / P0` |

## 1. Product Photo Pack

**Проблема:** у локального бизнеса есть реальные товары, но изображения тёмные, неоднородные или плохо кадрированы.

**Сценарий:** владелец передаёт 3–10 собственных фотографий → система показывает rights notice → создаёт варианты света, фона и crop → показывает сравнение → человек подтверждает каждый export.

**Что разработать:**

- `product-photo.job.v1`: source hash, owner/consent, allowed edits, forbidden claims и target formats;
- режимы `light`, `background`, `crop`, а не неограниченная генерация;
- side-by-side preview, alpha/checkerboard, 1:1 и 4:5 export;
- флаг `productIdentityChanged`, если модель изменила форму, количество, цвет или комплектность;
- provenance receipt и ручное подтверждение до публикации.

**Риск:** улучшенная фотография не должна показывать товар, которого клиент не получит. Изменение состава блюда, упаковки, цвета или количества блокирует export до повторной проверки.

## 2. Creative Variant Pack

**Проблема:** малый бренд не умеет системно проверять разные рекламные углы.

**Сценарий:** product brief → три угла (`problem`, `demo`, `FAQ`) → storyboard → owned assets → 9:16 preview → Claim Auditor → клиент выбирает варианты для ручной публикации.

**Что разработать:** reuse существующего storyboard handoff Shotforge → Media, budget cap, reference register, subtitle safe zones, три длительности и receipt с утверждёнными claims.

**Метрика pilot:** время производства, стоимость одного принятого варианта, доля отклонённых claims, completion rate и CTR клиента. Без этих данных нельзя обещать «успешный креатив».

## 3. Longform Repurposing

**Проблема:** разрешённый длинный материал используется один раз.

**Сценарий:** владелец загружает файл или подтверждает права на URL → transcript с таймкодами → кандидаты фрагментов → человек выбирает → drafts для short, post и email → Media export.

**Что разработать:** source permission gate, цитаты с точными таймкодами, speaker attribution, semantic-change warning, profanity/privacy review и запрет скачивания или переработки чужого контента без разрешения.

## 4. Local Business Landing

Новый builder не нужен. Используем существующий [AI Landing Sprint](ai-landing-sprint.md): brief, официальные факты и assets, wireframe, mobile-first implementation, Playwright QA, security review, human approval и deploy. Бесплатный speculative redesign можно делать только на публичных данных и нельзя публиковать от имени бизнеса или использовать его trademarks так, будто работа согласована.

## 5. Lead Calculator / Quiz

**Проблема:** форма «Оставьте телефон» не объясняет пользователю пользу и не готовит менеджера.

**Сценарий:** 3–7 вопросов → объяснимый предварительный диапазон или маршрут → consent → заявка → человек видит, что будет дальше.

**Что разработать:** versioned formula, unit tests, диапазон вместо ложной точности, доступный keyboard flow, server-side validation, anti-spam и явное согласие на обработку контакта. Медицинские, юридические и кредитные решения таким квизом не принимаются.

## 6. Evidence FAQ Assistant

**Проблема:** команда повторно отвечает на одинаковые вопросы.

**Сценарий:** verified knowledge base → вопрос → ответ с цитатой и датой → `не знаю` при отсутствии evidence → передача человеку.

**Что разработать:** tenant isolation, document allowlist, retrieval citations, freshness date, prompt-injection fixtures, PII redaction, rate limit и escalation. Бот не меняет заказ, не возвращает деньги, не записывает клиента и не обещает условия без отдельного authenticated action flow.

## 7. Public Monitoring Digest — первый коммерческий pilot

Это самый сильный Eclipse-offer: он использует уже существующие исследования Library, read-only capabilities Sentinel и delivery/approval слой Chat.

**Первый сценарий:** еженедельный мониторинг пяти публичных источников для одной ниши.

**Контракт `monitor.digest.v1`:**

- allowlist источников и robots/Terms check;
- baseline snapshot и только реальные изменения;
- цитата, URL, время получения и confidence для каждого события;
- budget, timeout, rate limit, retry и dedupe;
- `no material changes` как нормальный результат;
- draft в Eclipse Chat; внешняя отправка только после approval.

**Метрики 30-дневного pilot:** precision подтверждённых событий, false-positive rate, стоимость одного дайджеста, время ручной проверки и число решений клиента, принятых на основе отчёта.

## Abacus.AI: что подтверждено

Видео демонстрирует все семь сценариев в Abacus.AI. Официальные страницы подтверждают cloud agent, web-app builder, scheduled tasks, image/video models и тарифы: Basic `$10/month` с 20,000 credits и Pro `$20/month` с 30,000 credits на дату проверки. Credits расходуются по-разному в зависимости от модели, разрешения, длительности и hosting; commercial rights зависят от условий конкретной модели.

**Решение:** оставить как `reference`, а не делать обязательной зависимостью Eclipse Forge. Публичные или обезличенные fixtures можно использовать для UX benchmark. Client data, unpublished assets, production credentials и autonomous publishing не передаются до отдельной проверки Terms, privacy, subprocessors, retention и model-specific licenses.

## 30-дневный rollout

1. **Неделя 1:** выбрать один monitoring niche, пять источников и десять known-change fixtures.
2. **Неделя 2:** собрать `monitor.digest.v1`, read-only collector и evidence report в Sentinel.
3. **Неделя 3:** добавить review/approval card в Eclipse Chat и измерить precision/cost.
4. **Неделя 4:** показать двум потенциальным клиентам один sample digest; не подключать accounts, payments или automatic outreach. Product Photo и Creative Pack идут вторым pilot после проверки storyboard/provenance gates.

## Security review

- **Critical / High:** не выявлены в этом документальном изменении; сторонний код не устанавливается.
- **Medium:** права на исходные assets, cloud retention, prompt injection в web/FAQ sources, ложные product claims и утечка контактов. Все риски закрываются allowlist, provenance, citations, tenant isolation и human approval на уровне будущей реализации.
- **Low:** устаревшая цена или feature availability Abacus.AI; перед оплатой нужен повторный checkout.
