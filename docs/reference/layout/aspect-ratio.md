# Aspect Ratio

Set element aspect ratio

## Syntax
```
layout="aspect:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `aspect-ratio: auto` | Natural aspect ratio |
| `square` | `aspect-ratio: 1 / 1` | 1:1 square |
| `video` | `aspect-ratio: 16 / 9` | 16:9 video |

## Examples

```html
<div layout="aspect:square">Square</div>
<div layout="aspect:[4/3]">4:3</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div layout="aspect:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div layout="mob:... tab:... lap:...">
  Responsive content
</div>
```
