/**
 * SenangStart CSS - Core Constants
 * Shared constants used by both JIT runtime and build-time compiler
 */

// Breakpoint prefixes
export const BREAKPOINTS = ['mob', 'tab', 'lap', 'desk', 'tw-sm', 'tw-md', 'tw-lg', 'tw-xl', 'tw-2xl'];

// State prefixes
export const STATES = ['hover', 'focus', 'focus-visible', 'active', 'disabled', 'dark'];

// Layout keywords (no colon syntax)
export const LAYOUT_KEYWORDS = [
  'flex', 'grid', 'block', 'inline', 'hidden',
  'row', 'col', 'row-reverse', 'col-reverse',
  'center', 'start', 'end', 'between', 'around', 'evenly',
  'wrap', 'nowrap',
  'absolute', 'relative', 'fixed', 'sticky'
];

// Layout CSS mappings
export const LAYOUT_MAP = {
  // Display
  'flex': 'display: flex;',
  'grid': 'display: grid;',
  'inline-flex': 'display: inline-flex;',
  'inline-grid': 'display: inline-grid;',
  'block': 'display: block;',
  'inline': 'display: inline-block;',
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
  'border-collapse': 'border-collapse: collapse;',
  'border-separate': 'border-collapse: separate;',
  
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
    'bold':   '700'
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
  colors: {
    // Base colors
    'white':     '#FFFFFF',
    'black':     '#000000',
    
    // Brand/Semantic colors
    'grey':      '#6B7280',
    'dark':      '#3E4A5D',
    'light':     '#DBEAFE',
    'primary':   '#2563EB',
    'secondary': '#DBEAFE',
    'success':   '#10B981',
    'warning':   '#F59E0B',
    'danger':    '#EF4444',

    // Red
    'red-50': '#FEF2F2', 'red-100': '#FEE2E2', 'red-200': '#FECACA', 'red-300': '#FCA5A5', 'red-400': '#F87171',
    'red-500': '#EF4444', 'red-600': '#DC2626', 'red-700': '#B91C1C', 'red-800': '#991B1B', 'red-900': '#7F1D1D', 'red-950': '#450A0A',

    // Orange
    'orange-50': '#FFF7ED', 'orange-100': '#FFEDD5', 'orange-200': '#FED7AA', 'orange-300': '#FDBA74', 'orange-400': '#FB923C',
    'orange-500': '#F97316', 'orange-600': '#EA580C', 'orange-700': '#C2410C', 'orange-800': '#9A3412', 'orange-900': '#7C2D12', 'orange-950': '#431407',

    // Amber
    'amber-50': '#FFFBEB', 'amber-100': '#FEF3C7', 'amber-200': '#FDE68A', 'amber-300': '#FCD34D', 'amber-400': '#FBBF24',
    'amber-500': '#F59E0B', 'amber-600': '#D97706', 'amber-700': '#B45309', 'amber-800': '#92400E', 'amber-900': '#78350F', 'amber-950': '#451A03',

    // Yellow
    'yellow-50': '#FEFCE8', 'yellow-100': '#FEF9C3', 'yellow-200': '#FEF08A', 'yellow-300': '#FDE047', 'yellow-400': '#FACC15',
    'yellow-500': '#EAB308', 'yellow-600': '#CA8A04', 'yellow-700': '#A16207', 'yellow-800': '#854D0E', 'yellow-900': '#713F12', 'yellow-950': '#422006',

    // Lime
    'lime-50': '#F7FEE7', 'lime-100': '#ECFCCB', 'lime-200': '#D9F99D', 'lime-300': '#BEF264', 'lime-400': '#A3E635',
    'lime-500': '#84CC16', 'lime-600': '#65A30D', 'lime-700': '#4D7C0F', 'lime-800': '#3F6212', 'lime-900': '#365314', 'lime-950': '#1A2E05',

    // Green
    'green-50': '#F0FDF4', 'green-100': '#DCFCE7', 'green-200': '#BBF7D0', 'green-300': '#86EFAC', 'green-400': '#4ADE80',
    'green-500': '#22C55E', 'green-600': '#16A34A', 'green-700': '#15803D', 'green-800': '#166534', 'green-900': '#14532D', 'green-950': '#052E16',

    // Emerald
    'emerald-50': '#ECFDF5', 'emerald-100': '#D1FAE5', 'emerald-200': '#A7F3D0', 'emerald-300': '#6EE7B7', 'emerald-400': '#34D399',
    'emerald-500': '#10B981', 'emerald-600': '#059669', 'emerald-700': '#047857', 'emerald-800': '#065F46', 'emerald-900': '#064E3B', 'emerald-950': '#022C22',

    // Teal
    'teal-50': '#F0FDFA', 'teal-100': '#CCFBF1', 'teal-200': '#99F6E4', 'teal-300': '#5EEAD4', 'teal-400': '#2DD4BF',
    'teal-500': '#14B8A6', 'teal-600': '#0D9488', 'teal-700': '#0F766E', 'teal-800': '#115E59', 'teal-900': '#134E4A', 'teal-950': '#042F2E',

    // Cyan
    'cyan-50': '#ECFEFF', 'cyan-100': '#CFFAFE', 'cyan-200': '#A5F3FC', 'cyan-300': '#67E8F9', 'cyan-400': '#22D3EE',
    'cyan-500': '#06B6D4', 'cyan-600': '#0891B2', 'cyan-700': '#0E7490', 'cyan-800': '#155E75', 'cyan-900': '#164E63', 'cyan-950': '#083344',

    // Sky
    'sky-50': '#F0F9FF', 'sky-100': '#E0F2FE', 'sky-200': '#BAE6FD', 'sky-300': '#7DD3FC', 'sky-400': '#38BDF8',
    'sky-500': '#0EA5E9', 'sky-600': '#0284C7', 'sky-700': '#0369A1', 'sky-800': '#075985', 'sky-900': '#0C4A6E', 'sky-950': '#082F49',

    // Blue
    'blue-50': '#EFF6FF', 'blue-100': '#DBEAFE', 'blue-200': '#BFDBFE', 'blue-300': '#93C5FD', 'blue-400': '#60A5FA',
    'blue-500': '#3B82F6', 'blue-600': '#2563EB', 'blue-700': '#1D4ED8', 'blue-800': '#1E40AF', 'blue-900': '#1E3A8A', 'blue-950': '#172554',

    // Indigo
    'indigo-50': '#EEF2FF', 'indigo-100': '#E0E7FF', 'indigo-200': '#C7D2FE', 'indigo-300': '#A5B4FC', 'indigo-400': '#818CF8',
    'indigo-500': '#6366F1', 'indigo-600': '#4F46E5', 'indigo-700': '#4338CA', 'indigo-800': '#3730A3', 'indigo-900': '#312E81', 'indigo-950': '#1E1B4B',

    // Violet
    'violet-50': '#F5F3FF', 'violet-100': '#EDE9FE', 'violet-200': '#DDD6FE', 'violet-300': '#C4B5FD', 'violet-400': '#A78BFA',
    'violet-500': '#8B5CF6', 'violet-600': '#7C3AED', 'violet-700': '#6D28D9', 'violet-800': '#5B21B6', 'violet-900': '#4C1D95', 'violet-950': '#2E1065',

    // Purple
    'purple-50': '#FAF5FF', 'purple-100': '#F3E8FF', 'purple-200': '#E9D5FF', 'purple-300': '#D8B4FE', 'purple-400': '#C084FC',
    'purple-500': '#A855F7', 'purple-600': '#9333EA', 'purple-700': '#7E22CE', 'purple-800': '#6B21A8', 'purple-900': '#581C87', 'purple-950': '#3B0764',

    // Fuchsia
    'fuchsia-50': '#FDF4FF', 'fuchsia-100': '#FAE8FF', 'fuchsia-200': '#F5D0FE', 'fuchsia-300': '#F0ABFC', 'fuchsia-400': '#E879F9',
    'fuchsia-500': '#D946EF', 'fuchsia-600': '#C026D3', 'fuchsia-700': '#A21CAF', 'fuchsia-800': '#86198F', 'fuchsia-900': '#701A75', 'fuchsia-950': '#4A044E',

    // Pink
    'pink-50': '#FDF2F8', 'pink-100': '#FCE7F3', 'pink-200': '#FBCFE8', 'pink-300': '#F9A8D4', 'pink-400': '#F472B6',
    'pink-500': '#EC4899', 'pink-600': '#DB2777', 'pink-700': '#BE185D', 'pink-800': '#9D174D', 'pink-900': '#831843', 'pink-950': '#500724',

    // Rose
    'rose-50': '#FFF1F2', 'rose-100': '#FFE4E6', 'rose-200': '#FECDD3', 'rose-300': '#FDA4AF', 'rose-400': '#FB7185',
    'rose-500': '#F43F5E', 'rose-600': '#E11D48', 'rose-700': '#BE123C', 'rose-800': '#9F1239', 'rose-900': '#881337', 'rose-950': '#4C0519',

    // Slate
    'slate-50': '#F8FAFC', 'slate-100': '#F1F5F9', 'slate-200': '#E2E8F0', 'slate-300': '#CBD5E1', 'slate-400': '#94A3B8',
    'slate-500': '#64748B', 'slate-600': '#475569', 'slate-700': '#334155', 'slate-800': '#1E293B', 'slate-900': '#0F172A', 'slate-950': '#020617',

    // Gray
    'gray-50': '#F9FAFB', 'gray-100': '#F3F4F6', 'gray-200': '#E5E7EB', 'gray-300': '#D1D5DB', 'gray-400': '#9CA3AF',
    'gray-500': '#6B7280', 'gray-600': '#4B5563', 'gray-700': '#374151', 'gray-800': '#1F2937', 'gray-900': '#111827', 'gray-950': '#030712',

    // Zinc
    'zinc-50': '#FAFAFA', 'zinc-100': '#F4F4F5', 'zinc-200': '#E4E4E7', 'zinc-300': '#D4D4D8', 'zinc-400': '#A1A1AA',
    'zinc-500': '#71717A', 'zinc-600': '#52525B', 'zinc-700': '#3F3F46', 'zinc-800': '#27272A', 'zinc-900': '#18181B', 'zinc-950': '#09090B',

    // Neutral
    'neutral-50': '#FAFAFA', 'neutral-100': '#F5F5F5', 'neutral-200': '#E5E5E5', 'neutral-300': '#D4D4D4', 'neutral-400': '#A3A3A3',
    'neutral-500': '#737373', 'neutral-600': '#525252', 'neutral-700': '#404040', 'neutral-800': '#262626', 'neutral-900': '#171717', 'neutral-950': '#0A0A0A',

    // Stone
    'stone-50': '#FAFAF9', 'stone-100': '#F5F5F4', 'stone-200': '#E7E5E4', 'stone-300': '#D6D3D1', 'stone-400': '#A8A29E',
    'stone-500': '#78716C', 'stone-600': '#57534E', 'stone-700': '#44403C', 'stone-800': '#292524', 'stone-900': '#1C1917', 'stone-950': '#0C0A09'
  },
  zIndex: {
    'base':   '0',
    'low':    '10',
    'mid':    '50',
    'high':   '100',
    'top':    '9999'
  }
};

// Tailwind spacing scale
export const TW_SPACING = {
  '0': '0px', 'px': '1px',
  '0.5': '0.125rem', '1': '0.25rem', '1.5': '0.375rem', '2': '0.5rem', '2.5': '0.625rem',
  '3': '0.75rem', '3.5': '0.875rem', '4': '1rem', '5': '1.25rem', '6': '1.5rem',
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
  'none': '0 0 #0000'
};

// Tailwind font size scale
export const TW_FONT_SIZE = {
  'xs': '0.75rem', 'sm': '0.875rem', 'base': '1rem', 'lg': '1.125rem', 'xl': '1.25rem',
  '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem', '5xl': '3rem',
  '6xl': '3.75rem', '7xl': '4.5rem', '8xl': '6rem', '9xl': '8rem'
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
  TW_FONT_WEIGHT
};
