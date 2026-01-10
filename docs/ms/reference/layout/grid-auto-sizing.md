# Grid Auto Sizing

Mengawal saiz trek grid yang dijana secara automatik.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `auto-cols:auto` | `grid-auto-columns: auto` |
| `auto-cols:min` | `grid-auto-columns: min-content` |
| `auto-cols:max` | `grid-auto-columns: max-content` |
| `auto-cols:fr` | `grid-auto-columns: minmax(0, 1fr)` |
| `auto-rows:auto` | `grid-auto-rows: auto` |
| `auto-rows:fr` | `grid-auto-rows: minmax(0, 1fr)` |

## Contoh

```html
<div layout="grid grid-flow-col auto-cols:fr">
  Lajur auto dengan lebar sama
</div>
```
