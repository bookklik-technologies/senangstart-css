/**
 * SenangStart CSS - Markup scanner
 *
 * A single-pass, tag-aware scanner that finds SenangStart attributes
 * (layout / space / visual / interact / listens) in HTML, JSX/TSX, Vue,
 * Svelte, Astro, Blade and PHP sources.
 *
 * Design notes
 *  - Attributes are only recognised *inside a tag* (`<name …>`), so prose such
 *    as "space = big", JS like `const layout = …` and script bodies mentioning
 *    `visual=` are never matched.
 *  - Attribute names are tokenised, so `data-layout`, `playout` or `x-layout`
 *    never match, while framework bindings (`:layout`, `v-bind:layout`,
 *    `x-bind:layout`, `[layout]`, `[attr.layout]`) are reported as dynamic.
 *  - `<!-- … -->` comments are skipped. Unterminated constructs never throw;
 *    they are consumed to the end of input so the whole scan stays linear.
 */

import { findBalanced } from './expressions.js';

export const ATTRIBUTE_TYPES = ['layout', 'space', 'visual', 'interact', 'listens'];
const ATTRIBUTE_TYPE_SET = new Set(ATTRIBUTE_TYPES);

const DYNAMIC_PREFIXES = [':', 'v-bind:', 'x-bind:'];

