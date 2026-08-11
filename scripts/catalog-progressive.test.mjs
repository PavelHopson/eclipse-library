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
  const searchScript = html.indexOf('catalog-search.js');
  const appScript = html.indexOf('app.js');
  assert.ok(cardScript > 0 && editorialScript > cardScript && progressiveScript > editorialScript && inspectorScript > progressiveScript && searchScript > inspectorScript && appScript > searchScript);
  const navigatorCss = fs.readFileSync(path.join(root, 'web', 'navigator.css'), 'utf8');
  assert.match(navigatorCss, /\.catalog-inspector::-webkit-scrollbar \{[^}]*display: none;[^}]*\}/);
  assert.match(navigatorCss, /scrollbar-width: none;/);
  assert.match(navigatorCss, /data-catalog-layout="compact"/);
  assert.match(app, /ensureInspectorSelection\(visibleCards\)/);
  assert.doesNotMatch(fs.readFileSync(path.join(root, 'web', 'catalog-card.js'), 'utf8'), /shields\.io/);
});
