# Hyphens

Control hyphenation with the `visual` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `hyphens-none` | `hyphens: none` |
| `hyphens-manual` | `hyphens: manual` |
| `hyphens-auto` | `hyphens: auto` |

## Examples

```html
<p visual="hyphens-auto" lang="en">
  Automatic hyphenation for long words like extraordinarily
</p>
<p visual="hyphens-manual">Only hyphenate where &shy; is used</p>
<p visual="hyphens-none">No hyphenation allowed</p>
```

## Note

For `hyphens-auto` to work, you must set the `lang` attribute on the element or a parent.
