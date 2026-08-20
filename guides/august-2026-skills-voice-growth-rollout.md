# Skills, Voice OS и Growth rollout — 20.08.2026

> Практический план Eclipse Forge: публичные каталоги остаются источниками находок, skills проходят отдельный supply-chain intake, а голосовой помощник строится по цепочке Brain → Memory → Voice → HUD с явными approval gates.

## Что внедряем

| Поток | Решение | Проекты | Граница |
|---|---|---|---|
| Controlled skill intake | Сейчас | Library, Sentinel, AI Hub, oh-my-claudecode | Catalog никогда не устанавливает skill |
| Reference Board System | Сейчас | Media, Shotforge, Text2Image, DnD Forge | Только разрешённые источники и provenance |
| AI automation audit | Сейчас | Growth OS, AI Hub, Chat, Sentinel | Read-only анализ до отдельного approval |
| AI video ads | Сейчас | Shotforge, Media, HyperFrames | Preview и human approval до публикации |
| Voice OS | По этапам | Sentinel, Eclipse Chat | Push-to-talk, local-first, kill switch |
| Vengeance UI pilot | Roadmap | Landing и marketing surfaces | Один MIT-компонент после a11y/perf QA |

Полный operational backlog хранится в Google Sheets `Eclipse Forge`, лист `Rollout 20.08.2026`.

## Controlled skill intake

`skills.sh` используется как discovery source, а не как доверенный package manager. Путь кандидата:

`canonical source → pinned SHA → instructions/scripts/dependencies review → capability manifest → sandbox → allowlist decision`

Runtime allowlist отделён от Library. Карточка ресурса всегда сохраняет запрет direct install. Telemetry отключается, если это возможно; secrets, cookies и production accounts не участвуют в тесте.

First-party workflow оформлен в [`skills/eclipse-skill-intake/SKILL.md`](../skills/eclipse-skill-intake/SKILL.md).

## Brain → Memory → Voice → HUD

### 1. Brain

Небольшие skills отвечают за одну задачу: public trends, daily plan, vault read/write, approved metrics и approved inbox summary. Credential-bearing skills не создаются до выбора конкретных провайдеров, scopes, retention и revocation flow.

### 2. Memory

Читаемый Markdown vault:

```text
vault/
  raw/       immutable imports and transcripts
  wiki/      reviewed knowledge pages
  outputs/   dated plans, reports and drafts
  INDEX.md
  CHANGELOG.md
```

Markdown не хранит secrets. Каждая запись содержит source, created/updated, sensitivity, retention и ссылки. Запись из `raw` не становится фактом в `wiki` без evidence review. Concurrent writes требуют lock/atomic replace; крупный runtime может использовать индекс, но Markdown остаётся portable source/export.

### 3. Voice

Push-to-talk включается только явным удержанием клавиши. Mic state всегда виден. STT/TTS запускаются локально после hardware benchmark, checksum и license review модели. Исходное аудио по умолчанию удаляется после успешной транскрипции; отправка текста облачной модели показывается отдельно.

### 4. HUD

Один спокойный operational экран показывает три приоритета, расписание, skill status, входящие approvals, mic/speaker state и последние receipts. HUD не выполняет скрытые действия и не превращает decorative charts в фиктивные метрики.

## Authority model

Каждая команда проходит состояния:

`observe → propose → diff → approve → execute → verify → receipt`

Read-only операции могут выполняться автоматически в разрешённой области. Публикация, реклама, платежи, изменение аккаунта, удаление, deploy и доступ к secrets требуют отдельного подтверждения непосредственно перед действием. Доступны timeout, cancel и kill switch.

## Reference Boards

Два близких Google Docs объединяются в одну first-party систему из шести досок: shot, object, location, pose, character и creature. Мы не копируем закрытые prompt-тексты. Wizard хранит stable traits, source rights, consent, commercial-use status и provenance результата.

## Бизнес-применение

Приоритетные измеримые офферы:

1. AI automation audit: карта процесса, риск, bounded pilot и план внедрения.
2. AI video ads: несколько hooks и форматов на лицензированных ассетах.
3. Growth OS: research, claim audit, календарь, review и attribution.
4. Verified templates: собственные packs с лицензией и инструкцией, без перепродажи чужого кода.

Print-on-demand art остаётся reference из-за copyright, trademark и fulfillment риска. Любой новый SaaS сначала проходит interviews, landing/waitlist и bounded paid pilot.

## Исключения

- ChatPlace short link возвращал 404 и не добавляется.
- Tracking, `fbclid`, `utm_*` и signed session parameters не сохраняются в каталоге.
- Refero Styles, shadcn/ui и TweakCN уже существуют; новые карточки не создаются.
- Skiper UI, AnimMasterLib, Oceon и Jarvis lead magnet не становятся code dependencies без отдельного provenance/license review.
