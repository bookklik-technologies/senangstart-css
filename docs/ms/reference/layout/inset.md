# Inset

Mengawal kedudukan elemen yang diposisikan.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `inset:0` | `inset: 0` |
| `top:0` | `top: 0` |
| `right:0` | `right: 0` |
| `bottom:0` | `bottom: 0` |
| `left:0` | `left: 0` |
| `inset-x:0` | `left: 0; right: 0` |
| `inset-y:0` | `top: 0; bottom: 0` |

## Contoh

```html
<div layout="absolute inset:0">Meliputi seluruh parent</div>
<div layout="fixed bottom:0 right:0">Sudut bawah-kanan</div>
```
