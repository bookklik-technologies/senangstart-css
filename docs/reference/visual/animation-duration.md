# Animation Duration

Set animation duration

## Syntax
```
visual="animation-duration:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `instant` | `animation-duration: 75ms` | 75ms |
| `quick` | `animation-duration: 100ms` | 100ms |
| `fast` | `animation-duration: 150ms` | 150ms |
| `normal` | `animation-duration: 200ms` | 200ms |
| `slow` | `animation-duration: 300ms` | 300ms |
| `slower` | `animation-duration: 500ms` | 500ms |
| `lazy` | `animation-duration: 700ms` | 700ms |

## Examples

```html
<div visual="animate:spin animation-duration:slow">Slow spin</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="animation:[custom-value]">Custom</div>
```
