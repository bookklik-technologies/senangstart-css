# Line Height

Control line height with the `visual` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `leading:none` | `line-height: 1` |
| `leading:tight` | `line-height: 1.25` |
| `leading:snug` | `line-height: 1.375` |
| `leading:normal` | `line-height: 1.5` |
| `leading:relaxed` | `line-height: 1.625` |
| `leading:loose` | `line-height: 2` |

## Examples

```html
<p visual="leading:relaxed">Comfortable reading with relaxed line height</p>
<h1 visual="leading:tight">Tight heading</h1>
<p visual="leading:loose">Double-spaced text</p>
```

## Common Patterns

```html
<!-- Headings with tight leading -->
<h1 visual="text-size:giant leading:tight">Large Headline</h1>

<!-- Body text with relaxed leading -->
<article visual="leading:relaxed">
  Long form content that's easy to read...
</article>
```
