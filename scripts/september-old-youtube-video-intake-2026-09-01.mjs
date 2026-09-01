import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, "catalog", "resources.json");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const verifiedAt = "2026-09-01";
const guide = "september-2026-old-youtube-video-review";
const source = {
  file: `guides/${guide}.md`,
  line: 1,
  category: "Source verification",
  subcategory: "Legacy YouTube workflow review",
};
const common = { verifiedAt, addedAt: verifiedAt, reviewStatus: "verified", guide, source };

const records = [
  {
    id: "unreal-weekly-shooter-vertical-slice-video",
    url: "https://www.youtube.com/watch?v=G_2XOHxOoiY",
    title: "Шутер на Unreal Engine 5 за неделю — vertical slice case",
    type: "learn",
    category: "Game Development",
    subcategory: "Timeboxed vertical slice",
    simpleDescription: "Русскоязычный devlog показывает последовательность недельного vertical slice в Unreal Engine 5: стрельба и анимации, окружение, завершение gameplay loop, меню и настройки. Это полезный planning-case для GameForge, но не актуальная официальная документация и не гарантия production-ready результата.",
    useCases: ["Спланировать недельный vertical slice GameForge", "Разделить core loop, окружение, polish и packaging", "Сформировать visual proof и внешний playtest"],
    features: ["Timeboxed game prototype", "Core shooting loop", "Environment pass", "Menu and settings", "Playable result review"],
    platforms: ["YouTube", "Unreal Engine 5", "Windows"],
    license: "YouTube video; no license for reusing the creator's code, project files, footage, music or assets was established",
    licenseEvidence: [{ kind: "source", label: "Creator's YouTube video", url: "https://www.youtube.com/watch?v=G_2XOHxOoiY" }, { kind: "official-source", label: "Current Unreal Engine packaging documentation", url: "https://dev.epicgames.com/documentation/unreal-engine/packaging-your-project" }],
    pricing: "Video viewing is public. Unreal Engine, marketplace assets, plugins, hardware and distribution can have separate terms and costs.",
    access: { cost: "free", signup: "optional", runtime: "cloud" },
    trust: "community",
    trustReason: "Video title, author, publication date, duration, description and chapters were checked from the official YouTube page on 01.09.2026. The workflow was not reproduced and specific 2025 engine advice must be revalidated against current Epic documentation.",
    projects: ["GameForge (future)", "Eclipse Valhalla", "Eclipse DnD Forge", "Eclipse Library"],
    decision: "reference",
    riskLevel: "medium",
    risks: ["Engine and plugin versions can make steps stale", "Third-party assets may have incompatible licenses", "A visually complete editor scene may still fail as a packaged build", "Time pressure can hide accessibility and performance defects"],
    quickStart: ["Use the chapter order as a planning reference only", "Build one synthetic core loop with pinned engine and plugin versions", "Require packaged build, smoke test, screenshots, recording and external playtest before acceptance"],
    limitations: ["No code or project files imported", "Not a substitute for current Unreal Engine documentation", "No claim that one week is sufficient for a production game"],
    audience: ["GameForge engineers", "Game designers", "QA reviewers"],
    relatedTechnologies: ["Unreal Engine", "Vertical slice", "Game QA", "Packaging"],
    ...common,
  },
  {
    id: "ai-only-game-release-postmortem-video",
    url: "https://www.youtube.com/watch?v=UPWlOvcFSEE",
    title: "Игра только с нейросетями — release postmortem",
    type: "learn",
    category: "Game Development",
    subcategory: "AI-assisted release postmortem",
    simpleDescription: "Экспериментальный Unity-devlog проходит путь от идеи и генерации до графики, gameplay, меню, звука, недостатков и публикации. Главная ценность — видимый разрыв между созданным агентами прототипом и качественным релизом; Library использует ролик как отрицательный QA-кейс, а не как обещание игры одним промптом.",
    useCases: ["Составить release gate для Godogen и GameForge", "Проверить, какие дефекты не видит генеративный агент", "Обучать packaged-build и store-readiness приёмке"],
    features: ["AI-assisted ideation", "Unity prototype", "Generated graphics and audio", "Menu and gameplay pass", "Store release retrospective"],
    platforms: ["YouTube", "Unity", "Google Play"],
    license: "YouTube video; no license for reusing the creator's code, game, footage, generated assets or audio was established",
    licenseEvidence: [{ kind: "source", label: "Creator's YouTube video", url: "https://www.youtube.com/watch?v=UPWlOvcFSEE" }, { kind: "source", label: "Related Godogen reference already reviewed by Eclipse Library", url: "https://github.com/htdt/godogen" }],
    pricing: "Video viewing is public. Model calls, game-engine services, store accounts, asset production and testing have separate costs.",
    access: { cost: "free", signup: "optional", runtime: "cloud" },
    trust: "community",
    trustReason: "Video metadata, public description and chapter sequence were checked from the official YouTube page on 01.09.2026. The finished game and revenue were not independently audited; the record preserves lessons, not outcome claims.",
    projects: ["Godogen pilot", "GameForge (future)", "Eclipse Valhalla", "Eclipse Library"],
    decision: "now",
    riskLevel: "medium",
    risks: ["Generated code can pass a demo while failing installation or recovery", "Assets and audio may lack clear commercial provenance", "Agents can overstate completion without external playtesting", "Automated store submission can publish defects or policy violations"],
    quickStart: ["Translate the failure points into a deterministic release checklist", "Run the checklist against a tiny synthetic game fixture", "Keep store submission and public release behind explicit human approval"],
    limitations: ["Postmortem and QA reference only", "No game, code, prompt or asset copied", "Does not validate any model as an autonomous game developer"],
    audience: ["GameForge engineers", "Release managers", "QA reviewers"],
    relatedTechnologies: ["Unity", "AI-assisted development", "Release QA", "Store readiness"],
    ...common,
  },
  {
    id: "flux-lora-consistent-character-video-reference",
    url: "https://www.youtube.com/watch?v=9VOXy8Rny8c",
    title: "FLUX LoRA для постоянного персонажа — restricted workflow reference",
    type: "grey",
    category: "Creative AI",
    subcategory: "Consistent character LoRA",
    simpleDescription: "Русскоязычный ролик связывает создание набора ракурсов и эмоций в ComfyUI с обучением FLUX LoRA через FluxGym и последующей проверкой персонажа в разных сценах. Методика остаётся полезной, но точные модели, custom nodes и workflow не закреплены, часть материалов внешняя, а обучение на лице человека требует явных прав и согласия.",
    useCases: ["Проверить consistent-character pipeline Eclipse Creative", "Создать manifest происхождения обучающих изображений", "Сравнить LoRA в разных позах, эмоциях, одежде и окружении"],
    features: ["Character view dataset", "Image captions and trigger word", "FLUX LoRA training", "ComfyUI workflow", "Cross-scene consistency checks"],
    platforms: ["YouTube", "ComfyUI", "FluxGym", "FLUX.1-dev", "Local GPU"],
    license: "Video and linked workflow have no verified reuse grant; ComfyUI is GPL-3.0, FluxGym code is public but every model, dataset, custom node and generated asset retains separate terms",
    licenseEvidence: [{ kind: "source", label: "Creator's YouTube video", url: "https://www.youtube.com/watch?v=9VOXy8Rny8c" }, { kind: "source", label: "Official ComfyUI repository", url: "https://github.com/Comfy-Org/ComfyUI" }, { kind: "source", label: "FluxGym repository", url: "https://github.com/cocktailpeanut/fluxgym" }],
    pricing: "Video and repositories are publicly accessible; GPU time, storage, weights and optional hosted services have separate costs and licenses.",
    access: { cost: "freemium", signup: "optional", runtime: "local" },
    trust: "caution",
    trustReason: "Video metadata and linked components were checked on 01.09.2026. ComfyUI remains actively maintained; FluxGym remains available but has no stable releases. The exact paid/external workflow, model files and custom nodes were not downloaded or executed.",
    projects: ["Eclipse Creative", "Eclipse Media", "Text2Image", "Eclipse Library"],
    decision: "reference",
    riskLevel: "high",
    risks: ["Training on a real person's face without consent creates privacy, publicity and impersonation risk", "Custom nodes are arbitrary Python code", "Unpinned weights and training scripts can change behavior or introduce supply-chain risk", "Datasets and outputs can contain copyrighted or biometric material", "GPU jobs can exhaust memory, disk and power budgets"],
    quickStart: ["Do not download the linked workflow or model bundle into a production workspace", "Create a synthetic or fully consented first-party dataset with source, license, consent and hashes", "Pin ComfyUI, nodes, weights and FluxGym revision in an offline disposable lab before one bounded experiment"],
    limitations: ["No real-person cloning or impersonation", "No public binding of ComfyUI or FluxGym", "No production dependency or one-click install", "No claim that the 2025 parameter choices remain optimal"],
    audience: ["Creative AI engineers", "Media provenance reviewers", "Privacy reviewers"],
    relatedTechnologies: ["ComfyUI", "FluxGym", "FLUX LoRA", "Dataset provenance", "Consent"],
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
console.log(`Legacy YouTube intake complete: ${records.length} records upserted, ${catalog.items.length} total items.`);
