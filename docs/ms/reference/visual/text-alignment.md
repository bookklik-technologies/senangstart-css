# Text Alignment

Tetapkan penjajaran teks

## Sintaks
```
visual="text:[alignment]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `left` | `text-align: left` | Jajar kiri |
| `center` | `text-align: center` | Jajar tengah |
| `right` | `text-align: right` | Jajar kanan |
| `justify` | `text-align: justify` | Justify |

## Contoh

```html
<p visual="text:center">Centered text</p>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Penjajaran Teks

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="text:center"</code> - Jajarkan teks dalam bekas</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div visual="text:left bg:primary text:white rounded:small" space="p:small">left</div>
  <div visual="text:center bg:primary text:white rounded:small" space="p:small">center</div>
  <div visual="text:right bg:primary text:white rounded:small" space="p:small">right</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div visual="text:left bg:primary text:white rounded:small" space="p:small">left</div>
  <div visual="text:center bg:primary text:white rounded:small" space="p:small">center</div>
  <div visual="text:right bg:primary text:white rounded:small" space="p:small">right</div>
</div>
```

</details>

</div>
