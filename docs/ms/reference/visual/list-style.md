# List Style

Tetapkan gaya senarai

## Sintaks
```
visual="list:[value]"
```

## Nilai

| Nilai | CSS Output | Huraian |
|-------|------------|-------------|
| `none` | `list-style-type: none` | Tiada bullet |
| `disc` | `list-style-type: disc` | Bullet bulat |
| `decimal` | `list-style-type: decimal` | Nombor |
| `square` | `list-style-type: square` | Bullet segi empat |
| `inside` | `list-style-position: inside` | Kedudukan dalam |
| `outside` | `list-style-position: outside` | Kedudukan luar |

## Contoh

```html
<ul visual="list:none">No bullets</ul>
```

## Pratonton

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Gaya Senarai

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="list:none"</code> - Kawal penanda senarai</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">disc</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">decimal</div>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">disc</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">decimal</div>
</div>
```

</details>

</div>
