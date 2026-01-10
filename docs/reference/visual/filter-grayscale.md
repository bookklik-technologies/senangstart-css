# Filter Grayscale

Apply grayscale filter

## Syntax
```
visual="grayscale:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `filter: grayscale(0%)` | No grayscale |
| `partial` | `filter: grayscale(50%)` | 50% grayscale |
| `full` | `filter: grayscale(100%)` | Full grayscale |

## Examples

```html
<img visual="grayscale:full">Black and white</img>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
