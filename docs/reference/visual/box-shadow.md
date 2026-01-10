# Box Shadow

Control box shadows with the `visual` attribute.

## Syntax
```
visual="shadow:[value]"
```

## Values

| Property | CSS Output |
|----------|------------|
| `shadow:none` | `box-shadow: none` |
| `shadow:small` | `box-shadow: 0 1px 2px rgba(0,0,0,0.05)` |
| `shadow:medium` | `box-shadow: 0 4px 6px rgba(0,0,0,0.1)` |
| `shadow:big` | `box-shadow: 0 10px 15px rgba(0,0,0,0.15)` |

## Examples

```html
<div visual="shadow:small">Subtle shadow</div>
<div visual="shadow:medium">Card shadow</div>
<div visual="shadow:big">Elevated shadow</div>
```

## Common Patterns

```html
<!-- Card with shadow -->
<div visual="bg:white rounded:medium shadow:medium" space="p:medium">
  Card content
</div>

<!-- Hover shadow effect -->
<div visual="shadow:small hover:shadow:medium">
  Elevates on hover
</div>
```
