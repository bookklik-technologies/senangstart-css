# Arah Animasi

Kawal arah animasi.

## Sintaks
```
visual="animation-direction:normal | animation-direction:reverse | animation-direction:alternate | animation-direction:alternate-reverse"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `animation-direction:normal` | `animation-direction: normal` |
| `animation-direction:reverse` | `animation-direction: reverse` |
| `animation-direction:alternate` | `animation-direction: alternate` |
| `animation-direction:alternate-reverse` | `animation-direction: alternate-reverse` |

## Contoh

```html
<div visual="animate:spin animation-direction:normal">...</div>    <!-- Normal -->
<div visual="animate:spin animation-direction:reverse">...</div>   <!-- Terbalik -->
<div visual="animate:spin animation-direction:alternate">...</div> <!-- Berselang -->
```
