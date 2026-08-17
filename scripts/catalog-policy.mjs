const SPDX_ALIASES = new Map([
  ['apache 2.0', 'Apache-2.0'],
  ['apache-2.0', 'Apache-2.0'],
  ['mit', 'MIT'],
  ['agpl-3.0-only', 'AGPL-3.0-only'],
  ['agpl-3.0', 'AGPL-3.0'],
  ['gpl-3.0-or-later', 'GPL-3.0-or-later'],
  ['gpl-3.0-only', 'GPL-3.0-only'],
  ['gpl-3.0', 'GPL-3.0'],
  ['lgpl-3.0-or-later', 'LGPL-3.0-or-later'],
  ['mpl-2.0', 'MPL-2.0'],
  ['eupl-1.2', 'EUPL-1.2'],
  ['elastic-2.0', 'Elastic-2.0'],
  ['bsd-3-clause', 'BSD-3-Clause'],
  ['cc-by-nc-sa-4.0', 'CC-BY-NC-SA-4.0'],
  ['cc-by-nc-4.0', 'CC-BY-NC-4.0'],
  ['cc by 4.0', 'CC-BY-4.0'],
  ['cc-by-4.0', 'CC-BY-4.0'],
  ['cc0 1.0', 'CC0-1.0'],
  ['cc0-1.0', 'CC0-1.0'],
]);

const UNKNOWN_LICENSE = /нужно проверить|не указана|не раскрыт|unknown|needs? verification/i;
const SERVICE_LICENSE = /условия (?:сайта|сервиса)|terms|saas|проприетарн|commercial/i;
const SOURCE_AVAILABLE = /source.available|functional source|open source license|business source/i;
const NON_COMMERCIAL_LICENSES = new Set(['CC-BY-NC-4.0', 'CC-BY-NC-SA-4.0']);
const SOURCE_AVAILABLE_LICENSES = new Set(['Elastic-2.0']);

export function dateFromCategory(value) {
  const text = String(value || '');
  const full = text.match(/(?<!\d)(\d{1,2})[.\-/](\d{1,2})[.\-/](20\d{2})(?!\d)/);
  if (full) {
    const rangePrefix = text.slice(0, full.index).match(/(?<!\d)(\d{1,2})(?:[.\-/](\d{1,2}))?\s*[–—-]\s*$/);
    const day = rangePrefix?.[1] || full[1];
    const month = rangePrefix?.[2] || full[2];
    return isoDate(full[3], month, day);
  }
  return null;
}

export function categoryWithoutDate(value) {
  return String(value || '')
    .replace(/^[\u200D\uFE0F\s]+/u, '')
    .replace(/\s*\((?=[^)]*\d{1,2}[.\-/]\d{1,2}[.\-/]20\d{2})[^)]*\)\s*$/u, '')
    .replace(/\s*\((?:\d{1,2}(?:[.\-/]\d{1,2})?\s*[–—-]\s*)?\d{1,2}[.\-/]\d{1,2}[.\-/]20\d{2}\)\s*$/u, '')
    .replace(/\s+(?:\d{1,2}(?:[.\-/]\d{1,2})?\s*[–—-]\s*)?\d{1,2}[.\-/]\d{1,2}[.\-/]20\d{2}\s*$/u, '')
    .trim();
}

function isoDate(year, month, day) {
  const result = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const parsed = new Date(`${result}T00:00:00Z`);
  return Number.isNaN(parsed.valueOf()) || parsed.toISOString().slice(0, 10) !== result ? null : result;
}

function spdxValuesFromText(value) {
  const text = String(value || '');
  return [...new Set([...SPDX_ALIASES].filter(([needle]) =>
    new RegExp(`(?:^|[^a-z0-9])${needle.replace(/[.]/g, '\\.')}(?:$|[^a-z0-9])`, 'i').test(text)
  ).map(([, spdx]) => spdx))];
}

export function normalizeLicense(item, repository) {
  const original = String(item.license || '').trim();
  const repoLicense = repository?.licenseInfo || null;
  const repoSpdx = repoLicense?.spdxId && repoLicense.spdxId !== 'NOASSERTION' ? repoLicense.spdxId : null;
  const declaredSpdx = spdxValuesFromText(original);
  const mixedTerms = declaredSpdx.length > 1 || (declaredSpdx.length > 0 && /OpenMDW|model weights|каждой.*модел|separate.*license|Commons Clause|additional rider|except.*directory|dual.license|commercial license/i.test(original));
  const spdx = mixedTerms ? null : declaredSpdx[0] || repoSpdx || null;
  const unknown = !original || UNKNOWN_LICENSE.test(original);
  const kind = mixedTerms
    ? 'custom'
    : spdx
      ? NON_COMMERCIAL_LICENSES.has(spdx)
        ? 'custom'
        : SOURCE_AVAILABLE_LICENSES.has(spdx)
          ? 'source-available'
          : 'open-source'
      : SOURCE_AVAILABLE.test(original)
        ? 'source-available'
        : SERVICE_LICENSE.test(original)
          ? 'service-terms'
          : unknown
            ? 'unknown'
            : 'custom';
  const status = spdx && repoLicense?.url
    ? 'source-declared'
    : item.reviewStatus === 'verified' && !unknown
      ? 'editor-reviewed'
      : 'unverified';
  const evidence = [];
  if (repoLicense?.url) evidence.push({ kind: 'license', label: `${repoSpdx || repoLicense.name || 'Repository'} license`, url: repoLicense.url });
  (item.licenseEvidence || []).forEach((entry) => {
    if (entry?.url && !evidence.some((current) => current.url === entry.url)) evidence.push(entry);
  });
  if (!evidence.length) evidence.push({ kind: 'official-source', label: 'Официальный источник; точные условия ещё нужно сверить', url: item.url });
  return {
    label: mixedTerms ? original : spdx || original || 'Лицензия не указана',
    original: original || null,
    spdx,
    kind,
    status,
    requiresReview: status === 'unverified',
    evidence,
  };
}

export function agentEligibility(item, repository) {
  const reasons = [];
  if (item.type === 'grey') reasons.push('grey-resource');
  if (item.decision === 'no') reasons.push('editorial-decision-no');
  if (item.riskLevel === 'high' && item.reviewStatus !== 'verified') reasons.push('unverified-high-risk');
  if (['archived', 'disabled'].includes(repository?.state)) reasons.push(`repository-${repository.state}`);
  try {
    if (new URL(String(item.url || '')).protocol !== 'https:') reasons.push('insecure-transport');
  } catch {
    reasons.push('invalid-source-url');
  }
  return { eligible: reasons.length === 0, reasons, installAllowed: false };
}

export function githubRepoKey(value) {
  try {
    const url = new URL(String(value || ''));
    if (url.hostname.toLowerCase().replace(/^www\./, '') !== 'github.com') return null;
    const [owner, repo] = url.pathname.split('/').filter(Boolean);
    return owner && repo ? `${owner.toLowerCase()}/${repo.replace(/\.git$/i, '').toLowerCase()}` : null;
  } catch {
    return null;
  }
}
