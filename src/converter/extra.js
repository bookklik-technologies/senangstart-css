/**
 * Base-class mappings missing from the original engine: transforms, arbitrary
 * properties, generic arbitrary values, and a few layout utilities.
 *
 * convertExtra(base, exact) runs BEFORE convertBase and returns `undefined`
 * when the class is not its concern. convertArbitrary(base, exact) runs AFTER
 * convertBase returned null.
 */

import { radiusScale, getSpacing } from './base.js';

const NUM = /^\d+(\.\d+)?$/;
let exactMode = false;
const radiusToken = (size) => (size.startsWith('[') ? size : exactMode ? `tw-${size === 'DEFAULT' ? 'base' : size}` : (radiusScale[size === 'DEFAULT' ? '' : size] || size));
const FRACTIONS = { '1/2': 'half', '2/4': 'half', '1/3': 'third', '2/3': 'third-2x', '1/4': 'quarter', '3/4': 'quarter-3x' };
const asArb = (v) => (/^\[.+\]$/.test(v) ? v : null);

/** @returns {{cat:string,val:string}|Array|null|undefined} */
export function convertExtra(base, exact) {
  exactMode = !!exact;
  // Arbitrary property: [mask-type:luminance] / [--x:1px]
  if (/^\[(?:--)?[a-zA-Z][\w-]*:.+\]$/.test(base)) return { cat: 'visual', val: base };

  // Transforms
  let m;
  if ((m = /^(-?)rotate(?:-([xyz]))?-(\d+|\[.+\])$/.exec(base))) {
    const prop = m[2] ? `rotate-${m[2]}` : 'rotate';
    return { cat: 'visual', val: `${prop}:${m[1]}${m[3]}` };
  }
  if ((m = /^(-?)scale(?:-([xy]))?-(\d+|\[.+\])$/.exec(base))) {
    const prop = m[2] ? `scale-${m[2]}` : 'scale';
    return { cat: 'visual', val: `${prop}:${m[1]}${m[3]}` };
  }
  if ((m = /^(-?)skew-([xy])-(\d+|\[.+\])$/.exec(base))) {
    return { cat: 'visual', val: `skew-${m[2]}:${m[1]}${m[3]}` };
  }
  if (base === 'transform-none') return { cat: 'visual', val: '[transform:none]' };

  // Shadows: Tailwind v4 renamed the scale (v4 xs = v3 sm, v4 sm/bare = v3 DEFAULT). Exact mode
  // targets the tw-* table, which carries v3 names.
  if (exact && (m = /^shadow(?:-(2xs|xs|sm|md|lg|xl|2xl|inner|none))?$/.exec(base))) {
    const v4 = m[1] || 'sm';
    const key = { '2xs': null, xs: 'tw-sm', sm: 'tw-DEFAULT', md: 'tw-md', lg: 'tw-lg', xl: 'tw-xl', '2xl': 'tw-2xl', inner: 'tw-inner', none: 'tw-none' }[v4];
    if (key === null) return { cat: 'visual', val: 'shadow:[0_1px_rgb(0_0_0_/_0.05)]' };
    return { cat: 'visual', val: `shadow:${key}` };
  }

  // Sizing keywords the engine turned into arbitrary values (w-full → w:full, h-min → h:min, w-1/2 → w:1/2)
  if ((m = /^(w|h|min-w|max-w|min-h|max-h|size|basis)-(full|min|max|fit|\d\/\d)$/.exec(base))) {
    return { cat: m[1] === 'basis' ? 'layout' : 'space', val: `${m[1]}:${FRACTIONS[m[2]] || m[2]}` };
  }

  // Directional radius: rounded-t-lg → rounded-t:medium (the engine dropped the side)
  if ((m = /^rounded-(t|b|l|r|tl|tr|bl|br|s|e|ss|se|es|ee)(?:-(none|sm|md|lg|xl|2xl|3xl|full|\[.+\]))?$/.exec(base))) {
    const side = { s: 'l', e: 'r', ss: 'tl', se: 'tr', es: 'bl', ee: 'br' }[m[1]] || m[1];
    const size = m[2] === undefined ? 'DEFAULT' : m[2];
    return { cat: 'visual', val: `rounded-${side}:${radiusToken(size)}` };
  }

  // translate-z (spacing scale) — the base mappings only cover x/y
  if ((m = /^(-?)translate-z-(\d+(?:\.\d+)?|px|\[.+\])$/.exec(base))) {
    const v = m[2].startsWith('[') ? m[2] : getSpacing(m[2], exact);
    return { cat: 'visual', val: `translate-z:${m[1]}${v}` };
  }
  // Fractional padding/margin/gap is not Tailwind syntax → leave in class=""
  if (/^-?(?:[pm][trblxy]?|gap(?:-[xy])?)-\d+\/\d+$/.test(base)) return null;

  // space-x-4 / space-y-2 (children spacing) → visual space-x:… ; border sides without width
  if ((m = /^(-?)space-([xy])-(\d+(?:\.\d+)?|px|\[.+\])$/.exec(base))) {
    const v = m[3].startsWith('[') ? m[3] : getSpacing(m[3], exact);
    return { cat: 'visual', val: `space-${m[2]}:${m[1]}${v}` };
  }
  if (/^space-[xy]-reverse$/.test(base)) return null;
  if ((m = /^border-([tblr]|x|y)$/.exec(base))) {
    const sides = { x: ['l', 'r'], y: ['t', 'b'] }[m[1]] || [m[1]];
    return sides.map((side) => ({ cat: 'visual', val: `border-${side}-w:thin` }));
  }
  // Named max-width sizes → rem
  if ((m = /^max-w-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|prose|screen-(?:sm|md|lg|xl|2xl))$/.exec(base))) {
    const MAXW = { xs: '20rem', sm: '24rem', md: '28rem', lg: '32rem', xl: '36rem', '2xl': '42rem', '3xl': '48rem', '4xl': '56rem', '5xl': '64rem', '6xl': '72rem', '7xl': '80rem', prose: '65ch', 'screen-sm': '640px', 'screen-md': '768px', 'screen-lg': '1024px', 'screen-xl': '1280px', 'screen-2xl': '1536px' };
    return { cat: 'space', val: `max-w:[${MAXW[m[1]]}]` };
  }

  // Masks, perspective & 3D
  if ((m = /^mask-(none|alpha|luminance|match)$/.exec(base))) return { cat: 'visual', val: `mask:${m[1]}` };
  if ((m = /^(mask-(?:image|mode|origin|clip|composite|position|repeat|size|type)|perspective-origin|transform-style)-([a-z0-9-]+|\[.+\])$/.exec(base))) return { cat: 'visual', val: `${m[1]}:${m[2]}` };
  if ((m = /^backface-(visible|hidden)$/.exec(base))) return { cat: 'visual', val: `backface:${m[1]}` };
  if ((m = /^origin-(center|top|top-right|right|bottom-right|bottom|bottom-left|left|top-left|\[.+\])$/.exec(base))) return { cat: 'visual', val: `origin:${m[1]}` };
  if ((m = /^perspective-(\d+|none|\[.+\])$/.exec(base))) return { cat: 'visual', val: `perspective:${m[1]}` };

  // Layout bits
  if ((m = /^place-(items|content|self)-([a-z-]+)$/.exec(base))) return { cat: 'layout', val: `place-${m[1]}:${m[2]}` };
  if ((m = /^justify-items-([a-z]+)$/.exec(base))) return { cat: 'layout', val: `justify-items:${m[1]}` };
  if ((m = /^content-(center|start|end|between|around|evenly|baseline|stretch)$/.exec(base))) return { cat: 'layout', val: `content:${m[1]}` };
  if ((m = /^aspect-(video|square|auto|\[.+\])$/.exec(base))) return { cat: 'layout', val: `aspect:${m[1]}` };
  if ((m = /^line-clamp-(\d+|none)$/.exec(base))) return { cat: 'visual', val: `line-clamp:${m[1]}` };
  if (base === 'sr-only') {
    return { cat: 'visual', val: '[position:absolute] [width:1px] [height:1px] [padding:0] [margin:-1px] [overflow:hidden] [clip:rect(0,0,0,0)] [white-space:nowrap] [border-width:0]' };
  }
  if ((m = /^columns-(\d+|\[.+\])$/.exec(base))) return { cat: 'layout', val: `[columns:${m[1].replace(/^\[|\]$/g, '')}]` };

  // Important marker slipped into the value (`p-4!` handled by splitClass; nothing to do here)
  return undefined;
}

