# Kabur

Gunakan kesan kabur pada elemen.

## Sintaks
```
visual="blur:none | blur:tiny | blur:small | blur:medium | blur:big | blur:giant | blur:vast"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `blur:none` | `filter: blur(0)` |
| `blur:tiny` | `filter: blur(2px)` |
| `blur:small` | `filter: blur(4px)` |
| `blur:medium` | `filter: blur(8px)` |
| `blur:big` | `filter: blur(12px)` |
| `blur:giant` | `filter: blur(24px)` |
| `blur:vast` | `filter: blur(48px)` |

## Contoh

```html
<img visual="blur:none" />    <!-- Tiada kabur -->
<img visual="blur:medium" />  <!-- 8px kabur -->
<img visual="blur:giant" />   <!-- 24px kabur -->
```

## Nilai Arbitrari

```html
<img visual="blur:[20px]" />
```
