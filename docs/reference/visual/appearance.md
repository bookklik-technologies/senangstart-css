# Appearance

Control native styling of form elements with the `visual` attribute.

## Syntax
```
visual="appearance:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `appearance:none` | `appearance: none` |
| `appearance:auto` | `appearance: auto` |

## Examples

```html
<!-- Remove default browser styling -->
<select visual="appearance:none">
  <option>Custom styled select</option>
</select>

<!-- Reset to default browser appearance -->
<input type="checkbox" visual="appearance:auto" />
```

## Use Cases

Use `appearance:none` to:
- Create custom-styled form elements
- Remove default browser styling from selects, checkboxes, radio buttons
- Build consistent cross-browser form designs
