# Float & Clear

Control floating and clearing behavior with the `layout` attribute.

## Syntax
```
layout="float-[value]"
layout="clear-[value]"
```

## Float Values

| Value | CSS Output |
|-------|------------|
| `float-left` | `float: left` |
| `float-right` | `float: right` |
| `float-none` | `float: none` |

## Clear Values

| Value | CSS Output |
|-------|------------|
| `clear-left` | `clear: left` |
| `clear-right` | `clear: right` |
| `clear-both` | `clear: both` |

## Examples

```html
<img layout="float-left" space="m-r:medium" src="image.jpg">
<p>Text wraps around the floated image...</p>
<div layout="clear-both"></div>

<img layout="float-right" space="m-l:medium" src="image.jpg">
<p>Text wraps on the left side...</p>
```

## Note

For most modern layouts, flexbox or grid is preferred over floats. Use floats primarily for text wrapping around images.
