# Безопасный runtime-аудит MCP server

Этот процесс нужен перед первым подключением MCP к Claude Code, Codex, Cursor или внутреннему агенту. MCP server получает доступ не только к данным: его названия, schemas и descriptions попадают в контекст модели и могут содержать indirect prompt injection.

## Что означает статус в Eclipse Library

- **Статически проверен** — проверены canonical source, license, документация и заявленные permissions. Server ещё не запускался.
- **Runtime-аудит ожидается** — нельзя подключать к рабочему агенту с реальными secrets или пользовательскими данными.
- **Автоскан metadata пройден** — disposable runner получил `tools/list`, автоматические правила не нашли
  опасных паттернов и toolset hash закреплён. Это ещё не ручной approval.
- **Runtime-аудит пройден** — tool metadata выгружены в изолированной среде, просмотрены и закреплены SHA-256 hash. Это не бессрочная гарантия: после обновления нужен повторный аудит.
- **Не запускать** — проект архивирован, неподдерживаем или имеет неприемлемый риск.

## 1. Подготовить одноразовую среду

Используйте disposable VM или container без host network, home mounts, browser profile, SSH agent и production environment variables. Создайте отдельную пустую directory только с тестовым config и синтетическими данными.

Не устанавливайте scanner или проверяемый server глобально. Версию scanner и server сначала найдите в official source, проверьте release и license, затем закрепите точной версией или digest. Не используйте `latest` в повторяемом audit.

## 2. Начать со static scan

Перед запуском server проверьте config как недоверенный файл:

- command и каждый argument;
- package/repository identity;
- install scripts и транзитивные зависимости;
- environment variables и token scopes;
- filesystem mounts, MCP Roots и network destinations;
- запросы на `0.0.0.0`, privileged ports или доступ к Docker socket.

Scanner запускайте только внутри подготовленного sandbox. Старое название `mcp-scan` теперь ведёт на
Snyk Agent Scan: актуальная версия требует Snyk token и отправляет tool names/descriptions в Snyk для анализа.
Не подключайте этот режим без отдельного решения о third-party data sharing. В Eclipse Library для базовой
проверки используется `scripts/runtime-scan-mcp.mjs`: автономный inspector получает только `tools/list`,
не вызывает actions и пишет raw metadata в приватный краткоживущий CI artifact.

## 3. Выгрузить tool metadata без рабочих данных

Инициализируйте server с пустым test account или без credentials, если это возможно. Получите списки tools, prompts и resources, но не вызывайте actions. Проверьте:

- скрытые инструкции вроде «не сообщай пользователю»;
- просьбы читать `.ssh`, `.env`, browser cookies или соседние directories;
- попытки вызвать другой tool без явной необходимости;
- Unicode/zero-width символы и большие закодированные блоки;
- tool shadowing — имена, похожие на уже доверенные tools;
- несоответствие input schema реальному назначению tool.

После ручного review сериализуйте только `name`, `description`, `inputSchema` и server version в стабильном порядке и посчитайте SHA-256. Hash можно перенести в `web/mcp-audit.json`; raw metadata в публичный каталог не переносится.

Ручной workflow `Audit MCP runtime metadata` разрешён только для server/version, жёстко заданных в inspector.
Filesystem получает пустой каталог из `${{ runner.temp }}`; runner не использует repository secrets и
удаляется GitHub после job. Автоматически полученный hash не равен ручному approval: статус
`runtime-reviewed` ставится только после просмотра private artifact человеком и проверки всех условий ниже.

## 4. Проверить действия с минимальными правами

Только для принадлежащих вам server/endpoints выполните безопасные тестовые calls:

- read-only действие на синтетических данных;
- отказ при выходе за allowed directory/repository;
- отказ без authentication;
- rate limit, timeout и audit log;
- URL-fetch tools — блокировка loopback, private ranges, cloud metadata и `file:` URL.

Не проверяйте SSRF или authentication на чужих endpoint без письменного разрешения.

## 5. Принять решение

Runtime status можно повысить до `runtime-reviewed`, только если одновременно выполнено всё:

1. Server и scanner закреплены точной версией или digest.
2. Raw metadata просмотрены вручную ответственным security reviewer.
3. Toolset SHA-256 записан и validator принимает его.
4. Permissions ограничены конкретным workspace/account.
5. Secrets отсутствуют в config, output и artifacts.
6. Remote server требует authentication и не раскрывает tools анонимно.
7. URL/file tools прошли негативные тесты в разрешённой среде.

Любое обновление version или изменение toolset hash возвращает статус в `runtime-pending` до повторного review.

## Модель угроз

- OWASP MCP03:2025 — Tool Poisoning.
- MITRE ATLAS AML.T0010 — ML Supply Chain Compromise.
- Дополнительные риски: rug pull, toxic flow, tool shadowing, SSRF, unauthenticated exposure и утечка данных через результаты tools.
