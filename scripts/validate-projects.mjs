import fs from 'node:fs';

const file = new URL('../web/projects.json', import.meta.url);
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const statuses = new Set(['live', 'active', 'beta']);
const ids = new Set();
const urls = new Set();
const errors = [];

if (data.schemaVersion !== 1) errors.push('schemaVersion must be 1');
if (!Number.isFinite(Date.parse(data.updatedAt))) errors.push('updatedAt must be a valid date');
if (!Array.isArray(data.projects) || !data.projects.length) errors.push('projects must be a non-empty array');

for (const [index, project] of (data.projects || []).entries()) {
  const at = `projects[${index}]`;
  for (const field of ['id', 'name', 'kind', 'status', 'summary', 'problem']) {
    if (typeof project[field] !== 'string' || !project[field].trim()) errors.push(`${at}.${field} is required`);
  }
  if (!/^[a-z0-9-]+$/.test(project.id || '')) errors.push(`${at}.id must be kebab-case`);
  if (ids.has(project.id)) errors.push(`${at}.id duplicates ${project.id}`);
  ids.add(project.id);
  if (!statuses.has(project.status)) errors.push(`${at}.status is invalid`);
  for (const field of ['audience', 'tech']) {
    if (!Array.isArray(project[field]) || !project[field].length || project[field].some((item) => typeof item !== 'string' || !item.trim())) {
      errors.push(`${at}.${field} must be a non-empty string array`);
    }
  }
  if (!project.liveUrl && !project.repoUrl) errors.push(`${at} needs liveUrl or repoUrl`);
  for (const field of ['liveUrl', 'repoUrl']) {
    if (!project[field]) continue;
    try {
      const url = new URL(project[field]);
      if (url.protocol !== 'https:') errors.push(`${at}.${field} must use https`);
      const canonical = `${url.hostname.toLowerCase()}${url.pathname.replace(/\/$/, '')}`;
      if (urls.has(canonical)) errors.push(`${at}.${field} duplicates ${canonical}`);
      urls.add(canonical);
    } catch { errors.push(`${at}.${field} must be a valid URL`); }
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log(`Validated ${data.projects.length} Eclipse Forge projects.`);
