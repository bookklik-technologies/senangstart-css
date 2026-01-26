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
  italic: "italic",
  "not-italic": "not-italic",
  antialiased: "antialiased",
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  "normal-case": "normal-case",
  underline: "underline",
  "line-through": "line-through",
  "no-underline": "no-underline",
  truncate: "truncate",
  "cursor-pointer": "cursor:pointer",
  "cursor-default": "cursor:default",
  "cursor-not-allowed": "cursor:not-allowed",
  "select-none": "select:none",
  "select-text": "select:text",
  "select-all": "select:all",
};

// ============================
// HELPER FUNCTIONS
// ============================

function getSpacing(value, exact) {
  // Check if it's already an arbitrary value with brackets
  if (value.startsWith('[') && value.endsWith(']')) {
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
  const prefixMatch = twClass.match(
    /^(sm:|md:|lg:|xl:|2xl:|hover:|focus:|focus-visible:|active:|disabled:|dark:)(.+)$/
  );
  let prefix = "",
    baseClass = twClass;
  if (prefixMatch) {
    const rawPrefix = prefixMatch[1].slice(0, -1); // remove colon
    if (['sm', 'md', 'lg', 'xl', '2xl'].includes(rawPrefix)) {
      prefix = `tw-${rawPrefix}:`;
    } else {
      prefix = prefixMatch[1];
    }
    baseClass = prefixMatch[2];
  }

  // Layout mappings
  if (layoutMappings[baseClass])
    return { cat: "layout", val: prefix + layoutMappings[baseClass] };

  // Visual keywords
  if (visualKeywords[baseClass])
    return { cat: "visual", val: prefix + visualKeywords[baseClass] };

  // Text color
  const textColorMatch = baseClass.match(
    /^text-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/
  );
  if (textColorMatch)
    return { cat: "visual", val: prefix + "text:" + textColorMatch[1] };

  // Text alignment
  if (
    ["text-left", "text-center", "text-right", "text-justify"].includes(
      baseClass
    )
  )
    return {
      cat: "visual",
      val: prefix + "text:" + baseClass.replace("text-", ""),
    };

  // Text size
  const textSizeMatch = baseClass.match(
    /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/
  );
  if (textSizeMatch) {
    const size = exact
      ? `tw-${textSizeMatch[1]}`
      : fontSizeScale[textSizeMatch[1]] || textSizeMatch[1];
    return { cat: "visual", val: prefix + "text-size:" + size };
  }

  // Background color
  const bgMatch = baseClass.match(
    /^bg-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?|transparent|current|inherit)$/
  );
  if (bgMatch) {
    const colorVal = bgMatch[1];
    // Handle special values
    if (colorVal === 'transparent') {
      return { cat: "visual", val: prefix + "bg:[transparent]" };
    }
    if (colorVal === 'current') {
      return { cat: "visual", val: prefix + "bg:[currentColor]" };
    }
    if (colorVal === 'inherit') {
      return { cat: "visual", val: prefix + "bg:[inherit]" };
    }
    return { cat: "visual", val: prefix + "bg:" + colorVal };
  }

  // Border color
  const borderColorMatch = baseClass.match(
    /^border-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/
  );
  if (borderColorMatch)
    return {
      cat: "visual",
      val: prefix + "border:" + borderColorMatch[1],
    };

  // Padding
  const paddingMatch = baseClass.match(/^p([trblxy])?-(.+)$/);
  if (paddingMatch) {
    const side = paddingMatch[1] ? "-" + paddingMatch[1] : "";
    return {
      cat: "space",
      val: prefix + "p" + side + ":" + getSpacing(paddingMatch[2], exact),
    };
  }

  // Margin
  const marginMatch = baseClass.match(
    /^-?m([trblxy])?-(\[.+\]|\d+\.?\d*|px|auto|full|screen)$/
  );
  if (marginMatch) {
    const isNeg = baseClass.startsWith("-");
    const side = marginMatch[1] ? "-" + marginMatch[1] : "";
    let val = getSpacing(marginMatch[2], exact);
    
    if (isNeg) {
      if (val.startsWith('[') && val.endsWith(']')) {
        // Handle arbitrary value: [10px] -> [-10px]
        const inner = val.slice(1, -1);
        val = `[-${inner}]`;
      } else {
        // Handle named/scale value: medium -> -medium
        val = `-${val}`;
      }
    }
    return { cat: "space", val: prefix + "m" + side + ":" + val };
  }

  // Gap
  const gapMatch = baseClass.match(/^gap-([xy])?-?(.+)$/);
  if (gapMatch) {
    const axis = gapMatch[1] ? "-" + gapMatch[1] : "";
    return {
      cat: "space",
      val: prefix + "g" + axis + ":" + getSpacing(gapMatch[2], exact),
    };
  }

  // Width/Height with special values
  const widthMatch = baseClass.match(/^(min-w|max-w|w)-(.+)$/);
  if (widthMatch) {
    const prop = widthMatch[1];
    const rawVal = widthMatch[2];
    // Special width values
    const specialWidthVals = { 'max': '[max-content]', 'min': '[min-content]', 'fit': '[fit-content]', 'prose': '[65ch]' };
    const val = specialWidthVals[rawVal] || getSpacing(rawVal, exact);
    return { cat: "space", val: prefix + prop + ":" + val };
  }
  const heightMatch = baseClass.match(/^(min-h|max-h|h)-(.+)$/);
  if (heightMatch) {
    const prop = heightMatch[1];
    const rawVal = heightMatch[2];
    const specialHeightVals = { 'screen': '[100vh]', 'svh': '[100svh]', 'lvh': '[100lvh]', 'dvh': '[100dvh]', 'max': '[max-content]', 'min': '[min-content]', 'fit': '[fit-content]' };
    const val = specialHeightVals[rawVal] || getSpacing(rawVal, exact);
    return { cat: "space", val: prefix + prop + ":" + val };
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
    return { cat: "visual", val: prefix + "rounded:" + scale };
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
    return { cat: "visual", val: prefix + "shadow:" + scale };
  }

  // Font weight
  const fontWeightMatch = baseClass.match(
    /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/
  );
  if (fontWeightMatch)
    return { cat: "visual", val: prefix + "font:tw-" + fontWeightMatch[1] };

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
    return {
      cat: "visual",
      val: prefix + "border" + side + ":" + getBorderWidth(width, exact),
    };
  }

  // Positional properties (top-0, right-0, bottom-0, left-0, inset-0, etc.)
  const positionMatch = baseClass.match(/^(top|right|bottom|left|inset|inset-x|inset-y)-(\d+|px|auto|full|\[.+\])$/);
  if (positionMatch) {
    const prop = positionMatch[1];
    let val = positionMatch[2];
    // Handle 0 specially
    if (val === '0') {
      val = 'none';
    } else if (val.startsWith('[') && val.endsWith(']')) {
      // Keep arbitrary values as-is
    } else {
      val = getSpacing(val, exact);
    }
    return { cat: "layout", val: prefix + prop + ":" + val };
  }

  // Outline none
  if (baseClass === 'outline-none') {
    return { cat: "visual", val: prefix + "outline:none" };
  }

  // Order
  const orderMatch = baseClass.match(/^order-(\d+|first|last|none)$/);
  if (orderMatch) {
    return { cat: "layout", val: prefix + "order:" + orderMatch[1] };
  }

  // Grid columns
  const gridColsMatch = baseClass.match(/^grid-cols-(\d+|none)$/);
  if (gridColsMatch) {
    return { cat: "layout", val: prefix + "grid-cols:" + gridColsMatch[1] };
  }

  // Column span
  const colSpanMatch = baseClass.match(/^col-span-(\d+|full)$/);
  if (colSpanMatch) {
    return { cat: "layout", val: prefix + "col-span:" + colSpanMatch[1] };
  }

  // Grid rows
  const gridRowsMatch = baseClass.match(/^grid-rows-(\d+|none)$/);
  if (gridRowsMatch) {
    return { cat: "layout", val: prefix + "grid-rows:" + gridRowsMatch[1] };
  }

  // Row span
  const rowSpanMatch = baseClass.match(/^row-span-(\d+|full)$/);
  if (rowSpanMatch) {
    return { cat: "layout", val: prefix + "row-span:" + rowSpanMatch[1] };
  }

  // Opacity
  const opacityMatch = baseClass.match(/^opacity-(\d+)$/);
  if (opacityMatch) {
    return { cat: "visual", val: prefix + "opacity:" + opacityMatch[1] };
  }

  // Gradient direction (bg-gradient-to-*)
  const bgGradientMatch = baseClass.match(/^bg-gradient-to-(t|tr|r|br|b|bl|l|tl)$/);
  if (bgGradientMatch) {
    return { cat: "visual", val: prefix + "bg-image:gradient-to-" + bgGradientMatch[1] };
  }

  // Gradient from-* (starting color)
  const fromMatch = baseClass.match(/^from-(.+)$/);
  if (fromMatch) {
    return { cat: "visual", val: prefix + "from:" + fromMatch[1] };
  }

  // Gradient via-* (middle color)
  const viaMatch = baseClass.match(/^via-(.+)$/);
  if (viaMatch) {
    return { cat: "visual", val: prefix + "via:" + viaMatch[1] };
  }

  // Gradient to-* (ending color) - Note: must come after bg-gradient-to-*
  const toMatch = baseClass.match(/^to-(.+)$/);
  if (toMatch) {
    return { cat: "visual", val: prefix + "to:" + toMatch[1] };
  }

  // Transition utilities
  const transitionMatch = baseClass.match(/^transition(?:-(all|colors|opacity|shadow|transform|none))?$/);
  if (transitionMatch) {
    const type = transitionMatch[1] || 'all';
    return { cat: "visual", val: prefix + "transition:" + type };
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
    return { cat: "visual", val: prefix + "duration:" + durationVal };
  }

  // Ease utilities
  const easeMatch = baseClass.match(/^ease-(linear|in|out|in-out)$/);
  if (easeMatch) {
    return { cat: "visual", val: prefix + "ease:" + easeMatch[1] };
  }

  // Ring utilities - Convert to native ring utilities
  // Tailwind ring-4 generates: box-shadow: 0 0 0 4px var(--tw-ring-color)
  const ringMatch = baseClass.match(/^ring(?:-(\d+))?$/);
  if (ringMatch) {
    const width = ringMatch[1] || '3';
    if (width === '0') {
      return { cat: "visual", val: prefix + "ring:none" };
    }
    // Map Tailwind ring widths to SenangStart semantic values
    const ringScale = {
      '1': 'thin', '2': 'regular', '3': 'small', '4': 'medium', '8': 'big'
    };
    const scale = ringScale[width] || `[${width}px]`;
    return { cat: "visual", val: prefix + "ring:" + scale };
  }

  // Ring offset - converts to native ring-offset utility
  const ringOffsetMatch = baseClass.match(/^ring-offset-(\d+)$/);
  if (ringOffsetMatch) {
    return { cat: "visual", val: prefix + "ring-offset:" + ringOffsetMatch[1] };
  }

  // Ring color - converts to native ring-color utility
  const ringColorMatch = baseClass.match(/^ring-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/);
  if (ringColorMatch) {
    return { cat: "visual", val: prefix + "ring-color:" + ringColorMatch[1] };
  }
  
  // Divide color - directional (check divide-x and divide-y BEFORE generic divide)
  const divideXMatch = baseClass.match(/^divide-x-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/);
  if (divideXMatch) {
    return {
      cat: "visual",
      val: prefix + "divide-x:" + divideXMatch[1],
    };
  }
  
  const divideYMatch = baseClass.match(/^divide-y-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/);
  if (divideYMatch) {
    return {
      cat: "visual",
      val: prefix + "divide-y:" + divideYMatch[1],
    };
  }
  
  // Divide color - all directions (check divide-x and divide-y AFTER generic divide)
  const divideColorMatch = baseClass.match(/^divide-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/);
  if (divideColorMatch) {
    return {
      cat: "visual",
      val: prefix + "divide:" + divideColorMatch[1],
    };
  }
  
  // Divide width - all directions
  const divideWidthMatch = baseClass.match(/^divide-(\d+)$/);
  if (divideWidthMatch) {
    return {
      cat: "visual",
      val: prefix + "divide-w:" + getBorderWidth(divideWidthMatch[1], exact),
    };
  }
  
  // Divide reverse (check these FIRST as they are specific)
  if (baseClass === 'divide-x-reverse') {
    return { cat: "visual", val: prefix + "divide-x:reverse" };
  }
  if (baseClass === 'divide-y-reverse') {
    return { cat: "visual", val: prefix + "divide-y:reverse" };
  }
  
  // Divide width - directional
  const divideXWidthMatch = baseClass.match(/^divide-x-(\d+)$/);
  if (divideXWidthMatch) {
    return {
      cat: "visual",
      val: prefix + "divide-x-w:" + getBorderWidth(divideXWidthMatch[1], exact),
    };
  }
  
  // Divide width (implicit x/y from Tailwind divide-x/y without number is usually 1px)
  // Tailwind: divide-x = border-right-width: 1px (or left if reverse).
  // SenangStart: divide-x-w:thin
  if (baseClass === 'divide-x') {
    return { cat: "visual", val: prefix + "divide-x-w:thin" };
  }
  if (baseClass === 'divide-y') {
    return { cat: "visual", val: prefix + "divide-y-w:thin" };
  }
  
  const divideYWidthMatch = baseClass.match(/^divide-y-(\d+)$/);
  if (divideYWidthMatch) {
    return {
      cat: "visual",
      val: prefix + "divide-y-w:" + getBorderWidth(divideYWidthMatch[1], exact),
    };
  }
  
  // Divide style
  const divideStyleMatch = baseClass.match(/^divide-(solid|dashed|dotted|double|none)$/);
  if (divideStyleMatch) {
    return {
      cat: "visual",
      val: prefix + "divide-style:" + divideStyleMatch[1], // Fixed category from 'color' to 'visual'
    };
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
    unknown = [];

  for (const cls of classes) {
    const result = convertClass(cls, exact);
    if (result) {
      if (result.cat === "layout") layout.push(result.val);
      else if (result.cat === "space") space.push(result.val);
      else if (result.cat === "visual") visual.push(result.val);
    } else {
      unknown.push(cls);
    }
  }

  return { layout, space, visual, unknown };
}

function convertHTML(html, exact) {
  return html.replace(
    /class=(['"])([^"']+)\1/g,
    (match, quote, classValue) => {
      const { layout, space, visual, unknown } = convertClasses(
        classValue,
        exact
      );
      const attrs = [];
      if (layout.length) attrs.push(`layout="${layout.join(" ")}"`);
      if (space.length) attrs.push(`space="${space.join(" ")}"`);
      if (visual.length) attrs.push(`visual="${visual.join(" ")}"`);
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
