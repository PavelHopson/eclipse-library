# 🎬 Авто-модерация видео-обзоров StarMarket (видео-классификаторы) — POC

> POC-рецепт: прогонять загруженные продавцами видео-обзоры товара через
> видео-классификатор ПЕРЕД публикацией — категория контента, «товар в кадре vs
> мусор», грубый NSFW/непотреб-фильтр. Источник идеи: разбор видео-трансформеров
> на Habr (ViViT / TimeSFormer / VideoMAE), [статья](https://habr.com/ru/articles/827474/)
> (Подборка Eclipse 28.06).
>
> **Куда ложится:** StarMarket видео-обзоры товара — у нас уже есть пайплайн
> загрузки (ffmpeg → 720p/60с → HTML5). Модерация цепляется **после транскода**,
> до промоута в публикацию. ⚠️ StarMarket ведёт **другой чат** — это рецепт/референс,
> встраивать там по отдельному заходу/одобрению Pavel.
>
> ✅ **ToS-чисто:** модерируем **свой/загруженный продавцами** контент (не чужие
> витрины) — это легитимная пред-модерация UGC.

## Какую модель брать

Три модели с HuggingFace (обучены на Kinetics-400), компромисс точность/скорость
(бенч из статьи, на сноуборд-клипе):

| Модель | HF | CPU | GPU | Точность | Когда |
|---|---|---|---|---|---|
| ViViT | `google/vivit-b-16x2-kinetics400` | 5.85с | 0.84с | 90.55% | макс точность, дорого |
| TimeSFormer | `facebook/timesformer-base-finetuned-k400` | 1.25с | 0.63с | 53.77% | длинные видео, масштаб |
| VideoMAE | `MCG-NJU/videomae-base-finetuned-kinetics` | **0.77с** | 0.17с | 41.77% | **скорость → для нас** |

**Берём VideoMAE** как **feature-extractor**: главное — не Kinetics-классы (там
«сноубординг» и т.п., не наши «товар/мусор/NSFW»), а **эмбеддинги** видео, поверх
которых учим свой лёгкий классификатор под наши категории.

> 💡 **Важный нюанс по железу:** VideoMAE-инференс на CPU ≈ **0.77с/видео** — для
> **асинхронной пред-модерации в очереди** (не realtime) это приемлемо даже без GPU
> на достаточном CPU. GPU нужен для масштаба/обучения, не обязателен для MVP-очереди.
> (ViViT/TimeSFormer на CPU — уже тяжело, 1–6с.)

## Рецепт (путь feature-extractor + лёгкий классификатор)

```python
# pip install transformers torch av scikit-learn
import av, numpy as np, torch
from transformers import AutoImageProcessor, VideoMAEModel

MODEL = "MCG-NJU/videomae-base-finetuned-kinetics"
proc = AutoImageProcessor.from_pretrained(MODEL)
enc = VideoMAEModel.from_pretrained(MODEL).eval()

def sample_frames(path, n=16, size=224):
    # Равномерный сэмплинг n кадров, BGR→RGB, ресайз — как в статье.
    container = av.open(path)
    total = container.streams.video[0].frames or 300
    idxs = set(np.linspace(0, max(total - 1, 0), n).astype(int))
    frames = []
    for i, f in enumerate(container.decode(video=0)):
        if i in idxs:
            frames.append(f.to_ndarray(format="rgb24"))
        if len(frames) == n:
            break
    return frames

def embed(path):
    frames = sample_frames(path)
    inputs = proc(frames, return_tensors="pt")
    with torch.no_grad():
        out = enc(**inputs)
    # Усреднённый pooled-эмбеддинг видео (representation) → кэшируем.
    return out.last_hidden_state.mean(dim=1).squeeze().numpy()

# 1) Накопить эмбеддинги на размеченных примерах (good / junk / nsfw) → cache.
# 2) Обучить дешёвый классификатор поверх (LogReg / маленький MLP).
#    from sklearn.linear_model import LogisticRegression
#    clf = LogisticRegression(max_iter=1000).fit(X_embeddings, y_labels)
# 3) На инференсе: embed(video) → clf.predict_proba → флаг/approve.
```

**Почему так (а не дообучать всю модель):** дешевле и быстрее — эмбеддинги
считаем один раз и кэшируем, классификатор учится за секунды, при добавлении
класса переобучаем только его. (Полное fine-tuning — если своих данных много и
нужна максимальная точность; для старта избыточно.)

## Куда встроить в StarMarket (когда дойдут руки в том чате)

- **После ffmpeg-транскода**, до промоута видео в публикацию: видео → `embed()` →
  классификатор → `approved` / `changes_requested` (как у крона имедж-модерации
  `market:unpublish-imageless`). Асинхронный воркер (паттерн `screenshot-worker`),
  гейт-флаг `VIDEO_MODERATION_ENABLED` DEFAULT OFF.
- **Кэш эмбеддингов** в таблицу/S3 — чтобы повторно не считать (видео иммутабельно).
- **Категории для старта:** `product_in_frame` vs `junk` (чёрный экран/реклама/не
  товар); грубый `nsfw`-флаг. Разметить 200–500 примеров на класс из реальных
  загрузок — этого хватает для LogReg поверх эмбеддингов.

## Данные и оценка

- **Данные:** нужна разметка своих загрузок (good/junk/nsfw) — холодного старта
  нет, но 200–500/класс реально собрать из первых загрузок (полу-ручная разметка).
- **Железо:** MVP-очередь — на CPU (VideoMAE ~0.77с/видео); GPU — при масштабе
  (тысячи видео/день) или для полного fine-tuning. Ложится на тот же GPU-трек, что
  аренда под Ollama, но **для MVP не обязателен**.
- **Размер модели:** VideoMAE-base ~300 МБ; классификатор — килобайты.

## Ограничения POC

- Kinetics-классы НЕ наши — без своего классификатора «из коробки» не отличит
  «товар» от «мусора»; нужна разметка.
- Точность зависит от сэмплинга кадров (16 равномерных может пропустить ключевой
  момент) — для длинных видео взять больше кадров / окно.
- NSFW по видео-эмбеддингам — грубый сигнал; для строгой модерации комбинировать
  с покадровым image-NSFW (отдельная модель).
- Не realtime: модерация — асинхронная очередь, не блокирует загрузку.
