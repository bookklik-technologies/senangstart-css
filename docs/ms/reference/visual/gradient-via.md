# Gradient Via

Tetapkan warna tengah gradien

## Sintaks
```
visual="via:[color]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `purple-500` | `--tw-gradient-via: var(--c-purple-500); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to)` | Melalui ungu |

## Contoh

```html
<div visual="bg-image:gradient-to-r from:blue-500 via:purple-500 to:pink-500">Three-color gradient</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Pertengahan Gradien

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="via:purple-500"</code> - Tambah hentian warna tengah pada gradien</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 via:purple-500 to:pink-500 text:white rounded:small">from:blue via:purple to:pink</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="bg-image:gradient-to-r from:blue-500 via:purple-500 to:pink-500 text:white rounded:small">from:blue via:purple to:pink</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="gradient:[custom-value]">Custom</div>
```
