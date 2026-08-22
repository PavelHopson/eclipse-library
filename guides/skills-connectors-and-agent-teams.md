# Skills, Connectors & Agent Teams

> Skill объясняет процесс, connector даёт реальные «руки», agent role ограничивает ответственность. Это три разных решения доверия.

## Intake

Для ECC, Awesome Claude Skills, Agency Agents, Arcads Skills и каталогов фиксируются canonical repo, pinned revision, license, scripts/binaries, network/filesystem scopes, telemetry и secrets. Решение: approved, restricted, reference, rejected.

## Capability registry

Роль получает tools, data scope, output schema, budget, timeout и acceptance. Researcher не публикует, copywriter не меняет CRM, ads analyst не тратит бюджет.

## Connectors

OAuth scope минимален; writes выключены; draft/execute — разные methods; approval связан с payload hash; receipt содержит external object ID. Composio остаётся отдельным processor с privacy review.

## Acceptance

Нет auto-install; source pin воспроизводим; secrets не в Git; tool-poisoning fixture блокируется; отключение connector отзывает tokens; role работает без лишних permissions; параллельные агенты не меняют один файл без координации.
