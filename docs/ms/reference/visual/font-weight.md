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

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Berat Fon

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="font:bold"</code> - Kawal ketebalan teks</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="font:normal">normal</span>
  <span visual="font:medium">medium</span>
  <span visual="font:bold">bold</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="font:normal">normal</span>
  <span visual="font:medium">medium</span>
  <span visual="font:bold">bold</span>
</div>
```

</details>

</div>

## Nota

> [!TIP]
> **Sokongan Skala Tailwind**
> 
> Gunakan awalan `tw-` untuk mengakses skala berat fon Tailwind: `font:tw-thin` (100), `font:tw-semibold` (600), `font:tw-extrabold` (800)
> 
> [Rujukan](https://tailwindcss.com/docs/font-weight)
