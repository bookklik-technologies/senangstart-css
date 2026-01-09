# Colors Reference

Complete reference for the color palette.

## Default Palette

| Key | Value | Description |
|-----|-------|-------------|
| `white` | #FFFFFF | Pure white |
| `black` | #000000 | Pure black |
| `grey` | #6B7280 | Neutral grey |
| `dark` | #3E4A5D | **Brand dark** |
| `light` | #DBEAFE | **Brand light** |
| `primary` | #2563EB | **Brand primary** |
| `secondary` | #DBEAFE | **Brand secondary** |
| `success` | #10B981 | Positive feedback |
| `warning` | #F59E0B | Cautions |
| `danger` | #EF4444 | Errors |

## CSS Variables

```css
:root {
  --c-white: #FFFFFF;
  --c-black: #000000;
  --c-grey: #6B7280;
  --c-dark: #3E4A5D;
  --c-light: #DBEAFE;
  --c-primary: #2563EB;
  --c-secondary: #DBEAFE;
  --c-success: #10B981;
  --c-warning: #F59E0B;
  --c-danger: #EF4444;
}
```

## Usage

### Background Colors

```html
<div visual="bg:white">White background</div>
<div visual="bg:primary">Primary background</div>
<div visual="bg:dark">Dark background</div>
```

### Text Colors

```html
<span visual="text:dark">Dark text</span>
<span visual="text:grey">Grey text</span>
<span visual="text:primary">Primary text</span>
```

### Border Colors

```html
<div visual="border:grey border-w:[1px]">Grey border</div>
<div visual="border:primary border-w:[2px]">Primary border</div>
```

### Arbitrary Colors

Use brackets for custom hex values:

```html
<div visual="bg:[#8B5CF6]">Custom purple</div>
<div visual="text:[#EC4899]">Custom pink text</div>
<div visual="bg:[rgba(0,0,0,0.5)]">Semi-transparent</div>
```

## Customization

Add custom colors in `senangstart.config.js`:

```javascript
export default {
  theme: {
    colors: {
      'brand': '#8B5CF6',
      'accent': '#EC4899',
      'muted': '#9CA3AF',
      'surface': '#F9FAFB'
    }
  }
}
```

Use your custom colors:

```html
<div visual="bg:brand text:white">Brand color</div>
<button visual="bg:accent">Accent button</button>
```

## Semantic Usage

| Color | Recommended Use |
|-------|-----------------|
| `primary` | Main actions, links, highlights |
| `success` | Positive feedback, confirmations |
| `warning` | Cautions, important notices |
| `danger` | Errors, destructive actions |
| `grey` | Secondary text, borders |
| `dark` | Primary text, headings |
| `light` | Backgrounds, subtle fills |
