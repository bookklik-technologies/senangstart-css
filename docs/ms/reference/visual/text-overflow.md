# Limpahan Teks

Mengawal tingkah laku limpahan teks.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` |
| `text-ellipsis` | `text-overflow: ellipsis` |
| `text-clip` | `text-overflow: clip` |

## Contoh

```html
<p visual="truncate" space="w:[200px]">
  Teks panjang yang dipotong dengan elipsis...
</p>
```
