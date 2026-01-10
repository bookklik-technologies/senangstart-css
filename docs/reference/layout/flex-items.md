# Flex Item Properties

Control how flex items grow, shrink, and size with the `layout` attribute.

## Syntax
```
layout="grow | grow-0 | shrink | shrink-0"
layout="flex:[value]"
layout="basis:[value]"
```

## Grow & Shrink

| Value | CSS Output |
|-------|------------|
| `grow` | `flex-grow: 1` |
| `grow-0` | `flex-grow: 0` |
| `shrink` | `flex-shrink: 1` |
| `shrink-0` | `flex-shrink: 0` |

## Flex Shorthand

| Value | CSS Output |
|-------|------------|
| `flex:1` | `flex: 1 1 0%` |
| `flex:auto` | `flex: 1 1 auto` |
| `flex:initial` | `flex: 0 1 auto` |
| `flex:none` | `flex: none` |

## Flex Basis

| Value | CSS Output |
|-------|------------|
| `basis:small` | `flex-basis: var(--s-small)` |
| `basis:[200px]` | `flex-basis: 200px` |

## Examples

```html
<div layout="flex">
  <div layout="grow">Takes remaining space</div>
  <div layout="shrink-0">Won't shrink</div>
</div>

<div layout="flex">
  <div layout="flex:1">Equal width</div>
  <div layout="flex:1">Equal width</div>
</div>

<div layout="flex">
  <div layout="basis:[200px] shrink-0">Fixed 200px</div>
  <div layout="grow">Takes the rest</div>
</div>
```
