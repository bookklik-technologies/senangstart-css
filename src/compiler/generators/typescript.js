/**
 * SenangStart CSS - TypeScript Definition Generator
 *
 * Derives the *documented* token vocabulary for the `layout`, `space` and
 * `visual` attributes from the utility definitions (src/definitions) and the
 * theme, and emits:
 *
 *   - generateTokenTypes(config)   → types/generated-tokens.d.ts (package types)
 *   - generateTypeScript(config)   → project-local `output.typescript` file
 *                                    (theme-aware, standalone, ambient)
 *   - generateSenangData(config)   → types/senang-data.json (editor tooling / llms)
 *   - generateHtmlData(config)     → types/senang.html-data.json (VS Code customData)
 *
 * Typing strategy
 * ---------------
 * Attribute values are space-separated token lists ("p:big m-t:small"), so a
 * plain union of single tokens rejects real-world markup. Every attribute is
 * therefore typed as `KnownXToken | (string & {})`: any string is accepted, but
 * editors still offer the known single-token union as completions. Strict,
 * per-token validation is available through the `ValidTokens` helper type in
 * types/attributes.d.ts.
 *
 * All output is deterministic (sorted, no timestamps) so the generated files
 * can be committed and regenerated idempotently.
 */

import { BREAKPOINTS, STATES } from '../../core/constants.js';
import { getDefinitionsByCategory } from '../../definitions/index.js';

/** Hard cap for the enumerated members of one attribute's known-token union. */
export const MAX_UNION_MEMBERS = 2000;

/** Colour properties that get the full palette; the rest get named colours only. */
const PRIMARY_COLOR_PROPERTIES = ['bg', 'text', 'border'];

const ATTRIBUTES = ['layout', 'space', 'visual'];

const ATTRIBUTE_DESCRIPTIONS = {
  layout: 'Structure & position: display, flex/grid, alignment, position, z-index. Space-separated tokens, e.g. layout="flex col center".',
  space: 'Sizing & spacing: padding, margin, gap, width, height. Space-separated tokens, e.g. space="p:big m-t:small g:medium".',
  visual: 'Colors & appearance: background, text, borders, shadows, typography, effects. Space-separated tokens, e.g. visual="bg:primary text:white rounded:big hover:bg:blue-500".',
  interact: 'Peer-interaction trigger id. Elements with listens="<id>" react to this element\'s state.',
  listens: 'Peer-interaction listener id. Matches an interact="<id>" trigger.'
};

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

const unique = (arr) => [...new Set(arr)];
const sortStr = (arr) => [...arr].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
const q = (s) => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

function union(values, { indent = '  ', perLine = 8 } = {}) {
  const list = sortStr(unique(values));
  if (list.length === 0) return 'never';
  const lines = [];
  for (let i = 0; i < list.length; i += perLine) {
    lines.push(indent + '| ' + list.slice(i, i + perLine).map(q).join(' | '));
  }
  return '\n' + lines.join('\n');
}

/** Expand `rounded-{t|b|l}:` style groups inside a syntax fragment. */
function expandGroups(fragment) {
  const m = fragment.match(/\{([^{}]+)\}/);
  if (!m) return [fragment];
  const alts = m[1].split('|');
  return alts.flatMap(alt => expandGroups(fragment.replace(m[0], alt)));
}

/** Extract colon-property prefixes ("p", "rounded-t", …) from a definition syntax string. */
function prefixesFromSyntax(syntax = '') {
  const out = [];
  const re = /(?:layout|space|visual)="([^"\s[\]]+?):(?:\[|-\[)/g;
  let m;
  while ((m = re.exec(syntax))) {
    for (const p of expandGroups(m[1])) {
      if (/^[a-z0-9-]+$/i.test(p) && !STATES.includes(p) && !BREAKPOINTS.includes(p)) out.push(p);
    }
  }
  return unique(out);
}

/** Literal (colon-less) keywords in the syntax string, e.g. layout="container". */
function literalsFromSyntax(syntax = '') {
  const out = [];
  const re = /(?:layout|space|visual)="([^"[\]]+)"/g;
  let m;
  while ((m = re.exec(syntax))) {
    for (const lit of expandGroups(m[1])) {
      if (/^[a-z0-9-]+(:[a-z0-9-]+)?$/i.test(lit) && !lit.includes('...')) out.push(lit);
    }
  }
  return unique(out);
}

