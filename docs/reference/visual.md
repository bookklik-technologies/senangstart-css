# visual Reference

The `visual` attribute controls colors, textures, and appearance.

## Background

| Property | CSS Output |
|----------|------------|
| `bg:white` | `background-color: var(--c-white)` |
| `bg:primary` | `background-color: var(--c-primary)` |
| `bg:[#hex]` | `background-color: #hex` |

```html
<div visual="bg:white">White background</div>
<div visual="bg:primary">Primary color</div>
<div visual="bg:[#FF5733]">Custom hex</div>
<div visual="bg:[rgba(0,0,0,0.5)]">Semi-transparent</div>
```

## Text Color

| Property | CSS Output |
|----------|------------|
| `text:dark` | `color: var(--c-dark)` |
| `text:grey` | `color: var(--c-grey)` |
| `text:primary` | `color: var(--c-primary)` |

```html
<span visual="text:dark">Dark text</span>
<span visual="text:grey">Grey text</span>
<span visual="text:primary">Primary text</span>
```

## Text Size

| Property | CSS Output |
|----------|------------|
| `text-size:tiny` | `font-size: 12px` |
| `text-size:small` | `font-size: 14px` |
| `text-size:medium` | `font-size: 16px` |
| `text-size:big` | `font-size: 20px` |
| `text-size:giant` | `font-size: 32px` |
| `text-size:vast` | `font-size: 48px` |

```html
<span visual="text-size:small">Small text</span>
<h1 visual="text-size:giant">Giant heading</h1>
```

## Font Weight

| Property | CSS Output |
|----------|------------|
| `font:normal` | `font-weight: 400` |
| `font:medium` | `font-weight: 500` |
| `font:bold` | `font-weight: 700` |

```html
<span visual="font:normal">Normal weight</span>
<span visual="font:bold">Bold text</span>
```

## Text Alignment

| Property | CSS Output |
|----------|------------|
| `text:left` | `text-align: left` |
| `text:center` | `text-align: center` |
| `text:right` | `text-align: right` |

```html
<p visual="text:center">Centered text</p>
```

## Border Radius

| Property | CSS Output |
|----------|------------|
| `rounded:none` | `border-radius: 0` |
| `rounded:small` | `border-radius: 4px` |
| `rounded:medium` | `border-radius: 8px` |
| `rounded:big` | `border-radius: 16px` |
| `rounded:round` | `border-radius: 9999px` |

```html
<div visual="rounded:small">Subtle rounding</div>
<div visual="rounded:big">Obvious rounding</div>
<button visual="rounded:round">Pill button</button>
```

## Box Shadow

| Property | CSS Output |
|----------|------------|
| `shadow:none` | `box-shadow: none` |
| `shadow:small` | `box-shadow: 0 1px 2px rgba(0,0,0,0.05)` |
| `shadow:medium` | `box-shadow: 0 4px 6px rgba(0,0,0,0.1)` |
| `shadow:big` | `box-shadow: 0 10px 15px rgba(0,0,0,0.15)` |
| `shadow:giant` | `box-shadow: 0 25px 50px rgba(0,0,0,0.25)` |

```html
<div visual="shadow:small">Subtle shadow</div>
<div visual="shadow:big">Prominent shadow</div>
```

## Border

| Property | CSS Output |
|----------|------------|
| `border:grey` | `border-color: var(--c-grey); border-style: solid` |
| `border-w:[2px]` | `border-width: 2px; border-style: solid` |

```html
<div visual="border:grey border-w:[1px]">Bordered element</div>
```

## Opacity

```html
<div visual="opacity:[0.5]">50% opacity</div>
<div visual="opacity:[0.8]">80% opacity</div>
```

## Color Palette

| Key | Default Value |
|-----|---------------|
| `white` | #FFFFFF |
| `black` | #000000 |
| `grey` | #6B7280 |
| `dark` | #1F2937 |
| `light` | #F3F4F6 |
| `primary` | #3B82F6 |
| `success` | #10B981 |
| `warning` | #F59E0B |
| `danger` | #EF4444 |

## State Prefixes

Combine with `hover:`, `focus:`, `active:`, `disabled:`:

```html
<button visual="bg:primary hover:bg:[#2563EB]">
  Hover effect
</button>

<a visual="text:grey hover:text:primary">
  Link hover
</a>

<input visual="border:grey focus:border:primary" />
```

## Combining Properties

```html
<div visual="bg:white rounded:big shadow:medium text:dark">
  Card with multiple visual properties
</div>
```
