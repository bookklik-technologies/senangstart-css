# Filter Invert

Songsangkan warna

## Sintaks
```
visual="invert:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `filter: invert(0%)` | Tiada penyongsangan |
| `partial` | `filter: invert(50%)` | 50% penyongsangan |
| `full` | `filter: invert(100%)` | Penyongsangan penuh |

## Contoh

```html
<img visual="invert:full">Inverted colors</img>
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
