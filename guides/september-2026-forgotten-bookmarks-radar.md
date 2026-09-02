# Радар забытых закладок — 1 сентября 2026

> Проверено по официальным сайтам, документации и репозиториям. Это intake-решение: библиотека ничего не устанавливает, не загружает модели и не передаёт рабочие данные внешним SaaS.

## Короткий ответ: что это и куда применять

| Закладка | Что это | Решение для Eclipse |
|---|---|---|
| Base44 | Облачный AI-конструктор full-stack приложений | Референс и контролируемая песочница Eclipse Forge; результат обязательно экспортируется в наш Git и проходит review |
| PlayTorrio | Torrent/стриминговый медиаклиент со scraper-источниками | Источник и код не интегрировать; независимо воспроизвести только UX локальной медиатеки, очереди, прогресса и продолжения работы |
| Hailuo AI | Облачный image-to-video генератор | Опциональный пилот Eclipse Media только на first-party/consented assets после проверки тарифа и прав |
| Dyad | Локальный open-source AI app builder | Главный архитектурный референс для local-first Builder: BYOK, diff, repo export, MCP quarantine |
| Higgsfield | Коммерческий image/video creative suite | Уже есть в Library; не дублировать, использовать как provider benchmark |
| Arena.ai | Публичные human-preference лидерборды моделей | Уже есть; расширить до evidence source для AI Hub, без чувствительных промптов и автопереключения по одному rank |
| Unicorn Studio | Веб-редактор интерактивных motion-сцен | Референс Animation Lab; не копировать assets/шаблоны без проверки плана и лицензии |
| DeeVid | SaaS-набор генерации и редактирования AI-видео | Vendor benchmark для Eclipse Media; не production provider до DPA/terms review |
| Wan web playground | Веб-интерфейс семейства Wan | Уже покрыт карточкой Wan2.2; playground добавить как непроверенную облачную точку входа, не как новый provider |
| Artlist | Лицензируемая музыка, footage и creative assets | Внедрить rights receipt: asset, план, дата загрузки, проект, каналы, сертификат и ограничения |
| Kemono | Неофициальный агрегатор/зеркало платного creator-контента | Запрещённый источник: не индексировать, не скачивать, не использовать в датасетах |
| Loki Build | AI visual website builder | Проект закрыт; оставить историческим UX-референсом, не интегрировать |
| Toolfolio | Каталог AI-инструментов | Только discovery feed; каждую находку перепроверять по первичному источнику |
| wireguard-bot | Telegram-бот управления WireGuard | Репозиторий архивирован и не поддерживается; код не ставить, взять лишь идею QR enrollment/revoke |
| Reve | Image generator/API | Уже есть; допускается только внутренний provider по условиям API, без перепродажи общего ключа |
| Replit | Облачная IDE и Agent builder | Взять checkpoints, rollback, plan/build и budget visibility; любой прототип экспортировать в наш Git |
| FontSpace Gothic | Каталог готических шрифтов с разными лицензиями | Только поиск; каждый font фиксировать с license file, автором, hash и проверкой кириллицы |
| HeroUI Chat | Prompt/screenshot-to-React UI builder | Дизайн-песочница Eclipse Forge/Animation Lab с экспортом, dependency, license, a11y и responsive review |
| Adaptive.ai | SaaS AI coworkers с интеграциями и расписаниями | Референс Growth OS: scoped OAuth, approval gates, action ledger, schedule visibility |
| seedbox-lite | Torrent media center/seedbox | Не использовать: torrent-риск и custom non-commercial license |
| Anti-Miner | Windows-утилита поиска/удаления майнеров | Только карантинный defensive reference; не запускать и не вставлять API key в исходник |
| TagGUI | Локальный GUI для caption/tag подготовки image datasets | Хороший reference/isolated tool для Eclipse Media training lab; GPL требует process boundary |
| kohya_ss | GUI/CLI обучения diffusion LoRA/DreamBooth | Опциональный GPU workbench для собственных/consented datasets, не текущий VPS |
| Udemy Downloader GUI | Загрузчик приобретённых курсов | Не интегрировать из-за ToS/copyright/DRM риска |
| Aperant | Multi-session autonomous coding agent | Архитектурный референс Forge/Jarvis; AGPL — не копировать в proprietary services |
| PhantomBuster | SaaS scraping/outreach automation | Только compliance-gated Growth OS experiment: lawful basis, consent, suppression, rate limits, human approval |
| NekoRay | GUI для proxy-конфигураций | Архивирован и не поддерживается; не использовать в production |

