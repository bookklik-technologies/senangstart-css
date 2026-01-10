# Mod Isi Animasi

Kawal gaya elemen sebelum dan selepas animasi.

## Sintaks
```
visual="animation-fill:none | animation-fill:forwards | animation-fill:backwards | animation-fill:both"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `animation-fill:none` | `animation-fill-mode: none` |
| `animation-fill:forwards` | `animation-fill-mode: forwards` |
| `animation-fill:backwards` | `animation-fill-mode: backwards` |
| `animation-fill:both` | `animation-fill-mode: both` |

## Contoh

```html
<div visual="animate:bounce animation-fill:none">...</div>      <!-- Tiada -->
<div visual="animate:bounce animation-fill:forwards">...</div>  <!-- Ke hadapan -->
<div visual="animate:bounce animation-fill:both">...</div>      <!-- Kedua-dua -->
```
