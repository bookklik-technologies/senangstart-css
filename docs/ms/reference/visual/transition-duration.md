# Tempoh Peralihan

Kawal tempoh peralihan menggunakan kata semula jadi.

## Sintaks
```
visual="duration:instant | duration:quick | duration:fast | duration:normal | duration:slow | duration:slower | duration:lazy"
```

## Nilai

| Nilai | Masa | Rasa |
|-------|------|------|
| `duration:instant` | 75ms | Hampir tidak ketara |
| `duration:quick` | 100ms | Pantas |
| `duration:fast` | 150ms | Responsif |
| `duration:normal` | 200ms | **Lalai**, seimbang |
| `duration:slow` | 300ms | Lancar, ketara |
| `duration:slower` | 500ms | Sengaja, elegan |
| `duration:lazy` | 700ms | Santai, dramatik |

## Contoh

```html
<div visual="transition duration:instant">...</div>  <!-- 75ms -->
<div visual="transition duration:normal">...</div>   <!-- 200ms -->
<div visual="transition duration:slow">...</div>     <!-- 300ms -->
```

## Nilai Arbitrari

```html
<div visual="transition duration:[2000ms]">...</div>
```
