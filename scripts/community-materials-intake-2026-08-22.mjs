import { readFile, writeFile } from 'node:fs/promises';

const catalogUrl = new URL('../catalog/resources.json', import.meta.url);
const addedAt = '2026-08-22';
const guide = 'community-agent-prompt-library-review-2026-08-22';

const records = [
  {
    id:'openreply-instagram-comment-dm',url:'https://github.com/diwenne/openreply',title:'OpenReply',type:'oss',category:'Автоматизация',subcategory:'Instagram comment-to-DM',
    simpleDescription:'OpenReply — MIT-проект для self-hosted Instagram comment-to-DM через официальный Meta API. Это кандидат для Growth OS, но не «бесплатный ManyChat в один клик»: нужны web app, постоянно работающий worker, PostgreSQL, Redis, Meta App Review и строгие approval gates.',
    useCases:['Прототипировать keyword comment-to-DM','Хранить кампании и delivery receipts','Сравнить TCO с managed automation'],platforms:['Next.js','Node.js','PostgreSQL','Redis','Meta Graph API'],
    license:'MIT',licenseEvidence:[{kind:'license',label:'Official MIT license',url:'https://github.com/diwenne/openreply/blob/main/LICENSE'},{kind:'source',label:'Official repository',url:'https://github.com/diwenne/openreply'}],
    pricing:'Source code is free; hosting, database, Redis, email and Meta operations have separate costs',access:{cost:'free',signup:'required',runtime:'self-host'},trust:'community',trustReason:'Canonical repository, MIT license and architecture were checked on 22.08.2026. Production access remains governed by Meta review, permissions and messaging limits.',
    projects:['Eclipse Growth OS','Eclipse Social','Hopson Sentinel'],decision:'roadmap',riskLevel:'high',risks:['OAuth tokens and Instagram user data','Meta policy and private-reply window','Worker retries can duplicate or spam messages','Public webhooks require signature validation and rate limits'],
    quickStart:['Run locally with test accounts only','Keep campaigns read-only/draft until explicit approval','Verify webhook signatures, idempotency and delivery receipts before a pilot'],description:'Self-hosted Instagram comment keyword to private-message automation with analytics and queue processing.',features:['Meta OAuth and webhooks','Campaign dashboard','BullMQ delivery worker','Link and delivery analytics'],audience:['Growth teams','Social automation engineers'],limitations:['Complex multi-service deployment','Meta App Review may be required','Not a drop-in free hosted service'],relatedTechnologies:['Meta Graph API','BullMQ','Prisma','Resend'],
  },
  {
    id:'awesome-claude-skills-composio',url:'https://github.com/ComposioHQ/awesome-claude-skills',title:'Awesome Claude Skills by Composio',type:'skill',category:'Skills',subcategory:'Curated skill collection',
    simpleDescription:'Коллекция skills и ссылок для Claude-совместимых агентов. Eclipse использует её только как discovery source: SKILL.md объясняет «как», а connect-apps/Composio даёт OAuth-действия — это разные границы доверия и разные решения approval.',
    useCases:['Найти skill-кандидаты','Сравнить workflow patterns','Передать кандидата в Eclipse Skill Intake'],platforms:['Claude Code','Codex','GitHub','Composio'],
    license:'No repository-wide license verified; each linked skill and connector keeps its own terms',licenseEvidence:[{kind:'source',label:'Official repository',url:'https://github.com/ComposioHQ/awesome-claude-skills'},{kind:'official-source',label:'Composio toolkits',url:'https://composio.dev/toolkits'}],
    pricing:'Repository browsing is free; Composio and connected apps can require accounts or paid plans',access:{cost:'freemium',signup:'optional',runtime:'hybrid'},trust:'community',trustReason:'Canonical ComposioHQ repository checked on 22.08.2026. No repository-wide license was exposed, so code copying and blanket installation are blocked.',
    projects:['Eclipse Library','Eclipse AI Hub','Hopson Sentinel'],decision:'reference',riskLevel:'high',risks:['Skills can contain executable instructions','Connectors can write to real accounts','OAuth scope and third-party data processing','No blanket reuse license'],
    quickStart:['Use the index for discovery only','Review one canonical skill at a pinned revision','Authorize each connector and write action separately'],description:'Curated Claude skill and application-connector ecosystem used as an intake source, not an auto-installer.',features:['Skill index','Workflow examples','Optional connect-apps gateway'],audience:['Agent builders','Automation teams'],limitations:['Mixed provenance and licenses','OAuth actions require separate review','Not all indexed content is first-party'],relatedTechnologies:['SKILL.md','OAuth','Composio','Supply chain'],
  },
  {
    id:'screenpipe-local-computer-history',url:'https://github.com/screenpipe/screenpipe',title:'Screenpipe',type:'tool',category:'Инструменты',subcategory:'Local computer history',
    simpleDescription:'Screenpipe записывает экран и звук локально и делает историю доступной агентам. Полезно для персональной памяти и QA evidence, но текущая лицензия требует отдельного commercial agreement для бизнес-использования и unattended machines; приватность здесь критичнее удобства.',
    useCases:['Личная локальная история действий','Поиск контекста по рабочему дню','Сбор QA evidence с явным consent'],platforms:['Desktop','Local AI','MCP'],
    license:'Screenpipe Commercial License; free personal/non-commercial use and limited evaluation, paid license required for commercial use',licenseEvidence:[{kind:'license',label:'Official current license',url:'https://github.com/screenpipe/screenpipe/blob/main/LICENSE.md'},{kind:'source',label:'Official repository',url:'https://github.com/screenpipe/screenpipe'}],
    pricing:'Personal/evaluation rights are limited by the current license; commercial and unattended use require paid terms',access:{cost:'paid',signup:'optional',runtime:'local'},trust:'official',trustReason:'Canonical repository and current commercial license were checked on 22.08.2026. Older MIT releases do not make current versions MIT.',
    projects:['Hopson Sentinel','Eclipse Chat'],decision:'reference',riskLevel:'high',risks:['Continuous capture of credentials, messages and private data','Biometric and voice data','Retention and deletion failures','Commercial license required for business/unattended deployment'],
    quickStart:['Do not enable continuous capture in production','Run a short personal-only privacy pilot with exclusions','Define redaction, retention, encryption and panic-delete before evaluation'],description:'Local-first screen and audio memory for agents with a sensitive-data and commercial-license boundary.',features:['Continuous screen/audio capture','Local search','Agent context'],audience:['Personal knowledge workers','Agent researchers'],limitations:['Highly sensitive capture','Commercial restrictions','Needs strong hardware and storage governance'],relatedTechnologies:['OCR','STT','Privacy','Retention'],
  },
  {
    id:'twenty-open-crm',url:'https://github.com/twentyhq/twenty',title:'Twenty CRM',type:'oss',category:'Бизнес',subcategory:'CRM platform',
    simpleDescription:'Twenty — self-hostable CRM и кандидат для сравнения со StarCRM, а не автоматическая замена. Большая часть проекта AGPL-3.0 с исключением для приложений, отдельные файлы Enterprise и SDK/UI-пакеты с собственными лицензиями требуют component-level review.',
    useCases:['Сравнить CRM UX и data model','Оценить self-host TCO','Изучить API, webhooks и app platform'],platforms:['Web','PostgreSQL','Docker','GraphQL','REST'],
    license:'Mostly AGPL-3.0 with Twenty Application Exception; some Enterprise-licensed files and MIT packages',licenseEvidence:[{kind:'license',label:'Official mixed license',url:'https://github.com/twentyhq/twenty/blob/main/LICENSE'},{kind:'source',label:'Official repository',url:'https://github.com/twentyhq/twenty'}],
    pricing:'Open-source core plus hosting and possible Enterprise features',access:{cost:'freemium',signup:'none',runtime:'self-host'},trust:'official',trustReason:'Canonical repository and mixed license file were checked on 22.08.2026.',
    projects:['StarCRM','Eclipse Growth OS'],decision:'reference',riskLevel:'high',risks:['AGPL network-source obligations when modifying the core','Enterprise-only files','CRM stores sensitive customer data','Migration and operational TCO'],
    quickStart:['Keep StarCRM and Twenty as separate products','Run a read-only UX/data-model comparison','Obtain legal review before copying or modifying core code'],description:'Open CRM platform used for architecture and UX comparison under a mixed AGPL, MIT and Enterprise license boundary.',features:['Contacts and companies','Pipelines','Workflow automation','REST/GraphQL APIs'],audience:['CRM teams','Platform engineers'],limitations:['Not a zero-cost Salesforce drop-in','Mixed licensing','Operational complexity'],relatedTechnologies:['CRM','PostgreSQL','GraphQL','AGPL'],
  },
  {
    id:'nocodb-self-hosted-table-database',url:'https://github.com/nocodb/nocodb',title:'NocoDB',type:'oss',category:'Данные',subcategory:'Table database UI',
    simpleDescription:'NocoDB даёт grid, forms, kanban и API поверх базы данных. Подходит как reference для внутренних таблиц и Library operations, но текущий Sustainable Use License разрешает внутреннее бизнес-использование и ограничивает распространение/сервис — это не обычная permissive OSS-лицензия.',
    useCases:['Внутренние операционные таблицы','Формы и lightweight admin UI','Сравнение с Airtable'],platforms:['Web','Database','Docker'],
    license:'Sustainable Use License 1.0 for master/develop; other branches may be unlicensed',licenseEvidence:[{kind:'license',label:'Official current license',url:'https://github.com/nocodb/nocodb/blob/develop/LICENSE.md'},{kind:'source',label:'Official repository',url:'https://github.com/nocodb/nocodb'}],
    pricing:'Self-hosting software is available under the license; cloud and operating costs are separate',access:{cost:'freemium',signup:'none',runtime:'self-host'},trust:'official',trustReason:'Canonical repository and current Sustainable Use License were checked on 22.08.2026.',
    projects:['Eclipse Library','Eclipse Growth OS'],decision:'reference',riskLevel:'medium',risks:['Non-permissive redistribution/service limits','Database credentials and row-level access','Backups and schema migration'],
    quickStart:['Use only for an internal sandbox comparison','Review database permissions and backups','Do not redistribute or resell without license review'],description:'Self-hosted Airtable-like interface with internal-use-friendly but non-permissive licensing.',features:['Grid and form views','Kanban','REST APIs','Existing database connections'],audience:['Operations teams','Internal tool builders'],limitations:['Sustainable Use restrictions','Not a drop-in free SaaS replacement','Needs database operations'],relatedTechnologies:['Airtable','PostgreSQL','Internal tools'],
  },
  {
    id:'voicebox-local-ai-voice-studio',url:'https://github.com/jamiepine/voicebox',title:'Voicebox',type:'oss',category:'Медиа',subcategory:'Local AI voice studio',
    simpleDescription:'Voicebox — MIT local-first voice studio для TTS, диктовки и работы с голосами. Кандидат для Eclipse Media и Chat, но клонирование голоса допускается только с документированным согласием владельца и заметной маркировкой синтетического аудио.',
    useCases:['Локальная озвучка прототипов','Диктовка в Eclipse Chat','Сравнение TTS engines'],platforms:['Desktop','Local AI','TTS','STT'],
    license:'MIT',licenseEvidence:[{kind:'license',label:'Official MIT license',url:'https://github.com/jamiepine/voicebox/blob/main/LICENSE'},{kind:'source',label:'Official repository',url:'https://github.com/jamiepine/voicebox'}],
    pricing:'Open-source application; model downloads, hardware and optional providers are separate',access:{cost:'free',signup:'none',runtime:'local'},trust:'community',trustReason:'Canonical repository and MIT metadata checked on 22.08.2026; model licenses still require engine-level review.',
    projects:['Eclipse Media','Eclipse Chat','Educator-AI'],decision:'roadmap',riskLevel:'high',risks:['Voice cloning without consent','Biometric data retention','Model-specific commercial-use restrictions','Impersonation and fraud'],
    quickStart:['Pilot only with the owner’s own voice or licensed stock voice','Store consent and model provenance','Watermark/label synthetic exports and offer deletion'],description:'Local AI voice studio for generation, cloning and dictation with explicit consent and provenance requirements.',features:['Text to speech','Voice cloning','Dictation','Multiple engines'],audience:['Video creators','Accessibility teams','Voice product developers'],limitations:['Model licenses vary','GPU/storage requirements','High impersonation risk'],relatedTechnologies:['TTS','STT','Voice consent','Biometrics'],
  },
  {
    id:'agency-agents-template-collection',url:'https://github.com/msitarzewski/agency-agents',title:'Agency Agents',type:'skill',category:'Агенты',subcategory:'Specialist agent templates',
    simpleDescription:'Agency Agents — MIT-набор персонажей и workflow templates для специализированных агентов. Используем как reference для ролей и deliverables, но не как «готовых сотрудников»: каждый prompt проходит проверку полномочий, данных, инструментов и measurable acceptance criteria.',
    useCases:['Спроектировать команды specialist agents','Сравнить role templates','Добавить deliverable checklists'],platforms:['Markdown','Agent runtimes','GitHub'],
    license:'MIT',licenseEvidence:[{kind:'license',label:'Official MIT license',url:'https://github.com/msitarzewski/agency-agents/blob/main/LICENSE'},{kind:'source',label:'Official repository',url:'https://github.com/msitarzewski/agency-agents'}],
    pricing:'Free repository; models and connected tools have separate costs',access:{cost:'free',signup:'none',runtime:'local'},trust:'community',trustReason:'Canonical repository and MIT license checked on 22.08.2026. Template quality is not proof of safe autonomous execution.',
    projects:['Eclipse AI Hub','Eclipse Growth OS','Eclipse Library'],decision:'roadmap',riskLevel:'medium',risks:['Role prompts can overstate competence','Tool access can exceed the role','Outputs need domain review'],
    quickStart:['Import one role as reference, not executable policy','Replace personality claims with capabilities and acceptance tests','Keep external actions behind approval'],description:'Large collection of specialized agent-role templates for planning, delivery and review workflows.',features:['Specialist roles','Deliverable templates','Cross-functional team patterns'],audience:['Agent orchestrator builders','Product teams'],limitations:['No runtime or safety guarantees','Prompts need adaptation','Quality varies by domain'],relatedTechnologies:['Multi-agent','Prompts','Orchestration'],
  },
  {
    id:'arcads-agent-skills',url:'https://github.com/arcads-ai/skills',title:'Arcads Agent Skills',type:'skill',category:'Медиа',subcategory:'Paid UGC generation connector',
    simpleDescription:'Официальный небольшой набор skills для управления Arcads UGC workflows. Это paid action surface с внешними аккаунтами, кредитами, лицами и продуктами; Library хранит ссылку и policy, но не запускает генерацию и не авторизует MCP автоматически.',
    useCases:['Изучить UGC workflow schema','Подготовить human-approved ad brief','Оценить платный pilot Arcads'],platforms:['Arcads','Claude-compatible agents','MCP'],
    license:'No repository-wide license verified; Arcads service terms and skill files require separate review',licenseEvidence:[{kind:'source',label:'Official Arcads skills repository',url:'https://github.com/arcads-ai/skills'},{kind:'official-source',label:'Arcads MCP endpoint',url:'https://mcp.arcads.ai'}],
    pricing:'Paid Arcads credits/account required for generation',access:{cost:'paid',signup:'required',runtime:'cloud'},trust:'official',trustReason:'Canonical Arcads organization repository and MCP domain checked on 22.08.2026; no reusable code license was exposed.',
    projects:['Eclipse Media','Shotforge','Eclipse Growth OS'],decision:'reference',riskLevel:'high',risks:['Paid credits and accidental spend','Face/likeness and product trademark rights','OAuth and remote data processing','Misleading synthetic testimonials'],
    quickStart:['Do not connect an account from Library','Create an offline brief and budget cap first','Require actor consent, product rights and final human approval'],description:'Agent instructions for Arcads UGC generation, retained as a paid connector reference with strict approval gates.',features:['UGC actor workflows','Product placement prompts','Ad variation workflows'],audience:['Creative production teams'],limitations:['Paid external service','No verified repository license','Identity and advertising compliance'],relatedTechnologies:['UGC','MCP','Synthetic media','Advertising'],
  },
  {
    id:'wan21-open-video-model',url:'https://github.com/Wan-Video/Wan2.1',title:'Wan 2.1',type:'oss',category:'Модели',subcategory:'Open video generation',
    simpleDescription:'Wan 2.1 — Apache-2.0 repository for open video-generation models. Это реальный кандидат для local media experiments, но «бесплатно» означает только отсутствие SaaS-подписки: нужны совместимое железо, model-weight license/provenance review и безопасная очередь генерации.',
    useCases:['Локальные video-generation experiments','Сравнить качество и стоимость с cloud APIs','Создать owned B-roll'],platforms:['Python','GPU','Local AI'],
    license:'Apache-2.0 repository; model weights and bundled components must be checked separately',licenseEvidence:[{kind:'license',label:'Official Apache-2.0 license',url:'https://github.com/Wan-Video/Wan2.1/blob/main/LICENSE.txt'},{kind:'source',label:'Official repository',url:'https://github.com/Wan-Video/Wan2.1'}],
    pricing:'Open source; GPU, storage, electricity and hosting are separate costs',access:{cost:'free',signup:'none',runtime:'local'},trust:'official',trustReason:'Canonical Wan-Video repository, active status and Apache-2.0 metadata checked on 22.08.2026.',
    projects:['Eclipse Media','Shotforge','Text2Image'],decision:'roadmap',riskLevel:'high',risks:['High GPU/storage cost','Model weights and training-data provenance','Unsafe or infringing generations','Long-running job isolation'],
    quickStart:['Benchmark one documented small workflow on isolated hardware','Record model/checkpoint provenance and compute cost','Block likeness and copyrighted-character prompts without rights'],description:'Open video-generation model family for controlled local media experiments.',features:['Text-to-video','Image-to-video','Multiple model sizes'],audience:['AI media engineers','Researchers'],limitations:['Heavy hardware requirements','Weights and dependencies need review','Not a turnkey editor'],relatedTechnologies:['Video diffusion','PyTorch','GPU'],
  },
  {
    id:'scrapegraph-mcp-server',url:'https://github.com/ScrapeGraphAI/scrapegraph-mcp',title:'ScrapeGraph MCP',type:'oss',category:'Парсинг',subcategory:'Hosted scraping MCP',
    simpleDescription:'ScrapeGraph MCP — MIT MCP-сервер для вызова ScrapeGraph API из агента. Это отдельный ресурс от Python-библиотеки ScrapeGraphAI: сервер требует API key и может передавать URL/контент внешнему сервису, поэтому подходит для разрешённых публичных источников, а не для скрытого обхода платформ.',
    useCases:['Структурировать публичные страницы','Получить schema-shaped extraction','Сравнить MCP и local library'],platforms:['MCP','Node.js','ScrapeGraph API'],
    license:'MIT',licenseEvidence:[{kind:'license',label:'Official MIT license',url:'https://github.com/ScrapeGraphAI/scrapegraph-mcp/blob/main/LICENSE'},{kind:'source',label:'Official repository',url:'https://github.com/ScrapeGraphAI/scrapegraph-mcp'}],
    pricing:'MCP source is free; hosted ScrapeGraph API usage requires a key and may be paid',access:{cost:'freemium',signup:'required',runtime:'cloud'},trust:'official',trustReason:'Canonical ScrapeGraphAI repository and MIT license checked on 22.08.2026.',
    projects:['Eclipse Library','Eclipse Growth OS','Eclipse AI Hub'],decision:'roadmap',riskLevel:'high',risks:['API key exposure','External processing of URLs/content','Target terms, robots and personal-data rules','Prompt injection from crawled pages'],
    quickStart:['Test only on an owned/public page','Treat page text as untrusted data','Store API key outside Git and add domain allowlist, budgets and receipts'],description:'MCP bridge to hosted AI-assisted web extraction with explicit cost, privacy and target-policy boundaries.',features:['Structured extraction','MCP integration','Hosted scraping API'],audience:['Research agents','Data teams'],limitations:['Not fully free','External service dependency','Cannot override target-site rules'],relatedTechnologies:['MCP','Web scraping','Prompt injection'],
  },
  {
    id:'open-higgsfield-ai-unverified',url:'https://github.com/ClabstreamTeam/Open-Higgsfield-AI',title:'Open-Higgsfield-AI',type:'grey',category:'Security и grey zone',subcategory:'Unverified generative-media replacement',
    simpleDescription:'Небольшой сторонний проект заявляет open-source alternative to Higgsfield и MIT, но repository-wide license file не был найден. Название не означает связь с Higgsfield. До проверки кода, моделей, весов и прав это только quarantine reference.',
    useCases:['Отслеживать кандидата для будущего review','Сравнить заявленную architecture'],platforms:['Web','Local AI'],
    license:'No repository-wide license file verified despite an MIT claim in the description',licenseEvidence:[{kind:'source',label:'Community repository',url:'https://github.com/ClabstreamTeam/Open-Higgsfield-AI'}],
    pricing:'Unknown total cost; models, weights and GPU are separate',access:{cost:'unknown',signup:'none',runtime:'local'},trust:'unknown',trustReason:'Repository exists, but no license endpoint was available on 22.08.2026 and model provenance was not established.',
    projects:['Eclipse Media'],decision:'no',riskLevel:'high',risks:['No verified license','Unknown model provenance and remote calls','Brand confusion with Higgsfield','Low-evidence marketing claims'],
    quickStart:['Do not install or copy code','Keep in quarantine review queue','Re-evaluate only after license, SBOM and model provenance appear'],description:'Unverified community generative-media project retained only for provenance and license follow-up.',features:['Claims image generation','Claims cinema studio'],audience:['Security reviewers','Media researchers'],limitations:['Install blocked','License absent','Provenance unknown'],relatedTechnologies:['Generative media','Supply chain','Model provenance'],
  },
  {
    id:'claude-code-guide-community-collection',url:'https://claude-code-guide-one-nu.vercel.app/',title:'Claude Code Guide Community Collection',type:'learn',category:'Курсы и гайды',subcategory:'Community prompt collection',
    simpleDescription:'Большая community-библиотека prompt playbooks про агентов, дизайн, медиа, маршрутизацию моделей и автоматизацию. Это не официальная документация Anthropic: Library хранит источник и собственный разбор, но не принимает команды, версии моделей, цены и benchmark claims за факты.',
    useCases:['Находить идеи для product epics','Извлекать reusable architecture patterns','Создавать verification queue'],platforms:['Web','Claude Code concepts'],
    license:'No public reuse license established; summarize and link, do not republish prompt text verbatim',licenseEvidence:[{kind:'official-source',label:'Community collection landing',url:'https://claude-code-guide-one-nu.vercel.app/'}],
    pricing:'Public pages and lead magnets; linked products and connectors may be paid',access:{cost:'free',signup:'optional',runtime:'cloud'},trust:'caution',trustReason:'The collection was supplied by the user and reviewed as a community source. Many future-model, benchmark, price and “free” claims lack authoritative evidence.',
    projects:['Eclipse Library','Eclipse AI Hub','Eclipse Growth OS','Eclipse Media'],decision:'reference',riskLevel:'high',risks:['Prompt injection disguised as instructions','Unverified models, pricing and benchmarks','Remote install commands and account actions','Copyright/republication limits'],
    quickStart:['Use the Eclipse review guide, not raw copy-paste commands','Verify each product against its canonical source','Separate reference, skill, connector and paid action decisions'],description:'Community prompt and workflow collection processed as a reference feed with evidence and safety gates.',features:['Agent workflows','Media pipelines','Design and automation prompts','Model-routing ideas'],audience:['Product researchers','Agent builders'],limitations:['Not official documentation','No blanket reuse license','Claims age quickly'],relatedTechnologies:['Claude Code','Prompts','MCP','Automation'],
  },
];

