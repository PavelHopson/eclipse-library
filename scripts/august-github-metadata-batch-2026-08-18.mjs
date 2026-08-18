import { readFile, writeFile } from 'node:fs/promises';

const metadataUrl = new URL('../web/github-metadata.json', import.meta.url);
const updates = [
  {
    key: 'firecrawl/pdf-inspector', state: 'active', url: 'https://github.com/firecrawl/pdf-inspector',
    pushedAt: '2026-08-18T14:38:19Z', updatedAt: '2026-08-18T15:44:47Z',
    licenseInfo: { name: 'MIT License', spdxId: 'MIT', url: 'https://api.github.com/repos/firecrawl/pdf-inspector/license' },
  },
  {
    key: 'itcaat/after-enter', state: 'active', url: 'https://github.com/itcaat/after-enter',
    pushedAt: '2026-08-02T07:53:14Z', updatedAt: '2026-08-10T18:17:36Z', licenseInfo: null,
  },
  {
    key: 'morpheapp/morphe-manager', state: 'active', url: 'https://github.com/MorpheApp/morphe-manager',
    pushedAt: '2026-08-18T15:53:41Z', updatedAt: '2026-08-18T15:52:45Z',
    licenseInfo: { name: 'GNU General Public License v3.0', spdxId: 'GPL-3.0', url: 'https://api.github.com/repos/morpheapp/morphe-manager/license' },
  },
  {
    key: 'thejoefin/text-grab', state: 'active', url: 'https://github.com/TheJoeFin/Text-Grab',
    pushedAt: '2026-08-12T01:12:39Z', updatedAt: '2026-08-18T03:31:40Z',
    licenseInfo: { name: 'MIT License', spdxId: 'MIT', url: 'https://api.github.com/repos/thejoefin/text-grab/license' },
  },
  {
    key: 'valleyofdoom/pc-tuning', state: 'active', url: 'https://github.com/valleyofdoom/PC-Tuning',
    pushedAt: '2026-08-16T22:20:09Z', updatedAt: '2026-08-18T15:16:38Z',
    licenseInfo: { name: 'GNU General Public License v3.0', spdxId: 'GPL-3.0', url: 'https://api.github.com/repos/valleyofdoom/pc-tuning/license' },
  },
];

const metadata = JSON.parse(await readFile(metadataUrl, 'utf8'));
const byKey = new Map((metadata.repositories || []).map((entry) => [entry.key, entry]));
for (const update of updates) byKey.set(update.key, update);
metadata.repositories = [...byKey.values()].sort((a, b) => a.key.localeCompare(b.key));
metadata.checkedAt = '2026-08-18T15:55:00.000Z';
metadata.totals = {
  repositories: metadata.repositories.length,
  active: metadata.repositories.filter((entry) => entry.state === 'active').length,
  archived: metadata.repositories.filter((entry) => entry.state === 'archived').length,
  disabled: metadata.repositories.filter((entry) => entry.state === 'disabled').length,
  unknown: metadata.repositories.filter((entry) => entry.state === 'unknown').length,
};
await writeFile(metadataUrl, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');
console.log(`Upserted ${updates.length} evidence-backed GitHub metadata records.`);
