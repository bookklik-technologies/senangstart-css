# Kabur Latar

Cipta kesan kaca beku dengan kabur pada latar belakang.

## Sintaks
```
visual="backdrop-blur:none | backdrop-blur:tiny | backdrop-blur:small | backdrop-blur:medium | backdrop-blur:big | backdrop-blur:giant | backdrop-blur:vast"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `backdrop-blur:none` | `backdrop-filter: blur(0)` |
| `backdrop-blur:tiny` | `backdrop-filter: blur(2px)` |
| `backdrop-blur:small` | `backdrop-filter: blur(4px)` |
| `backdrop-blur:medium` | `backdrop-filter: blur(8px)` |
| `backdrop-blur:big` | `backdrop-filter: blur(12px)` |
| `backdrop-blur:giant` | `backdrop-filter: blur(24px)` |
| `backdrop-blur:vast` | `backdrop-filter: blur(48px)` |

## Contoh

```html
<div visual="backdrop-blur:medium">...</div>  <!-- 8px kabur -->
<div visual="backdrop-blur:giant">...</div>   <!-- 24px kabur -->
```
