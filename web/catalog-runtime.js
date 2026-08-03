/* Structured catalog adapter. The browser never parses README.md for records. */
(() => {
  'use strict';

  const reservedGithubRoutes = new Set(['collections', 'events', 'features', 'login', 'marketplace', 'new', 'orgs', 'search', 'settings', 'sponsors', 'topics', 'users']);

  function canonicalUrl(value) {
    try {
      const url = new URL(value);
      url.hash = '';
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref', 'erid'].forEach((key) => url.searchParams.delete(key));
      url.hostname = url.hostname.toLowerCase().replace(/^www\./, '');
      url.pathname = url.pathname.replace(/\/+$/, '') || '/';
      return url.toString().replace(/\/$/, '');
    } catch {
      return String(value || '').trim().toLowerCase().replace(/#.*$/, '').replace(/\/$/, '');
    }
  }

  function githubRepoKey(value) {
    try {
      const url = new URL(String(value).replace(/[.,;:!?]+$/, ''));
      if (url.hostname.toLowerCase().replace(/^www\./, '') !== 'github.com') return null;
      const [owner, rawRepo] = url.pathname.split('/').filter(Boolean);
      const repo = rawRepo?.replace(/\.git$/i, '');
      return owner && repo && !reservedGithubRoutes.has(owner.toLowerCase()) ? `${owner.toLowerCase()}/${repo.toLowerCase()}` : null;
    } catch {
      return null;
    }
  }

  function groupsFromItems(items, slug) {
    const categories = new Map();
    [...items].sort((a, b) => a.catalogOrder - b.catalogOrder || a.title.localeCompare(b.title, 'ru')).forEach((item) => {
      const label = item.category || 'Без категории';
      let category = categories.get(label);
      if (!category) {
        category = { id: slug(label) || `category-${categories.size + 1}`, icon: '', label, intro: '', subs: [], subMap: new Map() };
        categories.set(label, category);
      }
      const subLabel = item.subcategory || label;
      let subcategory = category.subMap.get(subLabel);
      if (!subcategory) {
        subcategory = { title: subLabel === label ? '' : subLabel, intro: '', resources: [] };
        category.subMap.set(subLabel, subcategory);
        category.subs.push(subcategory);
      }
      let starsRepo = null;
      try {
        const url = new URL(item.url);
        if (url.hostname.toLowerCase().replace(/^www\./, '') === 'github.com') {
          const [owner, repo] = url.pathname.split('/').filter(Boolean);
          if (owner && repo) starsRepo = `${owner}/${repo.replace(/\.git$/i, '')}`;
        }
      } catch {}
      subcategory.resources.push({
        ...item,
        rawText: item.simpleDescription,
        descHtml: '',
        starsRepo,
        risk: item.type === 'grey' || item.riskLevel === 'high',
      });
    });
    return [...categories.values()].map(({ subMap, ...category }) => category);
  }

  window.EclipseCatalogRuntime = Object.freeze({ canonicalUrl, githubRepoKey, groupsFromItems });
})();
