/**
 * SenangStart CSS - Utility Registry
 *
 * Builds a table-driven registry from src/definitions at startup. Every
 * utility the engine understands is one registry entry; the CSS generator
 * never branches on property names.
 *
 * Entry shape:
 *   {
 *     id,            // definition name
 *     attr,          // 'layout' | 'space' | 'visual'
 *     key,           // keyword (`flex`) or prefix (`p`, `bg`, `rounded-t`)
 *     kind,          // 'keyword' | 'marker' | 'utility'
 *     css,           // static declarations (keyword only)
 *     template,      // '{value}' / '{key}' template for scale/numeric/passthrough/literal values
 *     arbitraryTemplate,
 *     twTemplate,    // template for tw-* scale keys (defaults to template)
 *     enum,          // { value: 'full declarations;' }
 *     literals,      // { value: 'css literal' } substituted into template (auto, 100%, min-content)
 *     scale,         // theme key ('spacing', 'colors', 'radius', …) or null
 *     varPrefix,     // '--s-' → var(--s-key); null → inline theme value
 *     scaleValues,   // extra scale keys documented by the definition
 *     arbitrary,     // accepts [..] values
 *     arbitraryWrap, // 'url' → wrap bare arbitrary values in url()
 *     negatable,     // accepts -key (→ calc(x * -1))
 *     numeric,       // null | { unit: 'deg'|'px'|'', divide: number|null, integer: bool }
 *     passthrough,   // unknown identifier values are emitted as-is
 *     color,         // value is a colour (opacity modifier, keywords, [#hex])
 *     childCombinator, // divide utilities target children
 *     composes,      // 'transform' etc. (reserved for composable utilities)
 *     props,         // CSS property names produced (for cascade ordering)
 *     order,         // shorthand rank (lower = earlier)
 *     group          // first CSS property (propertyGroup)
 *   }
 */

import definitionsIndex from '../definitions/index.js';
import { extensionsFor } from './plugins.js';
import { STATE_VARIANTS } from './variants.js';

const SCALE_VAR_PREFIX = {
  spacing: '--s-',
  colors: '--c-',
  radius: '--r-',
  shadow: '--shadow-',
  fontSize: '--font-',
  fontWeight: '--fw-',
  zIndex: '--z-'
};

const DOC_FIELDS = ['description', 'descriptionMs', 'examples', 'preview', 'footnotes', 'title', 'titleMs'];

/**
 * Strip documentation-only fields so the runtime registry (and the JIT
 * bundle) carries only what it needs.
 * @param {Object} definitions - { layout: {name: def}, space: {...}, visual: {...} } or a flat name→def map
 * @returns {Object} same shape, slimmed
 */
export function slimDefinitions(definitions) {
  const slimDef = (def) => {
    const out = {};
    for (const [k, v] of Object.entries(def)) {
      if (DOC_FIELDS.includes(k)) continue;
      if (k === 'values' && Array.isArray(v)) {
        out.values = v.map((val) => {
          if (!val || typeof val !== 'object') return val;
          const o = {};
          for (const [vk, vv] of Object.entries(val)) if (!DOC_FIELDS.includes(vk)) o[vk] = vv;
          return o;
        });
      } else if (k === 'percentageAdjectives' && Array.isArray(v)) {
        out[k] = v.map(({ name, value }) => ({ name, value }));
      } else {
        out[k] = v;
      }
    }
    return out;
  };
  const isGrouped = definitions && ['layout', 'space', 'visual'].every((k) => k in definitions && !definitions[k].name);
  if (isGrouped) {
    const out = {};
    for (const cat of ['layout', 'space', 'visual']) {
      out[cat] = {};
      for (const [name, def] of Object.entries(definitions[cat])) out[cat][name] = slimDef(def);
    }
    return out;
  }
  const out = {};
  for (const [name, def] of Object.entries(definitions)) out[name] = slimDef(def);
  return out;
}

// ---------------------------------------------------------------------------
// Template helpers
// ---------------------------------------------------------------------------

/**
 * Turn a definition css string into an engine template.
 *  `var(--s-{value})` → `{value}`  (the resolver supplies the var())
 *  `{n}`              → `{value}`
 */
