/**
 * SenangStart CSS - Diagnostics for tokens that produced no CSS.
 *
 * Turns a silent "no rule generated" into a specific, actionable error:
 *   UNKNOWN_VARIANT   bogus:bg:red          (did you mean hover?)
 *   UNKNOWN_PROPERTY  visual="bgg:red"      (did you mean bg?)
 *                     visual="p:big"        (p is a space utility)
 *   UNKNOWN_VALUE     bg:notacolor / p:hugee (did you mean huge?)
 */
import { CODES, suggest, diagnostic } from '../../engine/diagnostics.js';
import { registryFor } from '../../engine/registry.js';
import { STATE_VARIANTS, MEDIA_VARIANTS, parseVariant } from '../../engine/variants.js';
import { extensionsFor } from '../../engine/plugins.js';

const ATTRS = ['layout', 'space', 'visual'];

function knownVariantNames(config) {
  const screens = Object.keys((config && config.theme && config.theme.screens) || {});
  return [...Object.keys(STATE_VARIANTS), ...Object.keys(MEDIA_VARIANTS), 'dark', ...screens, ...screens.map(s => `max-${s}`), ...Object.keys(extensionsFor(config).variants)];
}

function scaleKeys(entry, config) {
  const theme = (config && config.theme) || {};
  const out = new Set();
  if (entry && entry.scale && theme[entry.scale] && typeof theme[entry.scale] === 'object') {
    for (const k of Object.keys(theme[entry.scale])) out.add(k);
  }
  if (entry && entry.enum && typeof entry.enum === 'object') for (const k of Object.keys(entry.enum)) out.add(k);
  if (entry && Array.isArray(entry.literals)) for (const k of entry.literals) out.add(k);
  if (entry && Array.isArray(entry.scaleValues)) for (const k of entry.scaleValues) out.add(k);
  return [...out];
}

/**
 * Explain why a (non-errored) token produced no CSS.
 * @param {Object} token
 * @param {Object} config
 * @returns {Object} diagnostic
 */
export function diagnoseToken(token, config) {
  const registry = registryFor(config);
  const { attrType, property, value, raw } = token;
  const props = registry.keys(attrType);

  // An unknown leading segment followed by a known utility → unknown variant
  if (typeof value === 'string' && value.includes(':')) {
    const next = value.split(':')[0];
    if (props.includes(next) && !parseVariant(property, config)) {
      return diagnostic(token, CODES.UNKNOWN_VARIANT, `Unknown variant "${property}:" in "${raw}"`,
        suggest(property, knownVariantNames(config)));
    }
  }

  if (!props.includes(property)) {
    const other = ATTRS.find(a => a !== attrType && registry.keys(a).includes(property));
    if (other) {
      return diagnostic(token, CODES.UNKNOWN_PROPERTY,
        `"${property}" is a ${other} utility; move "${raw}" to the ${other}="" attribute`, `${other}="${raw}"`);
    }
    return diagnostic(token, CODES.UNKNOWN_PROPERTY, `Unknown ${attrType} utility "${property}" in "${raw}"`,
      suggest(property, props));
  }

  const entry = registry.utility(attrType, property);
  const base = typeof value === 'string' ? value.replace(/^-/, '').replace(/\/.*$/, '') : value;
  return diagnostic(token, CODES.UNKNOWN_VALUE, `Unknown value "${value}" for ${attrType} utility "${property}"`,
    suggest(base, scaleKeys(entry, config)));
}

/**
 * Check a generated rule for references to theme variables that do not exist
 * (e.g. bg:notacolor → var(--c-notacolor)). Arbitrary values are exempt — users
 * may reference their own custom properties there.
 * @param {string} rule
 * @param {Object} token
 * @param {Set<string>} defined - variables defined in :root
 * @param {Object} config
 * @returns {Object|null} diagnostic, or null when the rule is fine
 */
export function checkUndefinedVars(rule, token, defined) {
  if (!defined || token.isArbitrary) return null;
  for (const m of rule.matchAll(/var\(\s*(--[\w-]+)\s*([,)])/g)) {
    const name = m[1];
    if (m[2] === ',') continue; // has a fallback
    if (defined.has(name) || /^--(ss|tw)-/.test(name)) continue;
    const prefix = name.replace(/^(--[a-z]+-).*/, '$1');
    const candidates = [...defined].filter(v => v.startsWith(prefix)).map(v => v.slice(prefix.length));
    const missing = name.slice(prefix.length);
    const key = missing.replace(/^-/, '');
    return diagnostic(token, CODES.UNKNOWN_VALUE,
      `Unknown value "${key}" in "${token.raw}" (no theme token ${name})`,
      suggest(key, candidates));
  }
  return null;
}
