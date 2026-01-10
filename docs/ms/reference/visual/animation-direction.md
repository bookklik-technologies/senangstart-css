# Animation Direction

Tetapkan arah animasi

## Sintaks
```
visual="animation-direction:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `normal` | `animation-direction: normal` | Arah normal |
| `reverse` | `animation-direction: reverse` | Arah terbalik |
| `alternate` | `animation-direction: alternate` | Arah berselang |
| `alternate-reverse` | `animation-direction: alternate-reverse` | Berselang terbalik |

## Contoh

```html
<div visual="animate:bounce animation-direction:alternate">Alternating</div>
```

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
