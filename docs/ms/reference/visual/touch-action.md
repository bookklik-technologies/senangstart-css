# Touch Action

Kawal interaksi sentuh

## Sintaks
```
visual="touch:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `touch-action: auto` | Sentuh lalai |
| `none` | `touch-action: none` | Lumpuhkan sentuh |
| `pan-x` | `touch-action: pan-x` | Pan mendatar |
| `pan-y` | `touch-action: pan-y` | Pan menegak |
| `pan-left` | `touch-action: pan-left` | Pan kiri |
| `pan-right` | `touch-action: pan-right` | Pan kanan |
| `pinch-zoom` | `touch-action: pinch-zoom` | Cubit untuk zum |
| `manipulation` | `touch-action: manipulation` | Pan dan cubit sahaja |

## Contoh

```html
<div visual="touch:manipulation">Touch optimized</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
