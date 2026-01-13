# Backdrop Invert

Songsangkan warna latar belakang

## Sintaks
```
visual="backdrop-invert:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `backdrop-filter: invert(0%)` | Tiada penyongsangan |
| `partial` | `backdrop-filter: invert(50%)` | 50% penyongsangan |
| `full` | `backdrop-filter: invert(100%)` | Penyongsangan penuh |

## Contoh

```html
<div visual="backdrop-invert:full">Inverted backdrop</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
