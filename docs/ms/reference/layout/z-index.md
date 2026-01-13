# Z Index

Kawal susunan tindanan

## Sintaks
```
layout="z:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `base` | `z-index: var(--z-base)` | Lapisan asas (0) |
| `low` | `z-index: var(--z-low)` | Lapisan rendah (10) |
| `mid` | `z-index: var(--z-mid)` | Lapisan tengah (50) |
| `high` | `z-index: var(--z-high)` | Lapisan tinggi (100) |
| `top` | `z-index: var(--z-top)` | Lapisan teratas (9999) |

## Contoh

```html
<div layout="z:top">On top</div>
```
