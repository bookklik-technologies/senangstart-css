# layout Reference

The `layout` attribute controls structure, positioning, and flow.

## Display

| Value | CSS Output |
|-------|------------|
| `flex` | `display: flex` |
| `grid` | `display: grid` |
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

## Alignment

| Value | CSS Output |
|-------|------------|
| `center` | `justify-content: center; align-items: center` |
| `start` | `justify-content: flex-start; align-items: flex-start` |
| `end` | `justify-content: flex-end; align-items: flex-end` |
| `between` | `justify-content: space-between` |
| `around` | `justify-content: space-around` |
| `evenly` | `justify-content: space-evenly` |

```html
<div layout="flex center">Centered</div>
<div layout="flex between">Space between</div>
```

## Flex Wrap

| Value | CSS Output |
|-------|------------|
| `wrap` | `flex-wrap: wrap` |
| `nowrap` | `flex-wrap: nowrap` |

```html
<div layout="flex wrap">Wrapping flex</div>
```

## Position

| Value | CSS Output |
|-------|------------|
| `relative` | `position: relative` |
| `absolute` | `position: absolute` |
| `fixed` | `position: fixed` |
| `sticky` | `position: sticky` |

```html
<nav layout="fixed">Fixed nav</nav>
<div layout="sticky">Sticky element</div>
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
<nav layout="fixed z:top">Always on top</nav>
<div layout="absolute z:high">High z-index</div>
```

## Overflow

| Value | CSS Output |
|-------|------------|
| `overflow:hidden` | `overflow: hidden` |
| `overflow:auto` | `overflow: auto` |
| `overflow:scroll` | `overflow: scroll` |

```html
<div layout="overflow:hidden">Clipped content</div>
```

## Combining Values

Combine multiple layout values with spaces:

```html
<div layout="flex col center wrap">
  Vertical, centered, wrapping flexbox
</div>

<nav layout="flex between fixed z:top">
  Fixed nav with space-between
</nav>
```
