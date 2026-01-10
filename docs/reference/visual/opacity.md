# Opacity

Control element opacity with the `visual` attribute.

## Values

Use arbitrary values with brackets:

| Value | CSS Output |
|-------|------------|
| `opacity:[0]` | `opacity: 0` |
| `opacity:[0.5]` | `opacity: 0.5` |
| `opacity:[0.8]` | `opacity: 0.8` |
| `opacity:[1]` | `opacity: 1` |

## Examples

```html
<div visual="opacity:[0.5]">50% opacity</div>
<div visual="opacity:[0.8]">80% opacity</div>
<div visual="opacity:[0] hover:opacity:[1]">Fade in on hover</div>
```

## States

```html
<button visual="opacity:[1] disabled:opacity:[0.5]">
  Dims when disabled
</button>
```
