# Place Content

Control both horizontal and vertical alignment of grid content with the `layout` attribute.

## Syntax
```
layout="place-content:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `place-content:start` | `place-content: start` |
| `place-content:end` | `place-content: end` |
| `place-content:center` | `place-content: center` |
| `place-content:between` | `place-content: space-between` |
| `place-content:around` | `place-content: space-around` |
| `place-content:evenly` | `place-content: space-evenly` |
| `place-content:stretch` | `place-content: stretch` |

## Examples

```html
<div layout="grid place-content:center" space="h:[400px]">
  Content centered both horizontally and vertically
</div>
```
