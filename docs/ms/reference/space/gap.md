# Gap

Mengawal jarak antara item flex dan grid dengan atribut `space`.

## Sifat

| Property | Output CSS |
|----------|------------|
| `g` | `gap` (flex/grid) |
| `g-x` | `column-gap` |
| `g-y` | `row-gap` |

## Contoh

```html
<!-- Gap seragam -->
<div layout="flex" space="g:small">Gap kecil antara item</div>

<!-- Gap berbeza untuk horizontal/menegak -->
<div layout="grid" space="g-x:big g-y:small">Gap berbeza</div>
```
