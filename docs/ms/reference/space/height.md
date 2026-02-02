# Height

Tetapkan tinggi elemen

## Sintaks
```
space="h:[value]"
```

## Nilai

| Properti | CSS Output | Huraian |
|--------|------------|-------------|
| `h` | `height: var(--s-{value})` | Tinggi |
| `min-h` | `min-height: var(--s-{value})` | Tinggi minimum |
| `max-h` | `max-height: var(--s-{value})` | Tinggi maksimum |

## Nilai Skala

`none`, `thin`, `regular`, `thick`, `tiny`, `tiny-2x`, `small`, `small-2x`, `small-3x`, `small-4x`, `medium`, `medium-2x`, `medium-3x`, `medium-4x`, `large`, `large-2x`, `large-3x`, `large-4x`, `big`, `big-2x`, `big-3x`, `big-4x`, `giant`, `giant-2x`, `giant-3x`, `giant-4x`, `vast`, `vast-2x`, `vast-3x`, `vast-4x`, `vast-5x`, `vast-6x`, `vast-7x`, `vast-8x`, `vast-9x`, `vast-10x`, `min`, `max`, `fit`, `full`, `half`, `third`, `third-2x`, `quarter`, `quarter-2x`, `quarter-3x`, `1/1`, `1/2`, `1/3`, `2/3`, `1/4`, `2/4`, `3/4`

## Contoh

```html
<div space="h:full">Full height</div>
<div space="h:half">Half height</div>
<div space="h:[100vh]">Full viewport height</div>
<div space="min-h:[400px]">Min height</div>
<div space="h:max">Content height</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kawal Tinggi

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="h:full"</code> - Tetapkan tinggi tetap</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 120px;">
  <div space="h:full p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:full</div>
  <div space="h:third-2x p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:third-2x</div>
  <div space="h:half p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:half</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 120px;">
  <div space="h:full p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:full</div>
  <div space="h:third-2x p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:third-2x</div>
  <div space="h:half p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:half</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Tinggi Berdasarkan Kandungan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="h:max"</code> - Guna min, max, atau fit untuk tinggi berdasarkan kandungan</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="h:min p:small" visual="bg:primary text:white rounded:small">h:min</div>
  <div space="h:max p:small" visual="bg:pink-600 text:white rounded:small">h:max<br>Multi<br>Line</div>
  <div space="h:fit p:small" visual="bg:amber-600 text:white rounded:small">h:fit</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="h:min p:small" visual="bg:primary text:white rounded:small">h:min</div>
  <div space="h:max p:small" visual="bg:pink-600 text:white rounded:small">h:max<br>Multi<br>Line</div>
  <div space="h:fit p:small" visual="bg:amber-600 text:white rounded:small">h:fit</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Tinggi Min/Max dengan Nilai Kandungan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="min-h:min"</code> - Hadkan tinggi menggunakan nilai kandungan</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="min-h:min p:small" visual="bg:primary text:white rounded:small">min-h:min</div>
  <div space="max-h:max p:small" visual="bg:pink-600 text:white rounded:small">max-h:max</div>
  <div space="min-h:[80px] p:small" visual="bg:amber-600 text:white rounded:small" layout="flex center">min-h:[80px]</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="min-h:min p:small" visual="bg:primary text:white rounded:small">min-h:min</div>
  <div space="max-h:max p:small" visual="bg:pink-600 text:white rounded:small">max-h:max</div>
  <div space="min-h:[80px] p:small" visual="bg:amber-600 text:white rounded:small" layout="flex center">min-h:[80px]</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div space="height:[custom-value]">Custom</div>
```

## Nota

> [!TIP]
> **Sokongan Skala Tailwind**
> 
> Gunakan awalan `tw-` untuk mengakses skala numerik Tailwind: `h:tw-64` (16rem), `min-h:tw-96` (24rem)
> 
> [Rujukan](https://tailwindcss.com/docs/height)
