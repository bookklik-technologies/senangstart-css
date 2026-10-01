/**
 * SenangStart CSS - Opt-in presets (components layer)
 *
 *   export default { presets: ['prose', 'forms'] }
 *
 * prose  — readable long-form typography for rendered Markdown/CMS content:
 *          <article visual="prose">…</article>   (+ prose-sm / prose-lg / prose-invert)
 * forms  — sensible default styling for form controls (element selectors, like
 *          @tailwindcss/forms' "base" strategy): borders, padding, focus ring,
 *          native-looking checkbox/radio using the accent colour.
 *
 * Preset CSS lives in @layer senangstart.components, below utilities, so any
 * utility on the same element overrides it. Everything references theme tokens.
 */
import { attrName } from '../../core/constants.js';

export const PRESET_NAMES = ['prose', 'forms'];
/** Keywords that only exist when a preset is enabled (used for diagnostics). */
export const PRESET_KEYWORDS = {
  prose: 'prose', 'prose-sm': 'prose', 'prose-lg': 'prose', 'prose-invert': 'prose'
};

/**
 * Normalise config.presets (array of names, or { name: true|options }).
 * @param {Object} config
 * @returns {Map<string, Object>} enabled presets → options
 */
export function enabledPresets(config) {
  const out = new Map();
  const p = config && config.presets;
  if (Array.isArray(p)) {
    for (const item of p) {
      if (typeof item === 'string' && PRESET_NAMES.includes(item)) out.set(item, {});
      else if (item && typeof item === 'object' && PRESET_NAMES.includes(item.name)) out.set(item.name, item);
    }
  } else if (p && typeof p === 'object') {
    for (const [name, v] of Object.entries(p)) {
      if (!PRESET_NAMES.includes(name) || v === false) continue;
      out.set(name, v === true ? {} : (v || {}));
    }
  }
  return out;
}

/** @returns {string} CSS for all enabled presets ('' when none) */
export function generatePresets(config) {
  const enabled = enabledPresets(config);
  let css = '';
  if (enabled.has('prose')) css += generateProse(config, enabled.get('prose'));
  if (enabled.has('forms')) css += generateForms(config, enabled.get('forms'));
  return css;
}

// ---------------------------------------------------------------------------
// prose
// ---------------------------------------------------------------------------

export function generateProse(config, options = {}) {
  const V = attrName('visual', config);
  const P = `[${V}~="prose"]`;
  const maxWidth = options.maxWidth || '65ch';
  // colour roles (dark counterpart in brackets)
  const body = 'var(--c-gray-700)', headings = 'var(--c-gray-900)', muted = 'var(--c-gray-500)';
  const links = 'var(--c-primary)', borders = 'var(--c-gray-200)', code = 'var(--c-gray-900)', codeBg = 'var(--c-gray-100)';
  const preBg = 'var(--c-gray-800)', preText = 'var(--c-gray-100)', quoteBorder = 'var(--c-gray-300)';

  return `/* SenangStart preset: prose */
${P} {
  --prose-body: ${body}; --prose-headings: ${headings}; --prose-muted: ${muted}; --prose-links: ${links};
  --prose-borders: ${borders}; --prose-code: ${code}; --prose-code-bg: ${codeBg}; --prose-pre-bg: ${preBg}; --prose-pre-text: ${preText};
  --prose-quote-border: ${quoteBorder};
  --prose-size: 1rem; --prose-leading: 1.75;
  color: var(--prose-body); max-width: ${maxWidth}; font-size: var(--prose-size); line-height: var(--prose-leading);
}
[${V}~="prose-sm"] { --prose-size: 0.875rem; --prose-leading: 1.7142857; }
[${V}~="prose-lg"] { --prose-size: 1.125rem; --prose-leading: 1.7777778; }
[${V}~="prose-invert"] {
  --prose-body: var(--c-gray-300); --prose-headings: var(--c-white); --prose-muted: var(--c-gray-400); --prose-links: var(--c-blue-400);
  --prose-borders: var(--c-gray-700); --prose-code: var(--c-white); --prose-code-bg: var(--c-gray-800); --prose-pre-bg: var(--c-gray-900);
  --prose-pre-text: var(--c-gray-100); --prose-quote-border: var(--c-gray-600);
}
${P} :where(p) { margin-top: 1.25em; margin-bottom: 1.25em; }
${P} :where(a) { color: var(--prose-links); text-decoration: underline; font-weight: 500; }
${P} :where(strong) { color: var(--prose-headings); font-weight: 600; }
${P} :where(h1) { color: var(--prose-headings); font-weight: 800; font-size: 2.25em; line-height: 1.1111111; margin-top: 0; margin-bottom: 0.8888889em; }
${P} :where(h2) { color: var(--prose-headings); font-weight: 700; font-size: 1.5em; line-height: 1.3333333; margin-top: 2em; margin-bottom: 1em; }
${P} :where(h3) { color: var(--prose-headings); font-weight: 600; font-size: 1.25em; line-height: 1.6; margin-top: 1.6em; margin-bottom: 0.6em; }
${P} :where(h4) { color: var(--prose-headings); font-weight: 600; line-height: 1.5; margin-top: 1.5em; margin-bottom: 0.5em; }
${P} :where(h2 + *, h3 + *, h4 + *, hr + *) { margin-top: 0; }
${P} :where(ul, ol) { margin-top: 1.25em; margin-bottom: 1.25em; padding-left: 1.625em; }
${P} :where(ul) { list-style-type: disc; }
${P} :where(ol) { list-style-type: decimal; }
${P} :where(li) { margin-top: 0.5em; margin-bottom: 0.5em; }
${P} :where(li)::marker { color: var(--prose-muted); }
${P} :where(blockquote) { font-style: italic; color: var(--prose-headings); border-left: 0.25rem solid var(--prose-quote-border); padding-left: 1em; margin: 1.6em 0; }
${P} :where(code) { color: var(--prose-code); background-color: var(--prose-code-bg); font-weight: 600; font-size: 0.875em; padding: 0.125em 0.375em; border-radius: 0.25rem; }
${P} :where(pre) { color: var(--prose-pre-text); background-color: var(--prose-pre-bg); overflow-x: auto; font-weight: 400; font-size: 0.875em; line-height: 1.7142857; margin: 1.7142857em 0; border-radius: 0.375rem; padding: 0.8571429em 1.1428571em; }
${P} :where(pre code) { background-color: transparent; color: inherit; font-weight: inherit; font-size: inherit; padding: 0; border-radius: 0; }
${P} :where(hr) { border-color: var(--prose-borders); border-top-width: 1px; margin: 3em 0; }
${P} :where(img, video, figure) { margin-top: 2em; margin-bottom: 2em; }
${P} :where(figcaption) { color: var(--prose-muted); font-size: 0.875em; line-height: 1.4285714; margin-top: 0.8571429em; }
${P} :where(table) { width: 100%; table-layout: auto; text-align: left; margin: 2em 0; font-size: 0.875em; line-height: 1.7142857; border-collapse: collapse; }
${P} :where(thead) { border-bottom: 1px solid var(--prose-quote-border); }
${P} :where(th) { color: var(--prose-headings); font-weight: 600; vertical-align: bottom; padding: 0 0.5714286em 0.5714286em; }
${P} :where(tbody tr) { border-bottom: 1px solid var(--prose-borders); }
${P} :where(td) { vertical-align: baseline; padding: 0.5714286em; }
${P} :where(:first-child) { margin-top: 0; }
${P} :where(:last-child) { margin-bottom: 0; }
`;
}