function expandRange(value) {
  const m = /^(\d+)-(\d+)$/.exec(value);
  if (!m) return null;
  const from = Number(m[1]);
  const to = Number(m[2]);
  if (!(to > from) || to - from > 64) return null;
  const out = [];
  for (let i = from; i <= to; i++) out.push(String(i));
  return out;
}

/** Deterministic down-sampling of a scale: keeps first/last, every `step`-th in between. */
export function sampleScale(scale, step) {
  if (step <= 1 || scale.length <= 2) return scale;
  // Base adjectives ("medium") always survive; multiplier variants ("medium-2x")
  // and other long tails are thinned to every `step`-th entry.
  const isBase = (k) => !/-\d+x$/.test(k);
  const out = [];
  let n = 0;
  for (const k of scale) {
    if (isBase(k)) { out.push(k); continue; }
    if (n % step === 0) out.push(k);
    n++;
  }
  return out;
}

// ---------------------------------------------------------------------------
// Theme analysis
// ---------------------------------------------------------------------------

/**
 * Split theme colours into named colours and a (family × shade) grid.
 * The grid is only reported as "complete" when every family has every shade,
 * which is what allows the template-literal type `${ColorFamily}-${ColorShade}`.
 */
export function analyzeColors(colors = {}) {
  const named = [];
  const byFamily = new Map();
  for (const key of Object.keys(colors)) {
    const m = /^([a-z][a-z0-9]*(?:-[a-z][a-z0-9]*)*)-(\d+)$/i.exec(key);
    if (m) {
      if (!byFamily.has(m[1])) byFamily.set(m[1], new Set());
      byFamily.get(m[1]).add(m[2]);
    } else {
      named.push(key);
    }
  }
  const families = sortStr([...byFamily.keys()]);
  const shades = unique(families.flatMap(f => [...byFamily.get(f)]))
    .sort((a, b) => Number(a) - Number(b));
  const complete = families.length > 0 && families.every(f => shades.every(s => byFamily.get(f).has(s)));
  return { named: sortStr(named), families, shades, complete, all: sortStr(Object.keys(colors)) };
}

function themeScale(theme, name) {
  const scale = theme?.[name];
  return scale && typeof scale === 'object' ? Object.keys(scale) : [];
}

// ---------------------------------------------------------------------------
// Token derivation from definitions
// ---------------------------------------------------------------------------

/**
 * Derive documented tokens for one definition.
 * @returns {{ tokens: Array<{token:string, description:string}>, colorProperties: string[], arbitraryProperties: string[], properties: string[] }}
 */
