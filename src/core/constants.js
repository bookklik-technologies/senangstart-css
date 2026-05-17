/**
 * SenangStart CSS - Core Constants
 * Shared constants used by both JIT runtime and build-time compiler
 *
 * NOTE: DEFAULT_THEME is a lightweight theme used by the CDN/JIT runtime.
 * The canonical, full-featured theme is in src/config/defaults.js (defaultConfig.theme).
 * These differ intentionally: DEFAULT_THEME uses px-based compact font sizes
 * for smaller bundle size, while defaultConfig.theme uses rem-based full-scale
 * font sizes. The Tailwind compatibility scales (TW_SPACING, etc.) are the
 * single source of truth for tw-* prefixed values used by both.
 *
 * Colors are now sourced from src/config/colors.js (COLOR_PALETTE) to avoid duplication.
 */

import { COLOR_PALETTE } from '../config/colors.js';

// Configurable safety limits
export const LIMITS = {
  MAX_PROPERTY_LENGTH: 100,
  MAX_VALUE_LENGTH: 500,
  MAX_TOKEN_RAW_LENGTH: 200,
  MAX_ATTRIBUTE_VALUE_LENGTH: 10000
};

// Breakpoint prefixes
export const BREAKPOINTS = ['mob', 'tab', 'lap', 'desk', 'tw-sm', 'tw-md', 'tw-lg', 'tw-xl', 'tw-2xl'];

// State prefixes
export const STATES = ['hover', 'focus', 'focus-visible', 'focus-within', 'active', 'checked', 'disabled', 'dark', 'expanded', 'selected', 'required', 'optional', 'valid', 'invalid', 'placeholder'];

// Layout keywords (no colon syntax)
export const LAYOUT_KEYWORDS = [
  'flex', 'grid', 'block', 'inline', 'inline-block', 'hidden',
  'row', 'col', 'row-reverse', 'col-reverse',
  'center', 'start', 'end', 'between', 'around', 'evenly',
  'wrap', 'nowrap',
  'absolute', 'relative', 'fixed', 'sticky',
  // State Capabilities
  'hoverable', 'focusable', 'pressable', 'expandable', 'selectable', 'disabled'
];

// Layout CSS mappings
export const LAYOUT_MAP = {
  // Display
  'flex': 'display: flex;',
  'grid': 'display: grid;',
  'inline-flex': 'display: inline-flex;',
  'inline-grid': 'display: inline-grid;',
  'inline-block': 'display: inline-block;',
  'table': 'display: table;',
  'table-row': 'display: table-row;',
  'table-cell': 'display: table-cell;',
  'list-item': 'display: list-item;',
  'contents': 'display: contents;',
  'block': 'display: block;',
  'inline': 'display: inline;',
  'hidden': 'display: none;',
  
  // Flex Direction
  'row': 'flex-direction: row;',
  'col': 'flex-direction: column;',
  'row-reverse': 'flex-direction: row-reverse;',
  'col-reverse': 'flex-direction: column-reverse;',
  
  // Flex Wrap
  'wrap': 'flex-wrap: wrap;',
  'nowrap': 'flex-wrap: nowrap;',
  'wrap-reverse': 'flex-wrap: wrap-reverse;',
  
  // Flex Item
  'grow': 'flex-grow: 1;',
  'grow-0': 'flex-grow: 0;',
  'shrink': 'flex-shrink: 1;',
  'shrink-0': 'flex-shrink: 0;',
  
  // Grid Auto Flow
  'grid-flow-row': 'grid-auto-flow: row;',
  'grid-flow-col': 'grid-auto-flow: column;',
  'grid-flow-dense': 'grid-auto-flow: dense;',
  'grid-flow-row-dense': 'grid-auto-flow: row dense;',
  'grid-flow-col-dense': 'grid-auto-flow: column dense;',
  
  // Shorthand Alignment (backwards compat - simple keywords)
  'center': 'justify-content: center; align-items: center;',
  'start': 'justify-content: flex-start; align-items: flex-start;',
  'end': 'justify-content: flex-end; align-items: flex-end;',
  'between': 'justify-content: space-between;',
  'around': 'justify-content: space-around;',
  'evenly': 'justify-content: space-evenly;',
  
  // Position
  'absolute': 'position: absolute;',
  'relative': 'position: relative;',
  'fixed': 'position: fixed;',
  'sticky': 'position: sticky;',
  'static': 'position: static;',
  
  // Visibility
  'visible': 'visibility: visible;',
  'invisible': 'visibility: hidden;',
  
  // Isolation
  'isolate': 'isolation: isolate;',
  'isolate-auto': 'isolation: auto;',
  
  // Box Sizing
  'box-border': 'box-sizing: border-box;',
  'box-content': 'box-sizing: content-box;',
  
  // Float
  'float-left': 'float: left;',
  'float-right': 'float: right;',
  'float-none': 'float: none;',
  
  // Clear
  'clear-left': 'clear: left;',
  'clear-right': 'clear: right;',
  'clear-both': 'clear: both;',
  'clear-none': 'clear: none;',
  
  // Table Border Collapse
  'collapse': 'border-collapse: collapse;',
  'separate': 'border-collapse: separate;',
  
  // Table Layout
  'table-auto': 'table-layout: auto;',
  'table-fixed': 'table-layout: fixed;',
  
  // Caption Side
  'caption-top': 'caption-side: top;',
  'caption-bottom': 'caption-side: bottom;',
  
  // Container
  'container': 'width: 100%; margin-left: auto; margin-right: auto;'
};

