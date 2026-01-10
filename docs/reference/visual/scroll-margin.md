# Scroll Margin

Control the scroll snap margin with the `visual` attribute.

## Syntax
```
visual="scroll-m:[value]"
visual="scroll-m-t:[value]"
visual="scroll-m-r:[value]"
visual="scroll-m-b:[value]"
visual="scroll-m-l:[value]"
visual="scroll-m-x:[value]"
visual="scroll-m-y:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `scroll-m:4` | `scroll-margin: var(--s-4)` |
| `scroll-m-t:8` | `scroll-margin-top: var(--s-8)` |
| `scroll-m-x:4` | `scroll-margin-left/right: var(--s-4)` |
| `scroll-m:[20px]` | `scroll-margin: 20px` |

## Examples

```html
<!-- Offset scroll snap position for fixed header -->
<section visual="scroll-m-t:16" id="section1">
  Snaps 4rem below viewport top
</section>

<!-- All sides -->
<div visual="scroll-m:4">Even margin all around</div>
```

## Use Cases

Use `scroll-margin` to:
- Account for fixed headers when scrolling to anchors
- Add breathing room at scroll snap points
- Prevent content from being hidden under sticky elements
