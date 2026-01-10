# Object Fit

Control how media content fits its container

## Syntax
```
layout="object:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `contain` | `object-fit: contain` | Scale to fit, preserve ratio |
| `cover` | `object-fit: cover` | Cover container, may crop |
| `fill` | `object-fit: fill` | Stretch to fill |
| `none` | `object-fit: none` | No scaling |
| `scale-down` | `object-fit: scale-down` | Smaller of none or contain |

## Examples

```html
<img layout="object:cover">Cover image</img>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
