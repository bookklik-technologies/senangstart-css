# Line Height

Set line height

## Syntax
```
visual="leading:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `line-height: 1` | No extra height |
| `tight` | `line-height: 1.25` | Tight leading |
| `snug` | `line-height: 1.375` | Snug leading |
| `normal` | `line-height: 1.5` | Normal leading |
| `relaxed` | `line-height: 1.625` | Relaxed leading |
| `loose` | `line-height: 2` | Loose leading |

## Examples

```html
<div visual="leading:relaxed">Relaxed line height</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="line:[custom-value]">Custom</div>
```
