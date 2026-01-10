# Accent Color

Control the accent color of form controls with the `visual` attribute.

## Syntax
```
visual="accent:[color]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `accent:primary` | `accent-color: var(--c-primary)` |
| `accent:blue-500` | `accent-color: var(--c-blue-500)` |
| `accent:[#ff0000]` | `accent-color: #ff0000` |

## Examples

```html
<input type="checkbox" visual="accent:primary" />
<input type="range" visual="accent:blue-500" />
<progress visual="accent:[#22c55e]" value="70" max="100"></progress>
```

## Use Cases

The `accent-color` property is useful for styling:
- Checkboxes
- Radio buttons
- Range sliders
- Progress bars
