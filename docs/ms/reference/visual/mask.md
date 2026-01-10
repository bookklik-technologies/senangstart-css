# Mask

Terapkan topeng pada elemen

## Sintaks
```
visual="mask:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `mask-image: none` | Tiada topeng |
| `fade-y` | `mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)` | Pudar menegak |
| `fade-x` | `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)` | Pudar mendatar |

## Contoh

```html
<div visual="mask:fade-y">Faded edges</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="mask:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
