# July 2026 backfill and TokenRouter radar

Проверка большой пересланной ленты за июль 2026 и отдельного рекламного сообщения
про TokenRouter/Kimi K3. Цель — не сохранить все ссылки подряд, а отделить подтверждённые
продукты от повторов, demo, рискованных схем и маркетинговых обещаний.

## Итог intake

Implementation follow-up: [GitHub onboarding and Kimi K3 implementation status](kimi-github-implementation-2026-07-31.md).
TokenRouter review boundary: [TokenRouter vendor-risk gate](tokenrouter-vendor-risk-gate.md).

- Разобрано 46 сообщений и все найденные в них ссылки.
- 36 ресурсов уже были в Eclipse Library и не добавлены повторно.
- Shipper дважды повторялся внутри вложения.
- Добавлены пять новых карточек: Footrue ToolBox, официальный GitHub for Beginners roadmap, Language Model Builder, VCamdroid и TokenRouter.
- Существующая карточка Kimi K3 расширена по официальной документации без изменения deep link.
- Mailwave, Leon benchmark demo, Stolen Compute и coupon-testing prompt отклонены.

## Что проверено по Kimi K3

Официальная документация Kimi подтверждает:

- `kimi-k3` — flagship model для long-horizon coding, knowledge work и native vision;
- 2,8 трлн parameters и context до 1 млн токенов;
- запуск 16 июля 2026 года;
- API model selection с `reasoning_effort` `low`, `high` и `max`;
- API работает по pay-as-you-go;
- Kimi заявляет, что API inputs и outputs не используются для обучения моделей.

Последнее утверждение относится именно к API. Общая privacy policy Kimi описывает account,
log, device и user-content data, поэтому consumer UI нельзя считать эквивалентом API по
privacy boundary.

Не подтверждено:

- что Kimi K3 «обогнала Fable 5 и GPT Sol 5.6»;
- что TokenRouter действительно выдаёт 50 млн токенов именно на Kimi K3;
- что акция доступна без карты, для всех регионов и без скрытого billing condition.

Эти формулировки не опубликованы как факты.

## Что проверено по TokenRouter

Официальный сайт существует и заявляет:

- единый OpenAI-compatible endpoint;
- доступ к более чем 300 моделям;
- оплату model usage без дополнительной platform fee.

Публичная страница Models не показала Kimi K3 или условия акции без внутреннего
application/account flow. Полный текст Terms/Privacy и точные upstream/retention условия
также не удалось получить в доступной публичной проверке. Frontend подключает Google
Tag Manager/analytics, Microsoft Clarity и attribution/conversion scripts. Даже если
провайдер заявляет zero retention для prompts и outputs, это не означает отсутствие
request, account, device, billing или analytics metadata.

Решение: не регистрироваться рабочими данными и не интегрировать gateway. Для Eclipse Forge
прямой официальный Kimi API проще проверить юридически, технически и по обработке данных.

## Product decision radar

