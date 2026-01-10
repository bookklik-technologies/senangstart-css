# Flex

Flex shorthand property

## Syntax
```
layout="flex:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `1` | `flex: 1 1 0%` | Flex 1 |
| `auto` | `flex: 1 1 auto` | Flex auto |
| `initial` | `flex: 0 1 auto` | Initial flex |
| `none` | `flex: none` | No flex |

## Examples

```html
<div layout="flex:1">Flexible item</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div layout="flex:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
