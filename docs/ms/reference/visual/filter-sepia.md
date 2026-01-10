# Sepia

Gunakan ton sepia pada elemen.

## Sintaks
```
visual="sepia:none | sepia:partial | sepia:full | sepia"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `sepia:none` | `filter: sepia(0)` |
| `sepia:partial` | `filter: sepia(0.5)` |
| `sepia:full` | `filter: sepia(1)` |
| `sepia` | `filter: sepia(1)` |

## Contoh

```html
<img visual="sepia:none" />     <!-- Tiada sepia -->
<img visual="sepia:partial" />  <!-- 50% sepia -->
<img visual="sepia" />          <!-- Sepia penuh -->
```
