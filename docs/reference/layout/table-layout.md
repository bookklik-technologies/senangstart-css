# Table Layout

Control table layout algorithm

## Syntax
```
layout="[table-layout-value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `table-auto` | `table-layout: auto` | Auto layout |
| `table-fixed` | `table-layout: fixed` | Fixed layout |

## Examples

```html
<table layout="table-fixed">Fixed width columns</table>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
