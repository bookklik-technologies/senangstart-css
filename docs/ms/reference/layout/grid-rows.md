# Grid Rows

Mentakrifkan baris grid dengan atribut `layout`.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `grid-rows:1` hingga `grid-rows:6` | `grid-template-rows: repeat(n, minmax(0, 1fr))` |
| `grid-rows:none` | `grid-template-rows: none` |

## Contoh

```html
<div layout="grid grid-rows:3" space="h:[300px]">
  <header>Header</header>
  <main>Kandungan</main>
  <footer>Footer</footer>
</div>
```
