# Transform Translate

Translate element position

## Syntax
```
visual="translate-x:[value]" or visual="translate-y:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `transform: translateX(0)` | No translation |
| `full` | `transform: translateX(100%)` | Full width |
| `1/2` | `transform: translateX(50%)` | Half width |

## Examples

```html
<div visual="translate-x:full">Moved right</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transform:[custom-value]">Custom</div>
```
