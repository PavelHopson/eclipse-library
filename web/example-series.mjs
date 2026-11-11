// Серии примеров галереи. Отдельно от example-categories.mjs: тот модуль байт-в-байт общий с editor-api.
const text = example => [example?.description, example?.check].filter(Boolean).join(' ');
const isErida = example => /^erida-/.test(String(example?.id ?? '')) || /^Эрида:/.test(String(example?.title ?? ''));
export const exampleSeries = [
  ['erida', 'Эрида', isErida],
  ['seasons', 'Сезоны', example => isErida(example) && /Сезонная серия/i.test(text(example))],
  ['brands', 'Как у брендов', example => isErida(example) && /как у брендов/i.test(text(example))],
  ['travel', 'Путешествия', example => isErida(example) && /Серия «Путешествия»/.test(text(example))],
  ['streams', 'Стримы', example => isErida(example) && /Серия «Стримы»/.test(text(example))],
  ['catalog', 'Идеи из каталогов', example => /Идея из каталога/i.test(text(example))]
];
export const validSeries = value => value === '' || exampleSeries.some(([id]) => id === value);
export function filterBySeries(examples, series = '') {
  const match = exampleSeries.find(([id]) => id === series)?.[2];
  return match ? examples.filter(match) : examples;
}
export function seriesCounts(examples) {
  return Object.fromEntries(exampleSeries.map(([id, , match]) => [id, examples.filter(match).length]));
}
export const PAGE_SIZE = 24;
