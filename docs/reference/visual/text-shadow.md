# Text Shadow

Control text shadows with the `visual` attribute.

## Syntax
```
visual="text-shadow:[value]"
```

## Preset Values

| Property | CSS Output |
|----------|------------|
| `text-shadow:none` | `text-shadow: none` |
| `text-shadow:small` | `text-shadow: 0 1px 2px rgba(0,0,0,0.1)` |
| `text-shadow:medium` | `text-shadow: 0 2px 4px rgba(0,0,0,0.15)` |
| `text-shadow:big` | `text-shadow: 0 4px 8px rgba(0,0,0,0.2)` |

## Custom Values

Use the `[value]` syntax for custom shadows:

| Property | CSS Output |
|----------|------------|
| `text-shadow:[2px_2px_4px_rgba(0,0,0,0.3)]` | `text-shadow: 2px 2px 4px rgba(0,0,0,0.3)` |
| `text-shadow:[1px_1px_2px_#000]` | `text-shadow: 1px 1px 2px #000` |

> **Note**: Use `_` (underscore) instead of spaces in custom values.

## Examples

```html
<h1 visual="text-shadow:small">Heading with small shadow</h1>

<h2 visual="text-shadow:medium">Heading with medium shadow</h2>

<h3 visual="text-shadow:big">Heading with big shadow</h3>

<p visual="text-shadow:[2px_2px_4px_rgba(0,0,0,0.5)]">
  Text with custom shadow
</p>

<div visual="text:white text-shadow:[2px_2px_8px_rgba(0,0,0,0.8)]">
  White text with dark shadow
</div>
```

## Examples with States

```html
<button visual="text-shadow:none hover:text-shadow:small">
  Shadow appears on hover
</button>

<h1 visual="text-shadow:medium dark:text-shadow:big">
  Different shadow in dark mode
</h1>
```

## Usage Tips

- Use `text-shadow:small` for text that needs slight depth
- Use `text-shadow:medium` for headings and key elements
- Use `text-shadow:big` for dramatic effects
- Combine with text colors for better results
