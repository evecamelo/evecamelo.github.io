(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;
  if (!reduce && 'IntersectionObserver' in window) root.classList.add('js');
  const listeners = [];

  /* ---------- photo mosaic: columns that start together and end together ----------
     Photos go to the shortest column; then each column is scaled to the same total height,
     and every photo fills its new box with object-fit: cover (only a small crop). */
  function mosaic(el) {
    const figs = [...el.querySelectorAll('figure')];
    const dims = f => { const i = f.querySelector('img'); return i.dataset.w ? [+i.dataset.w, +i.dataset.h] : [i.naturalWidth, i.naturalHeight]; };
    const wait = figs.map(f => {
      const i = f.querySelector('img');
      if (i.dataset.w) return Promise.resolve();
      if (i.complete) { if (!i.naturalWidth) f.remove(); return Promise.resolve(); }
      return new Promise(r => { i.addEventListener('load', r, { once: true }); i.addEventListener('error', () => { f.remove(); r(); }, { once: true }); });
    });
    const limit = +el.dataset.limit || 0, maxc = +el.dataset.maxcols || 3;
    let lastW = 0, all = [], open = !limit, btn = null;
    const layout = force => {
      const W = el.clientWidth; if (!W || (W === lastW && !force)) return; lastW = W;
      const live = open ? all : all.slice(0, limit);
      const colw = +el.dataset.colw || 0;
      const g = colw ? (+el.dataset.gap || 8) : (W < 560 ? 10 : 14);
      const n = colw ? Math.max(Math.min(+el.dataset.mincols || 3, live.length), Math.min(maxc, live.length, Math.floor((W + g) / (colw + g))))
        : live.length < 2 || W < 520 ? 1 : Math.min(maxc, live.length >= 6 ? Math.max(2, Math.floor((W + g) / 240)) : 2);
      const cw = (W - g * (n - 1)) / n;
      const cols = Array.from({ length: n }, () => ({ items: [], h: 0 }));
      live.forEach(f => {
        const [w, h] = dims(f);
        const a = Math.min(1.4, Math.max(0.66, h / w));
        const c = cols.reduce((m, x) => (x.h < m.h ? x : m));
        c.h += (c.items.length ? g : 0) + cw * a; c.items.push({ f, h: cw * a });
      });
      if (n > 1) {
        const T = cols.reduce((s, c) => s + c.h, 0) / n;
        cols.forEach(c => { const gaps = g * (c.items.length - 1), k = (T - gaps) / (c.h - gaps); c.items.forEach(it => { it.h *= k; }); });
      }
      el.style.setProperty('--g', g + 'px');
      el.replaceChildren(...cols.map(c => {
        const d = document.createElement('div'); d.className = 'm-col';
        c.items.forEach(it => { it.f.style.height = (n > 1 ? it.h : Math.min(it.h, live.length === 1 ? 540 : 1e4)).toFixed(1) + 'px'; d.appendChild(it.f); });
        return d;
      }));
      el.classList.add('laid');
    };
    Promise.all(wait).then(() => {
      all = figs.filter(f => f.isConnected);
      if (!all.length) { el.closest('section') && el.closest('section').remove(); return; }
      if (limit && all.length > limit) {
        btn = document.createElement('button'); btn.type = 'button'; btn.className = 'm-more';
        const label = () => { btn.innerHTML = open ? 'Show fewer photos <i aria-hidden="true">↑</i>' : `Show all ${all.length} photos <i aria-hidden="true">↓</i>`; };
        label(); el.after(btn);
        btn.addEventListener('click', () => { open = !open; label(); layout(true); if (!open) el.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' }); });
      }
      layout();
      let t; window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(layout, 120); });
    });
  }
  document.querySelectorAll('[data-mosaic]').forEach(el => { if (!el.closest('#detail')) mosaic(el); });

  /* ---------- voice line (home): calm until the pointer passes over it ---------- */
  const cv = document.getElementById('voice');
  if (cv) {
    const hero = cv.closest('.hero'), ctx = cv.getContext('2d');
    let W, H, mx = -1e4, energy = 0, running = false, colors = [];
    const readColors = () => {
      const cs = getComputedStyle(root);
      colors = ['--salmon', '--peri', '--sage'].map(v => cs.getPropertyValue(v).trim());
      colors.line = cs.getPropertyValue('--line').trim();
    };
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); readColors(); draw(0);
    };
    function draw(t) {
      ctx.clearRect(0, 0, W, H);
      const mid = H * 0.55;
      ctx.strokeStyle = colors.line; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, mid); ctx.lineTo(W, mid); ctx.stroke();
      if (energy < 0.004) return;
      colors.forEach((c, k) => {
        ctx.strokeStyle = c; ctx.lineWidth = 2 - k * 0.4; ctx.globalAlpha = 0.95 - k * 0.15;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 2) {
          const g = Math.exp(-(((x - mx) / (150 + k * 30)) ** 2));
          const y = mid + Math.sin(x * (0.075 - k * 0.012) - t * (9 + k * 2) + k * 1.3) * H * 0.34 * energy * g * (1 - k * 0.22);
          x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
    }
    function tick(ts) {
      draw(ts / 1000); energy *= 0.965;
      if (energy > 0.004) requestAnimationFrame(tick); else { running = false; draw(0); }
    }
    function wake(x, s) { mx = x; energy = Math.max(energy, s); if (!running && !reduce) { running = true; requestAnimationFrame(tick); } }
    hero.addEventListener('pointermove', e => {
      const r = cv.getBoundingClientRect();
      const near = 1 - Math.min(1, Math.abs(e.clientY - (r.top + r.height * 0.55)) / 420);
      wake(e.clientX - r.left, 0.35 + near * 0.65);
    });
    window.addEventListener('resize', resize);
    resize();
    if (!reduce) {
      const start = performance.now();
      (function sweep(now) {
        const p = (now - start) / 1800; if (p > 1) return;
        wake(W * (0.1 + p * 0.8), 0.55 * Math.sin(Math.PI * p)); requestAnimationFrame(sweep);
      })(start);
    }
  }

  /* ---------- map of areas (home) ---------- */
  const map = document.getElementById('map');
  if (map) {
    const areas = [
      { c: '--salmon', name: 'Child language development and disorders', kw: ['bilingual acquisition', 'language disorders', 'clinical practice'] },
      { c: '--peri', name: 'Cognition and neurodevelopment', kw: ['stuttering', 'attention', 'neurodivergence'] },
      { c: '--sand', name: 'Speech sound analysis', kw: ['acoustic analysis', 'Praat', 'phonemic analysis'] },
      { c: '--sage', name: 'Digital health and learning technologies', kw: ['telehealth', 'AI ethics', 'digital learning'] }
    ];
    const pos = [[18, 15], [82, 15], [18, 74], [82, 74]];
    const NS = 'http://www.w3.org/2000/svg', svg = document.getElementById('spokes');
    const ratio = 0.72; // map height / width
    svg.setAttribute('viewBox', `0 0 100 ${100 * ratio}`); svg.setAttribute('preserveAspectRatio', 'none');
    const nodes = [], spokes = [];
    let current = -1, dots = [];
    function select(i) {
      current = i;
      dots.forEach(d => { d.el.style.fill = d.k < 0.6 ? `var(${areas[i].c})` : ''; });
      nodes.forEach((n, k) => n.classList.toggle('on', k === i));
      spokes.forEach((sp, k) => sp.classList.toggle('on', k === i));
    }
    function clear() {
      current = -1;
      dots.forEach(d => { d.el.style.fill = ''; });
      nodes.forEach(n => n.classList.remove('on'));
      spokes.forEach(sp => sp.classList.remove('on'));
    }
    areas.forEach((a, i) => {
      const [x, y] = pos[i];
      const sp = document.createElementNS(NS, 'line');
      sp.setAttribute('x1', 50); sp.setAttribute('y1', 50 * ratio); sp.setAttribute('x2', x); sp.setAttribute('y2', y * ratio);
      sp.setAttribute('class', 'spoke'); sp.setAttribute('vector-effect', 'non-scaling-stroke');
      sp.style.setProperty('--c', `var(${a.c})`); svg.appendChild(sp); spokes.push(sp);
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'node'; b.style.left = x + '%'; b.style.top = y + '%';
      b.style.setProperty('--c', `var(${a.c})`);
      b.setAttribute('aria-label', `${a.name}: ${a.kw.join(', ')}`);
      b.innerHTML = `<span class="b"></span><span class="name">${a.name}</span><span class="kw">${a.kw.map(k => `<span>${k}</span>`).join('')}</span>`;
      b.addEventListener('mouseenter', () => select(i));
      b.addEventListener('mouseleave', clear);
      b.addEventListener('focus', () => select(i));
      b.addEventListener('blur', clear);
      b.addEventListener('click', e => { e.stopPropagation(); current === i ? clear() : select(i); });
      map.appendChild(b); nodes.push(b);
    });
    document.addEventListener('click', clear);

    // brain made of dots, in the core circle
    const core = map.querySelector('.core'), bsvg = document.createElementNS(NS, 'svg');
    bsvg.setAttribute('viewBox', '0 0 100 74'); bsvg.setAttribute('class', 'core-brain'); bsvg.setAttribute('aria-hidden', 'true');
    const inBrain = (x, y) => { x = -x; const e = (cx, cy, rx, ry) => ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 < 1;
      return e(0, -0.1, 0.92, 0.58) || e(-0.12, 0.2, 0.55, 0.26) || e(0.6, 0.36, 0.3, 0.18) || (x > 0.2 && x < 0.36 && y > 0.25 && y < 0.72 - (x - 0.2) * 0.3); };
    let s = 5; const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
    for (let k = 0; k < 4000 && dots.length < 58; k++) {
      const x = r() * 2 - 1, y = r() * 1.5 - 0.72;
      if (!inBrain(x, y) || dots.some(d => (d.x - x) ** 2 + (d.y - y) ** 2 < 0.16 ** 2)) continue;
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', (50 + x * 44).toFixed(1)); c.setAttribute('cy', (34 + y * 44).toFixed(1)); c.setAttribute('r', 2.4);
      c.style.transitionDelay = Math.round(r() * 380) + 'ms';
      bsvg.appendChild(c); dots.push({ x, y, el: c, k: r() });
    }
    core.firstElementChild.prepend(bsvg);
  }

  /* ---------- galleries, presentations and detail pages (content comes from data.js) ---------- */
  const S = window.SITE;
  if (S) {
    const areaVar = { cognition: '--peri', digital: '--sage', language: '--salmon', speech: '--sand' };
    const areaName = { language: 'Child language development and disorders', cognition: 'Cognition and neurodevelopment', speech: 'Speech sound analysis', digital: 'Digital health and learning technologies' };
    const esc = s => String(s);
    const todo = s => esc(s).replace(/\[([^\]]+)\]/g, '<span class="todo">[$1]</span>');
    const all = [...S.projects, ...S.publications, ...S.experience];
    const collectionOf = it => S.projects.includes(it) ? ['research.html', 'Research', S.projects] : S.publications.includes(it) ? ['research.html#publications', 'Publications', S.publications] : ['experience.html', 'Experience', S.experience];

    // small cover of scattered dots per card, seeded by the card id so each one is different but stable
    const wave = id => {
      let h = 7; for (const ch of String(id)) h = (h * 31 + ch.charCodeAt(0)) % 2147483647;
      const r = () => (h = (h * 16807) % 2147483647) / 2147483647;
      let s = '';
      for (let k = 0; k < 26; k++) {
        const x = (r() * 300).toFixed(1), y = (8 + r() * 48).toFixed(1), rr = (1.5 + r() * 3).toFixed(1);
        s += `<circle cx="${x}" cy="${y}" r="${rr}" opacity="${(0.45 + r() * 0.55).toFixed(2)}"/>`;
      }
      return `<div class="g-cover" aria-hidden="true"><svg viewBox="0 0 300 64" preserveAspectRatio="xMidYMid slice">${s}</svg></div>`;
    };

    const card = it => `<a class="g-card" href="detail.html#${it.id}" style="--c:var(${areaVar[it.area]})">
        ${wave(it.id)}
        <div class="g-top"><span class="g-dot" data-area="${areaName[it.area]}" aria-label="Area: ${areaName[it.area]}"></span><span class="g-period">${todo(it.period)}</span></div>
        ${it.group === 'Theses' ? `<span class="g-label">${it.kind}</span>` : ''}
        <h3>${it.cardTitle || it.title}</h3><p>${todo(it.summary)}</p>
        <span class="g-more">Read more <i aria-hidden="true">→</i></span></a>`;

    document.querySelectorAll('[data-gallery]').forEach(el => {
      const key = el.dataset.gallery, group = el.dataset.group;
      let items = S[key] || [];
      if (group) items = items.filter(i => i.group === group);
      el.innerHTML = items.length ? items.map(card).join('') : `<div class="g-empty"><span class="todo">${el.dataset.empty || '[Coming soon]'}</span></div>`;
    });

    const listItem = (y, t, au, w, c) => `<article class="item" style="--c:var(${c})"><div class="when">${y}</div><h3>${t}</h3><p class="meta">${au} · ${w}</p></article>`;
    const pl = document.getElementById('poster-list');
    if (pl) pl.innerHTML = S.posters.map(([y, t, au, w]) => listItem(y, t, au, w, '--sand')).join('');
    const ll = document.getElementById('leadership-list');
    if (ll) ll.innerHTML = S.leadership.map(l => `<article class="lead" style="--c:var(--peri)"><div class="lead-head"><div class="when">${todo(l.period)}</div><h3>${l.title}</h3><p class="meta">${l.place}</p>${l.photos ? `<div class="lead-photos">${l.photos.map(ph => `<span class="lp" tabindex="0"><img src="${ph.src}" alt="${ph.caption.replace(/"/g, '&quot;')}" loading="lazy"><figure class="big" aria-hidden="true"><img src="${ph.src}" alt="" loading="lazy"><figcaption>${ph.caption}</figcaption></figure></span>`).join('')}</div>` : ''}</div><div class="lead-body"><p class="desc">${l.text}</p><ul>${l.list.map(x => `<li>${x}</li>`).join('')}</ul>${l.link ? `<a class="lead-link" href="${l.link.href}">Read about ${l.link.label.toLowerCase()} <i aria-hidden="true">→</i></a>` : ''}</div></article>`).join('');

    // mentoring: simple lists, same pattern as the conference papers list
    document.querySelectorAll('[data-mentees]').forEach(el => {
      el.innerHTML = S.experience.filter(i => i.group === el.dataset.mentees).map(m =>
        `<article class="item" style="--c:var(${areaVar[m.area]})"><div class="when">${m.period}</div><h3>${m.title}</h3><p class="meta">${m.people.replace(/^([^,]+)/, '<b>$1</b>')} · ${m.place}</p></article>`).join('');
    });

    // medical writing: a single inline block, no detail page
    const mw = document.getElementById('mw-block');
    if (mw) mw.innerHTML = S.experience.filter(i => i.group === 'Medical Writing').map(m =>
      `<article class="lead" style="--c:var(${areaVar[m.area]})"><div class="lead-head"><div class="when">${m.period}</div><h3>${m.title}</h3><p class="meta">${m.place}</p></div><div class="lead-body"><p class="desc">${m.text}</p><ul>${m.list.map(x => `<li>${x}</li>`).join('')}</ul></div></article>`).join('');

    // newsletter columns: compact list linking straight to each piece, no detail page
    const nlist = document.getElementById('newsletter-list');
    if (nlist) nlist.innerHTML = S.experience.filter(i => i.group === 'Newsletter Communications').map(n => {
      const href = ((n.links || []).find(l => l.ext) || {}).href;
      return `<article class="item" style="--c:var(${areaVar[n.area]})"><div class="when">${n.period}</div><h3>${href ? `<a class="nl-link" href="${href}" target="_blank" rel="noopener">${n.title}<span aria-hidden="true">↗</span></a>` : n.title}</h3><p class="meta">${n.place.replace(/^SBNp News · /, '')}</p></article>`;
    }).join('');

    // teaching assistant: simple list, same pattern as mentoring
    const tl = document.getElementById('ta-list');
    if (tl) tl.innerHTML = S.experience.filter(i => i.group === 'Teaching Assistant').map(t =>
      `<article class="item" style="--c:var(${areaVar[t.area]})"><div class="when">${t.period}</div><h3>${t.title}</h3><p class="meta">${t.place}</p></article>`).join('');
    const pres = document.getElementById('presentations');
    if (pres) pres.innerHTML = S.presentations.map(([a, y, t, au, w]) =>
      `<article class="item" style="--c:var(${areaVar[a]})"><div class="when">${y}</div><h3>${t}</h3><p class="meta">${au} · ${w}</p></article>`).join('');

    const det = document.getElementById('detail');
    if (det) {
      const render = () => {
        const id = location.hash.slice(1);
        const it = all.find(i => i.id === id);
        if (!it) { det.innerHTML = `<div class="wrap page-head"><h1>Not found</h1><p>This page doesn't exist. Go back to <a href="research.html">Research</a> or <a href="experience.html">Experience</a>.</p></div>`; return; }
        const [backHref, backName, list] = collectionOf(it);
        const sib = it.group ? list.filter(x => x.group === it.group) : list;
        const k = sib.indexOf(it), prev = sib[k - 1], next = sib[k + 1];
        document.title = it.title.replace(/<[^>]+>/g, '') + ' · Evellyn Camelo';
        const props = [['Period', it.period], ['Where', it.place], ['People', it.people], ['Area', areaName[it.area]]].filter(p => p[1]);
        const links = (it.links || []).filter(l => l.ext).map(l => `<a class="btn" href="${l.href}" target="_blank" rel="noopener">${l.label}<span aria-hidden="true">↗</span></a>`).join('');
        const related = (it.links || []).filter(l => !l.ext).map(l => {
          const target = all.find(x => 'detail.html#' + x.id === l.href);
          return `<a class="rel" href="${l.href}"><small>${l.label}</small><span>${target ? target.title : (l.title || l.label)}</span><i aria-hidden="true">→</i></a>`;
        }).join('');
        const sec = it.sections.map(s => `<section class="d-sec${s.cls ? ' ' + s.cls : ''}"><h2>${s.h}</h2>${(s.p || []).map(p => `<p>${todo(p)}</p>`).join('')}${s.list ? `<ul>${s.list.map(l => `<li>${todo(l)}</li>`).join('')}</ul>` : ''}</section>`).join('')
          + (it.skills ? `<section class="d-sec"><h2>Skills developed</h2><div class="skills">${it.skills.map(x => `<span>${x}</span>`).join('')}</div></section>` : '')
          + (related ? `<section class="d-sec"><h2>Related</h2><div class="rels">${related}</div></section>` : '')
          + (it.photos ? `<section class="d-sec"><div class="mosaic" data-mosaic>${it.photos.map(ph => `<figure><img src="${ph.src}" alt="${ph.caption}"><figcaption>${ph.caption}</figcaption></figure>`).join('')}</div></section>` : '');

        det.innerHTML = `<div class="wrap d-wrap">
            <a class="back" href="${backHref}">← ${backName}</a>
            <div class="when" style="--c:var(${areaVar[it.area]})">${it.kind}</div>
            <h1>${it.title}</h1>
            <dl class="props">${props.map(([a, b]) => `<dt>${a}</dt><dd>${todo(b)}</dd>`).join('')}</dl>
            ${links ? `<div class="btns">${links}</div>` : ''}
            ${sec}
            <nav class="pager">${prev ? `<a href="detail.html#${prev.id}"><small>Previous</small>${prev.title}</a>` : '<span></span>'}${next ? `<a class="nx" href="detail.html#${next.id}"><small>Next</small>${next.title}</a>` : ''}</nav>
          </div>`;
        det.querySelectorAll('[data-mosaic]').forEach(mosaic);
        window.scrollTo(0, 0);
      };
      window.addEventListener('hashchange', render);
      render();
    }
  }

  /* ---------- scroll reveal ---------- */
  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.1 });
    els.forEach(el => io.observe(el));
  } else els.forEach(el => el.classList.add('in'));

})();
