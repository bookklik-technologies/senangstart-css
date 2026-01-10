# Asal Perspektif

Tetapkan titik hilang untuk transform 3D.

## Sintaks
```
visual="perspective-origin:center | perspective-origin:top | perspective-origin:bottom-right"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `perspective-origin:center` | `perspective-origin: center` |
| `perspective-origin:top` | `perspective-origin: top` |
| `perspective-origin:top-right` | `perspective-origin: top right` |
| `perspective-origin:bottom` | `perspective-origin: bottom` |
| `perspective-origin:left` | `perspective-origin: left` |

## Contoh

```html
<div visual="perspective-origin:center">...</div>  <!-- tengah (lalai) -->
<div visual="perspective-origin:top">...</div>     <!-- atas -->
<div visual="perspective-origin:bottom">...</div>  <!-- bawah -->
```
