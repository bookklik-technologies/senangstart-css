# Background Size

Tetapkan saiz latar

## Sintaks
```
visual="bg-size:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `auto` | `background-size: auto` | Saiz asal |
| `cover` | `background-size: cover` | Tutup bekas |
| `contain` | `background-size: contain` | Kandung dalam bekas |

## Contoh

```html
<div visual="bg-size:cover">Full coverage background</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Saiz Latar

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-size:cover"</code> - Skala imej latar</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">cover</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">contain</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">cover</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">contain</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="background:[custom-value]">Custom</div>
```
