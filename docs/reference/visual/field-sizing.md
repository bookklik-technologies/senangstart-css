# Field Sizing

Control how form fields size themselves with the `visual` attribute.

## Syntax
```
visual="field-sizing:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `field-sizing:content` | `field-sizing: content` |
| `field-sizing:fixed` | `field-sizing: fixed` |

## Examples

```html
<!-- Textarea grows with content -->
<textarea visual="field-sizing:content" placeholder="Start typing..."></textarea>

<!-- Input grows with content -->
<input visual="field-sizing:content" placeholder="Dynamic width" />

<!-- Fixed size (default behavior) -->
<textarea visual="field-sizing:fixed"></textarea>
```

## Use Cases

Use `field-sizing:content` to:
- Create auto-growing textareas
- Make inputs adapt to their content width
- Build more natural-feeling forms
