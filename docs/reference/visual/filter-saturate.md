# Saturate

Adjust the saturation of elements.

## Syntax
```
visual="saturate:none | saturate:low | saturate:normal | saturate:high | saturate:vivid"
```

## Values

| Value | CSS Output |
|-------|------------|
| `saturate:none` | `filter: saturate(0)` |
| `saturate:low` | `filter: saturate(0.5)` |
| `saturate:normal` | `filter: saturate(1)` |
| `saturate:high` | `filter: saturate(1.5)` |
| `saturate:vivid` | `filter: saturate(2)` |

## Examples

```html
<img visual="saturate:none" />    <!-- No saturation (grayscale) -->
<img visual="saturate:low" />     <!-- 50% saturation -->
<img visual="saturate:normal" />  <!-- 100% saturation -->
<img visual="saturate:high" />    <!-- 150% saturation -->
<img visual="saturate:vivid" />   <!-- 200% saturation -->
```

## With States

```html
<img visual="saturate:low hover:saturate:vivid" />
```
