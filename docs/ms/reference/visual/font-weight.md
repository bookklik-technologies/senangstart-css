# Font Weight

Tetapkan berat fon

## Sintaks
```
visual="font:[weight]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `normal` | `font-weight: var(--fw-normal)` | Berat normal |
| `medium` | `font-weight: var(--fw-medium)` | Berat sederhana |
| `bold` | `font-weight: var(--fw-bold)` | Berat tebal |

## Contoh

```html
<div visual="font:bold">Bold text</div>
<div visual="font:tw-semibold">Semibold text</div>
```

## Nota

> [!TIP]
> **Sokongan Skala Tailwind**
> 
> Gunakan awalan `tw-` untuk mengakses skala berat fon Tailwind: `font:tw-thin` (100), `font:tw-semibold` (600), `font:tw-extrabold` (800)
> 
> [Rujukan](https://tailwindcss.com/docs/font-weight)
