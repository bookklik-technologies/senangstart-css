# Transform Translate

Alihkan kedudukan elemen sepanjang paksi X, Y, atau Z

## Sintaks
```
visual="translate-x:[value]" or visual="translate-y:[value]" or visual="translate-z:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `transform: translateX(0)` | Tiada alihan |
| `tiny` | `transform: translateX(var(--sp-tiny))` | Alihan kecil |
| `small` | `transform: translateX(var(--sp-small))` | Alihan kecil |
| `medium` | `transform: translateX(var(--sp-medium))` | Alihan sederhana |
| `big` | `transform: translateX(var(--sp-big))` | Alihan besar |
| `full` | `transform: translateX(100%)` | Lebar/ketinggian penuh |
| `1/2` | `transform: translateX(50%)` | Separuh lebar/ketinggian |
| `-full` | `transform: translateX(-100%)` | Negatif penuh |
| `-1/2` | `transform: translateX(-50%)` | Negatif separuh |

## Contoh

```html
<div visual="translate-x:medium">Moved right</div>
<div visual="translate-y:small">Moved down</div>
<div visual="translate-z:[50px]">Moved forward in 3D</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Transformasi Alih

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="translate-x:medium"</code> - Alihkan elemen sepanjang paksi X, Y, atau Z</p>
<div layout="flex:col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" space="g:small">
    <span visual="text:neutral-500 text-size:small">X axis:</span>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:0">0</div>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:small">small</div>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:medium">medium</div>
  </div>
  <div layout="flex" space="g:small">
    <span visual="text:neutral-500 text-size:small">Y axis:</span>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:0">0</div>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:small">small</div>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:medium">medium</div>
  </div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex:col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" space="g:small">
    <span visual="text:neutral-500 text-size:small">X axis:</span>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:0">0</div>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:small">small</div>
    <div space="p:small" visual="bg:primary text:white rounded:small translate-x:medium">medium</div>
  </div>
  <div layout="flex" space="g:small">
    <span visual="text:neutral-500 text-size:small">Y axis:</span>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:0">0</div>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:small">small</div>
    <div space="p:small" visual="bg:success text:white rounded:small translate-y:medium">medium</div>
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
