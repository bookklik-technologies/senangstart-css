# Text Shadow

Add text shadow

## Syntax
```
visual="text-shadow:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `text-shadow: none` | No shadow |
| `small` | `text-shadow: 0 1px 2px rgba(0,0,0,0.1)` | Small shadow |
| `medium` | `text-shadow: 0 2px 4px rgba(0,0,0,0.1)` | Medium shadow |
| `big` | `text-shadow: 0 4px 8px rgba(0,0,0,0.1)` | Large shadow |

## Examples

```html
<h1 visual="text-shadow:medium">Shadowed heading</h1>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="text:[custom-value]">Custom</div>
```
