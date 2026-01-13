# Grid Row Span

Merentangi baris grid

## Sintaks
```
layout="row-span:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `1-12` | `grid-row: span {n} / span {n}` | Merentangi N baris |
| `full` | `grid-row: 1 / -1` | Merentangi semua baris |

## Contoh

```html
<div layout="row-span:2">Spans 2 rows</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Rentang Baris

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="row-span:2"</code> - Item merentangi berbilang baris</p>
<div layout="grid grid-cols:3 grid-rows:2" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="row-span:2 flex center" space="p:small" visual="bg:primary text:white rounded:small">row-span:2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">4</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="grid grid-cols:3 grid-rows:2" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span layout="row-span:2 flex center" space="p:small" visual="bg:primary text:white rounded:small">row-span:2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">1</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">2</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">3</span>
  <span space="p:small" visual="bg:neutral-300 dark:bg:neutral-700 text:neutral-800 dark:text:neutral-200 rounded:small" layout="text:center">4</span>
</div>
```

</details>

</div>