function deriveDefinitionTokens(def, theme, scaleStep) {
  const tokens = [];
  const colorProperties = [];
  const arbitraryProperties = [];
  const properties = [];
  const add = (token, description) => tokens.push({ token, description: description || def.description || '' });

  if (def.name === 'state-prefixes') {
    return { tokens, colorProperties, arbitraryProperties, properties };
  }

  const values = Array.isArray(def.values) ? def.values : [];
  const prefixes = prefixesFromSyntax(def.syntax);
  const isColor = def.usesScale === 'colors';

  // Scale values for this definition (explicit scaleValues win over theme scale)
  let scale = [];
  if (!isColor) {
    if (Array.isArray(def.scaleValues) && def.scaleValues.length) scale = [...def.scaleValues];
    else if (def.usesScale) scale = themeScale(theme, def.usesScale);
  }
  const sampledScale = sampleScale(scale, scaleStep);
  const pct = Array.isArray(def.percentageAdjectives) ? def.percentageAdjectives : [];

  // A. Space-style definitions: values carry `property` (p, p-t, …)
  const propertyValues = values.filter(v => v.property);
  if (propertyValues.length) {
    for (const v of propertyValues) {
      properties.push(v.property);
      if (def.supportsArbitrary) arbitraryProperties.push(v.property);
      for (const s of sampledScale) add(`${v.property}:${s}`, `${v.description || def.description} (${s})`);
      for (const p of pct) add(`${v.property}:${p.name}`, p.description || `${v.description} (${p.value})`);
      if (def.supportsNegative) {
        for (const s of sampledScale) {
          if (s !== 'none' && s !== 'auto') add(`${v.property}:-${s}`, `Negative ${v.description || def.description} (${s})`);
        }
      }
    }
    return { tokens, colorProperties, arbitraryProperties, properties };
  }

  // B. Values that are themselves property prefixes (css contains "{value}")
  const templated = values.filter(v => typeof v.css === 'string' && v.css.includes('{value}'));
  if (templated.length && templated.length === values.length) {
    for (const v of templated) {
      properties.push(v.value);
      if (def.supportsArbitrary) arbitraryProperties.push(v.value);
      for (const s of sampledScale) add(`${v.value}:${s}`, `${v.description || def.description} (${s})`);
    }
    return { tokens, colorProperties, arbitraryProperties, properties };
  }

  // C. Colour definitions: prefixes × palette (emitted as a template type)
  if (isColor) {
    for (const p of prefixes) {
      properties.push(p);
      colorProperties.push(p);
      if (def.supportsArbitrary) arbitraryProperties.push(p);
    }
    // Non-colour literal values on colour defs (e.g. fill:none, stroke:none)
    for (const v of values) {
      if (typeof v.value === 'string' && v.value.includes(':')) add(v.value, v.description);
      else if (typeof v.value === 'string' && !(theme?.colors && v.value in theme.colors)) {
        for (const p of prefixes) add(`${p}:${v.value}`, v.description);
      }
    }
    return { tokens, colorProperties, arbitraryProperties, properties };
  }

  // D. Colon-property definitions (prefix:value)
  if (prefixes.length) {
    for (const p of prefixes) {
      properties.push(p);
      if (def.supportsArbitrary) arbitraryProperties.push(p);
      for (const v of values) {
        if (typeof v.value !== 'string') continue;
        if (v.value.includes(':')) { add(v.value, v.description); continue; }
        // "clear-left" on a float/clear definition belongs to the `clear` prefix only
        const owner = prefixes.find(other => other !== p && v.value.startsWith(`${other}-`));
        if (owner) continue;
        if (v.value.startsWith(`${p}-`)) { add(`${p}:${v.value.slice(p.length + 1)}`, v.description); continue; }
        const range = expandRange(v.value);
        if (range) {
          for (const n of range) add(`${p}:${n}`, (v.description || '').replace(/\bN\b/g, n));
        } else {
          add(`${p}:${v.value}`, v.description);
        }
      }
      for (const s of sampledScale) add(`${p}:${s}`, `${def.description} (${s})`);
      for (const pc of pct) add(`${p}:${pc.name}`, pc.description);
    }
    return { tokens, colorProperties, arbitraryProperties, properties };
  }

  // E. Bare keywords (layout="flex", visual="uppercase") and literal syntaxes
  for (const v of values) {
    if (typeof v.value !== 'string') continue;
    const range = expandRange(v.value);
    if (range) range.forEach(n => add(n, v.description));
    else add(v.value, v.description);
  }
  for (const lit of literalsFromSyntax(def.syntax)) {
    if (!tokens.some(t => t.token === lit)) add(lit, def.description);
  }
  return { tokens, colorProperties, arbitraryProperties, properties };
}

/**
 * Collect the full documented token vocabulary per attribute.
 *
 * @param {Object} config - Merged configuration (theme is read)
 * @param {Object} [options]
 * @param {number} [options.maxUnionMembers=MAX_UNION_MEMBERS]
 * @returns {Object} token data (see types/senang-data.json for the shape)
 */
