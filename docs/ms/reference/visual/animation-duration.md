# Tempoh Animasi

Kawal berapa lama animasi berjalan.

## Sintaks
```
visual="animation-duration:instant | animation-duration:quick | animation-duration:fast | animation-duration:normal | animation-duration:slow | animation-duration:slower | animation-duration:lazy"
```

## Nilai

| Nilai | Masa |
|-------|------|
| `animation-duration:instant` | 75ms |
| `animation-duration:quick` | 100ms |
| `animation-duration:fast` | 150ms |
| `animation-duration:normal` | 200ms |
| `animation-duration:slow` | 300ms |
| `animation-duration:slower` | 500ms |
| `animation-duration:lazy` | 700ms |

## Contoh

```html
<div visual="animate:spin animation-duration:fast">...</div>   <!-- 150ms -->
<div visual="animate:spin animation-duration:slow">...</div>   <!-- 300ms -->
```
