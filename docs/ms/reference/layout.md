# Rujukan layout

Atribusi `layout` mengawal struktur, kedudukan, dan aliran.

## Paparan

| Nilai | Output CSS |
|-------|------------|
| `flex` | `display: flex` |
| `inline-flex` | `display: inline-flex` |
| `grid` | `display: grid` |
| `inline-grid` | `display: inline-grid` |
| `block` | `display: block` |
| `inline` | `display: inline-block` |
| `hidden` | `display: none` |

```html
<div layout="flex">Kontena Flexbox</div>
<div layout="grid">Kontena Grid</div>
```

## Arah Flex

| Nilai | Output CSS |
|-------|------------|
| `row` | `flex-direction: row` |
| `col` | `flex-direction: column` |
| `row-reverse` | `flex-direction: row-reverse` |
| `col-reverse` | `flex-direction: column-reverse` |

## Flex Wrap

| Nilai | Output CSS |
|-------|------------|
| `wrap` | `flex-wrap: wrap` |
| `nowrap` | `flex-wrap: nowrap` |
| `wrap-reverse` | `flex-wrap: wrap-reverse` |

## Sifat Item Flex

| Nilai | Output CSS |
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

```html
<div layout="flex">
  <div layout="grow">Ambil ruang selebihnya</div>
  <div layout="shrink-0">Tidak mengecil</div>
</div>
```

## Order

| Nilai | Output CSS |
|-------|------------|
| `order:first` | `order: -9999` |
| `order:last` | `order: 9999` |
| `order:none` | `order: 0` |

## Justify Content

| Nilai | Output CSS |
|-------|------------|
| `justify-start` | `justify-content: flex-start` |
| `justify-end` | `justify-content: flex-end` |
| `justify-center` | `justify-content: center` |
| `justify-between` | `justify-content: space-between` |
| `justify-around` | `justify-content: space-around` |
| `justify-evenly` | `justify-content: space-evenly` |

## Justify Items (Grid)

| Nilai | Output CSS |
|-------|------------|
| `justify-items-start` | `justify-items: start` |
| `justify-items-end` | `justify-items: end` |
| `justify-items-center` | `justify-items: center` |
| `justify-items-stretch` | `justify-items: stretch` |

## Justify Self

| Nilai | Output CSS |
|-------|------------|
| `justify-self-auto` | `justify-self: auto` |
| `justify-self-start` | `justify-self: start` |
| `justify-self-end` | `justify-self: end` |
| `justify-self-center` | `justify-self: center` |

## Align Content

| Nilai | Output CSS |
|-------|------------|
| `content-start` | `align-content: flex-start` |
| `content-end` | `align-content: flex-end` |
| `content-center` | `align-content: center` |
| `content-between` | `align-content: space-between` |
| `content-around` | `align-content: space-around` |
| `content-evenly` | `align-content: space-evenly` |

## Align Items

| Nilai | Output CSS |
|-------|------------|
| `items-start` | `align-items: flex-start` |
| `items-end` | `align-items: flex-end` |
| `items-center` | `align-items: center` |
| `items-baseline` | `align-items: baseline` |
| `items-stretch` | `align-items: stretch` |

## Align Self

| Nilai | Output CSS |
|-------|------------|
| `self-auto` | `align-self: auto` |
| `self-start` | `align-self: flex-start` |
| `self-end` | `align-self: flex-end` |
| `self-center` | `align-self: center` |
| `self-stretch` | `align-self: stretch` |

## Place Content / Items / Self (Grid)

| Nilai | Output CSS |
|-------|------------|
| `place-content-center` | `place-content: center` |
| `place-items-center` | `place-items: center` |
| `place-self-center` | `place-self: center` |

## Penjajaran Ringkas

| Nilai | Output CSS |
|-------|------------|
| `center` | `justify-content: center; align-items: center` |
| `start` | `justify-content: flex-start; align-items: flex-start` |
| `end` | `justify-content: flex-end; align-items: flex-end` |
| `between` | `justify-content: space-between` |

## Grid Template Columns

