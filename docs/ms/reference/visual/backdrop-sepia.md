# Backdrop Sepia

Menerapkan tona sepia pada latar belakang.

## Sintaks
```
visual="backdrop-sepia:none | backdrop-sepia:partial | backdrop-sepia:full | backdrop-sepia"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `backdrop-sepia:none` | `backdrop-filter: sepia(0)` |
| `backdrop-sepia:partial` | `backdrop-filter: sepia(0.5)` |
| `backdrop-sepia:full` | `backdrop-filter: sepia(1)` |
| `backdrop-sepia` | `backdrop-filter: sepia(1)` |

## Contoh

```html
<div visual="backdrop-sepia:none">...</div>     <!-- Tiada sepia -->
<div visual="backdrop-sepia:partial">...</div>  <!-- 50% sepia -->
<div visual="backdrop-sepia:full">...</div>     <!-- Sepia penuh -->
<div visual="backdrop-sepia">...</div>          <!-- Sepia penuh (lalai) -->
```
