# Isolation

Create new stacking context

## Syntax
```
layout="isolation:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `isolate` | `isolation: isolate` | Create stacking context |
| `auto` | `isolation: auto` | Auto isolation |

## Examples

```html
<div layout="isolation:isolate">Isolated</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
