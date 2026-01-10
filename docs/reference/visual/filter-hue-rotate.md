# Hue Rotate

Rotate the hue of elements.

## Syntax
```
visual="hue-rotate:15 | hue-rotate:30 | hue-rotate:60 | hue-rotate:90 | hue-rotate:180"
```

## Values

| Value | CSS Output |
|-------|------------|
| `hue-rotate:15` | `filter: hue-rotate(15deg)` |
| `hue-rotate:30` | `filter: hue-rotate(30deg)` |
| `hue-rotate:60` | `filter: hue-rotate(60deg)` |
| `hue-rotate:90` | `filter: hue-rotate(90deg)` |
| `hue-rotate:180` | `filter: hue-rotate(180deg)` |

## Examples

```html
<img visual="hue-rotate:15" />   <!-- 15 degrees -->
<img visual="hue-rotate:30" />   <!-- 30 degrees -->
<img visual="hue-rotate:60" />   <!-- 60 degrees -->
<img visual="hue-rotate:90" />   <!-- 90 degrees -->
<img visual="hue-rotate:180" />  <!-- 180 degrees -->
```

## Arbitrary Values

```html
<img visual="hue-rotate:[45deg]" />
```

## With States

```html
<img visual="hover:hue-rotate:180" />
```
