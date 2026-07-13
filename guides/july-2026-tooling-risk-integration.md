# July 2026 tooling / risk integration

> Фильтр для находок 05-08.07.2026: что внедрять, что держать как reference,
> а что не тащить в продукты из-за ToS / privacy / safety рисков.

## Внедрять в ближайшие product tracks

### Eclipse Library

- **FckSignups** -> добавить мышление `no-signup tools`: отдельный тег, быстрые подборки, меньше трения для пользователя.
- **Claude Prompt Library** -> вытаскивать паттерны промптов, а не копировать всё подряд.
- **Editor Stylist Humanizer** -> хранить как prompt-asset для публичных текстов, лендингов, Telegram/LinkedIn.
- **Free AI API pack / Google AI Studio** -> держать provider-onboarding раздел свежим: где взять ключ, где лимиты, где privacy-risk.
- **Internxt Temporary Email** -> добавить в privacy/web-utilities как disposable inbox для QA signup-flow и личной hygiene, не как инструмент обхода правил.

### Eclipse Chat

- **Audio Transcriber / Tactiq** -> call transcripts: запись -> расшифровка -> summary -> action items -> linked tasks.
- **MWS Tables** -> requirements for operational tables: server-side calculations, filters, permissions, linked rooms/messages.
- **OpenSERP** -> AI rooms / Knowledge Agent: fresh web context -> ranked sources -> citations.
- **FckSignups pattern** -> command center should expose “useful tools” without forcing onboarding text.

### Hopson Sentinel

- **Fish Audio** -> voice loop / TTS provider spike with consent gate.
- **Claude Prompt Library** -> coding-agent command review: outcome, constraints, verification, reference files.
- **Colibri** -> local LLM runtime research: disk-streamed MoE, `plan/doctor` UX, RAM/disk budgeting, provider health checks. Не скачивать 370GB model без отдельного hardware/time плана.
- **Obscura** -> authorized browser automation benchmark against Playwright Chromium.
- **NtWarden** -> workstation/security doctor reference only in VM/lab.
- **T3MP3ST** -> defensive security lab reference only, no offensive automation.

### Shotforge / Text2Image / Eclipse Media

- **Seedream 5.0** -> benchmark region edits, text rendering, infographic/scheme generation.
- **Photo Restoration Prompt** -> ready preset for old-photo restore flow.
- **Fish Audio** -> voiceover provider spike, consent-gated.

### Educator-AI / Smart Life Assistant

- **Audio Transcriber** -> lecture/video -> transcript -> quiz/task generation.
- **Fish Audio** -> lesson voiceover and dialogue practice.
- **Claude Finance 6** -> Smart Life Assistant “financial clarity” action pack. Keep it non-advisory.

## Reference only

- **Draper Idea Validation** -> discovery-flow template for Eclipse AI Hub / sales intake. Do not depend on service.
- **Japan AI watchlist** -> provider/localization radar; no integration until API/license/source verified.
- **unlim-cloud** -> personal vault UX reference; do not use Telegram as production object storage.
- **pxpipe** -> R&D only for token-cost experiments; not for code, secrets, IDs, exact numbers or legal text.
- **Colibri** -> сильный engineering reference, но cold decode disk-bound; сначала изучать архитектуру, не обещать production-speed.
- **Internxt Temporary Email** -> полезно для разовых тестов, но для стабильных e2e лучше собственные test inboxes / MailHog / Mailpit.

## Do not productize

- **Duoguodizhi / fake identity generators** -> no KYC/registration/App Store region bypass. If needed, use only local synthetic QA data or Faker-style fixtures.
- **Temporary email abuse** -> no ban/KYC bypass, mass signup, account farming or клиентские сценарии, где нужна реальная идентичность.
- **Fable prompt leaks / uncensored model hype** -> study structure only, not production prompts/providers.
- **T3MP3ST offensive usage** -> only authorized security lab, own targets, defensive review.
- **Stealth scraping** -> authorized/legal sources only; no bypassing other services' protections.

## Next experiments

1. Add `no-signup` and `privacy-friendly` tags to the web library navigation.
2. Build provider decision matrix for Eclipse AI Hub / Eclipse Chat: Gemini, Groq, Cerebras, OpenRouter, Mistral, Cloudflare Workers AI, Hugging Face.
3. Run one Fish Audio RU TTS consent-safe test.
4. Run one Audio Transcriber / Tactiq benchmark on a non-sensitive meeting/video.
5. Write Eclipse Chat Tables requirements from MWS Tables reference.
6. Benchmark Obscura only on owned/authorized pages.
7. Extract Colibri ideas into Sentinel backlog: local model doctor, safe RAM budget, disk read warning, provider readiness JSON.
8. Add disposable-email checklist for QA: when temporary inbox is OK, when controlled test mail is required.
