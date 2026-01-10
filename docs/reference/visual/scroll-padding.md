# Scroll Padding

Control the scroll snap padding on a container with the `visual` attribute.

## Syntax
```
visual="scroll-p:[value]"
visual="scroll-p-t:[value]"
visual="scroll-p-r:[value]"
visual="scroll-p-b:[value]"
visual="scroll-p-l:[value]"
visual="scroll-p-x:[value]"
visual="scroll-p-y:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `scroll-p:4` | `scroll-padding: var(--s-4)` |
| `scroll-p-t:8` | `scroll-padding-top: var(--s-8)` |
| `scroll-p-x:4` | `scroll-padding-left/right: var(--s-4)` |
| `scroll-p:[20px]` | `scroll-padding: 20px` |

## Examples

```html
<!-- Scroll container with padding for snapped items -->
<div visual="scroll-p:4 snap:x" layout="flex overflow:auto">
  <div visual="snap-align:start">Item 1</div>
  <div visual="snap-align:start">Item 2</div>
</div>

<!-- Account for fixed header -->
<div visual="scroll-p-t:16">
  Content snaps below the header area
</div>
```

## Use Cases

Apply `scroll-padding` to scroll containers to:
- Offset snap points from container edges
- Prevent content from snapping under sticky headers
- Add visual breathing room in carousels
