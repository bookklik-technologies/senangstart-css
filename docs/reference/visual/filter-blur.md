# Blur

Apply blur effects to elements.

## Syntax
```
visual="blur:none | blur:tiny | blur:small | blur:medium | blur:big | blur:giant | blur:vast"
```

## Values

| Value | CSS Output |
|-------|------------|
| `blur:none` | `filter: blur(0)` |
| `blur:tiny` | `filter: blur(2px)` |
| `blur:small` | `filter: blur(4px)` |
| `blur:medium` | `filter: blur(8px)` |
| `blur:big` | `filter: blur(12px)` |
| `blur:giant` | `filter: blur(24px)` |
| `blur:vast` | `filter: blur(48px)` |

## Examples

```html
<img visual="blur:none" />    <!-- No blur -->
<img visual="blur:tiny" />    <!-- 2px blur -->
<img visual="blur:small" />   <!-- 4px blur -->
<img visual="blur:medium" />  <!-- 8px blur -->
<img visual="blur:big" />     <!-- 12px blur -->
<img visual="blur:giant" />   <!-- 24px blur -->
<img visual="blur:vast" />    <!-- 48px blur -->
```

## Arbitrary Values

```html
<img visual="blur:[20px]" />
```

## With States

```html
<img visual="blur:medium hover:blur:none" />
```
