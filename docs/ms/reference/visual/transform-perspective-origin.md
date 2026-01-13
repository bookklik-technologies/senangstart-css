# Transform Perspective Origin

Tetapkan titik asal perspektif

## Sintaks
```
visual="perspective-origin:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `center` | `perspective-origin: center` | Asal tengah |
| `top` | `perspective-origin: top` | Asal atas |
| `bottom` | `perspective-origin: bottom` | Asal bawah |
| `left` | `perspective-origin: left` | Asal kiri |
| `right` | `perspective-origin: right` | Asal kanan |
| `top-left` | `perspective-origin: top left` | Atas kiri |
| `top-right` | `perspective-origin: top right` | Atas kanan |
| `bottom-left` | `perspective-origin: bottom left` | Bawah kiri |
| `bottom-right` | `perspective-origin: bottom right` | Bawah kanan |

## Contoh

```html
<div visual="perspective-origin:top">Top origin</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transform:[custom-value]">Custom</div>
```
