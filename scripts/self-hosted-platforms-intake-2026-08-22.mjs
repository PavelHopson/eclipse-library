import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, "catalog", "resources.json");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const verifiedAt = "2026-08-22";
const guide = "self-hosted-platforms-for-eclipse-2026-08-22";

const common = {
  reviewStatus: "verified",
  verifiedAt,
  addedAt: verifiedAt,
  guide,
  source: {
    file: "guides/self-hosted-platforms-for-eclipse-2026-08-22.md",
    line: 1,
    category: "Self-hosted & Open Source",
    subcategory: "Платформы для Eclipse"
  }
};

const records = [
  {
    id: "penpot-open-source-design-platform",
    url: "https://github.com/penpot/penpot",
    title: "Penpot",
    type: "tool",
    category: "Design & UI",
    subcategory: "Совместный дизайн и дизайн-системы",
    simpleDescription: "Open-source веб-платформа для совместного проектирования интерфейсов. Полезна как единый источник компонентов, responsive-макетов и дизайн-токенов с более прозрачным handoff в HTML, CSS и SVG.",
    useCases: [
      "Вести общую дизайн-систему Eclipse с состояниями и responsive-вариантами",
      "Синхронизировать токены Penpot и CSS variables Eclipse Chat",
      "Публиковать проверенные UI-паттерны и исходники в Eclipse Library"
    ],
    features: ["Совместное редактирование", "Компоненты и библиотеки", "Работа с веб-стандартами", "Self-hosting"],
    platforms: ["Web", "Self-host", "Cloud", "Docker"],
    license: "Mozilla Public License 2.0 (MPL-2.0)",
    licenseEvidence: [{ kind: "license", label: "Official MPL-2.0 license", url: "https://github.com/penpot/penpot/blob/develop/LICENSE" }],
    pricing: "Исходный код доступен для self-hosting; облачный сервис и эксплуатация имеют отдельные условия и стоимость",
    access: { cost: "freemium", signup: "optional", runtime: "hybrid" },
    trust: "official",
    trustReason: "Проверены официальный репозиторий penpot/penpot, homepage и файл MPL-2.0 в ветке develop.",
    projects: ["Eclipse Design System", "Eclipse Library", "Eclipse Chat", "Eclipse Forge Landing"],
    decision: "roadmap",
    riskLevel: "medium",
    risks: ["Миграция макетов и компонентов может потерять fidelity", "Нужны backups, RBAC и контроль внешнего доступа", "Изменённые MPL-файлы сохраняют требования MPL"],
    quickStart: ["Поднять sandbox без production-данных", "Перенести один вертикальный срез компонентов", "Сопоставить дизайн-токены с CSS variables и пройти desktop/mobile QA"],
    limitations: ["Не заменять текущий дизайн-процесс до проверки handoff", "Не использовать экспортированный код без review"],
    ...common
  },
  {
    id: "niri-scrollable-tiling-wayland-compositor",
    url: "https://github.com/niri-wm/niri",
    title: "Niri",
    type: "oss",
    category: "Desktop & OS",
    subcategory: "Scrollable workspace UX",
    simpleDescription: "Scrollable-tiling compositor для Wayland: окна располагаются в растущей горизонтальной ленте. Для Eclipse ценен прежде всего как UX-референс пространственных рабочих областей, а не как продуктовая зависимость.",
    useCases: ["Прототип ленты контекстов в Eclipse Chat", "Operational workspaces в Hopson Sentinel", "Пространственная навигация в DnD / Living World"],
    features: ["Scrollable tiling", "Wayland compositor", "Keyboard-driven navigation", "Dynamic workspaces"],
    platforms: ["Linux", "Wayland", "Desktop"],
    license: "GNU General Public License v3.0 (GPL-3.0)",
    licenseEvidence: [{ kind: "license", label: "Official GPL-3.0 license", url: "https://github.com/niri-wm/niri/blob/main/LICENSE" }],
    pricing: "Бесплатный open-source системный компонент; внедрение его идей в продукт требует отдельной разработки",
    access: { cost: "free", signup: "none", runtime: "local" },
    trust: "official",
    trustReason: "Исходная ссылка YaLTeR/niri перенаправляет в официальный активный репозиторий niri-wm/niri; проверены homepage и GPL-3.0.",
    projects: ["Eclipse Chat", "Hopson Sentinel", "DnD / Living World", "Eclipse Library"],
    decision: "reference",
    riskLevel: "low",
    risks: ["Linux/Wayland only", "Пространственная навигация может ухудшить keyboard focus и accessibility", "Анимации требуют reduced-motion fallback"],
    quickStart: ["Не устанавливать как зависимость Eclipse", "Собрать отдельный web-прототип scrollable workspace", "Проверить history, deep links, focus order, mobile и reduced motion"],
    limitations: ["Не Windows/macOS-компонент", "Использовать идеи интерфейса, а не копировать системную архитектуру"],
    ...common
  },
  {
    id: "duplicati-encrypted-backups",
    url: "https://github.com/duplicati/duplicati",
    title: "Duplicati",
    type: "tool",
    category: "Infrastructure & Ops",
    subcategory: "Зашифрованные резервные копии",
    simpleDescription: "Кроссплатформенная система зашифрованных инкрементальных backup по расписанию с поддержкой локальных и облачных хранилищ. Ценность для Eclipse — проверяемое восстановление, а не просто зелёный статус задания.",
    useCases: ["Backup конфигураций, каталогов и БД Eclipse", "Backup health и restore drills в Hopson Sentinel", "Раздельные recovery-планы StarCRM и StarMarket"],
    features: ["Client-side encryption", "Incremental backups", "Retention policies", "Multiple storage backends", "Scheduled jobs"],
    platforms: ["Windows", "macOS", "Linux", "Docker", "Self-host"],
    license: "Преимущественно MIT; каталог proprietary/ и сторонние компоненты имеют отдельные условия",
    licenseEvidence: [{ kind: "license", label: "Official mixed license notice", url: "https://github.com/duplicati/duplicati/blob/master/LICENSE" }],
    pricing: "Основной self-hosted код бесплатный; storage, egress и отдельные коммерческие компоненты могут стоить денег",
    access: { cost: "freemium", signup: "optional", runtime: "self-host" },
    trust: "official",
    trustReason: "Проверены официальный репозиторий duplicati/duplicati и полный license notice, включая отдельные условия proprietary/.",
    projects: ["Hopson Sentinel", "Eclipse Library", "Eclipse Chat", "StarCRM", "StarMarket"],
    decision: "now",
    riskLevel: "high",
    risks: ["Потеря ключа шифрования делает backup бесполезным", "Скомпрометированные credentials могут позволить удалить backup", "Успешное задание не доказывает возможность восстановления"],
    quickStart: ["Взять непроизводственный dataset", "Создать зашифрованный backup во второе хранилище", "Восстановить в чистую директорию и сверить checksum, RPO и RTO"],
    limitations: ["Не хранить encryption key рядом с backup", "Нужны immutable/versioned storage и регулярные restore drills"],
    ...common
  },
  {
    id: "linkding-self-hosted-bookmarks",
    url: "https://github.com/sissbruecker/linkding",
    title: "Linkding",
    type: "tool",
    category: "Knowledge & Research",
    subcategory: "Research inbox и закладки",
    simpleDescription: "Минималистичный self-hosted bookmark manager с тегами, поиском и browser extensions. Подходит как быстрый входящий слой между найденной ссылкой и проверенной карточкой Eclipse Library.",
    useCases: ["Research inbox для Eclipse Library", "Источники и конкуренты в Eclipse Growth OS", "Реестр документации и evals в Eclipse AI Hub"],
    features: ["Tags", "Search", "Browser extensions", "Archive snapshots", "Self-hosting"],
    platforms: ["Web", "Docker", "Self-host", "Browser extension"],
    license: "MIT",
    licenseEvidence: [{ kind: "license", label: "Official MIT license", url: "https://github.com/sissbruecker/linkding/blob/master/LICENSE.txt" }],
    pricing: "Self-hosted приложение бесплатно; инфраструктура, backups и эксплуатация оплачиваются владельцем",
    access: { cost: "free", signup: "none", runtime: "self-host" },
    trust: "official",
    trustReason: "Проверены официальный репозиторий sissbruecker/linkding, homepage и MIT license.",
    projects: ["Eclipse Library", "Eclipse Growth OS", "Eclipse AI Hub"],
    decision: "now",
    riskLevel: "medium",
    risks: ["Внешние страницы могут содержать prompt injection", "Metadata fetch может создать SSRF-риск", "Токены расширений дают доступ к приватным закладкам"],
    quickStart: ["Создать теги inbox/license-check/security-check/project:*", "Подключить canonical URL dedupe", "Экспортировать только review-approved ссылки в Library intake"],
    limitations: ["Закладка не считается проверенным источником", "Внешний текст всегда считать данными, а не инструкциями"],
    ...common
  },
  {
    id: "portainer-container-management-ce",
    url: "https://github.com/portainer/portainer",
    title: "Portainer Community Edition",
    type: "tool",
    category: "Infrastructure & Ops",
    subcategory: "Управление контейнерами",
    simpleDescription: "Официальный UI для управления Docker, Swarm и Kubernetes. Для Eclipse это операционный инструмент инвентаризации и диагностики self-hosted stack, а не компонент пользовательских продуктов.",
    useCases: ["Read-only inventory staging-контейнеров", "Health и version drift в Hopson Sentinel", "Референс модели environments → stacks → containers → events"],
    features: ["Docker management", "Kubernetes management", "Stack visibility", "Role-based administration"],
    platforms: ["Docker", "Kubernetes", "Self-host", "Web"],
    license: "zlib License для Community Edition repository; Business Edition имеет отдельные коммерческие условия",
    licenseEvidence: [{ kind: "license", label: "Official zlib license", url: "https://github.com/portainer/portainer/blob/develop/LICENSE" }],
    pricing: "Community Edition доступна бесплатно; Business Edition и поддержка оплачиваются отдельно",
    access: { cost: "freemium", signup: "none", runtime: "self-host" },
    trust: "official",
    trustReason: "Проверены официальный репозиторий portainer/portainer, homepage и zlib license; CE отделена от коммерческих функций.",
    projects: ["Hopson Sentinel", "Eclipse Infrastructure", "Eclipse AI Hub"],
    decision: "roadmap",
    riskLevel: "high",
    risks: ["Docker socket даёт root-equivalent контроль над host", "Публичный admin UI — критическая attack surface", "Ошибочное действие может остановить production"],
    quickStart: ["Подключить только staging host", "Настроить TLS, MFA/SSO, allowlist и минимальные роли", "Оставить deploy/stop/delete/secret changes вне автоматизации"],
    limitations: ["Не встраивать в клиентские продукты", "Не использовать автономные destructive actions"],
    ...common
  },
  {
    id: "listmonk-self-hosted-newsletters",
    url: "https://github.com/knadh/listmonk",
    title: "Listmonk",
    type: "tool",
    category: "Marketing & Growth",
    subcategory: "Рассылки и списки подписчиков",
    simpleDescription: "Высокопроизводительный self-hosted менеджер подписчиков, сегментов и массовых email-кампаний. Подходит для approval-first рассылок Growth OS, но не заменяет SMTP-провайдера и deliverability-процесс.",
    useCases: ["Черновики и сегменты рассылок Eclipse Growth OS", "Email digest из одобренного контента Eclipse Socials", "Consent-controlled экспорт контактов из StarCRM"],
    features: ["Subscriber lists", "Segmentation", "Campaigns", "Templates", "Analytics", "Single binary"],
    platforms: ["Linux", "Docker", "Self-host", "Web"],
    license: "GNU Affero General Public License v3.0 (AGPL-3.0)",
    licenseEvidence: [{ kind: "license", label: "Official AGPL-3.0 license", url: "https://github.com/knadh/listmonk/blob/master/LICENSE" }],
    pricing: "Self-hosted код бесплатный; SMTP, IP reputation, домен и эксплуатация оплачиваются отдельно",
    access: { cost: "free", signup: "none", runtime: "self-host" },
    trust: "official",
    trustReason: "Проверены официальный репозиторий knadh/listmonk, homepage и AGPL-3.0.",
    projects: ["Eclipse Growth OS", "Eclipse Socials", "StarCRM"],
    decision: "roadmap",
    riskLevel: "high",
    risks: ["Subscriber data является PII", "Ошибка сегмента или automation может вызвать массовую нежелательную отправку", "Нужны consent, unsubscribe, suppression, bounce и legal controls"],
    quickStart: ["Поднять staging и импортировать только внутренний test list", "Настроить double opt-in, unsubscribe и suppression", "Разрешать отправку только после preview и человеческого approval"],
    limitations: ["Не transactional email provider", "Никаких автономных массовых отправок", "AGPL требует review при модификации сетевого сервиса"],
    ...common
  },
  {
    id: "plausible-privacy-first-analytics",
    url: "https://github.com/plausible/analytics",
    title: "Plausible Analytics",
    type: "tool",
    category: "Analytics & Data",
    subcategory: "Privacy-first веб-аналитика",
    simpleDescription: "Лёгкая privacy-first веб-аналитика с небольшим набором понятных метрик, cloud и self-hosted вариантами. Подходит для публичных Eclipse-поверхностей при строгом запрете PII в событиях.",
    useCases: ["CTA-конверсии Eclipse Forge Landing", "Search-to-source funnel Eclipse Library", "Goals и content funnel Eclipse Growth OS"],
    features: ["Cookie-less analytics", "Goals", "Custom events", "Lightweight script", "Self-hosting"],
    platforms: ["Web", "Cloud", "Self-host", "Docker"],
    license: "GNU Affero General Public License v3.0 (AGPL-3.0)",
    licenseEvidence: [{ kind: "license", label: "Official AGPL-3.0 license", url: "https://github.com/plausible/analytics/blob/master/LICENSE.md" }],
    pricing: "Self-hosted код доступен по AGPL; официальный cloud — платная подписка, инфраструктура self-host оплачивается отдельно",
    access: { cost: "freemium", signup: "optional", runtime: "hybrid" },
    trust: "official",
    trustReason: "Проверены официальный репозиторий plausible/analytics, homepage и AGPL-3.0.",
    projects: ["Eclipse Forge Landing", "Eclipse Library", "Eclipse Growth OS"],
    decision: "roadmap",
    riskLevel: "medium",
    risks: ["Privacy-first не исключает применимость privacy law", "Custom properties могут случайно содержать PII или токены", "Self-hosting добавляет update, backup и monitoring burden"],
    quickStart: ["Создать allowlist из 5–8 событий без свободного текста", "Проверить payloads, DNT и consent policy", "Связать каждый goal с продуктовым решением"],
    limitations: ["Не отправлять user content, email, tenant IDs и секретные URL parameters", "AGPL требует review при модификации сетевого сервиса"],
    ...common
  }
];

