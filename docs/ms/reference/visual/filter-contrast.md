# Kontras

Laras kontras elemen.

## Sintaks
```
visual="contrast:low | contrast:reduced | contrast:normal | contrast:high | contrast:max"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `contrast:low` | `filter: contrast(0.5)` |
| `contrast:reduced` | `filter: contrast(0.75)` |
| `contrast:normal` | `filter: contrast(1)` |
| `contrast:high` | `filter: contrast(1.25)` |
| `contrast:max` | `filter: contrast(1.5)` |

## Contoh

```html
<img visual="contrast:low" />     <!-- 50% kontras -->
<img visual="contrast:normal" />  <!-- 100% kontras -->
<img visual="contrast:max" />     <!-- 150% kontras -->
```
