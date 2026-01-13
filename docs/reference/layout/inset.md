# Inset

Control positioning offsets

## Syntax
```
layout="inset:[value]" or layout="top:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `inset` | `inset: {value}` | All sides |
| `inset-x` | `left: {value}; right: {value}` | Left and right |
| `inset-y` | `top: {value}; bottom: {value}` | Top and bottom |
| `top` | `top: {value}` | Top offset |
| `right` | `right: {value}` | Right offset |
| `bottom` | `bottom: {value}` | Bottom offset |
| `left` | `left: {value}` | Left offset |

## Examples

```html
<div layout="absolute inset:0">Full coverage</div>
<div layout="absolute top:medium left:medium">Offset</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div layout="inset:[custom-value]">Custom</div>
```
