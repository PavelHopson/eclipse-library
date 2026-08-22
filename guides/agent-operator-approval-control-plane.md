# Agent Operator и approval control plane

> Архитектура «ИИ-сотрудников», Telegram/mobile-команд и handoff без автономных внешних действий.

Владелец — **Eclipse Chat**. Роли «7 сотрудников», «92 сотрудника», researcher или analyst — шаблоны компетенций, а не всесильные аккаунты.

## P0 MVP

Read-only brief превращается в draft. Пользователь видит источник, evidence, получателя, стоимость, срок approval и кнопки **Одобрить / Изменить / Отклонить**. Внешняя отправка пока заменена локальным receipt.

Acceptance: tenant isolation; approval сбрасывается после редактирования; expired approval не работает; duplicate action не исполняется; prompt-injection fixture блокируется; очередь доступна с клавиатуры и на 390 px.

## P1

Telegram control plane, reboot-safe worker и межсессионный handoff. Approval привязан к immutable hash и allowlisted chat ID. Kill switch отменяет очередь без потери audit trail.

## P2

Локальный push-to-talk operator и time-boxed recurring grants. Письмо/DM, публикация, deploy, покупка, изменение CRM или реклама требуют отдельного точного подтверждения.
