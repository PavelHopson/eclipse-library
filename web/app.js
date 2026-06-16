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
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) =>
      `<a href="${absUrl(u)}" target="_blank" rel="noopener">${t}</a>`);
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
  };
  function inferType(r, cat, sub) {
    const ctx = (cat.label + ' ' + (sub ? sub.title : '')).toLowerCase();
    let host = ''; try { if (r.url) host = new URL(r.url).hostname; } catch (e) {}
    if (r.risk) return 'grey';
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
        cat = { id: slug(label) || `c${cats.length}`, icon, label, subs: [] };
        cats.push(cat); sub = null; continue;
      }
      if (h3 && cat) { sub = { title: h3[1].trim(), resources: [] }; cat.subs.push(sub); continue; }
      if (!cat) continue;
      const t = line.trim();
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
    const risk = /grey|high-risk|uncensored|⚠️|🚨|🃏|пиратств/i.test(ctx);
    return { title, url, descHtml, starsRepo, risk };
  }

  // ---- render ----
  const cards = []; // {node, text, type, sub, cat}
  let allCats = [];
  function render(cats) {
    allCats = cats;
    const nav = $('#nav'), results = $('#results'), catgrid = $('#catgrid');
    nav.innerHTML = ''; results.innerHTML = ''; catgrid.innerHTML = '';
    let total = 0;
    const typeCounts = {};

    cats.forEach((cat) => {
      const cnt = cat.subs.reduce((a, s) => a + s.resources.length, 0);
      total += cnt;

      // sidebar nav
      const a = el('a'); a.href = `#${cat.id}`;
      a.innerHTML = `<span class="ico" aria-hidden="true">${cat.icon || '·'}</span><span class="label">${esc(cat.label)}</span><span class="cnt">${cnt}</span>`;
      nav.appendChild(a);

      // hero quick-grid tile
      const tile = el('a', 'cat-tile'); tile.href = `#${cat.id}`;
      tile.innerHTML = `<span class="ct-ico" aria-hidden="true">${cat.icon || '·'}</span><span class="ct-label">${esc(cat.label)}</span><span class="ct-cnt">${cnt}</span>`;
      catgrid.appendChild(tile);

      const section = el('section', 'cat'); section.id = cat.id;
      const head = el('header', 'cat-head');
      head.innerHTML = `<h2>${cat.icon ? `<span class="ch-ico" aria-hidden="true">${cat.icon}</span> ` : ''}${esc(cat.label)}</h2><span class="cat-cnt">${cnt} ${plural(cnt)}</span>`;
      section.appendChild(head);

      cat.subs.forEach((s) => {
        if (!s.resources.length) return;
        const subWrap = el('div', 'sub');
        if (s.title) subWrap.appendChild(el('h3', null, esc(s.title.replace(/[*`]/g, ''))));
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

    // stats
    $('#stats').innerHTML =
      stat(total, 'находок') + stat(cats.length, 'категорий') +
      stat(cats.filter((c) => /подборка/i.test(c.label)).length, 'подборок') +
      stat(Object.keys(typeCounts).length, 'типов');

    buildFilters(typeCounts);
    $('#status').hidden = true;
    requestAnimationFrame(() => { scrollSpy(); entryReveal(); });
  }

  const plural = (n) => (n % 10 === 1 && n % 100 !== 11) ? 'находка' : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? 'находки' : 'находок';
  const stat = (n, l) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`;

  // ---- filters (тип + поиск) ----
  let activeType = null, query = '';
  function buildFilters(typeCounts) {
    const bar = $('#filters'); bar.innerHTML = '';
    bar.appendChild(chip(null, 'Все', cards.length, true));
    Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]).forEach((t) => {
      bar.appendChild(chip(t, TYPES[t] || t, typeCounts[t], false));
    });
    const rc = el('span', 'result-count'); rc.id = 'resultcount'; bar.appendChild(rc);
    bar.hidden = false;
  }
  function chip(type, label, n, active) {
    const c = el('button', 'chip' + (active ? ' active' : ''), `${esc(label)} <i>${n}</i>`);
    c.dataset.type = type || '';
    c.addEventListener('click', () => {
      activeType = (activeType === type) ? null : type;
      document.querySelectorAll('.chip').forEach((x) => x.classList.toggle('active', (x.dataset.type || null) === activeType || (activeType === null && !x.dataset.type)));
      applyFilters();
    });
    return c;
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
    document.querySelectorAll('#nav a').forEach((a) => { const sec = document.getElementById(a.getAttribute('href').slice(1)); a.hidden = sec && sec.hidden; });
    const filtering = !!(q || activeType);
    $('#hero').classList.toggle('dim', filtering);
    $('#resultcount').textContent = filtering ? `${visible} ${plural(visible)}` : '';
    const empty = $('#empty');
    empty.hidden = !(filtering && visible === 0);
    if (!empty.hidden) $('#emptyQ').textContent = q || (TYPES[activeType] || '');
    entryReveal();
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

  // ---- boot ----
  async function load() {
    let md;
    try { const r = await fetch('README.md', { cache: 'no-cache' }); if (!r.ok) throw 0; md = await r.text(); }
    catch (e) {
      try { md = await (await fetch(RAW, { cache: 'no-cache' })).text(); }
      catch (e2) { const s = $('#status'); s.className = 'status err'; s.innerHTML = `Не удалось загрузить библиотеку. <a href="${REPO_URL}" target="_blank" rel="noopener">Открыть на GitHub →</a>`; return; }
    }
    try { render(parse(md)); spotlight(); }
    catch (e) { $('#status').className = 'status err'; $('#status').textContent = 'Ошибка разбора README: ' + e.message; }
  }

  // ---- events ----
  const search = $('#search');
  let timer;
  search.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => { query = search.value; applyFilters(); }, 110); });
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== search) { e.preventDefault(); search.focus(); }
    if (e.key === 'Escape' && document.activeElement === search) { search.value = ''; query = ''; applyFilters(); search.blur(); }
  });
  $('#emptyClear').addEventListener('click', () => { search.value = ''; query = ''; activeType = null; document.querySelectorAll('.chip').forEach((x) => x.classList.toggle('active', !x.dataset.type)); applyFilters(); search.focus(); });

  const toTop = $('#toTop');
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => { toTop.hidden = window.scrollY < 600; }, { passive: true });

  load();
})();
