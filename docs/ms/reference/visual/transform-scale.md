# Transform Scale

Skala elemen

## Sintaks
```
visual="scale:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `transform: scale(0)` | Skala ke 0 |
| `50` | `transform: scale(0.5)` | Skala ke 50% |
| `75` | `transform: scale(0.75)` | Skala ke 75% |
| `100` | `transform: scale(1)` | Skala normal |
| `110` | `transform: scale(1.1)` | Skala ke 110% |
| `125` | `transform: scale(1.25)` | Skala ke 125% |
| `150` | `transform: scale(1.5)` | Skala ke 150% |

## Contoh

```html
<div visual="transition:transform hover:scale:110">Hover to grow</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transform:[custom-value]">Custom</div>
```
