# Text Indent

Tetapkan inden teks

## Sintaks
```
visual="indent:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `0` | `text-indent: 0` | Tiada inden |

## Contoh

```html
<p visual="indent:medium">Indented paragraph</p>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Inden Teks

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="indent:medium"</code> - Inden baris pertama teks</p>
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p space="p:small" visual="bg:primary text:white rounded:small indent:0">No indent on this text paragraph.</p>
  <p space="p:small" visual="bg:success text:white rounded:small indent:medium">Medium indent on this first line of the paragraph.</p>
  <p space="p:small" visual="bg:warning text:black rounded:small indent:big">Bigger indent on this first line of the paragraph.</p>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p space="p:small" visual="bg:primary text:white rounded:small indent:0">No indent on this text paragraph.</p>
  <p space="p:small" visual="bg:success text:white rounded:small indent:medium">Medium indent on this first line of the paragraph.</p>
  <p space="p:small" visual="bg:warning text:black rounded:small indent:big">Bigger indent on this first line of the paragraph.</p>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="text:[custom-value]">Custom</div>
```
