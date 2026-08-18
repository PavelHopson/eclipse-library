import { readFile, writeFile } from 'node:fs/promises';

async function replaceExact(path, replacements) {
  let text = await readFile(path, 'utf8');
  for (const [before, after] of replacements) {
    if (!text.includes(before)) throw new Error(`Expected text not found in ${path}: ${before.slice(0, 80)}`);
    text = text.replace(before, after);
  }
  await writeFile(path, text, 'utf8');
}

await replaceExact(new URL('../README.md', import.meta.url), [
  ['- 629 уникальных записей доступны пользователям.\n- 195 карточек прошли ручную редакторскую проверку.\n- 434 карточки честно помечены как `inferred` и ожидают углублённого review.\n- У 350 записей лицензия или условия уже нормализованы и подкреплены evidence.\n- 279 лицензий или наборов условий всё ещё требуют отдельной проверки.\n- 69 grey-ресурсов видны человеку как reference, но исключены из agent recommendations.\n- Всего 76 записей исключены из agent exports по risk, editorial, transport или repository policy; 553 доступны для agent consumers.\n- 348 записей получили отдельное поле `addedAt`; неизвестные даты не выдумываются.', '- 637 уникальных записей доступны пользователям.\n- 254 карточки прошли ручную редакторскую проверку.\n- 383 карточки честно помечены как `inferred` и ожидают углублённого review.\n- У 411 записей лицензия или условия уже нормализованы и подкреплены evidence.\n- 226 лицензий или наборов условий всё ещё требуют отдельной проверки; срочная очередь P1 закрыта.\n- 70 grey-ресурсов видны человеку как reference, но исключены из agent recommendations.\n- Всего 77 записей исключены из agent exports по risk, editorial, transport или repository policy; 560 доступны для agent consumers.\n- 356 записей получили отдельное поле `addedAt`; неизвестные даты не выдумываются.'],
  ['- [Discovery, review и provenance radar](guides/august-2026-discovery-review-security-radar.md)\n', '- [Discovery, review и provenance radar](guides/august-2026-discovery-review-security-radar.md)\n- [August 2026 research, privacy and tooling radar](guides/august-2026-research-privacy-tools-radar.md)\n'],
  ['- [GitHub Spec Kit: Eclipse Spec Gate](guides/github-spec-kit-eclipse-gate.md)\\n- [ChatGPT Work + Codex operating model](guides/chatgpt-work-codex-operating-model.md)\\n- [August 2026 harness, media and code radar](guides/august-2026-harness-media-code-radar.md)\\n- [Eclipse Repository Architecture Map Prompt](guides/repository-architecture-map.md)\\n- [Eclipse Forge Codex session tree](guides/eclipse-session-tree.md)', '- [GitHub Spec Kit: Eclipse Spec Gate](guides/github-spec-kit-eclipse-gate.md)\n- [ChatGPT Work + Codex operating model](guides/chatgpt-work-codex-operating-model.md)\n- [August 2026 harness, media and code radar](guides/august-2026-harness-media-code-radar.md)\n- [Eclipse Repository Architecture Map Prompt](guides/repository-architecture-map.md)\n- [Eclipse Forge Codex session tree](guides/eclipse-session-tree.md)'],
]);

