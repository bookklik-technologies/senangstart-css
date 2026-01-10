# Box Sizing

Control how element dimensions are calculated with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `box-border` | `box-sizing: border-box` |
| `box-content` | `box-sizing: content-box` |

## Examples

```html
<!-- Padding included in width (default in preflight) -->
<div layout="box-border" space="p:medium w:[200px]">
  Padding included in 200px width
</div>

<!-- Padding adds to width -->
<div layout="box-content" space="p:medium w:[200px]">
  Total width = 200px + padding
</div>
```

## Note

The preflight styles set `box-sizing: border-box` globally, so you typically only need `box-content` to override this behavior.
