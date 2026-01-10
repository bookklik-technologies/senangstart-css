# Resize

Control whether an element is resizable with the `visual` attribute.

## Syntax
```
visual="resize:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `resize:none` | `resize: none` |
| `resize:both` | `resize: both` |
| `resize:x` | `resize: horizontal` |
| `resize:y` | `resize: vertical` |

## Examples

```html
<!-- Resizable in both directions -->
<textarea visual="resize:both">Resize me any way</textarea>

<!-- Only horizontally resizable -->
<div visual="resize:x" layout="overflow:auto">Drag right edge</div>

<!-- Only vertically resizable -->
<textarea visual="resize:y">Drag bottom edge</textarea>

<!-- Disable resizing -->
<textarea visual="resize:none">Cannot resize</textarea>
```

## Notes

For `resize` to work, the element must have `overflow` set to something other than `visible`.
