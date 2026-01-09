# Spacing Reference

Complete reference for the spacing scale.

## Default Scale

| Keyword | Value | Use Case |
|---------|-------|----------|
| `none` | 0px | Reset spacing |
| `tiny` | 4px | Borders, small offsets |
| `small` | 8px | Group related items |
| `medium` | 16px | Standard default |
| `big` | 32px | Separate sections |
| `giant` | 64px | Layout divisions |
| `vast` | 128px | Hero sections |

## CSS Variables

The spacing scale generates these CSS variables:

```css
:root {
  --s-none: 0px;
  --s-tiny: 4px;
  --s-small: 8px;
  --s-medium: 16px;
  --s-big: 32px;
  --s-giant: 64px;
  --s-vast: 128px;
}
```

## Usage Examples

```html
<!-- Padding -->
<div space="p:medium">16px padding all sides</div>
<div space="p-x:big">32px horizontal padding</div>

<!-- Margin -->
<div space="m:small">8px margin all sides</div>
<div space="m-b:giant">64px bottom margin</div>

<!-- Gap -->
<div layout="flex" space="g:small">8px gap between items</div>
```

## Customization

Override in `senangstart.config.js`:

```javascript
export default {
  theme: {
    spacing: {
      'tiny': '2px',      // Override existing
      'huge': '256px',    // Add new
      'massive': '512px'  // Add new
    }
  }
}
```

## Visual Guide

```
none   │ (no space)
tiny   │▌ 4px
small  │██ 8px
medium │████ 16px
big    │████████ 32px
giant  │████████████████ 64px
vast   │████████████████████████████████ 128px
```
