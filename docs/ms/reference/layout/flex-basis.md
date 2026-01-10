# Flex Basis

Tetapkan saiz awal item flex

## Sintaks
```
layout="basis:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `flex-basis: auto` | Asas automatik |
| `0` | `flex-basis: 0` | Asas sifar |

## Contoh

```html
<div layout="basis:[200px]">200px basis</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div layout="flex:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
