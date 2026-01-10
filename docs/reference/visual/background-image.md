# Background Image

Control background image with the `visual` attribute.

## Syntax
```
visual="bg-image:[url]"
```

## Values

| Property | CSS Output |
|----------|------------|
| `bg-image:[image.jpg]` | `background-image: url(image.jpg)` |
| `bg-image:[/path/to/image.png]` | `background-image: url(/path/to/image.png)` |

## Examples

```html
<div visual="bg-image:[hero.jpg]">With background image</div>
<div visual="bg-image:[https://picsum.photos/400/200]">External image</div>
```
