/**
 * SenangStart CSS - Token shape check
 *
 * The extractor is deliberately permissive about *where* it looks, so it has
 * to be strict about *what* it emits. Every candidate token passes through
 * checkTokenShape() before it reaches the tokenizer. Anything that does not
 * look like a SenangStart utility token is dropped (and recorded as skipped).
 */

import { LIMITS } from '../../core/constants.js';

// Overall shape once arbitrary-value brackets have been collapsed to "[]".
// Must start with an alphanumeric (optionally prefixed with "!").
const TOKEN_SHAPE = /^!?[a-zA-Z0-9][\w./%#()\[\],+*:-]*$/;

// Characters that are only allowed inside [...] arbitrary values.
const BANNED_OUTSIDE_BRACKETS = /[{}$?<>;=`'"\\|&^~!@\s]/;

// Content of a bracketed arbitrary value: anything but whitespace or brackets.
const BRACKET_SEGMENT = /\[[^\s\[\]]*\]/g;

/**
 * Check whether a candidate string looks like a valid utility token.
 * @param {string} token - Candidate token (no surrounding whitespace)
 * @returns {string|null} - null when the token is well formed, otherwise a reason code
 */
const SHAPE_CACHE_LIMIT = 20000;
const shapeCache = new Map();

export function checkTokenShape(token) {
  if (typeof token !== 'string' || token.length === 0) return 'empty';
  if (token.length > LIMITS.MAX_VALUE_LENGTH) return 'too-long';

  // Source files repeat the same tokens thousands of times – memoise.
  const cached = shapeCache.get(token);
  if (cached !== undefined) return cached;
  const reason = computeShape(token);
  if (shapeCache.size >= SHAPE_CACHE_LIMIT) shapeCache.clear();
  shapeCache.set(token, reason);
  return reason;
}

function computeShape(token) {
  const first = token.charCodeAt(0);
  if (first === 34 || first === 39 || first === 96) return 'quoted'; // " ' `

  // Collapse [..] arbitrary values so their content is exempt from the checks.
  const collapsed = token.replace(BRACKET_SEGMENT, '[]');
  // Leading "!" (important marker) is allowed; strip it before the banned-char test.
  const outside = (collapsed[0] === '!' ? collapsed.slice(1) : collapsed).replace(/\[\]/g, '');

  // Any bracket left over is unbalanced (e.g. "w:[350px").
  if (outside.includes('[') || outside.includes(']')) return 'shape';
  if (BANNED_OUTSIDE_BRACKETS.test(outside)) return 'shape';
  if (!TOKEN_SHAPE.test(collapsed)) return 'shape';

  return null;
}

export default { checkTokenShape };