| Находка | Решение | Проблема и проект | Улучшаемый сценарий | Что разработать | Ценность | Сложность | Риски / зависимости | Приоритет | Следующий шаг |
|---|---|---|---|---|---|---|---|---|---|
| Kimi K3 | Добавить в roadmap | AI Hub, Sentinel и oh-my-claudecode нужен проверенный long-context coding provider | Пользователь даёт большую coding/agent задачу и видит измеримые качество, время и стоимость | Server-side direct-provider adapter и repeatable benchmark harness | Реальная альтернатива текущим providers, если качество/цена подтвердятся | M | Cloud privacy, API cost, key security, latency, provider availability | P1 | Прогнать direct Kimi API на фиксированных synthetic tasks и записать quality, p50/p95, tokens и cost |
| GitHub for Beginners | Внедрить сейчас | Educator-AI и Eclipse Forge Landing нужен понятный onboarding новичка | Новый участник без догадок проходит repository → commit → branch → pull request | Короткий checklist, test repository и ссылки на официальные упражнения | Быстрее первый успешный contribution, меньше ошибок в рабочих repositories | S | GitHub account, актуальность UI, copyright — не копировать статью целиком | P2 | Добавить в Educator-AI 5-шаговый практический модуль с отдельным sandbox repository |
| Language Model Builder | Оставить как reference | Educator-AI нужен наглядный порядок обучения небольшой LLM | Ученик понимает tokenizer, pretraining, SFT и DPO на локальном примере | Собственный provider-neutral учебный сценарий, без встраивания закрытого приложения | Делает сложный pipeline понятным и наблюдаемым | S | Только Apple Silicon/macOS 15+, закрытый binary, dataset licenses | P3 | Выписать структуру урока и подготовить независимый notebook/interactive lesson на публичном dataset |
| VCamdroid | Оставить как reference | Media/Chat/Shotforge изучают camera input со смартфона | Пользователь выбирает телефон как источник video без отдельной webcam | Пока ничего в product; изучить transport и permission UX | Возможный более качественный camera source | S | Admin DLL, ADB, APK sideload, RTSP, firewall, camera privacy, dependency licenses | P3 | Если появится подтверждённый use case — audit pinned source и disposable VM/device proof of concept |
| Footrue ToolBox | Оставить как reference | Library и Media нужна task-first навигация по утилитам | Пользователь выбирает понятное действие «объединить PDF», а не технический формат | Собственные client-side tools с visible privacy state и network tests | Меньше когнитивной нагрузки и быстрый результат | S | Закрытый сайт, неизвестный владелец/лицензия, local-only claim не доказан | P3 | Взять только information architecture; проверить первый собственный file tool тестом «zero network upload» |
| TokenRouter | Не использовать | Gateway мог бы упростить multi-provider routing, но не даёт проверяемой privacy/offer boundary | Интеграция ухудшит доверие: prompts проходят через дополнительного посредника | Ничего, пока vendor не предоставит Terms, DPA, routing, retention и точные promotion limits | Сейчас измеримой ценности поверх прямого Kimi API нет | S | Prompt/output/metadata exposure, billing, upstream changes, analytics, неясный срок акции | P3 | Зафиксировать rejection; пересматривать только после документального ответа vendor и synthetic low-limit test |

## Security review

Сторонние binaries, installers, models, APK, DLL и scripts не запускались.

### High

- **TokenRouter:** непроверенные promotion terms, routing и retention; дополнительный gateway получает чувствительный AI traffic; frontend использует analytics/attribution.
- **VCamdroid:** `install.bat`/`regsvr32` с admin rights, native DLL, APK sideload, USB debugging, ADB, RTSP и firewall rule создают широкую supply-chain и device attack surface.

### Medium

- **Language Model Builder:** закрытый downloadable binary; перед тестом нужны Apple signature/notarization/checksum, отдельный user и публичный dataset.
- **Footrue ToolBox:** закрытая web-реализация; local-only claim нельзя распространять на все инструменты без per-tool network audit.
- **Kimi K3:** официальный cloud API обрабатывает code/prompts/media вне инфраструктуры Eclipse Forge; нужны server-side keys, redaction, safe logging, budgets и timeouts.

### Low

- **GitHub for Beginners:** безопасный официальный учебный материал. Главные ограничения — практиковаться в sandbox repository и не копировать copyrighted content целиком.

Critical findings нет. High-risk материалы оставлены reference/rejected, поэтому regression
test для production integration пока не требуется.

## Исключения

| Материал | Почему не добавлен |
|---|---|
| Mailwave | Повторяет уже описанный disposable inbox QA workflow; продуктовая интеграция поощряла бы обход registration controls |
| Leon benchmark demo | Нет самостоятельного продукта, устойчивого official source и лицензируемого артефакта |
| Stolen Compute | Несанкционированно использовал чужие inference endpoints и закрыт |
| Coupon-testing prompt | Автоматизированный checkout создаёт ToS, rate-limit и accidental-purchase risk без уникальной ценности |

## Primary sources

- [Kimi K3 Help](https://www.kimi.com/code/docs/en/kimi-k3.html)
- [Kimi API data security](https://platform.moonshot.ai/docs/guide/data-security)
- [Kimi API model selection](https://platform.moonshot.ai/docs/guide/use-kimi-k3-model)
- [TokenRouter](https://www.tokenrouter.com/)
- [GitHub for Beginners roadmap](https://github.blog/developer-skills/github/github-for-beginners-your-roadmap-to-mastering-the-github-essentials/)
- [Language Model Builder](https://languagemodelbuilder.com/)
- [Language Model Builder privacy](https://languagemodelbuilder.com/privacy/)
- [VCamdroid canonical repository](https://github.com/darusc/VCamdroid)
- [Footrue ToolBox](https://footrue.com/)
