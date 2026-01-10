# Grid Rows

Tentukan templat baris grid

## Sintaks
```
layout="grid-rows:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `1-12` | `grid-template-rows: repeat({n}, minmax(0, 1fr))` | N baris sama |
| `none` | `grid-template-rows: none` | Tiada baris ditakrifkan |
| `subgrid` | `grid-template-rows: subgrid` | Guna grid induk |

## Contoh

```html
<div layout="grid grid-rows:3">3 rows</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
