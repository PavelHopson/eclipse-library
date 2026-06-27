# 🖼️ Парсинг карточек маркетплейсов по СКРИНШОТУ (PixelRAG-подход) — POC

> POC-рецепт: извлекать структурные поля товара (цена, название, характеристики)
> из **скриншота** страницы, а не из HTML. Зачем — HTML маркетплейсов (WB/Ozon/ЯМ)
> часто ломается анти-ботом / меняет вёрстку / прячет цену в JS, а скриншот
> «видит» то же, что человек. Источник идеи: [PixelRAG](https://github.com/StarTrail-org/PixelRAG)
> (Подборка Eclipse 23–27.06).
>
> **Куда ложится:** StarMarket (агрегатор цен — парсинг карточек WB/Ozon/ЯМ),
> StarCRM card-audit (разбор WB-карточки при таймаутах баскетов). ⚠️ Эти репо ведут
> другие чаты — это **рецепт/референс**, не правка их кода. Встраивать там — по
> отдельному заходу/одобрению.
>
> ⚠️ **ToS:** автопарсинг чужих витрин — серая зона правил площадок. Применять к
> своим/разрешённым данным, с разумным rate-limit, не как масс-скрапер.

## Два пути

**A. PixelRAG `pixelbrowse` (тяжёлый, но «из коробки»).** Плагин Claude Code —
даёт агенту визуальное чтение страниц поверх скриншот-индекса (VL-модель
Qwen3-VL-Embedding). Ставится как плагин; хорош, когда нужен RAG по многим
страницам. Минус — своя модель/инфра.

**B. Лёгкий vision-LLM скрипт (ниже, рекомендуется для POC).** Скриншот через
Playwright → vision-модель (Gemini/GPT-vision, ключ у нас уже есть) с JSON-схемой →
структурные поля. Без тяжёлой модели, запускается за минуту.

## Скрипт (путь B) — `parse_card.py`

```python
# pip install playwright google-genai && playwright install chromium
import os, json, sys
from playwright.sync_api import sync_playwright
from google import genai
from google.genai import types

URL = sys.argv[1] if len(sys.argv) > 1 else "https://www.wildberries.ru/catalog/0/detail.aspx"

# 1. Скриншот карточки (full page) — «видим» то же, что человек.
with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1280, "height": 1600})
    page.goto(URL, wait_until="networkidle", timeout=60000)
    page.wait_for_timeout(1500)  # дать дорисоваться цене/JS
    shot = page.screenshot(full_page=True)
    browser.close()

# 2. Vision-LLM извлекает структурные поля по скриншоту (а не по HTML).
client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
schema = {
    "type": "object",
    "properties": {
        "title": {"type": "string"},
        "price_current": {"type": "number"},
        "price_old": {"type": "number"},
        "rating": {"type": "number"},
        "reviews_count": {"type": "integer"},
        "seller": {"type": "string"},
        "specs": {"type": "array", "items": {"type": "object",
            "properties": {"name": {"type": "string"}, "value": {"type": "string"}}}},
    },
    "required": ["title", "price_current"],
}
resp = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=[
        types.Part.from_bytes(data=shot, mime_type="image/png"),
        "Извлеки данные товара со скриншота карточки маркетплейса строго по JSON-схеме. "
        "Цены — числом в рублях без пробелов/символов. Если поля нет — опусти его.",
    ],
    config=types.GenerateContentConfig(
        response_mime_type="application/json", response_schema=schema, temperature=0.1,
    ),
)
print(json.dumps(json.loads(resp.text), ensure_ascii=False, indent=2))
```

Запуск:
```bash
export GEMINI_API_KEY=...        # бесплатный ключ aistudio.google.com
python parse_card.py "https://www.wildberries.ru/catalog/<id>/detail.aspx"
```

## Куда встроить (когда дойдут руки в тех чатах)

- **StarMarket:** фолбэк-парсер цены/характеристик, когда HTML/анти-бот не отдаёт
  данные — скриншот-путь как «последняя миля». Кэшировать, не дёргать на каждый запрос.
- **StarCRM card-audit:** разбор WB-карточки скриншотом при таймаутах баскетов/CDN
  (был реальный инцидент). Скриншот делать с того же прод-IP.
- Стоимость: 1 vision-запрос на карточку — следить за квотой; батчить, не лить поток.

## Ограничения POC
- Playwright рендерит реальную страницу → медленнее HTTP-парсинга; для массового
  парса нужен пул браузеров + очередь.
- Анти-бот может показать капчу — тогда скриншот бесполезен (нужен прокси/сессия).
- Точность извлечения зависит от модели — сверять критичные поля (цену) эвристикой.
