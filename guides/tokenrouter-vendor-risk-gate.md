# TokenRouter vendor-risk gate

> Практический стоп-лист для Eclipse Forge: TokenRouter нельзя подключать, передавать ему API-ключи, prompts, ответы, код или рабочие данные, пока vendor не закроет юридические, privacy, routing и promotion-вопросы ниже.

## Текущее решение

- **Решение:** `Не использовать`.
- **Статус:** blocked до документальной проверки.
- **Risk tier:** **High**.
- **Владелец решения:** Eclipse AI Hub как owner общего AI gateway boundary.
- **Область запрета:** Eclipse AI Hub, Eclipse Hopson Sentinel, oh-my-claudecode и любые другие проекты Eclipse Forge.
- **Безопасная альтернатива:** прямой официальный Kimi API на synthetic задачах с отдельным test key и жёстким бюджетом.

## Почему tier High

| Фактор | Значение | Баллы |
|---|---|---:|
| Data sensitivity | confidential: prompts, code и model outputs могут содержать рабочий контекст | 3 |
| Access | network API получает полный request/response traffic | 3 |
| Criticality | medium: gateway может влиять на agent/coding workflows | 2 |
| Integration | deep: становится посредником между продуктом и upstream models | 2 |
| Regulated scope | пока запрещён для PII/biometrics/payment/health data | 0 |
| Concentration | не должен становиться единственной точкой routing | 0 |
| **Итого** |  | **10 → High** |

Для High-tier vendor нужны как минимум SIG Core, SOC 2 Type II и актуальное pen-test summary. На 31 июля 2026 года эти доказательства не получены.

## Блокирующие evidence gaps

### 1. Vendor identity и договор

- полное юридическое наименование;
- страна регистрации и адрес;
- сторона, которая выставляет счёт и отвечает за API;
- действующие Terms of Service для API, а не только marketing page;
- право vendor менять upstream, цены, лимиты и условия;
- порядок расторжения, возврата остатка и удаления account data.

### 2. DPA и обработка данных

- доступный DPA;
- роли controller/processor;
- категории prompts, outputs, metadata, account, billing и device data;
- цели обработки;
- retention для каждого типа данных;
- backup retention и срок окончательного удаления;
- использование данных для training, evaluation, abuse review или human review;
- data residency, cross-border transfer mechanism и доступные регионы;
- процедура data subject requests, если в scope появятся персональные данные.

### 3. Routing и subprocessors

- точный upstream provider для `kimi-k3`;
- может ли route меняться без уведомления;
- полный список subprocessors и четвёртых сторон;
- передаётся ли upstream исходный prompt, system prompt, tool schema, файлы и metadata;
- какие analytics/attribution systems получают request/account metadata;
- есть ли zero-retention route и как он технически подтверждается;
- кто отвечает при outage, abuse block, model replacement или upstream policy change.

### 4. Security evidence

- SIG Core или эквивалентный questionnaire;
- SOC 2 Type II;
- актуальное pen-test summary и статус Critical/High remediation;
- encryption in transit/at rest;
- key storage, rotation и revocation;
- RBAC, MFA, audit logs и incident response;
- breach notification SLA;
- vulnerability disclosure process;
- business continuity и disaster recovery.

### 5. Условия акции

- официальный документ, подтверждающий 50 млн Kimi K3 tokens;
- начало, окончание, регионы и eligibility;
- нужна ли карта сейчас или при исчерпании grant;
- auto-charge, trial conversion и overage rules;
- rate limits, expiry и перенос остатка;
- допустимые use cases и запретные нагрузки;
- является ли grant токенами Kimi K3 или внутренними credits с другим пересчётом.

## Contract requirements до любого pilot

- DPA и security appendix;
- breach notification не позднее 48 часов после обнаружения;
- prior notice о новых subprocessors и изменении routing;
- право прекратить обработку при неприемлемом upstream;
- data return и certified deletion после прекращения;
- запрет training на Eclipse data без отдельного opt-in;
- фиксированный retention для prompts/outputs и metadata;
- audit/right-to-evidence;
- ответственность за upstream failures и billing errors;
- hard spend cap без автоматического увеличения.

## Технический gate после документов

Даже закрытые документы не разрешают production integration автоматически. Сначала нужен отдельный pilot:

1. новая service identity и disposable key без доступа к другим проектам;
2. synthetic prompts без клиентских, личных и приватных данных;
3. минимальный баланс и hard budget;
4. allowlist только одной модели и одного endpoint;
5. timeout, rate limit, circuit breaker и ручной kill switch;
6. логи только с latency, status, token count и cost — без prompt/output;
7. повторный запрос vendor о фактическом upstream route;
8. удаление key, проверка billing и запрос deletion evidence после теста.

## Exit criteria

Пересмотреть решение `Не использовать` можно только когда:

- все evidence gaps закрыты документами;
- security/legal owner зафиксировал residual risk;
- договор и DPA приняты;
- synthetic pilot не выявил скрытый routing, лишнюю telemetry или billing drift;
- TokenRouter показывает измеримое преимущество над прямым Kimi API по цене, доступности или качеству;
- существует простой rollback на прямого approved provider.

До этого регистрация с рабочими данными, пополнение баланса, создание production key и отправка реальных prompts запрещены.
