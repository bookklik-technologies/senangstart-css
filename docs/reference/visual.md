# Visual Reference

The `visual` attribute controls colors, textures, typography, and appearance.

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
```

## Text Color

| Property | CSS Output |
|----------|------------|
| `text:dark` | `color: var(--c-dark)` |
| `text:grey` | `color: var(--c-grey)` |
| `text:primary` | `color: var(--c-primary)` |

```html
<span visual="text:dark">Dark text</span>
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

## Font Family

| Value | CSS Output |
|-------|------------|
| `font:sans` | `font-family: ui-sans-serif, system-ui, sans-serif` |
| `font:serif` | `font-family: ui-serif, Georgia, serif` |
| `font:mono` | `font-family: ui-monospace, monospace` |

```html
<code visual="font:mono">Monospace code</code>
<p visual="font:serif">Serif paragraph</p>
```

## Font Weight

| Property | CSS Output |
|----------|------------|
| `font:normal` | `font-weight: 400` |
| `font:medium` | `font-weight: 500` |
| `font:bold` | `font-weight: 700` |

```html
<span visual="font:bold">Bold text</span>
```

## Font Style

| Value | CSS Output |
|-------|------------|
| `italic` | `font-style: italic` |
| `not-italic` | `font-style: normal` |

```html
<em visual="italic">Italic text</em>
```

## Font Smoothing

| Value | CSS Output |
|-------|------------|
| `antialiased` | `-webkit-font-smoothing: antialiased` |
| `subpixel-antialiased` | `-webkit-font-smoothing: auto` |

```html
<body visual="antialiased">Smooth fonts on macOS</body>
```

## Letter Spacing

| Value | CSS Output |
|-------|------------|
| `tracking:tighter` | `letter-spacing: -0.05em` |
| `tracking:tight` | `letter-spacing: -0.025em` |
| `tracking:normal` | `letter-spacing: 0` |
| `tracking:wide` | `letter-spacing: 0.025em` |
| `tracking:wider` | `letter-spacing: 0.05em` |
| `tracking:widest` | `letter-spacing: 0.1em` |

```html
<h1 visual="tracking:tight">Tight heading</h1>
<span visual="tracking:widest">S P A C E D</span>
```

## Line Height

| Value | CSS Output |
|-------|------------|
| `leading:none` | `line-height: 1` |
| `leading:tight` | `line-height: 1.25` |
| `leading:snug` | `line-height: 1.375` |
| `leading:normal` | `line-height: 1.5` |
| `leading:relaxed` | `line-height: 1.625` |
| `leading:loose` | `line-height: 2` |

```html
<p visual="leading:relaxed">Comfortable reading</p>
```

## Line Clamp

Truncate text to a specific number of lines:

| Value | CSS Output |
|-------|------------|
| `line-clamp:1` | Clamp to 1 line |
| `line-clamp:2` | Clamp to 2 lines |
| `line-clamp:3` | Clamp to 3 lines |

```html
<p visual="line-clamp:2">
  Long text that will be truncated after 2 lines with ellipsis...
</p>
```

## Text Alignment

| Property | CSS Output |
|----------|------------|
| `text:left` | `text-align: left` |
| `text:center` | `text-align: center` |
| `text:right` | `text-align: right` |
| `text:justify` | `text-align: justify` |

```html
<p visual="text:center">Centered text</p>
```

## Text Transform

| Value | CSS Output |
|-------|------------|
| `uppercase` | `text-transform: uppercase` |
| `lowercase` | `text-transform: lowercase` |
| `capitalize` | `text-transform: capitalize` |
| `normal-case` | `text-transform: none` |

```html
<span visual="uppercase">all caps</span>
<span visual="capitalize">title case</span>
```

## Text Decoration

| Value | CSS Output |
|-------|------------|
| `underline` | `text-decoration-line: underline` |
| `overline` | `text-decoration-line: overline` |
| `line-through` | `text-decoration-line: line-through` |
| `no-underline` | `text-decoration-line: none` |

```html
<a visual="underline hover:no-underline">Link</a>
<span visual="line-through">Deleted</span>
```

## Text Decoration Style

| Value | CSS Output |
|-------|------------|
| `decoration-solid` | `text-decoration-style: solid` |
| `decoration-double` | `text-decoration-style: double` |
| `decoration-dotted` | `text-decoration-style: dotted` |
| `decoration-dashed` | `text-decoration-style: dashed` |
| `decoration-wavy` | `text-decoration-style: wavy` |

```html
<span visual="underline decoration-wavy decoration:danger">Error</span>
```

## Text Decoration Color

| Value | CSS Output |
|-------|------------|
| `decoration:primary` | `text-decoration-color: var(--c-primary)` |
| `decoration:[#ff0000]` | `text-decoration-color: #ff0000` |

```html
<a visual="underline decoration:primary">Colored underline</a>
```

## Text Decoration Thickness

| Value | CSS Output |
|-------|------------|
| `decoration-thickness:1` | `text-decoration-thickness: 1px` |
| `decoration-thickness:2` | `text-decoration-thickness: 2px` |
| `decoration-thickness:[3px]` | `text-decoration-thickness: 3px` |

```html
<a visual="underline decoration-thickness:2">Thick underline</a>
```

## Underline Offset

