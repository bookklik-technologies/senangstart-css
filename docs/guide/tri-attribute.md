# Tri-Attribute Syntax

SenangStart separates styling concerns into three distinct attributes.

## Overview

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `layout` | Structure & positioning | `layout="flex col center"` |
| `space` | Sizing & spacing | `space="p:medium g:small"` |
| `visual` | Colors & appearance | `visual="bg:white rounded:big"` |

## Why Three Attributes?

### Traditional CSS classes are chaotic:

```html
<div class="flex flex-col items-center p-4 gap-2 bg-white rounded-lg shadow-md">
```

Everything is mixed together. What's layout? What's spacing? What's visual?

### SenangStart is organized:

```html
<div
  layout="flex col center"
  space="p:medium g:small"
  visual="bg:white rounded:big shadow:medium"
>
```

**Clear separation.** Anyone reading this code instantly knows:
- **Structure:** Flexbox column, centered
- **Sizing:** Medium padding, small gap
- **Appearance:** White, rounded, shadowed

## The `layout` Attribute

Controls **how elements are positioned** and **how they flow**.

### Display Types

```html
<div layout="flex">Flexbox container</div>
<div layout="grid">Grid container</div>
<div layout="block">Block element</div>
<div layout="hidden">Hidden element</div>
```

### Flex Direction

```html
<div layout="flex row">Horizontal (default)</div>
<div layout="flex col">Vertical</div>
<div layout="flex row-reverse">Reversed horizontal</div>
<div layout="flex col-reverse">Reversed vertical</div>
```

### Alignment

```html
<div layout="flex center">Center both axes</div>
<div layout="flex between">Space between items</div>
<div layout="flex start">Align to start</div>
<div layout="flex end">Align to end</div>
```

### Position

```html
<nav layout="fixed z:top">Fixed navigation</nav>
<div layout="sticky">Sticky element</div>
<div layout="absolute z:high">Absolute positioned</div>
<div layout="relative">Relative positioned</div>
```

## The `space` Attribute

Controls **sizing and spacing** using the natural scale.

### Syntax

```
[breakpoint]:[property]:[scale]
```

### Padding

```html
<div space="p:medium">All sides</div>
<div space="p-x:big p-y:small">Horizontal & vertical</div>
<div space="p-t:small p-b:big">Top & bottom</div>
```

### Margin

```html
<div space="m:medium">All sides</div>
<div space="m-b:big">Bottom only</div>
<div space="m-x:auto">Center horizontally</div>
```

### Gap (Flex/Grid)

```html
<div layout="flex" space="g:small">Small gap</div>
<div layout="grid" space="g:medium">Medium gap</div>
```

### Sizing

```html
<div space="w:[100%] h:[400px]">Explicit size</div>
<div space="max-w:[1200px] min-h:[80vh]">Constraints</div>
```

### Arbitrary Values (Escape Hatch)

Use brackets for specific values:

```html
<div space="w:[350px]">350px width</div>
<div space="p:[20px_40px]">20px top/bottom, 40px left/right</div>
<div space="m-t:[5rem]">5rem top margin</div>
```

## The `visual` Attribute

Controls **colors, textures, and appearance**.

### Background

```html
<div visual="bg:white">White background</div>
<div visual="bg:primary">Primary color</div>
<div visual="bg:[#FF5733]">Custom hex</div>
```

### Text

```html
<span visual="text:dark">Dark text</span>
<span visual="text:grey text-size:small">Grey, small text</span>
<span visual="font:bold">Bold text</span>
```

### Borders & Shadows

```html
<div visual="rounded:medium shadow:big">Rounded with shadow</div>
<div visual="border:grey border-w:[2px]">Grey border</div>
```

### Combining Properties

```html
<div visual="bg:white rounded:big shadow:medium text:dark">
  Card with multiple visual properties
</div>
```

## Combining All Three

Here's a complete example:

```html
<div
  layout="flex col"
  space="w:[320px] p:medium g:small"
  visual="bg:white rounded:big shadow:medium"
>
  <h2 visual="font:bold text-size:big text:dark">Card Title</h2>
  <p visual="text:grey">Card description goes here.</p>
  <button
    space="p-x:big p-y:small"
    visual="bg:primary text:white rounded:medium"
  >
    Action
  </button>
</div>
```

**Reading this code:**
- The container is a vertical flex column, 320px wide, with medium padding, small gap, white background, big rounded corners, and medium shadow
- The title is bold, big text, dark color
- The button has big horizontal padding, small vertical padding, primary background, white text, medium rounded corners
