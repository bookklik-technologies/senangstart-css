# Skala Kelabu

Tukar elemen kepada skala kelabu.

## Sintaks
```
visual="grayscale:none | grayscale:partial | grayscale:full | grayscale"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `grayscale:none` | `filter: grayscale(0)` |
| `grayscale:partial` | `filter: grayscale(0.5)` |
| `grayscale:full` | `filter: grayscale(1)` |
| `grayscale` | `filter: grayscale(1)` |

## Contoh

```html
<img visual="grayscale:none" />     <!-- Warna penuh -->
<img visual="grayscale:partial" />  <!-- 50% kelabu -->
<img visual="grayscale" />          <!-- Kelabu penuh -->
```
