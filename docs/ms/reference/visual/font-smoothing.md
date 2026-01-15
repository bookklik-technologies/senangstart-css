# Font Smoothing

Kawal penghalusan fon

## Sintaks
```
visual="[smoothing-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `antialiased` | `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale` | Antialias |
| `subpixel-antialiased` | `-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto` | Subpixel antialias |

## Contoh

```html
<body visual="antialiased">Smooth fonts</body>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Penghalusan Fon

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="antialiased"</code> - Kawal persembahan teks</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small antialiased">antialiased</div>
  <div space="p:small" visual="bg:success text:white rounded:small subpixel-antialiased">subpixel</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small antialiased">antialiased</div>
  <div space="p:small" visual="bg:success text:white rounded:small subpixel-antialiased">subpixel</div>
</div>
```

</details>

</div>
