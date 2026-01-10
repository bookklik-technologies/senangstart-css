# Background Size

Control the size of the background image.

## Syntax
```
visual="bg-size:[value]"
```

## Values

| Property | CSS Output |
|----------|------------|
| `bg-size:auto` | `background-size: auto` |
| `bg-size:cover` | `background-size: cover` |
| `bg-size:contain` | `background-size: contain` |
| `bg-size:[100px_100px]` | `background-size: 100px 100px` |

## Examples

```html
<div visual="bg-image:[hero.jpg] bg-size:cover">Cover the whole container</div>
<div visual="bg-image:[logo.png] bg-size:[200px_auto]">Custom size</div>
```
