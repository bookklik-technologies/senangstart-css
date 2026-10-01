/**
 * SenangStart CSS - Tailwind → SenangStart converter (single implementation
 * shared by the CLI script, the Node API and the browser bundle).
 *
 *   convertClass('md:hover:bg-blue-500')  → { cat: 'visual', val: 'tw-md:hover:bg:blue-500' }
 *   convertClasses('flex p-4 bg-blue-500') → { layout: [...], space: [...], visual: [...], interact, listens, unknown }
 *   convertHTML('<div class="flex p-4">')  → '<div layout="flex" space="p:medium">'
 *
 * options: { exact?: boolean }  exact keeps Tailwind's numeric scale (`p:tw-4`).
 */
import { convertBase } from './base.js';
import { convertVariant, splitClass } from './variants.js';
import { convertExtra, convertArbitrary } from './extra.js';

export { convertHTML, rewriteClassAttributes } from './html.js';
export { spacingScale, radiusScale, shadowScale, fontSizeScale, layoutMappings, visualKeywords } from './base.js';

function normalizeOptions(options) {
  if (typeof options === 'boolean') return { exact: options };
  return { exact: false, ...(options || {}) };
}

/**
 * Convert one Tailwind class.
 * @param {string} twClass
 * @param {{exact?: boolean}|boolean} [options]
 * @returns {Array<{cat: string, val: string}>|null} null when the class cannot be converted
 */
export function convertClass(twClass, options) {
  const { exact } = normalizeOptions(options);
  if (typeof twClass !== 'string' || !twClass) return null;

  const { variants, base, important } = splitClass(twClass);

  // Variants
  let prefix = '';
  const extras = [];
  let needsGroup = false;
  for (const v of variants) {
    const r = convertVariant(v);
    if (!r) return null;
    prefix += `${r.prefix}:`;
    if (r.extra) extras.push(r.extra);
    if (r.needsGroup) needsGroup = true;
  }

  // Base class
  let result = convertExtra(base, exact);
  if (result === undefined) result = convertBase(base, exact);
  if (!result) result = convertArbitrary(base, exact);
  if (!result) return null;
  const list = Array.isArray(result) ? result : [result];

  const out = [];
  for (const r of list) {
    if (!r || !r.val) continue;
    if (r.cat === 'interact' || r.cat === 'listens') { out.push(r); continue; }
    // multi-token values (e.g. `group` → capabilities) get the prefix on every token
    const val = r.val.split(/\s+/).filter(Boolean)
      .map((t) => `${important ? '!' : ''}${prefix}${t}`)
      .join(' ');
    out.push({ cat: r.cat, val });
  }
  for (const e of extras) out.push(e);
  if (needsGroup) out.push({ cat: 'meta', val: 'needs-group' });
  return out.length ? out : null;
}

/**
 * Convert a class attribute value.
 * @param {string} classString
 * @param {{exact?: boolean}|boolean} [options]
 */
export function convertClasses(classString, options) {
  const classes = String(classString || '').trim().split(/\s+/).filter(Boolean);
  const out = { layout: [], space: [], visual: [], interact: [], listens: [], unknown: [] };
  out.unrecognized = out.unknown; // legacy alias
  const push = (arr, val) => { for (const t of val.split(/\s+/)) if (t && !arr.includes(t)) arr.push(t); };
  for (const cls of classes) {
    const res = convertClass(cls, options);
    if (!res) { out.unknown.push(cls); continue; }
    for (const r of res) {
      if (r.cat === 'meta') continue;
      if (out[r.cat]) push(out[r.cat], r.val);
    }
  }
  return out;
}

export default { convertClass, convertClasses };
