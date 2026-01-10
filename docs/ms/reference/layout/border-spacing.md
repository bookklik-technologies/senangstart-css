# Border Spacing

Kawal jarak antara sempadan jadual

## Sintaks
```
layout="border-spacing:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `border-spacing` | `border-spacing: {value}` | Semua jarak |
| `border-spacing-x` | `border-spacing: {value} 0` | Jarak mendatar |
| `border-spacing-y` | `border-spacing: 0 {value}` | Jarak menegak |

## Contoh

```html
<table layout="border-separate border-spacing:small">Spaced</table>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div layout="border:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
