# Font Family

Control font family with the `visual` attribute.

## Syntax
```
visual="font:sans | font:serif | font:mono"
```

## Values

| Value | CSS Output |
|-------|------------|
| `font:sans` | `font-family: ui-sans-serif, system-ui, sans-serif` |
| `font:serif` | `font-family: ui-serif, Georgia, serif` |
| `font:mono` | `font-family: ui-monospace, monospace` |

## Examples

```html
<p visual="font:sans">Sans-serif text (default)</p>
<p visual="font:serif">Serif text for articles</p>
<code visual="font:mono">Monospace for code</code>
```

## Common Patterns

```html
<!-- Code blocks -->
<pre visual="font:mono bg:light rounded:small" space="p:medium">
  const hello = "world";
</pre>

<!-- Article with serif body -->
<article visual="font:serif">
  <h1 visual="font:sans">Article Title</h1>
  <p>Serif body text for better readability...</p>
</article>
```
