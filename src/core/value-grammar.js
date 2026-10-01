/**
 * SenangStart CSS - Value Grammar
 *
 * Grammar-based validator for token values (arbitrary `[...]` values and
 * scale keys). Shared by the build-time compiler and the browser JIT so the
 * two can never drift apart.
 *
 * A value is ACCEPTED only when every character is in the allow-list
 *   [A-Za-z0-9 _.%#,/+*'"()!-]   (plus `:` for url(https://…) and `inherit:x`)
 * and every `(` / `)` and every quote is balanced.
 *
 * A value is REJECTED when it contains any of  { } ; < > \  newline  `@`
 * or a `url(` whose scheme is javascript:/data:/vbscript:, or an
 * `expression(` call, or when parens / quotes are unbalanced.
 *
 * Rejected values never reach the CSS output — the caller must turn the
 * returned reason into a diagnostic (code INVALID_VALUE).
 */

const ALLOWED_CHARS = /^[A-Za-z0-9 _.%#,/+*'"()!:\u00A0-\uFFFF-]*$/; // non-ASCII printable text is allowed (content: "“")
const FORBIDDEN_CHARS = /[{};<>\\\n\r\t@`$]/;
const DANGEROUS_URL = /url\s*\(\s*['"]?\s*(javascript|data|vbscript|file|about)\s*:/i;
const DANGEROUS_CALLS = /\b(expression|eval|alert)\s*\(/i;
const MAX_LENGTH = 500;

/**
 * Validate a value against the grammar.
 * @param {string} value - Value to validate (already unbracketed)
 * @returns {{ ok: boolean, reason?: string }}
 */
export function validateValue(value) {
  if (typeof value !== 'string') return { ok: false, reason: 'value must be a string' };
  if (value.length === 0) return { ok: false, reason: 'empty value' };
  if (value.length > MAX_LENGTH) return { ok: false, reason: `value exceeds ${MAX_LENGTH} characters` };

  if (FORBIDDEN_CHARS.test(value)) {
    const ch = value.match(FORBIDDEN_CHARS)[0];
    const printable = ch === '\n' || ch === '\r' ? 'newline' : ch === '\t' ? 'tab' : `"${ch}"`;
    return { ok: false, reason: `forbidden character ${printable}` };
  }
  if (!ALLOWED_CHARS.test(value)) {
    return { ok: false, reason: 'character outside the allowed set' };
  }
  if (DANGEROUS_URL.test(value)) {
    return { ok: false, reason: 'url() with a forbidden scheme' };
  }
  if (DANGEROUS_CALLS.test(value)) {
    return { ok: false, reason: 'forbidden function call' };
  }

  // Balanced parens (outside of quotes) and balanced quotes
  let depth = 0;
  let quote = null;
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    if (quote) {
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      quote = ch;
      continue;
    }
    if (ch === '(') depth++;
    else if (ch === ')') {
      depth--;
      if (depth < 0) return { ok: false, reason: 'unbalanced parentheses' };
    }
  }
  if (quote) return { ok: false, reason: 'unbalanced quotes' };
  if (depth !== 0) return { ok: false, reason: 'unbalanced parentheses' };

  return { ok: true };
}

/**
 * Characters that may never appear anywhere in a raw token, bracketed or not.
 * `@` is allowed only as the first character of a variant segment (reserved
 * for container-query variants such as `@md:`).
 */
const RAW_FORBIDDEN = /[{};<>\\`$\u0000-\u001f\u007f]/;
const RAW_AT_MISUSE = /(?:^|[^:])@|@(?![A-Za-z0-9])/;
const RAW_TOKEN_MAX = 500;

/**
 * Gate applied to every raw token before tokenizing (build and JIT).
 * @param {string} raw
 * @returns {{ ok: boolean, reason?: string }}
 */
export function checkRawToken(raw) {
  if (typeof raw !== 'string' || raw.length === 0) return { ok: false, reason: 'empty token' };
  if (raw.length > RAW_TOKEN_MAX) return { ok: false, reason: `token exceeds ${RAW_TOKEN_MAX} characters` };
  const bad = raw.match(RAW_FORBIDDEN);
  if (bad) {
    const c = bad[0];
    const name = c === '\n' || c === '\r' ? 'newline' : c.charCodeAt(0) < 32 ? 'control character' : `"${c}"`;
    return { ok: false, reason: `forbidden character ${name}` };
  }
  if (raw.includes('@') && RAW_AT_MISUSE.test(raw.replace(/^@[A-Za-z0-9]/, 'x').replace(/:@(?=[A-Za-z0-9])/g, ':x'))) {
    return { ok: false, reason: 'forbidden character "@"' };
  }
  return { ok: true };
}

/**
 * Convenience predicate.
 * @param {string} value
 * @returns {boolean}
 */
export function isValidValue(value) {
  return validateValue(value).ok;
}

/**
 * Grammar for a scale key (e.g. `big`, `blue-500`, `small-2x`, `tw-4`, `1/2`,
 * `primary/50`). Anything else is not even looked up.
 */
const SCALE_KEY = /^-?[A-Za-z0-9][A-Za-z0-9_./-]*$/;

/**
 * @param {string} key
 * @returns {boolean}
 */
export function isValidScaleKey(key) {
  return typeof key === 'string' && key.length > 0 && key.length <= 100 && SCALE_KEY.test(key);
}

/**
 * Escape a string for use inside a double-quoted CSS attribute selector value
 * (`[attr~="…"]`). Escapes `"` and `\` and control characters per CSS Syntax
 * Level 3 "serialize a string".
 * @param {string} str
 * @returns {string}
 */
export function escapeCSSString(str) {
  if (typeof str !== 'string') return '';
  let out = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const code = str.charCodeAt(i);
    if (ch === '"' || ch === '\\') {
      out += '\\' + ch;
    } else if (code === 0) {
      out += '\uFFFD';
    } else if ((code >= 0x1 && code <= 0x1f) || code === 0x7f) {
      out += '\\' + code.toString(16) + ' ';
    } else {
      out += ch;
    }
  }
  return out;
}

