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

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Jejari Sempadan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="rounded:medium"</code> - Bulatkan sudut elemen dari halus hingga berbentuk pil</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0;">none</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0.25rem;">small</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0.5rem;">medium</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 9999px;">round</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0;">none</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0.25rem;">small</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 0.5rem;">medium</div>
  <div space="p:small" visual="bg:primary text:white" style="border-radius: 9999px;">round</div>
</div>
```

</details>

</div>

## Nota

> [!TIP]
> **Sokongan Skala Tailwind**
> 
> Gunakan awalan `tw-` untuk mengakses skala jejari Tailwind: `rounded:tw-lg` (0.5rem), `rounded:tw-2xl` (1rem)
> 
> [Rujukan](https://tailwindcss.com/docs/border-radius)
