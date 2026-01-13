# Whitespace

Kawal pengendalian ruang putih

## Sintaks
```
visual="whitespace:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `normal` | `white-space: normal` | Ruang putih normal |
| `nowrap` | `white-space: nowrap` | Tiada balutan |
| `pre` | `white-space: pre` | Kekalkan ruang putih |
| `pre-line` | `white-space: pre-line` | Pra-baris |
| `pre-wrap` | `white-space: pre-wrap` | Pra-balut |
| `break-spaces` | `white-space: break-spaces` | Pecah ruang |

## Contoh

```html
<pre visual="whitespace:pre">Preserved whitespace</pre>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Ruang Putih

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="whitespace:pre"</code> - Kawal pengendalian ruang putih</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">nowrap</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">pre</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">nowrap</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">pre</div>
</div>
```

</details>

</div>