export function collectTokenData(config, options = {}) {
  const theme = config?.theme || {};
  const maxUnion = options.maxUnionMembers ?? MAX_UNION_MEMBERS;
  const byCategory = getDefinitionsByCategory();
  const colors = analyzeColors(theme.colors || {});

  const attributes = {};
  for (const attr of ATTRIBUTES) {
    const defs = (byCategory[attr] || []).slice().sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));

    // Increase the scale sampling step until the enumerated union fits the cap.
    let step = 1;
    let result;
    for (;;) {
      result = buildAttribute(attr, defs, theme, step);
      if (result.tokens.length <= maxUnion || step >= 8) break;
      step++;
    }
    attributes[attr] = { ...result, scaleStep: step };
  }

  const screens = themeScale(theme, 'screens');
  const breakpoints = screens.length ? screens : [...BREAKPOINTS];
  const states = STATES.filter(s => s !== 'dark');

  return {
    version: 1,
    breakpoints,
    states,
    variants: {
      description: 'Tokens may be prefixed by any number of variants, each followed by ":" — breakpoints (tab:), max-breakpoints (max-tab:), ranges (tab-lap:), states (hover:) and dark:. Typical order is breakpoint, then state: tab:hover:p:big.',
      forms: ['${breakpoint}', 'max-${breakpoint}', '${breakpoint}-${breakpoint}', '${state}', 'dark'],
      pattern: '(${Breakpoint}|max-${Breakpoint}|${Breakpoint}-${Breakpoint}|${State}|dark):'
    },
    scales: {
      spacing: themeScale(theme, 'spacing'),
      radius: themeScale(theme, 'radius'),
      shadow: themeScale(theme, 'shadow'),
      fontSize: themeScale(theme, 'fontSize'),
      fontWeight: themeScale(theme, 'fontWeight'),
      zIndex: themeScale(theme, 'zIndex'),
      screens: themeScale(theme, 'screens')
    },
    colors,
    attributes
  };
}

function buildAttribute(attr, defs, theme, scaleStep) {
  const tokenMap = new Map(); // token → { token, description, group }
  const colorProperties = new Set();
  const arbitraryProperties = new Set();
  const properties = new Set();
  const groups = [];

  for (const def of defs) {
    const derived = deriveDefinitionTokens(def, theme, scaleStep);
    for (const t of derived.tokens) {
      if (!tokenMap.has(t.token)) tokenMap.set(t.token, { token: t.token, description: t.description, group: def.name });
    }
    derived.colorProperties.forEach(p => colorProperties.add(p));
    derived.arbitraryProperties.forEach(p => arbitraryProperties.add(p));
    derived.properties.forEach(p => properties.add(p));
    groups.push({
      name: def.name,
      description: def.description || '',
      syntax: def.syntax || '',
      usesScale: def.usesScale || null,
      supportsArbitrary: !!def.supportsArbitrary,
      tokenCount: derived.tokens.length,
      colorProperties: sortStr(unique(derived.colorProperties)),
      properties: sortStr(unique(derived.properties))
    });
  }

  const tokens = sortStr([...tokenMap.keys()]).map(k => tokenMap.get(k));
  return {
    description: ATTRIBUTE_DESCRIPTIONS[attr],
    tokens,
    properties: sortStr([...properties]),
    colorProperties: sortStr([...colorProperties]),
    arbitraryProperties: sortStr([...arbitraryProperties]),
    groups
  };
}

// ---------------------------------------------------------------------------
// TypeScript emission
// ---------------------------------------------------------------------------

const HEADER = `/**
 * SenangStart CSS - Generated token types
 *
 * AUTO-GENERATED by scripts/generate-types.js from src/definitions and the
 * default theme. Do not edit by hand — run \`npm run generate:types\`.
 *
 * Every attribute accepts a space-separated list of tokens. The Known*Token
 * unions below list the documented single tokens (scales may be sampled to
 * keep unions small); see types/attributes.d.ts for the attribute prop types
 * and the strict \`ValidTokens\` helper.
 */
`;

