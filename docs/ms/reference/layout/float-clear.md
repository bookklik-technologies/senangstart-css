# Float Clear

Kawal pengapungan dan pembersihan elemen

## Sintaks
```
layout="float:[value]" or layout="clear:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `left` | `float: left` | Apung kiri |
| `right` | `float: right` | Apung kanan |
| `none` | `float: none` | Tiada pengapungan |

## Contoh

```html
<img layout="float:left">Float left</img>
<div layout="clear:both">Clear floats</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Apung Kiri

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="float:left"</code> - Elemen mengapung ke kiri kandungan</p>
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="float:left" space="p:small m-r:small m-b:small" visual="bg:primary text:white rounded:small">Float</div>
  <p visual="text:neutral-800 dark:text:neutral-200">Text wraps around the floated element naturally.</p>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="float:left" space="p:small m-r:small m-b:small" visual="bg:primary text:white rounded:small">Float</div>
  <p visual="text:neutral-800 dark:text:neutral-200">Text wraps around the floated element naturally.</p>
</div>
```

</details>

</div>
