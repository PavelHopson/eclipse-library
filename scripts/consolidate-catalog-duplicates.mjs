import { readFile, writeFile } from 'node:fs/promises';
import { canonicalUrl, chooseCanonicalRows, parseCatalogRows } from './catalog-source.mjs';

const root = new URL('../', import.meta.url);
const readmeUrl = new URL('README.md', root);
const detailsUrl = new URL('web/catalog-details.json', root);
const [markdown, detailsText] = await Promise.all([readFile(readmeUrl, 'utf8'), readFile(detailsUrl, 'utf8')]);
const { lines, rows } = parseCatalogRows(markdown);
const reviewed = new Set(JSON.parse(detailsText).map((item) => canonicalUrl(item.url)));
const keep = chooseCanonicalRows(rows, reviewed);
const remove = rows.filter((row) => keep.get(row.canonicalUrl) !== row);

if (!process.argv.includes('--write')) {
  console.log(`Found ${remove.length} duplicate rows in ${new Set(remove.map((row) => row.canonicalUrl)).size} canonical URL groups. Use --write to consolidate them.`);
  process.exit(0);
}

const removeIndexes = new Set(remove.map((row) => row.index));
const output = lines.filter((_, index) => !removeIndexes.has(index)).join('\n');
await writeFile(readmeUrl, output, 'utf8');
console.log(`Removed ${remove.length} duplicate rows; retained the strongest entry for each canonical URL.`);
