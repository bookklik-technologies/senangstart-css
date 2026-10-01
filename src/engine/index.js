/**
 * SenangStart CSS - Engine entry point
 *
 * token → registry entry → declarations. No selector logic lives here; see
 * ./variants.js (selector/at-rule composition) and ./cascade.js (ordering,
 * layers, assembly).
 */

import { getDefaultRegistry } from './registry.js';
import { defaultConfig } from '../config/defaults.js';
import { resolveDeclarations } from './resolve.js';
import { CODES, suggest, diagnostic } from './diagnostics.js';
import { tokenVariants, parseVariant } from './variants.js';

export { buildRegistry, getDefaultRegistry, slimDefinitions, Registry } from './registry.js';
export { resolveDeclarations, resolveColor } from './resolve.js';
export { composeSelector, registerVariantHandler, getBreakpoints, getDarkMode, variantWeight } from './variants.js';
export { CODES, suggest, levenshtein, diagnostic } from './diagnostics.js';

/**
 * Resolve a token to its declarations.
 * @param {Object} token - tokenizer output
 * @param {Object} config - merged config (config.theme is used for scales)
 * @param {import('./registry.js').Registry} [registry]
 * @returns {{ css: string|null, entry: Object|null, error: Object|null, usedVars: string[] }}
 */
export function generateDeclarations(token, config, registry = getDefaultRegistry()) {
  const empty = { css: null, entry: null, error: null, usedVars: [] };
  if (!token || typeof token !== 'object') return { ...empty, error: diagnostic(token, CODES.INVALID_TOKEN, 'Token is not an object') };
  const { attrType, property, value, raw } = token;
  if (!['layout', 'space', 'visual'].includes(attrType)) {
    return { ...empty, error: diagnostic(token, CODES.UNKNOWN_PROPERTY, `Unknown attribute "${attrType}"`) };
  }
  if (typeof property !== 'string' || !property) {
    return { ...empty, error: diagnostic(token, CODES.INVALID_TOKEN, `Invalid token "${raw}"`) };
  }
  if (token.error) {
    return { ...empty, error: diagnostic(token, token.errorCode || CODES.INVALID_TOKEN, token.error) };
  }

  // Unknown variants: anything before the property that isn't recognised
  for (const v of tokenVariants(token)) {
    if (!parseVariant(v, config)) {
      return { ...empty, error: diagnostic(token, CODES.UNKNOWN_VARIANT, `Unknown variant "${v}:" in "${raw}"`) };
    }
  }

  // Scales missing from a partial theme fall back to the defaults (inline
  // scales such as blur/brightness have no CSS variables to fall back on).
  const userTheme = (config && config.theme) || {};
  const ctx = { theme: { ...defaultConfig.theme, ...userTheme } };

  // Keyword (property === value, no colon): flex, italic, container…
  if ((property === value || value === '') && !token.isArbitrary) {
    const kw = registry.keyword(attrType, property);
    if (kw) {
      if (kw.kind === 'marker') return { css: null, entry: kw, error: null, usedVars: [] };
      return { css: kw.css, entry: kw, error: null, usedVars: [] };
    }
    // `visual="tab:italic"` style tokens also arrive here (property doubles as value)
    const util = registry.utility(attrType, property);
    if (!util) {
      return { ...empty, error: diagnostic(token, CODES.UNKNOWN_PROPERTY, `Unknown ${attrType} utility "${property}"`, suggest(property, registry.keys(attrType))) };
    }
    return { ...empty, entry: util, error: diagnostic(token, CODES.UNKNOWN_VALUE, `"${property}" requires a value (e.g. ${property}:…)`) };
  }

  const entry = registry.utility(attrType, property);
  if (!entry) {
    return { ...empty, error: diagnostic(token, CODES.UNKNOWN_PROPERTY, `Unknown ${attrType} utility "${property}"`, suggest(property, registry.keys(attrType))) };
  }

  const result = resolveDeclarations(entry, token, ctx);
  if (result.error) {
    return { css: null, entry, error: diagnostic(token, result.error.code, result.error.message, result.error.suggestion), usedVars: [] };
  }
  return { css: result.css, entry, error: null, usedVars: result.usedVars || [] };
}

export default { generateDeclarations };