// ---------------------------------------------------------------------------
// forms
// ---------------------------------------------------------------------------

export function generateForms(config, options = {}) {
  const accent = options.accent || 'var(--c-primary)';
  const border = options.border || 'var(--c-gray-300)';
  const radius = options.radius || 'var(--r-small, 0.25rem)';
  return `/* SenangStart preset: forms */
:where([type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select) {
  appearance: none; background-color: var(--c-white); border: 1px solid ${border}; border-radius: ${radius};
  padding: 0.5rem 0.75rem; font-size: 1rem; line-height: 1.5rem; color: inherit;
}
:where([type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select):focus {
  outline: 2px solid transparent; outline-offset: 2px; border-color: ${accent}; box-shadow: 0 0 0 1px ${accent};
}
:where(input::placeholder, textarea::placeholder) { color: var(--c-gray-500); opacity: 1; }
:where(::-webkit-datetime-edit-fields-wrapper) { padding: 0; }
:where(::-webkit-date-and-time-value) { min-height: 1.5em; text-align: inherit; }
:where(select) {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center; background-repeat: no-repeat; background-size: 1.5em 1.5em; padding-right: 2.5rem; print-color-adjust: exact;
}
:where([multiple], [size]:where(select:not([size='1']))) { background-image: none; background-position: initial; background-repeat: unset; background-size: initial; padding-right: 0.75rem; print-color-adjust: unset; }
:where([type='checkbox'], [type='radio']) {
  appearance: none; padding: 0; print-color-adjust: exact; display: inline-block; vertical-align: middle; background-origin: border-box;
  user-select: none; flex-shrink: 0; height: 1rem; width: 1rem; color: ${accent}; background-color: var(--c-white); border: 1px solid var(--c-gray-500);
}
:where([type='checkbox']) { border-radius: 0.25rem; }
:where([type='radio']) { border-radius: 100%; }
:where([type='checkbox'], [type='radio']):focus { outline: 2px solid transparent; outline-offset: 2px; box-shadow: 0 0 0 2px var(--c-white), 0 0 0 4px ${accent}; }
:where([type='checkbox'], [type='radio']):checked { border-color: transparent; background-color: currentColor; background-size: 100% 100%; background-position: center; background-repeat: no-repeat; }
:where([type='checkbox']):checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
:where([type='radio']):checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
:where([type='checkbox']):indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e"); border-color: transparent; background-color: currentColor; background-size: 100% 100%; background-position: center; background-repeat: no-repeat; }
:where([type='checkbox'], [type='radio']):checked:hover, :where([type='checkbox'], [type='radio']):checked:focus { border-color: transparent; background-color: currentColor; }
:where([type='file']) { background: unset; border-color: inherit; border-width: 0; border-radius: 0; padding: 0; font-size: unset; line-height: inherit; }
:where([type='file']):focus { outline: 1px solid ButtonText; outline: 1px auto -webkit-focus-ring-color; }
`;
}

export default { generatePresets, enabledPresets, PRESET_NAMES, PRESET_KEYWORDS };
