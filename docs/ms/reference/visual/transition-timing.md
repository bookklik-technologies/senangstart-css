# Fungsi Masa Peralihan

Kawal easing peralihan.

## Sintaks
```
visual="ease:linear | ease:in | ease:out | ease:in-out"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `ease:linear` | `transition-timing-function: linear` |
| `ease:in` | `transition-timing-function: ease-in` |
| `ease:out` | `transition-timing-function: ease-out` |
| `ease:in-out` | `transition-timing-function: ease-in-out` |

## Contoh

```html
<div visual="transition ease:linear">...</div>  <!-- Linear -->
<div visual="transition ease:in">...</div>      <!-- Ease in -->
<div visual="transition ease:out">...</div>     <!-- Ease out -->
<div visual="transition ease:in-out">...</div>  <!-- Ease in-out -->
```
