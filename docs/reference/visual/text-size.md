# Text Size

Control font size with the `visual` attribute.

## Syntax
```
visual="text-size:[value]"
```

## Values

| Property | CSS Output |
|----------|------------|
| `text-size:tiny` | `font-size: 12px` |
| `text-size:small` | `font-size: 14px` |
| `text-size:medium` | `font-size: 16px` |
| `text-size:big` | `font-size: 20px` |
| `text-size:giant` | `font-size: 32px` |
| `text-size:vast` | `font-size: 48px` |

## Examples

```html
<span visual="text-size:small">Small text</span>
<span visual="text-size:medium">Medium text</span>
<span visual="text-size:big">Big text</span>
<h1 visual="text-size:giant">Giant heading</h1>
<h1 visual="text-size:vast">Hero heading</h1>
```

## Responsive

```html
<h1 visual="text-size:big tab:text-size:giant lap:text-size:vast">
  Responsive heading
</h1>
```
