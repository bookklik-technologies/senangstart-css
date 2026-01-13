# Border Radius

Tetapkan jejari sempadan

## Sintaks
```
visual="rounded:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `border-radius: var(--r-none)` | Tiada pembulatan |
| `small` | `border-radius: var(--r-small)` | Jejari kecil |
| `medium` | `border-radius: var(--r-medium)` | Jejari sederhana |
| `big` | `border-radius: var(--r-big)` | Jejari besar |
| `round` | `border-radius: var(--r-round)` | Sepenuhnya bulat |

## Contoh

```html
<div visual="rounded:medium">Rounded corners</div>
<div visual="rounded:round">Pill shape</div>
```

## Nota

> [!TIP]
> **Sokongan Skala Tailwind**
> 
> Gunakan awalan `tw-` untuk mengakses skala jejari Tailwind: `rounded:tw-lg` (0.5rem), `rounded:tw-2xl` (1rem)
> 
> [Rujukan](https://tailwindcss.com/docs/border-radius)

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
