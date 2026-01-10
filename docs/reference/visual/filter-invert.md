# Invert

Invert the colors of elements.

## Syntax
```
visual="invert:none | invert:partial | invert:full | invert"
```

## Values

| Value | CSS Output |
|-------|------------|
| `invert:none` | `filter: invert(0)` |
| `invert:partial` | `filter: invert(0.5)` |
| `invert:full` | `filter: invert(1)` |
| `invert` | `filter: invert(1)` |

## Examples

```html
<img visual="invert:none" />     <!-- No inversion -->
<img visual="invert:partial" />  <!-- 50% inverted -->
<img visual="invert:full" />     <!-- Fully inverted -->
<img visual="invert" />          <!-- Fully inverted (default) -->
```

## With States

```html
<img visual="hover:invert" />
```
