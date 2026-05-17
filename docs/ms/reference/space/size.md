# Size

Tetapkan lebar dan tinggi serentak

## Sintaks
```
space="size:[value]"
```

## Nilai

| Properti | CSS Output | Huraian |
|--------|------------|-------------|
| `size` | `width: var(--s-{value}) height: var(--s-{value})` | Saiz (lebar + tinggi) |

## Nilai Skala

`none`, `thin`, `regular`, `thick`, `tiny`, `tiny-2x`, `small`, `small-2x`, `small-3x`, `small-4x`, `medium`, `medium-2x`, `medium-3x`, `medium-4x`, `large`, `large-2x`, `large-3x`, `large-4x`, `big`, `big-2x`, `big-3x`, `big-4x`, `giant`, `giant-2x`, `giant-3x`, `giant-4x`, `vast`, `vast-2x`, `vast-3x`, `vast-4x`, `vast-5x`, `vast-6x`, `vast-7x`, `vast-8x`, `vast-9x`, `vast-10x`, `min`, `max`, `fit`, `full`, `half`, `third`, `third-2x`, `quarter`, `quarter-3x`, `1/1`, `1/2`, `1/3`, `2/3`, `1/4`, `2/4`, `3/4`

## Contoh

```html
<div space="size:medium">Square element</div>
<div space="size:full">Full width and height</div>
<div space="size:[200px]">Custom square size</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Singkatan Saiz

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>space="size:medium"</code> - Tetapkan lebar dan tinggi dengan satu properti</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="size:medium p:small" visual="bg:primary text:white rounded:small" layout="flex items:center justify:center">size:medium</div>
  <div space="size:big p:small" visual="bg:pink-600 text:white rounded:small" layout="flex items:center justify:center">size:big</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="size:medium p:small" visual="bg:primary text:white rounded:small" layout="flex items:center justify:center">size:medium</div>
  <div space="size:big p:small" visual="bg:pink-600 text:white rounded:small" layout="flex items:center justify:center">size:big</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div space="size:[custom-value]">Custom</div>
```

## Nota

> [!TIP]
> **Saiz vs Lebar/Tinggi**
> 
> Guna `size` apabila anda perlukan lebar dan tinggi yang sama. Untuk nilai berasingan, guna `w` dan `h` secara individu.
