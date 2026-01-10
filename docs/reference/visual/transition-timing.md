# Transition Timing

Set transition timing function

## Syntax
```
visual="ease:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `linear` | `transition-timing-function: linear` | Linear timing |
| `in` | `transition-timing-function: cubic-bezier(0.4, 0, 1, 1)` | Ease in |
| `out` | `transition-timing-function: cubic-bezier(0, 0, 0.2, 1)` | Ease out |
| `in-out` | `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)` | Ease in-out |

## Examples

```html
<div visual="transition:all ease:out">Ease out effect</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transition:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
