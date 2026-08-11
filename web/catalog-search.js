/* Deterministic Russian and English query planner for the catalog. */
(() => {
  'use strict';

  const GROUPS = [
    ['ии', 'ai', 'нейросеть', 'нейросети', 'модель', 'модели', 'llm'],
    ['локально', 'локальный', 'локальная', 'локальную', 'локальные', 'local', 'self-hosted', 'self-host'],
    ['бесплатно', 'бесплатный', 'бесплатная', 'free', 'freemium', 'open-source', 'opensource'],
    ['изображение', 'изображения', 'изображений', 'картинка', 'картинки', 'image', 'images'],
    ['видео', 'video', 'ролик', 'ролики'],
    ['аудио', 'audio', 'голос', 'voice', 'tts', 'озвучка'],
    ['поиск', 'search', 'research', 'исследование', 'исследования'],
    ['безопасность', 'security', 'privacy', 'приватность', 'аудит'],
    ['автоматизация', 'автоматизировать', 'automation', 'workflow', 'agent', 'агент'],
    ['магазин', 'ecommerce', 'e-commerce', 'storefront', 'commerce'],
    ['продвижение', 'marketing', 'growth', 'smm', 'seo', 'контент'],
  ];
  const STOPWORDS = new Set(['для', 'под', 'или', 'на', 'в', 'во', 'без', 'с', 'со', 'и', 'по', 'из', 'к', 'как', 'нужен', 'нужна', 'нужно', 'хочу', 'найти']);

  function normalize(value) {
    return String(value || '')
      .toLocaleLowerCase('ru')
      .replace(/ё/g, 'е')
      .replace(/[^\p{L}0-9+#.-]+/gu, ' ')
      .trim();
  }

  function tokens(value) {
    return normalize(value).split(/\s+/).filter((token) => token && !STOPWORDS.has(token)).slice(0, 16);
  }

  function oneEditAway(left, right) {
    if (Math.abs(left.length - right.length) > 1) return false;
    let i = 0;
    let j = 0;
    let edits = 0;
    while (i < left.length && j < right.length) {
      if (left[i] === right[j]) {
        i += 1;
        j += 1;
        continue;
      }
      edits += 1;
      if (edits > 1) return false;
      if (left.length > right.length) i += 1;
      else if (right.length > left.length) j += 1;
      else {
        i += 1;
        j += 1;
      }
    }
    return edits + Number(i < left.length || j < right.length) <= 1;
  }

  function includesToken(text, words, token) {
    if (token.length <= 3) return words.includes(token);
    if (text.includes(token)) return true;
    return token.length >= 5 && words.some((word) => Math.abs(word.length - token.length) <= 1 && oneEditAway(word, token));
  }

  function createQueryPlan(value) {
    const direct = tokens(value);
    const related = new Set();
    const clauses = direct.map((token) => {
      const group = GROUPS.find((items) => items.includes(token));
      const alternatives = group || [token];
      alternatives.forEach((item) => {
        if (!direct.includes(item)) related.add(item);
      });
      return alternatives;
    });
    return Object.freeze({
      raw: String(value || '').trim(),
      direct,
      clauses,
      related: [...related].slice(0, 5),
    });
  }

  function matches(haystack, plan) {
    if (!plan.direct.length) return true;
    const text = normalize(haystack);
    const words = text.split(/\s+/);
    return plan.clauses.every((alternatives) => alternatives.some((token) => includesToken(text, words, token)));
  }

  window.EclipseCatalogSearch = Object.freeze({ createQueryPlan, matches, normalize });
})();