// Typography keyword CSS mappings
export const TYPOGRAPHY_KEYWORDS = {
  // Font Style
  'italic': 'font-style: italic;',
  'not-italic': 'font-style: normal;',
  
  // Font Stretch
  'font-stretch-condensed': 'font-stretch: condensed;',
  'font-stretch-expanded': 'font-stretch: expanded;',
  'font-stretch-normal': 'font-stretch: normal;',
  
  // Font Smoothing
  'antialiased': '-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;',
  'subpixel-antialiased': '-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;',
  
  // Font Variant Numeric
  'normal-nums': 'font-variant-numeric: normal;',
  'ordinal': 'font-variant-numeric: ordinal;',
  'slashed-zero': 'font-variant-numeric: slashed-zero;',
  'lining-nums': 'font-variant-numeric: lining-nums;',
  'oldstyle-nums': 'font-variant-numeric: oldstyle-nums;',
  'proportional-nums': 'font-variant-numeric: proportional-nums;',
  'tabular-nums': 'font-variant-numeric: tabular-nums;',
  
  // Text Transform
  'uppercase': 'text-transform: uppercase;',
  'lowercase': 'text-transform: lowercase;',
  'capitalize': 'text-transform: capitalize;',
  'normal-case': 'text-transform: none;',
  
  // Text Decoration Line
  'underline': 'text-decoration-line: underline;',
  'overline': 'text-decoration-line: overline;',
  'line-through': 'text-decoration-line: line-through;',
  'no-underline': 'text-decoration-line: none;',
  
  // Text Decoration Style
  'decoration-solid': 'text-decoration-style: solid;',
  'decoration-double': 'text-decoration-style: double;',
  'decoration-dotted': 'text-decoration-style: dotted;',
  'decoration-dashed': 'text-decoration-style: dashed;',
  'decoration-wavy': 'text-decoration-style: wavy;',
  
  // Text Overflow
  'truncate': 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;',
  'text-ellipsis': 'text-overflow: ellipsis;',
  'text-clip': 'text-overflow: clip;',
  
  // Text Wrap
  'text-wrap': 'text-wrap: wrap;',
  'text-nowrap': 'text-wrap: nowrap;',
  'text-balance': 'text-wrap: balance;',
  'text-pretty': 'text-wrap: pretty;',
  
  // Whitespace
  'whitespace-normal': 'white-space: normal;',
  'whitespace-nowrap': 'white-space: nowrap;',
  'whitespace-pre': 'white-space: pre;',
  'whitespace-pre-line': 'white-space: pre-line;',
  'whitespace-pre-wrap': 'white-space: pre-wrap;',
  'whitespace-break-spaces': 'white-space: break-spaces;',
  
  // Word Break
  'break-normal': 'overflow-wrap: normal; word-break: normal;',
  'break-words': 'overflow-wrap: break-word;',
  'break-all': 'word-break: break-all;',
  'break-keep': 'word-break: keep-all;',
  
  // Hyphens
  'hyphens-none': 'hyphens: none;',
  'hyphens-manual': 'hyphens: manual;',
  'hyphens-auto': 'hyphens: auto;',
  
  // Vertical Align
  'align-baseline': 'vertical-align: baseline;',
  'align-top': 'vertical-align: top;',
  'align-middle': 'vertical-align: middle;',
  'align-bottom': 'vertical-align: bottom;',
  'align-text-top': 'vertical-align: text-top;',
  'align-text-bottom': 'vertical-align: text-bottom;',
  'align-sub': 'vertical-align: sub;',
  'align-super': 'vertical-align: super;',
  
  // List Style Type
  'list-none': 'list-style-type: none;',
  'list-disc': 'list-style-type: disc;',
  'list-decimal': 'list-style-type: decimal;',
  'list-square': 'list-style-type: square;',
  
  // List Style Position
  'list-inside': 'list-style-position: inside;',
  'list-outside': 'list-style-position: outside;'
};

