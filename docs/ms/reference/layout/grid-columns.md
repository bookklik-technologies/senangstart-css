# Grid Columns

Mentakrifkan lajur grid dengan atribut `layout`.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `grid-cols:1` hingga `grid-cols:12` | `grid-template-columns: repeat(n, minmax(0, 1fr))` |
| `grid-cols:none` | `grid-template-columns: none` |
| `grid-cols:[200px_1fr_1fr]` | `grid-template-columns: 200px 1fr 1fr` |

## Contoh

```html
<div layout="grid grid-cols:3" space="g:medium">
  <div>Lajur 1</div>
  <div>Lajur 2</div>
  <div>Lajur 3</div>
</div>
```
