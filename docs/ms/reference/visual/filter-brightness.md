# Kecerahan

Laras kecerahan elemen.

## Sintaks
```
visual="brightness:dim | brightness:dark | brightness:normal | brightness:bright | brightness:vivid"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `brightness:dim` | `filter: brightness(0.5)` |
| `brightness:dark` | `filter: brightness(0.75)` |
| `brightness:normal` | `filter: brightness(1)` |
| `brightness:bright` | `filter: brightness(1.25)` |
| `brightness:vivid` | `filter: brightness(1.5)` |

## Contoh

```html
<img visual="brightness:dim" />     <!-- 50% kecerahan -->
<img visual="brightness:normal" />  <!-- 100% kecerahan -->
<img visual="brightness:vivid" />   <!-- 150% kecerahan -->
```
