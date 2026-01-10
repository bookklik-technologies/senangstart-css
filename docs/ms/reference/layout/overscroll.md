# Overscroll

Mengawal tingkah laku scroll chaining.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `overscroll:auto` | `overscroll-behavior: auto` |
| `overscroll:contain` | `overscroll-behavior: contain` |
| `overscroll:none` | `overscroll-behavior: none` |

## Contoh

```html
<div layout="overflow:auto overscroll:contain">
  Scroll tidak akan chain ke parent
</div>
```
