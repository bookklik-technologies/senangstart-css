# Word Break

Kawal pemecahan perkataan

## Sintaks
```
visual="[break-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `break-normal` | `overflow-wrap: normal; word-break: normal` | Pemecahan normal |
| `break-words` | `overflow-wrap: break-word` | Pecah perkataan |
| `break-all` | `word-break: break-all` | Pecah semua |
| `break-keep` | `word-break: keep-all` | Kekalkan semua |

## Contoh

```html
<div visual="break-words">Long words break properly</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Pemecahan Perkataan

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="break-words"</code> - Kawal pemecahan perkataan</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">break-words</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">break-all</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">break-words</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">break-all</div>
</div>
```

</details>

</div>
