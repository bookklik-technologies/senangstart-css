# Text Overflow

Kendalikan limpahan teks

## Sintaks
```
visual="[overflow-value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` | Potong dengan elipsis |
| `text-ellipsis` | `text-overflow: ellipsis` | Limpahan elipsis |
| `text-clip` | `text-overflow: clip` | Limpahan potong |

## Contoh

```html
<div visual="truncate">Very long text that gets truncated...</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Limpahan Teks

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="truncate"</code> - Kendalikan teks yang melimpah</p>
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">This is truncated text...</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div space="p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">This is truncated text...</div>
</div>
```

</details>

</div>
