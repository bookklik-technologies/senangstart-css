# Stroke

Set SVG stroke color

## Syntax
```
visual="stroke:[color]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `stroke: none` | No stroke |
| `current` | `stroke: currentColor` | Current color |

## Examples

```html
<svg visual="stroke:primary stroke-w:2">...</svg>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="stroke:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
