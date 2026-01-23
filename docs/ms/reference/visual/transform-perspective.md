# Transform Perspective

Tetapkan perspektif 3D pada bekas (terapkan pada induk elemen transformasi)

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
<div visual="perspective:normal"><div visual="rotate-y:45">3D rotated</div></div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Perspektif 3D

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="perspective:normal"</code> - Kawal persepsi kedalaman 3D - terapkan pada induk, transformasi anak</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">dramatic</span>
    <div space="p:medium" visual="perspective:dramatic">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">normal</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">far</span>
    <div space="p:medium" visual="perspective:far">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-y:45">3D</div>
    </div>
  </div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">dramatic</span>
    <div space="p:medium" visual="perspective:dramatic">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">normal</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">3D</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">far</span>
    <div space="p:medium" visual="perspective:far">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-y:45">3D</div>
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
