# Transition Duration

Mengawal tempoh transisi menggunakan perkataan semula jadi.

## Sintaks
```
visual="duration:instant | duration:quick | duration:fast | duration:normal | duration:slow | duration:slower | duration:lazy"
```

## Nilai

| Nilai | Masa | Rasa |
|-------|------|------|
| `duration:instant` | 75ms | Hampir tidak dapat dikesan |
| `duration:quick` | 100ms | Pantas |
| `duration:fast` | 150ms | Responsif |
| `duration:normal` | 200ms | **Lalai**, seimbang |
| `duration:slow` | 300ms | Lancar, ketara |
| `duration:slower` | 500ms | Bertimbang rasa, elegan |
| `duration:lazy` | 700ms | Santai, dramatik |

## Contoh

```html
<div visual="transition duration:instant">...</div>  <!-- 75ms - Hampir serta-merta -->
<div visual="transition duration:quick">...</div>    <!-- 100ms - Snap pantas -->
<div visual="transition duration:fast">...</div>     <!-- 150ms - Respon pantas -->
<div visual="transition duration:normal">...</div>   <!-- 200ms - Rasa standard -->
<div visual="transition duration:slow">...</div>     <!-- 300ms - Ketara -->
<div visual="transition duration:slower">...</div>   <!-- 500ms - Bertimbang rasa -->
<div visual="transition duration:lazy">...</div>     <!-- 700ms - Santai -->
```

## Nilai Sewenang-Wenang

```html
<div visual="transition duration:[2000ms]">...</div>
<div visual="transition duration:[0.5s]">...</div>
```