const WS_CODES = new Set([32, 9, 10, 13, 12]);
const isWs = (code) => WS_CODES.has(code);
const isNameStart = (code) => (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
const isTagNameChar = (code) =>
  isNameStart(code) || (code >= 48 && code <= 57) || code === 45 || code === 46 || code === 58 || code === 95;

/**
 * Resolve an attribute name to a SenangStart attribute type.
 * @param {string} name - Raw attribute name as written in the tag
 * @returns {{attrType:string, binding:'static'|'dynamic'}|null}
 */
export function resolveAttributeName(name) {
  const lower = name.toLowerCase();
  if (ATTRIBUTE_TYPE_SET.has(lower)) return { attrType: lower, binding: 'static' };

  // Angular: [layout]="expr" / [attr.layout]="expr"
  if (lower.length > 2 && lower[0] === '[' && lower[lower.length - 1] === ']') {
    let inner = lower.slice(1, -1);
    if (inner.startsWith('attr.')) inner = inner.slice(5);
    return ATTRIBUTE_TYPE_SET.has(inner) ? { attrType: inner, binding: 'dynamic' } : null;
  }

  // Vue / Alpine: :layout, v-bind:layout, x-bind:layout (with optional .modifiers)
  for (const prefix of DYNAMIC_PREFIXES) {
    if (lower.startsWith(prefix)) {
      let rest = lower.slice(prefix.length);
      const dot = rest.indexOf('.');
      if (dot !== -1) rest = rest.slice(0, dot);
      return ATTRIBUTE_TYPE_SET.has(rest) ? { attrType: rest, binding: 'dynamic' } : null;
    }
  }
  return null;
}

/**
 * Scan the attribute list of a tag starting at `i` (just after the tag name).
 * Calls onAttr for every SenangStart attribute found.
 * @returns {number} Index to resume text scanning from
 */
export function scanTagAttributes(src, i, onAttr, end = src.length) {
  while (i < end) {
    const c = src.charCodeAt(i);

    if (isWs(c)) { i++; continue; }
    if (c === 62 /* > */) return i + 1;
    if (c === 47 /* / */) {
      if (src.charCodeAt(i + 1) === 62) return i + 2;
      i++;
      continue;
    }
    if (c === 60 /* < */) {
      if (src.charCodeAt(i + 1) === 63 /* ? */) {
        // PHP block between attributes: <div <?php if ($x): ?>layout="…"<?php endif; ?>>
        const k = src.indexOf('?>', i + 2);
        i = k === -1 || k + 2 > end ? end : k + 2;
        continue;
      }
      // A bare "<" cannot appear inside a tag: resync and let the text loop handle it.
      return i;
    }
    if (c === 123 /* { */) {
      // JSX spread {...props}, Blade {{ $attributes }}, Svelte {shorthand}
      const k = findBalanced(src, i, '{', '}', end);
      if (k === -1) return end;
      i = k;
      continue;
    }
    if (c === 34 || c === 39) {
      // Stray quote inside a tag (broken markup) – skip just the quote so we
      // resync at the next ">" instead of swallowing the following tags.
      i++;
      continue;
    }
    if (c === 61 /* = */) { i++; continue; }

    // Attribute name
    const nameStart = i;
    while (i < end) {
      const d = src.charCodeAt(i);
      if (isWs(d) || d === 61 || d === 62 || d === 47 || d === 34 || d === 39 || d === 123 || d === 60) break;
      i++;
    }
    if (i === nameStart) { i++; continue; }
    const name = src.slice(nameStart, i);

    let k = i;
    while (k < end && isWs(src.charCodeAt(k))) k++;
    if (src.charCodeAt(k) !== 61) {
      // Boolean attribute – nothing to extract
      i = k;
      continue;
    }
    k++;
    while (k < end && isWs(src.charCodeAt(k))) k++;
    if (k >= end) return end;

    const v = src.charCodeAt(k);
    let value;
    let valueKind;

    if (v === 34 || v === 39) {
      const close = src.indexOf(src[k], k + 1);
      if (close === -1 || close >= end) { value = src.slice(k + 1, end); i = end; }
      else { value = src.slice(k + 1, close); i = close + 1; }
      valueKind = 'quoted';
    } else if (v === 123) {
      const close = findBalanced(src, k, '{', '}', end);
      // An unterminated {…} would turn the rest of the file into an "expression";
      // report it as unterminated instead of extracting junk from it.
      if (close === -1) { value = src.slice(k + 1, end); i = end; valueKind = 'unterminated'; }
      else { value = src.slice(k + 1, close - 1); i = close; valueKind = 'expression'; }
    } else if (v === 36 && src.charCodeAt(k + 1) === 123) {
      const close = findBalanced(src, k + 1, '{', '}', end);
      if (close === -1) { value = src.slice(k + 2, end); i = end; valueKind = 'unterminated'; }
      else { value = src.slice(k + 2, close - 1); i = close; valueKind = 'expression'; }
    } else if (v === 60 && src.charCodeAt(k + 1) === 63) {
      let close = src.indexOf('?>', k + 2);
      if (close !== -1 && close + 2 > end) close = -1;
      let inner = close === -1 ? src.slice(k + 2, end) : src.slice(k + 2, close);
      if (inner.startsWith('php')) inner = inner.slice(3);
      else if (inner.startsWith('=')) inner = inner.slice(1);
      value = inner;
      i = close === -1 ? end : close + 2;
      valueKind = 'expression';
    } else if (v === 62) {
      i = k;
      continue;
    } else {
      let e = k;
      while (e < end) {
        const d = src.charCodeAt(e);
        if (isWs(d) || d === 62) break;
        e++;
      }
      value = src.slice(k, e);
      if (value.endsWith('/') && src.charCodeAt(e) === 62) value = value.slice(0, -1);
      i = e;
      valueKind = 'unquoted';
    }

    const resolved = resolveAttributeName(name);
    if (resolved) {
      onAttr({
        name,
        attrType: resolved.attrType,
        binding: resolved.binding,
        valueKind,
        value,
        offset: nameStart
      });
    }
  }
  return end;
}

/**
 * Scan a whole source text for SenangStart attributes inside tags.
 * @param {string} src
 * @param {(attr: object) => void} onAttr
 */
export function scanMarkup(src, onAttr) {
  const n = src.length;
  let i = 0;
  // Once a closer is missing after some position it is missing after every
  // later position too; remembering that keeps unterminated input linear.
  let noCommentClose = false;
  let noBlockClose = false;
  let noBladeClose = false;
  const interesting = /<|\/\*|\{\{--/g;

  while (i < n) {
    interesting.lastIndex = i;
    const m = interesting.exec(src);
    if (m === null) break;
    const lt = m.index;

    if (m[0] === '/*') {
      // JS / CSS block comment (also covers JSX {/* … */}). Only skipped when a
      // matching "*/" exists, so a stray "/*" in prose costs nothing.
      const close = noBlockClose ? -1 : src.indexOf('*/', lt + 2);
      if (close === -1) { noBlockClose = true; i = lt + 2; }
      else i = close + 2;
      continue;
    }
    if (m[0] === '{{--') {
      // Blade comment
      const close = noBladeClose ? -1 : src.indexOf('--}}', lt + 4);
      if (close === -1) { noBladeClose = true; i = lt + 4; }
      else i = close + 4;
      continue;
    }

    const next = src.charCodeAt(lt + 1);

    if (next === 33 /* ! */) {
      if (src.startsWith('<!--', lt)) {
        const close = noCommentClose ? -1 : src.indexOf('-->', lt + 4);
        if (close === -1) {
          // Unterminated comment: be lenient and keep scanning the rest as markup
          noCommentClose = true;
          i = lt + 4;
        } else {
          i = close + 3;
        }
      } else {
        i = lt + 2; // <!DOCTYPE …>, <![CDATA[ … : nothing to extract
      }
      continue;
    }
    if (next === 47 /* / */) { i = lt + 2; continue; } // closing tag
    if (!isNameStart(next)) { i = lt + 1; continue; }

    let j = lt + 1;
    while (j < n && isTagNameChar(src.charCodeAt(j))) j++;
    const after = src.charCodeAt(j);
    if (!(j >= n || isWs(after) || after === 62 || after === 47)) {
      // "<T," or "<b+" – not a tag
      i = j;
      continue;
    }
    i = scanTagAttributes(src, j, onAttr);
  }
}

/**
 * Scan for `senang:` hint comments and report the attributes they declare:
 *   <!-- senang: layout="flex col" visual="bg:primary" -->
 *   /* senang: visual="bg:red" *\/     // senang: space="p:big"
 *   {{-- senang: layout="grid" --}}    # senang: layout="flex"
 */
export function scanHints(src, onAttr) {
  const n = src.length;
  let i = 0;

  while ((i = src.indexOf('senang:', i)) !== -1) {
    let b = i - 1;
    while (b >= 0 && isWs(src.charCodeAt(b))) b--;

    let closer = null;
    if (b >= 3 && src.startsWith('<!--', b - 3)) closer = '-->';
    else if (b >= 3 && src.startsWith('{{--', b - 3)) closer = '--}}';
    else if (b >= 1 && src.startsWith('/*', b - 1)) closer = '*/';
    else if (b >= 1 && src.startsWith('//', b - 1)) closer = '\n';
    else if (b >= 0 && src.charCodeAt(b) === 35 /* # */) closer = '\n';

    const bodyStart = i + 7;
    if (!closer) { i = bodyStart; continue; }

    let bodyEnd = src.indexOf(closer, bodyStart);
    if (bodyEnd === -1) bodyEnd = n;

    scanTagAttributes(src, bodyStart, (attr) => onAttr({ ...attr, source: 'hint' }), bodyEnd);
    i = bodyEnd;
  }
}

export default { scanMarkup, scanHints, scanTagAttributes, resolveAttributeName, ATTRIBUTE_TYPES };
