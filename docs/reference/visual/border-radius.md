# Border Radius

Set border radius

## Syntax
```
visual="rounded:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `border-radius: var(--r-none)` | No rounding |
| `small` | `border-radius: var(--r-small)` | Small radius |
| `medium` | `border-radius: var(--r-medium)` | Medium radius |
| `big` | `border-radius: var(--r-big)` | Large radius |
| `round` | `border-radius: var(--r-round)` | Fully round |

## Examples

```html
<div visual="rounded:medium">Rounded corners</div>
<div visual="rounded:round">Pill shape</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
