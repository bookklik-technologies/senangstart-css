# Background Attachment

Tetapkan kelakuan lampiran latar

## Sintaks
```
visual="bg-attachment:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `fixed` | `background-attachment: fixed` | Latar tetap |
| `local` | `background-attachment: local` | Skrol tempatan |
| `scroll` | `background-attachment: scroll` | Skrol dengan halaman |

## Contoh

```html
<div visual="bg-attachment:fixed">Parallax effect</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Lampiran Latar

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-attachment:fixed"</code> - Kawal cara latar skrol</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">fixed</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">fixed</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll</div>
</div>
```

</details>

</div>
