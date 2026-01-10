# Transform Rotate

Putar elemen

## Sintaks
```
visual="rotate:[degrees]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `transform: rotate(0deg)` | Tiada putaran |
| `45` | `transform: rotate(45deg)` | Putaran 45° |
| `90` | `transform: rotate(90deg)` | Putaran 90° |
| `180` | `transform: rotate(180deg)` | Putaran 180° |

## Contoh

```html
<div visual="rotate:45">Rotated 45 degrees</div>
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
