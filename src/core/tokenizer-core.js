/**
 * SenangStart CSS - Core Tokenizer
 * Pure tokenizer functions shared by JIT runtime and build-time compiler
 *
 * A token is:
 *   {
 *     raw, attrType,
 *     variants: ['tab', 'dark', 'hover'],   // ordered variant prefixes
 *     breakpoint, state,                    // legacy derived fields
 *     property, value, isArbitrary,
 *     error?, errorCode?                    // set when the token is rejected
 *   }
 */

import { BREAKPOINTS, STATES, LAYOUT_KEYWORDS, LIMITS } from './constants.js';
import { validateValue, normalizeArbitraryValue, checkRawToken } from './value-grammar.js';
import { splitVariants, deriveLegacyFields, parseVariant } from '../engine/variants.js';
import { sanitizeValue } from '../utils/common.js';

/**
 * Legacy blocklist sanitizer — kept only as a re-export for backwards
 * compatibility. The tokenizer now uses the grammar validator in
 * ./value-grammar.js and rejects (rather than rewrites) unsafe values.
 * @deprecated use validateValue() from value-grammar.js
 */
export { sanitizeValue };

/**
 * Validate token structure
 * @param {Object} token - Token to validate
 * @param {Object} [config] - Optional config (theme.screens supplies breakpoint names)
 * @returns {boolean} - True if valid
 */
export function isValidToken(token, config) {
  if (!token.property || typeof token.property !== 'string') {
    return false;
  }
  if (token.property.length > LIMITS.MAX_PROPERTY_LENGTH) {
    return false;
  }
  if (token.value === null || token.value === undefined) {
    return false;
  }
  if (typeof token.value !== 'string') {
    return false;
  }
  if (token.value.length > LIMITS.MAX_VALUE_LENGTH) {
    return false;
  }
  if (token.breakpoint && !BREAKPOINTS.includes(token.breakpoint) && !parseVariant(token.breakpoint, config)) {
    return false;
  }
  if (token.state && !STATES.includes(token.state) && !parseVariant(token.state, config)) {
    return false;
  }
  return true;
}

function errorToken(raw, attrType, message, code) {
  return {
    raw,
    variants: [],
    breakpoint: null,
    state: null,
    property: null,
    value: null,
    isArbitrary: false,
    attrType,
    error: message,
    errorCode: code
  };
}

/**
 * Tokenize a single attribute value string
 * @param {string} raw - Raw token string (e.g., "tab:hover:p:big")
 * @param {string} attrType - Attribute type: 'layout', 'space', or 'visual'
 * @param {Object} [config] - Optional config; theme.screens supplies breakpoint names
 * @returns {Object} - Parsed token object
 */
