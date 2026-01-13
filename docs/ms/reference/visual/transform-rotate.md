# Transform Rotate

Putar elemen

## Sintaks
```
visual="rotate:[degrees]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `transform: rotate(0deg)` | Tiada putaran |
| `45` | `transform: rotate(45deg)` | Putaran 45° |
| `90` | `transform: rotate(90deg)` | Putaran 90° |
| `180` | `transform: rotate(180deg)` | Putaran 180° |

## Contoh

```html
<div visual="rotate:45">Rotated 45 degrees</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Transformasi Putaran

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="rotate:45"</code> - Putar elemen mengikut darjah</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(0deg);">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(45deg);">45°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(90deg);">90°</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(0deg);">0°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(45deg);">45°</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="transform: rotate(90deg);">90°</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transform:[custom-value]">Custom</div>
```
