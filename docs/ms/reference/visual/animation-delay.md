# Animation Delay

Tetapkan kelewatan animasi

## Sintaks
```
visual="animation-delay:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `instant` | `animation-delay: 75ms` | Kelewatan 75ms |
| `quick` | `animation-delay: 100ms` | Kelewatan 100ms |
| `fast` | `animation-delay: 150ms` | Kelewatan 150ms |
| `normal` | `animation-delay: 200ms` | Kelewatan 200ms |
| `slow` | `animation-delay: 300ms` | Kelewatan 300ms |

## Contoh

```html
<div visual="animate:bounce animation-delay:slow">Delayed bounce</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="animation:[custom-value]">Custom</div>
```
