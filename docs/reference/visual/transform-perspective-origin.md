# Transform Perspective Origin

Set perspective origin point

## Syntax
```
visual="perspective-origin:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `center` | `perspective-origin: center` | Center origin |
| `top` | `perspective-origin: top` | Top origin |
| `bottom` | `perspective-origin: bottom` | Bottom origin |
| `left` | `perspective-origin: left` | Left origin |
| `right` | `perspective-origin: right` | Right origin |
| `top-left` | `perspective-origin: top left` | Top left |
| `top-right` | `perspective-origin: top right` | Top right |
| `bottom-left` | `perspective-origin: bottom left` | Bottom left |
| `bottom-right` | `perspective-origin: bottom right` | Bottom right |

## Examples

```html
<div visual="perspective-origin:top">Top origin</div>
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
