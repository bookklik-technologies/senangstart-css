# Kedudukan

Mengawal kaedah kedudukan dengan atribut `layout`.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `static` | `position: static` |
| `relative` | `position: relative` |
| `absolute` | `position: absolute` |
| `fixed` | `position: fixed` |
| `sticky` | `position: sticky` |

## Contoh

```html
<nav layout="fixed z:top inset-x:0 top:0">Navbar tetap</nav>
<div layout="sticky top:0">Lekat semasa skrol</div>
```
