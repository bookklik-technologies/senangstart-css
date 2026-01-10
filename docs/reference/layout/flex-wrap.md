# Flex Wrap

Control whether flex items wrap with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `wrap` | `flex-wrap: wrap` |
| `nowrap` | `flex-wrap: nowrap` |
| `wrap-reverse` | `flex-wrap: wrap-reverse` |

## Examples

```html
<div layout="flex wrap">Items wrap to new lines</div>
<div layout="flex nowrap">Items stay on one line</div>
<div layout="flex wrap-reverse">Wrap in reverse order</div>
```

## Responsive

```html
<!-- No wrap on mobile, wrap on tablet+ -->
<div layout="flex nowrap tab:wrap">
  Flexible wrapping behavior
</div>
```
