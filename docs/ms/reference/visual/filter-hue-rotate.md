# Filter Hue Rotate

Putar warna rona

## Sintaks
```
visual="hue-rotate:[degrees]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `filter: hue-rotate(0deg)` | Tiada putaran |
| `90` | `filter: hue-rotate(90deg)` | Putaran 90° |
| `180` | `filter: hue-rotate(180deg)` | Putaran 180° |

## Contoh

```html
<img visual="hue-rotate:90">Shifted hue</img>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Penapis Putaran Rona

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="hue-rotate:90"</code> - Putar rona warna</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: hue-rotate(90deg);">90°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: hue-rotate(180deg);">180°</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: hue-rotate(90deg);">90°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: hue-rotate(180deg);">180°</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```
