import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const progressiveSource = fs.readFileSync(path.join(root, 'web', 'catalog-progressive.js'), 'utf8');
const context = { window: {} };
vm.runInNewContext(progressiveSource, context, { filename: 'catalog-progressive.js' });
const progressive = context.window.EclipseCatalogProgressive;
const inspectorSource = fs.readFileSync(path.join(root, 'web', 'catalog-inspector.js'), 'utf8');
const inspectorContext = { window: {}, URL, encodeURIComponent };
vm.runInNewContext(inspectorSource, inspectorContext, { filename: 'catalog-inspector.js' });
const inspector = inspectorContext.window.EclipseCatalogInspector;
const reviewSource = fs.readFileSync(path.join(root, 'web', 'catalog-review.js'), 'utf8');
const reviewContext = { window: {}, URL };
vm.runInNewContext(reviewSource, reviewContext, { filename: 'catalog-review.js' });
const review = reviewContext.window.EclipseCatalogReview;

test('initial catalog page stays inside the 36-card DOM budget', () => {
  const items = Array.from({ length: 560 }, (_, index) => ({ index }));
  assert.equal(progressive.take(items, 36).length, 36);
  assert.deepEqual([...progressive.take(items, -5)], []);
});

test('filter transitions detach stale cards and mount only visible cards', () => {
  const removed = [];
  const items = Array.from({ length: 72 }, (_, index) => ({
    index,
    node: index < 36 ? { isConnected: true, remove: () => removed.push(index) } : null,
  }));
  progressive.detach(items);
  assert.deepEqual(removed, Array.from({ length: 36 }, (_, index) => index));

  const mounted = [];
  const target = { appendChild: (node) => mounted.push(node.index) };
  const visible = progressive.take(items.slice(36), 36);
  progressive.mount(visible, () => target, (item) => ({ index: item.index }));
  assert.deepEqual(mounted, Array.from({ length: 36 }, (_, index) => index + 36));
});

test('inspector exposes evidence-first data and blocks unsafe source URLs', () => {
  const resource = {
    id: 'safe-tool', title: 'Safe Tool', url: 'https://example.com/tool', type: 'tool', trust: 'verified',
    simpleDescription: 'Проверяемый инструмент.', decision: 'now', riskLevel: 'low', risks: ['Проверить permissions.'],
    useCases: ['Локальный тест.'], quickStart: ['Начать в sandbox.'], projects: ['Eclipse AI Hub'],
    runtime: 'local', cost: 'free', signup: 'none', license: 'MIT', evidence: [{ url: 'https://example.com/docs' }],
    reviewStatus: 'verified', verifiedAt: '2026-08-10', licenseInfo: { label: 'MIT', requiresReview: false },
    linkHealth: { status: 'ok' },
  };
  const model = inspector.createInspectorModel(resource, {
    types: { tool: 'Инструмент' }, trust: { verified: 'Проверено' }, linkHealth: { ok: 'Работает', unchecked: 'Не проверено' },
    decisions: { now: 'Внедрить сейчас', reference: 'Reference' }, risks: { low: 'Низкий риск', medium: 'Средний риск' },
    runtime: { local: 'Локально', unknown: 'Не проверено' }, cost: { free: 'Бесплатно', unknown: 'Не проверено' },
    signup: { none: 'Без регистрации', unknown: 'Не проверено' },
  });
  assert.equal(model.sourceHref, 'https://example.com/tool');
  assert.equal(model.decision, 'Внедрить сейчас');
  assert.equal(model.evidenceCount, 1);
  assert.equal(model.reviewStatus, 'Проверено редактором');
  assert.equal(model.licenseStatus, 'Условия проверены');
  assert.match(model.verifiedAt, /2026/);
  assert.equal(inspector.safeHttpUrl('javascript:alert(1)'), '');
  assert.equal(inspector.safeHttpUrl('file:///etc/passwd'), '');
  assert.equal(inspector.createInspectorModel({ ...resource, linkHealth: { status: 'blocked' } }).sourceHref, '');
});

