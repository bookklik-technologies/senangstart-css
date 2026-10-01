/**
 * SenangStart CSS - Variant Engine
 *
 * Single place where variant prefixes (`tab:`, `hover:`, `dark:`, `max-tab:`,
 * `tab-lap:`, `print:`) are recognised, ordered and turned into
 * selector / at-rule wrappers.
 *
 * All selector composition goes through composeSelector(); the next phase
 * can add aria-, data-, :has() and container variants by calling
 * registerVariantHandler() without touching the CSS generator.
 */

import { BREAKPOINTS } from '../core/constants.js';

// ---------------------------------------------------------------------------
// State (pseudo) variants
// ---------------------------------------------------------------------------

/**
 * Built-in state variants.
 *  selector : pseudo-class / attribute selector appended to the element
 *  group    : layout capability keyword that lets a parent trigger the state
 *  trigger  : pseudo used on the parent (defaults to selector)
 */
export const STATE_VARIANTS = {
  hover:           { selector: ':hover',                  group: 'hoverable' },
  focus:           { selector: ':focus',                  group: 'focusable', trigger: ':focus-within' },
  'focus-visible': { selector: ':focus-visible',          group: 'focusable', trigger: ':focus-within' },
  'focus-within':  { selector: ':focus-within' },
  active:          { selector: ':active',                 group: 'pressable' },
  checked:         { selector: ':checked' },
  disabled:        { selector: ':disabled' },
  expanded:        { selector: '[aria-expanded="true"]',  group: 'expandable' },
  selected:        { selector: '[aria-selected="true"]',  group: 'selectable' },
  required:        { selector: ':required' },
  optional:        { selector: ':optional' },
  valid:           { selector: ':valid' },
  invalid:         { selector: ':invalid' },
  placeholder:     { selector: '::placeholder' },
  // Structural
  first:           { selector: ':first-child' },
  last:            { selector: ':last-child' },
  only:            { selector: ':only-child' },
  odd:             { selector: ':nth-child(odd)' },
  even:            { selector: ':nth-child(even)' },
  'first-of-type': { selector: ':first-of-type' },
  'last-of-type':  { selector: ':last-of-type' },
  empty:           { selector: ':empty' },
  // Links & forms
  visited:         { selector: ':visited' },
  target:          { selector: ':target' },
  enabled:         { selector: ':enabled' },
  indeterminate:   { selector: ':indeterminate' },
  default:         { selector: ':default' },
  autofill:        { selector: ':autofill' },
  'read-only':     { selector: ':read-only' },
  'placeholder-shown': { selector: ':placeholder-shown' },
  'in-range':      { selector: ':in-range' },
  'out-of-range':  { selector: ':out-of-range' },
  'user-valid':    { selector: ':user-valid' },
  'user-invalid':  { selector: ':user-invalid' },
  open:            { selector: ':is([open], :popover-open)' },
  // Direction (matches the element or any ancestor with dir set)
  rtl:             { selector: ':where([dir="rtl"], [dir="rtl"] *)' },
  ltr:             { selector: ':where([dir="ltr"], [dir="ltr"] *)' },
  // Pseudo-elements (always placed last in the compound selector)
  before:          { selector: '::before', pseudoElement: true, content: true },
  after:           { selector: '::after', pseudoElement: true, content: true },
  selection:       { selector: '::selection', pseudoElement: true },
  marker:          { selector: '::marker', pseudoElement: true },
  file:            { selector: '::file-selector-button', pseudoElement: true },
  backdrop:        { selector: '::backdrop', pseudoElement: true },
  'first-line':    { selector: '::first-line', pseudoElement: true },
  'first-letter':  { selector: '::first-letter', pseudoElement: true }
};

/** Media-feature variants (wrap the rule in an @media block). */
export const MEDIA_VARIANTS = {
  'motion-safe':    '(prefers-reduced-motion: no-preference)',
  'motion-reduce':  '(prefers-reduced-motion: reduce)',
  'contrast-more':  '(prefers-contrast: more)',
  'contrast-less':  '(prefers-contrast: less)',
  'forced-colors':  '(forced-colors: active)',
  portrait:         '(orientation: portrait)',
  landscape:        '(orientation: landscape)',
  'pointer-fine':   '(pointer: fine)',
  'pointer-coarse': '(pointer: coarse)',
  'hover-none':     '(hover: none)'
};

