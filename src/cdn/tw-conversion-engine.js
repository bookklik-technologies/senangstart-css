/**
 * SenangStart CSS - Tailwind to SenangStart Conversion Engine
 * Converts Tailwind CSS class syntax to SenangStart CSS attribute syntax
 */

// ============================
// MAPPING SCALES
// ============================

// Spacing scale mapping Tailwind values to SenangStart semantic values
// Engine native values: none(0px), thin(1px), regular(2px), thick(3px), tiny(4px), tiny-2x(6px),
//                       small(8px), small-2x(10px), small-3x(12px), small-4x(14px),
//                       medium(16px), medium-2x(20px), medium-3x(24px), medium-4x(28px),
//                       large(32px), large-2x(36px), large-3x(40px), large-4x(44px),
//                       big(48px), big-2x(56px), big-3x(64px), big-4x(80px),
//                       giant(96px), giant-2x(112px), giant-3x(128px), giant-4x(144px),
//                       vast(160px), vast-2x(176px), vast-3x(192px), vast-4x(208px),
//                       vast-5x(224px), vast-6x(240px), vast-7x(256px), vast-8x(288px),
//                       vast-9x(320px), vast-10x(384px)
// Tailwind base: 4px per unit (1 = 0.25rem = 4px)
const spacingScale = {
  0: "none",           // 0px → none
  px: "thin",          // 1px → thin
  0.5: "regular",      // 2px → regular
  1: "tiny",           // 4px → tiny
  1.5: "tiny-2x",      // 6px → tiny-2x
  2: "small",          // 8px → small
  2.5: "small-2x",     // 10px → small-2x
  3: "small-3x",       // 12px → small-3x
  3.5: "small-4x",     // 14px → small-4x
  4: "medium",         // 16px → medium
  5: "medium-2x",      // 20px → medium-2x
  6: "medium-3x",      // 24px → medium-3x
  7: "medium-4x",      // 28px → medium-4x
  8: "large",          // 32px → large
  9: "large-2x",       // 36px → large-2x
  10: "large-3x",      // 40px → large-3x
  11: "large-4x",      // 44px → large-4x
  12: "big",           // 48px → big
  14: "big-2x",        // 56px → big-2x
  16: "big-3x",        // 64px → big-3x
  20: "big-4x",        // 80px → big-4x
  24: "giant",         // 96px → giant
  28: "giant-2x",      // 112px → giant-2x
  32: "giant-3x",      // 128px → giant-3x
  36: "giant-4x",      // 144px → giant-4x
  40: "vast",          // 160px → vast
  44: "vast-2x",       // 176px → vast-2x
  48: "vast-3x",       // 192px → vast-3x
  52: "vast-4x",       // 208px → vast-4x
  56: "vast-5x",       // 224px → vast-5x
  60: "vast-6x",       // 240px → vast-6x
  64: "vast-7x",       // 256px → vast-7x
  72: "vast-8x",       // 288px → vast-8x
  80: "vast-9x",       // 320px → vast-9x
  96: "vast-10x",      // 384px → vast-10x
  full: "[100%]",
  screen: "[100vw]",
  auto: "auto",
};

// Radius scale mapping Tailwind values to SenangStart semantic values
// Engine native values: none(0px), small(4px), medium(8px), big(16px), round(9999px)
// Tailwind: none(0), sm(0.125rem=2px), DEFAULT(0.25rem=4px), md(0.375rem=6px), 
//           lg(0.5rem=8px), xl(0.75rem=12px), 2xl(1rem=16px), 3xl(1.5rem=24px), full(9999px)
const radiusScale = {
  none: "none",        // 0px → none
  sm: "small",         // 2px → small (closest to 4px)
  "": "small",         // 4px → small (Tailwind DEFAULT)
  md: "small",         // 6px → small (closest to 4px)
  lg: "medium",        // 8px → medium
  xl: "medium",        // 12px → medium (closest to 8px)
  "2xl": "big",        // 16px → big
  "3xl": "big",        // 24px → big (closest to 16px)
  full: "round",       // 9999px → round
};

// Shadow scale mapping Tailwind values to SenangStart semantic values
// Engine native values: none, small, medium, big, giant
const shadowScale = {
  none: "none",        // none → none
  sm: "small",         // small shadow → small
  "": "small",         // DEFAULT shadow → small
  md: "medium",        // medium shadow → medium
  lg: "big",           // large shadow → big
  xl: "giant",         // xl shadow → giant
  "2xl": "giant",      // 2xl shadow → giant
  inner: "none",       // inner shadow not directly supported
};

// Font size scale mapping Tailwind values to SenangStart semantic values
// Engine native values: mini(0.75rem), small(0.875rem), base(1rem), large(1.125rem),
//                       big(1.25rem), huge(1.5rem), grand(1.875rem), giant(2.25rem),
//                       mount(3rem), mega(3.75rem), giga(4.5rem), tera(6rem), hero(8rem)
const fontSizeScale = {
  xs: "mini",          // 0.75rem → mini
  sm: "small",         // 0.875rem → small
  base: "base",        // 1rem → base
  lg: "large",         // 1.125rem → large
  xl: "big",           // 1.25rem → big
  "2xl": "huge",       // 1.5rem → huge
  "3xl": "grand",      // 1.875rem → grand
  "4xl": "giant",      // 2.25rem → giant
  "5xl": "mount",      // 3rem → mount
  "6xl": "mega",       // 3.75rem → mega
  "7xl": "giga",       // 4.5rem → giga
  "8xl": "tera",       // 6rem → tera
  "9xl": "hero",       // 8rem → hero
};

