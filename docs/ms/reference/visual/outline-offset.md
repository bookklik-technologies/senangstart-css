# Outline Offset

Tetapkan offset garis luar (jarak antara garis luar dan elemen)

## Sintaks
```
visual="outline-offset:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `outline-offset: var(--s-none)` | Tiada offset (0px) |
| `thin` | `outline-offset: var(--s-thin)` | Offset nipis (1px) |
| `small` | `outline-offset: var(--s-small)` | Offset kecil (4px) |
| `medium` | `outline-offset: var(--s-medium)` | Offset sederhana (16px) |

## Contoh

```html
<button visual="outline:primary outline-offset:small">Offset outline</button>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Offset Garis Luar

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="outline-offset:small"</code> - Offset mewujudkan ruang antara garis luar dan elemen</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-offset:none rounded:small">none</div>
  <div space="p:medium" visual="outline:primary outline-offset:small rounded:small">small</div>
  <div space="p:medium" visual="outline:primary outline-offset:medium rounded:small">medium</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:medium" visual="outline:primary outline-offset:none rounded:small">none</div>
  <div space="p:medium" visual="outline:primary outline-offset:small rounded:small">small</div>
  <div space="p:medium" visual="outline:primary outline-offset:medium rounded:small">medium</div>
</div>
```

</details>

</div>

## Nilai Arbitrari

Sokong nilai tersuai menggunakan sintaks kurungan segi empat:

```html
<div visual="outline:[custom-value]">Custom</div>
```
