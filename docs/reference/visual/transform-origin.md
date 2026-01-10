# Transform Origin

Set transform origin point

## Syntax
```
visual="origin:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `center` | `transform-origin: center` | Center origin |
| `top` | `transform-origin: top` | Top origin |
| `top-right` | `transform-origin: top right` | Top right |
| `right` | `transform-origin: right` | Right origin |
| `bottom-right` | `transform-origin: bottom right` | Bottom right |
| `bottom` | `transform-origin: bottom` | Bottom origin |
| `bottom-left` | `transform-origin: bottom left` | Bottom left |
| `left` | `transform-origin: left` | Left origin |
| `top-left` | `transform-origin: top left` | Top left |

## Examples

```html
<div visual="rotate:45 origin:top-left">Rotate from corner</div>
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