// Default theme configuration
export const DEFAULT_THEME = {
  spacing: {
    'none':      '0px',
    'thin':      '1px',
    'regular':   '2px',
    'thick':     '3px',
    'tiny':      '4px',
    'tiny-2x':   '6px',
    'small':     '8px',
    'small-2x':  '10px',
    'small-3x':  '12px',
    'small-4x':  '14px',
    'medium':    '16px',
    'medium-2x': '20px',
    'medium-3x': '24px',
    'medium-4x': '28px',
    'large':     '32px',
    'large-2x':  '36px',
    'large-3x':  '40px',
    'large-4x':  '44px',
    'big':       '48px',
    'big-2x':    '56px',
    'big-3x':    '64px',
    'big-4x':    '80px',
    'giant':     '96px',
    'giant-2x':  '112px',
    'giant-3x':  '128px',
    'giant-4x':  '144px',
    'vast':      '160px',
    'vast-2x':   '176px',
    'vast-3x':   '192px',
    'vast-4x':   '208px',
    'vast-5x':   '224px',
    'vast-6x':   '240px',
    'vast-7x':   '256px',
    'vast-8x':   '288px',
    'vast-9x':   '320px',
    'vast-10x':  '384px'
  },
  radius: {
    'none':   '0px',
    'small':  '4px',
    'medium': '8px',
    'big':    '16px',
    'round':  '9999px'
  },
  shadow: {
    'none':   'none',
    'small':  '0 1px 2px rgba(0,0,0,0.05)',
    'medium': '0 4px 6px rgba(0,0,0,0.1)',
    'big':    '0 10px 15px rgba(0,0,0,0.15)',
    'giant':  '0 25px 50px rgba(0,0,0,0.25)'
  },
  fontSize: {
    'tiny':   '12px',
    'small':  '14px',
    'medium': '16px',
    'big':    '20px',
    'giant':  '32px',
    'vast':   '48px'
  },
  fontWeight: {
    'normal': '400',
    'medium': '500',
    'bold': '700'
  },
  fontSizeLineHeight: {
    'tiny': '1rem',
    'small': '1.25rem',
    'medium': '1.5rem',
    'big': '1.75rem',
    'giant': '1',
    'vast': '1'
  },
  screens: {
    'mob':  '480px',
    'tab':  '768px',
    'lap':  '1024px',
    'desk': '1280px',
    // Tailwind compatibility
    'tw-sm': '640px',
    'tw-md': '768px',
    'tw-lg': '1024px',
    'tw-xl': '1280px',
    'tw-2xl': '1536px'
  },
  colors: COLOR_PALETTE,
  zIndex: {
    'base':   '0',
    'low':    '10',
    'mid':    '50',
    'high':   '100',
    'top':    '9999'
  }
};

