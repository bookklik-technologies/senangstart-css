# Backdrop Opacity

Tetapkan kelegapan latar belakang

## Sintaks
```
visual="backdrop-opacity:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `backdrop-filter: opacity(0)` | Lutsinar |
| `50` | `backdrop-filter: opacity(0.5)` | 50% kelegapan |
| `100` | `backdrop-filter: opacity(1)` | Sepenuhnya legap |

## Contoh

```html
<div visual="backdrop-opacity:50">Semi-transparent backdrop</div>
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
