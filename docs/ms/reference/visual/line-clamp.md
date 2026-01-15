# Line Clamp

Hadkan teks kepada bilangan baris tertentu

## Sintaks
```
visual="line-clamp:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `1` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1` | Satu baris |
| `2` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2` | Dua baris |
| `3` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3` | Tiga baris |
| `none` | `overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: none` | Tiada had |

## Contoh

```html
<p visual="line-clamp:3">Text limited to 3 lines...</p>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Had Baris

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="line-clamp:2"</code> - Hadkan teks kepada baris tertentu</p>
<div layout="flex:col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[200px]" visual="bg:primary text:white rounded:small line-clamp:1">This is a very long text that will be clamped to just one single line with ellipsis.</div>
  <div space="p:small w:[200px]" visual="bg:success text:white rounded:small line-clamp:2">This is a very long text that will be clamped to exactly two lines with ellipsis at the end.</div>
  <div space="p:small w:[200px]" visual="bg:warning text:black rounded:small line-clamp:3">This is a very long text that will be clamped to exactly three lines with ellipsis shown at the end of the third line.</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex:col" space="g:small p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small w:[200px]" visual="bg:primary text:white rounded:small line-clamp:1">This is a very long text that will be clamped to just one single line with ellipsis.</div>
  <div space="p:small w:[200px]" visual="bg:success text:white rounded:small line-clamp:2">This is a very long text that will be clamped to exactly two lines with ellipsis at the end.</div>
  <div space="p:small w:[200px]" visual="bg:warning text:black rounded:small line-clamp:3">This is a very long text that will be clamped to exactly three lines with ellipsis shown at the end of the third line.</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="line:[custom-value]">Custom</div>
```
