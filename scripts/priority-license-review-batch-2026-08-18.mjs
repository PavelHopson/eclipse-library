import { readFile, writeFile } from 'node:fs/promises';

const catalogPath = new URL('../catalog/resources.json', import.meta.url);
const catalog = JSON.parse(await readFile(catalogPath, 'utf8'));
const verifiedAt = '2026-08-18';

const reviews = {
  'skillui-skill-manager': {
    type: 'skill',
    license: 'No public repository or explicit source-code license grant was found on the official SkillUI product page as of 2026-08-18. The website copyright and published product terms govern access; the “open source” marketing label alone does not permit code reuse.',
    trust: 'official',
    trustReason: 'The product and its open-source claim are visible on the official site, but a public repository and SPDX license are not linked. The verified boundary is reference-only access, not permission to copy or install code.',
    riskLevel: 'high',
    risks: ['A marketing claim of open source is not a license grant.', 'A desktop skill manager can read agent configuration and local skill files; review permissions and update channels before any isolated pilot.'],
    licenseEvidence: [
      { kind: 'source', label: 'Official SkillUI product page', url: 'https://skillui.com/en' },
    ],
  },
  'atlas3d-atlas3d-space': {
    type: 'tool',
    license: 'Proprietary hosted educational service. The official page provides browser access but no public source-code, model-weight, content-reuse or commercial-output license grant. Treat uploaded GLB files and generated labels or quizzes under the site rules and the uploader’s own rights.',
    trust: 'official',
    trustReason: 'The official product page confirms the browser workflow. No reusable code or asset license is published there, so Eclipse may study the interaction pattern but must not copy implementation or hosted assets.',
    riskLevel: 'medium',
    risks: ['Uploaded 3D models may contain third-party or client IP.', 'AI labels and quizzes require teacher review and must not be treated as authoritative.'],
    licenseEvidence: [
      { kind: 'source', label: 'Official Atlas3D product page', url: 'https://atlas3d.space/' },
    ],
  },
  'buildcores-www-buildcores-com': {
    type: 'tool',
    license: 'Proprietary hosted service. BuildCores Terms prohibit copying, scraping, crawling, extracting, modifying or redistributing site content, product data and 3D assets without prior written permission. Its FAQ separately says the 3D models cannot be reused in other projects.',
    trust: 'official',
    trustReason: 'The service capabilities and restrictions are confirmed by the official site, Terms and FAQ. Eclipse may use the product as UX reference only and must build its own data and assets.',
    riskLevel: 'high',
    risks: ['Do not scrape product data or extract 3D models.', 'Compatibility and performance estimates are advisory and must not be presented as guaranteed hardware results.'],
    licenseEvidence: [
      { kind: 'terms', label: 'BuildCores Terms of Service', url: 'https://www.buildcores.com/terms' },
      { kind: 'source', label: 'BuildCores asset-use FAQ', url: 'https://www.buildcores.com/faq' },
    ],
  },
  'claude-max-для-oss-claude-com': {
    type: 'tool',
    license: 'Anthropic promotional subscription governed by the Claude for Open Source program conditions and applicable Claude consumer or commercial terms. It grants six months of Claude Max access to accepted applicants; it is not an open model or a transferable software license.',
    trust: 'official',
    trustReason: 'Anthropic’s official page confirms the eligibility thresholds, six-month Max 20x benefit and post-promotion billing behavior. Acceptance is discretionary and account credentials cannot be shared.',
    riskLevel: 'medium',
    risks: ['Eligibility and approval are not guaranteed.', 'A prior paid plan resumes at its prior rate after the promotion unless cancelled.', 'Repository or customer secrets still must not be pasted into a consumer account.'],
    licenseEvidence: [
      { kind: 'terms', label: 'Claude for Open Source program', url: 'https://claude.com/contact-sales/claude-for-oss' },
      { kind: 'terms', label: 'Anthropic Consumer Terms', url: 'https://www.anthropic.com/legal/consumer-terms' },
    ],
  },
  'fastai-course-fast-ai': {
    type: 'learn',
    license: 'The Practical Deep Learning course is publicly accessible at no charge, but the course landing page and fastai/course22 repository do not publish one blanket reuse license for all lessons, videos, notebooks and third-party materials. Each linked artifact keeps its own copyright or repository license.',
    trust: 'official',
    trustReason: 'The official course page confirms the curriculum and free learning path. Public access is not recorded as permission to republish the complete course, so Eclipse should link to it and create original exercises.',
    riskLevel: 'low',
    risks: ['Do not mirror course videos or copy lesson text wholesale.', 'Notebook dependencies and datasets require their own license and security review.'],
    licenseEvidence: [
      { kind: 'source', label: 'Official Practical Deep Learning course', url: 'https://course.fast.ai/' },
      { kind: 'source', label: 'Official course notebooks repository', url: 'https://github.com/fastai/course22' },
    ],
  },
  'hugging-face-learn-huggingface-co': {
    type: 'learn',
    license: 'The official Hugging Face LLM Course is released under Apache-2.0 with attribution, license link and change notice requirements. Individual models, datasets and external notebooks used by exercises retain their own licenses.',
    trust: 'official',
    trustReason: 'Hugging Face explicitly documents Apache-2.0 reuse for the course. This does not automatically cover third-party models or datasets linked from a lesson.',
    riskLevel: 'low',
    risks: ['Record the license of every model and dataset used in an Eclipse exercise.', 'Keep attribution and mark adapted lesson material.'],
    licenseEvidence: [
      { kind: 'license', label: 'Hugging Face LLM Course reuse notice', url: 'https://huggingface.co/learn/llm-course/chapter1/1' },
      { kind: 'source', label: 'Hugging Face Learn', url: 'https://huggingface.co/learn' },
    ],
  },
  'kuaishou-kling-ai-3': {
    license: 'Proprietary Kling AI service. Consumer Terms effective 21.04.2026 say that the user keeps applicable IP in Content, but commercial use of Output requires written permission from Kling AI and Kling attribution. The service receives a broad license to Input and Output and may use Content for product and model development. API, enterprise and regional contract terms must be confirmed before any production use.',
  },
  'learn-git-branching-learngitbranching-js-org': {
    type: 'learn',
    license: 'MIT for the official pcottle/learnGitBranching repository. Preserve the copyright and permission notice in redistributed copies; custom levels, translations and third-party assets may carry additional attribution requirements.',
    trust: 'official',
    trustReason: 'The official repository identifies MIT and is the source of the interactive tutorial. Eclipse may adapt concepts or code under MIT with notices, while its existing clean-room onboarding remains simpler and product-specific.',
    riskLevel: 'low',
    risks: ['Keep MIT attribution for copied code.', 'Do not imply that simulated Git commands modify a real repository.'],
    licenseEvidence: [
      { kind: 'repository', label: 'Official Learn Git Branching repository', url: 'https://github.com/pcottle/learnGitBranching' },
      { kind: 'license', label: 'MIT license', url: 'https://github.com/pcottle/learnGitBranching/blob/master/LICENSE.md' },
    ],
  },
  'longcat-video-avatar-1-5-huggingface-co': {
    type: 'media',
    license: 'MIT for the official meituan-longcat/LongCat-Video-Avatar-1.5 model weights and repository contributions, unless a file states otherwise. The license does not grant Meituan trademark or patent rights; source media, voices, faces and generated output still require consent and applicable rights.',
    trust: 'official',
    trustReason: 'The official Meituan model card explicitly states MIT for weights and contributions. The linked community Space is only a demo surface; the canonical model repository is the license authority.',
    riskLevel: 'high',
    risks: ['Audio-driven avatars create impersonation and biometric risks.', 'Use only consented or synthetic people and voices, with provenance and human approval.', 'A public demo Space is not an approved production processor.'],
    licenseEvidence: [
      { kind: 'model-card', label: 'Official LongCat-Video-Avatar 1.5 model card', url: 'https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5' },
      { kind: 'source', label: 'Community demo Space', url: 'https://huggingface.co/spaces/victor/LongCat-Video-Avatar-1.5' },
    ],
  },
  'moss-soundeffect-v2-0-huggingface-co': {
    type: 'model',
    license: 'Apache-2.0 according to the official OpenMOSS model card. Preserve the license and notices; verify licenses of the Qwen text encoder, DAC/VAE components, training inputs and any generated media used commercially.',
    trust: 'official',
    trustReason: 'The canonical Hugging Face model card declares Apache-2.0 and documents the model architecture and runtime. No model code is installed by Eclipse Library.',
    riskLevel: 'medium',
    risks: ['Generated sound can resemble protected recordings or brands.', 'Run model code only in an isolated environment with pinned revisions and resource limits.', 'Manual listening review and rights metadata are required before publication.'],
    licenseEvidence: [
      { kind: 'model-card', label: 'Official MOSS SoundEffect v2.0 model card', url: 'https://huggingface.co/OpenMOSS-Team/MOSS-SoundEffect-v2.0' },
      { kind: 'repository', label: 'Official MOSS-TTS repository', url: 'https://github.com/OpenMOSS/MOSS-TTS/tree/main/moss_soundeffect_v2' },
    ],
  },
  'notion-opus-4-8-free-app-notion-com': {
    type: 'tool',
    title: 'Notion AI — модельный доступ и лимиты',
    license: 'Proprietary Notion cloud service governed by Notion Terms, plan limits and AI policies. The historical “Opus 4.8 free” label is not a durable entitlement: current official help says free and Plus plans receive only a limited number of complimentary AI responses, while full Notion AI is on Business and Enterprise plans.',
    trust: 'official',
    trustReason: 'Current Notion documentation confirms plan-gated AI access and the ability to switch among available models, but does not guarantee permanent free access to one named model. The card is retained as a service reference, not a promotion.',
    riskLevel: 'medium',
    risks: ['Model availability and complimentary limits can change.', 'Workspace content may be sent to Notion AI and connected providers under workspace settings.', 'Do not use external connectors without least-privilege review.'],
    licenseEvidence: [
      { kind: 'terms', label: 'Notion Terms', url: 'https://www.notion.so/terms' },
      { kind: 'source', label: 'Notion AI official FAQ', url: 'https://www.notion.com/help/notion-ai-faqs' },
    ],
  },
  'qwen3-6-35b-opus-style-reasoning-gguf-huggingface-co': {
    type: 'model',
    license: 'Apache-2.0 is declared on the community GGUF and source fine-tune model cards. The training-data provenance includes community “Claude Opus-style” reasoning traces and is not independently audited by Eclipse; license metadata does not remove data, trademark or acceptable-use risk.',
    trust: 'community',
    trustReason: 'The model card identifies the community author, base model, Apache-2.0 metadata and a limited evaluation. It is not an Anthropic or Qwen official release and its distillation provenance requires separate review.',
    riskLevel: 'high',
    risks: ['Do not present the model as Claude, Anthropic or official Qwen.', 'Training trace provenance and permission are not independently established.', 'Run quantized weights only in a sandbox with hash pinning and benchmark against the official base model.'],
    licenseEvidence: [
      { kind: 'model-card', label: 'Community GGUF model card', url: 'https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF' },
      { kind: 'model-card', label: 'Source fine-tune model card', url: 'https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled' },
    ],
  },
  'qwen3-6-max-preview-chat-qwen-ai': {
    type: 'model',
    license: 'Hosted proprietary Qwen service. Qwen3.6-Max-Preview was announced as a preview available through Alibaba Cloud Model Studio; no open-weight or source-code license is granted by the release page. Service use is governed by Qwen or Alibaba Cloud terms applicable to the chosen endpoint.',
    trust: 'official',
    trustReason: 'The Qwen Team release confirms that the model is proprietary, hosted and still evolving. Vendor benchmark claims are not treated as independent evidence of production quality.',
    riskLevel: 'medium',
    risks: ['Preview behavior, availability, pricing and identifiers can change.', 'Do not send private code or customer data before regional terms, retention and subprocessors are approved.', 'Benchmark claims require an Eclipse-owned evaluation.'],
    licenseEvidence: [
      { kind: 'source', label: 'Official Qwen3.6-Max-Preview release', url: 'https://qwen.ai/blog?id=qwen3.6-max-preview' },
      { kind: 'terms', label: 'Qwen Terms of Service', url: 'https://qwen.ai/termsservice' },
      { kind: 'privacy', label: 'Qwen Privacy Policy', url: 'https://qwen.ai/privacypolicy' },
    ],
  },
  'tada-huggingface-co': {
    type: 'model',
    license: 'The official TADA collection uses per-artifact licenses rather than one collection-wide grant. HumeAI/tada-1b is published under the Llama 3.2 Community License, while HumeAI/tada-codec declares MIT. Select and record the exact artifact and revision before use.',
    trust: 'official',
    trustReason: 'The official Hume AI model cards expose distinct license metadata for the language model and codec. The catalog therefore does not collapse the collection into a misleading single open-source label.',
    riskLevel: 'high',
    risks: ['The Llama 3.2 Community License has conditions distinct from MIT.', 'Speech generation requires consent, anti-impersonation controls and provenance.', 'Pin the exact artifact and revision; never install directly from the catalog.'],
    licenseEvidence: [
      { kind: 'model-card', label: 'Official TADA 1B model card', url: 'https://huggingface.co/HumeAI/tada-1b' },
      { kind: 'model-card', label: 'Official TADA codec model card', url: 'https://huggingface.co/HumeAI/tada-codec' },
      { kind: 'source', label: 'Official TADA collection', url: 'https://huggingface.co/collections/HumeAI/tada' },
    ],
  },
};

const itemsById = new Map(catalog.items.map((item) => [item.id, item]));
for (const [id, review] of Object.entries(reviews)) {
  const item = itemsById.get(id);
  if (!item) throw new Error(`Missing catalog item: ${id}`);
  Object.assign(item, review, { reviewStatus: 'verified', verifiedAt });
}

catalog.totals.items = catalog.items.length;
await writeFile(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8');
console.log(`Reviewed ${Object.keys(reviews).length} priority catalog records.`);
