/* SenangStart CSS - Tailwind Converter v0.4.0 | MIT License */
(() => {
  // src/converter/base.js
  var spacingScale = {
    0: "none",
    // 0px → none
    px: "thin",
    // 1px → thin
    0.5: "regular",
    // 2px → regular
    1: "tiny",
    // 4px → tiny
    1.5: "tiny-2x",
    // 6px → tiny-2x
    2: "small",
    // 8px → small
    2.5: "small-2x",
    // 10px → small-2x
    3: "small-3x",
    // 12px → small-3x
    3.5: "small-4x",
    // 14px → small-4x
    4: "medium",
    // 16px → medium
    5: "medium-2x",
    // 20px → medium-2x
    6: "medium-3x",
    // 24px → medium-3x
    7: "medium-4x",
    // 28px → medium-4x
    8: "large",
    // 32px → large
    9: "large-2x",
    // 36px → large-2x
    10: "large-3x",
    // 40px → large-3x
    11: "large-4x",
    // 44px → large-4x
    12: "big",
    // 48px → big
    14: "big-2x",
    // 56px → big-2x
    16: "big-3x",
    // 64px → big-3x
    20: "big-4x",
    // 80px → big-4x
    24: "giant",
    // 96px → giant
    28: "giant-2x",
    // 112px → giant-2x
    32: "giant-3x",
    // 128px → giant-3x
    36: "giant-4x",
    // 144px → giant-4x
    40: "vast",
    // 160px → vast
    44: "vast-2x",
    // 176px → vast-2x
    48: "vast-3x",
    // 192px → vast-3x
    52: "vast-4x",
    // 208px → vast-4x
    56: "vast-5x",
    // 224px → vast-5x
    60: "vast-6x",
    // 240px → vast-6x
    64: "vast-7x",
    // 256px → vast-7x
    72: "vast-8x",
    // 288px → vast-8x
    80: "vast-9x",
    // 320px → vast-9x
    96: "vast-10x",
    // 384px → vast-10x
    full: "[100%]",
    screen: "[100vw]",
    auto: "auto"
  };
  var radiusScale = {
    none: "none",
    // 0px → none
    sm: "small",
    // 2px → small (closest to 4px)
    "": "small",
    // 4px → small (Tailwind DEFAULT)
    md: "small",
    // 6px → small (closest to 4px)
    lg: "medium",
    // 8px → medium
    xl: "medium",
    // 12px → medium (closest to 8px)
    "2xl": "big",
    // 16px → big
    "3xl": "big",
    // 24px → big (closest to 16px)
    full: "round"
    // 9999px → round
  };
  var shadowScale = {
    none: "none",
    // none → none
    sm: "small",
    // small shadow → small
    "": "small",
    // DEFAULT shadow → small
    md: "medium",
    // medium shadow → medium
    lg: "big",
    // large shadow → big
    xl: "giant",
    // xl shadow → giant
    "2xl": "giant",
    // 2xl shadow → giant
    inner: "none"
    // inner shadow not directly supported
  };
  var fontSizeScale = {
    xs: "mini",
    // 0.75rem → mini
    sm: "small",
    // 0.875rem → small
    base: "base",
    // 1rem → base
    lg: "large",
    // 1.125rem → large
    xl: "big",
    // 1.25rem → big
    "2xl": "huge",
    // 1.5rem → huge
    "3xl": "grand",
    // 1.875rem → grand
    "4xl": "giant",
    // 2.25rem → giant
    "5xl": "mount",
    // 3rem → mount
    "6xl": "mega",
    // 3.75rem → mega
    "7xl": "giga",
    // 4.5rem → giga
    "8xl": "tera",
    // 6rem → tera
    "9xl": "hero"
    // 8rem → hero
  };
  var lineHeightScale = {
    none: "none",
    // line-height: 1
    tight: "tight",
    // line-height: 1.25
    snug: "snug",
    // line-height: 1.375
    normal: "normal",
    // line-height: 1.5
    relaxed: "relaxed",
    // line-height: 1.625
    loose: "loose"
    // line-height: 2
  };
  var letterSpacingScale = {
    tighter: "tighter",
    // letter-spacing: -0.05em
    tight: "tight",
    // letter-spacing: -0.025em
    normal: "normal",
    // letter-spacing: 0
    wide: "wide",
    // letter-spacing: 0.025em
    wider: "wider",
    // letter-spacing: 0.05em
    widest: "widest"
    // letter-spacing: 0.1em
  };
  var zIndexScale = {
    0: "base",
    // z-index: 0
    10: "low",
    // z-index: 10
    20: "low",
    // z-index: 20
    30: "low",
    // z-index: 30
    40: "low",
    // z-index: 40
    50: "mid",
    // z-index: 50
    60: "high",
    // z-index: 60
    70: "high",
    // z-index: 70
    80: "high",
    // z-index: 80
    90: "high",
    // z-index: 90
    100: "high",
    // z-index: 100
    auto: "auto"
    // z-index: auto
  };
  var fractionScale = {
    "1/2": "half",
    // 50%
    "1/3": "third",
    // 33.33%
    "2/3": "third-2x",
    // 66.67%
    "1/4": "quarter",
    // 25%
    "2/4": "half",
    // 50% (alias)
    "3/4": "quarter-3x",
    // 75%
    "full": "full"
    // 100%
  };
  var layoutMappings = {
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
    "object-scale-down": "object:scale-down"
  };
  var visualKeywords = {
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
  function getSpacing(value, exact) {
    if (value && value.startsWith("[") && value.endsWith("]")) {
      return value;
    }
    if (exact) {
      if (["full", "screen", "auto"].includes(value)) {
        return spacingScale[value] || `[${value}]`;
      }
      return `tw-${value}`;
    }
    return spacingScale[value] || `[${value}]`;
  }
  var borderWidthScale = {
    0: "none",
    1: "thin",
    // 1px → thin (was [1px])
    2: "regular",
    // 2px → regular
    3: "thick",
    // 3px → thick
    4: "tiny",
    // 4px → tiny
    8: "small"
    // 8px → small
  };
  function getBorderWidth(value) {
    return borderWidthScale[value] || `[${value}px]`;
  }
  function convertBase(baseClass, exact) {
    const prefix = "";
    const extraAttr = null;
    if (baseClass === "group") {
      return { cat: "layout", val: "hoverable focusable pressable expandable" };
    }
    if (baseClass === "peer") {
      return [
        { cat: "layout", val: "hoverable focusable pressable expandable" },
        { cat: "interact", val: "peer" }
      ];
    }
    const attachExtra = (result) => {
      if (!result) return null;
      if (extraAttr) {
        return Array.isArray(result) ? [...result, extraAttr] : [result, extraAttr];
      }
      return result;
    };
    if (layoutMappings[baseClass]) {
      return attachExtra({ cat: "layout", val: prefix + layoutMappings[baseClass] });
    }
    if (visualKeywords[baseClass]) {
      return attachExtra({ cat: "visual", val: prefix + visualKeywords[baseClass] });
    }
    const textColorMatch = baseClass.match(
      /^text-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/
    );
    if (textColorMatch) {
      return attachExtra({ cat: "visual", val: prefix + "text:" + textColorMatch[1] });
    }
    if (["text-left", "text-center", "text-right", "text-justify"].includes(
      baseClass
    )) {
      return attachExtra({
        cat: "visual",
        val: prefix + "text:" + baseClass.replace("text-", "")
      });
    }
    const textSizeMatch = baseClass.match(
      /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/
    );
    if (textSizeMatch) {
      const size = exact ? `tw-${textSizeMatch[1]}` : fontSizeScale[textSizeMatch[1]] || textSizeMatch[1];
      return attachExtra({ cat: "visual", val: prefix + "text-size:" + size });
    }
    const leadingMatch = baseClass.match(/^leading-(\[.+\]|none|tight|snug|normal|relaxed|loose)$/);
    if (leadingMatch) {
      const val = leadingMatch[1];
      return attachExtra({ cat: "visual", val: prefix + "leading:" + (lineHeightScale[val] || val) });
    }
    const trackingMatch = baseClass.match(/^tracking-(\[.+\]|tighter|tight|normal|wide|wider|widest)$/);
    if (trackingMatch) {
      const val = trackingMatch[1];
      return attachExtra({ cat: "visual", val: prefix + "tracking:" + (letterSpacingScale[val] || val) });
    }
    const bgMatch = baseClass.match(
      /^bg-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?|transparent|current|inherit)$/
    );
    if (bgMatch) {
      const colorVal = bgMatch[1];
      if (colorVal === "transparent") {
        return attachExtra({ cat: "visual", val: prefix + "bg:transparent" });
      }
      if (colorVal === "current") {
        return attachExtra({ cat: "visual", val: prefix + "bg:currentColor" });
      }
      if (colorVal === "inherit") {
        return attachExtra({ cat: "visual", val: prefix + "bg:inherit" });
      }
      return attachExtra({ cat: "visual", val: prefix + "bg:" + colorVal });
    }
    const borderColorMatch = baseClass.match(
      /^border-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black|transparent|current|inherit)(?:-\d+)?)$/
    );
    if (borderColorMatch) {
      let colorVal = borderColorMatch[1];
      if (colorVal === "current") colorVal = "currentColor";
      return attachExtra({
        cat: "visual",
        val: prefix + "border:" + colorVal
      });
    }
    const borderSideColorMatch = baseClass.match(
      /^border-([trbl])-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black|transparent|current|inherit)(?:-\d+)?)$/
    );
    if (borderSideColorMatch) {
      const side = borderSideColorMatch[1];
      let colorVal = borderSideColorMatch[2];
      if (colorVal === "current") colorVal = "currentColor";
      return attachExtra({
        cat: "visual",
        val: prefix + `border-${side}:${colorVal}`
      });
    }
    const paddingMatch = baseClass.match(/^p([trblxy])?-(.+)$/);
    if (paddingMatch) {
      const side = paddingMatch[1] ? "-" + paddingMatch[1] : "";
      return attachExtra({
        cat: "space",
        val: prefix + "p" + side + ":" + getSpacing(paddingMatch[2], exact)
      });
    }
    const marginMatch = baseClass.match(
      /^-?m([trblxy])?-(\[.+\]|\d+\.?\d*|px|auto|full|screen)$/
    );
    if (marginMatch) {
      const isNeg = baseClass.startsWith("-");
      const side = marginMatch[1] ? "-" + marginMatch[1] : "";
      let val = getSpacing(marginMatch[2], exact);
      if (isNeg && val) {
        if (val.startsWith("[") && val.endsWith("]")) {
          const inner = val.slice(1, -1);
          val = `[-${inner}]`;
        } else {
          val = `-${val}`;
        }
      }
      return attachExtra({ cat: "space", val: prefix + "m" + side + ":" + val });
    }
    const gapMatch = baseClass.match(/^gap-([xy])?-?(.+)$/);
    if (gapMatch) {
      const axis = gapMatch[1] ? "-" + gapMatch[1] : "";
      return attachExtra({
        cat: "space",
        val: prefix + "g" + axis + ":" + getSpacing(gapMatch[2], exact)
      });
    }
    const widthMatch = baseClass.match(/^(min-w|max-w|w)-(.+)$/);
    if (widthMatch) {
      const prop = widthMatch[1];
      const rawVal = widthMatch[2];
      const specialWidthVals = { "max": "[max-content]", "min": "[min-content]", "fit": "[fit-content]", "prose": "[65ch]" };
      const val = specialWidthVals[rawVal] || getSpacing(rawVal, exact);
      return attachExtra({ cat: "space", val: prefix + prop + ":" + val });
    }
    const heightMatch = baseClass.match(/^(min-h|max-h|h)-(.+)$/);
    if (heightMatch) {
      const prop = heightMatch[1];
      const rawVal = heightMatch[2];
      const specialHeightVals = { "screen": "[100vh]", "svh": "[100svh]", "lvh": "[100lvh]", "dvh": "[100dvh]", "max": "[max-content]", "min": "[min-content]", "fit": "[fit-content]" };
      const val = specialHeightVals[rawVal] || getSpacing(rawVal, exact);
      return attachExtra({ cat: "space", val: prefix + prop + ":" + val });
    }
    const sizeMatch = baseClass.match(/^size-(.+)$/);
    if (sizeMatch) {
      const rawVal = sizeMatch[1];
      const specialSizeVals = { "max": "[max-content]", "min": "[min-content]", "fit": "[fit-content]" };
      const val = specialSizeVals[rawVal] || getSpacing(rawVal, exact);
      return attachExtra({ cat: "space", val: prefix + "size:" + val });
    }
    const roundedMatch = baseClass.match(/^rounded(?:-(.+))?$/);
    if (roundedMatch) {
      const size = roundedMatch[1] || "";
      const scale = exact ? size === "" ? "tw-DEFAULT" : `tw-${size}` : radiusScale[size] || "medium";
      return attachExtra({ cat: "visual", val: prefix + "rounded:" + scale });
    }
    const shadowMatch = baseClass.match(/^shadow(?:-(.+))?$/);
    if (shadowMatch) {
      const size = shadowMatch[1] || "";
      const scale = exact ? size === "" ? "tw-DEFAULT" : `tw-${size}` : shadowScale[size] || "medium";
      return attachExtra({ cat: "visual", val: prefix + "shadow:" + scale });
    }
    const fontWeightMatch = baseClass.match(
      /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/
    );
    if (fontWeightMatch) {
      return attachExtra({ cat: "visual", val: prefix + "font:tw-" + fontWeightMatch[1] });
    }
    const borderWidthMatch = baseClass.match(
      /^border(?:-([trblxy]))?(?:-(\d+))?$/
    );
    if (borderWidthMatch && (borderWidthMatch[2] || !borderWidthMatch[1] && baseClass === "border")) {
      const side = borderWidthMatch[1] ? "-" + borderWidthMatch[1] + "-w" : "-w";
      const width = borderWidthMatch[2] || "1";
      return attachExtra({
        cat: "visual",
        val: prefix + "border" + side + ":" + getBorderWidth(width, exact)
      });
    }
    const positionMatch = baseClass.match(/^(top|right|bottom|left|inset|inset-x|inset-y)-(\d+|px|auto|full|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|\[.+\])$/);
    if (positionMatch) {
      const prop = positionMatch[1];
      let val = positionMatch[2];
      if (val && val.startsWith("[") && val.endsWith("]")) {
      } else if (fractionScale[val]) {
        val = fractionScale[val];
      } else if (val === "0") {
        val = "0";
      } else {
        val = getSpacing(val, exact);
      }
      return attachExtra({ cat: "layout", val: prefix + prop + ":" + val });
    }
    const translateMatch = baseClass.match(/^(-?)translate-([xy])-(\d+|px|full|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4|\[.+\])$/);
    if (translateMatch) {
      const isNeg = translateMatch[1] === "-";
      const axis = translateMatch[2];
      let val = translateMatch[3];
      if (val && val.startsWith("[") && val.endsWith("]")) {
        if (isNeg) {
          const inner = val.slice(1, -1);
          val = `[-${inner}]`;
        }
      } else if (fractionScale[val]) {
        val = fractionScale[val];
        if (isNeg) val = `-${val}`;
      } else if (val === "0") {
        val = "0";
      } else {
        val = getSpacing(val, exact);
        if (isNeg) val = `-${val}`;
      }
      return attachExtra({ cat: "visual", val: prefix + `translate-${axis}:${val}` });
    }
    if (baseClass === "outline-none") {
      return attachExtra({ cat: "visual", val: prefix + "outline:none" });
    }
    const orderMatch = baseClass.match(/^order-(\d+|first|last|none)$/);
    if (orderMatch) {
      return attachExtra({ cat: "layout", val: prefix + "order:" + orderMatch[1] });
    }
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
    const basisMatch = baseClass.match(/^basis-(\[.+\]|\d+\.?\d*|auto|full|1\/2|1\/3|2\/3|1\/4|2\/4|3\/4)$/);
    if (basisMatch) {
      let val = basisMatch[1];
      if (val.startsWith("[") && val.endsWith("]")) {
      } else if (fractionScale[val]) {
        val = fractionScale[val];
      } else if (val === "0") {
        val = "0";
      }
      return attachExtra({ cat: "layout", val: prefix + "basis:" + val });
    }
    const gridColsMatch = baseClass.match(/^grid-cols-(\d+|none)$/);
    if (gridColsMatch) {
      return attachExtra({ cat: "layout", val: prefix + "grid-cols:" + gridColsMatch[1] });
    }
    const colSpanMatch = baseClass.match(/^col-span-(\d+|full)$/);
    if (colSpanMatch) {
      return attachExtra({ cat: "layout", val: prefix + "col-span:" + colSpanMatch[1] });
    }
    const gridRowsMatch = baseClass.match(/^grid-rows-(\d+|none)$/);
    if (gridRowsMatch) {
      return attachExtra({ cat: "layout", val: prefix + "grid-rows:" + gridRowsMatch[1] });
    }
    const rowSpanMatch = baseClass.match(/^row-span-(\d+|full)$/);
    if (rowSpanMatch) {
      return attachExtra({ cat: "layout", val: prefix + "row-span:" + rowSpanMatch[1] });
    }
    const opacityMatch = baseClass.match(/^opacity-(\d+)$/);
    if (opacityMatch) {
      return attachExtra({ cat: "visual", val: prefix + "opacity:" + opacityMatch[1] });
    }
    const bgGradientMatch = baseClass.match(/^bg-gradient-to-(t|tr|r|br|b|bl|l|tl)$/);
    if (bgGradientMatch) {
      return attachExtra({ cat: "visual", val: prefix + "bg-image:gradient-to-" + bgGradientMatch[1] });
    }
    const fromMatch = baseClass.match(/^from-(.+)$/);
    if (fromMatch) {
      return attachExtra({ cat: "visual", val: prefix + "from:" + fromMatch[1] });
    }
    const viaMatch = baseClass.match(/^via-(.+)$/);
    if (viaMatch) {
      return attachExtra({ cat: "visual", val: prefix + "via:" + viaMatch[1] });
    }
    const toMatch = baseClass.match(/^to-(.+)$/);
    if (toMatch) {
      return attachExtra({ cat: "visual", val: prefix + "to:" + toMatch[1] });
    }
    const transitionMatch = baseClass.match(/^transition(?:-(all|colors|opacity|shadow|transform|none))?$/);
    if (transitionMatch) {
      const type = transitionMatch[1] || "all";
      return attachExtra({ cat: "visual", val: prefix + "transition:" + type });
    }
    const durationMatch = baseClass.match(/^duration-(\d+)$/);
    if (durationMatch) {
      const ms = parseInt(durationMatch[1]);
      let durationVal;
      if (ms <= 75) durationVal = "instant";
      else if (ms <= 100) durationVal = "quick";
      else if (ms <= 150) durationVal = "fast";
      else if (ms <= 200) durationVal = "normal";
      else if (ms <= 300) durationVal = "slow";
      else if (ms <= 500) durationVal = "slower";
      else durationVal = "lazy";
      return attachExtra({ cat: "visual", val: prefix + "duration:" + durationVal });
    }
    const easeMatch = baseClass.match(/^ease-(linear|in|out|in-out)$/);
    if (easeMatch) {
      return attachExtra({ cat: "visual", val: prefix + "ease:" + easeMatch[1] });
    }
    const ringMatch = baseClass.match(/^ring(?:-(\d+))?$/);
    if (ringMatch) {
      const width = ringMatch[1] || "3";
      if (width === "0") {
        return attachExtra({ cat: "visual", val: prefix + "ring:none" });
      }
      const ringScale = {
        "1": "thin",
        "2": "regular",
        "3": "small",
        "4": "medium",
        "8": "big"
      };
      const scale = ringScale[width] || `[${width}px]`;
      return attachExtra({ cat: "visual", val: prefix + "ring:" + scale });
    }
    const ringOffsetMatch = baseClass.match(/^ring-offset-(\d+)$/);
    if (ringOffsetMatch) {
      return attachExtra({ cat: "visual", val: prefix + "ring-offset:" + ringOffsetMatch[1] });
    }
    const ringColorMatch = baseClass.match(/^ring-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/);
    if (ringColorMatch) {
      return attachExtra({ cat: "visual", val: prefix + "ring-color:" + ringColorMatch[1] });
    }
    const divideXMatch = baseClass.match(/^divide-x-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/);
    if (divideXMatch) {
      return attachExtra({
        cat: "visual",
        val: prefix + "divide-x:" + divideXMatch[1]
      });
    }
    const divideYMatch = baseClass.match(/^divide-y-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/);
    if (divideYMatch) {
      return attachExtra({
        cat: "visual",
        val: prefix + "divide-y:" + divideYMatch[1]
      });
    }
    const divideColorMatch = baseClass.match(/^divide-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/);
    if (divideColorMatch) {
      return attachExtra({
        cat: "visual",
        val: prefix + "divide:" + divideColorMatch[1]
      });
    }
    const divideWidthMatch = baseClass.match(/^divide-(\d+)$/);
    if (divideWidthMatch) {
      return attachExtra({
        cat: "visual",
        val: prefix + "divide-w:" + getBorderWidth(divideWidthMatch[1], exact)
      });
    }
    if (baseClass === "divide-x-reverse") {
      return attachExtra({ cat: "visual", val: prefix + "divide-x:reverse" });
    }
    if (baseClass === "divide-y-reverse") {
      return attachExtra({ cat: "visual", val: prefix + "divide-y:reverse" });
    }
    const divideXWidthMatch = baseClass.match(/^divide-x-(\d+)$/);
    if (divideXWidthMatch) {
      return attachExtra({
        cat: "visual",
        val: prefix + "divide-x-w:" + getBorderWidth(divideXWidthMatch[1], exact)
      });
    }
    if (baseClass === "divide-x") {
      return attachExtra({ cat: "visual", val: prefix + "divide-x-w:thin" });
    }
    if (baseClass === "divide-y") {
      return attachExtra({ cat: "visual", val: prefix + "divide-y-w:thin" });
    }
    const divideYWidthMatch = baseClass.match(/^divide-y-(\d+)$/);
    if (divideYWidthMatch) {
      return attachExtra({
        cat: "visual",
        val: prefix + "divide-y-w:" + getBorderWidth(divideYWidthMatch[1], exact)
      });
    }
    const divideStyleMatch = baseClass.match(/^divide-(solid|dashed|dotted|double|none)$/);
    if (divideStyleMatch) {
      return attachExtra({
        cat: "visual",
        val: prefix + "divide-style:" + divideStyleMatch[1]
        // Fixed category from 'color' to 'visual'
      });
    }
    const borderStyleMatch = baseClass.match(/^border-(solid|dashed|dotted|double|none)$/);
    if (borderStyleMatch) {
      return attachExtra({
        cat: "visual",
        val: prefix + "border-style:" + borderStyleMatch[1]
      });
    }
    const blurMatch = baseClass.match(/^blur-(0|sm|md|lg|xl|2xl|3xl)$/);
    if (blurMatch) {
      const blurScale = {
        "0": "none",
        "sm": "tiny",
        "md": "small",
        "lg": "medium",
        "xl": "big",
        "2xl": "giant",
        "3xl": "vast"
      };
      return attachExtra({
        cat: "visual",
        val: prefix + "blur:" + blurScale[blurMatch[1]]
      });
    }
    const brightnessMatch = baseClass.match(/^brightness-(0|50|75|90|95|100|105|110|125|150|200)$/);
    if (brightnessMatch) {
      const brightnessScale = {
        "0": "dim",
        "50": "dim",
        "75": "dark",
        "90": "dark",
        "95": "dark",
        "100": "normal",
        "105": "bright",
        "110": "bright",
        "125": "vivid",
        "150": "vivid",
        "200": "vivid"
      };
      return attachExtra({
        cat: "visual",
        val: prefix + "brightness:" + brightnessScale[brightnessMatch[1]]
      });
    }
    const contrastMatch = baseClass.match(/^contrast-(0|50|75|100|125|150|200)$/);
    if (contrastMatch) {
      const contrastScale = {
        "0": "low",
        "50": "low",
        "75": "reduced",
        "100": "normal",
        "125": "high",
        "150": "high",
        "200": "max"
      };
      return attachExtra({
        cat: "visual",
        val: prefix + "contrast:" + contrastScale[contrastMatch[1]]
      });
    }
    const grayscaleMatch = baseClass.match(/^grayscale(0)?$/);
    if (grayscaleMatch) {
      const val = grayscaleMatch[1] === "0" ? "none" : "full";
      return attachExtra({
        cat: "visual",
        val: prefix + "grayscale:" + val
      });
    }
    const hueRotateMatch = baseClass.match(/^hue-rotate-(0|15|30|60|90|180)$/);
    if (hueRotateMatch) {
      return attachExtra({
        cat: "visual",
        val: prefix + "hue-rotate:" + hueRotateMatch[1]
      });
    }
    const invertMatch = baseClass.match(/^invert(0)?$/);
    if (invertMatch) {
      const val = invertMatch[1] === "0" ? "none" : "full";
      return attachExtra({
        cat: "visual",
        val: prefix + "invert:" + val
      });
    }
    const saturateMatch = baseClass.match(/^saturate-(0|50|100|150|200)$/);
    if (saturateMatch) {
      const saturateScale = {
        "0": "none",
        "50": "low",
        "100": "normal",
        "150": "high",
        "200": "vivid"
      };
      return attachExtra({
        cat: "visual",
        val: prefix + "saturate:" + saturateScale[saturateMatch[1]]
      });
    }
    const sepiaMatch = baseClass.match(/^sepia(0)?$/);
    if (sepiaMatch) {
      const val = sepiaMatch[1] === "0" ? "none" : "full";
      return attachExtra({
        cat: "visual",
        val: prefix + "sepia:" + val
      });
    }
    const animateMatch = baseClass.match(/^animate-(none|spin|ping|pulse|bounce)$/);
    if (animateMatch) {
      return attachExtra({
        cat: "visual",
        val: prefix + "animate:" + animateMatch[1]
      });
    }
    return null;
  }

  // src/converter/variants.js
  var SCREENS = /* @__PURE__ */ new Set(["sm", "md", "lg", "xl", "2xl"]);
  var CONTAINERS = /* @__PURE__ */ new Set(["3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl"]);
  var SAME = /* @__PURE__ */ new Set([
    "hover",
    "focus",
    "focus-visible",
    "focus-within",
    "active",
    "visited",
    "target",
    "checked",
    "indeterminate",
    "default",
    "required",
    "optional",
    "valid",
    "invalid",
    "user-valid",
    "user-invalid",
    "in-range",
    "out-of-range",
    "placeholder-shown",
    "autofill",
    "read-only",
    "disabled",
    "enabled",
    "empty",
    "open",
    "first",
    "last",
    "only",
    "odd",
    "even",
    "first-of-type",
    "last-of-type",
    "before",
    "after",
    "first-letter",
    "first-line",
    "marker",
    "selection",
    "file",
    "backdrop",
    "placeholder",
    "dark",
    "rtl",
    "ltr",
    "print",
    "portrait",
    "landscape",
    "motion-safe",
    "motion-reduce",
    "contrast-more",
    "contrast-less",
    "forced-colors",
    "pointer-fine",
    "pointer-coarse"
  ]);
  var GROUP_STATES = { hover: "hover", focus: "focus", "focus-visible": "focus-visible", "focus-within": "focus-within", active: "active", open: "expanded", checked: "checked" };
  function convertVariant(variant) {
    if (SAME.has(variant)) return { prefix: variant };
    if (SCREENS.has(variant)) return { prefix: `tw-${variant}` };
    if (variant.startsWith("max-") && SCREENS.has(variant.slice(4))) return { prefix: `max-tw-${variant.slice(4)}` };
    if (variant.startsWith("min-") && SCREENS.has(variant.slice(4))) return { prefix: `tw-${variant.slice(4)}` };
    if (variant.startsWith("@")) {
      const [size, name] = variant.slice(1).split("/");
      const isMax = size.startsWith("max-");
      const key = isMax ? size.slice(4) : size;
      if (!CONTAINERS.has(key) || !SCREENS.has(key)) return null;
      return { prefix: `@${isMax ? "max-" : ""}tw-${key}${name ? `/${name}` : ""}` };
    }
    const gm = /^(group|peer)-([a-z-]+?)(?:\/[\w-]+)?$/.exec(variant);
    if (gm) {
      const state = GROUP_STATES[gm[2]];
      if (!state) return null;
      if (gm[1] === "group") return { prefix: state, needsGroup: true };
      return { prefix: state, extra: { cat: "listens", val: "peer" } };
    }
    if (/^aria-(\[.+\]|[a-z]+)$/.test(variant)) return { prefix: variant };
    if (/^data-(\[.+\]|[a-z][a-z0-9-]*)$/.test(variant)) return { prefix: variant };
    if (/^has-\[.+\]$/.test(variant)) return { prefix: variant };
    if (variant.startsWith("not-")) {
      const inner = variant.slice(4);
      if (SAME.has(inner) || /^\[.+\]$/.test(inner)) return { prefix: variant };
      return null;
    }
    return null;
  }
  function splitClass(cls) {
    const parts = [];
    let depth = 0;
    let start = 0;
    for (let i = 0; i < cls.length; i++) {
      const ch = cls[i];
      if (ch === "[") depth++;
      else if (ch === "]") depth = Math.max(0, depth - 1);
      else if (ch === ":" && depth === 0) {
        parts.push(cls.slice(start, i));
        start = i + 1;
      }
    }
    parts.push(cls.slice(start));
    let base = parts.pop();
    let important = false;
    if (base.startsWith("!")) {
      important = true;
      base = base.slice(1);
    }
    if (base.endsWith("!") && !base.endsWith("]!")) {
      important = true;
      base = base.slice(0, -1);
    } else if (base.endsWith("]!")) {
      important = true;
      base = base.slice(0, -1);
    }
    return { variants: parts, base, important };
  }

  // src/converter/extra.js
  var NUM = /^\d+(\.\d+)?$/;
  var exactMode = false;
  var radiusToken = (size) => size.startsWith("[") ? size : exactMode ? `tw-${size === "DEFAULT" ? "base" : size}` : radiusScale[size === "DEFAULT" ? "" : size] || size;
  var FRACTIONS = { "1/2": "half", "2/4": "half", "1/3": "third", "2/3": "third-2x", "1/4": "quarter", "3/4": "quarter-3x" };
  var asArb = (v) => /^\[.+\]$/.test(v) ? v : null;
  function convertExtra(base, exact) {
    exactMode = !!exact;
    if (/^\[(?:--)?[a-zA-Z][\w-]*:.+\]$/.test(base)) return { cat: "visual", val: base };
    let m;
    if (m = /^(-?)rotate(?:-([xyz]))?-(\d+|\[.+\])$/.exec(base)) {
      const prop = m[2] ? `rotate-${m[2]}` : "rotate";
      return { cat: "visual", val: `${prop}:${m[1]}${m[3]}` };
    }
    if (m = /^(-?)scale(?:-([xy]))?-(\d+|\[.+\])$/.exec(base)) {
      const prop = m[2] ? `scale-${m[2]}` : "scale";
      return { cat: "visual", val: `${prop}:${m[1]}${m[3]}` };
    }
    if (m = /^(-?)skew-([xy])-(\d+|\[.+\])$/.exec(base)) {
      return { cat: "visual", val: `skew-${m[2]}:${m[1]}${m[3]}` };
    }
    if (base === "transform-none") return { cat: "visual", val: "[transform:none]" };
    if (m = /^prose(?:-(sm|base|lg|xl|2xl|invert))?$/.exec(base)) {
      const size = m[1];
      if (!size || size === "base") return { cat: "visual", val: "prose" };
      if (size === "xl" || size === "2xl") return { cat: "visual", val: "prose prose-lg" };
      return { cat: "visual", val: `prose prose-${size}` };
    }
    if (m = /^bg-linear-to-(t|tr|r|br|b|bl|l|tl)$/.exec(base)) return { cat: "visual", val: `bg-image:gradient-to-${m[1]}` };
    if (m = /^bg-linear-(\d+)$/.exec(base)) return { cat: "visual", val: `bg-image:gradient-[${m[1]}deg]` };
    if (m = /^bg-linear-\[(.+)\]$/.exec(base)) return { cat: "visual", val: `bg-image:gradient-[${m[1]}]` };
    if (base === "bg-radial") return { cat: "visual", val: "bg-image:radial" };
    if (m = /^bg-radial-\[(.+)\]$/.exec(base)) return { cat: "visual", val: `bg-image:radial-[${m[1]}]` };
    if (base === "bg-conic") return { cat: "visual", val: "bg-image:conic" };
    if (m = /^bg-conic-(\d+)$/.exec(base)) return { cat: "visual", val: `bg-image:conic-[from_${m[1]}deg]` };
    if (m = /^bg-conic-\[(.+)\]$/.exec(base)) return { cat: "visual", val: `bg-image:conic-[${m[1]}]` };
    if (m = /^(from|via|to)-(\d+)%$/.exec(base)) return { cat: "visual", val: `${m[1]}-pos:${m[2]}` };
    if (m = /^(from|via|to)-\[(\d+(?:\.\d+)?%)\]$/.exec(base)) return { cat: "visual", val: `${m[1]}-pos:[${m[2]}]` };
    if (exact && (m = /^shadow(?:-(2xs|xs|sm|md|lg|xl|2xl|inner|none))?$/.exec(base))) {
      const v4 = m[1] || "sm";
      const key = { "2xs": null, xs: "tw-sm", sm: "tw-DEFAULT", md: "tw-md", lg: "tw-lg", xl: "tw-xl", "2xl": "tw-2xl", inner: "tw-inner", none: "tw-none" }[v4];
      if (key === null) return { cat: "visual", val: "shadow:[0_1px_rgb(0_0_0_/_0.05)]" };
      return { cat: "visual", val: `shadow:${key}` };
    }
    if (m = /^(w|h|min-w|max-w|min-h|max-h|size|basis)-(full|min|max|fit|\d\/\d)$/.exec(base)) {
      return { cat: m[1] === "basis" ? "layout" : "space", val: `${m[1]}:${FRACTIONS[m[2]] || m[2]}` };
    }
    if (m = /^rounded-(t|b|l|r|tl|tr|bl|br|s|e|ss|se|es|ee)(?:-(none|sm|md|lg|xl|2xl|3xl|full|\[.+\]))?$/.exec(base)) {
      const side = { s: "l", e: "r", ss: "tl", se: "tr", es: "bl", ee: "br" }[m[1]] || m[1];
      const size = m[2] === void 0 ? "DEFAULT" : m[2];
      return { cat: "visual", val: `rounded-${side}:${radiusToken(size)}` };
    }
    if (m = /^(-?)translate-z-(\d+(?:\.\d+)?|px|\[.+\])$/.exec(base)) {
      const v = m[2].startsWith("[") ? m[2] : getSpacing(m[2], exact);
      return { cat: "visual", val: `translate-z:${m[1]}${v}` };
    }
    if (/^-?(?:[pm][trblxy]?|gap(?:-[xy])?)-\d+\/\d+$/.test(base)) return null;
    if (m = /^(-?)space-([xy])-(\d+(?:\.\d+)?|px|\[.+\])$/.exec(base)) {
      const v = m[3].startsWith("[") ? m[3] : getSpacing(m[3], exact);
      return { cat: "visual", val: `space-${m[2]}:${m[1]}${v}` };
    }
    if (/^space-[xy]-reverse$/.test(base)) return null;
    if (m = /^border-([tblr]|x|y)$/.exec(base)) {
      const sides = { x: ["l", "r"], y: ["t", "b"] }[m[1]] || [m[1]];
      return sides.map((side) => ({ cat: "visual", val: `border-${side}-w:thin` }));
    }
    if (m = /^max-w-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|prose|screen-(?:sm|md|lg|xl|2xl))$/.exec(base)) {
      const MAXW = { xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", prose: "65ch", "screen-sm": "640px", "screen-md": "768px", "screen-lg": "1024px", "screen-xl": "1280px", "screen-2xl": "1536px" };
      return { cat: "space", val: `max-w:[${MAXW[m[1]]}]` };
    }
    if (m = /^mask-(none|alpha|luminance|match)$/.exec(base)) return { cat: "visual", val: `mask:${m[1]}` };
    if (m = /^(mask-(?:image|mode|origin|clip|composite|position|repeat|size|type)|perspective-origin|transform-style)-([a-z0-9-]+|\[.+\])$/.exec(base)) return { cat: "visual", val: `${m[1]}:${m[2]}` };
    if (m = /^backface-(visible|hidden)$/.exec(base)) return { cat: "visual", val: `backface:${m[1]}` };
    if (m = /^origin-(center|top|top-right|right|bottom-right|bottom|bottom-left|left|top-left|\[.+\])$/.exec(base)) return { cat: "visual", val: `origin:${m[1]}` };
    if (m = /^perspective-(\d+|none|\[.+\])$/.exec(base)) return { cat: "visual", val: `perspective:${m[1]}` };
    if (m = /^place-(items|content|self)-([a-z-]+)$/.exec(base)) return { cat: "layout", val: `place-${m[1]}:${m[2]}` };
    if (m = /^justify-items-([a-z]+)$/.exec(base)) return { cat: "layout", val: `justify-items:${m[1]}` };
    if (m = /^content-(center|start|end|between|around|evenly|baseline|stretch)$/.exec(base)) return { cat: "layout", val: `content:${m[1]}` };
    if (m = /^aspect-(video|square|auto|\[.+\])$/.exec(base)) return { cat: "layout", val: `aspect:${m[1]}` };
    if (m = /^line-clamp-(\d+|none)$/.exec(base)) return { cat: "visual", val: `line-clamp:${m[1]}` };
    if (base === "sr-only") {
      return { cat: "visual", val: "[position:absolute] [width:1px] [height:1px] [padding:0] [margin:-1px] [overflow:hidden] [clip:rect(0,0,0,0)] [white-space:nowrap] [border-width:0]" };
    }
    if (m = /^columns-(\d+|\[.+\])$/.exec(base)) return { cat: "layout", val: `[columns:${m[1].replace(/^\[|\]$/g, "")}]` };
    return void 0;
  }
  var ARB_PREFIX = {
    p: ["space", "p"],
    px: ["space", "p-x"],
    py: ["space", "p-y"],
    pt: ["space", "p-t"],
    pr: ["space", "p-r"],
    pb: ["space", "p-b"],
    pl: ["space", "p-l"],
    m: ["space", "m"],
    mx: ["space", "m-x"],
    my: ["space", "m-y"],
    mt: ["space", "m-t"],
    mr: ["space", "m-r"],
    mb: ["space", "m-b"],
    ml: ["space", "m-l"],
    gap: ["space", "g"],
    "gap-x": ["space", "g-x"],
    "gap-y": ["space", "g-y"],
    w: ["space", "w"],
    h: ["space", "h"],
    "min-w": ["space", "min-w"],
    "max-w": ["space", "max-w"],
    "min-h": ["space", "min-h"],
    "max-h": ["space", "max-h"],
    size: ["space", "size"],
    top: ["layout", "top"],
    right: ["layout", "right"],
    bottom: ["layout", "bottom"],
    left: ["layout", "left"],
    inset: ["layout", "inset"],
    "inset-x": ["layout", "inset-x"],
    "inset-y": ["layout", "inset-y"],
    z: ["layout", "z"],
    order: ["layout", "order"],
    basis: ["layout", "basis"],
    flex: ["layout", "flex"],
    "grid-cols": ["layout", "grid-cols"],
    "grid-rows": ["layout", "grid-rows"],
    rounded: ["visual", "rounded"],
    shadow: ["visual", "shadow"],
    opacity: ["visual", "opacity"],
    leading: ["visual", "leading"],
    tracking: ["visual", "tracking"],
    duration: ["visual", "duration"],
    delay: ["visual", "delay"],
    ring: ["visual", "ring"],
    "ring-offset": ["visual", "ring-offset"],
    outline: ["visual", "outline-w"],
    "translate-x": ["visual", "translate-x"],
    "translate-y": ["visual", "translate-y"],
    indent: ["visual", "indent"],
    content: ["visual", "content"],
    fill: ["visual", "fill"],
    stroke: ["visual", "stroke"],
    accent: ["visual", "accent"],
    caret: ["visual", "caret"],
    decoration: ["visual", "decoration"],
    from: ["visual", "from"],
    via: ["visual", "via"],
    to: ["visual", "to"],
    "border-t": ["visual", "border-t"],
    "border-b": ["visual", "border-b"],
    "border-l": ["visual", "border-l"],
    "border-r": ["visual", "border-r"]
  };
  var LENGTH = /^-?(\d*\.?\d+)(px|r?em|%|vh|vw|vmin|vmax|ch|ex|dvh|svh|lvh|cq[wh])$|^calc\(|^var\(|^clamp\(|^min\(|^max\(/;
  var COLOR = /^(#[0-9a-fA-F]{3,8}|rgba?\(|hsla?\(|oklch\(|oklab\(|color-mix\(|var\(--|transparent$|currentColor$)/;
  function convertArbitrary(base) {
    const m = /^(-?)([a-z][a-z-]*?)-\[(.+)\]$/.exec(base);
    if (!m) return null;
    const [, neg, prefix, raw] = m;
    const value = neg ? `[-${raw}]` : `[${raw}]`;
    const plain = raw.replace(/_/g, " ");
    if (ARB_PREFIX[prefix]) {
      const [cat, prop] = ARB_PREFIX[prefix];
      return { cat, val: `${prop}:${value}` };
    }
    if (prefix === "text") {
      if (LENGTH.test(plain)) return { cat: "visual", val: `text-size:${value}` };
      return { cat: "visual", val: `text:${value}` };
    }
    if (prefix === "bg") {
      if (/^(url\(|linear-gradient|radial-gradient|conic-gradient|repeating-)/.test(plain)) return { cat: "visual", val: `bg-image:${value}` };
      if (COLOR.test(plain) || !LENGTH.test(plain)) return { cat: "visual", val: `bg:${value}` };
      return { cat: "visual", val: `bg-size:${value}` };
    }
    if (prefix === "border") {
      if (LENGTH.test(plain) || NUM.test(plain)) return { cat: "visual", val: `border-w:${value}` };
      return { cat: "visual", val: `border:${value}` };
    }
    if (prefix === "font") {
      if (NUM.test(plain)) return { cat: "visual", val: `font:${value}` };
      return { cat: "visual", val: `font-family:${value}` };
    }
    if (prefix === "grid-cols" || prefix === "grid-rows") return { cat: "layout", val: `${prefix}:${value}` };
    if (asArb(value)) return null;
    return null;
  }

  // src/converter/html.js
  var RAW_TEXT = /* @__PURE__ */ new Set(["script", "style", "pre", "textarea"]);
  var SS_ATTRS = ["layout", "space", "visual", "interact", "listens"];
  function convertHTML(html, options) {
    return rewriteClassAttributes(html, options).html;
  }
  function rewriteClassAttributes(html, options) {
    const opts = typeof options === "boolean" ? { exact: options } : options || {};
    const attrPrefix = opts.prefix ? opts.prefix.endsWith("-") ? opts.prefix : `${opts.prefix}-` : "";
    const src = String(html ?? "");
    let out = "";
    let i = 0;
    let converted = 0;
    const unknown = /* @__PURE__ */ new Map();
    while (i < src.length) {
      const lt = src.indexOf("<", i);
      if (lt === -1) {
        out += src.slice(i);
        break;
      }
      out += src.slice(i, lt);
      if (src.startsWith("<!--", lt)) {
        const end = src.indexOf("-->", lt + 4);
        const stop = end === -1 ? src.length : end + 3;
        out += src.slice(lt, stop);
        i = stop;
        continue;
      }
      if (src[lt + 1] === "!" || src[lt + 1] === "?") {
        const end = src.indexOf(">", lt);
        const stop = end === -1 ? src.length : end + 1;
        out += src.slice(lt, stop);
        i = stop;
        continue;
      }
      if (src[lt + 1] === "/") {
        const end = src.indexOf(">", lt);
        const stop = end === -1 ? src.length : end + 1;
        out += src.slice(lt, stop);
        i = stop;
        continue;
      }
      const nm = /^<([A-Za-z][\w:.-]*)/.exec(src.slice(lt, lt + 200));
      if (!nm) {
        out += "<";
        i = lt + 1;
        continue;
      }
      const tag = nm[1];
      const tagLower = tag.toLowerCase();
      let j = lt + 1 + tag.length;
      const attrs = [];
      let selfClosing = false;
      while (j < src.length) {
        const c = src[j];
        if (/\s/.test(c)) {
          j++;
          continue;
        }
        if (c === ">") {
          j++;
          break;
        }
        if (c === "/" && src[j + 1] === ">") {
          selfClosing = true;
          j += 2;
          break;
        }
        const ns = j;
        while (j < src.length && !/[\s=>/]/.test(src[j])) j++;
        if (j === ns) {
          j++;
          continue;
        }
        const name = src.slice(ns, j);
        let value = null, quote = "", kind = "none";
        let k = j;
        while (k < src.length && /\s/.test(src[k])) k++;
        if (src[k] === "=") {
          k++;
          while (k < src.length && /\s/.test(src[k])) k++;
          if (src[k] === '"' || src[k] === "'") {
            quote = src[k];
            const e = src.indexOf(quote, k + 1);
            value = src.slice(k + 1, e === -1 ? src.length : e);
            k = e === -1 ? src.length : e + 1;
            kind = "quoted";
          } else if (src[k] === "{") {
            const e = findBrace(src, k);
            const inner = src.slice(k + 1, e - 1).trim();
            const lit = /^(["'`])([^"'`$]*)\1$/.exec(inner);
            value = lit ? lit[2] : null;
            quote = '"';
            kind = lit ? "jsx" : "dynamic";
            if (!lit) value = src.slice(k, e);
            k = e;
          } else {
            let e = k;
            while (e < src.length && !/[\s>]/.test(src[e])) e++;
            value = src.slice(k, e);
            k = e;
            kind = "unquoted";
            quote = '"';
          }
          j = k;
        }
        attrs.push({ name, value, quote, kind, raw: src.slice(ns, j) });
      }
      const classAttrIdx = attrs.findIndex((a) => /^class(Name)?$/i.test(a.name) && (a.kind === "quoted" || a.kind === "jsx" || a.kind === "unquoted"));
      if (classAttrIdx === -1) {
        out += src.slice(lt, j);
      } else {
        const classAttr = attrs[classAttrIdx];
        const res = convertClasses(classAttr.value, opts);
        converted++;
        for (const u of res.unknown) unknown.set(u, (unknown.get(u) || 0) + 1);
        const merged = {};
        for (const a of SS_ATTRS) {
          const existing = attrs.find((x) => x.name.toLowerCase() === `${attrPrefix}${a}` && x.kind !== "dynamic");
          const tokens = [];
          if (existing && existing.value) {
            for (const t of existing.value.split(/\s+/)) if (t && !tokens.includes(t)) tokens.push(t);
          }
          for (const t of res[a]) if (!tokens.includes(t)) tokens.push(t);
          merged[a] = tokens;
        }
        const esc = (v) => v.replace(/"/g, "&quot;");
        const wrap = (name, val) => `${name}="${esc(val)}"`;
        const pieces = [];
        let injected = false;
        for (let idx = 0; idx < attrs.length; idx++) {
          const a = attrs[idx];
          const lower = a.name.toLowerCase();
          const ssType = SS_ATTRS.find((t) => `${attrPrefix}${t}` === lower);
          if (ssType && a.kind !== "dynamic") continue;
          if (idx === classAttrIdx) {
            for (const t of SS_ATTRS) if (merged[t].length) pieces.push(wrap(`${attrPrefix}${t}`, merged[t].join(" ")));
            if (res.unknown.length || opts.keepClass) {
              const keep = opts.keepClass ? classAttr.value : res.unknown.join(" ");
              if (keep) pieces.push(wrap(classAttr.name, keep));
            }
            injected = true;
            continue;
          }
          pieces.push(a.raw);
        }
        if (!injected) {
          for (const t of SS_ATTRS) if (merged[t].length) pieces.push(wrap(`${attrPrefix}${t}`, merged[t].join(" ")));
        }
        out += `<${tag}${pieces.length ? " " + pieces.join(" ") : ""}${selfClosing ? " />" : ">"}`;
      }
      i = j;
      if (!selfClosing && RAW_TEXT.has(tagLower)) {
        const close = src.toLowerCase().indexOf(`</${tagLower}`, i);
        const stop = close === -1 ? src.length : close;
        out += src.slice(i, stop);
        i = stop;
      }
    }
    return { html: out, converted, unknown };
  }
  function findBrace(src, start) {
    let depth = 0;
    let quote = null;
    for (let i = start; i < src.length; i++) {
      const ch = src[i];
      if (quote) {
        if (ch === "\\") i++;
        else if (ch === quote) quote = null;
        continue;
      }
      if (ch === '"' || ch === "'" || ch === "`") quote = ch;
      else if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) return i + 1;
      }
    }
    return src.length;
  }

  // src/converter/index.js
  function normalizeOptions(options) {
    if (typeof options === "boolean") return { exact: options };
    return { exact: false, ...options || {} };
  }
  function convertClass(twClass, options) {
    const { exact } = normalizeOptions(options);
    if (typeof twClass !== "string" || !twClass) return null;
    const { variants, base, important } = splitClass(twClass);
    let prefix = "";
    const extras = [];
    let needsGroup = false;
    for (const v of variants) {
      const r = convertVariant(v);
      if (!r) return null;
      prefix += `${r.prefix}:`;
      if (r.extra) extras.push(r.extra);
      if (r.needsGroup) needsGroup = true;
    }
    let result = convertExtra(base, exact);
    if (result === void 0) result = convertBase(base, exact);
    if (!result) result = convertArbitrary(base, exact);
    if (!result) return null;
    const list = Array.isArray(result) ? result : [result];
    const out = [];
    for (const r of list) {
      if (!r || !r.val) continue;
      if (r.cat === "interact" || r.cat === "listens") {
        out.push(r);
        continue;
      }
      const val = r.val.split(/\s+/).filter(Boolean).map((t) => `${important ? "!" : ""}${prefix}${t}`).join(" ");
      out.push({ cat: r.cat, val });
    }
    for (const e of extras) out.push(e);
    if (needsGroup) out.push({ cat: "meta", val: "needs-group" });
    return out.length ? out : null;
  }
  function convertClasses(classString, options) {
    const classes = String(classString || "").trim().split(/\s+/).filter(Boolean);
    const out = { layout: [], space: [], visual: [], interact: [], listens: [], unknown: [] };
    out.unrecognized = out.unknown;
    const push = (arr, val) => {
      for (const t of val.split(/\s+/)) if (t && !arr.includes(t)) arr.push(t);
    };
    for (const cls of classes) {
      const res = convertClass(cls, options);
      if (!res) {
        out.unknown.push(cls);
        continue;
      }
      for (const r of res) {
        if (r.cat === "meta") continue;
        if (out[r.cat]) push(out[r.cat], r.val);
      }
    }
    return out;
  }

  // src/cdn/tw-conversion-engine.js
  var api = {
    convertClass,
    convertClasses,
    convertHTML,
    rewriteClassAttributes,
    scales: { spacing: spacingScale, radius: radiusScale, shadow: shadowScale, fontSize: fontSizeScale },
    mappings: { layout: layoutMappings, visual: visualKeywords }
  };
  if (typeof window !== "undefined") window.SenangStartTW = api;
  var tw_conversion_engine_default = api;
})();
//# sourceMappingURL=senangstart-tw.js.map