function colorTypeBlock(colors, exportKw) {
  const lines = [];
  lines.push(`${exportKw}type NamedColor =${union(colors.named)};`);
  lines.push(`${exportKw}type ColorFamily =${union(colors.families)};`);
  lines.push(`${exportKw}type ColorShade =${union(colors.shades)};`);
  if (colors.complete) {
    lines.push(`${exportKw}type ColorToken = NamedColor | \`\${ColorFamily}-\${ColorShade}\`;`);
  } else {
    lines.push(`${exportKw}type ColorToken =${union(colors.all)};`);
  }
  return lines.join('\n');
}

/**
 * Emit the shared type body for the three attributes.
 * @param {Object} data - collectTokenData() result
 * @param {boolean} exported - prefix declarations with `export`
 */
function emitTokenTypes(data, exported) {
  const ex = exported ? 'export ' : '';
  const out = [];

  out.push(`// Variants — any of these may prefix a token (tab:, max-tab:, tab-lap:, hover:, dark:, tab:hover:)`);
  out.push(`${ex}type Breakpoint =${union(data.breakpoints)};`);
  out.push(`${ex}type MaxBreakpoint = \`max-\${Breakpoint}\`;`);
  out.push(`${ex}type RangeBreakpoint = \`\${Breakpoint}-\${Breakpoint}\`;`);
  out.push(`${ex}type State =${union(data.states)};`);
  out.push(`${ex}type DarkVariant = 'dark';`);
  out.push(`${ex}type VariantName = Breakpoint | MaxBreakpoint | RangeBreakpoint | State | DarkVariant;`);
  out.push(`/** Arbitrary value on any property: \`w:[320px]\`, \`bg:[#123456]\`. */`);
  out.push(`${ex}type ArbitraryToken = \`\${string}:[\${string}]\`;`);
  out.push('');
  out.push(`// Theme scales`);
  out.push(`${ex}type SpacingScale =${union(data.scales.spacing)};`);
  out.push(`${ex}type RadiusScale =${union(data.scales.radius)};`);
  out.push(`${ex}type ShadowScale =${union(data.scales.shadow)};`);
  out.push(`${ex}type FontSizeScale =${union(data.scales.fontSize)};`);
  out.push(`${ex}type FontWeightScale =${union(data.scales.fontWeight)};`);
  out.push(`${ex}type ZIndexScale =${union(data.scales.zIndex)};`);
  out.push(`${ex}type ScreenKey =${union(data.scales.screens)};`);
  out.push(`// Backwards-compatible aliases`);
  out.push(`${ex}type RadiusKey = RadiusScale;`);
  out.push(`${ex}type ShadowKey = ShadowScale;`);
  out.push(`${ex}type FontSizeKey = FontSizeScale;`);
  out.push(`${ex}type FontWeightKey = FontWeightScale;`);
  out.push('');
  out.push(`// Colours`);
  out.push(colorTypeBlock(data.colors, ex));
  out.push(`${ex}type ColorKey = ColorToken;`);
  out.push('');

  for (const attr of ATTRIBUTES) {
    const a = data.attributes[attr];
    const Cap = attr[0].toUpperCase() + attr.slice(1);
    const enumerated = a.tokens.map(t => t.token);

    out.push(`// ${'-'.repeat(70)}`);
    out.push(`// ${attr} — ${enumerated.length} enumerated tokens${a.scaleStep > 1 ? ` (scales sampled 1/${a.scaleStep})` : ''}`);
    out.push(`// ${'-'.repeat(70)}`);
    out.push(`${ex}type ${Cap}Property =${union(a.properties)};`);
    out.push(`${ex}type Arbitrary${Cap}Property =${union(a.arbitraryProperties)};`);
    out.push(`${ex}type Arbitrary${Cap}Token = \`\${Arbitrary${Cap}Property}:[\${string}]\`;`);

    if (a.colorProperties.length) {
      const primary = a.colorProperties.filter(p => PRIMARY_COLOR_PROPERTIES.includes(p));
      const secondary = a.colorProperties.filter(p => !PRIMARY_COLOR_PROPERTIES.includes(p));
      out.push(`${ex}type ${Cap}ColorProperty =${union(a.colorProperties)};`);
      out.push(`${ex}type Primary${Cap}ColorProperty =${union(primary)};`);
      out.push(`${ex}type Secondary${Cap}ColorProperty =${union(secondary)};`);
      out.push(`/** Colour tokens: full palette for ${primary.join(', ')}; named colours for the rest (any family-shade still compiles). */`);
      out.push(`${ex}type ${Cap}ColorToken =\n  | \`\${Primary${Cap}ColorProperty}:\${ColorToken}\`\n  | \`\${Secondary${Cap}ColorProperty}:\${NamedColor}\`;`);
    } else {
      out.push(`${ex}type ${Cap}ColorProperty = never;`);
      out.push(`${ex}type ${Cap}ColorToken = never;`);
    }

    out.push(`${ex}type ${Cap}ScaleToken =${union(enumerated)};`);
    out.push(`${ex}type Known${Cap}Token = ${Cap}ScaleToken | ${Cap}ColorToken | Arbitrary${Cap}Token;`);
    out.push('');
  }

  return out.join('\n');
}

