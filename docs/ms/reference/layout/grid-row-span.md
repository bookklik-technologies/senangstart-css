# Grid Row Span

Mengawal berapa banyak baris yang diliputi oleh item grid.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `row-span:1` hingga `row-span:6` | `grid-row: span n / span n` |
| `row-span:full` | `grid-row: 1 / -1` |

## Contoh

```html
<div layout="grid grid-cols:3 grid-rows:2">
  <div layout="row-span:2">Bar sisi (merentasi 2 baris)</div>
</div>
```
