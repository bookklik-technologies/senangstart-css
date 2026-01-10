# Transform Perspective

Set 3D perspective

## Syntax
```
visual="perspective:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `perspective: none` | No perspective |
| `dramatic` | `perspective: 100px` | Dramatic perspective |
| `near` | `perspective: 300px` | Near perspective |
| `normal` | `perspective: 500px` | Normal perspective |
| `midrange` | `perspective: 800px` | Midrange perspective |
| `far` | `perspective: 1000px` | Far perspective |
| `distant` | `perspective: 1200px` | Distant perspective |

## Examples

```html
<div visual="perspective:normal">3D container</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transform:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
