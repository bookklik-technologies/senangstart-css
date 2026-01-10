# Margin

Control outer spacing with the `space` attribute.

## Properties

| Property | CSS Output |
|----------|------------|
| `m` | `margin` (all sides) |
| `m-t` | `margin-top` |
| `m-r` | `margin-right` |
| `m-b` | `margin-bottom` |
| `m-l` | `margin-left` |
| `m-x` | `margin-left` + `margin-right` |
| `m-y` | `margin-top` + `margin-bottom` |

## Scale Values

| Keyword | Value |
|---------|-------|
| `none` | 0px |
| `tiny` | 4px |
| `small` | 8px |
| `medium` | 16px |
| `big` | 32px |
| `giant` | 64px |
| `vast` | 128px |

## Examples

```html
<!-- All sides -->
<div space="m:medium">All sides margin</div>

<!-- Bottom margin -->
<div space="m-b:big">Bottom margin</div>

<!-- Center horizontally -->
<div space="m-x:auto">Centered element</div>

<!-- Arbitrary values -->
<div space="m-t:[5rem]">5rem top margin</div>
```

## Responsive

```html
<div space="m:small tab:m:medium lap:m:big">
  Progressive margin that grows with screen size
</div>
```
