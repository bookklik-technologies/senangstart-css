/**
 * SenangStart CSS - Value Resolvers
 *
 * Turns a token + registry entry into CSS declarations. This is the ONLY
 * place where a value is interpreted; there is no per-utility code.
 *
 * Resolution order for `prefix:value`:
 *   arbitrary [..]  → grammar-validated passthrough (+ url()/colour handling)
 *   enum            → static declarations from the definition
 *   colour          → theme var / keyword / [#hex], with `/opacity` → color-mix()
 *   literals        → auto, 100%, min-content …  (negatable)
 *   scale           → var(--s-key) or inline theme value (negatable, tw-* aware)
 *   numeric         → 45 → 45deg / 50 → 0.5 / 3 → repeat(3, …)
 *   passthrough     → CSS identifier emitted as-is (keyword properties only)
 *   otherwise       → UNKNOWN_VALUE
 */

import { TW_SPACING, TW_RADIUS, TW_SHADOW, TW_FONT_SIZE, TW_FONT_WEIGHT, CSS_COLOR_KEYWORDS } from '../core/constants.js';
import { validateValue, isValidScaleKey } from '../core/value-grammar.js';
import { CODES, suggest } from './diagnostics.js';
import { COLOR_PALETTE } from '../config/colors.js';

// The bundled palette is the framework's canonical colour vocabulary; keys are
// always present after mergeConfig() so they never produce dangling var() refs.
const PALETTE_KEYS = new Set(Object.keys(COLOR_PALETTE || {}));

const TW_TABLES = {
  spacing: { table: TW_SPACING, varPrefix: '--tw-', normalize: (k) => k.replace(/\./g, '-') },
  radius: { table: TW_RADIUS, varPrefix: '--r-tw-' },
  shadow: { table: TW_SHADOW, varPrefix: '--shadow-tw-' },
  fontSize: { table: TW_FONT_SIZE, varPrefix: '--tw-text-' },
  fontWeight: { table: TW_FONT_WEIGHT, varPrefix: '--tw-font-' }
};

