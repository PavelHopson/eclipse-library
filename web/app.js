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
    s = s.replace(/!\[[^\]]*\]\([^)]+\)/g, '');
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => {
      const g = u.match(/guides\/([\w-]+)\.md/);
      if (g) return `<a href="#guide/${g[1]}">${t}</a>`;
      return `<a href="${absUrl(u)}" target="_blank" rel="noopener">${t}</a>`;
    });
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    return s.replace(/^\s*[·—-]\s*/, '').trim();
  }

  // ---- type inference (для ориентировки) ----
  const TYPES = {
    skill:  'Claude Code skill',
    agent:  'агент / оркестрация',
    model:  'модель / LLM',
    api:    'API / доступ',
    prompt: 'промпты',
    learn:  'обучение',
    media:  'медиа',
    privacy:'privacy / self-host',
    ours:   'наш проект',
    drop:   'находка дропа',
    grey:   'grey / risk',
    oss:    'open-source',
    tool:   'инструмент',
    shop:   'e-commerce',
  };

  const NAV_GROUPS = [
    { id: 'start', title: 'Быстрый старт' },
    { id: 'build', title: 'Разработка и рост' },
    { id: 'ops', title: 'Инфра и безопасность' },
    { id: 'learn', title: 'Обучение' },
    { id: 'drops', title: 'Подборки по датам' },
    { id: 'own', title: 'Наши проекты' },
    { id: 'other', title: 'Остальное' },
  ];
  function navGroupId(label) {
    const l = label.toLowerCase();
    if (/наши проекты/.test(l)) return 'own';
    if (/подборка eclipse/.test(l)) return 'drops';
    if (/ai & claude|скиллы для claude/.test(l)) return 'start';
    if (/интернет-магазин|лендинг|seo|маркетинг|dev tools|cli|media|download|gamedev/.test(l)) return 'build';
    if (/self-hosted|privacy|opsec|hardware|workstation/.test(l)) return 'ops';
    if (/обучение|компьютерные науки/.test(l)) return 'learn';
    return 'other';
  }
  function inferType(r, cat, sub) {
    const ctx = (cat.label + ' ' + (sub ? sub.title : '')).toLowerCase();
    let host = ''; try { if (r.url) host = new URL(r.url).hostname; } catch (e) {}
    if (r.risk) return 'grey';
    if (/интернет-магазин|e-?commerce|storefront|checkout|headless.*commerce|платеж|payment|корзин|магазин/.test(ctx)) return 'shop';
    if (/промпт|prompt/.test(ctx)) return 'prompt';
    if (/skill|скилл/.test(ctx)) return 'skill';
    if (/оркестрац|агент|agent|мультиагент/.test(ctx)) return 'agent';
    if (/uncensored|model|модел|llm|локальн.*запуск/.test(ctx) || /huggingface\.co$/.test(host)) return 'model';
    if (/api|прокси|бесплатн|грант|доступ/.test(ctx)) return 'api';
    if (/обучени|гайд|курс|learning|mit|компьютерн/.test(ctx)) return 'learn';
    if (/media|медиа|download|видео|изображени|генерац/.test(ctx)) return 'media';
    if (/privacy|opsec|self-host|hardware|workstation/.test(ctx)) return 'privacy';
    if (/наши проекты/.test(cat.label.toLowerCase())) return 'ours';
    if (/подборка/.test(cat.label.toLowerCase())) return 'drop';
    if (r.starsRepo) return 'oss';
    return 'tool';
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
        cat = { id: slug(label) || `c${cats.length}`, icon, label, intro: '', subs: [] };
        cats.push(cat); sub = null; continue;
      }
      if (h3 && cat) { sub = { title: h3[1].trim(), intro: '', resources: [] }; cat.subs.push(sub); continue; }
      if (!cat) continue;
      const t = line.trim();
      if (t.startsWith('>')) {
        const q = t.replace(/^>\s?/, '');
        if (sub && !sub.resources.length) sub.intro += (sub.intro ? ' ' : '') + q;
        else if (!sub && cat) cat.intro += (cat.intro ? ' ' : '') + q;
        continue;
      }
      if (t.startsWith('|')) {
        if (isSep(t)) continue;
        if (lines[i + 1] && isSep(lines[i + 1].trim())) continue;
        const cells = t.split('|').slice(1, -1).map((c) => c.trim());
        if (!cells.length) continue;
        const res = parseRow(cells, t, cat, sub);
        if (res) { ensureSub(); res.type = inferType(res, cat, sub); sub.resources.push(res); }
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
    const descCells = cells.slice(1).filter((c) => c && c !== '—' && !/img\.shields\.io\/github\/stars/.test(c));
    const descHtml = inline(descCells.join(' · '));
    const ctx = `${cat.label} ${sub ? sub.title : ''} ${raw}`;
    const risk = /grey|high-risk|high privilege|risk:|supply-chain boundary|reference-only|не использовать|uncensored|⚠️|🚨|🃏|пиратств/i.test(ctx);
    return { title, url, descHtml, starsRepo, risk };
  }

  // ---- render ----
  const cards = []; // {node, text, type, sub, cat}
  let allCats = [];
  function render(cats) {
    allCats = cats;
    const nav = $('#nav'), results = $('#results'), catgrid = $('#catgrid');
    cards.length = 0;
    nav.innerHTML = ''; results.innerHTML = ''; catgrid.innerHTML = '';
    let total = 0;
    const typeCounts = {};
    const navEntries = [];

    cats.forEach((cat) => {
      const cnt = cat.subs.reduce((a, s) => a + s.resources.length, 0);
      total += cnt;

      // sidebar nav
      navEntries.push({ cat, cnt });

      // hero quick-grid tile
      const tile = el('a', 'cat-tile'); tile.href = `#${cat.id}`;
      tile.innerHTML = `<span class="ct-ico" aria-hidden="true">${cat.icon || '·'}</span><span class="ct-label">${esc(cat.label)}</span><span class="ct-cnt">${cnt}</span>`;
      catgrid.appendChild(tile);

      const section = el('section', 'cat'); section.id = cat.id;
      const head = el('header', 'cat-head');
      head.innerHTML = `<h2>${cat.icon ? `<span class="ch-ico" aria-hidden="true">${cat.icon}</span> ` : ''}${esc(cat.label)}</h2><span class="cat-cnt">${cnt} ${plural(cnt)}</span>`;
      section.appendChild(head);
      if (cat.intro) section.appendChild(el('p', 'cat-intro', inline(cat.intro)));

      cat.subs.forEach((s) => {
        if (!s.resources.length) return;
        const subWrap = el('div', 'sub');
        if (s.title) subWrap.appendChild(el('h3', null, esc(s.title.replace(/[*`]/g, ''))));
        if (s.intro) subWrap.appendChild(el('p', 'sub-intro', inline(s.intro)));
        const grid = el('div', 'grid');
        s.resources.forEach((r) => {
          typeCounts[r.type] = (typeCounts[r.type] || 0) + 1;
          const card = el('article', 'card' + (r.risk ? ' risk' : ''));
          card.dataset.type = r.type;

          const top = el('div', 'card-top');
          top.appendChild(el('span', 'type-chip t-' + r.type, esc(TYPES[r.type] || r.type)));
          if (r.starsRepo) {
            const img = el('img', 'stars'); img.loading = 'lazy'; img.alt = 'GitHub stars';
            img.src = `https://img.shields.io/github/stars/${r.starsRepo}?style=flat&color=8b5cf6&labelColor=15151c&logo=github&logoColor=cfcfe0`;
            top.appendChild(img);
          }
          card.appendChild(top);

          const h = el('h4', 'card-title');
          if (r.url) {
            h.innerHTML = `<a href="${r.url}" target="_blank" rel="noopener">${esc(r.title)}<svg class="ext" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg></a>`;
          } else { h.innerHTML = `<span>${esc(r.title)}</span>`; }
          card.appendChild(h);

          card.appendChild(el('p', 'desc', r.descHtml));

          if (r.url) {
            let dom = ''; try { dom = new URL(r.url).hostname.replace(/^www\./, ''); } catch (e) {}
            if (dom) card.appendChild(el('div', 'card-foot', `<span class="dom"><svg viewBox="0 0 24 24" aria-hidden="true" width="13" height="13"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3 12h18M12 3c2.5 2.5 2.5 16 0 18M12 3c-2.5 2.5-2.5 16 0 18" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>${esc(dom)}</span>`));
          }

          grid.appendChild(card);
          cards.push({ node: card, type: r.type, text: (r.title + ' ' + r.descHtml.replace(/<[^>]+>/g, ' ')).toLowerCase(), sub: subWrap, cat: section });
        });
        subWrap.appendChild(grid);
        section.appendChild(subWrap);
      });
      results.appendChild(section);
    });
    renderSideNav(navEntries);
    const catBrowserCount = $('#catBrowserCount');
    if (catBrowserCount) catBrowserCount.textContent = `${cats.length} разделов`;

    // stats
    $('#stats').innerHTML =
      stat(total, 'находок') + stat(cats.length, 'категорий') +
      stat(cats.filter((c) => /подборка/i.test(c.label)).length, 'подборок') +
      stat(Object.keys(typeCounts).length, 'типов');

    buildFilters(typeCounts);
    buildQuickRoutes(cats, typeCounts);
    $('#status').hidden = true;
    requestAnimationFrame(() => { scrollSpy(); entryReveal(); });
  }

  function renderSideNav(entries) {
    const nav = $('#nav');
    const byGroup = new Map(NAV_GROUPS.map((g) => [g.id, []]));
    entries.forEach((entry) => {
      const gid = navGroupId(entry.cat.label);
      (byGroup.get(gid) || byGroup.get('other')).push(entry);
    });
    nav.innerHTML = '';
    NAV_GROUPS.forEach((group) => {
      const items = byGroup.get(group.id) || [];
      if (!items.length) return;
      const wrap = el('div', 'nav-group');
      wrap.dataset.group = group.id;
      const count = items.reduce((sum, x) => sum + x.cnt, 0);
      wrap.appendChild(el('div', 'nav-group-title', `<span>${esc(group.title)}</span><i>${count}</i>`));
      items.forEach(({ cat, cnt }) => wrap.appendChild(makeNavLink(cat, cnt)));
      nav.appendChild(wrap);
    });
  }

  function makeNavLink(cat, cnt) {
    const a = el('a');
    a.href = `#${cat.id}`;
    a.dataset.navText = `${cat.label} ${cnt}`.toLowerCase();
    a.innerHTML = `<span class="ico" aria-hidden="true">${cat.icon || '·'}</span><span class="label">${esc(cat.label)}</span><span class="cnt">${cnt}</span>`;
    return a;
  }

  function findCat(cats, re) {
    return cats.find((c) => re.test(c.label.toLowerCase()));
  }

  function buildQuickRoutes(cats, typeCounts) {
    const box = $('#quickRoutes');
    if (!box) return;
    const ai = findCat(cats, /ai & claude/);
    const skills = findCat(cats, /скиллы для claude/);
    const ecommerce = findCat(cats, /интернет-магазин/);
    const projects = findCat(cats, /наши проекты/);
    const latestDrop = [...cats].reverse().find((c) => /подборка eclipse/.test(c.label.toLowerCase()));
    const routes = [
      ai && { label: 'AI & Claude', hint: 'скиллы, агенты, LLM', href: `#${ai.id}`, count: ai.subs.reduce((a, s) => a + s.resources.length, 0) },
      skills && { label: 'Скиллы Claude', hint: 'готовые роли и команды', href: `#${skills.id}`, count: skills.subs.reduce((a, s) => a + s.resources.length, 0) },
      { label: 'Курсы и гайды', hint: 'длинные материалы на сайте', href: '#guidesFeat', count: 'guide' },
      latestDrop && { label: 'Свежая подборка', hint: latestDrop.label.replace(/^Подборка Eclipse\s*/i, ''), href: `#${latestDrop.id}`, count: latestDrop.subs.reduce((a, s) => a + s.resources.length, 0) },
      typeCounts.grey && { label: 'Риски', hint: 'grey-zone и спорные находки', type: 'grey', count: typeCounts.grey },
      typeCounts.oss && { label: 'Open-source', hint: 'репозитории и self-host', type: 'oss', count: typeCounts.oss },
      ecommerce && { label: 'E-commerce', hint: 'магазины, платежи, storefront', href: `#${ecommerce.id}`, count: ecommerce.subs.reduce((a, s) => a + s.resources.length, 0) },
      projects && { label: 'Наши проекты', hint: 'куда внедрять находки', href: `#${projects.id}`, count: projects.subs.reduce((a, s) => a + s.resources.length, 0) },
    ].filter(Boolean);
    box.innerHTML = routes.map((r) => {
      const meta = typeof r.count === 'number' ? `${r.count} ${plural(r.count)}` : 'гайды';
      const attrs = r.type ? `button type="button" data-type="${r.type}"` : `a href="${r.href}"`;
      const close = r.type ? 'button' : 'a';
      return `<${attrs} class="quick-route"><span><b>${esc(r.label)}</b><small>${esc(r.hint)}</small></span><i>${esc(meta)}</i></${close}>`;
    }).join('');
    box.querySelectorAll('[data-type]').forEach((b) => {
      b.addEventListener('click', () => {
        setTypeFilter(b.dataset.type);
        $('#filters').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  const plural = (n) => (n % 10 === 1 && n % 100 !== 11) ? 'находка' : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? 'находки' : 'находок';
  const stat = (n, l) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`;

  // ---- filters (тип + поиск) ----
  let activeType = null, query = '', navQuery = '';
  function buildFilters(typeCounts) {
    const bar = $('#filters'); bar.innerHTML = '';
    bar.appendChild(chip(null, 'Все', cards.length, true));
    Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]).forEach((t) => {
      bar.appendChild(chip(t, TYPES[t] || t, typeCounts[t], false));
    });
    const reset = el('button', 'filter-reset', 'Сбросить фильтры');
    reset.id = 'filterReset'; reset.type = 'button'; reset.hidden = true;
    reset.addEventListener('click', () => clearLibraryFilters({ focus: true }));
    bar.appendChild(reset);
    const rc = el('span', 'result-count'); rc.id = 'resultcount'; bar.appendChild(rc);
    bar.hidden = false;
  }
  function chip(type, label, n, active) {
    const c = el('button', 'chip' + (active ? ' active' : ''), `${esc(label)} <i>${n}</i>`);
    c.dataset.type = type || '';
    c.addEventListener('click', () => {
      activeType = (activeType === type) ? null : type;
      updateChipState();
      applyFilters();
    });
    return c;
  }

  function updateChipState() {
    document.querySelectorAll('.chip').forEach((x) => x.classList.toggle('active', (x.dataset.type || null) === activeType || (activeType === null && !x.dataset.type)));
  }

  function setTypeFilter(type) {
    activeType = type || null;
    query = '';
    if (search) search.value = '';
    updateChipState();
    applyFilters();
  }

  function clearLibraryFilters(opts = {}) {
    activeType = null;
    query = '';
    if (search) search.value = '';
    updateChipState();
    applyFilters();
    if (opts.focus && search) search.focus();
  }

  function applyFilters() {
    const q = query.trim().toLowerCase();
    let visible = 0;
    cards.forEach((c) => {
      const show = (!q || c.text.includes(q)) && (!activeType || c.type === activeType);
      c.node.hidden = !show; if (show) visible++;
    });
    document.querySelectorAll('.sub').forEach((s) => { s.hidden = !s.querySelector('.card:not([hidden])'); });
    document.querySelectorAll('.cat').forEach((s) => { s.hidden = !s.querySelector('.card:not([hidden])'); });
    updateNavVisibility();
    const filtering = !!(q || activeType);
    $('#hero').classList.toggle('dim', filtering);
    $('#resultcount').textContent = filtering ? `${visible} ${plural(visible)}` : '';
    const reset = $('#filterReset');
    if (reset) reset.hidden = !filtering;
    const empty = $('#empty');
    empty.hidden = !(filtering && visible === 0);
    if (!empty.hidden) $('#emptyQ').textContent = q || (TYPES[activeType] || '');
    entryReveal();
  }

  function updateNavVisibility() {
    const q = navQuery.trim().toLowerCase();
    let visible = 0;
    document.querySelectorAll('#nav a').forEach((a) => {
      const id = (a.getAttribute('href') || '').slice(1);
      const sec = document.getElementById(id);
      const hiddenByFilter = sec && sec.hidden;
      const hiddenByQuery = q && !(a.dataset.navText || a.textContent || '').toLowerCase().includes(q);
      a.hidden = !!(hiddenByFilter || hiddenByQuery);
      if (!a.hidden) visible++;
    });
    document.querySelectorAll('.nav-group').forEach((g) => { g.hidden = !g.querySelector('a:not([hidden])'); });
    const empty = $('#navEmpty');
    if (empty) empty.hidden = !(q && visible === 0);
    const clear = $('#navClear');
    if (clear) clear.hidden = !q;
  }

  // ---- entry reveal (staggered) ----
  let revealObs;
  function entryReveal() {
    if (!revealObs) {
      revealObs = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => { if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -8% 0px' });
    }
    cards.forEach((c) => { if (!c.node.hidden && !c.node.classList.contains('in')) revealObs.observe(c.node); });
  }

  // ---- scrollspy ----
  function scrollSpy() {
    const links = [...document.querySelectorAll('#nav a')];
    const map = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((a) => a.classList.remove('active'));
          const a = map.get(e.target.id); if (a) { a.classList.add('active'); a.scrollIntoView({ block: 'nearest' }); }
        }
      });
    }, { rootMargin: '-120px 0px -72% 0px' });
    document.querySelectorAll('.cat').forEach((s) => obs.observe(s));
  }

  // ---- spotlight hover (cursor-follow glow) ----
  function spotlight() {
    let raf = 0, ev = null;
    $('#results').addEventListener('pointermove', (e) => {
      ev = e; if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0; const card = ev.target.closest && ev.target.closest('.card');
        if (card) { const r = card.getBoundingClientRect(); card.style.setProperty('--mx', (ev.clientX - r.left) + 'px'); card.style.setProperty('--my', (ev.clientY - r.top) + 'px'); }
      });
    }, { passive: true });
  }

  // ---- courses & guides feature band (auto-discovered from README guide links) ----
  async function renderGuides(md) {
    const seen = new Map();
    const re = /\[([^\]]+)\]\((?:\.\/)?guides\/([\w-]+)\.md(?:#[\w-]+)?\)/g;
    let m;
    while ((m = re.exec(md))) {
      const label = m[1].replace(/[*`]/g, '').trim(), name = m[2];
      const prev = seen.get(name);
      if (!prev || (/курс|гайд/i.test(label) && !/курс|гайд/i.test(prev))) seen.set(name, label);
    }
    if (!seen.size) return;
    const pl = (n, a, b, c) => (n % 10 === 1 && n % 100 !== 11) ? a : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? b : c;

    const guides = await Promise.all([...seen.entries()].map(async ([name, label]) => {
      const g = { name, title: label, blurb: '', modules: 0, lessons: 0 };
      try {
        const r = await fetch(`guides/${name}.md`, { cache: 'no-cache' });
        if (r.ok) {
          const t = await r.text();
          const h1 = t.match(/^#\s+(.+)$/m); if (h1) g.title = h1[1];
          const bqm = t.match(/^(>.*(?:\n>.*)*)/m);
          if (bqm) {
            let b = bqm[1].replace(/^>\s?/gm, '').replace(/\n/g, ' ')
              .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*`<>]/g, '').replace(/\s+/g, ' ').trim();
            const dot = b.search(/\.\s/);
            if (dot > 40 && dot < 190) b = b.slice(0, dot + 1);
            else if (b.length > 175) b = b.slice(0, 174).replace(/\s+\S*$/, '').replace(/[\s.,;:—–-]+$/, '') + '…';
            g.blurb = b;
          }
          // \s (not \b) — Cyrillic words have no ASCII word-boundary after them
          g.modules = (t.match(/^##\s+(?:Модуль|Module)\s/gmi) || []).length;
          g.lessons = (t.match(/^###\s+(?:Урок|Lesson)\s/gmi) || []).length;
        }
      } catch (e) {}
      g.title = g.title.replace(/[#*`]/g, '').trim();
      return g;
    }));
    guides.sort((a, b) => (b.modules - a.modules) || a.title.localeCompare(b.title, 'ru'));

    const hero = $('#hero');
    let band = $('#guidesFeat');
    if (!band) { band = el('section', 'guides-feat'); band.id = 'guidesFeat'; hero.insertAdjacentElement('afterend', band); }
    band.innerHTML =
      `<div class="gf-head"><h2><span aria-hidden="true">📚</span> Курсы и гайды</h2>` +
      `<span class="gf-sub">учебные материалы — открываются прямо на сайте</span></div>` +
      `<div class="gf-grid">` + guides.map((g) => {
        const course = g.modules > 0;
        const meta = course
          ? `<div class="cc-meta"><span><b>${g.modules}</b> ${pl(g.modules, 'модуль', 'модуля', 'модулей')}</span>` +
            (g.lessons ? `<span><b>${g.lessons}</b> ${pl(g.lessons, 'урок', 'урока', 'уроков')}</span>` : '') + `</div>`
          : '';
        return `<a class="course-card" href="#guide/${g.name}">` +
          `<span class="cc-kicker">${course ? '🎓 курс' : '📖 гайд'}</span>` +
          `<h3 class="cc-title">${esc(g.title)}</h3>` +
          (g.blurb ? `<p class="cc-blurb">${esc(g.blurb)}</p>` : '') +
          meta +
          `<span class="cc-cta">Открыть →</span>` +
        `</a>`;
      }).join('') + `</div>`;

    const nav = $('#nav');
    if (nav && !$('#navGuides')) {
      const a = el('a'); a.id = 'navGuides'; a.href = '#guidesFeat';
      a.className = 'nav-pinned';
      a.dataset.navText = `курсы и гайды ${guides.length}`.toLowerCase();
      a.innerHTML = `<span class="ico" aria-hidden="true">📚</span><span class="label">Курсы и гайды</span><span class="cnt">${guides.length}</span>`;
      nav.insertBefore(a, nav.firstChild);
      updateNavVisibility();
    }
    const catgrid = $('#catgrid');
    if (catgrid && !$('#tileGuides')) {
      const tile = el('a', 'cat-tile'); tile.id = 'tileGuides'; tile.href = '#guidesFeat';
      tile.innerHTML = `<span class="ct-ico" aria-hidden="true">📚</span><span class="ct-label">Курсы и гайды</span><span class="ct-cnt">${guides.length}</span>`;
      catgrid.insertBefore(tile, catgrid.firstChild);
    }
  }

  // ---- guide viewer (markdown → premium doc) ----
  function splitRow(l) { return l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()); }
  function inlineG(s) {
    s = esc(s || '');
    s = s.replace(/!\[[^\]]*\]\([^)]+\)/g, '');
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => {
      if (/README\.md/.test(u)) { const a = (u.match(/#(.+)$/) || [])[1]; return `<a href="#${a || 'top'}">${t}</a>`; }
      const g = u.match(/(?:^|\/)([\w-]+)\.md(?:#[\w-]+)?$/);
      if (g && !/^https?:/.test(u)) return `<a href="#guide/${g[1]}">${t}</a>`;
      return `<a href="${/^https?:/.test(u) ? u : absUrl(u)}" target="_blank" rel="noopener">${t}</a>`;
    });
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    return s;
  }
  function mdToHtml(md) {
    const L = md.replace(/\r/g, '').split('\n'); let out = ''; let i = 0;
    const stop = (l) => /^(#{1,6}\s|```|>|\||\s*[-*]\s|\s*\d+\.\s|---+\s*$|\s*$)/.test(l);
    while (i < L.length) {
      const l = L[i];
      if (/^```/.test(l)) { i++; let c = ''; while (i < L.length && !/^```/.test(L[i])) { c += L[i] + '\n'; i++; } i++; out += `<pre><code>${esc(c.replace(/\n$/, ''))}</code></pre>`; continue; }
      const h = l.match(/^(#{1,6})\s+(.*)$/); if (h) { const n = h[1].length; out += `<h${n}>${inlineG(h[2])}</h${n}>`; i++; continue; }
      if (/^---+\s*$/.test(l)) { out += '<hr>'; i++; continue; }
      if (/^>\s?/.test(l)) { let q = ''; while (i < L.length && /^>\s?/.test(L[i])) { q += L[i].replace(/^>\s?/, '') + '\n'; i++; } out += `<blockquote>${mdToHtml(q)}</blockquote>`; continue; }
      if (/^\|/.test(l) && L[i + 1] && /^\|?[\s:|-]+\|?$/.test(L[i + 1]) && L[i + 1].includes('-')) {
        const hd = splitRow(l); i += 2; const rows = [];
        while (i < L.length && /^\|/.test(L[i])) { rows.push(splitRow(L[i])); i++; }
        out += `<div class="t-wrap"><table><thead><tr>${hd.map((c) => `<th>${inlineG(c)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${inlineG(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`; continue;
      }
      if (/^\s*([-*]|\d+\.)\s+/.test(l)) {
        const ol = /^\s*\d+\./.test(l); let items = '';
        while (i < L.length && /^\s*([-*]|\d+\.)\s+/.test(L[i])) {
          let it = L[i].replace(/^\s*([-*]|\d+\.)\s+/, '');
          const tk = it.match(/^\[([ xX])\]\s+(.*)$/);
          items += tk ? `<li class="task"><span class="cb${tk[1].trim() ? ' on' : ''}"></span>${inlineG(tk[2])}</li>` : `<li>${inlineG(it)}</li>`;
          i++;
        }
        out += `<${ol ? 'ol' : 'ul'}>${items}</${ol ? 'ol' : 'ul'}>`; continue;
      }
      if (/^\s*$/.test(l)) { i++; continue; }
      let p = ''; while (i < L.length && !stop(L[i])) { p += L[i] + ' '; i++; }
      if (p.trim()) out += `<p>${inlineG(p.trim())}</p>`;
    }
    return out;
  }
  // clickable table of contents (modules) for the guide viewer
  let guideTocObs = null;
  function buildGuideToc(body) {
    const toc = $('#guideToc'); if (!toc) return;
    if (guideTocObs) { guideTocObs.disconnect(); guideTocObs = null; }
    const heads = [...body.querySelectorAll('h2, h3')];
    const h2s = heads.filter((h) => h.tagName === 'H2');
    if (h2s.length < 3) { toc.hidden = true; toc.innerHTML = ''; return; }
    const used = new Set();
    heads.forEach((h) => {
      if (h.id) { used.add(h.id); return; }
      let base = slug(h.textContent) || 'sec', id = base, n = 2;
      while (used.has(id)) id = `${base}-${n++}`;
      used.add(id); h.id = id;
    });
    toc.hidden = false;
    toc.innerHTML = `<details class="gt-details" open><summary class="gt-head">Содержание</summary><div class="gt-list">` +
      h2s.map((h) => `<button type="button" class="gt-link" data-target="${h.id}">${esc(h.textContent.trim())}</button>`).join('') +
      `</div></details>`;
    const map = new Map(h2s.map((h) => [h.id, toc.querySelector(`.gt-link[data-target="${h.id}"]`)]));
    guideTocObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        toc.querySelectorAll('.gt-link.active').forEach((x) => x.classList.remove('active'));
        const link = map.get(e.target.id);
        if (link) { link.classList.add('active'); link.scrollIntoView({ block: 'nearest' }); }
      });
    }, { root: $('#guideView'), rootMargin: '-82px 0px -70% 0px' });
    h2s.forEach((h) => guideTocObs.observe(h));
  }

  async function openGuide(name) {
    const v = $('#guideView'), b = $('#guideBody'), t = $('#guideTitle'), toc = $('#guideToc');
    v.hidden = false; document.body.classList.add('noscroll'); v.scrollTop = 0;
    if (toc) { toc.hidden = true; toc.innerHTML = ''; }
    $('#guideGh').href = `${REPO_URL}/blob/master/guides/${name}.md`;
    b.innerHTML = '<div class="status">Загружаю гайд…</div>';
    let md;
    try { const r = await fetch(`guides/${name}.md`, { cache: 'no-cache' }); if (!r.ok) throw 0; md = await r.text(); }
    catch (e) { try { md = await (await fetch(`https://raw.githubusercontent.com/${REPO}/master/guides/${name}.md`)).text(); } catch (e2) { b.innerHTML = '<div class="status err">Гайд не найден.</div>'; return; } }
    const m = md.match(/^#\s+(.+)$/m);
    t.textContent = m ? m[1].replace(/[#*\x60]/g, '').replace(/\p{Extended_Pictographic}/gu, '').trim() : name;
    b.innerHTML = mdToHtml(md); buildGuideToc(b); v.scrollTop = 0;
  }
  function closeGuide() { const v = $('#guideView'); if (v.hidden) return; v.hidden = true; document.body.classList.remove('noscroll'); if (guideTocObs) { guideTocObs.disconnect(); guideTocObs = null; } }
  function route() {
    const h = location.hash;
    if (/^#guide\//.test(h)) { openGuide(decodeURIComponent(h.slice(7))); return; }
    closeGuide();
    if (h.length > 1) { const t = document.getElementById(decodeURIComponent(h.slice(1))); if (t) t.scrollIntoView(); }
  }

  // ---- boot ----
  async function load() {
    let md;
    try { const r = await fetch('README.md', { cache: 'no-cache' }); if (!r.ok) throw 0; md = await r.text(); }
    catch (e) {
      try { md = await (await fetch(RAW, { cache: 'no-cache' })).text(); }
      catch (e2) { const s = $('#status'); s.className = 'status err'; s.innerHTML = `Не удалось загрузить библиотеку. <a href="${REPO_URL}" target="_blank" rel="noopener">Открыть на GitHub →</a>`; return; }
    }
    try {
      render(parse(md)); spotlight();
      renderGuides(md);
      requestAnimationFrame(route);
    }
    catch (e) { $('#status').className = 'status err'; $('#status').textContent = 'Ошибка разбора README: ' + e.message; }
  }

  // ---- events ----
  const search = $('#search');
  const navSearch = $('#navSearch');
  let timer;
  search.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => { query = search.value; applyFilters(); }, 110); });
  if (navSearch) {
    let navTimer;
    navSearch.addEventListener('input', () => {
      clearTimeout(navTimer);
      navTimer = setTimeout(() => { navQuery = navSearch.value; updateNavVisibility(); }, 90);
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !$('#guideView').hidden) { closeGuide(); history.replaceState(null, '', location.pathname + location.search); return; }
    if (e.key === '/' && document.activeElement !== search) { e.preventDefault(); search.focus(); }
    if (e.key === 'Escape' && document.activeElement === search) { search.value = ''; query = ''; applyFilters(); search.blur(); }
    if (e.key === 'Escape' && document.activeElement === navSearch) { navSearch.value = ''; navQuery = ''; updateNavVisibility(); navSearch.blur(); }
  });
  window.addEventListener('hashchange', route);
  $('#guideBack').addEventListener('click', () => { closeGuide(); history.replaceState(null, '', location.pathname + location.search); });
  $('#guideToc').addEventListener('click', (e) => {
    const b = e.target.closest('.gt-link'); if (!b) return;
    const target = document.getElementById(b.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  $('#emptyClear').addEventListener('click', () => clearLibraryFilters({ focus: true }));
  $('#navClear').addEventListener('click', () => { if (!navSearch) return; navSearch.value = ''; navQuery = ''; updateNavVisibility(); navSearch.focus(); });

  const toTop = $('#toTop');
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => { toTop.hidden = window.scrollY < 600; }, { passive: true });

  load();
})();