| Value | CSS Output |
|-------|------------|
| `underline-offset:1` | `text-underline-offset: 1px` |
| `underline-offset:2` | `text-underline-offset: 2px` |
| `underline-offset:[4px]` | `text-underline-offset: 4px` |

```html
<a visual="underline underline-offset:4">Offset underline</a>
```

## Text Overflow

| Value | CSS Output |
|-------|------------|
| `truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` |
| `text-ellipsis` | `text-overflow: ellipsis` |
| `text-clip` | `text-overflow: clip` |

```html
<p visual="truncate" space="w:[200px]">Long text that gets cut off...</p>
```

## Text Wrap

| Value | CSS Output |
|-------|------------|
| `text-wrap` | `text-wrap: wrap` |
| `text-nowrap` | `text-wrap: nowrap` |
| `text-balance` | `text-wrap: balance` |
| `text-pretty` | `text-wrap: pretty` |

```html
<h1 visual="text-balance">Headlines with balanced line breaks</h1>
```

## Whitespace

| Value | CSS Output |
|-------|------------|
| `whitespace-normal` | `white-space: normal` |
| `whitespace-nowrap` | `white-space: nowrap` |
| `whitespace-pre` | `white-space: pre` |
| `whitespace-pre-line` | `white-space: pre-line` |
| `whitespace-pre-wrap` | `white-space: pre-wrap` |

```html
<pre visual="whitespace-pre">Preserve   spaces</pre>
```

## Word Break

| Value | CSS Output |
|-------|------------|
| `break-normal` | `word-break: normal` |
| `break-words` | `overflow-wrap: break-word` |
| `break-all` | `word-break: break-all` |
| `break-keep` | `word-break: keep-all` |

```html
<p visual="break-words">Loooooooongwordbreakshere</p>
```

## Hyphens

| Value | CSS Output |
|-------|------------|
| `hyphens-none` | `hyphens: none` |
| `hyphens-manual` | `hyphens: manual` |
| `hyphens-auto` | `hyphens: auto` |

```html
<p visual="hyphens-auto" lang="en">Automatic hyphenation for long words</p>
```

## Text Indent

| Value | CSS Output |
|-------|------------|
| `indent:small` | `text-indent: var(--s-small)` |
| `indent:medium` | `text-indent: var(--s-medium)` |
| `indent:[2em]` | `text-indent: 2em` |

```html
<p visual="indent:medium">Indented first line of paragraph...</p>
```

## Vertical Align

| Value | CSS Output |
|-------|------------|
| `align-baseline` | `vertical-align: baseline` |
| `align-top` | `vertical-align: top` |
| `align-middle` | `vertical-align: middle` |
| `align-bottom` | `vertical-align: bottom` |
| `align-text-top` | `vertical-align: text-top` |
| `align-text-bottom` | `vertical-align: text-bottom` |

```html
<img visual="align-middle" src="icon.png"> Aligned text
```

## List Style

| Value | CSS Output |
|-------|------------|
| `list-none` | `list-style-type: none` |
| `list-disc` | `list-style-type: disc` |
| `list-decimal` | `list-style-type: decimal` |
| `list-inside` | `list-style-position: inside` |
| `list-outside` | `list-style-position: outside` |

```html
<ul visual="list-none">
  <li>No bullets</li>
</ul>
```

## Font Variant Numeric

| Value | CSS Output |
|-------|------------|
| `normal-nums` | `font-variant-numeric: normal` |
| `ordinal` | `font-variant-numeric: ordinal` |
| `slashed-zero` | `font-variant-numeric: slashed-zero` |
| `tabular-nums` | `font-variant-numeric: tabular-nums` |

```html
<span visual="tabular-nums">1,234,567</span>
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
<div visual="rounded:big">Rounded corners</div>
<button visual="rounded:round">Pill button</button>
```

## Box Shadow

| Property | CSS Output |
|----------|------------|
| `shadow:none` | `box-shadow: none` |
| `shadow:small` | `box-shadow: 0 1px 2px rgba(0,0,0,0.05)` |
| `shadow:medium` | `box-shadow: 0 4px 6px rgba(0,0,0,0.1)` |
| `shadow:big` | `box-shadow: 0 10px 15px rgba(0,0,0,0.15)` |

```html
<div visual="shadow:medium">Card shadow</div>
```

## Border

| Property | CSS Output |
|----------|------------|
| `border:grey` | `border-color: var(--c-grey)` |
| `border-w:[2px]` | `border-width: 2px` |

```html
<div visual="border:grey border-w:[1px]">Bordered</div>
```

## Opacity

| Value | CSS Output |
|-------|------------|
| `opacity:[0.5]` | `opacity: 0.5` |
| `opacity:[0.8]` | `opacity: 0.8` |

```html
<div visual="opacity:[0.5]">50% opacity</div>
```

## State Prefixes

Combine with `hover:`, `focus:`, `active:`, `disabled:`:

```html
<button visual="bg:primary hover:bg:[#2563EB]">
  Hover effect
</button>

<a visual="text:grey hover:text:primary underline hover:no-underline">
  Link with hover
</a>

<input visual="border:grey focus:border:primary" />
```

## Combining Properties

```html
<div visual="bg:white rounded:big shadow:medium text:dark">
  Card with multiple visual properties
</div>

<h1 visual="text-size:giant font:bold tracking:tight leading:tight">
  Headline
</h1>

<p visual="text:grey leading:relaxed text:justify">
  Paragraph with comfortable reading settings
</p>
```
