# Transition Duration

Set transition duration

## Syntax
```
visual="duration:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `instant` | `transition-duration: 75ms` | 75ms |
| `quick` | `transition-duration: 100ms` | 100ms |
| `fast` | `transition-duration: 150ms` | 150ms |
| `normal` | `transition-duration: 200ms` | 200ms |
| `slow` | `transition-duration: 300ms` | 300ms |
| `slower` | `transition-duration: 500ms` | 500ms |
| `lazy` | `transition-duration: 700ms` | 700ms |

## Examples

```html
<div visual="transition:all duration:slow">Slow transition</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transition:[custom-value]">Custom</div>
```
