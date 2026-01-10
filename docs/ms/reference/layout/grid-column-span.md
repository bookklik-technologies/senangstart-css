# Grid Column Span

Mengawal berapa banyak lajur yang diliputi oleh item grid.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `col-span:1` hingga `col-span:12` | `grid-column: span n / span n` |
| `col-span:full` | `grid-column: 1 / -1` |
| `col-start:1` hingga `col-start:13` | `grid-column-start: n` |
| `col-end:1` hingga `col-end:13` | `grid-column-end: n` |

## Contoh

```html
<div layout="grid grid-cols:4">
  <div layout="col-span:2">Merentasi 2 lajur</div>
  <div layout="col-span:full">Baris penuh</div>
</div>
```
