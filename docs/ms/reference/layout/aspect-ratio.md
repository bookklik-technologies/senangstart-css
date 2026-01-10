# Nisbah Aspek

Mengawal nisbah aspek elemen.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `aspect:auto` | `aspect-ratio: auto` |
| `aspect:square` | `aspect-ratio: 1 / 1` |
| `aspect:video` | `aspect-ratio: 16 / 9` |

## Contoh

```html
<div layout="aspect:video">Kontena video 16:9</div>
<img layout="aspect:square object:cover" src="foto.jpg">
```
