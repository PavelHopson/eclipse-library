/* Eclipse Library — client-side directory over the curated README.
   No build, no framework. Fetches README.md, parses md tables, renders. */
(() => {
  'use strict';

  const REPO = 'PavelHopson/eclipse-library';
  const RAW = `https://raw.githubusercontent.com/${REPO}/master/README.md`;
  const REPO_URL = `https://github.com/${REPO}`;

  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const slug = (s) => s.toLowerCase().replace(/[^\wа-яё]+/gi, '-').replace(/^-+|-+$/g, '').slice(0, 60);

  // ---- markdown inline → safe-ish HTML ----
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function absUrl(u) {
    if (/^https?:\/\//.test(u)) return u;
    if (u.startsWith('#')) return REPO_URL + '/blob/master/README.md' + u;
    return `${REPO_URL}/blob/master/${u.replace(/^\.?\//, '')}`;
  }
  function inline(md) {
    let s = esc(md || '');
    // images ![alt](url) → drop (badges handled separately); keep nothing
    s = s.replace(/!\[[^\]]*\]\([^)]+\)/g, '');
    // links [text](url)
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) =>
      `<a href="${absUrl(u)}" target="_blank" rel="noopener">${t}</a>`);
    // bold **x**
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // inline code `x`
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    return s.replace(/^\s*[·—-]\s*/, '').trim();
  }

  // ---- parser ----
  function parse(md) {
    const lines = md.split('\n');
    const isSep = (l) => /^\s*\|?[\s:|-]+\|?\s*$/.test(l) && l.includes('-') && l.includes('|');
    const cats = [];
    let cat = null, sub = null;

    const ensureSub = () => { if (!sub) { sub = { title: '', resources: [] }; if (cat) cat.subs.push(sub); } };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const h2 = line.match(/^##\s+(?!#)(.+?)\s*$/);
      const h3 = line.match(/^###\s+(.+?)\s*$/);

      if (h2) {
        const full = h2[1].trim();
        const first = full.split(/\s+/)[0];
        const hasIcon = /\p{Extended_Pictographic}|[←-➿⬀-⯿]/u.test(first);
        const icon = hasIcon ? first : '';
        const label = (hasIcon ? full.slice(first.length).trim() : full);
        if (/^Содержание$/i.test(label)) { cat = null; sub = null; continue; }
        cat = { id: slug(label) || `c${cats.length}`, icon, label, subs: [] };
        cats.push(cat); sub = null; continue;
      }
      if (h3 && cat) {
        const t = h3[1].trim();
        sub = { title: t, resources: [] }; cat.subs.push(sub); continue;
      }
      if (!cat) continue;

      const t = line.trim();
      if (t.startsWith('|')) {
        if (isSep(t)) continue;
        if (lines[i + 1] && isSep(lines[i + 1].trim())) continue; // header row
        const cells = t.split('|').slice(1, -1).map((c) => c.trim());
        if (!cells.length) continue;
        const res = parseRow(cells, t, cat, sub);
        if (res) { ensureSub(); sub.resources.push(res); }
      }
    }
    return cats.filter((c) => c.subs.some((s) => s.resources.length));
  }

  function parseRow(cells, raw, cat, sub) {
    const head = cells[0];
    const bold = head.match(/^\*\*([^*]+)\*\*/);
    const link = head.match(/\[([^\]]+)\]\(([^)\s]+)\)/);
    let title = bold ? bold[1] : (link ? link[1] : head.replace(/[*`]/g, '').trim());
    title = title.replace(/[*`]/g, '').trim();
    if (!title || title === '—') return null;
    let url = link ? link[2] : null;
    if (url && !/^https?:/.test(url)) url = absUrl(url);

    const stars = raw.match(/img\.shields\.io\/github\/stars\/([\w.-]+)\/([\w.-]+)/);
    const starsRepo = stars ? `${stars[1]}/${stars[2]}` : null;

    const descCells = cells.slice(1).filter((c) =>
      c && c !== '—' && !/img\.shields\.io\/github\/stars/.test(c));
    const descHtml = inline(descCells.join(' · '));

    const ctx = `${cat.label} ${sub ? sub.title : ''} ${raw}`;
    const risk = /grey|high-risk|uncensored|⚠️|🚨|🃏|пиратств/i.test(ctx);

    return { title, url, descHtml, starsRepo, risk };
  }

  // ---- render ----
  const cards = []; // {node, text, sub, cat}
  function render(cats) {
    const nav = $('#nav'), results = $('#results');
    nav.innerHTML = ''; results.innerHTML = '';
    let total = 0;

    cats.forEach((cat) => {
      const cnt = cat.subs.reduce((a, s) => a + s.resources.length, 0);
      total += cnt;

      const a = el('a'); a.href = `#${cat.id}`;
      a.innerHTML = `<span class="ico">${cat.icon || '•'}</span><span class="label">${esc(cat.label)}</span><span class="cnt">${cnt}</span>`;
      nav.appendChild(a);

      const section = el('section', 'cat'); section.id = cat.id;
      const head = el('div', 'cat-head');
      head.innerHTML = `<h2>${cat.icon ? cat.icon + ' ' : ''}${esc(cat.label)}</h2><span class="cat-cnt">${cnt}</span>`;
      section.appendChild(head);

      cat.subs.forEach((s) => {
        if (!s.resources.length) return;
        const subWrap = el('div', 'sub');
        if (s.title) subWrap.appendChild(el('div', '', `<h3>${esc(s.title.replace(/[*`]/g, ''))}</h3>`).firstChild);
        const grid = el('div', 'grid');
        s.resources.forEach((r) => {
          const card = el('article', 'card' + (r.risk ? ' risk' : ''));
          const titleRow = el('div', 'card-title');
          if (r.url) {
            titleRow.innerHTML = `<a href="${r.url}" target="_blank" rel="noopener">${esc(r.title)}</a>` +
              `<svg class="ext" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>`;
          } else {
            titleRow.innerHTML = `<span class="noname">${esc(r.title)}</span>`;
          }
          card.appendChild(titleRow);
          card.appendChild(el('div', 'desc', r.descHtml));

          const meta = el('div', 'card-meta');
          if (r.starsRepo) {
            const img = el('img');
            img.loading = 'lazy'; img.alt = 'stars';
            img.src = `https://img.shields.io/github/stars/${r.starsRepo}?style=flat&color=8b5cf6&labelColor=14161f&logo=github&logoColor=white`;
            meta.appendChild(img);
          }
          if (r.risk) meta.appendChild(el('span', 'tag risk-tag', '⚠ risk'));
          if (r.url) {
            try { meta.appendChild(el('span', 'tag dom', new URL(r.url).hostname.replace(/^www\./, ''))); } catch (e) {}
          }
          if (meta.children.length) card.appendChild(meta);

          grid.appendChild(card);
          cards.push({ node: card, text: (r.title + ' ' + card.querySelector('.desc').textContent).toLowerCase(), sub: subWrap, cat: section });
        });
        subWrap.appendChild(grid);
        section.appendChild(subWrap);
      });
      results.appendChild(section);
    });

    // stats
    $('#stats').innerHTML =
      `<div class="stat"><b>${total}</b><span>находок</span></div>` +
      `<div class="stat"><b>${cats.length}</b><span>категорий</span></div>` +
      `<div class="stat"><b>${cats.filter(c => /Подборка/i.test(c.label)).length}</b><span>подборок</span></div>`;
    $('#status').hidden = true;
    scrollSpy();
  }

  // ---- search ----
  let timer;
  function onSearch(q) {
    q = q.trim().toLowerCase();
    let visible = 0;
    cards.forEach((c) => {
      const show = !q || c.text.includes(q);
      c.node.hidden = !show;
      if (show) visible++;
    });
    // hide empty subs/cats
    document.querySelectorAll('.sub').forEach((s) => {
      s.hidden = !s.querySelector('.card:not([hidden])');
    });
    document.querySelectorAll('.cat').forEach((s) => {
      s.hidden = !s.querySelector('.card:not([hidden])');
    });
    document.querySelectorAll('#nav a').forEach((a) => {
      const sec = document.getElementById(a.getAttribute('href').slice(1));
      a.hidden = sec && sec.hidden;
    });
    $('#hero').style.display = q ? 'none' : '';
    const empty = $('#empty');
    empty.hidden = !(q && visible === 0);
    if (!empty.hidden) $('#emptyQ').textContent = q;
  }

  // ---- scrollspy ----
  function scrollSpy() {
    const links = [...document.querySelectorAll('#nav a')];
    const map = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((a) => a.classList.remove('active'));
          const a = map.get(e.target.id); if (a) a.classList.add('active');
        }
      });
    }, { rootMargin: '-100px 0px -70% 0px' });
    document.querySelectorAll('.cat').forEach((s) => obs.observe(s));
  }

  // ---- boot ----
  async function load() {
    let md;
    try {
      const r = await fetch('README.md', { cache: 'no-cache' });
      if (!r.ok) throw 0;
      md = await r.text();
    } catch (e) {
      try {
        const r = await fetch(RAW, { cache: 'no-cache' });
        md = await r.text();
      } catch (e2) {
        const s = $('#status'); s.className = 'status err';
        s.innerHTML = `Не удалось загрузить библиотеку. <a href="${REPO_URL}" target="_blank" rel="noopener">Открыть на GitHub →</a>`;
        return;
      }
    }
    try { render(parse(md)); }
    catch (e) {
      $('#status').className = 'status err';
      $('#status').textContent = 'Ошибка разбора README: ' + e.message;
    }
  }

  // ---- events ----
  const search = $('#search');
  search.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => onSearch(search.value), 120); });
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== search) { e.preventDefault(); search.focus(); }
    if (e.key === 'Escape' && document.activeElement === search) { search.value = ''; onSearch(''); search.blur(); }
  });
  $('#emptyClear').addEventListener('click', () => { search.value = ''; onSearch(''); search.focus(); });

  const toTop = $('#toTop');
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => { toTop.hidden = window.scrollY < 500; }, { passive: true });

  load();
})();
