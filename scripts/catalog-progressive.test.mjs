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
  const appScript = html.indexOf('app.js');
  assert.ok(cardScript > 0 && editorialScript > cardScript && progressiveScript > editorialScript && appScript > progressiveScript);
});
