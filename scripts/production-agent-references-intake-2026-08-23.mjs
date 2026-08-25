import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, "catalog", "resources.json");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const verifiedAt = "2026-08-23";

const common = {
  reviewStatus: "verified",
  verifiedAt,
  addedAt: verifiedAt,
  source: {
    file: "guides/production-agent-references-2026-08-23.md",
    line: 1,
    category: "AI Agents & Production",
    subcategory: "Проверенные источники и Eclipse rollout",
  },
};

const records = [
  {
    id: "agents-towards-production-playbook",
    url: "https://github.com/NirDiamant/agents-towards-production",
    title: "Agents Towards Production",
    type: "learn",
    category: "AI Agents & Production",
    subcategory: "Production tutorials",
    simpleDescription: "Практический набор code-first tutorials о переходе от прототипа агента к Docker/FastAPI, памяти, наблюдаемости, evaluation, security guardrails и multi-agent orchestration. Для Eclipse это учебный checklist и источник тестовых гипотез, а не библиотека для прямого переноса кода.",
    useCases: [
      "Сверить production-readiness Eclipse AI Hub и Agent Office",
      "Сформировать учебные лабораторные работы для Educator-AI",
      "Собрать eval, tracing и security backlog для agent runtime",
      "Проверить Docker/FastAPI deployment patterns на изолированном прототипе",
    ],
    features: ["28 production tutorials", "Docker и FastAPI", "Memory и RAG", "Tracing и evaluation", "Security guardrails", "Multi-agent coordination"],
    platforms: ["Python", "Jupyter", "Docker", "FastAPI", "Cloud"],
    license: "Custom non-commercial license; attribution required; commercial use requires written permission",
    licenseEvidence: [
      { kind: "license", label: "Official custom license", url: "https://github.com/NirDiamant/agents-towards-production/blob/main/LICENSE" },
      { kind: "source", label: "Official repository", url: "https://github.com/NirDiamant/agents-towards-production" },
    ],
    pricing: "Материалы repository доступны бесплатно для некоммерческого использования; коммерческое использование требует письменного разрешения автора, а внешние providers и course имеют отдельные условия.",
    access: { cost: "freemium", signup: "none", runtime: "hybrid" },
    trust: "official",
    trustReason: "Проверены официальный repository, README и custom license 23.08.2026. Sponsor tutorials и внешние сервисы не считаются независимым endorsement.",
    projects: ["Eclipse AI Hub", "Eclipse Chat", "Hopson Sentinel", "Educator-AI", "Eclipse Library"],
    decision: "reference",
    riskLevel: "medium",
    risks: [
      "Non-commercial license запрещает прямой коммерческий reuse без разрешения",
      "Tutorial dependencies и cloud services требуют отдельного security/license review",
      "Notebook demo не доказывает tenant isolation, idempotency, rollback или production SLO",
    ],
    quickStart: [
      "Использовать README как индекс и выбрать один production gap",
      "Перепроектировать решение самостоятельно, не копируя licensed code в коммерческий продукт",
      "Проверить threat model, tests, cost, observability и rollback на disposable sandbox",
    ],
    limitations: ["Reference-only для коммерческих Eclipse-проектов без письменного разрешения", "Не выполнять remote install snippets и provider calls без review"],
    guide: "production-agent-references-2026-08-23",
    ...common,
  },
  {
    id: "dair-prompt-engineering-guide",
    url: "https://github.com/dair-ai/Prompt-Engineering-Guide",
    title: "Prompt Engineering Guide",
    type: "learn",
    category: "Prompts & Context",
    subcategory: "Prompt, RAG и agent fundamentals",
    simpleDescription: "MIT-руководство по prompt/context engineering: zero/few-shot, chain-of-thought, RAG, agents, reliability и research references. В Eclipse полезно как учебная база и словарь техник, но не как обещание, что один шаблон заменяет eval, данные и продуктовые ограничения.",
    useCases: [
      "Собрать русскоязычный curriculum Educator-AI",
      "Улучшить prompt contracts Growth OS и Eclipse Chat",
      "Проектировать RAG/evidence prompts с citations и abstention",
      "Создать regression fixtures вместо субъективной оценки prompt",
    ],
    features: ["Prompting fundamentals", "Few-shot и reasoning", "RAG", "Agents", "Research references", "Многоязычные материалы"],
    platforms: ["Web", "Markdown", "Jupyter", "LLM-agnostic"],
    license: "MIT",
    licenseEvidence: [
      { kind: "license", label: "Official MIT license", url: "https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/LICENSE.md" },
      { kind: "source", label: "Official repository", url: "https://github.com/dair-ai/Prompt-Engineering-Guide" },
    ],
    pricing: "Open-source материалы бесплатны; модели, APIs, courses и linked services могут иметь отдельную стоимость.",
    access: { cost: "free", signup: "none", runtime: "local" },
    trust: "official",
    trustReason: "Проверены canonical repository, promptingguide.ai и MIT license 23.08.2026; изменяемые model claims требуют текущих primary sources.",
    projects: ["Educator-AI", "Eclipse AI Hub", "Eclipse Chat", "Eclipse Growth OS", "Eclipse Library"],
    decision: "now",
    riskLevel: "low",
    risks: [
      "Chain-of-thought prompting не является гарантией корректности и может ухудшать cost/latency",
      "Примеры быстро устаревают вместе с model behavior",
      "Prompt injection, data leakage и high-stakes hallucination требуют системных controls",
    ],
    quickStart: [
      "Выбрать один реальный Eclipse fixture и baseline prompt",
      "Изменять одну технику за раз и измерять accuracy, citations, cost и latency",
      "Сохранить победивший prompt как versioned contract с fail-closed policy",
    ],
    limitations: ["Не хранить secrets или персональные данные в prompt", "Не раскрывать скрытый chain-of-thought; хранить краткое проверяемое обоснование"],
    guide: "production-agent-references-2026-08-23",
    ...common,
  },
  {
    id: "awesome-llm-apps-working-examples",
    url: "https://github.com/Shubhamsaboo/awesome-llm-apps",
    title: "Awesome LLM Apps",
    type: "learn",
    category: "AI Agents & Production",
    subcategory: "Runnable agent and RAG examples",
    simpleDescription: "Apache-2.0 collection из 100+ runnable LLM, RAG и agent examples с README и requirements внутри проектов. Ценность для Eclipse — быстро проверять product patterns и tool boundaries; каждый пример остаётся отдельным demo со своими зависимостями, ключами и security debt.",
    useCases: [
      "Сравнить multi-agent team patterns для AI Office",
      "Выбрать минимальный RAG prototype для Eclipse Library",
      "Собрать synthetic fixtures для model/capability registry",
      "Проверить local Ollama variants до cloud pilot",
    ],
    features: ["100+ examples", "Agent teams", "RAG applications", "Local model variants", "Per-project README", "Python applications"],
    platforms: ["Python", "Streamlit", "Ollama", "Cloud APIs", "Docker"],
    license: "Apache-2.0",
    licenseEvidence: [
      { kind: "license", label: "Official Apache-2.0 license", url: "https://github.com/Shubhamsaboo/awesome-llm-apps/blob/main/LICENSE" },
      { kind: "source", label: "Official repository", url: "https://github.com/Shubhamsaboo/awesome-llm-apps" },
    ],
    pricing: "Repository бесплатен; модели, search APIs, databases и внешние tools из отдельных примеров могут быть платными.",
    access: { cost: "free", signup: "optional", runtime: "hybrid" },
    trust: "community",
    trustReason: "Проверены canonical repository, Apache-2.0 license и project tree 23.08.2026. Коллекция curated, но каждое приложение требует самостоятельного dependency и behavior review.",
    projects: ["Eclipse AI Hub", "Eclipse Chat", "Eclipse Library", "Educator-AI", "DnD / Living World"],
    decision: "reference",
    riskLevel: "medium",
    risks: [
      "Examples могут ожидать широкие API keys, web access или permissive tool calling",
      "Transitive dependencies и copied snippets имеют собственные версии и advisories",
      "Demo UI и happy path не покрывают tenant isolation, abuse, rate limits и recovery",
    ],
    quickStart: [
      "Выбирать один пример по конкретному product gap, а не клонировать всю коллекцию",
      "Запускать в disposable sandbox с test keys и deny-by-default network/tools",
      "Переносить только проверенный pattern через clean-room implementation и regression tests",
    ],
    limitations: ["Не подключать production credentials", "Не считать runnable demo production-ready"],
    guide: "production-agent-references-2026-08-23",
    ...common,
  },
  {
    id: "eclipse-command-presets-pack",
    url: "https://library.eclipse-forge.ru/prompts/eclipse-command-presets.md",
    title: "Eclipse Command Presets",
    type: "prompt",
    category: "Prompts & Context",
    subcategory: "Проверяемые prompt aliases",
    simpleDescription: "Редакционный набор коротких alias-команд для исследования, письма, решений, обучения и визуальных преобразований. Это пресеты Eclipse Library, а не встроенные slash-команды ChatGPT: каждый раскрывается в явный prompt contract с источниками, ограничениями и форматом ответа.",
    useCases: [
      "Быстро выбрать режим ответа в Eclipse Chat",
      "Использовать /blueprint, /stickynotes и /cutaway для owned изображений",
      "Создавать reusable prompt templates без скрытых инструкций",
      "Добавить безопасные health/finance/marketing guardrails",
    ],
    features: ["49 видимых community aliases", "3 visual presets", "Output contracts", "High-stakes guardrails", "Ethical persuasion rules"],
    platforms: ["Eclipse Chat", "ChatGPT", "Claude", "Gemini", "Any LLM"],
    license: "Eclipse Forge editorial material; external model and image terms still apply",
    licenseEvidence: [{ kind: "source", label: "Canonical Eclipse Library prompt pack", url: "https://library.eclipse-forge.ru/prompts/eclipse-command-presets.md" }],
    pricing: "Сам prompt pack бесплатен внутри Library; вызовы моделей и image generation тарифицируются соответствующим provider.",
    access: { cost: "free", signup: "none", runtime: "local" },
    trust: "verified",
    trustReason: "Community labels переработаны Eclipse Library 23.08.2026: неизвестные пропуски не выдуманы, claims ограничены, high-stakes и visual rights gates добавлены явно.",
    projects: ["Eclipse Library", "Eclipse Chat", "Eclipse AI Hub", "Educator-AI", "Eclipse Growth OS"],
    decision: "now",
    riskLevel: "medium",
    risks: [
      "Slash-like syntax может ошибочно восприниматься как native model feature",
      "Marketing, health и finance prompts могут породить необоснованные советы",
      "Visual transforms требуют прав на исходное изображение и могут искажать технические детали",
    ],
    quickStart: [
      "Открыть pack и выбрать alias по задаче",
      "Заполнить вход, audience, evidence и output format",
      "Проверить результат человеком; для visual preset приложить owned/licensed image",
    ],
    limitations: ["Не обещать native поддержку slash-команд", "Не использовать как замену врачу, юристу или финансовому специалисту"],
    guide: "production-agent-references-2026-08-23",
    ...common,
  },
  {
    id: "anti-vibe-design-review-eclipse",
    url: "https://library.eclipse-forge.ru/guides/anti-vibe-design-review-2026-08-23.md",
    title: "Anti-vibe Design Review",
    type: "learn",
    category: "Design & UI",
    subcategory: "Контекстная проверка AI-generated UI",
    simpleDescription: "Контекстный QA-чеклист против шаблонного AI-дизайна. Он отделяет реальные дефекты — выдуманные отзывы, отсутствие product states, слабую доступность и доказательства — от нейтральных приёмов вроде Lucide, белого фона, Bento, glass или Inter, которые допустимы при осознанной системе.",
    useCases: ["UI review Eclipse Chat и Library", "QA generated landing pages", "Проверка 3-second test и primary flow", "Согласование design direction до кода"],
    features: ["30 разобранных сигналов", "Always-bad vs context-dependent", "Operational и marketing profiles", "Accessibility и reduced motion", "Evidence-first claims"],
    platforms: ["Web", "Mobile Web", "Desktop", "Design systems"],
    license: "Eclipse Forge editorial material",
    licenseEvidence: [{ kind: "source", label: "Canonical Eclipse Library guide", url: "https://library.eclipse-forge.ru/guides/anti-vibe-design-review-2026-08-23.md" }],
    pricing: "Бесплатный редакционный checklist.",
    access: { cost: "free", signup: "none", runtime: "local" },
    trust: "verified",
    trustReason: "Список из screenshots переработан в product-oriented review 23.08.2026; абсолютные запреты заменены проверяемыми критериями.",
    projects: ["Eclipse Chat", "Eclipse Library", "Eclipse Forge Landing", "StarCRM", "StarMarket"],
    decision: "now",
    riskLevel: "low",
    risks: ["Механическое применение может стереть бренд", "Визуальная чистота не заменяет usability и security", "Один reviewer может принять личный вкус за evidence"],
    quickStart: ["Назвать тип поверхности и primary task", "Проверить states/evidence/accessibility до стилистики", "Исправить три самых дорогих дефекта и повторить desktop/mobile QA"],
    limitations: ["Не запрещать компонент или стиль только из-за популярности", "StarCRM и StarMarket проверять как отдельные продукты"],
    guide: "anti-vibe-design-review-2026-08-23",
    ...common,
  },
];

for (const record of records) {
  const duplicate = catalog.items.find((item) => item.id === record.id || item.url === record.url);
  if (duplicate) throw new Error(`Duplicate catalog item: ${record.id} / ${record.url}`);
  catalog.items.push(record);
}

fs.writeFileSync(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
console.log(`Added ${records.length} production-agent references. Total: ${catalog.items.length}`);
