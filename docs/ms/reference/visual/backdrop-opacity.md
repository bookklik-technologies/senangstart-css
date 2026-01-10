# Backdrop Opacity

Melaraskan kelegapan penapis latar belakang.

## Sintaks
```
visual="backdrop-opacity:invisible | backdrop-opacity:faint | backdrop-opacity:half | backdrop-opacity:visible | backdrop-opacity:solid"
```

## Nilai

| Nilai | Output CSS |
|-------|------------|
| `backdrop-opacity:invisible` | `backdrop-filter: opacity(0)` |
| `backdrop-opacity:faint` | `backdrop-filter: opacity(0.25)` |
| `backdrop-opacity:half` | `backdrop-filter: opacity(0.5)` |
| `backdrop-opacity:visible` | `backdrop-filter: opacity(0.75)` |
| `backdrop-opacity:solid` | `backdrop-filter: opacity(1)` |

## Contoh

```html
<div visual="backdrop-opacity:invisible">...</div>  <!-- 0% kelegapan -->
<div visual="backdrop-opacity:faint">...</div>      <!-- 25% kelegapan -->
<div visual="backdrop-opacity:half">...</div>       <!-- 50% kelegapan -->
<div visual="backdrop-opacity:visible">...</div>    <!-- 75% kelegapan -->
<div visual="backdrop-opacity:solid">...</div>      <!-- 100% kelegapan -->
```
