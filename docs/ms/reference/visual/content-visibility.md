# Content Visibility

Optimumkan rendering dengan melangkau kandungan luar skrin

## Sintaks
```
visual="content-visibility:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `visible` | `content-visibility: visible` | Render semua kandungan |
| `auto` | `content-visibility: auto` | Langkau bila luar skrin |
| `hidden` | `content-visibility: hidden` | Jangan render luar skrin |

## Contoh

```html
<section visual="content-visibility:auto">Large list</section>
<div visual="content-visibility:hidden">Hidden until needed</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Ketampakan Kandungan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="content-visibility:auto"</code> - Pengoptimuman prestasi untuk kandungan luar skrin</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">visible</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">hidden</div>
 </div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
   <div space="p:small" visual="bg:primary text:white rounded:small">visible</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
   <div space="p:small" visual="bg:primary text:white rounded:small">hidden</div>
 </div>
```

</details>

</div>
