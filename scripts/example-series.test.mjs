import test from 'node:test';
import assert from 'node:assert/strict';
import { filterBySeries, seriesCounts, validSeries, exampleSeries } from '../web/example-series.mjs';
const examples = [
  { id: 'erida-2026-11-11-p48', title: 'Эрида: Новый год', description: 'Сезонная серия: уют.' },
  { id: 'erida-2026-11-11-p54', title: 'Эрида: Бег', description: 'Съёмка «как у брендов» без брендов.' },
  { id: 'erida-2026-11-11-p60', title: 'Эрида: Крыша', description: 'Идея из каталога Banana Prompts, промпт наш.' },
  { id: 'library-1', title: 'Обложка', description: 'Идея из каталога, без персонажа.' },
  { id: 'starmarket-1', title: 'Карточка товара', description: 'Сезонная серия витрины' }
];
test('series filter: Erida, seasons and brands only for Erida, catalog ideas for everyone', () => {
  assert.equal(filterBySeries(examples, 'erida').length, 3);
  assert.deepEqual(filterBySeries(examples, 'seasons').map(e => e.id), ['erida-2026-11-11-p48']);
  assert.deepEqual(filterBySeries(examples, 'brands').map(e => e.id), ['erida-2026-11-11-p54']);
  assert.equal(filterBySeries(examples, 'catalog').length, 2);
  assert.equal(filterBySeries(examples, '').length, 5);
  assert.equal(filterBySeries(examples, 'unknown').length, 5);
  assert.deepEqual(seriesCounts(examples), { erida: 3, seasons: 1, brands: 1, catalog: 2 });
  assert(validSeries('') && validSeries('erida') && !validSeries('<x>'));
  assert.equal(new Set(exampleSeries.map(([id]) => id)).size, exampleSeries.length);
});
