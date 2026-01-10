# Background Position

Set background position

## Syntax
```
visual="bg-pos:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `center` | `background-position: center` | Center position |
| `top` | `background-position: top` | Top position |
| `bottom` | `background-position: bottom` | Bottom position |
| `left` | `background-position: left` | Left position |
| `right` | `background-position: right` | Right position |
| `top-left` | `background-position: top left` | Top left |
| `top-right` | `background-position: top right` | Top right |
| `bottom-left` | `background-position: bottom left` | Bottom left |
| `bottom-right` | `background-position: bottom right` | Bottom right |

## Examples

```html
<div visual="bg-pos:center">Centered background</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="background:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
