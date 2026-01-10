# Inset

Kawal ofset kedudukan

## Sintaks
```
layout="inset:[value]" or layout="top:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `inset` | `inset: {value}` | Semua sisi |
| `inset-x` | `left: {value}; right: {value}` | Kiri dan kanan |
| `inset-y` | `top: {value}; bottom: {value}` | Atas dan bawah |
| `top` | `top: {value}` | Ofset atas |
| `right` | `right: {value}` | Ofset kanan |
| `bottom` | `bottom: {value}` | Ofset bawah |
| `left` | `left: {value}` | Ofset kiri |

## Contoh

```html
<div layout="absolute inset:0">Full coverage</div>
<div layout="absolute top:medium left:medium">Offset</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div layout="inset:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
