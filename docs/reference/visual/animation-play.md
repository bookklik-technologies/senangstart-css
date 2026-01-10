# Animation Play State

Pause or play an animation.

## Syntax
```
visual="animation-play:running | animation-play:paused"
```

## Values

| Value | CSS Output |
|-------|------------|
| `animation-play:running` | `animation-play-state: running` |
| `animation-play:paused` | `animation-play-state: paused` |

## Examples

```html
<div visual="animate:spin animation-play:running">...</div> <!-- Running -->
<div visual="animate:spin animation-play:paused">...</div>  <!-- Paused -->
```

## With States

```html
<!-- Pause on hover -->
<div visual="animate:spin hover:animation-play:paused">...</div>
```
