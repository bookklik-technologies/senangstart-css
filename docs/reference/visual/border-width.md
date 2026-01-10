# Border Width

Set border width

## Syntax
```
visual="border-w:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `tiny` | `border-width: var(--s-tiny); border-style: solid` | Tiny border |
| `small` | `border-width: var(--s-small); border-style: solid` | Small border |

## Examples

```html
<div visual="border:gray-300 border-w:small">Thin border</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="border:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
