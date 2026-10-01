/**
 * SenangStart CSS - Diagnostics
 *
 * Diagnostic codes and "did you mean" suggestions. Library code never logs;
 * it returns these objects and the CLI / JIT decide how to surface them.
 */

export const CODES = Object.freeze({
  UNKNOWN_PROPERTY: 'UNKNOWN_PROPERTY',
  UNKNOWN_VALUE: 'UNKNOWN_VALUE',
  UNKNOWN_VARIANT: 'UNKNOWN_VARIANT',
  INVALID_VALUE: 'INVALID_VALUE',
  UNSUPPORTED_COMBINATION: 'UNSUPPORTED_COMBINATION',
  INVALID_TOKEN: 'INVALID_TOKEN'
});

/**
 * Levenshtein distance (iterative, two rows).
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
export function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let prev = new Array(b.length + 1);
  let curr = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;
  for (let i = 1; i <= a.length; i++) {
    curr[0] = i;
    const ca = a.charCodeAt(i - 1);
    for (let j = 1; j <= b.length; j++) {
      const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
    }
    [prev, curr] = [curr, prev];
  }
  return prev[b.length];
}

/**
 * Closest candidate to `input`, or null when nothing is close enough.
 * @param {string} input
 * @param {Iterable<string>} candidates
 * @param {number} [maxDistance] - defaults to ~1/3 of the input length (min 1, max 3)
 * @returns {string|null}
 */
export function suggest(input, candidates, maxDistance) {
  if (typeof input !== 'string' || !input) return null;
  const limit = maxDistance ?? Math.min(3, Math.max(1, Math.floor(input.length / 3)));
  let best = null;
  let bestDist = Infinity;
  const lower = input.toLowerCase();
  for (const c of candidates) {
    if (typeof c !== 'string' || !c) continue;
    if (Math.abs(c.length - lower.length) > limit) continue;
    const d = levenshtein(lower, c.toLowerCase());
    if (d < bestDist || (d === bestDist && best !== null && c < best)) {
      bestDist = d;
      best = c;
    }
  }
  return bestDist <= limit ? best : null;
}

/**
 * Build a diagnostic object.
 * @param {Object} token
 * @param {string} code - one of CODES
 * @param {string} message
 * @param {string|null} [suggestion]
 * @returns {{ raw: string, attrType: string, code: string, message: string, suggestion?: string, type: string, token: string }}
 */
export function diagnostic(token, code, message, suggestion = null) {
  const d = {
    raw: token?.raw,
    attrType: token?.attrType,
    code,
    message,
    // legacy fields kept for existing consumers
    type: 'rule_generation',
    token: token?.raw
  };
  if (suggestion) d.suggestion = suggestion;
  return d;
}

export default { CODES, levenshtein, suggest, diagnostic };
