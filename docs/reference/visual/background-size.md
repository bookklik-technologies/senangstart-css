# Background Size

Set background size

## Syntax
```
visual="bg-size:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `background-size: auto` | Original size |
| `cover` | `background-size: cover` | Cover container |
| `contain` | `background-size: contain` | Contain in container |

## Examples

```html
<div visual="bg-size:cover">Full coverage background</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="background:[custom-value]">Custom</div>
```
