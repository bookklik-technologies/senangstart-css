# Box Sizing

Control how width and height are calculated

## Syntax
```
layout="box:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `border` | `box-sizing: border-box` | Include padding and border in size |
| `content` | `box-sizing: content-box` | Exclude padding and border |

## Examples

```html
<div layout="box:border">Border box</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
