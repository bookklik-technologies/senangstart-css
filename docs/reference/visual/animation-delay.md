# Animation Delay

Set animation delay

## Syntax
```
visual="animation-delay:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `instant` | `animation-delay: 75ms` | 75ms delay |
| `quick` | `animation-delay: 100ms` | 100ms delay |
| `fast` | `animation-delay: 150ms` | 150ms delay |
| `normal` | `animation-delay: 200ms` | 200ms delay |
| `slow` | `animation-delay: 300ms` | 300ms delay |

## Examples

```html
<div visual="animate:bounce animation-delay:slow">Delayed bounce</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="animation:[custom-value]">Custom</div>
```
