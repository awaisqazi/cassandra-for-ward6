// Shared motion: scroll reveal for .animate-in, day countdown chips, ticker pause offscreen.
export const REDUCED = matchMedia('(prefers-reduced-motion: reduce)');

export function daysUntil(iso) {
  const [y, m, d] = String(iso).split('-').map(Number);
  const now = new Date();
  return Math.round((Date.UTC(y, m - 1, d) - Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())) / 86400000);
}

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); reveal.unobserve(entry.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function initCountdowns() {
  document.querySelectorAll('[data-days-until]').forEach((el) => {
    el.textContent = String(Math.max(0, daysUntil(el.dataset.daysUntil)));
  });
}

function initTickers() {
  const tickers = document.querySelectorAll('[data-ticker]');
  if (!tickers.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.target.classList.toggle('is-offscreen', !e.isIntersecting));
  });
  tickers.forEach((t) => io.observe(t));
}

// Synchronous safety net: anything already in the viewport is revealed at once.
// Some browsers (and device emulation) delay the observer's first callback
// until a scroll, which would leave the hero blank.
function revealInView() {
  const vh = window.innerHeight;
  document.querySelectorAll('.animate-in:not(.visible)').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < vh && r.bottom > 0) el.classList.add('visible');
  });
}

export function initMotion() {
  document.querySelectorAll('.animate-in').forEach((el) => reveal.observe(el));
  revealInView();
  window.addEventListener('load', revealInView, { once: true });
  window.addEventListener('pageshow', revealInView);
  setTimeout(revealInView, 600);
  initCountdowns();
  initTickers();
}
