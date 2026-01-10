# Line Height

Tetapkan ketinggian baris

## Sintaks
```
visual="leading:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `line-height: 1` | Tiada ketinggian tambahan |
| `tight` | `line-height: 1.25` | Peneraju ketat |
| `snug` | `line-height: 1.375` | Peneraju ketat |
| `normal` | `line-height: 1.5` | Peneraju normal |
| `relaxed` | `line-height: 1.625` | Peneraju santai |
| `loose` | `line-height: 2` | Peneraju longgar |

## Contoh

```html
<div visual="leading:relaxed">Relaxed line height</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="line:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