/** Tailwind utility prefix → [attr, SenangStart property] for arbitrary values. */
const ARB_PREFIX = {
  p: ['space', 'p'], px: ['space', 'p-x'], py: ['space', 'p-y'], pt: ['space', 'p-t'], pr: ['space', 'p-r'], pb: ['space', 'p-b'], pl: ['space', 'p-l'],
  m: ['space', 'm'], mx: ['space', 'm-x'], my: ['space', 'm-y'], mt: ['space', 'm-t'], mr: ['space', 'm-r'], mb: ['space', 'm-b'], ml: ['space', 'm-l'],
  gap: ['space', 'g'], 'gap-x': ['space', 'g-x'], 'gap-y': ['space', 'g-y'],
  w: ['space', 'w'], h: ['space', 'h'], 'min-w': ['space', 'min-w'], 'max-w': ['space', 'max-w'], 'min-h': ['space', 'min-h'], 'max-h': ['space', 'max-h'], size: ['space', 'size'],
  top: ['layout', 'top'], right: ['layout', 'right'], bottom: ['layout', 'bottom'], left: ['layout', 'left'], inset: ['layout', 'inset'], 'inset-x': ['layout', 'inset-x'], 'inset-y': ['layout', 'inset-y'],
  z: ['layout', 'z'], order: ['layout', 'order'], basis: ['layout', 'basis'], flex: ['layout', 'flex'], 'grid-cols': ['layout', 'grid-cols'], 'grid-rows': ['layout', 'grid-rows'],
  rounded: ['visual', 'rounded'], shadow: ['visual', 'shadow'], opacity: ['visual', 'opacity'], leading: ['visual', 'leading'], tracking: ['visual', 'tracking'],
  duration: ['visual', 'duration'], delay: ['visual', 'delay'], ring: ['visual', 'ring'], 'ring-offset': ['visual', 'ring-offset'], outline: ['visual', 'outline-w'],
  'translate-x': ['visual', 'translate-x'], 'translate-y': ['visual', 'translate-y'], indent: ['visual', 'indent'],
  content: ['visual', 'content'], fill: ['visual', 'fill'], stroke: ['visual', 'stroke'], accent: ['visual', 'accent'], caret: ['visual', 'caret'], decoration: ['visual', 'decoration'],
  from: ['visual', 'from'], via: ['visual', 'via'], to: ['visual', 'to'], 'border-t': ['visual', 'border-t'], 'border-b': ['visual', 'border-b'], 'border-l': ['visual', 'border-l'], 'border-r': ['visual', 'border-r']
};

