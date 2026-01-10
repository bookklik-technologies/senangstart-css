# Scroll Snap Align

Tetapkan penjajaran snap skrol

## Sintaks
```
visual="snap-align:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `start` | `scroll-snap-align: start` | Snap ke permulaan |
| `end` | `scroll-snap-align: end` | Snap ke hujung |
| `center` | `scroll-snap-align: center` | Snap ke tengah |
| `none` | `scroll-snap-align: none` | Tiada snap |

## Contoh

```html
<div visual="snap-align:start">Snap to start</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
