import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { canonicalUrl, chooseCanonicalRows, parseCatalogRows, plain, slug, sourceHash } from './catalog-source.mjs';

const root = new URL('../', import.meta.url);
const outputUrl = new URL('web/catalog-index.json', root);
const PROJECT_RULES = [
  ['Eclipse Chat', /eclipse chat/], ['Eclipse AI Hub', /eclipse ai hub|ai hub/],
  ['Hopson Sentinel', /hopson sentinel|sentinel/], ['Eclipse DnD Forge', /dnd forge|eclipse dnd/],
  ['Eclipse Forge Landing', /eclipseforge landing|eclipse forge landing|landing/],
  ['Eclipse Media', /eclipse media/], ['Shotforge', /shotforge/], ['Text2Image', /text2image/],
  ['Educator-AI', /educator-ai/], ['oh-my-claudecode', /oh-my-claudecode|\bomc\b/],
  ['Eclipse Library', /eclipse library|\blibrary\b/],
];

function inferType(row) {
  const text = `${row.category} ${row.subcategory} ${row.title} ${row.description}`.toLowerCase();
  if (row.isRisk) return 'grey';
  if (/интернет-магазин|e-?commerce|storefront|checkout|commerce|платеж|магазин/.test(text)) return 'shop';
  if (/промпт|prompt/.test(text)) return 'prompt';
  if (/skill|скилл/.test(text)) return 'skill';
  if (/оркестрац|агент|agent|мультиагент/.test(text)) return 'agent';
  if (/model|модел|\bllm\b|huggingface/.test(text)) return 'model';
  if (/\bapi\b|прокси|free tier|api key/.test(text)) return 'api';
  if (/обучени|гайд|курс|learning|computer science/.test(text)) return 'learn';
  if (/media|медиа|download|видео|изображени|генерац/.test(text)) return 'media';
  if (/privacy|opsec|self-host|security|безопасност/.test(text)) return 'privacy';
  if (/наши проекты/.test(row.category.toLowerCase())) return 'ours';
  if (row.isDrop) return 'drop';
  return row.isGithub ? 'oss' : 'tool';
}

function inferPlatforms(text) {
  const rules = [['Windows', /windows|powershell/], ['macOS', /macos|mac os|macbook/], ['Linux', /linux|ubuntu|debian/], ['Android', /android/], ['iOS', /\bios\b|iphone|ipad/], ['CLI', /\bcli\b|terminal|командн.*строк/], ['Self-host', /self-host|локальн|local-first|docker/], ['API', /\bapi\b/], ['Cloud', /cloud|облач/], ['Web', /\bweb\b|browser|браузер|сайт/]];
  const found = rules.filter(([, rule]) => rule.test(text)).map(([name]) => name);
  return found.length ? found : ['Web'];
}

function inferLicense(text) {
  const match = text.match(/\b(AGPL-3\.0|GPL-3\.0|Apache-2\.0|Apache 2\.0|MIT|CC BY 4\.0|BSD-3-Clause|MPL-2\.0)\b/i);
  if (match) return match[1].replace(/Apache 2\.0/i, 'Apache-2.0');
  if (/нет (?:явной )?лицензии|лицензия .*отсутств/i.test(text)) return 'Не указана';
  return 'Нужно проверить в официальном источнике';
}

function inferAccess(platforms, text, isGithub) {
  const local = platforms.some((value) => ['Windows', 'macOS', 'Linux', 'CLI', 'Self-host'].includes(value));
  const cloud = platforms.some((value) => ['Cloud', 'API', 'Web'].includes(value));
  const runtime = local && cloud ? 'hybrid' : platforms.includes('Self-host') ? 'self-host' : local ? 'local' : cloud ? 'cloud' : 'unknown';
  const hasFree = isGithub || /бесплат|free|open.source/.test(text);
  const hasPaid = /платн|paid|подпис|тариф|billing|credits?/.test(text.replace(/бесплат\w*/g, ''));
  const cost = hasFree && hasPaid ? 'freemium' : hasFree ? 'free' : hasPaid ? 'paid' : 'unknown';
  const signup = /без регистрац|без аккаунт/.test(text) ? 'none' : /api key|аккаунт|регистрац|console|подписк/.test(text) ? 'required' : local && !cloud ? 'none' : 'unknown';
  return { cost, signup, runtime };
}