test('review packet stays local, fail closed and requires every gate', () => {
  const resource = {
    id: 'safe-tool', title: 'Safe Tool', url: 'https://example.com/tool', reviewStatus: 'inferred',
    decision: 'roadmap', riskLevel: 'medium', licenseInfo: { label: 'MIT', requiresReview: false },
    evidence: [{ url: 'https://example.com/docs' }, { url: 'javascript:alert(1)' }],
  };
  const draft = review.emptyDraft(resource.id);
  draft.outcome = 'approve';
  assert.equal(review.isReady(draft), false);
  review.CHECKS.forEach(({ id }) => { draft.checks[id] = true; });
  draft.note = '<img src=x onerror=alert(1)>\nKeep evidence intact.';
  assert.equal(review.isReady(draft), true);

  const packet = review.createReviewPacket(resource, draft, '2026-08-12T10:00:00.000Z');
  assert.equal(packet.authority, 'local-review-only');
  assert.equal(packet.catalogMutationAllowed, false);
  assert.equal(packet.review.ready, true);
  assert.equal(packet.review.note, draft.note);
  assert.equal(packet.schemaVersion, 'eclipse-library.review-packet.v2');
  assert.equal(packet.preview.autoApply, false);
  assert.equal(packet.preview.autoMerge, false);
  assert.equal(packet.preview.autoDeploy, false);
  assert.match(packet.preview.command, /--base <full-commit-sha>/);
  assert.deepEqual([...packet.resource.evidenceUrls], ['https://example.com/docs']);
  assert.match(packet.nextGate, /full git diff/);
  assert.equal(review.safeHttpUrl('file:///etc/passwd'), '');
  const blockedPacket = review.createReviewPacket({ ...resource, linkHealth: { status: 'blocked' } }, draft);
  assert.equal(blockedPacket.resource.url, '');
  assert.equal(blockedPacket.resource.sourceBlocked, true);
});

test('app wires lazy descriptors and modules before the main bundle', () => {
  const app = fs.readFileSync(path.join(root, 'web', 'app.js'), 'utf8');
  const html = fs.readFileSync(path.join(root, 'web', 'index.html'), 'utf8');
  assert.match(app, /const PAGE_SIZE = 36;/);
  assert.match(app, /node: null,/);
  assert.match(app, /progressiveRuntime\.mount\(visibleCards/);
  assert.doesNotMatch(app, /c\.node\.hidden/);

  const cardScript = html.indexOf('catalog-card.js');
  const editorialScript = html.indexOf('catalog-editorial.js');
  const progressiveScript = html.indexOf('catalog-progressive.js');
  const inspectorScript = html.indexOf('catalog-inspector.js');
  const reviewScript = html.indexOf('catalog-review.js');
  const searchScript = html.indexOf('catalog-search.js');
  assert.match(html, /catalog-review\.js\?v=2/);
  assert.match(html, /review\.css\?v=2/);
  assert.match(reviewSource, /dataset\.reviewDownload/);
  const appScript = html.indexOf('app.js');
  assert.ok(cardScript > 0 && editorialScript > cardScript && progressiveScript > editorialScript && inspectorScript > progressiveScript && reviewScript > inspectorScript && searchScript > reviewScript && appScript > searchScript);
  const navigatorCss = fs.readFileSync(path.join(root, 'web', 'navigator.css'), 'utf8');
  assert.match(navigatorCss, /\.catalog-inspector::-webkit-scrollbar \{[^}]*display: none;[^}]*\}/);
  assert.match(navigatorCss, /scrollbar-width: none;/);
  assert.match(navigatorCss, /data-catalog-layout="compact"/);
  assert.match(app, /ensureInspectorSelection\(visibleCards\)/);
  assert.doesNotMatch(fs.readFileSync(path.join(root, 'web', 'catalog-card.js'), 'utf8'), /shields\.io/);
});
test('adopts the versioned Eclipse Forge product visual profile locally', () => {
  const html = fs.readFileSync(path.join(root, 'web', 'index.html'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'web', 'styles.css'), 'utf8');
  const tokens = JSON.parse(fs.readFileSync(path.join(root, 'web', 'assets', 'eclipse-forge.tokens.json'), 'utf8'));

  assert.equal(tokens.schemaVersion, 'eclipse-forge.visual-system.v1');
  assert.ok(tokens.intensityProfiles.includes('product'));
  assert.match(html, /styles\.css\?v=29/);
  assert.match(html, /assets\/fonts\/inter-cyrillic\.woff2/);
  assert.doesNotMatch(html + css, /fonts\.googleapis\.com|fonts\.gstatic\.com/);
  assert.match(css, /--bg: #05070a;/);
  assert.match(css, /--gold: #d4af37;/);
  assert.match(css, /--display: 'Outfit'/);
  assert.doesNotMatch(css, /forgeOrbitPresence|animation:[^;]*infinite/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /\.forge-cursor-light--gold/);
  assert.match(css, /\(hover: hover\) and \(pointer: fine\) and \(min-width: 1024px\)/);
  assert.match(html, /cursor-light\.js\?v=1/);
  const cursor = fs.readFileSync(path.join(root, 'web', 'cursor-light.js'), 'utf8');
  assert.match(cursor, /requestAnimationFrame/);
  assert.match(cursor, /prefers-reduced-motion: reduce/);
  assert.match(cursor, /pointermove/);
});
