# Isolation

Mengawal penciptaan konteks susun.

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `isolate` | `isolation: isolate` |
| `isolate-auto` | `isolation: auto` |

## Contoh

```html
<div layout="isolate">
  <div layout="relative z:high">Konteks z-index terpencil</div>
</div>
```
