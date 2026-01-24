# Divide

Tambah sempadan antara elemen anak

## Sintaks
```
visual="divide:[color]" | visual="divide-{x|y}:[color]" | visual="divide-{x|y}:reverse"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `primary` | `border-color: var(--c-primary); border-style: solid` | Pemisah warna utama |
| `gray-300` | `border-color: var(--c-gray-300); border-style: solid` | Pemisah kelabu cerah |
| `danger` | `border-color: var(--c-danger); border-style: solid` | Pemisah bahaya/ralat |

## Contoh

```html
<div visual="divide:primary divide-w:thin">
<div visual="divide-y:gray-300 divide-y-w:regular">
<div visual="divide-x:danger divide-x-w:thin">
<div layout="flex flex-row-reverse" visual="divide-x:primary divide-x-w:thin divide-x:reverse">
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Warna Pemisah

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="divide:primary"</code> - Tambah pemisah antara item flex/grid</p>
<div layout="flex col" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium divide-y-w:thin divide:primary">
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 1</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 2</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 3</div>
</div>
<div layout="flex" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium divide:red-500 divide-x-w:thin">
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 1</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 2</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 3</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex col" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium divide-y-w:thin divide:primary">
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 1</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 2</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 3</div>
</div>
<div layout="flex" space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium divide:red-500 divide-x-w:thin">
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 1</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 2</div>
  <div space="p:medium" visual="bg:white dark:bg:neutral-800">Item 3</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Pemisah Arah

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="divide-y:gray-300"</code> - Pemisah pada paksi tertentu</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide-y:gray-300 divide-y-w:thin">
    <div space="p:small">Item 1</div>
    <div space="p:small">Item 2</div>
    <div space="p:small">Item 3</div>
  </div>
  <div layout="flex" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide-x:primary divide-x-w:thin">
    <div space="p:small">Item 1</div>
    <div space="p:small">Item 2</div>
    <div space="p:small">Item 3</div>
  </div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex col" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide-y:gray-300 divide-y-w:thin">
    <div space="p:small">Item 1</div>
    <div space="p:small">Item 2</div>
    <div space="p:small">Item 3</div>
  </div>
  <div layout="flex" space="p:medium" visual="bg:white dark:bg:neutral-800 rounded:small divide-x:primary divide-x-w:thin">
    <div space="p:small">Item 1</div>
    <div space="p:small">Item 2</div>
    <div space="p:small">Item 3</div>
  </div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="divide:[custom-value]">Custom</div>
```
