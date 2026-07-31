# GitHub onboarding and Kimi K3 implementation status

> Что реально сделано по июльским рекомендациям Eclipse Library, где проходит граница production и почему три reference-находки не превращены в зависимости.

## Краткий статус

| Направление | Решение | Реализация |
|---|---|---|
| GitHub for Beginners | Внедрить сейчас | Educator-AI получил интерактивный browser-only onboarding из пяти шагов с локальным прогрессом |
| Kimi K3 | Добавить в roadmap | Eclipse AI Hub владеет network-gated benchmark harness; Sentinel и OMC используют отдельные synthetic suites |
| Language Model Builder | Reference | В Educator-AI зафиксирована только структура будущего provider-neutral урока |
| VCamdroid | Reference | В Sentinel закреплён только camera/permission UX pattern и disposable-VM boundary |
| Footrue ToolBox | Reference | Eclipse Library сохраняет task-first information architecture; код и privacy claims сайта не копируются |
| TokenRouter | Не использовать | Создан отдельный [vendor-risk gate](tokenrouter-vendor-risk-gate.md); prompts, keys и рабочие данные запрещены |

## Educator-AI: GitHub onboarding

### Какую проблему решает

Новичок видит слова repository, branch, commit и pull request, но не понимает, что делать первым и как не испортить чужой проект.

### Что разработано

- один очевидный CTA «Начать практику» в разделе курсов;
- пять коротких шагов: repository → branch → commit → pull request → merge;
- объяснение результата и смысла каждого шага простым языком;
- self-check перед переходом дальше;
- прогресс в `localStorage`, возврат к любому шагу и безопасный reset с подтверждением;
- EN/RU copy;
- прямые ссылки на официальный GitHub Hello World;
- warning не добавлять secrets и личные данные;
- весь маршрут работает без Gemini key, CLI и установки Git.

### Ценность и следующий шаг

- **Ценность:** быстрее получить первый успешный GitHub Flow, не рискуя production repository.
- **Сложность:** S.
- **Приоритет:** P2.
- **Следующий шаг:** измерить completion rate по пяти шагам без записи repository names или GitHub identity.

## Direct Kimi K3 benchmark

### Архитектурное решение

Один harness находится в Eclipse AI Hub. Это не production adapter. По умолчанию команда показывает план и не делает network request:

```bash
npm run benchmark:kimi-k3 -- --suite all
```

Live-запуск требует одновременно:

- `--execute`;
- `KIMI_BENCHMARK_ALLOW_NETWORK=1`;
- отдельный `KIMI_API_KEY` из process environment.

Endpoint и model зафиксированы в коде; custom URL, prompt file и repository path не принимаются.

### Suites

| Suite | Что измеряет |
|---|---|
| `ai-hub` | structured answer и отказ выдумывать отсутствующий источник |
| `sentinel` | safe next action и блокировку underspecified destructive action |
| `omc` | dependency order и границу parallel/sequential agent tasks |

Отчёт содержит pass/fail, latency, token counts и SHA-256 output. Raw prompts, raw output, keys, response body, repository data и personal data не сохраняются.

### Privacy и legal review

Официальный Kimi API пишет, что API inputs/outputs не используются для обучения модели,
передаются по TLS и обрабатываются для выполнения запроса и content-safety. В документах
также указано, что данные могут обрабатываться и храниться в материковом Китае, а срок
хранения описан как «необходимый» без единого публичного фиксированного значения для всех
категорий. Публичного полного списка subprocessors и готового self-service DPA не найдено;
по официальной справке DPA запрашивается через enterprise sales.

Практический вывод:

- synthetic benchmark без client/private data допустим только с отдельным test key и жёстким
  provider spending cap;
- production code, персональные данные, клиентские документы и секреты запрещены до
  согласования DPA, региона/резидентности, retention и incident/deletion process;
- заявление `not used for training` не означает zero retention и не заменяет договорную
  privacy-проверку.

Официальные источники:

- [API data security](https://www.kimi.com/help/kimi-api/api-data-security)
- [Open Platform privacy policy](https://platform.kimi.com/docs/agreement/userprivacy)
- [API pricing](https://www.kimi.com/help/kimi-api/api-pricing)
- [Data usage and DPA](https://www.kimi.com/help/others/data-usage)

### Что ещё не сделано

Live benchmark не запускался: в environment нет отдельного `KIMI_API_KEY` с low spending
limit. Это единственный runtime-блокер для synthetic suite; ключ нельзя присылать в чат или
записывать в repository. Kimi не добавлен в production allowlist.

## Почему reference остаются reference

### Language Model Builder

Полезен порядок tokenizer → pretraining → SFT → preference optimization и наблюдаемость обучения. Закрытый macOS binary не встраивается. Будущий урок должен быть независимым, provider-neutral и использовать dataset с понятной лицензией.

### VCamdroid

Полезна идея телефона как camera input и permission flow. Реальная установка включает admin DLL, APK, ADB/USB debugging, RTSP и firewall changes. Без отдельного use case, source audit, disposable Windows VM и отдельного Android device продуктовый pilot запрещён.

### Footrue ToolBox

Полезна task-first навигация: пользователь выбирает «объединить PDF», а не технический формат. Реализация закрыта, owner/license неясны, local-only claim не доказан per tool. Eclipse Library заимствует только information architecture; собственный file tool потребует zero-network-upload test и видимое privacy state.

## Security outcome

- **Critical:** нет.
- **High, mitigated by rejection:** TokenRouter и VCamdroid не получили runtime integration.
- **Medium, controlled:** Kimi harness принимает только synthetic tasks и закрыт двойным execution gate; Language Model Builder и Footrue остаются идеями без code reuse.
- **Low:** GitHub onboarding использует официальный материал, browser sandbox и не просит token.
