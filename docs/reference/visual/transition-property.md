# Transition Property

Set transition properties

## Syntax
```
visual="transition:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `transition-property: none` | No transition |
| `all` | `transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | All properties |
| `colors` | `transition-property: color, background-color, border-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Color properties |
| `opacity` | `transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Opacity only |
| `shadow` | `transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Shadow only |
| `transform` | `transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms` | Transform only |

## Examples

```html
<button visual="transition:all hover:bg:primary">Smooth hover</button>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
