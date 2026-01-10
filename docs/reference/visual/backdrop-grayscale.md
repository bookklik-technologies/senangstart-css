# Backdrop Grayscale

Apply grayscale to backdrop

## Syntax
```
visual="backdrop-grayscale:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `backdrop-filter: grayscale(0%)` | No grayscale |
| `partial` | `backdrop-filter: grayscale(50%)` | 50% grayscale |
| `full` | `backdrop-filter: grayscale(100%)` | Full grayscale |

## Examples

```html
<div visual="backdrop-grayscale:full">Grayscale backdrop</div>
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
