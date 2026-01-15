# Transform Skew

Condongkan elemen

## Sintaks
```
visual="skew-x:[degrees]" or visual="skew-y:[degrees]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `transform: skewX(0deg)` | Tiada condong |
| `3` | `transform: skewX(3deg)` | Condong 3° |
| `6` | `transform: skewX(6deg)` | Condong 6° |
| `12` | `transform: skewX(12deg)` | Condong 12° |

## Contoh

```html
<div visual="skew-x:6">Skewed element</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Transformasi Condong

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="skew-x:6"</code> - Condongkan elemen sepanjang paksi</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:0">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:6">6°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:12">12°</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:0">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:6">6°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small skew-x:12">12°</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transform:[custom-value]">Custom</div>
```
