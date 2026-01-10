# Filter Blur

Terapkan penapis kabur

## Sintaks
```
visual="blur:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `filter: blur(0)` | Tiada kabur |
| `tiny` | `filter: blur(2px)` | Kabur kecil |
| `small` | `filter: blur(4px)` | Kabur kecil |
| `medium` | `filter: blur(8px)` | Kabur sederhana |
| `big` | `filter: blur(12px)` | Kabur besar |
| `giant` | `filter: blur(24px)` | Kabur gergasi |
| `vast` | `filter: blur(48px)` | Kabur luas |

## Contoh

```html
<div visual="blur:medium">Blurred element</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
