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

`none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`

## Contoh

```html
<div space="h:[100vh]">Full viewport height</div>
<div space="min-h:[400px]">Min height</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kawal Tinggi

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="h:[100%]"</code> - Tetapkan tinggi tetap</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 120px;">
  <div space="h:[100%] p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:[100%]</div>
  <div space="h:[80px] p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:[80px]</div>
  <div space="h:[60px] p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:[60px]</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 120px;">
  <div space="h:[100%] p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:[100%]</div>
  <div space="h:[80px] p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:[80px]</div>
  <div space="h:[60px] p:small" visual="bg:primary text:white rounded:small" layout="flex center">h:[60px]</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Tinggi Minimum

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="min-h:[80px]"</code> - Tetapkan kekangan tinggi minimum</p>
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="min-h:[80px] p:small" visual="bg:primary text:white rounded:small" layout="flex center">min-h:[80px]</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="min-h:[80px] p:small" visual="bg:primary text:white rounded:small" layout="flex center">min-h:[80px]</div>
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
