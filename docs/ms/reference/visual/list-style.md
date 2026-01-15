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
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="list:disc"</code> - Kawal penanda senarai</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <ul space="p:small" visual="bg:primary text:white rounded:small list:none"><li>none</li><li>no bullets</li></ul>
  <ul space="p:small" visual="bg:success text:white rounded:small list:disc"><li>disc</li><li>bullet</li></ul>
  <ol space="p:small" visual="bg:warning text:black rounded:small list:decimal"><li>decimal</li><li>numbers</li></ol>
</div>
</div>

<details>
<summary>Lihat Kod</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <ul space="p:small" visual="bg:primary text:white rounded:small list:none"><li>none</li><li>no bullets</li></ul>
  <ul space="p:small" visual="bg:success text:white rounded:small list:disc"><li>disc</li><li>bullet</li></ul>
  <ol space="p:small" visual="bg:warning text:black rounded:small list:decimal"><li>decimal</li><li>numbers</li></ol>
</div>
```

</details>

</div>