// Line height scale mapping Tailwind values to SenangStart semantic values
// Engine native values: none(1), tight(1.25), snug(1.375), normal(1.5), relaxed(1.625), loose(2)
const lineHeightScale = {
  none: "none",       // line-height: 1
  tight: "tight",     // line-height: 1.25
  snug: "snug",      // line-height: 1.375
  normal: "normal",   // line-height: 1.5
  relaxed: "relaxed", // line-height: 1.625
  loose: "loose"      // line-height: 2
};

// Letter spacing scale mapping Tailwind values to SenangStart semantic values
// Engine native values: tighter(-0.05em), tight(-0.025em), normal(0), wide(0.025em), wider(0.05em), widest(0.1em)
const letterSpacingScale = {
  tighter: "tighter",   // letter-spacing: -0.05em
  tight: "tight",        // letter-spacing: -0.025em
  normal: "normal",      // letter-spacing: 0
  wide: "wide",         // letter-spacing: 0.025em
  wider: "wider",       // letter-spacing: 0.05em
  widest: "widest"      // letter-spacing: 0.1em
};

// Z-index scale mapping Tailwind values to SenangStart semantic values
// Engine native values: base(0), low(10), mid(50), high(100), top(9999)
const zIndexScale = {
  0: "base",      // z-index: 0
  10: "low",      // z-index: 10
  20: "low",      // z-index: 20
  30: "low",      // z-index: 30
  40: "low",      // z-index: 40
  50: "mid",      // z-index: 50
  60: "high",     // z-index: 60
  70: "high",     // z-index: 70
  80: "high",     // z-index: 80
  90: "high",     // z-index: 90
  100: "high",    // z-index: 100
  auto: "auto"     // z-index: auto
};

// Fraction scale mapping Tailwind fractions to SenangStart semantic values
// Used for positioning (left-1/2) and transforms (translate-x-1/2)
const fractionScale = {
  '1/2': 'half',         // 50%
  '1/3': 'third',        // 33.33%
  '2/3': 'third-2x',     // 66.67%
  '1/4': 'quarter',      // 25%
  '2/4': 'half',         // 50% (alias)
  '3/4': 'quarter-3x',   // 75%
  'full': 'full',        // 100%
};

const layoutMappings = {
  container: "container",
  flex: "flex",
  "inline-flex": "inline-flex",
  grid: "grid",
  "inline-grid": "inline-grid",
  block: "block",
  "inline-block": "inline",
  hidden: "hidden",
  "flex-row": "row",
  "flex-col": "col",
  "flex-row-reverse": "row-reverse",
  "flex-col-reverse": "col-reverse",
  "flex-wrap": "wrap",
  "flex-nowrap": "nowrap",
  "flex-wrap-reverse": "wrap-reverse",
  "flex-grow": "grow",
  "flex-grow-0": "grow-0",
  grow: "grow",
  "grow-0": "grow-0",
  "flex-shrink": "shrink",
  "flex-shrink-0": "shrink-0",
  shrink: "shrink",
  "shrink-0": "shrink-0",
  "flex-1": "flex:1",
  "flex-auto": "flex:auto",
  "flex-initial": "flex:initial",
  "flex-none": "flex:none",
  "justify-start": "justify:start",
  "justify-end": "justify:end",
  "justify-center": "justify:center",
  "justify-between": "justify:between",
  "justify-around": "justify:around",
  "justify-evenly": "justify:evenly",
  "items-start": "items:start",
  "items-end": "items:end",
  "items-center": "items:center",
  "items-baseline": "items:baseline",
  "items-stretch": "items:stretch",
  "self-auto": "self:auto",
  "self-start": "self:start",
  "self-end": "self:end",
  "self-center": "self:center",
  "self-stretch": "self:stretch",
  relative: "relative",
  absolute: "absolute",
  fixed: "fixed",
  sticky: "sticky",
  static: "static",
  "overflow-auto": "overflow:auto",
  "overflow-hidden": "overflow:hidden",
  "overflow-visible": "overflow:visible",
  "overflow-scroll": "overflow:scroll",
  "object-contain": "object:contain",
  "object-cover": "object:cover",
  "object-fill": "object:fill",
  "object-none": "object:none",
  "object-scale-down": "object:scale-down",
};