const updates = {
  "nocodb-self-hosted-table-database": {
    simpleDescription: "Self-hosted no-code слой над SQL-базой: табличные представления, формы, связи и API. В Eclipse полезен как внутренняя операционная панель для Library intake и Growth OS, но Sustainable Use License не позволяет считать его беспрепятственно встраиваемой коммерческой зависимостью.",
    useCases: ["Очередь intake → license review → security review → публикация в Eclipse Library", "Контент-календарь и experiment tracker Eclipse Growth OS", "Внутренний reference/admin prototype для StarCRM", "Реестр моделей и eval-запусков Eclipse AI Hub"],
    projects: ["Eclipse Library", "Eclipse Growth OS", "StarCRM", "Eclipse AI Hub"],
    quickStart: ["Поднять sandbox над копией несекретных Library-данных", "Настроить роли автор/редактор/администратор и журнал изменений", "Проверить export, backup и отсутствие прямого production DB access"],
    limitations: ["Не встраивать и не перепродавать без legal review Sustainable Use License 1.0", "Не выдавать UI широкие права к production DB"],
    guide,
    verifiedAt
  },
  "ollama-local-runtime": {
    url: "https://ollama.com",
    simpleDescription: "Локальный runtime и HTTP API для языковых и мультимодальных моделей на Windows, macOS и Linux. Даёт Eclipse общий local-provider и privacy-mode без отправки prompts внешнему API.",
    useCases: ["Local provider и capability registry в Eclipse AI Hub", "Явный локальный privacy-mode в Eclipse Chat", "Offline summaries в Hopson Sentinel", "Локальные NPC и worldbuilding в DnD / Living World"],
    licenseEvidence: [{ kind: "license", label: "Official MIT license", url: "https://github.com/ollama/ollama/blob/main/LICENSE" }],
    projects: ["Eclipse AI Hub", "Eclipse Chat", "Hopson Sentinel", "DnD / Living World"],
    risks: ["Лицензия Ollama не покрывает автоматически скачиваемые model weights", "Неограниченные context/concurrency могут исчерпать RAM или VRAM", "Неаутентифицированный API нельзя публиковать за пределы loopback"],
    quickStart: ["Подключить одну небольшую модель через общий provider interface", "Оставить API на localhost и задать RAM/VRAM/concurrency limits", "Прогнать общий eval-набор и проверить fallback, latency, memory и логи"],
    limitations: ["Проверять provenance и лицензию каждой модели", "Не выставлять 0.0.0.0 без auth, TLS, firewall и rate limits"],
    guide,
    verifiedAt
  },
  "localsend-github-com": {
    type: "tool",
    category: "Productivity & Files",
    subcategory: "Локальная передача файлов",
    simpleDescription: "Cross-platform инструмент для передачи файлов и сообщений по локальной сети без облачного посредника и аккаунта. Полезен для Media/Shotforge/QA handoff и как UX-референс безопасного device discovery.",
    useCases: ["Передача исходников между телефоном и Eclipse Media workstation", "QA screenshots, recordings и device logs", "On-prem handoff диагностических пакетов в Hopson Sentinel", "Референс transfer UI с progress, retry и confirmation"],
    features: ["Local network discovery", "Cross-platform transfer", "No cloud account", "Files and messages"],
    platforms: ["Windows", "macOS", "Linux", "Android", "iOS"],
    license: "Apache License 2.0",
    licenseEvidence: [{ kind: "license", label: "Official Apache-2.0 license", url: "https://github.com/localsend/localsend/blob/main/LICENSE" }],
    pricing: "Бесплатное open-source приложение; сеть, устройства и operational controls остаются на стороне пользователя",
    access: { cost: "free", signup: "none", runtime: "local" },
    trust: "official",
    trustReason: "Проверены официальный репозиторий localsend/localsend, homepage и Apache-2.0 license.",
    projects: ["Eclipse Media", "Shotforge", "Hopson Sentinel", "Eclipse Chat"],
    decision: "roadmap",
    riskLevel: "medium",
    risks: ["Одна LAN не является доверенной границей", "Пользователь может выбрать неверное устройство", "Входящие filenames и файлы могут быть вредоносными"],
    quickStart: ["Провести одну QA-сессию как внешний инструмент", "Проверить явное имя/fingerprint получателя и папку назначения", "Для product prototype добавить checksum, size limits, retry и malware scan"],
    limitations: ["Не использовать как серверную automation-шину", "Требовать подтверждение получателя для чувствительных файлов"],
    reviewStatus: "verified",
    guide,
    verifiedAt
  }
};

for (const [id, patch] of Object.entries(updates)) {
  const index = catalog.items.findIndex((item) => item.id === id);
  if (index === -1) throw new Error(`Missing catalog item: ${id}`);
  catalog.items[index] = { ...catalog.items[index], ...patch };
}

for (const record of records) {
  const duplicate = catalog.items.find((item) => item.id === record.id || item.url === record.url);
  if (duplicate) throw new Error(`Duplicate catalog item: ${record.id} / ${record.url}`);
  catalog.items.push(record);
}

fs.writeFileSync(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
console.log(`Updated 3 records and added ${records.length} records. Total: ${catalog.items.length}`);
