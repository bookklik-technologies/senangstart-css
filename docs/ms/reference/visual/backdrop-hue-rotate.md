# Backdrop Hue Rotate

Putar rona latar belakang

## Sintaks
```
visual="backdrop-hue-rotate:[degrees]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `backdrop-filter: hue-rotate(0deg)` | Tiada putaran |
| `90` | `backdrop-filter: hue-rotate(90deg)` | Putaran 90° |
| `180` | `backdrop-filter: hue-rotate(180deg)` | Putaran 180° |

## Contoh

```html
<div visual="backdrop-hue-rotate:90">Rotated hue backdrop</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Putaran Rona Latar Belakang

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-hue-rotate:90"</code> - Putar warna di belakang elemen</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">90°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">180°</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">90°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">180°</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
