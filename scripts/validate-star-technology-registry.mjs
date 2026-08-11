import fs from 'node:fs';

const root = new URL('../', import.meta.url);
const registry = JSON.parse(fs.readFileSync(new URL('web/star-technology-registry.json', root), 'utf8'));
const catalog = JSON.parse(fs.readFileSync(new URL('web/catalog-index.json', root), 'utf8'));
const errors = [];

const lifecycleIds = new Set((registry.lifecycles || []).map((item) => item.id));
const productIds = new Set((registry.products || []).map((item) => item.id));
const capabilityIds = new Set((registry.capabilities || []).map((item) => item.id));
const sourceIds = new Set((registry.sources || []).map((item) => item.id));
const catalogById = new Map((catalog.items || []).map((item) => [item.id, item]));
const priorities = new Set(['P0', 'P1', 'P2']);
const executions = new Set(['local', 'self-host', 'cloud', 'hybrid']);
const approvals = new Set(['read-only', 'confirm-required', 'manual-only']);
const benchmarkStatuses = new Set(['required', 'planned', 'passed', 'not-applicable']);
const riskLevels = new Set(['low', 'medium', 'high']);
const sensitiveKey = /^(api[-_]?key|secret|password|cookie|access[-_]?token|refresh[-_]?token|private[-_]?url|raw[-_]?prompt|client[-_]?payload)$/i;

function requiredString(value, path) {
  if (typeof value !== 'string' || !value.trim()) errors.push(`${path} is required.`);
}

function safeHttpsUrl(value, path) {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') errors.push(`${path} must use HTTPS.`);
    if (url.username || url.password) errors.push(`${path} must not include credentials.`);
  } catch {
    errors.push(`${path} must be valid.`);
  }
}

function scanSensitiveKeys(value, path = 'registry') {
  if (!value || typeof value !== 'object') return;
  for (const [key, nested] of Object.entries(value)) {
    if (sensitiveKey.test(key)) errors.push(`${path}.${key} must not be published.`);
    scanSensitiveKeys(nested, `${path}.${key}`);
  }
}

function uniqueById(items, path) {
  const ids = new Set();
  for (const [index, item] of (items || []).entries()) {
    requiredString(item?.id, `${path}[${index}].id`);
    if (item?.id && !/^[a-z0-9-]+$/.test(item.id)) errors.push(`${path}[${index}].id must be a safe slug.`);
    if (ids.has(item?.id)) errors.push(`${path}[${index}].id duplicates ${item.id}.`);
    ids.add(item?.id);
  }
}

if (registry.schemaVersion !== 1) errors.push('schemaVersion must be 1.');
if (!Number.isFinite(Date.parse(registry.updatedAt))) errors.push('updatedAt must be a valid date.');
if (registry.policy?.onlyVerifiedExternalSources !== true) errors.push('onlyVerifiedExternalSources must be true.');
if (registry.policy?.noAutomaticInstallation !== true) errors.push('noAutomaticInstallation must be true.');
if (registry.policy?.approvalTimeout !== 'deny') errors.push('approvalTimeout must be deny.');
if (registry.policy?.mutatingRequiresAdminApproval !== true) errors.push('mutating actions must require admin approval.');
if (registry.policy?.destructiveRequiresAdminApprovalAndRecoveryPlan !== true) errors.push('destructive actions must require approval and recovery plan.');
if (registry.policy?.runtimeHealthIsReportedSeparately !== true) errors.push('runtime health must be reported separately.');
if (registry.policy?.readOnlyMayRunAutomatically !== true) errors.push('read-only policy must be explicit.');
scanSensitiveKeys(registry);

for (const [path, items] of [['lifecycles', registry.lifecycles], ['products', registry.products], ['capabilities', registry.capabilities], ['sources', registry.sources], ['entries', registry.entries]]) {
  if (!Array.isArray(items) || !items.length) errors.push(`${path} must be a non-empty array.`);
  uniqueById(items, path);
}

for (const [index, capability] of (registry.capabilities || []).entries()) {
  requiredString(capability.name, `capabilities[${index}].name`);
  requiredString(capability.outcome, `capabilities[${index}].outcome`);
  if (!productIds.has(capability.productId)) errors.push(`capabilities[${index}].productId is unknown.`);
}

for (const [index, source] of (registry.sources || []).entries()) {
  const path = `sources[${index}]`;
  requiredString(source.title, `${path}.title`);
  safeHttpsUrl(source.url, `${path}.url`);
  if (source.kind !== 'external-reference') errors.push(`${path}.kind must be external-reference.`);
  if (source.reviewStatus !== 'verified') errors.push(`${path} must be verified.`);
  if (!Number.isFinite(Date.parse(source.verifiedAt))) errors.push(`${path}.verifiedAt must be valid.`);
  if (!riskLevels.has(source.riskLevel)) errors.push(`${path}.riskLevel is invalid.`);
  if (source.decision !== 'reference') errors.push(`${path}.decision must remain reference.`);
  if (!Array.isArray(source.documents) || !source.documents.length) errors.push(`${path}.documents must be non-empty.`);
  for (const [documentIndex, document] of (source.documents || []).entries()) {
    requiredString(document.label, `${path}.documents[${documentIndex}].label`);
    safeHttpsUrl(document.url, `${path}.documents[${documentIndex}].url`);
  }
}

