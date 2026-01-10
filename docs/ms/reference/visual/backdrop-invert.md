# Songsang Latar

Songsangkan warna latar belakang.

## Sintaks
```
visual="backdrop-invert:none | backdrop-invert:partial | backdrop-invert:full | backdrop-invert"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `backdrop-invert:none` | `backdrop-filter: invert(0)` |
| `backdrop-invert:partial` | `backdrop-filter: invert(0.5)` |
| `backdrop-invert:full` | `backdrop-filter: invert(1)` |
| `backdrop-invert` | `backdrop-filter: invert(1)` |

## Contoh

```html
<div visual="backdrop-invert:none">...</div>  <!-- Tiada songsangan -->
<div visual="backdrop-invert">...</div>       <!-- Songsang penuh -->
```
