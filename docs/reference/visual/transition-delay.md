# Transition Delay

Set transition delay

## Syntax
```
visual="delay:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `instant` | `transition-delay: 75ms` | 75ms delay |
| `quick` | `transition-delay: 100ms` | 100ms delay |
| `fast` | `transition-delay: 150ms` | 150ms delay |
| `normal` | `transition-delay: 200ms` | 200ms delay |
| `slow` | `transition-delay: 300ms` | 300ms delay |

## Examples

```html
<div visual="transition:all delay:slow">Delayed transition</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transition:[custom-value]">Custom</div>
```
