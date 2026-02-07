---
title: Preflight
description: An opinionated set of base styles that resets browser defaults
---

# Preflight

Preflight is SenangStart CSS's opinionated set of base styles, designed to smooth over cross-browser inconsistencies and make it easier for you to work within the constraints of your design system.

## Overview

When you include SenangStart CSS in your project, Preflight is automatically applied. It's built on top of [modern-normalize](https://github.com/sindresorhus/modern-normalize) and adds additional opinionated styles that we've found helpful.

## What Preflight Does

### Box-Sizing Reset

All elements use `border-box` sizing, making it easier to manage widths with padding and borders:

```css
*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
}
```

### Margins Removed

Default margins are stripped from all elements for a consistent starting point:

```css
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}
```

### Headings Reset

Headings are unstyled by default, inheriting font size and weight. This encourages using semantic markup while styling headings via your design system:

```css
h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}
```

### Lists Unstyled

Lists have their default styling removed. Add list styles back when you need them:

```css
ol, ul, menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

### Images Block-Level

Images and other replaced elements are set to `display: block` and constrained to their parent width:

```css
img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}

img, video {
  max-width: 100%;
  height: auto;
}
```

### Form Element Normalization

Form elements inherit font properties from their parent:

```css
button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}
```

### Buttons Have Cursor Pointer

Buttons and elements with `role="button"` get a pointer cursor:

```css
button, [role="button"] {
  cursor: pointer;
}
```

## Disabling Preflight

If you need to disable Preflight entirely, you can do so in your configuration:

### Via Configuration File

```js
// senangstart.config.js
export default {
  preflight: false,
  // ... other options
}
```

### Via CLI Flag

```bash
# Build without Preflight
npx senangstart build --no-preflight

# Dev mode without Preflight
npx senangstart dev --no-preflight
```

## When to Disable Preflight

Consider disabling Preflight if:

- You're integrating SenangStart CSS into an existing project with its own reset/normalize
- You're using another CSS framework that already provides base styles
- You need to preserve browser default styling for specific use cases

### Safe Area Inset

Support for modern devices with notches and rounded corners:

\`\`\`css
body {
  padding-top: env(safe-area-inset-top);
  padding-right: env(safe-area-inset-right);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
}
\`\`\`

This automatically adds padding to account for device features like:
- iPhone notches and dynamic islands
- Rounded screen corners
- Home indicators on iPad
- Cutouts on Android devices

## Full Preflight Styles

For complete list of Preflight styles, view [preflight.js source](https://github.com/bookklik-technologies/senangstart-css/blob/main/src/compiler/generators/preflight.js).