function toTemplate(css) {
  if (typeof css !== 'string') return null;
  return css
    .replace(/var\(--[a-z-]+?-\{value\}\)/g, '{value}')
    .replace(/\{n\}/g, '{value}');
}

/** Property names of a declaration list. */
function propsOf(css) {
  if (!css) return [];
  return css.split(';').map((d) => d.split(':')[0].trim()).filter(Boolean);
}

const PHYSICAL_LONGHANDS = new Set(['top', 'right', 'bottom', 'left']);

/**
 * Shorthand rank: fewer hyphen-separated segments = more shorthand = earlier.
 * top/right/bottom/left are treated as longhands of `inset`.
 */
function rankOf(props) {
  if (!props.length) return 99;
  let best = 99;
  for (const p of props) {
    const name = p.replace(/^-+/, '');
    let rank = name.split('-').length;
    if (PHYSICAL_LONGHANDS.has(name)) rank = 2;
    if (name.startsWith('-webkit-') || name.startsWith('-moz-')) rank += 1;
    if (rank < best) best = rank;
  }
  return best;
}

/** Parse `attr="p:[value]" or attr="p-{t|b}:[value]"` into concrete prefixes. */
export function prefixesFromSyntax(syntax, attr) {
  const out = [];
  if (!syntax) return out;
  const re = new RegExp(`${attr}="([a-z0-9-]*)(?:\\{([^}]+)\\})?([a-z0-9-]*):`, 'g');
  let m;
  while ((m = re.exec(syntax))) {
    const [, pre, alts, post] = m;
    if (alts) for (const a of alts.split('|')) pushUnique(out, `${pre}${a}${post}`);
    else pushUnique(out, `${pre}${post}`);
  }
  return out;
}

function pushUnique(arr, v) {
  if (!arr.includes(v)) arr.push(v);
}

/** Does the syntax describe bare keywords (`attr="[value]"`)? */
function isKeywordSyntax(syntax, attr) {
  return !syntax || new RegExp(`${attr}="\\[`).test(syntax);
}

function singleDeclarationProperty(css) {
  const m = /^\s*([a-zA-Z-]+)\s*:\s*([^;]+);\s*$/.exec(css || '');
  return m ? { prop: m[1], val: m[2].trim() } : null;
}

/**
 * Derive numeric behaviour from an example value/css pair.
 *   ('45', 'transform: rotate(45deg);') → { unit: 'deg', template: 'transform: rotate({value});' }
 */
function deriveNumeric(values) {
  for (const v of values) {
    if (!v || typeof v !== 'object' || typeof v.value !== 'string' || !/^\d+$/.test(v.value) || v.value === '0') continue;
    const n = v.value;
    const css = v.css || '';
    const tryUnit = (unit, divide) => {
      const literal = divide ? String(Number(n) / divide) : `${n}${unit}`;
      const re = new RegExp(`(?<![\\d.])${literal.replace('.', '\\.')}(?![\\d.])`);
      if (re.test(css)) return { unit, divide, template: css.replace(re, '{value}') };
      return null;
    };
    return tryUnit('deg') || tryUnit('px') || tryUnit('', 100) || tryUnit('') || null;
  }
  return null;
}

// ---------------------------------------------------------------------------
// Registry class
// ---------------------------------------------------------------------------

