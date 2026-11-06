# Library Editor API

Отдельный сервис редактора Library. Он не использует аккаунты Eclipse Chat и не изменяет статический каталог напрямую.

## Запуск

```bash
psql "$DATABASE_URL" -f schema.sql
npm ci --omit=dev
DATABASE_URL=postgres://... EDITOR_EMAIL=editor@example.com EDITOR_PASSWORD='set-a-long-password-here' ALLOWED_ORIGIN=https://library.eclipse-forge.ru node server.mjs
```

`EDITOR_PASSWORD` не кладётся в репозиторий. Для продакшена сервис работает за HTTPS reverse proxy на отдельном API-домене.

## Контракт

- `POST /api/editor/login`, `POST /api/editor/logout`, `GET /api/editor/me`;
- `GET/POST /api/editor/prompts`, `PATCH/DELETE /api/editor/prompts/:id`;
- `GET /api/editor/events` — SSE для realtime-обновлений.
- `POST /api/editor/prompts/:id/image` — загрузить PNG/JPG/WebP/GIF до 6 МБ как пример изображения.
- `DELETE /api/editor/prompts/:id/image` — удалить только пример изображения.
