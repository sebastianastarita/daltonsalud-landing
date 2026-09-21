(() => {
  const overlay = document.querySelector('.brand-intro');
  const brandLogo = document.querySelector('.brand-logo-static');
  const hero = document.querySelector('.hero');
  const copy = document.querySelector('.hero-copy');
  const visual = document.querySelector('.hero-visual');

  if (!overlay || !brandLogo || !hero || !copy || !visual) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const forceReplay = new URLSearchParams(window.location.search).get('intro') === '1';
  let alreadySeen = false;

  try {
    alreadySeen = window.sessionStorage.getItem('dalton-brand-intro-v1') === 'seen';
  } catch (_) {
    alreadySeen = false;
  }

  if (reduceMotion || (alreadySeen && !forceReplay)) return;

  const isotype = overlay.querySelector('.brand-intro-isotype');
  const master = overlay.querySelector('.brand-intro-master');
  const sweep = overlay.querySelector('.brand-intro-sweep');

  if (!isotype || !master || !sweep) return;
  const duration = 3000;
  let start = 0;

  const clamp = (value) => Math.max(0, Math.min(1, value));
  const smooth = (value) => {
    const t = clamp(value);
    return t * t * (3 - 2 * t);
  };
  const easeOut = (value) => 1 - Math.pow(1 - clamp(value), 4);

  const geometry = () => {
    const target = brandLogo.getBoundingClientRect();
    const stage = hero.getBoundingClientRect();
    const width = overlay.getBoundingClientRect().width;
    const startScale = window.innerWidth < 620 ? 1.06 : 1.22;
    const startWidth = width * startScale;
    const startHeight = startWidth * 224 / 571;

    return {
      startX: stage.left + stage.width / 2 - startWidth / 2,
      startY: stage.top + Math.min(stage.height * 0.27, 170) - startHeight / 2,
      startScale,
      targetX: target.left,
      targetY: target.top,
      targetScale: target.width / width
    };
  };

  const render = (progress) => {
    const p = clamp(progress);
    const assemble = easeOut(p / 0.43);
    const reveal = smooth((p - 0.34) / 0.22);
    const dock = smooth((p - 0.60) / 0.25);
    const content = smooth((p - 0.76) / 0.18);
    const g = geometry();

    const x = g.startX + (g.targetX - g.startX) * dock;
    const y = g.startY + (g.targetY - g.startY) * dock;
    const scale = g.startScale + (g.targetScale - g.startScale) * dock;
    overlay.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

    const initialIsotypeScale = window.innerWidth < 620 ? 1.8 : 1.9;
    const isotypeScale = 1 + (initialIsotypeScale - 1) * (1 - assemble);
    isotype.style.transform = `translate(${18 * (1 - assemble)}px, ${-8 * (1 - assemble)}px) scale(${isotypeScale})`;
    isotype.style.opacity = String(1 - smooth((p - 0.48) / 0.14));

    master.style.opacity = String(reveal);
    master.style.clipPath = `inset(0 ${100 * (1 - reveal)}% 0 0)`;
    sweep.style.left = `${-15 + 125 * reveal}%`;
    sweep.style.opacity = String(0.72 * (1 - smooth((p - 0.56) / 0.1)));
    copy.style.opacity = String(content);
    copy.style.transform = `translateY(${20 * (1 - content)}px)`;
    visual.style.opacity = String(content);
    visual.style.transform = `translateX(${24 * (1 - content)}px) scale(${0.98 + 0.02 * content})`;
  };

  const finish = () => {
    document.body.classList.remove('intro-running');
    overlay.classList.remove('is-active');
    overlay.removeAttribute('style');
    brandLogo.removeAttribute('style');
    copy.removeAttribute('style');
    visual.removeAttribute('style');
    try {
      window.sessionStorage.setItem('dalton-brand-intro-v1', 'seen');
    } catch (_) {
      // The animation remains safe when storage is unavailable.
    }
  };

  const tick = (timestamp) => {
    if (!start) start = timestamp;
    const progress = (timestamp - start) / duration;
    render(progress);
    if (progress < 1) {
      window.requestAnimationFrame(tick);
    } else {
      finish();
    }
  };

  document.body.classList.add('intro-running');
  overlay.classList.add('is-active');
  render(0);
  window.requestAnimationFrame(tick);
})();