// Tailwind spacing scale
// Note: Dotted keys like '0.5' are stored with hyphen equivalents ('0-5')
// to avoid CSS variable escape issues (--tw-0\.5 → --tw-0-5)
export const TW_SPACING = {
  '0': '0px', 'px': '1px',
  '0-5': '0.125rem', '1': '0.25rem', '1-5': '0.375rem', '2': '0.5rem', '2-5': '0.625rem',
  '3': '0.75rem', '3-5': '0.875rem', '4': '1rem', '5': '1.25rem', '6': '1.5rem',
  '7': '1.75rem', '8': '2rem', '9': '2.25rem', '10': '2.5rem', '11': '2.75rem', '12': '3rem',
  '14': '3.5rem', '16': '4rem', '20': '5rem', '24': '6rem', '28': '7rem', '32': '8rem',
  '36': '9rem', '40': '10rem', '44': '11rem', '48': '12rem', '52': '13rem', '56': '14rem',
  '60': '15rem', '64': '16rem', '72': '18rem', '80': '20rem', '96': '24rem'
};

// Tailwind border radius scale
export const TW_RADIUS = {
  'none': '0px', 'sm': '0.125rem', 'DEFAULT': '0.25rem', 'md': '0.375rem',
  'lg': '0.5rem', 'xl': '0.75rem', '2xl': '1rem', '3xl': '1.5rem', 'full': '9999px'
};

// Tailwind shadow scale
export const TW_SHADOW = {
  'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  'none': 'none'
};

// Tailwind font size scale
export const TW_FONT_SIZE = {
  'xs': '0.75rem', 'sm': '0.875rem', 'base': '1rem', 'lg': '1.125rem', 'xl': '1.25rem',
  '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem', '5xl': '3rem',
  '6xl': '3.75rem', '7xl': '4.5rem', '8xl': '6rem', '9xl': '8rem'
};

// Tailwind line-height scale (paired with font sizes)
export const TW_LEADING = {
  'xs': '1rem', 'sm': '1.25rem', 'base': '1.5rem', 'lg': '1.75rem', 'xl': '1.75rem',
  '2xl': '2rem', '3xl': '2.25rem', '4xl': '2.5rem',
  '5xl': '1', '6xl': '1', '7xl': '1', '8xl': '1', '9xl': '1'
};

// Tailwind font weight scale
export const TW_FONT_WEIGHT = {
  'thin': '100',
  'extralight': '200',
  'light': '300',
  'normal': '400',
  'medium': '500',
  'semibold': '600',
  'bold': '700',
  'extrabold': '800',
  'black': '900'
};

// CSS color keywords that should be passed through directly without var() wrapping
export const CSS_COLOR_KEYWORDS = ['transparent', 'currentColor', 'inherit', 'initial', 'unset'];

export default {
  BREAKPOINTS,
  STATES,
  LAYOUT_KEYWORDS,
  LAYOUT_MAP,
  TYPOGRAPHY_KEYWORDS,
  DEFAULT_THEME,
  TW_SPACING,
  TW_RADIUS,
  TW_SHADOW,
  TW_FONT_SIZE,
  TW_LEADING,
  TW_FONT_WEIGHT,
  LIMITS,
  CSS_COLOR_KEYWORDS
};
