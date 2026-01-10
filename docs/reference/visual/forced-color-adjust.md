# Forced Color Adjust

Control forced colors mode behavior

## Syntax
```
visual="forced-color:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `forced-color-adjust: auto` | Auto adjust |
| `none` | `forced-color-adjust: none` | No adjustment |

## Examples

```html
<div visual="forced-color:none">Preserve colors in high contrast</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
