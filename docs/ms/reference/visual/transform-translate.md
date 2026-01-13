# Transform Translate

Alihkan kedudukan elemen

## Sintaks
```
visual="translate-x:[value]" or visual="translate-y:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `transform: translateX(0)` | Tiada alihan |
| `full` | `transform: translateX(100%)` | Lebar penuh |
| `1/2` | `transform: translateX(50%)` | Separuh lebar |

## Contoh

```html
<div visual="translate-x:full">Moved right</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Transformasi Alih

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="translate-x:full"</code> - Alihkan kedudukan elemen</p>
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <div layout="absolute" space="p:small" visual="bg:primary text:white rounded:small" style="transform: translateX(0);">0</div>
  <div layout="absolute" space="p:small" visual="bg:primary text:white rounded:small" style="transform: translateX(60px);">60px</div>
  <div layout="absolute" space="p:small" visual="bg:primary text:white rounded:small" style="transform: translateX(120px);">120px</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="relative" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 80px;">
  <div layout="absolute" space="p:small" visual="bg:primary text:white rounded:small" style="transform: translateX(0);">0</div>
  <div layout="absolute" space="p:small" visual="bg:primary text:white rounded:small" style="transform: translateX(60px);">60px</div>
  <div layout="absolute" space="p:small" visual="bg:primary text:white rounded:small" style="transform: translateX(120px);">120px</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="transform:[custom-value]">Custom</div>
```
