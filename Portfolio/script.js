/* ============================================================
   PORTFOLIO RANIA — script.js
   Interactions : barre de progression, scroll reveal,
   barres de compétences, nav active, curseur personnalisé
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. BARRE DE PROGRESSION DE LECTURE ── */
  const prog = document.createElement('div');
  prog.id = 'read-progress';
  document.body.prepend(prog);

  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.width = max > 0 ? (window.scrollY / max * 100) + '%' : '0%';
  }, { passive: true });


  /* ── 2. RÉVÉLATION AU SCROLL (.reveal → .reveal.on) ── */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => entry.target.classList.add('on'), i * 55);
      revealObs.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


  /* ── 3. BARRES DE COMPÉTENCES ANIMÉES (data-w = % cible) ── */
  const barObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      requestAnimationFrame(() => {
        entry.target.style.width = entry.target.dataset.w + '%';
      });
      barObs.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.sk-fill').forEach(bar => barObs.observe(bar));


  /* ── 4. NAV ACTIVE ── */
  const navLinks = document.querySelectorAll('.nav-link');
  const navObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(l =>
        l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id)
      );
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('section[id]').forEach(s => navObs.observe(s));


  /* ── 5. CURSEUR PERSONNALISÉ (desktop uniquement) ── */
  if (window.matchMedia('(pointer: fine)').matches) {
    const cur = document.createElement('div');
    cur.id = 'custom-cursor';
    Object.assign(cur.style, {
      position: 'fixed', width: '18px', height: '18px',
      border: '1.5px solid #5C1010', borderRadius: '50%',
      pointerEvents: 'none', zIndex: '99999',
      transform: 'translate(-50%, -50%)',
      transition: 'width .18s ease, height .18s ease, opacity .2s ease',
      opacity: '0', mixBlendMode: 'multiply',
    });
    document.body.appendChild(cur);

    document.addEventListener('mousemove', e => {
      cur.style.opacity = '1';
      cur.style.left = e.clientX + 'px';
      cur.style.top  = e.clientY + 'px';
    });
    document.addEventListener('mouseleave', () => cur.style.opacity = '0');

    document.querySelectorAll('a, button, .pc, .wk-card, .arc-card').forEach(el => {
      el.addEventListener('mouseenter', () => { cur.style.width = '34px'; cur.style.height = '34px'; });
      el.addEventListener('mouseleave', () => { cur.style.width = '18px'; cur.style.height = '18px'; });
    });
  }

}); // fin DOMContentLoaded
