# Flex Basis

Tetapkan saiz awal item flex

## Sintaks
```
layout="basis:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `flex-basis: auto` | Asas automatik |
| `0` | `flex-basis: 0` | Asas sifar |

## Contoh

```html
<div layout="basis:[200px]">200px basis</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Asas Tetap

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="basis:[100px]"</code> - Item dengan saiz asas berbeza</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="basis:[100px] text:center" space="p:small" visual="bg:primary text:white rounded:small">100px</span>
  <span layout="basis:[150px] text:center" space="p:small" visual="bg:primary text:white rounded:small">150px</span>
  <span layout="basis:auto" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">auto</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="basis:[100px] text:center" space="p:small" visual="bg:primary text:white rounded:small">100px</span>
  <span layout="basis:[150px] text:center" space="p:small" visual="bg:primary text:white rounded:small">150px</span>
  <span layout="basis:auto" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">auto</span>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div layout="flex:[custom-value]">Custom</div>
```
