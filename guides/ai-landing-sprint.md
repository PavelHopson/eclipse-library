# AI Landing Sprint: от идеи до production без магического мышления

> Безопасный workflow Eclipse Forge: быстро получить убедительный preview, а затем пройти проверку фактов, прав, кода, mobile UX, безопасности и deploy до публикации.

## Что это такое

AI Landing Sprint помогает за короткую сессию собрать первый рабочий черновик лендинга: уточнить оффер, подготовить визуалы, написать интерфейс и показать результат в браузере. Это способ быстрее начать разработку, а не обещание «сайта за 30 минут» или гарантированной продажи за определённую сумму.

Готовым считается не красивый screenshot, а страница, у которой подтверждены тексты и права на материалы, работают формы и CTA, есть mobile-версия, проверки безопасности, аналитика, deploy и понятный rollback.

## Перед стартом: четыре коротких документа

1. **Business brief:** кто пользователь, какую проблему решаем, какой один главный CTA и как измеряем успех.
2. **Evidence register:** источник для каждой цены, цифры, гарантии, отзыва и характеристики.
3. **Asset register:** владелец каждой фотографии, иллюстрации, музыки, голоса, логотипа и разрешённый способ использования.
4. **Data boundary:** какие данные можно отправлять внешним AI providers, какой бюджет и где хранятся API keys.

Если подтверждения нет, текст помечается как draft и не попадает в production.

## Понятный путь от идеи до публикации

### 1. Сформулировать результат

Запишите одним предложением: «Для кого страница, что человек поймёт за три секунды и какое действие сделает». Выберите один primary CTA. Остальные действия должны быть визуально слабее.

### 2. Проверить факты и права

- Не переносите фотографии из объявления, сайта конкурента или соцсети без разрешения.
- Не придумывайте цену, гарантию, скидку, срок, статистику или отзыв.
- Для реального лица или голоса получите явное согласие и зафиксируйте его.
- Для каждого внешнего сервиса проверьте Terms, Privacy, коммерческие права и стоимость на дату запуска.

### 3. Собрать wireframe до генерации картинок

Минимальный landing flow: понятный hero, проблема, решение, доказательства, следующий шаг и контакты. Сначала проверяем порядок блоков и смысл, затем стиль. `Taste Skill / design-taste-frontend` можно использовать как проверенный reference для иерархии и anti-slop review, но инструкции следует читать перед применением и привязывать к проверенной revision.

### 4. Подготовить визуальные draft-материалы

Krea, Nano Banana Pro и Kling 3.0 — необязательные cloud providers, а не фундамент продукта.

- Используйте только собственные, лицензированные или синтетические fixtures.
- Записывайте provider, точную модель, версию, промпт, цену и происхождение исходников.
- Не загружайте клиентские секреты, документы, биометрию и production data без отдельного согласования.
- Изображения и видео остаются draft до проверки человеком.
- У Krea app subscription и API balance разделены. Enterprise Zero Data Retention и DPA нельзя считать включёнными в обычный аккаунт без письменного подтверждения.
- Kling AI 3.0 уже доступен официально, но consumer Terms требуют письменного разрешения для коммерческого использования Output и маркировку Kling AI. До отдельного API/enterprise contract используйте его только как reference, не как production provider.

### 5. Собрать код в изолированной рабочей области

Агент получает минимальные права и работает только в согласованном репозитории. Не давайте «больше разрешений», чтобы скрыть ошибку: сначала прочитайте команду, diff и причину запроса. Secrets остаются в безопасном хранилище, не во frontend, промпте, логе или Git.

### 6. Провести content и claim audit

Редактор сверяет страницу с evidence register. Неподтверждённые superlatives, гарантии результата и фальшивый social proof удаляются. AI-generated visuals не должны выглядеть как фотографическое доказательство существующего товара, офиса или клиента, если это не так.

### 7. Довести preview до production

| Поверхность | Что обязательно проверить |
|---|---|
| Контент | Факты, цены, оффер, контакты, CTA, орфография |
| Права | Исходники, лица, голоса, музыка, логотипы, attribution |
| Frontend | loading, empty, error, success, disabled, keyboard focus |
| Mobile | 320–430 px, отсутствие прыжков scroll, читаемость, touch targets |
| Accessibility | semantic HTML, контраст, alt, focus order, reduced motion |
| Формы и backend | validation, rate limit, spam protection, error recovery |
| Security | XSS, CSRF, URL/import validation, secrets, dependencies, CSP |
| Performance и SEO | image sizes, fonts, metadata, Open Graph, Core Web Vitals |
| Production | analytics, monitoring, backup, deploy preview и rollback |

