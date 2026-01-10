# Font Smoothing

Control font rendering with the `visual` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `antialiased` | `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale` |
| `subpixel-antialiased` | `-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto` |

## Examples

```html
<body visual="antialiased">Smooth fonts on macOS</body>
<span visual="subpixel-antialiased">Subpixel rendering</span>
```

## Note

`antialiased` makes fonts appear lighter and smoother on macOS/iOS. It's commonly applied to the body element.
