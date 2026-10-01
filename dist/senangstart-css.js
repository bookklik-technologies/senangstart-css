/* SenangStart CSS - JIT Runtime v0.4.0 | MIT License */
(() => {
  // src/core/constants.js
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
    const d2 = def.trim();
    if (/[{};<>]/.test(d2)) return null;
    if (d2.startsWith("@media")) return { type: "media", name, query: d2.slice(6).trim() };
    if (d2.startsWith("@supports")) return { type: "media", name, query: `${d2.slice(1)}`, atRule: "supports" };
    if (d2.startsWith("@")) return null;
    const alts = d2.split(",").map((s) => s.trim()).filter(Boolean);
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
      const [size, container] = part.slice(1).split("/");
      const sizes = config && config.theme && config.theme.containers || config && config.theme && config.theme.screens || DEFAULT_SCREENS;
      const isMax = size.startsWith("max-");
      const key = isMax ? size.slice(4) : size;
      const value = sizes[key];
      if (!value || value === "print") return null;
      if (container !== void 0 && !/^[a-zA-Z][\w-]*$/.test(container)) return null;
      const px = toPx(value);
      const query = isMax ? Number.isNaN(px) ? `not (min-width: ${value})` : `(max-width: ${+(px - 0.02).toFixed(2)}px)` : `(min-width: ${value})`;
      return { type: "container", name: part, query, container: container || null };
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
      const d2 = levenshtein(lower, c.toLowerCase());
      if (d2 < bestDist || d2 === bestDist && best !== null && c < best) {
        bestDist = d2;
        best = c;
      }
    }
    return bestDist <= limit ? best : null;
  }
  function diagnostic(token, code, message, suggestion = null) {
    const d2 = {
      raw: token?.raw,
      attrType: token?.attrType,
      code,
      message,
      // legacy fields kept for existing consumers
      type: "rule_generation",
      token: token?.raw
    };
    if (suggestion) d2.suggestion = suggestion;
    return d2;
  }

  // .build/definitions.slim.js
  var d = { "layout": { "display": { "name": "display", "property": "layout", "syntax": 'layout="[display-value]"', "category": "layout", "values": [{ "value": "flex", "css": "display: flex;" }, { "value": "inline-flex", "css": "display: inline-flex;" }, { "value": "grid", "css": "display: grid;" }, { "value": "inline-grid", "css": "display: inline-grid;" }, { "value": "block", "css": "display: block;" }, { "value": "inline", "css": "display: inline;" }, { "value": "inline-block", "css": "display: inline-block;" }, { "value": "table", "css": "display: table;" }, { "value": "table-row", "css": "display: table-row;" }, { "value": "table-cell", "css": "display: table-cell;" }, { "value": "list-item", "css": "display: list-item;" }, { "value": "contents", "css": "display: contents;" }, { "value": "hidden", "css": "display: none;" }] }, "flexDirection": { "name": "flex-direction", "property": "layout", "syntax": 'layout="[direction]"', "category": "layout", "values": [{ "value": "row", "css": "flex-direction: row;" }, { "value": "col", "css": "flex-direction: column;" }, { "value": "row-reverse", "css": "flex-direction: row-reverse;" }, { "value": "col-reverse", "css": "flex-direction: column-reverse;" }] }, "flexWrap": { "name": "flex-wrap", "property": "layout", "syntax": 'layout="[wrap-value]"', "category": "layout", "values": [{ "value": "wrap", "css": "flex-wrap: wrap;" }, { "value": "nowrap", "css": "flex-wrap: nowrap;" }, { "value": "wrap-reverse", "css": "flex-wrap: wrap-reverse;" }] }, "flexItems": { "name": "flex-items", "property": "layout", "syntax": 'layout="[flex-item-value]"', "category": "layout", "values": [{ "value": "grow", "css": "flex-grow: 1;" }, { "value": "grow-0", "css": "flex-grow: 0;" }, { "value": "shrink", "css": "flex-shrink: 1;" }, { "value": "shrink-0", "css": "flex-shrink: 0;" }] }, "flexShorthand": { "name": "flex", "property": "layout", "syntax": 'layout="flex:[value]"', "category": "layout", "engine": { "template": "flex: {value};", "passthrough": true, "arbitrary": true }, "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "1", "css": "flex: 1 1 0%;" }, { "value": "auto", "css": "flex: 1 1 auto;" }, { "value": "initial", "css": "flex: 0 1 auto;" }, { "value": "none", "css": "flex: none;" }] }, "flexBasis": { "name": "flex-basis", "property": "layout", "syntax": 'layout="basis:[value]"', "category": "layout", "engine": { "template": "flex-basis: {value};", "enum": { "0": "flex-basis: 0px;" }, "literals": { "full": "100%", "half": "50%", "third": "33.333333%", "third-2x": "66.666667%", "quarter": "25%", "quarter-2x": "50%", "quarter-3x": "75%", "1/1": "100%", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%" } }, "usesScale": "spacing", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "auto", "css": "flex-basis: auto;" }, { "value": "0", "css": "flex-basis: 0;" }] }, "order": { "name": "order", "property": "layout", "syntax": 'layout="order:[value]"', "category": "layout", "engine": { "numeric": true, "passthrough": true }, "dynamic": true, "supportsArbitrary": true, "values": [{ "value": "first", "css": "order: -9999;" }, { "value": "last", "css": "order: 9999;" }, { "value": "none", "css": "order: 0;" }, { "value": "1-12", "css": "order: {n};" }] }, "justifyContent": { "name": "justify-content", "property": "layout", "syntax": 'layout="justify:[value]"', "category": "layout", "engine": { "passthrough": true }, "values": [{ "value": "start", "css": "justify-content: flex-start;" }, { "value": "end", "css": "justify-content: flex-end;" }, { "value": "center", "css": "justify-content: center;" }, { "value": "between", "css": "justify-content: space-between;" }, { "value": "around", "css": "justify-content: space-around;" }, { "value": "evenly", "css": "justify-content: space-evenly;" }, { "value": "stretch", "css": "justify-content: stretch;" }] }, "alignItems": { "name": "align-items", "property": "layout", "syntax": 'layout="items:[value]"', "category": "layout", "engine": { "passthrough": true }, "values": [{ "value": "start", "css": "align-items: flex-start;" }, { "value": "end", "css": "align-items: flex-end;" }, { "value": "center", "css": "align-items: center;" }, { "value": "baseline", "css": "align-items: baseline;" }, { "value": "stretch", "css": "align-items: stretch;" }] }, "alignSelf": { "name": "align-self", "property": "layout", "syntax": 'layout="self:[value]"', "category": "layout", "engine": { "passthrough": true }, "values": [{ "value": "auto", "css": "align-self: auto;" }, { "value": "start", "css": "align-self: flex-start;" }, { "value": "end", "css": "align-self: flex-end;" }, { "value": "center", "css": "align-self: center;" }, { "value": "baseline", "css": "align-self: baseline;" }, { "value": "stretch", "css": "align-self: stretch;" }] }, "alignContent": { "name": "align-content", "property": "layout", "syntax": 'layout="content:[value]"', "category": "layout", "engine": { "passthrough": true }, "values": [{ "value": "start", "css": "align-content: flex-start;" }, { "value": "end", "css": "align-content: flex-end;" }, { "value": "center", "css": "align-content: center;" }, { "value": "between", "css": "align-content: space-between;" }, { "value": "around", "css": "align-content: space-around;" }, { "value": "evenly", "css": "align-content: space-evenly;" }, { "value": "stretch", "css": "align-content: stretch;" }] }, "shorthandAlignment": { "name": "shorthand-alignment", "property": "layout", "syntax": 'layout="[alignment]"', "category": "layout", "values": [{ "value": "center", "css": "justify-content: center; align-items: center;" }, { "value": "start", "css": "justify-content: flex-start; align-items: flex-start;" }, { "value": "end", "css": "justify-content: flex-end; align-items: flex-end;" }, { "value": "between", "css": "justify-content: space-between;" }, { "value": "around", "css": "justify-content: space-around;" }, { "value": "evenly", "css": "justify-content: space-evenly;" }] }, "justifyItems": { "name": "justify-items", "property": "layout", "syntax": 'layout="justify-items:[value]"', "category": "layout", "engine": { "passthrough": true }, "values": [{ "value": "start", "css": "justify-items: start;" }, { "value": "end", "css": "justify-items: end;" }, { "value": "center", "css": "justify-items: center;" }, { "value": "stretch", "css": "justify-items: stretch;" }] }, "justifySelf": { "name": "justify-self", "property": "layout", "syntax": 'layout="justify-self:[value]"', "category": "layout", "engine": { "passthrough": true }, "values": [{ "value": "auto", "css": "justify-self: auto;" }, { "value": "start", "css": "justify-self: start;" }, { "value": "end", "css": "justify-self: end;" }, { "value": "center", "css": "justify-self: center;" }, { "value": "stretch", "css": "justify-self: stretch;" }] }, "placeContent": { "name": "place-content", "property": "layout", "syntax": 'layout="place-content:[value]"', "category": "layout", "engine": { "passthrough": true }, "values": [{ "value": "start", "css": "place-content: start;" }, { "value": "end", "css": "place-content: end;" }, { "value": "center", "css": "place-content: center;" }, { "value": "between", "css": "place-content: space-between;" }, { "value": "around", "css": "place-content: space-around;" }, { "value": "evenly", "css": "place-content: space-evenly;" }, { "value": "stretch", "css": "place-content: stretch;" }] }, "placeItems": { "name": "place-items", "property": "layout", "syntax": 'layout="place-items:[value]"', "category": "layout", "engine": { "passthrough": true }, "values": [{ "value": "start", "css": "place-items: start;" }, { "value": "end", "css": "place-items: end;" }, { "value": "center", "css": "place-items: center;" }, { "value": "stretch", "css": "place-items: stretch;" }] }, "placeSelf": { "name": "place-self", "property": "layout", "syntax": 'layout="place-self:[value]"', "category": "layout", "engine": { "passthrough": true }, "values": [{ "value": "auto", "css": "place-self: auto;" }, { "value": "start", "css": "place-self: start;" }, { "value": "end", "css": "place-self: end;" }, { "value": "center", "css": "place-self: center;" }, { "value": "stretch", "css": "place-self: stretch;" }] }, "gridColumns": { "name": "grid-columns", "property": "layout", "syntax": 'layout="grid-cols:[value]"', "category": "layout", "engine": { "arbitraryTemplate": "grid-template-columns: {value};" }, "dynamic": true, "supportsArbitrary": true, "values": [{ "value": "1-12", "css": "grid-template-columns: repeat({n}, minmax(0, 1fr));" }, { "value": "none", "css": "grid-template-columns: none;" }, { "value": "subgrid", "css": "grid-template-columns: subgrid;" }] }, "gridRows": { "name": "grid-rows", "property": "layout", "syntax": 'layout="grid-rows:[value]"', "category": "layout", "engine": { "arbitrary": true, "arbitraryTemplate": "grid-template-rows: {value};" }, "dynamic": true, "values": [{ "value": "1-12", "css": "grid-template-rows: repeat({n}, minmax(0, 1fr));" }, { "value": "none", "css": "grid-template-rows: none;" }, { "value": "subgrid", "css": "grid-template-rows: subgrid;" }] }, "gridColSpan": { "name": "grid-column-span", "property": "layout", "syntax": 'layout="col-span:[value]"', "category": "layout", "engine": { "utilities": { "col-start": { "template": "grid-column-start: {value};", "numeric": true, "passthrough": true }, "col-end": { "template": "grid-column-end: {value};", "numeric": true, "passthrough": true } } }, "dynamic": true, "values": [{ "value": "1-12", "css": "grid-column: span {n} / span {n};" }, { "value": "full", "css": "grid-column: 1 / -1;" }] }, "gridRowSpan": { "name": "grid-row-span", "property": "layout", "syntax": 'layout="row-span:[value]"', "category": "layout", "engine": { "utilities": { "row-start": { "template": "grid-row-start: {value};", "numeric": true, "passthrough": true }, "row-end": { "template": "grid-row-end: {value};", "numeric": true, "passthrough": true } } }, "dynamic": true, "values": [{ "value": "1-12", "css": "grid-row: span {n} / span {n};" }, { "value": "full", "css": "grid-row: 1 / -1;" }] }, "gridAutoFlow": { "name": "grid-auto-flow", "property": "layout", "syntax": 'layout="grid-flow:[value]"', "category": "layout", "values": [{ "value": "row", "css": "grid-auto-flow: row;" }, { "value": "col", "css": "grid-auto-flow: column;" }, { "value": "dense", "css": "grid-auto-flow: dense;" }, { "value": "row-dense", "css": "grid-auto-flow: row dense;" }, { "value": "col-dense", "css": "grid-auto-flow: column dense;" }] }, "gridAutoSizing": { "name": "grid-auto-sizing", "property": "layout", "syntax": 'layout="auto-cols:[value]" or layout="auto-rows:[value]"', "category": "layout", "engine": { "templates": { "auto-cols": "grid-auto-columns: {value};", "auto-rows": "grid-auto-rows: {value};" }, "passthrough": true, "arbitrary": true }, "dynamic": true, "values": [{ "value": "auto", "css": "auto" }, { "value": "min", "css": "min-content" }, { "value": "max", "css": "max-content" }, { "value": "fr", "css": "minmax(0, 1fr)" }] }, "position": { "name": "position", "property": "layout", "syntax": 'layout="[position-value]"', "category": "layout", "values": [{ "value": "static", "css": "position: static;" }, { "value": "relative", "css": "position: relative;" }, { "value": "absolute", "css": "position: absolute;" }, { "value": "fixed", "css": "position: fixed;" }, { "value": "sticky", "css": "position: sticky;" }] }, "inset": { "name": "inset", "property": "layout", "syntax": 'layout="inset:[value]" or layout="top:[value]"', "category": "layout", "engine": { "negatable": true, "literals": { "0": "0", "full": "100%", "half": "50%", "third": "33.333333%", "third-2x": "66.666667%", "quarter": "25%", "quarter-2x": "50%", "quarter-3x": "75%", "1/1": "100%", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%" } }, "usesScale": "spacing", "supportsArbitrary": true, "values": [{ "value": "inset", "css": "inset: {value};" }, { "value": "inset-x", "css": "left: {value}; right: {value};" }, { "value": "inset-y", "css": "top: {value}; bottom: {value};" }, { "value": "top", "css": "top: {value};" }, { "value": "right", "css": "right: {value};" }, { "value": "bottom", "css": "bottom: {value};" }, { "value": "left", "css": "left: {value};" }] }, "zIndex": { "name": "z-index", "property": "layout", "syntax": 'layout="z:[value]"', "category": "layout", "usesScale": "zIndex", "values": [{ "value": "base", "css": "z-index: var(--z-base);" }, { "value": "low", "css": "z-index: var(--z-low);" }, { "value": "mid", "css": "z-index: var(--z-mid);" }, { "value": "high", "css": "z-index: var(--z-high);" }, { "value": "top", "css": "z-index: var(--z-top);" }] }, "visibility": { "name": "visibility", "property": "layout", "syntax": 'layout="[visibility-value]"', "category": "layout", "values": [{ "value": "visible", "css": "visibility: visible;" }, { "value": "invisible", "css": "visibility: hidden;" }] }, "overflow": { "name": "overflow", "property": "layout", "syntax": 'layout="overflow:[value]"', "category": "layout", "engine": { "aliases": ["overflow-x", "overflow-y"], "templates": { "overflow-x": "overflow-x: {value};", "overflow-y": "overflow-y: {value};" } }, "values": [{ "value": "auto", "css": "overflow: auto;" }, { "value": "hidden", "css": "overflow: hidden;" }, { "value": "visible", "css": "overflow: visible;" }, { "value": "scroll", "css": "overflow: scroll;" }, { "value": "clip", "css": "overflow: clip;" }] }, "boxSizing": { "name": "box-sizing", "property": "layout", "syntax": 'layout="box:[value]"', "category": "layout", "values": [{ "value": "border", "css": "box-sizing: border-box;" }, { "value": "content", "css": "box-sizing: content-box;" }] }, "floatClear": { "name": "float-clear", "property": "layout", "syntax": 'layout="float:[value]" or layout="clear:[value]"', "category": "layout", "values": [{ "prefix": "float", "value": "left", "css": "float: left;" }, { "prefix": "float", "value": "right", "css": "float: right;" }, { "prefix": "float", "value": "none", "css": "float: none;" }, { "prefix": "clear", "value": "left", "css": "clear: left;" }, { "prefix": "clear", "value": "right", "css": "clear: right;" }, { "prefix": "clear", "value": "both", "css": "clear: both;" }, { "prefix": "clear", "value": "none", "css": "clear: none;" }] }, "aspectRatio": { "name": "aspect-ratio", "property": "layout", "syntax": 'layout="aspect:[value]"', "category": "layout", "supportsArbitrary": true, "values": [{ "value": "auto", "css": "aspect-ratio: auto;" }, { "value": "square", "css": "aspect-ratio: 1 / 1;" }, { "value": "video", "css": "aspect-ratio: 16 / 9;" }] }, "objectFit": { "name": "object-fit", "property": "layout", "syntax": 'layout="object:[value]"', "category": "layout", "values": [{ "value": "contain", "css": "object-fit: contain;" }, { "value": "cover", "css": "object-fit: cover;" }, { "value": "fill", "css": "object-fit: fill;" }, { "value": "none", "css": "object-fit: none;" }, { "value": "scale-down", "css": "object-fit: scale-down;" }] }, "objectPosition": { "name": "object-position", "property": "layout", "syntax": 'layout="object-pos:[value]"', "category": "layout", "engine": { "passthrough": true }, "supportsArbitrary": true, "values": [{ "value": "center", "css": "object-position: center;" }, { "value": "top", "css": "object-position: top;" }, { "value": "bottom", "css": "object-position: bottom;" }, { "value": "left", "css": "object-position: left;" }, { "value": "right", "css": "object-position: right;" }, { "value": "top-left", "css": "object-position: top left;" }, { "value": "top-right", "css": "object-position: top right;" }, { "value": "bottom-left", "css": "object-position: bottom left;" }, { "value": "bottom-right", "css": "object-position: bottom right;" }] }, "container": { "name": "container", "property": "layout", "syntax": 'layout="container"', "category": "layout", "engine": { "css": "width: 100%; margin-left: auto; margin-right: auto;", "keywords": { "container": "width: 100%; margin-left: auto; margin-right: auto;" }, "utilities": { "container-type": { "template": "container-type: {value};", "literals": { "inline": "inline-size", "size": "size", "normal": "normal" }, "passthrough": true }, "container-name": { "template": "container-name: {value};", "passthrough": true } } }, "values": [{ "value": "container", "css": "width: 100%; margin-left: auto; margin-right: auto;" }] }, "isolation": { "name": "isolation", "property": "layout", "syntax": 'layout="isolation:[value]"', "category": "layout", "values": [{ "value": "isolate", "css": "isolation: isolate;" }, { "value": "auto", "css": "isolation: auto;" }] }, "overscroll": { "name": "overscroll", "property": "layout", "syntax": 'layout="overscroll:[value]"', "category": "layout", "engine": { "aliases": ["overscroll-x", "overscroll-y"], "templates": { "overscroll-x": "overscroll-behavior-x: {value};", "overscroll-y": "overscroll-behavior-y: {value};" } }, "values": [{ "value": "auto", "css": "overscroll-behavior: auto;" }, { "value": "contain", "css": "overscroll-behavior: contain;" }, { "value": "none", "css": "overscroll-behavior: none;" }] }, "columns": { "name": "columns", "property": "layout", "syntax": 'layout="cols:[value]"', "category": "layout", "dynamic": true, "values": [{ "value": "1-12", "css": "columns: {n};" }, { "value": "auto", "css": "columns: auto;" }] }, "borderCollapse": { "name": "border-collapse", "property": "layout", "syntax": 'layout="[value]"', "category": "layout", "values": [{ "value": "collapse", "css": "border-collapse: collapse;" }, { "value": "separate", "css": "border-collapse: separate;" }] }, "borderSpacing": { "name": "border-spacing", "property": "layout", "syntax": 'layout="border-spacing:[value]"', "category": "layout", "engine": {}, "usesScale": "spacing", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "border-spacing", "css": "border-spacing: {value};" }, { "value": "border-spacing-x", "css": "border-spacing: {value} 0;" }, { "value": "border-spacing-y", "css": "border-spacing: 0 {value};" }] }, "tableLayout": { "name": "table-layout", "property": "layout", "syntax": 'layout="table:[value]"', "category": "layout", "values": [{ "value": "auto", "css": "table-layout: auto;" }, { "value": "fixed", "css": "table-layout: fixed;" }] }, "captionSide": { "name": "caption-side", "property": "layout", "syntax": 'layout="caption:[value]"', "category": "layout", "values": [{ "value": "top", "css": "caption-side: top;" }, { "value": "bottom", "css": "caption-side: bottom;" }] } }, "space": { "padding": { "name": "padding", "property": "space", "syntax": 'space="p:[value]" or space="p-{side}:[value]"', "category": "space", "usesScale": "spacing", "values": [{ "property": "p", "css": "padding: var(--s-{value});" }, { "property": "p-t", "css": "padding-top: var(--s-{value});" }, { "property": "p-r", "css": "padding-right: var(--s-{value});" }, { "property": "p-b", "css": "padding-bottom: var(--s-{value});" }, { "property": "p-l", "css": "padding-left: var(--s-{value});" }, { "property": "p-x", "css": "padding-left: var(--s-{value}); padding-right: var(--s-{value});" }, { "property": "p-y", "css": "padding-top: var(--s-{value}); padding-bottom: var(--s-{value});" }], "scaleValues": ["none", "thin", "regular", "thick", "tiny", "tiny-2x", "small", "small-2x", "small-3x", "small-4x", "medium", "medium-2x", "medium-3x", "medium-4x", "large", "large-2x", "large-3x", "large-4x", "big", "big-2x", "big-3x", "big-4x", "giant", "giant-2x", "giant-3x", "giant-4x", "vast", "vast-2x", "vast-3x", "vast-4x", "vast-5x", "vast-6x", "vast-7x", "vast-8x", "vast-9x", "vast-10x"], "supportsArbitrary": true }, "margin": { "name": "margin", "property": "space", "syntax": 'space="m:[value]" or space="m-{side}:[value]" or space="m-{side}:-[value]"', "engine": { "literals": { "auto": "auto" } }, "category": "space", "usesScale": "spacing", "values": [{ "property": "m", "css": "margin: var(--s-{value});" }, { "property": "m-t", "css": "margin-top: var(--s-{value});" }, { "property": "m-r", "css": "margin-right: var(--s-{value});" }, { "property": "m-b", "css": "margin-bottom: var(--s-{value});" }, { "property": "m-l", "css": "margin-left: var(--s-{value});" }, { "property": "m-x", "css": "margin-left: var(--s-{value}); margin-right: var(--s-{value});" }, { "property": "m-y", "css": "margin-top: var(--s-{value}); margin-bottom: var(--s-{value});" }], "scaleValues": ["none", "thin", "regular", "thick", "tiny", "tiny-2x", "small", "small-2x", "small-3x", "small-4x", "medium", "medium-2x", "medium-3x", "medium-4x", "large", "large-2x", "large-3x", "large-4x", "big", "big-2x", "big-3x", "big-4x", "giant", "giant-2x", "giant-3x", "giant-4x", "vast", "vast-2x", "vast-3x", "vast-4x", "vast-5x", "vast-6x", "vast-7x", "vast-8x", "vast-9x", "vast-10x", "auto"], "supportsArbitrary": true, "supportsNegative": true }, "gap": { "name": "gap", "property": "space", "syntax": 'space="g:[value]" or space="g-{axis}:[value]"', "category": "space", "usesScale": "spacing", "values": [{ "property": "g", "css": "gap: var(--s-{value});" }, { "property": "g-x", "css": "column-gap: var(--s-{value});" }, { "property": "g-y", "css": "row-gap: var(--s-{value});" }], "scaleValues": ["none", "thin", "regular", "thick", "tiny", "tiny-2x", "small", "small-2x", "small-3x", "small-4x", "medium", "medium-2x", "medium-3x", "medium-4x", "large", "large-2x", "large-3x", "large-4x", "big", "big-2x", "big-3x", "big-4x", "giant", "giant-2x", "giant-3x", "giant-4x", "vast", "vast-2x", "vast-3x", "vast-4x", "vast-5x", "vast-6x", "vast-7x", "vast-8x", "vast-9x", "vast-10x"], "supportsArbitrary": true }, "width": { "name": "width", "property": "space", "syntax": 'space="w:[value]"', "engine": { "literals": { "min": "min-content", "max": "max-content", "fit": "fit-content", "full": "100%", "half": "50%", "third": "33.333333%", "third-2x": "66.666667%", "quarter": "25%", "quarter-2x": "50%", "quarter-3x": "75%", "1/1": "100%", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%" } }, "category": "space", "usesScale": "spacing", "values": [{ "property": "w", "css": "width: var(--s-{value});" }, { "property": "min-w", "css": "min-width: var(--s-{value});" }, { "property": "max-w", "css": "max-width: var(--s-{value});" }], "scaleValues": ["none", "thin", "regular", "thick", "tiny", "tiny-2x", "small", "small-2x", "small-3x", "small-4x", "medium", "medium-2x", "medium-3x", "medium-4x", "large", "large-2x", "large-3x", "large-4x", "big", "big-2x", "big-3x", "big-4x", "giant", "giant-2x", "giant-3x", "giant-4x", "vast", "vast-2x", "vast-3x", "vast-4x", "vast-5x", "vast-6x", "vast-7x", "vast-8x", "vast-9x", "vast-10x", "min", "max", "fit", "full", "half", "third", "third-2x", "quarter", "quarter-3x", "1/1", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4"], "percentageAdjectives": [{ "name": "full", "value": "100%" }, { "name": "half", "value": "50%" }, { "name": "third", "value": "33.333333%" }, { "name": "third-2x", "value": "66.666667%" }, { "name": "quarter", "value": "25%" }, { "name": "quarter-3x", "value": "75%" }], "supportsArbitrary": true }, "height": { "name": "height", "property": "space", "syntax": 'space="h:[value]"', "engine": { "literals": { "min": "min-content", "max": "max-content", "fit": "fit-content", "full": "100%", "half": "50%", "third": "33.333333%", "third-2x": "66.666667%", "quarter": "25%", "quarter-2x": "50%", "quarter-3x": "75%", "1/1": "100%", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%" } }, "category": "space", "usesScale": "spacing", "values": [{ "property": "h", "css": "height: var(--s-{value});" }, { "property": "min-h", "css": "min-height: var(--s-{value});" }, { "property": "max-h", "css": "max-height: var(--s-{value});" }], "scaleValues": ["none", "thin", "regular", "thick", "tiny", "tiny-2x", "small", "small-2x", "small-3x", "small-4x", "medium", "medium-2x", "medium-3x", "medium-4x", "large", "large-2x", "large-3x", "large-4x", "big", "big-2x", "big-3x", "big-4x", "giant", "giant-2x", "giant-3x", "giant-4x", "vast", "vast-2x", "vast-3x", "vast-4x", "vast-5x", "vast-6x", "vast-7x", "vast-8x", "vast-9x", "vast-10x", "min", "max", "fit", "full", "half", "third", "third-2x", "quarter", "quarter-3x", "1/1", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4"], "percentageAdjectives": [{ "name": "full", "value": "100%" }, { "name": "half", "value": "50%" }, { "name": "third", "value": "33.333333%" }, { "name": "third-2x", "value": "66.666667%" }, { "name": "quarter", "value": "25%" }, { "name": "quarter-3x", "value": "75%" }], "supportsArbitrary": true }, "size": { "name": "size", "property": "space", "syntax": 'space="size:[value]"', "engine": { "literals": { "min": "min-content", "max": "max-content", "fit": "fit-content", "full": "100%", "half": "50%", "third": "33.333333%", "third-2x": "66.666667%", "quarter": "25%", "quarter-2x": "50%", "quarter-3x": "75%", "1/1": "100%", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%" } }, "category": "space", "usesScale": "spacing", "values": [{ "property": "size", "css": "width: var(--s-{value}); height: var(--s-{value});" }], "scaleValues": ["none", "thin", "regular", "thick", "tiny", "tiny-2x", "small", "small-2x", "small-3x", "small-4x", "medium", "medium-2x", "medium-3x", "medium-4x", "large", "large-2x", "large-3x", "large-4x", "big", "big-2x", "big-3x", "big-4x", "giant", "giant-2x", "giant-3x", "giant-4x", "vast", "vast-2x", "vast-3x", "vast-4x", "vast-5x", "vast-6x", "vast-7x", "vast-8x", "vast-9x", "vast-10x", "min", "max", "fit", "full", "half", "third", "third-2x", "quarter", "quarter-3x", "1/1", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4"], "percentageAdjectives": [{ "name": "full", "value": "100%" }, { "name": "half", "value": "50%" }, { "name": "third", "value": "33.333333%" }, { "name": "third-2x", "value": "66.666667%" }, { "name": "quarter", "value": "25%" }, { "name": "quarter-3x", "value": "75%" }], "supportsArbitrary": true } }, "visual": { "backgroundColor": { "name": "background-color", "property": "visual", "syntax": 'visual="bg:[color]/[opacity]"', "engine": { "template": "background-color: {value};" }, "category": "visual", "usesScale": "colors", "supportsArbitrary": true, "values": [] }, "textColor": { "name": "text-color", "property": "visual", "syntax": 'visual="text:[color]/[opacity]"', "engine": { "template": "color: {value};" }, "category": "visual", "usesScale": "colors", "supportsArbitrary": true, "values": [] }, "fontSize": { "name": "text-size", "property": "visual", "syntax": 'visual="text-size:[value]"', "engine": { "valuesAreExamples": true, "template": "font-size: {value}; line-height: var(--font-lh-{key});", "twTemplate": "font-size: {value}; line-height: var(--tw-leading-{key});", "arbitraryTemplate": "font-size: {value};" }, "category": "visual", "usesScale": "fontSize", "supportsArbitrary": true, "values": [{ "value": "mini", "css": "font-size: var(--font-mini); line-height: var(--font-lh-mini);" }, { "value": "small", "css": "font-size: var(--font-small); line-height: var(--font-lh-small);" }, { "value": "base", "css": "font-size: var(--font-base); line-height: var(--font-lh-base);" }, { "value": "large", "css": "font-size: var(--font-large); line-height: var(--font-lh-large);" }, { "value": "big", "css": "font-size: var(--font-big); line-height: var(--font-lh-big);" }, { "value": "huge", "css": "font-size: var(--font-huge); line-height: var(--font-lh-huge);" }, { "value": "grand", "css": "font-size: var(--font-grand); line-height: var(--font-lh-grand);" }, { "value": "giant", "css": "font-size: var(--font-giant); line-height: var(--font-lh-giant);" }, { "value": "mount", "css": "font-size: var(--font-mount); line-height: var(--font-lh-mount);" }, { "value": "mega", "css": "font-size: var(--font-mega); line-height: var(--font-lh-mega);" }, { "value": "giga", "css": "font-size: var(--font-giga); line-height: var(--font-lh-giga);" }, { "value": "tera", "css": "font-size: var(--font-tera); line-height: var(--font-lh-tera);" }, { "value": "hero", "css": "font-size: var(--font-hero); line-height: var(--font-lh-hero);" }] }, "fontWeight": { "name": "font-weight", "property": "visual", "syntax": 'visual="font:[weight]"', "category": "visual", "usesScale": "fontWeight", "values": [{ "value": "normal", "css": "font-weight: var(--fw-normal);" }, { "value": "medium", "css": "font-weight: var(--fw-medium);" }, { "value": "bold", "css": "font-weight: var(--fw-bold);" }] }, "fontFamily": { "name": "font-family", "property": "visual", "syntax": 'visual="font:[family]"', "category": "visual", "values": [{ "value": "sans", "css": "font-family: ui-sans-serif, system-ui, sans-serif;" }, { "value": "serif", "css": "font-family: ui-serif, Georgia, serif;" }, { "value": "mono", "css": "font-family: ui-monospace, monospace;" }] }, "typographyKeywords": { "name": "typography-keywords", "property": "visual", "syntax": 'visual="[keyword]"', "category": "visual", "values": [{ "value": "decoration-solid", "css": "text-decoration-style: solid;" }, { "value": "decoration-double", "css": "text-decoration-style: double;" }, { "value": "decoration-dotted", "css": "text-decoration-style: dotted;" }, { "value": "decoration-dashed", "css": "text-decoration-style: dashed;" }, { "value": "decoration-wavy", "css": "text-decoration-style: wavy;" }] }, "letterSpacing": { "name": "letter-spacing", "property": "visual", "syntax": 'visual="tracking:[value]"', "category": "visual", "supportsArbitrary": true, "values": [{ "value": "tighter", "css": "letter-spacing: -0.05em;" }, { "value": "tight", "css": "letter-spacing: -0.025em;" }, { "value": "normal", "css": "letter-spacing: 0;" }, { "value": "wide", "css": "letter-spacing: 0.025em;" }, { "value": "wider", "css": "letter-spacing: 0.05em;" }, { "value": "widest", "css": "letter-spacing: 0.1em;" }] }, "lineHeight": { "name": "line-height", "property": "visual", "syntax": 'visual="leading:[value]"', "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "line-height: 1;" }, { "value": "tight", "css": "line-height: 1.25;" }, { "value": "snug", "css": "line-height: 1.375;" }, { "value": "normal", "css": "line-height: 1.5;" }, { "value": "relaxed", "css": "line-height: 1.625;" }, { "value": "loose", "css": "line-height: 2;" }] }, "borderRadius": { "name": "border-radius", "property": "visual", "syntax": 'visual="rounded:[value]" | visual="rounded-{t|b|l|r|tl|tr|bl|br}:[value]"', "engine": { "templates": { "rounded": "border-radius: {value};", "rounded-t": "border-top-left-radius: {value}; border-top-right-radius: {value};", "rounded-b": "border-bottom-left-radius: {value}; border-bottom-right-radius: {value};", "rounded-l": "border-top-left-radius: {value}; border-bottom-left-radius: {value};", "rounded-r": "border-top-right-radius: {value}; border-bottom-right-radius: {value};", "rounded-tl": "border-top-left-radius: {value};", "rounded-tr": "border-top-right-radius: {value};", "rounded-bl": "border-bottom-left-radius: {value};", "rounded-br": "border-bottom-right-radius: {value};" } }, "category": "visual", "usesScale": "radius", "supportsArbitrary": true, "values": [{ "value": "none", "css": "border-radius: var(--r-none);" }, { "value": "small", "css": "border-radius: var(--r-small);" }, { "value": "medium", "css": "border-radius: var(--r-medium);" }, { "value": "big", "css": "border-radius: var(--r-big);" }, { "value": "round", "css": "border-radius: var(--r-round);" }] }, "boxShadow": { "name": "box-shadow", "property": "visual", "syntax": 'visual="shadow:[value]"', "category": "visual", "usesScale": "shadow", "values": [{ "value": "none", "css": "box-shadow: var(--shadow-none);" }, { "value": "small", "css": "box-shadow: var(--shadow-small);" }, { "value": "medium", "css": "box-shadow: var(--shadow-medium);" }, { "value": "big", "css": "box-shadow: var(--shadow-big);" }, { "value": "giant", "css": "box-shadow: var(--shadow-giant);" }] }, "opacity": { "name": "opacity", "property": "visual", "syntax": 'visual="opacity:[value]"', "category": "visual", "dynamic": true, "supportsArbitrary": true, "values": [{ "value": "0", "css": "opacity: 0;" }, { "value": "25", "css": "opacity: 0.25;" }, { "value": "50", "css": "opacity: 0.5;" }, { "value": "75", "css": "opacity: 0.75;" }, { "value": "100", "css": "opacity: 1;" }] }, "blur": { "name": "filter-blur", "property": "visual", "syntax": 'visual="blur:[value]"', "engine": { "scale": "blur", "varPrefix": false, "valuesAreExamples": true, "template": "filter: blur({value});", "enum": { "none": "filter: none;" } }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "filter: none;" }, { "value": "tiny", "css": "filter: blur(2px);" }, { "value": "small", "css": "filter: blur(4px);" }, { "value": "medium", "css": "filter: blur(8px);" }, { "value": "big", "css": "filter: blur(12px);" }, { "value": "giant", "css": "filter: blur(24px);" }, { "value": "vast", "css": "filter: blur(48px);" }] }, "cursor": { "name": "cursor", "property": "visual", "syntax": 'visual="cursor:[value]"', "category": "visual", "values": [{ "value": "auto", "css": "cursor: auto;" }, { "value": "default", "css": "cursor: default;" }, { "value": "pointer", "css": "cursor: pointer;" }, { "value": "wait", "css": "cursor: wait;" }, { "value": "text", "css": "cursor: text;" }, { "value": "move", "css": "cursor: move;" }, { "value": "not-allowed", "css": "cursor: not-allowed;" }, { "value": "grab", "css": "cursor: grab;" }, { "value": "grabbing", "css": "cursor: grabbing;" }] }, "userSelect": { "name": "user-select", "property": "visual", "syntax": 'visual="select:[value]"', "category": "visual", "values": [{ "value": "none", "css": "user-select: none;" }, { "value": "text", "css": "user-select: text;" }, { "value": "all", "css": "user-select: all;" }, { "value": "auto", "css": "user-select: auto;" }] }, "pointerEvents": { "name": "pointer-events", "property": "visual", "syntax": 'visual="pointer-events:[value]"', "category": "visual", "values": [{ "value": "none", "css": "pointer-events: none;" }, { "value": "auto", "css": "pointer-events: auto;" }] }, "mixBlendMode": { "name": "blend-modes", "property": "visual", "syntax": 'visual="mix-blend:[value]"', "category": "visual", "values": [{ "value": "normal", "css": "mix-blend-mode: normal;" }, { "value": "multiply", "css": "mix-blend-mode: multiply;" }, { "value": "screen", "css": "mix-blend-mode: screen;" }, { "value": "overlay", "css": "mix-blend-mode: overlay;" }, { "value": "darken", "css": "mix-blend-mode: darken;" }, { "value": "lighten", "css": "mix-blend-mode: lighten;" }] }, "accentColor": { "name": "accent-color", "property": "visual", "syntax": 'visual="accent:[color]/[opacity]"', "engine": { "template": "accent-color: {value};" }, "category": "visual", "usesScale": "colors", "supportsArbitrary": true, "values": [] }, "caretColor": { "name": "caret-color", "property": "visual", "syntax": 'visual="caret:[color]/[opacity]"', "engine": { "template": "caret-color: {value};" }, "category": "visual", "usesScale": "colors", "supportsArbitrary": true, "values": [] }, "appearance": { "name": "appearance", "property": "visual", "syntax": 'visual="appearance:[value]"', "category": "visual", "values": [{ "value": "none", "css": "appearance: none;" }, { "value": "auto", "css": "appearance: auto;" }] }, "backgroundImage": { "name": "background-image", "property": "visual", "syntax": 'visual="bg-image:[value]"', "engine": { "arbitraryWrap": "url", "enum": { "gradient-to-t": "background-image: linear-gradient(to top, var(--ss-gradient-stops, transparent));", "gradient-to-tr": "background-image: linear-gradient(to top right, var(--ss-gradient-stops, transparent));", "gradient-to-r": "background-image: linear-gradient(to right, var(--ss-gradient-stops, transparent));", "gradient-to-br": "background-image: linear-gradient(to bottom right, var(--ss-gradient-stops, transparent));", "gradient-to-b": "background-image: linear-gradient(to bottom, var(--ss-gradient-stops, transparent));", "gradient-to-bl": "background-image: linear-gradient(to bottom left, var(--ss-gradient-stops, transparent));", "gradient-to-l": "background-image: linear-gradient(to left, var(--ss-gradient-stops, transparent));", "gradient-to-tl": "background-image: linear-gradient(to top left, var(--ss-gradient-stops, transparent));", "radial": "background-image: radial-gradient(var(--ss-gradient-stops, transparent));", "conic": "background-image: conic-gradient(var(--ss-gradient-stops, transparent));" }, "patterns": [{ "re": "^gradient-\\[(.+)\\]$", "template": "background-image: linear-gradient($1, var(--ss-gradient-stops, transparent));" }, { "re": "^radial-\\[(.+)\\]$", "template": "background-image: radial-gradient($1, var(--ss-gradient-stops, transparent));" }, { "re": "^conic-\\[(.+)\\]$", "template": "background-image: conic-gradient($1, var(--ss-gradient-stops, transparent));" }] }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "background-image: none;" }, { "value": "gradient-to-t", "css": "background-image: linear-gradient(to top, var(--tw-gradient-stops));" }, { "value": "gradient-to-b", "css": "background-image: linear-gradient(to bottom, var(--tw-gradient-stops));" }, { "value": "gradient-to-l", "css": "background-image: linear-gradient(to left, var(--tw-gradient-stops));" }, { "value": "gradient-to-r", "css": "background-image: linear-gradient(to right, var(--tw-gradient-stops));" }] }, "backgroundAttachment": { "name": "background-attachment", "property": "visual", "syntax": 'visual="bg-attachment:[value]"', "category": "visual", "values": [{ "value": "fixed", "css": "background-attachment: fixed;" }, { "value": "local", "css": "background-attachment: local;" }, { "value": "scroll", "css": "background-attachment: scroll;" }] }, "backgroundClip": { "name": "background-clip", "property": "visual", "syntax": 'visual="bg-clip:[value]"', "category": "visual", "values": [{ "value": "border", "css": "background-clip: border-box;" }, { "value": "padding", "css": "background-clip: padding-box;" }, { "value": "content", "css": "background-clip: content-box;" }, { "value": "text", "css": "background-clip: text; -webkit-background-clip: text;" }] }, "backgroundOrigin": { "name": "background-origin", "property": "visual", "syntax": 'visual="bg-origin:[value]"', "category": "visual", "values": [{ "value": "border", "css": "background-origin: border-box;" }, { "value": "padding", "css": "background-origin: padding-box;" }, { "value": "content", "css": "background-origin: content-box;" }] }, "backgroundPosition": { "name": "background-position", "property": "visual", "syntax": 'visual="bg-pos:[value]"', "engine": { "aliases": ["bg-position"] }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "center", "css": "background-position: center;" }, { "value": "top", "css": "background-position: top;" }, { "value": "bottom", "css": "background-position: bottom;" }, { "value": "left", "css": "background-position: left;" }, { "value": "right", "css": "background-position: right;" }, { "value": "top-left", "css": "background-position: top left;" }, { "value": "top-right", "css": "background-position: top right;" }, { "value": "bottom-left", "css": "background-position: bottom left;" }, { "value": "bottom-right", "css": "background-position: bottom right;" }] }, "backgroundRepeat": { "name": "background-repeat", "property": "visual", "syntax": 'visual="bg-repeat:[value]"', "category": "visual", "values": [{ "value": "repeat", "css": "background-repeat: repeat;" }, { "value": "no-repeat", "css": "background-repeat: no-repeat;" }, { "value": "repeat-x", "css": "background-repeat: repeat-x;" }, { "value": "repeat-y", "css": "background-repeat: repeat-y;" }, { "value": "round", "css": "background-repeat: round;" }, { "value": "space", "css": "background-repeat: space;" }] }, "backgroundSize": { "name": "background-size", "property": "visual", "syntax": 'visual="bg-size:[value]"', "category": "visual", "supportsArbitrary": true, "values": [{ "value": "auto", "css": "background-size: auto;" }, { "value": "cover", "css": "background-size: cover;" }, { "value": "contain", "css": "background-size: contain;" }] }, "backgroundBlendMode": { "name": "background-blend-mode", "property": "visual", "syntax": 'visual="bg-blend:[value]"', "category": "visual", "values": [{ "value": "normal", "css": "background-blend-mode: normal;" }, { "value": "multiply", "css": "background-blend-mode: multiply;" }, { "value": "screen", "css": "background-blend-mode: screen;" }, { "value": "overlay", "css": "background-blend-mode: overlay;" }, { "value": "darken", "css": "background-blend-mode: darken;" }, { "value": "lighten", "css": "background-blend-mode: lighten;" }] }, "gradientFrom": { "name": "gradient-from", "property": "visual", "syntax": 'visual="from:[color]/[opacity]"', "engine": { "valuesAreExamples": true, "template": "--ss-gradient-from: {value}; --ss-gradient-stops: var(--ss-gradient-via-stops, var(--ss-gradient-from) var(--ss-gradient-from-position, 0%), var(--ss-gradient-to, transparent) var(--ss-gradient-to-position, 100%));", "utilities": { "from-pos": { "template": "--ss-gradient-from-position: {value};", "scale": null, "numeric": { "unit": "%" }, "arbitrary": true } } }, "category": "visual", "usesScale": "colors", "supportsArbitrary": true, "values": [{ "value": "primary", "css": "--tw-gradient-from: var(--c-primary); --tw-gradient-to: transparent; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);" }, { "value": "blue-500", "css": "--tw-gradient-from: var(--c-blue-500); --tw-gradient-to: transparent; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);" }] }, "gradientVia": { "name": "gradient-via", "property": "visual", "syntax": 'visual="via:[color]/[opacity]"', "engine": { "valuesAreExamples": true, "template": "--ss-gradient-via: {value}; --ss-gradient-via-stops: var(--ss-gradient-from, transparent) var(--ss-gradient-from-position, 0%), var(--ss-gradient-via) var(--ss-gradient-via-position, 50%), var(--ss-gradient-to, transparent) var(--ss-gradient-to-position, 100%); --ss-gradient-stops: var(--ss-gradient-via-stops);", "utilities": { "via-pos": { "template": "--ss-gradient-via-position: {value};", "scale": null, "numeric": { "unit": "%" }, "arbitrary": true } } }, "category": "visual", "usesScale": "colors", "supportsArbitrary": true, "values": [{ "value": "purple-500", "css": "--tw-gradient-via: var(--c-purple-500); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to);" }] }, "gradientTo": { "name": "gradient-to", "property": "visual", "syntax": 'visual="to:[color]/[opacity]"', "engine": { "valuesAreExamples": true, "template": "--ss-gradient-to: {value}; --ss-gradient-stops: var(--ss-gradient-via-stops, var(--ss-gradient-from, transparent) var(--ss-gradient-from-position, 0%), var(--ss-gradient-to) var(--ss-gradient-to-position, 100%));", "utilities": { "to-pos": { "template": "--ss-gradient-to-position: {value};", "scale": null, "numeric": { "unit": "%" }, "arbitrary": true } } }, "category": "visual", "usesScale": "colors", "supportsArbitrary": true, "values": [{ "value": "purple-500", "css": "--tw-gradient-to: var(--c-purple-500);" }, { "value": "pink-500", "css": "--tw-gradient-to: var(--c-pink-500);" }] }, "backdropBlur": { "name": "backdrop-blur", "property": "visual", "syntax": 'visual="backdrop-blur:[value]"', "engine": { "scale": "blur", "varPrefix": false, "valuesAreExamples": true, "template": "backdrop-filter: blur({value});" }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "backdrop-filter: blur(0);" }, { "value": "tiny", "css": "backdrop-filter: blur(2px);" }, { "value": "small", "css": "backdrop-filter: blur(4px);" }, { "value": "medium", "css": "backdrop-filter: blur(8px);" }, { "value": "big", "css": "backdrop-filter: blur(12px);" }, { "value": "giant", "css": "backdrop-filter: blur(24px);" }, { "value": "vast", "css": "backdrop-filter: blur(48px);" }] }, "backdropBrightness": { "name": "backdrop-brightness", "property": "visual", "syntax": 'visual="backdrop-brightness:[value]"', "engine": { "scale": "brightness", "varPrefix": false, "valuesAreExamples": true, "template": "backdrop-filter: brightness({value});" }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "dim", "css": "backdrop-filter: brightness(0.5);" }, { "value": "dark", "css": "backdrop-filter: brightness(0.75);" }, { "value": "normal", "css": "backdrop-filter: brightness(1);" }, { "value": "bright", "css": "backdrop-filter: brightness(1.25);" }, { "value": "vivid", "css": "backdrop-filter: brightness(1.5);" }] }, "backdropContrast": { "name": "backdrop-contrast", "property": "visual", "syntax": 'visual="backdrop-contrast:[value]"', "engine": { "scale": "contrast", "varPrefix": false, "valuesAreExamples": true, "template": "backdrop-filter: contrast({value});" }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "low", "css": "backdrop-filter: contrast(0.5);" }, { "value": "reduced", "css": "backdrop-filter: contrast(0.75);" }, { "value": "normal", "css": "backdrop-filter: contrast(1);" }, { "value": "high", "css": "backdrop-filter: contrast(1.25);" }, { "value": "max", "css": "backdrop-filter: contrast(1.5);" }] }, "backdropGrayscale": { "name": "backdrop-grayscale", "property": "visual", "syntax": 'visual="backdrop-grayscale:[value]"', "engine": { "scale": "grayscale", "varPrefix": false, "valuesAreExamples": true, "template": "backdrop-filter: grayscale({value});" }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "backdrop-filter: grayscale(0%);" }, { "value": "partial", "css": "backdrop-filter: grayscale(50%);" }, { "value": "full", "css": "backdrop-filter: grayscale(100%);" }] }, "backdropHueRotate": { "name": "backdrop-hue-rotate", "property": "visual", "syntax": 'visual="backdrop-hue-rotate:[degrees]"', "category": "visual", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "0", "css": "backdrop-filter: hue-rotate(0deg);" }, { "value": "90", "css": "backdrop-filter: hue-rotate(90deg);" }, { "value": "180", "css": "backdrop-filter: hue-rotate(180deg);" }] }, "backdropInvert": { "name": "backdrop-invert", "property": "visual", "syntax": 'visual="backdrop-invert:[value]"', "engine": { "scale": "invert", "varPrefix": false, "valuesAreExamples": true, "template": "backdrop-filter: invert({value});" }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "backdrop-filter: invert(0%);" }, { "value": "partial", "css": "backdrop-filter: invert(50%);" }, { "value": "full", "css": "backdrop-filter: invert(100%);" }] }, "backdropOpacity": { "name": "backdrop-opacity", "property": "visual", "syntax": 'visual="backdrop-opacity:[value]"', "engine": { "scale": "backdropOpacity", "varPrefix": false }, "category": "visual", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "0", "css": "backdrop-filter: opacity(0);" }, { "value": "50", "css": "backdrop-filter: opacity(0.5);" }, { "value": "100", "css": "backdrop-filter: opacity(1);" }] }, "backdropSaturate": { "name": "backdrop-saturate", "property": "visual", "syntax": 'visual="backdrop-saturate:[value]"', "engine": { "scale": "saturate", "varPrefix": false, "valuesAreExamples": true, "template": "backdrop-filter: saturate({value});" }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "backdrop-filter: saturate(0);" }, { "value": "low", "css": "backdrop-filter: saturate(0.5);" }, { "value": "normal", "css": "backdrop-filter: saturate(1);" }, { "value": "high", "css": "backdrop-filter: saturate(1.5);" }, { "value": "vivid", "css": "backdrop-filter: saturate(2);" }] }, "backdropSepia": { "name": "backdrop-sepia", "property": "visual", "syntax": 'visual="backdrop-sepia:[value]"', "engine": { "scale": "sepia", "varPrefix": false, "valuesAreExamples": true, "template": "backdrop-filter: sepia({value});" }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "backdrop-filter: sepia(0%);" }, { "value": "partial", "css": "backdrop-filter: sepia(50%);" }, { "value": "full", "css": "backdrop-filter: sepia(100%);" }] }, "scrollBehavior": { "name": "scroll-behavior", "property": "visual", "syntax": 'visual="scroll-behavior:[value]"', "engine": { "aliases": ["scroll"] }, "category": "visual", "values": [{ "value": "auto", "css": "scroll-behavior: auto;" }, { "value": "smooth", "css": "scroll-behavior: smooth;" }] }, "scrollMargin": { "name": "scroll-margin", "property": "visual", "syntax": 'visual="scroll-m:[value]"', "engine": { "utilities": { "scroll-m-x": { "template": "scroll-margin-left: {value}; scroll-margin-right: {value};" }, "scroll-m-y": { "template": "scroll-margin-top: {value}; scroll-margin-bottom: {value};" } } }, "category": "visual", "usesScale": "spacing", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "scroll-m", "css": "scroll-margin: var(--s-{value});" }, { "value": "scroll-m-t", "css": "scroll-margin-top: var(--s-{value});" }, { "value": "scroll-m-r", "css": "scroll-margin-right: var(--s-{value});" }, { "value": "scroll-m-b", "css": "scroll-margin-bottom: var(--s-{value});" }, { "value": "scroll-m-l", "css": "scroll-margin-left: var(--s-{value});" }] }, "scrollPadding": { "name": "scroll-padding", "property": "visual", "syntax": 'visual="scroll-p:[value]"', "engine": { "utilities": { "scroll-p-x": { "template": "scroll-padding-left: {value}; scroll-padding-right: {value};" }, "scroll-p-y": { "template": "scroll-padding-top: {value}; scroll-padding-bottom: {value};" } } }, "category": "visual", "usesScale": "spacing", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "scroll-p", "css": "scroll-padding: var(--s-{value});" }, { "value": "scroll-p-t", "css": "scroll-padding-top: var(--s-{value});" }, { "value": "scroll-p-r", "css": "scroll-padding-right: var(--s-{value});" }, { "value": "scroll-p-b", "css": "scroll-padding-bottom: var(--s-{value});" }, { "value": "scroll-p-l", "css": "scroll-padding-left: var(--s-{value});" }] }, "scrollSnapAlign": { "name": "scroll-snap-align", "property": "visual", "syntax": 'visual="snap-align:[value]"', "category": "visual", "values": [{ "value": "start", "css": "scroll-snap-align: start;" }, { "value": "end", "css": "scroll-snap-align: end;" }, { "value": "center", "css": "scroll-snap-align: center;" }, { "value": "none", "css": "scroll-snap-align: none;" }] }, "scrollSnapStop": { "name": "scroll-snap-stop", "property": "visual", "syntax": 'visual="snap-stop:[value]"', "category": "visual", "values": [{ "value": "normal", "css": "scroll-snap-stop: normal;" }, { "value": "always", "css": "scroll-snap-stop: always;" }] }, "scrollSnapType": { "name": "scroll-snap-type", "property": "visual", "syntax": 'visual="snap-type:[value]"', "engine": { "aliases": ["snap"], "enum": { "both-proximity": "scroll-snap-type: both proximity;" } }, "category": "visual", "values": [{ "value": "none", "css": "scroll-snap-type: none;" }, { "value": "x", "css": "scroll-snap-type: x mandatory;" }, { "value": "y", "css": "scroll-snap-type: y mandatory;" }, { "value": "both", "css": "scroll-snap-type: both mandatory;" }, { "value": "x-proximity", "css": "scroll-snap-type: x proximity;" }, { "value": "y-proximity", "css": "scroll-snap-type: y proximity;" }] }, "touchAction": { "name": "touch-action", "property": "visual", "syntax": 'visual="touch:[value]"', "category": "visual", "values": [{ "value": "auto", "css": "touch-action: auto;" }, { "value": "none", "css": "touch-action: none;" }, { "value": "pan-x", "css": "touch-action: pan-x;" }, { "value": "pan-y", "css": "touch-action: pan-y;" }, { "value": "pan-left", "css": "touch-action: pan-left;" }, { "value": "pan-right", "css": "touch-action: pan-right;" }, { "value": "pinch-zoom", "css": "touch-action: pinch-zoom;" }, { "value": "manipulation", "css": "touch-action: manipulation;" }] }, "resize": { "name": "resize", "property": "visual", "syntax": 'visual="resize:[value]"', "category": "visual", "values": [{ "value": "none", "css": "resize: none;" }, { "value": "both", "css": "resize: both;" }, { "value": "x", "css": "resize: horizontal;" }, { "value": "y", "css": "resize: vertical;" }] }, "willChange": { "name": "will-change", "property": "visual", "syntax": 'visual="will-change:[value]"', "category": "visual", "values": [{ "value": "auto", "css": "will-change: auto;" }, { "value": "scroll", "css": "will-change: scroll-position;" }, { "value": "contents", "css": "will-change: contents;" }, { "value": "transform", "css": "will-change: transform;" }, { "value": "opacity", "css": "will-change: opacity;" }] }, "colorScheme": { "name": "color-scheme", "property": "visual", "syntax": 'visual="color-scheme:[value]"', "category": "visual", "values": [{ "value": "light", "css": "color-scheme: light;" }, { "value": "dark", "css": "color-scheme: dark;" }, { "value": "normal", "css": "color-scheme: normal;" }] }, "fieldSizing": { "name": "field-sizing", "property": "visual", "syntax": 'visual="field-sizing:[value]"', "category": "visual", "values": [{ "value": "fixed", "css": "field-sizing: fixed;" }, { "value": "content", "css": "field-sizing: content;" }] }, "forcedColorAdjust": { "name": "forced-color-adjust", "property": "visual", "syntax": 'visual="forced-color:[value]"', "engine": { "aliases": ["forced-colors"] }, "category": "visual", "values": [{ "value": "auto", "css": "forced-color-adjust: auto;" }, { "value": "none", "css": "forced-color-adjust: none;" }] }, "textAlignment": { "name": "text-alignment", "property": "visual", "syntax": 'visual="text:[alignment]"', "category": "visual", "values": [{ "value": "left", "css": "text-align: left;" }, { "value": "center", "css": "text-align: center;" }, { "value": "right", "css": "text-align: right;" }, { "value": "justify", "css": "text-align: justify;" }] }, "textTransform": { "name": "text-transform", "property": "visual", "syntax": 'visual="[transform-value]"', "category": "visual", "values": [{ "value": "uppercase", "css": "text-transform: uppercase;" }, { "value": "lowercase", "css": "text-transform: lowercase;" }, { "value": "capitalize", "css": "text-transform: capitalize;" }, { "value": "normal-case", "css": "text-transform: none;" }] }, "textDecoration": { "name": "text-decoration", "property": "visual", "syntax": 'visual="[decoration-value]"', "category": "visual", "values": [{ "value": "underline", "css": "text-decoration-line: underline;" }, { "value": "overline", "css": "text-decoration-line: overline;" }, { "value": "line-through", "css": "text-decoration-line: line-through;" }, { "value": "no-underline", "css": "text-decoration-line: none;" }] }, "textDecorationColor": { "name": "text-decoration-color", "property": "visual", "syntax": 'visual="decoration:[color]/[opacity]"', "engine": { "template": "text-decoration-color: {value};" }, "category": "visual", "usesScale": "colors", "supportsArbitrary": true, "values": [] }, "textDecorationThickness": { "name": "text-decoration-thickness", "property": "visual", "syntax": 'visual="decoration-thickness:[value]"', "engine": { "numeric": { "unit": "px" }, "utilities": { "underline-offset": { "template": "text-underline-offset: {value};", "numeric": { "unit": "px" }, "literals": { "auto": "auto" }, "arbitrary": true } } }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "auto", "css": "text-decoration-thickness: auto;" }, { "value": "from-font", "css": "text-decoration-thickness: from-font;" }] }, "textOverflow": { "name": "text-overflow", "property": "visual", "syntax": 'visual="[overflow-value]"', "engine": { "utilities": { "content": { "template": "content: {value};", "quote": true, "passthrough": true, "arbitrary": true } } }, "category": "visual", "values": [{ "value": "truncate", "css": "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" }, { "value": "text-ellipsis", "css": "text-overflow: ellipsis;" }, { "value": "text-clip", "css": "text-overflow: clip;" }] }, "textWrap": { "name": "text-wrap", "property": "visual", "syntax": 'visual="[wrap-value]"', "category": "visual", "values": [{ "value": "text-wrap", "css": "text-wrap: wrap;" }, { "value": "text-nowrap", "css": "text-wrap: nowrap;" }, { "value": "text-balance", "css": "text-wrap: balance;" }, { "value": "text-pretty", "css": "text-wrap: pretty;" }] }, "whitespace": { "name": "whitespace", "property": "visual", "syntax": 'visual="whitespace:[value]"', "category": "visual", "values": [{ "value": "normal", "css": "white-space: normal;" }, { "value": "nowrap", "css": "white-space: nowrap;" }, { "value": "pre", "css": "white-space: pre;" }, { "value": "pre-line", "css": "white-space: pre-line;" }, { "value": "pre-wrap", "css": "white-space: pre-wrap;" }, { "value": "break-spaces", "css": "white-space: break-spaces;" }] }, "wordBreak": { "name": "word-break", "property": "visual", "syntax": 'visual="[break-value]"', "category": "visual", "values": [{ "value": "break-normal", "css": "overflow-wrap: normal; word-break: normal;" }, { "value": "break-words", "css": "overflow-wrap: break-word;" }, { "value": "break-all", "css": "word-break: break-all;" }, { "value": "break-keep", "css": "word-break: keep-all;" }] }, "hyphens": { "name": "hyphens", "property": "visual", "syntax": 'visual="hyphens:[value]"', "category": "visual", "values": [{ "value": "none", "css": "hyphens: none;" }, { "value": "manual", "css": "hyphens: manual;" }, { "value": "auto", "css": "hyphens: auto;" }] }, "textIndent": { "name": "text-indent", "property": "visual", "syntax": 'visual="indent:[value]"', "category": "visual", "usesScale": "spacing", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "0", "css": "text-indent: 0;" }] }, "verticalAlign": { "name": "vertical-align", "property": "visual", "syntax": 'visual="align:[value]"', "category": "visual", "values": [{ "value": "baseline", "css": "vertical-align: baseline;" }, { "value": "top", "css": "vertical-align: top;" }, { "value": "middle", "css": "vertical-align: middle;" }, { "value": "bottom", "css": "vertical-align: bottom;" }, { "value": "text-top", "css": "vertical-align: text-top;" }, { "value": "text-bottom", "css": "vertical-align: text-bottom;" }, { "value": "sub", "css": "vertical-align: sub;" }, { "value": "super", "css": "vertical-align: super;" }] }, "fontStyle": { "name": "font-style", "property": "visual", "syntax": 'visual="[style-value]"', "category": "visual", "values": [{ "value": "italic", "css": "font-style: italic;" }, { "value": "not-italic", "css": "font-style: normal;" }] }, "fontSmoothing": { "name": "font-smoothing", "property": "visual", "syntax": 'visual="[smoothing-value]"', "category": "visual", "values": [{ "value": "antialiased", "css": "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;" }, { "value": "subpixel-antialiased", "css": "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;" }] }, "lineClamp": { "name": "line-clamp", "property": "visual", "syntax": 'visual="line-clamp:[value]"', "category": "visual", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "1", "css": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;" }, { "value": "2", "css": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;" }, { "value": "3", "css": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;" }, { "value": "none", "css": "overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: none;" }] }, "listStyle": { "name": "list-style", "property": "visual", "syntax": 'visual="list:[value]"', "category": "visual", "values": [{ "value": "none", "css": "list-style-type: none;" }, { "value": "disc", "css": "list-style-type: disc;" }, { "value": "decimal", "css": "list-style-type: decimal;" }, { "value": "square", "css": "list-style-type: square;" }, { "value": "inside", "css": "list-style-position: inside;" }, { "value": "outside", "css": "list-style-position: outside;" }] }, "textShadow": { "name": "text-shadow", "property": "visual", "syntax": 'visual="text-shadow:[value]"', "engine": { "enum": { "medium": "text-shadow: 0 2px 4px rgba(0,0,0,0.15);", "big": "text-shadow: 0 4px 8px rgba(0,0,0,0.2);" } }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "text-shadow: none;" }, { "value": "small", "css": "text-shadow: 0 1px 2px rgba(0,0,0,0.1);" }, { "value": "medium", "css": "text-shadow: 0 2px 4px rgba(0,0,0,0.1);" }, { "value": "big", "css": "text-shadow: 0 4px 8px rgba(0,0,0,0.1);" }] }, "fontVariantNumeric": { "name": "font-variant-numeric", "property": "visual", "syntax": 'visual="[variant-value]"', "category": "visual", "values": [{ "value": "normal-nums", "css": "font-variant-numeric: normal;" }, { "value": "ordinal", "css": "font-variant-numeric: ordinal;" }, { "value": "slashed-zero", "css": "font-variant-numeric: slashed-zero;" }, { "value": "lining-nums", "css": "font-variant-numeric: lining-nums;" }, { "value": "oldstyle-nums", "css": "font-variant-numeric: oldstyle-nums;" }, { "value": "proportional-nums", "css": "font-variant-numeric: proportional-nums;" }, { "value": "tabular-nums", "css": "font-variant-numeric: tabular-nums;" }] }, "perspective": { "name": "transform-perspective", "property": "visual", "syntax": 'visual="perspective:[value]"', "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "perspective: none;" }, { "value": "dramatic", "css": "perspective: 100px;" }, { "value": "near", "css": "perspective: 300px;" }, { "value": "normal", "css": "perspective: 500px;" }, { "value": "midrange", "css": "perspective: 800px;" }, { "value": "far", "css": "perspective: 1000px;" }, { "value": "distant", "css": "perspective: 1200px;" }] }, "perspectiveOrigin": { "name": "transform-perspective-origin", "property": "visual", "syntax": 'visual="perspective-origin:[value]"', "category": "visual", "supportsArbitrary": true, "values": [{ "value": "center", "css": "perspective-origin: center;" }, { "value": "top", "css": "perspective-origin: top;" }, { "value": "bottom", "css": "perspective-origin: bottom;" }, { "value": "left", "css": "perspective-origin: left;" }, { "value": "right", "css": "perspective-origin: right;" }, { "value": "top-left", "css": "perspective-origin: top left;" }, { "value": "top-right", "css": "perspective-origin: top right;" }, { "value": "bottom-left", "css": "perspective-origin: bottom left;" }, { "value": "bottom-right", "css": "perspective-origin: bottom right;" }] }, "rotate3d": { "name": "transform-rotate-3d", "property": "visual", "syntax": 'visual="rotate-x:[degrees]" or visual="rotate-y:[degrees]" or visual="rotate-z:[degrees]"', "engine": { "templates": { "rotate-x": "transform: rotateX({value});", "rotate-y": "transform: rotateY({value});", "rotate-z": "transform: rotateZ({value});" } }, "category": "visual", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "0", "css": "transform: rotateX(0deg);" }, { "value": "45", "css": "transform: rotateX(45deg);" }, { "value": "90", "css": "transform: rotateX(90deg);" }, { "value": "180", "css": "transform: rotateX(180deg);" }] }, "translateZ": { "name": "transform-translate-z", "property": "visual", "syntax": 'visual="translate-z:[value]"', "engine": { "scale": "spacing", "valuesAreExamples": true, "negatable": true, "template": "transform: translateZ({value});", "literals": { "0": "0", "near": "50px", "far": "-50px" } }, "category": "visual", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "0", "css": "transform: translateZ(0);" }, { "value": "near", "css": "transform: translateZ(50px);" }, { "value": "far", "css": "transform: translateZ(-50px);" }] }, "transformStyle": { "name": "transform-style", "property": "visual", "syntax": 'visual="transform-style:[value]"', "category": "visual", "values": [{ "value": "flat", "css": "transform-style: flat;" }, { "value": "preserve-3d", "css": "transform-style: preserve-3d;" }] }, "backfaceVisibility": { "name": "transform-backface", "property": "visual", "syntax": 'visual="backface:[value]"', "category": "visual", "values": [{ "value": "visible", "css": "backface-visibility: visible;" }, { "value": "hidden", "css": "backface-visibility: hidden;" }] }, "mask": { "name": "mask", "property": "visual", "syntax": 'visual="mask:[value]"', "engine": { "utilities": { "mask-clip": { "template": "mask-clip: {value};", "literals": { "border": "border-box", "padding": "padding-box", "content": "content-box", "text": "text" }, "passthrough": true, "arbitrary": true }, "mask-composite": { "template": "mask-composite: {value};", "passthrough": true }, "mask-image": { "template": "mask-image: url({value});", "arbitraryTemplate": "mask-image: {value};", "arbitraryWrap": "url", "literals": { "none": "none" }, "arbitrary": true, "passthrough": true }, "mask-mode": { "template": "mask-mode: {value};", "passthrough": true }, "mask-origin": { "template": "mask-origin: {value};", "literals": { "border": "border-box", "padding": "padding-box", "content": "content-box" }, "passthrough": true }, "mask-position": { "template": "mask-position: {value};", "literals": { "top-left": "top left", "top-right": "top right", "bottom-left": "bottom left", "bottom-right": "bottom right" }, "passthrough": true, "arbitrary": true }, "mask-repeat": { "template": "mask-repeat: {value};", "passthrough": true }, "mask-size": { "template": "mask-size: {value};", "passthrough": true, "arbitrary": true }, "mask-type": { "template": "mask-type: {value};", "passthrough": true } } }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "mask-image: none;" }, { "value": "fade-y", "css": "mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);" }, { "value": "fade-x", "css": "mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);" }] }, "statePrefixes": { "name": "state-prefixes", "property": "visual", "syntax": 'visual="hover:... focus:... active:..."', "category": "visual", "values": [{ "value": "hover:", "css": ":hover" }, { "value": "focus:", "css": ":focus" }, { "value": "active:", "css": ":active" }, { "value": "disabled:", "css": ":disabled" }, { "value": "visited:", "css": ":visited" }, { "value": "first:", "css": ":first-child" }, { "value": "last:", "css": ":last-child" }, { "value": "odd:", "css": ":nth-child(odd)" }, { "value": "even:", "css": ":nth-child(even)" }] }, "filterBrightness": { "name": "filter-brightness", "property": "visual", "syntax": 'visual="brightness:[value]"', "engine": { "scale": "brightness", "varPrefix": false, "valuesAreExamples": true, "template": "filter: brightness({value});" }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "dim", "css": "filter: brightness(0.5);" }, { "value": "dark", "css": "filter: brightness(0.75);" }, { "value": "normal", "css": "filter: brightness(1);" }, { "value": "bright", "css": "filter: brightness(1.25);" }, { "value": "vivid", "css": "filter: brightness(1.5);" }] }, "filterContrast": { "name": "filter-contrast", "property": "visual", "syntax": 'visual="contrast:[value]"', "engine": { "scale": "contrast", "varPrefix": false, "valuesAreExamples": true, "template": "filter: contrast({value});" }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "low", "css": "filter: contrast(0.5);" }, { "value": "reduced", "css": "filter: contrast(0.75);" }, { "value": "normal", "css": "filter: contrast(1);" }, { "value": "high", "css": "filter: contrast(1.25);" }, { "value": "max", "css": "filter: contrast(1.5);" }] }, "filterGrayscale": { "name": "filter-grayscale", "property": "visual", "syntax": 'visual="grayscale:[value]"', "engine": { "scale": "grayscale", "varPrefix": false, "valuesAreExamples": true, "template": "filter: grayscale({value});" }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "filter: grayscale(0%);" }, { "value": "partial", "css": "filter: grayscale(50%);" }, { "value": "full", "css": "filter: grayscale(100%);" }] }, "filterHueRotate": { "name": "filter-hue-rotate", "property": "visual", "syntax": 'visual="hue-rotate:[degrees]"', "category": "visual", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "0", "css": "filter: hue-rotate(0deg);" }, { "value": "90", "css": "filter: hue-rotate(90deg);" }, { "value": "180", "css": "filter: hue-rotate(180deg);" }] }, "filterInvert": { "name": "filter-invert", "property": "visual", "syntax": 'visual="invert:[value]"', "engine": { "scale": "invert", "varPrefix": false, "valuesAreExamples": true, "template": "filter: invert({value});" }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "filter: invert(0%);" }, { "value": "partial", "css": "filter: invert(50%);" }, { "value": "full", "css": "filter: invert(100%);" }] }, "filterSaturate": { "name": "filter-saturate", "property": "visual", "syntax": 'visual="saturate:[value]"', "engine": { "scale": "saturate", "varPrefix": false, "valuesAreExamples": true, "template": "filter: saturate({value});" }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "filter: saturate(0);" }, { "value": "low", "css": "filter: saturate(0.5);" }, { "value": "normal", "css": "filter: saturate(1);" }, { "value": "high", "css": "filter: saturate(1.5);" }, { "value": "vivid", "css": "filter: saturate(2);" }] }, "filterSepia": { "name": "filter-sepia", "property": "visual", "syntax": 'visual="sepia:[value]"', "engine": { "scale": "sepia", "varPrefix": false, "valuesAreExamples": true, "template": "filter: sepia({value});" }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "filter: sepia(0%);" }, { "value": "partial", "css": "filter: sepia(50%);" }, { "value": "full", "css": "filter: sepia(100%);" }] }, "filterDropShadow": { "name": "filter-drop-shadow", "property": "visual", "syntax": 'visual="drop-shadow:[value]"', "engine": { "scale": "dropShadow", "varPrefix": false, "valuesAreExamples": true, "template": "filter: drop-shadow({value});" }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "filter: drop-shadow(none);" }, { "value": "tiny", "css": "filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05));" }, { "value": "small", "css": "filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));" }, { "value": "medium", "css": "filter: drop-shadow(0 4px 3px rgba(0,0,0,0.07));" }, { "value": "big", "css": "filter: drop-shadow(0 10px 8px rgba(0,0,0,0.04));" }, { "value": "giant", "css": "filter: drop-shadow(0 20px 13px rgba(0,0,0,0.03));" }] }, "transitionProperty": { "name": "transition-property", "property": "visual", "syntax": 'visual="transition:[value]"', "engine": { "keywords": { "transition-none": "transition-property: none;" }, "utilities": { "transition-behavior": { "template": "transition-behavior: {value};", "passthrough": true } }, "scale": "transitionProperty", "varPrefix": false, "valuesAreExamples": true, "template": "transition-property: {value}; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;" }, "category": "visual", "values": [{ "value": "none", "css": "transition-property: none;" }, { "value": "all", "css": "transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;" }, { "value": "colors", "css": "transition-property: color, background-color, border-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;" }, { "value": "opacity", "css": "transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;" }, { "value": "shadow", "css": "transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;" }, { "value": "transform", "css": "transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;" }] }, "transitionDuration": { "name": "transition-duration", "property": "visual", "syntax": 'visual="duration:[value]"', "category": "visual", "supportsArbitrary": true, "values": [{ "value": "instant", "css": "transition-duration: 75ms;" }, { "value": "quick", "css": "transition-duration: 100ms;" }, { "value": "fast", "css": "transition-duration: 150ms;" }, { "value": "normal", "css": "transition-duration: 200ms;" }, { "value": "slow", "css": "transition-duration: 300ms;" }, { "value": "slower", "css": "transition-duration: 500ms;" }, { "value": "lazy", "css": "transition-duration: 700ms;" }] }, "transitionTiming": { "name": "transition-timing", "property": "visual", "syntax": 'visual="ease:[value]"', "category": "visual", "supportsArbitrary": true, "values": [{ "value": "linear", "css": "transition-timing-function: linear;" }, { "value": "in", "css": "transition-timing-function: cubic-bezier(0.4, 0, 1, 1);" }, { "value": "out", "css": "transition-timing-function: cubic-bezier(0, 0, 0.2, 1);" }, { "value": "in-out", "css": "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);" }] }, "transitionDelay": { "name": "transition-delay", "property": "visual", "syntax": 'visual="delay:[value]"', "category": "visual", "supportsArbitrary": true, "values": [{ "value": "instant", "css": "transition-delay: 75ms;" }, { "value": "quick", "css": "transition-delay: 100ms;" }, { "value": "fast", "css": "transition-delay: 150ms;" }, { "value": "normal", "css": "transition-delay: 200ms;" }, { "value": "slow", "css": "transition-delay: 300ms;" }] }, "animation": { "name": "animation-builtin", "property": "visual", "syntax": 'visual="animate:[value]"', "category": "visual", "supportsArbitrary": true, "values": [{ "value": "none", "css": "animation: none;" }, { "value": "spin", "css": "animation: spin 1s linear infinite;" }, { "value": "ping", "css": "animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;" }, { "value": "pulse", "css": "animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;" }, { "value": "bounce", "css": "animation: bounce 1s infinite;" }] }, "animationDuration": { "name": "animation-duration", "property": "visual", "syntax": 'visual="animation-duration:[value]"', "category": "visual", "supportsArbitrary": true, "values": [{ "value": "instant", "css": "animation-duration: 75ms;" }, { "value": "quick", "css": "animation-duration: 100ms;" }, { "value": "fast", "css": "animation-duration: 150ms;" }, { "value": "normal", "css": "animation-duration: 200ms;" }, { "value": "slow", "css": "animation-duration: 300ms;" }, { "value": "slower", "css": "animation-duration: 500ms;" }, { "value": "lazy", "css": "animation-duration: 700ms;" }] }, "animationDelay": { "name": "animation-delay", "property": "visual", "syntax": 'visual="animation-delay:[value]"', "category": "visual", "supportsArbitrary": true, "values": [{ "value": "instant", "css": "animation-delay: 75ms;" }, { "value": "quick", "css": "animation-delay: 100ms;" }, { "value": "fast", "css": "animation-delay: 150ms;" }, { "value": "normal", "css": "animation-delay: 200ms;" }, { "value": "slow", "css": "animation-delay: 300ms;" }] }, "animationIteration": { "name": "animation-iteration", "property": "visual", "syntax": 'visual="animation-iteration:[value]"', "category": "visual", "dynamic": true, "values": [{ "value": "1", "css": "animation-iteration-count: 1;" }, { "value": "infinite", "css": "animation-iteration-count: infinite;" }] }, "animationDirection": { "name": "animation-direction", "property": "visual", "syntax": 'visual="animation-direction:[value]"', "category": "visual", "values": [{ "value": "normal", "css": "animation-direction: normal;" }, { "value": "reverse", "css": "animation-direction: reverse;" }, { "value": "alternate", "css": "animation-direction: alternate;" }, { "value": "alternate-reverse", "css": "animation-direction: alternate-reverse;" }] }, "animationFill": { "name": "animation-fill", "property": "visual", "syntax": 'visual="animation-fill:[value]"', "category": "visual", "values": [{ "value": "none", "css": "animation-fill-mode: none;" }, { "value": "forwards", "css": "animation-fill-mode: forwards;" }, { "value": "backwards", "css": "animation-fill-mode: backwards;" }, { "value": "both", "css": "animation-fill-mode: both;" }] }, "animationPlay": { "name": "animation-play", "property": "visual", "syntax": 'visual="animation-play:[value]"', "category": "visual", "values": [{ "value": "running", "css": "animation-play-state: running;" }, { "value": "paused", "css": "animation-play-state: paused;" }] }, "transformScale": { "name": "transform-scale", "property": "visual", "syntax": 'visual="scale:[value]"', "engine": { "utilities": { "scale-x": { "template": "transform: scaleX({value});", "numeric": { "unit": "", "divide": 100 }, "arbitrary": true }, "scale-y": { "template": "transform: scaleY({value});", "numeric": { "unit": "", "divide": 100 }, "arbitrary": true } } }, "category": "visual", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "0", "css": "transform: scale(0);" }, { "value": "50", "css": "transform: scale(0.5);" }, { "value": "75", "css": "transform: scale(0.75);" }, { "value": "100", "css": "transform: scale(1);" }, { "value": "110", "css": "transform: scale(1.1);" }, { "value": "125", "css": "transform: scale(1.25);" }, { "value": "150", "css": "transform: scale(1.5);" }] }, "transformRotate": { "name": "transform-rotate", "property": "visual", "syntax": 'visual="rotate:[degrees]"', "category": "visual", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "0", "css": "transform: rotate(0deg);" }, { "value": "45", "css": "transform: rotate(45deg);" }, { "value": "90", "css": "transform: rotate(90deg);" }, { "value": "180", "css": "transform: rotate(180deg);" }] }, "transformTranslate": { "name": "transform-translate", "property": "visual", "syntax": 'visual="translate-x:[value]" or visual="translate-y:[value]" or visual="translate-z:[value]"', "engine": { "prefixes": ["translate-x", "translate-y"], "negatable": true, "templates": { "translate-x": "transform: translateX({value});", "translate-y": "transform: translateY({value});" }, "literals": { "0": "0", "full": "100%", "half": "50%", "third": "33.333333%", "third-2x": "66.666667%", "quarter": "25%", "quarter-2x": "50%", "quarter-3x": "75%", "1/1": "100%", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%" } }, "category": "visual", "usesScale": "spacing", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "0", "css": "transform: translateX(0);" }, { "value": "tiny", "css": "transform: translateX(var(--s-tiny));" }, { "value": "small", "css": "transform: translateX(var(--s-small));" }, { "value": "medium", "css": "transform: translateX(var(--s-medium));" }, { "value": "big", "css": "transform: translateX(var(--s-big));" }, { "value": "full", "css": "transform: translateX(100%);" }, { "value": "1/2", "css": "transform: translateX(50%);" }, { "value": "-full", "css": "transform: translateX(-100%);" }, { "value": "-1/2", "css": "transform: translateX(-50%);" }] }, "transformSkew": { "name": "transform-skew", "property": "visual", "syntax": 'visual="skew-x:[degrees]" or visual="skew-y:[degrees]"', "engine": { "utilities": { "-skew-x": { "template": "transform: skewX(-{value});", "numeric": { "unit": "deg" }, "arbitrary": true }, "-skew-y": { "template": "transform: skewY(-{value});", "numeric": { "unit": "deg" }, "arbitrary": true } }, "templates": { "skew-x": "transform: skewX({value});", "skew-y": "transform: skewY({value});" } }, "category": "visual", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "0", "css": "transform: skewX(0deg);" }, { "value": "3", "css": "transform: skewX(3deg);" }, { "value": "6", "css": "transform: skewX(6deg);" }, { "value": "12", "css": "transform: skewX(12deg);" }] }, "transformOrigin": { "name": "transform-origin", "property": "visual", "syntax": 'visual="origin:[value]"', "category": "visual", "supportsArbitrary": true, "values": [{ "value": "center", "css": "transform-origin: center;" }, { "value": "top", "css": "transform-origin: top;" }, { "value": "top-right", "css": "transform-origin: top right;" }, { "value": "right", "css": "transform-origin: right;" }, { "value": "bottom-right", "css": "transform-origin: bottom right;" }, { "value": "bottom", "css": "transform-origin: bottom;" }, { "value": "bottom-left", "css": "transform-origin: bottom left;" }, { "value": "left", "css": "transform-origin: left;" }, { "value": "top-left", "css": "transform-origin: top left;" }] }, "borderColor": { "name": "border", "property": "visual", "syntax": 'visual="border:[color]/[opacity]" | visual="border-{t|b|l|r|x|y}:[color]/[opacity]"', "engine": { "templates": { "border": "border-color: {value}; border-style: solid;", "border-t": "border-top-color: {value}; border-top-style: solid;", "border-b": "border-bottom-color: {value}; border-bottom-style: solid;", "border-l": "border-left-color: {value}; border-left-style: solid;", "border-r": "border-right-color: {value}; border-right-style: solid;", "border-x": "border-left-color: {value}; border-right-color: {value}; border-left-style: solid; border-right-style: solid;", "border-y": "border-top-color: {value}; border-bottom-color: {value}; border-top-style: solid; border-bottom-style: solid;" } }, "category": "visual", "usesScale": "colors", "supportsArbitrary": true, "values": [{ "value": "primary", "css": "border-color: var(--c-primary); border-style: solid;" }, { "value": "gray-300", "css": "border-color: var(--c-gray-300); border-style: solid;" }, { "value": "danger", "css": "border-color: var(--c-danger); border-style: solid;" }] }, "borderWidth": { "name": "border-width", "property": "visual", "syntax": 'visual="border-w:[value]" | visual="border-{t|b|l|r|x|y}-w:[value]"', "engine": { "templates": { "border-w": "border-width: {value};", "border-t-w": "border-top-width: {value};", "border-b-w": "border-bottom-width: {value};", "border-l-w": "border-left-width: {value};", "border-r-w": "border-right-width: {value};", "border-x-w": "border-left-width: {value}; border-right-width: {value};", "border-y-w": "border-top-width: {value}; border-bottom-width: {value};" } }, "category": "visual", "usesScale": "spacing", "supportsArbitrary": true, "values": [{ "value": "none", "css": "border-width: var(--s-none);" }, { "value": "thin", "css": "border-width: var(--s-thin);" }, { "value": "regular", "css": "border-width: var(--s-regular);" }, { "value": "thick", "css": "border-width: var(--s-thick);" }] }, "borderStyle": { "name": "border-style", "property": "visual", "syntax": 'visual="border-style:[value]"', "category": "visual", "values": [{ "value": "solid", "css": "border-style: solid;" }, { "value": "dashed", "css": "border-style: dashed;" }, { "value": "dotted", "css": "border-style: dotted;" }, { "value": "double", "css": "border-style: double;" }, { "value": "none", "css": "border-style: none;" }] }, "outlineWidth": { "name": "outline-w", "property": "visual", "syntax": 'visual="outline-w:[value]"', "category": "visual", "usesScale": "spacing", "supportsArbitrary": true, "values": [{ "value": "none", "css": "outline-width: var(--s-none);" }, { "value": "thin", "css": "outline-width: var(--s-thin);" }, { "value": "regular", "css": "outline-width: var(--s-regular);" }, { "value": "thick", "css": "outline-width: var(--s-thick);" }] }, "outlineColor": { "name": "outline", "property": "visual", "syntax": 'visual="outline:[color]/[opacity]"', "engine": { "template": "outline-color: {value};", "enum": { "none": "outline: none;" } }, "category": "visual", "usesScale": "colors", "supportsArbitrary": true, "values": [] }, "outlineOffset": { "name": "outline-offset", "property": "visual", "syntax": 'visual="outline-offset:[value]"', "category": "visual", "usesScale": "spacing", "supportsArbitrary": true, "values": [{ "value": "none", "css": "outline-offset: var(--s-none);" }, { "value": "thin", "css": "outline-offset: var(--s-thin);" }, { "value": "small", "css": "outline-offset: var(--s-small);" }, { "value": "medium", "css": "outline-offset: var(--s-medium);" }] }, "outlineStyle": { "name": "outline-style", "property": "visual", "syntax": 'visual="outline-style:[value]"', "category": "visual", "values": [{ "value": "solid", "css": "outline-style: solid;" }, { "value": "dashed", "css": "outline-style: dashed;" }, { "value": "dotted", "css": "outline-style: dotted;" }, { "value": "double", "css": "outline-style: double;" }, { "value": "none", "css": "outline-style: none;" }] }, "ring": { "name": "ring", "property": "visual", "syntax": 'visual="ring:[size]"', "engine": { "keywords": { "ring-inset": "--ring-inset: inset;" }, "utilities": { "ring-w": { "template": "--ss-ring-width: {value};", "scale": "spacing", "numeric": { "unit": "px" }, "arbitrary": true } }, "scale": "spacing", "valuesAreExamples": true, "template": "--ss-ring-width: {value}; box-shadow: var(--ring-inset) 0 0 0 calc(var(--ss-ring-width) + var(--ss-ring-offset-width, 0px)) var(--ss-ring-color);", "literals": { "thin": "1px", "regular": "2px", "small": "4px", "medium": "6px", "big": "8px" }, "numeric": { "unit": "px" }, "enum": { "none": "box-shadow: 0 0 #0000;" } }, "category": "visual", "usesScale": "ring", "supportsArbitrary": true, "values": [{ "value": "none", "css": "box-shadow: 0 0 0 0 transparent;" }, { "value": "thin", "css": "box-shadow: var(--ring-inset) 0 0 0 1px var(--ss-ring-color);" }, { "value": "regular", "css": "box-shadow: var(--ring-inset) 0 0 0 2px var(--ss-ring-color);" }, { "value": "small", "css": "box-shadow: var(--ring-inset) 0 0 0 4px var(--ss-ring-color);" }, { "value": "medium", "css": "box-shadow: var(--ring-inset) 0 0 0 6px var(--ss-ring-color);" }, { "value": "big", "css": "box-shadow: var(--ring-inset) 0 0 0 8px var(--ss-ring-color);" }] }, "ringColor": { "name": "ring-color", "property": "visual", "syntax": 'visual="ring-color:[color]/[opacity]"', "engine": { "utilities": { "ring-offset-color": { "template": "--ss-ring-offset-color: {value};", "scale": "colors", "color": true, "arbitrary": true } } }, "category": "visual", "usesScale": "colors", "supportsArbitrary": true, "values": [{ "value": "primary", "css": "--ss-ring-color: var(--c-primary);" }, { "value": "blue-500", "css": "--ss-ring-color: var(--c-blue-500);" }] }, "ringOffset": { "name": "ring-offset", "property": "visual", "syntax": 'visual="ring-offset:[size]"', "engine": { "scale": "spacing", "numeric": { "unit": "px" } }, "category": "visual", "supportsArbitrary": true, "values": [{ "value": "0", "css": "--ss-ring-offset-width: 0px;" }, { "value": "2", "css": "--ss-ring-offset-width: 2px;" }, { "value": "4", "css": "--ss-ring-offset-width: 4px;" }] }, "divideColor": { "name": "divide", "property": "visual", "syntax": 'visual="divide:[color]/[opacity]" | visual="divide-{x|y}:[color]/[opacity]" | visual="divide-{x|y}:reverse"', "engine": { "prefixes": ["divide", "divide-x", "divide-y"], "templates": { "divide": "border-color: {value}; border-style: solid;", "divide-x": "border-left-color: {value}; border-right-color: {value}; border-left-style: solid; border-right-style: solid;", "divide-y": "border-top-color: {value}; border-bottom-color: {value}; border-top-style: solid; border-bottom-style: solid;" } }, "category": "visual", "usesScale": "colors", "supportsArbitrary": true, "values": [{ "value": "primary", "css": "border-color: var(--c-primary); border-style: solid;" }, { "value": "gray-300", "css": "border-color: var(--c-gray-300); border-style: solid;" }, { "value": "danger", "css": "border-color: var(--c-danger); border-style: solid;" }] }, "divideWidth": { "name": "divide-width", "property": "visual", "syntax": 'visual="divide-w:[value]" | visual="divide-{x|y}-w:[value]"', "engine": { "templates": { "divide-w": "border-top-width: calc({value} * (1 - var(--ss-divide-y-reverse))); border-bottom-width: calc({value} * var(--ss-divide-y-reverse)); border-left-width: calc({value} * (1 - var(--ss-divide-x-reverse))); border-right-width: calc({value} * var(--ss-divide-x-reverse));", "divide-x-w": "border-right-width: calc({value} * var(--ss-divide-x-reverse)); border-left-width: calc({value} * (1 - var(--ss-divide-x-reverse)));", "divide-y-w": "border-bottom-width: calc({value} * var(--ss-divide-y-reverse)); border-top-width: calc({value} * (1 - var(--ss-divide-y-reverse)));" } }, "category": "visual", "usesScale": "spacing", "supportsArbitrary": true, "values": [{ "value": "none", "css": "border-width: var(--s-none);" }, { "value": "thin", "css": "border-width: var(--s-thin);" }, { "value": "regular", "css": "border-width: var(--s-regular);" }, { "value": "thick", "css": "border-width: var(--s-thick);" }] }, "divideStyle": { "name": "divide-style", "property": "visual", "syntax": 'visual="divide-style:[value]"', "category": "visual", "values": [{ "value": "solid", "css": "border-style: solid;" }, { "value": "dashed", "css": "border-style: dashed;" }, { "value": "dotted", "css": "border-style: dotted;" }, { "value": "double", "css": "border-style: double;" }, { "value": "none", "css": "border-style: none;" }] }, "divideReverse": { "name": "divide-reverse", "property": "visual", "syntax": 'visual="divide-{x|y}:reverse"', "engine": { "prefixes": [] }, "category": "visual", "values": [{ "value": "divide-x:reverse", "css": "--ss-divide-x-reverse: 1;" }, { "value": "divide-y:reverse", "css": "--ss-divide-y-reverse: 1;" }] }, "spaceBetween": { "name": "space-between", "property": "visual", "syntax": 'visual="space-x:[value]" or visual="space-y:[value]"', "category": "visual", "usesScale": "spacing", "supportsArbitrary": true, "engine": { "utilities": { "space-x": { "template": "margin-left: {value};", "scale": "spacing", "arbitrary": true, "negatable": true }, "space-y": { "template": "margin-top: {value};", "scale": "spacing", "arbitrary": true, "negatable": true } } }, "values": [{ "property": "space-x", "css": "margin-left: var(--s-{value});" }, { "property": "space-y", "css": "margin-top: var(--s-{value});" }], "scaleValues": ["none", "tiny", "small", "medium", "large", "big", "giant"] }, "svgFill": { "name": "fill", "property": "visual", "syntax": 'visual="fill:[color]/[opacity]"', "category": "visual", "usesScale": "colors", "supportsArbitrary": true, "values": [{ "value": "none", "css": "fill: none;" }, { "value": "current", "css": "fill: currentColor;" }] }, "svgStroke": { "name": "stroke", "property": "visual", "syntax": 'visual="stroke:[color]/[opacity]"', "category": "visual", "usesScale": "colors", "supportsArbitrary": true, "values": [{ "value": "none", "css": "stroke: none;" }, { "value": "current", "css": "stroke: currentColor;" }] }, "svgStrokeWidth": { "name": "stroke-width", "property": "visual", "syntax": 'visual="stroke-w:[value]"', "engine": { "enum": { "0": "stroke-width: 0px;" } }, "category": "visual", "supportsArbitrary": true, "dynamic": true, "values": [{ "value": "0", "css": "stroke-width: 0;" }, { "value": "1", "css": "stroke-width: 1px;" }, { "value": "2", "css": "stroke-width: 2px;" }] }, "contentVisibility": { "name": "content-visibility", "property": "visual", "syntax": 'visual="content-visibility:[value]"', "engine": { "attrs": ["visual", "layout"] }, "category": "visual", "values": [{ "value": "visible", "css": "content-visibility: visible;" }, { "value": "auto", "css": "content-visibility: auto;" }, { "value": "hidden", "css": "content-visibility: hidden;" }] }, "contain": { "name": "contain", "property": "visual", "syntax": 'visual="contain:[value]"', "engine": { "attrs": ["visual", "layout"] }, "category": "visual", "values": [{ "value": "none", "css": "contain: none;" }, { "value": "strict", "css": "contain: strict;" }, { "value": "content", "css": "contain: content;" }, { "value": "size", "css": "contain: size;" }, { "value": "layout", "css": "contain: layout;" }, { "value": "style", "css": "contain: style;" }, { "value": "paint", "css": "contain: paint;" }] }, "writingMode": { "name": "writing-mode", "property": "visual", "syntax": 'visual="writing-mode:[value]"', "engine": { "attrs": ["visual", "layout"], "aliases": ["writing"] }, "category": "visual", "values": [{ "value": "horizontal-tb", "css": "writing-mode: horizontal-tb;" }, { "value": "vertical-rl", "css": "writing-mode: vertical-rl;" }, { "value": "vertical-lr", "css": "writing-mode: vertical-lr;" }, { "value": "sideways-rl", "css": "writing-mode: sideways-rl;" }, { "value": "sideways-lr", "css": "writing-mode: sideways-lr;" }] } } };
  var definitions_slim_default = d;
  var layout = d.layout;
  var space = d.space;
  var visual = d.visual;

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
    return css.split(";").map((d2) => d2.split(":")[0].trim()).filter(Boolean);
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
      layout: definitions_slim_default.layout,
      space: definitions_slim_default.space,
      visual: definitions_slim_default.visual
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
        layout: definitions_slim_default.layout,
        space: definitions_slim_default.space,
        visual: definitions_slim_default.visual
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
    for (const [bp, width] of Object.entries(screens)) {
      if (skipBps.has(bp) || bp.startsWith("tw-")) continue;
      const maxWidth = containerOverrides[bp] || width;
      css += `
@media (min-width: ${width}) {
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

  // .build/colors-oklch.stub.js
  var OKLCH_PALETTE = {};

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
    "plugins"
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
    let opacity = null;
    if (!isArbitrary) {
      const slash = rawValue.lastIndexOf("/");
      if (slash > 0) {
        const maybe = rawValue.slice(slash + 1);
        const parsed = parseOpacity(maybe);
        if (!Number.isNaN(parsed)) {
          opacity = parsed;
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
    if (opacity !== null) {
      resolved = `color-mix(in srgb, ${resolved} ${Math.round(opacity * 100)}%, transparent)`;
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
            selectors.push(`[${L}~="${parentAttr}"]:not([${L}~="disabled"])${trigger} ${selector}`);
            if (interactIds && interactIds.size > 0) {
              for (const id of interactIds) {
                const eid = escapeCSSString(id);
                selectors.push(`[${attrName("interact", config)}~="${eid}"]:not([${L}~="disabled"])${trigger} ~ [${attrName("listens", config)}~="${eid}"]${selector}`);
              }
            }
          }
          selector = selectors.join(",\n");
        }
      }
      if (token.important) {
        cssDeclaration = cssDeclaration.split(";").map((d2) => d2.trim()).filter(Boolean).map((d2) => `${d2} !important`).join("; ") + ";";
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
      if (rule) entries.push({ rule, key: ruleSortKey(rule, `${token.attrType}=${token.raw}`) });
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
  function ruleSortKey(rule, raw) {
    if (rule.startsWith("@")) {
      const inner = rule.slice(rule.indexOf("{") + 1, rule.lastIndexOf("}"));
      const k = ruleSortKey(inner.trim(), raw);
      return { ...k, depth: k.depth + 100 };
    }
    const body = rule.slice(rule.indexOf("{") + 1, rule.lastIndexOf("}"));
    const props = body.split(";").map((d2) => d2.split(":")[0].trim()).filter(Boolean);
    const depth = props.length ? Math.min(...props.map(propertyDepth)) : 0;
    return { depth, count: props.length, raw };
  }
  function compareRuleKeys(a, b) {
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
      if (rule) entries.push({ rule, key: ruleSortKey(rule, `${token.attrType}=${token.raw}`) });
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
      const d2 = (ka[i] ?? 0) - (kb[i] ?? 0);
      if (d2) return d2;
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
  var LAYER_ORDER = "@layer senangstart.theme, senangstart.base, senangstart.utilities;\n";
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
      const theme = exposeAll ? rootVars : pruneCSSVariables(rootVars, preflight + utilities);
      css += inLayer("senangstart.theme", theme, config);
      css += inLayer("senangstart.base", preflight, config);
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

  // src/cdn/scan.js
  var MAX_ATTR_LENGTH = 4e3;
  var MAX_TOKEN_LENGTH = 500;
  function splitSafeTokens(value) {
    if (typeof value !== "string" || value.length === 0 || value.length > MAX_ATTR_LENGTH) return [];
    const out = [];
    for (const t of value.split(/\s+/)) {
      if (t && t.length <= MAX_TOKEN_LENGTH && checkRawToken(t).ok) out.push(t);
    }
    return out;
  }

  // src/cdn/senangstart-engine.js
  try {
    (function() {
      "use strict";
      function validateConfig(config2) {
        if (!config2 || typeof config2 !== "object" || Array.isArray(config2)) return false;
        if (config2.theme && (typeof config2.theme !== "object" || Array.isArray(config2.theme))) return false;
        if (config2.content && !Array.isArray(config2.content)) return false;
        if (config2.output && typeof config2.output !== "object") return false;
        return true;
      }
      function loadInlineConfig() {
        const configEl = document.querySelector('script[type="senangstart/config"]');
        if (!configEl) return {};
        const text = (configEl.textContent || "").trim();
        if (!text) return {};
        if (text.length > 5e4) {
          console.error("[SenangStart] Config content exceeds maximum length");
          return {};
        }
        try {
          const parsed = JSON.parse(text);
          if (!validateConfig(parsed)) {
            console.error("[SenangStart] Invalid config structure");
            return {};
          }
          return parsed;
        } catch (e) {
          console.error("[SenangStart] Invalid config JSON:", e.message);
          return {};
        }
      }
      function getFinalConfig() {
        const user = loadInlineConfig();
        return mergeConfig(user);
      }
      const ATTRS2 = ["layout", "space", "visual", "interact", "listens"];
      let ATTR_NAMES = ATTRS2.slice();
      let OBSERVE_OPTS = { childList: true, subtree: true, attributes: true, attributeFilter: ATTR_NAMES };
      let ATTR_SELECTOR = "[layout], [space], [visual], [interact], [listens]";
      const tokens = { layout: /* @__PURE__ */ new Set(), space: /* @__PURE__ */ new Set(), visual: /* @__PURE__ */ new Set(), interact: /* @__PURE__ */ new Set(), listens: /* @__PURE__ */ new Set() };
      let dirty = false;
      function scanElement(el) {
        if (!el || el.nodeType !== 1 || typeof el.getAttribute !== "function") return;
        for (let i = 0; i < ATTRS2.length; i++) {
          if (!el.hasAttribute(ATTR_NAMES[i])) continue;
          const parts = splitSafeTokens(el.getAttribute(ATTR_NAMES[i]));
          const set = tokens[ATTRS2[i]];
          for (let j = 0; j < parts.length; j++) {
            if (!set.has(parts[j])) {
              set.add(parts[j]);
              dirty = true;
            }
          }
        }
        if (el.shadowRoot) registerRoot(el.shadowRoot);
      }
      function scanTree(root) {
        if (!root) return;
        if (root.nodeType === 1) scanElement(root);
        if (typeof root.querySelectorAll !== "function") return;
        const els = root.querySelectorAll(ATTR_SELECTOR);
        for (let i = 0; i < els.length; i++) scanElement(els[i]);
        const hosts = root.querySelectorAll("*");
        for (let i = 0; i < hosts.length; i++) if (hosts[i].shadowRoot) registerRoot(hosts[i].shadowRoot);
      }
      const roots = /* @__PURE__ */ new Set();
      let observer = null;
      function registerRoot(root) {
        if (!root || roots.has(root)) return;
        roots.add(root);
        adoptInto(root);
        if (observer) observer.observe(root, OBSERVE_OPTS);
        if (root !== document) scanTree(root);
      }
      function hookAttachShadow() {
        if (typeof Element === "undefined" || !Element.prototype.attachShadow) return;
        const original = Element.prototype.attachShadow;
        if (original.__senangstart) return;
        const patched = function attachShadow(init2) {
          const root = original.call(this, init2);
          queueMicrotask(function() {
            registerRoot(root);
            scheduleCompile();
          });
          return root;
        };
        patched.__senangstart = true;
        Element.prototype.attachShadow = patched;
      }
      const supportsConstructed = typeof CSSStyleSheet !== "undefined" && "replaceSync" in CSSStyleSheet.prototype && "adoptedStyleSheets" in document;
      let sheet = null;
      let lastCSS = "";
      function adoptInto(root) {
        if (!supportsConstructed) {
          if (root !== document && root.nodeType === 11) {
            let el = root.querySelector("style[data-senangstart]");
            if (!el) {
              el = document.createElement("style");
              el.setAttribute("data-senangstart", "");
              root.appendChild(el);
            }
            el.textContent = lastCSS;
          }
          return;
        }
        if (!sheet) sheet = new CSSStyleSheet();
        if (!root.adoptedStyleSheets.includes(sheet)) root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
      }
      function injectStyles(css) {
        if (css === lastCSS) return;
        lastCSS = css;
        if (supportsConstructed) {
          if (!sheet) sheet = new CSSStyleSheet();
          sheet.replaceSync(css);
          return;
        }
        const head = document.head || document.getElementsByTagName("head")[0];
        if (head) {
          let styleEl = document.getElementById("senangstart-jit");
          if (!styleEl) {
            styleEl = document.createElement("style");
            styleEl.id = "senangstart-jit";
            head.appendChild(styleEl);
          }
          styleEl.textContent = css;
        }
        for (const root of roots) if (root !== document) adoptInto(root);
      }
      let config = null;
      let scheduled = false;
      function compile() {
        scheduled = false;
        if (!dirty) return;
        dirty = false;
        const list = tokenizeAll(tokens, config);
        injectStyles(generateCSS(list, config));
      }
      function scheduleCompile() {
        if (scheduled) return;
        scheduled = true;
        queueMicrotask(compile);
      }
      function onMutations(records) {
        for (let i = 0; i < records.length; i++) {
          const r = records[i];
          if (r.type === "attributes") {
            scanElement(r.target);
          } else if (r.type === "childList") {
            for (let j = 0; j < r.addedNodes.length; j++) scanTree(r.addedNodes[j]);
          }
        }
        if (dirty) scheduleCompile();
      }
      function init() {
        config = getFinalConfig();
        const prefix = attrPrefix(config);
        ATTR_NAMES = ATTRS2.map(function(a) {
          return prefix + a;
        });
        OBSERVE_OPTS = { childList: true, subtree: true, attributes: true, attributeFilter: ATTR_NAMES };
        ATTR_SELECTOR = ATTR_NAMES.map(function(a) {
          return "[" + a + "]";
        }).join(", ");
        if (!document.body && document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", function() {
            init();
          });
          return;
        }
        observer = new MutationObserver(onMutations);
        hookAttachShadow();
        registerRoot(document);
        scanTree(document);
        dirty = true;
        compile();
        window.SenangStart = {
          version: true ? "0.4.0" : "dev",
          css: function() {
            return lastCSS;
          },
          tokens: function() {
            const out = {};
            for (const k of ATTRS2) out[k] = [...tokens[k]];
            return out;
          },
          recompile: function() {
            dirty = true;
            compile();
            return lastCSS;
          },
          config
        };
        if (config.debug) {
          console.log(
            "%c[SenangStart CSS]%c JIT runtime initialized \u2713",
            "color: #2563EB; font-weight: bold;",
            "color: #10B981;"
          );
        }
      }
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
      } else {
        init();
      }
    })();
  } catch (e) {
    console.error("[SenangStart] Failed to initialize JIT runtime:", e.message);
    if (typeof document !== "undefined" && document.body) {
      const el = document.createElement("div");
      el.style.cssText = "background:#fef2f2;color:#991b1b;padding:8px 16px;font-family:monospace;font-size:14px;";
      el.textContent = "SenangStart CSS failed to load. See console for details.";
      document.body.prepend(el);
    }
  }
})();
//# sourceMappingURL=senangstart-css.js.map
