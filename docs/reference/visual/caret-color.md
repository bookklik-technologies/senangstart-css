# Caret Color

Control the color of the text input cursor with the `visual` attribute.

## Syntax
```
visual="caret:[color]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `caret:primary` | `caret-color: var(--c-primary)` |
| `caret:blue-500` | `caret-color: var(--c-blue-500)` |
| `caret:[#ff0000]` | `caret-color: #ff0000` |
| `caret:[transparent]` | `caret-color: transparent` |

## Examples

```html
<input type="text" visual="caret:primary" placeholder="Primary caret" />
<textarea visual="caret:blue-500">Blue caret</textarea>
<input visual="caret:[transparent]" placeholder="Hidden caret" />
```

## States

```html
<input visual="caret:gray-400 focus:caret:primary" placeholder="Focus to see change" />
```
