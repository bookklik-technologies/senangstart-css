# Background Origin

Tetapkan asal kedudukan latar

## Sintaks
```
visual="bg-origin:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `border` | `background-origin: border-box` | Asal di sempadan |
| `padding` | `background-origin: padding-box` | Asal di padding |
| `content` | `background-origin: content-box` | Asal di kandungan |

## Contoh

```html
<div visual="bg-origin:content">Content origin</div>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Asal Latar

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-origin:content"</code> - Tetapkan asal kedudukan latar</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">border</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">padding</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">border</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">padding</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">content</div>
</div>
```

</details>

</div>
