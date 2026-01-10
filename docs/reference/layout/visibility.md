# Visibility

Control element visibility with the `layout` attribute.

## Syntax
```
layout="visible | invisible"
```

## Values

| Value | CSS Output |
|-------|------------|
| `visible` | `visibility: visible` |
| `invisible` | `visibility: hidden` |

## Examples

```html
<div layout="invisible">Hidden but takes space</div>
<div layout="visible">Visible element</div>
```

## Difference from `hidden`

- `invisible` hides the element but **preserves its space**
- `hidden` (`display: none`) removes the element from the layout entirely

```html
<!-- Takes up space, but invisible -->
<div layout="invisible">You can't see me, but I'm here</div>

<!-- Completely removed from layout -->
<div layout="hidden">Gone from layout</div>
```
