import { readFile, writeFile } from 'node:fs/promises';

const catalogUrl = new URL('../catalog/resources.json', import.meta.url);
const doc = JSON.parse(await readFile(catalogUrl, 'utf8'));

const records = [
  {
    id: 'eclipse-automation-playbook-45',
    url: 'https://library.eclipse-forge.ru/guides/eclipse-automation-playbook-45.md',
    title: 'Eclipse Automation Playbook · 45 bounded workflows',
    type: 'learn', category: 'Курсы и гайды', subcategory: 'Growth and operations automation',
    simpleDescription: 'First-party разбор 45 офисных AI-сценариев: что можно выполнять read-only, что должно оставаться draft, а где нужен понятный diff и ручное подтверждение перед отправкой, публикацией, изменением файлов или финансовым действием.',
    useCases: ['Выбрать безопасные автоматизации для Growth OS', 'Спроектировать approval и receipt states', 'Распределить сценарии между Chat, AI Hub, Library и Sentinel'],
    platforms: ['Eclipse Forge', 'Web', 'Agent workflows'],
    license: 'Eclipse Forge first-party editorial guide; external products and source materials retain their own rights',
    licenseEvidence: [{ kind: 'source', label: 'First-party guide', url: 'https://library.eclipse-forge.ru/guides/eclipse-automation-playbook-45.md' }],
    pricing: 'Free first-party guide; provider, storage and connector costs are separate',
    access: { cost: 'free', signup: 'none', runtime: 'local' },
    trust: 'official', trustReason: 'Maintained by Eclipse Forge and designed around fail-closed external actions, evidence and human approval.',
    projects: ['Eclipse Growth OS', 'Eclipse Chat', 'Eclipse AI Hub', 'Eclipse Library', 'Hopson Sentinel'],
    decision: 'now', riskLevel: 'medium',
    risks: ['Untrusted content can attempt prompt injection', 'Drafts can contain unsupported claims or wrong recipients', 'Broad connectors can expose confidential data'],
    quickStart: ['Start with one read-only workflow and synthetic fixtures', 'Add evidence, budget, timeout, cancel and approval states', 'Measure approved output and keep external actions disabled'],
    description: 'Evidence-first operating model that turns a marketing carousel of 45 AI automations into bounded, measurable Eclipse workflows.',
    features: ['45-scenario triage', 'Cross-project ownership', 'Approval boundary', 'UI state checklist', 'Outcome metrics'],
    audience: ['Product owners', 'Growth operators', 'Agent developers'],
    limitations: ['Not a connector implementation', 'Not permission for autonomous external actions', 'Legal and financial scenarios remain triage or draft only'],
    relatedTechnologies: ['Growth OS', 'MCP', 'Human approval', 'Provenance', 'Workflow receipts'],
    verifiedAt: '2026-08-20', reviewStatus: 'verified',
    source: { file: 'User carousel intake 2026-08-20', line: null, category: 'Eclipse automation playbook', subcategory: '45 bounded workflows' },
    guide: 'eclipse-automation-playbook-45', addedAt: '2026-08-20',
  },
  {
    id: 'prozavlly-frontend-motion-references', url: 'https://www.instagram.com/prozavlly/',
    title: 'Prozavlly · Frontend motion references', type: 'learn', category: 'Курсы и гайды', subcategory: 'Frontend UI inspiration',
    simpleDescription: 'Instagram-профиль с концептами mobile navigation и UI motion. Для Eclipse это direction board: каждый конкретный паттерн требует canonical source, license evidence, keyboard/touch/reduced-motion и performance QA до реализации.',
    useCases: ['Собирать mobile navigation references', 'Обсуждать interaction direction', 'Формировать оригинальные Eclipse prototypes'],
    platforms: ['Instagram', 'Web', 'Mobile UI'],
    license: 'Instagram content; no code, asset or composition reuse license established',
    licenseEvidence: [{ kind: 'official-source', label: 'Creator profile', url: 'https://www.instagram.com/prozavlly/' }],
    pricing: 'Public social content; linked products may have separate terms', access: { cost: 'free', signup: 'optional', runtime: 'cloud' },
    trust: 'community', trustReason: 'User-provided screenshots identify the profile, but Instagram did not expose the profile to automated verification on 20.08.2026.',
    projects: ['Eclipse Library', 'Eclipse Forge Landing', 'Eclipse Media', 'Eclipse DnD Forge'], decision: 'reference', riskLevel: 'medium',
    risks: ['No verified reuse license', 'Static concepts do not prove interaction quality', 'Liquid and blob effects can harm accessibility and performance'],
    quickStart: ['Save the interaction idea, not the screenshot or code', 'Find the canonical implementation and license', 'Build an original reduced-motion-safe prototype'],
    description: 'Community stream of experimental mobile navigation and interface motion used only for product direction.',
    features: ['Mobile navigation concepts', 'Glass surfaces', 'Motion inspiration'], audience: ['Product designers', 'Frontend developers'],
    limitations: ['Social posts are incomplete source evidence', 'No production code verification', 'No approved Eclipse code reuse'],
    relatedTechnologies: ['CSS', 'Mobile navigation', 'Interaction design', 'Reduced motion'], verifiedAt: null, reviewStatus: 'inferred',
    source: { file: 'User screenshots and profile URL 2026-08-20', line: null, category: 'Frontend motion references', subcategory: 'Mobile navigation' },
    guide: 'frontend-motion-reference-review-2026-08-20', addedAt: '2026-08-20',
  },
  {
    id: 'frontendjoe-ui-animation-references', url: 'https://www.instagram.com/frontendjoe/',
    title: 'FrontendJoe · UI animation references', type: 'learn', category: 'Курсы и гайды', subcategory: 'Frontend UI inspiration',
    simpleDescription: 'Community-профиль с короткими HTML/CSS/React примерами: glass footer, expandable sidebar и people-card accordion. Фрагменты полезны для обсуждения interaction, но hover-only и layout-heavy snippets нельзя переносить в Eclipse без самостоятельной реализации и QA.',
    useCases: ['Изучать sidebar and accordion interactions', 'Планировать Landing project showcase', 'Находить кандидатов для isolated prototypes'],
    platforms: ['Instagram', 'Web', 'React'],
    license: 'Instagram content; canonical repository and code reuse license must be established per example',
    licenseEvidence: [{ kind: 'official-source', label: 'Creator profile', url: 'https://www.instagram.com/frontendjoe/' }],
    pricing: 'Public social content; linked code or courses may use separate terms', access: { cost: 'free', signup: 'optional', runtime: 'cloud' },
    trust: 'community', trustReason: 'The user supplied screenshots and the profile URL; automated access returned an Instagram rate limit on 20.08.2026.',
    projects: ['Eclipse Forge Landing', 'Eclipse Library', 'Eclipse AI Hub', 'Hopson Sentinel'], decision: 'reference', riskLevel: 'medium',
    risks: ['Unknown snippet license and provenance', 'Hover-only patterns fail touch and keyboard', 'Height/flex/blur animation can cause layout and paint cost'],
    quickStart: ['Treat the post as a visual brief', 'Rebuild with semantic buttons, focus and touch states', 'Use transform/opacity or FLIP and test reduced motion'],
    description: 'Community frontend snippet stream used as an interaction reference, not a trusted component library.',
    features: ['Glass footer examples', 'Expandable sidebar', 'Horizontal card accordion'], audience: ['Design engineers', 'Frontend developers'],
    limitations: ['Incomplete snippets', 'No verified canonical repository', 'No approved Eclipse code reuse'],
    relatedTechnologies: ['React', 'CSS', 'WAAPI', 'FLIP', 'Accessibility'], verifiedAt: null, reviewStatus: 'inferred',
    source: { file: 'User screenshots and profile URL 2026-08-20', line: null, category: 'Frontend motion references', subcategory: 'Sidebar and accordion' },
    guide: 'frontend-motion-reference-review-2026-08-20', addedAt: '2026-08-20',
  },
];

const ids = new Set(doc.items.map((item) => item.id));
const urls = new Set(doc.items.map((item) => item.url.replace(/\/$/, '').toLowerCase()));
for (const record of records) {
  if (ids.has(record.id)) throw new Error(`Duplicate id: ${record.id}`);
  const normalizedUrl = record.url.replace(/\/$/, '').toLowerCase();
  if (urls.has(normalizedUrl)) throw new Error(`Duplicate URL: ${record.url}`);
  doc.items.push(record);
  ids.add(record.id);
  urls.add(normalizedUrl);
}
doc.totals.items = doc.items.length;
await writeFile(catalogUrl, `${JSON.stringify(doc, null, 2)}\n`, 'utf8');
console.log(`Added ${records.length} records; catalog now has ${doc.items.length} items.`);

