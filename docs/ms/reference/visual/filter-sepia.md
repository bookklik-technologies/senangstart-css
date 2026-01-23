# Filter Sepia

Terapkan penapis sepia

## Sintaks
```
visual="sepia:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `filter: sepia(0%)` | Tiada sepia |
| `partial` | `filter: sepia(50%)` | 50% sepia |
| `full` | `filter: sepia(100%)` | Sepia penuh |

## Contoh

```html
<img visual="sepia:full">Vintage look</img>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Penapis Sepia

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="sepia:full"</code> - Terapkan ton sepia vintaj</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small sepia:partial">partial</div>
  <div space="p:small" visual="bg:primary text:white rounded:small sepia:full">full</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small sepia:partial">partial</div>
  <div space="p:small" visual="bg:primary text:white rounded:small sepia:full">full</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="filter:[custom-value]">Custom</div>
```
