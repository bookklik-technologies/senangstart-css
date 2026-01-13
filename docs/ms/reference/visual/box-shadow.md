# Box Shadow

Tambah bayang kotak

## Sintaks
```
visual="shadow:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `box-shadow: var(--shadow-none)` | Tiada bayang |
| `small` | `box-shadow: var(--shadow-small)` | Bayang kecil |
| `medium` | `box-shadow: var(--shadow-medium)` | Bayang sederhana |
| `big` | `box-shadow: var(--shadow-big)` | Bayang besar |
| `giant` | `box-shadow: var(--shadow-giant)` | Bayang gergasi |

## Contoh

```html
<div visual="shadow:medium">Card with shadow</div>
```

## Nota

> [!TIP]
> **Sokongan Skala Tailwind**
> 
> Gunakan awalan `tw-` untuk mengakses skala bayang Tailwind: `shadow:tw-md`, `shadow:tw-lg`, `shadow:tw-xl`
> 
> [Rujukan](https://tailwindcss.com/docs/box-shadow)

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
