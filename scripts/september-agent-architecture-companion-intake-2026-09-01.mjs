import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, "catalog", "resources.json");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const verifiedAt = "2026-09-01";
const guide = "september-2026-agent-architecture-companion-radar";
const source = {
  file: `guides/${guide}.md`,
  line: 1,
  category: "Source verification",
  subcategory: "Agent recipes, architecture, audio UX and visual companions",
};
const common = { verifiedAt, addedAt: verifiedAt, reviewStatus: "verified", guide, source };

const records = [
  {
    id: "500-ai-agents-recipe-catalog-reference",
    url: "https://github.com/ashishpatel26/500-AI-Agents-Projects",
    title: "500+ AI Agent Projects: recipe catalog reference",
    type: "oss",
    category: "AI Agents",
    subcategory: "Agent recipes and framework comparison",
    simpleDescription: "MIT-licensed catalog of agent use cases and runnable examples across LangGraph, CrewAI, AutoGen, Agno and LlamaIndex. Eclipse should ingest only reviewed metadata and architecture patterns, then rebuild selected recipes behind its own permission, provenance, evaluation and cost controls instead of installing hundreds of unknown agents.",
    useCases: [
      "Create a curated recipe catalog in Eclipse AI Hub and Jarvis",
      "Compare framework fit for stateful, collaborative and retrieval workflows",
      "Seed defensive recipes for PII sanitization, memory guards and agent evaluation",
    ],
    features: ["500+ use cases", "Runnable agent examples", "Framework comparison", "Industry catalog", "MIT license"],
    platforms: ["Python", "LangGraph", "CrewAI", "AutoGen", "Agno", "LlamaIndex"],
    license: "MIT for repository content; every linked project, model, dataset and service keeps its own terms",
    licenseEvidence: [
      { kind: "license", label: "Repository MIT license", url: "https://github.com/ashishpatel26/500-AI-Agents-Projects/blob/main/LICENSE" },
      { kind: "source", label: "Official public repository", url: "https://github.com/ashishpatel26/500-AI-Agents-Projects" },
    ],
    pricing: "Catalog access is free. Models, APIs and services used by individual examples can create separate costs and quotas.",
    access: { cost: "free", signup: "none", runtime: "local" },
    trust: "community",
    trustReason: "Canonical repository, README and MIT license checked 01.09.2026. The collection links to many independently maintained projects, so no linked recipe inherits blanket approval.",
    projects: ["Eclipse AI Hub", "Jarvis", "Growth OS", "Eclipse Library"],
    decision: "now",
    riskLevel: "high",
    risks: [
      "Individual agents can request broad tools, network access or secrets",
      "Linked repositories and dependencies have independent licenses and supply-chain risk",
      "Healthcare, finance and cybersecurity recipes can be unsafe without domain review",
      "Examples can confuse demo quality with production reliability",
    ],
    quickStart: [
      "Import metadata only into a quarantine queue",
      "Select five recipes with a named Eclipse owner and measurable outcome",
      "Require license, dependency, tool-permission, data, evaluation and cost review before implementation",
    ],
    limitations: ["No bulk install", "No inherited trust for linked projects", "No autonomous production access", "No sensitive data in evaluation fixtures"],
    audience: ["Agent platform engineers", "Product owners", "Security reviewers", "Evaluation engineers"],
    relatedTechnologies: ["Agent recipes", "Permission manifests", "Evaluation", "Provenance", "Cost controls"],
    ...common,
  },
  {
    id: "devildev-spec-architecture-gate-reference",
    url: "https://github.com/lak7/devildev",
    title: "DevilDev: spec-driven architecture gate",
    type: "oss",
    category: "Developer Tools",
    subcategory: "Specification and architecture review",
    simpleDescription: "Apache-2.0 architecture workspace that turns natural-language specifications and existing repositories into explicit phases, modules and relationships before coding. Eclipse should reproduce the reviewable spec to architecture gate inside Forge and AI Hub, while avoiding DevilDev's large cloud, webhook, authentication and payment integration surface.",
    useCases: [
      "Add an architecture approval gate before AI code generation",
      "Reverse-map an approved repository into evidence-backed modules and flows",
      "Keep specifications, decisions and implementation phases reviewable",
    ],
    features: ["Spec-driven architecture", "Repository architecture analysis", "Human review by phase", "Next.js workspace", "Background jobs"],
    platforms: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "LangChain", "Inngest"],
    license: "Apache-2.0 for the repository; integrated cloud services retain separate terms",
    licenseEvidence: [
      { kind: "license", label: "Repository Apache-2.0 license", url: "https://github.com/lak7/devildev/blob/main/LICENSE" },
      { kind: "source", label: "Official public repository", url: "https://github.com/lak7/devildev" },
    ],
    pricing: "Source is free. Required databases, model APIs, auth, vector storage, jobs, tunnels and payments can create separate cost and operational load.",
    access: { cost: "free", signup: "none", runtime: "local" },
    trust: "community",
    trustReason: "Canonical repository, architecture scope, stack, setup and Apache-2.0 license checked 01.09.2026. No installation or webhook exposure was performed.",
    projects: ["Eclipse Forge", "Eclipse AI Hub", "Jarvis", "Eclipse Library"],
    decision: "roadmap",
    riskLevel: "high",
    risks: [
      "Setup requires many secrets, webhooks and external services",
      "Repository ingestion can expose private code and credentials",
      "Generated architecture can invent relationships unless evidence is mandatory",
      "Public tunnels and broad GitHub App permissions expand attack surface",
    ],
    quickStart: [
      "Define a local architecture artifact with claims, evidence paths, unknowns and reviewer status",
      "Run read-only analysis on a small public Eclipse fixture with vendor, secrets and build outputs excluded",
      "Block code generation until a human approves scope, modules, interfaces and security boundaries",
    ],
    limitations: ["No direct install in production", "No public tunnel by default", "No broad GitHub App permissions", "No architecture claim without file evidence"],
    audience: ["Software architects", "AI coding platform engineers", "Security reviewers", "Repository maintainers"],
    relatedTechnologies: ["Specifications", "Architecture maps", "Evidence", "Human approval", "Repository analysis"],
    ...common,
  },
  {
    id: "openspot-local-audio-shelf-reference",
    url: "https://github.com/BlackHatDevX/openspot-music-app",
    title: "OpenSpot: local audio shelf UX reference",
    type: "oss",
    category: "Voice & Audio",
    subcategory: "Local library, queue and offline playback",
    simpleDescription: "MIT-licensed React Native and Tauri music application with cross-platform playback, playlists, offline state and a compact player. Eclipse Media can reuse product patterns for a rights-cleared local audio shelf, persistent queue and background job feedback, but must not copy or adopt third-party stream extraction and download behavior.",
    useCases: [
      "Build a local audio shelf for user-owned and licensed media",
      "Add persistent queue, mini-player and background download state to Eclipse Media",
      "Improve offline, retry and interrupted-job recovery UX",
    ],
    features: ["React Native mobile app", "Tauri desktop app", "Mini player", "Offline mode", "Playlists", "Background playback"],
    platforms: ["Android", "iOS", "Windows", "macOS", "Linux", "React Native", "Tauri"],
    license: "MIT for repository code; music, metadata, APIs and source services retain separate rights and terms",
    licenseEvidence: [
      { kind: "license", label: "Repository MIT license", url: "https://github.com/BlackHatDevX/openspot-music-app/blob/main/LICENSE" },
      { kind: "source", label: "Official public repository", url: "https://github.com/BlackHatDevX/openspot-music-app" },
    ],
    pricing: "Source is free. Storage, metadata providers, transcoding and licensed catalog access can create separate costs.",
    access: { cost: "free", signup: "none", runtime: "local" },
    trust: "community",
    trustReason: "Canonical repository, current README features, cross-platform structure and MIT license checked 01.09.2026. Streaming and download sources were not executed or approved.",
    projects: ["Eclipse Media", "Eclipse Library"],
    decision: "roadmap",
    riskLevel: "high",
    risks: [
      "Music streaming and downloading can violate copyright or provider terms",
      "External metadata and source APIs can change or block requests",
      "Background downloads can consume storage and bandwidth without clear limits",
      "Media metadata and listening history can be sensitive user data",
    ],
    quickStart: [
      "Use only uploaded, local or explicitly licensed audio fixtures",
      "Prototype queue, mini-player, offline state and recoverable background jobs",
      "Add storage limits, provenance, delete controls and explicit source labels before broader ingestion",
    ],
    limitations: ["No stream extraction", "No DRM bypass", "No automatic public-source downloading", "No hidden collection of listening history"],
    audience: ["Media product engineers", "Desktop app engineers", "Audio UX designers", "Rights reviewers"],
    relatedTechnologies: ["Tauri", "React Native", "Audio queue", "Offline state", "Background jobs"],
    ...common,
  },
  {
    id: "wan22-animate-offline-provider-reference",
    url: "https://huggingface.co/Wan-AI/Wan2.2-Animate-14B",
    title: "Wan2.2 Animate 14B: optional avatar motion worker",
    type: "model",
    category: "Video & Media",
    subcategory: "Character animation and replacement",
    simpleDescription: "Official Apache-2.0 character animation and replacement model that accepts a source video plus character image. It is useful as an optional asynchronous worker for original Eclipse companion art and consented media, not as a browser dependency or VPS workload; downloads, GPU execution and generated outputs need pinned revisions, hashes, provenance and rights checks.",
    useCases: [
      "Create offline motion studies for an original Eclipse companion",
      "Offer character animation as an optional Eclipse Media provider",
      "Generate reviewed short avatar clips from consented driving video",
    ],
    features: ["Character animation", "Character replacement", "Video and image input", "Single and multi-GPU inference", "Safetensors weights"],
    platforms: ["Python", "PyTorch", "CUDA", "Hugging Face", "ModelScope"],
    license: "Apache-2.0 model card and code surface; input and output rights remain the user's responsibility",
    licenseEvidence: [
      { kind: "license", label: "Official Hugging Face Apache-2.0 model card", url: "https://huggingface.co/Wan-AI/Wan2.2-Animate-14B" },
      { kind: "source", label: "Official Wan2.2 repository", url: "https://github.com/Wan-Video/Wan2.2" },
    ],
    pricing: "Weights are publicly available. Hardware, storage, bandwidth and hosted GPU inference create substantial separate costs.",
    access: { cost: "free", signup: "optional", runtime: "local" },
    trust: "official",
    trustReason: "Official Wan AI model card, Apache-2.0 label, input contract and documented inference paths checked 01.09.2026. The large model was not downloaded or executed.",
    projects: ["Eclipse Media", "Eclipse AI Hub", "Eclipse Library"],
    decision: "roadmap",
    riskLevel: "high",
    risks: [
      "Character replacement can enable deceptive or non-consensual likeness use",
      "Large weights and preprocessing can exhaust GPU, RAM, disk or job capacity",
      "Unpinned model downloads can change without review",
      "Generated video needs provenance and visible disclosure",
    ],
    quickStart: [
      "Define a provider contract and disabled-by-default queue without downloading weights",
      "Require proof of rights for the character image and driving video",
      "Run a short synthetic fixture on an isolated GPU worker with pinned revision, hashes, quotas and output provenance",
    ],
    limitations: ["Not for the current VPS", "No browser-side inference", "No real-person replacement without explicit consent", "No automatic publish", "No unpinned downloads"],
    audience: ["Media ML engineers", "Avatar designers", "GPU platform engineers", "Safety reviewers"],
    relatedTechnologies: ["Video-to-video", "Avatar animation", "GPU queues", "Model provenance", "Consent"],
    ...common,
  },
];

