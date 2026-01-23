/* SenangStart CSS - Tailwind Converter v0.2.0 | MIT License */
(() => {
  // src/cdn/tw-conversion-engine.js
  var spacingScale = {
    0: "none",
    // 0px → none
    px: "thin",
    // 1px → thin (was [1px])
    0.5: "thin",
    // 2px → thin (closest to regular:2px)
    1: "tiny",
    // 4px → tiny
    1.5: "tiny",
    // 6px → tiny (closest)
    2: "small",
    // 8px → small
    2.5: "small",
    // 10px → small (closest)
    3: "small",
    // 12px → small (closest)
    3.5: "small",
    // 14px → small (closest)
    4: "medium",
    // 16px → medium
    5: "medium",
    // 20px → medium (closest)
    6: "medium",
    // 24px → medium (closest)
    7: "medium",
    // 28px → medium (closest)
    8: "big",
    // 32px → big
    9: "big",
    // 36px → big (closest)
    10: "big",
    // 40px → big (closest)
    11: "big",
    // 44px → big (closest)
    12: "big",
    // 48px → big (closest)
    14: "giant",
    // 56px → giant (closest)
    16: "giant",
    // 64px → giant
    20: "giant",
    // 80px → giant (closest)
    24: "giant",
    // 96px → giant (closest)
    28: "giant",
    // 112px → giant (closest)
    32: "vast",
    // 128px → vast
    36: "vast",
    // 144px → vast
    40: "vast",
    // 160px → vast
    44: "vast",
    // 176px → vast
    48: "vast",
    // 192px → vast
    52: "vast",
    // 208px → vast
    56: "vast",
    // 224px → vast
    60: "vast",
    // 240px → vast
    64: "vast",
    // 256px → vast
    72: "vast",
    // 288px → vast
    80: "vast",
    // 320px → vast
    96: "vast",
    // 384px → vast
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
    "select-all": "select:all"
  };
  function getSpacing(value, exact) {
    if (value.startsWith("[") && value.endsWith("]")) {
      return value;
    }
    if (exact) {
      if (["full", "screen", "auto"].includes(value))
        return spacingScale[value] || `[${value}]`;
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
  function getBorderWidth(value, exact) {
    if (exact) {
      return `tw-${value}`;
    }
    return borderWidthScale[value] || `[${value}px]`;
  }
  function convertClass(twClass, exact) {
    const prefixMatch = twClass.match(
      /^(sm:|md:|lg:|xl:|2xl:|hover:|focus:|focus-visible:|active:|disabled:|dark:)(.+)$/
    );
    let prefix = "", baseClass = twClass;
    if (prefixMatch) {
      const rawPrefix = prefixMatch[1].slice(0, -1);
      if (["sm", "md", "lg", "xl", "2xl"].includes(rawPrefix)) {
        prefix = `tw-${rawPrefix}:`;
      } else {
        prefix = prefixMatch[1];
      }
      baseClass = prefixMatch[2];
    }
    if (layoutMappings[baseClass])
      return { cat: "layout", val: prefix + layoutMappings[baseClass] };
    if (visualKeywords[baseClass])
      return { cat: "visual", val: prefix + visualKeywords[baseClass] };
    const textColorMatch = baseClass.match(
      /^text-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/
    );
    if (textColorMatch)
      return { cat: "visual", val: prefix + "text:" + textColorMatch[1] };
    if (["text-left", "text-center", "text-right", "text-justify"].includes(
      baseClass
    ))
      return {
        cat: "visual",
        val: prefix + "text:" + baseClass.replace("text-", "")
      };
    const textSizeMatch = baseClass.match(
      /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/
    );
    if (textSizeMatch) {
      const size = exact ? `tw-${textSizeMatch[1]}` : fontSizeScale[textSizeMatch[1]] || textSizeMatch[1];
      return { cat: "visual", val: prefix + "text-size:" + size };
    }
    const bgMatch = baseClass.match(
      /^bg-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?|transparent|current|inherit)$/
    );
    if (bgMatch) {
      const colorVal = bgMatch[1];
      if (colorVal === "transparent") {
        return { cat: "visual", val: prefix + "bg:[transparent]" };
      }
      if (colorVal === "current") {
        return { cat: "visual", val: prefix + "bg:[currentColor]" };
      }
      if (colorVal === "inherit") {
        return { cat: "visual", val: prefix + "bg:[inherit]" };
      }
      return { cat: "visual", val: prefix + "bg:" + colorVal };
    }
    const borderColorMatch = baseClass.match(
      /^border-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/
    );
    if (borderColorMatch)
      return {
        cat: "visual",
        val: prefix + "border:" + borderColorMatch[1]
      };
    const paddingMatch = baseClass.match(/^p([trblxy])?-(.+)$/);
    if (paddingMatch) {
      const side = paddingMatch[1] ? "-" + paddingMatch[1] : "";
      return {
        cat: "space",
        val: prefix + "p" + side + ":" + getSpacing(paddingMatch[2], exact)
      };
    }
    const marginMatch = baseClass.match(
      /^-?m([trblxy])?-(\d+\.?\d*|px|auto|full|screen)$/
    );
    if (marginMatch) {
      const isNeg = baseClass.startsWith("-");
      const side = marginMatch[1] ? "-" + marginMatch[1] : "";
      let val = getSpacing(marginMatch[2], exact);
      if (isNeg) val = "[-" + val + "]";
      return { cat: "space", val: prefix + "m" + side + ":" + val };
    }
    const gapMatch = baseClass.match(/^gap-([xy])?-?(.+)$/);
    if (gapMatch) {
      const axis = gapMatch[1] ? "-" + gapMatch[1] : "";
      return {
        cat: "space",
        val: prefix + "g" + axis + ":" + getSpacing(gapMatch[2], exact)
      };
    }
    const widthMatch = baseClass.match(/^(min-w|max-w|w)-(.+)$/);
    if (widthMatch) {
      const prop = widthMatch[1];
      const rawVal = widthMatch[2];
      const specialWidthVals = { "max": "[max-content]", "min": "[min-content]", "fit": "[fit-content]", "prose": "[65ch]" };
      const val = specialWidthVals[rawVal] || getSpacing(rawVal, exact);
      return { cat: "space", val: prefix + prop + ":" + val };
    }
    const heightMatch = baseClass.match(/^(min-h|max-h|h)-(.+)$/);
    if (heightMatch) {
      const prop = heightMatch[1];
      const rawVal = heightMatch[2];
      const specialHeightVals = { "screen": "[100vh]", "svh": "[100svh]", "lvh": "[100lvh]", "dvh": "[100dvh]", "max": "[max-content]", "min": "[min-content]", "fit": "[fit-content]" };
      const val = specialHeightVals[rawVal] || getSpacing(rawVal, exact);
      return { cat: "space", val: prefix + prop + ":" + val };
    }
    const roundedMatch = baseClass.match(/^rounded(?:-(.+))?$/);
    if (roundedMatch) {
      const size = roundedMatch[1] || "";
      const scale = exact ? size === "" ? "tw-DEFAULT" : `tw-${size}` : radiusScale[size] || "medium";
      return { cat: "visual", val: prefix + "rounded:" + scale };
    }
    const shadowMatch = baseClass.match(/^shadow(?:-(.+))?$/);
    if (shadowMatch) {
      const size = shadowMatch[1] || "";
      const scale = exact ? size === "" ? "tw-DEFAULT" : `tw-${size}` : shadowScale[size] || "medium";
      return { cat: "visual", val: prefix + "shadow:" + scale };
    }
    const fontWeightMatch = baseClass.match(
      /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/
    );
    if (fontWeightMatch)
      return { cat: "visual", val: prefix + "font:tw-" + fontWeightMatch[1] };
    const borderWidthMatch = baseClass.match(
      /^border(?:-([trblxy]))?(?:-(\d+))?$/
    );
    if (borderWidthMatch && (borderWidthMatch[2] || !borderWidthMatch[1] && baseClass === "border")) {
      const side = borderWidthMatch[1] ? "-" + borderWidthMatch[1] + "-w" : "-w";
      const width = borderWidthMatch[2] || "1";
      return {
        cat: "visual",
        val: prefix + "border" + side + ":" + getBorderWidth(width, exact)
      };
    }
    const positionMatch = baseClass.match(/^(top|right|bottom|left|inset|inset-x|inset-y)-(\d+|px|auto|full|\[.+\])$/);
    if (positionMatch) {
      const prop = positionMatch[1];
      let val = positionMatch[2];
      if (val === "0") {
        val = "none";
      } else if (val.startsWith("[") && val.endsWith("]")) {
      } else {
        val = getSpacing(val, exact);
      }
      return { cat: "layout", val: prefix + prop + ":" + val };
    }
    if (baseClass === "outline-none") {
      return { cat: "visual", val: prefix + "outline:none" };
    }
    const orderMatch = baseClass.match(/^order-(\d+|first|last|none)$/);
    if (orderMatch) {
      return { cat: "layout", val: prefix + "order:" + orderMatch[1] };
    }
    const gridColsMatch = baseClass.match(/^grid-cols-(\d+|none)$/);
    if (gridColsMatch) {
      return { cat: "layout", val: prefix + "grid-cols:" + gridColsMatch[1] };
    }
    const colSpanMatch = baseClass.match(/^col-span-(\d+|full)$/);
    if (colSpanMatch) {
      return { cat: "layout", val: prefix + "col-span:" + colSpanMatch[1] };
    }
    const gridRowsMatch = baseClass.match(/^grid-rows-(\d+|none)$/);
    if (gridRowsMatch) {
      return { cat: "layout", val: prefix + "grid-rows:" + gridRowsMatch[1] };
    }
    const rowSpanMatch = baseClass.match(/^row-span-(\d+|full)$/);
    if (rowSpanMatch) {
      return { cat: "layout", val: prefix + "row-span:" + rowSpanMatch[1] };
    }
    const opacityMatch = baseClass.match(/^opacity-(\d+)$/);
    if (opacityMatch) {
      return { cat: "visual", val: prefix + "opacity:" + opacityMatch[1] };
    }
    const bgGradientMatch = baseClass.match(/^bg-gradient-to-(t|tr|r|br|b|bl|l|tl)$/);
    if (bgGradientMatch) {
      return { cat: "visual", val: prefix + "bg-image:gradient-to-" + bgGradientMatch[1] };
    }
    const fromMatch = baseClass.match(/^from-(.+)$/);
    if (fromMatch) {
      return { cat: "visual", val: prefix + "from:" + fromMatch[1] };
    }
    const viaMatch = baseClass.match(/^via-(.+)$/);
    if (viaMatch) {
      return { cat: "visual", val: prefix + "via:" + viaMatch[1] };
    }
    const toMatch = baseClass.match(/^to-(.+)$/);
    if (toMatch) {
      return { cat: "visual", val: prefix + "to:" + toMatch[1] };
    }
    const transitionMatch = baseClass.match(/^transition(?:-(all|colors|opacity|shadow|transform|none))?$/);
    if (transitionMatch) {
      const type = transitionMatch[1] || "all";
      return { cat: "visual", val: prefix + "transition:" + type };
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
      return { cat: "visual", val: prefix + "duration:" + durationVal };
    }
    const easeMatch = baseClass.match(/^ease-(linear|in|out|in-out)$/);
    if (easeMatch) {
      return { cat: "visual", val: prefix + "ease:" + easeMatch[1] };
    }
    const ringMatch = baseClass.match(/^ring(?:-(\d+))?$/);
    if (ringMatch) {
      const width = ringMatch[1] || "3";
      if (width === "0") {
        return { cat: "visual", val: prefix + "ring:none" };
      }
      const ringScale = {
        "1": "thin",
        "2": "regular",
        "3": "small",
        "4": "medium",
        "8": "big"
      };
      const scale = ringScale[width] || `[${width}px]`;
      return { cat: "visual", val: prefix + "ring:" + scale };
    }
    const ringOffsetMatch = baseClass.match(/^ring-offset-(\d+)$/);
    if (ringOffsetMatch) {
      return { cat: "visual", val: prefix + "ring-offset:" + ringOffsetMatch[1] };
    }
    const ringColorMatch = baseClass.match(/^ring-((?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d+)?)$/);
    if (ringColorMatch) {
      return { cat: "visual", val: prefix + "ring-color:" + ringColorMatch[1] };
    }
    return null;
  }
  function convertClasses(classString, exact) {
    const classes = classString.trim().split(/\s+/).filter((c) => c);
    const layout = [], space = [], visual = [], unknown = [];
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
  if (typeof window !== "undefined") {
    window.SenangStartTW = {
      convertClass,
      convertClasses,
      convertHTML,
      // Expose scales for customization
      scales: {
        spacing: spacingScale,
        radius: radiusScale,
        shadow: shadowScale,
        fontSize: fontSizeScale
      },
      mappings: {
        layout: layoutMappings,
        visual: visualKeywords
      }
    };
  }
})();
