/**
 * SenangStart CSS - Visual Rule Definitions
 * Individual rule functions extracted from generateVisualRule.
 * Each function takes (value, isArbitrary, config) and returns a CSS declaration string.
 * Config is used to look up theme-scale values with sensible defaults as fallback.
 */

import { sanitizeValue } from '../../utils/common.js';
import { CSS_COLOR_KEYWORDS } from '../../core/constants.js';

// Built-in default scales used when config.theme does not provide overrides
const DEFAULT_BLUR = { none: '0', tiny: '2px', small: '4px', medium: '8px', big: '12px', giant: '24px', vast: '48px' };
const DEFAULT_BRIGHTNESS = { dim: 0.5, dark: 0.75, normal: 1, bright: 1.25, vivid: 1.5 };
const DEFAULT_CONTRAST = { low: 0.5, reduced: 0.75, normal: 1, high: 1.25, max: 1.5 };
const DEFAULT_GRAYSCALE = { none: '0%', partial: '50%', full: '100%' };
const DEFAULT_INVERT = { none: '0%', partial: '50%', full: '100%' };
const DEFAULT_SATURATE = { none: 0, low: 0.5, normal: 1, high: 1.5, vivid: 2 };
const DEFAULT_SEPIA = { none: '0%', partial: '50%', full: '100%' };
const DEFAULT_DROP_SHADOW = { none: 'none', tiny: '0 1px 1px rgba(0,0,0,0.05)', small: '0 1px 2px rgba(0,0,0,0.1), 0 1px 1px rgba(0,0,0,0.06)', medium: '0 4px 3px rgba(0,0,0,0.07), 0 2px 2px rgba(0,0,0,0.06)', big: '0 10px 8px rgba(0,0,0,0.04), 0 4px 3px rgba(0,0,0,0.1)', giant: '0 20px 13px rgba(0,0,0,0.03), 0 8px 5px rgba(0,0,0,0.08)' };
const DEFAULT_BACKDROP_OPACITY = { invisible: 0, faint: 0.25, half: 0.5, visible: 0.75, solid: 1 };
const DEFAULT_TRANSITION_PROPERTY = { none: 'none', all: 'all', DEFAULT: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter', colors: 'color, background-color, border-color, text-decoration-color, fill, stroke', opacity: 'opacity', shadow: 'box-shadow', transform: 'transform' };
const DEFAULT_ANIMATION_DURATION = { instant: '75ms', quick: '100ms', fast: '150ms', normal: '200ms', slow: '300ms', slower: '500ms', lazy: '700ms' };
const DEFAULT_ANIMATION_DELAY = { instant: '75ms', quick: '100ms', fast: '150ms', normal: '200ms', slow: '300ms', slower: '500ms', lazy: '700ms' };
const DEFAULT_PERSPECTIVE = { none: 'none', dramatic: '100px', near: '300px', normal: '500px', midrange: '800px', far: '1000px', distant: '1200px' };
const DEFAULT_ANIMATION = { none: 'none', spin: 'spin 1s linear infinite', ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite', pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', bounce: 'bounce 1s infinite' };

function getScale(config, key, defaults) {
  return (config?.theme?.[key]) || defaults;
}

function parseOpacityModifier(value) {
  const slashIndex = value.lastIndexOf('/');
  if (slashIndex < 1) return null;
  const color = value.slice(0, slashIndex);
  const raw = value.slice(slashIndex + 1);
  if (/^\d{1,3}$/.test(raw)) {
    const n = parseInt(raw, 10);
    if (n >= 0 && n <= 100) return { color, opacity: n / 100 };
  }
  if (/^\d*\.?\d+$/.test(raw)) {
    const n = parseFloat(raw);
    if (n >= 0 && n <= 1) return { color, opacity: n };
  }
  return null;
}

function resolveColorValue(value, isArbitrary) {
  const parsed = parseOpacityModifier(value);
  const colorValue = parsed ? parsed.color : value;
  const opacity = parsed ? parsed.opacity : null;
  let resolved;
  if (isArbitrary) {
    resolved = colorValue;
  } else if (CSS_COLOR_KEYWORDS.includes(colorValue)) {
    resolved = colorValue;
  } else {
    const arbitraryMatch = colorValue.match(/^\[(.+)\]$/);
    if (arbitraryMatch) {
      resolved = arbitraryMatch[1];
    } else {
      resolved = `var(--c-${colorValue})`;
    }
  }
  if (opacity !== null) {
    return `color-mix(in srgb, ${resolved} ${Math.round(opacity * 100)}%, transparent)`;
  }
  return resolved;
}

function sanitizeArbitraryValue(value) {
  return sanitizeValue(value);
}

const rules = {
  bg: (v, a) => `background-color: ${resolveColorValue(v, a)};`,
  'bg-image': (v, a) => {
    if (!v || v === 'none') return 'background-image: none;';
    if (v.startsWith('gradient-to-')) {
      const dirMap = { t:'to top', tr:'to top right', r:'to right', br:'to bottom right', b:'to bottom', bl:'to bottom left', l:'to left', tl:'to top left' };
      const dir = dirMap[v.replace('gradient-to-', '')];
      if (dir) return `background-image: linear-gradient(${dir}, var(--ss-gradient-stops, transparent));`;
    }
    return `background-image: ${a ? sanitizeArbitraryValue(`url(${v})`) : `url(${v})`};`;
  },
  'bg-attachment': (v) => `background-attachment: ${v};`,
  'bg-clip': (v) => `background-clip: ${({ border:'border-box', padding:'padding-box', content:'content-box', text:'text' })[v] || v};`,
  'bg-origin': (v) => `background-origin: ${({ border:'border-box', padding:'padding-box', content:'content-box' })[v] || v};`,
  'bg-position': (v, a) => `background-position: ${a ? v.replace(/_/g, ' ') : (({ center:'center', top:'top', bottom:'bottom', left:'left', right:'right', 'top-left':'top left', 'top-right':'top right', 'bottom-left':'bottom left', 'bottom-right':'bottom right' })[v] || v)};`,
  'bg-repeat': (v) => `background-repeat: ${({ repeat:'repeat', 'no-repeat':'no-repeat', 'repeat-x':'repeat-x', 'repeat-y':'repeat-y', round:'round', space:'space' })[v] || v};`,
  'bg-size': (v, a) => `background-size: ${a ? v.replace(/_/g, ' ') : ({ auto:'auto', cover:'cover', contain:'contain' })[v] || v};`,
  'bg-blend': (v) => `background-blend-mode: ${v};`,

  from: (v, a) => `--ss-gradient-from: ${resolveColorValue(v, a)}; --ss-gradient-to: rgb(255 255 255 / 0); --ss-gradient-stops: var(--ss-gradient-from), var(--ss-gradient-to);`,
  via: (v, a) => `--ss-gradient-to: rgb(255 255 255 / 0); --ss-gradient-stops: var(--ss-gradient-from), ${resolveColorValue(v, a)}, var(--ss-gradient-to);`,
  to: (v, a) => `--ss-gradient-to: ${resolveColorValue(v, a)};`,

  text: (v, a) => {
    if (['left','center','right','justify'].includes(v)) return `text-align: ${v};`;
    return `color: ${resolveColorValue(v, a)};`;
  },
  'text-shadow': (v, a) => `text-shadow: ${a ? v.replace(/_/g, ' ') : ({ none:'none', small:'0 1px 2px rgba(0,0,0,0.1)', medium:'0 2px 4px rgba(0,0,0,0.15)', big:'0 4px 8px rgba(0,0,0,0.2)' })[v] || v};`,
  'text-size': (v, a) => {
    if (a) return `font-size: ${v};`;
    if (v.startsWith('tw-')) return `font-size: var(--tw-text-${v.slice(3)}); line-height: var(--tw-leading-${v.slice(3)});`;
    return `font-size: var(--font-${v}); line-height: var(--font-lh-${v});`;
  },
  font: (v, a) => {
    const families = { sans:'ui-sans-serif, system-ui, sans-serif', serif:'ui-serif, Georgia, serif', mono:'ui-monospace, monospace' };
    if (families[v]) return `font-family: ${families[v]};`;
    if (a) return `font-weight: ${v};`;
    if (v.startsWith('tw-')) return `font-weight: var(--tw-font-${v.slice(3)});`;
    return `font-weight: var(--fw-${v});`;
  },
  tracking: (v, a) => `letter-spacing: ${a ? v : ({ tighter:'-0.05em', tight:'-0.025em', normal:'0', wide:'0.025em', wider:'0.05em', widest:'0.1em' })[v] || v};`,
  leading: (v, a) => `line-height: ${a ? v : ({ none:'1', tight:'1.25', snug:'1.375', normal:'1.5', relaxed:'1.625', loose:'2' })[v] || v};`,
  'line-clamp': (v) => `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: ${v};`,
  decoration: (v, a) => `text-decoration-color: ${resolveColorValue(v, a)};`,
  'decoration-thickness': (v, a) => {
    if (a) return `text-decoration-thickness: ${v};`;
    if (['auto', 'from-font'].includes(v)) return `text-decoration-thickness: ${v};`;
    return `text-decoration-thickness: ${v}px;`;
  },
  'underline-offset': (v, a) => `text-underline-offset: ${a ? v : `${v}px`};`,
  indent: (v, a) => `text-indent: ${a ? v : `var(--s-${v})`};`,

  border: (v, a) => `border-color: ${resolveColorValue(v, a)}; border-style: solid;`,
  'border-t': (v, a) => `border-top-color: ${resolveColorValue(v, a)}; border-top-style: solid;`,
  'border-b': (v, a) => `border-bottom-color: ${resolveColorValue(v, a)}; border-bottom-style: solid;`,
  'border-l': (v, a) => `border-left-color: ${resolveColorValue(v, a)}; border-left-style: solid;`,
  'border-r': (v, a) => `border-right-color: ${resolveColorValue(v, a)}; border-right-style: solid;`,
  'border-x': (v, a) => `border-left-color: ${resolveColorValue(v, a)}; border-right-color: ${resolveColorValue(v, a)}; border-left-style: solid; border-right-style: solid;`,
  'border-y': (v, a) => `border-top-color: ${resolveColorValue(v, a)}; border-bottom-color: ${resolveColorValue(v, a)}; border-top-style: solid; border-bottom-style: solid;`,

  'border-w': (v, a) => `border-width: ${a ? v : `var(--s-${v})`};`,
  'border-t-w': (v, a) => `border-top-width: ${a ? v : `var(--s-${v})`};`,
  'border-b-w': (v, a) => `border-bottom-width: ${a ? v : `var(--s-${v})`};`,
  'border-l-w': (v, a) => `border-left-width: ${a ? v : `var(--s-${v})`};`,
  'border-r-w': (v, a) => `border-right-width: ${a ? v : `var(--s-${v})`};`,
  'border-x-w': (v, a) => `border-left-width: ${a ? v : `var(--s-${v})`}; border-right-width: ${a ? v : `var(--s-${v})`};`,
  'border-y-w': (v, a) => `border-top-width: ${a ? v : `var(--s-${v})`}; border-bottom-width: ${a ? v : `var(--s-${v})`};`,
  'border-style': (v) => `border-style: ${v};`,

  rounded: (v, a) => `border-radius: ${a ? v : `var(--r-${v})`};`,
  'rounded-t': (v, a) => `border-top-left-radius: ${a ? v : `var(--r-${v})`}; border-top-right-radius: ${a ? v : `var(--r-${v})`};`,
  'rounded-b': (v, a) => `border-bottom-left-radius: ${a ? v : `var(--r-${v})`}; border-bottom-right-radius: ${a ? v : `var(--r-${v})`};`,
  'rounded-l': (v, a) => `border-top-left-radius: ${a ? v : `var(--r-${v})`}; border-bottom-left-radius: ${a ? v : `var(--r-${v})`};`,
  'rounded-r': (v, a) => `border-top-right-radius: ${a ? v : `var(--r-${v})`}; border-bottom-right-radius: ${a ? v : `var(--r-${v})`};`,
  'rounded-tl': (v, a) => `border-top-left-radius: ${a ? v : `var(--r-${v})`};`,
  'rounded-tr': (v, a) => `border-top-right-radius: ${a ? v : `var(--r-${v})`};`,
  'rounded-bl': (v, a) => `border-bottom-left-radius: ${a ? v : `var(--r-${v})`};`,
  'rounded-br': (v, a) => `border-bottom-right-radius: ${a ? v : `var(--r-${v})`};`,

  divide: (v, a) => `border-color: ${resolveColorValue(v, a)}; border-style: solid;`,
  'divide-x': (v, a) => {
    if (v === 'reverse') return '--ss-divide-x-reverse: 1;';
    return `border-left-color: ${resolveColorValue(v, a)}; border-right-color: ${resolveColorValue(v, a)}; border-left-style: solid; border-right-style: solid;`;
  },
  'divide-y': (v, a) => {
    if (v === 'reverse') return '--ss-divide-y-reverse: 1;';
    return `border-top-color: ${resolveColorValue(v, a)}; border-bottom-color: ${resolveColorValue(v, a)}; border-top-style: solid; border-bottom-style: solid;`;
  },
  'divide-w': (v, a) => {
    const cv = a ? v : `var(--s-${v})`;
    return `border-top-width: calc(${cv} * (1 - var(--ss-divide-y-reverse))); border-bottom-width: calc(${cv} * var(--ss-divide-y-reverse)); border-left-width: calc(${cv} * (1 - var(--ss-divide-x-reverse))); border-right-width: calc(${cv} * var(--ss-divide-x-reverse));`;
  },
  'divide-x-w': (v, a) => {
    const cv = a ? v : `var(--s-${v})`;
    return `border-right-width: calc(${cv} * var(--ss-divide-x-reverse)); border-left-width: calc(${cv} * (1 - var(--ss-divide-x-reverse)));`;
  },
  'divide-y-w': (v, a) => {
    const cv = a ? v : `var(--s-${v})`;
    return `border-bottom-width: calc(${cv} * var(--ss-divide-y-reverse)); border-top-width: calc(${cv} * (1 - var(--ss-divide-y-reverse)));`;
  },
  'divide-style': (v) => `border-style: ${v};`,

  'outline-w': (v, a) => `outline-width: ${a ? v : `var(--s-${v})`};`,
  outline: (v, a) => {
    if (v === 'none') return 'outline: none;';
    return `outline-color: ${resolveColorValue(v, a)};`;
  },
  'outline-style': (v) => `outline-style: ${v};`,
  'outline-offset': (v, a) => `outline-offset: ${a ? v : `var(--s-${v})`};`,

  'ring-w': (v, a) => `--ss-ring-width: ${a ? v : `var(--s-${v})`};`,
  'ring-color': (v, a) => `--ss-ring-color: ${resolveColorValue(v, a)};`,
  'ring-offset': (v, a) => `--ss-ring-offset-width: ${a ? v : `var(--s-${v})`};`,
  'ring-offset-color': (v, a) => `--ss-ring-offset-color: ${resolveColorValue(v, a)};`,
  ring: (v, a) => {
    if (v === 'none') return 'box-shadow: 0 0 #0000;';
    const presets = { thin:'1px', regular:'2px', small:'4px', medium:'6px', big:'8px' };
    const w = a ? v : (presets[v] || (parseInt(v) ? `${v}px` : `var(--s-${v})`));
    return `--ss-ring-width: ${w}; box-shadow: var(--ring-inset) 0 0 0 calc(var(--ss-ring-width) + var(--ss-ring-offset-width, 0px)) var(--ss-ring-color);`;
  },
  'ring-inset': () => '--ring-inset: inset;',

  shadow: (v) => `box-shadow: var(--shadow-${v});`,

  opacity: (v, a) => {
    if (a) return `opacity: ${v};`;
    const n = parseInt(v, 10);
    if (!isNaN(n) && n >= 0 && n <= 100) return `opacity: ${n / 100};`;
    return `opacity: ${v};`;
  },
  'mix-blend': (v) => `mix-blend-mode: ${v};`,

  'mask-clip': (v) => `mask-clip: ${({ border:'border-box', padding:'padding-box', content:'content-box', text:'text' })[v] || v};`,
  'mask-composite': (v) => `mask-composite: ${v};`,
  'mask-image': (v, a) => `mask-image: ${a ? `url(${sanitizeArbitraryValue(v)})` : `url(${v})`};`,
  'mask-mode': (v) => `mask-mode: ${v};`,
  'mask-origin': (v) => `mask-origin: ${({ border:'border-box', padding:'padding-box', content:'content-box' })[v] || v};`,
  'mask-position': (v, a) => `mask-position: ${a ? v.replace(/_/g, ' ') : ({ center:'center', top:'top', bottom:'bottom', left:'left', right:'right', 'top-left':'top left', 'top-right':'top right', 'bottom-left':'bottom left', 'bottom-right':'bottom right' })[v] || v};`,
  'mask-repeat': (v) => `mask-repeat: ${({ repeat:'repeat', 'no-repeat':'no-repeat', 'repeat-x':'repeat-x', 'repeat-y':'repeat-y', round:'round', space:'space' })[v] || v};`,
  'mask-size': (v, a) => `mask-size: ${a ? v.replace(/_/g, ' ') : ({ auto:'auto', cover:'cover', contain:'contain' })[v] || v};`,
  'mask-type': (v) => `mask-type: ${v};`,

  content: (v) => `content: "${sanitizeArbitraryValue(v).replace(/"/g, '\\"')}";`,

  blur: (v, a, cfg) => {
    if (a) return `filter: blur(${v});`;
    const scale = getScale(cfg, 'blur', DEFAULT_BLUR);
    const cv = scale[v] || scale.medium;
    return cv === '0' ? 'filter: none;' : `filter: blur(${cv});`;
  },
  brightness: (v, a, cfg) => {
    const scale = getScale(cfg, 'brightness', DEFAULT_BRIGHTNESS);
    return `filter: brightness(${a ? v : (scale[v] || 1)});`;
  },
  contrast: (v, a, cfg) => {
    const scale = getScale(cfg, 'contrast', DEFAULT_CONTRAST);
    return `filter: contrast(${a ? v : (scale[v] || 1)});`;
  },
  'drop-shadow': (v, a, cfg) => {
    const scale = getScale(cfg, 'dropShadow', DEFAULT_DROP_SHADOW);
    return `filter: drop-shadow(${a ? v.replace(/_/g, ' ') : (scale[v] || v)});`;
  },
  grayscale: (v, a, cfg) => {
    const scale = getScale(cfg, 'grayscale', DEFAULT_GRAYSCALE);
    return `filter: grayscale(${a ? v : (scale[v] || '100%')});`;
  },
  'hue-rotate': (v, a) => `filter: hue-rotate(${a ? v : `${v}deg`});`,
  invert: (v, a, cfg) => {
    const scale = getScale(cfg, 'invert', DEFAULT_INVERT);
    return `filter: invert(${a ? v : (scale[v] || '100%')});`;
  },
  saturate: (v, a, cfg) => {
    const scale = getScale(cfg, 'saturate', DEFAULT_SATURATE);
    return `filter: saturate(${a ? v : (scale[v] || 1)});`;
  },
  sepia: (v, a, cfg) => {
    const scale = getScale(cfg, 'sepia', DEFAULT_SEPIA);
    return `filter: sepia(${a ? v : (scale[v] || '100%')});`;
  },

  'backdrop-blur': (v, a, cfg) => {
    const scale = getScale(cfg, 'blur', DEFAULT_BLUR);
    return `backdrop-filter: blur(${a ? v : (scale[v] || scale.medium)});`;
  },
  'backdrop-brightness': (v, a, cfg) => {
    const scale = getScale(cfg, 'brightness', DEFAULT_BRIGHTNESS);
    return `backdrop-filter: brightness(${a ? v : (scale[v] || 1)});`;
  },
  'backdrop-contrast': (v, a, cfg) => {
    const scale = getScale(cfg, 'contrast', DEFAULT_CONTRAST);
    return `backdrop-filter: contrast(${a ? v : (scale[v] || 1)});`;
  },
  'backdrop-grayscale': (v, a, cfg) => {
    const scale = getScale(cfg, 'grayscale', DEFAULT_GRAYSCALE);
    return `backdrop-filter: grayscale(${a ? v : (scale[v] || '100%')});`;
  },
  'backdrop-hue-rotate': (v, a) => `backdrop-filter: hue-rotate(${a ? v : `${v}deg`});`,
  'backdrop-invert': (v, a, cfg) => {
    const scale = getScale(cfg, 'invert', DEFAULT_INVERT);
    return `backdrop-filter: invert(${a ? v : (scale[v] || '100%')});`;
  },
  'backdrop-opacity': (v, a, cfg) => {
    const scale = getScale(cfg, 'backdropOpacity', DEFAULT_BACKDROP_OPACITY);
    return `backdrop-filter: opacity(${a ? v : (scale[v] || 1)});`;
  },
  'backdrop-saturate': (v, a, cfg) => {
    const scale = getScale(cfg, 'saturate', DEFAULT_SATURATE);
    return `backdrop-filter: saturate(${a ? v : (scale[v] || 1)});`;
  },
  'backdrop-sepia': (v, a, cfg) => {
    const scale = getScale(cfg, 'sepia', DEFAULT_SEPIA);
    return `backdrop-filter: sepia(${a ? v : (scale[v] || '100%')});`;
  },

  transition: (v, cfg) => {
    const scale = getScale(cfg, 'transitionProperty', DEFAULT_TRANSITION_PROPERTY);
    return `transition-property: ${scale[v] || scale.DEFAULT}; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;`;
  },
  'transition-none': () => 'transition-property: none;',
  duration: (v, a) => {
    const scale = { instant:'75ms', quick:'100ms', fast:'150ms', normal:'200ms', slow:'300ms', slower:'500ms', lazy:'700ms' };
    return `transition-duration: ${a ? v : (scale[v] || scale.normal)};`;
  },
  ease: (v, a) => `transition-timing-function: ${a ? v : ({ linear:'linear', in:'cubic-bezier(0.4, 0, 1, 1)', out:'cubic-bezier(0, 0, 0.2, 1)', 'in-out':'cubic-bezier(0.4, 0, 0.2, 1)' })[v] || v};`,
  delay: (v, a) => {
    const scale = { instant:'75ms', quick:'100ms', fast:'150ms', normal:'200ms', slow:'300ms', slower:'500ms', lazy:'700ms' };
    return `transition-delay: ${a ? v : (scale[v] || scale.normal)};`;
  },
  'transition-behavior': (v) => `transition-behavior: ${v};`,

  animate: (v, a, cfg) => {
    const scale = getScale(cfg, 'animation', DEFAULT_ANIMATION);
    return `animation: ${a ? v.replace(/_/g, ' ') : (scale[v] || v)};`;
  },
  'animation-duration': (v, a, cfg) => {
    const scale = getScale(cfg, 'animationDuration', DEFAULT_ANIMATION_DURATION);
    return `animation-duration: ${a ? v : (scale[v] || scale.normal)};`;
  },
  'animation-delay': (v, a, cfg) => {
    const scale = getScale(cfg, 'animationDelay', DEFAULT_ANIMATION_DELAY);
    return `animation-delay: ${a ? v : (scale[v] || scale.normal)};`;
  },
  'animation-iteration': (v) => `animation-iteration-count: ${v};`,
  'animation-direction': (v) => `animation-direction: ${v};`,
  'animation-fill': (v) => `animation-fill-mode: ${v};`,
  'animation-play': (v) => `animation-play-state: ${v};`,

  scale: (v, a) => `transform: scale(${a ? v : (parseInt(v) / 100)});`,
  'scale-x': (v, a) => `transform: scaleX(${a ? v : (parseInt(v) / 100)});`,
  'scale-y': (v, a) => `transform: scaleY(${a ? v : (parseInt(v) / 100)});`,
  rotate: (v, a) => `transform: rotate(${a ? v : `${v}deg`});`,
  'translate-x': (v, a) => {
    const presets = { full:'100%', half:'50%', third:'33.333333%', 'third-2x':'66.666667%', quarter:'25%', 'quarter-2x':'50%', 'quarter-3x':'75%', '1/2':'50%', '1/3':'33.333333%', '2/3':'66.666667%', '1/4':'25%', '3/4':'75%', '-full':'-100%', '-half':'-50%', '-third':'-33.333333%', '-third-2x':'-66.666667%', '-quarter':'-25%', '-quarter-2x':'-50%', '-quarter-3x':'-75%', '-1/2':'-50%', '-1/3':'-33.333333%', '-2/3':'-66.666667%', '-1/4':'-25%', '-3/4':'-75%' };
    return `transform: translateX(${a ? v : (presets[v] || `var(--s-${v})`)});`;
  },
  'translate-y': (v, a) => {
    const presets = { full:'100%', half:'50%', third:'33.333333%', 'third-2x':'66.666667%', quarter:'25%', 'quarter-2x':'50%', 'quarter-3x':'75%', '1/2':'50%', '1/3':'33.333333%', '2/3':'66.666667%', '1/4':'25%', '3/4':'75%', '-full':'-100%', '-half':'-50%', '-third':'-33.333333%', '-third-2x':'-66.666667%', '-quarter':'-25%', '-quarter-2x':'-50%', '-quarter-3x':'-75%', '-1/2':'-50%', '-1/3':'-33.333333%', '-2/3':'-66.666667%', '-1/4':'-25%', '-3/4':'-75%' };
    return `transform: translateY(${a ? v : (presets[v] || `var(--s-${v})`)});`;
  },
  'skew-x': (v, a) => `transform: skewX(${a ? v : `${v}deg`});`,
  'skew-y': (v, a) => `transform: skewY(${a ? v : `${v}deg`});`,
  '-skew-x': (v, a) => `transform: skewX(${a ? `-${v}` : `-${v}deg`});`,
  '-skew-y': (v, a) => `transform: skewY(${a ? `-${v}` : `-${v}deg`});`,
  'rotate-x': (v, a) => `transform: rotateX(${a ? v : `${v}deg`});`,
  'rotate-y': (v, a) => `transform: rotateY(${a ? v : `${v}deg`});`,
  'rotate-z': (v, a) => `transform: rotateZ(${a ? v : `${v}deg`});`,
  'translate-z': (v, a) => `transform: translateZ(${a ? v : ({ near:'50px', far:'-50px', 0:'0' })[v] || `var(--s-${v})`});`,

  origin: (v, a) => {
    const map = { center:'center', top:'top', 'top-right':'top right', right:'right', 'bottom-right':'bottom right', bottom:'bottom', 'bottom-left':'bottom left', left:'left', 'top-left':'top left' };
    return `transform-origin: ${a ? v.replace(/_/g, ' ') : (map[v] || v)};`;
  },
  'transform-style': (v) => `transform-style: ${v};`,
  backface: (v) => `backface-visibility: ${v};`,
  perspective: (v, a, cfg) => {
    const scale = getScale(cfg, 'perspective', DEFAULT_PERSPECTIVE);
    return `perspective: ${a ? v : (scale[v] || scale.normal)};`;
  },
  'perspective-origin': (v, a) => {
    const map = { center:'center', top:'top', 'top-right':'top right', right:'right', 'bottom-right':'bottom right', bottom:'bottom', 'bottom-left':'bottom left', left:'left', 'top-left':'top left' };
    return `perspective-origin: ${a ? v.replace(/_/g, ' ') : (map[v] || v)};`;
  },

  accent: (v, a) => `accent-color: ${resolveColorValue(v, a)};`,
  appearance: (v) => `appearance: ${v};`,
  caret: (v, a) => `caret-color: ${resolveColorValue(v, a)};`,
  'color-scheme': (v) => `color-scheme: ${v};`,
  cursor: (v) => `cursor: ${v};`,
  'field-sizing': (v) => `field-sizing: ${v};`,
  'pointer-events': (v) => `pointer-events: ${v};`,
  resize: (v) => `resize: ${({ none:'none', both:'both', x:'horizontal', y:'vertical' })[v] || v};`,
  scroll: (v) => `scroll-behavior: ${v};`,

  'scroll-m': (v, a) => `scroll-margin: ${a ? v : `var(--s-${v})`};`,
  'scroll-m-t': (v, a) => `scroll-margin-top: ${a ? v : `var(--s-${v})`};`,
  'scroll-m-r': (v, a) => `scroll-margin-right: ${a ? v : `var(--s-${v})`};`,
  'scroll-m-b': (v, a) => `scroll-margin-bottom: ${a ? v : `var(--s-${v})`};`,
  'scroll-m-l': (v, a) => `scroll-margin-left: ${a ? v : `var(--s-${v})`};`,
  'scroll-m-x': (v, a) => `scroll-margin-left: ${a ? v : `var(--s-${v})`}; scroll-margin-right: ${a ? v : `var(--s-${v})`};`,
  'scroll-m-y': (v, a) => `scroll-margin-top: ${a ? v : `var(--s-${v})`}; scroll-margin-bottom: ${a ? v : `var(--s-${v})`};`,

  'scroll-p': (v, a) => `scroll-padding: ${a ? v : `var(--s-${v})`};`,
  'scroll-p-t': (v, a) => `scroll-padding-top: ${a ? v : `var(--s-${v})`};`,
  'scroll-p-r': (v, a) => `scroll-padding-right: ${a ? v : `var(--s-${v})`};`,
  'scroll-p-b': (v, a) => `scroll-padding-bottom: ${a ? v : `var(--s-${v})`};`,
  'scroll-p-l': (v, a) => `scroll-padding-left: ${a ? v : `var(--s-${v})`};`,
  'scroll-p-x': (v, a) => `scroll-padding-left: ${a ? v : `var(--s-${v})`}; scroll-padding-right: ${a ? v : `var(--s-${v})`};`,
  'scroll-p-y': (v, a) => `scroll-padding-top: ${a ? v : `var(--s-${v})`}; scroll-padding-bottom: ${a ? v : `var(--s-${v})`};`,

  'snap-align': (v) => `scroll-snap-align: ${v};`,
  'snap-stop': (v) => `scroll-snap-stop: ${v};`,
  snap: (v) => `scroll-snap-type: ${({ none:'none', x:'x mandatory', 'x-proximity':'x proximity', y:'y mandatory', 'y-proximity':'y proximity', both:'both mandatory', 'both-proximity':'both proximity' })[v] || v};`,

  touch: (v) => `touch-action: ${({ auto:'auto', none:'none', 'pan-x':'pan-x', 'pan-y':'pan-y', 'pan-left':'pan-left', 'pan-right':'pan-right', 'pan-up':'pan-up', 'pan-down':'pan-down', 'pinch-zoom':'pinch-zoom', manipulation:'manipulation' })[v] || v};`,
  select: (v) => `user-select: ${v};`,
  'will-change': (v) => `will-change: ${({ auto:'auto', scroll:'scroll-position', contents:'contents', transform:'transform', opacity:'opacity' })[v] || v};`,

  fill: (v, a) => {
    if (v === 'none') return 'fill: none;';
    if (v === 'current') return 'fill: currentColor;';
    return `fill: ${resolveColorValue(v, a)};`;
  },
  stroke: (v, a) => {
    if (v === 'none') return 'stroke: none;';
    if (v === 'current') return 'stroke: currentColor;';
    return `stroke: ${resolveColorValue(v, a)};`;
  },
  'stroke-w': (v, a) => `stroke-width: ${a ? v : `${v}px`};`,

  'forced-colors': (v) => `forced-color-adjust: ${v};`
};

export function getVisualRule(property) {
  return rules[property] || null;
}

export default { getVisualRule };
