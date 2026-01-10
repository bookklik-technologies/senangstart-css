# Font Smoothing

Control font smoothing

## Syntax
```
visual="[smoothing-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `antialiased` | `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale` | Antialiased |
| `subpixel-antialiased` | `-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto` | Subpixel antialiased |

## Examples

```html
<body visual="antialiased">Smooth fonts</body>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
