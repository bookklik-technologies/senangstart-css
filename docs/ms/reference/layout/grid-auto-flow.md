# Grid Auto Flow

Kawal bagaimana item diletakkan automatik dalam grid

## Sintaks
```
layout="[grid-flow-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `grid-flow-row` | `grid-auto-flow: row` | Letakkan mengikut baris |
| `grid-flow-col` | `grid-auto-flow: column` | Letakkan mengikut lajur |
| `grid-flow-dense` | `grid-auto-flow: dense` | Pembungkusan padat |
| `grid-flow-row-dense` | `grid-auto-flow: row dense` | Baris dengan padat |
| `grid-flow-col-dense` | `grid-auto-flow: column dense` | Lajur dengan padat |

## Contoh

```html
<div layout="grid grid-flow-col">Column flow</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