const byId = new Map(catalog.items.map((item) => [item.id, item]));
for (const record of records) byId.set(record.id, record);

const bella = byId.get("bella-visual-persona-concept-only");
if (bella) {
  byId.set(bella.id, {
    ...bella,
    subcategory: "Clean-room visual companion reference",
    simpleDescription: "Bella remains a concept-only reference because no reliable reuse license was verified. Eclipse takes only the general digital-companion product language and implements an original first-party presence surface for Альтрон with idle, listening, thinking, speaking and error states, explicit privacy boundaries, a collapsible conversation layer and no Bella code, assets, voice, models or branding.",
    useCases: [
      "Create a persistent original visual presence for Альтрон",
      "Map idle, listening, thinking, speaking and error states to accessible feedback",
      "Keep microphone, transcript, memory and tools behind separate explicit permissions",
    ],
    features: ["Cinematic companion presence concept", "Reactive state language", "Voice-oriented layout", "Conversation overlay"],
    projects: ["Eclipse AI Hub", "Jarvis", "Eclipse Media", "Eclipse Library"],
    quickStart: [
      "Use only the first-party Альтрон Valkyrie asset and Eclipse design tokens",
      "Drive the renderer from a small public UI state machine with no direct tool access",
      "Test keyboard use, reduced motion, hidden state, mobile layout and microphone denial",
    ],
    limitations: ["Concept only", "No code, model, weight, image, video, voice, animation or branding reuse", "No direct microphone, file, tool or memory access from the renderer"],
    guide,
    source,
    verifiedAt,
    reviewStatus: "verified",
  });
}

catalog.items = [...byId.values()];
fs.writeFileSync(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`);
console.log(`${records.length} records upserted and Bella clean-room scope refreshed. ${catalog.items.length} total items.`);