export function tokenize(raw, attrType, config) {
  if (typeof raw !== 'string' || raw.length === 0 || raw.length > LIMITS.MAX_TOKEN_RAW_LENGTH) {
    return errorToken(raw, attrType, 'Invalid token format', 'INVALID_TOKEN');
  }

  // Security gate: no token may carry characters that could break out of a
  // declaration, selector or <style> element (audit finding C1).
  const rawCheck = checkRawToken(raw);
  if (!rawCheck.ok) {
    return errorToken(raw, attrType, `Invalid token: ${rawCheck.reason}`, 'INVALID_VALUE');
  }

  const token = {
    raw,
    variants: [],
    breakpoint: null,
    state: null,
    property: null,
    value: null,
    isArbitrary: false,
    attrType
  };

  // `!important` modifier: leading `!p:big` or trailing `p:big!`
  let body = raw;
  if (body.startsWith('!')) { token.important = true; body = body.slice(1); }
  else if (body.endsWith('!')) { token.important = true; body = body.slice(0, -1); }
  if (body.length === 0) return errorToken(raw, attrType, 'Invalid token format', 'INVALID_TOKEN');

  // Layout keywords without colon syntax (flex, center, …)
  if (attrType === 'layout' && LAYOUT_KEYWORDS.includes(body)) {
    token.property = body;
    token.value = body;
    return token;
  }

  // Split on ':' but keep colons that live inside an arbitrary [...] value
  // (e.g. bg-image:[url(https://x)] or content:["a:b"]).
  const parts = splitOutsideBrackets(body);

  if (parts.length === 1 && !body.startsWith('[')) {
    token.property = body;
    token.value = body;
    return token;
  }

  // Leading variant prefixes (any order, any count)
  const { variants, rest } = splitVariants(parts, config);
  token.variants = variants;
  const legacy = deriveLegacyFields(variants, config);
  token.breakpoint = legacy.breakpoint;
  token.state = legacy.state;

  // Property
  if (rest.length === 0) {
    token.error = 'Invalid token structure';
    token.errorCode = 'INVALID_TOKEN';
    return token;
  }

  // Arbitrary property: [mask-type:luminance], [--my-var:10px], hover:[outline:none]
  const arbProp = rest.length === 1 && /^\[((?:--)?[a-zA-Z][\w-]*):(.+)\]$/.exec(rest[0]);
  if (arbProp) {
    token.property = arbProp[1].toLowerCase();
    token.isArbitrary = true;
    token.arbitraryProperty = true;
    const normalized = normalizeArbitraryValue(arbProp[2]);
    const check = validateValue(normalized);
    token.value = normalized;
    if (!check.ok) {
      token.error = `Invalid value: ${check.reason}`;
      token.errorCode = 'INVALID_VALUE';
    }
    return token;
  }
  token.property = rest[0];

  // Value
  if (rest.length > 1) {
    const value = rest.slice(1).join(':');
    const arbitraryMatch = value.match(/^\[(.+)\]$/);
    if (arbitraryMatch) {
      token.isArbitrary = true;
      const normalized = normalizeArbitraryValue(arbitraryMatch[1]);
      const check = validateValue(normalized);
      if (!check.ok) {
        token.value = normalized;
        token.error = `Invalid value: ${check.reason}`;
        token.errorCode = 'INVALID_VALUE';
        return token;
      }
      token.value = normalized;
    } else {
      // Values like `[#123456]/50` or `primary/[.35]` embed bracket groups:
      // validate each group's contents and the remainder separately.
      const groups = [];
      const outer = value.replace(/\[([^\[\]]*)\]/g, (_, inner) => { groups.push(inner); return 'x'; });
      let check = /[[\]]/.test(outer) ? { ok: false, reason: 'unbalanced brackets' } : validateValue(outer);
      for (const g of groups) {
        if (!check.ok) break;
        check = validateValue(normalizeArbitraryValue(g));
      }
      if (!check.ok) {
        token.value = value;
        token.error = `Invalid value: ${check.reason}`;
        token.errorCode = 'INVALID_VALUE';
        return token;
      }
      token.value = value;
    }
  } else {
    // breakpoint:keyword (e.g. tab:row) — property doubles as value
    token.value = token.property;
  }

  if (!isValidToken(token, config)) {
    token.error = 'Invalid token structure';
    token.errorCode = 'INVALID_TOKEN';
  }

  return token;
}

/**
 * Split on ':' ignoring colons nested inside [ ] or ( ).
 * @param {string} raw
 * @returns {string[]}
 */
function splitOutsideBrackets(raw) {
  const parts = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i];
    if (ch === '[' || ch === '(') depth++;
    else if (ch === ']' || ch === ')') depth = Math.max(0, depth - 1);
    else if (ch === ':' && depth === 0) {
      parts.push(raw.slice(start, i));
      start = i + 1;
    }
  }
  parts.push(raw.slice(start));
  return parts;
}

/**
 * Tokenize all values from parsed attributes
 * @param {Object} parsed - Output from parser { layout: Set, space: Set, visual: Set, interact?: Set, listens?: Set }
 * @param {Object} [config] - Optional config for breakpoint names
 * @returns {Array} - Array of token objects
 */
export function tokenizeAll(parsed, config) {
  const tokens = [];

  for (const [attrType, values] of Object.entries(parsed)) {
    for (const raw of values) {
      tokens.push(tokenize(raw, attrType, config));
    }
  }

  return tokens;
}

/**
 * Tokenize all values in batches, yielding to the event loop between batches
 * so very large token sets don't block. (Kept for API compatibility.)
 * @param {Object} parsed - Parsed tokens from parser
 * @param {number} batchSize - Number of tokens per batch (default: 1000)
 * @param {Object} [config]
 * @returns {Promise<Array>} - Array of token objects
 */
export async function tokenizeAllWithBatching(parsed, batchSize = 1000, config) {
  const rawTokens = [];
  for (const [attrType, values] of Object.entries(parsed)) {
    for (const raw of values) rawTokens.push({ raw, attrType });
  }

  const tokens = [];
  for (let i = 0; i < rawTokens.length; i += batchSize) {
    const end = Math.min(i + batchSize, rawTokens.length);
    for (let j = i; j < end; j++) tokens.push(tokenize(rawTokens[j].raw, rawTokens[j].attrType, config));
    if (end < rawTokens.length) await new Promise((resolve) => setTimeout(resolve, 0));
  }
  return tokens;
}

export default { tokenize, tokenizeAll, tokenizeAllWithBatching, sanitizeValue, isValidToken };
