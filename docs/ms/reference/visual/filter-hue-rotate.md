# Filter Hue Rotate

Putar warna rona

## Sintaks
```
visual="hue-rotate:[degrees]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `filter: hue-rotate(0deg)` | Tiada putaran |
| `90` | `filter: hue-rotate(90deg)` | Putaran 90° |
| `180` | `filter: hue-rotate(180deg)` | Putaran 180° |

## Contoh

```html
<img visual="hue-rotate:90">Shifted hue</img>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
