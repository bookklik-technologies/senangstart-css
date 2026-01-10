# Grid Row Span

Merentangi baris grid

## Sintaks
```
layout="row-span:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `1-12` | `grid-row: span {n} / span {n}` | Merentangi N baris |
| `full` | `grid-row: 1 / -1` | Merentangi semua baris |

## Contoh

```html
<div layout="row-span:2">Spans 2 rows</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
