# Flex Direction

Control the direction of flex items with the `layout` attribute.

## Syntax
```
layout="[direction]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `row` | `flex-direction: row` |
| `col` | `flex-direction: column` |
| `row-reverse` | `flex-direction: row-reverse` |
| `col-reverse` | `flex-direction: column-reverse` |

## Examples

```html
<div layout="flex row">Horizontal (default)</div>
<div layout="flex col">Vertical stack</div>
<div layout="flex row-reverse">Right to left</div>
<div layout="flex col-reverse">Bottom to top</div>
```

## Responsive

```html
<!-- Stack on mobile, row on tablet+ -->
<div layout="flex col tab:row">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```
