# Transform Perspective Origin

Tetapkan lokasi titik lenyap perspektif

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
<div visual="perspective:normal perspective-origin:top">Top origin</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Asal Perspektif

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="perspective-origin:center"</code> - Tetapkan lokasi titik lenyap untuk transformasi 3D</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">left</span>
    <div space="p:medium" visual="perspective:normal perspective-origin:left">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:30">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">center</span>
    <div space="p:medium" visual="perspective:normal perspective-origin:center">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:30">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">right</span>
    <div space="p:medium" visual="perspective:normal perspective-origin:right">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-y:30">3D</div>
    </div>
  </div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">left</span>
    <div space="p:medium" visual="perspective:normal perspective-origin:left">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:30">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">center</span>
    <div space="p:medium" visual="perspective:normal perspective-origin:center">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:30">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">right</span>
    <div space="p:medium" visual="perspective:normal perspective-origin:right">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-y:30">3D</div>
    </div>
  </div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transform:[custom-value]">Custom</div>
```
