/**
 * SenangStart CSS - Expression & template literal extraction
 *
 * Pulls candidate tokens out of dynamic attribute values:
 *
 *   - JS-like expressions (JSX {…}, Vue :attr="…", Svelte {…}, Alpine x-bind,
 *     Blade {{ … }}, PHP <?= … ?>): every string literal, template literal and
 *     unquoted object key is a candidate source of tokens.
 *   - "Templated" static strings (Svelte "static {expr} more", Blade
 *     "flex {{ $x }}", lit-html "flex ${x}", PHP "<?= … ?>"): the static parts
 *     are split on whitespace, the interpolations are treated as expressions.
 *
 * Partial-fragment rule: a fragment that touches an interpolation boundary
 * (or a string concatenation operator) without whitespace in between is
 * considered partial and is dropped – "bg-${color}" never yields "bg-".
 *
 * Everything here is a single forward pass over the input. There is no
 * backtracking and no regex with nested quantifiers, so pathological input
 * can slow things down at most linearly.
 */

const WS = /\s/;
const isWsCode = (c) => c === 32 || c === 10 || c === 9 || c === 13 || c === 12 || c === 11;
const IDENT_START = /[A-Za-z_$]/;
const IDENT_CHAR = /[\w$]/;
const CONCAT_OPERATORS = new Set(['+', '.', '~']);

/**
 * Index just past the closing quote of the string starting at `i`
 * (src[i] must be ' or "). Honours backslash escapes. Returns -1 when the
 * string is unterminated.
 */
export function skipQuoted(src, i, end = src.length) {
  const quote = src.charCodeAt(i);
  let j = i + 1;
  while (j < end) {
    const c = src.charCodeAt(j);
    if (c === 92 /* \ */) { j += 2; continue; }
    if (c === quote) return j + 1;
    j++;
  }
  return -1;
}

/**
 * Find the end of a balanced `open … close` group that starts at `start`
 * (src[start] === open). JS-aware: skips quoted strings, template literals
 * (including nested ${}) and block comments. Returns the index just past the
 * matching close, or -1 when the group is unterminated.
 */
export function findBalanced(src, start, open = '{', close = '}', end = src.length) {
  const openCode = open.charCodeAt(0);
  const closeCode = close.charCodeAt(0);
  // Explicit stack instead of recursion so deeply nested input cannot blow the call stack.
  // Entries: 0 = inside a bracket group, 1 = inside a template literal.
  const stack = [0];
  let i = start + 1;

  while (i < end && stack.length > 0) {
    const c = src.charCodeAt(i);
    const top = stack[stack.length - 1];

    if (top === 1) {
      // Inside a template literal
      if (c === 92) { i += 2; continue; }
      if (c === 96) { stack.pop(); i++; continue; }
      if (c === 36 && src.charCodeAt(i + 1) === 123) { stack.push(0); i += 2; continue; }
      i++;
      continue;
    }

    if (c === openCode) { stack.push(0); i++; continue; }
    if (c === closeCode) { stack.pop(); i++; continue; }
    if (c === 34 || c === 39) { i = skipQuoted(src, i, end); continue; }
    if (c === 96) { stack.push(1); i++; continue; }
    if (c === 47 && src.charCodeAt(i + 1) === 42) {
      const k = src.indexOf('*/', i + 2);
      i = k === -1 ? end : k + 2;
      continue;
    }
    // A `${` inside a bracket group (lit-html style) – treat like a nested group
    if (c === 36 && src.charCodeAt(i + 1) === 123) { stack.push(0); i += 2; continue; }
    i++;
  }

  return stack.length === 0 ? i : -1;
}

/** First non-whitespace character at or after `i`, or '' at end. */
function peekSignificant(src, i, end) {
  while (i < end && WS.test(src[i])) i++;
  return i < end ? src[i] : '';
}

function unescapeString(raw) {
  return raw.includes('\\') ? raw.replace(/\\(.)/g, '$1') : raw;
}

