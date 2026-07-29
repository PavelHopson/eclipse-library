import { createHash } from 'node:crypto';

export function canonicalUrl(value) {
  try {
    const url = new URL(value);
    url.hash = '';
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref', 'erid'].forEach((key) => url.searchParams.delete(key));
    url.hostname = url.hostname.toLowerCase().replace(/^www\./, '');
    url.pathname = url.pathname.replace(/\/+$/, '') || '/';
    return url.toString().replace(/\/$/, '');
  } catch {
    return String(value || '').trim().toLowerCase().replace(/#.*$/, '').replace(/\/$/, '');
  }
}

export const plain = (value) => String(value || '')
  .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  .replace(/[*`]/g, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

export function slug(value) {
  return plain(value).toLowerCase().replace(/[^a-zа-яё0-9]+/gi, '-').replace(/^-|-$/g, '').slice(0, 90);
}

function isSeparator(line) {
  return /^\s*\|?[\s:|-]+\|?\s*$/.test(line) && line.includes('-') && line.includes('|');
}

export function parseCatalogRows(markdown) {
  const lines = markdown.split('\n');
  const rows = [];
  let category = '';
  let subcategory = '';
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const h2 = line.match(/^##\s+(?!#)(.+?)\s*$/);
    const h3 = line.match(/^###\s+(.+?)\s*$/);
    if (h2) {
      category = plain(h2[1]).replace(/^\p{Extended_Pictographic}+\s*/u, '');
      subcategory = '';
      continue;
    }
    if (h3) {
      subcategory = plain(h3[1]);
      continue;
    }
    const trimmed = line.trim();
    if (!category || !trimmed.startsWith('|') || isSeparator(trimmed)) continue;
    if (lines[index + 1] && isSeparator(lines[index + 1].trim())) continue;
    const cells = trimmed.split('|').slice(1, -1).map((cell) => cell.trim());
    const first = cells[0] || '';
    const link = first.match(/\[([^\]]+)\]\(([^)\s]+)\)/);
    if (!link) continue;
    const rawUrl = link[2];
    const url = /^https?:/i.test(rawUrl)
      ? rawUrl
      : `https://github.com/PavelHopson/eclipse-library/blob/master/${rawUrl.replace(/^\.?\//, '')}`;
    if (/img\.shields\.io|cdn\.rawgit\.com/i.test(url)) continue;
    const description = plain(cells.slice(1).filter((cell) => cell && cell !== '—' && !/img\.shields\.io\/github\/stars/.test(cell)).join(' · '));
    rows.push({
      title: plain(link[1]),
      url,
      canonicalUrl: canonicalUrl(url),
      description,
      raw: line,
      line: index + 1,
      index,
      category,
      subcategory,
      isDrop: /подборка/i.test(category),
      isRisk: /grey|high-risk|risk:|reference-only|не использовать|uncensored|⚠️|🚨|пиратств/i.test(`${category} ${subcategory} ${line}`),
      isGithub: /^https:\/\/github\.com\//i.test(url),
    });
  }
  return { lines, rows };
}

export function chooseCanonicalRows(rows, reviewedUrls = new Set()) {
  const best = new Map();
  rows.forEach((row) => {
    const score = (reviewedUrls.has(row.canonicalUrl) ? 10000 : 0) + (!row.isDrop ? 1000 : 0) + row.description.length;
    const current = best.get(row.canonicalUrl);
    if (!current || score > current.score) best.set(row.canonicalUrl, { row, score });
  });
  return new Map([...best].map(([url, value]) => [url, value.row]));
}

export function sourceHash(readme, detailsText) {
  const normalizedReadme = readme.replace(/\r\n/g, '\n');
  const normalizedDetails = detailsText.replace(/\r\n/g, '\n');
  return createHash('sha256').update(normalizedReadme).update('\0').update(normalizedDetails).digest('hex');
}
