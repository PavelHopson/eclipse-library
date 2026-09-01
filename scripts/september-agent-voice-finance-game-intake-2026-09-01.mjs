import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, "catalog", "resources.json");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const verifiedAt = "2026-09-01";
const guide = "september-2026-agent-voice-finance-game-radar";
const source = {
  file: `guides/${guide}.md`,
  line: 1,
  category: "Source verification",
  subcategory: "Agents, voice, finance and collection UX",
};
const common = { verifiedAt, addedAt: verifiedAt, reviewStatus: "verified", guide, source };

const records = [
  {
    id: "stockagent-market-simulation-reference",
    url: "https://github.com/MingyuJ666/Stockagent",
    title: "StockAgent — research simulation only",
    type: "grey",
    category: "Finance & Analytics",
    subcategory: "LLM-based market simulation",
    simpleDescription: "Исследовательский Python-прототип моделирует поведение LLM-агентов в искусственной биржевой среде и изучает влияние событий, общения и правил рынка. Это не торговый бот и не источник финансовых рекомендаций; LICENSE в репозитории не обнаружен, зависимости устарели и часть установки опирается на отдельный незапиненный PromptCoder.",
    useCases: ["Построить синтетический сценарный стенд для CryptoPulse", "Изучить влияние новостей и поведения агентов без реальных сделок", "Сравнивать модели на детерминированных финансовых симуляциях"],
    features: ["Multi-agent market simulation", "Artificial order matching", "Special-event scenarios", "OpenAI and Gemini model paths", "Research paper and experiment logs"],
    platforms: ["Python 3.9", "OpenAI API", "Gemini API", "Local simulation"],
    license: "No license grant detected; source is publicly readable but code reuse is not permitted by default",
    licenseEvidence: [{ kind: "source", label: "Official repository; no LICENSE file detected", url: "https://github.com/MingyuJ666/Stockagent" }, { kind: "paper", label: "Official linked research paper", url: "https://arxiv.org/abs/2407.18957" }],
    pricing: "Repository is publicly readable; model API calls cost money. Code reuse requires permission from the authors because no license grant was found.",
    access: { cost: "unknown", signup: "optional", runtime: "local" },
    trust: "caution",
    trustReason: "Official repository, README, root files and requirements checked 01.09.2026. Research purpose is documented, but licensing and reproducibility are incomplete and no real-market validity was established.",
    projects: ["CryptoPulse 2077", "Eclipse AI Hub", "Eclipse Library"],
    decision: "reference",
    riskLevel: "high",
    risks: ["Users may mistake simulated behavior for financial advice", "No license permits code reuse", "Old pinned libraries and an unpinned external repository increase supply-chain risk", "LLM calls can leak prompts or create uncontrolled cost"],
    quickStart: ["Do not copy code or connect brokerage accounts", "Reimplement one tiny deterministic market fixture with synthetic data", "Require fixed seeds, cost limits, human review and a visible not-financial-advice boundary"],
    limitations: ["No live trading, portfolio action or recommendation", "No production dependency until licensing and dependency review are resolved"],
    audience: ["Financial simulation researchers", "CryptoPulse product team"],
    relatedTechnologies: ["Agent-based modeling", "Market simulation", "LLM evaluation"],
    ...common,
  },
  {
    id: "intelligent-internet-ii-agent",
    url: "https://github.com/Intelligent-Internet/ii-agent",
    title: "II-Agent",
    type: "agent",
    category: "Agent Workflows",
    subcategory: "Self-hosted general agent workspace",
    simpleDescription: "Apache-2.0 self-hosted agent workspace объединяет multi-model chat, планирование, research, code interpreter, документы, генерацию сайтов и интеграции. Для Eclipse ценность — разделение provider configuration, skills, sandboxed execution и пользовательского workspace; полный стек Postgres, Redis, MinIO, Docker и внешние ключи слишком велик для прямого встраивания.",
    useCases: ["Уточнить workspace и skill contracts Eclipse AI Hub", "Спроектировать bounded execution в Eclipse Claw", "Сравнить multi-provider conversation и plan mode"],
    features: ["Multi-provider BYOK", "Plan and research modes", "Built-in and custom skills", "File and document tools", "PostgreSQL, Redis and MinIO stack"],
    platforms: ["Python", "React", "Docker", "PostgreSQL", "Redis", "MinIO"],
    license: "Apache-2.0",
    licenseEvidence: [{ kind: "license", label: "Official Apache-2.0 license", url: "https://github.com/Intelligent-Internet/ii-agent/blob/main/LICENSE" }, { kind: "source", label: "Official repository and setup documentation", url: "https://github.com/Intelligent-Internet/ii-agent" }],
    pricing: "Source is free; model APIs, E2B or equivalent sandboxes, storage and hosting are paid separately.",
    access: { cost: "freemium", signup: "optional", runtime: "self-host" },
    trust: "community",
    trustReason: "Canonical repository, active development, Apache-2.0 license, manifests and documented infrastructure checked 01.09.2026. Feature claims were not independently benchmarked.",
    projects: ["Eclipse AI Hub", "Eclipse Claw", "Hopson Sentinel", "Eclipse Library"],
    decision: "roadmap",
    riskLevel: "high",
    risks: ["Broad integrations and file tools expand the permission surface", "BYOK secrets and user files require strict server-side isolation", "A large multi-service stack increases patching and operational cost", "Generated applications and research may contain unsafe or untrusted content"],
    quickStart: ["Study contracts; do not deploy the whole stack", "Pilot one synthetic plan-to-artifact task in a disposable sandbox", "Deny network and filesystem by default, pin dependencies and require approval for external actions"],
    limitations: ["Architecture reference before dependency adoption", "No customer data or production credentials in the pilot"],
    audience: ["Agent platform engineers", "Eclipse AI Hub team"],
    relatedTechnologies: ["FastAPI", "React", "Agent skills", "Object storage", "BYOK"],
    ...common,
  },
  {
    id: "realtime-voice-chat-reference",
    url: "https://github.com/KoljaB/RealtimeVoiceChat",
    title: "RealtimeVoiceChat — pipeline reference only",
    type: "grey",
    category: "Voice & Audio",
    subcategory: "Streaming STT, LLM and TTS pipeline",
    simpleDescription: "Python/FastAPI reference передаёт аудиофрагменты по WebSocket через STT → LLM → TTS, показывает partial transcripts, adaptive turn detection и barge-in. Автор прекратил активное сопровождение, LICENSE отсутствует, а Docker-инструкция предлагает safety-reduced модель; поэтому берём только архитектурные идеи, не код, wheel или модель по умолчанию.",
    useCases: ["Улучшить прерывание речи и turn-taking в Hopson Sentinel", "Разделить STT, dialogue и TTS stages в Eclipse Chat", "Собрать измеримый тест latency для русской речи"],
    features: ["WebSocket audio streaming", "Partial transcription", "Adaptive silence detection", "Barge-in interruption", "Pluggable Ollama, OpenAI and TTS backends"],
    platforms: ["Python", "FastAPI", "Web Audio API", "WebSocket", "Docker"],
    license: "No license grant detected; code and bundled wheel must not be reused without permission",
    licenseEvidence: [{ kind: "source", label: "Official README with maintenance status", url: "https://github.com/KoljaB/RealtimeVoiceChat#readme" }, { kind: "source", label: "Official repository; no LICENSE file detected", url: "https://github.com/KoljaB/RealtimeVoiceChat" }],
    pricing: "Repository is publicly readable; local GPU inference and optional model APIs have separate costs. No code reuse grant was found.",
    access: { cost: "unknown", signup: "optional", runtime: "local" },
    trust: "caution",
    trustReason: "Official README, maintenance notice, requirements and Windows installer checked 01.09.2026. The repository is community-driven and last code push reported by GitHub was 11.07.2025.",
    projects: ["Hopson Sentinel", "Eclipse Chat", "Eclipse AI Hub", "Eclipse Library"],
    decision: "reference",
    riskLevel: "high",
    risks: ["No license permits reuse", "Bundled third-party wheel and install script require provenance review", "Default documentation names a safety-reduced model", "Microphone audio and transcripts are sensitive personal data", "Inactive maintenance leaves dependency risk"],
    quickStart: ["Do not run install.bat or the bundled wheel", "Recreate only the state machine on synthetic audio with approved models", "Measure first-audio latency, interruption success, echo handling and Russian entity accuracy"],
    limitations: ["Reference only; no code, model or binary import", "Microphone activation must remain explicit and visible"],
    audience: ["Voice interface engineers", "Privacy reviewers"],
    relatedTechnologies: ["VAD", "STT", "TTS", "WebSocket", "Barge-in"],
    ...common,
  },
  {
    id: "claude-flow-ruvnet-github-com",
    url: "https://github.com/ruvnet/ruflo",
    title: "Ruflo (formerly Claude Flow)",
    type: "agent",
    category: "Agent Workflows",
    subcategory: "Multi-agent meta-harness and memory",
    simpleDescription: "MIT meta-harness для Claude Code и Codex развивает бывший Claude Flow: swarms, hooks, MCP, memory, plugins, budgets и observability. Полезны contracts координации и receipts, но полный CLI создаёт служебные файлы, регистрирует MCP, hooks и daemon и заявляет десятки plugins; его нельзя запускать через npx в рабочих репозиториях без pin и полного review.",
    useCases: ["Уточнить coordination contract Eclipse Claw", "Добавить бюджеты, receipts и observability в Eclipse AI Hub", "Сравнить memory и workflow boundaries в oh-my-claudecode"],
    features: ["Agent swarms", "MCP and hooks", "Persistent memory", "Cost tracking and observability", "Plugin architecture", "Security and approval modules"],
    platforms: ["Node.js 20+", "TypeScript", "Rust", "Claude Code", "Codex", "MCP"],
    license: "MIT",
    licenseEvidence: [{ kind: "license", label: "Official MIT license", url: "https://github.com/ruvnet/ruflo/blob/main/LICENSE" }, { kind: "security", label: "Official security policy", url: "https://github.com/ruvnet/ruflo/blob/main/SECURITY.md" }],
    pricing: "Source and CLI are free; LLM providers, embeddings, hosted federation and infrastructure can create separate costs.",
    access: { cost: "freemium", signup: "optional", runtime: "local" },
    trust: "community",
    trustReason: "Canonical renamed repository, active development, MIT license, root package manifest, install surface and security policy checked 01.09.2026. Scale and performance claims remain publisher claims.",
    projects: ["Eclipse Claw", "Eclipse AI Hub", "oh-my-claudecode", "Hopson Sentinel", "Eclipse Library"],
    decision: "roadmap",
    riskLevel: "high",
    risks: ["npx execution can run mutable registry code", "CLI writes agent configuration, hooks and MCP state into a repository", "Autonomous and federated modes expand network and action scope", "Large plugin and dependency surface increases supply-chain risk", "Persistent memory can retain secrets or customer data"],
    quickStart: ["Do not run npx ruflo init in a working repository", "Pin a commit and inspect package, hooks, MCP, daemon and network behavior in a disposable sandbox", "Port only one contract: budgeted task coordination with explicit receipts and approval"],
    limitations: ["No full-stack install before security review", "No federation or autonomous loops with production data"],
    audience: ["Agent orchestration engineers", "Security reviewers"],
    relatedTechnologies: ["MCP", "Agent swarms", "Vector memory", "Observability", "Budgets"],
    ...common,
    addedAt: "2026-05-28",
  },
  {
    id: "moeru-ai-airi-companion-reference",
    url: "https://github.com/moeru-ai/airi",
    title: "Project AIRI",
    type: "agent",
    category: "AI Companions",
    subcategory: "Self-hosted realtime virtual character",
    simpleDescription: "Активный MIT-монорепозиторий self-hosted AI companion: realtime voice, локальная и облачная модель, память, WebGPU, Live2D/VRM, desktop/mobile/web и экспериментальные игровые интеграции. Для Eclipse полезны provider boundary, voice state machine и sandboxed avatar renderer; полный monorepo и computer/game control слишком широки для прямого внедрения.",
    useCases: ["Развить безопасное Presence-состояние Hopson Sentinel", "Добавить визуальный голосовой avatar в Eclipse Chat", "Переиспользовать идеи универсального ASR/TTS provider contract"],
    features: ["Realtime voice conversation", "VRM and Live2D avatars", "Local and cloud providers", "Browser and desktop runtimes", "Memory experiments", "Game integrations"],
    platforms: ["Web", "Windows", "macOS", "PWA", "TypeScript", "Vue", "Electron"],
    license: "MIT for repository code; avatar assets, models and third-party providers retain separate terms",
    licenseEvidence: [{ kind: "license", label: "Official MIT license", url: "https://github.com/moeru-ai/airi/blob/main/LICENSE" }, { kind: "source", label: "Official repository and roadmap", url: "https://github.com/moeru-ai/airi" }],
    pricing: "Source is free; cloud LLM, STT and TTS providers, GPU runtime, avatars and hosting can have separate costs and licenses.",
    access: { cost: "freemium", signup: "optional", runtime: "hybrid" },
    trust: "community",
    trustReason: "Canonical repository, MIT license, active development, provider list, roadmap and package scripts checked 01.09.2026. The project labels several capabilities as WIP or experimental.",
    projects: ["Hopson Sentinel", "Eclipse Chat", "Eclipse AI Hub", "Eclipse Library"],
    decision: "roadmap",
    riskLevel: "high",
    risks: ["Microphone, memory and conversation history contain sensitive data", "Computer and game integrations can gain powerful local access", "Avatar and voice assets have separate personality and licensing rights", "Large monorepo and postinstall build expand supply-chain surface", "Cloud provider choice changes privacy and cost"],
    quickStart: ["Study only the state and provider contracts", "Build a first-party synthetic avatar renderer with no filesystem, clipboard, keys or PC tools", "Use explicit mic consent, local-first storage, deletion controls and a separate approval boundary for actions"],
    limitations: ["No direct monorepo integration", "No autonomous computer or game control in the first pilot"],
    audience: ["Companion UX engineers", "Voice and privacy teams"],
    relatedTechnologies: ["WebGPU", "WebAudio", "VRM", "Live2D", "Local inference"],
    ...common,
  },
  {
    id: "backloggd-game-collection-ux-reference",
    url: "https://backloggd.com/",
    title: "Backloggd — collection UX reference",
    type: "tool",
    category: "Product UX",
    subcategory: "Collection tracking, lists and activity journal",
    simpleDescription: "Проприетарный сервис помогает отмечать игровой backlog, статусы, время, платформы, оценки, отзывы, wishlists, списки и ленту друзей. Для Eclipse это хороший UX-reference для личных статусов ресурсов и журнала прогресса, но не источник данных: условия требуют работать через предоставленный интерфейс, а каталог использует IGDB.",
    useCases: ["Добавить в Eclipse Library статусы Проверить, Изучаю, Внедрено", "Ввести приватные подборки и журнал прогресса", "Улучшить коллекции и игровые цели Eclipse Valhalla"],
    features: ["Collection statuses", "Ratings and reviews", "Time tracking and journal", "Private and public lists", "Friend activity feed"],
    platforms: ["Web", "Cloud service", "IGDB-backed catalog"],
    license: "Proprietary service terms; no code or catalog reuse grant",
    licenseEvidence: [{ kind: "terms", label: "Official Backloggd Terms of Service", url: "https://backloggd.com/about/terms-of-service/" }, { kind: "privacy", label: "Official Backloggd Privacy Policy", url: "https://backloggd.com/about/privacy/" }],
    pricing: "Core browsing and account features are publicly accessible; current supporter perks and commercial terms must be checked on the service.",
    access: { cost: "freemium", signup: "optional", runtime: "cloud" },
    trust: "official",
    trustReason: "Official product page, features, Terms and Privacy Policy checked 01.09.2026. This review covers UX concepts only and grants no right to scrape or reuse catalog data.",
    projects: ["Eclipse Library", "Eclipse Valhalla", "Eclipse DnD Forge"],
    decision: "reference",
    riskLevel: "medium",
    risks: ["Automated scraping may violate service terms", "Game metadata and images are sourced from IGDB under separate terms", "Public activity and reviews create moderation and privacy duties", "External analytics and advertising collect usage data"],
    quickStart: ["Copy no data, images, reviews or code", "Prototype first-party resource statuses and private lists with local test fixtures", "Make social sharing opt-in and add export, deletion, moderation and privacy controls before any community feed"],
    limitations: ["UX reference only", "No scraping, account automation or IGDB asset reuse without a separate agreement"],
    audience: ["Eclipse Library product team", "Collection and progression designers"],
    relatedTechnologies: ["Collection tracking", "Activity journal", "Lists", "Ratings"],
    ...common,
  },
  {
    id: "fmhy-privacy-fmhy-net",
    url: "https://fmhy.net/privacy",
    title: "FMHY Privacy — restricted reference",
    type: "grey",
    category: "Security & Privacy",
    subcategory: "Community privacy directory",
    simpleDescription: "Узкий community-раздел FMHY с privacy, adblocking и workstation-ссылками остаётся ручным справочником для Hopson Sentinel. Главный FMHY-каталог в Library не добавляется: он прямо продвигает streaming, downloading и torrenting контента, а community-ссылки могут менять назначение, безопасность и правовой статус без нашего контроля.",
    useCases: ["Находить кандидатов для ручной проверки privacy-инструментов", "Сверять категории workstation hygiene", "Обучать проверке внешних community directories"],
    platforms: ["Web", "Community directory"],
    license: "No verified license for redistributing the directory; every linked resource has separate terms",
    licenseEvidence: [{ kind: "source", label: "FMHY Privacy section", url: "https://fmhy.net/privacy" }, { kind: "source", label: "FMHY homepage and category scope", url: "https://fmhy.net/" }],
    pricing: "Directory browsing is public; linked tools and services have separate costs, accounts and terms.",
    access: { cost: "free", signup: "none", runtime: "cloud" },
    trust: "caution",
    trustReason: "Official FMHY pages and current category scope checked 01.09.2026. Individual outbound links were not approved, and the general catalog includes high-risk copyright and download categories.",
    projects: ["Hopson Sentinel", "Eclipse Library"],
    decision: "reference",
    riskLevel: "high",
    risks: ["Outbound community links can become malicious or stale", "General catalog includes copyright and torrenting risk", "Tools can request powerful browser or system permissions", "No item-level license or security assurance"],
    quickStart: ["Do not add the FMHY homepage or automate its links", "Open only a named privacy candidate in an isolated browser", "Verify canonical source, license, hashes, permissions and reputation before a separate Library proposal"],
    limitations: ["No streaming, torrenting, downloading or access-control bypass guidance", "No automatic recommendation or installation"],
    audience: ["Authorized security reviewers"],
    relatedTechnologies: ["Ad blocking", "Privacy tools", "Workstation hygiene"],
    ...common,
    addedAt: "2026-07-02",
  },
];

