# Background Attachment

Set background attachment behavior

## Syntax
```
visual="bg-attachment:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `fixed` | `background-attachment: fixed` | Fixed background |
| `local` | `background-attachment: local` | Local scroll |
| `scroll` | `background-attachment: scroll` | Scroll with page |

## Examples

```html
<div visual="bg-attachment:fixed">Parallax effect</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
