# Float Clear

Kawal pengapungan dan pembersihan elemen

## Sintaks
```
layout="[float-value]" or layout="[clear-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `float-left` | `float: left` | Apung kiri |
| `float-right` | `float: right` | Apung kanan |
| `float-none` | `float: none` | Tiada pengapungan |
| `clear-left` | `clear: left` | Bersihkan apungan kiri |
| `clear-right` | `clear: right` | Bersihkan apungan kanan |
| `clear-both` | `clear: both` | Bersihkan semua apungan |
| `clear-none` | `clear: none` | Tiada pembersihan |

## Contoh

```html
<img layout="float-left">Float left</img>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
