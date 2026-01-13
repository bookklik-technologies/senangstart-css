# Grid Auto Flow

Kawal bagaimana item diletakkan automatik dalam grid

## Sintaks
```
layout="grid-flow:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `row` | `grid-auto-flow: row` | Letakkan mengikut baris |
| `col` | `grid-auto-flow: column` | Letakkan mengikut lajur |
| `dense` | `grid-auto-flow: dense` | Pembungkusan padat |
| `row-dense` | `grid-auto-flow: row dense` | Baris dengan padat |
| `col-dense` | `grid-auto-flow: column dense` | Lajur dengan padat |

## Contoh

```html
<div layout="grid grid-flow:col">Column flow</div>
```
