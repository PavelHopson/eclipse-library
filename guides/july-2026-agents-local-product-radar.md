# July 2026 agents / local AI / product radar

Дата проверки: **24.07.2026**

Источник пачки: Telegram «Eclipse Hopson», сообщения 15–24.07.2026.

## Результат intake

- Получено 48 сообщений.
- В каталог добавлено 26 новых проверенных записей.
- 13 уникальных ресурсов уже были опубликованы в README в блоке 18–19 июля.
- Внутри входящей пачки повторялись Kimi K3 и PriceGhost.
- Шесть материалов исключены как low-value, дублирующие или не соответствующие
  продуктовой/security-планке библиотеки.
- Новые записи проверены по официальным GitHub/Hugging Face/product pages.
- Репозитории и install scripts не запускались; review был статическим.

## Решения по применимости

| Находка | Решение | Проблема и сценарий | Проект / что разработать | Ценность | Сложность / приоритет | Риски и зависимости | Следующий шаг |
|---|---|---|---|---|---|---|---|
| AI Agents Security Week | **Внедрить сейчас** | Нужен единый threat model для agents с tools, memory и internal data | Sentinel, AI Hub, Eclipse Chat: превратить программу в security checklist + regression cases | Снижает риск prompt injection, data leak и unsafe tool execution | S / **P0** | Регистрация до 27.07; сертификат требует отбора | Зарегистрироваться и после интенсива оформить reusable agent-security checklist |
| Cursor Team Kit | **Внедрить сейчас** | CI/UI review сейчас разрознен между репо | Все dev-репо: выборочно адаптировать `control-ui`, `fix-ci`, `verify-this`, `deslop` | Быстрее воспроизводимые проверки и меньше ручного triage | S / **P1** | Skill supply chain; часть правил Cursor-specific | Сделать manual diff 4 skills с текущими Codex/Claude workflows и перенести только недостающие правила |
| kill-ai-slop | **Внедрить сейчас** | Frontend review должен ловить generic AI patterns | Landing/Library/Kwork UI: добавить как secondary checklist к The Taste | Более специфичный дизайн и copy без механической смены design system | S / **P1** | Эвристики могут удалить уместные shadows/gradients | Сопоставить rule set с The Taste и оставить только неповторяющиеся проверки |
| beautify-github-readme | **Внедрить сейчас** | Портфолио README не всегда объясняет продукт за 3 секунды | Флагманы Eclipse Forge: evidence-first README, реальные screenshots, accessible SVG | Лучше first impression работодателю/заказчику | S–M / **P1** | Нельзя выдумывать фичи; GitHub SVG/accessibility limits | Пилот на одном не-флагманском repo в asset-only режиме |
| Bolt Slides | **Добавить в roadmap** | Нужны shareable product/architecture demos без ручной верстки слайдов | Landing/Kwork: HTML deck pipeline с проверяемыми данными и responsive QA | Быстрее proposal/demo, интерактивность вместо статичного PDF | M / **P1** | Это HTML, не PPTX; внешний template/skill | Собрать один deck для Kwork #18 и сравнить время/качество с текущим процессом |
| Bonsai 27B | **Добавить в roadmap** | Local agents ограничены RAM/VRAM | Sentinel/AI Hub: новый local provider profile и benchmark suite | Потенциально 27B-class reasoning на consumer hardware | M / **P1** | Vendor benchmarks; custom kernels; скорость/качество зависят от железа | Прогнать standard coding/RAG eval на доступном Apple/NVIDIA hardware |
| TurboFieldfare | **Оставить как reference** | Нужны паттерны запуска MoE при малой RAM | Sentinel hardware doctor: disk-streamed experts и install planning | Архитектурная идея для low-memory runtime | M / **P2** | Только Apple Silicon; SSD latency/wear; vendor benchmark | Изучить runtime/benchmark methodology, не добавлять provider до независимого теста |
| ODS | **Добавить в roadmap** | Local AI stack сложно собирать из Ollama/Open WebUI/n8n/ComfyUI | Sentinel/AI Hub: сравнить appliance onboarding, health checks, service graph | Сокращение setup-time для local-first пользователей | L / **P1** | Широкий installer, Docker/WSL, много services/secrets; supply chain | Static audit pinned release + запуск только в disposable VM |
| Soprano | **Добавить в roadmap** | Нужен быстрый локальный TTS с низкой задержкой | Sentinel/Chat/Educator: provider adapter + RU/EN latency/quality eval | Приватная озвучка без постоянного cloud API | M / **P1** | RU quality неизвестно; custom voices требуют согласия | Benchmark CPU/MPS/CUDA и сравнение с текущими TTS providers |
| AnimeGen | **Добавить в roadmap** | Нужен anime previs / image-to-video для DnD и media | DnD Forge/Media/Shotforge: isolated generation worker/ComfyUI workflow | Новые storyboard и short-form video сценарии | L / **P2** | RTX 4090+; identity drift; content safety и rights | Подготовить 10-scene eval set и проверить 5s I2V/T2V outputs |
| SongGeneration Studio | **Оставить как reference** | Нужна локальная генерация песен/стемов | Media/DnD Forge: UX и pipeline reference | Идеи для tavern songs, ambience, promo audio | M / **P3** | Нет лицензии; 10 GB VRAM; reference-audio rights | Не устанавливать; сначала запросить/дождаться явной лицензии |
| Reiverr | **Оставить как reference** | Eclipse Media нужен понятный TV/discovery UX | Media: карточки, watch progress, recommendations, Tizen flow | Проверенные UX-паттерны media library | M / **P2** | AGPL network obligations; только легальные sources | Сделать UX teardown без копирования кода и без torrent workflow |
| PairDrop | **Добавить в roadmap** | Нужна быстрая передача файлов между устройствами | Chat/Media: WebRTC P2P transfer proof of concept | Меньше server storage/egress, удобный local handoff | M / **P2** | Signaling metadata, NAT/TURN, abuse/rate limits, GPL | Спроектировать opt-in P2P spike с fallback на обычную загрузку |
| OpenDroid | **Оставить как reference** | Sentinel нужен mobile action layer | Sentinel: explicit Android action protocol и approval UI | Управление телефоном из agent workflow | L / **P2** | Accessibility + screenshots = high privilege; calls/messages/2FA | Только static architecture review и isolated test-device threat model |
| Kudu | **Не использовать** в продукте | Авто-cleaning выглядит удобно, но риск потери данных выше продуктовой ценности | Workstation reference only | Ограниченная бытовая ценность | S / **P3** | Registry/service/debloat/secure-delete destructive operations | При личном тесте — VM, signed release, restore point; не интегрировать в Sentinel |
| Kimi Code CLI | **Добавить в roadmap** | Нужен альтернативный coding provider с ACP/MCP/subagents | Sentinel/OMC/AI Hub: provider/CLI benchmark | Сравнение cost/latency/tooling и ACP integration | M / **P2** | Cloud privacy, plugins/MCP, install script, vendor lock-in | Установить только pinned package в sandbox и прогнать standard coding eval |
| Apple Design Skill | **Оставить как reference** | Нужны concrete motion/interaction patterns | Chat/Sentinel/Landing: design review reference | Повышает polish без нового UI framework | S / **P2** | Неофициальная интерпретация WWDC; возможен конфликт с design system | Сверить 17 principles с The Taste и PRODUCT_UX_PRINCIPLES |
| awesome-hermes-agent | **Оставить как reference** | Нужен source radar по Hermes ecosystem | Library/Sentinel/OMC intake | Быстрее discovery с maturity labels | S / **P2** | Listing не является endorsement; linked repos меняются | Добавить quarterly review, не auto-install |
| awesome-ai-agents | **Оставить как reference** | Нужен широкий список agent projects | Library intake | Discovery coverage | S / **P3** | Данные частично устарели, есть дубли | Использовать только как очередь кандидатов с повторной проверкой |
| Prompt Improver | **Оставить как reference** | Нечёткие prompts вызывают дорогие correction loops | Claude workflows: условный prompt-evaluation hook | Может сократить исправления | S / **P2** | Hook меняет каждый turn; claims не независимы; Codex не поддержан | Прочитать hook payloads и A/B test на synthetic repo |
| Obsidian Mind | **Добавить в roadmap** | Agent memory фрагментирована между sessions/tools | Sentinel/OMC/Library: vault-first memory + indexes | Лучше continuity и explainable history | M / **P1** | Secrets/PII в git, hook/tool poisoning, stale memory | Спроектировать data classification и redaction до любого pilot |
| Work, in progress | **Оставить как reference** | Нужны реальные starting points для ChatGPT/Codex | Library/AI Hub/Sentinel/portfolio | Быстрый discovery практических workflows | S / **P2** | Community posts, не все authored/endorsed OpenAI | Раз в месяц отбирать только reproducible workflows |
| Claude Record a Skill | **Оставить как reference** | Не-техническим пользователям сложно писать procedures | Sentinel future recorder: screen trace → draft skill → test/review | Снижает барьер автоматизации | XL / **P2** | Screen/voice privacy; one-shot misses errors; paid closed feature | Сделать product teardown и определить safe recording/redaction flow |
| PriceGhost | **Оставить как reference** | Нужен price monitoring и change alerts | Kwork #18/future commerce research | Паттерны extraction/verification/alerts | M / **P2** | Нет лицензии; scraping ToS; SSRF; API keys | Только architecture review; не копировать и не deploy |
| Déjà View | **Оставить как reference** | Startup validation часто игнорирует погибших конкурентов | Kwork #18 research-agent | Полезный research question и report UX | S / **P2** | Closed service; нет видимой privacy/methodology; confidential ideas | Повторить метод вручную на public idea и проверить citations |
| Claudexor | **Не использовать** | Multi-harness UX интересен, но account rotation несёт лишний риск | Sentinel/OMC architecture reference only | Идеи shared context/review arbitration | L / **P3** | ToS, auth sessions, subscription rotation, wide local permissions | Не подключать accounts; брать только UI/architecture notes |