## Что внедряем первым

### 1. Eclipse Forge: локальный и проверяемый Builder

Из [Dyad](https://github.com/dyad-sh/dyad), [Base44](https://docs.base44.com/Getting-Started/Quick-start-guide), [Replit Agent](https://docs.replit.com/learn/build-with-agent) и [HeroUI Chat](https://heroui.chat/) собираем один продуктовый контракт:

`brief -> plan -> isolated preview -> visible diff -> checkpoint -> tests -> export to approved Git branch -> human review`

Обязательные свойства: BYOK/локальная модель, secrets не попадают в prompt, network и MCP выключены до разрешения, экспорт не содержит vendor lock-in, rollback восстанавливает код и связанные миграции, стоимость видна до запуска. Base44 и Replit остаются внешними песочницами, не production runtime.

### 2. Eclipse Media: права как часть файла

[Artlist](https://artlist.io/help-center/privacy-terms/artlist-license/) нужен не как «ещё один каталог музыки», а как образец цепочки прав. Для каждого импортированного asset сохраняем:

- официальный source URL и asset ID;
- владелец аккаунта, plan и client/project scope;
- дата получения, сертификат и license snapshot;
- разрешённые каналы, broadcast/client ограничения и срок;
- hash оригинала, transformations и конечные exports;
- запрет на обучение моделей, если license не разрешает training.

Hailuo, DeeVid, Higgsfield, Reve и Wan подключаются позже к единому provider contract: declared purpose, consent, input retention, model/version, cost, cancel, provenance и manual publish. Реальные лица и голоса требуют отдельного согласия.

### 3. Локальная подготовка обучающих данных

[TagGUI](https://github.com/jhc13/taggui) полезен для captions, tags и batch review. [kohya_ss](https://github.com/bmaltais/kohya_ss) — для изолированного LoRA/finetune эксперимента на GPU worker. До запуска нужны dataset manifest, авторство/согласие, model-card и hash, запрет hidden downloads, лимиты диска/GPU и ручной review samples. GPL-компоненты держим отдельным процессом; исходники не переносим в закрытые приложения.

### 4. Growth OS: действие должно быть объяснимо и обратимо

Из Adaptive.ai берём scoped OAuth, видимую очередь расписаний, preview действия и audit ledger. PhantomBuster не становится общим scraper: любые внешние outreach-задачи требуют разрешённой платформой интеграции, законного основания, списка исключений, rate limit и подтверждения человеком перед отправкой.

## Отклонённые и карантинные источники

PlayTorrio, Kemono, seedbox-lite и Udemy Downloader нельзя использовать как поставщиков медиа или данных. Риск состоит не только в лицензии кода: способ получения материалов может нарушать copyright, DRM или правила платформы. Из PlayTorrio разрешён только clean-room перенос общеупотребимых UX-механик — локальная полка, очередь, явный прогресс и продолжение незавершённой работы — поверх файлов с подтверждёнными правами.

wireguard-bot и NekoRay архивированы. Anti-Miner имеет разрушительный endpoint-профиль и предлагает вручную помещать VirusTotal key в исходник. Для Eclipse Sentinel берём только безопасный паттерн `detect -> explain -> isolate -> approve -> remediate`, где report-only является состоянием по умолчанию, бинарники подписаны, а секреты хранятся вне кода.

## Security и supply-chain gate

- никакого bulk install и запуска shell installers из закладок;
- clone/build только в одноразовой песочнице с pinned commit и dependency audit;
- SaaS не получает production secrets, customer data, private repositories или лица без отдельного review;
- code export проходит secret scan, license/SBOM, dependency, SAST и human review;
- модели и веса фиксируются по revision и hash, datasets — по provenance manifest;
- AGPL/GPL/custom licenses не смешиваются с закрытым кодом без отдельного юридического решения;
- отклонённые источники остаются видимыми в Library, чтобы их не переоценивали повторно.

## Порядок работ

1. Добавить Builder contract и checkpoint schema в Eclipse Forge.
2. Добавить Media rights receipt и provider provenance receipt.
3. Спроектировать isolated Dataset Lab для TagGUI/kohya без установки на VPS.
4. Добавить Growth OS action ledger и approval gate.
5. Оставить torrent, mirror, course-downloader и архивные network tools в deny/quarantine registry.
