# Backdrop Brightness

Adjust backdrop brightness

## Syntax
```
visual="backdrop-brightness:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `dim` | `backdrop-filter: brightness(0.5)` | 50% brightness |
| `dark` | `backdrop-filter: brightness(0.75)` | 75% brightness |
| `normal` | `backdrop-filter: brightness(1)` | Normal brightness |
| `bright` | `backdrop-filter: brightness(1.25)` | 125% brightness |
| `vivid` | `backdrop-filter: brightness(1.5)` | 150% brightness |

## Examples

```html
<div visual="backdrop-brightness:dark">Darkened backdrop</div>
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
