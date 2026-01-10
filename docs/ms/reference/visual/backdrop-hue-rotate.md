# Backdrop Hue Rotate

Putar rona latar belakang

## Sintaks
```
visual="backdrop-hue-rotate:[degrees]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `backdrop-filter: hue-rotate(0deg)` | Tiada putaran |
| `90` | `backdrop-filter: hue-rotate(90deg)` | Putaran 90° |
| `180` | `backdrop-filter: hue-rotate(180deg)` | Putaran 180° |

## Contoh

```html
<div visual="backdrop-hue-rotate:90">Rotated hue backdrop</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
