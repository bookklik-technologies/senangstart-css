# Object Position

Letakkan kandungan elemen diganti dalam bekas

## Sintaks
```
layout="object-pos:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `center` | `object-position: center` | Kedudukan tengah |
| `top` | `object-position: top` | Kedudukan atas |
| `bottom` | `object-position: bottom` | Kedudukan bawah |
| `left` | `object-position: left` | Kedudukan kiri |
| `right` | `object-position: right` | Kedudukan kanan |
| `top-left` | `object-position: top left` | Atas kiri |
| `top-right` | `object-position: top right` | Atas kanan |
| `bottom-left` | `object-position: bottom left` | Bawah kiri |
| `bottom-right` | `object-position: bottom right` | Bawah kanan |

## Contoh

```html
<img layout="object:cover object-pos:top">Top positioned</img>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div layout="object:[custom-value]">Custom</div>
```
