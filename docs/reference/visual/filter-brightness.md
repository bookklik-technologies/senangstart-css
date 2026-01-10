# Brightness

Adjust the brightness of elements.

## Syntax
```
visual="brightness:dim | brightness:dark | brightness:normal | brightness:bright | brightness:vivid"
```

## Values

| Value | CSS Output |
|-------|------------|
| `brightness:dim` | `filter: brightness(0.5)` |
| `brightness:dark` | `filter: brightness(0.75)` |
| `brightness:normal` | `filter: brightness(1)` |
| `brightness:bright` | `filter: brightness(1.25)` |
| `brightness:vivid` | `filter: brightness(1.5)` |

## Examples

```html
<img visual="brightness:dim" />     <!-- 50% brightness -->
<img visual="brightness:dark" />    <!-- 75% brightness -->
<img visual="brightness:normal" />  <!-- 100% brightness -->
<img visual="brightness:bright" />  <!-- 125% brightness -->
<img visual="brightness:vivid" />   <!-- 150% brightness -->
```

## With States

```html
<img visual="brightness:dark hover:brightness:normal" />
```
