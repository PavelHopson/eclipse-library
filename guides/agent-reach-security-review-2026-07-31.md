# Agent Reach — static security review

> Решение Eclipse Forge на 31.07.2026: сохранить как архитектурный `Reference`. Не
> устанавливать глобально, не подключать основной browser profile и не передавать cookies,
> secrets, client data или private repositories.

## Что это простыми словами

Agent Reach — это не новый поисковик и не единый собственный crawler. Это skill и CLI,
которые объясняют AI-агенту, какой внешний инструмент попробовать для конкретного источника,
устанавливают часть таких инструментов и показывают их состояние командой `doctor`.

Например, для одной задачи агент может использовать GitHub CLI, для другой — captions или
`yt-dlp`, для третьей — browser session или отдельный community CLI. Если основной путь
недоступен, конфигурация может предложить запасной. Запасной путь не гарантирует доступ:
сайт может потребовать login, изменить markup, ограничить automation или заблокировать
аккаунт.

## Что подтверждено

- Официальный репозиторий: [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach).
- Лицензия: MIT.
- Проверен исходный код ветки `main` на commit
  [`b4d52c46c9113cb0f653d6df4cf71ebadf4930ac`](https://github.com/Panniantong/Agent-Reach/commit/b4d52c46c9113cb0f653d6df4cf71ebadf4930ac).
- В проекте есть документация, тесты, `SECURITY.md`, safe/dry-run режимы и проверки
  конфигурации.
- Текущий код ограничивает права на config-файлы, отвергает symlink для чувствительной
  конфигурации, валидирует URL и требует явно указать platform при извлечении cookies.
- Для X/Twitter и XiaoHongShu автоматический сбор cookies отключён; документация предлагает
  ручной экспорт через Cookie-Editor.

Проверка была статической: код и manifests прочитаны, но installer, upstream CLI и browser
session на основной машине не запускались.

## Что в новости преувеличено

| Заявление | Проверенный вывод |
|---|---|
| «Работает без платных API» | Core open source, но отдельные маршруты требуют account, cookies, proxy, API key, локальную инфраструктуру или зависят от меняющихся free tiers |
| «Доступ ко всему интернету» | Поддерживается набор перечисленных каналов; login wall, anti-bot, география, ToS и поломка стороннего CLI остаются |
| «Посмотрит любые YouTube-ролики» | Возможны captions/download/transcription paths, но private, deleted, DRM, region-locked и недоступные ролики не гарантированы; действуют copyright и platform rules |
| «Работает через ваши аккаунты» | Технически возможно через browser session/cookies, но cookie является bearer credential и создаёт риск захвата сессии или блокировки аккаунта |
| «Всегда перейдёт на запасной метод» | Fallback описан, но его доступность, совместимость и privacy свойства нельзя гарантировать |

## Security и supply-chain

### High

1. Обычная установка использует mutable archive ветки `main`, а не подписанный immutable
   artifact с опубликованным checksum. Открыт
   [issue #547](https://github.com/Panniantong/Agent-Reach/issues/547) о риске name
   confusion в PyPI и install path.
2. Skill может устанавливать или обновлять несколько сторонних Python, npm, Git и system
   packages. Не все runtime-компоненты закреплены полным commit SHA и checksum.
3. OpenCLI и некоторые каналы могут работать с авторизованным Chrome profile. Утечка cookie
   эквивалентна утечке активной сессии; local storage не устраняет этот риск.
4. Агент читает недоверенный web-контент и получает shell/tool access. Без изоляции это
   создаёт связку prompt injection → опасный tool call → доступ к файлам, сети или secrets.

### Medium

- Platform automation может нарушить Terms, привести к rate limit или account suspension.
- Proxy, fallback provider и community CLI меняют набор получателей данных и privacy boundary.
- Авторские заявления `free` и `privacy safe` не являются независимым security-аудитом.
- В [issue #446](https://github.com/Panniantong/Agent-Reach/issues/446) ранее описывался
  чрезмерный сбор browser cookies. В текущем `main` основной flow усилен, но issue остаётся
  открытым, а независимый runtime regression test нами не выполнен.
- Windows/browser integration имеет известные compatibility cases; zero-config нельзя обещать.

## Безопасный способ посмотреть

1. Использовать disposable VM/container, отдельного OS user и отдельный пустой browser profile.
2. Закрепить полный audited commit SHA и самостоятельно посчитать checksum скачанного archive.
3. Сначала прочитать install plan, затем использовать только safe/dry-run.
4. Не передавать primary-account cookies, production keys, SSH agent, client files, private
   repositories и персональные данные.
5. Разрешить только тестовые public URLs и ограничить egress известными hostnames.
6. Зафиксировать все spawned processes, созданные config-файлы, network destinations и версии
   upstream tools.
7. После теста удалить VM и отозвать любой одноразовый test credential.

## Применимость к Eclipse Forge

| Решение | Проект и проблема | Сценарий и что разработать | Ценность | Размер | Риски / зависимости | Приоритет | Следующий шаг |
|---|---|---|---|---|---|---|---|
| Внедрить сейчас | Eclipse Webclaw / Kwork #18: research-agent должен безопасно получать публичные источники и явно показывать границы | Phase 1 и Phase 2A реализованы: static allowlist/doctor, explicit cloud consent, public-only DNS и redirect policy, untrusted-content boundary, robots/Crawl-delay, response/concurrency limits и redacted audit events | Меньше SSRF и prompt-injection риска, понятная причина отказа, предсказуемая нагрузка и отсутствие скрытой cloud-передачи только из-за сохранённого API key | L | Release/deploy не выполнен; Chromium не разделяет transport resolver, OS/container isolation и durable audit storage ещё нужны | P1 | Выпустить merged `3ef26a8`, вынести CDP в отдельный worker и прогнать fixed public-page benchmark |
| Оставить как reference | Hopson Sentinel | Показать capability health, причину недоступности и безопасный следующий шаг; не давать skill права устанавливать global packages | Пользователь понимает, почему tool недоступен, и не чинит его опасной командой вслепую | M | Process sandbox, permissions, signed registry | P2 | Спроектировать read-only `doctor` output на synthetic connectors |
| Оставить как reference | oh-my-claudecode | Использовать идею registry и deterministic fallback order без browser cookies и self-install | Предсказуемая orchestration и меньше случайных tool substitutions | M | Registry ownership, policy engine, audit log | P2 | Добавить design note к unified registry после разблокировки archived repository |
| Добавить в roadmap | Eclipse AI Hub RAG | Серверные isolated ingestion workers для явно разрешённых источников, с citations и tenant boundary | Больше проверяемых источников без выдачи browser session модели | L | Queue, content sanitization, license, retention | P2 | Prototype только для public GitHub + public HTML, без social-login sources |
| Не использовать | Eclipse Media | Agent Reach дублирует уже выбранный transcript-first YouTube pipeline и добавляет лишнюю supply chain | Дополнительной измеримой ценности нет | S | Copyright, download limits, duplicate tooling | P3 | Продолжить изолированный Claude Video/yt-dlp spike вместо установки Agent Reach |

## Итог

Agent Reach хорошо показывает UX для capability discovery, диагностики и fallback. Именно эти
паттерны полезны Eclipse Forge. Глобальный installer, reuse browser sessions и автоматическое
подключение community CLI не соответствуют нашей production-модели доверия, поэтому сам
проект остаётся reference до отдельного sandbox-аудита pinned artifact и каждого upstream
connector.

## Статус внедрения — 02.08.2026

В Eclipse-Claw подготовлен собственный безопасный слой, а не установка Agent Reach:

- static allowlisted registry из трёх встроенных boundaries: local HTTP, configured LLM chain,
  Eclipse Claw Cloud;
- read-only MCP `doctor` и REST `GET /connectors`, `GET /connectors/doctor`;
- readiness, provenance, account requirement, data boundary, fallback reason и safe next step;
- диагностика без network probe, credential validation, browser-session access и package install;
- единая policy: cloud credential аутентифицирует явную cloud-команду, но automatic fallback
  разрешается только отдельным `ECLIPSE_CLAW_CLOUD_FALLBACK=1` или CLI `--cloud-fallback`.

Реализация: [PR #4](https://github.com/PavelHopson/Eclipse-Claw/pull/4) squash-merged в `main`
как `51a5d6c`. Post-merge CI
[#30741248009](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30741248009) прошёл Test,
Lint и Docs; локальный release build также зелёный. До отдельного release/deploy это shipped code,
но не production-возможность.

Phase 2A также реализован собственным кодом Eclipse-Claw и merged через
[PR #5](https://github.com/PavelHopson/Eclipse-Claw/pull/5) как
`3ef26a85d0e51f85ec261d95ea6df186329de90f`:

- HTTP transport использует public-only resolver: private, loopback, link-local, metadata и
  специальные IPv4/IPv6 диапазоны блокируются, а каждый redirect проходит ту же policy;
- proxy DNS требует отдельного consent, `proxies.txt` больше не подхватывается неявно;
- web-контент получает явную `untrusted`-границу в MCP/REST, а local LLM prompts не должны
  исполнять инструкции со страницы;
- MCP cookies выключены по умолчанию; server bind стал loopback-only, external bind требует
  Bearer token, CDP endpoint нельзя подменить request body и сам REST CDP требует opt-in;
- crawler учитывает `robots.txt`, wildcard/Allow/Disallow/Crawl-delay и сериализует запросы при
  заданном Crawl-delay; response body и server concurrency ограничены;
- structured security events логируют только `scheme://host[:port]`, без query, cookies,
  headers, secrets и page body.

PR CI [#30743170976](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30743170976)
и post-merge main CI
[#30743202888](https://github.com/PavelHopson/Eclipse-Claw/actions/runs/30743202888)
прошли workspace Test, Clippy `-D warnings` и Docs. Это снижает риск, но не является
независимым pentest и не делает произвольный web-контент доверенным.

Не закрыто: отдельный release/deploy, OS/container isolation для browser/LLM workers,
durable audit storage с retention/access policy и fixed public-page benchmark. Chromium CDP
имеет отдельный DNS boundary, поэтому в server он остаётся opt-in и должен запускаться только
в изолированном worker. Сам Agent Reach, browser cookies основных аккаунтов и mutable installer
в production по-прежнему не используются.
