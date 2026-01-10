# Space Reference

The `space` attribute controls sizing and spacing.

## Syntax

```
[breakpoint]:[property]:[scale]
```

**Breakpoints:** `mob:`, `tab:`, `lap:`, `desk:`

**Scale values:** `none`, `tiny`, `small`, `medium`, `big`, `giant`, `vast`

## Padding

| Property | CSS Output |
|----------|------------|
| `p` | `padding` (all sides) |
| `p-t` | `padding-top` |
| `p-r` | `padding-right` |
| `p-b` | `padding-bottom` |
| `p-l` | `padding-left` |
| `p-x` | `padding-left` + `padding-right` |
| `p-y` | `padding-top` + `padding-bottom` |

```html
<div space="p:medium">All sides</div>
<div space="p-x:big p-y:small">Horizontal/vertical</div>
<div space="p-t:tiny p-b:giant">Top and bottom</div>
```

## Margin

| Property | CSS Output |
|----------|------------|
| `m` | `margin` (all sides) |
| `m-t` | `margin-top` |
| `m-r` | `margin-right` |
| `m-b` | `margin-bottom` |
| `m-l` | `margin-left` |
| `m-x` | `margin-left` + `margin-right` |
| `m-y` | `margin-top` + `margin-bottom` |

```html
<div space="m:medium">All sides</div>
<div space="m-b:big">Bottom margin</div>
<div space="m-x:auto">Center horizontally</div>
```

## Gap

| Property | CSS Output |
|----------|------------|
| `g` | `gap` (flex/grid) |
| `g-x` | `column-gap` |
| `g-y` | `row-gap` |

```html
<div layout="flex" space="g:small">Small gap</div>
<div layout="grid" space="g-x:big g-y:small">Different gaps</div>
```

## Sizing

| Property | CSS Output |
|----------|------------|
| `w` | `width` |
| `h` | `height` |
| `min-w` | `min-width` |
| `max-w` | `max-width` |
| `min-h` | `min-height` |
| `max-h` | `max-height` |

```html
<div space="w:[100%] h:[400px]">Explicit size</div>
<div space="max-w:[1200px]">Max width container</div>
<div space="min-h:[100vh]">Full viewport height</div>
```

## Arbitrary Values (Escape Hatch)

Use brackets `[value]` for specific values:

```html
<div space="w:[350px]">350 pixels</div>
<div space="h:[50vh]">50% viewport height</div>
<div space="p:[20px_40px]">20px vertical, 40px horizontal</div>
<div space="m-t:[5rem]">5rem top margin</div>
```

## Responsive Examples

```html
<!-- Progressive padding -->
<section space="p:small tab:p:medium lap:p:big desk:p:giant">
  Grows with screen size
</section>

<!-- Responsive width -->
<div space="w:[100%] tab:w:[50%] lap:w:[33%]">
  Full → half → third
</div>

<!-- Responsive gap -->
<div layout="flex" space="g:small tab:g:medium lap:g:big">
  Growing gaps
</div>
```

## Scale Reference

| Keyword | Default Value |
|---------|---------------|
| `none` | 0px |
| `tiny` | 4px |
| `small` | 8px |
| `medium` | 16px |
| `big` | 32px |
| `giant` | 64px |
| `vast` | 128px |
