# Text Size

Tetapkan saiz fon

## Sintaks
```
visual="text-size:[value]"
```

## Contoh

```html
<div visual="text-size:big">Large text</div>
<div visual="text-size:[24px]">24px text</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Saiz Fon

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="text-size:big"</code> - Skala saiz teks dari kecil hingga gergasi</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="text-size:tiny">tiny</span>
  <span visual="text-size:small">small</span>
  <span visual="text-size:medium">medium</span>
  <span visual="text-size:big">big</span>
  <span visual="text-size:giant">giant</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span visual="text-size:tiny">tiny</span>
  <span visual="text-size:small">small</span>
  <span visual="text-size:medium">medium</span>
  <span visual="text-size:big">big</span>
  <span visual="text-size:giant">giant</span>
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
