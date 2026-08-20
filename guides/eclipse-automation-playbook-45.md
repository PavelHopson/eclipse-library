# Eclipse Automation Playbook: 45 сценариев без автономного хаоса

> Практический разбор карусели от 20.08.2026: не «Claude делает всё», а 45 bounded workflows с понятным входом, результатом, owner, evidence и обязательным approval перед внешним действием.

## Главный вывод

Карусель правильно показывает повторяемые офисные задачи, но смешивает три разных уровня:

1. **Read-only analysis** — собрать, разобрать, посчитать и предложить.
2. **Draft workflow** — подготовить текст, план, таблицу или diff для проверки человеком.
3. **External action** — отправить письмо, опубликовать пост, изменить CRM, переместить файл или создать счёт.

Первые два уровня подходят Eclipse Forge. Третий не выполняется автоматически: интерфейс обязан показать понятный diff, адресата, последствия и кнопку подтверждения.

Базовый pipeline:

`source → evidence → normalized input → draft → claim/risk review → human approval → action → receipt → metrics`

## Что внедряем первым

| Сценарий | Проект | Проблема и пользовательский результат | Что разработать | Ценность | Сложность | Риск | Приоритет | Следующий шаг |
|---|---|---|---|---|---|---|---|---|
| Official news scanner | Library + Sentinel | находки теряются; редактор получает очередь новых официальных источников | allowlisted RSS/site connectors, dedupe, freshness и evidence packet | меньше ручного мониторинга | M | robots, rate limits, prompt injection | P1 | собрать 10 официальных feeds и 30 fixtures |
| Draft + repurposing | Growth OS + AI Hub | один материал вручную переписывается под каждый канал | Article → Telegram/VK/LinkedIn/short-script с locked facts и claim diff | выше output на один research cycle | M | искажение фактов, channel Terms | P1 | versioned `content.draft.v1` и 12 pilot materials |
| Content plan | Growth OS + Chat | идеи не превращаются в последовательный план | weekly board с objective, audience, evidence, CTA, owner и status | видимый production flow | S | vanity calendar без KPI | P1 | завершить Content Plan в Command Center |
| SEO optimizer | Library + Landing | страницы теряют search intent и technical hygiene | read-only audit, issue evidence, PR-only fixes | измеримый organic discovery | M | keyword stuffing, неверные claims | P1 | baseline Search Console + 10 public pages |
| Weekly performance report | Growth OS + Chat | решения принимаются по ощущениям | normalized channel metrics, median/baseline, winning pattern и next experiment | feedback loop вместо контент-конвейера | M | плохая атрибуция | P1 | зафиксировать KPI schema и baseline |
| Competitor and industry monitor | Library + Growth OS | важные изменения замечаются поздно | public-only sources, change events, citations и expiry | быстрее продуктовые решения | M | ToS, персональные данные | P1 | 5 компаний и 5 официальных sources |
| Survey and FAQ synthesis | AI Hub + Chat | ответы и вопросы остаются неструктурированными | cluster → evidence quotes → proposed FAQ → owner review | лучше onboarding и support | S | privacy, cherry-picking | P1 | synthetic fixtures без PII |
| Voice note → tasks and ideas | Chat + Sentinel | голосовые мысли теряются | local STT, draft tasks, source audio retention policy, confirm | быстрый capture без ручной расшифровки | M | биометрия, ошибочная транскрипция | P1 | local push-to-talk benchmark |
| Testimonials collector | Growth OS + Landing | сильные отзывы не доходят до сайта | consent flag, source link, quote bounds и approval | social proof с provenance | S | privacy, fabricated endorsements | P1 | consent schema и 10 synthetic examples |
| Weekly review | Chat + Growth OS | задачи, блокеры и метрики разбросаны | read-only aggregation → draft review → confirmed priorities | управляемая неделя | S | stale task data | P1 | один tenant-scoped pilot |
| Client call brief and follow-up | Chat + Growth OS | контекст встречи собирается вручную | approved CRM/mail context → brief/draft → recipient preview | экономия времени на коммуникации | M | confidential data, wrong recipient | P2 | threat model scopes/retention |
| Knowledge base update | Library + Chat | решения остаются в чатах | candidate insight → source → reviewer → versioned article | меньше повторных объяснений | M | превращение мнения в факт | P2 | proposal-only workflow |
| Proposal, estimate and invoice draft | Growth OS | коммерческие документы собираются вручную | controlled templates, immutable inputs, tax/legal warning, manual send | быстрее sales ops | M | финансовая и юридическая ошибка | P2 | только synthetic draft pilot |

## Полная карта 45 сценариев

### Контент, 1–10

