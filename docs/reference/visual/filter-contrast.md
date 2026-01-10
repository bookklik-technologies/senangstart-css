# Contrast

Adjust the contrast of elements.

## Syntax
```
visual="contrast:low | contrast:reduced | contrast:normal | contrast:high | contrast:max"
```

## Values

| Value | CSS Output |
|-------|------------|
| `contrast:low` | `filter: contrast(0.5)` |
| `contrast:reduced` | `filter: contrast(0.75)` |
| `contrast:normal` | `filter: contrast(1)` |
| `contrast:high` | `filter: contrast(1.25)` |
| `contrast:max` | `filter: contrast(1.5)` |

## Examples

```html
<img visual="contrast:low" />      <!-- 50% contrast -->
<img visual="contrast:reduced" />  <!-- 75% contrast -->
<img visual="contrast:normal" />   <!-- 100% contrast -->
<img visual="contrast:high" />     <!-- 125% contrast -->
<img visual="contrast:max" />      <!-- 150% contrast -->
```

## With States

```html
<img visual="contrast:normal hover:contrast:high" />
```
