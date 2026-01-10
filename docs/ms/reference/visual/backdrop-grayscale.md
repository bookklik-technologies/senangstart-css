# Backdrop Grayscale

Menerapkan skala kelabu pada latar belakang.

## Sintaks
```
visual="backdrop-grayscale:none | backdrop-grayscale:partial | backdrop-grayscale:full | backdrop-grayscale"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `backdrop-grayscale:none` | `backdrop-filter: grayscale(0)` |
| `backdrop-grayscale:partial` | `backdrop-filter: grayscale(0.5)` |
| `backdrop-grayscale:full` | `backdrop-filter: grayscale(1)` |
| `backdrop-grayscale` | `backdrop-filter: grayscale(1)` |

## Contoh

```html
<div visual="backdrop-grayscale:none">...</div>     <!-- Warna penuh -->
<div visual="backdrop-grayscale:partial">...</div>  <!-- 50% skala kelabu -->
<div visual="backdrop-grayscale:full">...</div>     <!-- Skala kelabu penuh -->
<div visual="backdrop-grayscale">...</div>          <!-- Skala kelabu penuh (lalai) -->
```