const LENGTH = /^-?(\d*\.?\d+)(px|r?em|%|vh|vw|vmin|vmax|ch|ex|dvh|svh|lvh|cq[wh])$|^calc\(|^var\(|^clamp\(|^min\(|^max\(/;
const COLOR = /^(#[0-9a-fA-F]{3,8}|rgba?\(|hsla?\(|oklch\(|oklab\(|color-mix\(|var\(--|transparent$|currentColor$)/;

/**
 * Generic arbitrary value fallback: `text-[14px]`, `bg-[url(x.png)]`, `border-[#333]`.
 * @returns {{cat:string,val:string}|null}
 */
export function convertArbitrary(base) {
  const m = /^(-?)([a-z][a-z-]*?)-\[(.+)\]$/.exec(base);
  if (!m) return null;
  const [, neg, prefix, raw] = m;
  const value = neg ? `[-${raw}]` : `[${raw}]`;
  const plain = raw.replace(/_/g, ' ');

  if (ARB_PREFIX[prefix]) {
    const [cat, prop] = ARB_PREFIX[prefix];
    return { cat, val: `${prop}:${value}` };
  }
  // Type-dependent prefixes
  if (prefix === 'text') {
    if (LENGTH.test(plain)) return { cat: 'visual', val: `text-size:${value}` };
    return { cat: 'visual', val: `text:${value}` };
  }
  if (prefix === 'bg') {
    if (/^(url\(|linear-gradient|radial-gradient|conic-gradient|repeating-)/.test(plain)) return { cat: 'visual', val: `bg-image:${value}` };
    if (COLOR.test(plain) || !LENGTH.test(plain)) return { cat: 'visual', val: `bg:${value}` };
    return { cat: 'visual', val: `bg-size:${value}` };
  }
  if (prefix === 'border') {
    if (LENGTH.test(plain) || NUM.test(plain)) return { cat: 'visual', val: `border-w:${value}` };
    return { cat: 'visual', val: `border:${value}` };
  }
  if (prefix === 'font') {
    if (NUM.test(plain)) return { cat: 'visual', val: `font:${value}` };
    return { cat: 'visual', val: `font-family:${value}` };
  }
  if (prefix === 'grid-cols' || prefix === 'grid-rows') return { cat: 'layout', val: `${prefix}:${value}` };
  if (asArb(value)) return null;
  return null;
}

export default { convertExtra, convertArbitrary };
