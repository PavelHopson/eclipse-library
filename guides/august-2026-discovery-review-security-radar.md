# Discovery, review и provenance: безопасный разбор августовской подборки

> Проверено 12.08.2026 по официальным сайтам, GitHub-репозиториям, лицензиям и документации.
> Eclipse Library не устанавливает найденные CLI, APK или skills и не подключает аккаунты.

## Короткое решение

| Находка | Решение | Проект и пользовательский сценарий | Что разработать | Ценность | Сложность / приоритет | Риск и следующий шаг |
|---|---|---|---|---|---|---|
| Human Review | Добавить в roadmap | Landing, Library, Chat, AI Hub: человек комментирует или правит локальный HTML/Markdown перед merge | Изолированный visual-review pilot с bounded worktree, понятным diff и approve/reject | Быстрее собирать точную обратную связь по UI и текстам | M / P1 | Локальный editor пишет в файлы; pin commit, не давать secrets, проверить весь diff |
| Rejudge | Добавить в roadmap | AI Hub Code Review, Sentinel, oh-my-claudecode: несколько независимых review и финальный judge | Read-only benchmark на synthetic fixtures с известными дефектами, budget cap и quality baseline | Меньше пропущенных дефектов, если ensemble оправдает стоимость | M / P1 | Код и prompt уходят нескольким providers; `--unsafe` и `--full` запрещены |
| C2PA Content Credentials | Добавить в roadmap | Eclipse Media, Shotforge, Text2Image: пользователь проверяет происхождение экспортированного media | Сначала verification-only Provenance Passport; signing — отдельный проект с key management | Понятнее происхождение asset и история изменений | M / P1 | Credential не доказывает истинность, а его отсутствие не доказывает подделку |
| Soup CLI | Добавить в roadmap | AI Hub Model Registry: controlled fine-tuning/evaluation lab для небольшой open model | Isolated GPU job, dataset/model license gate, reproducible config, eval и artifact provenance | Собственный измеряемый training workflow вместо набора случайных notebooks | L / P2 | Код обучения и шаблоны исполняются; только container, public dataset и test key |
| Roamers | Оставить как reference | Library и Sentinel: discovery активных GitHub-проектов без ranking по stars | Взять идею momentum-сигнала, но сохранить task-first выдачу и редакторское решение | Ещё один сигнал свежести для intake queue | S / P3 | Proprietary сервис и OAuth; сначала только публичные ссылки без входа |
| Vectras VM | Оставить как reference | Sentinel lab и mobile QA: UX запуска изолированных Android VM | Не интегрировать APK; изучить только VM profiles, import states и mobile controls | Идеи для disposable lab и Android testing | M / P3 | Образы ОС, QEMU surface и APK supply chain; VM не считать security boundary |
| Awesome Mac | Оставить как reference | Library: источник кандидатов для macOS-категории | Ручной intake отдельных tools с собственной проверкой license/privacy | Расширяет platform coverage без массового импорта | S / P3 | LICENSE списка и badge README расходятся; условия каждого приложения отдельные |
| TabiToken | Не использовать | Нигде до появления проверяемых Terms/Privacy/DPA и owner identity | Ничего не подключать и не создавать API key | Сейчас измеримой ценности нет | S / P0 block | Claims о бесплатных моделях и сумме не подтверждены; карточка исключена из agent recommendations |

## Что уже было в библиотеке

Повторно не добавлялись Hermes Skills Hub, NemotronLabs VoiceChat, Qwen3 Audiobook Converter,
freeLLM, nodumbmode, Checklist Design, Grok Imagine, Sia Storage, CasaOS, Jellyfin, Nextcloud,
Home Assistant, AdGuard Home, Paperless-ngx, Frigate, Ollama, FreshRSS, Kiwix и подборка
дизайн-референсов. Эти записи уже прошли отдельный разбор; новая Telegram-формулировка не является
новым продуктом или новым доказательством.

Selectel VDS в сообщении является affiliate-рекламой, а не новой технологической находкой.
Его не добавляем второй карточкой. Решение об инфраструктуре принимается по benchmark, SLA,
региону, backup и полной стоимости, а не по реферальному обещанию.

## Human Review: где действительно полезен

Human Review решает узкую и понятную проблему: reviewer видит HTML или Markdown в браузере,
оставляет привязанные комментарии и может передать правку обратно агенту. Это не замена code review
и не разрешение агенту менять production.

Pilot для Eclipse Forge:

1. Агент собирает preview только из disposable worktree.
2. Review root ограничивается папкой текущего artifact; `.env`, keys, customer data и соседние проекты
   недоступны.
3. Пользователь оставляет комментарии или вносит небольшие визуальные правки.
4. Агент показывает semantic summary и обычный `git diff`.
5. Только явный approve разрешает перенос изменений в рабочую ветку.
6. Typecheck, tests, responsive QA и security review остаются обязательными.

