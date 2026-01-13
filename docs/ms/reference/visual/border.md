# Border

Tetapkan warna sempadan untuk semua sisi atau sisi tertentu

## Sintaks
```
visual="border:[color]" | visual="border-{t|b|l|r|x|y}:[color]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `primary` | `border-color: var(--c-primary); border-style: solid` | Sempadan warna utama |
| `gray-300` | `border-color: var(--c-gray-300); border-style: solid` | Sempadan kelabu cerah |
| `danger` | `border-color: var(--c-danger); border-style: solid` | Sempadan bahaya/ralat |

## Contoh

```html
<div visual="border:primary border-w:thin">Primary border</div>
<div visual="border-t:primary border-t-w:regular">Top only</div>
<div visual="border-b:gray-300 border-b-w:thin">Bottom only</div>
<div visual="border-x:primary border-x-w:regular">Left & right</div>
<div visual="border-y:gray-300 border-y-w:thin">Top & bottom</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Warna Sempadan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="border:primary"</code> - Terapkan sempadan dengan warna pada semua sisi</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:primary border-w:regular rounded:small">primary</div>
  <div space="p:medium" visual="border:danger border-w:regular rounded:small">danger</div>
  <div space="p:medium" visual="border:neutral-400 border-w:regular rounded:small">neutral</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:primary border-w:regular rounded:small">primary</div>
  <div space="p:medium" visual="border:danger border-w:regular rounded:small">danger</div>
  <div space="p:medium" visual="border:neutral-400 border-w:regular rounded:small">neutral</div>
</div>
```

</details>

</div>

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Sempadan Arah

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="border-t:primary"</code> - Terapkan sempadan pada sisi tertentu</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border-t:primary border-t-w:regular bg:white dark:bg:neutral-800 rounded:small">top</div>
  <div space="p:medium" visual="border-b:primary border-b-w:regular bg:white dark:bg:neutral-800 rounded:small">bottom</div>
  <div space="p:medium" visual="border-l:primary border-l-w:regular bg:white dark:bg:neutral-800 rounded:small">left</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border-t:primary border-t-w:regular bg:white dark:bg:neutral-800 rounded:small">top</div>
  <div space="p:medium" visual="border-b:primary border-b-w:regular bg:white dark:bg:neutral-800 rounded:small">bottom</div>
  <div space="p:medium" visual="border-l:primary border-l-w:regular bg:white dark:bg:neutral-800 rounded:small">left</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="border:[custom-value]">Custom</div>
```
