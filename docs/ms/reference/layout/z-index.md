# Z-Index

Mengawal susunan lapisan.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `z:base` | `z-index: 0` |
| `z:low` | `z-index: 10` |
| `z:mid` | `z-index: 50` |
| `z:high` | `z-index: 100` |
| `z:top` | `z-index: 9999` |

## Contoh

```html
<div layout="relative z:base">Lapisan asas</div>
<div layout="fixed z:top">Lapisan paling atas</div>
```
