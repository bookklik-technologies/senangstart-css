# Will Change

Hint browser about upcoming changes

## Syntax
```
visual="will-change:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `will-change: auto` | Auto optimization |
| `scroll` | `will-change: scroll-position` | Scroll changes |
| `contents` | `will-change: contents` | Content changes |
| `transform` | `will-change: transform` | Transform changes |
| `opacity` | `will-change: opacity` | Opacity changes |

## Examples

```html
<div visual="will-change:transform">Optimized for animation</div>
```
