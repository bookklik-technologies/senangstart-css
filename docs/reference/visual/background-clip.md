# Background Clip

Control how background color or image is clipped to the element's box.

## Syntax
```
visual="bg-clip:[value]"
```

## Values

| Property | CSS Output |
|----------|------------|
| `bg-clip:border` | `background-clip: border-box` |
| `bg-clip:padding` | `background-clip: padding-box` |
| `bg-clip:content` | `background-clip: content-box` |
| `bg-clip:text` | `background-clip: text` |

## Examples

```html
<div visual="bg:primary bg-clip:text text:transparent">Text background clip</div>
```
