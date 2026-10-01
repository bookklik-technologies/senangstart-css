/**
 * SenangStart CSS - JIT attribute scanning helpers (pure, testable).
 *
 * Security model: the JIT no longer tries to "clean" attribute strings with
 * regex replacements (which silently mangled legitimate values and missed
 * `{`/`}` breakouts). Each whitespace-separated token is instead checked with
 * the same raw-token gate the build-time tokenizer uses; unsafe tokens are
 * dropped whole. The tokenizer and generator then apply value validation and
 * selector escaping, exactly as in the CLI build.
 */
import { checkRawToken } from '../core/value-grammar.js';

export const MAX_ATTR_LENGTH = 4000;
export const MAX_TOKEN_LENGTH = 500;

/**
 * Split an attribute value into safe tokens.
 * @param {string} value
 * @returns {string[]}
 */
export function splitSafeTokens(value) {
  if (typeof value !== 'string' || value.length === 0 || value.length > MAX_ATTR_LENGTH) return [];
  const out = [];
  for (const t of value.split(/\s+/)) {
    if (t && t.length <= MAX_TOKEN_LENGTH && checkRawToken(t).ok) out.push(t);
  }
  return out;
}

/**
 * Backwards-compatible helper: returns the attribute value reduced to its
 * safe tokens, joined by single spaces ('' when nothing is safe).
 * @param {string} value
 * @returns {string}
 */
export function sanitizeAttributeValue(value) {
  return splitSafeTokens(value).join(' ');
}
