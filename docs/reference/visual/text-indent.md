# Text Indent

Set text indentation

## Syntax
```
visual="indent:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `text-indent: 0` | No indent |

## Examples

```html
<p visual="indent:medium">Indented paragraph</p>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="text:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
