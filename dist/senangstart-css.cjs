/* SenangStart CSS - CJS Runtime v0.4.0 | MIT License */
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  compileMultiple: () => compileMultiple,
  compileSource: () => compileSource,
  constants: () => constants_exports,
  defaultConfig: () => defaultConfig,
  generateCSS: () => generateCSS,
  generateCSSVariables: () => generateCSSVariables,
  generatePreflight: () => generatePreflight,
  mergeConfig: () => mergeConfig,
  parseMultipleSources: () => parseMultipleSources,
  parseSource: () => parseSource,
  tokenize: () => tokenize,
  tokenizeAll: () => tokenizeAll
});
module.exports = __toCommonJS(index_exports);

// src/core/constants.js
var constants_exports = {};
__export(constants_exports, {
  BREAKPOINTS: () => BREAKPOINTS,
  CSS_COLOR_KEYWORDS: () => CSS_COLOR_KEYWORDS,
  LAYOUT_KEYWORDS: () => LAYOUT_KEYWORDS,
  LAYOUT_MAP: () => LAYOUT_MAP,
  LIMITS: () => LIMITS,
  STATES: () => STATES,
  TW_FONT_SIZE: () => TW_FONT_SIZE,
  TW_FONT_WEIGHT: () => TW_FONT_WEIGHT,
  TW_LEADING: () => TW_LEADING,
  TW_RADIUS: () => TW_RADIUS,
  TW_SHADOW: () => TW_SHADOW,
  TW_SPACING: () => TW_SPACING,
  TYPOGRAPHY_KEYWORDS: () => TYPOGRAPHY_KEYWORDS,
  attrName: () => attrName,
  attrPrefix: () => attrPrefix,
  default: () => constants_default
});
var LIMITS = {
  MAX_PROPERTY_LENGTH: 100,
  MAX_VALUE_LENGTH: 500,
  MAX_TOKEN_RAW_LENGTH: 200,
  MAX_ATTRIBUTE_VALUE_LENGTH: 1e4
};
var BREAKPOINTS = ["mob", "tab", "lap", "desk", "tw-sm", "tw-md", "tw-lg", "tw-xl", "tw-2xl"];
var STATES = ["hover", "focus", "focus-visible", "focus-within", "active", "checked", "disabled", "dark", "expanded", "selected", "required", "optional", "valid", "invalid", "placeholder"];
var LAYOUT_KEYWORDS = [
  "flex",
  "grid",
  "block",
  "inline",
  "inline-block",
  "hidden",
  "row",
  "col",
  "row-reverse",
  "col-reverse",
  "center",
  "start",
  "end",
  "between",
  "around",
  "evenly",
  "wrap",
  "nowrap",
  "absolute",
  "relative",
  "fixed",
  "sticky",
  // State Capabilities
  "hoverable",
  "focusable",
  "pressable",
  "expandable",
  "selectable",
  "disabled"
];
var LAYOUT_MAP = {
  // Display
  "flex": "display: flex;",
  "grid": "display: grid;",
  "inline-flex": "display: inline-flex;",
  "inline-grid": "display: inline-grid;",
  "inline-block": "display: inline-block;",
  "table": "display: table;",
  "table-row": "display: table-row;",
  "table-cell": "display: table-cell;",
  "list-item": "display: list-item;",
  "contents": "display: contents;",
  "block": "display: block;",
  "inline": "display: inline;",
  "hidden": "display: none;",
  // Flex Direction
  "row": "flex-direction: row;",
  "col": "flex-direction: column;",
  "row-reverse": "flex-direction: row-reverse;",
  "col-reverse": "flex-direction: column-reverse;",
  // Flex Wrap
  "wrap": "flex-wrap: wrap;",
  "nowrap": "flex-wrap: nowrap;",
  "wrap-reverse": "flex-wrap: wrap-reverse;",
  // Flex Item
  "grow": "flex-grow: 1;",
  "grow-0": "flex-grow: 0;",
  "shrink": "flex-shrink: 1;",
  "shrink-0": "flex-shrink: 0;",
  // Grid Auto Flow
  "grid-flow-row": "grid-auto-flow: row;",
  "grid-flow-col": "grid-auto-flow: column;",
  "grid-flow-dense": "grid-auto-flow: dense;",
  "grid-flow-row-dense": "grid-auto-flow: row dense;",
  "grid-flow-col-dense": "grid-auto-flow: column dense;",
  // Shorthand Alignment (backwards compat - simple keywords)
  "center": "justify-content: center; align-items: center;",
  "start": "justify-content: flex-start; align-items: flex-start;",
  "end": "justify-content: flex-end; align-items: flex-end;",
  "between": "justify-content: space-between;",
  "around": "justify-content: space-around;",
  "evenly": "justify-content: space-evenly;",
  // Position
  "absolute": "position: absolute;",
  "relative": "position: relative;",
  "fixed": "position: fixed;",
  "sticky": "position: sticky;",
  "static": "position: static;",
  // Visibility
  "visible": "visibility: visible;",
  "invisible": "visibility: hidden;",
  // Isolation
  "isolate": "isolation: isolate;",
  "isolate-auto": "isolation: auto;",
  // Box Sizing
  "box-border": "box-sizing: border-box;",
  "box-content": "box-sizing: content-box;",
  // Float
  "float-left": "float: left;",
  "float-right": "float: right;",
  "float-none": "float: none;",
  // Clear
  "clear-left": "clear: left;",
  "clear-right": "clear: right;",
  "clear-both": "clear: both;",
  "clear-none": "clear: none;",
  // Table Border Collapse
  "collapse": "border-collapse: collapse;",
  "separate": "border-collapse: separate;",
  // Table Layout
  "table-auto": "table-layout: auto;",
  "table-fixed": "table-layout: fixed;",
  // Caption Side
  "caption-top": "caption-side: top;",
  "caption-bottom": "caption-side: bottom;",
  // Container
  "container": "width: 100%; margin-left: auto; margin-right: auto;"
};
var TYPOGRAPHY_KEYWORDS = {
  // Font Style
  "italic": "font-style: italic;",
  "not-italic": "font-style: normal;",
  // Font Stretch
  "font-stretch-condensed": "font-stretch: condensed;",
  "font-stretch-expanded": "font-stretch: expanded;",
  "font-stretch-normal": "font-stretch: normal;",
  // Font Smoothing
  "antialiased": "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
  "subpixel-antialiased": "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;",
  // Font Variant Numeric
  "normal-nums": "font-variant-numeric: normal;",
  "ordinal": "font-variant-numeric: ordinal;",
  "slashed-zero": "font-variant-numeric: slashed-zero;",
  "lining-nums": "font-variant-numeric: lining-nums;",
  "oldstyle-nums": "font-variant-numeric: oldstyle-nums;",
  "proportional-nums": "font-variant-numeric: proportional-nums;",
  "tabular-nums": "font-variant-numeric: tabular-nums;",
  // Text Transform
  "uppercase": "text-transform: uppercase;",
  "lowercase": "text-transform: lowercase;",
  "capitalize": "text-transform: capitalize;",
  "normal-case": "text-transform: none;",
  // Text Decoration Line
  "underline": "text-decoration-line: underline;",
  "overline": "text-decoration-line: overline;",
  "line-through": "text-decoration-line: line-through;",
  "no-underline": "text-decoration-line: none;",
  // Text Decoration Style
  "decoration-solid": "text-decoration-style: solid;",
  "decoration-double": "text-decoration-style: double;",
  "decoration-dotted": "text-decoration-style: dotted;",
  "decoration-dashed": "text-decoration-style: dashed;",
  "decoration-wavy": "text-decoration-style: wavy;",
  // Text Overflow
  "truncate": "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
  "text-ellipsis": "text-overflow: ellipsis;",
  "text-clip": "text-overflow: clip;",
  // Text Wrap
  "text-wrap": "text-wrap: wrap;",
  "text-nowrap": "text-wrap: nowrap;",
  "text-balance": "text-wrap: balance;",
  "text-pretty": "text-wrap: pretty;",
  // Whitespace
  "whitespace-normal": "white-space: normal;",
  "whitespace-nowrap": "white-space: nowrap;",
  "whitespace-pre": "white-space: pre;",
  "whitespace-pre-line": "white-space: pre-line;",
  "whitespace-pre-wrap": "white-space: pre-wrap;",
  "whitespace-break-spaces": "white-space: break-spaces;",
  // Word Break
  "break-normal": "overflow-wrap: normal; word-break: normal;",
  "break-words": "overflow-wrap: break-word;",
  "break-all": "word-break: break-all;",
  "break-keep": "word-break: keep-all;",
  // Hyphens
  "hyphens-none": "hyphens: none;",
  "hyphens-manual": "hyphens: manual;",
  "hyphens-auto": "hyphens: auto;",
  // Vertical Align
  "align-baseline": "vertical-align: baseline;",
  "align-top": "vertical-align: top;",
  "align-middle": "vertical-align: middle;",
  "align-bottom": "vertical-align: bottom;",
  "align-text-top": "vertical-align: text-top;",
  "align-text-bottom": "vertical-align: text-bottom;",
  "align-sub": "vertical-align: sub;",
  "align-super": "vertical-align: super;",
  // List Style Type
  "list-none": "list-style-type: none;",
  "list-disc": "list-style-type: disc;",
  "list-decimal": "list-style-type: decimal;",
  "list-square": "list-style-type: square;",
  // List Style Position
  "list-inside": "list-style-position: inside;",
  "list-outside": "list-style-position: outside;"
};
var TW_SPACING = {
  "0": "0px",
  "px": "1px",
  "0-5": "0.125rem",
  "1": "0.25rem",
  "1-5": "0.375rem",
  "2": "0.5rem",
  "2-5": "0.625rem",
  "3": "0.75rem",
  "3-5": "0.875rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
  "11": "2.75rem",
  "12": "3rem",
  "14": "3.5rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "28": "7rem",
  "32": "8rem",
  "36": "9rem",
  "40": "10rem",
  "44": "11rem",
  "48": "12rem",
  "52": "13rem",
  "56": "14rem",
  "60": "15rem",
  "64": "16rem",
  "72": "18rem",
  "80": "20rem",
  "96": "24rem"
};
var TW_RADIUS = {
  "none": "0px",
  "sm": "0.125rem",
  "DEFAULT": "0.25rem",
  "md": "0.375rem",
  "lg": "0.5rem",
  "xl": "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  "full": "9999px"
};
var TW_SHADOW = {
  "sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  "DEFAULT": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  "md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  "lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  "xl": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  "inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  "none": "none"
};
var TW_FONT_SIZE = {
  "xs": "0.75rem",
  "sm": "0.875rem",
  "base": "1rem",
  "lg": "1.125rem",
  "xl": "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem"
};
var TW_LEADING = {
  "xs": "1rem",
  "sm": "1.25rem",
  "base": "1.5rem",
  "lg": "1.75rem",
  "xl": "1.75rem",
  "2xl": "2rem",
  "3xl": "2.25rem",
  "4xl": "2.5rem",
  "5xl": "1",
  "6xl": "1",
  "7xl": "1",
  "8xl": "1",
  "9xl": "1"
};
var TW_FONT_WEIGHT = {
  "thin": "100",
  "extralight": "200",
  "light": "300",
  "normal": "400",
  "medium": "500",
  "semibold": "600",
  "bold": "700",
  "extrabold": "800",
  "black": "900"
};
var CSS_COLOR_KEYWORDS = ["transparent", "currentColor", "inherit", "initial", "unset"];
var constants_default = {
  BREAKPOINTS,
  STATES,
  LAYOUT_KEYWORDS,
  LAYOUT_MAP,
  TYPOGRAPHY_KEYWORDS,
  TW_SPACING,
  TW_RADIUS,
  TW_SHADOW,
  TW_FONT_SIZE,
  TW_LEADING,
  TW_FONT_WEIGHT,
  LIMITS,
  CSS_COLOR_KEYWORDS
};
function attrPrefix(configOrPrefix) {
  const p = typeof configOrPrefix === "string" ? configOrPrefix : configOrPrefix && configOrPrefix.prefix || "";
  if (!p) return "";
  return p.endsWith("-") ? p : `${p}-`;
}
function attrName(type, configOrPrefix) {
  return `${attrPrefix(configOrPrefix)}${type}`;
}

// src/core/value-grammar.js
var ALLOWED_CHARS = /^[A-Za-z0-9 _.%#,/+*'"()!:\u00A0-\uFFFF-]*$/;
var FORBIDDEN_CHARS = /[{};<>\\\n\r\t@`$]/;
var DANGEROUS_URL = /url\s*\(\s*['"]?\s*(javascript|data|vbscript|file|about)\s*:/i;
var DANGEROUS_CALLS = /\b(expression|eval|alert)\s*\(/i;
var MAX_LENGTH = 500;
function validateValue(value) {
  if (typeof value !== "string") return { ok: false, reason: "value must be a string" };
  if (value.length === 0) return { ok: false, reason: "empty value" };
  if (value.length > MAX_LENGTH) return { ok: false, reason: `value exceeds ${MAX_LENGTH} characters` };
  if (FORBIDDEN_CHARS.test(value)) {
    const ch = value.match(FORBIDDEN_CHARS)[0];
    const printable = ch === "\n" || ch === "\r" ? "newline" : ch === "	" ? "tab" : `"${ch}"`;
    return { ok: false, reason: `forbidden character ${printable}` };
  }
  if (!ALLOWED_CHARS.test(value)) {
    return { ok: false, reason: "character outside the allowed set" };
  }
  if (DANGEROUS_URL.test(value)) {
    return { ok: false, reason: "url() with a forbidden scheme" };
  }
  if (DANGEROUS_CALLS.test(value)) {
    return { ok: false, reason: "forbidden function call" };
  }
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
    if (ch === "(") depth++;
    else if (ch === ")") {
      depth--;
      if (depth < 0) return { ok: false, reason: "unbalanced parentheses" };
    }
  }
  if (quote) return { ok: false, reason: "unbalanced quotes" };
  if (depth !== 0) return { ok: false, reason: "unbalanced parentheses" };
  return { ok: true };
}
var RAW_FORBIDDEN = /[{};<>\\`$\u0000-\u001f\u007f]/;
var RAW_AT_MISUSE = /(?:^|[^:])@|@(?![A-Za-z0-9])/;
var RAW_TOKEN_MAX = 500;
function checkRawToken(raw) {
  if (typeof raw !== "string" || raw.length === 0) return { ok: false, reason: "empty token" };
  if (raw.length > RAW_TOKEN_MAX) return { ok: false, reason: `token exceeds ${RAW_TOKEN_MAX} characters` };
  const bad = raw.match(RAW_FORBIDDEN);
  if (bad) {
    const c = bad[0];
    const name = c === "\n" || c === "\r" ? "newline" : c.charCodeAt(0) < 32 ? "control character" : `"${c}"`;
    return { ok: false, reason: `forbidden character ${name}` };
  }
  if (raw.includes("@") && RAW_AT_MISUSE.test(raw.replace(/^@[A-Za-z0-9]/, "x").replace(/:@(?=[A-Za-z0-9])/g, ":x"))) {
    return { ok: false, reason: 'forbidden character "@"' };
  }
  return { ok: true };
}
var SCALE_KEY = /^-?[A-Za-z0-9][A-Za-z0-9_./-]*$/;
function isValidScaleKey(key) {
  return typeof key === "string" && key.length > 0 && key.length <= 100 && SCALE_KEY.test(key);
}
function escapeCSSString(str) {
  if (typeof str !== "string") return "";
  let out = "";
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const code = str.charCodeAt(i);
    if (ch === '"' || ch === "\\") {
      out += "\\" + ch;
    } else if (code === 0) {
      out += "\uFFFD";
    } else if (code >= 1 && code <= 31 || code === 127) {
      out += "\\" + code.toString(16) + " ";
    } else {
      out += ch;
    }
  }
  return out;
}
function normalizeArbitraryValue(raw) {
  if (typeof raw !== "string") return "";
  const v = raw.replace(/_/g, " ").trim();
  if (!/\b(calc|min|max|clamp)\(/.test(v)) return v;
  return spaceMathOperators(v);
}
function spaceMathOperators(value) {
  const protectedVars = [];
  const work = value.replace(/--[A-Za-z0-9_-]+/g, (m) => `${protectedVars.push(m) - 1}`);
  let out = "";
  let depth = 0;
  const mathStack = [];
  for (let i = 0; i < work.length; i++) {
    const ch = work[i];
    if (ch === "(") {
      const fnMatch = /([a-z-]+)$/i.exec(out);
      mathStack.push(fnMatch && /^(calc|min|max|clamp)$/i.test(fnMatch[1]) ? "math" : "other");
      if (mathStack[mathStack.length - 1] === "math") depth++;
      out += ch;
      continue;
    }
    if (ch === ")") {
      if (mathStack.pop() === "math") depth--;
      out += ch;
      continue;
    }
    if (depth > 0 && (ch === "+" || ch === "*" || ch === "/" || ch === "-")) {
      const leftRaw = out.replace(/\s+$/, "");
      const left = leftRaw[leftRaw.length - 1] || "";
      let j = i + 1;
      while (j < work.length && work[j] === " ") j++;
      const right = work[j] || "";
      const leftIsValueEnd = /[0-9%)\u0001]/.test(left) || /\d[a-zA-Z]{1,5}$/.test(leftRaw);
      const rightIsValueStart = /[0-9.(\u0001]/.test(right) || /^-[0-9.]/.test(work.slice(j)) || /^(var|calc|min|max|clamp)\(/.test(work.slice(j));
      const isBinary = ch === "-" ? leftIsValueEnd && rightIsValueStart : leftIsValueEnd && rightIsValueStart;
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

// src/engine/plugins.js
var store = /* @__PURE__ */ new WeakMap();
function extensionsFor(config) {
  if (!config || typeof config !== "object") return EMPTY;
  const hit = store.get(config);
  if (hit) return hit;
  const ext = {
    utilities: { ...config.utilities || {} },
    variants: { ...config.variants || {} },
    keyframes: { ...config.theme && config.theme.keyframes || {} },
    animation: { ...config.theme && config.theme.animation || {} }
  };
  const plugins = Array.isArray(config.plugins) ? config.plugins : [];
  const api = {
    addUtilities(obj) {
      Object.assign(ext.utilities, obj || {});
    },
    addUtility(key, spec) {
      ext.utilities[key] = spec;
    },
    addVariants(obj) {
      Object.assign(ext.variants, obj || {});
    },
    addVariant(name, selectorOrAtRule) {
      ext.variants[name] = selectorOrAtRule;
    },
    addKeyframes(obj) {
      Object.assign(ext.keyframes, obj || {});
    },
    addAnimation(obj) {
      Object.assign(ext.animation, obj || {});
    },
    theme(path, fallback) {
      let cur = config.theme;
      for (const part of String(path).split(".")) {
        if (cur === null || cur === void 0) return fallback;
        cur = cur[part];
      }
      return cur === void 0 ? fallback : cur;
    },
    config
  };
  for (const plugin of plugins) {
    const fn = typeof plugin === "function" ? plugin : plugin && typeof plugin.handler === "function" ? plugin.handler : null;
    if (fn) fn(api);
  }
  if (Object.keys(ext.utilities).length === 0 && Object.keys(ext.variants).length === 0 && Object.keys(ext.keyframes).length === 0 && Object.keys(ext.animation).length === 0) {
    store.set(config, EMPTY);
    return EMPTY;
  }
  store.set(config, ext);
  return ext;
}
var EMPTY = Object.freeze({ utilities: {}, variants: {}, keyframes: {}, animation: {} });
function parseCustomVariant(name, def) {
  if (typeof def !== "string" || !def.trim()) return null;
  const d = def.trim();
  if (/[{};<>]/.test(d)) return null;
  if (d.startsWith("@media")) return { type: "media", name, query: d.slice(6).trim() };
  if (d.startsWith("@supports")) return { type: "media", name, query: `${d.slice(1)}`, atRule: "supports" };
  if (d.startsWith("@")) return null;
  const alts = d.split(",").map((s) => s.trim()).filter(Boolean);
  const suffixes = [];
  for (const alt of alts) {
    if (alt.endsWith("&")) {
      const anc = alt.slice(0, -1).trim();
      suffixes.push(`:where(${anc} *)`);
    } else if (alt.startsWith("&")) {
      suffixes.push(alt.slice(1));
    } else {
      suffixes.push(alt.startsWith(":") || alt.startsWith("[") ? alt : `:${alt}`);
    }
  }
  const selector = suffixes.length === 1 ? suffixes[0] : `:is(${suffixes.join(", ")})`;
  return { type: "state", name, selector };
}
function customKeyframes(config, css) {
  const { keyframes } = extensionsFor(config);
  let out = "";
  for (const [name, body] of Object.entries(keyframes)) {
    if (!/^[a-zA-Z_][\w-]*$/.test(name)) continue;
    if (!new RegExp(`animation(?:-name)?:[^;]*\\b${name}\\b`).test(css)) continue;
    out += `@keyframes ${name} { ${String(body).trim()} }
`;
  }
  return out;
}

// src/engine/variants.js
var STATE_VARIANTS = {
  hover: { selector: ":hover", group: "hoverable" },
  focus: { selector: ":focus", group: "focusable", trigger: ":focus-within" },
  "focus-visible": { selector: ":focus-visible", group: "focusable", trigger: ":focus-within" },
  "focus-within": { selector: ":focus-within" },
  active: { selector: ":active", group: "pressable" },
  checked: { selector: ":checked" },
  disabled: { selector: ":disabled" },
  expanded: { selector: '[aria-expanded="true"]', group: "expandable" },
  selected: { selector: '[aria-selected="true"]', group: "selectable" },
  required: { selector: ":required" },
  optional: { selector: ":optional" },
  valid: { selector: ":valid" },
  invalid: { selector: ":invalid" },
  placeholder: { selector: "::placeholder" },
  // Structural
  first: { selector: ":first-child" },
  last: { selector: ":last-child" },
  only: { selector: ":only-child" },
  odd: { selector: ":nth-child(odd)" },
  even: { selector: ":nth-child(even)" },
  "first-of-type": { selector: ":first-of-type" },
  "last-of-type": { selector: ":last-of-type" },
  empty: { selector: ":empty" },
  // Links & forms
  visited: { selector: ":visited" },
  target: { selector: ":target" },
  enabled: { selector: ":enabled" },
  indeterminate: { selector: ":indeterminate" },
  default: { selector: ":default" },
  autofill: { selector: ":autofill" },
  "read-only": { selector: ":read-only" },
  "placeholder-shown": { selector: ":placeholder-shown" },
  "in-range": { selector: ":in-range" },
  "out-of-range": { selector: ":out-of-range" },
  "user-valid": { selector: ":user-valid" },
  "user-invalid": { selector: ":user-invalid" },
  open: { selector: ":is([open], :popover-open)" },
  // Direction (matches the element or any ancestor with dir set)
  rtl: { selector: ':where([dir="rtl"], [dir="rtl"] *)' },
  ltr: { selector: ':where([dir="ltr"], [dir="ltr"] *)' },
  // Pseudo-elements (always placed last in the compound selector)
  before: { selector: "::before", pseudoElement: true, content: true },
  after: { selector: "::after", pseudoElement: true, content: true },
  selection: { selector: "::selection", pseudoElement: true },
  marker: { selector: "::marker", pseudoElement: true },
  file: { selector: "::file-selector-button", pseudoElement: true },
  backdrop: { selector: "::backdrop", pseudoElement: true },
  "first-line": { selector: "::first-line", pseudoElement: true },
  "first-letter": { selector: "::first-letter", pseudoElement: true }
};
var MEDIA_VARIANTS = {
  "motion-safe": "(prefers-reduced-motion: no-preference)",
  "motion-reduce": "(prefers-reduced-motion: reduce)",
  "contrast-more": "(prefers-contrast: more)",
  "contrast-less": "(prefers-contrast: less)",
  "forced-colors": "(forced-colors: active)",
  portrait: "(orientation: portrait)",
  landscape: "(orientation: landscape)",
  "pointer-fine": "(pointer: fine)",
  "pointer-coarse": "(pointer: coarse)",
  "hover-none": "(hover: none)"
};
var ARBITRARY_ATTR = /^\[([a-z][a-z0-9-]*)(?:=([A-Za-z0-9_ .-]+))?\]$/;
function patternSelector(part) {
  if (part.startsWith("aria-")) {
    const rest = part.slice(5);
    const m = ARBITRARY_ATTR.exec(rest);
    if (m) return `[aria-${m[1]}="${m[2] !== void 0 ? m[2].replace(/_/g, " ") : "true"}"]`;
    if (/^[a-z]+$/.test(rest)) return `[aria-${rest}="true"]`;
    return null;
  }
  if (part.startsWith("data-")) {
    const rest = part.slice(5);
    const m = ARBITRARY_ATTR.exec(rest);
    if (m) return m[2] !== void 0 ? `[data-${m[1]}="${m[2].replace(/_/g, " ")}"]` : `[data-${m[1]}]`;
    if (/^[a-z][a-z0-9-]*$/.test(rest)) return `[data-${rest}]`;
    return null;
  }
  if (part.startsWith("has-[") && part.endsWith("]")) {
    const inner = part.slice(5, -1).replace(/_/g, " ");
    if (/^[A-Za-z0-9 :.#\[\]=()*"'-]+$/.test(inner)) return `:has(${inner})`;
    return null;
  }
  if (part.startsWith("not-")) {
    const rest = part.slice(4);
    if (rest.startsWith("[") && rest.endsWith("]")) {
      const inner = rest.slice(1, -1).replace(/_/g, " ");
      return /^[A-Za-z0-9 :.#\[\]=()*"'-]+$/.test(inner) ? `:not(${inner})` : null;
    }
    const st = STATE_VARIANTS[rest];
    if (st && !st.pseudoElement && !st.selector.startsWith(":where")) return `:not(${st.selector})`;
    return null;
  }
  return null;
}
function stateSelector(p) {
  if (p.selector) return p.selector;
  const st = STATE_VARIANTS[p.name];
  return st ? st.selector : `:${p.name}`;
}
var STATE_ORDER = Object.keys(STATE_VARIANTS);
var customHandlers = /* @__PURE__ */ new Map();
var DEFAULT_SCREENS = {
  mob: "480px",
  tab: "768px",
  lap: "1024px",
  desk: "1280px",
  print: "print",
  "tw-sm": "640px",
  "tw-md": "768px",
  "tw-lg": "1024px",
  "tw-xl": "1280px",
  "tw-2xl": "1536px"
};
function toPx(value) {
  if (typeof value === "number") return value;
  if (typeof value !== "string") return NaN;
  const m = /^(\d*\.?\d+)(px|rem|em)?$/.exec(value.trim());
  if (!m) return NaN;
  const n = parseFloat(m[1]);
  return m[2] === "rem" || m[2] === "em" ? n * 16 : n;
}
function parseVariant(part, config) {
  if (typeof part !== "string" || !part) return null;
  if (part === "dark") return { type: "dark", name: "dark" };
  if (STATE_VARIANTS[part]) {
    const st = STATE_VARIANTS[part];
    return { type: "state", name: part, selector: st.selector, pseudoElement: !!st.pseudoElement, content: !!st.content };
  }
  if (MEDIA_VARIANTS[part]) return { type: "media", name: part, query: MEDIA_VARIANTS[part] };
  if (part.startsWith("@") && part.length > 1) {
    const [size2, container2] = part.slice(1).split("/");
    const sizes = config && config.theme && config.theme.containers || config && config.theme && config.theme.screens || DEFAULT_SCREENS;
    const isMax = size2.startsWith("max-");
    const key = isMax ? size2.slice(4) : size2;
    const value = sizes[key];
    if (!value || value === "print") return null;
    if (container2 !== void 0 && !/^[a-zA-Z][\w-]*$/.test(container2)) return null;
    const px = toPx(value);
    const query = isMax ? Number.isNaN(px) ? `not (min-width: ${value})` : `(max-width: ${+(px - 0.02).toFixed(2)}px)` : `(min-width: ${value})`;
    return { type: "container", name: part, query, container: container2 || null };
  }
  if (customHandlers.has(part)) return { type: "custom", name: part };
  if (config) {
    const custom = extensionsFor(config).variants[part];
    if (custom !== void 0) return parseCustomVariant(part, custom);
  }
  const pat = patternSelector(part);
  if (pat) return { type: "state", name: part, selector: pat };
  const names = config && config.theme && config.theme.screens ? Object.keys(config.theme.screens) : BREAKPOINTS.concat(["print"]);
  if (names.includes(part)) return { type: "breakpoint", name: part };
  if (part.startsWith("max-") && names.includes(part.slice(4))) {
    return { type: "max", name: part, to: part.slice(4) };
  }
  for (const from of names) {
    if (part.startsWith(`${from}-`)) {
      const to = part.slice(from.length + 1);
      if (names.includes(to) && from !== to) return { type: "range", name: part, from, to };
    }
  }
  return null;
}
function splitVariants(parts, config) {
  const variants = [];
  let i = 0;
  while (i < parts.length - 1 && parseVariant(parts[i], config)) {
    variants.push(parts[i]);
    i++;
  }
  return { variants, rest: parts.slice(i) };
}
function deriveLegacyFields(variants, config) {
  let breakpoint = null;
  let state = null;
  for (const v of variants) {
    const p = parseVariant(v, config);
    if (!p) continue;
    if (p.type === "breakpoint" || p.type === "max" || p.type === "range") breakpoint = breakpoint || v;
    else if (p.type === "dark") state = state || "dark";
    else if (p.type === "state" || p.type === "custom") {
      if (!state || state === "dark") state = v;
    }
  }
  return { breakpoint, state };
}
function tokenVariants(token) {
  if (Array.isArray(token.variants)) return token.variants;
  const v = [];
  if (token.breakpoint) v.push(token.breakpoint);
  if (token.state === "dark") v.push("dark");
  else if (token.state) v.push(token.state);
  return v;
}

// src/core/tokenizer-core.js
function isValidToken(token, config) {
  if (!token.property || typeof token.property !== "string") {
    return false;
  }
  if (token.property.length > LIMITS.MAX_PROPERTY_LENGTH) {
    return false;
  }
  if (token.value === null || token.value === void 0) {
    return false;
  }
  if (typeof token.value !== "string") {
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
function tokenize(raw, attrType, config) {
  if (typeof raw !== "string" || raw.length === 0 || raw.length > LIMITS.MAX_TOKEN_RAW_LENGTH) {
    return errorToken(raw, attrType, "Invalid token format", "INVALID_TOKEN");
  }
  const rawCheck = checkRawToken(raw);
  if (!rawCheck.ok) {
    return errorToken(raw, attrType, `Invalid token: ${rawCheck.reason}`, "INVALID_VALUE");
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
  let body = raw;
  if (body.startsWith("!")) {
    token.important = true;
    body = body.slice(1);
  } else if (body.endsWith("!")) {
    token.important = true;
    body = body.slice(0, -1);
  }
  if (body.length === 0) return errorToken(raw, attrType, "Invalid token format", "INVALID_TOKEN");
  if (attrType === "layout" && LAYOUT_KEYWORDS.includes(body)) {
    token.property = body;
    token.value = body;
    return token;
  }
  const parts = splitOutsideBrackets(body);
  if (parts.length === 1 && !body.startsWith("[")) {
    token.property = body;
    token.value = body;
    return token;
  }
  const { variants, rest } = splitVariants(parts, config);
  token.variants = variants;
  const legacy = deriveLegacyFields(variants, config);
  token.breakpoint = legacy.breakpoint;
  token.state = legacy.state;
  if (rest.length === 0) {
    token.error = "Invalid token structure";
    token.errorCode = "INVALID_TOKEN";
    return token;
  }
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
      token.errorCode = "INVALID_VALUE";
    }
    return token;
  }
  token.property = rest[0];
  if (rest.length > 1) {
    const value = rest.slice(1).join(":");
    const arbitraryMatch = value.match(/^\[(.+)\]$/);
    if (arbitraryMatch) {
      token.isArbitrary = true;
      const normalized = normalizeArbitraryValue(arbitraryMatch[1]);
      const check = validateValue(normalized);
      if (!check.ok) {
        token.value = normalized;
        token.error = `Invalid value: ${check.reason}`;
        token.errorCode = "INVALID_VALUE";
        return token;
      }
      token.value = normalized;
    } else {
      const groups = [];
      const outer = value.replace(/\[([^\[\]]*)\]/g, (_, inner) => {
        groups.push(inner);
        return "x";
      });
      let check = /[[\]]/.test(outer) ? { ok: false, reason: "unbalanced brackets" } : validateValue(outer);
      for (const g of groups) {
        if (!check.ok) break;
        check = validateValue(normalizeArbitraryValue(g));
      }
      if (!check.ok) {
        token.value = value;
        token.error = `Invalid value: ${check.reason}`;
        token.errorCode = "INVALID_VALUE";
        return token;
      }
      token.value = value;
    }
  } else {
    token.value = token.property;
  }
  if (!isValidToken(token, config)) {
    token.error = "Invalid token structure";
    token.errorCode = "INVALID_TOKEN";
  }
  return token;
}
function splitOutsideBrackets(raw) {
  const parts = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i];
    if (ch === "[" || ch === "(") depth++;
    else if (ch === "]" || ch === ")") depth = Math.max(0, depth - 1);
    else if (ch === ":" && depth === 0) {
      parts.push(raw.slice(start, i));
      start = i + 1;
    }
  }
  parts.push(raw.slice(start));
  return parts;
}
function tokenizeAll(parsed, config) {
  const tokens = [];
  for (const [attrType, values] of Object.entries(parsed)) {
    for (const raw of values) {
      tokens.push(tokenize(raw, attrType, config));
    }
  }
  return tokens;
}

// src/compiler/extractor/shape.js
var TOKEN_SHAPE = /^!?(?:@?[a-zA-Z0-9]|\[\])[\w./%#()\[\],+*:@-]*!?$/;
var BANNED_OUTSIDE_BRACKETS = /[{}$?<>;=`'"\\|&^~\s]/;
var BAD_BANG = /(?!^)!(?!$)/;
var BAD_AT = /(?<!^|:)@/;
var BRACKET_SEGMENT = /\[[^\s\[\]]*\]/g;
var SHAPE_CACHE_LIMIT = 2e4;
var shapeCache = /* @__PURE__ */ new Map();
function checkTokenShape(token) {
  if (typeof token !== "string" || token.length === 0) return "empty";
  if (token.length > LIMITS.MAX_VALUE_LENGTH) return "too-long";
  const cached = shapeCache.get(token);
  if (cached !== void 0) return cached;
  const reason = computeShape(token);
  if (shapeCache.size >= SHAPE_CACHE_LIMIT) shapeCache.clear();
  shapeCache.set(token, reason);
  return reason;
}
function computeShape(token) {
  const first = token.charCodeAt(0);
  if (first === 34 || first === 39 || first === 96) return "quoted";
  const collapsed = token.replace(BRACKET_SEGMENT, "[]");
  const outside = (collapsed[0] === "!" ? collapsed.slice(1) : collapsed).replace(/\[\]/g, "");
  if (outside.includes("[") || outside.includes("]")) return "shape";
  if (BANNED_OUTSIDE_BRACKETS.test(outside)) return "shape";
  if (BAD_BANG.test(outside) || BAD_AT.test(outside)) return "shape";
  if (!TOKEN_SHAPE.test(collapsed)) return "shape";
  return null;
}

// src/compiler/extractor/expressions.js
var WS = /\s/;
var isWsCode = (c) => c === 32 || c === 10 || c === 9 || c === 13 || c === 12 || c === 11;
var IDENT_START = /[A-Za-z_$]/;
var IDENT_CHAR = /[\w$]/;
var CONCAT_OPERATORS = /* @__PURE__ */ new Set(["+", ".", "~"]);
function skipQuoted(src, i, end = src.length) {
  const quote = src.charCodeAt(i);
  let j = i + 1;
  while (j < end) {
    const c = src.charCodeAt(j);
    if (c === 92) {
      j += 2;
      continue;
    }
    if (c === quote) return j + 1;
    j++;
  }
  return -1;
}
function findBalanced(src, start, open = "{", close = "}", end = src.length) {
  const openCode = open.charCodeAt(0);
  const closeCode = close.charCodeAt(0);
  const stack = [0];
  let i = start + 1;
  while (i < end && stack.length > 0) {
    const c = src.charCodeAt(i);
    const top = stack[stack.length - 1];
    if (top === 1) {
      if (c === 92) {
        i += 2;
        continue;
      }
      if (c === 96) {
        stack.pop();
        i++;
        continue;
      }
      if (c === 36 && src.charCodeAt(i + 1) === 123) {
        stack.push(0);
        i += 2;
        continue;
      }
      i++;
      continue;
    }
    if (c === openCode) {
      stack.push(0);
      i++;
      continue;
    }
    if (c === closeCode) {
      stack.pop();
      i++;
      continue;
    }
    if (c === 34 || c === 39) {
      i = skipQuoted(src, i, end);
      continue;
    }
    if (c === 96) {
      stack.push(1);
      i++;
      continue;
    }
    if (c === 47 && src.charCodeAt(i + 1) === 42) {
      const k = src.indexOf("*/", i + 2);
      i = k === -1 ? end : k + 2;
      continue;
    }
    if (c === 36 && src.charCodeAt(i + 1) === 123) {
      stack.push(0);
      i += 2;
      continue;
    }
    i++;
  }
  return stack.length === 0 ? i : -1;
}
function peekSignificant(src, i, end) {
  while (i < end && WS.test(src[i])) i++;
  return i < end ? src[i] : "";
}
function unescapeString(raw) {
  return raw.includes("\\") ? raw.replace(/\\(.)/g, "$1") : raw;
}
function emitStatic(text, leftPartial, rightPartial, sink) {
  const n = text.length;
  if (n === 0) return;
  const touchesRight = rightPartial && !WS.test(text[n - 1]);
  let i = 0;
  let first = true;
  while (i < n) {
    while (i < n && isWsCode(text.charCodeAt(i))) i++;
    if (i >= n) break;
    const start = i;
    while (i < n && !isWsCode(text.charCodeAt(i))) i++;
    const token = start === 0 && i === n ? text : text.slice(start, i);
    const partial = first && leftPartial && start === 0 || i === n && touchesRight;
    if (partial) sink.skip(token, "partial");
    else sink.token(token);
    first = false;
  }
}
function processSegments(segments, sink, leftEdgePartial = false, rightEdgePartial = false) {
  let from = 0;
  let to = segments.length;
  while (from < to && segments[from].type === "static" && segments[from].text === "") from++;
  while (to > from && segments[to - 1].type === "static" && segments[to - 1].text === "") to--;
  for (let idx = from; idx < to; idx++) {
    const seg = segments[idx];
    const prev = idx > from ? segments[idx - 1] : null;
    const next = idx < to - 1 ? segments[idx + 1] : null;
    if (seg.type === "static") {
      const leftPartial = prev ? prev.type === "expr" : leftEdgePartial;
      const rightPartial = next ? next.type === "expr" : rightEdgePartial;
      emitStatic(seg.text, leftPartial, rightPartial, sink);
      continue;
    }
    const touchesLeft = prev ? prev.type === "expr" || !WS.test(prev.text[prev.text.length - 1] || "") : leftEdgePartial;
    const touchesRight = next ? next.type === "expr" || !WS.test(next.text[0] || "") : rightEdgePartial;
    if (!seg.extract) continue;
    if (touchesLeft || touchesRight) {
      extractFromExpression(seg.text, partialSink(sink));
    } else {
      extractFromExpression(seg.text, sink);
    }
  }
}
function partialSink(sink) {
  return {
    helpers: sink.helpers,
    token: (t) => sink.skip(t, "partial"),
    skip: (t, reason) => sink.skip(t, reason)
  };
}
var DEFAULT_CLASS_HELPERS = /* @__PURE__ */ new Set([
  "clsx",
  "classnames",
  "classNames",
  "cn",
  "cx",
  "cva",
  "tv",
  "tw",
  "twMerge",
  "twJoin",
  "classList",
  "join",
  "concat",
  "map",
  "filter",
  "flat",
  "flatMap",
  "trim",
  "split",
  "push",
  "toString",
  "String",
  "Array",
  "implode",
  "array_merge",
  "array_filter"
]);
function operandAfterConcatStartsWithWs(src, i, end) {
  let j = i + 1;
  while (j < end && WS.test(src[j])) j++;
  const c = src[j];
  if (c === '"' || c === "'" || c === "`") return j + 1 < end && WS.test(src[j + 1]);
  return false;
}
function extractFromExpression(src, sink, start = 0, end = src.length) {
  const helpers = sink.helpers || DEFAULT_CLASS_HELPERS;
  let i = start;
  let lastSig = "";
  let lastIdent = "";
  let lastEndsWithWs = false;
  const callStack = [];
  let suppress = 0;
  const emit = (text, leftPartial, rightPartial) => {
    if (suppress > 0) emitStatic(text, leftPartial, rightPartial, suppressedSink(sink));
    else emitStatic(text, leftPartial, rightPartial, sink);
  };
  while (i < end) {
    const ch = src[i];
    if (WS.test(ch)) {
      i++;
      continue;
    }
    if (ch === "/" && src[i + 1] === "/") {
      const k = src.indexOf("\n", i + 2);
      i = k === -1 || k > end ? end : k + 1;
      continue;
    }
    if (ch === "/" && src[i + 1] === "*") {
      const k = src.indexOf("*/", i + 2);
      i = k === -1 || k > end ? end : k + 2;
      continue;
    }
    if (ch === '"' || ch === "'") {
      const q = skipQuoted(src, i, end);
      const closed = q !== -1;
      const j = closed ? q : end;
      const raw = src.slice(i + 1, closed ? j - 1 : j);
      const text = unescapeString(raw);
      const leftPartial = CONCAT_OPERATORS.has(lastSig) && !lastEndsWithWs;
      const nextIdx = skipWs(src, j, end);
      const nextSig = nextIdx < end ? src[nextIdx] : "";
      const rightPartial = CONCAT_OPERATORS.has(nextSig) && !operandAfterConcatStartsWithWs(src, nextIdx, end);
      const isComparison = lastSig === "=" || nextSig === "=" && src[nextIdx + 1] !== ">";
      if (isComparison) emitStatic(text, false, false, reasonSink(sink, "comparison"));
      else emit(text, leftPartial, rightPartial);
      lastSig = '"';
      lastEndsWithWs = text.length > 0 && WS.test(text[text.length - 1]);
      i = j;
      continue;
    }
    if (ch === "`") {
      const leftPartial = CONCAT_OPERATORS.has(lastSig) && !lastEndsWithWs;
      const { segments, next } = readTemplateLiteral(src, i, end);
      const nextIdx = skipWs(src, next, end);
      const nextSig = nextIdx < end ? src[nextIdx] : "";
      const rightPartial = CONCAT_OPERATORS.has(nextSig) && !operandAfterConcatStartsWithWs(src, nextIdx, end);
      processSegments(segments, suppress > 0 ? suppressedSink(sink) : sink, leftPartial, rightPartial);
      lastSig = '"';
      const lastSeg = segments[segments.length - 1];
      lastEndsWithWs = !!lastSeg && lastSeg.type === "static" && lastSeg.text.length > 0 && WS.test(lastSeg.text[lastSeg.text.length - 1]);
      i = next;
      continue;
    }
    if (IDENT_START.test(ch)) {
      let j = i + 1;
      while (j < end && IDENT_CHAR.test(src[j])) j++;
      const word = src.slice(i, j);
      if ((lastSig === "{" || lastSig === ",") && peekSignificant(src, j, end) === ":") {
        if (suppress > 0) sink.skip(word, "call-argument");
        else sink.token(word);
      }
      lastSig = "a";
      lastIdent = word;
      lastEndsWithWs = false;
      i = j;
      continue;
    }
    if (ch >= "0" && ch <= "9") {
      let j = i + 1;
      while (j < end && /[\w.]/.test(src[j])) j++;
      lastSig = "0";
      lastEndsWithWs = false;
      i = j;
      continue;
    }
    if (ch === "(") {
      const isCall = lastSig === "a";
      const suppressing = isCall && !helpers.has(lastIdent);
      callStack.push(suppressing);
      if (suppressing) suppress++;
    } else if (ch === ")") {
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
function reasonSink(sink, reason) {
  return {
    helpers: sink.helpers,
    token: (t) => sink.skip(t, reason),
    skip: (t, r) => sink.skip(t, r)
  };
}
function suppressedSink(sink) {
  return reasonSink(sink, "call-argument");
}
function readTemplateLiteral(src, i, end) {
  const segments = [];
  let j = i + 1;
  let staticStart = j;
  let closed = false;
  while (j < end) {
    const c = src.charCodeAt(j);
    if (c === 92) {
      j += 2;
      continue;
    }
    if (c === 96) {
      segments.push({ type: "static", text: unescapeString(src.slice(staticStart, j)) });
      j++;
      closed = true;
      break;
    }
    if (c === 36 && src.charCodeAt(j + 1) === 123) {
      segments.push({ type: "static", text: unescapeString(src.slice(staticStart, j)) });
      const k = findBalanced(src, j + 1, "{", "}", end);
      if (k === -1) {
        segments.push({ type: "expr", text: src.slice(j + 2, end), extract: false });
        j = end;
        staticStart = end;
        break;
      }
      segments.push({ type: "expr", text: src.slice(j + 2, k - 1), extract: true });
      j = k;
      staticStart = j;
      continue;
    }
    j++;
  }
  if (!closed) {
    if (staticStart < Math.min(j, end)) {
      segments.push({ type: "static", text: unescapeString(src.slice(staticStart, Math.min(j, end))) });
    }
    j = end;
  }
  return { segments, next: j };
}
var TEMPLATE_OPENERS = [
  { open: "{{--", close: "--}}", extract: false },
  // Blade comment
  { open: "{{", close: "}}", extract: true },
  // Blade / Angular / Handlebars / Twig
  { open: "{!!", close: "!!}", extract: true },
  // Blade raw echo
  { open: "{%", close: "%}", extract: false },
  // Twig / Jinja tag
  { open: "{#", close: "#}", extract: false },
  // Twig comment
  { open: "<?", close: "?>", extract: true }
  // PHP
];
var FAST_PATH = /[{$<@]/;
var CONTAINER_VARIANT = /^@[A-Za-z0-9-]+(?:\/[A-Za-z][\w-]*)?:/;
function stripPhpOpener(inner) {
  if (inner.startsWith("php")) return inner.slice(3);
  if (inner.startsWith("=")) return inner.slice(1);
  return inner;
}
function extractFromTemplatedString(text, sink) {
  if (!FAST_PATH.test(text)) {
    emitStatic(text, false, false, sink);
    return;
  }
  const segments = [];
  const n = text.length;
  let i = 0;
  let staticStart = 0;
  const pushStatic = (until) => {
    segments.push({ type: "static", text: text.slice(staticStart, until) });
  };
  outer:
    while (i < n) {
      const ch = text[i];
      if (ch === "{" || ch === "<") {
        for (const opener of TEMPLATE_OPENERS) {
          if (text.startsWith(opener.open, i)) {
            if (opener.open === "<?") {
              const after = text[i + 2];
              if (!(after === "=" || after === " " || after === "\n" || after === "	" || text.startsWith("php", i + 2))) {
                i++;
                continue outer;
              }
            }
            pushStatic(i);
            const k = text.indexOf(opener.close, i + opener.open.length);
            if (k === -1) {
              segments.push({ type: "expr", text: text.slice(i + opener.open.length), extract: false });
              staticStart = n;
              i = n;
              break outer;
            }
            let inner = text.slice(i + opener.open.length, k);
            if (opener.open === "<?") inner = stripPhpOpener(inner);
            segments.push({ type: "expr", text: inner, extract: opener.extract });
            i = k + opener.close.length;
            staticStart = i;
            continue outer;
          }
        }
        if (ch === "{") {
          pushStatic(i);
          const k = findBalanced(text, i, "{", "}");
          if (k === -1) {
            segments.push({ type: "expr", text: text.slice(i + 1), extract: false });
            staticStart = n;
            i = n;
            break;
          }
          segments.push({ type: "expr", text: text.slice(i + 1, k - 1), extract: true });
          i = k;
          staticStart = i;
          continue;
        }
        i++;
        continue;
      }
      if (ch === "$" && text[i + 1] === "{") {
        pushStatic(i);
        const k = findBalanced(text, i + 1, "{", "}");
        if (k === -1) {
          segments.push({ type: "expr", text: text.slice(i + 2), extract: false });
          staticStart = n;
          i = n;
          break;
        }
        segments.push({ type: "expr", text: text.slice(i + 2, k - 1), extract: true });
        i = k;
        staticStart = i;
        continue;
      }
      if (ch === "@" && i + 1 < n && /[A-Za-z]/.test(text[i + 1]) && !CONTAINER_VARIANT.test(text.slice(i, i + 80))) {
        pushStatic(i);
        let j = i + 1;
        while (j < n && /[A-Za-z]/.test(text[j])) j++;
        const name = text.slice(i + 1, j);
        let inner = "";
        if (text[j] === "(") {
          const k = findBalanced(text, j, "(", ")");
          if (k === -1) {
            segments.push({ type: "expr", text: text.slice(j + 1), extract: false });
            staticStart = n;
            i = n;
            break;
          }
          inner = text.slice(j + 1, k - 1);
          j = k;
        }
        segments.push({ type: "expr", text: inner, extract: name === "class" });
        i = j;
        staticStart = i;
        continue;
      }
      i++;
    }
  if (staticStart < n) pushStatic(n);
  processSegments(segments, sink, false, false);
}

// src/compiler/extractor/scanner.js
var ATTRIBUTE_TYPES = ["layout", "space", "visual", "interact", "listens"];
var ATTRIBUTE_TYPE_SET = new Set(ATTRIBUTE_TYPES);
var DYNAMIC_PREFIXES = [":", "v-bind:", "x-bind:"];
var WS_CODES = /* @__PURE__ */ new Set([32, 9, 10, 13, 12]);
var isWs = (code) => WS_CODES.has(code);
var isNameStart = (code) => code >= 65 && code <= 90 || code >= 97 && code <= 122;
var isTagNameChar = (code) => isNameStart(code) || code >= 48 && code <= 57 || code === 45 || code === 46 || code === 58 || code === 95;
function resolveAttributeName(name, prefix = "") {
  let lower = name.toLowerCase();
  if (prefix) {
    const idx = lower.indexOf(prefix);
    if (idx === -1) return null;
    lower = lower.slice(0, idx) + lower.slice(idx + prefix.length);
  }
  if (ATTRIBUTE_TYPE_SET.has(lower)) return { attrType: lower, binding: "static" };
  if (lower.length > 2 && lower[0] === "[" && lower[lower.length - 1] === "]") {
    let inner = lower.slice(1, -1);
    if (inner.startsWith("attr.")) inner = inner.slice(5);
    return ATTRIBUTE_TYPE_SET.has(inner) ? { attrType: inner, binding: "dynamic" } : null;
  }
  for (const prefix2 of DYNAMIC_PREFIXES) {
    if (lower.startsWith(prefix2)) {
      let rest = lower.slice(prefix2.length);
      const dot = rest.indexOf(".");
      if (dot !== -1) rest = rest.slice(0, dot);
      return ATTRIBUTE_TYPE_SET.has(rest) ? { attrType: rest, binding: "dynamic" } : null;
    }
  }
  return null;
}
function scanTagAttributes(src, i, onAttr, end = src.length, prefix = "") {
  while (i < end) {
    const c = src.charCodeAt(i);
    if (isWs(c)) {
      i++;
      continue;
    }
    if (c === 62) return i + 1;
    if (c === 47) {
      if (src.charCodeAt(i + 1) === 62) return i + 2;
      i++;
      continue;
    }
    if (c === 60) {
      if (src.charCodeAt(i + 1) === 63) {
        const k2 = src.indexOf("?>", i + 2);
        i = k2 === -1 || k2 + 2 > end ? end : k2 + 2;
        continue;
      }
      return i;
    }
    if (c === 123) {
      const k2 = findBalanced(src, i, "{", "}", end);
      if (k2 === -1) return end;
      i = k2;
      continue;
    }
    if (c === 34 || c === 39) {
      i++;
      continue;
    }
    if (c === 61) {
      i++;
      continue;
    }
    const nameStart = i;
    while (i < end) {
      const d = src.charCodeAt(i);
      if (isWs(d) || d === 61 || d === 62 || d === 47 || d === 34 || d === 39 || d === 123 || d === 60) break;
      i++;
    }
    if (i === nameStart) {
      i++;
      continue;
    }
    const name = src.slice(nameStart, i);
    let k = i;
    while (k < end && isWs(src.charCodeAt(k))) k++;
    if (src.charCodeAt(k) !== 61) {
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
      if (close === -1 || close >= end) {
        value = src.slice(k + 1, end);
        i = end;
      } else {
        value = src.slice(k + 1, close);
        i = close + 1;
      }
      valueKind = "quoted";
    } else if (v === 123) {
      const close = findBalanced(src, k, "{", "}", end);
      if (close === -1) {
        value = src.slice(k + 1, end);
        i = end;
        valueKind = "unterminated";
      } else {
        value = src.slice(k + 1, close - 1);
        i = close;
        valueKind = "expression";
      }
    } else if (v === 36 && src.charCodeAt(k + 1) === 123) {
      const close = findBalanced(src, k + 1, "{", "}", end);
      if (close === -1) {
        value = src.slice(k + 2, end);
        i = end;
        valueKind = "unterminated";
      } else {
        value = src.slice(k + 2, close - 1);
        i = close;
        valueKind = "expression";
      }
    } else if (v === 60 && src.charCodeAt(k + 1) === 63) {
      let close = src.indexOf("?>", k + 2);
      if (close !== -1 && close + 2 > end) close = -1;
      let inner = close === -1 ? src.slice(k + 2, end) : src.slice(k + 2, close);
      if (inner.startsWith("php")) inner = inner.slice(3);
      else if (inner.startsWith("=")) inner = inner.slice(1);
      value = inner;
      i = close === -1 ? end : close + 2;
      valueKind = "expression";
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
      if (value.endsWith("/") && src.charCodeAt(e) === 62) value = value.slice(0, -1);
      i = e;
      valueKind = "unquoted";
    }
    const resolved = resolveAttributeName(name, prefix);
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
function scanMarkup(src, onAttr, prefix = "") {
  const n = src.length;
  let i = 0;
  let noCommentClose = false;
  let noBlockClose = false;
  let noBladeClose = false;
  const interesting = /<|\/\*|\{\{--/g;
  while (i < n) {
    interesting.lastIndex = i;
    const m = interesting.exec(src);
    if (m === null) break;
    const lt = m.index;
    if (m[0] === "/*") {
      const close = noBlockClose ? -1 : src.indexOf("*/", lt + 2);
      if (close === -1) {
        noBlockClose = true;
        i = lt + 2;
      } else i = close + 2;
      continue;
    }
    if (m[0] === "{{--") {
      const close = noBladeClose ? -1 : src.indexOf("--}}", lt + 4);
      if (close === -1) {
        noBladeClose = true;
        i = lt + 4;
      } else i = close + 4;
      continue;
    }
    const next = src.charCodeAt(lt + 1);
    if (next === 33) {
      if (src.startsWith("<!--", lt)) {
        const close = noCommentClose ? -1 : src.indexOf("-->", lt + 4);
        if (close === -1) {
          noCommentClose = true;
          i = lt + 4;
        } else {
          i = close + 3;
        }
      } else {
        i = lt + 2;
      }
      continue;
    }
    if (next === 47) {
      i = lt + 2;
      continue;
    }
    if (!isNameStart(next)) {
      i = lt + 1;
      continue;
    }
    let j = lt + 1;
    while (j < n && isTagNameChar(src.charCodeAt(j))) j++;
    const after = src.charCodeAt(j);
    if (!(j >= n || isWs(after) || after === 62 || after === 47)) {
      i = j;
      continue;
    }
    i = scanTagAttributes(src, j, onAttr, src.length, prefix);
  }
}
function scanHints(src, onAttr, prefix = "") {
  const n = src.length;
  let i = 0;
  while ((i = src.indexOf("senang:", i)) !== -1) {
    let b = i - 1;
    while (b >= 0 && isWs(src.charCodeAt(b))) b--;
    let closer = null;
    if (b >= 3 && src.startsWith("<!--", b - 3)) closer = "-->";
    else if (b >= 3 && src.startsWith("{{--", b - 3)) closer = "--}}";
    else if (b >= 1 && src.startsWith("/*", b - 1)) closer = "*/";
    else if (b >= 1 && src.startsWith("//", b - 1)) closer = "\n";
    else if (b >= 0 && src.charCodeAt(b) === 35) closer = "\n";
    const bodyStart = i + 7;
    if (!closer) {
      i = bodyStart;
      continue;
    }
    let bodyEnd = src.indexOf(closer, bodyStart);
    if (bodyEnd === -1) bodyEnd = n;
    scanTagAttributes(src, bodyStart, (attr) => onAttr({ ...attr, source: "hint" }), bodyEnd, prefix);
    i = bodyEnd;
  }
}

// src/compiler/extractor/index.js
var DEFAULT_MAX_SKIPPED = 500;
var DEFAULT_MAX_LOCATIONS_PER_TOKEN = 20;
function decodeEntities(value) {
  if (!value.includes("&")) return value;
  return value.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}
function createLineIndex(content) {
  let starts = null;
  return function locate(offset) {
    if (starts === null) {
      starts = [0];
      let k = -1;
      while ((k = content.indexOf("\n", k + 1)) !== -1) starts.push(k + 1);
    }
    let lo = 0;
    let hi = starts.length - 1;
    while (lo < hi) {
      const mid = lo + hi + 1 >> 1;
      if (starts[mid] <= offset) lo = mid;
      else hi = mid - 1;
    }
    return { line: lo + 1, column: offset - starts[lo] + 1 };
  };
}
function createEmptyResult() {
  const result = {};
  for (const type of ATTRIBUTE_TYPES) result[type] = /* @__PURE__ */ new Set();
  return result;
}
function attachExtras(result, extras) {
  for (const [key, value] of Object.entries(extras)) {
    Object.defineProperty(result, key, { value, enumerable: false, writable: true, configurable: true });
  }
  return result;
}
function extractSource(content, options = {}) {
  if (typeof content !== "string") content = content === null || content === void 0 ? "" : String(content);
  const file = options.file ?? null;
  const maxSkipped = options.maxSkipped ?? DEFAULT_MAX_SKIPPED;
  const maxLocations = options.maxLocationsPerToken ?? DEFAULT_MAX_LOCATIONS_PER_TOKEN;
  const helpers = Array.isArray(options.classHelpers) && options.classHelpers.length > 0 ? /* @__PURE__ */ new Set([...DEFAULT_CLASS_HELPERS, ...options.classHelpers]) : DEFAULT_CLASS_HELPERS;
  const result = createEmptyResult();
  const locationsByType = {};
  for (const type of ATTRIBUTE_TYPES) locationsByType[type] = /* @__PURE__ */ new Map();
  const skipped = [];
  let skippedTotal = 0;
  const locate = createLineIndex(content);
  const handleAttribute = (attr) => {
    const { attrType, value, offset } = attr;
    const source = attr.source ?? "attribute";
    const set = result[attrType];
    const locs = locationsByType[attrType];
    const recordSkip = (raw, reason) => {
      skippedTotal++;
      if (skipped.length < maxSkipped) {
        const pos = locate(offset);
        skipped.push({ attrType, raw, reason, file, line: pos.line, column: pos.column, source });
      }
    };
    const sink = {
      helpers,
      token(raw) {
        const reason = checkTokenShape(raw);
        if (reason) {
          recordSkip(raw, reason);
          return;
        }
        let list = locs.get(raw);
        if (!list) {
          set.add(raw);
          list = [];
          locs.set(raw, list);
        }
        if (list.length < maxLocations) {
          const pos = locate(offset);
          list.push({ file, line: pos.line, column: pos.column, source });
        }
      },
      skip: recordSkip
    };
    if (attr.valueKind === "unterminated") {
      recordSkip(value.slice(0, 80) + (value.length > 80 ? "\u2026" : ""), "unterminated");
      return;
    }
    if (value.length > LIMITS.MAX_ATTRIBUTE_VALUE_LENGTH) {
      recordSkip(value.slice(0, 80) + "\u2026", "value-too-long");
      return;
    }
    if (attr.valueKind === "expression") {
      extractFromExpression(value, sink);
    } else if (attr.binding === "dynamic") {
      extractFromExpression(decodeEntities(value), sink);
    } else {
      extractFromTemplatedString(value, sink);
    }
  };
  const prefix = attrPrefix(options.prefix || "");
  scanMarkup(content, handleAttribute, prefix);
  scanHints(content, handleAttribute, prefix);
  const locations = /* @__PURE__ */ new Map();
  for (const type of ATTRIBUTE_TYPES) {
    for (const [raw, list] of locationsByType[type]) locations.set(`${type}:${raw}`, list);
  }
  return attachExtras(result, { locations, skipped, skippedTotal, file });
}
function mergeResults(results, options = {}) {
  const maxSkipped = options.maxSkipped ?? DEFAULT_MAX_SKIPPED;
  const maxLocations = options.maxLocationsPerToken ?? DEFAULT_MAX_LOCATIONS_PER_TOKEN;
  const combined = createEmptyResult();
  const locations = /* @__PURE__ */ new Map();
  const skipped = [];
  let skippedTotal = 0;
  for (const parsed of results) {
    for (const type of ATTRIBUTE_TYPES) {
      if (parsed[type]) parsed[type].forEach((token) => combined[type].add(token));
    }
    if (parsed.locations instanceof Map) {
      for (const [key, list] of parsed.locations) {
        let target = locations.get(key);
        if (!target) {
          target = [];
          locations.set(key, target);
        }
        for (const loc of list) {
          if (target.length >= maxLocations) break;
          target.push(loc);
        }
      }
    }
    if (Array.isArray(parsed.skipped)) {
      for (const entry of parsed.skipped) {
        if (skipped.length >= maxSkipped) break;
        skipped.push(entry);
      }
    }
    skippedTotal += parsed.skippedTotal ?? (parsed.skipped ? parsed.skipped.length : 0);
  }
  return attachExtras(combined, { locations, skipped, skippedTotal, file: null });
}

// src/compiler/parser.js
function parseSource(content, options = {}) {
  return extractSource(content, options);
}
function parseMultipleSources(files, options = {}) {
  const results = [];
  for (const file of files || []) {
    if (!file) continue;
    results.push(extractSource(file.content, { ...options, file: file.path ?? null }));
  }
  return mergeResults(results);
}

// src/engine/diagnostics.js
var CODES = Object.freeze({
  UNKNOWN_PROPERTY: "UNKNOWN_PROPERTY",
  UNKNOWN_VALUE: "UNKNOWN_VALUE",
  UNKNOWN_VARIANT: "UNKNOWN_VARIANT",
  INVALID_VALUE: "INVALID_VALUE",
  UNSUPPORTED_COMBINATION: "UNSUPPORTED_COMBINATION",
  INVALID_TOKEN: "INVALID_TOKEN"
});
function levenshtein(a, b) {
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
function suggest(input, candidates, maxDistance) {
  if (typeof input !== "string" || !input) return null;
  const limit = maxDistance ?? Math.min(3, Math.max(1, Math.floor(input.length / 3)));
  let best = null;
  let bestDist = Infinity;
  const lower = input.toLowerCase();
  for (const c of candidates) {
    if (typeof c !== "string" || !c) continue;
    if (Math.abs(c.length - lower.length) > limit) continue;
    const d = levenshtein(lower, c.toLowerCase());
    if (d < bestDist || d === bestDist && best !== null && c < best) {
      bestDist = d;
      best = c;
    }
  }
  return bestDist <= limit ? best : null;
}
function diagnostic(token, code, message, suggestion = null) {
  const d = {
    raw: token?.raw,
    attrType: token?.attrType,
    code,
    message,
    // legacy fields kept for existing consumers
    type: "rule_generation",
    token: token?.raw
  };
  if (suggestion) d.suggestion = suggestion;
  return d;
}

// src/definitions/layout-flex.js
var display = {
  name: "display",
  property: "layout",
  syntax: 'layout="[display-value]"',
  description: "Control the display type of elements",
  descriptionMs: "Kawal jenis paparan elemen",
  category: "layout",
  values: [
    { value: "flex", css: "display: flex;", description: "Flexbox container", descriptionMs: "Bekas flexbox" },
    { value: "inline-flex", css: "display: inline-flex;", description: "Inline flexbox container", descriptionMs: "Bekas flexbox sebaris" },
    { value: "grid", css: "display: grid;", description: "Grid container", descriptionMs: "Bekas grid" },
    { value: "inline-grid", css: "display: inline-grid;", description: "Inline grid container", descriptionMs: "Bekas grid sebaris" },
    { value: "block", css: "display: block;", description: "Block element", descriptionMs: "Elemen blok" },
    { value: "inline", css: "display: inline;", description: "Inline element", descriptionMs: "Elemen sebaris" },
    { value: "inline-block", css: "display: inline-block;", description: "Inline block element", descriptionMs: "Elemen blok sebaris" },
    { value: "table", css: "display: table;", description: "Table element", descriptionMs: "Elemen jadual" },
    { value: "table-row", css: "display: table-row;", description: "Table row element", descriptionMs: "Elemen baris jadual" },
    { value: "table-cell", css: "display: table-cell;", description: "Table cell element", descriptionMs: "Elemen sel jadual" },
    { value: "list-item", css: "display: list-item;", description: "List item element", descriptionMs: "Elemen item senarai" },
    { value: "contents", css: "display: contents;", description: "Display contents only (no box)", descriptionMs: "Paparkan kandungan sahaja (tiada kotak)" },
    { value: "hidden", css: "display: none;", description: "Hidden element", descriptionMs: "Elemen tersembunyi" }
  ],
  examples: [
    { code: '<div layout="flex">Flexbox container</div>', description: "Create a flex container" },
    { code: '<div layout="grid">Grid container</div>', description: "Create a grid container" },
    { code: '<div layout="table">Table container</div>', description: "Create a table element" },
    { code: '<div layout="hidden">Hidden element</div>', description: "Hide an element" }
  ],
  preview: [
    {
      title: "Flexbox Container",
      titleMs: "Bekas Flexbox",
      description: "Items arranged horizontally",
      descriptionMs: "Item disusun secara mendatar",
      html: `<div layout="flex row" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
</div>`,
      highlightValue: "flex"
    },
    {
      title: "Grid Container",
      titleMs: "Bekas Grid",
      description: "Items in a grid layout",
      descriptionMs: "Item dalam susun atur grid",
      html: `<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">5</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">6</span>
</div>`,
      highlightValue: "grid"
    }
  ]
};
var flexDirection = {
  name: "flex-direction",
  property: "layout",
  syntax: 'layout="[direction]"',
  description: "Set the direction of flex items",
  descriptionMs: "Tetapkan arah item flex",
  category: "layout",
  values: [
    { value: "row", css: "flex-direction: row;", description: "Horizontal (default)", descriptionMs: "Mendatar (lalai)" },
    { value: "col", css: "flex-direction: column;", description: "Vertical", descriptionMs: "Menegak" },
    { value: "row-reverse", css: "flex-direction: row-reverse;", description: "Horizontal reversed", descriptionMs: "Mendatar terbalik" },
    { value: "col-reverse", css: "flex-direction: column-reverse;", description: "Vertical reversed", descriptionMs: "Menegak terbalik" }
  ],
  examples: [
    { code: '<div layout="flex row">Row direction</div>', description: "Flex row" },
    { code: '<div layout="flex col">Column direction</div>', description: "Flex column" }
  ],
  preview: [
    {
      title: "Row Direction",
      titleMs: "Arah Baris",
      description: "Items arranged horizontally from left to right",
      descriptionMs: "Item disusun secara mendatar dari kiri ke kanan",
      html: `<div layout="flex row" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>`,
      highlightValue: "row"
    },
    {
      title: "Column Direction",
      titleMs: "Arah Lajur",
      description: "Items stacked vertically from top to bottom",
      descriptionMs: "Item disusun secara menegak dari atas ke bawah",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>`,
      highlightValue: "col"
    },
    {
      title: "Row Reverse",
      titleMs: "Baris Terbalik",
      description: "Items arranged horizontally from right to left",
      descriptionMs: "Item disusun secara mendatar dari kanan ke kiri",
      html: `<div layout="flex row-reverse" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>`,
      highlightValue: "row-reverse"
    }
  ]
};
var flexWrap = {
  name: "flex-wrap",
  property: "layout",
  syntax: 'layout="[wrap-value]"',
  description: "Control how flex items wrap",
  descriptionMs: "Kawal bagaimana item flex membungkus",
  category: "layout",
  values: [
    { value: "wrap", css: "flex-wrap: wrap;", description: "Allow wrapping", descriptionMs: "Benarkan pembungkusan" },
    { value: "nowrap", css: "flex-wrap: nowrap;", description: "Prevent wrapping", descriptionMs: "Halang pembungkusan" },
    { value: "wrap-reverse", css: "flex-wrap: wrap-reverse;", description: "Wrap in reverse", descriptionMs: "Bungkus terbalik" }
  ],
  examples: [
    { code: '<div layout="flex wrap">Wrapping flex</div>', description: "Allow items to wrap" }
  ],
  preview: [
    {
      title: "Wrap Enabled",
      titleMs: "Bungkus Diaktifkan",
      description: "Items wrap to next line when container is full",
      descriptionMs: "Item membungkus ke baris seterusnya apabila bekas penuh",
      html: `<div layout="flex wrap" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 4</span>
</div>`,
      highlightValue: "wrap"
    },
    {
      title: "No Wrap",
      titleMs: "Tiada Bungkusan",
      description: "Items stay on single line (may overflow)",
      descriptionMs: "Item kekal pada satu baris (mungkin melimpah)",
      html: `<div layout="flex nowrap" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 200px; overflow: hidden;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Item 3</span>
</div>`,
      highlightValue: "nowrap"
    }
  ]
};
var flexItems = {
  name: "flex-items",
  property: "layout",
  syntax: 'layout="[flex-item-value]"',
  description: "Control flex grow and shrink behavior",
  descriptionMs: "Kawal kelakuan kembang dan kecil flex",
  category: "layout",
  values: [
    { value: "grow", css: "flex-grow: 1;", description: "Allow item to grow", descriptionMs: "Benarkan item berkembang" },
    { value: "grow-0", css: "flex-grow: 0;", description: "Prevent growing", descriptionMs: "Halang perkembangan" },
    { value: "shrink", css: "flex-shrink: 1;", description: "Allow item to shrink", descriptionMs: "Benarkan item mengecil" },
    { value: "shrink-0", css: "flex-shrink: 0;", description: "Prevent shrinking", descriptionMs: "Halang pengecilan" }
  ],
  examples: [
    { code: '<div layout="grow">Growing item</div>', description: "Allow item to grow" }
  ],
  preview: [
    {
      title: "Flex Grow",
      titleMs: "Kembang Flex",
      description: "Middle item grows to fill available space",
      descriptionMs: "Item tengah berkembang untuk mengisi ruang kosong",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Fixed</span>
  <span layout="grow text:center" space="p:small" visual="bg:primary text:white rounded:small">Grows</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Fixed</span>
</div>`,
      highlightValue: "grow"
    },
    {
      title: "Flex Shrink",
      titleMs: "Kecil Flex",
      description: "Item shrinks when space is limited",
      descriptionMs: "Item mengecil apabila ruang terhad",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="max-width: 250px;">
  <span layout="shrink-0" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">No Shrink</span>
  <span layout="shrink" space="p:small" visual="bg:primary text:white rounded:small">Can Shrink</span>
</div>`,
      highlightValue: "shrink"
    }
  ]
};
var flexShorthand = {
  name: "flex",
  property: "layout",
  syntax: 'layout="flex:[value]"',
  description: "Flex shorthand property",
  descriptionMs: "Properti pintasan flex",
  category: "layout",
  engine: { template: "flex: {value};", passthrough: true, arbitrary: true },
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "1", css: "flex: 1 1 0%;", description: "Flex 1", descriptionMs: "Flex 1" },
    { value: "auto", css: "flex: 1 1 auto;", description: "Flex auto", descriptionMs: "Flex auto" },
    { value: "initial", css: "flex: 0 1 auto;", description: "Initial flex", descriptionMs: "Flex awal" },
    { value: "none", css: "flex: none;", description: "No flex", descriptionMs: "Tiada flex" }
  ],
  examples: [
    { code: '<div layout="flex:1">Flexible item</div>', description: "Flex grow and shrink" }
  ],
  preview: [
    {
      title: "Flex 1",
      titleMs: "Flex 1",
      description: "Equal distribution of space among items",
      descriptionMs: "Pengagihan ruang yang sama antara item",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="flex:1 text:center" space="p:small" visual="bg:primary text:white rounded:small">flex:1</span>
  <span layout="flex:1 text:center" space="p:small" visual="bg:primary text:white rounded:small">flex:1</span>
  <span layout="flex:1 text:center" space="p:small" visual="bg:primary text:white rounded:small">flex:1</span>
</div>`,
      highlightValue: "flex:1"
    },
    {
      title: "Flex Auto vs None",
      titleMs: "Flex Auto vs Tiada",
      description: "Different flex behaviors compared",
      descriptionMs: "Perbandingan kelakuan flex berbeza",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="flex:auto" space="p:small" visual="bg:primary text:white rounded:small">auto</span>
  <span layout="flex:none" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">none</span>
</div>`,
      highlightValue: "flex:auto"
    }
  ]
};
var flexBasis = {
  name: "flex-basis",
  property: "layout",
  syntax: 'layout="basis:[value]"',
  description: "Set initial size of flex item",
  descriptionMs: "Tetapkan saiz awal item flex",
  category: "layout",
  engine: { template: "flex-basis: {value};", enum: { "0": "flex-basis: 0px;" }, literals: { full: "100%", half: "50%", third: "33.333333%", "third-2x": "66.666667%", quarter: "25%", "quarter-2x": "50%", "quarter-3x": "75%", "1/1": "100%", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%" } },
  usesScale: "spacing",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "auto", css: "flex-basis: auto;", description: "Auto basis", descriptionMs: "Asas automatik" },
    { value: "0", css: "flex-basis: 0;", description: "Zero basis", descriptionMs: "Asas sifar" }
  ],
  examples: [
    { code: '<div layout="basis:[200px]">200px basis</div>', description: "Fixed basis" }
  ],
  preview: [
    {
      title: "Fixed Basis",
      titleMs: "Asas Tetap",
      description: "Items with different basis sizes",
      descriptionMs: "Item dengan saiz asas berbeza",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="basis:[100px] text:center" space="p:small" visual="bg:primary text:white rounded:small">100px</span>
  <span layout="basis:[150px] text:center" space="p:small" visual="bg:primary text:white rounded:small">150px</span>
  <span layout="basis:auto" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">auto</span>
</div>`,
      highlightValue: "basis:[100px]"
    }
  ]
};
var order = {
  name: "order",
  property: "layout",
  syntax: 'layout="order:[value]"',
  description: "Control flex/grid item order",
  descriptionMs: "Kawal susunan item flex/grid",
  category: "layout",
  engine: { numeric: true, passthrough: true },
  dynamic: true,
  supportsArbitrary: true,
  values: [
    { value: "first", css: "order: -9999;", description: "Move to first", descriptionMs: "Pindah ke pertama" },
    { value: "last", css: "order: 9999;", description: "Move to last", descriptionMs: "Pindah ke terakhir" },
    { value: "none", css: "order: 0;", description: "Default order", descriptionMs: "Susunan lalai" },
    { value: "1-12", css: "order: {n};", description: "Specific order", descriptionMs: "Susunan tertentu" }
  ],
  examples: [
    { code: '<div layout="order:first">First item</div>', description: "Move to first" }
  ],
  preview: [
    {
      title: "Reorder Items",
      titleMs: "Susun Semula Item",
      description: "Change visual order of flex items",
      descriptionMs: "Ubah susunan visual item flex",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="order:3" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">A (order:3)</span>
  <span layout="order:1" space="p:small" visual="bg:primary text:white rounded:small">B (order:1)</span>
  <span layout="order:2" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">C (order:2)</span>
</div>`,
      highlightValue: "order:1"
    },
    {
      title: "First and Last",
      titleMs: "Pertama dan Terakhir",
      description: "Move items to start or end",
      descriptionMs: "Pindahkan item ke permulaan atau hujung",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="order:last" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">First in DOM (order:last)</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Middle</span>
  <span layout="order:first" space="p:small" visual="bg:primary text:white rounded:small">Last in DOM (order:first)</span>
</div>`,
      highlightValue: "order:first"
    }
  ]
};

// src/definitions/layout-alignment.js
var justifyContent = {
  name: "justify-content",
  property: "layout",
  syntax: 'layout="justify:[value]"',
  description: "Align items along the main axis",
  descriptionMs: "Jajarkan item sepanjang paksi utama",
  category: "layout",
  engine: { passthrough: true },
  values: [
    { value: "start", css: "justify-content: flex-start;", description: "Align to start", descriptionMs: "Jajar ke permulaan" },
    { value: "end", css: "justify-content: flex-end;", description: "Align to end", descriptionMs: "Jajar ke hujung" },
    { value: "center", css: "justify-content: center;", description: "Center items", descriptionMs: "Tengahkan item" },
    { value: "between", css: "justify-content: space-between;", description: "Space between items", descriptionMs: "Ruang antara item" },
    { value: "around", css: "justify-content: space-around;", description: "Space around items", descriptionMs: "Ruang sekeliling item" },
    { value: "evenly", css: "justify-content: space-evenly;", description: "Even spacing", descriptionMs: "Ruang sekata" },
    { value: "stretch", css: "justify-content: stretch;", description: "Stretch items", descriptionMs: "Regangkan item" }
  ],
  examples: [
    { code: '<div layout="flex justify:center">Centered</div>', description: "Center items" },
    { code: '<div layout="flex justify:between">Spaced</div>', description: "Space between" }
  ],
  preview: [
    {
      title: "Justify Start",
      titleMs: "Jajar Permulaan",
      description: "Items aligned to the start of container",
      descriptionMs: "Item dijajarkan ke permulaan bekas",
      html: `<div layout="flex justify:start" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>`,
      highlightValue: "justify:start"
    },
    {
      title: "Justify Center",
      titleMs: "Jajar Tengah",
      description: "Items centered along the main axis",
      descriptionMs: "Item berpusat sepanjang paksi utama",
      html: `<div layout="flex justify:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>`,
      highlightValue: "justify:center"
    },
    {
      title: "Justify Between",
      titleMs: "Jajar Antara",
      description: "Items with equal space between them",
      descriptionMs: "Item dengan ruang sama antara mereka",
      html: `<div layout="flex justify:between" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>`,
      highlightValue: "justify:between"
    }
  ]
};
var alignItems = {
  name: "align-items",
  property: "layout",
  syntax: 'layout="items:[value]"',
  description: "Align items along the cross axis",
  descriptionMs: "Jajarkan item sepanjang paksi silang",
  category: "layout",
  engine: { passthrough: true },
  values: [
    { value: "start", css: "align-items: flex-start;", description: "Align to start", descriptionMs: "Jajar ke permulaan" },
    { value: "end", css: "align-items: flex-end;", description: "Align to end", descriptionMs: "Jajar ke hujung" },
    { value: "center", css: "align-items: center;", description: "Center items", descriptionMs: "Tengahkan item" },
    { value: "baseline", css: "align-items: baseline;", description: "Align to baseline", descriptionMs: "Jajar ke garis asas" },
    { value: "stretch", css: "align-items: stretch;", description: "Stretch items", descriptionMs: "Regangkan item" }
  ],
  examples: [
    { code: '<div layout="flex items:center">Centered</div>', description: "Center vertically" }
  ],
  preview: [
    {
      title: "Items Center",
      titleMs: "Item Tengah",
      description: "Items centered along cross axis",
      descriptionMs: "Item berpusat sepanjang paksi silang",
      html: `<div layout="flex items:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
  <span space="p:large" visual="bg:primary text:white rounded:small">Tall</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
</div>`,
      highlightValue: "items:center"
    },
    {
      title: "Items Start",
      titleMs: "Item Permulaan",
      description: "Items aligned to the start of cross axis",
      descriptionMs: "Item dijajarkan ke permulaan paksi silang",
      html: `<div layout="flex items:start" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
  <span space="p:large" visual="bg:primary text:white rounded:small">Tall</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Short</span>
</div>`,
      highlightValue: "items:start"
    },
    {
      title: "Items Stretch",
      titleMs: "Item Regang",
      description: "Items stretched to fill container height",
      descriptionMs: "Item diregangkan untuk mengisi ketinggian bekas",
      html: `<div layout="flex items:stretch" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span layout="flex center" space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>`,
      highlightValue: "items:stretch"
    }
  ]
};
var alignSelf = {
  name: "align-self",
  property: "layout",
  syntax: 'layout="self:[value]"',
  description: "Override alignment for a single item",
  descriptionMs: "Ganti penjajaran untuk satu item",
  category: "layout",
  engine: { passthrough: true },
  values: [
    { value: "auto", css: "align-self: auto;", description: "Use parent alignment", descriptionMs: "Guna penjajaran induk" },
    { value: "start", css: "align-self: flex-start;", description: "Align to start", descriptionMs: "Jajar ke permulaan" },
    { value: "end", css: "align-self: flex-end;", description: "Align to end", descriptionMs: "Jajar ke hujung" },
    { value: "center", css: "align-self: center;", description: "Center item", descriptionMs: "Tengahkan item" },
    { value: "baseline", css: "align-self: baseline;", description: "Align to baseline", descriptionMs: "Jajar ke garis asas" },
    { value: "stretch", css: "align-self: stretch;", description: "Stretch item", descriptionMs: "Regangkan item" }
  ],
  examples: [
    { code: '<div layout="self:center">Centered item</div>', description: "Center single item" }
  ],
  preview: [
    {
      title: "Align Self",
      titleMs: "Jajar Kendiri",
      description: "Override parent alignment for one item",
      descriptionMs: "Ganti penjajaran induk untuk satu item",
      html: `<div layout="flex items:start" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Start</span>
  <span layout="self:center" space="p:small" visual="bg:primary text:white rounded:small">self:center</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Start</span>
</div>`,
      highlightValue: "self:center"
    }
  ]
};
var alignContent = {
  name: "align-content",
  property: "layout",
  syntax: 'layout="content:[value]"',
  description: "Align content rows in multi-line flex container",
  descriptionMs: "Jajarkan baris kandungan dalam bekas flex berbilang baris",
  category: "layout",
  engine: { passthrough: true },
  values: [
    { value: "start", css: "align-content: flex-start;", description: "Align to start", descriptionMs: "Jajar ke permulaan" },
    { value: "end", css: "align-content: flex-end;", description: "Align to end", descriptionMs: "Jajar ke hujung" },
    { value: "center", css: "align-content: center;", description: "Center content", descriptionMs: "Tengahkan kandungan" },
    { value: "between", css: "align-content: space-between;", description: "Space between rows", descriptionMs: "Ruang antara baris" },
    { value: "around", css: "align-content: space-around;", description: "Space around rows", descriptionMs: "Ruang sekeliling baris" },
    { value: "evenly", css: "align-content: space-evenly;", description: "Even spacing", descriptionMs: "Ruang sekata" },
    { value: "stretch", css: "align-content: stretch;", description: "Stretch rows", descriptionMs: "Regangkan baris" }
  ],
  examples: [
    { code: '<div layout="flex wrap content:center">Centered rows</div>', description: "Center wrapped rows" }
  ],
  preview: [
    {
      title: "Content Center",
      titleMs: "Kandungan Tengah",
      description: "Center wrapped rows in multi-line container",
      descriptionMs: "Tengahkan baris bungkus dalam bekas berbilang baris",
      html: `<div layout="flex wrap content:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 150px; max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">4</span>
</div>`,
      highlightValue: "content:center"
    },
    {
      title: "Content Between",
      titleMs: "Kandungan Antara",
      description: "Space between wrapped rows",
      descriptionMs: "Ruang antara baris bungkus",
      html: `<div layout="flex wrap content:between" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 150px; max-width: 200px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">4</span>
</div>`,
      highlightValue: "content:between"
    }
  ]
};
var shorthandAlignment = {
  name: "shorthand-alignment",
  property: "layout",
  syntax: 'layout="[alignment]"',
  description: "Quick alignment shortcuts",
  descriptionMs: "Pintasan penjajaran pantas",
  category: "layout",
  values: [
    { value: "center", css: "justify-content: center; align-items: center;", description: "Center both axes", descriptionMs: "Tengahkan kedua-dua paksi" },
    { value: "start", css: "justify-content: flex-start; align-items: flex-start;", description: "Align to start", descriptionMs: "Jajar ke permulaan" },
    { value: "end", css: "justify-content: flex-end; align-items: flex-end;", description: "Align to end", descriptionMs: "Jajar ke hujung" },
    { value: "between", css: "justify-content: space-between;", description: "Space between", descriptionMs: "Ruang antara" },
    { value: "around", css: "justify-content: space-around;", description: "Space around", descriptionMs: "Ruang sekeliling" },
    { value: "evenly", css: "justify-content: space-evenly;", description: "Even spacing", descriptionMs: "Ruang sekata" }
  ],
  examples: [
    { code: '<div layout="flex center">Centered content</div>', description: "Center on both axes" }
  ],
  preview: [
    {
      title: "Center Shorthand",
      titleMs: "Pintasan Tengah",
      description: "Center items on both axes at once",
      descriptionMs: "Tengahkan item pada kedua-dua paksi sekaligus",
      html: `<div layout="flex center" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">Centered</span>
</div>`,
      highlightValue: "center"
    },
    {
      title: "Between Shorthand",
      titleMs: "Pintasan Antara",
      description: "Quick space-between layout",
      descriptionMs: "Susun atur space-between pantas",
      html: `<div layout="flex between" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Left</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Right</span>
</div>`,
      highlightValue: "between"
    }
  ]
};
var justifyItems = {
  name: "justify-items",
  property: "layout",
  syntax: 'layout="justify-items:[value]"',
  description: "Align grid items on inline axis",
  descriptionMs: "Jajarkan item grid pada paksi sebaris",
  category: "layout",
  engine: { passthrough: true },
  values: [
    { value: "start", css: "justify-items: start;", description: "Start alignment", descriptionMs: "Jajar permulaan" },
    { value: "end", css: "justify-items: end;", description: "End alignment", descriptionMs: "Jajar hujung" },
    { value: "center", css: "justify-items: center;", description: "Center alignment", descriptionMs: "Jajar tengah" },
    { value: "stretch", css: "justify-items: stretch;", description: "Stretch items", descriptionMs: "Regangkan item" }
  ],
  examples: [
    { code: '<div layout="grid justify-items:center">Centered items</div>', description: "Center grid items" }
  ],
  preview: [
    {
      title: "Justify Items Center",
      titleMs: "Jajar Item Tengah",
      description: "Center all grid items horizontally within their cells",
      descriptionMs: "Tengahkan semua item grid secara mendatar dalam sel mereka",
      html: `<div layout="grid grid-cols:3 justify-items:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>`,
      highlightValue: "justify-items:center"
    }
  ]
};
var justifySelf = {
  name: "justify-self",
  property: "layout",
  syntax: 'layout="justify-self:[value]"',
  description: "Align single grid item on inline axis",
  descriptionMs: "Jajarkan satu item grid pada paksi sebaris",
  category: "layout",
  engine: { passthrough: true },
  values: [
    { value: "auto", css: "justify-self: auto;", description: "Auto alignment", descriptionMs: "Jajar automatik" },
    { value: "start", css: "justify-self: start;", description: "Start alignment", descriptionMs: "Jajar permulaan" },
    { value: "end", css: "justify-self: end;", description: "End alignment", descriptionMs: "Jajar hujung" },
    { value: "center", css: "justify-self: center;", description: "Center alignment", descriptionMs: "Jajar tengah" },
    { value: "stretch", css: "justify-self: stretch;", description: "Stretch item", descriptionMs: "Regangkan item" }
  ],
  examples: [
    { code: '<div layout="justify-self:end">End aligned</div>', description: "Align item to end" }
  ],
  preview: [
    {
      title: "Justify Self",
      titleMs: "Jajar Kendiri",
      description: "Override horizontal alignment for one grid item",
      descriptionMs: "Ganti penjajaran mendatar untuk satu item grid",
      html: `<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
  <span layout="justify-self:center" space="p:small" visual="bg:primary text:white rounded:small">center</span>
  <span layout="justify-self:end" space="p:small" visual="bg:primary text:white rounded:small">end</span>
</div>`,
      highlightValue: "justify-self:center"
    }
  ]
};
var placeContent = {
  name: "place-content",
  property: "layout",
  syntax: 'layout="place-content:[value]"',
  description: "Shorthand for align-content and justify-content",
  descriptionMs: "Pintasan untuk align-content dan justify-content",
  category: "layout",
  engine: { passthrough: true },
  values: [
    { value: "start", css: "place-content: start;", description: "Start alignment", descriptionMs: "Jajar permulaan" },
    { value: "end", css: "place-content: end;", description: "End alignment", descriptionMs: "Jajar hujung" },
    { value: "center", css: "place-content: center;", description: "Center alignment", descriptionMs: "Jajar tengah" },
    { value: "between", css: "place-content: space-between;", description: "Space between", descriptionMs: "Ruang antara" },
    { value: "around", css: "place-content: space-around;", description: "Space around", descriptionMs: "Ruang sekeliling" },
    { value: "evenly", css: "place-content: space-evenly;", description: "Even spacing", descriptionMs: "Ruang sekata" },
    { value: "stretch", css: "place-content: stretch;", description: "Stretch content", descriptionMs: "Regangkan kandungan" }
  ],
  examples: [
    { code: '<div layout="grid place-content:center">Centered content</div>', description: "Center both axes" }
  ],
  preview: [
    {
      title: "Place Content Center",
      titleMs: "Letakkan Kandungan Tengah",
      description: "Center entire grid content in both directions",
      descriptionMs: "Tengahkan keseluruhan kandungan grid dalam kedua-dua arah",
      html: `<div layout="grid grid-cols:2 place-content:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 120px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
</div>`,
      highlightValue: "place-content:center"
    }
  ]
};
var placeItems = {
  name: "place-items",
  property: "layout",
  syntax: 'layout="place-items:[value]"',
  description: "Shorthand for align-items and justify-items",
  descriptionMs: "Pintasan untuk align-items dan justify-items",
  category: "layout",
  engine: { passthrough: true },
  values: [
    { value: "start", css: "place-items: start;", description: "Start alignment", descriptionMs: "Jajar permulaan" },
    { value: "end", css: "place-items: end;", description: "End alignment", descriptionMs: "Jajar hujung" },
    { value: "center", css: "place-items: center;", description: "Center alignment", descriptionMs: "Jajar tengah" },
    { value: "stretch", css: "place-items: stretch;", description: "Stretch items", descriptionMs: "Regangkan item" }
  ],
  examples: [
    { code: '<div layout="grid place-items:center">Centered items</div>', description: "Center all items" }
  ],
  preview: [
    {
      title: "Place Items Center",
      titleMs: "Letakkan Item Tengah",
      description: "Center all items within their grid cells",
      descriptionMs: "Tengahkan semua item dalam sel grid mereka",
      html: `<div layout="grid grid-cols:3 place-items:center" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>`,
      highlightValue: "place-items:center"
    }
  ]
};
var placeSelf = {
  name: "place-self",
  property: "layout",
  syntax: 'layout="place-self:[value]"',
  description: "Shorthand for align-self and justify-self",
  descriptionMs: "Pintasan untuk align-self dan justify-self",
  category: "layout",
  engine: { passthrough: true },
  values: [
    { value: "auto", css: "place-self: auto;", description: "Auto alignment", descriptionMs: "Jajar automatik" },
    { value: "start", css: "place-self: start;", description: "Start alignment", descriptionMs: "Jajar permulaan" },
    { value: "end", css: "place-self: end;", description: "End alignment", descriptionMs: "Jajar hujung" },
    { value: "center", css: "place-self: center;", description: "Center alignment", descriptionMs: "Jajar tengah" },
    { value: "stretch", css: "place-self: stretch;", description: "Stretch item", descriptionMs: "Regangkan item" }
  ],
  examples: [
    { code: '<div layout="place-self:center">Centered item</div>', description: "Center single item" }
  ],
  preview: [
    {
      title: "Place Self Center",
      titleMs: "Letakkan Kendiri Tengah",
      description: "Center one item in both directions within its cell",
      descriptionMs: "Tengahkan satu item dalam kedua-dua arah dalam selnya",
      html: `<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
  <span layout="place-self:center" space="p:small" visual="bg:primary text:white rounded:small">center</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Default</span>
</div>`,
      highlightValue: "place-self:center"
    }
  ]
};

// src/definitions/layout-grid.js
var gridColumns = {
  name: "grid-columns",
  property: "layout",
  syntax: 'layout="grid-cols:[value]"',
  description: "Define grid template columns",
  descriptionMs: "Tentukan templat lajur grid",
  category: "layout",
  engine: { arbitraryTemplate: "grid-template-columns: {value};" },
  dynamic: true,
  supportsArbitrary: true,
  values: [
    { value: "1-12", css: "grid-template-columns: repeat({n}, minmax(0, 1fr));", description: "N equal columns", descriptionMs: "N lajur sama" },
    { value: "none", css: "grid-template-columns: none;", description: "No columns defined", descriptionMs: "Tiada lajur ditakrifkan" },
    { value: "subgrid", css: "grid-template-columns: subgrid;", description: "Use parent grid", descriptionMs: "Guna grid induk" }
  ],
  examples: [
    { code: '<div layout="grid grid-cols:3">3 columns</div>', description: "Three column grid" },
    { code: '<div layout="grid grid-cols:12">12 columns</div>', description: "Twelve column grid" }
  ],
  preview: [
    {
      title: "3 Column Grid",
      titleMs: "Grid 3 Lajur",
      description: "Equal width columns with grid-cols:3",
      descriptionMs: "Lajur lebar sama dengan grid-cols:3",
      html: `<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">5</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">6</span>
</div>`,
      highlightValue: "grid-cols:3"
    },
    {
      title: "4 Column Grid",
      titleMs: "Grid 4 Lajur",
      description: "Four equal columns layout",
      descriptionMs: "Susun atur empat lajur sama",
      html: `<div layout="grid grid-cols:4" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
</div>`,
      highlightValue: "grid-cols:4"
    }
  ]
};
var gridRows = {
  name: "grid-rows",
  property: "layout",
  syntax: 'layout="grid-rows:[value]"',
  description: "Define grid template rows",
  descriptionMs: "Tentukan templat baris grid",
  category: "layout",
  engine: { arbitrary: true, arbitraryTemplate: "grid-template-rows: {value};" },
  dynamic: true,
  values: [
    { value: "1-12", css: "grid-template-rows: repeat({n}, minmax(0, 1fr));", description: "N equal rows", descriptionMs: "N baris sama" },
    { value: "none", css: "grid-template-rows: none;", description: "No rows defined", descriptionMs: "Tiada baris ditakrifkan" },
    { value: "subgrid", css: "grid-template-rows: subgrid;", description: "Use parent grid", descriptionMs: "Guna grid induk" }
  ],
  examples: [
    { code: '<div layout="grid grid-rows:3">3 rows</div>', description: "Three row grid" }
  ],
  preview: [
    {
      title: "Grid Rows",
      titleMs: "Baris Grid",
      description: "Define explicit row tracks in a grid",
      descriptionMs: "Tentukan trek baris eksplisit dalam grid",
      html: `<div layout="grid grid-rows:3 grid-cols:2" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">5</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">6</span>
</div>`,
      highlightValue: "grid-rows:3"
    }
  ]
};
var gridColSpan = {
  name: "grid-column-span",
  property: "layout",
  syntax: 'layout="col-span:[value]"',
  description: "Span across grid columns",
  descriptionMs: "Merentangi lajur grid",
  category: "layout",
  engine: { utilities: { "col-start": { template: "grid-column-start: {value};", numeric: true, passthrough: true }, "col-end": { template: "grid-column-end: {value};", numeric: true, passthrough: true } } },
  dynamic: true,
  values: [
    { value: "1-12", css: "grid-column: span {n} / span {n};", description: "Span N columns", descriptionMs: "Merentangi N lajur" },
    { value: "full", css: "grid-column: 1 / -1;", description: "Span all columns", descriptionMs: "Merentangi semua lajur" }
  ],
  examples: [
    { code: '<div layout="col-span:2">Spans 2 columns</div>', description: "Span two columns" },
    { code: '<div layout="col-span:full">Full width</div>', description: "Span all columns" }
  ],
  preview: [
    {
      title: "Column Span",
      titleMs: "Rentang Lajur",
      description: "Item spanning multiple columns",
      descriptionMs: "Item merentangi berbilang lajur",
      html: `<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="col-span:2 text:center" space="p:small" visual="bg:primary text:white rounded:small">col-span:2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
</div>`,
      highlightValue: "col-span:2"
    },
    {
      title: "Full Width Span",
      titleMs: "Rentang Lebar Penuh",
      description: "Item spanning all columns",
      descriptionMs: "Item merentangi semua lajur",
      html: `<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">3</span>
  <span layout="col-span:full text:center" space="p:small" visual="bg:primary text:white rounded:small">col-span:full</span>
</div>`,
      highlightValue: "col-span:full"
    }
  ]
};
var gridRowSpan = {
  name: "grid-row-span",
  property: "layout",
  syntax: 'layout="row-span:[value]"',
  description: "Span across grid rows",
  descriptionMs: "Merentangi baris grid",
  category: "layout",
  engine: { utilities: { "row-start": { template: "grid-row-start: {value};", numeric: true, passthrough: true }, "row-end": { template: "grid-row-end: {value};", numeric: true, passthrough: true } } },
  dynamic: true,
  values: [
    { value: "1-12", css: "grid-row: span {n} / span {n};", description: "Span N rows", descriptionMs: "Merentangi N baris" },
    { value: "full", css: "grid-row: 1 / -1;", description: "Span all rows", descriptionMs: "Merentangi semua baris" }
  ],
  examples: [
    { code: '<div layout="row-span:2">Spans 2 rows</div>', description: "Span two rows" }
  ],
  preview: [
    {
      title: "Row Span",
      titleMs: "Rentang Baris",
      description: "Item spanning multiple rows",
      descriptionMs: "Item merentangi berbilang baris",
      html: `<div layout="grid grid-cols:3 grid-rows:2" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="row-span:2 flex center" space="p:small" visual="bg:primary text:white rounded:small">row-span:2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">4</span>
</div>`,
      highlightValue: "row-span:2"
    }
  ]
};
var gridAutoFlow = {
  name: "grid-auto-flow",
  property: "layout",
  syntax: 'layout="grid-flow:[value]"',
  description: "Control how auto-placed items flow in grid",
  descriptionMs: "Kawal bagaimana item diletakkan automatik dalam grid",
  category: "layout",
  values: [
    { value: "row", css: "grid-auto-flow: row;", description: "Place by row", descriptionMs: "Letakkan mengikut baris" },
    { value: "col", css: "grid-auto-flow: column;", description: "Place by column", descriptionMs: "Letakkan mengikut lajur" },
    { value: "dense", css: "grid-auto-flow: dense;", description: "Dense packing", descriptionMs: "Pembungkusan padat" },
    { value: "row-dense", css: "grid-auto-flow: row dense;", description: "Row with dense", descriptionMs: "Baris dengan padat" },
    { value: "col-dense", css: "grid-auto-flow: column dense;", description: "Column with dense", descriptionMs: "Lajur dengan padat" }
  ],
  examples: [
    { code: '<div layout="grid grid-flow:col">Column flow</div>', description: "Column-based flow" }
  ],
  preview: [
    {
      title: "Row Flow",
      titleMs: "Aliran Baris",
      description: "Items flow by row (default)",
      descriptionMs: "Item mengalir mengikut baris (lalai)",
      html: `<div layout="grid grid-cols:3 grid-flow:row" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
</div>`,
      highlightValue: "grid-flow:row"
    },
    {
      title: "Column Flow",
      titleMs: "Aliran Lajur",
      description: "Items flow by column",
      descriptionMs: "Item mengalir mengikut lajur",
      html: `<div layout="grid grid-rows:2 grid-flow:col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
</div>`,
      highlightValue: "grid-flow:col"
    }
  ]
};
var gridAutoSizing = {
  name: "grid-auto-sizing",
  property: "layout",
  syntax: 'layout="auto-cols:[value]" or layout="auto-rows:[value]"',
  description: "Control size of auto-generated grid tracks",
  descriptionMs: "Kawal saiz trek grid yang dijana automatik",
  category: "layout",
  engine: { templates: { "auto-cols": "grid-auto-columns: {value};", "auto-rows": "grid-auto-rows: {value};" }, passthrough: true, arbitrary: true },
  dynamic: true,
  values: [
    { value: "auto", css: "auto", description: "Auto size", descriptionMs: "Saiz automatik" },
    { value: "min", css: "min-content", description: "Minimum content", descriptionMs: "Kandungan minimum" },
    { value: "max", css: "max-content", description: "Maximum content", descriptionMs: "Kandungan maksimum" },
    { value: "fr", css: "minmax(0, 1fr)", description: "Fractional unit", descriptionMs: "Unit pecahan" }
  ],
  examples: [
    { code: '<div layout="grid auto-cols:min">Auto min columns</div>', description: "Min-content columns" }
  ],
  preview: [
    {
      title: "Auto Columns",
      titleMs: "Lajur Automatik",
      description: "Automatically sized column tracks",
      descriptionMs: "Trek lajur bersaiz automatik",
      html: `<div layout="grid grid-flow:col auto-cols:fr" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">Auto 3</span>
</div>`,
      highlightValue: "auto-cols:fr"
    }
  ]
};

// src/definitions/layout-positioning.js
var position = {
  name: "position",
  property: "layout",
  syntax: 'layout="[position-value]"',
  description: "Set the positioning method",
  descriptionMs: "Tetapkan kaedah kedudukan",
  category: "layout",
  values: [
    { value: "static", css: "position: static;", description: "Default positioning", descriptionMs: "Kedudukan lalai" },
    { value: "relative", css: "position: relative;", description: "Relative to normal position", descriptionMs: "Relatif kepada kedudukan normal" },
    { value: "absolute", css: "position: absolute;", description: "Absolute within container", descriptionMs: "Mutlak dalam bekas" },
    { value: "fixed", css: "position: fixed;", description: "Fixed to viewport", descriptionMs: "Tetap pada port pandangan" },
    { value: "sticky", css: "position: sticky;", description: "Sticky positioning", descriptionMs: "Kedudukan melekit" }
  ],
  examples: [
    { code: '<div layout="absolute">Absolute positioned</div>', description: "Absolute position" },
    { code: '<div layout="fixed">Fixed to viewport</div>', description: "Fixed position" }
  ],
  preview: [
    {
      title: "Relative Position",
      titleMs: "Kedudukan Relatif",
      description: "Element positioned relative to normal flow",
      descriptionMs: "Elemen diletakkan relatif kepada aliran normal",
      html: `<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Relative Container</span>
  <span layout="absolute top:0 right:0" space="p:tiny" visual="bg:danger text:white rounded:small">Abs</span>
</div>`,
      highlightValue: "relative"
    },
    {
      title: "Sticky Position",
      titleMs: "Kedudukan Melekit",
      description: "Element sticks when scrolling past it",
      descriptionMs: "Elemen melekat apabila skrol melepasi",
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="sticky top:0" space="p:small" visual="bg:primary text:white rounded:small">Sticky Header</span>
</div>`,
      highlightValue: "sticky"
    }
  ]
};
var inset = {
  name: "inset",
  property: "layout",
  syntax: 'layout="inset:[value]" or layout="top:[value]"',
  description: "Control positioning offsets",
  descriptionMs: "Kawal ofset kedudukan",
  category: "layout",
  engine: { negatable: true, literals: { "0": "0", full: "100%", half: "50%", third: "33.333333%", "third-2x": "66.666667%", quarter: "25%", "quarter-2x": "50%", "quarter-3x": "75%", "1/1": "100%", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%" } },
  usesScale: "spacing",
  supportsArbitrary: true,
  values: [
    { value: "inset", css: "inset: {value};", description: "All sides", descriptionMs: "Semua sisi" },
    { value: "inset-x", css: "left: {value}; right: {value};", description: "Left and right", descriptionMs: "Kiri dan kanan" },
    { value: "inset-y", css: "top: {value}; bottom: {value};", description: "Top and bottom", descriptionMs: "Atas dan bawah" },
    { value: "top", css: "top: {value};", description: "Top offset", descriptionMs: "Ofset atas" },
    { value: "right", css: "right: {value};", description: "Right offset", descriptionMs: "Ofset kanan" },
    { value: "bottom", css: "bottom: {value};", description: "Bottom offset", descriptionMs: "Ofset bawah" },
    { value: "left", css: "left: {value};", description: "Left offset", descriptionMs: "Ofset kiri" }
  ],
  examples: [
    { code: '<div layout="absolute inset:0">Full coverage</div>', description: "Cover parent" },
    { code: '<div layout="absolute top:medium left:medium">Offset</div>', description: "Offset positioning" }
  ],
  preview: [
    {
      title: "Inset Zero",
      titleMs: "Inset Sifar",
      description: "Cover entire parent with inset:0",
      descriptionMs: "Tutup keseluruhan induk dengan inset:0",
      html: `<div layout="relative" space="p:large" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 100px;">
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Parent</span>
  <span layout="absolute inset:0 flex center" visual="bg:primary/50 text:white rounded:medium">inset:0</span>
</div>`,
      highlightValue: "inset:0"
    },
    {
      title: "Directional Insets",
      titleMs: "Inset Arah",
      description: "Position with top, right, bottom, left",
      descriptionMs: "Kedudukan dengan atas, kanan, bawah, kiri",
      html: `<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <span layout="absolute top:0 left:0" space="p:tiny" visual="bg:primary text:white rounded:small">TL</span>
  <span layout="absolute top:0 right:0" space="p:tiny" visual="bg:primary text:white rounded:small">TR</span>
  <span layout="absolute bottom:0 left:0" space="p:tiny" visual="bg:primary text:white rounded:small">BL</span>
  <span layout="absolute bottom:0 right:0" space="p:tiny" visual="bg:primary text:white rounded:small">BR</span>
</div>`,
      highlightValue: "top:0"
    }
  ]
};
var zIndex = {
  name: "z-index",
  property: "layout",
  syntax: 'layout="z:[value]"',
  description: "Control stacking order",
  descriptionMs: "Kawal susunan tindanan",
  category: "layout",
  usesScale: "zIndex",
  values: [
    { value: "base", css: "z-index: var(--z-base);", description: "Base layer (0)", descriptionMs: "Lapisan asas (0)" },
    { value: "low", css: "z-index: var(--z-low);", description: "Low layer (10)", descriptionMs: "Lapisan rendah (10)" },
    { value: "mid", css: "z-index: var(--z-mid);", description: "Middle layer (50)", descriptionMs: "Lapisan tengah (50)" },
    { value: "high", css: "z-index: var(--z-high);", description: "High layer (100)", descriptionMs: "Lapisan tinggi (100)" },
    { value: "top", css: "z-index: var(--z-top);", description: "Top layer (9999)", descriptionMs: "Lapisan teratas (9999)" }
  ],
  examples: [
    { code: '<div layout="z:top">On top</div>', description: "Highest z-index" }
  ],
  preview: [
    {
      title: "Z-Index Layers",
      titleMs: "Lapisan Z-Index",
      description: "Control stacking order of positioned elements",
      descriptionMs: "Kawal susunan tindanan elemen yang diletakkan",
      html: `<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <span layout="absolute z:base left:0 top:10px" space="p:small" visual="bg:neutral-400 text:white rounded:small">z:base</span>
  <span layout="absolute z:low left:30px top:20px" space="p:small" visual="bg:neutral-500 text:white rounded:small">z:low</span>
  <span layout="absolute z:mid left:60px top:30px" space="p:small" visual="bg:neutral-600 text:white rounded:small">z:mid</span>
  <span layout="absolute z:high left:90px top:40px" space="p:small" visual="bg:primary text:white rounded:small">z:high</span>
</div>`,
      highlightValue: "z:high"
    }
  ]
};

// src/definitions/layout-utilities.js
var visibility = {
  name: "visibility",
  property: "layout",
  syntax: 'layout="[visibility-value]"',
  description: "Control element visibility",
  descriptionMs: "Kawal ketampakan elemen",
  category: "layout",
  values: [
    { value: "visible", css: "visibility: visible;", description: "Element is visible", descriptionMs: "Elemen kelihatan" },
    { value: "invisible", css: "visibility: hidden;", description: "Element is invisible but takes space", descriptionMs: "Elemen tidak kelihatan tetapi mengambil ruang" }
  ],
  examples: [
    { code: '<div layout="invisible">Invisible but present</div>', description: "Hide visually" }
  ],
  preview: [
    {
      title: "Visible vs Invisible",
      titleMs: "Kelihatan vs Tidak Kelihatan",
      description: "Invisible elements still take up space",
      descriptionMs: "Elemen tidak kelihatan masih mengambil ruang",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">Visible</span>
  <span layout="invisible" space="p:small" visual="bg:neutral-300 rounded:small">Invisible</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">Visible</span>
</div>`,
      highlightValue: "invisible"
    }
  ]
};
var overflow = {
  name: "overflow",
  property: "layout",
  syntax: 'layout="overflow:[value]"',
  description: "Control content overflow behavior",
  descriptionMs: "Kawal kelakuan limpahan kandungan",
  category: "layout",
  engine: { aliases: ["overflow-x", "overflow-y"], templates: { "overflow-x": "overflow-x: {value};", "overflow-y": "overflow-y: {value};" } },
  values: [
    { value: "auto", css: "overflow: auto;", description: "Scrollbar when needed", descriptionMs: "Bar skrol bila perlu" },
    { value: "hidden", css: "overflow: hidden;", description: "Hide overflow", descriptionMs: "Sembunyikan limpahan" },
    { value: "visible", css: "overflow: visible;", description: "Show overflow", descriptionMs: "Tunjukkan limpahan" },
    { value: "scroll", css: "overflow: scroll;", description: "Always show scrollbar", descriptionMs: "Sentiasa tunjuk bar skrol" },
    { value: "clip", css: "overflow: clip;", description: "Clip overflow", descriptionMs: "Potong limpahan" }
  ],
  examples: [
    { code: '<div layout="overflow:hidden">Clipped content</div>', description: "Hide overflow" },
    { code: '<div layout="overflow:auto">Scrollable</div>', description: "Auto scrollbar" }
  ],
  preview: [
    {
      title: "Overflow Hidden",
      titleMs: "Limpahan Tersembunyi",
      description: "Content clipped at container edge",
      descriptionMs: "Kandungan dipotong di tepi bekas",
      html: `<div layout="overflow:hidden" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px; width: 150px;">
  <p visual="text:neutral-800 dark:text:neutral-200">This is a long text that will be clipped because overflow is hidden.</p>
</div>`,
      highlightValue: "overflow:hidden"
    },
    {
      title: "Overflow Auto",
      titleMs: "Limpahan Auto",
      description: "Scrollbar appears when content overflows",
      descriptionMs: "Bar skrol muncul apabila kandungan melimpah",
      html: `<div layout="overflow:auto" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px; width: 150px;">
  <p visual="text:neutral-800 dark:text:neutral-200">This is a long text that will show a scrollbar because overflow is auto.</p>
</div>`,
      highlightValue: "overflow:auto"
    }
  ]
};
var boxSizing = {
  name: "box-sizing",
  property: "layout",
  syntax: 'layout="box:[value]"',
  description: "Control how width and height are calculated",
  descriptionMs: "Kawal cara lebar dan tinggi dikira",
  category: "layout",
  values: [
    { value: "border", css: "box-sizing: border-box;", description: "Include padding and border in size", descriptionMs: "Termasuk padding dan sempadan dalam saiz" },
    { value: "content", css: "box-sizing: content-box;", description: "Exclude padding and border", descriptionMs: "Tidak termasuk padding dan sempadan" }
  ],
  examples: [
    { code: '<div layout="box:border">Border box</div>', description: "Include border in width" }
  ],
  preview: [
    {
      title: "Border Box",
      titleMs: "Kotak Sempadan",
      description: "Padding and border included in width",
      descriptionMs: "Padding dan sempadan termasuk dalam lebar",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="box:border" space="p:medium" visual="bg:primary text:white border:4 border:white rounded:small" style="width: 100px;">box:border<br>100px</div>
</div>`,
      highlightValue: "box:border"
    }
  ]
};
var floatClear = {
  name: "float-clear",
  property: "layout",
  syntax: 'layout="float:[value]" or layout="clear:[value]"',
  description: "Control element floating and clearing",
  descriptionMs: "Kawal pengapungan dan pembersihan elemen",
  category: "layout",
  values: [
    { prefix: "float", value: "left", css: "float: left;", description: "Float left", descriptionMs: "Apung kiri" },
    { prefix: "float", value: "right", css: "float: right;", description: "Float right", descriptionMs: "Apung kanan" },
    { prefix: "float", value: "none", css: "float: none;", description: "No float", descriptionMs: "Tiada pengapungan" },
    { prefix: "clear", value: "left", css: "clear: left;", description: "Clear left floats", descriptionMs: "Kosongkan apung kiri" },
    { prefix: "clear", value: "right", css: "clear: right;", description: "Clear right floats", descriptionMs: "Kosongkan apung kanan" },
    { prefix: "clear", value: "both", css: "clear: both;", description: "Clear all floats", descriptionMs: "Kosongkan semua apung" },
    { prefix: "clear", value: "none", css: "clear: none;", description: "No clear", descriptionMs: "Tiada pembersihan" }
  ],
  examples: [
    { code: '<img layout="float:left">Float left</img>', description: "Float image left" },
    { code: '<div layout="clear:both">Clear floats</div>', description: "Clear all floats" }
  ],
  preview: [
    {
      title: "Float Left",
      titleMs: "Apung Kiri",
      description: "Element floats to the left of content",
      descriptionMs: "Elemen mengapung ke kiri kandungan",
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="float:left" space="p:small m-r:small m-b:small" visual="bg:primary text:white rounded:small">Float</div>
  <p visual="text:neutral-800 dark:text:neutral-200">Text wraps around the floated element naturally.</p>
</div>`,
      highlightValue: "float:left"
    }
  ]
};
var aspectRatio = {
  name: "aspect-ratio",
  property: "layout",
  syntax: 'layout="aspect:[value]"',
  description: "Set element aspect ratio",
  descriptionMs: "Tetapkan nisbah aspek elemen",
  category: "layout",
  supportsArbitrary: true,
  values: [
    { value: "auto", css: "aspect-ratio: auto;", description: "Natural aspect ratio", descriptionMs: "Nisbah aspek semula jadi" },
    { value: "square", css: "aspect-ratio: 1 / 1;", description: "1:1 square", descriptionMs: "Segi empat sama 1:1" },
    { value: "video", css: "aspect-ratio: 16 / 9;", description: "16:9 video", descriptionMs: "Video 16:9" }
  ],
  examples: [
    { code: '<div layout="aspect:square">Square</div>', description: "Square aspect ratio" },
    { code: '<div layout="aspect:[4/3]">4:3</div>', description: "Custom ratio" }
  ],
  preview: [
    {
      title: "Aspect Ratio Square",
      titleMs: "Nisbah Aspek Segi Empat",
      description: "1:1 aspect ratio",
      descriptionMs: "Nisbah aspek 1:1",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="aspect:square flex center" visual="bg:primary text:white rounded:small" style="width: 80px;">1:1</div>
  <div layout="aspect:video flex center" visual="bg:primary text:white rounded:small" style="width: 80px;">16:9</div>
</div>`,
      highlightValue: "aspect:square"
    }
  ]
};
var objectFit = {
  name: "object-fit",
  property: "layout",
  syntax: 'layout="object:[value]"',
  description: "Control how media content fits its container",
  descriptionMs: "Kawal bagaimana kandungan media muat dalam bekasnya",
  category: "layout",
  values: [
    { value: "contain", css: "object-fit: contain;", description: "Scale to fit, preserve ratio", descriptionMs: "Skala untuk muat, kekalkan nisbah" },
    { value: "cover", css: "object-fit: cover;", description: "Cover container, may crop", descriptionMs: "Tutup bekas, mungkin dipotong" },
    { value: "fill", css: "object-fit: fill;", description: "Stretch to fill", descriptionMs: "Regang untuk mengisi" },
    { value: "none", css: "object-fit: none;", description: "No scaling", descriptionMs: "Tiada penskalaan" },
    { value: "scale-down", css: "object-fit: scale-down;", description: "Smaller of none or contain", descriptionMs: "Lebih kecil antara tiada atau kandung" }
  ],
  examples: [
    { code: '<img layout="object:cover">Cover image</img>', description: "Cover fit" }
  ],
  preview: [
    {
      title: "Object Fit Cover",
      titleMs: "Objek Muat Tutup",
      description: "Image covers container, may crop",
      descriptionMs: "Imej menutup bekas, mungkin dipotong",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="width: 80px; height: 60px;" visual="bg:neutral-300 rounded:small" layout="overflow:hidden">
    <div layout="object:cover" style="width: 100%; height: 100%;" visual="bg:primary"></div>
  </div>
  <span layout="flex center" visual="text:neutral-600 dark:text:neutral-400">object:cover</span>
</div>`,
      highlightValue: "object:cover"
    },
    {
      title: "Object Fit Contain",
      titleMs: "Objek Muat Kandung",
      description: "Image fits inside, preserves ratio",
      descriptionMs: "Imej muat di dalam, kekalkan nisbah",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="width: 80px; height: 60px;" visual="bg:neutral-300 rounded:small" layout="flex center">
    <div layout="object:contain" style="width: 60%; height: 60%;" visual="bg:primary rounded:small"></div>
  </div>
  <span layout="flex center" visual="text:neutral-600 dark:text:neutral-400">object:contain</span>
</div>`,
      highlightValue: "object:contain"
    }
  ]
};
var objectPosition = {
  name: "object-position",
  property: "layout",
  syntax: 'layout="object-pos:[value]"',
  description: "Position replaced element content within container",
  descriptionMs: "Letakkan kandungan elemen diganti dalam bekas",
  category: "layout",
  engine: { passthrough: true },
  supportsArbitrary: true,
  values: [
    { value: "center", css: "object-position: center;", description: "Center position", descriptionMs: "Kedudukan tengah" },
    { value: "top", css: "object-position: top;", description: "Top position", descriptionMs: "Kedudukan atas" },
    { value: "bottom", css: "object-position: bottom;", description: "Bottom position", descriptionMs: "Kedudukan bawah" },
    { value: "left", css: "object-position: left;", description: "Left position", descriptionMs: "Kedudukan kiri" },
    { value: "right", css: "object-position: right;", description: "Right position", descriptionMs: "Kedudukan kanan" },
    { value: "top-left", css: "object-position: top left;", description: "Top left", descriptionMs: "Atas kiri" },
    { value: "top-right", css: "object-position: top right;", description: "Top right", descriptionMs: "Atas kanan" },
    { value: "bottom-left", css: "object-position: bottom left;", description: "Bottom left", descriptionMs: "Bawah kiri" },
    { value: "bottom-right", css: "object-position: bottom right;", description: "Bottom right", descriptionMs: "Bawah kanan" }
  ],
  examples: [
    { code: '<img layout="object:cover object-pos:top">Top positioned</img>', description: "Top position" }
  ],
  preview: [
    {
      title: "Object Position",
      titleMs: "Kedudukan Objek",
      description: "Control where media is positioned within container",
      descriptionMs: "Kawal di mana media diletakkan dalam bekas",
      html: `<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex items:start justify:center"><span space="p:tiny" visual="bg:primary text:white rounded:small">top</span></div>
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex center"><span space="p:tiny" visual="bg:primary text:white rounded:small">center</span></div>
  <div style="height: 50px;" visual="bg:neutral-300 rounded:small" layout="flex items:end justify:center"><span space="p:tiny" visual="bg:primary text:white rounded:small">bottom</span></div>
</div>`,
      highlightValue: "object-pos:center"
    }
  ]
};
var container = {
  name: "container",
  property: "layout",
  syntax: 'layout="container"',
  description: "Create a centered container with max-width",
  descriptionMs: "Cipta bekas berpusat dengan lebar maksimum",
  category: "layout",
  engine: {
    css: "width: 100%; margin-left: auto; margin-right: auto;",
    keywords: { container: "width: 100%; margin-left: auto; margin-right: auto;" },
    // Container queries (0.4.0): layout="container-type:inline container-name:sidebar" + @tab:/@tab/sidebar: variants
    utilities: {
      "container-type": { template: "container-type: {value};", literals: { inline: "inline-size", size: "size", normal: "normal" }, passthrough: true },
      "container-name": { template: "container-name: {value};", passthrough: true }
    }
  },
  values: [
    { value: "container", css: "width: 100%; margin-left: auto; margin-right: auto;", description: "Centered container", descriptionMs: "Bekas berpusat" }
  ],
  examples: [
    { code: '<div layout="container">Centered content</div>', description: "Container" }
  ],
  preview: [
    {
      title: "Container",
      titleMs: "Bekas",
      description: "Centered container with max-width",
      descriptionMs: "Bekas berpusat dengan lebar maksimum",
      html: `<div visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" space="p:small">
  <div layout="container text:center" space="p:medium" visual="bg:primary text:white rounded:small">Centered Container</div>
</div>`,
      highlightValue: "container"
    }
  ]
};
var isolation = {
  name: "isolation",
  property: "layout",
  syntax: 'layout="isolation:[value]"',
  description: "Create new stacking context",
  descriptionMs: "Cipta konteks tindanan baharu",
  category: "layout",
  values: [
    { value: "isolate", css: "isolation: isolate;", description: "Create stacking context", descriptionMs: "Cipta konteks tindanan" },
    { value: "auto", css: "isolation: auto;", description: "Auto isolation", descriptionMs: "Pengasingan automatik" }
  ],
  examples: [
    { code: '<div layout="isolation:isolate">Isolated</div>', description: "Create stacking context" }
  ],
  preview: [
    {
      title: "Isolation",
      titleMs: "Pengasingan",
      description: "Create new stacking context",
      descriptionMs: "Cipta konteks tindanan baharu",
      html: `<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="isolation:isolate" space="p:small" visual="bg:primary text:white rounded:small">isolation:isolate</div>
</div>`,
      highlightValue: "isolation:isolate"
    }
  ]
};
var overscroll = {
  name: "overscroll",
  property: "layout",
  syntax: 'layout="overscroll:[value]"',
  description: "Control scroll chaining behavior",
  descriptionMs: "Kawal kelakuan rantaian skrol",
  category: "layout",
  engine: { aliases: ["overscroll-x", "overscroll-y"], templates: { "overscroll-x": "overscroll-behavior-x: {value};", "overscroll-y": "overscroll-behavior-y: {value};" } },
  values: [
    { value: "auto", css: "overscroll-behavior: auto;", description: "Default behavior", descriptionMs: "Kelakuan lalai" },
    { value: "contain", css: "overscroll-behavior: contain;", description: "Contain scroll", descriptionMs: "Kandung skrol" },
    { value: "none", css: "overscroll-behavior: none;", description: "No scroll chaining", descriptionMs: "Tiada rantaian skrol" }
  ],
  examples: [
    { code: '<div layout="overscroll:contain">Contained scroll</div>', description: "Prevent scroll chaining" }
  ],
  preview: [
    {
      title: "Overscroll Contain",
      titleMs: "Kandungan Overscroll",
      description: "Prevent scroll from affecting parent",
      descriptionMs: "Halang skrol daripada mempengaruhi induk",
      html: `<div layout="overscroll:contain overflow:auto" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px;">
  <p visual="text:neutral-800 dark:text:neutral-200">Scroll here won't chain to parent. Content continues for demo purposes to show scrolling behavior.</p>
</div>`,
      highlightValue: "overscroll:contain"
    }
  ]
};
var columns = {
  name: "columns",
  property: "layout",
  syntax: 'layout="cols:[value]"',
  description: "Create multi-column layouts",
  descriptionMs: "Cipta susun atur berbilang lajur",
  category: "layout",
  dynamic: true,
  values: [
    { value: "1-12", css: "columns: {n};", description: "N columns", descriptionMs: "N lajur" },
    { value: "auto", css: "columns: auto;", description: "Auto columns", descriptionMs: "Lajur automatik" }
  ],
  examples: [
    { code: '<div layout="cols:3">Three columns</div>', description: "Three column text" }
  ],
  preview: [
    {
      title: "Multi-Column Layout",
      titleMs: "Susun Atur Berbilang Lajur",
      description: "Text flows into multiple columns",
      descriptionMs: "Teks mengalir ke berbilang lajur",
      html: `<div layout="cols:2" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p visual="text:neutral-800 dark:text:neutral-200">This text will automatically flow into two columns. Great for newspaper-style layouts and improving readability of long text content.</p>
</div>`,
      highlightValue: "cols:2"
    }
  ]
};

// src/definitions/layout-table.js
var borderCollapse = {
  name: "border-collapse",
  property: "layout",
  syntax: 'layout="[value]"',
  description: "Control table border collapse",
  descriptionMs: "Kawal runtuhan sempadan jadual",
  category: "layout",
  values: [
    { value: "collapse", css: "border-collapse: collapse;", description: "Collapse borders", descriptionMs: "Runtuhkan sempadan" },
    { value: "separate", css: "border-collapse: separate;", description: "Separate borders", descriptionMs: "Asingkan sempadan" }
  ],
  examples: [
    { code: '<table layout="collapse">Collapsed table</table>', description: "Collapse table borders" }
  ],
  preview: [
    {
      title: "Border Collapse",
      titleMs: "Runtuh Sempadan",
      description: "Table borders collapse into single lines",
      descriptionMs: "Sempadan jadual runtuh menjadi satu baris",
      html: `<table layout="collapse" visual="border:1 border:neutral-300 dark:border:neutral-700" style="width: 100%;">
  <tbody>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">A1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">B1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white">B2</td>
    </tr>
  </tbody>
</table>`,
      highlightValue: "collapse"
    },
    {
      title: "Border Separate",
      titleMs: "Asingkan Sempadan",
      description: "Table borders are separate (default)",
      descriptionMs: "Sempadan jadual diasingkan (lalai)",
      html: `<table layout="separate" visual="border:1 border:neutral-300 dark:border:neutral-700" style="width: 100%; border-spacing: 4px;">
  <tbody>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">A1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">B1</td>
      <td space="p:small" visual="border:1 border:neutral-300 dark:border:neutral-700 bg:primary text:white rounded:small">B2</td>
    </tr>
  </tbody>
</table>`,
      highlightValue: "separate"
    }
  ]
};
var borderSpacing = {
  name: "border-spacing",
  property: "layout",
  syntax: 'layout="border-spacing:[value]"',
  description: "Control spacing between table borders",
  descriptionMs: "Kawal jarak antara sempadan jadual",
  category: "layout",
  engine: {},
  usesScale: "spacing",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "border-spacing", css: "border-spacing: {value};", description: "All spacing", descriptionMs: "Semua jarak" },
    { value: "border-spacing-x", css: "border-spacing: {value} 0;", description: "Horizontal spacing", descriptionMs: "Jarak mendatar" },
    { value: "border-spacing-y", css: "border-spacing: 0 {value};", description: "Vertical spacing", descriptionMs: "Jarak menegak" }
  ],
  examples: [
    { code: '<table layout="border-separate border-spacing:small">Spaced</table>', description: "Spaced table borders" }
  ],
  preview: [
    {
      title: "Border Spacing",
      titleMs: "Jarak Sempadan",
      description: "Space between table cell borders",
      descriptionMs: "Jarak antara sempadan sel jadual",
      html: `<table layout="border:separate" style="width: 100%; border-spacing: 8px;">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">A1</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">A2</td>
    </tr>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">B1</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">B2</td>
    </tr>
  </tbody>
</table>`,
      highlightValue: "border-spacing:small"
    }
  ]
};
var tableLayout = {
  name: "table-layout",
  property: "layout",
  syntax: 'layout="table:[value]"',
  description: "Control table layout algorithm",
  descriptionMs: "Kawal algoritma susun atur jadual",
  category: "layout",
  values: [
    { value: "auto", css: "table-layout: auto;", description: "Auto layout", descriptionMs: "Susun atur automatik" },
    { value: "fixed", css: "table-layout: fixed;", description: "Fixed layout", descriptionMs: "Susun atur tetap" }
  ],
  examples: [
    { code: '<table layout="table:fixed">Fixed width columns</table>', description: "Fixed column widths" }
  ],
  preview: [
    {
      title: "Fixed Table Layout",
      titleMs: "Susun Atur Jadual Tetap",
      description: "Columns have fixed equal widths",
      descriptionMs: "Lajur mempunyai lebar tetap sama",
      html: `<table layout="table:fixed" style="width: 100%;" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white">Fixed</td>
      <td space="p:small" visual="bg:primary text:white">Column</td>
      <td space="p:small" visual="bg:primary text:white">Widths</td>
    </tr>
  </tbody>
</table>`,
      highlightValue: "table:fixed"
    },
    {
      title: "Auto Table Layout",
      titleMs: "Susun Atur Jadual Auto",
      description: "Columns adjust to content width",
      descriptionMs: "Lajur menyesuaikan dengan lebar kandungan",
      html: `<table layout="table:auto" style="width: 100%;" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white">Short</td>
      <td space="p:small" visual="bg:primary text:white">Much Longer Content Here</td>
      <td space="p:small" visual="bg:primary text:white">Med</td>
    </tr>
  </tbody>
</table>`,
      highlightValue: "table:auto"
    }
  ]
};
var captionSide = {
  name: "caption-side",
  property: "layout",
  syntax: 'layout="caption:[value]"',
  description: "Control table caption position",
  descriptionMs: "Kawal kedudukan kapsyen jadual",
  category: "layout",
  values: [
    { value: "top", css: "caption-side: top;", description: "Caption on top", descriptionMs: "Kapsyen di atas" },
    { value: "bottom", css: "caption-side: bottom;", description: "Caption on bottom", descriptionMs: "Kapsyen di bawah" }
  ],
  examples: [
    { code: '<caption layout="caption:bottom">Bottom caption</caption>', description: "Bottom caption" }
  ],
  preview: [
    {
      title: "Caption Top",
      titleMs: "Kapsyen Atas",
      description: "Table caption at the top",
      descriptionMs: "Kapsyen jadual di atas",
      html: `<table style="width: 100%;">
  <caption layout="caption:top" space="p:small" visual="text:neutral-600 dark:text:neutral-400">Table Caption (Top)</caption>
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
    </tr>
  </tbody>
</table>`,
      highlightValue: "caption:top"
    },
    {
      title: "Caption Bottom",
      titleMs: "Kapsyen Bawah",
      description: "Table caption at the bottom",
      descriptionMs: "Kapsyen jadual di bawah",
      html: `<table style="width: 100%;">
  <caption layout="caption:bottom" space="p:small" visual="text:neutral-600 dark:text:neutral-400">Table Caption (Bottom)</caption>
  <tbody>
    <tr>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
      <td space="p:small" visual="bg:primary text:white rounded:small">Data</td>
    </tr>
  </tbody>
</table>`,
      highlightValue: "caption:bottom"
    }
  ]
};

// src/definitions/layout.js
var layoutDefinitions = {
  // Flex
  display,
  flexDirection,
  flexWrap,
  flexItems,
  flexShorthand,
  flexBasis,
  order,
  // Alignment
  justifyContent,
  alignItems,
  alignSelf,
  alignContent,
  shorthandAlignment,
  justifyItems,
  justifySelf,
  placeContent,
  placeItems,
  placeSelf,
  // Grid
  gridColumns,
  gridRows,
  gridColSpan,
  gridRowSpan,
  gridAutoFlow,
  gridAutoSizing,
  // Positioning
  position,
  inset,
  zIndex,
  // Utilities
  visibility,
  overflow,
  boxSizing,
  floatClear,
  aspectRatio,
  objectFit,
  objectPosition,
  container,
  isolation,
  overscroll,
  columns,
  // Table
  borderCollapse,
  borderSpacing,
  tableLayout,
  captionSide
};
function buildLayoutMap(definitions = layoutDefinitions) {
  const map = {};
  for (const def of Object.values(definitions)) {
    if (def.dynamic) continue;
    if (!def.syntax || !def.syntax.includes('layout="[')) continue;
    for (const v of def.values) {
      if (v.value.match(/^\d+-\d+$/)) continue;
      map[v.value] = v.css;
    }
  }
  return map;
}
var layout_default = layoutDefinitions;

// src/definitions/space.js
var padding = {
  name: "padding",
  property: "space",
  syntax: 'space="p:[value]" or space="p-{side}:[value]"',
  description: "Add padding to elements",
  descriptionMs: "Tambah padding pada elemen",
  category: "space",
  usesScale: "spacing",
  values: [
    { property: "p", css: "padding: var(--s-{value});", description: "All sides", descriptionMs: "Semua sisi" },
    { property: "p-t", css: "padding-top: var(--s-{value});", description: "Top", descriptionMs: "Atas" },
    { property: "p-r", css: "padding-right: var(--s-{value});", description: "Right", descriptionMs: "Kanan" },
    { property: "p-b", css: "padding-bottom: var(--s-{value});", description: "Bottom", descriptionMs: "Bawah" },
    { property: "p-l", css: "padding-left: var(--s-{value});", description: "Left", descriptionMs: "Kiri" },
    { property: "p-x", css: "padding-left: var(--s-{value}); padding-right: var(--s-{value});", description: "Horizontal", descriptionMs: "Mendatar" },
    { property: "p-y", css: "padding-top: var(--s-{value}); padding-bottom: var(--s-{value});", description: "Vertical", descriptionMs: "Menegak" }
  ],
  scaleValues: [
    "none",
    "thin",
    "regular",
    "thick",
    "tiny",
    "tiny-2x",
    "small",
    "small-2x",
    "small-3x",
    "small-4x",
    "medium",
    "medium-2x",
    "medium-3x",
    "medium-4x",
    "large",
    "large-2x",
    "large-3x",
    "large-4x",
    "big",
    "big-2x",
    "big-3x",
    "big-4x",
    "giant",
    "giant-2x",
    "giant-3x",
    "giant-4x",
    "vast",
    "vast-2x",
    "vast-3x",
    "vast-4x",
    "vast-5x",
    "vast-6x",
    "vast-7x",
    "vast-8x",
    "vast-9x",
    "vast-10x"
  ],
  supportsArbitrary: true,
  examples: [
    { code: '<div space="p:medium">Padding all sides</div>', description: "Medium padding" },
    { code: '<div space="p-x:big p-y:small">Different padding</div>', description: "Axis padding" },
    { code: '<div space="p:[20px]">Custom padding</div>', description: "Arbitrary value" }
  ],
  preview: [
    {
      title: "Padding Scale",
      titleMs: "Skala Padding",
      description: "Different padding sizes from the scale",
      descriptionMs: "Saiz padding berbeza dari skala",
      html: `<div layout="flex" space="g:small">
  <div space="p:tiny" visual="bg:primary text:white rounded:small">tiny</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">small</div>
  <div space="p:medium" visual="bg:primary text:white rounded:small">medium</div>
  <div space="p:big" visual="bg:primary text:white rounded:small">big</div>
</div>`,
      highlightValue: "p:medium"
    },
    {
      title: "Directional Padding",
      titleMs: "Padding Arah",
      description: "Apply padding to specific sides",
      descriptionMs: "Padamkan padding pada sisi tertentu",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p-x:big p-y:small" visual="bg:primary text:white rounded:small">p-x:big p-y:small</div>
  <div space="p-t:big" visual="bg:primary text:white rounded:small">p-t:big</div>
</div>`,
      highlightValue: "p-x:big"
    }
  ],
  footnotes: [
    {
      title: "Tailwind Scale Support",
      titleMs: "Sokongan Skala Tailwind",
      content: "Use `tw-` prefix to access Tailwind numeric scale: `p:tw-4` (1rem), `p:tw-8` (2rem)",
      contentMs: "Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `p:tw-4` (1rem), `p:tw-8` (2rem)",
      link: "https://tailwindcss.com/docs/padding"
    }
  ]
};
var margin = {
  name: "margin",
  property: "space",
  syntax: 'space="m:[value]" or space="m-{side}:[value]" or space="m-{side}:-[value]"',
  engine: { literals: { auto: "auto" } },
  description: "Add margin to elements (prefix value with - for negative)",
  descriptionMs: "Tambah margin pada elemen (awali nilai dengan - untuk negatif)",
  category: "space",
  usesScale: "spacing",
  values: [
    { property: "m", css: "margin: var(--s-{value});", description: "All sides", descriptionMs: "Semua sisi" },
    { property: "m-t", css: "margin-top: var(--s-{value});", description: "Top", descriptionMs: "Atas" },
    { property: "m-r", css: "margin-right: var(--s-{value});", description: "Right", descriptionMs: "Kanan" },
    { property: "m-b", css: "margin-bottom: var(--s-{value});", description: "Bottom", descriptionMs: "Bawah" },
    { property: "m-l", css: "margin-left: var(--s-{value});", description: "Left", descriptionMs: "Kiri" },
    { property: "m-x", css: "margin-left: var(--s-{value}); margin-right: var(--s-{value});", description: "Horizontal", descriptionMs: "Mendatar" },
    { property: "m-y", css: "margin-top: var(--s-{value}); margin-bottom: var(--s-{value});", description: "Vertical", descriptionMs: "Menegak" }
  ],
  scaleValues: [
    "none",
    "thin",
    "regular",
    "thick",
    "tiny",
    "tiny-2x",
    "small",
    "small-2x",
    "small-3x",
    "small-4x",
    "medium",
    "medium-2x",
    "medium-3x",
    "medium-4x",
    "large",
    "large-2x",
    "large-3x",
    "large-4x",
    "big",
    "big-2x",
    "big-3x",
    "big-4x",
    "giant",
    "giant-2x",
    "giant-3x",
    "giant-4x",
    "vast",
    "vast-2x",
    "vast-3x",
    "vast-4x",
    "vast-5x",
    "vast-6x",
    "vast-7x",
    "vast-8x",
    "vast-9x",
    "vast-10x",
    "auto"
  ],
  supportsArbitrary: true,
  supportsNegative: true,
  examples: [
    { code: '<div space="m:medium">Margin all sides</div>', description: "Medium margin" },
    { code: '<div space="m-x:auto">Centered horizontally</div>', description: "Auto centering" },
    { code: '<div space="m-t:big">Top margin</div>', description: "Top margin only" },
    { code: '<div space="m-t:-small">Negative top margin</div>', description: "Negative top margin" },
    { code: '<div space="m-x:-medium">Negative horizontal margin</div>', description: "Negative horizontal margins" }
  ],
  preview: [
    {
      title: "Margin Scale",
      titleMs: "Skala Margin",
      description: "Different margin sizes from the scale",
      descriptionMs: "Saiz margin berbeza dari skala",
      html: `<div layout="flex col" space="g:tiny p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="m:tiny" visual="bg:primary text:white rounded:small">m:tiny</div>
  <div space="m:small" visual="bg:primary text:white rounded:small">m:small</div>
  <div space="m:medium" visual="bg:primary text:white rounded:small">m:medium</div>
</div>`,
      highlightValue: "m:medium"
    },
    {
      title: "Auto Centering",
      titleMs: "Tengah Automatik",
      description: "Use m-x:auto to center horizontally",
      descriptionMs: "Guna m-x:auto untuk tengahkan mendatar",
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="m-x:auto p:small" visual="bg:primary text:white rounded:small" style="width: fit-content;">m-x:auto</div>
</div>`,
      highlightValue: "m-x:auto"
    }
  ],
  footnotes: [
    {
      title: "Tailwind Scale Support",
      titleMs: "Sokongan Skala Tailwind",
      content: "Use `tw-` prefix to access Tailwind numeric scale: `m:tw-4` (1rem), `m-t:tw-8` (2rem)",
      contentMs: "Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `m:tw-4` (1rem), `m-t:tw-8` (2rem)",
      link: "https://tailwindcss.com/docs/margin"
    }
  ]
};
var gap = {
  name: "gap",
  property: "space",
  syntax: 'space="g:[value]" or space="g-{axis}:[value]"',
  description: "Add gap between flex/grid items",
  descriptionMs: "Tambah ruang antara item flex/grid",
  category: "space",
  usesScale: "spacing",
  values: [
    { property: "g", css: "gap: var(--s-{value});", description: "All gaps", descriptionMs: "Semua ruang" },
    { property: "g-x", css: "column-gap: var(--s-{value});", description: "Column gap", descriptionMs: "Ruang lajur" },
    { property: "g-y", css: "row-gap: var(--s-{value});", description: "Row gap", descriptionMs: "Ruang baris" }
  ],
  scaleValues: [
    "none",
    "thin",
    "regular",
    "thick",
    "tiny",
    "tiny-2x",
    "small",
    "small-2x",
    "small-3x",
    "small-4x",
    "medium",
    "medium-2x",
    "medium-3x",
    "medium-4x",
    "large",
    "large-2x",
    "large-3x",
    "large-4x",
    "big",
    "big-2x",
    "big-3x",
    "big-4x",
    "giant",
    "giant-2x",
    "giant-3x",
    "giant-4x",
    "vast",
    "vast-2x",
    "vast-3x",
    "vast-4x",
    "vast-5x",
    "vast-6x",
    "vast-7x",
    "vast-8x",
    "vast-9x",
    "vast-10x"
  ],
  supportsArbitrary: true,
  examples: [
    { code: '<div layout="flex" space="g:medium">Gap between items</div>', description: "Flex gap" },
    { code: '<div layout="grid" space="g-x:big g-y:small">Grid gaps</div>', description: "Different axis gaps" }
  ],
  preview: [
    {
      title: "Flex Gap",
      titleMs: "Gap Flex",
      description: "Space between flex items",
      descriptionMs: "Ruang antara item flex",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small">3</span>
</div>`,
      highlightValue: "g:medium"
    },
    {
      title: "Grid Gap",
      titleMs: "Gap Grid",
      description: "Space between grid items",
      descriptionMs: "Ruang antara item grid",
      html: `<div layout="grid grid-cols:3" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">4</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">5</span>
  <span space="p:small" visual="bg:primary text:white rounded:small" layout="text:center">6</span>
</div>`,
      highlightValue: "g:small"
    }
  ],
  footnotes: [
    {
      title: "Tailwind Scale Support",
      titleMs: "Sokongan Skala Tailwind",
      content: "Use `tw-` prefix to access Tailwind numeric scale: `g:tw-4` (1rem), `g:tw-8` (2rem)",
      contentMs: "Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `g:tw-4` (1rem), `g:tw-8` (2rem)",
      link: "https://tailwindcss.com/docs/gap"
    }
  ]
};
var width = {
  name: "width",
  property: "space",
  syntax: 'space="w:[value]"',
  engine: { literals: { min: "min-content", max: "max-content", fit: "fit-content", full: "100%", half: "50%", third: "33.333333%", "third-2x": "66.666667%", quarter: "25%", "quarter-2x": "50%", "quarter-3x": "75%", "1/1": "100%", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%" } },
  description: "Set element width",
  descriptionMs: "Tetapkan lebar elemen",
  category: "space",
  usesScale: "spacing",
  values: [
    { property: "w", css: "width: var(--s-{value});", description: "Width", descriptionMs: "Lebar" },
    { property: "min-w", css: "min-width: var(--s-{value});", description: "Minimum width", descriptionMs: "Lebar minimum" },
    { property: "max-w", css: "max-width: var(--s-{value});", description: "Maximum width", descriptionMs: "Lebar maksimum" }
  ],
  scaleValues: [
    "none",
    "thin",
    "regular",
    "thick",
    "tiny",
    "tiny-2x",
    "small",
    "small-2x",
    "small-3x",
    "small-4x",
    "medium",
    "medium-2x",
    "medium-3x",
    "medium-4x",
    "large",
    "large-2x",
    "large-3x",
    "large-4x",
    "big",
    "big-2x",
    "big-3x",
    "big-4x",
    "giant",
    "giant-2x",
    "giant-3x",
    "giant-4x",
    "vast",
    "vast-2x",
    "vast-3x",
    "vast-4x",
    "vast-5x",
    "vast-6x",
    "vast-7x",
    "vast-8x",
    "vast-9x",
    "vast-10x",
    "min",
    "max",
    "fit",
    // Percentage adjectives
    "full",
    "half",
    "third",
    "third-2x",
    "quarter",
    "quarter-3x",
    // Fractional values (backwards compatibility)
    "1/1",
    "1/2",
    "1/3",
    "2/3",
    "1/4",
    "2/4",
    "3/4"
  ],
  percentageAdjectives: [
    { name: "full", value: "100%", description: "Full width (100%)", descriptionMs: "Lebar penuh (100%)" },
    { name: "half", value: "50%", description: "Half width (50%)", descriptionMs: "Separuh lebar (50%)" },
    { name: "third", value: "33.333333%", description: "One third width (33%)", descriptionMs: "Satu pertiga lebar (33%)" },
    { name: "third-2x", value: "66.666667%", description: "Two thirds width (66%)", descriptionMs: "Dua pertiga lebar (66%)" },
    { name: "quarter", value: "25%", description: "One quarter width (25%)", descriptionMs: "Satu perempat lebar (25%)" },
    { name: "quarter-3x", value: "75%", description: "Three quarters width (75%)", descriptionMs: "Tiga perempat lebar (75%)" }
  ],
  supportsArbitrary: true,
  examples: [
    { code: '<div space="w:full">Full width</div>', description: "Full width" },
    { code: '<div space="w:half">Half width</div>', description: "Half width (50%)" },
    { code: '<div space="w:third">Third width</div>', description: "One third width (33%)" },
    { code: '<div space="w:quarter-3x">Three quarters</div>', description: "Three quarters width (75%)" },
    { code: '<div space="max-w:[1200px]">Max width container</div>', description: "Max width" },
    { code: '<div space="w:max">Content width</div>', description: "Width based on content (max-content)" }
  ],
  preview: [
    {
      title: "Width Control",
      titleMs: "Kawal Lebar",
      description: "Set fixed or percentage widths",
      descriptionMs: "Tetapkan lebar tetap atau peratusan",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="w:full p:small" visual="bg:primary text:white rounded:small">w:full</div>
  <div space="w:quarter-3x p:small" visual="bg:primary text:white rounded:small">w:quarter-3x</div>
  <div space="w:half p:small" visual="bg:primary text:white rounded:small">w:half</div>
</div>`,
      highlightValue: "w:full"
    },
    {
      title: "Content-Based Sizing",
      titleMs: "Saiz Berdasarkan Kandungan",
      description: "Use min, max, or fit for content-based sizing",
      descriptionMs: "Guna min, max, atau fit untuk saiz berdasarkan kandungan",
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="w:min p:small m-b:small" visual="bg:primary text:white rounded:small">w:min shrinks to minimum</div>
  <div space="w:max p:small m-b:small" visual="bg:pink-600 text:white rounded:small">w:max expands to fit all content without wrapping</div>
  <div space="w:fit p:small" visual="bg:green-600 text:white rounded:small">w:fit adapts to available space while respecting content</div>
</div>`,
      highlightValue: "w:max"
    },
    {
      title: "Max Width with Content Values",
      titleMs: "Lebar Maksimum dengan Nilai Kandungan",
      description: "Constrain maximum width using content values",
      descriptionMs: "Hadkan lebar maksimum menggunakan nilai kandungan",
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="max-w:min p:small m-b:small" visual="bg:primary text:white rounded:small">max-w:min - Text will wrap to minimum width needed</div>
  <div space="max-w:max p:small m-b:small" visual="bg:pink-600 text:white rounded:small">max-w:max - Expands to content</div>
  <div space="max-w:[200px] p:small" visual="bg:green-600 text:white rounded:small">max-w:[200px] - Fixed max</div>
</div>`,
      highlightValue: "max-w:min"
    }
  ],
  footnotes: [
    {
      title: "Tailwind Scale Support",
      titleMs: "Sokongan Skala Tailwind",
      content: "Use `tw-` prefix to access Tailwind numeric scale: `w:tw-64` (16rem), `max-w:tw-96` (24rem)",
      contentMs: "Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `w:tw-64` (16rem), `max-w:tw-96` (24rem)",
      link: "https://tailwindcss.com/docs/width"
    }
  ]
};
var height = {
  name: "height",
  property: "space",
  syntax: 'space="h:[value]"',
  engine: { literals: { min: "min-content", max: "max-content", fit: "fit-content", full: "100%", half: "50%", third: "33.333333%", "third-2x": "66.666667%", quarter: "25%", "quarter-2x": "50%", "quarter-3x": "75%", "1/1": "100%", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%" } },
  description: "Set element height",
  descriptionMs: "Tetapkan tinggi elemen",
  category: "space",
  usesScale: "spacing",
  values: [
    { property: "h", css: "height: var(--s-{value});", description: "Height", descriptionMs: "Tinggi" },
    { property: "min-h", css: "min-height: var(--s-{value});", description: "Minimum height", descriptionMs: "Tinggi minimum" },
    { property: "max-h", css: "max-height: var(--s-{value});", description: "Maximum height", descriptionMs: "Tinggi maksimum" }
  ],
  scaleValues: [
    "none",
    "thin",
    "regular",
    "thick",
    "tiny",
    "tiny-2x",
    "small",
    "small-2x",
    "small-3x",
    "small-4x",
    "medium",
    "medium-2x",
    "medium-3x",
    "medium-4x",
    "large",
    "large-2x",
    "large-3x",
    "large-4x",
    "big",
    "big-2x",
    "big-3x",
    "big-4x",
    "giant",
    "giant-2x",
    "giant-3x",
    "giant-4x",
    "vast",
    "vast-2x",
    "vast-3x",
    "vast-4x",
    "vast-5x",
    "vast-6x",
    "vast-7x",
    "vast-8x",
    "vast-9x",
    "vast-10x",
    "min",
    "max",
    "fit",
    // Percentage adjectives
    "full",
    "half",
    "third",
    "third-2x",
    "quarter",
    "quarter-3x",
    // Fractional values (backwards compatibility)
    "1/1",
    "1/2",
    "1/3",
    "2/3",
    "1/4",
    "2/4",
    "3/4"
  ],
  percentageAdjectives: [
    { name: "full", value: "100%", description: "Full height (100%)", descriptionMs: "Tinggi penuh (100%)" },
    { name: "half", value: "50%", description: "Half height (50%)", descriptionMs: "Separuh tinggi (50%)" },
    { name: "third", value: "33.333333%", description: "One third height (33%)", descriptionMs: "Satu pertiga tinggi (33%)" },
    { name: "third-2x", value: "66.666667%", description: "Two thirds height (66%)", descriptionMs: "Dua pertiga tinggi (66%)" },
    { name: "quarter", value: "25%", description: "One quarter height (25%)", descriptionMs: "Satu perempat tinggi (25%)" },
    { name: "quarter-3x", value: "75%", description: "Three quarters height (75%)", descriptionMs: "Tiga perempat tinggi (75%)" }
  ],
  supportsArbitrary: true,
  examples: [
    { code: '<div space="h:full">Full height</div>', description: "Full height" },
    { code: '<div space="h:half">Half height</div>', description: "Half height (50%)" },
    { code: '<div space="h:[100vh]">Full viewport height</div>', description: "Full viewport height" },
    { code: '<div space="min-h:[400px]">Min height</div>', description: "Minimum height" },
    { code: '<div space="h:max">Content height</div>', description: "Height based on content (max-content)" }
  ],
  preview: [
    {
      title: "Height Control",
      titleMs: "Kawal Tinggi",
      description: "Set fixed heights",
      descriptionMs: "Tetapkan tinggi tetap",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 120px;">
  <div space="h:full p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:full</div>
  <div space="h:third-2x p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:third-2x</div>
  <div space="h:half p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:half</div>
</div>`,
      highlightValue: "h:full"
    },
    {
      title: "Content-Based Height",
      titleMs: "Tinggi Berdasarkan Kandungan",
      description: "Use min, max, or fit for content-based height",
      descriptionMs: "Guna min, max, atau fit untuk tinggi berdasarkan kandungan",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="h:min p:small" visual="bg:primary text:white rounded:small">h:min</div>
  <div space="h:max p:small" visual="bg:pink-600 text:white rounded:small">h:max<br>Multi<br>Line</div>
  <div space="h:fit p:small" visual="bg:amber-600 text:white rounded:small">h:fit</div>
</div>`,
      highlightValue: "h:max"
    },
    {
      title: "Min/Max Height with Content Values",
      titleMs: "Tinggi Min/Max dengan Nilai Kandungan",
      description: "Constrain height using content values",
      descriptionMs: "Hadkan tinggi menggunakan nilai kandungan",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="min-h:min p:small" visual="bg:primary text:white rounded:small">min-h:min</div>
  <div space="max-h:max p:small" visual="bg:pink-600 text:white rounded:small">max-h:max</div>
  <div space="min-h:[80px] p:small" visual="bg:amber-600 text:white rounded:small" layout="flex center">min-h:[80px]</div>
</div>`,
      highlightValue: "min-h:min"
    }
  ],
  footnotes: [
    {
      title: "Tailwind Scale Support",
      titleMs: "Sokongan Skala Tailwind",
      content: "Use `tw-` prefix to access Tailwind numeric scale: `h:tw-64` (16rem), `min-h:tw-96` (24rem)",
      contentMs: "Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `h:tw-64` (16rem), `min-h:tw-96` (24rem)",
      link: "https://tailwindcss.com/docs/height"
    }
  ]
};
var size = {
  name: "size",
  property: "space",
  syntax: 'space="size:[value]"',
  engine: { literals: { min: "min-content", max: "max-content", fit: "fit-content", full: "100%", half: "50%", third: "33.333333%", "third-2x": "66.666667%", quarter: "25%", "quarter-2x": "50%", "quarter-3x": "75%", "1/1": "100%", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%" } },
  description: "Set width and height simultaneously",
  descriptionMs: "Tetapkan lebar dan tinggi serentak",
  category: "space",
  usesScale: "spacing",
  values: [
    { property: "size", css: "width: var(--s-{value}); height: var(--s-{value});", description: "Size (width + height)", descriptionMs: "Saiz (lebar + tinggi)" }
  ],
  scaleValues: [
    "none",
    "thin",
    "regular",
    "thick",
    "tiny",
    "tiny-2x",
    "small",
    "small-2x",
    "small-3x",
    "small-4x",
    "medium",
    "medium-2x",
    "medium-3x",
    "medium-4x",
    "large",
    "large-2x",
    "large-3x",
    "large-4x",
    "big",
    "big-2x",
    "big-3x",
    "big-4x",
    "giant",
    "giant-2x",
    "giant-3x",
    "giant-4x",
    "vast",
    "vast-2x",
    "vast-3x",
    "vast-4x",
    "vast-5x",
    "vast-6x",
    "vast-7x",
    "vast-8x",
    "vast-9x",
    "vast-10x",
    "min",
    "max",
    "fit",
    "full",
    "half",
    "third",
    "third-2x",
    "quarter",
    "quarter-3x",
    "1/1",
    "1/2",
    "1/3",
    "2/3",
    "1/4",
    "2/4",
    "3/4"
  ],
  percentageAdjectives: [
    { name: "full", value: "100%", description: "Full size (100%)", descriptionMs: "Saiz penuh (100%)" },
    { name: "half", value: "50%", description: "Half size (50%)", descriptionMs: "Separuh saiz (50%)" },
    { name: "third", value: "33.333333%", description: "One third size (33%)", descriptionMs: "Satu pertiga saiz (33%)" },
    { name: "third-2x", value: "66.666667%", description: "Two thirds size (66%)", descriptionMs: "Dua pertiga saiz (66%)" },
    { name: "quarter", value: "25%", description: "One quarter size (25%)", descriptionMs: "Satu perempat saiz (25%)" },
    { name: "quarter-3x", value: "75%", description: "Three quarters size (75%)", descriptionMs: "Tiga perempat saiz (75%)" }
  ],
  supportsArbitrary: true,
  examples: [
    { code: '<div space="size:medium">Square element</div>', description: "Square element with medium size (16px)" },
    { code: '<div space="size:full">Full width and height</div>', description: "Full width and height (100%)" },
    { code: '<div space="size:[200px]">Custom square size</div>', description: "Custom square size (200px)" }
  ],
  preview: [
    {
      title: "Size Shorthand",
      titleMs: "Singkatan Saiz",
      description: "Set both width and height with a single property",
      descriptionMs: "Tetapkan lebar dan tinggi dengan satu properti",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="size:medium p:small" visual="bg:primary text:white rounded:small" layout="flex items:center justify:center">size:medium</div>
  <div space="size:big p:small" visual="bg:pink-600 text:white rounded:small" layout="flex items:center justify:center">size:big</div>
</div>`,
      highlightValue: "size:medium"
    }
  ],
  footnotes: [
    {
      title: "Size vs Width/Height",
      titleMs: "Saiz vs Lebar/Tinggi",
      content: "Use `size` when you need identical width and height. For separate values, use `w` and `h` individually.",
      contentMs: "Guna `size` apabila anda perlukan lebar dan tinggi yang sama. Untuk nilai berasingan, guna `w` dan `h` secara individu."
    }
  ]
};
var spaceDefinitions = {
  padding,
  margin,
  gap,
  width,
  height,
  size
};
function buildSpacePropertyMap() {
  const map = {};
  for (const def of Object.values(spaceDefinitions)) {
    for (const v of def.values) {
      map[v.property] = v.css;
    }
  }
  return map;
}
var space_default = spaceDefinitions;

// src/definitions/visual.js
var backgroundColor = {
  name: "background-color",
  property: "visual",
  syntax: 'visual="bg:[color]/[opacity]"',
  engine: { template: "background-color: {value};" },
  description: "Set background color",
  descriptionMs: "Tetapkan warna latar belakang",
  category: "visual",
  usesScale: "colors",
  supportsArbitrary: true,
  values: [],
  // Uses color scale dynamically
  examples: [
    { code: '<div visual="bg:primary">Primary background</div>', description: "Theme color" },
    { code: '<div visual="bg:blue-500">Blue background</div>', description: "Palette color" },
    { code: '<div visual="bg:[#FF5733]">Custom color</div>', description: "Arbitrary color" },
    { code: '<div visual="bg:primary/50">50% opacity</div>', description: "With opacity modifier" }
  ],
  preview: [
    {
      title: "Background Color",
      titleMs: "Warna Latar Belakang",
      description: "Apply solid background colors from theme or palette",
      descriptionMs: "Terapkan warna latar pepejal dari tema atau palet",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">primary</div>
  <div space="p:small" visual="bg:secondary text:white rounded:small">secondary</div>
  <div space="p:small" visual="bg:success text:white rounded:small">success</div>
  <div space="p:small" visual="bg:warning text:black rounded:small">warning</div>
  <div space="p:small" visual="bg:danger text:white rounded:small">danger</div>
</div>`,
      highlightValue: "bg:primary"
    }
  ]
};
var textColor = {
  name: "text-color",
  property: "visual",
  syntax: 'visual="text:[color]/[opacity]"',
  engine: { template: "color: {value};" },
  description: "Set text color",
  descriptionMs: "Tetapkan warna teks",
  category: "visual",
  usesScale: "colors",
  supportsArbitrary: true,
  values: [],
  examples: [
    { code: '<div visual="text:white">White text</div>', description: "Theme color" },
    { code: '<div visual="text:blue-500">Blue text</div>', description: "Palette color" },
    { code: '<div visual="text:[#FF5733]">Custom color</div>', description: "Arbitrary color" },
    { code: '<div visual="text:primary/75">75% opacity text</div>', description: "With opacity modifier" }
  ],
  preview: [
    {
      title: "Text Color",
      titleMs: "Warna Teks",
      description: "Set text color from theme or palette",
      descriptionMs: "Tetapkan warna teks dari tema atau palet",
      html: `<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="text:primary">Primary</span>
  <span visual="text:secondary">Secondary</span>
  <span visual="text:success">Success</span>
  <span visual="text:danger">Danger</span>
</div>`,
      highlightValue: "text:primary"
    }
  ]
};
var fontSize = {
  name: "text-size",
  property: "visual",
  syntax: 'visual="text-size:[value]"',
  engine: { valuesAreExamples: true, template: "font-size: {value}; line-height: var(--font-lh-{key});", twTemplate: "font-size: {value}; line-height: var(--tw-leading-{key});", arbitraryTemplate: "font-size: {value};" },
  description: "Set font size",
  descriptionMs: "Tetapkan saiz fon",
  category: "visual",
  usesScale: "fontSize",
  supportsArbitrary: true,
  values: [
    { value: "mini", css: "font-size: var(--font-mini); line-height: var(--font-lh-mini);", description: "Mini size (0.75rem / 1rem)", descriptionMs: "Saiz mini (0.75rem / 1rem)" },
    { value: "small", css: "font-size: var(--font-small); line-height: var(--font-lh-small);", description: "Small size (0.875rem / 1.25rem)", descriptionMs: "Saiz kecil (0.875rem / 1.25rem)" },
    { value: "base", css: "font-size: var(--font-base); line-height: var(--font-lh-base);", description: "Base size (1rem / 1.5rem)", descriptionMs: "Saiz asas (1rem / 1.5rem)" },
    { value: "large", css: "font-size: var(--font-large); line-height: var(--font-lh-large);", description: "Large size (1.125rem / 1.75rem)", descriptionMs: "Saiz besar (1.125rem / 1.75rem)" },
    { value: "big", css: "font-size: var(--font-big); line-height: var(--font-lh-big);", description: "Big size (1.25rem / 1.75rem)", descriptionMs: "Saiz besar (1.25rem / 1.75rem)" },
    { value: "huge", css: "font-size: var(--font-huge); line-height: var(--font-lh-huge);", description: "Huge size (1.5rem / 2rem)", descriptionMs: "Saiz besar sekali (1.5rem / 2rem)" },
    { value: "grand", css: "font-size: var(--font-grand); line-height: var(--font-lh-grand);", description: "Grand size (1.875rem / 2.25rem)", descriptionMs: "Saiz agung (1.875rem / 2.25rem)" },
    { value: "giant", css: "font-size: var(--font-giant); line-height: var(--font-lh-giant);", description: "Giant size (2.25rem / 2.5rem)", descriptionMs: "Saiz gergasi (2.25rem / 2.5rem)" },
    { value: "mount", css: "font-size: var(--font-mount); line-height: var(--font-lh-mount);", description: "Mount size (3rem / 1)", descriptionMs: "Saiz gunung (3rem / 1)" },
    { value: "mega", css: "font-size: var(--font-mega); line-height: var(--font-lh-mega);", description: "Mega size (3.75rem / 1)", descriptionMs: "Saiz mega (3.75rem / 1)" },
    { value: "giga", css: "font-size: var(--font-giga); line-height: var(--font-lh-giga);", description: "Giga size (4.5rem / 1)", descriptionMs: "Saiz giga (4.5rem / 1)" },
    { value: "tera", css: "font-size: var(--font-tera); line-height: var(--font-lh-tera);", description: "Tera size (6rem / 1)", descriptionMs: "Saiz tera (6rem / 1)" },
    { value: "hero", css: "font-size: var(--font-hero); line-height: var(--font-lh-hero);", description: "Hero size (8rem / 1)", descriptionMs: "Saiz hero (8rem / 1)" }
  ],
  examples: [
    { code: '<div visual="text-size:big">Large text</div>', description: "Scale value" },
    { code: '<div visual="text-size:[24px]">24px text</div>', description: "Arbitrary" }
  ],
  footnotes: [
    {
      title: "Tailwind Scale Support",
      titleMs: "Sokongan Skala Tailwind",
      content: "Use `tw-` prefix to access Tailwind font scale: `text-size:tw-xl` (1.25rem), `text-size:tw-2xl` (1.5rem)",
      contentMs: "Gunakan awalan `tw-` untuk mengakses skala fon Tailwind: `text-size:tw-xl` (1.25rem), `text-size:tw-2xl` (1.5rem)",
      link: "https://tailwindcss.com/docs/font-size"
    }
  ],
  preview: [
    {
      title: "Font Size",
      titleMs: "Saiz Fon",
      description: "Scale text size with paired line-height",
      descriptionMs: "Skala saiz teks dengan ketinggian baris berpasangan",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="text-size:mini">mini (0.75rem / 1rem)</span>
  <span visual="text-size:small">small (0.875rem / 1.25rem)</span>
  <span visual="text-size:base">base (1rem / 1.5rem)</span>
  <span visual="text-size:big">big (1.25rem / 1.75rem)</span>
  <span visual="text-size:giant">giant (2.25rem / 2.5rem)</span>
</div>`,
      highlightValue: "text-size:big"
    }
  ]
};
var fontWeight = {
  name: "font-weight",
  property: "visual",
  syntax: 'visual="font:[weight]"',
  description: "Set font weight",
  descriptionMs: "Tetapkan berat fon",
  category: "visual",
  usesScale: "fontWeight",
  values: [
    { value: "normal", css: "font-weight: var(--fw-normal);", description: "Normal weight", descriptionMs: "Berat normal" },
    { value: "medium", css: "font-weight: var(--fw-medium);", description: "Medium weight", descriptionMs: "Berat sederhana" },
    { value: "bold", css: "font-weight: var(--fw-bold);", description: "Bold weight", descriptionMs: "Berat tebal" }
  ],
  examples: [
    { code: '<div visual="font:bold">Bold text</div>', description: "Bold weight" },
    { code: '<div visual="font:tw-semibold">Semibold text</div>', description: "Tailwind semibold" }
  ],
  footnotes: [
    {
      title: "Tailwind Scale Support",
      titleMs: "Sokongan Skala Tailwind",
      content: "Use `tw-` prefix to access Tailwind font weight scale: `font:tw-thin` (100), `font:tw-semibold` (600), `font:tw-extrabold` (800)",
      contentMs: "Gunakan awalan `tw-` untuk mengakses skala berat fon Tailwind: `font:tw-thin` (100), `font:tw-semibold` (600), `font:tw-extrabold` (800)",
      link: "https://tailwindcss.com/docs/font-weight"
    }
  ],
  preview: [
    {
      title: "Font Weight",
      titleMs: "Berat Fon",
      description: "Control text thickness",
      descriptionMs: "Kawal ketebalan teks",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="font:normal">normal</span>
  <span visual="font:medium">medium</span>
  <span visual="font:bold">bold</span>
</div>`,
      highlightValue: "font:bold"
    }
  ]
};
var fontFamily = {
  name: "font-family",
  property: "visual",
  syntax: 'visual="font:[family]"',
  description: "Set font family",
  descriptionMs: "Tetapkan keluarga fon",
  category: "visual",
  values: [
    { value: "sans", css: "font-family: ui-sans-serif, system-ui, sans-serif;", description: "Sans-serif", descriptionMs: "Sans-serif" },
    { value: "serif", css: "font-family: ui-serif, Georgia, serif;", description: "Serif", descriptionMs: "Serif" },
    { value: "mono", css: "font-family: ui-monospace, monospace;", description: "Monospace", descriptionMs: "Monospace" }
  ],
  examples: [
    { code: '<div visual="font:mono">Monospace text</div>', description: "Monospace font" }
  ],
  preview: [
    {
      title: "Font Family",
      titleMs: "Keluarga Fon",
      description: "Choose between sans, serif, or mono",
      descriptionMs: "Pilih antara sans, serif, atau mono",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="font:sans">Sans-serif font</span>
  <span visual="font:serif">Serif font</span>
  <span visual="font:mono">Monospace font</span>
</div>`,
      highlightValue: "font:sans"
    }
  ]
};
var typographyKeywords = {
  name: "typography-keywords",
  property: "visual",
  syntax: 'visual="[keyword]"',
  description: "Typography utility keywords (text-decoration-style only; other typography keywords are in their own definitions)",
  descriptionMs: "Kata kunci utiliti tipografi (hanya gaya hiasan teks; kata kunci tipografi lain ada dalam definisi masing-masing)",
  category: "visual",
  values: [
    // Text Decoration Style (not covered by textDecoration definition)
    { value: "decoration-solid", css: "text-decoration-style: solid;", description: "Solid line", descriptionMs: "Garisan pepejal" },
    { value: "decoration-double", css: "text-decoration-style: double;", description: "Double line", descriptionMs: "Garisan berganda" },
    { value: "decoration-dotted", css: "text-decoration-style: dotted;", description: "Dotted line", descriptionMs: "Garisan bertitik" },
    { value: "decoration-dashed", css: "text-decoration-style: dashed;", description: "Dashed line", descriptionMs: "Garisan putus-putus" },
    { value: "decoration-wavy", css: "text-decoration-style: wavy;", description: "Wavy line", descriptionMs: "Garisan bergelombang" }
  ],
  examples: [
    { code: '<span visual="underline decoration-dashed">Dashed underline</span>', description: "Decoration style" }
  ],
  preview: [
    {
      title: "Text Decoration Style",
      titleMs: "Gaya Hiasan Teks",
      description: "Set the style of text decoration lines",
      descriptionMs: "Tetapkan gaya garis hiasan teks",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration-solid">solid</span>
  <span visual="underline decoration-dashed">dashed</span>
  <span visual="underline decoration-dotted">dotted</span>
  <span visual="underline decoration-wavy">wavy</span>
</div>`,
      highlightValue: "decoration-dashed"
    }
  ]
};
var letterSpacing = {
  name: "letter-spacing",
  property: "visual",
  syntax: 'visual="tracking:[value]"',
  description: "Set letter spacing",
  descriptionMs: "Tetapkan jarak huruf",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "tighter", css: "letter-spacing: -0.05em;", description: "Tighter spacing", descriptionMs: "Jarak lebih ketat" },
    { value: "tight", css: "letter-spacing: -0.025em;", description: "Tight spacing", descriptionMs: "Jarak ketat" },
    { value: "normal", css: "letter-spacing: 0;", description: "Normal spacing", descriptionMs: "Jarak normal" },
    { value: "wide", css: "letter-spacing: 0.025em;", description: "Wide spacing", descriptionMs: "Jarak luas" },
    { value: "wider", css: "letter-spacing: 0.05em;", description: "Wider spacing", descriptionMs: "Jarak lebih luas" },
    { value: "widest", css: "letter-spacing: 0.1em;", description: "Widest spacing", descriptionMs: "Jarak paling luas" }
  ],
  examples: [
    { code: '<div visual="tracking:wide">Wide tracking</div>', description: "Wide" }
  ],
  preview: [
    {
      title: "Letter Spacing",
      titleMs: "Jarak Huruf",
      description: "Adjust spacing between characters",
      descriptionMs: "Laraskan jarak antara aksara",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="tracking:tighter">tighter spacing</span>
  <span visual="tracking:normal">normal spacing</span>
  <span visual="tracking:widest">widest spacing</span>
</div>`,
      highlightValue: "tracking:wide"
    }
  ]
};
var lineHeight = {
  name: "line-height",
  property: "visual",
  syntax: 'visual="leading:[value]"',
  description: "Set line height",
  descriptionMs: "Tetapkan ketinggian baris",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "line-height: 1;", description: "No extra height", descriptionMs: "Tiada ketinggian tambahan" },
    { value: "tight", css: "line-height: 1.25;", description: "Tight leading", descriptionMs: "Peneraju ketat" },
    { value: "snug", css: "line-height: 1.375;", description: "Snug leading", descriptionMs: "Peneraju ketat" },
    { value: "normal", css: "line-height: 1.5;", description: "Normal leading", descriptionMs: "Peneraju normal" },
    { value: "relaxed", css: "line-height: 1.625;", description: "Relaxed leading", descriptionMs: "Peneraju santai" },
    { value: "loose", css: "line-height: 2;", description: "Loose leading", descriptionMs: "Peneraju longgar" }
  ],
  examples: [
    { code: '<div visual="leading:relaxed">Relaxed line height</div>', description: "Relaxed" }
  ],
  preview: [
    {
      title: "Line Height",
      titleMs: "Ketinggian Baris",
      description: "Control vertical spacing between lines",
      descriptionMs: "Kawal jarak menegak antara baris",
      html: `<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p space="m:0" visual="leading:tight">Tight leading<br>for headings</p>
  <p space="m:0" visual="leading:normal">Normal leading<br>for body text</p>
  <p space="m:0" visual="leading:loose">Loose leading<br>for readability</p>
</div>`,
      highlightValue: "leading:relaxed"
    }
  ]
};
var borderRadius = {
  name: "border-radius",
  property: "visual",
  syntax: 'visual="rounded:[value]" | visual="rounded-{t|b|l|r|tl|tr|bl|br}:[value]"',
  engine: { templates: { "rounded": "border-radius: {value};", "rounded-t": "border-top-left-radius: {value}; border-top-right-radius: {value};", "rounded-b": "border-bottom-left-radius: {value}; border-bottom-right-radius: {value};", "rounded-l": "border-top-left-radius: {value}; border-bottom-left-radius: {value};", "rounded-r": "border-top-right-radius: {value}; border-bottom-right-radius: {value};", "rounded-tl": "border-top-left-radius: {value};", "rounded-tr": "border-top-right-radius: {value};", "rounded-bl": "border-bottom-left-radius: {value};", "rounded-br": "border-bottom-right-radius: {value};" } },
  description: "Set border radius for all corners or specific corners",
  descriptionMs: "Tetapkan jejari sempadan untuk semua bucu atau bucu tertentu",
  category: "visual",
  usesScale: "radius",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "border-radius: var(--r-none);", description: "No rounding", descriptionMs: "Tiada pembulatan" },
    { value: "small", css: "border-radius: var(--r-small);", description: "Small radius", descriptionMs: "Jejari kecil" },
    { value: "medium", css: "border-radius: var(--r-medium);", description: "Medium radius", descriptionMs: "Jejari sederhana" },
    { value: "big", css: "border-radius: var(--r-big);", description: "Large radius", descriptionMs: "Jejari besar" },
    { value: "round", css: "border-radius: var(--r-round);", description: "Fully round", descriptionMs: "Sepenuhnya bulat" }
  ],
  examples: [
    { code: '<div visual="rounded:medium">Rounded corners</div>', description: "All corners rounded" },
    { code: '<div visual="rounded:round">Pill shape</div>', description: "Fully round" },
    { code: '<div visual="rounded-t:medium">Top rounded</div>', description: "Top corners only" },
    { code: '<div visual="rounded-tl:big rounded-br:big">Opposite corners</div>', description: "Specific corners" }
  ],
  footnotes: [
    {
      title: "Tailwind Scale Support",
      titleMs: "Sokongan Skala Tailwind",
      content: "Use `tw-` prefix to access Tailwind radius scale: `rounded:tw-lg` (0.5rem), `rounded:tw-2xl` (1rem)",
      contentMs: "Gunakan awalan `tw-` untuk mengakses skala jejari Tailwind: `rounded:tw-lg` (0.5rem), `rounded:tw-2xl` (1rem)",
      link: "https://tailwindcss.com/docs/border-radius"
    }
  ],
  preview: [
    {
      title: "Border Radius",
      titleMs: "Jejari Sempadan",
      description: "Round element corners from subtle to pill-shaped",
      descriptionMs: "Bulatkan sudut elemen dari halus hingga berbentuk pil",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:none">none</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">small</div>
   <div space="p:small" visual="bg:primary text:white rounded:medium">medium</div>
   <div space="p:small" visual="bg:primary text:white rounded:round">round</div>
</div>`,
      highlightValue: "rounded:medium"
    },
    {
      title: "Directional Border Radius",
      titleMs: "Jejari Sempadan Arah",
      description: "Round specific corners for unique shapes",
      descriptionMs: "Bulatkan bucu tertentu untuk bentuk unik",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded-t:medium">top</div>
   <div space="p:small" visual="bg:primary text:white rounded-b:medium">bottom</div>
   <div space="p:small" visual="bg:primary text:white rounded-l:medium">left</div>
   <div space="p:small" visual="bg:primary text:white rounded-r:medium">right</div>
</div>`,
      highlightValue: "rounded-t:medium"
    }
  ]
};
var boxShadow = {
  name: "box-shadow",
  property: "visual",
  syntax: 'visual="shadow:[value]"',
  description: "Add box shadow",
  descriptionMs: "Tambah bayang kotak",
  category: "visual",
  usesScale: "shadow",
  values: [
    { value: "none", css: "box-shadow: var(--shadow-none);", description: "No shadow", descriptionMs: "Tiada bayang" },
    { value: "small", css: "box-shadow: var(--shadow-small);", description: "Small shadow", descriptionMs: "Bayang kecil" },
    { value: "medium", css: "box-shadow: var(--shadow-medium);", description: "Medium shadow", descriptionMs: "Bayang sederhana" },
    { value: "big", css: "box-shadow: var(--shadow-big);", description: "Large shadow", descriptionMs: "Bayang besar" },
    { value: "giant", css: "box-shadow: var(--shadow-giant);", description: "Giant shadow", descriptionMs: "Bayang gergasi" }
  ],
  examples: [
    { code: '<div visual="shadow:medium">Card with shadow</div>', description: "Medium shadow" }
  ],
  footnotes: [
    {
      title: "Tailwind Scale Support",
      titleMs: "Sokongan Skala Tailwind",
      content: "Use `tw-` prefix to access Tailwind shadow scale: `shadow:tw-md`, `shadow:tw-lg`, `shadow:tw-xl`",
      contentMs: "Gunakan awalan `tw-` untuk mengakses skala bayang Tailwind: `shadow:tw-md`, `shadow:tw-lg`, `shadow:tw-xl`",
      link: "https://tailwindcss.com/docs/box-shadow"
    }
  ],
  preview: [
    {
      title: "Box Shadow",
      titleMs: "Bayang Kotak",
      description: "Add elevation with shadows from subtle to dramatic",
      descriptionMs: "Tambah ketinggian dengan bayang dari halus hingga dramatik",
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:small">small</div>
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:medium">medium</div>
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:big">big</div>
</div>`,
      highlightValue: "shadow:medium"
    }
  ]
};
var opacity = {
  name: "opacity",
  property: "visual",
  syntax: 'visual="opacity:[value]"',
  description: "Set element opacity (0-100)",
  descriptionMs: "Tetapkan kelegapan elemen (0-100)",
  category: "visual",
  dynamic: true,
  supportsArbitrary: true,
  values: [
    { value: "0", css: "opacity: 0;", description: "Invisible", descriptionMs: "Tidak kelihatan" },
    { value: "25", css: "opacity: 0.25;", description: "25% visible", descriptionMs: "25% kelihatan" },
    { value: "50", css: "opacity: 0.5;", description: "50% visible", descriptionMs: "50% kelihatan" },
    { value: "75", css: "opacity: 0.75;", description: "75% visible", descriptionMs: "75% kelihatan" },
    { value: "100", css: "opacity: 1;", description: "Fully visible", descriptionMs: "Sepenuhnya kelihatan" }
  ],
  examples: [
    { code: '<div visual="opacity:50">Half visible</div>', description: "50% opacity" }
  ],
  preview: [
    {
      title: "Opacity",
      titleMs: "Kelegapan",
      description: "Control element transparency from invisible to fully visible",
      descriptionMs: "Kawal ketelusan elemen dari tidak kelihatan hingga sepenuhnya kelihatan",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small opacity:25">25%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small opacity:50">50%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small opacity:75">75%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small opacity:100">100%</div>
</div>`,
      highlightValue: "opacity:50"
    }
  ]
};
var blur = {
  name: "filter-blur",
  property: "visual",
  syntax: 'visual="blur:[value]"',
  engine: { scale: "blur", varPrefix: false, valuesAreExamples: true, template: "filter: blur({value});", enum: { none: "filter: none;" } },
  description: "Apply blur filter",
  descriptionMs: "Terapkan penapis kabur",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "filter: none;", description: "No blur", descriptionMs: "Tiada kabur" },
    { value: "tiny", css: "filter: blur(2px);", description: "Tiny blur", descriptionMs: "Kabur kecil" },
    { value: "small", css: "filter: blur(4px);", description: "Small blur", descriptionMs: "Kabur kecil" },
    { value: "medium", css: "filter: blur(8px);", description: "Medium blur", descriptionMs: "Kabur sederhana" },
    { value: "big", css: "filter: blur(12px);", description: "Large blur", descriptionMs: "Kabur besar" },
    { value: "giant", css: "filter: blur(24px);", description: "Giant blur", descriptionMs: "Kabur gergasi" },
    { value: "vast", css: "filter: blur(48px);", description: "Vast blur", descriptionMs: "Kabur luas" }
  ],
  examples: [
    { code: '<div visual="blur:medium">Blurred element</div>', description: "Medium blur" }
  ],
  preview: [
    {
      title: "Blur",
      titleMs: "Kabur",
      description: "Apply gaussian blur filter to an element",
      descriptionMs: "Terapkan penapis kabur gaussian pada elemen",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small blur:none">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small blur:tiny">tiny</div>
  <div space="p:small" visual="bg:primary text:white rounded:small blur:small">small</div>
</div>`,
      highlightValue: "blur:small"
    }
  ]
};
var cursor = {
  name: "cursor",
  property: "visual",
  syntax: 'visual="cursor:[value]"',
  description: "Set cursor style",
  descriptionMs: "Tetapkan gaya kursor",
  category: "visual",
  values: [
    { value: "auto", css: "cursor: auto;", description: "Auto cursor", descriptionMs: "Kursor automatik" },
    { value: "default", css: "cursor: default;", description: "Default cursor", descriptionMs: "Kursor lalai" },
    { value: "pointer", css: "cursor: pointer;", description: "Pointer cursor", descriptionMs: "Kursor penunjuk" },
    { value: "wait", css: "cursor: wait;", description: "Wait cursor", descriptionMs: "Kursor tunggu" },
    { value: "text", css: "cursor: text;", description: "Text cursor", descriptionMs: "Kursor teks" },
    { value: "move", css: "cursor: move;", description: "Move cursor", descriptionMs: "Kursor alih" },
    { value: "not-allowed", css: "cursor: not-allowed;", description: "Not allowed", descriptionMs: "Tidak dibenarkan" },
    { value: "grab", css: "cursor: grab;", description: "Grab cursor", descriptionMs: "Kursor genggam" },
    { value: "grabbing", css: "cursor: grabbing;", description: "Grabbing cursor", descriptionMs: "Kursor menggenggam" }
  ],
  examples: [
    { code: '<button visual="cursor:pointer">Clickable</button>', description: "Pointer cursor" }
  ],
  preview: [
    {
      title: "Cursor",
      titleMs: "Kursor",
      description: "Change mouse cursor on hover",
      descriptionMs: "Tukar kursor tetikus semasa hover",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small cursor:pointer">pointer</div>
  <div space="p:small" visual="bg:primary text:white rounded:small cursor:wait">wait</div>
  <div space="p:small" visual="bg:primary text:white rounded:small cursor:not-allowed">not-allowed</div>
</div>`,
      highlightValue: "cursor:pointer"
    }
  ]
};
var userSelect = {
  name: "user-select",
  property: "visual",
  syntax: 'visual="select:[value]"',
  description: "Control text selection",
  descriptionMs: "Kawal pemilihan teks",
  category: "visual",
  values: [
    { value: "none", css: "user-select: none;", description: "Prevent selection", descriptionMs: "Halang pemilihan" },
    { value: "text", css: "user-select: text;", description: "Allow text selection", descriptionMs: "Benarkan pemilihan teks" },
    { value: "all", css: "user-select: all;", description: "Select all on click", descriptionMs: "Pilih semua pada klik" },
    { value: "auto", css: "user-select: auto;", description: "Default behavior", descriptionMs: "Kelakuan lalai" }
  ],
  examples: [
    { code: '<div visual="select:none">Cannot select this text</div>', description: "Prevent selection" }
  ],
  preview: [
    {
      title: "User Select",
      titleMs: "Pemilihan Pengguna",
      description: "Control whether text can be selected",
      descriptionMs: "Kawal sama ada teks boleh dipilih",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small select:none">none (try select)</div>
  <div space="p:small" visual="bg:success text:white rounded:small select:all">all (click to select)</div>
</div>`,
      highlightValue: "select:none"
    }
  ]
};
var pointerEvents = {
  name: "pointer-events",
  property: "visual",
  syntax: 'visual="pointer-events:[value]"',
  description: "Control pointer events",
  descriptionMs: "Kawal peristiwa penunjuk",
  category: "visual",
  values: [
    { value: "none", css: "pointer-events: none;", description: "Ignore pointer events", descriptionMs: "Abaikan peristiwa penunjuk" },
    { value: "auto", css: "pointer-events: auto;", description: "Normal pointer events", descriptionMs: "Peristiwa penunjuk normal" }
  ],
  examples: [
    { code: '<div visual="pointer-events:none">Click through</div>', description: "Click through element" }
  ],
  preview: [
    {
      title: "Pointer Events",
      titleMs: "Peristiwa Penunjuk",
      description: "Make elements click-through or interactive",
      descriptionMs: "Jadikan elemen boleh klik tembus atau interaktif",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small pointer-events:auto">auto (clickable)</div>
  <div space="p:small" visual="bg:neutral-400 text:white rounded:small pointer-events:none">none (click-through)</div>
</div>`,
      highlightValue: "pointer-events:none"
    }
  ]
};
var mixBlendMode = {
  name: "blend-modes",
  property: "visual",
  syntax: 'visual="mix-blend:[value]"',
  description: "Set mix blend mode",
  descriptionMs: "Tetapkan mod campuran",
  category: "visual",
  values: [
    { value: "normal", css: "mix-blend-mode: normal;", description: "Normal blend", descriptionMs: "Campuran normal" },
    { value: "multiply", css: "mix-blend-mode: multiply;", description: "Multiply blend", descriptionMs: "Campuran darab" },
    { value: "screen", css: "mix-blend-mode: screen;", description: "Screen blend", descriptionMs: "Campuran skrin" },
    { value: "overlay", css: "mix-blend-mode: overlay;", description: "Overlay blend", descriptionMs: "Campuran tindanan" },
    { value: "darken", css: "mix-blend-mode: darken;", description: "Darken blend", descriptionMs: "Campuran gelap" },
    { value: "lighten", css: "mix-blend-mode: lighten;", description: "Lighten blend", descriptionMs: "Campuran cerah" }
  ],
  examples: [
    { code: '<div visual="mix-blend:multiply">Multiply blend</div>', description: "Multiply blend mode" }
  ],
  preview: [
    {
      title: "Mix Blend Mode",
      titleMs: "Mod Campuran",
      description: "Blend element with content behind it",
      descriptionMs: "Campurkan elemen dengan kandungan di belakangnya",
      html: `<div layout="flex" space="g:medium p:medium" visual="rounded:medium bg:gradient-red-orange">
  <div space="p:small" visual="bg:blue-500 text:white rounded:small mix-blend:multiply">multiply</div>
  <div space="p:small" visual="bg:blue-500 text:white rounded:small mix-blend:screen">screen</div>
</div>`,
      highlightValue: "mix-blend:multiply"
    }
  ]
};
var accentColor = {
  name: "accent-color",
  property: "visual",
  syntax: 'visual="accent:[color]/[opacity]"',
  engine: { template: "accent-color: {value};" },
  description: "Set accent color for form controls",
  descriptionMs: "Tetapkan warna aksen untuk kawalan borang",
  category: "visual",
  usesScale: "colors",
  supportsArbitrary: true,
  values: [],
  examples: [
    { code: '<input type="checkbox" visual="accent:primary">Primary accent</input>', description: "Primary accent" },
    { code: '<input type="checkbox" visual="accent:primary/50">50% opacity</input>', description: "With opacity modifier" }
  ],
  preview: [
    {
      title: "Accent Color",
      titleMs: "Warna Aksen",
      description: "Style native form controls (checkboxes, radios, range)",
      descriptionMs: "Gaya kawalan borang asli (kotak semak, radio, julat)",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="checkbox" checked visual="accent:primary w:[20px] h:[20px]">
  <input type="radio" checked visual="accent:success w:[20px] h:[20px]">
  <input type="range" visual="accent:secondary w:[100px]">
</div>`,
      highlightValue: "accent:primary"
    }
  ]
};
var caretColor = {
  name: "caret-color",
  property: "visual",
  syntax: 'visual="caret:[color]/[opacity]"',
  engine: { template: "caret-color: {value};" },
  description: "Set text input caret color",
  descriptionMs: "Tetapkan warna karet input teks",
  category: "visual",
  usesScale: "colors",
  supportsArbitrary: true,
  values: [],
  examples: [
    { code: '<input visual="caret:primary">', description: "Primary caret" }
  ],
  preview: [
    {
      title: "Caret Color",
      titleMs: "Warna Karet",
      description: "Style the text cursor in input fields",
      descriptionMs: "Gaya kursor teks dalam medan input",
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <input type="text" placeholder="Type here..." space="p:small" visual="caret:primary border:neutral-300 rounded:small">
</div>`,
      highlightValue: "caret:primary"
    }
  ]
};
var appearance = {
  name: "appearance",
  property: "visual",
  syntax: 'visual="appearance:[value]"',
  description: "Control native appearance",
  descriptionMs: "Kawal penampilan asli",
  category: "visual",
  values: [
    { value: "none", css: "appearance: none;", description: "Remove native styling", descriptionMs: "Buang gaya asli" },
    { value: "auto", css: "appearance: auto;", description: "Default appearance", descriptionMs: "Penampilan lalai" }
  ],
  examples: [
    { code: '<select visual="appearance:none">Custom select</select>', description: "Remove native styling" }
  ],
  preview: [
    {
      title: "Appearance",
      titleMs: "Penampilan",
      description: "Remove native browser styling from form elements",
      descriptionMs: "Buang gaya pelayar asli dari elemen borang",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <select space="p:tiny" visual="appearance:auto"><option>Native</option></select>
  <select space="p:tiny" visual="appearance:none bg:white border:neutral-300 rounded:small"><option>Custom</option></select>
</div>`,
      highlightValue: "appearance:none"
    }
  ]
};
var visualDefinitions = {
  backgroundColor,
  textColor,
  fontSize,
  fontWeight,
  fontFamily,
  typographyKeywords,
  letterSpacing,
  lineHeight,
  borderRadius,
  boxShadow,
  opacity,
  blur,
  cursor,
  userSelect,
  pointerEvents,
  mixBlendMode,
  accentColor,
  caretColor,
  appearance
};
function buildTypographyKeywordsMap(additionalDefinitions = []) {
  const map = {};
  for (const v of typographyKeywords.values) {
    map[v.value] = v.css;
  }
  for (const def of additionalDefinitions) {
    if (def && def.values && Array.isArray(def.values)) {
      for (const v of def.values) {
        if (v.value && v.css) {
          map[v.value] = v.css;
        }
      }
    }
  }
  return map;
}
var visual_default = visualDefinitions;

// src/definitions/visual-backgrounds.js
var backgroundImage = {
  name: "background-image",
  property: "visual",
  syntax: 'visual="bg-image:[value]"',
  engine: {
    arbitraryWrap: "url",
    enum: {
      "gradient-to-t": "background-image: linear-gradient(to top, var(--ss-gradient-stops, transparent));",
      "gradient-to-tr": "background-image: linear-gradient(to top right, var(--ss-gradient-stops, transparent));",
      "gradient-to-r": "background-image: linear-gradient(to right, var(--ss-gradient-stops, transparent));",
      "gradient-to-br": "background-image: linear-gradient(to bottom right, var(--ss-gradient-stops, transparent));",
      "gradient-to-b": "background-image: linear-gradient(to bottom, var(--ss-gradient-stops, transparent));",
      "gradient-to-bl": "background-image: linear-gradient(to bottom left, var(--ss-gradient-stops, transparent));",
      "gradient-to-l": "background-image: linear-gradient(to left, var(--ss-gradient-stops, transparent));",
      "gradient-to-tl": "background-image: linear-gradient(to top left, var(--ss-gradient-stops, transparent));",
      radial: "background-image: radial-gradient(var(--ss-gradient-stops, transparent));",
      conic: "background-image: conic-gradient(var(--ss-gradient-stops, transparent));"
    },
    // gradient-[45deg], gradient-[to_right_in_oklch], radial-[at_top], radial-[circle_at_center], conic-[from_90deg]
    patterns: [
      { re: "^gradient-\\[(.+)\\]$", template: "background-image: linear-gradient($1, var(--ss-gradient-stops, transparent));" },
      { re: "^radial-\\[(.+)\\]$", template: "background-image: radial-gradient($1, var(--ss-gradient-stops, transparent));" },
      { re: "^conic-\\[(.+)\\]$", template: "background-image: conic-gradient($1, var(--ss-gradient-stops, transparent));" }
    ]
  },
  description: "Set background image or gradient",
  descriptionMs: "Tetapkan imej latar atau gradien",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "background-image: none;", description: "No background image", descriptionMs: "Tiada imej latar" },
    { value: "gradient-to-t", css: "background-image: linear-gradient(to top, var(--tw-gradient-stops));", description: "Gradient to top", descriptionMs: "Gradien ke atas" },
    { value: "gradient-to-b", css: "background-image: linear-gradient(to bottom, var(--tw-gradient-stops));", description: "Gradient to bottom", descriptionMs: "Gradien ke bawah" },
    { value: "gradient-to-l", css: "background-image: linear-gradient(to left, var(--tw-gradient-stops));", description: "Gradient to left", descriptionMs: "Gradien ke kiri" },
    { value: "gradient-to-r", css: "background-image: linear-gradient(to right, var(--tw-gradient-stops));", description: "Gradient to right", descriptionMs: "Gradien ke kanan" }
  ],
  examples: [
    { code: '<div visual="bg-image:gradient-to-r">Gradient background</div>', description: "Right gradient" }
  ],
  preview: [
    {
      title: "Background Gradient",
      titleMs: "Gradien Latar",
      description: "Apply gradient backgrounds",
      descriptionMs: "Terapkan latar gradien",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:violet-500 text:white rounded:small">gradient-to-r</div>
  <div space="p:medium" visual="bg-image:gradient-to-b from:emerald-500 to:blue-500 text:white rounded:small">gradient-to-b</div>
</div>`,
      highlightValue: "bg-image:gradient-to-r"
    }
  ]
};
var backgroundAttachment = {
  name: "background-attachment",
  property: "visual",
  syntax: 'visual="bg-attachment:[value]"',
  description: "Set background attachment behavior",
  descriptionMs: "Tetapkan kelakuan lampiran latar",
  category: "visual",
  values: [
    { value: "fixed", css: "background-attachment: fixed;", description: "Fixed background", descriptionMs: "Latar tetap" },
    { value: "local", css: "background-attachment: local;", description: "Local scroll", descriptionMs: "Skrol tempatan" },
    { value: "scroll", css: "background-attachment: scroll;", description: "Scroll with page", descriptionMs: "Skrol dengan halaman" }
  ],
  examples: [
    { code: '<div visual="bg-attachment:fixed">Parallax effect</div>', description: "Fixed background" }
  ],
  preview: [
    {
      title: "Background Attachment",
      titleMs: "Lampiran Latar",
      description: "Control how background scrolls",
      descriptionMs: "Kawal cara latar skrol",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">fixed</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll</div>
</div>`,
      highlightValue: "bg-attachment:fixed"
    }
  ]
};
var backgroundClip = {
  name: "background-clip",
  property: "visual",
  syntax: 'visual="bg-clip:[value]"',
  description: "Set background clipping area",
  descriptionMs: "Tetapkan kawasan keratan latar",
  category: "visual",
  values: [
    { value: "border", css: "background-clip: border-box;", description: "Clip to border", descriptionMs: "Keratan ke sempadan" },
    { value: "padding", css: "background-clip: padding-box;", description: "Clip to padding", descriptionMs: "Keratan ke padding" },
    { value: "content", css: "background-clip: content-box;", description: "Clip to content", descriptionMs: "Keratan ke kandungan" },
    { value: "text", css: "background-clip: text; -webkit-background-clip: text;", description: "Clip to text", descriptionMs: "Keratan ke teks" }
  ],
  examples: [
    { code: '<div visual="bg-clip:text text:transparent bg:gradient">Gradient text</div>', description: "Gradient text effect" }
  ],
  preview: [
    {
      title: "Background Clip",
      titleMs: "Keratan Latar",
      description: "Clip background to text for gradient text effect",
      descriptionMs: "Keratan latar kepada teks untuk kesan teks gradien",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span text="size:large weight:bold" visual="bg-image:gradient-to-r from:blue-500 to:violet-500 bg-clip:text text:transparent">Gradient Text</span>
</div>`,
      highlightValue: "bg-clip:text"
    }
  ]
};
var backgroundOrigin = {
  name: "background-origin",
  property: "visual",
  syntax: 'visual="bg-origin:[value]"',
  description: "Set background positioning origin",
  descriptionMs: "Tetapkan asal kedudukan latar",
  category: "visual",
  values: [
    { value: "border", css: "background-origin: border-box;", description: "Origin at border", descriptionMs: "Asal di sempadan" },
    { value: "padding", css: "background-origin: padding-box;", description: "Origin at padding", descriptionMs: "Asal di padding" },
    { value: "content", css: "background-origin: content-box;", description: "Origin at content", descriptionMs: "Asal di kandungan" }
  ],
  examples: [
    { code: '<div visual="bg-origin:content">Content origin</div>', description: "Content box origin" }
  ],
  preview: [
    {
      title: "Background Origin",
      titleMs: "Asal Latar",
      description: "Set background positioning origin",
      descriptionMs: "Tetapkan asal kedudukan latar",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">border</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">padding</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
</div>`,
      highlightValue: "bg-origin:content"
    }
  ]
};
var backgroundPosition = {
  name: "background-position",
  property: "visual",
  syntax: 'visual="bg-pos:[value]"',
  engine: { aliases: ["bg-position"] },
  description: "Set background position",
  descriptionMs: "Tetapkan kedudukan latar",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "center", css: "background-position: center;", description: "Center position", descriptionMs: "Kedudukan tengah" },
    { value: "top", css: "background-position: top;", description: "Top position", descriptionMs: "Kedudukan atas" },
    { value: "bottom", css: "background-position: bottom;", description: "Bottom position", descriptionMs: "Kedudukan bawah" },
    { value: "left", css: "background-position: left;", description: "Left position", descriptionMs: "Kedudukan kiri" },
    { value: "right", css: "background-position: right;", description: "Right position", descriptionMs: "Kedudukan kanan" },
    { value: "top-left", css: "background-position: top left;", description: "Top left", descriptionMs: "Atas kiri" },
    { value: "top-right", css: "background-position: top right;", description: "Top right", descriptionMs: "Atas kanan" },
    { value: "bottom-left", css: "background-position: bottom left;", description: "Bottom left", descriptionMs: "Bawah kiri" },
    { value: "bottom-right", css: "background-position: bottom right;", description: "Bottom right", descriptionMs: "Bawah kanan" }
  ],
  examples: [
    { code: '<div visual="bg-pos:center">Centered background</div>', description: "Center position" }
  ],
  preview: [
    {
      title: "Background Position",
      titleMs: "Kedudukan Latar",
      description: "Position background image",
      descriptionMs: "Kedudukkan imej latar",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">top</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">bottom</div>
</div>`,
      highlightValue: "bg-pos:center"
    }
  ]
};
var backgroundRepeat = {
  name: "background-repeat",
  property: "visual",
  syntax: 'visual="bg-repeat:[value]"',
  description: "Set background repeat behavior",
  descriptionMs: "Tetapkan kelakuan ulangan latar",
  category: "visual",
  values: [
    { value: "repeat", css: "background-repeat: repeat;", description: "Repeat both axes", descriptionMs: "Ulang kedua-dua paksi" },
    { value: "no-repeat", css: "background-repeat: no-repeat;", description: "No repeat", descriptionMs: "Tiada ulangan" },
    { value: "repeat-x", css: "background-repeat: repeat-x;", description: "Repeat horizontally", descriptionMs: "Ulang mendatar" },
    { value: "repeat-y", css: "background-repeat: repeat-y;", description: "Repeat vertically", descriptionMs: "Ulang menegak" },
    { value: "round", css: "background-repeat: round;", description: "Round repeat", descriptionMs: "Ulang bulat" },
    { value: "space", css: "background-repeat: space;", description: "Spaced repeat", descriptionMs: "Ulang berjarak" }
  ],
  examples: [
    { code: '<div visual="bg-repeat:no-repeat">Single background</div>', description: "No repeat" }
  ],
  preview: [
    {
      title: "Background Repeat",
      titleMs: "Ulangan Latar",
      description: "Control background tiling",
      descriptionMs: "Kawal jubin latar",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">repeat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">no-repeat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">repeat-x</div>
</div>`,
      highlightValue: "bg-repeat:no-repeat"
    }
  ]
};
var backgroundSize = {
  name: "background-size",
  property: "visual",
  syntax: 'visual="bg-size:[value]"',
  description: "Set background size",
  descriptionMs: "Tetapkan saiz latar",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "auto", css: "background-size: auto;", description: "Original size", descriptionMs: "Saiz asal" },
    { value: "cover", css: "background-size: cover;", description: "Cover container", descriptionMs: "Tutup bekas" },
    { value: "contain", css: "background-size: contain;", description: "Contain in container", descriptionMs: "Kandung dalam bekas" }
  ],
  examples: [
    { code: '<div visual="bg-size:cover">Full coverage background</div>', description: "Cover background" }
  ],
  preview: [
    {
      title: "Background Size",
      titleMs: "Saiz Latar",
      description: "Scale background image",
      descriptionMs: "Skala imej latar",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">cover</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">contain</div>
</div>`,
      highlightValue: "bg-size:cover"
    }
  ]
};
var backgroundBlendMode = {
  name: "background-blend-mode",
  property: "visual",
  syntax: 'visual="bg-blend:[value]"',
  description: "Set background blend mode",
  descriptionMs: "Tetapkan mod campuran latar",
  category: "visual",
  values: [
    { value: "normal", css: "background-blend-mode: normal;", description: "Normal blend", descriptionMs: "Campuran normal" },
    { value: "multiply", css: "background-blend-mode: multiply;", description: "Multiply blend", descriptionMs: "Campuran darab" },
    { value: "screen", css: "background-blend-mode: screen;", description: "Screen blend", descriptionMs: "Campuran skrin" },
    { value: "overlay", css: "background-blend-mode: overlay;", description: "Overlay blend", descriptionMs: "Campuran tindanan" },
    { value: "darken", css: "background-blend-mode: darken;", description: "Darken blend", descriptionMs: "Campuran gelap" },
    { value: "lighten", css: "background-blend-mode: lighten;", description: "Lighten blend", descriptionMs: "Campuran cerah" }
  ],
  examples: [
    { code: '<div visual="bg-blend:multiply">Multiplied background</div>', description: "Multiply blend" }
  ],
  preview: [
    {
      title: "Background Blend Mode",
      titleMs: "Mod Campuran Latar",
      description: "Blend backgrounds together",
      descriptionMs: "Campurkan latar bersama",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">multiply</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">screen</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">overlay</div>
</div>`,
      highlightValue: "bg-blend:multiply"
    }
  ]
};
var backdropBlur = {
  name: "backdrop-blur",
  property: "visual",
  syntax: 'visual="backdrop-blur:[value]"',
  engine: { scale: "blur", varPrefix: false, valuesAreExamples: true, template: "backdrop-filter: blur({value});" },
  description: "Blur backdrop",
  descriptionMs: "Kaburkan latar belakang",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "backdrop-filter: blur(0);", description: "No blur", descriptionMs: "Tiada kabur" },
    { value: "tiny", css: "backdrop-filter: blur(2px);", description: "Tiny blur", descriptionMs: "Kabur kecil" },
    { value: "small", css: "backdrop-filter: blur(4px);", description: "Small blur", descriptionMs: "Kabur kecil" },
    { value: "medium", css: "backdrop-filter: blur(8px);", description: "Medium blur", descriptionMs: "Kabur sederhana" },
    { value: "big", css: "backdrop-filter: blur(12px);", description: "Large blur", descriptionMs: "Kabur besar" },
    { value: "giant", css: "backdrop-filter: blur(24px);", description: "Giant blur", descriptionMs: "Kabur gergasi" },
    { value: "vast", css: "backdrop-filter: blur(48px);", description: "Vast blur", descriptionMs: "Kabur luas" }
  ],
  examples: [
    { code: '<div visual="backdrop-blur:medium bg:[rgba(255,255,255,0.5)]">Frosted glass</div>', description: "Glassmorphism effect" }
  ],
  preview: [
    {
      title: "Backdrop Blur",
      titleMs: "Kabur Latar Belakang",
      description: "Creates a frosted glass effect on content behind the element",
      descriptionMs: "Mencipta kesan kaca beku pada kandungan di belakang elemen",
      html: `<div layout="flex:center" space="p:large" visual="bg-image:gradient-to-br from:blue-500 to:violet-500 rounded:medium">
  <div space="p:medium" visual="backdrop-blur:medium bg:[rgba(255,255,255,0.2)] rounded:small">
    <span visual="text:white">Frosted Glass</span>
  </div>
</div>`,
      highlightValue: "backdrop-blur:medium"
    }
  ]
};
var backdropBrightness = {
  name: "backdrop-brightness",
  property: "visual",
  syntax: 'visual="backdrop-brightness:[value]"',
  engine: { scale: "brightness", varPrefix: false, valuesAreExamples: true, template: "backdrop-filter: brightness({value});" },
  description: "Adjust backdrop brightness",
  descriptionMs: "Laraskan kecerahan latar belakang",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "dim", css: "backdrop-filter: brightness(0.5);", description: "50% brightness", descriptionMs: "50% kecerahan" },
    { value: "dark", css: "backdrop-filter: brightness(0.75);", description: "75% brightness", descriptionMs: "75% kecerahan" },
    { value: "normal", css: "backdrop-filter: brightness(1);", description: "Normal brightness", descriptionMs: "Kecerahan normal" },
    { value: "bright", css: "backdrop-filter: brightness(1.25);", description: "125% brightness", descriptionMs: "125% kecerahan" },
    { value: "vivid", css: "backdrop-filter: brightness(1.5);", description: "150% brightness", descriptionMs: "150% kecerahan" }
  ],
  examples: [
    { code: '<div visual="backdrop-brightness:dark">Darkened backdrop</div>', description: "Darken backdrop" }
  ],
  preview: [
    {
      title: "Backdrop Brightness",
      titleMs: "Kecerahan Latar Belakang",
      description: "Dim or brighten the backdrop behind an overlay",
      descriptionMs: "Redupkan atau cerahkan latar belakang di sebalik tindanan",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg-image:gradient-to-br from:orange-500 to:red-500 rounded:medium">
  <div space="p:small" visual="backdrop-brightness:dim rounded:small text:white">dim (50%)</div>
  <div space="p:small" visual="backdrop-brightness:normal rounded:small text:white">normal</div>
  <div space="p:small" visual="backdrop-brightness:vivid rounded:small text:white">bright (150%)</div>
</div>`,
      highlightValue: "backdrop-brightness:dark"
    }
  ]
};
var backdropContrast = {
  name: "backdrop-contrast",
  property: "visual",
  syntax: 'visual="backdrop-contrast:[value]"',
  engine: { scale: "contrast", varPrefix: false, valuesAreExamples: true, template: "backdrop-filter: contrast({value});" },
  description: "Adjust backdrop contrast",
  descriptionMs: "Laraskan kontras latar belakang",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "low", css: "backdrop-filter: contrast(0.5);", description: "Low contrast", descriptionMs: "Kontras rendah" },
    { value: "reduced", css: "backdrop-filter: contrast(0.75);", description: "Reduced contrast", descriptionMs: "Kontras dikurangkan" },
    { value: "normal", css: "backdrop-filter: contrast(1);", description: "Normal contrast", descriptionMs: "Kontras normal" },
    { value: "high", css: "backdrop-filter: contrast(1.25);", description: "High contrast", descriptionMs: "Kontras tinggi" },
    { value: "max", css: "backdrop-filter: contrast(1.5);", description: "Maximum contrast", descriptionMs: "Kontras maksimum" }
  ],
  examples: [
    { code: '<div visual="backdrop-contrast:high">High contrast backdrop</div>', description: "High contrast" }
  ],
  preview: [
    {
      title: "Backdrop Contrast",
      titleMs: "Kontras Latar Belakang",
      description: "Adjust contrast behind element",
      descriptionMs: "Laraskan kontras di belakang elemen",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">low</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">high</div>
</div>`,
      highlightValue: "backdrop-contrast:high"
    }
  ]
};
var backdropGrayscale = {
  name: "backdrop-grayscale",
  property: "visual",
  syntax: 'visual="backdrop-grayscale:[value]"',
  engine: { scale: "grayscale", varPrefix: false, valuesAreExamples: true, template: "backdrop-filter: grayscale({value});" },
  description: "Apply grayscale to backdrop",
  descriptionMs: "Terapkan skala kelabu pada latar belakang",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "backdrop-filter: grayscale(0%);", description: "No grayscale", descriptionMs: "Tiada skala kelabu" },
    { value: "partial", css: "backdrop-filter: grayscale(50%);", description: "50% grayscale", descriptionMs: "50% skala kelabu" },
    { value: "full", css: "backdrop-filter: grayscale(100%);", description: "Full grayscale", descriptionMs: "Skala kelabu penuh" }
  ],
  examples: [
    { code: '<div visual="backdrop-grayscale:full">Grayscale backdrop</div>', description: "Full grayscale" }
  ],
  preview: [
    {
      title: "Backdrop Grayscale",
      titleMs: "Skala Kelabu Latar Belakang",
      description: "Remove color from backdrop, creating a desaturated effect",
      descriptionMs: "Alih keluar warna dari latar belakang, mencipta kesan tidak tepu",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 rounded:small text:white">Original</div>
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 filter-grayscale:full rounded:small text:white">Grayscale</div>
</div>`,
      highlightValue: "backdrop-grayscale:full"
    }
  ]
};
var backdropHueRotate = {
  name: "backdrop-hue-rotate",
  property: "visual",
  syntax: 'visual="backdrop-hue-rotate:[degrees]"',
  description: "Rotate backdrop hue",
  descriptionMs: "Putar rona latar belakang",
  category: "visual",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "0", css: "backdrop-filter: hue-rotate(0deg);", description: "No rotation", descriptionMs: "Tiada putaran" },
    { value: "90", css: "backdrop-filter: hue-rotate(90deg);", description: "90\xB0 rotation", descriptionMs: "Putaran 90\xB0" },
    { value: "180", css: "backdrop-filter: hue-rotate(180deg);", description: "180\xB0 rotation", descriptionMs: "Putaran 180\xB0" }
  ],
  examples: [
    { code: '<div visual="backdrop-hue-rotate:90">Rotated hue backdrop</div>', description: "Rotate 90 degrees" }
  ],
  preview: [
    {
      title: "Backdrop Hue Rotate",
      titleMs: "Putaran Rona Latar Belakang",
      description: "Rotate colors behind element",
      descriptionMs: "Putar warna di belakang elemen",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0\xB0</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">90\xB0</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">180\xB0</div>
</div>`,
      highlightValue: "backdrop-hue-rotate:90"
    }
  ]
};
var backdropInvert = {
  name: "backdrop-invert",
  property: "visual",
  syntax: 'visual="backdrop-invert:[value]"',
  engine: { scale: "invert", varPrefix: false, valuesAreExamples: true, template: "backdrop-filter: invert({value});" },
  description: "Invert backdrop colors",
  descriptionMs: "Songsangkan warna latar belakang",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "backdrop-filter: invert(0%);", description: "No inversion", descriptionMs: "Tiada penyongsangan" },
    { value: "partial", css: "backdrop-filter: invert(50%);", description: "50% inversion", descriptionMs: "50% penyongsangan" },
    { value: "full", css: "backdrop-filter: invert(100%);", description: "Full inversion", descriptionMs: "Penyongsangan penuh" }
  ],
  examples: [
    { code: '<div visual="backdrop-invert:full">Inverted backdrop</div>', description: "Full inversion" }
  ],
  preview: [
    {
      title: "Backdrop Invert",
      titleMs: "Songsang Latar Belakang",
      description: "Invert colors behind element",
      descriptionMs: "Songsangkan warna di belakang elemen",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">full</div>
</div>`,
      highlightValue: "backdrop-invert:full"
    }
  ]
};
var backdropOpacity = {
  name: "backdrop-opacity",
  property: "visual",
  syntax: 'visual="backdrop-opacity:[value]"',
  engine: { scale: "backdropOpacity", varPrefix: false },
  description: "Set backdrop opacity",
  descriptionMs: "Tetapkan kelegapan latar belakang",
  category: "visual",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "0", css: "backdrop-filter: opacity(0);", description: "Transparent", descriptionMs: "Lutsinar" },
    { value: "50", css: "backdrop-filter: opacity(0.5);", description: "50% opacity", descriptionMs: "50% kelegapan" },
    { value: "100", css: "backdrop-filter: opacity(1);", description: "Fully opaque", descriptionMs: "Sepenuhnya legap" }
  ],
  examples: [
    { code: '<div visual="backdrop-opacity:50">Semi-transparent backdrop</div>', description: "50% opacity" }
  ],
  preview: [
    {
      title: "Backdrop Opacity",
      titleMs: "Kelegapan Latar Belakang",
      description: "Control backdrop transparency",
      descriptionMs: "Kawal ketelusan latar belakang",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">50</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">100</div>
</div>`,
      highlightValue: "backdrop-opacity:50"
    }
  ]
};
var backdropSaturate = {
  name: "backdrop-saturate",
  property: "visual",
  syntax: 'visual="backdrop-saturate:[value]"',
  engine: { scale: "saturate", varPrefix: false, valuesAreExamples: true, template: "backdrop-filter: saturate({value});" },
  description: "Adjust backdrop saturation",
  descriptionMs: "Laraskan ketepuan latar belakang",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "backdrop-filter: saturate(0);", description: "Desaturated", descriptionMs: "Tidak tepu" },
    { value: "low", css: "backdrop-filter: saturate(0.5);", description: "Low saturation", descriptionMs: "Ketepuan rendah" },
    { value: "normal", css: "backdrop-filter: saturate(1);", description: "Normal saturation", descriptionMs: "Ketepuan normal" },
    { value: "high", css: "backdrop-filter: saturate(1.5);", description: "High saturation", descriptionMs: "Ketepuan tinggi" },
    { value: "vivid", css: "backdrop-filter: saturate(2);", description: "Very saturated", descriptionMs: "Sangat tepu" }
  ],
  examples: [
    { code: '<div visual="backdrop-saturate:vivid">Vivid backdrop</div>', description: "High saturation" }
  ],
  preview: [
    {
      title: "Backdrop Saturate",
      titleMs: "Ketepuan Latar Belakang",
      description: "Adjust saturation behind element",
      descriptionMs: "Laraskan ketepuan di belakang elemen",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">vivid</div>
</div>`,
      highlightValue: "backdrop-saturate:vivid"
    }
  ]
};
var backdropSepia = {
  name: "backdrop-sepia",
  property: "visual",
  syntax: 'visual="backdrop-sepia:[value]"',
  engine: { scale: "sepia", varPrefix: false, valuesAreExamples: true, template: "backdrop-filter: sepia({value});" },
  description: "Apply sepia to backdrop",
  descriptionMs: "Terapkan sepia pada latar belakang",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "backdrop-filter: sepia(0%);", description: "No sepia", descriptionMs: "Tiada sepia" },
    { value: "partial", css: "backdrop-filter: sepia(50%);", description: "50% sepia", descriptionMs: "50% sepia" },
    { value: "full", css: "backdrop-filter: sepia(100%);", description: "Full sepia", descriptionMs: "Sepia penuh" }
  ],
  examples: [
    { code: '<div visual="backdrop-sepia:full">Vintage backdrop</div>', description: "Full sepia" }
  ],
  preview: [
    {
      title: "Backdrop Sepia",
      titleMs: "Sepia Latar Belakang",
      description: "Apply vintage sepia tone to the backdrop",
      descriptionMs: "Terapkan ton sepia vintaj pada latar belakang",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 rounded:small text:white">Original</div>
  <div space="p:small" visual="bg-image:gradient-to-br from:blue-500 to:emerald-500 filter-sepia:full rounded:small text:white">Sepia</div>
</div>`,
      highlightValue: "backdrop-sepia:full"
    }
  ]
};
var gradientFrom = {
  name: "gradient-from",
  property: "visual",
  syntax: 'visual="from:[color]/[opacity]"',
  engine: { valuesAreExamples: true, template: "--ss-gradient-from: {value}; --ss-gradient-stops: var(--ss-gradient-via-stops, var(--ss-gradient-from) var(--ss-gradient-from-position, 0%), var(--ss-gradient-to, transparent) var(--ss-gradient-to-position, 100%));", utilities: { "from-pos": { template: "--ss-gradient-from-position: {value};", scale: null, numeric: { unit: "%" }, arbitrary: true } } },
  description: "Set gradient start color",
  descriptionMs: "Tetapkan warna mula gradien",
  category: "visual",
  usesScale: "colors",
  supportsArbitrary: true,
  values: [
    { value: "primary", css: "--tw-gradient-from: var(--c-primary); --tw-gradient-to: transparent; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);", description: "Start from primary", descriptionMs: "Mula dari utama" },
    { value: "blue-500", css: "--tw-gradient-from: var(--c-blue-500); --tw-gradient-to: transparent; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);", description: "Start from blue", descriptionMs: "Mula dari biru" }
  ],
  examples: [
    { code: '<div visual="bg-image:gradient-to-r from:blue-500 to:purple-500">Gradient</div>', description: "Blue to purple gradient" }
  ],
  preview: [
    {
      title: "Gradient From",
      titleMs: "Mula Gradien",
      description: "Set the starting color of a gradient",
      descriptionMs: "Tetapkan warna permulaan gradien",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:purple-500 text:white rounded:small">from:blue-500 to:purple-500</div>
  <div space="p:medium" visual="bg-image:gradient-to-r from:emerald-500 to:blue-500 text:white rounded:small">from:emerald-500 to:blue-500</div>
</div>`,
      highlightValue: "from:blue-500"
    }
  ]
};
var gradientVia = {
  name: "gradient-via",
  property: "visual",
  syntax: 'visual="via:[color]/[opacity]"',
  engine: { valuesAreExamples: true, template: "--ss-gradient-via: {value}; --ss-gradient-via-stops: var(--ss-gradient-from, transparent) var(--ss-gradient-from-position, 0%), var(--ss-gradient-via) var(--ss-gradient-via-position, 50%), var(--ss-gradient-to, transparent) var(--ss-gradient-to-position, 100%); --ss-gradient-stops: var(--ss-gradient-via-stops);", utilities: { "via-pos": { template: "--ss-gradient-via-position: {value};", scale: null, numeric: { unit: "%" }, arbitrary: true } } },
  description: "Set gradient middle color",
  descriptionMs: "Tetapkan warna tengah gradien",
  category: "visual",
  usesScale: "colors",
  supportsArbitrary: true,
  values: [
    { value: "purple-500", css: "--tw-gradient-via: var(--c-purple-500); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to);", description: "Via purple", descriptionMs: "Melalui ungu" }
  ],
  examples: [
    { code: '<div visual="bg-image:gradient-to-r from:blue-500 via:purple-500 to:pink-500">Three-color gradient</div>', description: "Three-color gradient" }
  ],
  preview: [
    {
      title: "Gradient Via",
      titleMs: "Pertengahan Gradien",
      description: "Add a middle color stop to gradients",
      descriptionMs: "Tambah hentian warna tengah pada gradien",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 via:purple-500 to:pink-500 text:white rounded:small">from:blue via:purple to:pink</div>
</div>`,
      highlightValue: "via:purple-500"
    }
  ]
};
var gradientTo = {
  name: "gradient-to",
  property: "visual",
  syntax: 'visual="to:[color]/[opacity]"',
  engine: { valuesAreExamples: true, template: "--ss-gradient-to: {value}; --ss-gradient-stops: var(--ss-gradient-via-stops, var(--ss-gradient-from, transparent) var(--ss-gradient-from-position, 0%), var(--ss-gradient-to) var(--ss-gradient-to-position, 100%));", utilities: { "to-pos": { template: "--ss-gradient-to-position: {value};", scale: null, numeric: { unit: "%" }, arbitrary: true } } },
  description: "Set gradient end color",
  descriptionMs: "Tetapkan warna akhir gradien",
  category: "visual",
  usesScale: "colors",
  supportsArbitrary: true,
  values: [
    { value: "purple-500", css: "--tw-gradient-to: var(--c-purple-500);", description: "End at purple", descriptionMs: "Akhir di ungu" },
    { value: "pink-500", css: "--tw-gradient-to: var(--c-pink-500);", description: "End at pink", descriptionMs: "Akhir di merah jambu" }
  ],
  examples: [
    { code: '<div visual="bg-image:gradient-to-r from:blue-500 to:purple-500">Blue to purple</div>', description: "End color" }
  ],
  preview: [
    {
      title: "Gradient To",
      titleMs: "Akhir Gradien",
      description: "Set the ending color of a gradient",
      descriptionMs: "Tetapkan warna pengakhiran gradien",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:purple-500 text:white rounded:small">to:purple-500</div>
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:pink-500 text:white rounded:small">to:pink-500</div>
</div>`,
      highlightValue: "to:purple-500"
    }
  ]
};
var backgroundDefinitions = {
  backgroundImage,
  backgroundAttachment,
  backgroundClip,
  backgroundOrigin,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  backgroundBlendMode,
  gradientFrom,
  gradientVia,
  gradientTo,
  backdropBlur,
  backdropBrightness,
  backdropContrast,
  backdropGrayscale,
  backdropHueRotate,
  backdropInvert,
  backdropOpacity,
  backdropSaturate,
  backdropSepia
};
var visual_backgrounds_default = backgroundDefinitions;

// src/definitions/visual-interactivity.js
var scrollBehavior = {
  name: "scroll-behavior",
  property: "visual",
  syntax: 'visual="scroll-behavior:[value]"',
  engine: { aliases: ["scroll"] },
  description: "Set scroll behavior",
  descriptionMs: "Tetapkan kelakuan skrol",
  category: "visual",
  values: [
    { value: "auto", css: "scroll-behavior: auto;", description: "Instant scroll", descriptionMs: "Skrol serta-merta" },
    { value: "smooth", css: "scroll-behavior: smooth;", description: "Smooth scroll", descriptionMs: "Skrol lancar" }
  ],
  examples: [
    { code: '<html visual="scroll-behavior:smooth">Smooth scrolling</html>', description: "Smooth scroll" }
  ],
  preview: [
    {
      title: "Scroll Behavior",
      titleMs: "Kelakuan Skrol",
      description: "Smooth or instant scrolling",
      descriptionMs: "Skrol lancar atau serta-merta",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">smooth</div>
</div>`,
      highlightValue: "scroll-behavior:smooth"
    }
  ]
};
var scrollMargin = {
  name: "scroll-margin",
  property: "visual",
  syntax: 'visual="scroll-m:[value]"',
  engine: { utilities: { "scroll-m-x": { template: "scroll-margin-left: {value}; scroll-margin-right: {value};" }, "scroll-m-y": { template: "scroll-margin-top: {value}; scroll-margin-bottom: {value};" } } },
  description: "Set scroll margin for snap",
  descriptionMs: "Tetapkan margin skrol untuk snap",
  category: "visual",
  usesScale: "spacing",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "scroll-m", css: "scroll-margin: var(--s-{value});", description: "All sides", descriptionMs: "Semua sisi" },
    { value: "scroll-m-t", css: "scroll-margin-top: var(--s-{value});", description: "Top margin", descriptionMs: "Margin atas" },
    { value: "scroll-m-r", css: "scroll-margin-right: var(--s-{value});", description: "Right margin", descriptionMs: "Margin kanan" },
    { value: "scroll-m-b", css: "scroll-margin-bottom: var(--s-{value});", description: "Bottom margin", descriptionMs: "Margin bawah" },
    { value: "scroll-m-l", css: "scroll-margin-left: var(--s-{value});", description: "Left margin", descriptionMs: "Margin kiri" }
  ],
  examples: [
    { code: '<div visual="scroll-m:medium">Scroll margin</div>', description: "Scroll margin" }
  ],
  preview: [
    {
      title: "Scroll Margin",
      titleMs: "Margin Skrol",
      description: "Offset for scroll snap",
      descriptionMs: "Offset untuk snap skrol",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll-m:medium</div>
</div>`,
      highlightValue: "scroll-m:medium"
    }
  ]
};
var scrollPadding = {
  name: "scroll-padding",
  property: "visual",
  syntax: 'visual="scroll-p:[value]"',
  engine: { utilities: { "scroll-p-x": { template: "scroll-padding-left: {value}; scroll-padding-right: {value};" }, "scroll-p-y": { template: "scroll-padding-top: {value}; scroll-padding-bottom: {value};" } } },
  description: "Set scroll padding for snap",
  descriptionMs: "Tetapkan padding skrol untuk snap",
  category: "visual",
  usesScale: "spacing",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "scroll-p", css: "scroll-padding: var(--s-{value});", description: "All sides", descriptionMs: "Semua sisi" },
    { value: "scroll-p-t", css: "scroll-padding-top: var(--s-{value});", description: "Top padding", descriptionMs: "Padding atas" },
    { value: "scroll-p-r", css: "scroll-padding-right: var(--s-{value});", description: "Right padding", descriptionMs: "Padding kanan" },
    { value: "scroll-p-b", css: "scroll-padding-bottom: var(--s-{value});", description: "Bottom padding", descriptionMs: "Padding bawah" },
    { value: "scroll-p-l", css: "scroll-padding-left: var(--s-{value});", description: "Left padding", descriptionMs: "Padding kiri" }
  ],
  examples: [
    { code: '<div visual="scroll-p:big">Scroll padding</div>', description: "Scroll padding" }
  ],
  preview: [
    {
      title: "Scroll Padding",
      titleMs: "Padding Skrol",
      description: "Padding for scroll snap container",
      descriptionMs: "Padding untuk bekas snap skrol",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll-p:big</div>
</div>`,
      highlightValue: "scroll-p:big"
    }
  ]
};
var scrollSnapAlign = {
  name: "scroll-snap-align",
  property: "visual",
  syntax: 'visual="snap-align:[value]"',
  description: "Set scroll snap alignment",
  descriptionMs: "Tetapkan penjajaran snap skrol",
  category: "visual",
  values: [
    { value: "start", css: "scroll-snap-align: start;", description: "Snap to start", descriptionMs: "Snap ke permulaan" },
    { value: "end", css: "scroll-snap-align: end;", description: "Snap to end", descriptionMs: "Snap ke hujung" },
    { value: "center", css: "scroll-snap-align: center;", description: "Snap to center", descriptionMs: "Snap ke tengah" },
    { value: "none", css: "scroll-snap-align: none;", description: "No snap", descriptionMs: "Tiada snap" }
  ],
  examples: [
    { code: '<div visual="snap-align:start">Snap to start</div>', description: "Start alignment" }
  ],
  preview: [
    {
      title: "Snap Alignment",
      titleMs: "Penjajaran Snap",
      description: "Where to snap within container",
      descriptionMs: "Tempat untuk snap dalam bekas",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">start</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">end</div>
</div>`,
      highlightValue: "snap-align:start"
    }
  ]
};
var scrollSnapStop = {
  name: "scroll-snap-stop",
  property: "visual",
  syntax: 'visual="snap-stop:[value]"',
  description: "Control scroll snap stop behavior",
  descriptionMs: "Kawal kelakuan hentian snap skrol",
  category: "visual",
  values: [
    { value: "normal", css: "scroll-snap-stop: normal;", description: "Normal stop", descriptionMs: "Hentian biasa" },
    { value: "always", css: "scroll-snap-stop: always;", description: "Always stop", descriptionMs: "Sentiasa berhenti" }
  ],
  examples: [
    { code: '<div visual="snap-stop:always">Always stop here</div>', description: "Force stop" }
  ],
  preview: [
    {
      title: "Snap Stop",
      titleMs: "Hentian Snap",
      description: "Control whether to stop at snap point",
      descriptionMs: "Kawal sama ada berhenti di titik snap",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">always</div>
</div>`,
      highlightValue: "snap-stop:always"
    }
  ]
};
var scrollSnapType = {
  name: "scroll-snap-type",
  property: "visual",
  syntax: 'visual="snap-type:[value]"',
  engine: { aliases: ["snap"], enum: { "both-proximity": "scroll-snap-type: both proximity;" } },
  description: "Set scroll snap type",
  descriptionMs: "Tetapkan jenis snap skrol",
  category: "visual",
  values: [
    { value: "none", css: "scroll-snap-type: none;", description: "No snapping", descriptionMs: "Tiada snapping" },
    { value: "x", css: "scroll-snap-type: x mandatory;", description: "Horizontal snap", descriptionMs: "Snap mendatar" },
    { value: "y", css: "scroll-snap-type: y mandatory;", description: "Vertical snap", descriptionMs: "Snap menegak" },
    { value: "both", css: "scroll-snap-type: both mandatory;", description: "Both axes", descriptionMs: "Kedua-dua paksi" },
    { value: "x-proximity", css: "scroll-snap-type: x proximity;", description: "Horizontal proximity", descriptionMs: "Kedekatan mendatar" },
    { value: "y-proximity", css: "scroll-snap-type: y proximity;", description: "Vertical proximity", descriptionMs: "Kedekatan menegak" }
  ],
  examples: [
    { code: '<div visual="snap-type:x">Horizontal snap container</div>', description: "Horizontal snap" }
  ],
  preview: [
    {
      title: "Snap Type",
      titleMs: "Jenis Snap",
      description: "Enable scroll snapping",
      descriptionMs: "Dayakan snapping skrol",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>`,
      highlightValue: "snap-type:x"
    }
  ]
};
var touchAction = {
  name: "touch-action",
  property: "visual",
  syntax: 'visual="touch:[value]"',
  description: "Control touch interactions",
  descriptionMs: "Kawal interaksi sentuh",
  category: "visual",
  values: [
    { value: "auto", css: "touch-action: auto;", description: "Default touch", descriptionMs: "Sentuh lalai" },
    { value: "none", css: "touch-action: none;", description: "Disable touch", descriptionMs: "Lumpuhkan sentuh" },
    { value: "pan-x", css: "touch-action: pan-x;", description: "Pan horizontally", descriptionMs: "Pan mendatar" },
    { value: "pan-y", css: "touch-action: pan-y;", description: "Pan vertically", descriptionMs: "Pan menegak" },
    { value: "pan-left", css: "touch-action: pan-left;", description: "Pan left", descriptionMs: "Pan kiri" },
    { value: "pan-right", css: "touch-action: pan-right;", description: "Pan right", descriptionMs: "Pan kanan" },
    { value: "pinch-zoom", css: "touch-action: pinch-zoom;", description: "Pinch to zoom", descriptionMs: "Cubit untuk zum" },
    { value: "manipulation", css: "touch-action: manipulation;", description: "Pan and pinch only", descriptionMs: "Pan dan cubit sahaja" }
  ],
  examples: [
    { code: '<div visual="touch:manipulation">Touch optimized</div>', description: "Optimized touch" }
  ],
  preview: [
    {
      title: "Touch Action",
      titleMs: "Tindakan Sentuh",
      description: "Control touch gestures",
      descriptionMs: "Kawal gerak isyarat sentuh",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">pan-x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">pan-y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">manipulation</div>
</div>`,
      highlightValue: "touch:manipulation"
    }
  ]
};
var resize = {
  name: "resize",
  property: "visual",
  syntax: 'visual="resize:[value]"',
  description: "Control element resizing",
  descriptionMs: "Kawal saiz semula elemen",
  category: "visual",
  values: [
    { value: "none", css: "resize: none;", description: "No resize", descriptionMs: "Tiada saiz semula" },
    { value: "both", css: "resize: both;", description: "Resize both", descriptionMs: "Saiz semula kedua-dua" },
    { value: "x", css: "resize: horizontal;", description: "Resize horizontal", descriptionMs: "Saiz semula mendatar" },
    { value: "y", css: "resize: vertical;", description: "Resize vertical", descriptionMs: "Saiz semula menegak" }
  ],
  examples: [
    { code: '<textarea visual="resize:y">Vertical resize only</textarea>', description: "Vertical resize" }
  ],
  preview: [
    {
      title: "Resize",
      titleMs: "Saiz Semula",
      description: "Allow element resizing",
      descriptionMs: "Benarkan saiz semula elemen",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>`,
      highlightValue: "resize:y"
    }
  ]
};
var willChange = {
  name: "will-change",
  property: "visual",
  syntax: 'visual="will-change:[value]"',
  description: "Hint browser about upcoming changes",
  descriptionMs: "Beri petunjuk kepada pelayar tentang perubahan akan datang",
  category: "visual",
  values: [
    { value: "auto", css: "will-change: auto;", description: "Auto optimization", descriptionMs: "Pengoptimuman automatik" },
    { value: "scroll", css: "will-change: scroll-position;", description: "Scroll changes", descriptionMs: "Perubahan skrol" },
    { value: "contents", css: "will-change: contents;", description: "Content changes", descriptionMs: "Perubahan kandungan" },
    { value: "transform", css: "will-change: transform;", description: "Transform changes", descriptionMs: "Perubahan transform" },
    { value: "opacity", css: "will-change: opacity;", description: "Opacity changes", descriptionMs: "Perubahan kelegapan" }
  ],
  examples: [
    { code: '<div visual="will-change:transform">Optimized for animation</div>', description: "Transform optimization" }
  ],
  preview: [
    {
      title: "Will Change",
      titleMs: "Akan Berubah",
      description: "Optimize for upcoming changes",
      descriptionMs: "Optimumkan untuk perubahan akan datang",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">transform</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">opacity</div>
</div>`,
      highlightValue: "will-change:transform"
    }
  ]
};
var colorScheme = {
  name: "color-scheme",
  property: "visual",
  syntax: 'visual="color-scheme:[value]"',
  description: "Set preferred color scheme",
  descriptionMs: "Tetapkan skema warna pilihan",
  category: "visual",
  values: [
    { value: "light", css: "color-scheme: light;", description: "Light mode", descriptionMs: "Mod cerah" },
    { value: "dark", css: "color-scheme: dark;", description: "Dark mode", descriptionMs: "Mod gelap" },
    { value: "normal", css: "color-scheme: normal;", description: "System default", descriptionMs: "Lalai sistem" }
  ],
  examples: [
    { code: '<html visual="color-scheme:dark">Dark mode</html>', description: "Dark mode" }
  ],
  preview: [
    {
      title: "Color Scheme",
      titleMs: "Skema Warna",
      description: "Set preferred color mode",
      descriptionMs: "Tetapkan mod warna pilihan",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">light</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">dark</div>
</div>`,
      highlightValue: "color-scheme:dark"
    }
  ]
};
var fieldSizing = {
  name: "field-sizing",
  property: "visual",
  syntax: 'visual="field-sizing:[value]"',
  description: "Control form field sizing",
  descriptionMs: "Kawal saiz medan borang",
  category: "visual",
  values: [
    { value: "fixed", css: "field-sizing: fixed;", description: "Fixed size", descriptionMs: "Saiz tetap" },
    { value: "content", css: "field-sizing: content;", description: "Size to content", descriptionMs: "Saiz mengikut kandungan" }
  ],
  examples: [
    { code: '<textarea visual="field-sizing:content">Auto-grow textarea</textarea>', description: "Auto-grow" }
  ],
  preview: [
    {
      title: "Field Sizing",
      titleMs: "Saiz Medan",
      description: "Grow field with content",
      descriptionMs: "Besarkan medan dengan kandungan",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">fixed</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
</div>`,
      highlightValue: "field-sizing:content"
    }
  ]
};
var forcedColorAdjust = {
  name: "forced-color-adjust",
  property: "visual",
  syntax: 'visual="forced-color:[value]"',
  engine: { aliases: ["forced-colors"] },
  description: "Control forced colors mode behavior",
  descriptionMs: "Kawal kelakuan mod warna paksa",
  category: "visual",
  values: [
    { value: "auto", css: "forced-color-adjust: auto;", description: "Auto adjust", descriptionMs: "Penyesuaian automatik" },
    { value: "none", css: "forced-color-adjust: none;", description: "No adjustment", descriptionMs: "Tiada penyesuaian" }
  ],
  examples: [
    { code: '<div visual="forced-color:none">Preserve colors in high contrast</div>', description: "Preserve colors" }
  ],
  preview: [
    {
      title: "Forced Color Adjust",
      titleMs: "Penyesuaian Warna Paksa",
      description: "Control high contrast mode",
      descriptionMs: "Kawal mod kontras tinggi",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
</div>`,
      highlightValue: "forced-color:none"
    }
  ]
};
var interactivityDefinitions = {
  scrollBehavior,
  scrollMargin,
  scrollPadding,
  scrollSnapAlign,
  scrollSnapStop,
  scrollSnapType,
  touchAction,
  resize,
  willChange,
  colorScheme,
  fieldSizing,
  forcedColorAdjust
};
var visual_interactivity_default = interactivityDefinitions;

// src/definitions/visual-typography.js
var textAlignment = {
  name: "text-alignment",
  property: "visual",
  syntax: 'visual="text:[alignment]"',
  description: "Set text alignment",
  descriptionMs: "Tetapkan penjajaran teks",
  category: "visual",
  values: [
    { value: "left", css: "text-align: left;", description: "Left align", descriptionMs: "Jajar kiri" },
    { value: "center", css: "text-align: center;", description: "Center align", descriptionMs: "Jajar tengah" },
    { value: "right", css: "text-align: right;", description: "Right align", descriptionMs: "Jajar kanan" },
    { value: "justify", css: "text-align: justify;", description: "Justify", descriptionMs: "Justify" }
  ],
  examples: [
    { code: '<p visual="text:center">Centered text</p>', description: "Center text" }
  ],
  preview: [
    {
      title: "Text Alignment",
      titleMs: "Penjajaran Teks",
      description: "Align text within container",
      descriptionMs: "Jajarkan teks dalam bekas",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div visual="text:left bg:primary text:white rounded:small" space="p:small">left</div>
  <div visual="text:center bg:primary text:white rounded:small" space="p:small">center</div>
  <div visual="text:right bg:primary text:white rounded:small" space="p:small">right</div>
</div>`,
      highlightValue: "text:center"
    }
  ]
};
var textTransform = {
  name: "text-transform",
  property: "visual",
  syntax: 'visual="[transform-value]"',
  description: "Transform text case",
  descriptionMs: "Ubah kes teks",
  category: "visual",
  values: [
    { value: "uppercase", css: "text-transform: uppercase;", description: "All uppercase", descriptionMs: "Semua huruf besar" },
    { value: "lowercase", css: "text-transform: lowercase;", description: "All lowercase", descriptionMs: "Semua huruf kecil" },
    { value: "capitalize", css: "text-transform: capitalize;", description: "Capitalize words", descriptionMs: "Huruf besar awal perkataan" },
    { value: "normal-case", css: "text-transform: none;", description: "Normal case", descriptionMs: "Kes normal" }
  ],
  examples: [
    { code: '<span visual="uppercase">Uppercase text</span>', description: "Uppercase" }
  ],
  preview: [
    {
      title: "Text Transform",
      titleMs: "Ubah Kes Teks",
      description: "Change text case",
      descriptionMs: "Ubah kes teks",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small uppercase">upper</span>
  <span space="p:small" visual="bg:primary text:white rounded:small lowercase">LOWER</span>
  <span space="p:small" visual="bg:primary text:white rounded:small capitalize">capitalize me</span>
</div>`,
      highlightValue: "uppercase"
    }
  ]
};
var textDecoration = {
  name: "text-decoration",
  property: "visual",
  syntax: 'visual="[decoration-value]"',
  description: "Set text decoration",
  descriptionMs: "Tetapkan hiasan teks",
  category: "visual",
  values: [
    { value: "underline", css: "text-decoration-line: underline;", description: "Underline", descriptionMs: "Garis bawah" },
    { value: "overline", css: "text-decoration-line: overline;", description: "Overline", descriptionMs: "Garis atas" },
    { value: "line-through", css: "text-decoration-line: line-through;", description: "Strikethrough", descriptionMs: "Garis potong" },
    { value: "no-underline", css: "text-decoration-line: none;", description: "No decoration", descriptionMs: "Tiada hiasan" }
  ],
  examples: [
    { code: '<a visual="no-underline">No underline link</a>', description: "Remove underline" }
  ],
  preview: [
    {
      title: "Text Decoration",
      titleMs: "Hiasan Teks",
      description: "Add lines to text",
      descriptionMs: "Tambah garis pada teks",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small underline">underline</span>
  <span space="p:small" visual="bg:primary text:white rounded:small line-through">line-through</span>
  <span space="p:small" visual="bg:primary text:white rounded:small overline">overline</span>
</div>`,
      highlightValue: "underline"
    }
  ]
};
var textOverflow = {
  name: "text-overflow",
  property: "visual",
  syntax: 'visual="[overflow-value]"',
  engine: { utilities: { content: { template: "content: {value};", quote: true, passthrough: true, arbitrary: true } } },
  description: "Handle text overflow",
  descriptionMs: "Kendalikan limpahan teks",
  category: "visual",
  values: [
    { value: "truncate", css: "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;", description: "Truncate with ellipsis", descriptionMs: "Potong dengan elipsis" },
    { value: "text-ellipsis", css: "text-overflow: ellipsis;", description: "Ellipsis overflow", descriptionMs: "Limpahan elipsis" },
    { value: "text-clip", css: "text-overflow: clip;", description: "Clip overflow", descriptionMs: "Limpahan potong" }
  ],
  examples: [
    { code: '<div visual="truncate">Very long text that gets truncated...</div>', description: "Truncate text" }
  ],
  preview: [
    {
      title: "Text Overflow",
      titleMs: "Limpahan Teks",
      description: "Handle overflowing text",
      descriptionMs: "Kendalikan teks yang melimpah",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[150px]" visual="bg:primary text:white rounded:small truncate">This long text will be truncated with ellipsis</div>
  <div space="p:small w:[150px]" visual="bg:success text:white rounded:small text-clip">This long text will be clipped without ellipsis</div>
</div>`,
      highlightValue: "truncate"
    }
  ]
};
var textWrap = {
  name: "text-wrap",
  property: "visual",
  syntax: 'visual="[wrap-value]"',
  description: "Control text wrapping",
  descriptionMs: "Kawal pembalutan teks",
  category: "visual",
  values: [
    { value: "text-wrap", css: "text-wrap: wrap;", description: "Wrap text", descriptionMs: "Balut teks" },
    { value: "text-nowrap", css: "text-wrap: nowrap;", description: "No wrap", descriptionMs: "Tiada balutan" },
    { value: "text-balance", css: "text-wrap: balance;", description: "Balanced wrap", descriptionMs: "Balutan seimbang" },
    { value: "text-pretty", css: "text-wrap: pretty;", description: "Pretty wrap", descriptionMs: "Balutan cantik" }
  ],
  examples: [
    { code: '<h1 visual="text-balance">Balanced heading</h1>', description: "Balanced text" }
  ],
  preview: [
    {
      title: "Text Wrap",
      titleMs: "Pembalutan Teks",
      description: "Control line wrapping",
      descriptionMs: "Kawal pembalutan baris",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[200px]" visual="bg:primary text:white rounded:small text-wrap">This text will wrap normally when needed</div>
  <div space="p:small w:[200px]" visual="bg:success text:white rounded:small text-nowrap">This text won't wrap at all</div>
  <div space="p:small w:[200px]" visual="bg:warning text:black rounded:small text-balance">This heading text is balanced</div>
</div>`,
      highlightValue: "text-balance"
    }
  ]
};
var whitespace = {
  name: "whitespace",
  property: "visual",
  syntax: 'visual="whitespace:[value]"',
  description: "Control whitespace handling",
  descriptionMs: "Kawal pengendalian ruang putih",
  category: "visual",
  values: [
    { value: "normal", css: "white-space: normal;", description: "Normal whitespace", descriptionMs: "Ruang putih normal" },
    { value: "nowrap", css: "white-space: nowrap;", description: "No wrap", descriptionMs: "Tiada balutan" },
    { value: "pre", css: "white-space: pre;", description: "Preserve whitespace", descriptionMs: "Kekalkan ruang putih" },
    { value: "pre-line", css: "white-space: pre-line;", description: "Pre-line", descriptionMs: "Pra-baris" },
    { value: "pre-wrap", css: "white-space: pre-wrap;", description: "Pre-wrap", descriptionMs: "Pra-balut" },
    { value: "break-spaces", css: "white-space: break-spaces;", description: "Break spaces", descriptionMs: "Pecah ruang" }
  ],
  examples: [
    { code: '<pre visual="whitespace:pre">Preserved whitespace</pre>', description: "Preserve whitespace" }
  ],
  preview: [
    {
      title: "Whitespace",
      titleMs: "Ruang Putih",
      description: "Control whitespace handling",
      descriptionMs: "Kawal pengendalian ruang putih",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small whitespace:normal">Normal   spaces   collapse</div>
  <div space="p:small" visual="bg:success text:white rounded:small whitespace:nowrap">This text won't wrap to next line</div>
  <div space="p:small" visual="bg:warning text:black rounded:small whitespace:pre">Preserved   spaces   here</div>
</div>`,
      highlightValue: "whitespace:pre"
    }
  ]
};
var wordBreak = {
  name: "word-break",
  property: "visual",
  syntax: 'visual="[break-value]"',
  description: "Control word breaking",
  descriptionMs: "Kawal pemecahan perkataan",
  category: "visual",
  values: [
    { value: "break-normal", css: "overflow-wrap: normal; word-break: normal;", description: "Normal break", descriptionMs: "Pemecahan normal" },
    { value: "break-words", css: "overflow-wrap: break-word;", description: "Break words", descriptionMs: "Pecah perkataan" },
    { value: "break-all", css: "word-break: break-all;", description: "Break all", descriptionMs: "Pecah semua" },
    { value: "break-keep", css: "word-break: keep-all;", description: "Keep all", descriptionMs: "Kekalkan semua" }
  ],
  examples: [
    { code: '<div visual="break-words">Long words break properly</div>', description: "Break long words" }
  ],
  preview: [
    {
      title: "Word Break",
      titleMs: "Pemecahan Perkataan",
      description: "Control word breaking",
      descriptionMs: "Kawal pemecahan perkataan",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[120px]" visual="bg:primary text:white rounded:small break-normal">Supercalifragilisticexpialidocious</div>
  <div space="p:small w:[120px]" visual="bg:success text:white rounded:small break-words">Supercalifragilisticexpialidocious</div>
  <div space="p:small w:[120px]" visual="bg:warning text:black rounded:small break-all">Supercalifragilisticexpialidocious</div>
</div>`,
      highlightValue: "break-words"
    }
  ]
};
var hyphens = {
  name: "hyphens",
  property: "visual",
  syntax: 'visual="hyphens:[value]"',
  description: "Control hyphenation",
  descriptionMs: "Kawal tanda sempang",
  category: "visual",
  values: [
    { value: "none", css: "hyphens: none;", description: "No hyphens", descriptionMs: "Tiada sempang" },
    { value: "manual", css: "hyphens: manual;", description: "Manual hyphens", descriptionMs: "Sempang manual" },
    { value: "auto", css: "hyphens: auto;", description: "Auto hyphens", descriptionMs: "Sempang automatik" }
  ],
  examples: [
    { code: '<p visual="hyphens:auto">Automatic hyphenation</p>', description: "Auto hyphens" }
  ],
  preview: [
    {
      title: "Hyphens",
      titleMs: "Sempang",
      description: "Control automatic hyphenation",
      descriptionMs: "Kawal sempang automatik",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small hyphens:none">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small hyphens:manual">manual</div>
  <div space="p:small" visual="bg:primary text:white rounded:small hyphens:auto">auto</div>
</div>`,
      highlightValue: "hyphens:auto"
    }
  ]
};
var textIndent = {
  name: "text-indent",
  property: "visual",
  syntax: 'visual="indent:[value]"',
  description: "Set text indentation",
  descriptionMs: "Tetapkan inden teks",
  category: "visual",
  usesScale: "spacing",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "0", css: "text-indent: 0;", description: "No indent", descriptionMs: "Tiada inden" }
  ],
  examples: [
    { code: '<p visual="indent:medium">Indented paragraph</p>', description: "Indented text" }
  ],
  preview: [
    {
      title: "Text Indent",
      titleMs: "Inden Teks",
      description: "Indent first line of text",
      descriptionMs: "Inden baris pertama teks",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p space="p:small" visual="bg:primary text:white rounded:small indent:0">No indent on this text paragraph.</p>
  <p space="p:small" visual="bg:success text:white rounded:small indent:medium">Medium indent on this first line of the paragraph.</p>
  <p space="p:small" visual="bg:warning text:black rounded:small indent:big">Bigger indent on this first line of the paragraph.</p>
</div>`,
      highlightValue: "indent:medium"
    }
  ]
};
var verticalAlign = {
  name: "vertical-align",
  property: "visual",
  syntax: 'visual="align:[value]"',
  description: "Set vertical alignment",
  descriptionMs: "Tetapkan penjajaran menegak",
  category: "visual",
  values: [
    { value: "baseline", css: "vertical-align: baseline;", description: "Baseline", descriptionMs: "Garis asas" },
    { value: "top", css: "vertical-align: top;", description: "Top", descriptionMs: "Atas" },
    { value: "middle", css: "vertical-align: middle;", description: "Middle", descriptionMs: "Tengah" },
    { value: "bottom", css: "vertical-align: bottom;", description: "Bottom", descriptionMs: "Bawah" },
    { value: "text-top", css: "vertical-align: text-top;", description: "Text top", descriptionMs: "Atas teks" },
    { value: "text-bottom", css: "vertical-align: text-bottom;", description: "Text bottom", descriptionMs: "Bawah teks" },
    { value: "sub", css: "vertical-align: sub;", description: "Subscript", descriptionMs: "Subskrip" },
    { value: "super", css: "vertical-align: super;", description: "Superscript", descriptionMs: "Superskrip" }
  ],
  examples: [
    { code: '<img visual="align:middle">Vertically centered</img>', description: "Middle alignment" }
  ],
  preview: [
    {
      title: "Vertical Align",
      titleMs: "Penjajaran Menegak",
      description: "Align inline elements",
      descriptionMs: "Jajarkan elemen sebaris",
      html: `<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small align:top">top</span>
  <span space="p:small" visual="bg:success text:white rounded:small align:middle">middle</span>
  <span space="p:small" visual="bg:warning text:black rounded:small align:bottom">bottom</span>
  <span visual="text-size:huge text:neutral-500">Big</span>
</div>`,
      highlightValue: "align:middle"
    }
  ]
};
var fontStyle = {
  name: "font-style",
  property: "visual",
  syntax: 'visual="[style-value]"',
  description: "Set font style",
  descriptionMs: "Tetapkan gaya fon",
  category: "visual",
  values: [
    { value: "italic", css: "font-style: italic;", description: "Italic text", descriptionMs: "Teks italic" },
    { value: "not-italic", css: "font-style: normal;", description: "Normal style", descriptionMs: "Gaya normal" }
  ],
  examples: [
    { code: '<em visual="not-italic">Normal style emphasis</em>', description: "Remove italic" }
  ],
  preview: [
    {
      title: "Font Style",
      titleMs: "Gaya Fon",
      description: "Italic or normal text",
      descriptionMs: "Teks italic atau normal",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small italic">italic</span>
  <span space="p:small" visual="bg:success text:white rounded:small not-italic">not-italic</span>
</div>`,
      highlightValue: "italic"
    }
  ]
};
var fontSmoothing = {
  name: "font-smoothing",
  property: "visual",
  syntax: 'visual="[smoothing-value]"',
  description: "Control font smoothing",
  descriptionMs: "Kawal penghalusan fon",
  category: "visual",
  values: [
    { value: "antialiased", css: "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;", description: "Antialiased", descriptionMs: "Antialias" },
    { value: "subpixel-antialiased", css: "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;", description: "Subpixel antialiased", descriptionMs: "Subpixel antialias" }
  ],
  examples: [
    { code: '<body visual="antialiased">Smooth fonts</body>', description: "Antialiased text" }
  ],
  preview: [
    {
      title: "Font Smoothing",
      titleMs: "Penghalusan Fon",
      description: "Control text rendering",
      descriptionMs: "Kawal persembahan teks",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small antialiased">antialiased</div>
  <div space="p:small" visual="bg:success text:white rounded:small subpixel-antialiased">subpixel</div>
</div>`,
      highlightValue: "antialiased"
    }
  ]
};
var lineClamp = {
  name: "line-clamp",
  property: "visual",
  syntax: 'visual="line-clamp:[value]"',
  description: "Limit text to specific lines",
  descriptionMs: "Hadkan teks kepada bilangan baris tertentu",
  category: "visual",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "1", css: "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;", description: "Single line", descriptionMs: "Satu baris" },
    { value: "2", css: "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;", description: "Two lines", descriptionMs: "Dua baris" },
    { value: "3", css: "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;", description: "Three lines", descriptionMs: "Tiga baris" },
    { value: "none", css: "overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: none;", description: "No clamp", descriptionMs: "Tiada had" }
  ],
  examples: [
    { code: '<p visual="line-clamp:3">Text limited to 3 lines...</p>', description: "Clamp to 3 lines" }
  ],
  preview: [
    {
      title: "Line Clamp",
      titleMs: "Had Baris",
      description: "Limit text to specific lines",
      descriptionMs: "Hadkan teks kepada baris tertentu",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[200px]" visual="bg:primary text:white rounded:small line-clamp:1">This is a very long text that will be clamped to just one single line with ellipsis.</div>
  <div space="p:small w:[200px]" visual="bg:success text:white rounded:small line-clamp:2">This is a very long text that will be clamped to exactly two lines with ellipsis at the end.</div>
  <div space="p:small w:[200px]" visual="bg:warning text:black rounded:small line-clamp:3">This is a very long text that will be clamped to exactly three lines with ellipsis shown at the end of the third line.</div>
</div>`,
      highlightValue: "line-clamp:2"
    }
  ]
};
var listStyle = {
  name: "list-style",
  property: "visual",
  syntax: 'visual="list:[value]"',
  description: "Set list style",
  descriptionMs: "Tetapkan gaya senarai",
  category: "visual",
  values: [
    { value: "none", css: "list-style-type: none;", description: "No bullets", descriptionMs: "Tiada bullet" },
    { value: "disc", css: "list-style-type: disc;", description: "Disc bullets", descriptionMs: "Bullet bulat" },
    { value: "decimal", css: "list-style-type: decimal;", description: "Numbers", descriptionMs: "Nombor" },
    { value: "square", css: "list-style-type: square;", description: "Square bullets", descriptionMs: "Bullet segi empat" },
    { value: "inside", css: "list-style-position: inside;", description: "Inside position", descriptionMs: "Kedudukan dalam" },
    { value: "outside", css: "list-style-position: outside;", description: "Outside position", descriptionMs: "Kedudukan luar" }
  ],
  examples: [
    { code: '<ul visual="list:none">No bullets</ul>', description: "Remove bullets" }
  ],
  preview: [
    {
      title: "List Style",
      titleMs: "Gaya Senarai",
      description: "Control list markers",
      descriptionMs: "Kawal penanda senarai",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <ul space="p:small" visual="bg:primary text:white rounded:small list:none"><li>none</li><li>no bullets</li></ul>
  <ul space="p:small" visual="bg:success text:white rounded:small list:disc"><li>disc</li><li>bullet</li></ul>
  <ol space="p:small" visual="bg:warning text:black rounded:small list:decimal"><li>decimal</li><li>numbers</li></ol>
</div>`,
      highlightValue: "list:disc"
    }
  ]
};
var textShadow = {
  name: "text-shadow",
  property: "visual",
  syntax: 'visual="text-shadow:[value]"',
  engine: { enum: { medium: "text-shadow: 0 2px 4px rgba(0,0,0,0.15);", big: "text-shadow: 0 4px 8px rgba(0,0,0,0.2);" } },
  description: "Add text shadow",
  descriptionMs: "Tambah bayang teks",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "text-shadow: none;", description: "No shadow", descriptionMs: "Tiada bayang" },
    { value: "small", css: "text-shadow: 0 1px 2px rgba(0,0,0,0.1);", description: "Small shadow", descriptionMs: "Bayang kecil" },
    { value: "medium", css: "text-shadow: 0 2px 4px rgba(0,0,0,0.1);", description: "Medium shadow", descriptionMs: "Bayang sederhana" },
    { value: "big", css: "text-shadow: 0 4px 8px rgba(0,0,0,0.1);", description: "Large shadow", descriptionMs: "Bayang besar" }
  ],
  examples: [
    { code: '<h1 visual="text-shadow:medium">Shadowed heading</h1>', description: "Text shadow" }
  ],
  preview: [
    {
      title: "Text Shadow",
      titleMs: "Bayang Teks",
      description: "Add shadow to text",
      descriptionMs: "Tambah bayang pada teks",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small text-shadow:none text-size:big">none</div>
  <div space="p:small" visual="bg:success text:white rounded:small text-shadow:small text-size:big">small</div>
  <div space="p:small" visual="bg:warning text:black rounded:small text-shadow:medium text-size:big">medium</div>
  <div space="p:small" visual="bg:danger text:white rounded:small text-shadow:big text-size:big">big</div>
</div>`,
      highlightValue: "text-shadow:medium"
    }
  ]
};
var fontVariantNumeric = {
  name: "font-variant-numeric",
  property: "visual",
  syntax: 'visual="[variant-value]"',
  description: "Control numeric font variants",
  descriptionMs: "Kawal varian nombor fon",
  category: "visual",
  values: [
    { value: "normal-nums", css: "font-variant-numeric: normal;", description: "Normal numbers", descriptionMs: "Nombor biasa" },
    { value: "ordinal", css: "font-variant-numeric: ordinal;", description: "Ordinal markers", descriptionMs: "Penanda ordinal" },
    { value: "slashed-zero", css: "font-variant-numeric: slashed-zero;", description: "Slashed zero", descriptionMs: "Sifar bergaris" },
    { value: "lining-nums", css: "font-variant-numeric: lining-nums;", description: "Lining numbers", descriptionMs: "Nombor garis" },
    { value: "oldstyle-nums", css: "font-variant-numeric: oldstyle-nums;", description: "Oldstyle numbers", descriptionMs: "Nombor gaya lama" },
    { value: "proportional-nums", css: "font-variant-numeric: proportional-nums;", description: "Proportional numbers", descriptionMs: "Nombor proporsional" },
    { value: "tabular-nums", css: "font-variant-numeric: tabular-nums;", description: "Tabular numbers", descriptionMs: "Nombor tabular" }
  ],
  examples: [
    { code: '<span visual="tabular-nums">123,456.00</span>', description: "Tabular numbers" }
  ],
  preview: [
    {
      title: "Font Variant Numeric",
      titleMs: "Varian Nombor Fon",
      description: "Control number display",
      descriptionMs: "Kawal paparan nombor",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small tabular-nums text-size:big">123,456.00</div>
  <div space="p:small" visual="bg:success text:white rounded:small slashed-zero text-size:big">0123</div>
  <div space="p:small" visual="bg:warning text:black rounded:small ordinal text-size:big">1st 2nd 3rd</div>
</div>`,
      highlightValue: "tabular-nums"
    }
  ]
};
var textDecorationColor = {
  name: "text-decoration-color",
  property: "visual",
  syntax: 'visual="decoration:[color]/[opacity]"',
  engine: { template: "text-decoration-color: {value};" },
  description: "Set text decoration color",
  descriptionMs: "Tetapkan warna hiasan teks",
  category: "visual",
  usesScale: "colors",
  supportsArbitrary: true,
  values: [],
  examples: [
    { code: '<span visual="underline decoration:primary">Colored underline</span>', description: "Decoration color" },
    { code: '<span visual="underline decoration:[#FF5733]">Custom color</span>', description: "Arbitrary color" },
    { code: '<span visual="underline decoration:primary/50">50% opacity underline</span>', description: "With opacity modifier" }
  ],
  preview: [
    {
      title: "Decoration Color",
      titleMs: "Warna Hiasan",
      description: "Set text underline/overline color",
      descriptionMs: "Tetapkan warna garis bawah/atas teks",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration:primary text-size:big">primary underline</span>
  <span visual="line-through decoration:danger text-size:big">danger strikethrough</span>
  <span visual="underline decoration:success text-size:big">success underline</span>
</div>`,
      highlightValue: "decoration:primary"
    }
  ]
};
var textDecorationThickness = {
  name: "text-decoration-thickness",
  property: "visual",
  syntax: 'visual="decoration-thickness:[value]"',
  engine: { numeric: { unit: "px" }, utilities: { "underline-offset": { template: "text-underline-offset: {value};", numeric: { unit: "px" }, literals: { auto: "auto" }, arbitrary: true } } },
  description: "Set text decoration thickness",
  descriptionMs: "Tetapkan ketebalan hiasan teks",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "auto", css: "text-decoration-thickness: auto;", description: "Auto thickness", descriptionMs: "Ketebalan automatik" },
    { value: "from-font", css: "text-decoration-thickness: from-font;", description: "Use font-specified thickness", descriptionMs: "Gunakan ketebalan yang ditetapkan fon" }
  ],
  examples: [
    { code: '<span visual="underline decoration-thickness:[3px]">3px underline</span>', description: "Custom thickness" },
    { code: '<span visual="underline decoration-thickness:from-font">Font thickness</span>', description: "From font" }
  ],
  preview: [
    {
      title: "Decoration Thickness",
      titleMs: "Ketebalan Hiasan",
      description: "Control underline/overline thickness",
      descriptionMs: "Kawal ketebalan garis bawah/atas",
      html: `<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="underline decoration-thickness:auto text-size:big">auto</span>
  <span visual="underline decoration-thickness:[3px] text-size:big">3px</span>
  <span visual="underline decoration-thickness:[5px] text-size:big">5px</span>
</div>`,
      highlightValue: "decoration-thickness:[3px]"
    }
  ]
};
var typographyDefinitions = {
  textAlignment,
  textTransform,
  textDecoration,
  textDecorationColor,
  textDecorationThickness,
  textOverflow,
  textWrap,
  whitespace,
  wordBreak,
  hyphens,
  textIndent,
  verticalAlign,
  fontStyle,
  fontSmoothing,
  lineClamp,
  listStyle,
  textShadow,
  fontVariantNumeric
};
var visual_typography_default = typographyDefinitions;

// src/definitions/visual-transform3d.js
var perspective = {
  name: "transform-perspective",
  property: "visual",
  syntax: 'visual="perspective:[value]"',
  description: "Set 3D perspective on container (apply to parent of transformed elements)",
  descriptionMs: "Tetapkan perspektif 3D pada bekas (terapkan pada induk elemen transformasi)",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "perspective: none;", description: "No perspective", descriptionMs: "Tiada perspektif" },
    { value: "dramatic", css: "perspective: 100px;", description: "Dramatic perspective", descriptionMs: "Perspektif dramatik" },
    { value: "near", css: "perspective: 300px;", description: "Near perspective", descriptionMs: "Perspektif dekat" },
    { value: "normal", css: "perspective: 500px;", description: "Normal perspective", descriptionMs: "Perspektif normal" },
    { value: "midrange", css: "perspective: 800px;", description: "Midrange perspective", descriptionMs: "Perspektif pertengahan" },
    { value: "far", css: "perspective: 1000px;", description: "Far perspective", descriptionMs: "Perspektif jauh" },
    { value: "distant", css: "perspective: 1200px;", description: "Distant perspective", descriptionMs: "Perspektif jauh sekali" }
  ],
  examples: [
    { code: '<div visual="perspective:normal"><div visual="rotate-y:45">3D rotated</div></div>', description: "Parent perspective for 3D child" }
  ],
  preview: [
    {
      title: "3D Perspective",
      titleMs: "Perspektif 3D",
      description: "Control 3D depth perception - apply to parent, transform children",
      descriptionMs: "Kawal persepsi kedalaman 3D - terapkan pada induk, transformasi anak",
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">dramatic</span>
    <div space="p:medium" visual="perspective:dramatic">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">normal</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">far</span>
    <div space="p:medium" visual="perspective:far">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-y:45">3D</div>
    </div>
  </div>
</div>`,
      highlightValue: "perspective:normal"
    }
  ]
};
var perspectiveOrigin = {
  name: "transform-perspective-origin",
  property: "visual",
  syntax: 'visual="perspective-origin:[value]"',
  description: "Set perspective vanishing point location",
  descriptionMs: "Tetapkan lokasi titik lenyap perspektif",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "center", css: "perspective-origin: center;", description: "Center origin", descriptionMs: "Asal tengah" },
    { value: "top", css: "perspective-origin: top;", description: "Top origin", descriptionMs: "Asal atas" },
    { value: "bottom", css: "perspective-origin: bottom;", description: "Bottom origin", descriptionMs: "Asal bawah" },
    { value: "left", css: "perspective-origin: left;", description: "Left origin", descriptionMs: "Asal kiri" },
    { value: "right", css: "perspective-origin: right;", description: "Right origin", descriptionMs: "Asal kanan" },
    { value: "top-left", css: "perspective-origin: top left;", description: "Top left", descriptionMs: "Atas kiri" },
    { value: "top-right", css: "perspective-origin: top right;", description: "Top right", descriptionMs: "Atas kanan" },
    { value: "bottom-left", css: "perspective-origin: bottom left;", description: "Bottom left", descriptionMs: "Bawah kiri" },
    { value: "bottom-right", css: "perspective-origin: bottom right;", description: "Bottom right", descriptionMs: "Bawah kanan" }
  ],
  examples: [
    { code: '<div visual="perspective:normal perspective-origin:top">Top origin</div>', description: "Top vanishing point" }
  ],
  preview: [
    {
      title: "Perspective Origin",
      titleMs: "Asal Perspektif",
      description: "Set vanishing point location for 3D transforms",
      descriptionMs: "Tetapkan lokasi titik lenyap untuk transformasi 3D",
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">left</span>
    <div space="p:medium" visual="perspective:normal perspective-origin:left">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:30">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">center</span>
    <div space="p:medium" visual="perspective:normal perspective-origin:center">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:30">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">right</span>
    <div space="p:medium" visual="perspective:normal perspective-origin:right">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-y:30">3D</div>
    </div>
  </div>
</div>`,
      highlightValue: "perspective-origin:center"
    }
  ]
};
var rotate3d = {
  name: "transform-rotate-3d",
  property: "visual",
  syntax: 'visual="rotate-x:[degrees]" or visual="rotate-y:[degrees]" or visual="rotate-z:[degrees]"',
  engine: { templates: { "rotate-x": "transform: rotateX({value});", "rotate-y": "transform: rotateY({value});", "rotate-z": "transform: rotateZ({value});" } },
  description: "Rotate element in 3D space along X, Y, or Z axis",
  descriptionMs: "Putar elemen dalam ruang 3D sepanjang paksi X, Y, atau Z",
  category: "visual",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "0", css: "transform: rotateX(0deg);", description: "No rotation", descriptionMs: "Tiada putaran" },
    { value: "45", css: "transform: rotateX(45deg);", description: "45\xB0 rotation", descriptionMs: "Putaran 45\xB0" },
    { value: "90", css: "transform: rotateX(90deg);", description: "90\xB0 rotation", descriptionMs: "Putaran 90\xB0" },
    { value: "180", css: "transform: rotateX(180deg);", description: "180\xB0 rotation", descriptionMs: "Putaran 180\xB0" }
  ],
  examples: [
    { code: '<div visual="perspective:normal"><div visual="rotate-x:45">Tilted forward</div></div>', description: "X-axis rotation" },
    { code: '<div visual="perspective:normal"><div visual="rotate-y:45">Turned sideways</div></div>', description: "Y-axis rotation" },
    { code: '<div visual="rotate-z:45">Spun flat</div>', description: "Z-axis rotation (same as rotate)" }
  ],
  preview: [
    {
      title: "3D Rotation",
      titleMs: "Putaran 3D",
      description: "Rotate elements along X, Y, or Z axis in 3D space",
      descriptionMs: "Putar elemen sepanjang paksi X, Y, atau Z dalam ruang 3D",
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-x:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-x:45">X</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-y:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">Y</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-z:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-z:45">Z</div>
    </div>
  </div>
</div>`,
      highlightValue: "rotate-y:45"
    }
  ]
};
var translateZ = {
  name: "transform-translate-z",
  property: "visual",
  syntax: 'visual="translate-z:[value]"',
  engine: { scale: "spacing", valuesAreExamples: true, negatable: true, template: "transform: translateZ({value});", literals: { "0": "0", near: "50px", far: "-50px" } },
  description: "Translate element along Z axis (depth) in 3D space",
  descriptionMs: "Alihkan elemen sepanjang paksi Z (kedalaman) dalam ruang 3D",
  category: "visual",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "0", css: "transform: translateZ(0);", description: "No Z translation", descriptionMs: "Tiada alihan Z" },
    { value: "near", css: "transform: translateZ(50px);", description: "Move near (forward)", descriptionMs: "Alih dekat (ke hadapan)" },
    { value: "far", css: "transform: translateZ(-50px);", description: "Move far (backward)", descriptionMs: "Alih jauh (ke belakang)" }
  ],
  examples: [
    { code: '<div visual="perspective:normal"><div visual="translate-z:near">Closer</div></div>', description: "Move forward in 3D" }
  ],
  preview: [
    {
      title: "Translate Z (3D Depth)",
      titleMs: "Alih Z (Kedalaman 3D)",
      description: "Move elements forward or backward in 3D space",
      descriptionMs: "Alihkan elemen ke hadapan atau belakang dalam ruang 3D",
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:far</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:primary text:white rounded:small translate-z:far">far</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:0</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:success text:white rounded:small translate-z:0">0</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:near</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:warning text:black rounded:small translate-z:near">near</div>
    </div>
  </div>
</div>`,
      highlightValue: "translate-z:near"
    }
  ]
};
var transformStyle = {
  name: "transform-style",
  property: "visual",
  syntax: 'visual="transform-style:[value]"',
  description: "Preserve 3D space for nested transformed elements",
  descriptionMs: "Kekalkan ruang 3D untuk elemen transformasi bersarang",
  category: "visual",
  values: [
    { value: "flat", css: "transform-style: flat;", description: "Flatten 3D children", descriptionMs: "Ratakan anak 3D" },
    { value: "preserve-3d", css: "transform-style: preserve-3d;", description: "Preserve 3D depth", descriptionMs: "Kekalkan kedalaman 3D" }
  ],
  examples: [
    { code: '<div visual="transform-style:preserve-3d">Nested 3D transforms preserved</div>', description: "Preserve 3D" }
  ],
  preview: [
    {
      title: "Transform Style",
      titleMs: "Gaya Transformasi",
      description: "Flat or preserve 3D for nested transforms",
      descriptionMs: "Rata atau kekalkan 3D untuk transformasi bersarang",
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">flat</span>
    <div space="p:medium" visual="perspective:normal transform-style:flat rotate-x:20">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:45">flat</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">preserve-3d</span>
    <div space="p:medium" visual="perspective:normal transform-style:preserve-3d rotate-x:20">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
</div>`,
      highlightValue: "transform-style:preserve-3d"
    }
  ]
};
var backfaceVisibility = {
  name: "transform-backface",
  property: "visual",
  syntax: 'visual="backface:[value]"',
  description: "Control visibility of element back side when rotated in 3D",
  descriptionMs: "Kawal keterlihatan bahagian belakang elemen apabila diputar dalam 3D",
  category: "visual",
  values: [
    { value: "visible", css: "backface-visibility: visible;", description: "Backface visible", descriptionMs: "Belakang kelihatan" },
    { value: "hidden", css: "backface-visibility: hidden;", description: "Backface hidden", descriptionMs: "Belakang tersembunyi" }
  ],
  examples: [
    { code: '<div visual="backface:hidden rotate-y:180">Hidden when flipped</div>', description: "Hide backface for card flip" }
  ],
  preview: [
    {
      title: "Backface Visibility",
      titleMs: "Keterlihatan Belakang",
      description: "Show or hide backside when rotated 180\xB0",
      descriptionMs: "Tunjukkan atau sembunyikan bahagian belakang apabila diputar 180\xB0",
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">visible + rotate-y:180</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:primary text:white rounded:small backface:visible rotate-y:180">\u{1F440}</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">hidden + rotate-y:180</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:danger text:white rounded:small backface:hidden rotate-y:180">\u{1F648}</div>
    </div>
  </div>
</div>`,
      highlightValue: "backface:hidden"
    }
  ]
};
var mask = {
  name: "mask",
  property: "visual",
  syntax: 'visual="mask:[value]"',
  engine: { utilities: { "mask-clip": { template: "mask-clip: {value};", literals: { border: "border-box", padding: "padding-box", content: "content-box", text: "text" }, passthrough: true, arbitrary: true }, "mask-composite": { template: "mask-composite: {value};", passthrough: true }, "mask-image": { template: "mask-image: url({value});", arbitraryTemplate: "mask-image: {value};", arbitraryWrap: "url", literals: { none: "none" }, arbitrary: true, passthrough: true }, "mask-mode": { template: "mask-mode: {value};", passthrough: true }, "mask-origin": { template: "mask-origin: {value};", literals: { border: "border-box", padding: "padding-box", content: "content-box" }, passthrough: true }, "mask-position": { template: "mask-position: {value};", literals: { "top-left": "top left", "top-right": "top right", "bottom-left": "bottom left", "bottom-right": "bottom right" }, passthrough: true, arbitrary: true }, "mask-repeat": { template: "mask-repeat: {value};", passthrough: true }, "mask-size": { template: "mask-size: {value};", passthrough: true, arbitrary: true }, "mask-type": { template: "mask-type: {value};", passthrough: true } } },
  description: "Apply mask to element",
  descriptionMs: "Terapkan topeng pada elemen",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "mask-image: none;", description: "No mask", descriptionMs: "Tiada topeng" },
    { value: "fade-y", css: "mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);", description: "Vertical fade", descriptionMs: "Pudar menegak" },
    { value: "fade-x", css: "mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);", description: "Horizontal fade", descriptionMs: "Pudar mendatar" }
  ],
  examples: [
    { code: '<div visual="mask:fade-y">Faded edges</div>', description: "Vertical fade mask" }
  ],
  preview: [
    {
      title: "Mask",
      titleMs: "Topeng",
      description: "Apply gradient mask to edges",
      descriptionMs: "Terapkan topeng kecerunan pada tepi",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg:primary text:white rounded:small mask:none">none</div>
  <div space="p:medium" visual="bg:primary text:white rounded:small mask:fade-y">fade-y</div>
  <div space="p:medium" visual="bg:primary text:white rounded:small mask:fade-x">fade-x</div>
</div>`,
      highlightValue: "mask:fade-y"
    }
  ]
};
var statePrefixes = {
  name: "state-prefixes",
  property: "visual",
  syntax: 'visual="hover:... focus:... active:..."',
  description: "Apply styles on specific states",
  descriptionMs: "Terapkan gaya pada keadaan tertentu",
  category: "visual",
  values: [
    { value: "hover:", css: ":hover", description: "On hover", descriptionMs: "Pada hover" },
    { value: "focus:", css: ":focus", description: "On focus", descriptionMs: "Pada fokus" },
    { value: "active:", css: ":active", description: "On active", descriptionMs: "Pada aktif" },
    { value: "disabled:", css: ":disabled", description: "When disabled", descriptionMs: "Apabila dilumpuhkan" },
    { value: "visited:", css: ":visited", description: "When visited", descriptionMs: "Apabila dilawati" },
    { value: "first:", css: ":first-child", description: "First child", descriptionMs: "Anak pertama" },
    { value: "last:", css: ":last-child", description: "Last child", descriptionMs: "Anak terakhir" },
    { value: "odd:", css: ":nth-child(odd)", description: "Odd children", descriptionMs: "Anak ganjil" },
    { value: "even:", css: ":nth-child(even)", description: "Even children", descriptionMs: "Anak genap" }
  ],
  examples: [
    { code: '<button visual="hover:bg:primary focus:outline:primary">Interactive button</button>', description: "State prefixes" }
  ],
  preview: [
    {
      title: "State Prefixes",
      titleMs: "Awalan Keadaan",
      description: "Apply styles on hover, focus, etc.",
      descriptionMs: "Terapkan gaya pada hover, fokus, dll.",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all hover:scale:110">hover:scale:110</button>
  <button space="p:small" visual="bg:neutral-500 text:white rounded:small transition:all hover:bg:primary">hover:bg:primary</button>
</div>`,
      highlightValue: "hover:scale:110"
    }
  ]
};
var transform3dDefinitions = {
  perspective,
  perspectiveOrigin,
  rotate3d,
  translateZ,
  transformStyle,
  backfaceVisibility,
  mask,
  statePrefixes
};
var visual_transform3d_default = transform3dDefinitions;

// src/definitions/visual-filters.js
var filterBrightness = {
  name: "filter-brightness",
  property: "visual",
  syntax: 'visual="brightness:[value]"',
  engine: { scale: "brightness", varPrefix: false, valuesAreExamples: true, template: "filter: brightness({value});" },
  description: "Adjust brightness",
  descriptionMs: "Laraskan kecerahan",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "dim", css: "filter: brightness(0.5);", description: "50% brightness", descriptionMs: "50% kecerahan" },
    { value: "dark", css: "filter: brightness(0.75);", description: "75% brightness", descriptionMs: "75% kecerahan" },
    { value: "normal", css: "filter: brightness(1);", description: "Normal brightness", descriptionMs: "Kecerahan normal" },
    { value: "bright", css: "filter: brightness(1.25);", description: "125% brightness", descriptionMs: "125% kecerahan" },
    { value: "vivid", css: "filter: brightness(1.5);", description: "150% brightness", descriptionMs: "150% kecerahan" }
  ],
  examples: [
    { code: '<img visual="brightness:bright">Brighter image</img>', description: "Increase brightness" }
  ],
  preview: [
    {
      title: "Brightness Filter",
      titleMs: "Penapis Kecerahan",
      description: "Adjust element brightness",
      descriptionMs: "Laraskan kecerahan elemen",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small brightness:dim">dim</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small brightness:vivid">vivid</div>
</div>`,
      highlightValue: "brightness:bright"
    }
  ]
};
var filterContrast = {
  name: "filter-contrast",
  property: "visual",
  syntax: 'visual="contrast:[value]"',
  engine: { scale: "contrast", varPrefix: false, valuesAreExamples: true, template: "filter: contrast({value});" },
  description: "Adjust contrast",
  descriptionMs: "Laraskan kontras",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "low", css: "filter: contrast(0.5);", description: "Low contrast", descriptionMs: "Kontras rendah" },
    { value: "reduced", css: "filter: contrast(0.75);", description: "Reduced contrast", descriptionMs: "Kontras dikurangkan" },
    { value: "normal", css: "filter: contrast(1);", description: "Normal contrast", descriptionMs: "Kontras normal" },
    { value: "high", css: "filter: contrast(1.25);", description: "High contrast", descriptionMs: "Kontras tinggi" },
    { value: "max", css: "filter: contrast(1.5);", description: "Maximum contrast", descriptionMs: "Kontras maksimum" }
  ],
  examples: [
    { code: '<img visual="contrast:high">High contrast</img>', description: "Increase contrast" }
  ],
  preview: [
    {
      title: "Contrast Filter",
      titleMs: "Penapis Kontras",
      description: "Adjust element contrast",
      descriptionMs: "Laraskan kontras elemen",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small contrast:low">low</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small contrast:max">high</div>
</div>`,
      highlightValue: "contrast:high"
    }
  ]
};
var filterGrayscale = {
  name: "filter-grayscale",
  property: "visual",
  syntax: 'visual="grayscale:[value]"',
  engine: { scale: "grayscale", varPrefix: false, valuesAreExamples: true, template: "filter: grayscale({value});" },
  description: "Apply grayscale filter",
  descriptionMs: "Terapkan penapis skala kelabu",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "filter: grayscale(0%);", description: "No grayscale", descriptionMs: "Tiada skala kelabu" },
    { value: "partial", css: "filter: grayscale(50%);", description: "50% grayscale", descriptionMs: "50% skala kelabu" },
    { value: "full", css: "filter: grayscale(100%);", description: "Full grayscale", descriptionMs: "Skala kelabu penuh" }
  ],
  examples: [
    { code: '<img visual="grayscale:full">Black and white</img>', description: "Full grayscale" }
  ],
  preview: [
    {
      title: "Grayscale Filter",
      titleMs: "Penapis Skala Kelabu",
      description: "Convert to grayscale",
      descriptionMs: "Tukar ke skala kelabu",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small grayscale:partial">partial</div>
  <div space="p:small" visual="bg:primary text:white rounded:small grayscale:full">full</div>
</div>`,
      highlightValue: "grayscale:full"
    }
  ]
};
var filterHueRotate = {
  name: "filter-hue-rotate",
  property: "visual",
  syntax: 'visual="hue-rotate:[degrees]"',
  description: "Rotate hue colors",
  descriptionMs: "Putar warna rona",
  category: "visual",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "0", css: "filter: hue-rotate(0deg);", description: "No rotation", descriptionMs: "Tiada putaran" },
    { value: "90", css: "filter: hue-rotate(90deg);", description: "90\xB0 rotation", descriptionMs: "Putaran 90\xB0" },
    { value: "180", css: "filter: hue-rotate(180deg);", description: "180\xB0 rotation", descriptionMs: "Putaran 180\xB0" }
  ],
  examples: [
    { code: '<img visual="hue-rotate:90">Shifted hue</img>', description: "Rotate hue 90 degrees" }
  ],
  preview: [
    {
      title: "Hue Rotate Filter",
      titleMs: "Penapis Putaran Rona",
      description: "Rotate color hues",
      descriptionMs: "Putar rona warna",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0\xB0</div>
  <div space="p:small" visual="bg:primary text:white rounded:small hue-rotate:90">90\xB0</div>
  <div space="p:small" visual="bg:primary text:white rounded:small hue-rotate:180">180\xB0</div>
</div>`,
      highlightValue: "hue-rotate:90"
    }
  ]
};
var filterInvert = {
  name: "filter-invert",
  property: "visual",
  syntax: 'visual="invert:[value]"',
  engine: { scale: "invert", varPrefix: false, valuesAreExamples: true, template: "filter: invert({value});" },
  description: "Invert colors",
  descriptionMs: "Songsangkan warna",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "filter: invert(0%);", description: "No inversion", descriptionMs: "Tiada penyongsangan" },
    { value: "partial", css: "filter: invert(50%);", description: "50% inversion", descriptionMs: "50% penyongsangan" },
    { value: "full", css: "filter: invert(100%);", description: "Full inversion", descriptionMs: "Penyongsangan penuh" }
  ],
  examples: [
    { code: '<img visual="invert:full">Inverted colors</img>', description: "Invert all colors" }
  ],
  preview: [
    {
      title: "Invert Filter",
      titleMs: "Penapis Songsang",
      description: "Invert element colors",
      descriptionMs: "Songsangkan warna elemen",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small invert:full">full</div>
</div>`,
      highlightValue: "invert:full"
    }
  ]
};
var filterSaturate = {
  name: "filter-saturate",
  property: "visual",
  syntax: 'visual="saturate:[value]"',
  engine: { scale: "saturate", varPrefix: false, valuesAreExamples: true, template: "filter: saturate({value});" },
  description: "Adjust saturation",
  descriptionMs: "Laraskan ketepuan",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "filter: saturate(0);", description: "Desaturated", descriptionMs: "Tidak tepu" },
    { value: "low", css: "filter: saturate(0.5);", description: "Low saturation", descriptionMs: "Ketepuan rendah" },
    { value: "normal", css: "filter: saturate(1);", description: "Normal saturation", descriptionMs: "Ketepuan normal" },
    { value: "high", css: "filter: saturate(1.5);", description: "High saturation", descriptionMs: "Ketepuan tinggi" },
    { value: "vivid", css: "filter: saturate(2);", description: "Very saturated", descriptionMs: "Sangat tepu" }
  ],
  examples: [
    { code: '<img visual="saturate:vivid">Vivid colors</img>', description: "Increase saturation" }
  ],
  preview: [
    {
      title: "Saturate Filter",
      titleMs: "Penapis Ketepuan",
      description: "Adjust color saturation",
      descriptionMs: "Laraskan ketepuan warna",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small saturate:none">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small saturate:vivid">vivid</div>
</div>`,
      highlightValue: "saturate:vivid"
    }
  ]
};
var filterSepia = {
  name: "filter-sepia",
  property: "visual",
  syntax: 'visual="sepia:[value]"',
  engine: { scale: "sepia", varPrefix: false, valuesAreExamples: true, template: "filter: sepia({value});" },
  description: "Apply sepia filter",
  descriptionMs: "Terapkan penapis sepia",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "filter: sepia(0%);", description: "No sepia", descriptionMs: "Tiada sepia" },
    { value: "partial", css: "filter: sepia(50%);", description: "50% sepia", descriptionMs: "50% sepia" },
    { value: "full", css: "filter: sepia(100%);", description: "Full sepia", descriptionMs: "Sepia penuh" }
  ],
  examples: [
    { code: '<img visual="sepia:full">Vintage look</img>', description: "Full sepia effect" }
  ],
  preview: [
    {
      title: "Sepia Filter",
      titleMs: "Penapis Sepia",
      description: "Apply vintage sepia tone",
      descriptionMs: "Terapkan ton sepia vintaj",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small sepia:partial">partial</div>
  <div space="p:small" visual="bg:primary text:white rounded:small sepia:full">full</div>
</div>`,
      highlightValue: "sepia:full"
    }
  ]
};
var filterDropShadow = {
  name: "filter-drop-shadow",
  property: "visual",
  syntax: 'visual="drop-shadow:[value]"',
  engine: { scale: "dropShadow", varPrefix: false, valuesAreExamples: true, template: "filter: drop-shadow({value});" },
  description: "Add drop shadow",
  descriptionMs: "Tambah bayang jatuh",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "filter: drop-shadow(none);", description: "No shadow", descriptionMs: "Tiada bayang" },
    { value: "tiny", css: "filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05));", description: "Tiny shadow", descriptionMs: "Bayang kecil" },
    { value: "small", css: "filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));", description: "Small shadow", descriptionMs: "Bayang kecil" },
    { value: "medium", css: "filter: drop-shadow(0 4px 3px rgba(0,0,0,0.07));", description: "Medium shadow", descriptionMs: "Bayang sederhana" },
    { value: "big", css: "filter: drop-shadow(0 10px 8px rgba(0,0,0,0.04));", description: "Large shadow", descriptionMs: "Bayang besar" },
    { value: "giant", css: "filter: drop-shadow(0 20px 13px rgba(0,0,0,0.03));", description: "Giant shadow", descriptionMs: "Bayang gergasi" }
  ],
  examples: [
    { code: '<img visual="drop-shadow:medium">Shadow on image</img>', description: "Drop shadow on irregular shapes" }
  ],
  preview: [
    {
      title: "Drop Shadow",
      titleMs: "Bayang Jatuh",
      description: "Add shadow to elements",
      descriptionMs: "Tambah bayang pada elemen",
      html: `<div layout="flex" space="g:medium p:big" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small drop-shadow:small">small</div>
  <div space="p:small" visual="bg:primary text:white rounded:small drop-shadow:medium">medium</div>
  <div space="p:small" visual="bg:primary text:white rounded:small drop-shadow:big">big</div>
</div>`,
      highlightValue: "drop-shadow:medium"
    }
  ]
};
var filterDefinitions = {
  filterBrightness,
  filterContrast,
  filterGrayscale,
  filterHueRotate,
  filterInvert,
  filterSaturate,
  filterSepia,
  filterDropShadow
};
var visual_filters_default = filterDefinitions;

// src/definitions/visual-transitions.js
var transitionProperty = {
  name: "transition-property",
  property: "visual",
  syntax: 'visual="transition:[value]"',
  engine: { keywords: { "transition-none": "transition-property: none;" }, utilities: { "transition-behavior": { template: "transition-behavior: {value};", passthrough: true } }, scale: "transitionProperty", varPrefix: false, valuesAreExamples: true, template: "transition-property: {value}; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;" },
  description: "Set transition properties",
  descriptionMs: "Tetapkan properti peralihan",
  category: "visual",
  values: [
    { value: "none", css: "transition-property: none;", description: "No transition", descriptionMs: "Tiada peralihan" },
    { value: "all", css: "transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;", description: "All properties", descriptionMs: "Semua properti" },
    { value: "colors", css: "transition-property: color, background-color, border-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;", description: "Color properties", descriptionMs: "Properti warna" },
    { value: "opacity", css: "transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;", description: "Opacity only", descriptionMs: "Kelegapan sahaja" },
    { value: "shadow", css: "transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;", description: "Shadow only", descriptionMs: "Bayang sahaja" },
    { value: "transform", css: "transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;", description: "Transform only", descriptionMs: "Transformasi sahaja" }
  ],
  examples: [
    { code: '<button visual="transition:all hover:bg:primary">Smooth hover</button>', description: "Smooth transition" }
  ],
  preview: [
    {
      title: "Transition",
      titleMs: "Peralihan",
      description: "Smooth property changes",
      descriptionMs: "Perubahan properti yang lancar",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all">transition:all</button>
</div>`,
      highlightValue: "transition:all"
    }
  ]
};
var transitionDuration = {
  name: "transition-duration",
  property: "visual",
  syntax: 'visual="duration:[value]"',
  description: "Set transition duration",
  descriptionMs: "Tetapkan tempoh peralihan",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "instant", css: "transition-duration: 75ms;", description: "75ms", descriptionMs: "75ms" },
    { value: "quick", css: "transition-duration: 100ms;", description: "100ms", descriptionMs: "100ms" },
    { value: "fast", css: "transition-duration: 150ms;", description: "150ms", descriptionMs: "150ms" },
    { value: "normal", css: "transition-duration: 200ms;", description: "200ms", descriptionMs: "200ms" },
    { value: "slow", css: "transition-duration: 300ms;", description: "300ms", descriptionMs: "300ms" },
    { value: "slower", css: "transition-duration: 500ms;", description: "500ms", descriptionMs: "500ms" },
    { value: "lazy", css: "transition-duration: 700ms;", description: "700ms", descriptionMs: "700ms" }
  ],
  examples: [
    { code: '<div visual="transition:all duration:slow">Slow transition</div>', description: "Slow duration" }
  ],
  preview: [
    {
      title: "Duration",
      titleMs: "Tempoh",
      description: "Control transition speed",
      descriptionMs: "Kawal kelajuan peralihan",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all duration:fast hover:scale:110">fast</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all duration:slow hover:scale:110">slow</button>
</div>`,
      highlightValue: "duration:slow"
    }
  ]
};
var transitionTiming = {
  name: "transition-timing",
  property: "visual",
  syntax: 'visual="ease:[value]"',
  description: "Set transition timing function",
  descriptionMs: "Tetapkan fungsi masa peralihan",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "linear", css: "transition-timing-function: linear;", description: "Linear timing", descriptionMs: "Masa linear" },
    { value: "in", css: "transition-timing-function: cubic-bezier(0.4, 0, 1, 1);", description: "Ease in", descriptionMs: "Memasuki mudah" },
    { value: "out", css: "transition-timing-function: cubic-bezier(0, 0, 0.2, 1);", description: "Ease out", descriptionMs: "Keluar mudah" },
    { value: "in-out", css: "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);", description: "Ease in-out", descriptionMs: "Masuk-keluar mudah" }
  ],
  examples: [
    { code: '<div visual="transition:all ease:out">Ease out effect</div>', description: "Ease out timing" }
  ],
  preview: [
    {
      title: "Timing Function",
      titleMs: "Fungsi Masa",
      description: "Control acceleration curve",
      descriptionMs: "Kawal lengkung pecutan",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all ease:in hover:scale:110">ease:in</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all ease:out hover:scale:110">ease:out</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all ease:in-out hover:scale:110">ease:in-out</button>
</div>`,
      highlightValue: "ease:out"
    }
  ]
};
var transitionDelay = {
  name: "transition-delay",
  property: "visual",
  syntax: 'visual="delay:[value]"',
  description: "Set transition delay",
  descriptionMs: "Tetapkan kelewatan peralihan",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "instant", css: "transition-delay: 75ms;", description: "75ms delay", descriptionMs: "Kelewatan 75ms" },
    { value: "quick", css: "transition-delay: 100ms;", description: "100ms delay", descriptionMs: "Kelewatan 100ms" },
    { value: "fast", css: "transition-delay: 150ms;", description: "150ms delay", descriptionMs: "Kelewatan 150ms" },
    { value: "normal", css: "transition-delay: 200ms;", description: "200ms delay", descriptionMs: "Kelewatan 200ms" },
    { value: "slow", css: "transition-delay: 300ms;", description: "300ms delay", descriptionMs: "Kelewatan 300ms" }
  ],
  examples: [
    { code: '<div visual="transition:all delay:slow">Delayed transition</div>', description: "Delayed start" }
  ],
  preview: [
    {
      title: "Transition Delay",
      titleMs: "Kelewatan Peralihan",
      description: "Delay before transition starts",
      descriptionMs: "Kelewatan sebelum peralihan bermula",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all delay:instant hover:scale:110">instant</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all delay:slow hover:scale:110">slow</button>
</div>`,
      highlightValue: "delay:slow"
    }
  ]
};
var animation = {
  name: "animation-builtin",
  property: "visual",
  syntax: 'visual="animate:[value]"',
  description: "Apply built-in animations",
  descriptionMs: "Terapkan animasi terbina dalam",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "animation: none;", description: "No animation", descriptionMs: "Tiada animasi" },
    { value: "spin", css: "animation: spin 1s linear infinite;", description: "Spinning", descriptionMs: "Berpusing" },
    { value: "ping", css: "animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;", description: "Ping effect", descriptionMs: "Kesan ping" },
    { value: "pulse", css: "animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;", description: "Pulsing", descriptionMs: "Berdenyut" },
    { value: "bounce", css: "animation: bounce 1s infinite;", description: "Bouncing", descriptionMs: "Melantun" }
  ],
  examples: [
    { code: '<div visual="animate:spin">Loading...</div>', description: "Spinning loader" }
  ],
  preview: [
    {
      title: "Built-in Animations",
      titleMs: "Animasi Terbina Dalam",
      description: "Ready-to-use animations",
      descriptionMs: "Animasi sedia guna",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin">spin</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:pulse">pulse</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce">bounce</div>
</div>`,
      highlightValue: "animate:spin"
    }
  ]
};
var animationDuration = {
  name: "animation-duration",
  property: "visual",
  syntax: 'visual="animation-duration:[value]"',
  description: "Set animation duration",
  descriptionMs: "Tetapkan tempoh animasi",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "instant", css: "animation-duration: 75ms;", description: "75ms", descriptionMs: "75ms" },
    { value: "quick", css: "animation-duration: 100ms;", description: "100ms", descriptionMs: "100ms" },
    { value: "fast", css: "animation-duration: 150ms;", description: "150ms", descriptionMs: "150ms" },
    { value: "normal", css: "animation-duration: 200ms;", description: "200ms", descriptionMs: "200ms" },
    { value: "slow", css: "animation-duration: 300ms;", description: "300ms", descriptionMs: "300ms" },
    { value: "slower", css: "animation-duration: 500ms;", description: "500ms", descriptionMs: "500ms" },
    { value: "lazy", css: "animation-duration: 700ms;", description: "700ms", descriptionMs: "700ms" }
  ],
  examples: [
    { code: '<div visual="animate:spin animation-duration:slow">Slow spin</div>', description: "Slow animation" }
  ],
  preview: [
    {
      title: "Animation Duration",
      titleMs: "Tempoh Animasi",
      description: "Control animation speed",
      descriptionMs: "Kawal kelajuan animasi",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-duration:fast">fast</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-duration:slow">slow</div>
</div>`,
      highlightValue: "animation-duration:slow"
    }
  ]
};
var animationDelay = {
  name: "animation-delay",
  property: "visual",
  syntax: 'visual="animation-delay:[value]"',
  description: "Set animation delay",
  descriptionMs: "Tetapkan kelewatan animasi",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "instant", css: "animation-delay: 75ms;", description: "75ms delay", descriptionMs: "Kelewatan 75ms" },
    { value: "quick", css: "animation-delay: 100ms;", description: "100ms delay", descriptionMs: "Kelewatan 100ms" },
    { value: "fast", css: "animation-delay: 150ms;", description: "150ms delay", descriptionMs: "Kelewatan 150ms" },
    { value: "normal", css: "animation-delay: 200ms;", description: "200ms delay", descriptionMs: "Kelewatan 200ms" },
    { value: "slow", css: "animation-delay: 300ms;", description: "300ms delay", descriptionMs: "Kelewatan 300ms" }
  ],
  examples: [
    { code: '<div visual="animate:bounce animation-delay:slow">Delayed bounce</div>', description: "Delayed animation" }
  ],
  preview: [
    {
      title: "Animation Delay",
      titleMs: "Kelewatan Animasi",
      description: "Delay before animation starts",
      descriptionMs: "Kelewatan sebelum animasi bermula",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:pulse animation-delay:instant">instant</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:pulse animation-delay:slow">slow</div>
</div>`,
      highlightValue: "animation-delay:slow"
    }
  ]
};
var animationIteration = {
  name: "animation-iteration",
  property: "visual",
  syntax: 'visual="animation-iteration:[value]"',
  description: "Set animation iteration count",
  descriptionMs: "Tetapkan bilangan ulangan animasi",
  category: "visual",
  dynamic: true,
  values: [
    { value: "1", css: "animation-iteration-count: 1;", description: "Once", descriptionMs: "Sekali" },
    { value: "infinite", css: "animation-iteration-count: infinite;", description: "Forever", descriptionMs: "Selamanya" }
  ],
  examples: [
    { code: '<div visual="animate:bounce animation-iteration:1">Bounce once</div>', description: "Single iteration" }
  ],
  preview: [
    {
      title: "Animation Iteration",
      titleMs: "Ulangan Animasi",
      description: "Control number of loops",
      descriptionMs: "Kawal bilangan gelung",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce animation-iteration:1">once</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce animation-iteration:infinite">infinite</div>
</div>`,
      highlightValue: "animation-iteration:infinite"
    }
  ]
};
var animationDirection = {
  name: "animation-direction",
  property: "visual",
  syntax: 'visual="animation-direction:[value]"',
  description: "Set animation direction",
  descriptionMs: "Tetapkan arah animasi",
  category: "visual",
  values: [
    { value: "normal", css: "animation-direction: normal;", description: "Normal direction", descriptionMs: "Arah normal" },
    { value: "reverse", css: "animation-direction: reverse;", description: "Reverse direction", descriptionMs: "Arah terbalik" },
    { value: "alternate", css: "animation-direction: alternate;", description: "Alternate direction", descriptionMs: "Arah berselang" },
    { value: "alternate-reverse", css: "animation-direction: alternate-reverse;", description: "Alternate reverse", descriptionMs: "Berselang terbalik" }
  ],
  examples: [
    { code: '<div visual="animate:bounce animation-direction:alternate">Alternating</div>', description: "Alternate direction" }
  ],
  preview: [
    {
      title: "Animation Direction",
      titleMs: "Arah Animasi",
      description: "Control playback direction",
      descriptionMs: "Kawal arah main balik",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-direction:normal">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-direction:reverse">reverse</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-direction:alternate">alternate</div>
</div>`,
      highlightValue: "animation-direction:alternate"
    }
  ]
};
var animationFill = {
  name: "animation-fill",
  property: "visual",
  syntax: 'visual="animation-fill:[value]"',
  description: "Set animation fill mode",
  descriptionMs: "Tetapkan mod pengisian animasi",
  category: "visual",
  values: [
    { value: "none", css: "animation-fill-mode: none;", description: "No fill", descriptionMs: "Tiada pengisian" },
    { value: "forwards", css: "animation-fill-mode: forwards;", description: "Keep end state", descriptionMs: "Kekalkan keadaan akhir" },
    { value: "backwards", css: "animation-fill-mode: backwards;", description: "Apply start state", descriptionMs: "Terapkan keadaan mula" },
    { value: "both", css: "animation-fill-mode: both;", description: "Both directions", descriptionMs: "Kedua-dua arah" }
  ],
  examples: [
    { code: '<div visual="animate:bounce animation-fill:forwards">Stays at end</div>', description: "Keep final position" }
  ],
  preview: [
    {
      title: "Animation Fill",
      titleMs: "Pengisian Animasi",
      description: 'Control state before/after animation. "forwards" keeps the final state, "none" returns to original.',
      descriptionMs: 'Kawal keadaan sebelum/selepas animasi. "forwards" kekalkan keadaan akhir, "none" kembali kepada asal.',
      html: `<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p visual="text-size:small text:neutral-600 dark:text:neutral-400">Hover to replay animation:</p>
  <div layout="flex" space="g:medium">
    <div layout="flex col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">none (returns)</span>
      <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce animation-iteration:1 animation-fill:none hover:animate:bounce">\u2B06</div>
    </div>
    <div layout="flex col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">forwards (stays)</span>
      <div space="p:small" visual="bg:success text:white rounded:small animate:bounce animation-iteration:1 animation-fill:forwards hover:animate:bounce">\u2B06</div>
    </div>
    <div layout="flex col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">both</span>
      <div space="p:small" visual="bg:warning text:white rounded:small animate:bounce animation-iteration:1 animation-fill:both hover:animate:bounce">\u2B06</div>
    </div>
  </div>
</div>`,
      highlightValue: "animation-fill:forwards"
    }
  ]
};
var animationPlay = {
  name: "animation-play",
  property: "visual",
  syntax: 'visual="animation-play:[value]"',
  description: "Control animation play state",
  descriptionMs: "Kawal keadaan main animasi",
  category: "visual",
  values: [
    { value: "running", css: "animation-play-state: running;", description: "Animation running", descriptionMs: "Animasi berjalan" },
    { value: "paused", css: "animation-play-state: paused;", description: "Animation paused", descriptionMs: "Animasi dijeda" }
  ],
  examples: [
    { code: '<div visual="animate:spin hover:animation-play:paused">Pause on hover</div>', description: "Pause on hover" }
  ],
  preview: [
    {
      title: "Animation Play State",
      titleMs: "Keadaan Main Animasi",
      description: "Pause or resume animations",
      descriptionMs: "Jeda atau sambung animasi",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-play:running">running</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-play:paused">paused</div>
</div>`,
      highlightValue: "animation-play:paused"
    }
  ]
};
var transitionDefinitions = {
  transitionProperty,
  transitionDuration,
  transitionTiming,
  transitionDelay,
  animation,
  animationDuration,
  animationDelay,
  animationIteration,
  animationDirection,
  animationFill,
  animationPlay
};
var visual_transitions_default = transitionDefinitions;

// src/definitions/visual-transforms.js
var transformScale = {
  name: "transform-scale",
  property: "visual",
  syntax: 'visual="scale:[value]"',
  engine: { utilities: { "scale-x": { template: "transform: scaleX({value});", numeric: { unit: "", divide: 100 }, arbitrary: true }, "scale-y": { template: "transform: scaleY({value});", numeric: { unit: "", divide: 100 }, arbitrary: true } } },
  description: "Scale element",
  descriptionMs: "Skala elemen",
  category: "visual",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "0", css: "transform: scale(0);", description: "Scale to 0", descriptionMs: "Skala ke 0" },
    { value: "50", css: "transform: scale(0.5);", description: "Scale to 50%", descriptionMs: "Skala ke 50%" },
    { value: "75", css: "transform: scale(0.75);", description: "Scale to 75%", descriptionMs: "Skala ke 75%" },
    { value: "100", css: "transform: scale(1);", description: "Normal scale", descriptionMs: "Skala normal" },
    { value: "110", css: "transform: scale(1.1);", description: "Scale to 110%", descriptionMs: "Skala ke 110%" },
    { value: "125", css: "transform: scale(1.25);", description: "Scale to 125%", descriptionMs: "Skala ke 125%" },
    { value: "150", css: "transform: scale(1.5);", description: "Scale to 150%", descriptionMs: "Skala ke 150%" }
  ],
  examples: [
    { code: '<div visual="transition:transform hover:scale:110">Hover to grow</div>', description: "Scale on hover" }
  ],
  preview: [
    {
      title: "Scale Transform",
      titleMs: "Transformasi Skala",
      description: "Scale elements up or down",
      descriptionMs: "Skala elemen ke atas atau ke bawah",
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small scale:75">75%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small scale:100">100%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small scale:125">125%</div>
</div>`,
      highlightValue: "scale:75"
    }
  ]
};
var transformRotate = {
  name: "transform-rotate",
  property: "visual",
  syntax: 'visual="rotate:[degrees]"',
  description: "Rotate element",
  descriptionMs: "Putar elemen",
  category: "visual",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "0", css: "transform: rotate(0deg);", description: "No rotation", descriptionMs: "Tiada putaran" },
    { value: "45", css: "transform: rotate(45deg);", description: "45\xB0 rotation", descriptionMs: "Putaran 45\xB0" },
    { value: "90", css: "transform: rotate(90deg);", description: "90\xB0 rotation", descriptionMs: "Putaran 90\xB0" },
    { value: "180", css: "transform: rotate(180deg);", description: "180\xB0 rotation", descriptionMs: "Putaran 180\xB0" }
  ],
  examples: [
    { code: '<div visual="rotate:45">Rotated 45 degrees</div>', description: "45 degree rotation" }
  ],
  preview: [
    {
      title: "Rotate Transform",
      titleMs: "Transformasi Putaran",
      description: "Rotate elements by degrees",
      descriptionMs: "Putar elemen mengikut darjah",
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small rotate:0">0\xB0</div>
  <div space="p:small" visual="bg:primary text:white rounded:small rotate:45">45\xB0</div>
  <div space="p:small" visual="bg:primary text:white rounded:small rotate:90">90\xB0</div>
</div>`,
      highlightValue: "rotate:45"
    }
  ]
};
var transformTranslate = {
  name: "transform-translate",
  property: "visual",
  syntax: 'visual="translate-x:[value]" or visual="translate-y:[value]" or visual="translate-z:[value]"',
  engine: { prefixes: ["translate-x", "translate-y"], negatable: true, templates: { "translate-x": "transform: translateX({value});", "translate-y": "transform: translateY({value});" }, literals: { "0": "0", full: "100%", half: "50%", third: "33.333333%", "third-2x": "66.666667%", quarter: "25%", "quarter-2x": "50%", "quarter-3x": "75%", "1/1": "100%", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%" } },
  description: "Translate element position along X, Y, or Z axis",
  descriptionMs: "Alihkan kedudukan elemen sepanjang paksi X, Y, atau Z",
  category: "visual",
  usesScale: "spacing",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "0", css: "transform: translateX(0);", description: "No translation", descriptionMs: "Tiada alihan" },
    { value: "tiny", css: "transform: translateX(var(--s-tiny));", description: "Tiny offset", descriptionMs: "Alihan kecil" },
    { value: "small", css: "transform: translateX(var(--s-small));", description: "Small offset", descriptionMs: "Alihan kecil" },
    { value: "medium", css: "transform: translateX(var(--s-medium));", description: "Medium offset", descriptionMs: "Alihan sederhana" },
    { value: "big", css: "transform: translateX(var(--s-big));", description: "Big offset", descriptionMs: "Alihan besar" },
    { value: "full", css: "transform: translateX(100%);", description: "Full width/height", descriptionMs: "Lebar/ketinggian penuh" },
    { value: "1/2", css: "transform: translateX(50%);", description: "Half width/height", descriptionMs: "Separuh lebar/ketinggian" },
    { value: "-full", css: "transform: translateX(-100%);", description: "Negative full", descriptionMs: "Negatif penuh" },
    { value: "-1/2", css: "transform: translateX(-50%);", description: "Negative half", descriptionMs: "Negatif separuh" }
  ],
  examples: [
    { code: '<div visual="translate-x:medium">Moved right</div>', description: "Translate X" },
    { code: '<div visual="translate-y:small">Moved down</div>', description: "Translate Y" },
    { code: '<div visual="translate-z:[50px]">Moved forward in 3D</div>', description: "Translate Z (3D)" }
  ],
  preview: [
    {
      title: "Translate Transform",
      titleMs: "Transformasi Alih",
      description: "Move elements along X, Y, or Z axis",
      descriptionMs: "Alihkan elemen sepanjang paksi X, Y, atau Z",
      html: `<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" space="g:small">
    <span visual="text:neutral-500 text-size:small">X axis:</span>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:0">0</div>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:small">small</div>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:medium">medium</div>
  </div>
  <div layout="flex" space="g:small">
    <span visual="text:neutral-500 text-size:small">Y axis:</span>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:0">0</div>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:small">small</div>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:medium">medium</div>
  </div>
</div>`,
      highlightValue: "translate-x:medium"
    }
  ]
};
var transformSkew = {
  name: "transform-skew",
  property: "visual",
  syntax: 'visual="skew-x:[degrees]" or visual="skew-y:[degrees]"',
  engine: { utilities: { "-skew-x": { template: "transform: skewX(-{value});", numeric: { unit: "deg" }, arbitrary: true }, "-skew-y": { template: "transform: skewY(-{value});", numeric: { unit: "deg" }, arbitrary: true } }, templates: { "skew-x": "transform: skewX({value});", "skew-y": "transform: skewY({value});" } },
  description: "Skew element",
  descriptionMs: "Condongkan elemen",
  category: "visual",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "0", css: "transform: skewX(0deg);", description: "No skew", descriptionMs: "Tiada condong" },
    { value: "3", css: "transform: skewX(3deg);", description: "3\xB0 skew", descriptionMs: "Condong 3\xB0" },
    { value: "6", css: "transform: skewX(6deg);", description: "6\xB0 skew", descriptionMs: "Condong 6\xB0" },
    { value: "12", css: "transform: skewX(12deg);", description: "12\xB0 skew", descriptionMs: "Condong 12\xB0" }
  ],
  examples: [
    { code: '<div visual="skew-x:6">Skewed element</div>', description: "Skew 6 degrees" }
  ],
  preview: [
    {
      title: "Skew Transform",
      titleMs: "Transformasi Condong",
      description: "Skew elements along axes",
      descriptionMs: "Condongkan elemen sepanjang paksi",
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:0">0\xB0</div>
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:6">6\xB0</div>
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:12">12\xB0</div>
</div>`,
      highlightValue: "skew-x:6"
    }
  ]
};
var transformOrigin = {
  name: "transform-origin",
  property: "visual",
  syntax: 'visual="origin:[value]"',
  description: "Set transform origin point",
  descriptionMs: "Tetapkan titik asal transformasi",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "center", css: "transform-origin: center;", description: "Center origin", descriptionMs: "Asal tengah" },
    { value: "top", css: "transform-origin: top;", description: "Top origin", descriptionMs: "Asal atas" },
    { value: "top-right", css: "transform-origin: top right;", description: "Top right", descriptionMs: "Atas kanan" },
    { value: "right", css: "transform-origin: right;", description: "Right origin", descriptionMs: "Asal kanan" },
    { value: "bottom-right", css: "transform-origin: bottom right;", description: "Bottom right", descriptionMs: "Bawah kanan" },
    { value: "bottom", css: "transform-origin: bottom;", description: "Bottom origin", descriptionMs: "Asal bawah" },
    { value: "bottom-left", css: "transform-origin: bottom left;", description: "Bottom left", descriptionMs: "Bawah kiri" },
    { value: "left", css: "transform-origin: left;", description: "Left origin", descriptionMs: "Asal kiri" },
    { value: "top-left", css: "transform-origin: top left;", description: "Top left", descriptionMs: "Atas kiri" }
  ],
  examples: [
    { code: '<div visual="rotate:45 origin:top-left">Rotate from corner</div>', description: "Rotate from corner" }
  ],
  preview: [
    {
      title: "Transform Origin",
      titleMs: "Asal Transformasi",
      description: "Set the pivot point for transforms",
      descriptionMs: "Tetapkan titik pangsi untuk transformasi",
      html: `<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small rotate:45 origin:center">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small rotate:45 origin:top-left">top-left</div>
</div>`,
      highlightValue: "origin:center"
    }
  ]
};
var transformDefinitions = {
  transformScale,
  transformRotate,
  transformTranslate,
  transformSkew,
  transformOrigin
};
var visual_transforms_default = transformDefinitions;

// src/definitions/visual-borders.js
var borderColor = {
  name: "border",
  property: "visual",
  syntax: 'visual="border:[color]/[opacity]" | visual="border-{t|b|l|r|x|y}:[color]/[opacity]"',
  engine: { templates: { "border": "border-color: {value}; border-style: solid;", "border-t": "border-top-color: {value}; border-top-style: solid;", "border-b": "border-bottom-color: {value}; border-bottom-style: solid;", "border-l": "border-left-color: {value}; border-left-style: solid;", "border-r": "border-right-color: {value}; border-right-style: solid;", "border-x": "border-left-color: {value}; border-right-color: {value}; border-left-style: solid; border-right-style: solid;", "border-y": "border-top-color: {value}; border-bottom-color: {value}; border-top-style: solid; border-bottom-style: solid;" } },
  description: "Set border color for all sides or specific sides",
  descriptionMs: "Tetapkan warna sempadan untuk semua sisi atau sisi tertentu",
  category: "visual",
  usesScale: "colors",
  supportsArbitrary: true,
  values: [
    { value: "primary", css: "border-color: var(--c-primary); border-style: solid;", description: "Primary color border", descriptionMs: "Sempadan warna utama" },
    { value: "gray-300", css: "border-color: var(--c-gray-300); border-style: solid;", description: "Light gray border", descriptionMs: "Sempadan kelabu cerah" },
    { value: "danger", css: "border-color: var(--c-danger); border-style: solid;", description: "Danger/error border", descriptionMs: "Sempadan bahaya/ralat" }
  ],
  examples: [
    { code: '<div visual="border:primary border-w:thin">Primary border</div>', description: "Border on all sides" },
    { code: '<div visual="border-t:primary border-t-w:regular">Top only</div>', description: "Top border only" },
    { code: '<div visual="border-b:gray-300 border-b-w:thin">Bottom only</div>', description: "Bottom border only" },
    { code: '<div visual="border-x:primary border-x-w:regular">Left & right</div>', description: "Horizontal borders" },
    { code: '<div visual="border-y:gray-300 border-y-w:thin">Top & bottom</div>', description: "Vertical borders" },
    { code: '<div visual="border:primary/50 border-w:thin">50% opacity</div>', description: "With opacity modifier" }
  ],
  preview: [
    {
      title: "Border Colors",
      titleMs: "Warna Sempadan",
      description: "Apply border with color on all sides",
      descriptionMs: "Terapkan sempadan dengan warna pada semua sisi",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:primary border-w:regular rounded:small">primary</div>
  <div space="p:medium" visual="border:danger border-w:regular rounded:small">danger</div>
  <div space="p:medium" visual="border:neutral-400 border-w:regular rounded:small">neutral</div>
</div>`,
      highlightValue: "border:primary"
    },
    {
      title: "Directional Borders",
      titleMs: "Sempadan Arah",
      description: "Apply borders to specific sides",
      descriptionMs: "Terapkan sempadan pada sisi tertentu",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border-t:primary border-t-w:regular bg:white dark:bg:neutral-800 rounded:small">top</div>
  <div space="p:medium" visual="border-b:primary border-b-w:regular bg:white dark:bg:neutral-800 rounded:small">bottom</div>
  <div space="p:medium" visual="border-l:primary border-l-w:regular bg:white dark:bg:neutral-800 rounded:small">left</div>
</div>`,
      highlightValue: "border-t:primary"
    }
  ]
};
var borderWidth = {
  name: "border-width",
  property: "visual",
  syntax: 'visual="border-w:[value]" | visual="border-{t|b|l|r|x|y}-w:[value]"',
  engine: { templates: { "border-w": "border-width: {value};", "border-t-w": "border-top-width: {value};", "border-b-w": "border-bottom-width: {value};", "border-l-w": "border-left-width: {value};", "border-r-w": "border-right-width: {value};", "border-x-w": "border-left-width: {value}; border-right-width: {value};", "border-y-w": "border-top-width: {value}; border-bottom-width: {value};" } },
  description: "Set border width for all sides or specific sides",
  descriptionMs: "Tetapkan lebar sempadan untuk semua sisi atau sisi tertentu",
  category: "visual",
  usesScale: "spacing",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "border-width: var(--s-none);", description: "No border (0px)", descriptionMs: "Tiada sempadan (0px)" },
    { value: "thin", css: "border-width: var(--s-thin);", description: "Thin border (1px)", descriptionMs: "Sempadan nipis (1px)" },
    { value: "regular", css: "border-width: var(--s-regular);", description: "Standard border (2px)", descriptionMs: "Sempadan standard (2px)" },
    { value: "thick", css: "border-width: var(--s-thick);", description: "Thick border (3px)", descriptionMs: "Sempadan tebal (3px)" }
  ],
  examples: [
    { code: '<div visual="border:gray-300 border-w:thin">Thin 1px border</div>', description: "Thin border (1px)" },
    { code: '<div visual="border:gray-300 border-w:regular">Standard 2px border</div>', description: "Regular border (2px)" },
    { code: '<div visual="border:gray-300 border-w:thick">Thick 3px border</div>', description: "Thick border (3px)" },
    { code: '<div visual="border-b:primary border-b-w:regular">Bottom border only</div>', description: "Bottom border width" },
    { code: '<div visual="border-x:primary border-x-w:thin">Horizontal borders</div>', description: "Horizontal border width" }
  ],
  preview: [
    {
      title: "Border Widths",
      titleMs: "Lebar Sempadan",
      description: "Different border width options",
      descriptionMs: "Pilihan lebar sempadan berbeza",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:neutral-500 border-w:thin rounded:small bg:white dark:bg:neutral-800">thin</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular rounded:small bg:white dark:bg:neutral-800">regular</div>
  <div space="p:medium" visual="border:neutral-500 border-w:thick rounded:small bg:white dark:bg:neutral-800">thick</div>
</div>`,
      highlightValue: "border-w:regular"
    }
  ]
};
var borderStyle = {
  name: "border-style",
  property: "visual",
  syntax: 'visual="border-style:[value]"',
  description: "Set border style",
  descriptionMs: "Tetapkan gaya sempadan",
  category: "visual",
  values: [
    { value: "solid", css: "border-style: solid;", description: "Solid border", descriptionMs: "Sempadan pepejal" },
    { value: "dashed", css: "border-style: dashed;", description: "Dashed border", descriptionMs: "Sempadan putus-putus" },
    { value: "dotted", css: "border-style: dotted;", description: "Dotted border", descriptionMs: "Sempadan bertitik" },
    { value: "double", css: "border-style: double;", description: "Double border", descriptionMs: "Sempadan berganda" },
    { value: "none", css: "border-style: none;", description: "No border", descriptionMs: "Tiada sempadan" }
  ],
  examples: [
    { code: '<div visual="border:gray-300 border-style:dashed">Dashed border</div>', description: "Dashed border" }
  ],
  preview: [
    {
      title: "Border Styles",
      titleMs: "Gaya Sempadan",
      description: "Different border style options",
      descriptionMs: "Pilihan gaya sempadan berbeza",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:solid rounded:small bg:white dark:bg:neutral-800">solid</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:dashed rounded:small bg:white dark:bg:neutral-800">dashed</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:dotted rounded:small bg:white dark:bg:neutral-800">dotted</div>
</div>`,
      highlightValue: "border-style:dashed"
    }
  ]
};
var outlineWidth = {
  name: "outline-w",
  property: "visual",
  syntax: 'visual="outline-w:[value]"',
  description: "Set outline width",
  descriptionMs: "Tetapkan lebar garis luar",
  category: "visual",
  usesScale: "spacing",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "outline-width: var(--s-none);", description: "No outline width (0px)", descriptionMs: "Tiada lebar garis luar (0px)" },
    { value: "thin", css: "outline-width: var(--s-thin);", description: "Thin outline (1px)", descriptionMs: "Garis luar nipis (1px)" },
    { value: "regular", css: "outline-width: var(--s-regular);", description: "Regular outline (2px)", descriptionMs: "Garis luar biasa (2px)" },
    { value: "thick", css: "outline-width: var(--s-thick);", description: "Thick outline (3px)", descriptionMs: "Garis luar tebal (3px)" }
  ],
  examples: [
    { code: '<button visual="outline-w:regular outline:primary">Outlined button</button>', description: "Regular width outline" }
  ],
  preview: [
    {
      title: "Outline Widths",
      titleMs: "Lebar Garis Luar",
      description: "Different outline width options",
      descriptionMs: "Pilihan lebar garis luar berbeza",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-w:thin rounded:small">thin</div>
  <div space="p:medium" visual="outline:primary outline-w:regular rounded:small">regular</div>
  <div space="p:medium" visual="outline:primary outline-w:thick rounded:small">thick</div>
</div>`,
      highlightValue: "outline-w:regular"
    }
  ]
};
var outlineColor = {
  name: "outline",
  property: "visual",
  syntax: 'visual="outline:[color]/[opacity]"',
  engine: { template: "outline-color: {value};", enum: { none: "outline: none;" } },
  description: "Set outline color",
  descriptionMs: "Tetapkan warna garis luar",
  category: "visual",
  usesScale: "colors",
  supportsArbitrary: true,
  values: [],
  examples: [
    { code: '<button visual="focus:outline:primary">Focus outline</button>', description: "Focus outline" },
    { code: '<button visual="outline:primary/50">50% opacity</button>', description: "With opacity modifier" }
  ],
  preview: [
    {
      title: "Outline",
      titleMs: "Garis Luar",
      description: "Outline does not affect layout",
      descriptionMs: "Garis luar tidak mempengaruhi susun atur",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="outline:primary bg:white dark:bg:neutral-800 rounded:small">outline:primary</button>
</div>`,
      highlightValue: "outline:primary"
    }
  ]
};
var outlineOffset = {
  name: "outline-offset",
  property: "visual",
  syntax: 'visual="outline-offset:[value]"',
  description: "Set outline offset (gap between outline and element)",
  descriptionMs: "Tetapkan offset garis luar (jarak antara garis luar dan elemen)",
  category: "visual",
  usesScale: "spacing",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "outline-offset: var(--s-none);", description: "No offset (0px)", descriptionMs: "Tiada offset (0px)" },
    { value: "thin", css: "outline-offset: var(--s-thin);", description: "Thin offset (1px)", descriptionMs: "Offset nipis (1px)" },
    { value: "small", css: "outline-offset: var(--s-small);", description: "Small offset (4px)", descriptionMs: "Offset kecil (4px)" },
    { value: "medium", css: "outline-offset: var(--s-medium);", description: "Medium offset (16px)", descriptionMs: "Offset sederhana (16px)" }
  ],
  examples: [
    { code: '<button visual="outline:primary outline-offset:small">Offset outline</button>', description: "Outline with offset" }
  ],
  preview: [
    {
      title: "Outline Offset",
      titleMs: "Offset Garis Luar",
      description: "Offset creates space between outline and element",
      descriptionMs: "Offset mewujudkan ruang antara garis luar dan elemen",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-offset:none rounded:small">none</div>
  <div space="p:medium" visual="outline:primary outline-offset:small rounded:small">small</div>
  <div space="p:medium" visual="outline:primary outline-offset:medium rounded:small">medium</div>
</div>`,
      highlightValue: "outline-offset:small"
    }
  ]
};
var outlineStyle = {
  name: "outline-style",
  property: "visual",
  syntax: 'visual="outline-style:[value]"',
  description: "Set outline style",
  descriptionMs: "Tetapkan gaya garis luar",
  category: "visual",
  values: [
    { value: "solid", css: "outline-style: solid;", description: "Solid outline", descriptionMs: "Garis luar pepejal" },
    { value: "dashed", css: "outline-style: dashed;", description: "Dashed outline", descriptionMs: "Garis luar putus-putus" },
    { value: "dotted", css: "outline-style: dotted;", description: "Dotted outline", descriptionMs: "Garis luar bertitik" },
    { value: "double", css: "outline-style: double;", description: "Double outline", descriptionMs: "Garis luar berganda" },
    { value: "none", css: "outline-style: none;", description: "No outline", descriptionMs: "Tiada garis luar" }
  ],
  examples: [
    { code: '<button visual="outline:primary outline-style:dashed">Dashed outline</button>', description: "Dashed outline style" }
  ],
  preview: [
    {
      title: "Outline Styles",
      titleMs: "Gaya Garis Luar",
      description: "Different outline style options",
      descriptionMs: "Pilihan gaya garis luar berbeza",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:solid rounded:small">solid</div>
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:dashed rounded:small">dashed</div>
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:dotted rounded:small">dotted</div>
</div>`,
      highlightValue: "outline-style:dashed"
    }
  ]
};
var ring = {
  name: "ring",
  property: "visual",
  syntax: 'visual="ring:[size]"',
  engine: { keywords: { "ring-inset": "--ring-inset: inset;" }, utilities: { "ring-w": { template: "--ss-ring-width: {value};", scale: "spacing", numeric: { unit: "px" }, arbitrary: true } }, scale: "spacing", valuesAreExamples: true, template: "--ss-ring-width: {value}; box-shadow: var(--ring-inset) 0 0 0 calc(var(--ss-ring-width) + var(--ss-ring-offset-width, 0px)) var(--ss-ring-color);", literals: { thin: "1px", regular: "2px", small: "4px", medium: "6px", big: "8px" }, numeric: { unit: "px" }, enum: { none: "box-shadow: 0 0 #0000;" } },
  description: "Add focus ring around element using box-shadow",
  descriptionMs: "Tambah cincin fokus pada elemen menggunakan box-shadow",
  category: "visual",
  usesScale: "ring",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "box-shadow: 0 0 0 0 transparent;", description: "No ring", descriptionMs: "Tiada cincin" },
    { value: "thin", css: "box-shadow: var(--ring-inset) 0 0 0 1px var(--ss-ring-color);", description: "Thin ring (1px)", descriptionMs: "Cincin nipis (1px)" },
    { value: "regular", css: "box-shadow: var(--ring-inset) 0 0 0 2px var(--ss-ring-color);", description: "Regular ring (2px)", descriptionMs: "Cincin biasa (2px)" },
    { value: "small", css: "box-shadow: var(--ring-inset) 0 0 0 4px var(--ss-ring-color);", description: "Small ring (4px)", descriptionMs: "Cincin kecil (4px)" },
    { value: "medium", css: "box-shadow: var(--ring-inset) 0 0 0 6px var(--ss-ring-color);", description: "Medium ring (6px)", descriptionMs: "Cincin sederhana (6px)" },
    { value: "big", css: "box-shadow: var(--ring-inset) 0 0 0 8px var(--ss-ring-color);", description: "Big ring (8px)", descriptionMs: "Cincin besar (8px)" }
  ],
  examples: [
    { code: '<button visual="focus-visible:ring:small ring-color:primary">Focus me</button>', description: "Focus ring on keyboard focus" },
    { code: '<input visual="focus:ring:regular ring-color:blue-500">', description: "Input with focus ring" }
  ],
  preview: [
    {
      title: "Focus Ring",
      titleMs: "Cincin Fokus",
      description: "Ring appears on keyboard focus (try Tab key)",
      descriptionMs: "Cincin muncul pada fokus papan kekunci (cuba kekunci Tab)",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="bg:primary text:white rounded:small focus-visible:ring:small ring-color:blue-300">Tab to me</button>
  <button space="p:small p-x:medium" visual="bg:white dark:bg:neutral-800 border:neutral-300 border-w:thin rounded:small focus-visible:ring:small ring-color:primary">Or me</button>
</div>`,
      highlightValue: "focus-visible:ring:small"
    }
  ]
};
var ringColor = {
  name: "ring-color",
  property: "visual",
  syntax: 'visual="ring-color:[color]/[opacity]"',
  engine: { utilities: { "ring-offset-color": { template: "--ss-ring-offset-color: {value};", scale: "colors", color: true, arbitrary: true } } },
  description: "Set ring color",
  descriptionMs: "Tetapkan warna cincin",
  category: "visual",
  usesScale: "colors",
  supportsArbitrary: true,
  values: [
    { value: "primary", css: "--ss-ring-color: var(--c-primary);", description: "Primary ring color", descriptionMs: "Warna cincin utama" },
    { value: "blue-500", css: "--ss-ring-color: var(--c-blue-500);", description: "Blue ring color", descriptionMs: "Warna cincin biru" }
  ],
  examples: [
    { code: '<button visual="ring:small ring-color:primary">Colored ring</button>', description: "Ring with custom color" },
    { code: '<button visual="ring:small ring-color:primary/50">50% opacity ring</button>', description: "Ring with opacity modifier" }
  ],
  preview: [
    {
      title: "Ring Color",
      titleMs: "Warna Cincin",
      description: "Set the color of the focus ring",
      descriptionMs: "Tetapkan warna cincin fokus",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="ring:regular ring-color:primary bg:white dark:bg:neutral-800 rounded:small">primary</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-color:danger bg:white dark:bg:neutral-800 rounded:small">danger</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-color:success bg:white dark:bg:neutral-800 rounded:small">success</button>
</div>`,
      highlightValue: "ring-color:primary"
    }
  ]
};
var ringOffset = {
  name: "ring-offset",
  property: "visual",
  syntax: 'visual="ring-offset:[size]"',
  engine: { scale: "spacing", numeric: { unit: "px" } },
  description: "Add gap between ring and element",
  descriptionMs: "Tambah ruang antara cincin dan elemen",
  category: "visual",
  supportsArbitrary: true,
  values: [
    { value: "0", css: "--ss-ring-offset-width: 0px;", description: "No offset", descriptionMs: "Tiada ruang" },
    { value: "2", css: "--ss-ring-offset-width: 2px;", description: "2px offset", descriptionMs: "Ruang 2px" },
    { value: "4", css: "--ss-ring-offset-width: 4px;", description: "4px offset", descriptionMs: "Ruang 4px" }
  ],
  examples: [
    { code: '<button visual="ring:small ring-offset:2 ring-color:primary">With offset</button>', description: "Ring with offset" }
  ],
  preview: [
    {
      title: "Ring Offset",
      titleMs: "Offset Cincin",
      description: "Add space between ring and element",
      descriptionMs: "Tambah ruang antara cincin dan elemen",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:0 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">0</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:2 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">2px</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:4 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">4px</button>
</div>`,
      highlightValue: "ring-offset:2"
    }
  ]
};
var borderDefinitions = {
  borderColor,
  borderWidth,
  borderStyle,
  outlineWidth,
  outlineColor,
  outlineOffset,
  outlineStyle,
  ring,
  ringColor,
  ringOffset
};
var visual_borders_default = borderDefinitions;

// src/definitions/visual-divide.js
var divideColor = {
  name: "divide",
  property: "visual",
  syntax: 'visual="divide:[color]/[opacity]" | visual="divide-{x|y}:[color]/[opacity]" | visual="divide-{x|y}:reverse"',
  engine: { prefixes: ["divide", "divide-x", "divide-y"], templates: { "divide": "border-color: {value}; border-style: solid;", "divide-x": "border-left-color: {value}; border-right-color: {value}; border-left-style: solid; border-right-style: solid;", "divide-y": "border-top-color: {value}; border-bottom-color: {value}; border-top-style: solid; border-bottom-style: solid;" } },
  description: "Add borders between child elements",
  descriptionMs: "Tambah sempadan antara elemen anak",
  category: "visual",
  usesScale: "colors",
  supportsArbitrary: true,
  values: [
    { value: "primary", css: "border-color: var(--c-primary); border-style: solid;", description: "Primary color divider", descriptionMs: "Pemisah warna utama" },
    { value: "gray-300", css: "border-color: var(--c-gray-300); border-style: solid;", description: "Light gray divider", descriptionMs: "Pemisah kelabu cerah" },
    { value: "danger", css: "border-color: var(--c-danger); border-style: solid;", description: "Danger/error divider", descriptionMs: "Pemisah bahaya/ralat" }
  ],
  examples: [
    { code: '<div visual="divide:primary divide-w:thin">', description: "Divide with primary color" },
    { code: '<div visual="divide-y:gray-300 divide-y-w:regular">', description: "Vertical dividers only" },
    { code: '<div visual="divide-x:danger divide-x-w:thin">', description: "Horizontal dividers only" },
    { code: '<div layout="flex flex-row-reverse" visual="divide-x:primary divide-x-w:thin divide-x:reverse">', description: "Reverse dividers for flex-reverse" },
    { code: '<div visual="divide:primary/50 divide-w:thin">', description: "50% opacity divide" }
  ],
  preview: [
    {
      title: "Divide Colors",
      titleMs: "Warna Pemisah",
      description: "Add dividers between flex/grid items",
      descriptionMs: "Tambah pemisah antara item flex/grid",
      html: `<div layout="flex col" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium divide-y-w:thin divide:primary">
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 1</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 2</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 3</div>
</div>
<div layout="flex" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium divide:red-500 divide-x-w:thin">
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 1</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 2</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 3</div>
</div>`,
      highlightValue: "divide:primary"
    },
    {
      title: "Directional Divides",
      titleMs: "Pemisah Arah",
      description: "Divide on specific axes",
      descriptionMs: "Pemisah pada paksi tertentu",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide-y:gray-300 divide-y-w:thin">
    <div space="p:small">Item 1</div>
    <div space="p:small">Item 2</div>
    <div space="p:small">Item 3</div>
  </div>
  <div layout="flex" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide-x:primary divide-x-w:thin">
    <div space="p:small">Item 1</div>
    <div space="p:small">Item 2</div>
    <div space="p:small">Item 3</div>
  </div>
</div>`,
      highlightValue: "divide-y:gray-300"
    }
  ]
};
var divideWidth = {
  name: "divide-width",
  property: "visual",
  syntax: 'visual="divide-w:[value]" | visual="divide-{x|y}-w:[value]"',
  engine: { templates: { "divide-w": "border-top-width: calc({value} * (1 - var(--ss-divide-y-reverse))); border-bottom-width: calc({value} * var(--ss-divide-y-reverse)); border-left-width: calc({value} * (1 - var(--ss-divide-x-reverse))); border-right-width: calc({value} * var(--ss-divide-x-reverse));", "divide-x-w": "border-right-width: calc({value} * var(--ss-divide-x-reverse)); border-left-width: calc({value} * (1 - var(--ss-divide-x-reverse)));", "divide-y-w": "border-bottom-width: calc({value} * var(--ss-divide-y-reverse)); border-top-width: calc({value} * (1 - var(--ss-divide-y-reverse)));" } },
  description: "Set divider width",
  descriptionMs: "Tetapkan lebar pemisah",
  category: "visual",
  usesScale: "spacing",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "border-width: var(--s-none);", description: "No divider (0px)", descriptionMs: "Tiada pemisah (0px)" },
    { value: "thin", css: "border-width: var(--s-thin);", description: "Thin divider (1px)", descriptionMs: "Pemisah nipis (1px)" },
    { value: "regular", css: "border-width: var(--s-regular);", description: "Standard divider (2px)", descriptionMs: "Pemisah standard (2px)" },
    { value: "thick", css: "border-width: var(--s-thick);", description: "Thick divider (3px)", descriptionMs: "Pemisah tebal (3px)" }
  ],
  examples: [
    { code: '<div visual="divide:gray-300 divide-w:thin">', description: "Thin dividers (1px)" },
    { code: '<div visual="divide:gray-300 divide-w:regular">', description: "Regular dividers (2px)" },
    { code: '<div visual="divide:gray-300 divide-w:thick">', description: "Thick dividers (3px)" },
    { code: '<div visual="divide-y:primary divide-y-w:regular">', description: "Vertical dividers with width" },
    { code: '<div visual="divide-x:primary divide-x-w:thin">', description: "Horizontal dividers with width" }
  ],
  preview: [
    {
      title: "Divide Widths",
      titleMs: "Lebar Pemisah",
      description: "Different divider width options",
      descriptionMs: "Pilihan lebar pemisah berbeza",
      html: `<div layout="flex col" space="p:medium g:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:thin">
    <div space="p:medium">thin (1px)</div>
    <div space="p:medium">thin (1px)</div>
    <div space="p:medium">thin (1px)</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular">
    <div space="p:medium">regular (2px)</div>
    <div space="p:medium">regular (2px)</div>
    <div space="p:medium">regular (2px)</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:thick">
    <div space="p:medium">thick (3px)</div>
    <div space="p:medium">thick (3px)</div>
    <div space="p:medium">thick (3px)</div>
  </div>
</div>`,
      highlightValue: "divide-w:regular"
    }
  ]
};
var divideReverse = {
  name: "divide-reverse",
  property: "visual",
  syntax: 'visual="divide-{x|y}:reverse"',
  engine: { prefixes: [] },
  description: "Reverse border side for flex-reverse",
  descriptionMs: "Songsangkan sisi sempadan untuk flex-reverse",
  category: "visual",
  values: [
    { value: "divide-x:reverse", css: "--ss-divide-x-reverse: 1;", description: "Reverse X-axis divider", descriptionMs: "Songsangkan pemisah paksi-X" },
    { value: "divide-y:reverse", css: "--ss-divide-y-reverse: 1;", description: "Reverse Y-axis divider", descriptionMs: "Songsangkan pemisah paksi-Y" }
  ],
  examples: [
    { code: '<div layout="flex flex-row-reverse" visual="divide-x:gray-300 divide-x-w:thin divide-x:reverse">', description: "Reverse X divider" },
    { code: '<div layout="flex flex-col-reverse" visual="divide-y:gray-300 divide-y-w:thin divide-y:reverse">', description: "Reverse Y divider" }
  ],
  preview: [
    {
      title: "Reverse vs Normal",
      titleMs: "Songsang vs Biasa",
      description: "Comparison of normal flow vs reverse flow dividers",
      descriptionMs: "Perbandingan pemisah aliran biasa vs songsang",
      html: `<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular">
    <div space="p:small">1</div>
    <div space="p:small">2</div>
    <div space="p:small">3</div>
  </div>
  <div layout="flex row-reverse" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-x:reverse">
    <div space="p:small">1(R)</div>
    <div space="p:small">2(R)</div>
    <div space="p:small">3(R)</div>
  </div>
</div>`,
      highlightValue: "divide-x:reverse"
    }
  ]
};
var divideStyle = {
  name: "divide-style",
  property: "visual",
  syntax: 'visual="divide-style:[value]"',
  description: "Set divider style",
  descriptionMs: "Tetapkan gaya pemisah",
  category: "visual",
  values: [
    { value: "solid", css: "border-style: solid;", description: "Solid divider", descriptionMs: "Pemisah pepejal" },
    { value: "dashed", css: "border-style: dashed;", description: "Dashed divider", descriptionMs: "Pemisah putus-putus" },
    { value: "dotted", css: "border-style: dotted;", description: "Dotted divider", descriptionMs: "Pemisah bertitik" },
    { value: "double", css: "border-style: double;", description: "Double divider", descriptionMs: "Pemisah berganda" },
    { value: "none", css: "border-style: none;", description: "No divider", descriptionMs: "Tiada pemisah" }
  ],
  examples: [
    { code: '<div visual="divide:gray-300 divide-style:dashed">', description: "Dashed dividers" },
    { code: '<div visual="divide:gray-300 divide-style:dotted">', description: "Dotted dividers" },
    { code: '<div visual="divide:gray-300 divide-style:double">', description: "Double dividers" }
  ],
  preview: [
    {
      title: "Divide Styles",
      titleMs: "Gaya Pemisah",
      description: "Different divider style options",
      descriptionMs: "Pilihan gaya pemisah berbeza",
      html: `<div layout="flex col" space="p:medium g:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:solid border:neutral-500 border-w:regular border-style:solid">
    <div space="p:medium">solid</div>
    <div space="p:medium">solid</div>
    <div space="p:medium">solid</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:dashed border:neutral-500 border-w:regular border-style:dashed">
    <div space="p:medium">dashed</div>
    <div space="p:medium">dashed</div>
    <div space="p:medium">dashed</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:dotted border:neutral-500 border-w:regular border-style:dotted">
    <div space="p:medium">dotted</div>
    <div space="p:medium">dotted</div>
    <div space="p:medium">dotted</div>
  </div>
</div>`,
      highlightValue: "divide-style:dashed"
    }
  ]
};
var spaceBetween = {
  name: "space-between",
  property: "visual",
  syntax: 'visual="space-x:[value]" or visual="space-y:[value]"',
  description: "Add space between direct children (margin on every child after the first), like Tailwind space-x/space-y",
  descriptionMs: "Tambah ruang antara anak langsung (margin pada setiap anak selepas yang pertama)",
  category: "visual",
  usesScale: "spacing",
  supportsArbitrary: true,
  engine: {
    utilities: {
      "space-x": { template: "margin-left: {value};", scale: "spacing", arbitrary: true, negatable: true },
      "space-y": { template: "margin-top: {value};", scale: "spacing", arbitrary: true, negatable: true }
    }
  },
  values: [
    { property: "space-x", css: "margin-left: var(--s-{value});", description: "Horizontal space between children", descriptionMs: "Ruang mendatar antara anak" },
    { property: "space-y", css: "margin-top: var(--s-{value});", description: "Vertical space between children", descriptionMs: "Ruang menegak antara anak" }
  ],
  scaleValues: ["none", "tiny", "small", "medium", "large", "big", "giant"],
  examples: [
    { code: '<ul visual="space-y:small"><li>a</li><li>b</li></ul>', description: "Vertical rhythm between list items" },
    { code: '<nav layout="flex" visual="space-x:medium">\u2026</nav>', description: "Horizontal spacing without gap" }
  ]
};
var divideDefinitions = {
  divideColor,
  divideWidth,
  divideStyle,
  divideReverse,
  spaceBetween
};
var visual_divide_default = divideDefinitions;

// src/definitions/visual-svg.js
var svgFill = {
  name: "fill",
  property: "visual",
  syntax: 'visual="fill:[color]/[opacity]"',
  description: "Set SVG fill color",
  descriptionMs: "Tetapkan warna pengisian SVG",
  category: "visual",
  usesScale: "colors",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "fill: none;", description: "No fill", descriptionMs: "Tiada pengisian" },
    { value: "current", css: "fill: currentColor;", description: "Current color", descriptionMs: "Warna semasa" }
  ],
  examples: [
    { code: '<svg visual="fill:primary">...</svg>', description: "Primary fill" },
    { code: '<svg visual="fill:primary/50">...</svg>', description: "50% opacity fill" }
  ],
  preview: [
    {
      title: "SVG Fill",
      titleMs: "Pengisian SVG",
      description: "Fill SVG elements with color",
      descriptionMs: "Isi elemen SVG dengan warna",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="fill:primary" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="fill:danger" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="fill:success" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
</div>`,
      highlightValue: "fill:primary"
    }
  ]
};
var svgStroke = {
  name: "stroke",
  property: "visual",
  syntax: 'visual="stroke:[color]/[opacity]"',
  description: "Set SVG stroke color",
  descriptionMs: "Tetapkan warna gurisan SVG",
  category: "visual",
  usesScale: "colors",
  supportsArbitrary: true,
  values: [
    { value: "none", css: "stroke: none;", description: "No stroke", descriptionMs: "Tiada gurisan" },
    { value: "current", css: "stroke: currentColor;", description: "Current color", descriptionMs: "Warna semasa" }
  ],
  examples: [
    { code: '<svg visual="stroke:primary stroke-w:2">...</svg>', description: "Primary stroke" },
    { code: '<svg visual="stroke:primary/50 stroke-w:2">...</svg>', description: "50% opacity stroke" }
  ],
  preview: [
    {
      title: "SVG Stroke",
      titleMs: "Gurisan SVG",
      description: "Stroke SVG elements with color",
      descriptionMs: "Guris elemen SVG dengan warna",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="stroke:primary fill:none stroke-w:2" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:danger fill:none stroke-w:2" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
</div>`,
      highlightValue: "stroke:primary"
    }
  ]
};
var svgStrokeWidth = {
  name: "stroke-width",
  property: "visual",
  syntax: 'visual="stroke-w:[value]"',
  engine: { enum: { "0": "stroke-width: 0px;" } },
  description: "Set SVG stroke width",
  descriptionMs: "Tetapkan lebar gurisan SVG",
  category: "visual",
  supportsArbitrary: true,
  dynamic: true,
  values: [
    { value: "0", css: "stroke-width: 0;", description: "No stroke", descriptionMs: "Tiada gurisan" },
    { value: "1", css: "stroke-width: 1px;", description: "1px stroke", descriptionMs: "Gurisan 1px" },
    { value: "2", css: "stroke-width: 2px;", description: "2px stroke", descriptionMs: "Gurisan 2px" }
  ],
  examples: [
    { code: '<svg visual="stroke:black stroke-w:2">...</svg>', description: "2px stroke" }
  ],
  preview: [
    {
      title: "Stroke Width",
      titleMs: "Lebar Gurisan",
      description: "Control SVG stroke thickness",
      descriptionMs: "Kawal ketebalan gurisan SVG",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <svg visual="stroke:primary fill:none stroke-w:1" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:primary fill:none stroke-w:2" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
  <svg visual="stroke:primary fill:none stroke-w:3" width="40" height="40" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
</div>`,
      highlightValue: "stroke-w:2"
    }
  ]
};
var svgDefinitions = {
  svgFill,
  svgStroke,
  svgStrokeWidth
};
var visual_svg_default = svgDefinitions;

// src/definitions/visual-performance.js
var contentVisibility = {
  name: "content-visibility",
  property: "visual",
  syntax: 'visual="content-visibility:[value]"',
  engine: { attrs: ["visual", "layout"] },
  description: "Optimize rendering by skipping off-screen content",
  descriptionMs: "Optimumkan rendering dengan melangkau kandungan luar skrin",
  category: "visual",
  values: [
    { value: "visible", css: "content-visibility: visible;", description: "Render all content", descriptionMs: "Render semua kandungan" },
    { value: "auto", css: "content-visibility: auto;", description: "Skip when off-screen", descriptionMs: "Langkau bila luar skrin" },
    { value: "hidden", css: "content-visibility: hidden;", description: "Never render off-screen", descriptionMs: "Jangan render luar skrin" }
  ],
  examples: [
    { code: '<section visual="content-visibility:auto">Large list</section>', description: "Auto-optimize large content" },
    { code: '<div visual="content-visibility:hidden">Hidden until needed</div>', description: "Hide until revealed" }
  ],
  preview: [
    {
      title: "Content Visibility",
      titleMs: "Ketampakan Kandungan",
      description: "Performance optimization for off-screen content",
      descriptionMs: "Pengoptimuman prestasi untuk kandungan luar skrin",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">visible</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">hidden</div>
 </div>`,
      highlightValue: "content-visibility:auto"
    }
  ]
};
var contain = {
  name: "contain",
  property: "visual",
  syntax: 'visual="contain:[value]"',
  engine: { attrs: ["visual", "layout"] },
  description: "Isolate element rendering for performance",
  descriptionMs: "Pencil rendering elemen untuk prestasi",
  category: "visual",
  values: [
    { value: "none", css: "contain: none;", description: "No containment", descriptionMs: "Tiada pengandungan" },
    { value: "strict", css: "contain: strict;", description: "Full containment", descriptionMs: "Pengandungan penuh" },
    { value: "content", css: "contain: content;", description: "Content containment", descriptionMs: "Pengandungan kandungan" },
    { value: "size", css: "contain: size;", description: "Size containment", descriptionMs: "Pengandungan saiz" },
    { value: "layout", css: "contain: layout;", description: "Layout containment", descriptionMs: "Pengandungan susun atur" },
    { value: "style", css: "contain: style;", description: "Style containment", descriptionMs: "Pengandungan gaya" },
    { value: "paint", css: "contain: paint;", description: "Paint containment", descriptionMs: "Pengandungan lukis" }
  ],
  examples: [
    { code: '<div visual="contain:strict">Isolated rendering</div>', description: "Full containment" },
    { code: '<div visual="contain:content">Content isolation</div>', description: "Content only" }
  ],
  preview: [
    {
      title: "Contain",
      titleMs: "Mengandung",
      description: "Isolate element from rest of page for performance",
      descriptionMs: "Pencil elemen dari halaman lain untuk prestasi",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">strict</div>
 </div>`,
      highlightValue: "contain:strict"
    }
  ]
};
var writingMode = {
  name: "writing-mode",
  property: "visual",
  syntax: 'visual="writing-mode:[value]"',
  engine: { attrs: ["visual", "layout"], aliases: ["writing"] },
  description: "Set writing direction for RTL/vertical text",
  descriptionMs: "Tetapkan arah penulisan untuk teks RTL/menegak",
  category: "visual",
  values: [
    { value: "horizontal-tb", css: "writing-mode: horizontal-tb;", description: "Left to right", descriptionMs: "Kiri ke kanan" },
    { value: "vertical-rl", css: "writing-mode: vertical-rl;", description: "Top to bottom RTL", descriptionMs: "Atas ke bawah RTL" },
    { value: "vertical-lr", css: "writing-mode: vertical-lr;", description: "Top to bottom LTR", descriptionMs: "Atas ke bawah LTR" },
    { value: "sideways-rl", css: "writing-mode: sideways-rl;", description: "Sideways RTL", descriptionMs: "Menyerong RTL" },
    { value: "sideways-lr", css: "writing-mode: sideways-lr;", description: "Sideways LTR", descriptionMs: "Menyerong LTR" }
  ],
  examples: [
    { code: '<div visual="writing-mode:vertical-rl">Vertical text</div>', description: "Vertical text RTL" },
    { code: '<div visual="writing-mode:horizontal-tb">Horizontal text</div>', description: "Horizontal text LTR" }
  ],
  preview: [
    {
      title: "Writing Mode",
      titleMs: "Mod Penulisan",
      description: "Control text direction and orientation",
      descriptionMs: "Kawal arah dan orientasi teks",
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">horizontal-tb</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">vertical-rl</div>
 </div>`,
      highlightValue: "writing-mode:vertical-rl"
    }
  ]
};
var performanceDefinitions = {
  contentVisibility,
  contain,
  writingMode
};
var visual_performance_default = performanceDefinitions;

// src/definitions/index.js
var allVisualDefinitions = {
  ...visual_default,
  ...visual_backgrounds_default,
  ...visual_interactivity_default,
  ...visual_typography_default,
  ...visual_transform3d_default,
  ...visual_filters_default,
  ...visual_transitions_default,
  ...visual_transforms_default,
  ...visual_borders_default,
  ...visual_divide_default,
  ...visual_svg_default,
  ...visual_performance_default
};
function getAllDefinitions() {
  return [
    ...Object.values(layout_default),
    ...Object.values(space_default),
    ...Object.values(allVisualDefinitions)
  ];
}
function getDefinitionsByCategory() {
  return {
    layout: Object.values(layout_default),
    space: Object.values(space_default),
    visual: Object.values(allVisualDefinitions)
  };
}
var _mergedDefsCache = null;
function getMergedDefs() {
  if (!_mergedDefsCache) {
    _mergedDefsCache = {
      ...layout_default,
      ...space_default,
      ...allVisualDefinitions
    };
  }
  return _mergedDefsCache;
}
function getDefinition(name) {
  const allDefs = getMergedDefs();
  return allDefs[name] || null;
}
function validateDefinitions(definitions = getAllDefinitions()) {
  const requiredFields = ["name", "property", "description", "descriptionMs", "category"];
  const errors = [];
  for (const def of definitions) {
    for (const field of requiredFields) {
      if (!def[field]) {
        errors.push(`Missing '${field}' in definition '${def.name || "unknown"}'`);
      }
    }
    if (!def.examples || def.examples.length === 0) {
      errors.push(`Missing examples in definition '${def.name}'`);
    }
  }
  return {
    valid: errors.length === 0,
    errors
  };
}
function buildAllMaps() {
  const typographyKeywordDefs = [
    visual_typography_default.fontStyle,
    visual_typography_default.fontSmoothing,
    visual_typography_default.textTransform,
    visual_typography_default.textDecoration,
    visual_typography_default.textOverflow,
    visual_typography_default.textWrap,
    visual_typography_default.whitespace,
    visual_typography_default.wordBreak,
    visual_typography_default.hyphens,
    visual_typography_default.verticalAlign,
    visual_typography_default.listStyle
  ].filter(Boolean);
  return {
    layoutMap: buildLayoutMap(),
    spacePropertyMap: buildSpacePropertyMap(),
    typographyKeywords: buildTypographyKeywordsMap(typographyKeywordDefs)
  };
}
var definitions_default = {
  layout: layout_default,
  space: space_default,
  visual: allVisualDefinitions,
  getAllDefinitions,
  getDefinitionsByCategory,
  getDefinition,
  validateDefinitions,
  buildAllMaps
};

// src/engine/registry.js
var SCALE_VAR_PREFIX = {
  spacing: "--s-",
  colors: "--c-",
  radius: "--r-",
  shadow: "--shadow-",
  fontSize: "--font-",
  fontWeight: "--fw-",
  zIndex: "--z-"
};
var DOC_FIELDS = ["description", "descriptionMs", "examples", "preview", "footnotes", "title", "titleMs"];
function slimDefinitions(definitions) {
  const slimDef = (def) => {
    const out2 = {};
    for (const [k, v] of Object.entries(def)) {
      if (DOC_FIELDS.includes(k)) continue;
      if (k === "values" && Array.isArray(v)) {
        out2.values = v.map((val) => {
          if (!val || typeof val !== "object") return val;
          const o = {};
          for (const [vk, vv] of Object.entries(val)) if (!DOC_FIELDS.includes(vk)) o[vk] = vv;
          return o;
        });
      } else if (k === "percentageAdjectives" && Array.isArray(v)) {
        out2[k] = v.map(({ name, value }) => ({ name, value }));
      } else {
        out2[k] = v;
      }
    }
    return out2;
  };
  const isGrouped = definitions && ["layout", "space", "visual"].every((k) => k in definitions && !definitions[k].name);
  if (isGrouped) {
    const out2 = {};
    for (const cat of ["layout", "space", "visual"]) {
      out2[cat] = {};
      for (const [name, def] of Object.entries(definitions[cat])) out2[cat][name] = slimDef(def);
    }
    return out2;
  }
  const out = {};
  for (const [name, def] of Object.entries(definitions)) out[name] = slimDef(def);
  return out;
}
function toTemplate(css) {
  if (typeof css !== "string") return null;
  return css.replace(/var\(--[a-z-]+?-\{value\}\)/g, "{value}").replace(/\{n\}/g, "{value}");
}
function propsOf(css) {
  if (!css) return [];
  return css.split(";").map((d) => d.split(":")[0].trim()).filter(Boolean);
}
var PHYSICAL_LONGHANDS = /* @__PURE__ */ new Set(["top", "right", "bottom", "left"]);
function rankOf(props) {
  if (!props.length) return 99;
  let best = 99;
  for (const p of props) {
    const name = p.replace(/^-+/, "");
    let rank = name.split("-").length;
    if (PHYSICAL_LONGHANDS.has(name)) rank = 2;
    if (name.startsWith("-webkit-") || name.startsWith("-moz-")) rank += 1;
    if (rank < best) best = rank;
  }
  return best;
}
function prefixesFromSyntax(syntax, attr) {
  const out = [];
  if (!syntax) return out;
  const re = new RegExp(`${attr}="([a-z0-9-]*)(?:\\{([^}]+)\\})?([a-z0-9-]*):`, "g");
  let m;
  while (m = re.exec(syntax)) {
    const [, pre, alts, post] = m;
    if (alts) for (const a of alts.split("|")) pushUnique(out, `${pre}${a}${post}`);
    else pushUnique(out, `${pre}${post}`);
  }
  return out;
}
function pushUnique(arr, v) {
  if (!arr.includes(v)) arr.push(v);
}
function isKeywordSyntax(syntax, attr) {
  return !syntax || new RegExp(`${attr}="\\[`).test(syntax);
}
function singleDeclarationProperty(css) {
  const m = /^\s*([a-zA-Z-]+)\s*:\s*([^;]+);\s*$/.exec(css || "");
  return m ? { prop: m[1], val: m[2].trim() } : null;
}
function deriveNumeric(values) {
  for (const v of values) {
    if (!v || typeof v !== "object" || typeof v.value !== "string" || !/^\d+$/.test(v.value) || v.value === "0") continue;
    const n = v.value;
    const css = v.css || "";
    const tryUnit = (unit, divide) => {
      const literal = divide ? String(Number(n) / divide) : `${n}${unit}`;
      const re = new RegExp(`(?<![\\d.])${literal.replace(".", "\\.")}(?![\\d.])`);
      if (re.test(css)) return { unit, divide, template: css.replace(re, "{value}") };
      return null;
    };
    return tryUnit("deg") || tryUnit("px") || tryUnit("", 100) || tryUnit("") || null;
  }
  return null;
}
var Registry = class {
  constructor() {
    this.keywords = /* @__PURE__ */ new Map();
    this.utilities = /* @__PURE__ */ new Map();
    for (const attr of ["layout", "space", "visual"]) {
      this.keywords.set(attr, /* @__PURE__ */ new Map());
      this.utilities.set(attr, /* @__PURE__ */ new Map());
    }
  }
  addKeyword(entry) {
    const map = this.keywords.get(entry.attr);
    if (!map) return;
    if (!map.has(entry.key)) map.set(entry.key, entry);
  }
  addUtility(entry) {
    const map = this.utilities.get(entry.attr);
    if (!map) return;
    const existing = map.get(entry.key);
    if (existing) {
      existing.enum = { ...existing.enum || {}, ...entry.enum || {} };
      if (existing.literals || entry.literals) existing.literals = { ...existing.literals || {}, ...entry.literals || {} };
      if (entry.scale && !existing.scale) {
        existing.scale = entry.scale;
        existing.varPrefix = entry.varPrefix;
        existing.color = entry.color;
        existing.template = entry.template || existing.template;
        existing.arbitraryTemplate = entry.arbitraryTemplate || existing.arbitraryTemplate;
        existing.negatable = existing.negatable || entry.negatable;
        existing.numeric = existing.numeric || entry.numeric;
        existing.passthrough = false;
      } else if (!existing.template && entry.template) {
        existing.template = entry.template;
        existing.arbitraryTemplate = existing.arbitraryTemplate || entry.arbitraryTemplate;
        existing.numeric = existing.numeric || entry.numeric;
        existing.passthrough = existing.passthrough || entry.passthrough;
      } else if (!existing.scale) {
        existing.passthrough = existing.passthrough && entry.passthrough;
      }
      existing.arbitrary = existing.arbitrary || entry.arbitrary;
      existing.arbitraryWrap = existing.arbitraryWrap || entry.arbitraryWrap;
      existing.childCombinator = existing.childCombinator || entry.childCombinator;
      existing.scaleValues = [.../* @__PURE__ */ new Set([...existing.scaleValues || [], ...entry.scaleValues || []])];
      existing.props = [.../* @__PURE__ */ new Set([...existing.props, ...entry.props])];
      existing.order = Math.min(existing.order, entry.order);
      return;
    }
    map.set(entry.key, entry);
  }
  /** Keyword entry for `attr="key"` or null. */
  keyword(attr, key) {
    return this.keywords.get(attr)?.get(key) || null;
  }
  /** Utility entry for `attr="key:value"` or null. */
  utility(attr, key) {
    return this.utilities.get(attr)?.get(key) || null;
  }
  /** All known keys for an attribute (for "did you mean" suggestions). */
  keys(attr) {
    return [...this.keywords.get(attr)?.keys() || [], ...this.utilities.get(attr)?.keys() || []];
  }
  /** All utility entries (for tests / tooling). */
  entries() {
    const out = [];
    for (const map of this.keywords.values()) out.push(...map.values());
    for (const map of this.utilities.values()) out.push(...map.values());
    return out;
  }
};
function baseEntry(def, attr, key) {
  return {
    id: def.name,
    attr,
    key,
    kind: "utility",
    css: null,
    template: null,
    arbitraryTemplate: null,
    twTemplate: null,
    enum: null,
    literals: null,
    scale: null,
    varPrefix: null,
    scaleValues: Array.isArray(def.scaleValues) ? def.scaleValues.slice() : [],
    arbitrary: !!def.supportsArbitrary,
    arbitraryWrap: null,
    negatable: !!def.supportsNegative,
    numeric: null,
    passthrough: false,
    color: false,
    childCombinator: false,
    composes: null,
    patterns: null,
    quote: false,
    props: [],
    order: 99,
    group: null
  };
}
function finalize(entry) {
  const cssForProps = entry.css || entry.template || entry.arbitraryTemplate || Object.values(entry.enum || {})[0] || "";
  if (!entry.props.length) entry.props = propsOf(cssForProps);
  entry.order = rankOf(entry.props);
  entry.group = entry.props[0] || entry.key;
  if (entry.scale && !entry.varPrefix && SCALE_VAR_PREFIX[entry.scale] && entry.varPrefix !== false) {
    entry.varPrefix = SCALE_VAR_PREFIX[entry.scale];
  }
  if (entry.varPrefix === false) entry.varPrefix = null;
  if (entry.scale === "colors") entry.color = true;
  return entry;
}
function applyEngineMeta(entry, meta, key) {
  if (!meta) return entry;
  const perKey = meta.templates && meta.templates[key] || null;
  if (perKey) entry.template = perKey;
  if (meta.template) entry.template = meta.template;
  if (meta.arbitraryTemplates && meta.arbitraryTemplates[key]) entry.arbitraryTemplate = meta.arbitraryTemplates[key];
  if (meta.arbitraryTemplate) entry.arbitraryTemplate = meta.arbitraryTemplate;
  if (meta.twTemplate) entry.twTemplate = meta.twTemplate;
  if (meta.valuesAreExamples) entry.enum = null;
  if (meta.enum) entry.enum = { ...entry.enum || {}, ...meta.enum };
  if (Array.isArray(meta.patterns)) entry.patterns = [...entry.patterns || [], ...meta.patterns];
  if (meta.enumMap) {
    entry.literals = { ...entry.literals || {}, ...meta.enumMap };
  }
  if (meta.literals) entry.literals = { ...entry.literals || {}, ...meta.literals };
  if (meta.scale !== void 0) entry.scale = meta.scale;
  if (meta.varPrefix !== void 0) entry.varPrefix = meta.varPrefix;
  if (meta.arbitrary !== void 0) entry.arbitrary = meta.arbitrary;
  if (meta.arbitraryWrap) entry.arbitraryWrap = meta.arbitraryWrap;
  if (meta.negatable !== void 0) entry.negatable = meta.negatable;
  if (meta.numeric !== void 0) entry.numeric = meta.numeric === true ? { unit: "", divide: null } : meta.numeric;
  if (meta.passthrough !== void 0) entry.passthrough = meta.passthrough;
  if (meta.color !== void 0) entry.color = meta.color;
  if (meta.childCombinator !== void 0) entry.childCombinator = meta.childCombinator;
  if (meta.composes) entry.composes = meta.composes;
  if (meta.quote !== void 0) entry.quote = meta.quote;
  if (meta.scaleValues) entry.scaleValues = [.../* @__PURE__ */ new Set([...entry.scaleValues, ...meta.scaleValues])];
  if (meta.props) entry.props = meta.props.slice();
  return entry;
}
var T3 = "translate: var(--ss-translate-x, 0) var(--ss-translate-y, 0) var(--ss-translate-z, 0);";
var SC = "scale: var(--ss-scale-x, 1) var(--ss-scale-y, 1);";
var TF = "transform: var(--ss-rotate-x,) var(--ss-rotate-y,) var(--ss-rotate-z,) var(--ss-skew-x,) var(--ss-skew-y,);";
var COMPOSABLE_TRANSFORMS = {
  "translate-x": `--ss-translate-x: {value}; ${T3}`,
  "translate-y": `--ss-translate-y: {value}; ${T3}`,
  "translate-z": `--ss-translate-z: {value}; ${T3}`,
  scale: `--ss-scale-x: {value}; --ss-scale-y: {value}; ${SC}`,
  "scale-x": `--ss-scale-x: {value}; ${SC}`,
  "scale-y": `--ss-scale-y: {value}; ${SC}`,
  rotate: "rotate: {value};",
  "rotate-x": `--ss-rotate-x: rotateX({value}); ${TF}`,
  "rotate-y": `--ss-rotate-y: rotateY({value}); ${TF}`,
  "rotate-z": `--ss-rotate-z: rotateZ({value}); ${TF}`,
  "skew-x": `--ss-skew-x: skewX({value}); ${TF}`,
  "skew-y": `--ss-skew-y: skewY({value}); ${TF}`,
  "-skew-x": `--ss-skew-x: skewX(-{value}); ${TF}`,
  "-skew-y": `--ss-skew-y: skewY(-{value}); ${TF}`
};
var TRANSFORM_PROPERTIES = {
  "--ss-gradient-from": null,
  "--ss-gradient-via": null,
  "--ss-gradient-to": null,
  "--ss-gradient-from-position": "0%",
  "--ss-gradient-via-position": "50%",
  "--ss-gradient-to-position": "100%",
  "--ss-gradient-via-stops": null,
  "--ss-gradient-stops": null,
  "--ss-translate-x": "0",
  "--ss-translate-y": "0",
  "--ss-translate-z": "0",
  "--ss-scale-x": "1",
  "--ss-scale-y": "1",
  "--ss-rotate-x": null,
  "--ss-rotate-y": null,
  "--ss-rotate-z": null,
  "--ss-skew-x": null,
  "--ss-skew-y": null
};
function applyComposableTransforms(registry) {
  for (const [key, template] of Object.entries(COMPOSABLE_TRANSFORMS)) {
    const entry = registry.utility("visual", key);
    if (!entry || !/transform:/.test(entry.template || "")) continue;
    entry.template = template;
    if (entry.arbitraryTemplate) entry.arbitraryTemplate = template;
    if (entry.twTemplate) entry.twTemplate = template;
    entry.composes = "transform";
    if (entry.enum && entry.numeric) {
      entry.enum = Object.fromEntries(Object.entries(entry.enum).filter(([, css]) => !/transform:/.test(css)));
      if (Object.keys(entry.enum).length === 0) entry.enum = null;
    }
  }
}
var configRegistries = /* @__PURE__ */ new WeakMap();
function registryFor(config) {
  if (!config || typeof config !== "object") return getDefaultRegistry();
  const hit = configRegistries.get(config);
  if (hit) return hit;
  const ext = extensionsFor(config);
  const animations = Object.keys(ext.animation);
  if (Object.keys(ext.utilities).length === 0 && animations.length === 0) {
    configRegistries.set(config, getDefaultRegistry());
    return getDefaultRegistry();
  }
  const registry = buildRegistry();
  if (animations.length) {
    const animate = registry.utility("visual", "animate");
    if (animate) {
      animate.enum = { ...animate.enum || {} };
      for (const [name, value] of Object.entries(ext.animation)) {
        if (/^[a-zA-Z_][\w-]*$/.test(name) && typeof value === "string" && !/[{};<>]/.test(value)) {
          animate.enum[name] = `animation: ${value};`;
        }
      }
    }
  }
  for (const [key, spec] of Object.entries(ext.utilities)) {
    if (!spec || typeof spec !== "object" || !/^[a-zA-Z][\w-]*$/.test(key)) continue;
    const attr = ["layout", "space", "visual"].includes(spec.attr) ? spec.attr : "visual";
    const def = { name: `plugin:${key}`, property: attr, category: attr };
    if (typeof spec.css === "string") {
      registry.addKeyword(finalize({ ...baseEntry(def, attr, key), kind: "keyword", css: spec.css }));
      continue;
    }
    const e = baseEntry(def, attr, key);
    e.scale = spec.scale || null;
    const meta = { ...spec, templates: null, arbitraryTemplates: null };
    if (meta.arbitrary === void 0 && (meta.template || meta.arbitraryTemplate)) meta.arbitrary = true;
    applyEngineMeta(e, meta, key);
    if (e.scale && !(e.scale in SCALE_VAR_PREFIX)) e.varPrefix = false;
    registry.addUtility(finalize(e));
  }
  configRegistries.set(config, registry);
  return registry;
}
function buildRegistry(definitions) {
  const defs = definitions || {
    layout: definitions_default.layout,
    space: definitions_default.space,
    visual: definitions_default.visual
  };
  const registry = new Registry();
  const markers = /* @__PURE__ */ new Set(["disabled", "checkable"]);
  for (const v of Object.values(STATE_VARIANTS)) if (v.group) markers.add(v.group);
  for (const key of markers) {
    registry.addKeyword({ ...baseEntry({ name: "state-capability" }, "layout", key), kind: "marker", css: null, order: 0, group: key });
  }
  for (const cat of ["layout", "space", "visual"]) {
    const group = defs[cat] || {};
    for (const def of Object.values(group)) {
      if (!def || typeof def !== "object") continue;
      const attr = def.property || cat;
      if (!["layout", "space", "visual"].includes(attr)) continue;
      const meta = def.engine || null;
      if (meta && meta.skip) continue;
      const attrs = meta && Array.isArray(meta.attrs) ? meta.attrs : [attr];
      for (const a of attrs) {
        if (!["layout", "space", "visual"].includes(a)) continue;
        addDefinition(registry, def, a, meta);
      }
    }
  }
  applyComposableTransforms(registry);
  return registry;
}
function addDefinition(registry, def, attr, meta) {
  const values = Array.isArray(def.values) ? def.values : [];
  const prefixes = meta && meta.prefixes ? meta.prefixes.slice() : prefixesFromSyntax(def.syntax, def.property || attr);
  if (meta && Array.isArray(meta.aliases)) for (const a of meta.aliases) pushUnique(prefixes, a);
  const keywordSyntax = prefixes.length === 0 && isKeywordSyntax(def.syntax, def.property || attr);
  if (meta && meta.utilities) {
    for (const [key, spec] of Object.entries(meta.utilities)) {
      const e = baseEntry(def, attr, key);
      e.scale = spec.scale !== void 0 ? spec.scale : def.usesScale || null;
      applyEngineMeta(e, { ...spec, templates: null, arbitraryTemplates: null }, key);
      registry.addUtility(finalize(e));
    }
  }
  if (meta && meta.keywords) {
    for (const [key, css] of Object.entries(meta.keywords)) {
      registry.addKeyword(finalize({ ...baseEntry(def, attr, key), kind: "keyword", css }));
    }
  }
  if (prefixes.length === 0) {
    for (const v of values) {
      if (!v || typeof v !== "object") continue;
      const key = v.value || v.property;
      if (!key || typeof v.css !== "string") continue;
      if (key.includes(":")) {
        const [pfx, val] = key.split(":");
        const e = baseEntry(def, attr, pfx);
        e.enum = { [val]: v.css };
        applyEngineMeta(e, meta, pfx);
        registry.addUtility(finalize(e));
        continue;
      }
      if (!keywordSyntax && !v.property) continue;
      if (/^\d+-\d+$/.test(key)) continue;
      registry.addKeyword(finalize({ ...baseEntry(def, attr, key), kind: "keyword", css: v.css }));
    }
    if (!keywordSyntax && values.length === 0) {
      const m = new RegExp(`${attr}="([a-z-]+)"`).exec(def.syntax || "");
      if (m && meta && meta.css) registry.addKeyword(finalize({ ...baseEntry(def, attr, m[1]), kind: "keyword", css: meta.css }));
    }
    return;
  }
  const perPrefix = values.filter((v) => v && typeof v === "object" && typeof v.css === "string" && (v.property || def.usesScale && /\{value\}|\{n\}/.test(v.css) && !values.some((o) => o !== v && o.value === v.value)));
  const isPerPrefix = perPrefix.length > 0 && perPrefix.every((v) => v.property || /\{value\}|\{n\}/.test(v.css));
  if (isPerPrefix && perPrefix.length === values.length) {
    for (const v of perPrefix) {
      const key = v.property || v.value;
      const e = baseEntry(def, attr, key);
      e.template = toTemplate(v.css);
      e.scale = def.usesScale || null;
      addPercentageLiterals(e, def);
      applyEngineMeta(e, meta, key);
      registry.addUtility(finalize(e));
    }
    return;
  }
  const numeric = def.dynamic ? deriveNumeric(values) : null;
  for (const key of prefixes) {
    const enumMap = {};
    const literalMap = {};
    let sharedProp = null;
    let sharedPropConsistent = true;
    let rangeTemplate = null;
    for (const v of values) {
      if (!v || typeof v !== "object" || typeof v.value !== "string" || typeof v.css !== "string") continue;
      if (v.prefix && v.prefix !== key) continue;
      if (/^\d+-\d+$/.test(v.value)) {
        rangeTemplate = toTemplate(v.css);
        continue;
      }
      if (v.value.includes(":")) continue;
      if (!v.css.includes(":")) {
        literalMap[v.value] = v.css;
        continue;
      }
      enumMap[v.value] = v.css;
      const single = singleDeclarationProperty(v.css);
      if (single) {
        if (sharedProp === null) sharedProp = single.prop;
        else if (sharedProp !== single.prop) sharedPropConsistent = false;
      } else {
        sharedPropConsistent = false;
      }
    }
    const e = baseEntry(def, attr, key);
    e.enum = { ...enumMap };
    if (Object.keys(literalMap).length) e.literals = { ...literalMap };
    e.scale = def.usesScale || null;
    if (numeric && numeric.template) {
      e.template = numeric.template;
      e.numeric = { unit: numeric.unit, divide: numeric.divide };
    } else if (rangeTemplate) {
      e.template = rangeTemplate;
      e.numeric = { unit: "", divide: null, integer: true };
    } else if (sharedProp && sharedPropConsistent) {
      e.template = `${sharedProp}: {value};`;
    }
    if (e.scale && !e.template && sharedProp) e.template = `${sharedProp}: {value};`;
    e.passthrough = false;
    if (e.scale) {
      e.scaleValues = [.../* @__PURE__ */ new Set([...e.scaleValues, ...Object.keys(enumMap)])];
    }
    addPercentageLiterals(e, def);
    const hadPerKeyTemplate = !!(meta && meta.templates && meta.templates[key]);
    applyEngineMeta(e, meta, key);
    if (hadPerKeyTemplate) {
      if (!e.scale && !e.numeric && sharedProp && sharedPropConsistent) {
        e.literals = e.literals || {};
        for (const [val, css] of Object.entries(e.enum || {})) {
          const single = singleDeclarationProperty(css);
          if (single && !(val in e.literals)) e.literals[val] = single.val;
        }
      }
      e.enum = meta.enum ? { ...meta.enum } : null;
    }
    registry.addUtility(finalize(e));
  }
}
function addPercentageLiterals(entry, def) {
  if (Array.isArray(def.percentageAdjectives)) {
    entry.literals = entry.literals || {};
    for (const p of def.percentageAdjectives) {
      if (p && p.name && p.value) entry.literals[p.name] = p.value;
    }
  }
}
var _default = null;
function getDefaultRegistry() {
  if (!_default) {
    _default = buildRegistry(slimDefinitions({
      layout: definitions_default.layout,
      space: definitions_default.space,
      visual: definitions_default.visual
    }));
  }
  return _default;
}

// src/compiler/generators/diagnose.js
var ATTRS = ["layout", "space", "visual"];
function knownVariantNames(config) {
  const screens = Object.keys(config && config.theme && config.theme.screens || {});
  return [...Object.keys(STATE_VARIANTS), ...Object.keys(MEDIA_VARIANTS), "dark", ...screens, ...screens.map((s) => `max-${s}`), ...Object.keys(extensionsFor(config).variants)];
}
function scaleKeys(entry, config) {
  const theme = config && config.theme || {};
  const out = /* @__PURE__ */ new Set();
  if (entry && entry.scale && theme[entry.scale] && typeof theme[entry.scale] === "object") {
    for (const k of Object.keys(theme[entry.scale])) out.add(k);
  }
  if (entry && entry.enum && typeof entry.enum === "object") for (const k of Object.keys(entry.enum)) out.add(k);
  if (entry && Array.isArray(entry.literals)) for (const k of entry.literals) out.add(k);
  if (entry && Array.isArray(entry.scaleValues)) for (const k of entry.scaleValues) out.add(k);
  return [...out];
}
function diagnoseToken(token, config) {
  const registry = registryFor(config);
  const { attrType, property, value, raw } = token;
  const props = registry.keys(attrType);
  if (typeof value === "string" && value.includes(":")) {
    const next = value.split(":")[0];
    if (props.includes(next) && !parseVariant(property, config)) {
      return diagnostic(
        token,
        CODES.UNKNOWN_VARIANT,
        `Unknown variant "${property}:" in "${raw}"`,
        suggest(property, knownVariantNames(config))
      );
    }
  }
  if (!props.includes(property)) {
    const other = ATTRS.find((a) => a !== attrType && registry.keys(a).includes(property));
    if (other) {
      return diagnostic(
        token,
        CODES.UNKNOWN_PROPERTY,
        `"${property}" is a ${other} utility; move "${raw}" to the ${other}="" attribute`,
        `${other}="${raw}"`
      );
    }
    return diagnostic(
      token,
      CODES.UNKNOWN_PROPERTY,
      `Unknown ${attrType} utility "${property}" in "${raw}"`,
      suggest(property, props)
    );
  }
  const entry = registry.utility(attrType, property);
  const base = typeof value === "string" ? value.replace(/^-/, "").replace(/\/.*$/, "") : value;
  return diagnostic(
    token,
    CODES.UNKNOWN_VALUE,
    `Unknown value "${value}" for ${attrType} utility "${property}"`,
    suggest(base, scaleKeys(entry, config))
  );
}
function checkUndefinedVars(rule, token, defined) {
  if (!defined || token.isArbitrary) return null;
  for (const m of rule.matchAll(/var\(\s*(--[\w-]+)\s*([,)])/g)) {
    const name = m[1];
    if (m[2] === ",") continue;
    if (defined.has(name) || /^--(ss|tw)-/.test(name)) continue;
    const prefix = name.replace(/^(--[a-z]+-).*/, "$1");
    const candidates = [...defined].filter((v) => v.startsWith(prefix)).map((v) => v.slice(prefix.length));
    const missing = name.slice(prefix.length);
    const key = missing.replace(/^-/, "");
    return diagnostic(
      token,
      CODES.UNKNOWN_VALUE,
      `Unknown value "${key}" in "${token.raw}" (no theme token ${name})`,
      suggest(key, candidates)
    );
  }
  return null;
}

// src/compiler/generators/preflight.js
function generateContainerCSS(config) {
  const cfg = config || {};
  const screens = cfg.theme?.screens;
  if (!screens || typeof screens !== "object") return "";
  const containerOverrides = cfg.theme?.container || {};
  const skipBps = /* @__PURE__ */ new Set(["print"]);
  let css = "";
  for (const [bp, width2] of Object.entries(screens)) {
    if (skipBps.has(bp) || bp.startsWith("tw-")) continue;
    const maxWidth = containerOverrides[bp] || width2;
    css += `
@media (min-width: ${width2}) {
  [${attrName("layout", config)}~="container"] {
    max-width: ${maxWidth};
  }
}
`;
  }
  return css;
}
function generatePreflight(config) {
  const css = `/* 
 * SenangStart Preflight v1.0
 * An opinionated set of base styles for SenangStart CSS projects
 * Based on modern-normalize and Tailwind CSS Preflight
 */

/*
 * 1. Prevent padding and border from affecting element width
 * 2. Allow adding a border to an element by just adding a border-width
 */
*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: currentColor; /* 2 */
}

/*
 * 1. Use a consistent sensible line-height in all browsers
 * 2. Prevent adjustments of font size after orientation changes in iOS
 * 3. Use a more readable tab size
 * 4. Use the user's configured sans font-family by default
 * 5. Use the user's configured sans font-feature-settings by default
 * 6. Use the user's configured sans font-variation-settings by default
 * 7. Disable tap highlights on iOS
 */
html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
 * 1. Remove the margin in all browsers
 * 2. Inherit line-height from html so users can set them as a class directly on the html element
 * 3. Support safe-area-inset for modern devices with notches
 */
body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left); /* 3 */
}

/*
 * 1. Add the correct height in Firefox
 * 2. Correct the inheritance of border color in Firefox
 * 3. Ensure horizontal rules are visible by default
 */
hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
 * Set default placeholder color to a semi-transparent gray
 * Uses theme variable for customization with fallback
 */
input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: var(--placeholder-color, #9ca3af); /* 2 */
}

/*
 * 1. Remove the default font size and weight for headings
 * 2. Make sure links don't get underlined in headings
 */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit; /* 1 */
  font-weight: inherit; /* 1 */
  text-decoration: none; /* 2 */
}

/*
 * Reset links to optimize for opt-in styling instead of opt-out
 */
a {
  color: inherit;
  text-decoration: inherit;
}

/*
 * Add the correct font weight in Edge and Safari
 */
b,
strong {
  font-weight: bolder;
}

/*
 * 1. Use the user's configured mono font-family by default
 * 2. Use the user's configured mono font-feature-settings by default
 * 3. Use the user's configured mono font-variation-settings by default
 * 4. Correct the odd em font sizing in all browsers
 */
code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
 * Add the correct font size in all browsers
 */
small {
  font-size: 80%;
}

/*
 * Prevent sub and sup elements from affecting the line height in all browsers
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
 * 1. Remove text indentation from table contents in Chrome and Safari
 * 2. Correct table border color inheritance in all Chrome and Safari
 * 3. Remove gaps between table borders by default
 */
table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
 * 1. Change the font styles in all browsers
 * 2. Remove the margin in Firefox and Safari
 * 3. Remove default padding in all browsers
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
 * Remove the inheritance of text transform in Edge and Firefox
 */
button,
select {
  text-transform: none;
}

/*
 * 1. Correct the inability to style clickable types in iOS and Safari
 * 2. Remove default button styles
 */
button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
 * Use the modern Firefox focus style for all focusable elements
 */
:-moz-focusring {
  outline: auto;
}

/*
 * Remove the additional :invalid styles in Firefox
 */
:-moz-ui-invalid {
  box-shadow: none;
}

/*
 * Add the correct text decoration in Chrome, Edge, and Safari
 */
abbr:where([title]) {
  text-decoration: underline dotted;
}



/*
 * Correct the cursor style of increment and decrement buttons in Safari
 */
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
 * 1. Correct the odd appearance in Chrome and Safari
 * 2. Correct the outline style in Safari
 */
[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
 * Remove the inner padding in Chrome and Safari on macOS
 */
::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
 * 1. Correct the inability to style clickable types in iOS and Safari
 * 2. Change font properties to inherit in Safari
 */
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
 * Add the correct display in Chrome and Safari
 */
summary {
  display: list-item;
}

/*
 * Removes the default spacing and border for appropriate elements
 */
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}



/*
 * Reset default styling for dialogs
 */
dialog {
  padding: 0;
}

/*
 * Prevent resizing textareas horizontally by default
 */
textarea {
  resize: vertical;
}

/*
 * Set the default cursor for buttons
 */
button,
[role="button"] {
  cursor: pointer;
}

/*
 * Make sure disabled buttons don't get the pointer cursor
 */
:disabled {
  cursor: default;
}

/*
 * 1. Make replaced elements display: block by default
 * 2. Add vertical-align: middle to align replaced elements more sensibly by default
 */
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
 * Constrain images and videos to the parent width and preserve their intrinsic aspect ratio
 */
img,
video {
  max-width: 100%;
  height: auto;
}

/*
 * Make elements with the HTML hidden attribute stay hidden by default
 */
[hidden] {
  display: none;
}

`;
  return css + generateContainerCSS(config);
}

// src/config/colors.js
var COLOR_PALETTE = {
  // Base colors
  "white": "#FFFFFF",
  "black": "#000000",
  // Brand/Semantic colors
  "grey": "#6B7280",
  "dark": "#3E4A5D",
  "light": "#DBEAFE",
  "primary": "#2563EB",
  "secondary": "#1E40AF",
  "success": "#10B981",
  "warning": "#F59E0B",
  "danger": "#EF4444",
  // Red
  "red-50": "#FEF2F2",
  "red-100": "#FEE2E2",
  "red-200": "#FECACA",
  "red-300": "#FCA5A5",
  "red-400": "#F87171",
  "red-500": "#EF4444",
  "red-600": "#DC2626",
  "red-700": "#B91C1C",
  "red-800": "#991B1B",
  "red-900": "#7F1D1D",
  "red-950": "#450A0A",
  // Orange
  "orange-50": "#FFF7ED",
  "orange-100": "#FFEDD5",
  "orange-200": "#FED7AA",
  "orange-300": "#FDBA74",
  "orange-400": "#FB923C",
  "orange-500": "#F97316",
  "orange-600": "#EA580C",
  "orange-700": "#C2410C",
  "orange-800": "#9A3412",
  "orange-900": "#7C2D12",
  "orange-950": "#431407",
  // Amber
  "amber-50": "#FFFBEB",
  "amber-100": "#FEF3C7",
  "amber-200": "#FDE68A",
  "amber-300": "#FCD34D",
  "amber-400": "#FBBF24",
  "amber-500": "#F59E0B",
  "amber-600": "#D97706",
  "amber-700": "#B45309",
  "amber-800": "#92400E",
  "amber-900": "#78350F",
  "amber-950": "#451A03",
  // Yellow
  "yellow-50": "#FEFCE8",
  "yellow-100": "#FEF9C3",
  "yellow-200": "#FEF08A",
  "yellow-300": "#FDE047",
  "yellow-400": "#FACC15",
  "yellow-500": "#EAB308",
  "yellow-600": "#CA8A04",
  "yellow-700": "#A16207",
  "yellow-800": "#854D0E",
  "yellow-900": "#713F12",
  "yellow-950": "#422006",
  // Lime
  "lime-50": "#F7FEE7",
  "lime-100": "#ECFCCB",
  "lime-200": "#D9F99D",
  "lime-300": "#BEF264",
  "lime-400": "#A3E635",
  "lime-500": "#84CC16",
  "lime-600": "#65A30D",
  "lime-700": "#4D7C0F",
  "lime-800": "#3F6212",
  "lime-900": "#365314",
  "lime-950": "#1A2E05",
  // Green
  "green-50": "#F0FDF4",
  "green-100": "#DCFCE7",
  "green-200": "#BBF7D0",
  "green-300": "#86EFAC",
  "green-400": "#4ADE80",
  "green-500": "#22C55E",
  "green-600": "#16A34A",
  "green-700": "#15803D",
  "green-800": "#166534",
  "green-900": "#14532D",
  "green-950": "#052E16",
  // Emerald
  "emerald-50": "#ECFDF5",
  "emerald-100": "#D1FAE5",
  "emerald-200": "#A7F3D0",
  "emerald-300": "#6EE7B7",
  "emerald-400": "#34D399",
  "emerald-500": "#10B981",
  "emerald-600": "#059669",
  "emerald-700": "#047857",
  "emerald-800": "#065F46",
  "emerald-900": "#064E3B",
  "emerald-950": "#022C22",
  // Teal
  "teal-50": "#F0FDFA",
  "teal-100": "#CCFBF1",
  "teal-200": "#99F6E4",
  "teal-300": "#5EEAD4",
  "teal-400": "#2DD4BF",
  "teal-500": "#14B8A6",
  "teal-600": "#0D9488",
  "teal-700": "#0F766E",
  "teal-800": "#115E59",
  "teal-900": "#134E4A",
  "teal-950": "#042F2E",
  // Cyan
  "cyan-50": "#ECFEFF",
  "cyan-100": "#CFFAFE",
  "cyan-200": "#A5F3FC",
  "cyan-300": "#67E8F9",
  "cyan-400": "#22D3EE",
  "cyan-500": "#06B6D4",
  "cyan-600": "#0891B2",
  "cyan-700": "#0E7490",
  "cyan-800": "#155E75",
  "cyan-900": "#164E63",
  "cyan-950": "#083344",
  // Sky
  "sky-50": "#F0F9FF",
  "sky-100": "#E0F2FE",
  "sky-200": "#BAE6FD",
  "sky-300": "#7DD3FC",
  "sky-400": "#38BDF8",
  "sky-500": "#0EA5E9",
  "sky-600": "#0284C7",
  "sky-700": "#0369A1",
  "sky-800": "#075985",
  "sky-900": "#0C4A6E",
  "sky-950": "#082F49",
  // Blue
  "blue-50": "#EFF6FF",
  "blue-100": "#DBEAFE",
  "blue-200": "#BFDBFE",
  "blue-300": "#93C5FD",
  "blue-400": "#60A5FA",
  "blue-500": "#3B82F6",
  "blue-600": "#2563EB",
  "blue-700": "#1D4ED8",
  "blue-800": "#1E40AF",
  "blue-900": "#1E3A8A",
  "blue-950": "#172554",
  // Indigo
  "indigo-50": "#EEF2FF",
  "indigo-100": "#E0E7FF",
  "indigo-200": "#C7D2FE",
  "indigo-300": "#A5B4FC",
  "indigo-400": "#818CF8",
  "indigo-500": "#6366F1",
  "indigo-600": "#4F46E5",
  "indigo-700": "#4338CA",
  "indigo-800": "#3730A3",
  "indigo-900": "#312E81",
  "indigo-950": "#1E1B4B",
  // Violet
  "violet-50": "#F5F3FF",
  "violet-100": "#EDE9FE",
  "violet-200": "#DDD6FE",
  "violet-300": "#C4B5FD",
  "violet-400": "#A78BFA",
  "violet-500": "#8B5CF6",
  "violet-600": "#7C3AED",
  "violet-700": "#6D28D9",
  "violet-800": "#5B21B6",
  "violet-900": "#4C1D95",
  "violet-950": "#2E1065",
  // Purple
  "purple-50": "#FAF5FF",
  "purple-100": "#F3E8FF",
  "purple-200": "#E9D5FF",
  "purple-300": "#D8B4FE",
  "purple-400": "#C084FC",
  "purple-500": "#A855F7",
  "purple-600": "#9333EA",
  "purple-700": "#7E22CE",
  "purple-800": "#6B21A8",
  "purple-900": "#581C87",
  "purple-950": "#3B0764",
  // Fuchsia
  "fuchsia-50": "#FDF4FF",
  "fuchsia-100": "#FAE8FF",
  "fuchsia-200": "#F5D0FE",
  "fuchsia-300": "#F0ABFC",
  "fuchsia-400": "#E879F9",
  "fuchsia-500": "#D946EF",
  "fuchsia-600": "#C026D3",
  "fuchsia-700": "#A21CAF",
  "fuchsia-800": "#86198F",
  "fuchsia-900": "#701A75",
  "fuchsia-950": "#4A044E",
  // Pink
  "pink-50": "#FDF2F8",
  "pink-100": "#FCE7F3",
  "pink-200": "#FBCFE8",
  "pink-300": "#F9A8D4",
  "pink-400": "#F472B6",
  "pink-500": "#EC4899",
  "pink-600": "#DB2777",
  "pink-700": "#BE185D",
  "pink-800": "#9D174D",
  "pink-900": "#831843",
  "pink-950": "#500724",
  // Rose
  "rose-50": "#FFF1F2",
  "rose-100": "#FFE4E6",
  "rose-200": "#FECDD3",
  "rose-300": "#FDA4AF",
  "rose-400": "#FB7185",
  "rose-500": "#F43F5E",
  "rose-600": "#E11D48",
  "rose-700": "#BE123C",
  "rose-800": "#9F1239",
  "rose-900": "#881337",
  "rose-950": "#4C0519",
  // Slate
  "slate-50": "#F8FAFC",
  "slate-100": "#F1F5F9",
  "slate-200": "#E2E8F0",
  "slate-300": "#CBD5E1",
  "slate-400": "#94A3B8",
  "slate-500": "#64748B",
  "slate-600": "#475569",
  "slate-700": "#334155",
  "slate-800": "#1E293B",
  "slate-900": "#0F172A",
  "slate-950": "#020617",
  // Gray
  "gray-50": "#F9FAFB",
  "gray-100": "#F3F4F6",
  "gray-200": "#E5E7EB",
  "gray-300": "#D1D5DB",
  "gray-400": "#9CA3AF",
  "gray-500": "#6B7280",
  "gray-600": "#4B5563",
  "gray-700": "#374151",
  "gray-800": "#1F2937",
  "gray-900": "#111827",
  "gray-950": "#030712",
  // Zinc
  "zinc-50": "#FAFAFA",
  "zinc-100": "#F4F4F5",
  "zinc-200": "#E4E4E7",
  "zinc-300": "#D4D4D8",
  "zinc-400": "#A1A1AA",
  "zinc-500": "#71717A",
  "zinc-600": "#52525B",
  "zinc-700": "#3F3F46",
  "zinc-800": "#27272A",
  "zinc-900": "#18181B",
  "zinc-950": "#09090B",
  // Neutral
  "neutral-50": "#FAFAFA",
  "neutral-100": "#F5F5F5",
  "neutral-200": "#E5E5E5",
  "neutral-300": "#D4D4D4",
  "neutral-400": "#A3A3A3",
  "neutral-500": "#737373",
  "neutral-600": "#525252",
  "neutral-700": "#404040",
  "neutral-800": "#262626",
  "neutral-900": "#171717",
  "neutral-950": "#0A0A0A",
  // Stone
  "stone-50": "#FAFAF9",
  "stone-100": "#F5F5F4",
  "stone-200": "#E7E5E4",
  "stone-300": "#D6D3D1",
  "stone-400": "#A8A29E",
  "stone-500": "#78716C",
  "stone-600": "#57534E",
  "stone-700": "#44403C",
  "stone-800": "#292524",
  "stone-900": "#1C1917",
  "stone-950": "#0C0A09"
};

// src/config/colors-oklch.js
var OKLCH_PALETTE = {
  "red-50": "oklch(97.1% 0.013 17.38)",
  "red-100": "oklch(93.6% 0.032 17.717)",
  "red-200": "oklch(88.5% 0.062 18.334)",
  "red-300": "oklch(80.8% 0.114 19.571)",
  "red-400": "oklch(70.4% 0.191 22.216)",
  "red-500": "oklch(63.7% 0.237 25.331)",
  "red-600": "oklch(57.7% 0.245 27.325)",
  "red-700": "oklch(50.5% 0.213 27.518)",
  "red-800": "oklch(44.4% 0.177 26.899)",
  "red-900": "oklch(39.6% 0.141 25.723)",
  "red-950": "oklch(25.8% 0.092 26.042)",
  "orange-50": "oklch(98% 0.016 73.684)",
  "orange-100": "oklch(95.4% 0.038 75.164)",
  "orange-200": "oklch(90.1% 0.076 70.697)",
  "orange-300": "oklch(83.7% 0.128 66.29)",
  "orange-400": "oklch(75% 0.183 55.934)",
  "orange-500": "oklch(70.5% 0.213 47.604)",
  "orange-600": "oklch(64.6% 0.222 41.116)",
  "orange-700": "oklch(55.3% 0.195 38.402)",
  "orange-800": "oklch(47% 0.157 37.304)",
  "orange-900": "oklch(40.8% 0.123 38.172)",
  "orange-950": "oklch(26.6% 0.079 36.259)",
  "amber-50": "oklch(98.7% 0.022 95.277)",
  "amber-100": "oklch(96.2% 0.059 95.617)",
  "amber-200": "oklch(92.4% 0.12 95.746)",
  "amber-300": "oklch(87.9% 0.169 91.605)",
  "amber-400": "oklch(82.8% 0.189 84.429)",
  "amber-500": "oklch(76.9% 0.188 70.08)",
  "amber-600": "oklch(66.6% 0.179 58.318)",
  "amber-700": "oklch(55.5% 0.163 48.998)",
  "amber-800": "oklch(47.3% 0.137 46.201)",
  "amber-900": "oklch(41.4% 0.112 45.904)",
  "amber-950": "oklch(27.9% 0.077 45.635)",
  "yellow-50": "oklch(98.7% 0.026 102.212)",
  "yellow-100": "oklch(97.3% 0.071 103.193)",
  "yellow-200": "oklch(94.5% 0.129 101.54)",
  "yellow-300": "oklch(90.5% 0.182 98.111)",
  "yellow-400": "oklch(85.2% 0.199 91.936)",
  "yellow-500": "oklch(79.5% 0.184 86.047)",
  "yellow-600": "oklch(68.1% 0.162 75.834)",
  "yellow-700": "oklch(55.4% 0.135 66.442)",
  "yellow-800": "oklch(47.6% 0.114 61.907)",
  "yellow-900": "oklch(42.1% 0.095 57.708)",
  "yellow-950": "oklch(28.6% 0.066 53.813)",
  "lime-50": "oklch(98.6% 0.031 120.757)",
  "lime-100": "oklch(96.7% 0.067 122.328)",
  "lime-200": "oklch(93.8% 0.127 124.321)",
  "lime-300": "oklch(89.7% 0.196 126.665)",
  "lime-400": "oklch(84.1% 0.238 128.85)",
  "lime-500": "oklch(76.8% 0.233 130.85)",
  "lime-600": "oklch(64.8% 0.2 131.684)",
  "lime-700": "oklch(53.2% 0.157 131.589)",
  "lime-800": "oklch(45.3% 0.124 130.933)",
  "lime-900": "oklch(40.5% 0.101 131.063)",
  "lime-950": "oklch(27.4% 0.072 132.109)",
  "green-50": "oklch(98.2% 0.018 155.826)",
  "green-100": "oklch(96.2% 0.044 156.743)",
  "green-200": "oklch(92.5% 0.084 155.995)",
  "green-300": "oklch(87.1% 0.15 154.449)",
  "green-400": "oklch(79.2% 0.209 151.711)",
  "green-500": "oklch(72.3% 0.219 149.579)",
  "green-600": "oklch(62.7% 0.194 149.214)",
  "green-700": "oklch(52.7% 0.154 150.069)",
  "green-800": "oklch(44.8% 0.119 151.328)",
  "green-900": "oklch(39.3% 0.095 152.535)",
  "green-950": "oklch(26.6% 0.065 152.934)",
  "emerald-50": "oklch(97.9% 0.021 166.113)",
  "emerald-100": "oklch(95% 0.052 163.051)",
  "emerald-200": "oklch(90.5% 0.093 164.15)",
  "emerald-300": "oklch(84.5% 0.143 164.978)",
  "emerald-400": "oklch(76.5% 0.177 163.223)",
  "emerald-500": "oklch(69.6% 0.17 162.48)",
  "emerald-600": "oklch(59.6% 0.145 163.225)",
  "emerald-700": "oklch(50.8% 0.118 165.612)",
  "emerald-800": "oklch(43.2% 0.095 166.913)",
  "emerald-900": "oklch(37.8% 0.077 168.94)",
  "emerald-950": "oklch(26.2% 0.051 172.552)",
  "teal-50": "oklch(98.4% 0.014 180.72)",
  "teal-100": "oklch(95.3% 0.051 180.801)",
  "teal-200": "oklch(91% 0.096 180.426)",
  "teal-300": "oklch(85.5% 0.138 181.071)",
  "teal-400": "oklch(77.7% 0.152 181.912)",
  "teal-500": "oklch(70.4% 0.14 182.503)",
  "teal-600": "oklch(60% 0.118 184.704)",
  "teal-700": "oklch(51.1% 0.096 186.391)",
  "teal-800": "oklch(43.7% 0.078 188.216)",
  "teal-900": "oklch(38.6% 0.063 188.416)",
  "teal-950": "oklch(27.7% 0.046 192.524)",
  "cyan-50": "oklch(98.4% 0.019 200.873)",
  "cyan-100": "oklch(95.6% 0.045 203.388)",
  "cyan-200": "oklch(91.7% 0.08 205.041)",
  "cyan-300": "oklch(86.5% 0.127 207.078)",
  "cyan-400": "oklch(78.9% 0.154 211.53)",
  "cyan-500": "oklch(71.5% 0.143 215.221)",
  "cyan-600": "oklch(60.9% 0.126 221.723)",
  "cyan-700": "oklch(52% 0.105 223.128)",
  "cyan-800": "oklch(45% 0.085 224.283)",
  "cyan-900": "oklch(39.8% 0.07 227.392)",
  "cyan-950": "oklch(30.2% 0.056 229.695)",
  "sky-50": "oklch(97.7% 0.013 236.62)",
  "sky-100": "oklch(95.1% 0.026 236.824)",
  "sky-200": "oklch(90.1% 0.058 230.902)",
  "sky-300": "oklch(82.8% 0.111 230.318)",
  "sky-400": "oklch(74.6% 0.16 232.661)",
  "sky-500": "oklch(68.5% 0.169 237.323)",
  "sky-600": "oklch(58.8% 0.158 241.966)",
  "sky-700": "oklch(50% 0.134 242.749)",
  "sky-800": "oklch(44.3% 0.11 240.79)",
  "sky-900": "oklch(39.1% 0.09 240.876)",
  "sky-950": "oklch(29.3% 0.066 243.157)",
  "blue-50": "oklch(97% 0.014 254.604)",
  "blue-100": "oklch(93.2% 0.032 255.585)",
  "blue-200": "oklch(88.2% 0.059 254.128)",
  "blue-300": "oklch(80.9% 0.105 251.813)",
  "blue-400": "oklch(70.7% 0.165 254.624)",
  "blue-500": "oklch(62.3% 0.214 259.815)",
  "blue-600": "oklch(54.6% 0.245 262.881)",
  "blue-700": "oklch(48.8% 0.243 264.376)",
  "blue-800": "oklch(42.4% 0.199 265.638)",
  "blue-900": "oklch(37.9% 0.146 265.522)",
  "blue-950": "oklch(28.2% 0.091 267.935)",
  "indigo-50": "oklch(96.2% 0.018 272.314)",
  "indigo-100": "oklch(93% 0.034 272.788)",
  "indigo-200": "oklch(87% 0.065 274.039)",
  "indigo-300": "oklch(78.5% 0.115 274.713)",
  "indigo-400": "oklch(67.3% 0.182 276.935)",
  "indigo-500": "oklch(58.5% 0.233 277.117)",
  "indigo-600": "oklch(51.1% 0.262 276.966)",
  "indigo-700": "oklch(45.7% 0.24 277.023)",
  "indigo-800": "oklch(39.8% 0.195 277.366)",
  "indigo-900": "oklch(35.9% 0.144 278.697)",
  "indigo-950": "oklch(25.7% 0.09 281.288)",
  "violet-50": "oklch(96.9% 0.016 293.756)",
  "violet-100": "oklch(94.3% 0.029 294.588)",
  "violet-200": "oklch(89.4% 0.057 293.283)",
  "violet-300": "oklch(81.1% 0.111 293.571)",
  "violet-400": "oklch(70.2% 0.183 293.541)",
  "violet-500": "oklch(60.6% 0.25 292.717)",
  "violet-600": "oklch(54.1% 0.281 293.009)",
  "violet-700": "oklch(49.1% 0.27 292.581)",
  "violet-800": "oklch(43.2% 0.232 292.759)",
  "violet-900": "oklch(38% 0.189 293.745)",
  "violet-950": "oklch(28.3% 0.141 291.089)",
  "purple-50": "oklch(97.7% 0.014 308.299)",
  "purple-100": "oklch(94.6% 0.033 307.174)",
  "purple-200": "oklch(90.2% 0.063 306.703)",
  "purple-300": "oklch(82.7% 0.119 306.383)",
  "purple-400": "oklch(71.4% 0.203 305.504)",
  "purple-500": "oklch(62.7% 0.265 303.9)",
  "purple-600": "oklch(55.8% 0.288 302.321)",
  "purple-700": "oklch(49.6% 0.265 301.924)",
  "purple-800": "oklch(43.8% 0.218 303.724)",
  "purple-900": "oklch(38.1% 0.176 304.987)",
  "purple-950": "oklch(29.1% 0.149 302.717)",
  "fuchsia-50": "oklch(97.7% 0.017 320.058)",
  "fuchsia-100": "oklch(95.2% 0.037 318.852)",
  "fuchsia-200": "oklch(90.3% 0.076 319.62)",
  "fuchsia-300": "oklch(83.3% 0.145 321.434)",
  "fuchsia-400": "oklch(74% 0.238 322.16)",
  "fuchsia-500": "oklch(66.7% 0.295 322.15)",
  "fuchsia-600": "oklch(59.1% 0.293 322.896)",
  "fuchsia-700": "oklch(51.8% 0.253 323.949)",
  "fuchsia-800": "oklch(45.2% 0.211 324.591)",
  "fuchsia-900": "oklch(40.1% 0.17 325.612)",
  "fuchsia-950": "oklch(29.3% 0.136 325.661)",
  "pink-50": "oklch(97.1% 0.014 343.198)",
  "pink-100": "oklch(94.8% 0.028 342.258)",
  "pink-200": "oklch(89.9% 0.061 343.231)",
  "pink-300": "oklch(82.3% 0.12 346.018)",
  "pink-400": "oklch(71.8% 0.202 349.761)",
  "pink-500": "oklch(65.6% 0.241 354.308)",
  "pink-600": "oklch(59.2% 0.249 0.584)",
  "pink-700": "oklch(52.5% 0.223 3.958)",
  "pink-800": "oklch(45.9% 0.187 3.815)",
  "pink-900": "oklch(40.8% 0.153 2.432)",
  "pink-950": "oklch(28.4% 0.109 3.907)",
  "rose-50": "oklch(96.9% 0.015 12.422)",
  "rose-100": "oklch(94.1% 0.03 12.58)",
  "rose-200": "oklch(89.2% 0.058 10.001)",
  "rose-300": "oklch(81% 0.117 11.638)",
  "rose-400": "oklch(71.2% 0.194 13.428)",
  "rose-500": "oklch(64.5% 0.246 16.439)",
  "rose-600": "oklch(58.6% 0.253 17.585)",
  "rose-700": "oklch(51.4% 0.222 16.935)",
  "rose-800": "oklch(45.5% 0.188 13.697)",
  "rose-900": "oklch(41% 0.159 10.272)",
  "rose-950": "oklch(27.1% 0.105 12.094)",
  "slate-50": "oklch(98.4% 0.003 247.858)",
  "slate-100": "oklch(96.8% 0.007 247.896)",
  "slate-200": "oklch(92.9% 0.013 255.508)",
  "slate-300": "oklch(86.9% 0.022 252.894)",
  "slate-400": "oklch(70.4% 0.04 256.788)",
  "slate-500": "oklch(55.4% 0.046 257.417)",
  "slate-600": "oklch(44.6% 0.043 257.281)",
  "slate-700": "oklch(37.2% 0.044 257.287)",
  "slate-800": "oklch(27.9% 0.041 260.031)",
  "slate-900": "oklch(20.8% 0.042 265.755)",
  "slate-950": "oklch(12.9% 0.042 264.695)",
  "gray-50": "oklch(98.5% 0.002 247.839)",
  "gray-100": "oklch(96.7% 0.003 264.542)",
  "gray-200": "oklch(92.8% 0.006 264.531)",
  "gray-300": "oklch(87.2% 0.01 258.338)",
  "gray-400": "oklch(70.7% 0.022 261.325)",
  "gray-500": "oklch(55.1% 0.027 264.364)",
  "gray-600": "oklch(44.6% 0.03 256.802)",
  "gray-700": "oklch(37.3% 0.034 259.733)",
  "gray-800": "oklch(27.8% 0.033 256.848)",
  "gray-900": "oklch(21% 0.034 264.665)",
  "gray-950": "oklch(13% 0.028 261.692)",
  "zinc-50": "oklch(98.5% 0 none)",
  "zinc-100": "oklch(96.7% 0.001 286.375)",
  "zinc-200": "oklch(92% 0.004 286.32)",
  "zinc-300": "oklch(87.1% 0.006 286.286)",
  "zinc-400": "oklch(70.5% 0.015 286.067)",
  "zinc-500": "oklch(55.2% 0.016 285.938)",
  "zinc-600": "oklch(44.2% 0.017 285.786)",
  "zinc-700": "oklch(37% 0.013 285.805)",
  "zinc-800": "oklch(27.4% 0.006 286.033)",
  "zinc-900": "oklch(21% 0.006 285.885)",
  "zinc-950": "oklch(14.1% 0.005 285.823)",
  "neutral-50": "oklch(98.5% 0 none)",
  "neutral-100": "oklch(97% 0 none)",
  "neutral-200": "oklch(92.2% 0 none)",
  "neutral-300": "oklch(87% 0 none)",
  "neutral-400": "oklch(70.8% 0 none)",
  "neutral-500": "oklch(55.6% 0 none)",
  "neutral-600": "oklch(43.9% 0 none)",
  "neutral-700": "oklch(37.1% 0 none)",
  "neutral-800": "oklch(26.9% 0 none)",
  "neutral-900": "oklch(20.5% 0 none)",
  "neutral-950": "oklch(14.5% 0 none)",
  "stone-50": "oklch(98.5% 0.001 106.423)",
  "stone-100": "oklch(97% 0.001 106.424)",
  "stone-200": "oklch(92.3% 0.003 48.717)",
  "stone-300": "oklch(86.9% 0.005 56.366)",
  "stone-400": "oklch(70.9% 0.01 56.259)",
  "stone-500": "oklch(55.3% 0.013 58.071)",
  "stone-600": "oklch(44.4% 0.011 73.639)",
  "stone-700": "oklch(37.4% 0.01 67.558)",
  "stone-800": "oklch(26.8% 0.007 34.298)",
  "stone-900": "oklch(21.6% 0.006 56.043)",
  "stone-950": "oklch(14.7% 0.004 49.25)",
  "mauve-50": "oklch(98.5% 0 none)",
  "mauve-100": "oklch(96% 0.003 325.6)",
  "mauve-200": "oklch(92.2% 0.005 325.62)",
  "mauve-300": "oklch(86.5% 0.012 325.68)",
  "mauve-400": "oklch(71.1% 0.019 323.02)",
  "mauve-500": "oklch(54.2% 0.034 322.5)",
  "mauve-600": "oklch(43.5% 0.029 321.78)",
  "mauve-700": "oklch(36.4% 0.029 323.89)",
  "mauve-800": "oklch(26.3% 0.024 320.12)",
  "mauve-900": "oklch(21.2% 0.019 322.12)",
  "mauve-950": "oklch(14.5% 0.008 326)",
  "olive-50": "oklch(98.8% 0.003 106.5)",
  "olive-100": "oklch(96.6% 0.005 106.5)",
  "olive-200": "oklch(93% 0.007 106.5)",
  "olive-300": "oklch(88% 0.011 106.6)",
  "olive-400": "oklch(73.7% 0.021 106.9)",
  "olive-500": "oklch(58% 0.031 107.3)",
  "olive-600": "oklch(46.6% 0.025 107.3)",
  "olive-700": "oklch(39.4% 0.023 107.4)",
  "olive-800": "oklch(28.6% 0.016 107.4)",
  "olive-900": "oklch(22.8% 0.013 107.4)",
  "olive-950": "oklch(15.3% 0.006 107.1)",
  "mist-50": "oklch(98.7% 0.002 197.1)",
  "mist-100": "oklch(96.3% 0.002 197.1)",
  "mist-200": "oklch(92.5% 0.005 214.3)",
  "mist-300": "oklch(87.2% 0.007 219.6)",
  "mist-400": "oklch(72.3% 0.014 214.4)",
  "mist-500": "oklch(56% 0.021 213.5)",
  "mist-600": "oklch(45% 0.017 213.2)",
  "mist-700": "oklch(37.8% 0.015 216)",
  "mist-800": "oklch(27.5% 0.011 216.9)",
  "mist-900": "oklch(21.8% 0.008 223.9)",
  "mist-950": "oklch(14.8% 0.004 228.8)",
  "taupe-50": "oklch(98.6% 0.002 67.8)",
  "taupe-100": "oklch(96% 0.002 17.2)",
  "taupe-200": "oklch(92.2% 0.005 34.3)",
  "taupe-300": "oklch(86.8% 0.007 39.5)",
  "taupe-400": "oklch(71.4% 0.014 41.2)",
  "taupe-500": "oklch(54.7% 0.021 43.1)",
  "taupe-600": "oklch(43.8% 0.017 39.3)",
  "taupe-700": "oklch(36.7% 0.016 35.7)",
  "taupe-800": "oklch(26.8% 0.011 36.5)",
  "taupe-900": "oklch(21.4% 0.009 43.1)",
  "taupe-950": "oklch(14.7% 0.004 49.3)"
};

// src/config/defaults.js
var defaultConfig = {
  // Input files to scan for attributes
  // Globs are resolved with tinyglobby relative to the project root.
  // Negation is supported (`'!./legacy/**'`); node_modules/.git/dist are ignored by default.
  content: [
    "./**/*.html",
    "./**/*.{php,blade.php}",
    "./**/*.{js,jsx,ts,tsx}",
    "./**/*.{vue,svelte,astro}",
    "./**/*.{md,mdx}"
  ],
  // Tokens to always include even if not found in `content` (reserved for the
  // variant engine; consumed by the build pipeline). Entries are raw tokens
  // (`'visual=bg:primary'`, `'flex'`, `'p:medium'`) or `{ attr, tokens }`.
  safelist: [],
  // Attribute prefix: 'ss' makes the attributes ss-layout / ss-space / ss-visual
  // (and ss-interact / ss-listens). Unprefixed attributes are then ignored.
  // Defined here so configs validate; behaviour is implemented by the engine.
  prefix: "",
  // Opt-in presets: ['prose', 'forms'] (or { prose: { maxWidth: '70ch' }, forms: true })
  presets: [],
  // Emit CSS wrapped in cascade layers (@layer senang.base, senang.utilities …).
  // Behaviour implemented by the engine team; defined here for config validation.
  layers: true,
  // Output configuration
  output: {
    css: "./public/senangstart.css",
    minify: false,
    // OPT-IN: AI context file (e.g. './.cursorrules'). `null`/`false` = disabled.
    // Generated files carry a marker header; existing files without it are never overwritten.
    aiContext: null,
    // OPT-IN: TypeScript definitions (e.g. './types/senang.d.ts'). `null`/`false` = disabled.
    typescript: null
  },
  // Dark mode configuration
  // 'media' - Uses @media (prefers-color-scheme: dark)
  // 'selector' - Uses .dark class on html/body
  // ['selector', '.custom-dark'] - Uses custom selector
  darkMode: "media",
  // Preflight: Include opinionated base reset styles
  // true - Include all preflight styles (default)
  // false - Disable preflight completely
  preflight: true,
  // Build behavior
  build: {
    // false (default) - build fails with exit code 1 on invalid tokens
    // true - warn instead of failing (same as --ignore-invalid CLI flag)
    ignoreInvalid: false
  },
  theme: {
    // Expose every theme scale as CSS custom properties (not only used ones).
    // Behaviour implemented by the engine team; defined here for config validation.
    exposeAll: false,
    // 'hex' (default, Tailwind v3 values) or 'oklch' (Tailwind v4 values, wider gamut).
    // Semantic colours (primary, success, …) follow the chosen palette.
    palette: "hex",
    // 1. SPACING: The "Natural Object" Scale with multiplier variants
    // Logic: How big is the object/gap physically?
    spacing: {
      "none": "0px",
      // No space
      "thin": "1px",
      // Hairline (for borders)
      "regular": "2px",
      // Standard border
      "thick": "3px",
      // Bold border
      "tiny": "4px",
      // Small offsets
      "tiny-2x": "6px",
      // Tiny multiplied
      "small": "8px",
      // Grouping inside components
      "small-2x": "10px",
      //
      "small-3x": "12px",
      //
      "small-4x": "14px",
      //
      "medium": "16px",
      // Standard default
      "medium-2x": "20px",
      //
      "medium-3x": "24px",
      //
      "medium-4x": "28px",
      //
      "large": "32px",
      // Separation between groups
      "large-2x": "36px",
      //
      "large-3x": "40px",
      //
      "large-4x": "44px",
      //
      "big": "48px",
      // Layout sections
      "big-2x": "56px",
      //
      "big-3x": "64px",
      //
      "big-4x": "80px",
      //
      "giant": "96px",
      // Hero sections
      "giant-2x": "112px",
      //
      "giant-3x": "128px",
      //
      "giant-4x": "144px",
      //
      "vast": "160px",
      // Page-level spacing
      "vast-2x": "176px",
      //
      "vast-3x": "192px",
      //
      "vast-4x": "208px",
      //
      "vast-5x": "224px",
      //
      "vast-6x": "240px",
      //
      "vast-7x": "256px",
      //
      "vast-8x": "288px",
      //
      "vast-9x": "320px",
      //
      "vast-10x": "384px"
      //
    },
    // 2. RADIUS: Tactile Feel
    radius: {
      "none": "0px",
      // Sharp corners
      "small": "4px",
      // Subtle nudge
      "medium": "8px",
      // Soft corner
      "big": "16px",
      // Distinct curve
      "round": "9999px"
      // Pill/Circle
    },
    // 3. SHADOWS: Depth Perception
    shadow: {
      "none": "none",
      "small": "0 1px 2px rgba(0,0,0,0.05)",
      "medium": "0 4px 6px rgba(0,0,0,0.1)",
      "big": "0 10px 15px rgba(0,0,0,0.15)",
      "giant": "0 25px 50px rgba(0,0,0,0.25)"
    },
    // 4. FONT SIZES: Reading Scale (with paired line-heights)
    fontSize: {
      "mini": "0.75rem",
      // 12px
      "small": "0.875rem",
      // 14px
      "base": "1rem",
      // 16px
      "large": "1.125rem",
      // 18px
      "big": "1.25rem",
      // 20px (xl)
      "huge": "1.5rem",
      // 24px (2xl)
      "grand": "1.875rem",
      // 30px (3xl)
      "giant": "2.25rem",
      // 36px (4xl)
      "mount": "3rem",
      // 48px (5xl)
      "mega": "3.75rem",
      // 60px (6xl)
      "giga": "4.5rem",
      // 72px (7xl)
      "tera": "6rem",
      // 96px (8xl)
      "hero": "8rem"
      // 128px
    },
    // 4b. FONT SIZE LINE-HEIGHTS: Paired with font sizes
    fontSizeLineHeight: {
      "mini": "1rem",
      // 16px
      "small": "1.25rem",
      // 20px
      "base": "1.5rem",
      // 24px
      "large": "1.75rem",
      // 28px
      "big": "1.75rem",
      // 28px
      "huge": "2rem",
      // 32px
      "grand": "2.25rem",
      // 36px
      "giant": "2.5rem",
      // 40px
      "mount": "1",
      // 48px (unitless 1)
      "mega": "1",
      // 60px (unitless 1)
      "giga": "1",
      // 72px (unitless 1)
      "tera": "1",
      // 96px (unitless 1)
      "hero": "1"
      // 128px (unitless 1)
    },
    // 5. FONT WEIGHTS
    fontWeight: {
      "normal": "400",
      "medium": "500",
      "bold": "700"
    },
    // 6. BREAKPOINTS: Device Intent
    screens: {
      "mob": "480px",
      // Mobile
      "tab": "768px",
      // Tablet
      "lap": "1024px",
      // Laptop
      "desk": "1280px",
      // Desktop
      "print": "print",
      // Print media query
      // Tailwind Compatibility
      "tw-sm": "640px",
      "tw-md": "768px",
      "tw-lg": "1024px",
      "tw-xl": "1280px",
      "tw-2xl": "1536px"
    },
    // 7. COLORS: Palette Scales
    // Placeholder color for form inputs
    placeholder: "#9ca3af",
    colors: COLOR_PALETTE,
    // 8. CONTAINER: Responsive max-widths per breakpoint
    // Keys match screens. If not set, max-width defaults to the breakpoint width.
    container: {
      "mob": "480px",
      "tab": "768px",
      "lap": "1024px",
      "desk": "1280px"
    },
    // 9. Z-INDEX: Stacking Order
    zIndex: {
      "base": "0",
      "low": "10",
      "mid": "50",
      "high": "100",
      "top": "9999"
    },
    // 10. FILTER SCALES: Visual effects with adjective-based values
    blur: { none: "0", tiny: "2px", small: "4px", medium: "8px", big: "12px", giant: "24px", vast: "48px" },
    brightness: { dim: "0.5", dark: "0.75", normal: "1", bright: "1.25", vivid: "1.5" },
    contrast: { low: "0.5", reduced: "0.75", normal: "1", high: "1.25", max: "1.5" },
    grayscale: { none: "0%", partial: "50%", full: "100%" },
    invert: { none: "0%", partial: "50%", full: "100%" },
    saturate: { none: "0", low: "0.5", normal: "1", high: "1.5", vivid: "2" },
    sepia: { none: "0%", partial: "50%", full: "100%" },
    dropShadow: { none: "none", tiny: "0 1px 1px rgba(0,0,0,0.05)", small: "0 1px 2px rgba(0,0,0,0.1), 0 1px 1px rgba(0,0,0,0.06)", medium: "0 4px 3px rgba(0,0,0,0.07), 0 2px 2px rgba(0,0,0,0.06)", big: "0 10px 8px rgba(0,0,0,0.04), 0 4px 3px rgba(0,0,0,0.1)", giant: "0 20px 13px rgba(0,0,0,0.03), 0 8px 5px rgba(0,0,0,0.08)" },
    backdropOpacity: { invisible: "0", faint: "0.25", half: "0.5", visible: "0.75", solid: "1" },
    transitionProperty: { none: "none", all: "all", DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", colors: "color, background-color, border-color, text-decoration-color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" },
    animationDuration: { instant: "75ms", quick: "100ms", fast: "150ms", normal: "200ms", slow: "300ms", slower: "500ms", lazy: "700ms" },
    animationDelay: { instant: "75ms", quick: "100ms", fast: "150ms", normal: "200ms", slow: "300ms", slower: "500ms", lazy: "700ms" },
    perspective: { none: "none", dramatic: "100px", near: "300px", normal: "500px", midrange: "800px", far: "1000px", distant: "1200px" }
  },
  // Deprecated alias of `theme.extend` (kept for backwards compatibility).
  extend: {}
};
function deepFreeze(obj) {
  if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    for (const value of Object.values(obj)) deepFreeze(value);
  }
  return obj;
}
deepFreeze(defaultConfig);
var KNOWN_CONFIG_KEYS = Object.freeze([
  "content",
  "safelist",
  "prefix",
  "layers",
  "output",
  "darkMode",
  "preflight",
  "build",
  "theme",
  "extend",
  "utilities",
  "variants",
  "plugins",
  "presets"
]);
var KNOWN_OUTPUT_KEYS = Object.freeze(["css", "minify", "aiContext", "typescript"]);
var KNOWN_BUILD_KEYS = Object.freeze(["ignoreInvalid"]);
function deepMerge(target, source, visited = /* @__PURE__ */ new WeakMap()) {
  if (visited.has(source)) {
    return visited.get(source);
  }
  const result = { ...target };
  visited.set(source, result);
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key], visited);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}
function validateTheme(theme) {
  const warnings = [];
  if (!theme || typeof theme !== "object") return warnings;
  const VALID_UNITS = /^(\d+(\.\d+)?)(px|rem|em|%|vh|vw|vmin|vmax|cm|mm|in|pt|pc|ch|ex|fr|s|ms|deg|rad|grad|turn|Hz|kHz|dpi|dpcm|dppx)?$/;
  const VALID_COLOR = /^(#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8}))$|^(rgb|hsl|lab|lch|oklch|oklab)a?\(|^(var\(--|calc\()/;
  if (theme.spacing) {
    for (const [key, val] of Object.entries(theme.spacing)) {
      if (typeof val !== "string") {
        warnings.push(`theme.spacing["${key}"]: expected string, got ${typeof val}`);
      } else if (!VALID_UNITS.test(val) && !val.startsWith("var(")) {
        warnings.push(`theme.spacing["${key}"]: invalid value "${val}" \u2014 expected CSS length`);
      }
    }
  }
  if (theme.colors) {
    for (const [key, val] of Object.entries(theme.colors)) {
      if (typeof val !== "string") {
        warnings.push(`theme.colors["${key}"]: expected string, got ${typeof val}`);
      } else if (!VALID_COLOR.test(val) && !/^[a-zA-Z]/.test(val)) {
        warnings.push(`theme.colors["${key}"]: suspicious value "${val}"`);
      }
    }
  }
  if (theme.screens) {
    for (const [key, val] of Object.entries(theme.screens)) {
      if (typeof val !== "string") {
        warnings.push(`theme.screens["${key}"]: expected string, got ${typeof val}`);
      } else if (val !== "print" && !VALID_UNITS.test(val)) {
        warnings.push(`theme.screens["${key}"]: invalid breakpoint "${val}" \u2014 expected CSS length or "print"`);
      }
    }
  }
  const numericSections = ["brightness", "contrast", "saturate", "backdropOpacity"];
  for (const section of numericSections) {
    if (theme[section]) {
      for (const [key, val] of Object.entries(theme[section])) {
        if (typeof val === "string" && isNaN(parseFloat(val))) {
          warnings.push(`theme.${section}["${key}"]: expected numeric value, got "${val}"`);
        }
      }
    }
  }
  const percentageSections = ["grayscale", "invert", "sepia"];
  for (const section of percentageSections) {
    if (theme[section]) {
      for (const [key, val] of Object.entries(theme[section])) {
        if (typeof val !== "string" || !/^\d+%$/.test(val)) {
          warnings.push(`theme.${section}["${key}"]: expected percentage value, got "${val}"`);
        }
      }
    }
  }
  const lengthSections = ["blur", "perspective", "container"];
  for (const section of lengthSections) {
    if (theme[section]) {
      for (const [key, val] of Object.entries(theme[section])) {
        if (typeof val !== "string") {
          warnings.push(`theme.${section}["${key}"]: expected string, got ${typeof val}`);
        } else if (val !== "none" && !VALID_UNITS.test(val) && !val.startsWith("var(")) {
          warnings.push(`theme.${section}["${key}"]: invalid value "${val}" \u2014 expected CSS length or "none"`);
        }
      }
    }
  }
  if (theme.zIndex) {
    for (const [key, val] of Object.entries(theme.zIndex)) {
      if (typeof val === "string" && isNaN(parseInt(val, 10))) {
        warnings.push(`theme.zIndex["${key}"]: expected integer, got "${val}"`);
      }
    }
  }
  const stringSections = ["transitionProperty", "animationDuration", "animationDelay", "dropShadow"];
  for (const section of stringSections) {
    if (theme[section]) {
      for (const [key, val] of Object.entries(theme[section])) {
        if (typeof val !== "string") {
          warnings.push(`theme.${section}["${key}"]: expected string, got ${typeof val}`);
        }
      }
    }
  }
  return warnings;
}
function clone(value) {
  try {
    return globalThis.structuredClone(value);
  } catch {
    return JSON.parse(JSON.stringify(value));
  }
}
function isPlainObject(v) {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}
function mergeConfig(userConfig = {}, options = {}) {
  const silent = options === true || options?.silent === true;
  const merged = clone(defaultConfig);
  if (!isPlainObject(userConfig)) return merged;
  const { plugins, utilities, variants, ...rest } = userConfig;
  const user = clone(rest);
  if (Array.isArray(user.content)) merged.content = user.content;
  if (Array.isArray(user.safelist)) merged.safelist = user.safelist;
  if (typeof user.prefix === "string") merged.prefix = user.prefix;
  if (typeof user.layers === "boolean") merged.layers = user.layers;
  if (Array.isArray(user.presets) || isPlainObject(user.presets)) merged.presets = user.presets;
  if (isPlainObject(utilities)) merged.utilities = utilities;
  if (isPlainObject(variants)) merged.variants = variants;
  if (Array.isArray(plugins)) merged.plugins = plugins;
  if (isPlainObject(user.output)) merged.output = { ...merged.output, ...user.output };
  if (user.darkMode !== void 0) merged.darkMode = user.darkMode;
  if (user.preflight !== void 0) merged.preflight = user.preflight;
  if (isPlainObject(user.build)) merged.build = { ...merged.build, ...user.build };
  let themeExtend = null;
  if (isPlainObject(user.theme)) {
    const { extend, ...directTheme } = user.theme;
    merged.theme = deepMerge(merged.theme, directTheme);
    if (isPlainObject(extend)) themeExtend = extend;
  }
  if (isPlainObject(user.extend) && Object.keys(user.extend).length > 0) {
    themeExtend = themeExtend ? deepMerge(user.extend, themeExtend) : user.extend;
    merged.extend = user.extend;
  }
  if (themeExtend) {
    merged.theme = deepMerge(merged.theme, themeExtend);
  }
  if (merged.theme.palette === "oklch" && Object.keys(OKLCH_PALETTE).length) {
    const userColors = isPlainObject(user.theme) && isPlainObject(user.theme.colors) ? user.theme.colors : {};
    const extendColors = themeExtend && isPlainObject(themeExtend.colors) ? themeExtend.colors : {};
    const semantic = {
      grey: OKLCH_PALETTE["gray-500"],
      light: OKLCH_PALETTE["blue-100"],
      primary: OKLCH_PALETTE["blue-600"],
      secondary: OKLCH_PALETTE["blue-800"],
      success: OKLCH_PALETTE["emerald-500"],
      warning: OKLCH_PALETTE["amber-500"],
      danger: OKLCH_PALETTE["red-500"]
    };
    merged.theme.colors = { ...merged.theme.colors, ...OKLCH_PALETTE, ...semantic, ...extendColors, ...userColors };
  }
  if (!silent) {
    const scales = { ...merged.theme };
    delete scales.exposeAll;
    delete scales.palette;
    const warnings = validateTheme(scales);
    for (const w of warnings) {
      console.warn(`[senang] Theme validation: ${w}`);
    }
  }
  return merged;
}

// src/engine/resolve.js
var PALETTE_KEYS = new Set(Object.keys(COLOR_PALETTE || {}));
var TW_TABLES = {
  spacing: { table: TW_SPACING, varPrefix: "--tw-", normalize: (k) => k.replace(/\./g, "-") },
  radius: { table: TW_RADIUS, varPrefix: "--r-tw-" },
  shadow: { table: TW_SHADOW, varPrefix: "--shadow-tw-" },
  fontSize: { table: TW_FONT_SIZE, varPrefix: "--tw-text-" },
  fontWeight: { table: TW_FONT_WEIGHT, varPrefix: "--tw-font-" }
};
var IDENTIFIER = /^-?[A-Za-z][A-Za-z0-9-]*$/;
var NUMBER = /^-?\d*\.?\d+$/;
var FUNCTION_LIKE = /^[a-zA-Z-]+\(/;
function fillTemplate(template, value, key = value) {
  return template.replace(/\{value\}/g, value).replace(/\{key\}/g, key);
}
function fail(code, message, suggestion = null) {
  return { css: null, error: { code, message, suggestion } };
}
function ok(css, usedVars) {
  return { css, error: null, usedVars };
}
function varsIn(css) {
  const out = [];
  const re = /var\((--[A-Za-z0-9_-]+)/g;
  let m;
  while (m = re.exec(css)) out.push(m[1]);
  return out;
}
function lookupScale(entry, key, ctx) {
  const theme = ctx.theme || {};
  const scale = entry.scale;
  if (key.startsWith("tw-") && TW_TABLES[scale]) {
    const tw = TW_TABLES[scale];
    const k = tw.normalize ? tw.normalize(key.slice(3)) : key.slice(3);
    if (k in tw.table) return { value: `var(${tw.varPrefix}${k})`, key: k, tw: true };
    return null;
  }
  const scaleObj = theme[scale];
  const known = scaleObj && Object.prototype.hasOwnProperty.call(scaleObj, key) || entry.scaleValues.includes(key) || scale === "colors" && PALETTE_KEYS.has(key);
  if (!known) return null;
  if (entry.varPrefix) return { value: `var(${entry.varPrefix}${key})`, key };
  const inline = scaleObj && scaleObj[key] !== void 0 ? String(scaleObj[key]) : null;
  if (inline === null) return null;
  return { value: inline, key };
}
function knownScaleKeys(entry, ctx) {
  const theme = ctx.theme || {};
  const keys = new Set(entry.scaleValues);
  if (entry.scale && theme[entry.scale]) for (const k of Object.keys(theme[entry.scale])) keys.add(k);
  if (entry.scale === "colors") for (const k of PALETTE_KEYS) keys.add(k);
  return keys;
}
function parseOpacity(raw) {
  if (/^\d{1,3}$/.test(raw)) {
    const n = parseInt(raw, 10);
    if (n >= 0 && n <= 100) return n / 100;
  }
  if (/^\d*\.?\d+$/.test(raw)) {
    const n = parseFloat(raw);
    if (n >= 0 && n <= 1) return n;
  }
  const arb = /^\[(.+)\]$/.exec(raw);
  if (arb) {
    const inner = arb[1].trim();
    if (/^\d*\.?\d+%?$/.test(inner)) {
      const n = parseFloat(inner);
      if (inner.endsWith("%")) return n >= 0 && n <= 100 ? n / 100 : NaN;
      return n >= 0 && n <= 1 ? n : NaN;
    }
    return NaN;
  }
  return NaN;
}
function resolveColor(rawValue, isArbitrary, entry, ctx) {
  let colorPart = rawValue;
  let opacity2 = null;
  if (!isArbitrary) {
    const slash = rawValue.lastIndexOf("/");
    if (slash > 0) {
      const maybe = rawValue.slice(slash + 1);
      const parsed = parseOpacity(maybe);
      if (!Number.isNaN(parsed)) {
        opacity2 = parsed;
        colorPart = rawValue.slice(0, slash);
      } else if (/^\[/.test(maybe) || /^\d/.test(maybe)) {
        return { error: { code: CODES.INVALID_VALUE, message: `Invalid opacity modifier "/${maybe}" in "${rawValue}"` } };
      }
    }
  }
  let resolved;
  const arb = !isArbitrary && /^\[(.+)\]$/.exec(colorPart);
  if (isArbitrary || arb) {
    const inner = arb ? arb[1].replace(/_/g, " ") : colorPart;
    const check = validateValue(inner);
    if (!check.ok) return { error: { code: CODES.INVALID_VALUE, message: `Invalid value "${inner}": ${check.reason}` } };
    resolved = inner;
  } else if (colorPart === "current") {
    resolved = "currentColor";
  } else if (CSS_COLOR_KEYWORDS.includes(colorPart)) {
    resolved = colorPart;
  } else {
    if (!isValidScaleKey(colorPart)) {
      return { error: { code: CODES.INVALID_VALUE, message: `Invalid colour "${colorPart}"` } };
    }
    const hit = lookupScale({ ...entry, scale: "colors", varPrefix: "--c-" }, colorPart, ctx);
    if (!hit) {
      const candidates = [...knownScaleKeys({ ...entry, scale: "colors" }, ctx), "current", ...CSS_COLOR_KEYWORDS];
      return { error: { code: CODES.UNKNOWN_VALUE, message: `Unknown colour "${colorPart}"`, suggestion: suggest(colorPart, candidates) } };
    }
    resolved = hit.value;
  }
  if (opacity2 !== null) {
    resolved = `color-mix(in srgb, ${resolved} ${Math.round(opacity2 * 100)}%, transparent)`;
  }
  return { value: resolved };
}
function resolveNumeric(entry, key) {
  const n = entry.numeric;
  if (!n || !NUMBER.test(key)) return null;
  if (n.integer && !/^-?\d+$/.test(key)) return null;
  const num = parseFloat(key);
  if (n.divide) return String(num / n.divide);
  if (num === 0) return n.unit === "deg" || n.unit === "px" ? `0${n.unit}` : "0";
  return `${key}${n.unit || ""}`;
}
function resolveDeclarations(entry, token, ctx) {
  const value = token.value;
  if (typeof value !== "string" || value.length === 0) {
    return fail(CODES.INVALID_VALUE, `Missing value for "${entry.key}"`);
  }
  if (token.isArbitrary) {
    if (!entry.arbitrary && !entry.passthrough && !entry.template && !entry.arbitraryTemplate) {
      return fail(CODES.UNKNOWN_VALUE, `"${entry.key}" does not accept arbitrary values`);
    }
    const check = validateValue(value);
    if (!check.ok) return fail(CODES.INVALID_VALUE, `Invalid value "${value}": ${check.reason}`);
    let v = value;
    if (entry.color) {
      const c = resolveColor(value, true, entry, ctx);
      if (c.error) return fail(c.error.code, c.error.message, c.error.suggestion);
      v = c.value;
    } else if (entry.arbitraryWrap === "url" && !FUNCTION_LIKE.test(v) && v !== "none") {
      v = `url(${v})`;
    } else if (entry.quote) {
      v = quoteValue(v);
    }
    const template2 = entry.arbitraryTemplate || entry.template;
    if (!template2) return fail(CODES.UNKNOWN_VALUE, `"${entry.key}" does not accept arbitrary values`);
    const css = fillTemplate(template2, v, v);
    return ok(css, varsIn(css));
  }
  if (entry.enum && Object.prototype.hasOwnProperty.call(entry.enum, value)) {
    const css = entry.enum[value];
    return ok(css, varsIn(css));
  }
  if (entry.color) {
    const c = resolveColor(value, false, entry, ctx);
    if (c.error) return fail(c.error.code, c.error.message, c.error.suggestion);
    const template2 = entry.template;
    if (!template2) return fail(CODES.UNKNOWN_VALUE, `No template for "${entry.key}"`);
    const css = fillTemplate(template2, c.value, value);
    return ok(css, varsIn(css));
  }
  if (Array.isArray(entry.patterns)) {
    for (const pat of entry.patterns) {
      const re = pat.re instanceof RegExp ? pat.re : new RegExp(pat.re);
      const pm = re.exec(value);
      if (!pm) continue;
      const inner = pm[1] === void 0 ? "" : pm[1].replace(/_/g, " ");
      if (inner) {
        const check = validateValue(inner);
        if (!check.ok) return fail(CODES.INVALID_VALUE, `Invalid value "${inner}": ${check.reason}`);
      }
      const css = pat.template.replace(/\$1/g, inner);
      return ok(css, varsIn(css));
    }
  }
  if (!isValidScaleKey(value)) {
    return fail(CODES.INVALID_VALUE, `Invalid value "${value}" for "${entry.key}"`);
  }
  let negative = false;
  let key = value;
  if (value.startsWith("-") && value.length > 1) {
    if (entry.negatable || entry.numeric && NUMBER.test(value)) {
      negative = true;
      key = value.slice(1);
    }
  }
  const template = entry.template;
  if (entry.literals && Object.prototype.hasOwnProperty.call(entry.literals, key) && template) {
    let v = entry.literals[key];
    if (negative) v = negateLiteral(v);
    const tpl = entry.arbitraryWrap === "url" && entry.arbitraryTemplate ? entry.arbitraryTemplate : template;
    const css = fillTemplate(tpl, v, key);
    return ok(css, varsIn(css));
  }
  if (entry.scale && template) {
    const hit = lookupScale(entry, key, ctx);
    if (hit) {
      let v = hit.value;
      if (negative) v = `calc(${v} * -1)`;
      const tpl = hit.tw && entry.twTemplate ? entry.twTemplate : template;
      const css = fillTemplate(tpl, v, hit.key);
      return ok(css, varsIn(css));
    }
  }
  if (entry.numeric && template) {
    const n = resolveNumeric(entry, key);
    if (n !== null) {
      const v = negative && n !== "0" ? `-${n}` : n;
      const css = fillTemplate(template, v, key);
      return ok(css, varsIn(css));
    }
  }
  if (entry.arbitraryWrap === "url" && entry.passthrough && template && URL_PATH.test(value) && !negative) {
    const css = fillTemplate(template, value, value);
    return ok(css, varsIn(css));
  }
  if (entry.passthrough && template && IDENTIFIER.test(value) && !negative) {
    const css = fillTemplate(template, entry.quote ? quoteValue(value) : value, value);
    return ok(css, varsIn(css));
  }
  const candidates = /* @__PURE__ */ new Set([
    ...Object.keys(entry.enum || {}),
    ...Object.keys(entry.literals || {}),
    ...entry.scale ? knownScaleKeys(entry, ctx) : []
  ]);
  return fail(
    CODES.UNKNOWN_VALUE,
    `Unknown value "${value}" for "${entry.key}"`,
    suggest(key, candidates)
  );
}
var URL_PATH = /^[A-Za-z0-9_.\/-]+\.[A-Za-z0-9]+$/;
var UNQUOTED_CONTENT = /^(none|normal|open-quote|close-quote|no-open-quote|no-close-quote|inherit|initial|unset)$/;
function quoteValue(v) {
  if (/^".*"$/.test(v) || /^'.*'$/.test(v) || FUNCTION_LIKE.test(v) || UNQUOTED_CONTENT.test(v)) return v;
  return `"${v.replace(/"/g, '\\"')}"`;
}
function negateLiteral(v) {
  if (/^-/.test(v)) return v.slice(1);
  if (/^\d/.test(v)) return `-${v}`;
  if (v === "0" || v === "auto" || /content$/.test(v)) return v;
  return `calc(${v} * -1)`;
}

// src/engine/index.js
function generateDeclarations(token, config, registry = registryFor(config)) {
  const empty = { css: null, entry: null, error: null, usedVars: [] };
  if (!token || typeof token !== "object") return { ...empty, error: diagnostic(token, CODES.INVALID_TOKEN, "Token is not an object") };
  const { attrType, property, value, raw } = token;
  if (!["layout", "space", "visual"].includes(attrType)) {
    return { ...empty, error: diagnostic(token, CODES.UNKNOWN_PROPERTY, `Unknown attribute "${attrType}"`) };
  }
  if (typeof property !== "string" || !property) {
    return { ...empty, error: diagnostic(token, CODES.INVALID_TOKEN, `Invalid token "${raw}"`) };
  }
  if (token.error) {
    return { ...empty, error: diagnostic(token, token.errorCode || CODES.INVALID_TOKEN, token.error) };
  }
  for (const v of tokenVariants(token)) {
    if (!parseVariant(v, config)) {
      return { ...empty, error: diagnostic(token, CODES.UNKNOWN_VARIANT, `Unknown variant "${v}:" in "${raw}"`) };
    }
  }
  const userTheme = config && config.theme || {};
  const ctx = { theme: { ...defaultConfig.theme, ...userTheme } };
  if (token.arbitraryProperty) {
    if (!/^(?:--)?[a-z][a-z0-9-]*$/.test(property)) {
      return { ...empty, error: diagnostic(token, CODES.INVALID_VALUE, `Invalid property name "${property}"`) };
    }
    return { css: `${property}: ${value};`, entry: { kind: "arbitrary-property", key: property, props: [property] }, error: null, usedVars: [] };
  }
  if ((property === value || value === "") && !token.isArbitrary) {
    const kw = registry.keyword(attrType, property);
    if (kw) {
      if (kw.kind === "marker") return { css: null, entry: kw, error: null, usedVars: [] };
      return { css: kw.css, entry: kw, error: null, usedVars: [] };
    }
    const util = registry.utility(attrType, property);
    if (!util) {
      return { ...empty, error: diagnostic(token, CODES.UNKNOWN_PROPERTY, `Unknown ${attrType} utility "${property}"`, suggest(property, registry.keys(attrType))) };
    }
    return { ...empty, entry: util, error: diagnostic(token, CODES.UNKNOWN_VALUE, `"${property}" requires a value (e.g. ${property}:\u2026)`) };
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

// src/compiler/generators/presets.js
var PRESET_NAMES = ["prose", "forms"];
var PRESET_KEYWORDS = {
  prose: "prose",
  "prose-sm": "prose",
  "prose-lg": "prose",
  "prose-invert": "prose"
};
function enabledPresets(config) {
  const out = /* @__PURE__ */ new Map();
  const p = config && config.presets;
  if (Array.isArray(p)) {
    for (const item of p) {
      if (typeof item === "string" && PRESET_NAMES.includes(item)) out.set(item, {});
      else if (item && typeof item === "object" && PRESET_NAMES.includes(item.name)) out.set(item.name, item);
    }
  } else if (p && typeof p === "object") {
    for (const [name, v] of Object.entries(p)) {
      if (!PRESET_NAMES.includes(name) || v === false) continue;
      out.set(name, v === true ? {} : v || {});
    }
  }
  return out;
}
function generatePresets(config) {
  const enabled = enabledPresets(config);
  let css = "";
  if (enabled.has("prose")) css += generateProse(config, enabled.get("prose"));
  if (enabled.has("forms")) css += generateForms(config, enabled.get("forms"));
  return css;
}
function generateProse(config, options = {}) {
  const V = attrName("visual", config);
  const P = `[${V}~="prose"]`;
  const maxWidth = options.maxWidth || "65ch";
  const body = "var(--c-gray-700)", headings = "var(--c-gray-900)", muted = "var(--c-gray-500)";
  const links = "var(--c-primary)", borders = "var(--c-gray-200)", code = "var(--c-gray-900)", codeBg = "var(--c-gray-100)";
  const preBg = "var(--c-gray-800)", preText = "var(--c-gray-100)", quoteBorder = "var(--c-gray-300)";
  return `/* SenangStart preset: prose */
${P} {
  --prose-body: ${body}; --prose-headings: ${headings}; --prose-muted: ${muted}; --prose-links: ${links};
  --prose-borders: ${borders}; --prose-code: ${code}; --prose-code-bg: ${codeBg}; --prose-pre-bg: ${preBg}; --prose-pre-text: ${preText};
  --prose-quote-border: ${quoteBorder};
  --prose-size: 1rem; --prose-leading: 1.75;
  color: var(--prose-body); max-width: ${maxWidth}; font-size: var(--prose-size); line-height: var(--prose-leading);
}
[${V}~="prose-sm"] { --prose-size: 0.875rem; --prose-leading: 1.7142857; }
[${V}~="prose-lg"] { --prose-size: 1.125rem; --prose-leading: 1.7777778; }
[${V}~="prose-invert"] {
  --prose-body: var(--c-gray-300); --prose-headings: var(--c-white); --prose-muted: var(--c-gray-400); --prose-links: var(--c-blue-400);
  --prose-borders: var(--c-gray-700); --prose-code: var(--c-white); --prose-code-bg: var(--c-gray-800); --prose-pre-bg: var(--c-gray-900);
  --prose-pre-text: var(--c-gray-100); --prose-quote-border: var(--c-gray-600);
}
${P} :where(p) { margin-top: 1.25em; margin-bottom: 1.25em; }
${P} :where(a) { color: var(--prose-links); text-decoration: underline; font-weight: 500; }
${P} :where(strong) { color: var(--prose-headings); font-weight: 600; }
${P} :where(h1) { color: var(--prose-headings); font-weight: 800; font-size: 2.25em; line-height: 1.1111111; margin-top: 0; margin-bottom: 0.8888889em; }
${P} :where(h2) { color: var(--prose-headings); font-weight: 700; font-size: 1.5em; line-height: 1.3333333; margin-top: 2em; margin-bottom: 1em; }
${P} :where(h3) { color: var(--prose-headings); font-weight: 600; font-size: 1.25em; line-height: 1.6; margin-top: 1.6em; margin-bottom: 0.6em; }
${P} :where(h4) { color: var(--prose-headings); font-weight: 600; line-height: 1.5; margin-top: 1.5em; margin-bottom: 0.5em; }
${P} :where(h2 + *, h3 + *, h4 + *, hr + *) { margin-top: 0; }
${P} :where(ul, ol) { margin-top: 1.25em; margin-bottom: 1.25em; padding-left: 1.625em; }
${P} :where(ul) { list-style-type: disc; }
${P} :where(ol) { list-style-type: decimal; }
${P} :where(li) { margin-top: 0.5em; margin-bottom: 0.5em; }
${P} :where(li)::marker { color: var(--prose-muted); }
${P} :where(blockquote) { font-style: italic; color: var(--prose-headings); border-left: 0.25rem solid var(--prose-quote-border); padding-left: 1em; margin: 1.6em 0; }
${P} :where(code) { color: var(--prose-code); background-color: var(--prose-code-bg); font-weight: 600; font-size: 0.875em; padding: 0.125em 0.375em; border-radius: 0.25rem; }
${P} :where(pre) { color: var(--prose-pre-text); background-color: var(--prose-pre-bg); overflow-x: auto; font-weight: 400; font-size: 0.875em; line-height: 1.7142857; margin: 1.7142857em 0; border-radius: 0.375rem; padding: 0.8571429em 1.1428571em; }
${P} :where(pre code) { background-color: transparent; color: inherit; font-weight: inherit; font-size: inherit; padding: 0; border-radius: 0; }
${P} :where(hr) { border-color: var(--prose-borders); border-top-width: 1px; margin: 3em 0; }
${P} :where(img, video, figure) { margin-top: 2em; margin-bottom: 2em; }
${P} :where(figcaption) { color: var(--prose-muted); font-size: 0.875em; line-height: 1.4285714; margin-top: 0.8571429em; }
${P} :where(table) { width: 100%; table-layout: auto; text-align: left; margin: 2em 0; font-size: 0.875em; line-height: 1.7142857; border-collapse: collapse; }
${P} :where(thead) { border-bottom: 1px solid var(--prose-quote-border); }
${P} :where(th) { color: var(--prose-headings); font-weight: 600; vertical-align: bottom; padding: 0 0.5714286em 0.5714286em; }
${P} :where(tbody tr) { border-bottom: 1px solid var(--prose-borders); }
${P} :where(td) { vertical-align: baseline; padding: 0.5714286em; }
${P} :where(:first-child) { margin-top: 0; }
${P} :where(:last-child) { margin-bottom: 0; }
`;
}
function generateForms(config, options = {}) {
  const accent = options.accent || "var(--c-primary)";
  const border = options.border || "var(--c-gray-300)";
  const radius = options.radius || "var(--r-small, 0.25rem)";
  return `/* SenangStart preset: forms */
:where([type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select) {
  appearance: none; background-color: var(--c-white); border: 1px solid ${border}; border-radius: ${radius};
  padding: 0.5rem 0.75rem; font-size: 1rem; line-height: 1.5rem; color: inherit;
}
:where([type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select):focus {
  outline: 2px solid transparent; outline-offset: 2px; border-color: ${accent}; box-shadow: 0 0 0 1px ${accent};
}
:where(input::placeholder, textarea::placeholder) { color: var(--c-gray-500); opacity: 1; }
:where(::-webkit-datetime-edit-fields-wrapper) { padding: 0; }
:where(::-webkit-date-and-time-value) { min-height: 1.5em; text-align: inherit; }
:where(select) {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center; background-repeat: no-repeat; background-size: 1.5em 1.5em; padding-right: 2.5rem; print-color-adjust: exact;
}
:where([multiple], [size]:where(select:not([size='1']))) { background-image: none; background-position: initial; background-repeat: unset; background-size: initial; padding-right: 0.75rem; print-color-adjust: unset; }
:where([type='checkbox'], [type='radio']) {
  appearance: none; padding: 0; print-color-adjust: exact; display: inline-block; vertical-align: middle; background-origin: border-box;
  user-select: none; flex-shrink: 0; height: 1rem; width: 1rem; color: ${accent}; background-color: var(--c-white); border: 1px solid var(--c-gray-500);
}
:where([type='checkbox']) { border-radius: 0.25rem; }
:where([type='radio']) { border-radius: 100%; }
:where([type='checkbox'], [type='radio']):focus { outline: 2px solid transparent; outline-offset: 2px; box-shadow: 0 0 0 2px var(--c-white), 0 0 0 4px ${accent}; }
:where([type='checkbox'], [type='radio']):checked { border-color: transparent; background-color: currentColor; background-size: 100% 100%; background-position: center; background-repeat: no-repeat; }
:where([type='checkbox']):checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"); }
:where([type='radio']):checked { background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e"); }
:where([type='checkbox']):indeterminate { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e"); border-color: transparent; background-color: currentColor; background-size: 100% 100%; background-position: center; background-repeat: no-repeat; }
:where([type='checkbox'], [type='radio']):checked:hover, :where([type='checkbox'], [type='radio']):checked:focus { border-color: transparent; background-color: currentColor; }
:where([type='file']) { background: unset; border-color: inherit; border-width: 0; border-radius: 0; padding: 0; font-size: unset; line-height: inherit; }
:where([type='file']):focus { outline: 1px solid ButtonText; outline: 1px auto -webkit-focus-ring-color; }
`;
}

// src/compiler/generators/css.js
function generateCSSVariables(config) {
  const { theme } = config;
  let css = ":root {\n";
  for (const [key, value] of Object.entries(theme.spacing)) {
    css += `  --s-${key}: ${value};
`;
  }
  for (const [key, value] of Object.entries(theme.radius)) {
    css += `  --r-${key}: ${value};
`;
  }
  for (const [key, value] of Object.entries(theme.shadow)) {
    css += `  --shadow-${key}: ${value};
`;
  }
  for (const [key, value] of Object.entries(theme.fontSize)) {
    css += `  --font-${key}: ${value};
`;
  }
  if (theme.fontSizeLineHeight) {
    for (const [key, value] of Object.entries(theme.fontSizeLineHeight)) {
      css += `  --font-lh-${key}: ${value};
`;
    }
  }
  for (const [key, value] of Object.entries(theme.fontWeight)) {
    css += `  --fw-${key}: ${value};
`;
  }
  for (const [key, value] of Object.entries(theme.colors)) {
    css += `  --c-${key}: ${value};
`;
  }
  if (theme.placeholder) {
    css += `  --placeholder-color: ${theme.placeholder};
`;
  } else {
    css += "  --placeholder-color: #9ca3af;\n";
  }
  css += "  --gradient-from: transparent;\n";
  css += "  --gradient-via: transparent;\n";
  css += "  --gradient-to: transparent;\n";
  css += "  --gradient-stops: var(--gradient-from), var(--gradient-via), var(--gradient-to);\n";
  for (const [key, value] of Object.entries(theme.zIndex)) {
    css += `  --z-${key}: ${value};
`;
  }
  for (const [key, value] of Object.entries(TW_SPACING)) {
    css += `  --tw-${key}: ${value};
`;
  }
  for (const [key, value] of Object.entries(TW_RADIUS)) {
    css += `  --r-tw-${key}: ${value};
`;
  }
  for (const [key, value] of Object.entries(TW_SHADOW)) {
    css += `  --shadow-tw-${key}: ${value};
`;
  }
  for (const [key, value] of Object.entries(TW_FONT_SIZE)) {
    css += `  --tw-text-${key}: ${value};
`;
  }
  for (const [key, value] of Object.entries(TW_LEADING)) {
    css += `  --tw-leading-${key}: ${value};
`;
  }
  for (const [key, value] of Object.entries(TW_FONT_WEIGHT)) {
    css += `  --tw-font-${key}: ${value};
`;
  }
  css += "  --ss-divide-x-reverse: 0;\n";
  css += "  --ss-divide-y-reverse: 0;\n";
  css += "  --ring-inset: ;\n";
  css += "  --ss-ring-color: var(--c-primary);\n";
  css += "}\n\n";
  return css;
}
function isValidCSSRule(declaration) {
  if (!declaration || typeof declaration !== "string") {
    return false;
  }
  declaration = declaration.trim();
  if (!declaration) return false;
  if (!declaration.endsWith(";")) return false;
  const parts = declaration.substring(0, declaration.length - 1).split(":");
  if (parts.length < 2) return false;
  const property = parts[0].trim();
  const value = parts.slice(1).join(":").trim();
  if (!property || !value) return false;
  return true;
}
var ruleCache = /* @__PURE__ */ new WeakMap();
function generateRule(token, config, skipDarkWrapper = false, interactIds = /* @__PURE__ */ new Set()) {
  if (!token || typeof token !== "object" || !config || typeof config !== "object") {
    return generateRuleUncached(token, config, skipDarkWrapper, interactIds);
  }
  let perConfig = ruleCache.get(config);
  if (!perConfig) {
    perConfig = /* @__PURE__ */ new Map();
    ruleCache.set(config, perConfig);
  }
  const peers = interactIds && interactIds.size ? [...interactIds].sort().join(",") : "";
  const key = `${token.attrType}\0${token.raw}\0${skipDarkWrapper ? 1 : 0}\0${peers}`;
  const hit = perConfig.get(key);
  if (hit !== void 0) return hit;
  const rule = generateRuleUncached(token, config, skipDarkWrapper, interactIds);
  perConfig.set(key, rule);
  return rule;
}
function generateRuleUncached(token, config, _skipDarkWrapper = false, interactIds = /* @__PURE__ */ new Set()) {
  try {
    if (!token || typeof token !== "object") {
      return "";
    }
    const { raw, attrType, state } = token;
    if (token.error) return "";
    if (!attrType || typeof attrType !== "string") {
      return "";
    }
    if (!raw || typeof raw !== "string") {
      return "";
    }
    if (!["layout", "space", "visual"].includes(attrType)) return "";
    let cssDeclaration = generateDeclarations(token, config).css || "";
    if (!cssDeclaration) return "";
    if (!isValidCSSRule(cssDeclaration)) {
      return "";
    }
    if (!token.isArbitrary) {
      cssDeclaration = cssDeclaration.replace(/var\(--c-current\)/g, "currentColor").replace(/var\(--c-inherit\)/g, "inherit").replace(/(flex-basis:\s*)var\(--s-(auto|0)\)/g, (_, p1, v) => `${p1}${v === "0" ? "0px" : v}`);
    }
    const isDivide = raw && (/(^|:)divide/.test(raw) || /(^|:)space-[xy]:/.test(raw));
    let selector = "";
    if (isDivide) {
      selector = `:where([${attrName(attrType, config)}~="${escapeCSSString(raw)}"] > :not([hidden]) ~ :not([hidden]))`;
    } else {
      selector = `[${attrName(attrType, config)}~="${escapeCSSString(raw)}"]`;
    }
    const parsed = tokenVariants(token).map((v) => parseVariant(v, config)).filter(Boolean);
    const stateVs = parsed.filter((p) => p.type === "state");
    const mediaVs = parsed.filter((p) => p.type === "media");
    if (stateVs.length === 0 && state && state !== "dark" && !Array.isArray(token.variants)) {
      const p = parseVariant(state, config);
      if (p && p.type === "state") stateVs.push(p);
    }
    if (stateVs.length > 0) {
      const classes = stateVs.filter((p) => !p.pseudoElement).map(stateSelector).join("");
      const elements = stateVs.filter((p) => p.pseudoElement).map(stateSelector).join("");
      const suffix = classes + elements;
      if (stateVs.some((p) => p.content) && !/(^|;)\s*content\s*:/.test(cssDeclaration)) {
        cssDeclaration = `content: var(--ss-content, ""); ${cssDeclaration}`;
      }
      if (isDivide) {
        selector = `:where([${attrName(attrType, config)}~="${escapeCSSString(raw)}"] > :not([hidden]) ~ :not([hidden]))${suffix}`;
      } else {
        const selectors = [`${selector}${suffix}`];
        const groupTriggers = {
          hover: ["hoverable", ":hover"],
          focus: ["focusable", ":focus-within"],
          "focus-visible": ["focusable", ":focus-within"],
          active: ["pressable", ":active"],
          expanded: ["expandable", '[aria-expanded="true"]'],
          selected: ["selectable", '[aria-selected="true"]'],
          checked: ["checkable", ":checked"]
        };
        const only = stateVs.length === 1 ? groupTriggers[stateVs[0].name] : null;
        const L = attrName("layout", config);
        if (only) {
          const [parentAttr, trigger] = only;
          selectors.push(`:where([${L}~="${parentAttr}"]:not([${L}~="disabled"])${trigger}) ${selector}${selector}`);
          if (interactIds && interactIds.size > 0) {
            for (const id of interactIds) {
              const eid = escapeCSSString(id);
              selectors.push(`:where([${attrName("interact", config)}~="${eid}"]:not([${L}~="disabled"])${trigger}) ~ [${attrName("listens", config)}~="${eid}"]${selector}`);
            }
          }
        }
        selector = selectors.join(",\n");
      }
    }
    if (token.important) {
      cssDeclaration = cssDeclaration.split(";").map((d) => d.trim()).filter(Boolean).map((d) => `${d} !important`).join("; ") + ";";
    }
    const containerVs = parsed.filter((p) => p.type === "container");
    let rule = `${selector} { ${cssDeclaration} }`;
    for (const p of containerVs) {
      rule = `@container ${p.container ? `${p.container} ` : ""}${p.query} { ${rule} }`;
    }
    if (mediaVs.length > 0) {
      const query = mediaVs.map((p) => p.query).join(" and ");
      rule = `@media ${query} { ${rule} }`;
    }
    if (containerVs.length || mediaVs.length) return `${rule}
`;
    return `${selector} { ${cssDeclaration} }
`;
  } catch {
    return "";
  }
}
function getDarkModeSelector(config) {
  const darkMode = config.darkMode || "media";
  if (Array.isArray(darkMode)) return darkMode[1] || ".dark";
  if (darkMode === "selector" || darkMode === "class") return ".dark";
  return null;
}
function getDarkModeStrategy(config) {
  const darkMode = config.darkMode || "media";
  if (Array.isArray(darkMode) || darkMode === "selector" || darkMode === "class") return "selector";
  return "media";
}
function splitSelectorList(list) {
  const out = [];
  let depth = 0;
  let quote = null;
  let start = 0;
  for (let i = 0; i < list.length; i++) {
    const ch = list[i];
    if (quote) {
      if (ch === "\\") i++;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") quote = ch;
    else if (ch === "[" || ch === "(") depth++;
    else if (ch === "]" || ch === ")") depth--;
    else if (ch === "," && depth === 0) {
      out.push(list.slice(start, i));
      start = i + 1;
    }
  }
  out.push(list.slice(start));
  return out;
}
function prefixRuleSelectors(rule, darkSelector) {
  const braceIndex = rule.indexOf("{");
  if (braceIndex === -1) return rule;
  const selectorPart = rule.slice(0, braceIndex);
  const rest = rule.slice(braceIndex);
  const wrapper = `:where(${darkSelector}, :is(${darkSelector}) *)`;
  const prefixed = splitSelectorList(selectorPart).map((sel) => {
    const trimmed = sel.trim();
    if (!trimmed || trimmed.startsWith("@")) return sel;
    return `${wrapper}${trimmed}`;
  }).join(",\n");
  return `${prefixed} ${rest}`;
}
function indentCSS(css, indent) {
  return css.split("\n").map((line) => line.trim() ? indent + line : line).join("\n");
}
function generateDarkRules(bpTokens, breakpoint, ctx) {
  const { config, screens, interactIds, errors, wrapSelector } = ctx;
  const entries = [];
  const seen = /* @__PURE__ */ new Set();
  for (const token of bpTokens) {
    const id = `${token.attrType}\0${token.raw}`;
    if (seen.has(id)) continue;
    seen.add(id);
    const rule = safeRule(token, config, true, interactIds, errors, "dark_rule", ctx.defined);
    if (rule) entries.push({ rule, key: ruleSortKey(rule, `${token.attrType}=${token.raw}`, token.variants) });
  }
  entries.sort(compareRuleKeys);
  const emitRules = (indent) => entries.map(({ rule }) => indentCSS(wrapSelector ? prefixRuleSelectors(rule, wrapSelector) : rule, indent)).join("");
  if (!breakpoint) return emitRules(ctx.baseIndent || "");
  const inner = ctx.baseIndent ? "    " : "  ";
  const outer = ctx.baseIndent ? "  " : "";
  return `${outer}${breakpointQuery(breakpoint, screens, config)} {
${emitRules(inner)}${outer}}
`;
}
var ZERO_HYPHEN_LONGHANDS = /* @__PURE__ */ new Set(["top", "right", "bottom", "left"]);
function propertyDepth(prop) {
  if (prop.startsWith("--")) return 0;
  if (ZERO_HYPHEN_LONGHANDS.has(prop)) return 1;
  return (prop.match(/-/g) || []).length;
}
var VARIANT_ORDER = [
  "first",
  "last",
  "only",
  "odd",
  "even",
  "first-of-type",
  "last-of-type",
  "empty",
  "visited",
  "target",
  "open",
  "default",
  "checked",
  "indeterminate",
  "placeholder-shown",
  "autofill",
  "optional",
  "required",
  "valid",
  "invalid",
  "user-valid",
  "user-invalid",
  "in-range",
  "out-of-range",
  "read-only",
  "expanded",
  "selected",
  "focus-within",
  "hover",
  "focus",
  "focus-visible",
  "active",
  "enabled",
  "disabled"
];
var VARIANT_RANK = new Map(VARIANT_ORDER.map((v, i) => [v, i + 1]));
function variantRank(variants) {
  let rank = 0;
  for (const v of variants || []) {
    const r = VARIANT_RANK.get(v) ?? (/^(aria-|data-|has-|not-|group-|peer-)/.test(v) ? VARIANT_ORDER.length + 1 : 0);
    if (r > rank) rank = r;
  }
  return rank;
}
function ruleSortKey(rule, raw, variants) {
  if (rule.startsWith("@")) {
    const inner = rule.slice(rule.indexOf("{") + 1, rule.lastIndexOf("}"));
    const k = ruleSortKey(inner.trim(), raw, variants);
    return { ...k, depth: k.depth + 100 };
  }
  const body = rule.slice(rule.indexOf("{") + 1, rule.lastIndexOf("}"));
  const props = body.split(";").map((d) => d.split(":")[0].trim()).filter(Boolean);
  const depth = props.length ? Math.min(...props.map(propertyDepth)) : 0;
  return { vrank: variantRank(variants), depth, count: props.length, raw };
}
function compareRuleKeys(a, b) {
  if (a.key.vrank !== b.key.vrank) return a.key.vrank - b.key.vrank;
  if (a.key.depth !== b.key.depth) return a.key.depth - b.key.depth;
  if (a.key.count !== b.key.count) return b.key.count - a.key.count;
  return a.key.raw < b.key.raw ? -1 : a.key.raw > b.key.raw ? 1 : 0;
}
function generateSortedRules(tokens, config, interactIds, errors, errorType, defined) {
  const entries = [];
  const seen = /* @__PURE__ */ new Set();
  for (const token of tokens) {
    const id = `${token.attrType}\0${token.raw}`;
    if (seen.has(id)) continue;
    seen.add(id);
    const rule = safeRule(token, config, false, interactIds, errors, errorType, defined);
    if (rule) entries.push({ rule, key: ruleSortKey(rule, `${token.attrType}=${token.raw}`, token.variants) });
  }
  entries.sort(compareRuleKeys);
  return entries.map((e) => e.rule);
}
function safeRule(token, config, skipDark, interactIds, errors, errorType, defined) {
  if (token.error) return "";
  if (token.attrType === "interact" || token.attrType === "listens") return "";
  let rule = "";
  try {
    rule = generateRule(token, config, skipDark, interactIds);
  } catch (e) {
    errors.push({ ...diagnoseToken(token, config), type: errorType, message: e.message });
    return "";
  }
  if (!rule) {
    if (token.attrType === "layout" && MARKER_KEYWORDS.has(token.raw)) return "";
    const preset = token.attrType === "visual" ? PRESET_KEYWORDS[token.raw] : void 0;
    if (preset) {
      if (enabledPresets(config).has(preset)) return "";
      errors.push({
        ...diagnoseToken(token, config),
        type: errorType,
        code: "UNKNOWN_PROPERTY",
        message: `"${token.raw}" needs the ${preset} preset: add presets: ['${preset}'] to your config`,
        suggestion: void 0
      });
      return "";
    }
    errors.push({ ...diagnoseToken(token, config), type: errorType });
    return "";
  }
  const undef = checkUndefinedVars(rule, token, defined);
  if (undef) {
    errors.push({ ...undef, type: errorType });
    return "";
  }
  return rule;
}
var MARKER_KEYWORDS = /* @__PURE__ */ new Set(["hoverable", "focusable", "pressable", "expandable", "selectable", "disabled"]);
function screenToPx(value) {
  if (typeof value !== "string") return Number.POSITIVE_INFINITY;
  const m = value.trim().match(/^(-?\d*\.?\d+)(px|rem|em)?$/);
  if (!m) return Number.POSITIVE_INFINITY;
  const n = parseFloat(m[1]);
  return m[2] === "rem" || m[2] === "em" ? n * 16 : n;
}
function breakpointQuery(bp, screens, config) {
  const p = config ? parseVariant(bp, config) : null;
  const below = (name) => {
    const px = screenToPx(screens && screens[name]);
    return Number.isFinite(px) ? `(max-width: ${+(px - 0.02).toFixed(2)}px)` : `not all and (min-width: ${screens[name]})`;
  };
  if (p && p.type === "max") return `@media ${below(p.to)}`;
  if (p && p.type === "range") return `@media (min-width: ${screens[p.from]}) and ${below(p.to)}`;
  const value = screens && screens[bp] ? screens[bp] : bp;
  if (bp === "print" || value === "print") return "@media print";
  return `@media (min-width: ${value})`;
}
function breakpointOrder(bp, screens, config) {
  const p = parseVariant(bp, config);
  const px = (n) => screenToPx(screens && screens[n]);
  if (p && p.type === "max") return [1, -px(p.to)];
  if (p && p.type === "range") return [2, px(p.from), px(p.to)];
  const v = px(bp);
  return Number.isFinite(v) ? [0, v] : [3, 0];
}
function compareBreakpoints(a, b, screens, config) {
  const ka = breakpointOrder(a, screens, config);
  const kb = breakpointOrder(b, screens, config);
  for (let i = 0; i < Math.max(ka.length, kb.length); i++) {
    const d = (ka[i] ?? 0) - (kb[i] ?? 0);
    if (d) return d;
  }
  return a < b ? -1 : a > b ? 1 : 0;
}
function isDarkToken(token) {
  if (Array.isArray(token.variants) && token.variants.length) return token.variants.includes("dark");
  return token.state === "dark";
}
var PRUNABLE_VAR = /^--(?:c-[a-z]+-(?:50|[1-9]00|950)|tw-[\w-]+)$/;
function pruneCSSVariables(rootCss, usedCss) {
  const lines = rootCss.split("\n");
  const defs = /* @__PURE__ */ new Map();
  for (const line of lines) {
    const m = line.match(/^\s*(--[\w-]+)\s*:\s*(.*);\s*$/);
    if (m) defs.set(m[1], m[2]);
  }
  const keep = /* @__PURE__ */ new Set();
  const queue = [];
  const visit = (text) => {
    for (const m of text.matchAll(/var\(\s*(--[\w-]+)/g)) {
      if (!keep.has(m[1])) {
        keep.add(m[1]);
        queue.push(m[1]);
      }
    }
  };
  visit(usedCss);
  for (const name of defs.keys()) if (!PRUNABLE_VAR.test(name)) {
    keep.add(name);
    queue.push(name);
  }
  while (queue.length) {
    const v = defs.get(queue.pop());
    if (v) visit(v);
  }
  return lines.filter((line) => {
    const m = line.match(/^\s*(--[\w-]+)\s*:/);
    return !m || keep.has(m[1]);
  }).join("\n");
}
function transformProperties(utilities) {
  let out = "";
  for (const [name, initial] of Object.entries(TRANSFORM_PROPERTIES)) {
    if (!utilities.includes(`${name}:`)) continue;
    out += initial === null ? `@property ${name} { syntax: "*"; inherits: false; }
` : `@property ${name} { syntax: "*"; inherits: false; initial-value: ${initial}; }
`;
  }
  return out;
}
function inLayer(name, css, config) {
  if (!css || config.layers === false) return css;
  return `@layer ${name} {
${css}}
`;
}
var LAYER_ORDER = "@layer senangstart.theme, senangstart.base, senangstart.components, senangstart.utilities;\n";
function generateCSSWithErrors(tokens, config) {
  const errors = [];
  try {
    if (!config || typeof config !== "object") {
      errors.push({ type: "config", message: "Invalid config provided" });
      return { css: "", errors };
    }
    if (!Array.isArray(tokens)) {
      errors.push({ type: "tokens", message: "Invalid tokens provided" });
      return { css: "", errors };
    }
    const layered = config.layers !== false;
    let css = layered ? LAYER_ORDER : "";
    let rootVars = "";
    try {
      rootVars = generateCSSVariables(config);
    } catch (e) {
      errors.push({ type: "variables", message: e.message });
    }
    let preflight = "";
    if (config.preflight !== false) {
      try {
        preflight = generatePreflight(config);
      } catch (e) {
        errors.push({ type: "preflight", message: e.message });
      }
    }
    let presets = "";
    try {
      presets = generatePresets(config);
    } catch (e) {
      errors.push({ type: "presets", message: e.message });
    }
    const keyframes = `/* SenangStart CSS - Animation Keyframes */
@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes ping {
  75%, 100% { transform: scale(2); opacity: 0; }
}
@keyframes pulse {
  50% { opacity: .5; }
}
@keyframes bounce {
  0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
  50% { transform: none; animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
}
`;
    const baseTokens = [];
    const darkTokensByBreakpoint = /* @__PURE__ */ new Map();
    const breakpointTokens = /* @__PURE__ */ new Map();
    const { screens } = config.theme || {};
    for (const token of tokens) {
      if (!token || typeof token !== "object") {
        errors.push({ type: "token_format", token, message: "Token is not an object" });
        continue;
      }
      if (isDarkToken(token)) {
        const bpKey = token.breakpoint || null;
        if (!darkTokensByBreakpoint.has(bpKey)) darkTokensByBreakpoint.set(bpKey, []);
        darkTokensByBreakpoint.get(bpKey).push(token);
      } else if (token.breakpoint) {
        if (!breakpointTokens.has(token.breakpoint)) breakpointTokens.set(token.breakpoint, []);
        breakpointTokens.get(token.breakpoint).push(token);
      } else {
        baseTokens.push(token);
      }
    }
    const interactIds = /* @__PURE__ */ new Set();
    const listenIds = /* @__PURE__ */ new Set();
    for (const token of tokens) {
      if (token && token.attrType === "listens" && token.raw) listenIds.add(token.raw);
    }
    for (const token of tokens) {
      if (token && token.attrType === "interact" && token.raw && listenIds.has(token.raw)) interactIds.add(token.raw);
    }
    const defined = new Set([...rootVars.matchAll(/(--[\w-]+)\s*:/g)].map((m) => m[1]));
    let utilities = "/* SenangStart CSS - Utilities */\n";
    for (const rule of generateSortedRules(baseTokens, config, interactIds, errors, "rule_generation", defined)) {
      utilities += rule;
    }
    const orderedBps = [...breakpointTokens.keys()].sort((a, b) => compareBreakpoints(a, b, screens, config));
    for (const bp of orderedBps) {
      const rules = generateSortedRules(breakpointTokens.get(bp), config, interactIds, errors, "responsive_rule", defined);
      if (rules.length === 0) continue;
      utilities += `
${breakpointQuery(bp, screens, config)} {
`;
      for (const rule of rules) utilities += "  " + rule;
      utilities += "}\n";
    }
    if (darkTokensByBreakpoint.size > 0) {
      try {
        const darkMode = getDarkModeStrategy(config);
        const darkSelector = getDarkModeSelector(config);
        const darkCtx = { config, screens, interactIds, errors, defined, baseIndent: darkMode === "media" ? "  " : "" };
        const darkBps = [...darkTokensByBreakpoint.keys()].sort((a, b) => {
          if (a === null) return -1;
          if (b === null) return 1;
          return compareBreakpoints(a, b, screens, config);
        });
        if (darkMode === "media") {
          utilities += `
/* Dark Mode (prefers-color-scheme) */
@media (prefers-color-scheme: dark) {
`;
          for (const bp of darkBps) utilities += generateDarkRules(darkTokensByBreakpoint.get(bp), bp, darkCtx);
          utilities += "}\n";
        } else {
          utilities += `
/* Dark Mode (${darkSelector}) */
`;
          const selectorCtx = { ...darkCtx, wrapSelector: darkSelector };
          for (const bp of darkBps) utilities += generateDarkRules(darkTokensByBreakpoint.get(bp), bp, selectorCtx);
        }
      } catch (e) {
        errors.push({ type: "dark_mode_generation", message: e.message });
      }
    }
    const exposeAll = config.theme && config.theme.exposeAll === true;
    const theme = exposeAll ? rootVars : pruneCSSVariables(rootVars, preflight + presets + utilities);
    css += inLayer("senangstart.theme", theme, config);
    css += inLayer("senangstart.base", preflight, config);
    css += inLayer("senangstart.components", presets, config);
    css += keyframes;
    css += customKeyframes(config, utilities);
    css += transformProperties(utilities);
    css += inLayer("senangstart.utilities", utilities, config);
    return { css, errors };
  } catch (e) {
    errors.push({ type: "fatal", message: e.message });
    return { css: "", errors };
  }
}
function generateCSS(tokens, config) {
  const { css } = generateCSSWithErrors(tokens, config);
  return css;
}
function minifyCSS(css) {
  if (typeof css !== "string" || css === "") return "";
  let stripped = "";
  let state = "normal";
  let quote = "";
  for (let i = 0; i < css.length; i++) {
    const ch = css[i];
    if (state === "comment") {
      if (ch === "*" && css[i + 1] === "/") {
        state = "normal";
        i++;
      }
      continue;
    }
    if (state === "string") {
      stripped += ch;
      if (ch === "\\") {
        stripped += css[i + 1] || "";
        i++;
      } else if (ch === quote) {
        state = "normal";
      }
      continue;
    }
    if (ch === '"' || ch === "'") {
      state = "string";
      quote = ch;
      stripped += ch;
      continue;
    }
    if (ch === "/" && css[i + 1] === "*") {
      state = "comment";
      i++;
      continue;
    }
    stripped += ch;
  }
  const preserved = [];
  const collapsed = stripped.replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, (m) => `\0${preserved.push(m) - 1}\0`).replace(/\s+/g, " ").replace(/ ?\{ ?/g, "{").replace(/ ?\} ?/g, "}").replace(/; ?/g, ";").replace(/([a-z-]) ?: ?/g, "$1:").replace(/, ?/g, ",").trim();
  return collapsed.replace(/\u0000(\d+)\u0000/g, (_, i) => preserved[Number(i)] ?? "");
}

// src/compiler/index.js
function tokenDiagnostics(tokens) {
  return tokens.filter((token) => token.error).map((token) => ({
    raw: token.raw,
    attrType: token.attrType,
    code: token.errorCode || "INVALID_TOKEN",
    message: token.error,
    error: token.error
    // legacy field
  }));
}
function generateWithDiagnostics(tokens, config) {
  const { css, errors: genErrors } = generateCSSWithErrors(tokens, config);
  const errors = tokenDiagnostics(tokens);
  for (const e of genErrors) {
    if (e && e.code && e.raw !== void 0) errors.push({ ...e, error: e.message });
  }
  return { css, errors };
}
function resolveConfig(config) {
  const t = config && config.theme;
  if (t && t.spacing && t.colors && t.screens) return config;
  return mergeConfig(config || {});
}
function compileSource(content, config) {
  if (typeof content !== "string") {
    throw new TypeError(`compileSource: content must be a string, got ${typeof content}`);
  }
  config = resolveConfig(config);
  const parsed = parseSource(content, { prefix: config.prefix });
  const tokens = tokenizeAll(parsed, config);
  const { css, errors: diagnostics } = generateWithDiagnostics(tokens, config);
  const hasErrors = diagnostics.length > 0;
  return {
    tokens,
    css,
    errors: hasErrors ? diagnostics : null,
    minifiedCSS: !hasErrors && config.output?.minify ? minifyCSS(css) : null
  };
}
function compileMultiple(files, config) {
  if (!Array.isArray(files)) {
    throw new TypeError("compileMultiple expects an array of {path, content} objects");
  }
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!file || typeof file.content !== "string") {
      throw new TypeError(`files[${i}] must have a 'content' string property, got: ${typeof file?.content}`);
    }
  }
  config = resolveConfig(config);
  const parsed = parseMultipleSources(files, { prefix: config.prefix });
  const tokens = tokenizeAll(parsed, config);
  const { css, errors: diagnostics } = generateWithDiagnostics(tokens, config);
  const hasErrors = diagnostics.length > 0;
  return {
    tokens,
    css,
    errors: hasErrors ? diagnostics : null,
    minifiedCSS: !hasErrors && config.output?.minify ? minifyCSS(css) : null
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  compileMultiple,
  compileSource,
  constants,
  defaultConfig,
  generateCSS,
  generateCSSVariables,
  generatePreflight,
  mergeConfig,
  parseMultipleSources,
  parseSource,
  tokenize,
  tokenizeAll
});
//# sourceMappingURL=senangstart-css.cjs.map
