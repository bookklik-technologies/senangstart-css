# Kecerahan Latar

Laras kecerahan latar belakang.

## Sintaks
```
visual="backdrop-brightness:dim | backdrop-brightness:dark | backdrop-brightness:normal | backdrop-brightness:bright | backdrop-brightness:vivid"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `backdrop-brightness:dim` | `backdrop-filter: brightness(0.5)` |
| `backdrop-brightness:dark` | `backdrop-filter: brightness(0.75)` |
| `backdrop-brightness:normal` | `backdrop-filter: brightness(1)` |
| `backdrop-brightness:bright` | `backdrop-filter: brightness(1.25)` |
| `backdrop-brightness:vivid` | `backdrop-filter: brightness(1.5)` |

## Contoh

```html
<div visual="backdrop-brightness:dim">...</div>     <!-- 50% kecerahan -->
<div visual="backdrop-brightness:vivid">...</div>   <!-- 150% kecerahan -->
```
