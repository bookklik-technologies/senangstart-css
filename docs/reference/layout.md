# Layout Reference

The `layout` attribute controls structure, positioning, and flow.

## Display

| Value | CSS Output |
|-------|------------|
| `flex` | `display: flex` |
| `inline-flex` | `display: inline-flex` |
| `grid` | `display: grid` |
| `inline-grid` | `display: inline-grid` |
| `block` | `display: block` |
| `inline` | `display: inline-block` |
| `hidden` | `display: none` |

```html
<div layout="flex">Flexbox container</div>
<div layout="grid">Grid container</div>
<div layout="hidden">Hidden element</div>
```

## Flex Direction

| Value | CSS Output |
|-------|------------|
| `row` | `flex-direction: row` |
| `col` | `flex-direction: column` |
| `row-reverse` | `flex-direction: row-reverse` |
| `col-reverse` | `flex-direction: column-reverse` |

```html
<div layout="flex row">Horizontal</div>
<div layout="flex col">Vertical</div>
```

## Flex Wrap

| Value | CSS Output |
|-------|------------|
| `wrap` | `flex-wrap: wrap` |
| `nowrap` | `flex-wrap: nowrap` |
| `wrap-reverse` | `flex-wrap: wrap-reverse` |

```html
<div layout="flex wrap">Wrapping flex</div>
```

## Flex Item Properties

| Value | CSS Output |
|-------|------------|
| `grow` | `flex-grow: 1` |
| `grow-0` | `flex-grow: 0` |
| `shrink` | `flex-shrink: 1` |
| `shrink-0` | `flex-shrink: 0` |
| `flex:1` | `flex: 1 1 0%` |
| `flex:auto` | `flex: 1 1 auto` |
| `flex:initial` | `flex: 0 1 auto` |
| `flex:none` | `flex: none` |
| `basis:small` | `flex-basis: var(--s-small)` |
| `basis:[200px]` | `flex-basis: 200px` |

```html
<div layout="flex">
  <div layout="grow">Takes remaining space</div>
  <div layout="shrink-0">Won't shrink</div>
</div>

<div layout="flex">
  <div layout="flex:1">Equal width</div>
  <div layout="flex:1">Equal width</div>
</div>
```

## Order

| Value | CSS Output |
|-------|------------|
| `order:first` | `order: -9999` |
| `order:last` | `order: 9999` |
| `order:none` | `order: 0` |
| `order:1` to `order:12` | `order: 1` to `order: 12` |

```html
<div layout="flex">
  <div layout="order:last">Appears last</div>
  <div layout="order:first">Appears first</div>
</div>
```

## Justify Content

| Value | CSS Output |
|-------|------------|
| `justify-start` | `justify-content: flex-start` |
| `justify-end` | `justify-content: flex-end` |
| `justify-center` | `justify-content: center` |
| `justify-between` | `justify-content: space-between` |
| `justify-around` | `justify-content: space-around` |
| `justify-evenly` | `justify-content: space-evenly` |

```html
<div layout="flex justify-between">Space between items</div>
```

## Justify Items (Grid)

| Value | CSS Output |
|-------|------------|
| `justify-items-start` | `justify-items: start` |
| `justify-items-end` | `justify-items: end` |
| `justify-items-center` | `justify-items: center` |
| `justify-items-stretch` | `justify-items: stretch` |

```html
<div layout="grid grid-cols:3 justify-items-center">
  Items centered horizontally in their cells
</div>
```

## Justify Self

| Value | CSS Output |
|-------|------------|
| `justify-self-auto` | `justify-self: auto` |
| `justify-self-start` | `justify-self: start` |
| `justify-self-end` | `justify-self: end` |
| `justify-self-center` | `justify-self: center` |
| `justify-self-stretch` | `justify-self: stretch` |

```html
<div layout="grid grid-cols:3">
  <div layout="justify-self-end">Aligned right in cell</div>
</div>
```

## Align Content

