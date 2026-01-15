# Transform Perspective Origin

Tetapkan titik asal perspektif

## Sintaks
```
visual="perspective-origin:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `center` | `perspective-origin: center` | Asal tengah |
| `top` | `perspective-origin: top` | Asal atas |
| `bottom` | `perspective-origin: bottom` | Asal bawah |
| `left` | `perspective-origin: left` | Asal kiri |
| `right` | `perspective-origin: right` | Asal kanan |
| `top-left` | `perspective-origin: top left` | Atas kiri |
| `top-right` | `perspective-origin: top right` | Atas kanan |
| `bottom-left` | `perspective-origin: bottom left` | Bawah kiri |
| `bottom-right` | `perspective-origin: bottom right` | Bawah kanan |

## Contoh

```html
<div visual="perspective-origin:top">Top origin</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Asal Perspektif

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="perspective-origin:center"</code> - Tetapkan lokasi titik lenyap</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small perspective-origin:center">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small perspective-origin:top">top</div>
  <div space="p:small" visual="bg:primary text:white rounded:small perspective-origin:bottom-left">bottom-left</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small perspective-origin:center">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small perspective-origin:top">top</div>
  <div space="p:small" visual="bg:primary text:white rounded:small perspective-origin:bottom-left">bottom-left</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transform:[custom-value]">Custom</div>
```