function canonicalUrl(value) {
  const url = new URL(value);
  url.hash = "";
  url.hostname = url.hostname.toLowerCase().replace(/^www\./, "");
  url.pathname = url.pathname.replace(/\/+$/, "") || "/";
  return url.toString().replace(/\/$/, "");
}

function upsert(record) {
  const indexById = catalog.items.findIndex((item) => item.id === record.id);
  const indexByUrl = catalog.items.findIndex((item) => canonicalUrl(item.url) === canonicalUrl(record.url));
  if (indexByUrl >= 0 && indexById !== indexByUrl) throw new Error(`Canonical URL already belongs to ${catalog.items[indexByUrl].id}: ${record.url}`);
  if (indexById >= 0) catalog.items[indexById] = { ...catalog.items[indexById], ...record };
  else catalog.items.push(record);
}

records.forEach(upsert);
const ids = new Set();
const urls = new Set();
for (const item of catalog.items) {
  if (ids.has(item.id)) throw new Error(`Duplicate id after intake: ${item.id}`);
  ids.add(item.id);
  const url = canonicalUrl(item.url);
  if (urls.has(url)) throw new Error(`Duplicate URL after intake: ${item.url}`);
  urls.add(url);
}
catalog.totals.items = catalog.items.length;
fs.writeFileSync(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
console.log(`September source intake complete: ${records.length} records upserted, ${catalog.items.length} total items.`);
