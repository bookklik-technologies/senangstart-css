# Backdrop Blur

Blur backdrop

## Syntax
```
visual="backdrop-blur:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `backdrop-filter: blur(0)` | No blur |
| `tiny` | `backdrop-filter: blur(2px)` | Tiny blur |
| `small` | `backdrop-filter: blur(4px)` | Small blur |
| `medium` | `backdrop-filter: blur(8px)` | Medium blur |
| `big` | `backdrop-filter: blur(12px)` | Large blur |
| `giant` | `backdrop-filter: blur(24px)` | Giant blur |
| `vast` | `backdrop-filter: blur(48px)` | Vast blur |

## Examples

```html
<div visual="backdrop-blur:medium bg:[rgba(255,255,255,0.5)]">Frosted glass</div>
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
