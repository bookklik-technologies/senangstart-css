# Outline Style

Tetapkan gaya garis luar

## Sintaks
```
visual="outline-style:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `solid` | `outline-style: solid` | Garis luar pepejal |
| `dashed` | `outline-style: dashed` | Garis luar putus-putus |
| `dotted` | `outline-style: dotted` | Garis luar bertitik |
| `double` | `outline-style: double` | Garis luar berganda |
| `none` | `outline-style: none` | Tiada garis luar |

## Contoh

```html
<button visual="outline:primary outline-style:dashed">Dashed outline</button>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Gaya Garis Luar

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="outline-style:dashed"</code> - Pilihan gaya garis luar berbeza</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:solid rounded:small">solid</div>
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:dashed rounded:small">dashed</div>
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:dotted rounded:small">dotted</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:solid rounded:small">solid</div>
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:dashed rounded:small">dashed</div>
  <div space="p:medium" visual="outline:primary outline-w:regular outline-style:dotted rounded:small">dotted</div>
</div>
```

</details>

</div>