/**
 * Split a static string on whitespace and hand each token to the sink.
 * The first/last token is dropped as partial when it touches an interpolation
 * boundary (leftPartial / rightPartial) with no whitespace in between.
 */
export function emitStatic(text, leftPartial, rightPartial, sink) {
  const n = text.length;
  if (n === 0) return;
  const touchesRight = rightPartial && !WS.test(text[n - 1]);
  let i = 0;
  let first = true;
  while (i < n) {
    // skip whitespace
    while (i < n && isWsCode(text.charCodeAt(i))) i++;
    if (i >= n) break;
    const start = i;
    while (i < n && !isWsCode(text.charCodeAt(i))) i++;
    const token = start === 0 && i === n ? text : text.slice(start, i);
    const partial = (first && leftPartial && start === 0) || (i === n && touchesRight);
    if (partial) sink.skip(token, 'partial');
    else sink.token(token);
    first = false;
  }
}

/**
 * Process a list of alternating static / interpolation segments.
 * @param {Array<{type:'static',text:string}|{type:'expr',text:string,extract:boolean}>} segments
 */
export function processSegments(segments, sink, leftEdgePartial = false, rightEdgePartial = false) {
  // Empty static segments at the edges carry no information – drop them so the
  // edge flags apply to the neighbouring interpolation instead.
  let from = 0;
  let to = segments.length;
  while (from < to && segments[from].type === 'static' && segments[from].text === '') from++;
  while (to > from && segments[to - 1].type === 'static' && segments[to - 1].text === '') to--;

  for (let idx = from; idx < to; idx++) {
    const seg = segments[idx];
    const prev = idx > from ? segments[idx - 1] : null;
    const next = idx < to - 1 ? segments[idx + 1] : null;

    if (seg.type === 'static') {
      const leftPartial = prev ? prev.type === 'expr' : leftEdgePartial;
      const rightPartial = next ? next.type === 'expr' : rightEdgePartial;
      emitStatic(seg.text, leftPartial, rightPartial, sink);
      continue;
    }

    const touchesLeft = prev
      ? (prev.type === 'expr' || !WS.test(prev.text[prev.text.length - 1] || ''))
      : leftEdgePartial;
    const touchesRight = next
      ? (next.type === 'expr' || !WS.test(next.text[0] || ''))
      : rightEdgePartial;

    if (!seg.extract) continue;
    if (touchesLeft || touchesRight) {
      extractFromExpression(seg.text, partialSink(sink));
    } else {
      extractFromExpression(seg.text, sink);
    }
  }
}

/** A sink that records every token as a skipped partial fragment. */
function partialSink(sink) {
  return {
    helpers: sink.helpers,
    token: (t) => sink.skip(t, 'partial'),
    skip: (t, reason) => sink.skip(t, reason)
  };
}

/**
 * Function names whose string arguments are treated as token sources.
 * String literals passed to any *other* function call (`route('home')`,
 * `config('app.name')`, `t('key')`) are skipped – they are almost never
 * utility tokens. Extend via sink.helpers.
 */
export const DEFAULT_CLASS_HELPERS = new Set([
  'clsx', 'classnames', 'classNames', 'cn', 'cx', 'cva', 'tv', 'tw', 'twMerge', 'twJoin', 'classList',
  'join', 'concat', 'map', 'filter', 'flat', 'flatMap', 'trim', 'split', 'push', 'toString', 'String', 'Array',
  'implode', 'array_merge', 'array_filter'
]);

/** Does the operand that follows a concat operator at `i` start with whitespace? */
function operandAfterConcatStartsWithWs(src, i, end) {
  // src[i] is the concat operator
  let j = i + 1;
  while (j < end && WS.test(src[j])) j++;
  const c = src[j];
  if (c === '"' || c === "'" || c === '`') return j + 1 < end && WS.test(src[j + 1]);
  return false;
}

