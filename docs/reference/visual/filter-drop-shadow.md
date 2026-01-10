# Filter Drop Shadow

Add drop shadow

## Syntax
```
visual="drop-shadow:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `filter: drop-shadow(none)` | No shadow |
| `tiny` | `filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05))` | Tiny shadow |
| `small` | `filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1))` | Small shadow |
| `medium` | `filter: drop-shadow(0 4px 3px rgba(0,0,0,0.07))` | Medium shadow |
| `big` | `filter: drop-shadow(0 10px 8px rgba(0,0,0,0.04))` | Large shadow |
| `giant` | `filter: drop-shadow(0 20px 13px rgba(0,0,0,0.03))` | Giant shadow |

## Examples

```html
<img visual="drop-shadow:medium">Shadow on image</img>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
