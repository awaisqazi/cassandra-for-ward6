/** Client-side EN/ES toggle. Swaps textContent (or placeholder) of every [data-i18n]. */
// Every page owns its own dictionary in ./parts/<name>.en.json and <name>.es.json.
// Vite merges them at build time so pages can be edited independently.
const enParts = import.meta.glob('./parts/*.en.json', { eager: true, import: 'default' });
const esParts = import.meta.glob('./parts/*.es.json', { eager: true, import: 'default' });
const merge = (parts) => Object.values(parts).reduce((acc, p) => Object.assign(acc, p), {});
const en = merge(enParts);
const es = merge(esParts);

const translations = { en, es };
const KEY = 'c6-lang';

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

export function getCurrentLang() {
  try { return localStorage.getItem(KEY) || 'en'; } catch { return 'en'; }
}

export function setLang(lang) {
  try { localStorage.setItem(KEY, lang); } catch { /* private mode */ }
  applyTranslations(lang);
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    const on = btn.dataset.langToggle === lang;
    btn.classList.toggle('active', on);
    btn.setAttribute('aria-pressed', String(on));
  });
  document.dispatchEvent(new CustomEvent('c6:langchange', { detail: { lang } }));
}

export function applyTranslations(lang) {
  const t = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = getNestedValue(t, el.dataset.i18n);
    if (!value) return;
    if (el.tagName === 'INPUT' && el.type !== 'submit') el.placeholder = value;
    else if (el.tagName === 'TEXTAREA') el.placeholder = value;
    else el.textContent = value;
  });
}

export function initI18n() {
  setLang(getCurrentLang());
  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.langToggle));
  });
}
