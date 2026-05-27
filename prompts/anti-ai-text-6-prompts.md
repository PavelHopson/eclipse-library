# Anti-AI-Text — 6 промптов для очеловечивания текста

> Источник: Telegram «Не баг, а фича» 27.05.2026. 6 prompts которые ATTACK
> разные шаблоны генерированного текста: клише, отсутствие позиции, вода,
> механический ритм, шаблонные обороты, нерешительность.
>
> **С оговоркой (та же планка как у [talk-normal](https://github.com/hexiecs/talk-normal) и
> [Humanize Rewriter](humanize-rewriter.md)):** используем для операторских/
> контент задач — SMM, маркетплейс-автоответы, копирайтинг для Eclipse AI Hub
> Copywriter, draft-rewrite в Star CRM CRM-ответы. **НЕ** для academic / научных
> публикаций, journalist work, или mass-spam обхода AI-детекторов.
>
> Совместимо с любым LLM (Claude / GPT / Gemini / DeepSeek / локальные).
> Применяются по одному или цепочкой — каждый next attack — конкретный slice
> AI-почерка.

---

## 1️⃣ Убираем все нейро-клише

> Snipes: generic introductions, conclusions, empty transitions, corporate
> jargon, motivational filler, predictable patterns. Затем заставляет
> переписать с insight-first подходом.

```
Never use:
- Generic introductions
- Generic conclusions
- Empty transitions
- Corporate jargon
- Motivational filler
- Overexplaining
- Predictable sentence patterns
- Obvious observations
- Unnecessary context
- Balanced arguments where evidence clearly favors one side

Always:
- Lead with the most important idea
- Prioritize insight over explanation
- Prefer specificity over abstraction
- Use natural sentence variation
- Include meaningful judgment
- Challenge assumptions when appropriate
- Write with conviction
- Cut anything that does not create value
- Sound like a person who understands the subject deeply

After drafting, review every paragraph and remove anything that feels
generated rather than genuinely written. Now write: [Ваш текст]
```

---

## 2️⃣ Добавляем позицию, оценку и аргументацию

> AI часто избегает оценочных суждений ("на одной стороне, на другой стороне" =
> neutered output). Этот промпт заставляет занять позицию, отметить trade-offs,
> challenge assumptions — то что делают humans-experts.

```
AI often avoids taking positions.

Humans make judgments.

Rewrite the text below and introduce thoughtful judgment where appropriate.

You may:
- Prioritize certain ideas over others
- Point out weaknesses
- Challenge assumptions
- Express confidence levels
- Mention trade-offs
- Show skepticism

Do not become opinionated for the sake of it.

The goal is to sound like a knowledgeable human evaluating information
rather than simply presenting it.

TEXT:
[Ваш текст]
```

---

## 3️⃣ Убираем воду из текста

> Per-paragraph фильтр: «explaining» vs «insight». Explaining cuts, insights
> remain. Readers should finish feeling они learned что-то новое.

```
Review the text below. For every paragraph, ask:
"Is this explaining something obvious, or offering a meaningful insight?"
Remove content that merely explains.
Keep content that reveals, challenges, questions, compares, or reframes.
The final version should contain fewer explanations and more insights.
Readers should finish the piece feeling they learned something they did
not already know.

TEXT: [Ваш текст]
```

---

## 4️⃣ Оживляем подачу текста (rhythm-attack)

> AI text имеет predictable rhythm: same-length sentences, repetitive
> structure, mechanical pacing. Этот промпт mixes lengths, allows fragments,
> varies paragraph length, removes mechanically-optimized openings.

```
Most AI writing has a predictable rhythm.

The sentences are similar lengths.
The structure becomes repetitive.
The pacing feels mechanical.

Rewrite the text using natural human rhythm.

Requirements:
- Mix short and long sentences
- Occasionally use fragments
- Vary paragraph length
- Avoid repetitive openings
- Create contrast and momentum
- Remove anything that feels mechanically optimized

The writing should feel alive rather than generated.

TEXT:
[Ваш текст]
```

---

## 5️⃣ Убираем шаблонный стиль ИИ (sentence-by-sentence analysis)

> Заставляет LLM СНАЧАЛА highlight generic sentences, объяснить почему они
> generic, потом переписать с originality. Двух-stage process даёт глубже
> результат чем single-shot rewrite.

```
Analyze the text below. Highlight every sentence that could easily appear
in thousands of AI-generated articles. For each sentence:
1. Explain why it feels generic.
2. Rewrite it with a more original observation.
3. Increase specificity.
4. Add a clearer perspective.
Then provide a fully rewritten version that sounds distinctive and
memorable.

TEXT: [Ваш текст]
```

---

## 6️⃣ Улучшаем убедительность текста (reputation-on-the-line tone)

> "Rewrite as if your reputation depends on being correct" — заставляет
> отказаться от safe/generic/broad claims. Каждое предложение должно звучать
> earned, не сгенерировано.

```
Rewrite this text as if it were written by someone whose reputation
depends on being correct.

Avoid:
- Generic advice
- Safe observations
- Obvious statements
- Neutral commentary
- Broad claims that apply everywhere

Instead:
- Prioritize useful insights
- Include stronger reasoning
- Focus on what actually matters
- Eliminate filler
- Speak with informed conviction

Every sentence should sound earned rather than generated.

TEXT: [Ваш текст]
```

---

## Применение в наших проектах

| Куда | Use case |
|---|---|
| **Eclipse AI Hub Copywriter** | Pre-prompt пайплайн: user text → Lyra Prompt Optimizer → один из 6 anti-AI-text → final humanized draft. Цепочка: 1️⃣ → 4️⃣ → 6️⃣ типичная для long-form |
| **Star CRM AutoReply** | Маркетплейс-ответы на отзывы (Wildberries / Ozon): 4️⃣ (rhythm) + 6️⃣ (reputation) — чтобы ответы не звучали как ChatGPT-template |
| **Eclipse Chat AI bot personality** | Bot.personality field (v1.2.27) с препроцессингом draft response через 1️⃣ (anti-cliché) — чтобы бот не отвечал штампами |
| **Shotforge / Text2Image — caption-gen** | Описания к арт-промптам: 5️⃣ для генерации distinct visual descriptions |

## Совмещение с существующими промптами библиотеки

- **[Lyra Prompt Optimizer](lyra-prompt-optimizer.md)** — мета-уровень, для перепрома (всё что пишет prompts). Этот файл — content-level rewriters.
- **[Humanize Rewriter](humanize-rewriter.md)** — single-prompt humanizer, общий. 6-prompts здесь — таргетированы по виду AI-почерка (cliché / position / water / rhythm / template / conviction).

**Combo рекомендация:** для maximum-impact rewrite — chain 1️⃣ (remove cliché) → 4️⃣ (rhythm) → 6️⃣ (conviction). 3-step pipeline даёт наиболее distinct human-like output.