## Исключено

| Материал | Причина |
|---|---|
| Три промпта для поиска дальних родственников | Нет первичного источника; LLM не является genealogy database; высокий риск doxxing, ложных связей и обработки персональных данных третьих лиц |
| Who Is Bad AI? | Рабочий novelty-проект, но измеримой пользы продуктам Eclipse Forge нет |
| `pohuy` | Tone novelty, не инженерная capability; конфликтует с профессиональными logs, client demos и accessibility |
| Mailwave disposable email | Дублирует уже опубликованный QA-only disposable inbox workflow; новый сервис не добавляет уникального сценария |
| Young Schema Questionnaire на стороннем сайте | Медицински чувствительный self-assessment, не продуктовая находка Eclipse Forge; не заменяет специалиста |
| «Самый плохой принт» prompt | Однострочный joke prompt без повторяемой продуктовой ценности |

## Уже опубликовано — не дублируем

Kimi K3/Kimi Code overview, Foglamp Scan, LLMs-local, AI Engineering From Scratch,
«Звук · Сингл», awesome-hermes-skills, CS Self Learning, Shipper anti-slop guide,
Conversation Steganography, MaddyPix, Hyper Research, Lucy 2.5 и MOSS SoundEffect v2.0.

## Security review

### High

- **OpenDroid:** Accessibility automation и screenshots дают агенту контроль над вводом,
  приложениями, calls/messages и видимыми секретами. Только отдельное test device/profile.
- **ODS:** one-line installers и большой service graph расширяют supply-chain и secret
  surface. Нужны pinned release, manual installer review, checksums и disposable VM.

### Medium

- **Claudexor:** несколько subscription logins, quota rotation и локальные auth sessions
  требуют ToS и credential-storage review.
- **Obsidian Mind:** hooks/MCP могут автоматически переносить чувствительный контекст в
  git-tracked vault. Нужны allowlist, redaction и no-secrets policy.
- **PriceGhost:** произвольные product URLs создают SSRF/scraping surface; API keys должны
  оставаться server-side.
- **Kudu:** cleanup/debloat/secure delete являются разрушительными операциями даже при
  честном open-source коде.

### Low / informational

- Для skills/plugins выполнен только статический review публичных manifests/README.
  Runtime MCP enumeration, package signing verification и malware sandbox не выполнялись.
- Stars и vendor benchmarks — сигналы зрелости, но не доказательство безопасности или
  качества.
