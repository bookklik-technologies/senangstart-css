# Backdrop Opacity

Tetapkan kelegapan latar belakang

## Sintaks
```
visual="backdrop-opacity:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `backdrop-filter: opacity(0)` | Lutsinar |
| `50` | `backdrop-filter: opacity(0.5)` | 50% kelegapan |
| `100` | `backdrop-filter: opacity(1)` | Sepenuhnya legap |

## Contoh

```html
<div visual="backdrop-opacity:50">Semi-transparent backdrop</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kelegapan Latar Belakang

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-opacity:50"</code> - Kawal ketelusan latar belakang</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">50</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">100</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">0</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">50</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">100</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