/**
 * Build an attribute selector for a raw token, e.g. `[visual~="bg:primary"]`.
 * @param {string} attr - Attribute name (layout | space | visual)
 * @param {string} raw - Raw token string
 * @returns {string}
 */
export function attributeSelector(attr, raw) {
  return `[${attr}~="${escapeCSSString(raw)}"]`;
}

/**
 * Normalise an arbitrary (bracketed) value for use in a declaration:
 *  - underscores become spaces (the documented escape for whitespace)
 *  - `calc(100%-2rem)` gets its operators spaced: `calc(100% - 2rem)`
 * The result still has to pass validateValue().
 * @param {string} raw - Value between the brackets
 * @returns {string}
 */
export function normalizeArbitraryValue(raw) {
  if (typeof raw !== 'string') return '';
  const v = raw.replace(/_/g, ' ').trim();
  if (!/\b(calc|min|max|clamp)\(/.test(v)) return v;
  return spaceMathOperators(v);
}

/**
 * Insert spaces around binary operators inside math functions so that
 * `calc(100%-2rem)` becomes `calc(100% - 2rem)`. Custom property names
 * (`var(--ss-tx)`) and identifiers (`min-content`) are left untouched.
 * @param {string} value
 * @returns {string}
 */
function spaceMathOperators(value) {
  // Protect var(--name) tokens: hyphens inside them are never operators.
  const protectedVars = [];
  const work = value.replace(/--[A-Za-z0-9_-]+/g, (m) => `\u0001${protectedVars.push(m) - 1}\u0001`);

  let out = '';
  let depth = 0; // depth inside a math function
  const mathStack = [];
  for (let i = 0; i < work.length; i++) {
    const ch = work[i];
    if (ch === '(') {
      const fnMatch = /([a-z-]+)$/i.exec(out);
      mathStack.push(fnMatch && /^(calc|min|max|clamp)$/i.test(fnMatch[1]) ? 'math' : 'other');
      if (mathStack[mathStack.length - 1] === 'math') depth++;
      out += ch;
      continue;
    }
    if (ch === ')') {
      if (mathStack.pop() === 'math') depth--;
      out += ch;
      continue;
    }
    if (depth > 0 && (ch === '+' || ch === '*' || ch === '/' || ch === '-')) {
      const leftRaw = out.replace(/\s+$/, '');
      const left = leftRaw[leftRaw.length - 1] || '';
      let j = i + 1;
      while (j < work.length && work[j] === ' ') j++;
      const right = work[j] || '';
      const leftIsValueEnd = /[0-9%)\u0001]/.test(left) || /\d[a-zA-Z]{1,5}$/.test(leftRaw);
      const rightIsValueStart = /[0-9.(\u0001]/.test(right) || /^-[0-9.]/.test(work.slice(j)) || /^(var|calc|min|max|clamp)\(/.test(work.slice(j));
      const isBinary = ch === '-' ? (leftIsValueEnd && rightIsValueStart) : (leftIsValueEnd && rightIsValueStart);
      if (isBinary) {
        out = `${leftRaw} ${ch} `;
        i = j - 1;
        continue;
      }
    }
    out += ch;
  }
  return out.replace(/\u0001(\d+)\u0001/g, (m, n) => protectedVars[Number(n)]);
}

export default { checkRawToken, validateValue, isValidValue, isValidScaleKey, escapeCSSString, attributeSelector, normalizeArbitraryValue };