const visualKeywords = {
  // Font style
  italic: "italic",
  "not-italic": "not-italic",
  
  // Font smoothing
  antialiased: "antialiased",
  "subpixel-antialiased": "subpixel-antialiased",
  
  // Text transform
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  "normal-case": "normal-case",
  
  // Text decoration
  underline: "underline",
  overline: "overline",
  "line-through": "line-through",
  "no-underline": "no-underline",
  
  // Text decoration style
  "decoration-solid": "decoration-solid",
  "decoration-double": "decoration-double",
  "decoration-dotted": "decoration-dotted",
  "decoration-dashed": "decoration-dashed",
  "decoration-wavy": "decoration-wavy",
  
  // Text overflow
  truncate: "truncate",
  "text-ellipsis": "text-ellipsis",
  "text-clip": "text-clip",
  
  // Text wrap
  "text-wrap": "text-wrap",
  "text-nowrap": "text-nowrap",
  "text-balance": "text-balance",
  "text-pretty": "text-pretty",
  
  // Whitespace
  "whitespace-normal": "whitespace-normal",
  "whitespace-nowrap": "whitespace-nowrap",
  "whitespace-pre": "whitespace-pre",
  "whitespace-pre-line": "whitespace-pre-line",
  "whitespace-pre-wrap": "whitespace-pre-wrap",
  "whitespace-break-spaces": "whitespace-break-spaces",
  
  // Word break
  "break-normal": "break-normal",
  "break-words": "break-words",
  "break-all": "break-all",
  "break-keep": "break-keep",
  
  // Hyphens
  "hyphens-none": "hyphens-none",
  "hyphens-manual": "hyphens-manual",
  "hyphens-auto": "hyphens-auto",
  
  // List style
  "list-none": "list-none",
  "list-disc": "list-disc",
  "list-decimal": "list-decimal",
  "list-inside": "list-inside",
  "list-outside": "list-outside",
  
  // Cursor
  "cursor-auto": "cursor:auto",
  "cursor-default": "cursor:default",
  "cursor-pointer": "cursor:pointer",
  "cursor-wait": "cursor:wait",
  "cursor-text": "cursor:text",
  "cursor-move": "cursor:move",
  "cursor-not-allowed": "cursor:not-allowed",
  "cursor-grab": "cursor:grab",
  "cursor-grabbing": "cursor:grabbing",
  
  // User select
  "select-none": "select:none",
  "select-text": "select:text",
  "select-all": "select:all",
  "select-auto": "select:auto",
  
  // Pointer events
  "pointer-events-none": "pointer-events:none",
  "pointer-events-auto": "pointer-events:auto",
  
  // Appearance
  "appearance-none": "appearance:none",
  "appearance-auto": "appearance:auto",
  
  // 3D Transforms
  perspective: "perspective",
  "perspective-origin": "perspective-origin",
  "transform-style": "transform-style",
  "backface-visibility": "backface",
  mask: "mask",
  "mask-image": "mask-image",
  "mask-mode": "mask-mode",
  "mask-origin": "mask-origin",
  "mask-position": "mask-position",
  "mask-repeat": "mask-repeat",
  "mask-size": "mask-size",
  "mask-type": "mask-type"
};

// ============================
// HELPER FUNCTIONS
// ============================

function getSpacing(value, exact) {
  // Check if it's already an arbitrary value with brackets
  if (value && value.startsWith('[') && value.endsWith(']')) {
    return value; // Return as-is, don't double-wrap
  }
  if (exact) {
    if (["full", "screen", "auto"].includes(value))
      return spacingScale[value] || `[${value}]`;
    return `tw-${value}`;
  }
  return spacingScale[value] || `[${value}]`;
}

// Border width scale mapping Tailwind values to SenangStart semantic values
// Engine native values: none(0), thin(1px), regular(2px), thick(3px)
const borderWidthScale = {
  0: "none",
  1: "thin",           // 1px → thin (was [1px])
  2: "regular",        // 2px → regular
  3: "thick",          // 3px → thick
  4: "tiny",           // 4px → tiny
  8: "small",          // 8px → small
};

function getBorderWidth(value, exact) {
  if (exact) {
    return `tw-${value}`;
  }
  return borderWidthScale[value] || `[${value}px]`;
}

// ============================
// CONVERSION FUNCTIONS
// ============================

