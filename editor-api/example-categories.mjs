export const exampleCategories = [
  ['portrait', 'Портреты'], ['fashion', 'Мода и стиль'],
  ['product', 'Предметы и реклама'], ['cinema', 'Кино и сюжеты'],
  ['illustration', 'Иллюстрации и персонажи'], ['design', 'Дизайн и графика'],
  ['architecture', 'Архитектура и интерьер'], ['nature', 'Природа и пейзажи'],
  ['other', 'Другие идеи']
];
export const categoryLabel = value => exampleCategories.find(([id]) => id === value)?.[1] || 'Без категории';
export const validCategory = value => typeof value === 'string' && (value === '' || exampleCategories.some(([id]) => id === value));
export function filterExamples(examples, {query = '', product = '', category = ''} = {}) {
  const normalize = value => String(value ?? '').normalize('NFKC').toLocaleLowerCase('ru').replaceAll('ё', 'е');
  const words = normalize(query).trim().split(/\s+/).filter(Boolean);
  return examples.filter(example => (!product || example.project === product)
    && (!category || (category === 'uncategorized' ? !example.category : example.category === category))
    && words.every(word => normalize([example.title, example.project, example.description, example.prompt, categoryLabel(example.category)].join(' ')).includes(word)));
}
