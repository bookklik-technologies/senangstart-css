# Flex

Properti pintasan flex

## Sintaks
```
layout="flex:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `1` | `flex: 1 1 0%` | Flex 1 |
| `auto` | `flex: 1 1 auto` | Flex auto |
| `initial` | `flex: 0 1 auto` | Flex awal |
| `none` | `flex: none` | Tiada flex |

## Contoh

```html
<div layout="flex:1">Flexible item</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Flex 1

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="flex:1"</code> - Pengagihan ruang yang sama antara item</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="flex:1 text:center" space="p:small" visual="bg:primary text:white rounded:small">flex:1</span>
  <span layout="flex:1 text:center" space="p:small" visual="bg:primary text:white rounded:small">flex:1</span>
  <span layout="flex:1 text:center" space="p:small" visual="bg:primary text:white rounded:small">flex:1</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="flex:1 text:center" space="p:small" visual="bg:primary text:white rounded:small">flex:1</span>
  <span layout="flex:1 text:center" space="p:small" visual="bg:primary text:white rounded:small">flex:1</span>
  <span layout="flex:1 text:center" space="p:small" visual="bg:primary text:white rounded:small">flex:1</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Flex Auto vs Tiada

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="flex:auto"</code> - Perbandingan kelakuan flex berbeza</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="flex:auto" space="p:small" visual="bg:primary text:white rounded:small">auto</span>
  <span layout="flex:none" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">none</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="flex:auto" space="p:small" visual="bg:primary text:white rounded:small">auto</span>
  <span layout="flex:none" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">none</span>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div layout="flex:[custom-value]">Custom</div>
```
