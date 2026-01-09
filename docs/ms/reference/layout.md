# Rujukan layout

Atribusi `layout` mengawal struktur, kedudukan, dan aliran.

## Paparan

| Nilai | Output CSS |
|-------|------------|
| `flex` | `display: flex` |
| `grid` | `display: grid` |
| `block` | `display: block` |
| `inline` | `display: inline-block` |
| `hidden` | `display: none` |

```html
<div layout="flex">Kontena Flexbox</div>
<div layout="grid">Kontena Grid</div>
<div layout="hidden">Elemen tersembunyi</div>
```

## Arah Flex

| Nilai | Output CSS |
|-------|------------|
| `row` | `flex-direction: row` |
| `col` | `flex-direction: column` |
| `row-reverse` | `flex-direction: row-reverse` |
| `col-reverse` | `flex-direction: column-reverse` |

```html
<div layout="flex row">Horizontal</div>
<div layout="flex col">Menegak</div>
```

## Penjajaran

| Nilai | Output CSS |
|-------|------------|
| `center` | `justify-content: center; align-items: center` |
| `start` | `justify-content: flex-start; align-items: flex-start` |
| `end` | `justify-content: flex-end; align-items: flex-end` |
| `between` | `justify-content: space-between` |
| `around` | `justify-content: space-around` |
| `evenly` | `justify-content: space-evenly` |

```html
<div layout="flex center">Di tengah</div>
<div layout="flex between">Jarak antara</div>
```

## Flex Wrap

| Nilai | Output CSS |
|-------|------------|
| `wrap` | `flex-wrap: wrap` |
| `nowrap` | `flex-wrap: nowrap` |

```html
<div layout="flex wrap">Flex yang melipat</div>
```

## Kedudukan

| Nilai | Output CSS |
|-------|------------|
| `relative` | `position: relative` |
| `absolute` | `position: absolute` |
| `fixed` | `position: fixed` |
| `sticky` | `position: sticky` |

```html
<nav layout="fixed">Nav fixed</nav>
<div layout="sticky">Elemen sticky</div>
```

## Z-Index

| Nilai | Output CSS |
|-------|------------|
| `z:base` | `z-index: 0` |
| `z:low` | `z-index: 10` |
| `z:mid` | `z-index: 50` |
| `z:high` | `z-index: 100` |
| `z:top` | `z-index: 9999` |

```html
<nav layout="fixed z:top">Sentiasa di atas</nav>
<div layout="absolute z:high">Z-index tinggi</div>
```

## Overflow

| Nilai | Output CSS |
|-------|------------|
| `overflow:hidden` | `overflow: hidden` |
| `overflow:auto` | `overflow: auto` |
| `overflow:scroll` | `overflow: scroll` |

```html
<div layout="overflow:hidden">Kandungan terpotong</div>
```

## Menggabungkan Nilai

Gabungkan pelbagai nilai layout dengan ruang:

```html
<div layout="flex col center wrap">
  Flexbox menegak, di tengah, melipat
</div>

<nav layout="flex between fixed z:top">
  Nav fixed dengan space-between
</nav>
```
