# Animation Fill

Tetapkan mod pengisian animasi

## Sintaks
```
visual="animation-fill:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `animation-fill-mode: none` | Tiada pengisian |
| `forwards` | `animation-fill-mode: forwards` | Kekalkan keadaan akhir |
| `backwards` | `animation-fill-mode: backwards` | Terapkan keadaan mula |
| `both` | `animation-fill-mode: both` | Kedua-dua arah |

## Contoh

```html
<div visual="animate:bounce animation-fill:forwards">Stays at end</div>
```
