# Grid Column Span

Merentangi lajur grid

## Sintaks
```
layout="col-span:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `1-12` | `grid-column: span {n} / span {n}` | Merentangi N lajur |
| `full` | `grid-column: 1 / -1` | Merentangi semua lajur |

## Contoh

```html
<div layout="col-span:2">Spans 2 columns</div>
<div layout="col-span:full">Full width</div>
```
