// Parity audit: every en.json key exists in es.json, every data-i18n resolves, no dead keys.
import fs from 'fs';
import { execSync } from 'child_process';
const load = (suffix) => fs.readdirSync('src/i18n/parts').filter(f => f.endsWith(suffix))
  .reduce((acc, f) => Object.assign(acc, JSON.parse(fs.readFileSync('src/i18n/parts/' + f, 'utf8'))), {});
const en = load('.en.json');
const es = load('.es.json');
const flat = (o, p = '') => Object.keys(o).reduce((a, k) => { const v = o[k], K = p ? p + '.' + k : k; return v && typeof v === 'object' ? Object.assign(a, flat(v, K)) : (a[K] = v, a); }, {});
const enK = new Set(Object.keys(flat(en))), esK = new Set(Object.keys(flat(es)));
// Static refs only (data-i18n="a.b"). Dynamic refs like data-i18n={`x.${k}`} are ignored, so "dead" is advisory.
const used = new Set(execSync("grep -rohE 'data-i18n=\"[^\"]*\"' src/components src/pages src/layouts | sort -u", { encoding: 'utf8' })
  .split('\n').filter(Boolean).map(s => s.replace(/^data-i18n="|"$/g, '')));
const report = {
  'missing in es': [...enK].filter(k => !esK.has(k)),
  'missing in en': [...esK].filter(k => !enK.has(k)),
  'used not in en': [...used].filter(k => !enK.has(k)),
  'dead in en (static refs only)': [...enK].filter(k => !used.has(k)),
};
console.log('en', enK.size, 'es', esK.size, 'used(static)', used.size);
let bad = false;
for (const [k, v] of Object.entries(report)) { if (v.length) { console.log(k + ':', v); if (!k.startsWith('dead')) bad = true; } }
process.exit(bad ? 1 : 0);
