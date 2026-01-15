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

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Bayang Kotak

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="shadow:medium"</code> - Tambah ketinggian dengan bayang dari halus hingga dramatik</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:small">small</div>
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:medium">medium</div>
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:big">big</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:small">small</div>
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:medium">medium</div>
  <div space="p:small" visual="bg:white dark:bg:neutral-800 rounded:small shadow:big">big</div>
</div>
```

</details>

</div>

## Nota

> [!TIP]
> **Sokongan Skala Tailwind**
> 
> Gunakan awalan `tw-` untuk mengakses skala bayang Tailwind: `shadow:tw-md`, `shadow:tw-lg`, `shadow:tw-xl`
> 
> [Rujukan](https://tailwindcss.com/docs/box-shadow)