await replaceExact(new URL('../ROADMAP.md', import.meta.url), [
  ['Последнее обновление: **17.08.2026**', 'Последнее обновление: **18.08.2026**'],
  ['`catalog/resources.json` — канонический structured catalog из 629 уникальных записей;', '`catalog/resources.json` — канонический structured catalog из 637 уникальных записей;'],
  ['в DOM создаются только первые 36 карточек вместо всех 629; mobile Inspector открывается как sheet.\n- `web/catalog-index.json` — production schema v2: 195 записей редакторски проверены,\n  434 честно помечены `inferred`, 348 имеют отдельный `addedAt`, даты удалены из category.\n- License layer: у 389 записей лицензия или условия нормализованы с evidence URL;\n  240 остаются в детерминированной manual-review очереди (P1: 14, P2: 190, P3: 36).\n- Agent policy: 553 записи доступны автоматическим consumers, 76 исключены fail closed;\n  все 69 grey-ресурсов скрыты от recommendations, direct install запрещён для всех записей.', 'в DOM создаются только первые 36 карточек вместо всех 637; mobile Inspector открывается как sheet.\n- `web/catalog-index.json` — production schema v2: 254 записи редакторски проверены,\n  383 честно помечены `inferred`, 356 имеют отдельный `addedAt`, даты удалены из category.\n- License layer: у 411 записей лицензия или условия нормализованы с evidence URL;\n  226 остаются в детерминированной manual-review очереди (P1: 0, P2: 190, P3: 36).\n- Agent policy: 560 записей доступны автоматическим consumers, 77 исключены fail closed;\n  все 70 grey-ресурсов скрыты от recommendations, direct install запрещён для всех записей.'],
  ['- [x] Исправить Coursera/Learn Harness audit semantics:', '- [x] Закрыть P1 license queue: проверить 14 приоритетных записей и снизить общий backlog\n      с 240 до 226. Отсутствие публичного grant у SkillUI/Atlas3D и запрет на извлечение\n      BuildCores зафиксированы как evidence-backed ограничения, а не как разрешение на reuse.\n- [x] Исправить Coursera/Learn Harness audit semantics:'],
  ['## Changelog\n', '## Changelog\n### 2026-08-18 — verified research radar and P1 license closure\n\n- Added eight non-duplicate records: Firecrawl PDF Inspector, Qwen3.8 Max, Qwen3.8-27B,\n  Porthole, After Enter, Text Grab, Morphe and PC-Tuning. Twelve existing records were\n  updated through the shared radar; the unsupported Claude watermark-removal claim was excluded.\n- Reviewed all 14 P1 license records from official product pages, terms, repositories and\n  model cards. The remaining queue is 226 items (P1: 0, P2: 190, P3: 36); direct install remains\n  forbidden and proprietary/no-grant records remain reference-only or blocked.\n- Linked the completed bounded rollout already present in AI Hub, Eclipse Media and Educator-AI:\n  opt-in GPT-5.6 routing, dry-run Music 3 benchmark and a local AI app-building learning track.\n  Live provider canaries, model execution and autonomous publication are still separate gates.\n\n'],
]);

const rootRoadmap = new URL('../../ROADMAP.md', import.meta.url);
let root = await readFile(rootRoadmap, 'utf8');
const rootEntry = '**Обновление 2026-08-18 (Library research radar + P1 license closure):**\nEclipse Library добавила 8 недублирующихся записей, обновила 12 существующих и исключила\nнеподтверждённый Claude watermark-removal сервис. Приоритетная license queue P1 закрыта:\n14 карточек получили official evidence и честные reuse boundaries; общий backlog 240 → 226.\nCatalog: 637 items, 254 verified, 560 agent-safe. Повторно проверены уже опубликованные rollout:\nAI Hub GPT-5.6 router — 105 Vitest + 51 Node tests, typecheck/build; Media benchmark — 7 focused\nbackend tests и frontend test/lint/build; Educator-AI — 6 tests, typecheck/build. Live model calls,\nprovider canary, untrusted installs и autonomous publication не выполнялись.\n';
if (!root.startsWith(rootEntry)) root = rootEntry + root;
await writeFile(rootRoadmap, root, 'utf8');

const memoryPath = new URL('../../MEMORY.md', import.meta.url);
let memory = await readFile(memoryPath, 'utf8');
const memoryEntry = '\n- **[2026-08-18]** Проверенный license status может означать запрет, а не разрешение: если\n  официальный источник не даёт публичный grant или Terms запрещают extraction/reuse, Library\n  фиксирует evidence-backed `reference/no-use`, не выдаёт open-source badge и не разрешает install.\n';
if (!memory.includes('**[2026-08-18]** Проверенный license status')) memory += memoryEntry;
await writeFile(memoryPath, memory, 'utf8');

console.log('Updated Library README/ROADMAP and ecosystem ROADMAP/MEMORY.');
