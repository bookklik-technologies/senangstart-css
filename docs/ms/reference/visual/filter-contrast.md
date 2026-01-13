# Filter Contrast

Laraskan kontras

## Sintaks
```
visual="contrast:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `low` | `filter: contrast(0.5)` | Kontras rendah |
| `reduced` | `filter: contrast(0.75)` | Kontras dikurangkan |
| `normal` | `filter: contrast(1)` | Kontras normal |
| `high` | `filter: contrast(1.25)` | Kontras tinggi |
| `max` | `filter: contrast(1.5)` | Kontras maksimum |

## Contoh

```html
<img visual="contrast:high">High contrast</img>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```
