/**
 * HTML rewriting for the Tailwind converter.
 *
 * A small, quote-aware tag scanner (no regex over the whole document):
 *  - skips comments, <script>, <style>, <pre>, <textarea> contents
 *  - rewrites `class="…"` / `class='…'` / JSX `className="…"` / `className={"…"}`
 *  - merges into existing layout/space/visual/interact/listens attributes (deduplicated)
 *  - leaves `data-class`, `:class`, `class={expr}` (dynamic) untouched
 *  - emitted attributes are double-quoted; embedded double quotes become &quot;
 *  - unknown classes stay in `class=""` (dropped when empty)
 *  - a `group` class on an element is required by group-hover: children; we leave
 *    the converted capabilities (`hoverable focusable …`) on the parent
 */
import { convertClasses } from './index.js';

const RAW_TEXT = new Set(['script', 'style', 'pre', 'textarea']);
const SS_ATTRS = ['layout', 'space', 'visual', 'interact', 'listens'];

/**
 * @param {string} html
 * @param {{exact?: boolean, prefix?: string, keepClass?: boolean}|boolean} [options]
 * @returns {string}
 */
export function convertHTML(html, options) {
  return rewriteClassAttributes(html, options).html;
}

/**
 * @returns {{ html: string, converted: number, unknown: Map<string, number> }}
 */
