# Padding

Control inner spacing with the `space` attribute.

## Syntax
```
space="p:[value]"
space="p-t:[value] | p-r:[value] | p-b:[value] | p-l:[value]"
space="p-x:[value] | p-y:[value]"
```

## Properties

| Property | CSS Output |
|----------|------------|
| `p` | `padding` (all sides) |
| `p-t` | `padding-top` |
| `p-r` | `padding-right` |
| `p-b` | `padding-bottom` |
| `p-l` | `padding-left` |
| `p-x` | `padding-left` + `padding-right` |
| `p-y` | `padding-top` + `padding-bottom` |

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
<div space="p:medium">All sides padding</div>

<!-- Horizontal and vertical -->
<div space="p-x:big p-y:small">Horizontal/vertical</div>

<!-- Individual sides -->
<div space="p-t:tiny p-b:giant">Top and bottom</div>

<!-- Arbitrary values -->
<div space="p:[20px_40px]">20px vertical, 40px horizontal</div>
```

## Responsive

```html
<section space="p:small tab:p:medium lap:p:big desk:p:giant">
  Progressive padding that grows with screen size
</section>
```