for (const [index, entry] of (registry.entries || []).entries()) {
  const path = `entries[${index}]`;
  for (const field of ['title', 'role', 'owner', 'targetService', 'fallback', 'nextStep']) requiredString(entry[field], `${path}.${field}`);
  if (!productIds.has(entry.productId)) errors.push(`${path}.productId is unknown.`);
  if (!capabilityIds.has(entry.capabilityId)) errors.push(`${path}.capabilityId is unknown.`);
  const capability = (registry.capabilities || []).find((item) => item.id === entry.capabilityId);
  if (capability && capability.productId !== entry.productId) errors.push(`${path}.capabilityId belongs to another product.`);
  if (!priorities.has(entry.priority)) errors.push(`${path}.priority is invalid.`);
  if (!lifecycleIds.has(entry.lifecycle)) errors.push(`${path}.lifecycle is invalid.`);
  if (!executions.has(entry.execution)) errors.push(`${path}.execution is invalid.`);
  if (!approvals.has(entry.approval)) errors.push(`${path}.approval is invalid.`);
  if (!Array.isArray(entry.risks) || !entry.risks.length || entry.risks.some((risk) => typeof risk !== 'string' || !risk.trim())) errors.push(`${path}.risks must be a non-empty string array.`);
  if (!benchmarkStatuses.has(entry.benchmark?.status)) errors.push(`${path}.benchmark.status is invalid.`);
  requiredString(entry.benchmark?.qualityMetric, `${path}.benchmark.qualityMetric`);
  if (entry.benchmark?.lastRunAt !== null && !Number.isFinite(Date.parse(entry.benchmark?.lastRunAt))) errors.push(`${path}.benchmark.lastRunAt must be a date or null.`);
  if (entry.benchmark?.status === 'passed') {
    requiredString(entry.benchmark.runId, `${path}.benchmark.runId`);
    safeHttpsUrl(entry.benchmark.evidenceUrl, `${path}.benchmark.evidenceUrl`);
    if (!entry.benchmark.metrics || typeof entry.benchmark.metrics !== 'object' || Array.isArray(entry.benchmark.metrics) || !Object.keys(entry.benchmark.metrics).length) errors.push(`${path}.benchmark.metrics must be non-empty when passed.`);
    if (!Number.isFinite(Date.parse(entry.benchmark.lastRunAt))) errors.push(`${path}.benchmark.lastRunAt is required when passed.`);
  }
  if (!entry.source || !['catalog', 'internal', 'external'].includes(entry.source.kind)) errors.push(`${path}.source.kind is invalid.`);
  if (entry.source?.kind === 'catalog') {
    const catalogItem = catalogById.get(entry.source.ref);
    if (!catalogItem) errors.push(`${path}.source.ref is missing from catalog-index.json.`);
    else {
      if (catalogItem.reviewStatus !== 'verified') errors.push(`${path}.source.ref must point to a verified catalog item.`);
      if (catalogItem.agentEligibility?.installAllowed !== false) errors.push(`${path}.source.ref must keep direct install disabled.`);
      if (catalogItem.type === 'grey' && (!['candidate', 'reference', 'blocked'].includes(entry.lifecycle) || entry.approval !== 'manual-only')) errors.push(`${path}: grey catalog sources must remain candidate/reference/blocked and manual-only.`);
    }
  }
  if (entry.source?.kind === 'external') {
    if (!sourceIds.has(entry.source.ref)) errors.push(`${path}.source.ref is unknown.`);
    if (entry.lifecycle !== 'reference' || entry.approval !== 'manual-only') errors.push(`${path}: external sources must remain reference and manual-only.`);
  }
  if (entry.source?.kind === 'internal') {
    requiredString(entry.source.title, `${path}.source.title`);
    if (!/^guides\/[a-z0-9-]+\.md$/.test(entry.source.href || '')) errors.push(`${path}.source.href must point to a local guide.`);
    else if (!fs.existsSync(new URL(entry.source.href, root))) errors.push(`${path}.source.href does not exist.`);
  }
  if (entry.lifecycle === 'production' && entry.benchmark?.status !== 'passed') errors.push(`${path}: production requires a passed benchmark with evidence.`);
  if (entry.lifecycle === 'blocked' && entry.approval !== 'manual-only') errors.push(`${path}: blocked entries must be manual-only.`);
}

for (const productId of productIds) {
  if (!(registry.entries || []).some((entry) => entry.productId === productId)) errors.push(`${productId} has no registry entries.`);
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log(`Validated ${registry.entries.length} Star technology decisions across ${registry.products.length} products.`);
