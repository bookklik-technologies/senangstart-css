# Scroll Snap Stop

Control whether scroll snapping stops at each snap point with the `visual` attribute.

## Syntax
```
visual="snap-stop:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `snap-stop:normal` | `scroll-snap-stop: normal` |
| `snap-stop:always` | `scroll-snap-stop: always` |

## Examples

```html
<!-- Always stop at each item (no skipping) -->
<div visual="snap:x" layout="flex overflow-x:auto">
  <div visual="snap-align:start snap-stop:always">Must stop here</div>
  <div visual="snap-align:start snap-stop:always">Must stop here too</div>
  <div visual="snap-align:start snap-stop:always">And here</div>
</div>

<!-- Normal behavior (can skip items with fast scroll) -->
<div visual="snap:x" layout="flex overflow-x:auto">
  <div visual="snap-align:start snap-stop:normal">May be skipped</div>
</div>
```

## Use Cases

Use `snap-stop:always` for:
- Step-by-step wizards where each step must be viewed
- Important content that shouldn't be skipped
- Paginated content like slideshows