function description(row, type) {
  const source = row.description || `Материал из раздела «${row.subcategory || row.category}»`;
  const clipped = source.length > 360 ? `${source.slice(0, 357).replace(/\s+\S*$/, '')}…` : source;
  return `${row.title} — ${clipped}. Карточка помогает понять назначение ресурса и начать с небольшой безопасной проверки; условия использования ещё нужно сверить с официальным источником.`;
}

function inferredItem(row) {
  const context = plain(`${row.category} ${row.subcategory} ${row.description}`).toLowerCase();
  const type = inferType(row);
  const platforms = inferPlatforms(context);
  const riskLevel = row.isRisk ? 'high' : 'medium';
  return {
    id: slug(`${row.title}-${new URL(row.url).hostname}`), url: row.url, title: row.title, type,
    category: row.category, subcategory: row.subcategory || row.category,
    simpleDescription: description(row, type),
    useCases: [`Разобраться, подходит ли ${row.title} для вашей задачи`, 'Проверить возможности на небольшом тестовом сценарии до интеграции'],
    platforms, license: inferLicense(context),
    pricing: row.isGithub ? 'Исходный код доступен публично; hosting, модели и внешние API могут оплачиваться отдельно' : 'Актуальную стоимость нужно проверить на официальной странице',
    access: inferAccess(platforms, context, row.isGithub),
    trust: row.isRisk ? 'caution' : row.isGithub ? 'community' : 'unknown',
    trustReason: 'Запись структурирована автоматически из опубликованного описания. Официальный источник, лицензия и условия ещё не прошли отдельную редакторскую проверку.',
    projects: PROJECT_RULES.filter(([, rule]) => rule.test(context)).map(([name]) => name),
    decision: 'reference', riskLevel,
    risks: row.isRisk ? ['Есть признаки повышенного security, privacy или legal риска; не запускайте без ручного аудита и sandbox.'] : ['Лицензия, цена, permissions и обработка данных могут отличаться от краткого описания.'],
    verifiedAt: null,
    quickStart: ['Откройте официальный источник и проверьте владельца, лицензию и дату обновления.', 'Не передавайте secrets или рабочие данные; начните с пустого тестового проекта.', 'Сравните результат с текущим способом работы и только потом решайте об интеграции.'],
    reviewStatus: 'inferred',
    source: { file: 'README.md', line: row.line, category: row.category, subcategory: row.subcategory || null },
  };
}

export async function buildCatalogIndex() {
  const [readme, detailsText] = await Promise.all([readFile(new URL('README.md', root), 'utf8'), readFile(new URL('web/catalog-details.json', root), 'utf8')]);
  const details = JSON.parse(detailsText);
  const reviewed = new Map(details.map((item) => [canonicalUrl(item.url), item]));
  const { rows } = parseCatalogRows(readme);
  const best = chooseCanonicalRows(rows, new Set(reviewed.keys()));
  const items = [...best.values()].map((row) => {
    const inferred = inferredItem(row);
    const detail = reviewed.get(row.canonicalUrl);
    if (!detail) return inferred;
    return { ...inferred, ...detail, title: row.title, category: row.category, subcategory: row.subcategory || row.category, reviewStatus: 'verified', source: inferred.source };
  }).sort((a, b) => a.id.localeCompare(b.id, 'en'));
  return { schemaVersion: 1, sourceHash: sourceHash(readme, detailsText), totals: { all: items.length, verified: items.filter((item) => item.reviewStatus === 'verified').length, inferred: items.filter((item) => item.reviewStatus === 'inferred').length }, items };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const index = await buildCatalogIndex();
  const output = `${JSON.stringify(index, null, 2)}\n`;
  if (process.argv.includes('--check')) {
    const current = await readFile(outputUrl, 'utf8').catch(() => '');
    if (current !== output) { console.error('catalog-index.json is stale. Run node scripts/build-catalog-index.mjs.'); process.exitCode = 1; }
    else console.log(`Catalog index is current: ${index.totals.all} items (${index.totals.verified} verified, ${index.totals.inferred} inferred).`);
  } else {
    await writeFile(outputUrl, output, 'utf8');
    console.log(`Catalog index built: ${index.totals.all} items (${index.totals.verified} verified, ${index.totals.inferred} inferred).`);
  }
}
