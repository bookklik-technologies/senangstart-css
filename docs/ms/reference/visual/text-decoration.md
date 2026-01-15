# Text Decoration

Tetapkan hiasan teks

## Sintaks
```
visual="[decoration-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `underline` | `text-decoration-line: underline` | Garis bawah |
| `overline` | `text-decoration-line: overline` | Garis atas |
| `line-through` | `text-decoration-line: line-through` | Garis potong |
| `no-underline` | `text-decoration-line: none` | Tiada hiasan |

## Contoh

```html
<a visual="no-underline">No underline link</a>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Hiasan Teks

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="underline"</code> - Tambah garis pada teks</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small underline">underline</span>
  <span space="p:small" visual="bg:primary text:white rounded:small line-through">line-through</span>
  <span space="p:small" visual="bg:primary text:white rounded:small overline">overline</span>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <span space="p:small" visual="bg:primary text:white rounded:small underline">underline</span>
  <span space="p:small" visual="bg:primary text:white rounded:small line-through">line-through</span>
  <span space="p:small" visual="bg:primary text:white rounded:small overline">overline</span>
</div>
```

</details>

</div>
