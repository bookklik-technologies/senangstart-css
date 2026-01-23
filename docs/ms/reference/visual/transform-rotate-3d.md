# Transform Rotate 3d

Putar elemen dalam ruang 3D sepanjang paksi X, Y, atau Z

## Sintaks
```
visual="rotate-x:[degrees]" or visual="rotate-y:[degrees]" or visual="rotate-z:[degrees]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `transform: rotateX(0deg)` | Tiada putaran |
| `45` | `transform: rotateX(45deg)` | Putaran 45° |
| `90` | `transform: rotateX(90deg)` | Putaran 90° |
| `180` | `transform: rotateX(180deg)` | Putaran 180° |

## Contoh

```html
<div visual="perspective:normal"><div visual="rotate-x:45">Tilted forward</div></div>
<div visual="perspective:normal"><div visual="rotate-y:45">Turned sideways</div></div>
<div visual="rotate-z:45">Spun flat</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Putaran 3D

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="rotate-y:45"</code> - Putar elemen sepanjang paksi X, Y, atau Z dalam ruang 3D</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-x:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-x:45">X</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-y:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">Y</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-z:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-z:45">Z</div>
    </div>
  </div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-x:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:primary text:white rounded:small rotate-x:45">X</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-y:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:success text:white rounded:small rotate-y:45">Y</div>
    </div>
  </div>
  <div layout="flex col" space="g:tiny">
    <span visual="text:neutral-500 text-size:tiny">rotate-z:45</span>
    <div space="p:medium" visual="perspective:normal">
      <div space="p:small" visual="bg:warning text:black rounded:small rotate-z:45">Z</div>
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
