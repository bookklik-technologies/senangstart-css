# Text Size

Tetapkan saiz fon

## Sintaks
```
visual="text-size:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `mini` | `font-size: var(--font-mini); line-height: var(--font-lh-mini)` | Saiz mini (0.75rem / 1rem) |
| `small` | `font-size: var(--font-small); line-height: var(--font-lh-small)` | Saiz kecil (0.875rem / 1.25rem) |
| `base` | `font-size: var(--font-base); line-height: var(--font-lh-base)` | Saiz asas (1rem / 1.5rem) |
| `large` | `font-size: var(--font-large); line-height: var(--font-lh-large)` | Saiz besar (1.125rem / 1.75rem) |
| `big` | `font-size: var(--font-big); line-height: var(--font-lh-big)` | Saiz besar (1.25rem / 1.75rem) |
| `huge` | `font-size: var(--font-huge); line-height: var(--font-lh-huge)` | Saiz besar sekali (1.5rem / 2rem) |
| `grand` | `font-size: var(--font-grand); line-height: var(--font-lh-grand)` | Saiz agung (1.875rem / 2.25rem) |
| `giant` | `font-size: var(--font-giant); line-height: var(--font-lh-giant)` | Saiz gergasi (2.25rem / 2.5rem) |
| `mount` | `font-size: var(--font-mount); line-height: var(--font-lh-mount)` | Saiz gunung (3rem / 1) |
| `mega` | `font-size: var(--font-mega); line-height: var(--font-lh-mega)` | Saiz mega (3.75rem / 1) |
| `giga` | `font-size: var(--font-giga); line-height: var(--font-lh-giga)` | Saiz giga (4.5rem / 1) |
| `tera` | `font-size: var(--font-tera); line-height: var(--font-lh-tera)` | Saiz tera (6rem / 1) |
| `hero` | `font-size: var(--font-hero); line-height: var(--font-lh-hero)` | Saiz hero (8rem / 1) |

## Contoh

```html
<div visual="text-size:big">Large text</div>
<div visual="text-size:[24px]">24px text</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Saiz Fon

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="text-size:big"</code> - Skala saiz teks dengan ketinggian baris berpasangan</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="text-size:mini">mini (0.75rem / 1rem)</span>
  <span visual="text-size:small">small (0.875rem / 1.25rem)</span>
  <span visual="text-size:base">base (1rem / 1.5rem)</span>
  <span visual="text-size:big">big (1.25rem / 1.75rem)</span>
  <span visual="text-size:giant">giant (2.25rem / 2.5rem)</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="text-size:mini">mini (0.75rem / 1rem)</span>
  <span visual="text-size:small">small (0.875rem / 1.25rem)</span>
  <span visual="text-size:base">base (1rem / 1.5rem)</span>
  <span visual="text-size:big">big (1.25rem / 1.75rem)</span>
  <span visual="text-size:giant">giant (2.25rem / 2.5rem)</span>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="text:[custom-value]">Custom</div>
```

## Nota

> [!TIP]
> **Sokongan Skala Tailwind**
> 
> Gunakan awalan `tw-` untuk mengakses skala fon Tailwind: `text-size:tw-xl` (1.25rem), `text-size:tw-2xl` (1.5rem)
> 
> [Rujukan](https://tailwindcss.com/docs/font-size)
