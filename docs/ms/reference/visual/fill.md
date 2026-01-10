# Fill

Tetapkan warna pengisian SVG

## Sintaks
```
visual="fill:[color]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `fill: none` | Tiada pengisian |
| `current` | `fill: currentColor` | Warna semasa |

## Contoh

```html
<svg visual="fill:primary">...</svg>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="fill:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
