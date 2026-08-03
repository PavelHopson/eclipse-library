import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = new URL('../', import.meta.url);
const outputUrl = new URL('web/guides.json', root);

function plain(value) {
  return String(value || '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*`<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function buildGuidesManifest() {
  const directory = new URL('guides/', root);
  const names = (await readdir(directory)).filter((name) => name.endsWith('.md')).sort();
  const guides = await Promise.all(names.map(async (file) => {
    const markdown = await readFile(new URL(file, directory), 'utf8');
    const name = file.replace(/\.md$/, '');
    const title = plain(markdown.match(/^#\s+(.+)$/m)?.[1] || name);
    const quote = markdown.match(/^(>.*(?:\n>.*)*)/m)?.[1] || '';
    let description = plain(quote.replace(/^>\s?/gm, ' ').replace(/\n/g, ' '));
    const sentence = description.search(/\.\s/);
    if (sentence > 40 && sentence < 190) description = description.slice(0, sentence + 1);
    else if (description.length > 180) description = `${description.slice(0, 177).replace(/\s+\S*$/, '')}…`;
    return {
      name,
      title,
      description,
      modules: (markdown.match(/^##\s+(?:Модуль|Module)\s/gmi) || []).length,
      lessons: (markdown.match(/^###\s+(?:Урок|Lesson)\s/gmi) || []).length,
    };
  }));
  guides.sort((a, b) => b.modules - a.modules || a.title.localeCompare(b.title, 'ru'));
  return { schemaVersion: 1, totals: { guides: guides.length }, guides };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const manifest = await buildGuidesManifest();
  const output = `${JSON.stringify(manifest, null, 2)}\n`;
  if (process.argv.includes('--check')) {
    const current = await readFile(outputUrl, 'utf8').catch(() => '');
    if (current !== output) {
      console.error('guides.json is stale. Run node scripts/build-guides-manifest.mjs.');
      process.exitCode = 1;
    } else console.log(`Guides manifest is current: ${manifest.totals.guides} guides.`);
  } else {
    await writeFile(outputUrl, output, 'utf8');
    console.log(`Guides manifest built: ${manifest.totals.guides} guides.`);
  }
}
