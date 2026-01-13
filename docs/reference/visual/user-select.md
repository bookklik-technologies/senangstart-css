# User Select

Control text selection

## Syntax
```
visual="select:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `user-select: none` | Prevent selection |
| `text` | `user-select: text` | Allow text selection |
| `all` | `user-select: all` | Select all on click |
| `auto` | `user-select: auto` | Default behavior |

## Examples

```html
<div visual="select:none">Cannot select this text</div>
```
