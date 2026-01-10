# Backdrop Blur

Create frosted glass effects with blur on the backdrop.

## Syntax
```
visual="backdrop-blur:none | backdrop-blur:tiny | backdrop-blur:small | backdrop-blur:medium | backdrop-blur:big | backdrop-blur:giant | backdrop-blur:vast"
```

## Values

| Value | CSS Output |
|-------|------------|
| `backdrop-blur:none` | `backdrop-filter: blur(0)` |
| `backdrop-blur:tiny` | `backdrop-filter: blur(2px)` |
| `backdrop-blur:small` | `backdrop-filter: blur(4px)` |
| `backdrop-blur:medium` | `backdrop-filter: blur(8px)` |
| `backdrop-blur:big` | `backdrop-filter: blur(12px)` |
| `backdrop-blur:giant` | `backdrop-filter: blur(24px)` |
| `backdrop-blur:vast` | `backdrop-filter: blur(48px)` |

## Examples

```html
<div visual="backdrop-blur:none">...</div>    <!-- No blur -->
<div visual="backdrop-blur:tiny">...</div>    <!-- 2px blur -->
<div visual="backdrop-blur:small">...</div>   <!-- 4px blur -->
<div visual="backdrop-blur:medium">...</div>  <!-- 8px blur -->
<div visual="backdrop-blur:big">...</div>     <!-- 12px blur -->
<div visual="backdrop-blur:giant">...</div>   <!-- 24px blur -->
<div visual="backdrop-blur:vast">...</div>    <!-- 48px blur -->
```

## Glassmorphism Example

```html
<div layout="relative" space="h:[400px]" visual="bg-image:[url('bg.jpg')] bg-size:cover">
  <div 
    layout="absolute" 
    space="inset:4 p:big"
    visual="backdrop-blur:medium bg:[rgba(255,255,255,0.3)] rounded:big"
  >
    <h2 visual="text:white font:bold">Frosted Glass Card</h2>
    <p visual="text:white">Beautiful glassmorphism effect</p>
  </div>
</div>
```
