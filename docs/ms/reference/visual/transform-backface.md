# Transform Backface

Kawal keterlihatan belakang

## Sintaks
```
visual="backface:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `visible` | `backface-visibility: visible` | Belakang kelihatan |
| `hidden` | `backface-visibility: hidden` | Belakang tersembunyi |

## Contoh

```html
<div visual="backface:hidden">Hidden when rotated</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Keterlihatan Belakang

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backface:hidden"</code> - Tunjukkan atau sembunyikan bahagian belakang apabila diputar</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small backface:visible">visible</div>
  <div space="p:small" visual="bg:primary text:white rounded:small backface:hidden">hidden</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small backface:visible">visible</div>
  <div space="p:small" visual="bg:primary text:white rounded:small backface:hidden">hidden</div>
</div>
```

</details>

</div>