Метрика pilot: время от первого preview до approved diff, число циклов уточнения и доля правок,
которые пришлось переделать после автоматических проверок.

## Rejudge: ensemble только после benchmark

Несколько reviewers могут находить разные дефекты, но количество моделей само по себе не означает
лучшее решение. Каждый provider получает прочитанный reviewer код и prompt, растут стоимость,
latency и поверхность утечки. Финальный judge видит отчёты, но также может ошибиться.

Безопасный benchmark:

- 20–30 synthetic fixtures с заранее известными correctness, security и maintainability дефектами;
- одинаковый pinned prompt и temperature/config для повторных trials;
- только read-only tools, без `--unsafe`, `--full`, write и shell;
- обезличенный код без production secrets и customer payloads;
- hard budget, timeout, provider allowlist и redacted logs;
- сравнение recall, false positives, latency и стоимости с одним сильным reviewer;
- human принимает каждое исправление, judge ничего не применяет.

Продолжать интеграцию стоит только если ensemble даёт воспроизводимый прирост качества,
а не просто более длинный отчёт.

## C2PA: provenance, а не «детектор правды»

C2PA описывает подписанные Content Credentials для происхождения и истории изменений media.
Это opt-in механизм: он не ставит универсальный скрытый watermark на любой текст или код,
не определяет истинность содержания и не позволяет считать файл без credential поддельным.

Первый этап для Eclipse Media, Shotforge и Text2Image должен быть verification-only:

- прочитать manifest и validation status;
- показать issuer, asset hash/binding, actions и доступную цепочку provenance;
- явно различить `valid`, `invalid`, `missing` и `unsupported`;
- не загружать private asset во внешний verifier без согласия;
- сохранить исходный файл и verification report рядом с export job.

Signing требует отдельного threat model: изолированных ключей, rotation/revocation, timestamping,
прав доступа, audit и восстановления после компрометации. Советы по удалению или обходу provenance
в библиотеку не добавляются.

## Soup CLI: не запускать обучение на основной машине

Soup объединяет preparation, fine-tuning, evaluation, export и serving. Это полезный reference для
будущего Model Training Lab, но README-обещания о размере модели и VRAM не заменяют benchmark.
Кроме Apache-2.0 самого кода, отдельно проверяются лицензии base model, dataset, adapter,
generated artifacts и подключаемых providers.

Минимальный spike:

1. Только public permissive dataset без PII и один небольшой model.
2. Pinned source/dependencies и ephemeral GPU container без workspace/secrets.
3. Network deny-by-default; разрешённые downloads фиксируются hashes и provenance.
4. Ограничения disk, VRAM, runtime и spend.
5. Holdout evaluation, contamination check и сравнение с неизменённой base model.
6. Export публикуется только после license/model-card/security review.

## Defensive secret response

Инструкция «найти в интернете чужие утёкшие API-ключи» не является полезным инструментом и не
добавлена. Если ключ собственного проекта оказался публичным, безопасный сценарий такой:

1. Немедленно revoke/rotate key, а не проверять, работает ли он.
2. Проверить provider audit logs, usage, bills и созданные credentials.
3. Удалить секрет из текущего дерева и истории только по согласованной incident-процедуре.
4. Добавить secret scanning, pre-commit/CI gate и least-privilege scoped credentials.
5. Зафиксировать affected period, impact и действия; считать ключ скомпрометированным навсегда.

## Исключённые и неподтверждённые пункты

- Курс «бывших экспертов Google на три часа» не имеет URL, владельца, syllabus и license — проверить
  существование и добавить карточку невозможно.
- Заявление о «Claude Opus 4.8/5» у TabiToken не соответствует проверяемому официальному model id.
- Заявление, что весь текст и код Claude автоматически содержит универсальную C2PA-метку, официальной
  спецификацией C2PA не подтверждается.
- Рекламные цифры, stars, позиции в trending и Telegram-оценки не считаются доказательством качества.

## Официальные источники

- [Human Review](https://github.com/petergyang/human-review)
- [Rejudge](https://github.com/syabro/rejudge)
- [Vectras VM](https://github.com/xoureldeen/Vectras-VM-Android)
- [Awesome Mac](https://github.com/jaywcjlove/awesome-mac)
- [Soup](https://github.com/MakazhanAlpamys/Soup)
- [C2PA specification 2.4](https://spec.c2pa.org/specifications/specifications/2.4/index.html)
- [C2PA explainer](https://c2pa.org/specifications/specifications/2.2/explainer/Explainer.html)
- [Roamers](https://roamers.dev/)
- [Roamers privacy](https://roamers.dev/privacy)
- [TabiToken](https://tabitoken.com/) — ссылка приведена как risk evidence, не рекомендация