for (const record of records) Object.assign(record, {
  verifiedAt: record.decision === 'no' ? null : addedAt,
  reviewStatus: record.decision === 'no' ? 'inferred' : 'verified',
  source: {file:'User community materials intake 2026-08-22',line:null,category:'Community prompt and replacement pack',subcategory:record.subcategory},
  guide,
  addedAt,
});

const sourceText = await readFile(catalogUrl, 'utf8');
const newline = sourceText.includes('\r\n') ? '\r\n' : '\n';
const catalog = JSON.parse(sourceText);
const byId = new Map(catalog.items.map((item) => [item.id, item]));
const canonical = (value) => { const url = new URL(value); url.hash=''; url.hostname=url.hostname.toLowerCase().replace(/^www\./,''); url.search=''; url.pathname=url.pathname.replace(/\/+$/,'')||'/'; return url.toString().replace(/\/$/,''); };
const urls = new Map(catalog.items.map((item) => [canonical(item.url), item.id]));

for (const record of records) {
  if (byId.has(record.id)) throw new Error(`Record id already exists: ${record.id}`);
  const url = canonical(record.url);
  if (urls.has(url)) throw new Error(`Record URL already exists as ${urls.get(url)}: ${record.url}`);
  catalog.items.push(record);
  byId.set(record.id, record);
  urls.set(url, record.id);
}
catalog.totals.items = catalog.items.length;
await writeFile(catalogUrl, JSON.stringify(catalog,null,2).replace(/\n/g,newline)+newline, 'utf8');
console.log(`Added ${records.length} community-material records.`);