function convertClass(twClass, exact) {
  // Handle prefixes (hover:, sm:, md:, etc.)
  // Added group-* and peer-* variant support
  const prefixMatch = twClass.match(
    /^(sm:|md:|lg:|xl:|2xl:|hover:|focus:|focus-visible:|active:|disabled:|dark:|group-hover:|peer-hover:|group-focus:|peer-focus:|group-active:|peer-active:|peer-check:|group-open:|peer-open:)(.+)$/
  );
  let prefix = "",
    baseClass = twClass,
    extraAttr = null;

  if (prefixMatch) {
    const rawPrefix = prefixMatch[1].slice(0, -1); // remove colon
    
    // Responsive prefixes
    if (['sm', 'md', 'lg', 'xl', '2xl'].includes(rawPrefix)) {
      prefix = `tw-${rawPrefix}:`;
    } 
    // Group/Peer prefixes (map to standard state prefixes)
    else if (rawPrefix.startsWith('group-') || rawPrefix.startsWith('peer-')) {
      const stateMap = {
        'hover': 'hover',
        'focus': 'focus', // or focus-within if we strictly follow group logic, but SenangStart group logic handles mapped state triggers
        'active': 'active',
        'open': 'expanded', // map open -> expanded
        'check': 'checked'  // map check -> checked
      };
      
      const variant = rawPrefix.split('-')[1]; // get 'hover' from 'group-hover'
      const mappedState = stateMap[variant] || variant;
      
      prefix = `${mappedState}:`;
      
      // For peer variants, we must ensure the element listens to "peer"
      if (rawPrefix.startsWith('peer-')) {
        extraAttr = { cat: 'listens', val: 'peer' };
      }
    } 
    // Standard prefixes
    else {
      prefix = prefixMatch[1];
    }
    
    baseClass = prefixMatch[2];
  }

  // Handle 'group' class mapping
  if (baseClass === 'group') {
    return { cat: 'layout', val: 'hoverable focusable pressable expandable' };
  }

  // Handle 'peer' class mapping
  if (baseClass === 'peer') {
    return [
      { cat: 'layout', val: 'hoverable focusable pressable expandable' },
      { cat: 'interact', val: 'peer' }
    ];
  }

  // Helper to attach extra attributes (like listens="peer")
  const attachExtra = (result) => {
    if (!result) return null;
    if (extraAttr) {
      return Array.isArray(result) ? [...result, extraAttr] : [result, extraAttr];
    }
    return result;
  };

  // Layout mappings
  if (layoutMappings[baseClass])
    return attachExtra({ cat: "layout", val: prefix + layoutMappings[baseClass] });

  // Visual keywords
  if (visualKeywords[baseClass])
    return attachExtra({ cat: "visual", val: prefix + visualKeywords[baseClass] });

  // Text color
  const textColorMatch = baseClass.match(
    /^text-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/
  );
  if (textColorMatch)
    return attachExtra({ cat: "visual", val: prefix + "text:" + textColorMatch[1] });

  // Text alignment
  if (
    ["text-left", "text-center", "text-right", "text-justify"].includes(
      baseClass
    )
  )
    return attachExtra({
      cat: "visual",
      val: prefix + "text:" + baseClass.replace("text-", ""),
    });

  // Text size
  const textSizeMatch = baseClass.match(
    /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/
  );
  if (textSizeMatch) {
    const size = exact
      ? `tw-${textSizeMatch[1]}`
      : fontSizeScale[textSizeMatch[1]] || textSizeMatch[1];
    return attachExtra({ cat: "visual", val: prefix + "text-size:" + size });
  }

  // Line height
  const leadingMatch = baseClass.match(/^leading-(\[.+\]|none|tight|snug|normal|relaxed|loose)$/);
  if (leadingMatch) {
    const val = leadingMatch[1];
    return attachExtra({ cat: "visual", val: prefix + "leading:" + (lineHeightScale[val] || val) });
  }

  // Letter spacing
  const trackingMatch = baseClass.match(/^tracking-(\[.+\]|tighter|tight|normal|wide|wider|widest)$/);
  if (trackingMatch) {
    const val = trackingMatch[1];
    return attachExtra({ cat: "visual", val: prefix + "tracking:" + (letterSpacingScale[val] || val) });
  }

  // Background color
  const bgMatch = baseClass.match(
    /^bg-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?|transparent|current|inherit)$/
  );
  if (bgMatch) {
    const colorVal = bgMatch[1];
    // Handle special CSS keyword values - these are now natively supported
    if (colorVal === 'transparent') {
      return attachExtra({ cat: "visual", val: prefix + "bg:transparent" });
    }
    if (colorVal === 'current') {
      return attachExtra({ cat: "visual", val: prefix + "bg:currentColor" });
    }
    if (colorVal === 'inherit') {
      return attachExtra({ cat: "visual", val: prefix + "bg:inherit" });
    }
    return attachExtra({ cat: "visual", val: prefix + "bg:" + colorVal });
  }

  // Border color
  const borderColorMatch = baseClass.match(
    /^border-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black|transparent|current|inherit)(?:-\d+)?)$/
  );
  if (borderColorMatch) {
    let colorVal = borderColorMatch[1];
    // Map 'current' to 'currentColor' for CSS compatibility
    if (colorVal === 'current') colorVal = 'currentColor';
    return attachExtra({
      cat: "visual",
      val: prefix + "border:" + colorVal,
    });
  }

  // Directional border colors (border-t-*, border-r-*, border-b-*, border-l-*)
  const borderSideColorMatch = baseClass.match(
    /^border-([trbl])-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black|transparent|current|inherit)(?:-\d+)?)$/
  );
  if (borderSideColorMatch) {
    const side = borderSideColorMatch[1]; // t, r, b, or l
    let colorVal = borderSideColorMatch[2];
    // Map 'current' to 'currentColor' for CSS compatibility
    if (colorVal === 'current') colorVal = 'currentColor';
    return attachExtra({
      cat: "visual",
      val: prefix + `border-${side}:${colorVal}`,
    });
  }

  // Padding
  const paddingMatch = baseClass.match(/^p([trblxy])?-(.+)$/);
  if (paddingMatch) {
    const side = paddingMatch[1] ? "-" + paddingMatch[1] : "";
    return attachExtra({
      cat: "space",
      val: prefix + "p" + side + ":" + getSpacing(paddingMatch[2], exact),
    });
  }

  // Margin
  const marginMatch = baseClass.match(
    /^-?m([trblxy])?-(\[.+\]|\d+\.?\d*|px|auto|full|screen)$/
  );
  if (marginMatch) {
    const isNeg = baseClass.startsWith("-");
    const side = marginMatch[1] ? "-" + marginMatch[1] : "";
    let val = getSpacing(marginMatch[2], exact);
    
    if (isNeg && val) {
      if (val.startsWith('[') && val.endsWith(']')) {
        // Handle arbitrary value: [10px] -> [-10px]
        const inner = val.slice(1, -1);
        val = `[-${inner}]`;
      } else {
        // Handle named/scale value: medium -> -medium
        val = `-${val}`;
      }
    }
    return attachExtra({ cat: "space", val: prefix + "m" + side + ":" + val });
  }

  // Gap
  const gapMatch = baseClass.match(/^gap-([xy])?-?(.+)$/);
  if (gapMatch) {
    const axis = gapMatch[1] ? "-" + gapMatch[1] : "";
    return attachExtra({
      cat: "space",
      val: prefix + "g" + axis + ":" + getSpacing(gapMatch[2], exact),
    });
  }

  // Width/Height with special values
  const widthMatch = baseClass.match(/^(min-w|max-w|w)-(.+)$/);
  if (widthMatch) {
    const prop = widthMatch[1];
    const rawVal = widthMatch[2];
    // Special width values
    const specialWidthVals = { 'max': '[max-content]', 'min': '[min-content]', 'fit': '[fit-content]', 'prose': '[65ch]' };
    const val = specialWidthVals[rawVal] || getSpacing(rawVal, exact);
    return attachExtra({ cat: "space", val: prefix + prop + ":" + val });
  }
  const heightMatch = baseClass.match(/^(min-h|max-h|h)-(.+)$/);
  if (heightMatch) {
    const prop = heightMatch[1];
    const rawVal = heightMatch[2];
    const specialHeightVals = { 'screen': '[100vh]', 'svh': '[100svh]', 'lvh': '[100lvh]', 'dvh': '[100dvh]', 'max': '[max-content]', 'min': '[min-content]', 'fit': '[fit-content]' };
    const val = specialHeightVals[rawVal] || getSpacing(rawVal, exact);
    return attachExtra({ cat: "space", val: prefix + prop + ":" + val });
  }

  // Border radius
  const roundedMatch = baseClass.match(/^rounded(?:-(.+))?$/);
  if (roundedMatch) {
    const size = roundedMatch[1] || "";
    const scale = exact
      ? size === ""
        ? "tw-DEFAULT"
        : `tw-${size}`
      : radiusScale[size] || "medium";
    return attachExtra({ cat: "visual", val: prefix + "rounded:" + scale });
  }

  // Shadow
  const shadowMatch = baseClass.match(/^shadow(?:-(.+))?$/);
  if (shadowMatch) {
    const size = shadowMatch[1] || "";
    const scale = exact
      ? size === ""
        ? "tw-DEFAULT"
        : `tw-${size}`
      : shadowScale[size] || "medium";
    return attachExtra({ cat: "visual", val: prefix + "shadow:" + scale });
  }

  // Font weight
  const fontWeightMatch = baseClass.match(
    /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/
  );
  if (fontWeightMatch)
    return attachExtra({ cat: "visual", val: prefix + "font:tw-" + fontWeightMatch[1] });

  // Border width
  const borderWidthMatch = baseClass.match(
    /^border(?:-([trblxy]))?(?:-(\d+))?$/
  );
  if (
    borderWidthMatch &&
    (borderWidthMatch[2] ||
      (!borderWidthMatch[1] && baseClass === "border"))
  ) {
    const side = borderWidthMatch[1]
      ? "-" + borderWidthMatch[1] + "-w"
      : "-w";
    const width = borderWidthMatch[2] || "1";
    return attachExtra({
      cat: "visual",
      val: prefix + "border" + side + ":" + getBorderWidth(width, exact),
    });
  }

  // Positional properties (top-0, right-0, bottom-0, left-0, inset-0, etc.)
  // Includes fraction support: left-1/2, top-1/3, etc.
  const positionMatch = baseClass.match(/^(top|right|bottom|left|inset|inset-x|inset-y)-(\d+|px|auto|full|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|\[.+\])$/);
  if (positionMatch) {
    const prop = positionMatch[1];
    let val = positionMatch[2];
    if (val && val.startsWith('[') && val.endsWith(']')) {
      // Keep arbitrary values as-is
    } else if (fractionScale[val]) {
      // Map fractions to semantic names (1/2 → half, etc.)
      val = fractionScale[val];
    } else if (val === '0') {
      // Keep 0 as-is for positioning (CSS: top: 0, not top: none)
      val = '0';
    } else {
      val = getSpacing(val, exact);
    }
    return attachExtra({ cat: "layout", val: prefix + prop + ":" + val });
  }

  // Translate transform utilities: translate-x-*, translate-y-*, -translate-x-*, -translate-y-*
  const translateMatch = baseClass.match(/^(-?)translate-([xy])-(\d+|px|full|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|\[.+\])$/);
  if (translateMatch) {
    const isNeg = translateMatch[1] === '-';
    const axis = translateMatch[2];
    let val = translateMatch[3];
    
    // Map fractions and values
    if (val && val.startsWith('[') && val.endsWith(']')) {
      // Keep arbitrary values as-is, but handle negative
      if (isNeg) {
        const inner = val.slice(1, -1);
        val = `[-${inner}]`;
      }
    } else if (fractionScale[val]) {
      val = fractionScale[val];
      if (isNeg) val = `-${val}`;
    } else if (val === '0') {
      val = '0';
    } else {
      val = getSpacing(val, exact);
      if (isNeg) val = `-${val}`;
    }
    
    return attachExtra({ cat: "visual", val: prefix + `translate-${axis}:${val}` });
  }

  // Outline none
  if (baseClass === 'outline-none') {
    return attachExtra({ cat: "visual", val: prefix + "outline:none" });
  }

  // Order
  const orderMatch = baseClass.match(/^order-(\d+|first|last|none)$/);
  if (orderMatch) {
    return attachExtra({ cat: "layout", val: prefix + "order:" + orderMatch[1] });
  }

  // Z-index
  const zIndexMatch = baseClass.match(/^-?z-(\d+|auto)$/);
  if (zIndexMatch) {
    const isNeg = baseClass.startsWith("-");
    const val = zIndexMatch[1];
    let zIndexVal = zIndexScale[val] || val;
    if (isNeg) {
      zIndexVal = `-${zIndexVal}`;
    }
    return attachExtra({ cat: "layout", val: prefix + "z:" + zIndexVal });
  }

  // Flex basis
  const basisMatch = baseClass.match(/^basis-(\[.+\]|\d+\.?\d*|auto|full|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4)$/);
  if (basisMatch) {
    let val = basisMatch[1];
    if (val.startsWith('[') && val.endsWith(']')) {
      // Keep arbitrary values as-is
    } else if (fractionScale[val]) {
      // Map fractions to semantic names (1/2 → half, etc.)
      val = fractionScale[val];
    } else if (val === '0') {
      val = '0';
    }
    return attachExtra({ cat: "layout", val: prefix + "basis:" + val });
  }

  // Grid columns
  const gridColsMatch = baseClass.match(/^grid-cols-(\d+|none)$/);
  if (gridColsMatch) {
    return attachExtra({ cat: "layout", val: prefix + "grid-cols:" + gridColsMatch[1] });
  }

  // Column span
  const colSpanMatch = baseClass.match(/^col-span-(\d+|full)$/);
  if (colSpanMatch) {
    return attachExtra({ cat: "layout", val: prefix + "col-span:" + colSpanMatch[1] });
  }

  // Grid rows
  const gridRowsMatch = baseClass.match(/^grid-rows-(\d+|none)$/);
  if (gridRowsMatch) {
    return attachExtra({ cat: "layout", val: prefix + "grid-rows:" + gridRowsMatch[1] });
  }

  // Row span
  const rowSpanMatch = baseClass.match(/^row-span-(\d+|full)$/);
  if (rowSpanMatch) {
    return attachExtra({ cat: "layout", val: prefix + "row-span:" + rowSpanMatch[1] });
  }

  // Opacity
  const opacityMatch = baseClass.match(/^opacity-(\d+)$/);
  if (opacityMatch) {
    return attachExtra({ cat: "visual", val: prefix + "opacity:" + opacityMatch[1] });
  }

  // Gradient direction (bg-gradient-to-*)
  const bgGradientMatch = baseClass.match(/^bg-gradient-to-(t|tr|r|br|b|bl|l|tl)$/);
  if (bgGradientMatch) {
    return attachExtra({ cat: "visual", val: prefix + "bg-image:gradient-to-" + bgGradientMatch[1] });
  }

  // Gradient from-* (starting color)
  const fromMatch = baseClass.match(/^from-(.+)$/);
  if (fromMatch) {
    return attachExtra({ cat: "visual", val: prefix + "from:" + fromMatch[1] });
  }

  // Gradient via-* (middle color)
  const viaMatch = baseClass.match(/^via-(.+)$/);
  if (viaMatch) {
    return attachExtra({ cat: "visual", val: prefix + "via:" + viaMatch[1] });
  }

  // Gradient to-* (ending color) - Note: must come after bg-gradient-to-*
  const toMatch = baseClass.match(/^to-(.+)$/);
  if (toMatch) {
    return attachExtra({ cat: "visual", val: prefix + "to:" + toMatch[1] });
  }

  // Transition utilities
  const transitionMatch = baseClass.match(/^transition(?:-(all|colors|opacity|shadow|transform|none))?$/);
  if (transitionMatch) {
    const type = transitionMatch[1] || 'all';
    return attachExtra({ cat: "visual", val: prefix + "transition:" + type });
  }

  // Duration utilities
  const durationMatch = baseClass.match(/^duration-(\d+)$/);
  if (durationMatch) {
    // Map Tailwind duration (ms) to SenangStart semantic values
    const ms = parseInt(durationMatch[1]);
    let durationVal;
    if (ms <= 75) durationVal = 'instant';
    else if (ms <= 100) durationVal = 'quick';
    else if (ms <= 150) durationVal = 'fast';
    else if (ms <= 200) durationVal = 'normal';
    else if (ms <= 300) durationVal = 'slow';
    else if (ms <= 500) durationVal = 'slower';
    else durationVal = 'lazy';
    return attachExtra({ cat: "visual", val: prefix + "duration:" + durationVal });
  }

  // Ease utilities
  const easeMatch = baseClass.match(/^ease-(linear|in|out|in-out)$/);
  if (easeMatch) {
    return attachExtra({ cat: "visual", val: prefix + "ease:" + easeMatch[1] });
  }

  // Ring utilities - Convert to native ring utilities
  // Tailwind ring-4 generates: box-shadow: 0 0 0 4px var(--tw-ring-color)
  const ringMatch = baseClass.match(/^ring(?:-(\d+))?$/);
  if (ringMatch) {
    const width = ringMatch[1] || '3';
    if (width === '0') {
      return attachExtra({ cat: "visual", val: prefix + "ring:none" });
    }
    // Map Tailwind ring widths to SenangStart semantic values
    const ringScale = {
      '1': 'thin', '2': 'regular', '3': 'small', '4': 'medium', '8': 'big'
    };
    const scale = ringScale[width] || `[${width}px]`;
    return attachExtra({ cat: "visual", val: prefix + "ring:" + scale });
  }

  // Ring offset - converts to native ring-offset utility
  const ringOffsetMatch = baseClass.match(/^ring-offset-(\d+)$/);
  if (ringOffsetMatch) {
    return attachExtra({ cat: "visual", val: prefix + "ring-offset:" + ringOffsetMatch[1] });
  }

  // Ring color - converts to native ring-color utility
  const ringColorMatch = baseClass.match(/^ring-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/);
  if (ringColorMatch) {
    return attachExtra({ cat: "visual", val: prefix + "ring-color:" + ringColorMatch[1] });
  }
  
  // Divide color - directional (check divide-x and divide-y BEFORE generic divide)
  const divideXMatch = baseClass.match(/^divide-x-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/);
  if (divideXMatch) {
    return attachExtra({
      cat: "visual",
      val: prefix + "divide-x:" + divideXMatch[1],
    });
  }
  
  const divideYMatch = baseClass.match(/^divide-y-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/);
  if (divideYMatch) {
    return attachExtra({
      cat: "visual",
      val: prefix + "divide-y:" + divideYMatch[1],
    });
  }
  
  // Divide color - all directions (check divide-x and divide-y AFTER generic divide)
  const divideColorMatch = baseClass.match(/^divide-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/);
  if (divideColorMatch) {
    return attachExtra({
      cat: "visual",
      val: prefix + "divide:" + divideColorMatch[1],
    });
  }
  
  // Divide width - all directions
  const divideWidthMatch = baseClass.match(/^divide-(\d+)$/);
  if (divideWidthMatch) {
    return attachExtra({
      cat: "visual",
      val: prefix + "divide-w:" + getBorderWidth(divideWidthMatch[1], exact),
    });
  }
  
  // Divide reverse (check these FIRST as they are specific)
  if (baseClass === 'divide-x-reverse') {
    return attachExtra({ cat: "visual", val: prefix + "divide-x:reverse" });
  }
  if (baseClass === 'divide-y-reverse') {
    return attachExtra({ cat: "visual", val: prefix + "divide-y:reverse" });
  }
  
  // Divide width - directional
  const divideXWidthMatch = baseClass.match(/^divide-x-(\d+)$/);
  if (divideXWidthMatch) {
    return attachExtra({
      cat: "visual",
      val: prefix + "divide-x-w:" + getBorderWidth(divideXWidthMatch[1], exact),
    });
  }
  
  // Divide width (implicit x/y from Tailwind divide-x/y without number is usually 1px)
  // Tailwind: divide-x = border-right-width: 1px (or left if reverse).
  // SenangStart: divide-x-w:thin
  if (baseClass === 'divide-x') {
    return attachExtra({ cat: "visual", val: prefix + "divide-x-w:thin" });
  }
  if (baseClass === 'divide-y') {
    return attachExtra({ cat: "visual", val: prefix + "divide-y-w:thin" });
  }
  
  const divideYWidthMatch = baseClass.match(/^divide-y-(\d+)$/);
  if (divideYWidthMatch) {
    return attachExtra({
      cat: "visual",
      val: prefix + "divide-y-w:" + getBorderWidth(divideYWidthMatch[1], exact),
    });
  }
  
  // Divide style
  const divideStyleMatch = baseClass.match(/^divide-(solid|dashed|dotted|double|none)$/);
  if (divideStyleMatch) {
    return attachExtra({
      cat: "visual",
      val: prefix + "divide-style:" + divideStyleMatch[1], // Fixed category from 'color' to 'visual'
    });
  }
  
  // Border style
  const borderStyleMatch = baseClass.match(/^border-(solid|dashed|dotted|double|none)$/);
  if (borderStyleMatch) {
    return attachExtra({
      cat: "visual",
      val: prefix + "border-style:" + borderStyleMatch[1],
    });
  }
  
  // Filter utilities
  // Blur
  const blurMatch = baseClass.match(/^blur-(0|sm|md|lg|xl|2xl|3xl)$/);
  if (blurMatch) {
    const blurScale = {
      '0': 'none',
      'sm': 'tiny',
      'md': 'small',
      'lg': 'medium',
      'xl': 'big',
      '2xl': 'giant',
      '3xl': 'vast'
    };
    return attachExtra({
      cat: "visual",
      val: prefix + "blur:" + blurScale[blurMatch[1]],
    });
  }
  
  // Brightness
  const brightnessMatch = baseClass.match(/^brightness-(0|50|75|90|95|100|105|110|125|150|200)$/);
  if (brightnessMatch) {
    const brightnessScale = {
      '0': 'dim',
      '50': 'dim',
      '75': 'dark',
      '90': 'dark',
      '95': 'dark',
      '100': 'normal',
      '105': 'bright',
      '110': 'bright',
      '125': 'vivid',
      '150': 'vivid',
      '200': 'vivid'
    };
    return attachExtra({
      cat: "visual",
      val: prefix + "brightness:" + brightnessScale[brightnessMatch[1]],
    });
  }
  
  // Contrast
  const contrastMatch = baseClass.match(/^contrast-(0|50|75|100|125|150|200)$/);
  if (contrastMatch) {
    const contrastScale = {
      '0': 'low',
      '50': 'low',
      '75': 'reduced',
      '100': 'normal',
      '125': 'high',
      '150': 'high',
      '200': 'max'
    };
    return attachExtra({
      cat: "visual",
      val: prefix + "contrast:" + contrastScale[contrastMatch[1]],
    });
  }
  
  // Grayscale
  const grayscaleMatch = baseClass.match(/^grayscale(0)?$/);
  if (grayscaleMatch) {
    const val = grayscaleMatch[1] === '0' ? 'none' : 'full';
    return attachExtra({
      cat: "visual",
      val: prefix + "grayscale:" + val,
    });
  }
  
  // Hue rotate
  const hueRotateMatch = baseClass.match(/^hue-rotate-(0|15|30|60|90|180)$/);
  if (hueRotateMatch) {
    return attachExtra({
      cat: "visual",
      val: prefix + "hue-rotate:" + hueRotateMatch[1],
    });
  }
  
  // Invert
  const invertMatch = baseClass.match(/^invert(0)?$/);
  if (invertMatch) {
    const val = invertMatch[1] === '0' ? 'none' : 'full';
    return attachExtra({
      cat: "visual",
      val: prefix + "invert:" + val,
    });
  }
  
  // Saturate
  const saturateMatch = baseClass.match(/^saturate-(0|50|100|150|200)$/);
  if (saturateMatch) {
    const saturateScale = {
      '0': 'none',
      '50': 'low',
      '100': 'normal',
      '150': 'high',
      '200': 'vivid'
    };
    return attachExtra({
      cat: "visual",
      val: prefix + "saturate:" + saturateScale[saturateMatch[1]],
    });
  }
  
  // Sepia
  const sepiaMatch = baseClass.match(/^sepia(0)?$/);
  if (sepiaMatch) {
    const val = sepiaMatch[1] === '0' ? 'none' : 'full';
    return attachExtra({
      cat: "visual",
      val: prefix + "sepia:" + val,
    });
  }
  
  // Animation utilities
  const animateMatch = baseClass.match(/^animate-(none|spin|ping|pulse|bounce)$/);
  if (animateMatch) {
    return attachExtra({
      cat: "visual",
      val: prefix + "animate:" + animateMatch[1],
    });
  }
  
  return null;
}

