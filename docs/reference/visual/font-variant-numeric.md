# Font Variant Numeric

Control numeric font variants

## Syntax
```
visual="[variant-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `normal-nums` | `font-variant-numeric: normal` | Normal numbers |
| `ordinal` | `font-variant-numeric: ordinal` | Ordinal markers |
| `slashed-zero` | `font-variant-numeric: slashed-zero` | Slashed zero |
| `lining-nums` | `font-variant-numeric: lining-nums` | Lining numbers |
| `oldstyle-nums` | `font-variant-numeric: oldstyle-nums` | Oldstyle numbers |
| `proportional-nums` | `font-variant-numeric: proportional-nums` | Proportional numbers |
| `tabular-nums` | `font-variant-numeric: tabular-nums` | Tabular numbers |

## Examples

```html
<span visual="tabular-nums">123,456.00</span>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
