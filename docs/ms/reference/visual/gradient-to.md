# Gradient To

Tetapkan warna akhir gradien

## Sintaks
```
visual="to:[color]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `purple-500` | `--tw-gradient-to: var(--c-purple-500)` | Akhir di ungu |
| `pink-500` | `--tw-gradient-to: var(--c-pink-500)` | Akhir di merah jambu |

## Contoh

```html
<div visual="bg-image:gradient-to-r from:blue-500 to:purple-500">Blue to purple</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Akhir Gradien

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="to:purple-500"</code> - Tetapkan warna pengakhiran gradien</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:purple-500 text:white rounded:small">to:purple-500</div>
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:pink-500 text:white rounded:small">to:pink-500</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:purple-500 text:white rounded:small">to:purple-500</div>
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 to:pink-500 text:white rounded:small">to:pink-500</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="gradient:[custom-value]">Custom</div>
```
