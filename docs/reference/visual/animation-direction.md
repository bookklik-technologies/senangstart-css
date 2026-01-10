# Animation Direction

Control the direction of the animation.

## Syntax
```
visual="animation-direction:normal | animation-direction:reverse | animation-direction:alternate | animation-direction:alternate-reverse"
```

## Values

| Value | CSS Output |
|-------|------------|
| `animation-direction:normal` | `animation-direction: normal` |
| `animation-direction:reverse` | `animation-direction: reverse` |
| `animation-direction:alternate` | `animation-direction: alternate` |
| `animation-direction:alternate-reverse` | `animation-direction: alternate-reverse` |

## Examples

```html
<div visual="animate:spin animation-direction:normal">...</div>            <!-- Normal -->
<div visual="animate:spin animation-direction:reverse">...</div>           <!-- Reverse -->
<div visual="animate:spin animation-direction:alternate">...</div>         <!-- Alternate -->
<div visual="animate:spin animation-direction:alternate-reverse">...</div> <!-- Alternate Reverse -->
```