/**
 * Generate types/generated-tokens.d.ts (exported, importable token types).
 * @param {Object} config
 * @returns {string}
 */
export function generateTokenTypes(config) {
  const data = collectTokenData(config);
  return `${HEADER}\n${emitTokenTypes(data, true)}\nexport {};\n`;
}

/**
 * Generate the project-local TypeScript definitions written by the CLI when
 * `output.typescript` is set. The file is standalone and ambient (no imports)
 * so it works from any tsconfig `include`, and it reflects the *user's* theme
 * (custom colours / spacing keys) rather than the package defaults.
 *
 * It augments React, Vue, Svelte, Solid, Preact and Astro. If you only want a
 * subset, import the per-framework files from the package instead
 * (`@bookklik/senangstart-css/react`, …) and disable `output.typescript`.
 *
 * @param {Object} config - Configuration object
 * @returns {string} - TypeScript definition content
 */
export function generateTypeScript(config) {
  const data = collectTokenData(config);

  return `/**
 * SenangStart CSS - TypeScript Definitions
 * Auto-generated from configuration by \`senangstart build\` (output.typescript).
 * Do not edit — re-run the build after changing your theme.
 *
 * Attributes accept space-separated token lists, so each prop is typed as
 * \`KnownXToken | (string & {})\`: any string compiles, known tokens autocomplete.
 * For strict per-token validation use \`ss.space('p:big m-t:small')\` from
 * '@bookklik/senangstart-css/typed'.
 */

${emitTokenTypes(data, false)}
// ${'-'.repeat(70)}
// Attribute prop types (accept multi-token strings, autocomplete known tokens)
// ${'-'.repeat(70)}
type AnyString = string & {};
// NOTE: the prop types use the single \`ArbitraryToken\` template rather than the
// per-property Arbitrary*Token unions: TypeScript cross-multiplies template
// members when it contextually types \`\`bg:white \${props.visual ?? ''}\`\`, and
// 100+ template members would trip "union type too complex" (TS2590).
type LayoutAttr = LayoutScaleToken | LayoutColorToken | ArbitraryToken | AnyString;
type SpaceAttr = SpaceScaleToken | SpaceColorToken | ArbitraryToken | AnyString;
type VisualAttr = VisualScaleToken | VisualColorToken | ArbitraryToken | AnyString;
type Variant = \`\${VariantName}:\`;

// Legacy aliases kept for older consumers of this file
type LayoutValue = LayoutAttr;
type SpaceValue = SpaceAttr;
type VisualValue = VisualAttr;

interface SenangAttributes {
  /** ${ATTRIBUTE_DESCRIPTIONS.layout} */
  layout?: LayoutAttr;
  /** ${ATTRIBUTE_DESCRIPTIONS.space} */
  space?: SpaceAttr;
  /** ${ATTRIBUTE_DESCRIPTIONS.visual} */
  visual?: VisualAttr;
  /** ${ATTRIBUTE_DESCRIPTIONS.interact} */
  interact?: string;
  /** ${ATTRIBUTE_DESCRIPTIONS.listens} */
  listens?: string;
}

// React JSX attribute extensions
declare module 'react' {
  interface HTMLAttributes<T> extends SenangAttributes {}
  interface SVGAttributes<T> extends SenangAttributes {}
}

// Vue attribute extensions
declare module 'vue' {
  interface HTMLAttributes extends SenangAttributes {}
}
declare module '@vue/runtime-dom' {
  interface HTMLAttributes extends SenangAttributes {}
}

// Svelte attribute extensions
declare namespace svelteHTML {
  interface HTMLAttributes<T> extends SenangAttributes {}
}

// Solid attribute extensions
declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends SenangAttributes {}
  }
}

// Preact attribute extensions
declare module 'preact' {
  namespace JSX {
    interface HTMLAttributes<RefType extends EventTarget = EventTarget> extends SenangAttributes {}
  }
}

// Astro attribute extensions
declare namespace astroHTML.JSX {
  interface HTMLAttributes extends SenangAttributes {}
}

export {};
`;
}

