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

## Responsif

```html
<!-- Contoh responsif -->
<div visual="mob:... tab:... lap:...">
  Kandungan responsif
</div>
```
