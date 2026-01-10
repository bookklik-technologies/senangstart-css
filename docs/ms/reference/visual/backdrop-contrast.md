# Backdrop Contrast

Laraskan kontras latar belakang

## Sintaks
```
visual="backdrop-contrast:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `low` | `backdrop-filter: contrast(0.5)` | Kontras rendah |
| `reduced` | `backdrop-filter: contrast(0.75)` | Kontras dikurangkan |
| `normal` | `backdrop-filter: contrast(1)` | Kontras normal |
| `high` | `backdrop-filter: contrast(1.25)` | Kontras tinggi |
| `max` | `backdrop-filter: contrast(1.5)` | Kontras maksimum |

## Contoh

```html
<div visual="backdrop-contrast:high">High contrast backdrop</div>
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
