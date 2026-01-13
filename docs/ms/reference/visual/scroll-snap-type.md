# Scroll Snap Type

Tetapkan jenis snap skrol

## Sintaks
```
visual="snap-type:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `scroll-snap-type: none` | Tiada snapping |
| `x` | `scroll-snap-type: x mandatory` | Snap mendatar |
| `y` | `scroll-snap-type: y mandatory` | Snap menegak |
| `both` | `scroll-snap-type: both mandatory` | Kedua-dua paksi |
| `x-proximity` | `scroll-snap-type: x proximity` | Kedekatan mendatar |
| `y-proximity` | `scroll-snap-type: y proximity` | Kedekatan menegak |

## Contoh

```html
<div visual="snap-type:x">Horizontal snap container</div>
```
