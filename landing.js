(() => {
  'use strict';
  const root = document.documentElement;
  const copy = JSON.parse(document.getElementById('landing-copy').textContent);
  const params = new URLSearchParams(location.search);
  const pageFor = { es: 'index.html', en: 'en.html', pt: 'pt.html' };
  if (pageFor[params.get('lang')] && params.get('lang') !== root.lang) {
    const target = new URL(pageFor[params.get('lang')], location.href);
    target.search = location.search; target.hash = location.hash;
    location.replace(target.href); return;
  }
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch { /* preferences are optional */ } };
  const themeButton = document.querySelector('.theme-toggle');
  function setTheme(theme) {
    root.dataset.theme = theme === 'dark' ? 'dark' : 'light';
    themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#131c18' : '#f8f7fa';
    document.querySelectorAll('[data-app], .languages a').forEach(link => {
      const url = new URL(link.href); url.searchParams.set('theme', root.dataset.theme); link.href = url.href;
    });
  }
  setTheme(params.get('theme') || read('goster-theme') || 'light');
  themeButton.addEventListener('click', () => { setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'); save('goster-theme', root.dataset.theme); });
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  function closeMenu() { menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); }
  menuButton.addEventListener('click', () => { menu.hidden = !menu.hidden; menuButton.setAttribute('aria-expanded', String(!menu.hidden)); });
  menu.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { closeMenu(); menuButton.focus(); } });
  document.addEventListener('click', e => { if (!e.target.closest('.header')) closeMenu(); });
  const mobileQuery = matchMedia('(max-width: 850px)');
  mobileQuery.addEventListener('change', e => { if (!e.matches) closeMenu(); });
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const motionButton = document.querySelector('.motion-toggle');
  let paused = read('goster-motion-paused') === 'true' || reduceMotion.matches;
  function setMotion() {
    root.classList.toggle('motion-paused', paused);
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.setAttribute('aria-label', paused ? copy.resume : copy.motion);
    motionButton.firstElementChild.textContent = paused ? '▷' : 'Ⅱ';
  }
  setMotion();
  motionButton.addEventListener('click', () => { paused = !paused; setMotion(); save('goster-motion-paused', String(paused)); });
  reduceMotion.addEventListener('change', e => { paused = e.matches; setMotion(); });
  // Reveal each block once as it enters the reading area. Content stays
  // available without JS and when reduced motion or the pause control is on.
  let revealObserver;
  function initializeReveals() {
    revealObserver?.disconnect();
    const elements = [...document.querySelectorAll('.reveal')];
    if (!('IntersectionObserver' in window) || reduceMotion.matches || paused) {
      elements.forEach(el => el.classList.remove('pending'));
      return;
    }
    revealObserver = new IntersectionObserver(entries => {
      let stagger = 0;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.setProperty('--reveal-delay', `${Math.min(stagger++, 3) * 90}ms`);
        entry.target.classList.remove('pending');
        entry.target.dataset.revealed = 'true';
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });
    elements.forEach(el => {
      const bounds = el.getBoundingClientRect();
      if (bounds.top < innerHeight - 48 || el.dataset.revealed === 'true') {
        el.classList.remove('pending');
      } else {
        el.classList.add('pending');
        revealObserver.observe(el);
      }
    });
  }
  initializeReveals();
  motionButton.addEventListener('click', initializeReveals);
  reduceMotion.addEventListener('change', initializeReveals);
  // Keyboard navigation reveals a focused block immediately.
  document.addEventListener('focusin', e => {
    const block = e.target.closest('.reveal.pending');
    if (block) {
      block.style.setProperty('--reveal-delay', '0ms');
      block.classList.remove('pending');
      block.dataset.revealed = 'true';
      revealObserver?.unobserve(block);
    }
  });
  // Keep the brand font when an interactive example updates visible copy.
  function setBrandedText(element, text) {
    const pieces = text.split(/(gōster)/gi);
    element.replaceChildren(...pieces.map(piece => {
      if (/^gōster$/i.test(piece)) {
        const brand = document.createElement('span');
        brand.className = 'brand-name'; brand.textContent = 'gōster'; return brand;
      }
      return document.createTextNode(piece);
    }));
  }
  const demo = document.querySelector('.demo');
  const tabs = [...document.querySelectorAll('[data-example]')];
  const report = document.getElementById('report-text');
  const status = document.getElementById('report-status');
  const play = document.querySelector('.demo-play');
  let current = 0, timer;
  function finish() {
    clearTimeout(timer); demo.classList.remove('is-playing');
    report.textContent = copy.examples[current][1]; status.textContent = copy.ready;
    play.disabled = false; play.firstChild.textContent = copy.again;
    document.getElementById('demo-panel').setAttribute('aria-busy', 'false');
  }
  function run() {
    clearTimeout(timer);
    if (paused || reduceMotion.matches) { finish(); return; }
    demo.classList.add('is-playing'); play.disabled = true;
    status.textContent = copy.generating;
    document.getElementById('demo-panel').setAttribute('aria-busy', 'true');
    report.textContent = '…';
    timer = setTimeout(finish, 1400);
  }
  function choose(index, focus = false) {
    current = index;
    tabs.forEach((tab, i) => { tab.setAttribute('aria-selected', String(i === index)); tab.tabIndex = i === index ? 0 : -1; });
    document.getElementById('demo-panel').setAttribute('aria-labelledby', `tab-${index}`);
    document.getElementById('dictation-text').textContent = copy.examples[index][0];
    setBrandedText(document.getElementById('demo-explanation'), copy.examples[index][2]);
    if (focus) tabs[index].focus();
    run();
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => choose(i));
    tab.addEventListener('keydown', e => {
      const next = e.key === 'ArrowRight' ? (i + 1) % tabs.length : e.key === 'ArrowLeft' ? (i + tabs.length - 1) % tabs.length : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : -1;
      if (next >= 0) { e.preventDefault(); choose(next, true); }
    });
  });
  play.addEventListener('click', run);
  if ('IntersectionObserver' in window) {
    const demoObserver = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { if (!paused) run(); demoObserver.disconnect(); }
    }, { threshold: .5 });
    demoObserver.observe(demo);
  }
  document.querySelectorAll('.faq details').forEach(detail => detail.addEventListener('toggle', () => {
    if (detail.open) document.querySelectorAll('.faq details').forEach(other => { if (other !== detail) other.open = false; });
  }));
  // Keep old public section links working after simplifying the page.
  const aliases = { '#como-funciona': '#flujo', '#diccionario': '#producto', '#capacidades': '#producto', '#autopilot': '#producto', '#cta': '#precios' };
  if (aliases[location.hash]) document.querySelector(aliases[location.hash])?.scrollIntoView();
})();