| Value | CSS Output |
|-------|------------|
| `content-start` | `align-content: flex-start` |
| `content-end` | `align-content: flex-end` |
| `content-center` | `align-content: center` |
| `content-between` | `align-content: space-between` |
| `content-around` | `align-content: space-around` |
| `content-evenly` | `align-content: space-evenly` |
| `content-stretch` | `align-content: stretch` |

```html
<div layout="flex wrap content-center" space="h:[300px]">
  Multi-line content centered vertically
</div>
```

## Align Items

| Value | CSS Output |
|-------|------------|
| `items-start` | `align-items: flex-start` |
| `items-end` | `align-items: flex-end` |
| `items-center` | `align-items: center` |
| `items-baseline` | `align-items: baseline` |
| `items-stretch` | `align-items: stretch` |

```html
<div layout="flex items-center">Vertically centered</div>
```

## Align Self

| Value | CSS Output |
|-------|------------|
| `self-auto` | `align-self: auto` |
| `self-start` | `align-self: flex-start` |
| `self-end` | `align-self: flex-end` |
| `self-center` | `align-self: center` |
| `self-baseline` | `align-self: baseline` |
| `self-stretch` | `align-self: stretch` |

```html
<div layout="flex items-start">
  <div layout="self-end">Aligned to bottom</div>
</div>
```

## Place Content (Grid)

| Value | CSS Output |
|-------|------------|
| `place-content-start` | `place-content: start` |
| `place-content-end` | `place-content: end` |
| `place-content-center` | `place-content: center` |
| `place-content-between` | `place-content: space-between` |
| `place-content-around` | `place-content: space-around` |
| `place-content-evenly` | `place-content: space-evenly` |
| `place-content-stretch` | `place-content: stretch` |

```html
<div layout="grid place-content-center" space="h:[400px]">
  Centered in container
</div>
```

## Place Items (Grid)

| Value | CSS Output |
|-------|------------|
| `place-items-start` | `place-items: start` |
| `place-items-end` | `place-items: end` |
| `place-items-center` | `place-items: center` |
| `place-items-stretch` | `place-items: stretch` |

```html
<div layout="grid grid-cols:3 place-items-center">
  All items centered in their cells
</div>
```

## Place Self (Grid)

| Value | CSS Output |
|-------|------------|
| `place-self-auto` | `place-self: auto` |
| `place-self-start` | `place-self: start` |
| `place-self-end` | `place-self: end` |
| `place-self-center` | `place-self: center` |
| `place-self-stretch` | `place-self: stretch` |

```html
<div layout="grid grid-cols:2">
  <div layout="place-self-center">Centered in cell</div>
</div>
```

## Shorthand Alignment

For convenience, these shortcuts set both justify-content and align-items:

| Value | CSS Output |
|-------|------------|
| `center` | `justify-content: center; align-items: center` |
| `start` | `justify-content: flex-start; align-items: flex-start` |
| `end` | `justify-content: flex-end; align-items: flex-end` |
| `between` | `justify-content: space-between` |
| `around` | `justify-content: space-around` |
| `evenly` | `justify-content: space-evenly` |

```html
<div layout="flex center">Centered both ways</div>
```

## Grid Template Columns

| Value | CSS Output |
|-------|------------|
| `grid-cols:1` to `grid-cols:12` | `grid-template-columns: repeat(n, minmax(0, 1fr))` |
| `grid-cols:none` | `grid-template-columns: none` |
| `grid-cols:subgrid` | `grid-template-columns: subgrid` |
| `grid-cols:[200px_1fr_1fr]` | `grid-template-columns: 200px 1fr 1fr` |

```html
<div layout="grid grid-cols:3" space="g:medium">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>
```

## Grid Template Rows

| Value | CSS Output |
|-------|------------|
| `grid-rows:1` to `grid-rows:6` | `grid-template-rows: repeat(n, minmax(0, 1fr))` |
| `grid-rows:none` | `grid-template-rows: none` |
| `grid-rows:subgrid` | `grid-template-rows: subgrid` |
| `grid-rows:[auto_1fr_auto]` | `grid-template-rows: auto 1fr auto` |