function convertClasses(classString, exact) {
  const classes = classString
    .trim()
    .split(/\s+/)
    .filter((c) => c);
  const layout = [],
    space = [],
    visual = [],
    interact = [],
    listens = [],
    unknown = [];

  // Helper to push unique
  const pushUnique = (arr, val) => {
    if (!arr.includes(val)) arr.push(val);
  };

  for (const cls of classes) {
    const result = convertClass(cls, exact);
    
    if (result) {
      // Normalize to array to support 1-to-many mapping
      const results = Array.isArray(result) ? result : [result];
      
      for (const res of results) {
        if (res.cat === "layout") pushUnique(layout, res.val);
        else if (res.cat === "space") pushUnique(space, res.val);
        else if (res.cat === "visual") pushUnique(visual, res.val);
        else if (res.cat === "interact") pushUnique(interact, res.val);
        else if (res.cat === "listens") pushUnique(listens, res.val);
      }
    } else {
      unknown.push(cls);
    }
  }

  return { layout, space, visual, interact, listens, unknown };
}

function convertHTML(html, exact) {
  return html.replace(
    /class=(['"])([^"']+)\1/g,
    (match, quote, classValue) => {
      const { layout, space, visual, interact, listens, unknown } = convertClasses(
        classValue,
        exact
      );
      const attrs = [];
      if (layout.length) attrs.push(`layout="${layout.join(" ")}"`);
      if (space.length) attrs.push(`space="${space.join(" ")}"`);
      if (visual.length) attrs.push(`visual="${visual.join(" ")}"`);
      if (interact.length) attrs.push(`interact="${interact.join(" ")}"`);
      if (listens.length) attrs.push(`listens="${listens.join(" ")}"`);
      if (unknown.length) attrs.push(`class="${unknown.join(" ")}"`);
      return attrs.join(" ") || 'class=""';
    }
  );
}

// ============================
// EXPORTS
// ============================

// Export for browser (IIFE global)
if (typeof window !== 'undefined') {
  window.SenangStartTW = {
    convertClass,
    convertClasses,
    convertHTML,
    // Expose scales for customization
    scales: {
      spacing: spacingScale,
      radius: radiusScale,
      shadow: shadowScale,
      fontSize: fontSizeScale,
    },
    mappings: {
      layout: layoutMappings,
      visual: visualKeywords,
    },
  };
}

// Export for ES modules
export {
  convertClass,
  convertClasses,
  convertHTML,
  spacingScale,
  radiusScale,
  shadowScale,
  fontSizeScale,
  layoutMappings,
  visualKeywords,
};