### 8. Получить human approval и только потом публиковать

В Eclipse Chat показываем понятный diff: что изменилось в тексте, цене, визуалах, коде и данных. Кнопка публикации доступна только после content, rights, QA и security gates. Автопубликация по результату генерации запрещена.

## Как применить в проектах Eclipse Forge

| Проект | Сценарий | Что разработать | Ценность | Сложность / приоритет |
|---|---|---|---|---|
| Eclipse Forge Landing | Кампании, новые продукты и case pages | Шаблон brief, evidence register и production checklist | Быстрее выпускать страницы без выдуманных claims | M / P1 |
| Eclipse AI Hub | Landing Studio | Orchestrator Researcher → Strategist → Designer → Developer → Claim Auditor | Повторяемый управляемый workflow | L / P1 |
| Eclipse Chat | Review room | Preview, role-based approvals, diff и журнал решений | Понятное человеческое подтверждение | M / P1 |
| Eclipse Media + Shotforge | Key visuals и короткие product demos | Provider registry, provenance, cost preview и draft queue | Быстрый repurposing без скрытых расходов | L / P2 |
| Hopson Sentinel | Read-only quality gate | Проверка ссылок, claims, responsive QA, dependency и secret scan | Меньше production-регрессий | M / P1 |
| Text2Image | Benchmark image providers | Единые fixtures, quality/latency/cost report | Выбор модели по данным, а не рекламе | M / P2 |
| Eclipse DnD Forge | Лендинг кампании и визуальные reference cards | Шаблоны кампании и безопасные synthetic assets | Быстрый запуск кампаний без использования чужих IP | M / P2 |

## Редакционное решение

### Внедрить сейчас — P1 / M

Использовать этот sprint как внутренний template для новых лендингов. Следующий шаг: провести один реальный pilot на новой странице Eclipse Forge Landing и измерить время до preview, число правок, mobile defects и неподтверждённых claims.

### Добавить в roadmap — P1 / L

Собрать собственный Landing Studio в Eclipse AI Hub, review room в Eclipse Chat и read-only gates Sentinel. Зависимости: structured brief, provenance schema, RBAC, audit log, provider registry, budget limits и rollback.

### Оставить как reference

- Krea — unified creative workspace и сравнение providers.
- Nano Banana Pro — controlled image generation/edit benchmark.
- Kling AI 3.0 — reference для video UX и native-audio pipeline; benchmark допустим только после письменного legal gate и на безопасных fixtures.
- Taste Skill — иерархия, anti-slop review и базовые правила интерфейса.

### Не использовать

- Скопированные marketplace-фотографии без разрешения.
- Выдуманные гарантии, цены, отзывы и статистику.
- Клонирование реального лица или голоса без явного consent.
- Blind approval команд агента, secrets во frontend и автономный deploy.
- Обещание, что AI заменяет production-команду или гарантирует продажу за фиксированную сумму.

## Источники и дата проверки

- [Разобранное видео: «30 минут + ИИ = сайт, который можно продать за 100 000 ₽»](https://www.youtube.com/watch?v=YlpG4B6Nvh8)
- [Krea pricing](https://www.krea.ai/pricing), [Krea API](https://www.krea.ai/features/api), [Terms](https://www.krea.ai/terms), [Privacy](https://www.krea.ai/privacy) и [Trust Center](https://trust.krea.ai/?format=html)
- [Google Gemini 3 Pro Image](https://ai.google.dev/gemini-api/docs/models/gemini-3-pro-image), [pricing](https://ai.google.dev/gemini-api/docs/pricing) и [image generation](https://ai.google.dev/gemini-api/docs/image-generation)
- [Kling AI 3.0](https://kling.ai/), [VIDEO 3.0 guide](https://kling.ai/quickstart/klingai-video-3-model-user-guide), [Terms](https://kling.ai/docs/user-policy), [Privacy](https://kling.ai/docs/privacy-policy) и [Kuaishou release](https://ir.kuaishou.com/node/11216/pdf)

Проверено редакцией Eclipse Library: **10.08.2026**. Цены, rollout моделей, Terms и региональная доступность меняются — их нужно повторно проверить перед оплатой и production-интеграцией.
