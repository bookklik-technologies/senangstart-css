# Transform Translate Z

Alihkan elemen sepanjang paksi Z (kedalaman) dalam ruang 3D

## Sintaks
```
visual="translate-z:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `transform: translateZ(0)` | Tiada alihan Z |
| `near` | `transform: translateZ(50px)` | Alih dekat (ke hadapan) |
| `far` | `transform: translateZ(-50px)` | Alih jauh (ke belakang) |

## Contoh

```html
<div visual="perspective:normal"><div visual="translate-z:near">Closer</div></div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Alih Z (Kedalaman 3D)

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="translate-z:near"</code> - Alihkan elemen ke hadapan atau belakang dalam ruang 3D</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:far</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:primary text:white rounded:small translate-z:far">far</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:0</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:success text:white rounded:small translate-z:0">0</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:near</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:warning text:black rounded:small translate-z:near">near</div>
    </div>
  </div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:far</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:primary text:white rounded:small translate-z:far">far</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:0</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:success text:white rounded:small translate-z:0">0</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">translate-z:near</span>
    <div space="p:medium" visual="perspective:near">
      <div space="p:small" visual="bg:warning text:black rounded:small translate-z:near">near</div>
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
