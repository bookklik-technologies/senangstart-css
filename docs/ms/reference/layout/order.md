# Order

Kawal susunan item flex/grid

## Sintaks
```
layout="order:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `first` | `order: -9999` | Pindah ke pertama |
| `last` | `order: 9999` | Pindah ke terakhir |
| `none` | `order: 0` | Susunan lalai |
| `1-12` | `order: {n}` | Susunan tertentu |

## Contoh

```html
<div layout="order:first">First item</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Susun Semula Item

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="order:1"</code> - Ubah susunan visual item flex</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="order:3" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">A (order:3)</span>
  <span layout="order:1" space="p:small" visual="bg:primary text:white rounded:small">B (order:1)</span>
  <span layout="order:2" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">C (order:2)</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="order:3" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">A (order:3)</span>
  <span layout="order:1" space="p:small" visual="bg:primary text:white rounded:small">B (order:1)</span>
  <span layout="order:2" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">C (order:2)</span>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Pertama dan Terakhir

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="order:first"</code> - Pindahkan item ke permulaan atau hujung</p>
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="order:last" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">First in DOM (order:last)</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Middle</span>
  <span layout="order:first" space="p:small" visual="bg:primary text:white rounded:small">Last in DOM (order:first)</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="order:last" space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">First in DOM (order:last)</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small">Middle</span>
  <span layout="order:first" space="p:small" visual="bg:primary text:white rounded:small">Last in DOM (order:first)</span>
</div>
```

</details>

</div>
