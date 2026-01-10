# Stroke Width

Tetapkan lebar gurisan SVG

## Sintaks
```
visual="stroke-w:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `stroke-width: 0` | Tiada gurisan |
| `1` | `stroke-width: 1px` | Gurisan 1px |
| `2` | `stroke-width: 2px` | Gurisan 2px |

## Contoh

```html
<svg visual="stroke:black stroke-w:2">...</svg>
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