const ARBITRARY_ATTR = /^\[([a-z][a-z0-9-]*)(?:=([A-Za-z0-9_ .-]+))?\]$/;

/**
 * Selector for a pattern variant: aria-*, data-*, has-[…], not-* or null.
 * @param {string} part
 * @returns {string|null}
 */
function patternSelector(part) {
  // aria-checked → [aria-checked="true"]; aria-[sort=asc] → [aria-sort="asc"]
  if (part.startsWith('aria-')) {
    const rest = part.slice(5);
    const m = ARBITRARY_ATTR.exec(rest);
    if (m) return `[aria-${m[1]}="${m[2] !== undefined ? m[2].replace(/_/g, ' ') : 'true'}"]`;
    if (/^[a-z]+$/.test(rest)) return `[aria-${rest}="true"]`;
    return null;
  }
  // data-active → [data-active]; data-[state=open] → [data-state="open"]
  if (part.startsWith('data-')) {
    const rest = part.slice(5);
    const m = ARBITRARY_ATTR.exec(rest);
    if (m) return m[2] !== undefined ? `[data-${m[1]}="${m[2].replace(/_/g, ' ')}"]` : `[data-${m[1]}]`;
    if (/^[a-z][a-z0-9-]*$/.test(rest)) return `[data-${rest}]`;
    return null;
  }
  // has-[img] / has-[:checked] / has-[.x] → :has(…)
  if (part.startsWith('has-[') && part.endsWith(']')) {
    const inner = part.slice(5, -1).replace(/_/g, ' ');
    if (/^[A-Za-z0-9 :.#\[\]=()*"'-]+$/.test(inner)) return `:has(${inner})`;
    return null;
  }
  // not-hover / not-first / not-[.x] → :not(…)
  if (part.startsWith('not-')) {
    const rest = part.slice(4);
    if (rest.startsWith('[') && rest.endsWith(']')) {
      const inner = rest.slice(1, -1).replace(/_/g, ' ');
      return /^[A-Za-z0-9 :.#\[\]=()*"'-]+$/.test(inner) ? `:not(${inner})` : null;
    }
    const st = STATE_VARIANTS[rest];
    if (st && !st.pseudoElement && !st.selector.startsWith(':where')) return `:not(${st.selector})`;
    return null;
  }
  return null;
}

/**
 * CSS selector suffix for a parsed state variant.
 * @param {{ name: string, selector?: string }} p
 * @returns {string}
 */
export function stateSelector(p) {
  if (p.selector) return p.selector;
  const st = STATE_VARIANTS[p.name];
  return st ? st.selector : `:${p.name}`;
}

const STATE_ORDER = Object.keys(STATE_VARIANTS);

// ---------------------------------------------------------------------------
// Extension hook
// ---------------------------------------------------------------------------

const customHandlers = new Map();

/**
 * Register a custom variant handler.
 * @param {string} name - Prefix (without colon)
 * @param {{ selector?: string, atRule?: string, weight?: number, apply?: Function }} handler
 *   apply(baseSelector, ctx) → { selector, atRules } may be given for full control.
 */
export function registerVariantHandler(name, handler) {
  if (!name || typeof name !== 'string') throw new TypeError('variant name must be a string');
  customHandlers.set(name, handler);
}

/** @param {string} name */
export function unregisterVariantHandler(name) {
  customHandlers.delete(name);
}

// ---------------------------------------------------------------------------
// Breakpoints
// ---------------------------------------------------------------------------

const DEFAULT_SCREENS = {
  mob: '480px', tab: '768px', lap: '1024px', desk: '1280px', print: 'print',
  'tw-sm': '640px', 'tw-md': '768px', 'tw-lg': '1024px', 'tw-xl': '1280px', 'tw-2xl': '1536px'
};

function toPx(value) {
  if (typeof value === 'number') return value;
  if (typeof value !== 'string') return NaN;
  const m = /^(\d*\.?\d+)(px|rem|em)?$/.exec(value.trim());
  if (!m) return NaN;
  const n = parseFloat(m[1]);
  return m[2] === 'rem' || m[2] === 'em' ? n * 16 : n;
}

const screensCache = new WeakMap();

/**
 * Ordered breakpoint table built from config.theme.screens.
 * Numeric screens are sorted by min-width ascending; non-numeric
 * (e.g. `print`) go last in declaration order.
 * @param {Object} config
 * @returns {Array<{ name: string, value: string, px: number, media: string, index: number }>}
 */
export function getBreakpoints(config) {
  const screens = (config && config.theme && config.theme.screens) || DEFAULT_SCREENS;
  if (typeof screens === 'object' && screensCache.has(screens)) return screensCache.get(screens);

  const list = Object.entries(screens).map(([name, value], declIndex) => {
    const px = toPx(value);
    let media;
    if (value === 'print' || name === 'print') media = 'print';
    else if (!Number.isNaN(px)) media = `(min-width: ${value})`;
    else media = `(min-width: ${value})`;
    return { name, value, px, media, declIndex };
  });
  list.sort((a, b) => {
    const an = Number.isNaN(a.px), bn = Number.isNaN(b.px);
    if (an && bn) return a.declIndex - b.declIndex;
    if (an) return 1;
    if (bn) return -1;
    if (a.px !== b.px) return a.px - b.px;
    return a.declIndex - b.declIndex;
  });
  list.forEach((bp, i) => { bp.index = i; });
  if (typeof screens === 'object') screensCache.set(screens, list);
  return list;
}

function findBreakpoint(name, config) {
  return getBreakpoints(config).find((bp) => bp.name === name) || null;
}

// ---------------------------------------------------------------------------
// Parsing
// ---------------------------------------------------------------------------

/**
 * Classify a single prefix segment.
 * @param {string} part
 * @param {Object} [config]
 * @returns {null | { type: 'breakpoint'|'max'|'range'|'dark'|'state'|'custom', name: string, from?: string, to?: string }}
 */
export function parseVariant(part, config) {
  if (typeof part !== 'string' || !part) return null;
  if (part === 'dark') return { type: 'dark', name: 'dark' };
  if (STATE_VARIANTS[part]) {
    const st = STATE_VARIANTS[part];
    return { type: 'state', name: part, selector: st.selector, pseudoElement: !!st.pseudoElement, content: !!st.content };
  }
  if (MEDIA_VARIANTS[part]) return { type: 'media', name: part, query: MEDIA_VARIANTS[part] };
  if (customHandlers.has(part)) return { type: 'custom', name: part };
  const pat = patternSelector(part);
  if (pat) return { type: 'state', name: part, selector: pat };

  const names = config && config.theme && config.theme.screens
    ? Object.keys(config.theme.screens)
    : BREAKPOINTS.concat(['print']);

  if (names.includes(part)) return { type: 'breakpoint', name: part };
  if (part.startsWith('max-') && names.includes(part.slice(4))) {
    return { type: 'max', name: part, to: part.slice(4) };
  }
  // range: <bp>-<bp> (both must be known and the first must be smaller)
  for (const from of names) {
    if (part.startsWith(`${from}-`)) {
      const to = part.slice(from.length + 1);
      if (names.includes(to) && from !== to) return { type: 'range', name: part, from, to };
    }
  }
  return null;
}

/**
 * Split a raw token into [variants[], rest] where variants are the leading
 * segments recognised by parseVariant().
 * @param {string[]} parts - raw.split(':')
 * @param {Object} [config]
 * @returns {{ variants: string[], rest: string[] }}
 */
export function splitVariants(parts, config) {
  const variants = [];
  let i = 0;
  while (i < parts.length - 1 && parseVariant(parts[i], config)) {
    variants.push(parts[i]);
    i++;
  }
  return { variants, rest: parts.slice(i) };
}

/**
 * Derive legacy `breakpoint` / `state` fields from a variants array.
 * @param {string[]} variants
 * @param {Object} [config]
 */
export function deriveLegacyFields(variants, config) {
  let breakpoint = null;
  let state = null;
  for (const v of variants) {
    const p = parseVariant(v, config);
    if (!p) continue;
    if (p.type === 'breakpoint' || p.type === 'max' || p.type === 'range') breakpoint = breakpoint || v;
    else if (p.type === 'dark') state = state || 'dark';
    else if (p.type === 'state' || p.type === 'custom') {
      // dark wins the legacy `state` slot only when it is the sole non-breakpoint variant
      if (!state || state === 'dark') state = v;
    }
  }
  return { breakpoint, state };
}

/**
 * Variants of a token — prefers token.variants, falls back to legacy fields.
 * @param {Object} token
 * @returns {string[]}
 */
export function tokenVariants(token) {
  if (Array.isArray(token.variants)) return token.variants;
  const v = [];
  if (token.breakpoint) v.push(token.breakpoint);
  if (token.state === 'dark') v.push('dark');
  else if (token.state) v.push(token.state);
  return v;
}

// ---------------------------------------------------------------------------
// Ordering
// ---------------------------------------------------------------------------

/**
 * Numeric cascade weight of a variant list.
 *   none < states < responsive (min-width asc) < dark < responsive+dark
 * @param {string[]} variants
 * @param {Object} config
 * @returns {number}
 */
export function variantWeight(variants, config) {
  let weight = 0;
  let hasDark = false;
  let responsive = 0;
  let stateW = 0;
  const bps = getBreakpoints(config);
  for (const v of variants) {
    const p = parseVariant(v, config);
    if (!p) continue;
    if (p.type === 'dark') hasDark = true;
    else if (p.type === 'breakpoint') responsive = Math.max(responsive, 100 + (findBreakpoint(p.name, config)?.index ?? bps.length) * 10);
    else if (p.type === 'max') responsive = Math.max(responsive, 100 + (findBreakpoint(p.to, config)?.index ?? bps.length) * 10 + 5);
    else if (p.type === 'range') responsive = Math.max(responsive, 100 + (findBreakpoint(p.from, config)?.index ?? bps.length) * 10 + 7);
    else if (p.type === 'state') stateW += 1 + STATE_ORDER.indexOf(p.name);
    else if (p.type === 'custom') stateW += customHandlers.get(p.name)?.weight ?? 1;
  }
  weight = stateW + responsive + (hasDark ? 1000 : 0);
  return weight;
}

// ---------------------------------------------------------------------------
// Dark mode
// ---------------------------------------------------------------------------

/**
 * Resolve the dark-mode strategy from config.
 *   'media' (default) → @media (prefers-color-scheme: dark)
 *   'selector' | 'class' → .dark
 *   ['selector', '<sel>'] → custom selector
 * @param {Object} config
 * @returns {{ strategy: 'media'|'selector', selector: string|null }}
 */
export function getDarkMode(config) {
  const darkMode = (config && config.darkMode) || 'media';
  if (Array.isArray(darkMode)) {
    return { strategy: 'selector', selector: darkMode[1] || '.dark' };
  }
  if (darkMode === 'selector' || darkMode === 'class') {
    return { strategy: 'selector', selector: '.dark' };
  }
  return { strategy: 'media', selector: null };
}

// ---------------------------------------------------------------------------
// Composition
// ---------------------------------------------------------------------------

/**
 * Compose the final selector list and at-rule wrappers for a base selector.
 *
 * @param {string} baseSelector - e.g. `[visual~="hover:bg:red"]`
 * @param {string[]} variants - e.g. ['tab', 'dark', 'hover']
 * @param {Object} config
 * @param {Object} [options]
 * @param {string}   [options.divideSuffix] - suffix for divide utilities (` > :not([hidden]) ~ :not([hidden])`)
 * @param {string[]} [options.peerIds] - interact ids to emit peer selectors for
 * @param {boolean}  [options.groups=true] - emit group (hoverable/focusable…) selectors
 * @returns {{ selector: string, atRules: string[], weight: number, states: string[] }}
 */
export function composeSelector(baseSelector, variants, config, options = {}) {
  const atRules = [];
  const states = [];
  let hasDark = false;
  const parsed = [];
  for (const v of variants) {
    const p = parseVariant(v, config);
    if (!p) continue;
    parsed.push(p);
  }

  // 1. at-rules: responsive first (outermost), then dark media (inner)
  for (const p of parsed) {
    if (p.type === 'breakpoint') {
      const bp = findBreakpoint(p.name, config);
      atRules.push(bp ? `@media ${bp.media}` : `@media (min-width: ${p.name})`);
    } else if (p.type === 'max') {
      const bp = findBreakpoint(p.to, config);
      const px = bp && !Number.isNaN(bp.px) ? bp.px : NaN;
      atRules.push(Number.isNaN(px) ? `@media not all and (min-width: ${bp ? bp.value : p.to})` : `@media (max-width: ${fmt(px - 0.02)}px)`);
    } else if (p.type === 'range') {
      const from = findBreakpoint(p.from, config);
      const to = findBreakpoint(p.to, config);
      const toPxV = to && !Number.isNaN(to.px) ? to.px : NaN;
      const minPart = `(min-width: ${from ? from.value : p.from})`;
      const maxPart = Number.isNaN(toPxV) ? `(max-width: ${to ? to.value : p.to})` : `(max-width: ${fmt(toPxV - 0.02)}px)`;
      atRules.push(`@media ${minPart} and ${maxPart}`);
    } else if (p.type === 'dark') {
      hasDark = true;
    } else if (p.type === 'custom') {
      const h = customHandlers.get(p.name);
      if (h && h.atRule) atRules.push(h.atRule);
    }
  }

  const dark = getDarkMode(config);
  if (hasDark && dark.strategy === 'media') {
    atRules.push('@media (prefers-color-scheme: dark)');
  }

  // 2. element selector with state pseudos
  const divideSuffix = options.divideSuffix || '';
  let pseudo = '';
  const groupSelectors = [];
  const peerSelectors = [];

  for (const p of parsed) {
    if (p.type === 'state') {
      states.push(p.name);
      pseudo += STATE_VARIANTS[p.name].selector;
    } else if (p.type === 'custom') {
      const h = customHandlers.get(p.name);
      if (h && h.selector) pseudo += h.selector;
    }
  }

  let elementSelector;
  if (divideSuffix) {
    // Divide utilities: state applies to the child after the tilde
    elementSelector = `${baseSelector}${divideSuffix}${pseudo}`;
  } else {
    elementSelector = `${baseSelector}${pseudo}`;
  }

  const selectors = [elementSelector];

  // 3. group / peer selectors (only for plain, non-divide utilities with exactly one state)
  if (!divideSuffix && states.length === 1 && options.groups !== false) {
    const state = states[0];
    const def = STATE_VARIANTS[state];
    if (def && def.group) {
      const trigger = def.trigger || def.selector;
      // Group: parent with capability keyword triggers the child.
      // :where() keeps the specificity equal to a plain attribute selector
      // so `[layout~="hoverable"]:hover [visual~="…"]` cannot outrank later utilities.
      groupSelectors.push(`:where([layout~="${def.group}"]:not([layout~="disabled"])${trigger}) ${baseSelector}`);
      const peerIds = options.peerIds || [];
      for (const id of peerIds) {
        peerSelectors.push(`:where([interact~="${id}"]:not([layout~="disabled"])${trigger}) ~ [listens~="${id}"]${baseSelector}`);
      }
    }
  }
  selectors.push(...groupSelectors, ...peerSelectors);

  // 4. dark selector strategy: wrap each selector so it matches the .dark
  //    element itself as well as its descendants, with zero added specificity.
  let finalSelectors = selectors;
  if (hasDark && dark.strategy === 'selector') {
    const wrap = `:where(${dark.selector}, ${dark.selector} *)`;
    // The wrapper is compounded onto the *target* element so group/peer
    // selectors keep working when the trigger is the `.dark` element itself.
    finalSelectors = selectors.map((s) => {
      const idx = s.indexOf(baseSelector);
      return idx === -1 ? `${wrap} ${s}` : `${s.slice(0, idx)}${wrap}${s.slice(idx)}`;
    });
  }

  return {
    selector: finalSelectors.join(',\n'),
    atRules,
    weight: variantWeight(variants, config),
    states
  };
}

function fmt(n) {
  return Number.isInteger(n) ? String(n) : String(Math.round(n * 100) / 100);
}

export default {
  STATE_VARIANTS,
  registerVariantHandler,
  unregisterVariantHandler,
  getBreakpoints,
  parseVariant,
  splitVariants,
  deriveLegacyFields,
  tokenVariants,
  variantWeight,
  getDarkMode,
  composeSelector
};
