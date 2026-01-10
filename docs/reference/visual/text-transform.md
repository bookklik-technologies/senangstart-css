# Text Transform

Control text transformation with the `visual` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `uppercase` | `text-transform: uppercase` |
| `lowercase` | `text-transform: lowercase` |
| `capitalize` | `text-transform: capitalize` |
| `normal-case` | `text-transform: none` |

## Examples

```html
<span visual="uppercase">all caps</span>
<span visual="lowercase">BECOMES lowercase</span>
<span visual="capitalize">title case each word</span>
<span visual="normal-case">Reset to Normal</span>
```

## Common Patterns

```html
<!-- Button with uppercase text -->
<button visual="uppercase tracking:wide text-size:small">
  Subscribe
</button>

<!-- Headings with capitalization -->
<h2 visual="capitalize">my article title</h2>
```