/**
 * Extract candidate tokens from a JS-like expression.
 * Recognises: '…' "…" `…${}…` string literals, unquoted object keys
 * ({ flex: cond }), and ignores identifiers, numbers, comments and operators.
 * @param {string} src - Expression source
 * @param {{token:Function, skip:Function, helpers?:Set<string>}} sink
 */
export function extractFromExpression(src, sink, start = 0, end = src.length) {
  const helpers = sink.helpers || DEFAULT_CLASS_HELPERS;
  let i = start;
  let lastSig = '';          // last significant character ('a' = identifier, '0' = number, '"' = string)
  let lastIdent = '';        // text of the last identifier
  let lastEndsWithWs = false; // did the last operand (string literal) end with whitespace?
  const callStack = [];      // per open "(": true when it suppresses literals
  let suppress = 0;

  const emit = (text, leftPartial, rightPartial) => {
    if (suppress > 0) emitStatic(text, leftPartial, rightPartial, suppressedSink(sink));
    else emitStatic(text, leftPartial, rightPartial, sink);
  };

  while (i < end) {
    const ch = src[i];

    if (WS.test(ch)) { i++; continue; }

    // Comments
    if (ch === '/' && src[i + 1] === '/') {
      const k = src.indexOf('\n', i + 2);
      i = k === -1 || k > end ? end : k + 1;
      continue;
    }
    if (ch === '/' && src[i + 1] === '*') {
      const k = src.indexOf('*/', i + 2);
      i = k === -1 || k > end ? end : k + 2;
      continue;
    }

    // Quoted string literal
    if (ch === '"' || ch === "'") {
      const q = skipQuoted(src, i, end);
      const closed = q !== -1;
      const j = closed ? q : end;
      const raw = src.slice(i + 1, closed ? j - 1 : j);
      const text = unescapeString(raw);
      const leftPartial = CONCAT_OPERATORS.has(lastSig) && !lastEndsWithWs;
      const nextIdx = skipWs(src, j, end);
      const nextSig = nextIdx < end ? src[nextIdx] : '';
      const rightPartial = CONCAT_OPERATORS.has(nextSig) && !operandAfterConcatStartsWithWs(src, nextIdx, end);
      // Operands of a comparison (`size === 'big'`, `'a' != x`) are not tokens.
      // PHP/Blade `'key' => value` is an array key, not a comparison.
      const isComparison = lastSig === '=' || (nextSig === '=' && src[nextIdx + 1] !== '>');
      if (isComparison) emitStatic(text, false, false, reasonSink(sink, 'comparison'));
      else emit(text, leftPartial, rightPartial);
      lastSig = '"';
      lastEndsWithWs = text.length > 0 && WS.test(text[text.length - 1]);
      i = j;
      continue;
    }

    // Template literal
    if (ch === '`') {
      const leftPartial = CONCAT_OPERATORS.has(lastSig) && !lastEndsWithWs;
      const { segments, next } = readTemplateLiteral(src, i, end);
      const nextIdx = skipWs(src, next, end);
      const nextSig = nextIdx < end ? src[nextIdx] : '';
      const rightPartial = CONCAT_OPERATORS.has(nextSig) && !operandAfterConcatStartsWithWs(src, nextIdx, end);
      processSegments(segments, suppress > 0 ? suppressedSink(sink) : sink, leftPartial, rightPartial);
      lastSig = '"';
      const lastSeg = segments[segments.length - 1];
      lastEndsWithWs = !!lastSeg && lastSeg.type === 'static' && lastSeg.text.length > 0 && WS.test(lastSeg.text[lastSeg.text.length - 1]);
      i = next;
      continue;
    }

    // Identifier / keyword / object key
    if (IDENT_START.test(ch)) {
      let j = i + 1;
      while (j < end && IDENT_CHAR.test(src[j])) j++;
      const word = src.slice(i, j);
      // Unquoted object key: `{ flex: cond, col: other }`
      if ((lastSig === '{' || lastSig === ',') && peekSignificant(src, j, end) === ':') {
        if (suppress > 0) sink.skip(word, 'call-argument');
        else sink.token(word);
      }
      lastSig = 'a';
      lastIdent = word;
      lastEndsWithWs = false;
      i = j;
      continue;
    }

    // Numbers – skip the run so "1.5" does not register '.' as a concat operator
    if (ch >= '0' && ch <= '9') {
      let j = i + 1;
      while (j < end && /[\w.]/.test(src[j])) j++;
      lastSig = '0';
      lastEndsWithWs = false;
      i = j;
      continue;
    }

    if (ch === '(') {
      const isCall = lastSig === 'a';
      const suppressing = isCall && !helpers.has(lastIdent);
      callStack.push(suppressing);
      if (suppressing) suppress++;
    } else if (ch === ')') {
      if (callStack.length > 0 && callStack.pop()) suppress--;
    }

    lastSig = ch;
    if (!CONCAT_OPERATORS.has(ch)) lastEndsWithWs = false;
    i++;
  }
}

