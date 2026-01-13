# Transition Timing

Tetapkan fungsi masa peralihan

## Sintaks
```
visual="ease:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `linear` | `transition-timing-function: linear` | Masa linear |
| `in` | `transition-timing-function: cubic-bezier(0.4, 0, 1, 1)` | Memasuki mudah |
| `out` | `transition-timing-function: cubic-bezier(0, 0, 0.2, 1)` | Keluar mudah |
| `in-out` | `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)` | Masuk-keluar mudah |

## Contoh

```html
<div visual="transition:all ease:out">Ease out effect</div>
```

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transition:[custom-value]">Custom</div>
```