// ---------------------------------------------------------------------------
// Editor data emission
// ---------------------------------------------------------------------------

/** Named colours + one representative shade per family, for completion lists. */
function sampledColorNames(colors, shade = '500') {
  const out = [...colors.named];
  for (const f of colors.families) {
    const s = colors.shades.includes(shade) ? shade : colors.shades[Math.floor(colors.shades.length / 2)];
    if (s !== undefined) out.push(`${f}-${s}`);
  }
  return out;
}

/**
 * Slim machine-readable token data for editor tooling / llms.txt.
 * @param {Object} config
 * @returns {Object} JSON-serialisable object
 */
export function generateSenangData(config) {
  const data = collectTokenData(config);
  const scaleNames = Object.keys(data.scales);
  const attributes = {};

  for (const attr of ATTRIBUTES) {
    const a = data.attributes[attr];
    const groupMeta = new Map(a.groups.map(g => [g.name, g]));

    // Property-centric view: "p" → { values: [...], group, scale?, arbitrary, color }
    const propMap = new Map();
    const keywords = [];
    for (const t of a.tokens) {
      const idx = t.token.indexOf(':');
      if (idx === -1) {
        keywords.push({ name: t.token, description: t.description, group: t.group });
        continue;
      }
      const prop = t.token.slice(0, idx);
      const value = t.token.slice(idx + 1);
      if (!propMap.has(prop)) {
        propMap.set(prop, {
          name: prop,
          group: t.group,
          description: groupMeta.get(t.group)?.description || '',
          syntax: groupMeta.get(t.group)?.syntax || '',
          values: []
        });
      }
      propMap.get(prop).values.push(value);
    }
    for (const p of a.colorProperties) {
      if (!propMap.has(p)) {
        const g = a.groups.find(x => x.colorProperties.includes(p));
        propMap.set(p, { name: p, group: g?.name || '', description: g?.description || '', syntax: g?.syntax || '', values: [] });
      }
    }

    const properties = sortStr([...propMap.keys()]).map(name => {
      const p = propMap.get(name);
      const values = sortStr(unique(p.values));
      // Reference a theme scale instead of repeating it when the values are exactly that scale
      const scale = scaleNames.find(s => {
        const keys = data.scales[s];
        return keys.length > 0 && keys.length === values.length && sortStr(keys).every((k, i) => k === values[i]);
      }) || null;
      const entry = {
        name,
        group: p.group,
        description: p.description,
        syntax: p.syntax,
        color: a.colorProperties.includes(name),
        arbitrary: a.arbitraryProperties.includes(name)
      };
      if (scale) entry.scale = scale; else entry.values = values;
      return entry;
    });

    attributes[attr] = {
      description: a.description,
      scaleStep: a.scaleStep,
      keywords,
      properties
    };
  }
  attributes.interact = { description: ATTRIBUTE_DESCRIPTIONS.interact, keywords: [], properties: [] };
  attributes.listens = { description: ATTRIBUTE_DESCRIPTIONS.listens, keywords: [], properties: [] };
  return {
    $comment: 'AUTO-GENERATED by scripts/generate-types.js. Slim token data for editors and llms.txt.',
    version: data.version,
    breakpoints: data.breakpoints,
    states: data.states,
    variants: data.variants,
    scales: data.scales,
    colors: {
      named: data.colors.named,
      families: data.colors.families,
      shades: data.colors.shades,
      pattern: data.colors.complete ? '${family}-${shade}' : null
    },
    attributes
  };
}