```html
<div layout="grid grid-rows:3" space="h:[300px]">
  <header>Header</header>
  <main>Content</main>
  <footer>Footer</footer>
</div>
```

## Grid Column Span

| Value | CSS Output |
|-------|------------|
| `col-span:1` to `col-span:12` | `grid-column: span n / span n` |
| `col-span:full` | `grid-column: 1 / -1` |
| `col-start:1` to `col-start:13` | `grid-column-start: n` |
| `col-end:1` to `col-end:13` | `grid-column-end: n` |

```html
<div layout="grid grid-cols:4">
  <div layout="col-span:2">Spans 2 columns</div>
  <div>Single column</div>
  <div>Single column</div>
  <div layout="col-span:full">Full width row</div>
</div>
```

## Grid Row Span

| Value | CSS Output |
|-------|------------|
| `row-span:1` to `row-span:6` | `grid-row: span n / span n` |
| `row-span:full` | `grid-row: 1 / -1` |
| `row-start:1` to `row-start:7` | `grid-row-start: n` |
| `row-end:1` to `row-end:7` | `grid-row-end: n` |

```html
<div layout="grid grid-cols:3 grid-rows:2">
  <div layout="row-span:2">Sidebar (spans 2 rows)</div>
  <div>Content 1</div>
  <div>Content 2</div>
</div>
```

## Grid Auto Flow

| Value | CSS Output |
|-------|------------|
| `grid-flow-row` | `grid-auto-flow: row` |
| `grid-flow-col` | `grid-auto-flow: column` |
| `grid-flow-dense` | `grid-auto-flow: dense` |
| `grid-flow-row-dense` | `grid-auto-flow: row dense` |
| `grid-flow-col-dense` | `grid-auto-flow: column dense` |

```html
<div layout="grid grid-cols:3 grid-flow-dense">
  Dense packing fills gaps automatically
</div>
```

## Grid Auto Columns/Rows

| Value | CSS Output |
|-------|------------|
| `auto-cols:auto` | `grid-auto-columns: auto` |
| `auto-cols:min` | `grid-auto-columns: min-content` |
| `auto-cols:max` | `grid-auto-columns: max-content` |
| `auto-cols:fr` | `grid-auto-columns: minmax(0, 1fr)` |
| `auto-rows:auto` | `grid-auto-rows: auto` |
| `auto-rows:min` | `grid-auto-rows: min-content` |
| `auto-rows:max` | `grid-auto-rows: max-content` |
| `auto-rows:fr` | `grid-auto-rows: minmax(0, 1fr)` |

```html
<div layout="grid grid-flow-col auto-cols:fr">
  Equal width auto-generated columns
</div>
```

## Position

| Value | CSS Output |
|-------|------------|
| `static` | `position: static` |
| `relative` | `position: relative` |
| `absolute` | `position: absolute` |
| `fixed` | `position: fixed` |
| `sticky` | `position: sticky` |

```html
<nav layout="fixed z:top inset-x:0 top:0">Fixed navbar</nav>
<div layout="sticky top:0">Sticky header</div>
```

## Inset (Positioning)

| Value | CSS Output |
|-------|------------|
| `inset:0` | `inset: 0` |
| `inset:small` | `inset: var(--s-small)` |
| `top:0` | `top: 0` |
| `right:0` | `right: 0` |
| `bottom:0` | `bottom: 0` |
| `left:0` | `left: 0` |
| `inset-x:0` | `left: 0; right: 0` |
| `inset-y:0` | `top: 0; bottom: 0` |

```html
<div layout="absolute inset:0">Full overlay</div>
<div layout="fixed bottom:0 right:0">Bottom-right corner</div>
```

## Z-Index

| Value | CSS Output |
|-------|------------|
| `z:base` | `z-index: 0` |
| `z:low` | `z-index: 10` |
| `z:mid` | `z-index: 50` |
| `z:high` | `z-index: 100` |
| `z:top` | `z-index: 9999` |