export class Registry {
  constructor() {
    /** @type {Map<string, Map<string, Object>>} attr → key → entry */
    this.keywords = new Map();
    this.utilities = new Map();
    for (const attr of ['layout', 'space', 'visual']) {
      this.keywords.set(attr, new Map());
      this.utilities.set(attr, new Map());
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
      // Merge: later definitions may add enum values / literals to the same prefix
      // (e.g. text-alignment + text-color both own `text:`)
      existing.enum = { ...(existing.enum || {}), ...(entry.enum || {}) };
      if (existing.literals || entry.literals) existing.literals = { ...(existing.literals || {}), ...(entry.literals || {}) };
      if (entry.scale && !existing.scale) {
        // the scale-driven definition owns the dynamic template (e.g. text:<color>)
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
      existing.scaleValues = [...new Set([...(existing.scaleValues || []), ...(entry.scaleValues || [])])];
      existing.props = [...new Set([...existing.props, ...entry.props])];
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
    return [...(this.keywords.get(attr)?.keys() || []), ...(this.utilities.get(attr)?.keys() || [])];
  }

  /** All utility entries (for tests / tooling). */
  entries() {
    const out = [];
    for (const map of this.keywords.values()) out.push(...map.values());
    for (const map of this.utilities.values()) out.push(...map.values());
    return out;
  }
}

// ---------------------------------------------------------------------------
// Builder
// ---------------------------------------------------------------------------

function baseEntry(def, attr, key) {
  return {
    id: def.name,
    attr,
    key,
    kind: 'utility',
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
    quote: false,
    props: [],
    order: 99,
    group: null
  };
}

function finalize(entry) {
  const cssForProps = entry.css || entry.template || entry.arbitraryTemplate || Object.values(entry.enum || {})[0] || '';
  if (!entry.props.length) entry.props = propsOf(cssForProps);
  entry.order = rankOf(entry.props);
  entry.group = entry.props[0] || entry.key;
  if (entry.scale && !entry.varPrefix && SCALE_VAR_PREFIX[entry.scale] && entry.varPrefix !== false) {
    entry.varPrefix = SCALE_VAR_PREFIX[entry.scale];
  }
  if (entry.varPrefix === false) entry.varPrefix = null;
  if (entry.scale === 'colors') entry.color = true;
  return entry;
}

function applyEngineMeta(entry, meta, key) {
  if (!meta) return entry;
  const perKey = (meta.templates && meta.templates[key]) || null;
  if (perKey) entry.template = perKey;
  if (meta.template) entry.template = meta.template;
  if (meta.arbitraryTemplates && meta.arbitraryTemplates[key]) entry.arbitraryTemplate = meta.arbitraryTemplates[key];
  if (meta.arbitraryTemplate) entry.arbitraryTemplate = meta.arbitraryTemplate;
  if (meta.twTemplate) entry.twTemplate = meta.twTemplate;
  // valuesAreExamples: the definition's values document sample outputs, not an enum
  if (meta.valuesAreExamples) entry.enum = null;
  if (meta.enum) entry.enum = { ...(entry.enum || {}), ...meta.enum };
  if (meta.enumMap) {
    // enumMap: { value: literal } — expanded through the template
    entry.literals = { ...(entry.literals || {}), ...meta.enumMap };
  }
  if (meta.literals) entry.literals = { ...(entry.literals || {}), ...meta.literals };
  if (meta.scale !== undefined) entry.scale = meta.scale;
  if (meta.varPrefix !== undefined) entry.varPrefix = meta.varPrefix;
  if (meta.arbitrary !== undefined) entry.arbitrary = meta.arbitrary;
  if (meta.arbitraryWrap) entry.arbitraryWrap = meta.arbitraryWrap;
  if (meta.negatable !== undefined) entry.negatable = meta.negatable;
  if (meta.numeric !== undefined) entry.numeric = meta.numeric === true ? { unit: '', divide: null } : meta.numeric;
  if (meta.passthrough !== undefined) entry.passthrough = meta.passthrough;
  if (meta.color !== undefined) entry.color = meta.color;
  if (meta.childCombinator !== undefined) entry.childCombinator = meta.childCombinator;
  if (meta.composes) entry.composes = meta.composes;
  if (meta.quote !== undefined) entry.quote = meta.quote;
  if (meta.scaleValues) entry.scaleValues = [...new Set([...entry.scaleValues, ...meta.scaleValues])];
  if (meta.props) entry.props = meta.props.slice();
  return entry;
}


// ---------------------------------------------------------------------------
// Composable transforms (0.4.0)
// ---------------------------------------------------------------------------
// translate/rotate/scale use the standalone CSS properties, which compose with
// each other natively; 3D rotation and skew compose through one transform list
// of optional per-utility variables. Variables are registered with
// `@property … { inherits: false }` (see TRANSFORM_PROPERTIES) so values never
// leak from a parent to its children.

const T3 = 'translate: var(--ss-translate-x, 0) var(--ss-translate-y, 0) var(--ss-translate-z, 0);';
const SC = 'scale: var(--ss-scale-x, 1) var(--ss-scale-y, 1);';
const TF = 'transform: var(--ss-rotate-x,) var(--ss-rotate-y,) var(--ss-rotate-z,) var(--ss-skew-x,) var(--ss-skew-y,);';

export const COMPOSABLE_TRANSFORMS = {
  'translate-x': `--ss-translate-x: {value}; ${T3}`,
  'translate-y': `--ss-translate-y: {value}; ${T3}`,
  'translate-z': `--ss-translate-z: {value}; ${T3}`,
  scale: `--ss-scale-x: {value}; --ss-scale-y: {value}; ${SC}`,
  'scale-x': `--ss-scale-x: {value}; ${SC}`,
  'scale-y': `--ss-scale-y: {value}; ${SC}`,
  rotate: 'rotate: {value};',
  'rotate-x': `--ss-rotate-x: rotateX({value}); ${TF}`,
  'rotate-y': `--ss-rotate-y: rotateY({value}); ${TF}`,
  'rotate-z': `--ss-rotate-z: rotateZ({value}); ${TF}`,
  'skew-x': `--ss-skew-x: skewX({value}); ${TF}`,
  'skew-y': `--ss-skew-y: skewY({value}); ${TF}`,
  '-skew-x': `--ss-skew-x: skewX(-{value}); ${TF}`,
  '-skew-y': `--ss-skew-y: skewY(-{value}); ${TF}`
};

/** @property registrations for the transform variables (emitted only when used). */
export const TRANSFORM_PROPERTIES = {
  '--ss-translate-x': '0', '--ss-translate-y': '0', '--ss-translate-z': '0',
  '--ss-scale-x': '1', '--ss-scale-y': '1',
  '--ss-rotate-x': null, '--ss-rotate-y': null, '--ss-rotate-z': null,
  '--ss-skew-x': null, '--ss-skew-y': null
};

function applyComposableTransforms(registry) {
  for (const [key, template] of Object.entries(COMPOSABLE_TRANSFORMS)) {
    const entry = registry.utility('visual', key);
    if (!entry || !/transform:/.test(entry.template || '')) continue;
    entry.template = template;
    if (entry.arbitraryTemplate) entry.arbitraryTemplate = template;
    if (entry.twTemplate) entry.twTemplate = template;
    entry.composes = 'transform';
    // Documented example values are baked `transform:` declarations; let the
    // numeric resolver produce them through the composable template instead.
    if (entry.enum && entry.numeric) {
      entry.enum = Object.fromEntries(Object.entries(entry.enum).filter(([, css]) => !/transform:/.test(css)));
      if (Object.keys(entry.enum).length === 0) entry.enum = null;
    }
  }
}


// ---------------------------------------------------------------------------
// Per-config registries (plugin utilities)
// ---------------------------------------------------------------------------

const configRegistries = new WeakMap();

/**
 * Registry for a config: the default registry plus any utilities added through
 * `config.utilities` or functional `config.plugins`.
 * @param {Object} [config]
 * @returns {Registry}
 */
export function registryFor(config) {
  if (!config || typeof config !== 'object') return getDefaultRegistry();
  const hit = configRegistries.get(config);
  if (hit) return hit;
  const ext = extensionsFor(config);
  const animations = Object.keys(ext.animation);
  if (Object.keys(ext.utilities).length === 0 && animations.length === 0) {
    configRegistries.set(config, getDefaultRegistry());
    return getDefaultRegistry();
  }
  const registry = buildRegistry();
  // theme.animation → accepted values of `animate:` (keyframes are emitted when referenced)
  if (animations.length) {
    const animate = registry.utility('visual', 'animate');
    if (animate) {
      animate.enum = { ...(animate.enum || {}) };
      for (const [name, value] of Object.entries(ext.animation)) {
        if (/^[a-zA-Z_][\w-]*$/.test(name) && typeof value === 'string' && !/[{};<>]/.test(value)) {
          animate.enum[name] = `animation: ${value};`;
        }
      }
    }
  }
  for (const [key, spec] of Object.entries(ext.utilities)) {
    if (!spec || typeof spec !== 'object' || !/^[a-zA-Z][\w-]*$/.test(key)) continue;
    const attr = ['layout', 'space', 'visual'].includes(spec.attr) ? spec.attr : 'visual';
    const def = { name: `plugin:${key}`, property: attr, category: attr };
    if (typeof spec.css === 'string') {
      registry.addKeyword(finalize({ ...baseEntry(def, attr, key), kind: 'keyword', css: spec.css }));
      continue;
    }
    const e = baseEntry(def, attr, key);
    e.scale = spec.scale || null;
    const meta = { ...spec, templates: null, arbitraryTemplates: null };
    if (meta.arbitrary === undefined && (meta.template || meta.arbitraryTemplate)) meta.arbitrary = true;
    applyEngineMeta(e, meta, key);
    if (e.scale && !(e.scale in SCALE_VAR_PREFIX)) e.varPrefix = false; // custom scales are inlined
    registry.addUtility(finalize(e));
  }
  configRegistries.set(config, registry);
  return registry;
}

/**
 * Build a registry from a definitions object.
 * @param {Object} [definitions] - { layout, space, visual } maps (slimmed or full). Defaults to the bundled definitions.
 * @returns {Registry}
 */
export function buildRegistry(definitions) {
  const defs = definitions || {
    layout: definitionsIndex.layout,
    space: definitionsIndex.space,
    visual: definitionsIndex.visual
  };
  const registry = new Registry();

  // Capability markers (hoverable, focusable, …) produce no CSS and no diagnostics.
  const markers = new Set(['disabled']);
  for (const v of Object.values(STATE_VARIANTS)) if (v.group) markers.add(v.group);
  for (const key of markers) {
    registry.addKeyword({ ...baseEntry({ name: 'state-capability' }, 'layout', key), kind: 'marker', css: null, order: 0, group: key });
  }

  for (const cat of ['layout', 'space', 'visual']) {
    const group = defs[cat] || {};
    for (const def of Object.values(group)) {
      if (!def || typeof def !== 'object') continue;
      const attr = def.property || cat;
      if (!['layout', 'space', 'visual'].includes(attr)) continue;
      const meta = def.engine || null;
      if (meta && meta.skip) continue;
      const attrs = meta && Array.isArray(meta.attrs) ? meta.attrs : [attr];
      for (const a of attrs) {
        if (!['layout', 'space', 'visual'].includes(a)) continue;
        addDefinition(registry, def, a, meta);
      }
    }
  }

  applyComposableTransforms(registry);
  return registry;
}

function addDefinition(registry, def, attr, meta) {
  const values = Array.isArray(def.values) ? def.values : [];
  const prefixes = (meta && meta.prefixes) ? meta.prefixes.slice() : prefixesFromSyntax(def.syntax, def.property || attr);
  if (meta && Array.isArray(meta.aliases)) for (const a of meta.aliases) pushUnique(prefixes, a);
  const keywordSyntax = prefixes.length === 0 && isKeywordSyntax(def.syntax, def.property || attr);

  // Explicit extra utilities: engine.utilities = { key: { template, numeric, passthrough, … } }
  if (meta && meta.utilities) {
    for (const [key, spec] of Object.entries(meta.utilities)) {
      const e = baseEntry(def, attr, key);
      e.scale = def.usesScale || null;
      applyEngineMeta(e, { ...spec, templates: null, arbitraryTemplates: null }, key);
      registry.addUtility(finalize(e));
    }
  }

  // Explicit keyword list from metadata (e.g. `ring-inset`, `transition-none`)
  if (meta && meta.keywords) {
    for (const [key, css] of Object.entries(meta.keywords)) {
      registry.addKeyword(finalize({ ...baseEntry(def, attr, key), kind: 'keyword', css }));
    }
  }

  // ---- Shape A: bare keywords ------------------------------------------
  if (prefixes.length === 0) {
    for (const v of values) {
      if (!v || typeof v !== 'object') continue;
      const key = v.value || v.property;
      if (!key || typeof v.css !== 'string') continue;
      if (key.includes(':')) {
        // `divide-x:reverse` style → prefix + enum value
        const [pfx, val] = key.split(':');
        const e = baseEntry(def, attr, pfx);
        e.enum = { [val]: v.css };
        applyEngineMeta(e, meta, pfx);
        registry.addUtility(finalize(e));
        continue;
      }
      if (!keywordSyntax && !v.property) continue;
      if (/^\d+-\d+$/.test(key)) continue;
      registry.addKeyword(finalize({ ...baseEntry(def, attr, key), kind: 'keyword', css: v.css }));
    }
    // container-style: syntax attr="word" with no values entry for it
    if (!keywordSyntax && values.length === 0) {
      const m = new RegExp(`${attr}="([a-z-]+)"`).exec(def.syntax || '');
      if (m && meta && meta.css) registry.addKeyword(finalize({ ...baseEntry(def, attr, m[1]), kind: 'keyword', css: meta.css }));
    }
    return;
  }

  // ---- Shape B: per-prefix templates ({property|value, css with {value}}) --
  const perPrefix = values.filter((v) => v && typeof v === 'object' && typeof v.css === 'string' && (v.property || (def.usesScale && /\{value\}|\{n\}/.test(v.css) && !values.some((o) => o !== v && o.value === v.value))));
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

  // ---- Shape C: enum values shared by all prefixes ---------------------
  const numeric = def.dynamic ? deriveNumeric(values) : null;

  for (const key of prefixes) {
    const enumMap = {};
    const literalMap = {};
    let sharedProp = null;
    let sharedPropConsistent = true;
    let rangeTemplate = null;
    for (const v of values) {
      if (!v || typeof v !== 'object' || typeof v.value !== 'string' || typeof v.css !== 'string') continue;
      if (v.prefix && v.prefix !== key) continue;
      if (/^\d+-\d+$/.test(v.value)) {
        rangeTemplate = toTemplate(v.css);
        continue;
      }
      if (v.value.includes(':')) continue;
      if (!v.css.includes(':')) {
        // bare literal (e.g. `min-content`) → substituted through the template
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

    // Template: shared single property, or derived from a numeric example
    if (numeric && numeric.template) {
      e.template = numeric.template;
      e.numeric = { unit: numeric.unit, divide: numeric.divide };
    } else if (rangeTemplate) {
      e.template = rangeTemplate;
      e.numeric = { unit: '', divide: null, integer: true };
    } else if (sharedProp && sharedPropConsistent) {
      e.template = `${sharedProp}: {value};`;
    }

    // Scale-driven enums (e.g. rounded:none → var(--r-none)) keep the enum but
    // also get a template so undocumented theme keys resolve.
    if (e.scale && !e.template && sharedProp) e.template = `${sharedProp}: {value};`;

    // Identifier passthrough is opt-in (engine.passthrough) — unknown values
    // are diagnostics by default.
    e.passthrough = false;
    if (e.scale) {
      // documented enum keys count as known scale keys
      e.scaleValues = [...new Set([...e.scaleValues, ...Object.keys(enumMap)])];
    }
    addPercentageLiterals(e, def);
    const hadPerKeyTemplate = !!(meta && meta.templates && meta.templates[key]);
    applyEngineMeta(e, meta, key);
    if (hadPerKeyTemplate) {
      // The enum css documents the primary prefix only. For prefixes with
      // their own template the values are re-expressed as literals when they
      // are plain single declarations, and dropped when the entry is driven
      // by a scale / numeric resolver (the values were just examples).
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

// ---------------------------------------------------------------------------
// Default registry (memoized)
// ---------------------------------------------------------------------------

let _default = null;

/** @returns {Registry} */
export function getDefaultRegistry() {
  if (!_default) {
    _default = buildRegistry(slimDefinitions({
    layout: definitionsIndex.layout,
    space: definitionsIndex.space,
    visual: definitionsIndex.visual
  }));
  }
  return _default;
}

/** Test hook: discard the memoized registry (e.g. after mutating definitions). */
export function resetDefaultRegistry() {
  _default = null;
}

export default { buildRegistry, getDefaultRegistry, registryFor, resetDefaultRegistry, slimDefinitions, prefixesFromSyntax, Registry };