function skipWs(src, i, end) {
  while (i < end && WS.test(src[i])) i++;
  return i;
}

/** A sink that records every token as skipped with the given reason. */
function reasonSink(sink, reason) {
  return {
    helpers: sink.helpers,
    token: (t) => sink.skip(t, reason),
    skip: (t, r) => sink.skip(t, r)
  };
}

/** A sink that records every token as skipped because it is a plain function argument. */
function suppressedSink(sink) {
  return reasonSink(sink, 'call-argument');
}

/**
 * Read a template literal starting at the backtick at `i`.
 * Returns its segments and the index just past the closing backtick.
 */
function readTemplateLiteral(src, i, end) {
  const segments = [];
  let j = i + 1;
  let staticStart = j;
  let closed = false;

  while (j < end) {
    const c = src.charCodeAt(j);
    if (c === 92) { j += 2; continue; }
    if (c === 96) {
      segments.push({ type: 'static', text: unescapeString(src.slice(staticStart, j)) });
      j++;
      closed = true;
      break;
    }
    if (c === 36 && src.charCodeAt(j + 1) === 123) {
      segments.push({ type: 'static', text: unescapeString(src.slice(staticStart, j)) });
      const k = findBalanced(src, j + 1, '{', '}', end);
      if (k === -1) {
        segments.push({ type: 'expr', text: src.slice(j + 2, end), extract: false });
        j = end;
        staticStart = end;
        break;
      }
      segments.push({ type: 'expr', text: src.slice(j + 2, k - 1), extract: true });
      j = k;
      staticStart = j;
      continue;
    }
    j++;
  }

  if (!closed) {
    if (staticStart < Math.min(j, end)) {
      segments.push({ type: 'static', text: unescapeString(src.slice(staticStart, Math.min(j, end))) });
    }
    j = end;
  }
  return { segments, next: j };
}

// Openers of template-language interpolations inside otherwise static values.
// Order matters: longer openers first.
const TEMPLATE_OPENERS = [
  { open: '{{--', close: '--}}', extract: false },  // Blade comment
  { open: '{{', close: '}}', extract: true },        // Blade / Angular / Handlebars / Twig
  { open: '{!!', close: '!!}', extract: true },      // Blade raw echo
  { open: '{%', close: '%}', extract: false },       // Twig / Jinja tag
  { open: '{#', close: '#}', extract: false },       // Twig comment
  { open: '<?', close: '?>', extract: true }         // PHP
];

