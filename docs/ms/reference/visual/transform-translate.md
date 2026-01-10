# Transform Translate

Alihkan kedudukan elemen

## Sintaks
```
visual="translate-x:[value]" or visual="translate-y:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `transform: translateX(0)` | Tiada alihan |
| `full` | `transform: translateX(100%)` | Lebar penuh |
| `1/2` | `transform: translateX(50%)` | Separuh lebar |

## Contoh

```html
<div visual="translate-x:full">Moved right</div>
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
