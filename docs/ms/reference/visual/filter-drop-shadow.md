# Filter Drop Shadow

Tambah bayang jatuh

## Sintaks
```
visual="drop-shadow:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `filter: drop-shadow(none)` | Tiada bayang |
| `tiny` | `filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05))` | Bayang kecil |
| `small` | `filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1))` | Bayang kecil |
| `medium` | `filter: drop-shadow(0 4px 3px rgba(0,0,0,0.07))` | Bayang sederhana |
| `big` | `filter: drop-shadow(0 10px 8px rgba(0,0,0,0.04))` | Bayang besar |
| `giant` | `filter: drop-shadow(0 20px 13px rgba(0,0,0,0.03))` | Bayang gergasi |

## Contoh

```html
<img visual="drop-shadow:medium">Shadow on image</img>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```
