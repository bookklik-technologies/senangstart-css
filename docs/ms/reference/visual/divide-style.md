# Divide Style

Tetapkan gaya pemisah

## Sintaks
```
visual="divide-style:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `solid` | `border-style: solid` | Pemisah pepejal |
| `dashed` | `border-style: dashed` | Pemisah putus-putus |
| `dotted` | `border-style: dotted` | Pemisah bertitik |
| `double` | `border-style: double` | Pemisah berganda |
| `none` | `border-style: none` | Tiada pemisah |

## Contoh

```html
<div visual="divide:gray-300 divide-style:dashed">
<div visual="divide:gray-300 divide-style:dotted">
<div visual="divide:gray-300 divide-style:double">
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Gaya Pemisah

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="divide-style:dashed"</code> - Pilihan gaya pemisah berbeza</p>
<div layout="flex col" space="p:medium g:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:solid border:neutral-500 border-w:regular border-style:solid">
    <div space="p:medium">solid</div>
    <div space="p:medium">solid</div>
    <div space="p:medium">solid</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:dashed border:neutral-500 border-w:regular border-style:dashed">
    <div space="p:medium">dashed</div>
    <div space="p:medium">dashed</div>
    <div space="p:medium">dashed</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:dotted border:neutral-500 border-w:regular border-style:dotted">
    <div space="p:medium">dotted</div>
    <div space="p:medium">dotted</div>
    <div space="p:medium">dotted</div>
  </div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex col" space="p:medium g:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:solid border:neutral-500 border-w:regular border-style:solid">
    <div space="p:medium">solid</div>
    <div space="p:medium">solid</div>
    <div space="p:medium">solid</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:dashed border:neutral-500 border-w:regular border-style:dashed">
    <div space="p:medium">dashed</div>
    <div space="p:medium">dashed</div>
    <div space="p:medium">dashed</div>
  </div>
  <div layout="flex" visual="bg:white dark:bg:neutral-800 rounded:small divide:neutral-500 divide-x-w:regular divide-style:dotted border:neutral-500 border-w:regular border-style:dotted">
    <div space="p:medium">dotted</div>
    <div space="p:medium">dotted</div>
    <div space="p:medium">dotted</div>
  </div>
</div>
```

</details>

</div>
