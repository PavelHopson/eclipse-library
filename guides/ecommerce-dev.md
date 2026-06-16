# 🛒 Гайд: разработка интернет-магазина (для команды)

> Практический путь «как и что делать», бесплатно на старте. Каталог инструментов —
> в [README → Разработка интернет-магазинов](../README.md#-разработка-интернет-магазинов).
> Веб-версия: <https://library.eclipse-forge.ru>

---

## 0. Сначала выбери подход

| Ситуация | Что брать | Время |
|---|---|---|
| Клиенту нужно «вчера», без кода | **No-code**: Ecwid / Tilda | часы |
| Стандартный магазин, не хочется кодить бэкенд | **Open-source движок**: WooCommerce (WordPress) | 1–2 дня |
| Кастомный дизайн + контроль, наш стек React/TS | **Headless**: Medusa + Next.js — *наш дефолт* | 2–5 дней |
| Статичный сайт, нужна только корзина | **Cart-as-service**: Snipcart | часы |

Дальше — подробно по **нашему пути (headless на Medusa)**, плюс короткие рецепты для остальных.

> **⚡ Делай это с AI-агентом.** Всю сборку ниже быстрее доверить кодинг-агенту
> (**Claude Code** / **Codex** / **Kimi Code**): дай ему стартер и веди задачами — «подними
> Medusa + Next storefront», «подключи провайдер ЮKassa», «обвяжи интеграции `retry-http`»,
> «задеплой на наш VPS через Coolify». Агент пишет код, ставит зависимости и чинит ошибки — ты ревьюишь.

---

## 1. Наш путь: Medusa (backend) + Next.js (storefront)

**Стек:** Medusa (Node/TS, REST API) · Next.js App Router + Tailwind (витрина) · Postgres · ЮKassa/Stripe.
**Почему:** TypeScript end-to-end (как все наши проекты), полный контроль над UI, бесплатный self-host.

### 1.1 Поднять проект локально
```bash
# создаёт backend + admin + (опц.) Next.js storefront в одном репо
npx create-medusa-app@latest my-store
# выбрать: install Next.js storefront = Yes
cd my-store
```
Нужен локальный **Postgres** (или сразу бесплатный [Neon](https://neon.tech) — подставить его `DATABASE_URL`).

```bash
npm run dev            # backend:9000 (admin на /app), storefront:8000
```
- Админка: `http://localhost:9000/app` — заводишь товары, цены, регионы, доставку.
- Витрина: `http://localhost:8000` — уже работает каталог/корзина/checkout.

### 1.2 Контент и каталог
Товары/категории/варианты — через админку Medusa. Картинки — в S3-совместимое хранилище
(или [Supabase Storage](https://supabase.com) на free-tier). Тексты/блог — можно отдельной
[Strapi](https://strapi.io)/[Payload](https://payloadcms.com), но на старте хватит полей Medusa.

> **🟣 Наши сервисы (для удобства):** фото товаров — [Shotforge](https://shotforge.eclipse-forge.ru),
> баннеры/иллюстрации — [Text2Image](https://text2image.eclipse-forge.ru), описания и SEO-тексты —
> [Eclipse AI Hub](https://hub.eclipse-forge.ru) (Copywriter), парсинг поставщиков/конкурентов —
> [Eclipse-Claw](https://github.com/PavelHopson/Eclipse-Claw). Запросы к API платёжек/доставки
> оборачивай ретраями — наш [`retry-http`](https://github.com/PavelHopson/retry-http).

### 1.3 Платежи
- **РФ → [ЮKassa](https://yookassa.ru):** ставим community-плагин платёжного провайдера Medusa,
  кладём `shopId` + `secretKey` из ЛК ЮKassa в `.env`, включаем провайдер в регионе RU.
  Тест — через тестовый магазин ЮKassa.
- **Global → [Stripe](https://stripe.com):** официальный модуль Medusa, `STRIPE_API_KEY` в `.env`,
  тест-карты Stripe. Для приёма без зарубежного юрлица в РФ — ЮKassa/Тинькофф.

### 1.4 Деплой (бесплатный старт)
| Что | Куда |
|---|---|
| **Витрина (Next.js)** | [Vercel](https://vercel.com) (один клик из репо) **или** наш VPS через Caddy |
| **Backend (Medusa)** | наш **VPS** (Mara) через [Coolify](https://coolify.io) или systemd-сервис · либо [Railway](https://railway.app)/[Render](https://render.com) |
| **Postgres** | [Neon](https://neon.tech) free-tier (или Postgres на VPS) |
| **Файлы/картинки** | Supabase Storage / S3 |
| **Домен** | поддомен `*.eclipse-forge.ru` (как остальные проекты — DNS A → VPS + Caddy) |

> На нашем VPS проще всего: поставить **Coolify** (self-host PaaS) → он поднимет Medusa + Postgres
> контейнерами, выдаст HTTPS. Витрину — отдельным статик-деплоем через наш `deploy-vps.yml` или Vercel.

---

## 2. Быстрые альтернативы (рецепты)

**WooCommerce (не-dev, быстро):** WordPress + плагин WooCommerce → тема Storefront → плагин ЮKassa →
хостинг с PHP/MySQL. Готовый магазин за день, тысячи расширений.

**Snipcart (на нашу статику):** берём любую статичную витрину (даже на нашем стеке без бэкенда),
вешаем `<button class="snipcart-add-item" data-item-...>` → Snipcart даёт корзину и checkout.
Платёж — Stripe/ЮKassa в настройках Snipcart. Деплой как обычная статика на VPS.

**Tilda (срочно клиенту):** конструктор → блок «Магазин» → подключить ЮKassa/Робокассу в настройках.
Без кода, но и без контроля над UI.

---

## 3. Чеклист запуска

- [ ] Юр: ИП/ООО/самозанятость + договор с эквайером (ЮKassa/Тинькофф)
- [ ] Платёж протестирован в тест-режиме (успех + отмена + возврат)
- [ ] Доставка и налоги настроены в движке
- [ ] Страницы: оферта, политика конфиденциальности, контакты, возврат
- [ ] SEO: title/description/OG, sitemap, schema.org Product (см. раздел SEO в библиотеке)
- [ ] Аналитика: Яндекс.Метрика / GA4 + цели на покупку
- [ ] Мобильная вёрстка и скорость (Lighthouse)
- [ ] Резервные копии БД, мониторинг (uptime)
- [ ] Домен на HTTPS, редирект www→apex

---

## 4. Частые грабли

- **Medusa требует Postgres + Redis** для прод — не забудь оба (Redis: Upstash free-tier).
- **РФ-платежи через Stripe напрямую не выйдут** — для РФ берём ЮKassa/Тинькофф/CloudPayments.
- **CORS** между витриной и backend — пропиши домены витрины в `STORE_CORS`/`ADMIN_CORS` Medusa.
- **Картинки товаров** — не храни в репо/на диске инстанса (потеряются при редеплое) → S3/Supabase.
- **Не пиши витрину с нуля** — бери [Vercel Commerce](https://github.com/vercel/commerce) или
  Medusa-storefront и допиливай. Экономит дни.
