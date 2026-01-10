# Isolation

Control stacking context creation with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `isolate` | `isolation: isolate` |
| `isolate-auto` | `isolation: auto` |

## Examples

```html
<div layout="isolate">
  <div layout="relative z:high">Isolated z-index context</div>
</div>
```

## Use Cases

- Creating new stacking contexts
- Preventing z-index conflicts between components
- Isolating blend modes or filters
