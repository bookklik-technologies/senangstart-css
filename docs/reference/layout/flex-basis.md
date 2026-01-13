# Flex Basis

Set initial size of flex item

## Syntax
```
layout="basis:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `flex-basis: auto` | Auto basis |
| `0` | `flex-basis: 0` | Zero basis |

## Examples

```html
<div layout="basis:[200px]">200px basis</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div layout="flex:[custom-value]">Custom</div>
```
