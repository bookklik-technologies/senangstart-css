# Transform Origin

Set the origin point for transformations.

## Syntax
```
visual="origin:center | origin:top | origin:bottom-right | origin:[33%_75%]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `origin:center` | `transform-origin: center` |
| `origin:top` | `transform-origin: top` |
| `origin:top-right` | `transform-origin: top right` |
| `origin:right` | `transform-origin: right` |
| `origin:bottom-right` | `transform-origin: bottom right` |
| `origin:bottom` | `transform-origin: bottom` |
| `origin:bottom-left` | `transform-origin: bottom left` |
| `origin:left` | `transform-origin: left` |
| `origin:top-left` | `transform-origin: top left` |

## Examples

```html
<img visual="origin:center" />       <!-- center (default) -->
<img visual="origin:top" />          <!-- top -->
<img visual="origin:top-right" />    <!-- top right -->
<img visual="origin:right" />        <!-- right -->
<img visual="origin:bottom-right" /> <!-- bottom right -->
<img visual="origin:bottom" />       <!-- bottom -->
<img visual="origin:bottom-left" />  <!-- bottom left -->
<img visual="origin:left" />         <!-- left -->
<img visual="origin:top-left" />     <!-- top left -->
```

## Arbitrary Values

```html
<img visual="origin:[33%_75%]" />
```

## With Rotation

```html
<!-- Rotate from top-left corner -->
<div visual="origin:top-left rotate:45">...</div>
```