1. Сканер трендов — **внедрить сейчас** только для allowlisted public sources.
2. Черновик статьи — **внедрить сейчас** с citations и locked claims.
3. Конвертер статьи в thread — **внедрить сейчас** как draft.
4. Варианты заголовков — **внедрить сейчас** как experiment hypotheses, не «гарантию клика».
5. Контент-план — **внедрить сейчас** с KPI и owner.
6. Сборщик рассылки — **roadmap**; отправка только после approval.
7. Адаптер под соцсети — **внедрить сейчас** без автопубликации.
8. SEO-оптимизатор — **внедрить сейчас** как evidence-backed audit.
9. Отчёт по эффективности — **внедрить сейчас** после нормализации метрик.
10. Voice note → article — **roadmap**; local STT и factual review обязательны.

### Почта и коммуникации, 11–20

11. Сортировка входящих — **roadmap**, read-only metadata first.
12. Follow-up tracker — **roadmap**, письмо остаётся draft.
13. Подготовка к звонкам — **roadmap**, минимальные scopes и retention.
14. Саммари встречи — **roadmap**, consent и source transcript.
15. Персонализированное cold intro — **не использовать автономно**; только opt-in/manual sales draft.
16. Клиентский статус — **roadmap**, данные только из approved task source.
17. Slack/chat digest — **roadmap**, tenant ACL и redaction.
18. Вежливый отказ — **reference/draft**, решение принимает человек.
19. Благодарственное письмо — **reference/draft**, без выдуманных деталей.
20. FAQ из повторных вопросов — **внедрить сейчас** с provenance.

### Аналитика и research, 21–30

21. Мониторинг конкурентов — **внедрить сейчас**, public-only.
22. Отраслевой дайджест — **внедрить сейчас**, только с citations.
23. Саммари отчётов — **внедрить сейчас**, выводы отделять от фактов.
24. Оценка рынка — **reference**, числа требуют primary evidence и диапазонов.
25. Анализ опросов — **внедрить сейчас** на обезличенных данных.
26. Разбор договоров — **reference/triage**, не юридическое заключение.
27. Patent scan — **reference/triage**, не freedom-to-operate opinion.
28. Конспекты книг — **reference**, учитывать copyright и не воспроизводить текст.
29. Прогноз трендов — **reference**, показывать assumptions и uncertainty.
30. Анализ таблиц — **внедрить сейчас** с schema validation и reproducible formulas.

### Файлы, 31–37

31. Чистка Downloads — **не выполнять автоматически**; только proposal с preview.
32. Обработка чеков — **roadmap**, OCR + human verification + encrypted storage.
33. Массовое переименование — **roadmap**, dry-run manifest и rollback.
34. Склейка PDF — **roadmap**, sandbox parser и explicit ordering.
35. Обновление базы знаний — **внедрить сейчас** как versioned proposal.
36. Генератор invoice — **roadmap**, только draft и financial approval.
37. Контроль backups — **внедрить сейчас** как read-only integrity report; restore test отдельно.

### Бизнес-процессы, 38–45

38. Итоги недели — **внедрить сейчас**.
39. Генератор коммерческого предложения — **roadmap**, template + approved facts.
40. Сборщик отзывов — **внедрить сейчас** только с consent/provenance.
41. Onboarding клиентов — **roadmap**, task template и named owner.
42. Расчёт сметы — **roadmap**, assumptions and ranges, human sign-off.
43. SOP/regulation draft — **внедрить сейчас** как versioned proposal.
44. Goal tracker — **внедрить сейчас** с plan/fact и corrective action.
45. Brain dump → tasks/ideas/noise — **внедрить сейчас**; ничего не отправлять и не удалять.

## Обязательные состояния интерфейса

- `loading`: что читается и сколько источников осталось;
- `empty`: как добавить первый источник или fixture;
- `error`: какой connector/source не сработал и что сохранено;
- `draft`: результат ещё не одобрен;
- `needs evidence`: claim без подтверждения;
- `approval required`: точный diff, адресат, scope и последствия;
- `success`: receipt с версией, временем и actor;
- `cancelled`: частичный результат сохранён без внешнего действия.

## Что измерять

- время от source до approved artifact;
- доля claims с primary evidence;
- число ручных исправлений на artifact;
- conversion к qualified product visit/lead, а не только views;
- стоимость и latency на workflow;
- rejected drafts и причины;
- external actions без receipt — целевое значение **0**.

## Security boundary

Недоверенный сайт, письмо, PDF, transcript или social post считается данными, а не инструкцией. Агент не получает browser cookies, production secrets, платёжные полномочия или широкие OAuth scopes. Удаление, отправка, публикация, deploy, платёж и изменение аккаунта всегда требуют отдельного подтверждения непосредственно перед действием.
