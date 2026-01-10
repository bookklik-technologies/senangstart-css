# Ketepuan Latar

Laras ketepuan latar belakang.

## Sintaks
```
visual="backdrop-saturate:none | backdrop-saturate:low | backdrop-saturate:normal | backdrop-saturate:high | backdrop-saturate:vivid"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `backdrop-saturate:none` | `backdrop-filter: saturate(0)` |
| `backdrop-saturate:low` | `backdrop-filter: saturate(0.5)` |
| `backdrop-saturate:normal` | `backdrop-filter: saturate(1)` |
| `backdrop-saturate:high` | `backdrop-filter: saturate(1.5)` |
| `backdrop-saturate:vivid` | `backdrop-filter: saturate(2)` |

## Contoh

```html
<div visual="backdrop-saturate:none">...</div>   <!-- Tiada ketepuan -->
<div visual="backdrop-saturate:vivid">...</div>  <!-- 200% ketepuan -->
```