const IDENTIFIER = /^-?[A-Za-z][A-Za-z0-9-]*$/;
const NUMBER = /^-?\d*\.?\d+$/;
const FUNCTION_LIKE = /^[a-zA-Z-]+\(/;

/** Fill `{value}` / `{key}` placeholders. */
export function fillTemplate(template, value, key = value) {
  return template.replace(/\{value\}/g, value).replace(/\{key\}/g, key);
}

function fail(code, message, suggestion = null) {
  return { css: null, error: { code, message, suggestion } };
}

function ok(css, usedVars) {
  return { css, error: null, usedVars };
}

/** Collect var(--x) names in a declaration list. */
function varsIn(css) {
  const out = [];
  const re = /var\((--[A-Za-z0-9_-]+)/g;
  let m;
  while ((m = re.exec(css))) out.push(m[1]);
  return out;
}

// ---------------------------------------------------------------------------
// Scale lookup
// ---------------------------------------------------------------------------

/**
 * Resolve a scale key to a CSS value.
 * @returns {{ value: string } | null}
 */
function lookupScale(entry, key, ctx) {
  const theme = ctx.theme || {};
  const scale = entry.scale;

  // Tailwind compatibility keys
  if (key.startsWith('tw-') && TW_TABLES[scale]) {
    const tw = TW_TABLES[scale];
    const k = tw.normalize ? tw.normalize(key.slice(3)) : key.slice(3);
    if (k in tw.table) return { value: `var(${tw.varPrefix}${k})`, key: k, tw: true };
    return null;
  }

  const scaleObj = theme[scale];
  const known = (scaleObj && Object.prototype.hasOwnProperty.call(scaleObj, key))
    || entry.scaleValues.includes(key)
    || (scale === 'colors' && PALETTE_KEYS.has(key));
  if (!known) return null;

  if (entry.varPrefix) return { value: `var(${entry.varPrefix}${key})`, key };
  // inline scale (blur, brightness, … have no CSS variables)
  const inline = scaleObj && scaleObj[key] !== undefined ? String(scaleObj[key]) : null;
  if (inline === null) return null;
  return { value: inline, key };
}

function knownScaleKeys(entry, ctx) {
  const theme = ctx.theme || {};
  const keys = new Set(entry.scaleValues);
  if (entry.scale && theme[entry.scale]) for (const k of Object.keys(theme[entry.scale])) keys.add(k);
  if (entry.scale === 'colors') for (const k of PALETTE_KEYS) keys.add(k);
  return keys;
}

// ---------------------------------------------------------------------------
// Colour
// ---------------------------------------------------------------------------

function parseOpacity(raw) {
  if (/^\d{1,3}$/.test(raw)) {
    const n = parseInt(raw, 10);
    if (n >= 0 && n <= 100) return n / 100;
  }
  if (/^\d*\.?\d+$/.test(raw)) {
    const n = parseFloat(raw);
    if (n >= 0 && n <= 1) return n;
  }
  const arb = /^\[(.+)\]$/.exec(raw);
  if (arb) {
    const inner = arb[1].trim();
    if (/^\d*\.?\d+%?$/.test(inner)) {
      const n = parseFloat(inner);
      if (inner.endsWith('%')) return n >= 0 && n <= 100 ? n / 100 : NaN;
      return n >= 0 && n <= 1 ? n : NaN;
    }
    return NaN;
  }
  return NaN;
}

/**
 * Resolve a colour value (`primary`, `primary/50`, `[#fff]`, `[#fff]/50`,
 * `transparent`, `current`).
 * @returns {{ value: string } | { error: {code, message, suggestion} }}
 */
export function resolveColor(rawValue, isArbitrary, entry, ctx) {
  let colorPart = rawValue;
  let opacity = null;

  if (!isArbitrary) {
    // split on the last "/" that is outside brackets (1/2 is not a colour so safe)
    const slash = rawValue.lastIndexOf('/');
    if (slash > 0) {
      const maybe = rawValue.slice(slash + 1);
      const parsed = parseOpacity(maybe);
      if (!Number.isNaN(parsed)) {
        opacity = parsed;
        colorPart = rawValue.slice(0, slash);
      } else if (/^\[/.test(maybe) || /^\d/.test(maybe)) {
        return { error: { code: CODES.INVALID_VALUE, message: `Invalid opacity modifier "/${maybe}" in "${rawValue}"` } };
      }
    }
  }

  let resolved;
  const arb = !isArbitrary && /^\[(.+)\]$/.exec(colorPart);
  if (isArbitrary || arb) {
    const inner = arb ? arb[1].replace(/_/g, ' ') : colorPart;
    const check = validateValue(inner);
    if (!check.ok) return { error: { code: CODES.INVALID_VALUE, message: `Invalid value "${inner}": ${check.reason}` } };
    resolved = inner;
  } else if (colorPart === 'current') {
    resolved = 'currentColor';
  } else if (CSS_COLOR_KEYWORDS.includes(colorPart)) {
    resolved = colorPart;
  } else {
    if (!isValidScaleKey(colorPart)) {
      return { error: { code: CODES.INVALID_VALUE, message: `Invalid colour "${colorPart}"` } };
    }
    const hit = lookupScale({ ...entry, scale: 'colors', varPrefix: '--c-' }, colorPart, ctx);
    if (!hit) {
      const candidates = [...knownScaleKeys({ ...entry, scale: 'colors' }, ctx), 'current', ...CSS_COLOR_KEYWORDS];
      return { error: { code: CODES.UNKNOWN_VALUE, message: `Unknown colour "${colorPart}"`, suggestion: suggest(colorPart, candidates) } };
    }
    resolved = hit.value;
  }

  if (opacity !== null) {
    resolved = `color-mix(in srgb, ${resolved} ${Math.round(opacity * 100)}%, transparent)`;
  }
  return { value: resolved };
}

// ---------------------------------------------------------------------------
// Numeric
// ---------------------------------------------------------------------------

function resolveNumeric(entry, key) {
  const n = entry.numeric;
  if (!n || !NUMBER.test(key)) return null;
  if (n.integer && !/^-?\d+$/.test(key)) return null;
  const num = parseFloat(key);
  if (n.divide) return String(num / n.divide);
  if (num === 0) return n.unit === 'deg' || n.unit === 'px' ? `0${n.unit}` : '0';
  return `${key}${n.unit || ''}`;
}

// ---------------------------------------------------------------------------
// Main resolver
// ---------------------------------------------------------------------------

/**
 * Resolve declarations for a utility token.
 * @param {Object} entry - registry entry
 * @param {Object} token - { value, isArbitrary, raw }
 * @param {Object} ctx - { theme }
 * @returns {{ css: string|null, error: null|{code,message,suggestion}, usedVars?: string[] }}
 */
export function resolveDeclarations(entry, token, ctx) {
  const value = token.value;
  if (typeof value !== 'string' || value.length === 0) {
    return fail(CODES.INVALID_VALUE, `Missing value for "${entry.key}"`);
  }

  // ---- arbitrary ---------------------------------------------------------
  if (token.isArbitrary) {
    if (!entry.arbitrary && !entry.passthrough && !entry.template && !entry.arbitraryTemplate) {
      return fail(CODES.UNKNOWN_VALUE, `"${entry.key}" does not accept arbitrary values`);
    }
    const check = validateValue(value);
    if (!check.ok) return fail(CODES.INVALID_VALUE, `Invalid value "${value}": ${check.reason}`);
    let v = value;
    if (entry.color) {
      const c = resolveColor(value, true, entry, ctx);
      if (c.error) return fail(c.error.code, c.error.message, c.error.suggestion);
      v = c.value;
    } else if (entry.arbitraryWrap === 'url' && !FUNCTION_LIKE.test(v) && v !== 'none') {
      v = `url(${v})`;
    } else if (entry.quote) {
      v = quoteValue(v);
    }
    const template = entry.arbitraryTemplate || entry.template;
    if (!template) return fail(CODES.UNKNOWN_VALUE, `"${entry.key}" does not accept arbitrary values`);
    const css = fillTemplate(template, v, v);
    return ok(css, varsIn(css));
  }

  // ---- enum --------------------------------------------------------------
  if (entry.enum && Object.prototype.hasOwnProperty.call(entry.enum, value)) {
    const css = entry.enum[value];
    return ok(css, varsIn(css));
  }

  // ---- colour ------------------------------------------------------------
  if (entry.color) {
    const c = resolveColor(value, false, entry, ctx);
    if (c.error) return fail(c.error.code, c.error.message, c.error.suggestion);
    const template = entry.template;
    if (!template) return fail(CODES.UNKNOWN_VALUE, `No template for "${entry.key}"`);
    const css = fillTemplate(template, c.value, value);
    return ok(css, varsIn(css));
  }

  if (!isValidScaleKey(value)) {
    return fail(CODES.INVALID_VALUE, `Invalid value "${value}" for "${entry.key}"`);
  }

  // ---- negative ----------------------------------------------------------
  let negative = false;
  let key = value;
  if (value.startsWith('-') && value.length > 1) {
    if (entry.negatable || (entry.numeric && NUMBER.test(value))) {
      negative = true;
      key = value.slice(1);
    }
  }

  const template = entry.template;

  // ---- literals (auto, full → 100%, min → min-content) -------------------
  if (entry.literals && Object.prototype.hasOwnProperty.call(entry.literals, key) && template) {
    let v = entry.literals[key];
    if (negative) v = negateLiteral(v);
    // url()-wrapped utilities: keywords such as `none` must not become url(none)
    const tpl = entry.arbitraryWrap === 'url' && entry.arbitraryTemplate ? entry.arbitraryTemplate : template;
    const css = fillTemplate(tpl, v, key);
    return ok(css, varsIn(css));
  }

  // ---- scale -------------------------------------------------------------
  if (entry.scale && template) {
    const hit = lookupScale(entry, key, ctx);
    if (hit) {
      let v = hit.value;
      if (negative) v = `calc(${v} * -1)`;
      const tpl = hit.tw && entry.twTemplate ? entry.twTemplate : template;
      const css = fillTemplate(tpl, v, hit.key);
      return ok(css, varsIn(css));
    }
  }

  // ---- numeric -----------------------------------------------------------
  if (entry.numeric && template) {
    const n = resolveNumeric(entry, key);
    if (n !== null) {
      const v = negative && n !== '0' ? `-${n}` : n;
      const css = fillTemplate(template, v, key);
      return ok(css, varsIn(css));
    }
  }

  // ---- url paths (mask-image:path/to/mask.png) ---------------------------
  if (entry.arbitraryWrap === 'url' && entry.passthrough && template && URL_PATH.test(value) && !negative) {
    const css = fillTemplate(template, value, value);
    return ok(css, varsIn(css));
  }

  // ---- passthrough (keyword properties) ----------------------------------
  if (entry.passthrough && template && IDENTIFIER.test(value) && !negative) {
    const css = fillTemplate(template, entry.quote ? quoteValue(value) : value, value);
    return ok(css, varsIn(css));
  }

  // ---- unknown -----------------------------------------------------------
  const candidates = new Set([
    ...Object.keys(entry.enum || {}),
    ...Object.keys(entry.literals || {}),
    ...(entry.scale ? knownScaleKeys(entry, ctx) : [])
  ]);
  return fail(
    CODES.UNKNOWN_VALUE,
    `Unknown value "${value}" for "${entry.key}"`,
    suggest(key, candidates)
  );
}

const URL_PATH = /^[A-Za-z0-9_.\/-]+\.[A-Za-z0-9]+$/;

const UNQUOTED_CONTENT = /^(none|normal|open-quote|close-quote|no-open-quote|no-close-quote|inherit|initial|unset)$/;

/** Wrap a string in double quotes unless it is already quoted / a function / a keyword. */
function quoteValue(v) {
  if (/^".*"$/.test(v) || /^'.*'$/.test(v) || FUNCTION_LIKE.test(v) || UNQUOTED_CONTENT.test(v)) return v;
  return `"${v.replace(/"/g, '\\"')}"`;
}

function negateLiteral(v) {
  if (/^-/.test(v)) return v.slice(1);
  if (/^\d/.test(v)) return `-${v}`;
  if (v === '0' || v === 'auto' || /content$/.test(v)) return v;
  return `calc(${v} * -1)`;
}

export default { resolveDeclarations, resolveColor, fillTemplate };
