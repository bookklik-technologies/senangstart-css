# Ring Color

Set ring color

## Syntax
```
visual="ring-color:[color]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `primary` | `--ring-color: var(--c-primary)` | Primary ring color |
| `blue-500` | `--ring-color: var(--c-blue-500)` | Blue ring color |

## Examples

```html
<button visual="ring:small ring-color:primary">Colored ring</button>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="ring:[custom-value]">Custom</div>
```
