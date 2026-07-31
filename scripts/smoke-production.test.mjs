import assert from 'node:assert/strict';
import test from 'node:test';
import { assertMobileScrollGuard, extractVersionedAsset, validateBaseUrl } from './smoke-production.mjs';

test('restricts production smoke to the canonical HTTPS host', () => {
  assert.equal(validateBaseUrl('https://library.eclipse-forge.ru/path?q=1').href, 'https://library.eclipse-forge.ru/');
  assert.throws(() => validateBaseUrl('http://library.eclipse-forge.ru/'), /restricted/);
  assert.throws(() => validateBaseUrl('https://example.com/'), /restricted/);
  assert.throws(() => validateBaseUrl('https://user:secret@library.eclipse-forge.ru/'), /restricted/);
});

test('extracts only an explicitly versioned local asset', () => {
  assert.equal(extractVersionedAsset('<script src="app.js?v=24"></script>', 'app.js'), 'app.js?v=24');
  assert.throws(() => extractVersionedAsset('<script src="https://evil.example/app.js?v=24"></script>', 'app.js'), /not found/);
  assert.throws(() => extractVersionedAsset('<script src="app.js"></script>', 'app.js'), /not found/);
});

test('keeps mobile scrollspy horizontal and reserves scrollIntoView for desktop', () => {
  const validSource = `
    if (window.matchMedia('(max-width: 960px)').matches) {
      nav.scrollLeft += 20;
      return;
    }
    link.scrollIntoView({ block: 'nearest' });
  `;
  assert.doesNotThrow(() => assertMobileScrollGuard(validSource));

  const regressedSource = `
    if (window.matchMedia('(max-width: 960px)').matches) {
      nav.scrollLeft += 20;
      link.scrollIntoView({ block: 'nearest' });
      return;
    }
    link.scrollIntoView({ block: 'nearest' });
  `;
  assert.throws(() => assertMobileScrollGuard(regressedSource), /must not move the document vertically/);
});
