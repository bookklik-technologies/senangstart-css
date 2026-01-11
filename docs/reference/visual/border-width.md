# Border Width

Set border width using spacing scale tokens or arbitrary values.

## Syntax
```
visual="border-w:[value]"
visual="border-t-w:[value]"   <!-- top only -->
visual="border-b-w:[value]"   <!-- bottom only -->
visual="border-l-w:[value]"   <!-- left only -->
visual="border-r-w:[value]"   <!-- right only -->
visual="border-x-w:[value]"   <!-- left + right -->
visual="border-y-w:[value]"   <!-- top + bottom -->
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `tiny` | `border-width: var(--s-tiny)` | 4px border |
| `small` | `border-width: var(--s-small)` | 8px border |
| `medium` | `border-width: var(--s-medium)` | 16px border |

## Examples

### All Sides
```html
<div visual="border:gray-300 border-w:small">Thin border on all sides</div>
<div visual="border:primary border-w:[2px]">2px border on all sides</div>
```

### Directional
```html
<!-- Top border only -->
<div visual="border-t:primary border-t-w:[2px]">Top border</div>

<!-- Bottom border only -->
<div visual="border-b:warning border-b-w:small">Bottom border</div>

<!-- Left and right borders -->
<div visual="border-x:secondary border-x-w:[1px]">Horizontal borders</div>

<!-- Top and bottom borders -->
<div visual="border-y:success border-y-w:tiny">Vertical borders</div>
```

## Arbitrary Values

Supports custom CSS width values:

```html
<div visual="border:primary border-w:[3px]">3px border</div>
<div visual="border-t:danger border-t-w:[0.5rem]">0.5rem top border</div>
```

## Responsive

```html
<div visual="border:gray-300 border-w:[1px] tab:border-w:[2px] lap:border-w:small">
  Responsive border width
</div>
```

::: tip
When using directional width utilities, pair them with matching color utilities (e.g., `border-t-w` with `border-t`).
:::
