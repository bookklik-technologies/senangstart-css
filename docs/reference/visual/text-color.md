# Text Color

Set text color

## Syntax
```
visual="text:[color]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `left` | `text-align: left` | Align left |
| `center` | `text-align: center` | Align center |
| `right` | `text-align: right` | Align right |
| `justify` | `text-align: justify` | Justify text |

## Examples

```html
<div visual="text:white">White text</div>
<div visual="text:center">Centered text</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="text:[custom-value]">Custom</div>
```
