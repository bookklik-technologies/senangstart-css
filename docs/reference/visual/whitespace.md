# Whitespace

Control whitespace handling

## Syntax
```
visual="whitespace:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `normal` | `white-space: normal` | Normal whitespace |
| `nowrap` | `white-space: nowrap` | No wrap |
| `pre` | `white-space: pre` | Preserve whitespace |
| `pre-line` | `white-space: pre-line` | Pre-line |
| `pre-wrap` | `white-space: pre-wrap` | Pre-wrap |
| `break-spaces` | `white-space: break-spaces` | Break spaces |

## Examples

```html
<pre visual="whitespace:pre">Preserved whitespace</pre>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
