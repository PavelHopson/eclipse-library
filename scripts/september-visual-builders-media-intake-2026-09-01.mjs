import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, "catalog", "resources.json");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const verifiedAt = "2026-09-01";
const guide = "september-2026-visual-builders-and-media-radar";
const source = {
  file: `guides/${guide}.md`,
  line: 1,
  category: "Source verification",
  subcategory: "Visual personas, builders and media workflows",
};
const common = { verifiedAt, addedAt: verifiedAt, reviewStatus: "verified", guide, source };

const records = [
  {
    id: "bella-visual-persona-concept-only",
    url: "https://github.com/Jackywine/Bella",
    title: "Bella — visual persona concept only",
    type: "grey",
    category: "AI Companions",
    subcategory: "Female visual persona reference",
    simpleDescription: "Репозиторий принят только как идея женского визуального AI-персонажа для Альтрона. Код, зависимости, модели и assets не импортируются: лицензия и provenance недостаточны, а внешние веса не закреплены обязательными revision и hashes. В Eclipse используется отдельный first-party образ и изолированный renderer.",
    useCases: ["Развить женский visual profile Альтрона", "Спроектировать состояния idle, thinking, speaking и error", "Проверить границу между avatar renderer и tool permissions"],
    features: ["Female AI persona concept", "Reactive visual states", "Voice-oriented companion layout"],
    platforms: ["GitHub", "Python", "Local AI experiments"],
    license: "No reliable reuse grant verified; concept reference only, with no code, model or asset import",
    licenseEvidence: [{ kind: "source", label: "Official public repository", url: "https://github.com/Jackywine/Bella" }],
    pricing: "Repository is publicly readable; models, GPU runtime and third-party assets have separate costs and terms. No reuse rights were assumed.",
    access: { cost: "unknown", signup: "none", runtime: "local" },
    trust: "caution",
    trustReason: "Repository tree, dependency delivery and model download surface were reviewed 01.09.2026. No code was executed. Missing or unclear licensing and unpinned external artifacts block adoption.",
    projects: ["Eclipse AI Hub", "Hopson Sentinel", "Eclipse Library"],
    decision: "reference",
    riskLevel: "high",
    risks: ["No verified license permits code or asset reuse", "Committed dependencies and mutable downloads expand supply-chain risk", "Avatar identity can accidentally imitate protected characters or real people", "Voice, microphone and memory can expose sensitive data if coupled to the renderer"],
    quickStart: ["Do not install, clone into a product, or download its models", "Use the already created first-party Альтрон Валькирия profile with no resemblance to named franchises", "Keep renderer permissions empty and test reduced motion, keyboard access and hidden state"],
    limitations: ["Concept only", "No code, model, weight, image, voice or animation reuse", "No claim of compatibility with the repository"],
    audience: ["AI companion designers", "Voice UX engineers", "Supply-chain reviewers"],
    relatedTechnologies: ["Reactive avatars", "State machines", "Reduced motion", "Permission isolation"],
    ...common,
  },
  {
    id: "react-bits-animation-lab-reference",
    url: "https://github.com/DavidHDev/react-bits",
    title: "React Bits — selective Animation Lab reference",
    type: "oss",
    category: "Design & UI",
    subcategory: "React animation patterns",
    simpleDescription: "Большая коллекция React-анимаций полезна как очередь кандидатов для Animation Lab, но не должна перепубликовываться целиком. Каждый эффект проходит отдельную проверку лицензии, accessibility, reduced motion, bundle impact и стабильных 60 FPS; при сомнении поведение реализуется заново в дизайн-системе Eclipse.",
    useCases: ["Добавить отдельные showcase в Animation Lab", "Сравнивать text, background и interaction effects", "Создать performance и accessibility gate для UI-анимаций"],
    features: ["Text animations", "Background effects", "Interactive components", "React examples", "Copy-oriented documentation"],
    platforms: ["React", "TypeScript", "JavaScript", "Web"],
    license: "MIT with Commons Clause restrictions; item-level review required before reuse or redistribution",
    licenseEvidence: [{ kind: "license", label: "Official repository license", url: "https://github.com/DavidHDev/react-bits/blob/main/LICENSE" }, { kind: "source", label: "Official repository", url: "https://github.com/DavidHDev/react-bits" }],
    pricing: "Source is publicly accessible. Redistribution and commercial packaging remain subject to the repository license and Commons Clause restrictions.",
    access: { cost: "free", signup: "none", runtime: "local" },
    trust: "community",
    trustReason: "Canonical repository, license and component-oriented structure checked 01.09.2026. Individual effects were not approved as a batch and remain subject to per-component QA.",
    projects: ["Eclipse Animation Lab", "Eclipse Library", "Eclipse Forge"],
    decision: "now",
    riskLevel: "medium",
    risks: ["Commons Clause can restrict redistribution as a competing component service", "GPU-heavy effects can cause jank and battery drain", "Canvas and visual-only controls can be inaccessible", "Copying many components creates dependency and maintenance sprawl"],
    quickStart: ["Choose three effects with a concrete product use case", "Record source and license per effect before implementation", "Require reduced motion, keyboard focus, mobile QA, FPS trace and bundle delta before Library acceptance"],
    limitations: ["No full-library mirror or repackaging", "No decorative animation without an interaction or communication purpose", "No effect enters production solely because the demo looks attractive"],
    audience: ["Frontend engineers", "Motion designers", "Accessibility reviewers"],
    relatedTechnologies: ["React", "CSS transforms", "WebGL", "Accessibility", "Performance profiling"],
    ...common,
  },
  {
    id: "freebeat-media-scene-plan-reference",
    url: "https://freebeat.ai/",
    title: "Freebeat — beat map and scene plan reference",
    type: "tool",
    category: "Voice & Audio",
    subcategory: "Music-to-video planning",
    simpleDescription: "Cloud product reference for converting music into video-oriented structure. Eclipse Media should reproduce only the safe product idea: rights-cleared audio becomes a local beat map, section and energy analysis, then an editable scene plan. It must not add downloaders, DRM bypass or automatic publication.",
    useCases: ["Prototype music-to-beat-map analysis in Eclipse Media", "Generate an editable plan of scenes and transitions", "Export a rights-aware montage plan for later rendering"],
    features: ["Music video generation", "Beat-aware editing", "AI scene generation", "Cloud workflow"],
    platforms: ["Web", "Cloud AI", "Media generation"],
    license: "Proprietary service and output terms; user media and generated assets require separate rights verification",
    licenseEvidence: [{ kind: "source", label: "Official Freebeat product", url: "https://freebeat.ai/" }, { kind: "privacy", label: "Official Freebeat privacy policy", url: "https://freebeat.ai/privacy-policy" }],
    pricing: "Freemium or paid cloud usage may apply; current credits, export rights and commercial terms must be checked before use.",
    access: { cost: "freemium", signup: "required", runtime: "cloud" },
    trust: "official",
    trustReason: "Official product and public policy surface checked 01.09.2026. Marketing output quality was not independently benchmarked, and cloud handling of uploaded media requires project-specific review.",
    projects: ["Eclipse Media", "Eclipse Creative", "Eclipse Library"],
    decision: "roadmap",
    riskLevel: "high",
    risks: ["Uploaded music may be copyrighted or confidential", "Cloud processors can retain prompts, files or outputs under changing policies", "Generated scenes may contain unlicensed likenesses or assets", "Automatic timing can create unsafe flash or motion patterns"],
    quickStart: ["Use a synthetic or first-party 30-second audio fixture", "Produce JSON with BPM, beat timestamps, sections, energy and editable scene slots", "Keep analysis local first and require explicit rights confirmation before any upload"],
    limitations: ["No YouTube or music-service downloading", "No DRM or access-control bypass", "No automatic publish and no assumption that service outputs are commercially cleared"],
    audience: ["Media engineers", "Video editors", "Rights and privacy reviewers"],
    relatedTechnologies: ["Beat tracking", "Audio segmentation", "Scene planning", "EDL", "Media provenance"],
    ...common,
  },
  {
    id: "bolt-new-isolated-builder-reference",
    url: "https://bolt.new/",
    title: "Bolt — isolated builder benchmark",
    type: "tool",
    category: "Developer Tools",
    subcategory: "Prompt-to-app sandbox",
    simpleDescription: "Prompt-to-app cloud builder is useful as a benchmark for fast prototypes, not as a production authority. Eclipse should use a disposable sandbox with no production secrets, require export as a patch or archive, then run dependency, license, security and test gates before importing code into an existing approved repository branch.",
    useCases: ["Benchmark prompt-to-preview latency", "Design a disposable prototype sandbox in Eclipse AI Hub", "Standardize export, review and provenance receipts for generated code"],
    features: ["Browser-based app generation", "Interactive preview", "Package installation", "Project export and integrations"],
    platforms: ["Web", "Cloud sandbox", "JavaScript ecosystem"],
    license: "Proprietary service terms; exported dependencies and generated assets retain their own licenses",
    licenseEvidence: [{ kind: "terms", label: "Official StackBlitz terms", url: "https://stackblitz.com/terms-of-service" }, { kind: "privacy", label: "Official StackBlitz privacy policy", url: "https://stackblitz.com/privacy-policy" }, { kind: "source", label: "Official Bolt product", url: "https://bolt.new/" }],
    pricing: "Freemium and paid plans; generation tokens, hosting, integrations and external APIs may create separate costs.",
    access: { cost: "freemium", signup: "optional", runtime: "cloud" },
    trust: "official",
    trustReason: "Official product and StackBlitz terms/privacy surface checked 01.09.2026. Generated code quality and dependency safety vary by prompt and were not assumed.",
    projects: ["Eclipse AI Hub", "Eclipse Claw", "Eclipse Forge", "Eclipse Library"],
    decision: "roadmap",
    riskLevel: "high",
    risks: ["Generated applications can contain vulnerable or hallucinated code", "Mutable npm packages and install scripts create supply-chain risk", "Broad repository integrations can expose code and secrets", "Cloud prompts and files can include sensitive project context", "One-click deploy can bypass review"],
    quickStart: ["Create one synthetic disposable project with no repository connection", "Export a patch with manifest, lockfile and provenance receipt", "Run secret scan, dependency review, lint, typecheck, tests and human diff approval before import"],
    limitations: ["No production secrets, customer data or direct deploy", "No broad GitHub installation", "Vendor workspace is never the sole source of truth"],
    audience: ["Developer experience engineers", "App builders", "Security reviewers"],
    relatedTechnologies: ["WebContainers", "Code generation", "SBOM", "Sandboxing", "Patch export"],
    ...common,
  },
  {
    id: "rocket-new-growth-context-reference",
    url: "https://www.rocket.new/",
    title: "Rocket — persistent product context reference",
    type: "tool",
    category: "Growth & Marketing",
    subcategory: "Persistent context and competitive monitoring",
    simpleDescription: "AI product builder is useful to Growth OS as a product reference for persistent context and long-running work. The Eclipse version must store evidence, decisions, owners and expiry separately, preserve source snapshots, and require human approval before changing offers or messaging; it is not a licence to scrape competitors or trust stale agent memory.",
    useCases: ["Build an evidence-backed context ledger in Growth OS", "Maintain a competitor watchlist with dated source snapshots", "Connect hypotheses, decisions and outcomes without losing history"],
    features: ["Persistent project context", "AI-assisted product generation", "Long-running workspace", "Cloud collaboration"],
    platforms: ["Web", "Cloud AI", "Product development"],
    license: "Proprietary service terms; generated code, external models and third-party assets retain separate conditions",
    licenseEvidence: [{ kind: "source", label: "Official Rocket product", url: "https://www.rocket.new/" }, { kind: "privacy", label: "Official Rocket privacy policy", url: "https://www.rocket.new/privacy-policy" }],
    pricing: "Plan limits and credits can change; verify current commercial terms before any project or data upload.",
    access: { cost: "freemium", signup: "required", runtime: "cloud" },
    trust: "official",
    trustReason: "Official product and public policy surface checked 01.09.2026. Feature and performance claims were treated as publisher claims, and external model subprocessors require separate review.",
    projects: ["Growth OS", "Eclipse AI Hub", "Eclipse Library"],
    decision: "reference",
    riskLevel: "high",
    risks: ["Persistent context can retain secrets, personal data or outdated claims", "Automated competitor collection may violate terms or robots rules", "Agent inference can be confused with verified fact", "Cloud providers and subprocessors can change"],
    quickStart: ["Create a schema separating fact, source, inference, decision, owner and expiry", "Monitor only public allowlisted pages at a respectful cadence", "Require a dated snapshot and human approval before any Growth OS recommendation becomes active"],
    limitations: ["No authenticated scraping or access-control bypass", "No automatic pricing or campaign changes", "No un-sourced fact enters persistent context"],
    audience: ["Growth teams", "Product strategists", "Competitive intelligence reviewers"],
    relatedTechnologies: ["Context ledger", "Change detection", "Provenance", "Human approval"],
    ...common,
  },
  {
    id: "aura-build-design-handoff-reference",
    url: "https://www.aura.build/",
    title: "Aura — design and handoff process reference",
    type: "tool",
    category: "Design & UI",
    subcategory: "AI design exploration and handoff",
    simpleDescription: "AI design builder is useful as a workflow reference from brief through several directions to Figma or HTML handoff. Eclipse keeps its own design system and treats exported markup as an untrusted draft that still needs semantic implementation, responsive visual QA, accessibility, performance and security review before production.",
    useCases: ["Standardize brief-to-direction design exploration", "Improve Figma and HTML handoff for Eclipse landing pages", "Create a responsive and accessibility acceptance gate for generated UI"],
    features: ["AI design generation", "Visual iteration", "Figma-oriented handoff", "HTML-oriented export"],
    platforms: ["Web", "Figma workflow", "HTML workflow"],
    license: "Proprietary service terms; exported code, fonts, images and third-party assets require separate license verification",
    licenseEvidence: [{ kind: "source", label: "Official Aura product", url: "https://www.aura.build/" }, { kind: "terms", label: "Official Aura terms surface", url: "https://www.aura.build/terms" }],
    pricing: "Commercial cloud service; verify current plan, export and usage rights before project use.",
    access: { cost: "paid", signup: "required", runtime: "cloud" },
    trust: "official",
    trustReason: "Official product and public commercial surface checked 01.09.2026. Export fidelity, accessibility and generated asset rights were not assumed and require artifact-level QA.",
    projects: ["Eclipse Forge", "Eclipse Landing", "Eclipse Library"],
    decision: "reference",
    riskLevel: "medium",
    risks: ["Generated layouts can become generic or diverge from the project design system", "Exported HTML may have poor semantics, focus order or responsive behavior", "Generated assets can carry unclear rights", "Cloud briefs and screenshots can expose confidential product plans"],
    quickStart: ["Use a synthetic brief and compare two or three directions", "Extract design tokens and rebuild the chosen direction inside the project system", "Run desktop, mobile, keyboard, screen-reader, reduced-motion, performance and security QA before acceptance"],
    limitations: ["Reference process only", "No direct production deploy of exported HTML", "No copying Aura brand or visual identity"],
    audience: ["Product designers", "Frontend engineers", "Design-system owners"],
    relatedTechnologies: ["Figma", "Design tokens", "HTML handoff", "Responsive QA", "Accessibility"],
    ...common,
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
console.log(`Visual builders and media intake complete: ${records.length} records upserted, ${catalog.items.length} total items.`);
