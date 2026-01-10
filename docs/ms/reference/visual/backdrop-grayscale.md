# Backdrop Grayscale

Terapkan skala kelabu pada latar belakang

## Sintaks
```
visual="backdrop-grayscale:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `backdrop-filter: grayscale(0%)` | Tiada skala kelabu |
| `partial` | `backdrop-filter: grayscale(50%)` | 50% skala kelabu |
| `full` | `backdrop-filter: grayscale(100%)` | Skala kelabu penuh |

## Contoh

```html
<div visual="backdrop-grayscale:full">Grayscale backdrop</div>
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
