# Проверенная маршрутизация моделей и контроль стоимости

> Registry-backed router вместо рекламных таблиц: доступность, цена, политика данных, Eclipse benchmark и видимый fallback.

Владелец — **Eclipse AI Hub**. Расширяем существующий Gateway/Automation Audit, не создаём второй router.

## P0 MVP

Registry хранит canonical model ID, provider, verifiedAt, price source, region/retention, tools, vision, context и собственный benchmark. Маршруты: `local`, `cheap`, `standard`, `frontier`; frontier — только explicit flag.

Шесть задач: extract, draft, research, code, vision, high-risk. До вызова видны модель, estimated cost и fallback; после — actual usage receipt.

Acceptance: unknown/stale модель fail-closed; budget cap; no silent fallback; секреты и полные prompts не логируются; недельный quality/cost отчёт.

## Claims boundary

Названия и цифры из community-каруселей не попадают в registry без официального API/model registry и датированного price source. Стратегия «дешёвая строит, дорогая проверяет» полезна; конкретная таблица лидеров быстро устаревает.
