# Backdrop Invert

Invert backdrop colors

## Syntax
```
visual="backdrop-invert:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `backdrop-filter: invert(0%)` | No inversion |
| `partial` | `backdrop-filter: invert(50%)` | 50% inversion |
| `full` | `backdrop-filter: invert(100%)` | Full inversion |

## Examples

```html
<div visual="backdrop-invert:full">Inverted backdrop</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
