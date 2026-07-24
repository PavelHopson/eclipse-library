# Eclipse Library Roadmap

Последнее обновление: **24.07.2026**

## Текущее состояние

- `README.md` — канонический каталог.
- `web/app.js` — client-side Markdown parser, search, type filters и guide viewer.
- Deploy: GitHub Actions → VPS/Caddy из ветки `master`.
- Production синхронизирован с `master`: deploy 24.07.2026 успешно завершён через VPS/Caddy.

## Приоритеты

### P0

- [x] Восстановить deploy на VPS: повторный run 24.07.2026 прошёл SSH setup и rsync.
- [ ] Убрать `StrictHostKeyChecking=no` и pin host key через secret/known_hosts.
- [ ] Добавить link checker в CI с allowlist для rate-limited/JS-only сайтов.

### P1

- [ ] Перевести записи из неструктурированных Markdown-описаний в schema с полями:
      `type`, `category`, `platform`, `license`, `trust`, `risk`, `projects`, `verifiedAt`.
- [ ] Добавить автоматический duplicate check по canonical URL, GitHub `owner/repo`,
      normalized title и redirect target.
- [ ] Добавить фильтры по platform, license, trust/risk и Eclipse project applicability.
- [ ] Добавить visible badges «официальный источник», «лицензия», «risk» и
      «проверено <дата>», не заставляя пользователя читать всю карточку.

### P2

- [ ] Стабильные deep links на каждую запись.
- [ ] Freshness review: помечать archived/stale/dead-link ресурсы и изменившиеся лицензии.
- [ ] Автоматический GitHub metadata refresh без доверия к stars как quality score.
- [ ] Отдельные landing routes для skills, MCP, models, prompts, courses и security.

## Changelog

### 2026-07-24

- Обработана пачка из 48 Telegram-сообщений за 15–24 июля.
- Удалены повторы Kimi K3 и PriceGhost; 13 уже опубликованных ресурсов не продублированы.
- Добавлены проверенные local AI, agent skills, media, workstation и product-research
  материалы с лицензиями, trust/risk notes и Eclipse Forge mapping.
- Risk-sensitive записи теперь получают заметный marker в карточках; placeholder поиска
  больше не содержит устаревающий вручную счётчик.
- Исправлены рекламные и неточные claims для Kimi Code, PriceGhost, Reiverr,
  SongGeneration Studio, AnimeGen и других материалов.
- Добавлен подробный decision radar:
  `guides/july-2026-agents-local-product-radar.md`.
- Медицинский self-test, genealogy/doxxing prompts и low-value novelty исключены.
- Commit `7d13e37` отправлен в `origin/master`; production deploy
  [#30112663215](https://github.com/PavelHopson/eclipse-library/actions/runs/30112663215)
  завершён успешно, live README/app/guide проверены.
