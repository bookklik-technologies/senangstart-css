# Transform Origin

Tetapkan titik asal transformasi

## Sintaks
```
visual="origin:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `center` | `transform-origin: center` | Asal tengah |
| `top` | `transform-origin: top` | Asal atas |
| `top-right` | `transform-origin: top right` | Atas kanan |
| `right` | `transform-origin: right` | Asal kanan |
| `bottom-right` | `transform-origin: bottom right` | Bawah kanan |
| `bottom` | `transform-origin: bottom` | Asal bawah |
| `bottom-left` | `transform-origin: bottom left` | Bawah kiri |
| `left` | `transform-origin: left` | Asal kiri |
| `top-left` | `transform-origin: top left` | Atas kiri |

## Contoh

```html
<div visual="rotate:45 origin:top-left">Rotate from corner</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Asal Transformasi

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="origin:center"</code> - Tetapkan titik pangsi untuk transformasi</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(45deg); transform-origin: center;">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(45deg); transform-origin: top-left;">top-left</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(45deg); transform-origin: center;">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(45deg); transform-origin: top-left;">top-left</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transform:[custom-value]">Custom</div>
```
