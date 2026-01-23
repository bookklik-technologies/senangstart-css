# Padding

Tambah padding pada elemen

## Sintaks
```
space="p:[value]" or space="p-{side}:[value]"
```

## Nilai

| Properti | CSS Output | Huraian |
|--------|------------|-------------|
| `p` | `padding: var(--s-{value})` | Semua sisi |
| `p-t` | `padding-top: var(--s-{value})` | Atas |
| `p-r` | `padding-right: var(--s-{value})` | Kanan |
| `p-b` | `padding-bottom: var(--s-{value})` | Bawah |
| `p-l` | `padding-left: var(--s-{value})` | Kiri |
| `p-x` | `padding-left: var(--s-{value}) padding-right: var(--s-{value})` | Mendatar |
| `p-y` | `padding-top: var(--s-{value}) padding-bottom: var(--s-{value})` | Menegak |

## Nilai Skala

`none`, `thin`, `regular`, `thick`, `tiny`, `tiny-2x`, `small`, `small-2x`, `small-3x`, `small-4x`, `medium`, `medium-2x`, `medium-3x`, `medium-4x`, `large`, `large-2x`, `large-3x`, `large-4x`, `big`, `big-2x`, `big-3x`, `big-4x`, `giant`, `giant-2x`, `giant-3x`, `giant-4x`, `vast`, `vast-2x`, `vast-3x`, `vast-4x`, `vast-5x`, `vast-6x`, `vast-7x`, `vast-8x`, `vast-9x`, `vast-10x`

## Contoh

```html
<div space="p:medium">Padding all sides</div>
<div space="p-x:big p-y:small">Different padding</div>
<div space="p:[20px]">Custom padding</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Skala Padding

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="p:medium"</code> - Saiz padding berbeza dari skala</p>
<div layout="flex" space="g:small">
  <div space="p:tiny" visual="bg:primary text:white rounded:small">tiny</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">small</div>
  <div space="p:medium" visual="bg:primary text:white rounded:small">medium</div>
  <div space="p:big" visual="bg:primary text:white rounded:small">big</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small">
  <div space="p:tiny" visual="bg:primary text:white rounded:small">tiny</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">small</div>
  <div space="p:medium" visual="bg:primary text:white rounded:small">medium</div>
  <div space="p:big" visual="bg:primary text:white rounded:small">big</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Padding Arah

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="p-x:big"</code> - Padamkan padding pada sisi tertentu</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p-x:big p-y:small" visual="bg:primary text:white rounded:small">p-x:big p-y:small</div>
  <div space="p-t:big" visual="bg:primary text:white rounded:small">p-t:big</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p-x:big p-y:small" visual="bg:primary text:white rounded:small">p-x:big p-y:small</div>
  <div space="p-t:big" visual="bg:primary text:white rounded:small">p-t:big</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div space="padding:[custom-value]">Custom</div>
```

## Nota

> [!TIP]
> **Sokongan Skala Tailwind**
> 
> Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `p:tw-4` (1rem), `p:tw-8` (2rem)
> 
> [Rujukan](https://tailwindcss.com/docs/padding)
