import { readFile, writeFile } from 'node:fs/promises';

const catalogUrl = new URL('../catalog/resources.json', import.meta.url);
const internalIds = new Set([
  '6-промптов-для-языка-github-com',
  '9-промптов-для-презентаций-github-com',
  'ai-code-shield-щит-github-com',
  'anti-ai-text-6-промптов-github-com',
  'claude-finance-6-prompts-github-com',
  'cua-для-device-qa-claude-code-github-com',
  'feedback-protocols-6-промптов-github-com',
  'finance-15-md-github-com',
  'humanize-rewriter-github-com',
  'july-2026-project-integration-github-com',
  'lyra-prompt-optimizer-github-com',
  'open-design-codex-пошаговая-шпаргалка-github-com',
  'photo-restoration-prompt-github-com',
  'resume-boost-3-md-github-com',
  'resume-toolkit-7-промптов-github-com',
  'skeptical-verifier-github-com',
  'travel-hacking-10-github-com',
  'веб-утилиты-кураторский-каталог-github-com',
  'настройки-камеры-iphone-для-контента-github-com',
]);

const reviewed = {
  'hy-world-2-0-github-com': ['Tencent HY-World 2.0 Community License; use is territorially excluded in the EU, UK and South Korea', 'https://github.com/Tencent-Hunyuan/HY-World-2.0/blob/main/License.txt'],
  'auto-prompt-github-com': ['LGPL-3.0-or-later', 'https://github.com/AIDotNet/auto-prompt/blob/main/LICENSE'],
  'memory-lancedb-github-com': ['MIT', 'https://github.com/openclaw/openclaw/blob/main/LICENSE'],
  'saleor-storefront-github-com': ['FSL-1.1-ALv2 (source-available; converts to Apache-2.0 under the license schedule)', 'https://github.com/saleor/storefront/blob/main/LICENSE'],
  'стартер-astro-github-com': ['MIT', 'https://github.com/withastro/astro/blob/main/LICENSE'],
  'job-ops-github-com': ['AGPL-3.0 with Commons Clause v1.0; selling the software or a substantially derived paid service is prohibited', 'https://github.com/DaKheera47/job-ops/blob/main/LICENSE'],
  'torbot-github-com': ['GPL-3.0-only', 'https://github.com/DedSecInside/TorBot/blob/dev/LICENSE.md'],
  'awesome-free-apps-github-com': ['CC-BY-NC-SA-4.0; non-commercial content license', 'https://github.com/Axorax/awesome-free-apps/blob/main/LICENSE'],
  'minersearch-github-com': ['Custom disclaimer and telemetry notice; no explicit permission to copy, modify or redistribute was found', 'https://github.com/BlendLog/MinerSearch/blob/master/LICENSE.MD'],
  'modly-github-com': ['MIT', 'https://github.com/lightningpixel/modly/blob/main/LICENSE'],
  'openshorts-github-com': ['MIT for the main repository except cloud/, which uses a separate OpenShorts Commercial License', 'https://github.com/mutonby/openshorts/blob/main/LICENSE'],
  'autoskill-github-com': ['CC-BY-NC-4.0; non-commercial content license', 'https://github.com/midudev/autoskills/blob/main/LICENSE'],
  'agentic-project-management-github-com': ['MPL-2.0', 'https://github.com/sdi2200262/agentic-project-management/blob/main/LICENSE'],
  'midrags-sff-github-com': ['GPL-3.0-or-later', 'https://github.com/Midrags/SFF/blob/main/LICENSE'],
  'pi-hole-docker-github-com': ['EUPL-1.2 for current project code; pre-3.0 commits retain their earlier licenses', 'https://github.com/pi-hole/docker-pi-hole/blob/master/LICENSE'],
  'repo-github-com': ['AGPL-3.0-only', 'https://github.com/PurpleDoubleD/locally-uncensored/blob/master/LICENSE'],
  'sqz-github-com': ['Elastic-2.0 (source-available; managed-service and license-key restrictions apply)', 'https://github.com/ojuschugh1/sqz/blob/main/LICENSE'],
  'destructive-command-guard-github-com': ['Custom MIT-derived license with an additional OpenAI/Anthropic exclusion rider; not standard MIT', 'https://github.com/Dicklesworthstone/destructive_command_guard/blob/main/LICENSE'],
  'prompts-chat-github-com': ['Dual license: MIT for source/site-authored content and CC0-1.0 for prompt data', 'https://github.com/f/prompts.chat/blob/main/LICENSE'],
  'pclink-github-com': ['Dual license: AGPL-3.0 for compliant open-source/network use or a separate BYTEDz commercial license', 'https://github.com/BYTEDz/PCLink/blob/main/LICENSE'],
};

const sourceText = await readFile(catalogUrl, 'utf8');
const newline = sourceText.includes('\r\n') ? '\r\n' : '\n';
const catalog = JSON.parse(sourceText);
const seen = new Set();

for (const item of catalog.items) {
  if (internalIds.has(item.id)) {
    item.license = 'Авторский редакционный материал Eclipse Forge; внешние источники и встроенные материалы сохраняют собственные права и Terms';
    item.licenseEvidence = [{
      kind: 'license',
      label: 'Eclipse Library editorial ownership boundary',
      url: 'https://github.com/PavelHopson/eclipse-library#license',
    }];
    item.reviewStatus = 'verified';
    item.verifiedAt = '2026-08-17';
    seen.add(item.id);
  }
  const review = reviewed[item.id];
  if (review) {
    item.license = review[0];
    item.licenseEvidence = [{
      kind: 'license',
      label: 'Official repository license file reviewed 2026-08-17',
      url: review[1],
    }];
    item.reviewStatus = 'verified';
    item.verifiedAt = '2026-08-17';
    seen.add(item.id);
  }
}

const expected = new Set([...internalIds, ...Object.keys(reviewed)]);
const missing = [...expected].filter((id) => !seen.has(id));
if (missing.length) throw new Error(`License review batch references missing items: ${missing.join(', ')}`);

const output = JSON.stringify(catalog, null, 2).replace(/\n/g, newline) + newline;
await writeFile(catalogUrl, output, 'utf8');
console.log(`Applied ${seen.size} evidence-backed license reviews.`);
