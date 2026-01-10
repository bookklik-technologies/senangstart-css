# Order

Mengawal susunan visual item flex/grid.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `order:first` | `order: -9999` |
| `order:last` | `order: 9999` |
| `order:none` | `order: 0` |

## Contoh

```html
<div layout="flex">
  <div layout="order:last">Muncul terakhir</div>
  <div layout="order:first">Muncul pertama</div>
</div>
```
