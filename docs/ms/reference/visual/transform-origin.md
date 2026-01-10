# Transform Origin

Tetapkan titik asal transformasi

## Sintaks
```
visual="origin:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `center` | `transform-origin: center` | Asal tengah |
| `top` | `transform-origin: top` | Asal atas |
| `top-right` | `transform-origin: top right` | Atas kanan |
| `right` | `transform-origin: right` | Asal kanan |
| `bottom-right` | `transform-origin: bottom right` | Bawah kanan |
| `bottom` | `transform-origin: bottom` | Asal bawah |
| `bottom-left` | `transform-origin: bottom left` | Bawah kiri |
| `left` | `transform-origin: left` | Asal kiri |
| `top-left` | `transform-origin: top left` | Atas kiri |

## Contoh

```html
<div visual="rotate:45 origin:top-left">Rotate from corner</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transform:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
