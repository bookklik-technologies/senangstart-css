# Overscroll

Kawal kelakuan rantaian skrol

## Sintaks
```
layout="overscroll:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `overscroll-behavior: auto` | Kelakuan lalai |
| `contain` | `overscroll-behavior: contain` | Kandung skrol |
| `none` | `overscroll-behavior: none` | Tiada rantaian skrol |

## Contoh

```html
<div layout="overscroll:contain">Contained scroll</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Kandungan Overscroll

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="overscroll:contain"</code> - Halang skrol daripada mempengaruhi induk</p>
<div layout="overscroll:contain overflow:auto" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px;">
  <p visual="text:neutral-800 dark:text:neutral-200">Scroll here won't chain to parent. Content continues for demo purposes to show scrolling behavior.</p>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="overscroll:contain overflow:auto" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px;">
  <p visual="text:neutral-800 dark:text:neutral-200">Scroll here won't chain to parent. Content continues for demo purposes to show scrolling behavior.</p>
</div>
```

</details>

</div>