const FAST_PATH = /[{$<@]/;
// `@tab:p:big`, `@max-tab:…`, `@tab/sidebar:…` are container-query variants, not Blade directives
const CONTAINER_VARIANT = /^@[A-Za-z0-9-]+(?:\/[A-Za-z][\w-]*)?:/;

/**
 * Strip the PHP opener remnants from "<?php … ?>" / "<?= … ?>" bodies.
 */
function stripPhpOpener(inner) {
  if (inner.startsWith('php')) return inner.slice(3);
  if (inner.startsWith('=')) return inner.slice(1);
  return inner;
}

/**
 * Extract candidate tokens from a static attribute value that may contain
 * template-language interpolations ({expr}, {{ }}, ${}, <?= ?>, @directive()).
 * @param {string} text - Attribute value text
 * @param {{token:Function, skip:Function}} sink
 */
export function extractFromTemplatedString(text, sink) {
  if (!FAST_PATH.test(text)) {
    emitStatic(text, false, false, sink);
    return;
  }

  const segments = [];
  const n = text.length;
  let i = 0;
  let staticStart = 0;

  const pushStatic = (until) => {
    segments.push({ type: 'static', text: text.slice(staticStart, until) });
  };

  outer:
  while (i < n) {
    const ch = text[i];

    if (ch === '{' || ch === '<') {
      for (const opener of TEMPLATE_OPENERS) {
        if (text.startsWith(opener.open, i)) {
          if (opener.open === '<?' ) {
            // Only treat "<?" as PHP when followed by php/=/whitespace
            const after = text[i + 2];
            if (!(after === '=' || after === ' ' || after === '\n' || after === '\t' || text.startsWith('php', i + 2))) {
              i++;
              continue outer;
            }
          }
          pushStatic(i);
          const k = text.indexOf(opener.close, i + opener.open.length);
          if (k === -1) {
            segments.push({ type: 'expr', text: text.slice(i + opener.open.length), extract: false });
            staticStart = n;
            i = n;
            break outer;
          }
          let inner = text.slice(i + opener.open.length, k);
          if (opener.open === '<?') inner = stripPhpOpener(inner);
          segments.push({ type: 'expr', text: inner, extract: opener.extract });
          i = k + opener.close.length;
          staticStart = i;
          continue outer;
        }
      }
      if (ch === '{') {
        // Svelte / JSX-in-string single-brace expression
        pushStatic(i);
        const k = findBalanced(text, i, '{', '}');
        if (k === -1) {
          segments.push({ type: 'expr', text: text.slice(i + 1), extract: false });
          staticStart = n;
          i = n;
          break;
        }
        segments.push({ type: 'expr', text: text.slice(i + 1, k - 1), extract: true });
        i = k;
        staticStart = i;
        continue;
      }
      i++;
      continue;
    }

    if (ch === '$' && text[i + 1] === '{') {
      // JS template-literal interpolation inside markup strings (lit-html etc.)
      pushStatic(i);
      const k = findBalanced(text, i + 1, '{', '}');
      if (k === -1) {
        segments.push({ type: 'expr', text: text.slice(i + 2), extract: false });
        staticStart = n;
        i = n;
        break;
      }
      segments.push({ type: 'expr', text: text.slice(i + 2, k - 1), extract: true });
      i = k;
      staticStart = i;
      continue;
    }

    if (ch === '@' && i + 1 < n && /[A-Za-z]/.test(text[i + 1]) && !CONTAINER_VARIANT.test(text.slice(i, i + 80))) {
      // Blade directive: @if(...), @else, @endif, @class([...]) …
      // (but not a container-query variant such as `@tab:` or `@tab/side:`)
      pushStatic(i);
      let j = i + 1;
      while (j < n && /[A-Za-z]/.test(text[j])) j++;
      const name = text.slice(i + 1, j);
      let inner = '';
      if (text[j] === '(') {
        const k = findBalanced(text, j, '(', ')');
        if (k === -1) {
          segments.push({ type: 'expr', text: text.slice(j + 1), extract: false });
          staticStart = n;
          i = n;
          break;
        }
        inner = text.slice(j + 1, k - 1);
        j = k;
      }
      // Only @class([...]) carries class-like string literals worth extracting
      segments.push({ type: 'expr', text: inner, extract: name === 'class' });
      i = j;
      staticStart = i;
      continue;
    }

    i++;
  }

  if (staticStart < n) pushStatic(n);
  processSegments(segments, sink, false, false);
}

export default {
  skipQuoted,
  findBalanced,
  emitStatic,
  processSegments,
  extractFromExpression,
  extractFromTemplatedString
};
