# Visual Reference

The `visual` attribute controls colors, textures, typography, and appearance.

## Colors

- [Background](./visual/background) - `bg:white`, `bg:primary`, `bg:[#hex]`
- [Text Color](./visual/text-color) - `text:dark`, `text:grey`, `text:primary`

## Typography

- [Text Size](./visual/text-size) - `text-size:small`, `text-size:big`, `text-size:giant`
- [Font Family](./visual/font-family) - `font:sans`, `font:serif`, `font:mono`
- [Font Weight](./visual/font-weight) - `font:normal`, `font:medium`, `font:bold`
- [Font Style](./visual/font-style) - `italic`, `not-italic`
- [Font Smoothing](./visual/font-smoothing) - `antialiased`, `subpixel-antialiased`
- [Letter Spacing](./visual/letter-spacing) - `tracking:tight`, `tracking:wide`
- [Line Height](./visual/line-height) - `leading:tight`, `leading:relaxed`
- [Line Clamp](./visual/line-clamp) - `line-clamp:1`, `line-clamp:2`, `line-clamp:3`
- [Text Alignment](./visual/text-alignment) - `text:left`, `text:center`, `text:right`
- [Text Transform](./visual/text-transform) - `uppercase`, `lowercase`, `capitalize`
- [Text Decoration](./visual/text-decoration) - `text-decoration-line:underline`, `text-decoration-style:wavy`
- [Text Overflow](./visual/text-overflow) - `truncate`, `text-ellipsis`
- [Text Wrap](./visual/text-wrap) - `text-wrap:wrap`, `text-wrap:nowrap`, `text-wrap:balance`
- [Whitespace](./visual/whitespace) - `white-space:pre`, `white-space:nowrap`
- [Word Break](./visual/word-break) - `word-break:normal`, `overflow-wrap:break-word`, `word-break:break-all`
- [Hyphens](./visual/hyphens) - `hyphens:auto`, `hyphens:none`
- [Text Indent](./visual/text-indent) - `indent:small`, `indent:medium`
- [Vertical Align](./visual/vertical-align) - `vertical-align:middle`, `vertical-align:top`

## Lists

- [List Style](./visual/list-style) - `list-none`, `list-disc`, `list-decimal`
- [Font Variant Numeric](./visual/font-variant-numeric) - `tabular-nums`, `ordinal`

## Borders & Effects

- [Border Radius](./visual/border-radius) - `rounded:small`, `rounded:big`, `rounded:round`
- [Box Shadow](./visual/box-shadow) - `shadow:small`, `shadow:medium`, `shadow:big`
- [Border](./visual/border) - `border:grey`, `border-w:[1px]`
- [Opacity](./visual/opacity) - `opacity:[0.5]`

## Interactivity

- [State Prefixes](./visual/state-prefixes) - `hover:`, `focus:`, `active:`, `disabled:`

## Quick Example

```html
<div visual="bg:white rounded:big shadow:medium text:dark">
  Card with multiple visual properties
</div>
```
