# Fill

Set SVG fill color

## Syntax
```
visual="fill:[color]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `fill: none` | No fill |
| `current` | `fill: currentColor` | Current color |

## Examples

```html
<svg visual="fill:primary">...</svg>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="fill:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
