# Position

Tetapkan kaedah kedudukan

## Sintaks
```
layout="[position-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `static` | `position: static` | Kedudukan lalai |
| `relative` | `position: relative` | Relatif kepada kedudukan normal |
| `absolute` | `position: absolute` | Mutlak dalam bekas |
| `fixed` | `position: fixed` | Tetap pada port pandangan |
| `sticky` | `position: sticky` | Kedudukan melekit |

## Contoh

```html
<div layout="absolute">Absolute positioned</div>
<div layout="fixed">Fixed to viewport</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div layout="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
