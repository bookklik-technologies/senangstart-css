# Spacing Reference

Complete reference for the spacing scale.

## Default Scale

| Keyword | Value | Use Case |
|---------|-------|----------|
| `none` | 0px | Reset spacing |
| `thin` | 1px | Hairline borders |
| `regular` | 2px | Standard borders |
| `thick` | 3px | Bold borders |
| `tiny` | 4px | Small offsets |
| `tiny-2x` | 6px | Tiny multiplied |
| `small` | 8px | Group related items |
| `small-2x` | 10px | Small multiplied |
| `small-3x` | 12px | Small multiplied |
| `small-4x` | 14px | Small multiplied |
| `medium` | 16px | Standard default |
| `medium-2x` | 20px | Medium multiplied |
| `medium-3x` | 24px | Medium multiplied |
| `medium-4x` | 28px | Medium multiplied |
| `large` | 32px | Separate sections |
| `large-2x` | 36px | Large multiplied |
| `large-3x` | 40px | Large multiplied |
| `large-4x` | 44px | Large multiplied |
| `big` | 48px | Layout sections |
| `big-2x` | 56px | Big multiplied |
| `big-3x` | 64px | Big multiplied |
| `big-4x` | 80px | Big multiplied |
| `giant` | 96px | Hero sections |
| `giant-2x` | 112px | Giant multiplied |
| `giant-3x` | 128px | Giant multiplied |
| `giant-4x` | 144px | Giant multiplied |
| `vast` | 160px | Page-level spacing |
| `vast-2x` | 176px | Vast multiplied |
| `vast-3x` | 192px | Vast multiplied |
| `vast-4x` | 208px | Vast multiplied |
| `vast-5x` | 224px | Vast multiplied |
| `vast-6x` | 240px | Vast multiplied |
| `vast-7x` | 256px | Vast multiplied |
| `vast-8x` | 288px | Vast multiplied |
| `vast-9x` | 320px | Vast multiplied |
| `vast-10x` | 384px | Vast multiplied |

## CSS Variables

The spacing scale generates these CSS variables:

```css
:root {
  --s-none: 0px;
  --s-thin: 1px;
  --s-regular: 2px;
  --s-thick: 3px;
  --s-tiny: 4px;
  --s-tiny-2x: 6px;
  --s-small: 8px;
  --s-small-2x: 10px;
  --s-small-3x: 12px;
  --s-small-4x: 14px;
  --s-medium: 16px;
  --s-medium-2x: 20px;
  --s-medium-3x: 24px;
  --s-medium-4x: 28px;
  --s-large: 32px;
  --s-large-2x: 36px;
  --s-large-3x: 40px;
  --s-large-4x: 44px;
  --s-big: 48px;
  --s-big-2x: 56px;
  --s-big-3x: 64px;
  --s-big-4x: 80px;
  --s-giant: 96px;
  --s-giant-2x: 112px;
  --s-giant-3x: 128px;
  --s-giant-4x: 144px;
  --s-vast: 160px;
  --s-vast-2x: 176px;
  --s-vast-3x: 192px;
  --s-vast-4x: 208px;
  --s-vast-5x: 224px;
  --s-vast-6x: 240px;
  --s-vast-7x: 256px;
  --s-vast-8x: 288px;
  --s-vast-9x: 320px;
  --s-vast-10x: 384px;
}
```

## Usage Examples

```html
<!-- Padding -->
<div space="p:medium">16px padding all sides</div>
<div space="p-x:large">32px horizontal padding</div>

<!-- Margin -->
<div space="m:small">8px margin all sides</div>
<div space="m-b:giant">96px bottom margin</div>

<!-- Gap -->
<div layout="flex" space="g:small">8px gap between items</div>

<!-- Border Width -->
<div visual="border:gray-300 border-w:thin">1px border</div>
<div visual="border:gray-300 border-w:regular">2px border</div>
<div visual="border:gray-300 border-w:thick">3px border</div>

<!-- Using multiplier variants -->
<div space="p:medium-2x">20px padding (medium × 2)</div>
<div space="m:large-3x">40px margin (large × 3)</div>
```

## Customization

Override in `senangstart.config.js`:

```javascript
export default {
  theme: {
    spacing: {
      'tiny': '2px',        // Override existing
      'huge': '256px',      // Add new
      'massive': '512px'    // Add new
    }
  }
}
```

## Visual Guide

```
none      │ (no space)
thin      │ 1px
regular   │▏ 2px
thick     │▎ 3px
tiny      │▌ 4px
tiny-2x   │▌▏ 6px
small     │██ 8px
small-2x  │██▌ 10px
small-3x  │███ 12px
small-4x  │███▌ 14px
medium    │████ 16px
medium-2x │█████ 20px
medium-3x │██████ 24px
medium-4x │███████ 28px
large     │████████ 32px
large-2x  │█████████ 36px
large-3x  │██████████ 40px
large-4x  │███████████ 44px
big       │████████████ 48px
big-2x    │██████████████ 56px
big-3x    │████████████████ 64px
big-4x    │████████████████████ 80px
giant     │████████████████████████ 96px
giant-2x  │████████████████████████████ 112px
giant-3x  │████████████████████████████████ 128px
giant-4x  │████████████████████████████████████ 144px
vast      │████████████████████████████████████████ 160px
vast-2x   │████████████████████████████████████████████ 176px
vast-3x   │████████████████████████████████████████████████ 192px
vast-4x   │████████████████████████████████████████████████████ 208px
vast-5x   │████████████████████████████████████████████████████████ 224px
vast-6x   │████████████████████████████████████████████████████████████ 240px
vast-7x   │████████████████████████████████████████████████████████████████ 256px
vast-8x   │████████████████████████████████████████████████████████████████████████ 288px
vast-9x   │████████████████████████████████████████████████████████████████████████████████ 320px
vast-10x  │██████████████████████████████████████████████████████████████████████████████████████████████ 384px
```
