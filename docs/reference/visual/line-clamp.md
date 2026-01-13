# Line Clamp

Limit text to specific lines

## Syntax
```
visual="line-clamp:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `1` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1` | Single line |
| `2` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2` | Two lines |
| `3` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3` | Three lines |
| `none` | `overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: none` | No clamp |

## Examples

```html
<p visual="line-clamp:3">Text limited to 3 lines...</p>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="line:[custom-value]">Custom</div>
```
