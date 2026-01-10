# Pointer Events

Control whether an element responds to pointer events with the `visual` attribute.

## Syntax
```
visual="pointer-events:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `pointer-events:none` | `pointer-events: none` |
| `pointer-events:auto` | `pointer-events: auto` |

## Examples

```html
<!-- Disable all pointer interactions -->
<div visual="pointer-events:none">
  Can't click, hover, or select this
</div>

<!-- Re-enable pointer events on child -->
<div visual="pointer-events:none">
  <button visual="pointer-events:auto">But you can click me!</button>
</div>
```

## Use Cases

Use `pointer-events:none` to:
- Create click-through overlays
- Disable interaction during loading states
- Make decorative elements non-interactive
- Allow clicks to pass through to elements behind
