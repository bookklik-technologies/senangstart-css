# Width

Tetapkan lebar elemen

## Sintaks
```
space="w:[value]"
```

## Nilai

| Properti | CSS Output | Huraian |
|--------|------------|-------------|
| `w` | `width: var(--s-{value})` | Lebar |
| `min-w` | `min-width: var(--s-{value})` | Lebar minimum |
| `max-w` | `max-width: var(--s-{value})` | Lebar maksimum |

## Nilai Skala

`none`, `thin`, `regular`, `thick`, `tiny`, `tiny-2x`, `small`, `small-2x`, `small-3x`, `small-4x`, `medium`, `medium-2x`, `medium-3x`, `medium-4x`, `large`, `large-2x`, `large-3x`, `large-4x`, `big`, `big-2x`, `big-3x`, `big-4x`, `giant`, `giant-2x`, `giant-3x`, `giant-4x`, `vast`, `vast-2x`, `vast-3x`, `vast-4x`, `vast-5x`, `vast-6x`, `vast-7x`, `vast-8x`, `vast-9x`, `vast-10x`

## Contoh

```html
<div space="w:[100%]">Full width</div>
<div space="max-w:[1200px]">Max width container</div>
<div space="min-w:[300px]">Min width</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kawal Lebar

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="w:[100%]"</code> - Tetapkan lebar tetap atau peratusan</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="w:[100%] p:small" visual="bg:primary text:white rounded:small">w:[100%]</div>
  <div space="w:[75%] p:small" visual="bg:primary text:white rounded:small">w:[75%]</div>
  <div space="w:[50%] p:small" visual="bg:primary text:white rounded:small">w:[50%]</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="w:[100%] p:small" visual="bg:primary text:white rounded:small">w:[100%]</div>
  <div space="w:[75%] p:small" visual="bg:primary text:white rounded:small">w:[75%]</div>
  <div space="w:[50%] p:small" visual="bg:primary text:white rounded:small">w:[50%]</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Lebar Maksimum

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="max-w:[200px]"</code> - Hadkan lebar maksimum</p>
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="max-w:[200px] p:small" visual="bg:primary text:white rounded:small">max-w:[200px]</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="max-w:[200px] p:small" visual="bg:primary text:white rounded:small">max-w:[200px]</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div space="width:[custom-value]">Custom</div>
```

## Nota

> [!TIP]
> **Sokongan Skala Tailwind**
> 
> Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `w:tw-64` (16rem), `max-w:tw-96` (24rem)
> 
> [Rujukan](https://tailwindcss.com/docs/width)
