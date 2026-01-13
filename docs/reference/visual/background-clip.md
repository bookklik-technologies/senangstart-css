# Background Clip

Set background clipping area

## Syntax
```
visual="bg-clip:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `border` | `background-clip: border-box` | Clip to border |
| `padding` | `background-clip: padding-box` | Clip to padding |
| `content` | `background-clip: content-box` | Clip to content |
| `text` | `background-clip: text; -webkit-background-clip: text` | Clip to text |

## Examples

```html
<div visual="bg-clip:text text:transparent bg:gradient">Gradient text</div>
```