```html
<div layout="relative z:base">Base layer</div>
<div layout="fixed z:top">Modal overlay</div>
```

## Visibility

| Value | CSS Output |
|-------|------------|
| `visible` | `visibility: visible` |
| `invisible` | `visibility: hidden` |

```html
<div layout="invisible">Hidden but takes space</div>
```

## Overflow

| Value | CSS Output |
|-------|------------|
| `overflow:hidden` | `overflow: hidden` |
| `overflow:auto` | `overflow: auto` |
| `overflow:scroll` | `overflow: scroll` |
| `overflow-x:hidden` | `overflow-x: hidden` |
| `overflow-y:auto` | `overflow-y: auto` |

```html
<div layout="overflow:hidden">Clipped content</div>
<div layout="overflow-x:auto overflow-y:hidden">Horizontal scroll only</div>
```

## Overscroll Behavior

| Value | CSS Output |
|-------|------------|
| `overscroll:auto` | `overscroll-behavior: auto` |
| `overscroll:contain` | `overscroll-behavior: contain` |
| `overscroll:none` | `overscroll-behavior: none` |

```html
<div layout="overflow:auto overscroll:contain">
  Prevents scroll chaining to parent
</div>
```

## Aspect Ratio

| Value | CSS Output |
|-------|------------|
| `aspect:auto` | `aspect-ratio: auto` |
| `aspect:square` | `aspect-ratio: 1 / 1` |
| `aspect:video` | `aspect-ratio: 16 / 9` |
| `aspect:[4/3]` | `aspect-ratio: 4 / 3` |

```html
<div layout="aspect:video">16:9 video container</div>
<img layout="aspect:square object:cover" src="photo.jpg">
```

## Columns

| Value | CSS Output |
|-------|------------|
| `cols:1` to `cols:4` | `columns: n` |

```html
<article layout="cols:2" space="g:medium">
  Long text flows into 2 columns
</article>
```

## Object Fit

| Value | CSS Output |
|-------|------------|
| `object:contain` | `object-fit: contain` |
| `object:cover` | `object-fit: cover` |
| `object:fill` | `object-fit: fill` |
| `object:none` | `object-fit: none` |
| `object:scale-down` | `object-fit: scale-down` |

```html
<img layout="object:cover" space="w:[100%] h:[200px]" src="hero.jpg">
```

## Object Position

| Value | CSS Output |
|-------|------------|
| `object-pos:center` | `object-position: center` |
| `object-pos:top` | `object-position: top` |
| `object-pos:bottom` | `object-position: bottom` |
| `object-pos:left` | `object-position: left` |
| `object-pos:right` | `object-position: right` |

```html
<img layout="object:cover object-pos:top" src="portrait.jpg">
```

## Float & Clear

| Value | CSS Output |
|-------|------------|
| `float-left` | `float: left` |
| `float-right` | `float: right` |
| `float-none` | `float: none` |
| `clear-left` | `clear: left` |
| `clear-right` | `clear: right` |
| `clear-both` | `clear: both` |

```html
<img layout="float-left" space="m-r:medium" src="image.jpg">
<p>Text wraps around the floated image...</p>
<div layout="clear-both"></div>
```

## Isolation

| Value | CSS Output |
|-------|------------|
| `isolate` | `isolation: isolate` |
| `isolate-auto` | `isolation: auto` |

```html
<div layout="isolate">
  <div layout="relative z:high">Isolated z-index context</div>
</div>
```

## Box Sizing

| Value | CSS Output |
|-------|------------|
| `box-border` | `box-sizing: border-box` |
| `box-content` | `box-sizing: content-box` |

```html
<div layout="box-border" space="p:medium w:[200px]">
  Padding included in 200px width
</div>
```

## Combining Values

```html
<div layout="flex col center wrap">
  Vertical, centered, wrapping flexbox
</div>

<div layout="grid grid-cols:3 place-items-center" space="g:medium">
  3-column grid with centered items
</div>

<nav layout="flex justify-between items-center fixed z:top inset-x:0 top:0">
  Sticky navbar
</nav>
```
