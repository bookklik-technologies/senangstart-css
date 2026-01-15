# Transform Perspective

Tetapkan perspektif 3D

## Sintaks
```
visual="perspective:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `perspective: none` | Tiada perspektif |
| `dramatic` | `perspective: 100px` | Perspektif dramatik |
| `near` | `perspective: 300px` | Perspektif dekat |
| `normal` | `perspective: 500px` | Perspektif normal |
| `midrange` | `perspective: 800px` | Perspektif pertengahan |
| `far` | `perspective: 1000px` | Perspektif jauh |
| `distant` | `perspective: 1200px` | Perspektif jauh sekali |

## Contoh

```html
<div visual="perspective:normal">3D container</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Perspektif 3D

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="perspective:normal"</code> - Kawal persepsi kedalaman 3D untuk transformasi anak</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small perspective:normal">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small perspective:near">near</div>
  <div space="p:small" visual="bg:primary text:white rounded:small perspective:far">far</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small perspective:normal">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small perspective:near">near</div>
  <div space="p:small" visual="bg:primary text:white rounded:small perspective:far">far</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transform:[custom-value]">Custom</div>
```
