# Object Fit

Mengawal bagaimana imej dan video sesuai dalam kontena.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `object:contain` | `object-fit: contain` |
| `object:cover` | `object-fit: cover` |
| `object:fill` | `object-fit: fill` |
| `object:none` | `object-fit: none` |

## Contoh

```html
<img layout="object:cover" space="w:[100%] h:[200px]" src="hero.jpg">
<img layout="object:contain" space="w:[100%] h:[200px]" src="logo.png">
```
