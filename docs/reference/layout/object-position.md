# Object Position

Position replaced element content within container

## Syntax
```
layout="object-pos:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `center` | `object-position: center` | Center position |
| `top` | `object-position: top` | Top position |
| `bottom` | `object-position: bottom` | Bottom position |
| `left` | `object-position: left` | Left position |
| `right` | `object-position: right` | Right position |
| `top-left` | `object-position: top left` | Top left |
| `top-right` | `object-position: top right` | Top right |
| `bottom-left` | `object-position: bottom left` | Bottom left |
| `bottom-right` | `object-position: bottom right` | Bottom right |

## Examples

```html
<img layout="object:cover object-pos:top">Top positioned</img>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div layout="object:[custom-value]">Custom</div>
```
