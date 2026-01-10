# Songsang

Songsangkan warna elemen.

## Sintaks
```
visual="invert:none | invert:partial | invert:full | invert"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `invert:none` | `filter: invert(0)` |
| `invert:partial` | `filter: invert(0.5)` |
| `invert:full` | `filter: invert(1)` |
| `invert` | `filter: invert(1)` |

## Contoh

```html
<img visual="invert:none" />     <!-- Tiada songsangan -->
<img visual="invert:partial" />  <!-- 50% songsang -->
<img visual="invert" />          <!-- Songsang penuh -->
```
