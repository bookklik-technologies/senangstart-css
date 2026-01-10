# Penjajaran Ringkas

Pintasan untuk corak penjajaran biasa.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `center` | `justify-content: center; align-items: center` |
| `start` | `justify-content: flex-start; align-items: flex-start` |
| `end` | `justify-content: flex-end; align-items: flex-end` |
| `between` | `justify-content: space-between` |

## Contoh

```html
<div layout="flex center">Ditengahkan dalam kedua-dua arah</div>
<div layout="flex between items-center">Item diedarkan, ditengahkan menegak</div>
```
