# Border Style

Tetapkan gaya sempadan

## Sintaks
```
visual="border-style:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `solid` | `border-style: solid` | Sempadan pepejal |
| `dashed` | `border-style: dashed` | Sempadan putus-putus |
| `dotted` | `border-style: dotted` | Sempadan bertitik |
| `double` | `border-style: double` | Sempadan berganda |
| `none` | `border-style: none` | Tiada sempadan |

## Contoh

```html
<div visual="border:gray-300 border-style:dashed">Dashed border</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Gaya Sempadan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="border-style:dashed"</code> - Pilihan gaya sempadan berbeza</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:solid rounded:small bg:white dark:bg:neutral-800">solid</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:dashed rounded:small bg:white dark:bg:neutral-800">dashed</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:dotted rounded:small bg:white dark:bg:neutral-800">dotted</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:solid rounded:small bg:white dark:bg:neutral-800">solid</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:dashed rounded:small bg:white dark:bg:neutral-800">dashed</div>
  <div space="p:medium" visual="border:neutral-500 border-w:regular border-style:dotted rounded:small bg:white dark:bg:neutral-800">dotted</div>
</div>
```

</details>

</div>
