# Border Radius

Control border radius with the `visual` attribute.

## Values

| Property | CSS Output |
|----------|------------|
| `rounded:none` | `border-radius: 0` |
| `rounded:small` | `border-radius: 4px` |
| `rounded:medium` | `border-radius: 8px` |
| `rounded:big` | `border-radius: 16px` |
| `rounded:round` | `border-radius: 9999px` |

## Examples

```html
<div visual="rounded:small">Subtle rounding</div>
<div visual="rounded:medium">Medium rounding</div>
<div visual="rounded:big">Large rounding</div>
<button visual="rounded:round">Pill button</button>
```

## Common Patterns

```html
<!-- Card with rounded corners -->
<div visual="bg:white rounded:medium shadow:medium" space="p:medium">
  Card content
</div>

<!-- Avatar with full rounding -->
<img visual="rounded:round" space="w:[48px] h:[48px]" src="avatar.jpg">
```
