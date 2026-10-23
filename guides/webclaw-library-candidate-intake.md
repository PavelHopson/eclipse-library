# Webclaw → Library: `knowledge.candidate.v1`

Eclipse Webclaw отдаёт в Library только bounded candidate для редакторской проверки. Это не
каталожная запись и не разрешение на установку, рекомендацию, публикацию или выполнение.

Поток:

1. Webclaw получает публичный HTTP(S)-источник через собственную egress policy.
2. `POST /knowledge/candidate` возвращает Markdown, title, URL, SHA-256 и флаги доверия.
3. Library запускает `node scripts/knowledge-candidate-v1.mjs <candidate.json>`.
4. После ручной проверки maintainer отдельно создаёт или обновляет `catalog/resources.json`.

Пакет fail-closed: URL без credentials и private/local host, максимум 512 KiB Markdown,
`review.status=needs_review`, `review.canonical=false`, `review.agentEligible=false`. Текст страницы,
включая prompt injection, остаётся данными; `trust.instructions=data_only`. Raw HTML, cookies,
секреты и автоматическая запись в каталог не допускаются.
