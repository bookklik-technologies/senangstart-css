# Flex

Properti pintasan flex

## Sintaks
```
layout="flex:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `1` | `flex: 1 1 0%` | Flex 1 |
| `auto` | `flex: 1 1 auto` | Flex auto |
| `initial` | `flex: 0 1 auto` | Flex awal |
| `none` | `flex: none` | Tiada flex |

## Contoh

```html
<div layout="flex:1">Flexible item</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div layout="flex:[custom-value]">Custom</div>
```
