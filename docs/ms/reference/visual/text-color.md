# Text Color

Tetapkan warna teks

## Sintaks
```
visual="text:[color]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `left` | `text-align: left` | Jajar kiri |
| `center` | `text-align: center` | Jajar tengah |
| `right` | `text-align: right` | Jajar kanan |
| `justify` | `text-align: justify` | Jajar sepenuh |

## Contoh

```html
<div visual="text:white">White text</div>
<div visual="text:center">Centered text</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="text:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
