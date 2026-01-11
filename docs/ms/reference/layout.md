# Rujukan Layout

Atribut `layout` mengawal struktur, kedudukan, dan aliran.

## Paparan & Bekas

- [Paparan](./layout/display) - `flex`, `grid`, `block`, `hidden`
- [Bekas](./layout/container) - `container`

## Flex

- [Pintasan Flex](./layout/flex) - `flex:1`, `flex:auto`, `flex:none`
- [Asas Flex](./layout/flex-basis) - `basis:0`, `basis:full`, `basis:[value]`
- [Arah Flex](./layout/flex-direction) - `row`, `col`, `row-reverse`, `col-reverse`
- [Flex Wrap](./layout/flex-wrap) - `wrap`, `nowrap`, `wrap-reverse`
- [Item Flex](./layout/flex-items) - `grow`, `shrink`, `grow:0`, `shrink:0`
- [Order](./layout/order) - `order:first`, `order:last`, `order:1-12`

## Penjajaran

- [Justify Content](./layout/justify-content) - `justify:start`, `justify:center`, `justify:between`
- [Justify Items](./layout/justify-items) - `justify-items:start`, `justify-items:center`
- [Justify Self](./layout/justify-self) - `justify-self:start`, `justify-self:center`
- [Align Content](./layout/align-content) - `content:start`, `content:center`
- [Align Items](./layout/align-items) - `items:start`, `items:center`, `items:end`
- [Align Self](./layout/align-self) - `self:start`, `self:center`, `self:end`
- [Place Content](./layout/place-content) - `place-content:center`
- [Place Items](./layout/place-items) - `place-items:center`
- [Place Self](./layout/place-self) - `place-self:center`
- [Ringkas](./layout/shorthand-alignment) - `center`, `start`, `end`, `between`

## Grid

- [Grid Columns](./layout/grid-columns) - `grid-cols:1-12`
- [Grid Rows](./layout/grid-rows) - `grid-rows:1-6`
- [Column Span](./layout/grid-column-span) - `col-span:1-12`, `col-span:full`
- [Row Span](./layout/grid-row-span) - `row-span:1-6`, `row-span:full`
- [Auto Flow](./layout/grid-auto-flow) - `grid-flow:row`, `grid-flow:col`, `grid-flow:dense`
- [Auto Sizing](./layout/grid-auto-sizing) - `auto-cols:fr`, `auto-rows:min`

## Kedudukan

- [Kedudukan](./layout/position) - `static`, `relative`, `absolute`, `fixed`, `sticky`
- [Inset](./layout/inset) - `inset:0`, `top:0`, `right:0`, `bottom:0`, `left:0`
- [Z-Index](./layout/z-index) - `z:base`, `z:low`, `z:mid`, `z:high`, `z:top`

## Utiliti

- [Keterlihatan](./layout/visibility) - `visible`, `invisible`
- [Overflow](./layout/overflow) - `overflow:hidden`, `overflow:auto`, `overflow:scroll`
- [Overscroll](./layout/overscroll) - `overscroll:contain`, `overscroll:none`
- [Nisbah Aspek](./layout/aspect-ratio) - `aspect:square`, `aspect:video`
- [Columns](./layout/columns) - `cols:1-4`
- [Object Fit](./layout/object-fit) - `object:cover`, `object:contain`
- [Object Position](./layout/object-position) - `object-pos:top`, `object-pos:center`
- [Float & Clear](./layout/float-clear) - `float:left`, `float:right`, `clear:both`
- [Isolation](./layout/isolation) - `isolate`
- [Box Sizing](./layout/box-sizing) - `box-border`, `box-content`

## Jadual

- [Runtuhan Sempadan](./layout/border-collapse) - `border-collapse`, `border-separate`
- [Jarak Sempadan](./layout/border-spacing) - `border-spacing:0`, `border-spacing:[value]`
- [Susun Atur Jadual](./layout/table-layout) - `table-auto`, `table-fixed`
- [Kedudukan Kapsyen](./layout/caption-side) - `caption-top`, `caption-bottom`

## Contoh Pantas

```html
<div layout="flex col tab:row center wrap" space="g:medium">
  Susun atur flexbox responsif
</div>
```
