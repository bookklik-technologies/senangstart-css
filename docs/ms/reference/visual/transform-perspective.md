# Transform Perspective

Tetapkan perspektif 3D

## Sintaks
```
visual="perspective:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `perspective: none` | Tiada perspektif |
| `dramatic` | `perspective: 100px` | Perspektif dramatik |
| `near` | `perspective: 300px` | Perspektif dekat |
| `normal` | `perspective: 500px` | Perspektif normal |
| `midrange` | `perspective: 800px` | Perspektif pertengahan |
| `far` | `perspective: 1000px` | Perspektif jauh |
| `distant` | `perspective: 1200px` | Perspektif jauh sekali |

## Contoh

```html
<div visual="perspective:normal">3D container</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transform:[custom-value]">Custom</div>
```