/**
 * VS Code HTML custom data (vscode-html-languageservice `customData` format).
 * Plain-HTML users point `html.customData` at this file to get attribute value
 * completions for layout/space/visual.
 * @param {Object} config
 * @param {Object} [options]
 * @param {number} [options.maxValues=600] cap on values per attribute
 * @returns {Object}
 */
export function generateHtmlData(config, options = {}) {
  const maxValues = options.maxValues ?? 1000;
  // Colour completions: full sampled palette for bg/text/border, named colours elsewhere.
  const colors = analyzeColors(config?.theme?.colors || {});
  const paletteSample = sampledColorNames(colors);
  const colorBudget = (props) => props.reduce((n, p) => n + (PRIMARY_COLOR_PROPERTIES.includes(p) ? paletteSample.length : colors.named.length), 0);

  // Ask the collector to sample theme scales until the enumerated tokens fit the remaining budget.
  const probe = collectTokenData(config);
  const budget = Math.max(
    100,
    maxValues - Math.max(...ATTRIBUTES.map(attr => colorBudget(probe.attributes[attr].colorProperties)))
  );
  const data = collectTokenData(config, { maxUnionMembers: budget });

  const globalAttributes = [];
  for (const attr of ATTRIBUTES) {
    const a = data.attributes[attr];
    const values = new Map();
    for (const p of a.colorProperties) {
      const names = PRIMARY_COLOR_PROPERTIES.includes(p) ? paletteSample : colors.named;
      for (const c of names) {
        values.set(`${p}:${c}`, `${p} colour ${c}${colors.complete ? ' (any family-shade works, e.g. ' + p + ':' + colors.families[0] + '-' + colors.shades[0] + ')' : ''}`);
      }
    }
    for (const t of a.tokens) if (!values.has(t.token)) values.set(t.token, t.description);
    const list = sortStr([...values.keys()]);

    globalAttributes.push({
      name: attr,
      description: `${a.description} Prefix any token with a breakpoint (${data.breakpoints.join(', ')}) and/or state (${data.states.join(', ')}), e.g. tab:hover:${a.tokens[0]?.token || 'token'}.${a.scaleStep > 1 ? ' Theme scales are sampled in this completion list; every scale key is valid.' : ''}`,
      references: [{ name: 'SenangStart docs', url: 'https://bookklik-technologies.github.io/senangstart-css/' }],
      values: list.map(v => ({ name: v, description: values.get(v) || '' }))
    });
  }
  globalAttributes.push({ name: 'interact', description: ATTRIBUTE_DESCRIPTIONS.interact });
  globalAttributes.push({ name: 'listens', description: ATTRIBUTE_DESCRIPTIONS.listens });

  return {
    $schema: 'https://raw.githubusercontent.com/microsoft/vscode-html-languageservice/main/docs/customData.schema.json',
    version: 1.1,
    tags: [],
    globalAttributes,
    valueSets: []
  };
}

export default { generateTypeScript, generateTokenTypes, generateSenangData, generateHtmlData, collectTokenData };
