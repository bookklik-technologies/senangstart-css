# Aspect Ratio

Tetapkan nisbah aspek elemen

## Sintaks
```
layout="aspect:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `aspect-ratio: auto` | Nisbah aspek semula jadi |
| `square` | `aspect-ratio: 1 / 1` | Segi empat sama 1:1 |
| `video` | `aspect-ratio: 16 / 9` | Video 16:9 |

## Contoh

```html
<div layout="aspect:square">Square</div>
<div layout="aspect:[4/3]">4:3</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div layout="aspect:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
