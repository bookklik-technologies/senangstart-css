# Stroke

Tetapkan warna gurisan SVG

## Sintaks
```
visual="stroke:[color]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `stroke: none` | Tiada gurisan |
| `current` | `stroke: currentColor` | Warna semasa |

## Contoh

```html
<svg visual="stroke:primary stroke-w:2">...</svg>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="stroke:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