| Nilai | Output CSS |
|-------|------------|
| `grid-cols:1` hingga `grid-cols:12` | `grid-template-columns: repeat(n, minmax(0, 1fr))` |
| `grid-cols:none` | `grid-template-columns: none` |
| `grid-cols:[200px_1fr_1fr]` | `grid-template-columns: 200px 1fr 1fr` |

```html
<div layout="grid grid-cols:3" space="g:medium">
  <div>Lajur 1</div>
  <div>Lajur 2</div>
  <div>Lajur 3</div>
</div>
```

## Grid Template Rows

| Nilai | Output CSS |
|-------|------------|
| `grid-rows:1` hingga `grid-rows:6` | `grid-template-rows: repeat(n, minmax(0, 1fr))` |
| `grid-rows:none` | `grid-template-rows: none` |

## Grid Column Span

| Nilai | Output CSS |
|-------|------------|
| `col-span:1` hingga `col-span:12` | `grid-column: span n / span n` |
| `col-span:full` | `grid-column: 1 / -1` |
| `col-start:1` | `grid-column-start: 1` |
| `col-end:4` | `grid-column-end: 4` |

## Grid Row Span

| Nilai | Output CSS |
|-------|------------|
| `row-span:1` hingga `row-span:6` | `grid-row: span n / span n` |
| `row-span:full` | `grid-row: 1 / -1` |

## Grid Auto Flow

| Nilai | Output CSS |
|-------|------------|
| `grid-flow-row` | `grid-auto-flow: row` |
| `grid-flow-col` | `grid-auto-flow: column` |
| `grid-flow-dense` | `grid-auto-flow: dense` |

## Grid Auto Columns/Rows

| Nilai | Output CSS |
|-------|------------|
| `auto-cols:auto` | `grid-auto-columns: auto` |
| `auto-cols:fr` | `grid-auto-columns: minmax(0, 1fr)` |
| `auto-rows:auto` | `grid-auto-rows: auto` |

## Kedudukan

| Nilai | Output CSS |
|-------|------------|
| `static` | `position: static` |
| `relative` | `position: relative` |
| `absolute` | `position: absolute` |
| `fixed` | `position: fixed` |
| `sticky` | `position: sticky` |

## Inset

| Nilai | Output CSS |
|-------|------------|
| `inset:0` | `inset: 0` |
| `top:0` | `top: 0` |
| `right:0` | `right: 0` |
| `bottom:0` | `bottom: 0` |
| `left:0` | `left: 0` |

## Z-Index

| Nilai | Output CSS |
|-------|------------|
| `z:base` | `z-index: 0` |
| `z:low` | `z-index: 10` |
| `z:mid` | `z-index: 50` |
| `z:high` | `z-index: 100` |
| `z:top` | `z-index: 9999` |

## Keterlihatan

| Nilai | Output CSS |
|-------|------------|
| `visible` | `visibility: visible` |
| `invisible` | `visibility: hidden` |

## Overflow

| Nilai | Output CSS |
|-------|------------|
| `overflow:hidden` | `overflow: hidden` |
| `overflow:auto` | `overflow: auto` |
| `overflow:scroll` | `overflow: scroll` |

## Aspect Ratio

| Nilai | Output CSS |
|-------|------------|
| `aspect:square` | `aspect-ratio: 1 / 1` |
| `aspect:video` | `aspect-ratio: 16 / 9` |

## Object Fit

| Nilai | Output CSS |
|-------|------------|
| `object:cover` | `object-fit: cover` |
| `object:contain` | `object-fit: contain` |

## Float & Clear

| Nilai | Output CSS |
|-------|------------|
| `float-left` | `float: left` |
| `float-right` | `float: right` |
| `clear-both` | `clear: both` |

## Isolation & Box Sizing

| Nilai | Output CSS |
|-------|------------|
| `isolate` | `isolation: isolate` |
| `box-border` | `box-sizing: border-box` |
| `box-content` | `box-sizing: content-box` |

## Menggabungkan Nilai

```html
<div layout="flex col center wrap">
  Flexbox menegak, di tengah, melipat
</div>

<div layout="grid grid-cols:3 place-items-center" space="g:medium">
  Grid 3-lajur dengan item di tengah
</div>
```
