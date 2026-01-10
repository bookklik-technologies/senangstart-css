# Overscroll

Control scroll chaining behavior

## Syntax
```
layout="overscroll:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `overscroll-behavior: auto` | Default behavior |
| `contain` | `overscroll-behavior: contain` | Contain scroll |
| `none` | `overscroll-behavior: none` | No scroll chaining |

## Examples

```html
<div layout="overscroll:contain">Contained scroll</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