export function rewriteClassAttributes(html, options) {
  const opts = typeof options === 'boolean' ? { exact: options } : (options || {});
  const attrPrefix = opts.prefix ? (opts.prefix.endsWith('-') ? opts.prefix : `${opts.prefix}-`) : '';
  const src = String(html ?? '');
  let out = '';
  let i = 0;
  let converted = 0;
  const unknown = new Map();

  while (i < src.length) {
    const lt = src.indexOf('<', i);
    if (lt === -1) { out += src.slice(i); break; }
    out += src.slice(i, lt);

    // comments / doctype / processing instructions
    if (src.startsWith('<!--', lt)) {
      const end = src.indexOf('-->', lt + 4);
      const stop = end === -1 ? src.length : end + 3;
      out += src.slice(lt, stop); i = stop; continue;
    }
    if (src[lt + 1] === '!' || src[lt + 1] === '?') {
      const end = src.indexOf('>', lt);
      const stop = end === -1 ? src.length : end + 1;
      out += src.slice(lt, stop); i = stop; continue;
    }
    // closing tag
    if (src[lt + 1] === '/') {
      const end = src.indexOf('>', lt);
      const stop = end === -1 ? src.length : end + 1;
      out += src.slice(lt, stop); i = stop; continue;
    }
    // tag name
    const nm = /^<([A-Za-z][\w:.-]*)/.exec(src.slice(lt, lt + 200));
    if (!nm) { out += '<'; i = lt + 1; continue; }
    const tag = nm[1];
    const tagLower = tag.toLowerCase();
    let j = lt + 1 + tag.length;

    // scan attributes
    const attrs = [];
    let selfClosing = false;
    while (j < src.length) {
      const c = src[j];
      if (/\s/.test(c)) { j++; continue; }
      if (c === '>') { j++; break; }
      if (c === '/' && src[j + 1] === '>') { selfClosing = true; j += 2; break; }
      // name
      const ns = j;
      while (j < src.length && !/[\s=>/]/.test(src[j])) j++;
      if (j === ns) { j++; continue; }
      const name = src.slice(ns, j);
      let value = null, quote = '', kind = 'none';
      let k = j;
      while (k < src.length && /\s/.test(src[k])) k++;
      if (src[k] === '=') {
        k++;
        while (k < src.length && /\s/.test(src[k])) k++;
        if (src[k] === '"' || src[k] === "'") {
          quote = src[k];
          const e = src.indexOf(quote, k + 1);
          value = src.slice(k + 1, e === -1 ? src.length : e);
          k = e === -1 ? src.length : e + 1;
          kind = 'quoted';
        } else if (src[k] === '{') {
          // JSX expression: only a plain string literal is convertible
          const e = findBrace(src, k);
          const inner = src.slice(k + 1, e - 1).trim();
          const lit = /^(["'`])([^"'`$]*)\1$/.exec(inner);
          value = lit ? lit[2] : null;
          quote = '"';
          kind = lit ? 'jsx' : 'dynamic';
          if (!lit) value = src.slice(k, e);
          k = e;
        } else {
          let e = k;
          while (e < src.length && !/[\s>]/.test(src[e])) e++;
          value = src.slice(k, e); k = e; kind = 'unquoted'; quote = '"';
        }
        j = k;
      }
      attrs.push({ name, value, quote, kind, raw: src.slice(ns, j) });
    }

    const classAttrIdx = attrs.findIndex((a) => /^class(Name)?$/i.test(a.name) && (a.kind === 'quoted' || a.kind === 'jsx' || a.kind === 'unquoted'));
    if (classAttrIdx === -1) {
      out += src.slice(lt, j);
    } else {
      const classAttr = attrs[classAttrIdx];
      const res = convertClasses(classAttr.value, opts);
      converted++;
      for (const u of res.unknown) unknown.set(u, (unknown.get(u) || 0) + 1);

      // merge into existing SenangStart attributes
      const merged = {};
      for (const a of SS_ATTRS) {
        const existing = attrs.find((x) => x.name.toLowerCase() === `${attrPrefix}${a}` && x.kind !== 'dynamic');
        const tokens = [];
        if (existing && existing.value) for (const t of existing.value.split(/\s+/)) if (t && !tokens.includes(t)) tokens.push(t);
        for (const t of res[a]) if (!tokens.includes(t)) tokens.push(t);
        merged[a] = tokens;
      }

      // Emitted attributes are always double-quoted (the original quote style is not preserved)
      const esc = (v) => v.replace(/"/g, '&quot;');
      const wrap = (name, val) => `${name}="${esc(val)}"`;

      const pieces = [];
      let injected = false;
      for (let idx = 0; idx < attrs.length; idx++) {
        const a = attrs[idx];
        const lower = a.name.toLowerCase();
        const ssType = SS_ATTRS.find((t) => `${attrPrefix}${t}` === lower);
        if (ssType && a.kind !== 'dynamic') continue; // re-emitted below
        if (idx === classAttrIdx) {
          for (const t of SS_ATTRS) if (merged[t].length) pieces.push(wrap(`${attrPrefix}${t}`, merged[t].join(' ')));
          if (res.unknown.length || opts.keepClass) {
            const keep = opts.keepClass ? classAttr.value : res.unknown.join(' ');
            if (keep) pieces.push(wrap(classAttr.name, keep));
          }
          injected = true;
          continue;
        }
        pieces.push(a.raw);
      }
      if (!injected) for (const t of SS_ATTRS) if (merged[t].length) pieces.push(wrap(`${attrPrefix}${t}`, merged[t].join(' ')));
      out += `<${tag}${pieces.length ? ' ' + pieces.join(' ') : ''}${selfClosing ? ' />' : '>'}`;
    }
    i = j;

    // raw-text elements: copy content verbatim up to the closing tag
    if (!selfClosing && RAW_TEXT.has(tagLower)) {
      const close = src.toLowerCase().indexOf(`</${tagLower}`, i);
      const stop = close === -1 ? src.length : close;
      out += src.slice(i, stop);
      i = stop;
    }
  }
  return { html: out, converted, unknown };
}

function findBrace(src, start) {
  let depth = 0;
  let quote = null;
  for (let i = start; i < src.length; i++) {
    const ch = src[i];
    if (quote) { if (ch === '\\') i++; else if (ch === quote) quote = null; continue; }
    if (ch === '"' || ch === "'" || ch === '`') quote = ch;
    else if (ch === '{') depth++;
    else if (ch === '}') { depth--; if (depth === 0) return i + 1; }
  }
  return src.length;
}

export default { convertHTML, rewriteClassAttributes };
