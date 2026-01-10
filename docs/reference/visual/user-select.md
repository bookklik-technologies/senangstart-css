# User Select

Control whether text can be selected with the `visual` attribute.

## Syntax
```
visual="select:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `select:none` | `user-select: none` |
| `select:text` | `user-select: text` |
| `select:all` | `user-select: all` |
| `select:auto` | `user-select: auto` |

## Examples

```html
<!-- Prevent text selection -->
<button visual="select:none">Can't select this text</button>

<!-- Select all text on click -->
<code visual="select:all">npm install senangstart-css</code>

<!-- Allow text selection (default) -->
<p visual="select:text">Selectable paragraph</p>
```

## Use Cases

- `select:none` - Buttons, UI elements, drag handles
- `select:all` - Code snippets, copy-to-clipboard content
- `select:text` - Re-enable selection on child elements
