# Grid Columns

Tentukan templat lajur grid

## Sintaks
```
layout="grid-cols:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `1-12` | `grid-template-columns: repeat({n}, minmax(0, 1fr))` | N lajur sama |
| `none` | `grid-template-columns: none` | Tiada lajur ditakrifkan |
| `subgrid` | `grid-template-columns: subgrid` | Guna grid induk |

## Contoh

```html
<div layout="grid grid-cols:3">3 columns</div>
<div layout="grid grid-cols:12">12 columns</div>
```
