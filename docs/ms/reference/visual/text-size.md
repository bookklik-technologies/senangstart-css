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

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
