# Align Self

Control vertical alignment of individual flex items with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `self-auto` | `align-self: auto` |
| `self-start` | `align-self: flex-start` |
| `self-end` | `align-self: flex-end` |
| `self-center` | `align-self: center` |
| `self-baseline` | `align-self: baseline` |
| `self-stretch` | `align-self: stretch` |

## Examples

```html
<div layout="flex items-start" space="h:[200px]">
  <div>Aligned to top</div>
  <div layout="self-end">This one aligned to bottom</div>
  <div layout="self-center">This one centered</div>
</div>
```
