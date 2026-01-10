# Background Origin

Control where the background image is positioned within the element's box.

## Syntax
```
visual="bg-origin:[value]"
```

## Values

| Property | CSS Output |
|----------|------------|
| `bg-origin:border` | `background-origin: border-box` |
| `bg-origin:padding` | `background-origin: padding-box` |
| `bg-origin:content` | `background-origin: content-box` |

## Examples

```html
<div visual="bg-image:[icon.png] bg-origin:content">Positioned within content</div>
```
