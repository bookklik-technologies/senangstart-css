# Filter Grayscale

Terapkan penapis skala kelabu

## Sintaks
```
visual="grayscale:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `filter: grayscale(0%)` | Tiada skala kelabu |
| `partial` | `filter: grayscale(50%)` | 50% skala kelabu |
| `full` | `filter: grayscale(100%)` | Skala kelabu penuh |

## Contoh

```html
<img visual="grayscale:full">Black and white</img>
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
