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
  // Every visit starts in dark mode; the toggle applies to the current visit.
  setTheme('dark');
  themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
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
  // Reuse the guide's ghost and directional follower on mouse devices only.
  // Keep the native cursor until the image is loaded and a mouse actually moves.
  const ghost = document.getElementById('ghostCursor');
  const dot = document.getElementById('ghostDot');
  const finePointer = matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const cursorImage = new Image();
  let cursorReady = false, cursorVisible = false, cursorFrame = 0;
  let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0, facingRight = true, lastFrame = 0;
  function hideCursor() {
    cursorVisible = false;
    root.classList.remove('ghost-cursor-active');
    cancelAnimationFrame(cursorFrame); cursorFrame = 0; lastFrame = 0;
  }
  function drawDot(time) {
    cursorFrame = 0;
    if (!cursorVisible) return;
    const targetX = mouseX + (facingRight ? -10 : 18);
    const targetY = mouseY + (facingRight ? 14 : 15);
    const amount = paused || reduceMotion.matches ? 1 : 1 - Math.pow(.94, Math.min(time - (lastFrame || time - 16.67), 50) / 16.67);
    lastFrame = time;
    dotX += (targetX - dotX) * amount;
    dotY += (targetY - dotY) * amount;
    dot.style.transform = `translate3d(${dotX - 2}px, ${dotY - 2}px, 0)`;
    if (Math.abs(targetX - dotX) + Math.abs(targetY - dotY) > .1) {
      cursorFrame = requestAnimationFrame(drawDot);
    } else { lastFrame = 0; }
  }
  cursorImage.onload = () => { cursorReady = true; };
  cursorImage.src = 'assets/goster-cursor.png';
  window.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse' || !finePointer.matches || !cursorReady) { hideCursor(); return; }
    if (cursorVisible && Math.abs(e.clientX - mouseX) > 2) facingRight = e.clientX > mouseX;
    mouseX = e.clientX; mouseY = e.clientY;
    ghost.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scaleX(${facingRight ? 1 : -1})`;
    if (!cursorVisible) {
      dotX = mouseX + (facingRight ? -10 : 18); dotY = mouseY + (facingRight ? 14 : 15);
      dot.style.transform = `translate3d(${dotX - 2}px, ${dotY - 2}px, 0)`;
      cursorVisible = true; root.classList.add('ghost-cursor-active');
    }
    if (!cursorFrame) cursorFrame = requestAnimationFrame(drawDot);
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', hideCursor);
  window.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') hideCursor(); }, { passive: true });
  window.addEventListener('blur', hideCursor);
  document.addEventListener('visibilitychange', () => { if (document.hidden) hideCursor(); });
  document.addEventListener('keydown', e => { if (e.key === 'Tab') hideCursor(); });
  finePointer.addEventListener('change', () => { if (!finePointer.matches) hideCursor(); });
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
