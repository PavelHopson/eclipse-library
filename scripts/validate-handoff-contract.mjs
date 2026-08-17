import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const [schema, example] = await Promise.all([
  readFile(new URL('contracts/eclipse-handoff-v1.schema.json', root), 'utf8').then(JSON.parse),
  readFile(new URL('contracts/eclipse-handoff-v1.example.json', root), 'utf8').then(JSON.parse),
]);

const errors = [];
const required = schema.required || [];
for (const key of required) {
  if (!(key in example)) errors.push(`missing required field: ${key}`);
}
if (example.schemaVersion !== schema.properties.schemaVersion.const) {
  errors.push('schemaVersion does not match the schema constant');
}
if (example.permissions?.read !== true) errors.push('permissions.read must be true');
for (const key of ['write', 'commit', 'push', 'deploy', 'externalActions']) {
  if (typeof example.permissions?.[key] !== 'boolean') errors.push(`permissions.${key} must be boolean`);
}
const acceptanceIds = new Set();
for (const item of example.acceptanceCriteria || []) {
  if (!/^AC-[0-9]{2,3}$/.test(item.id || '')) errors.push(`invalid acceptance id: ${item.id}`);
  if (acceptanceIds.has(item.id)) errors.push(`duplicate acceptance id: ${item.id}`);
  acceptanceIds.add(item.id);
}
const confidence = new Set(['verified', 'inferred', 'unknown']);
for (const fact of example.facts || []) {
  if (!confidence.has(fact.confidence)) errors.push(`invalid confidence: ${fact.confidence}`);
  for (const value of fact.evidenceUrls || []) {
    try { new URL(value); } catch { errors.push(`invalid evidence URL: ${value}`); }
  }
}
if (!(example.stopConditions || []).length) errors.push('at least one stop condition is required');
if (!(example.deliverables || []).length) errors.push('at least one deliverable is required');

if (errors.length) {
  console.error(`Handoff contract validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Handoff contract validation passed: ${required.length} required fields, ${acceptanceIds.size} acceptance criteria.`);
