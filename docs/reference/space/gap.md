# Gap

Control spacing between flex and grid items with the `space` attribute.

## Syntax
```
space="g:[value]"
space="g-x:[value] | g-y:[value]"
```

## Properties

| Property | CSS Output |
|----------|------------|
| `g` | `gap` (flex/grid) |
| `g-x` | `column-gap` |
| `g-y` | `row-gap` |

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
<!-- Uniform gap -->
<div layout="flex" space="g:small">Small gap between items</div>

<!-- Different horizontal/vertical gaps -->
<div layout="grid" space="g-x:big g-y:small">Different gaps</div>

<!-- Arbitrary values -->
<div layout="grid grid-cols:3" space="g:[24px]">24px gap</div>
```

## Responsive

```html
<div layout="flex" space="g:small tab:g:medium lap:g:big">
  Growing gaps as screen size increases
</div>
```
