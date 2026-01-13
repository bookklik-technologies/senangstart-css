# Letter Spacing

Set letter spacing

## Syntax
```
visual="tracking:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `tighter` | `letter-spacing: -0.05em` | Tighter spacing |
| `tight` | `letter-spacing: -0.025em` | Tight spacing |
| `normal` | `letter-spacing: 0` | Normal spacing |
| `wide` | `letter-spacing: 0.025em` | Wide spacing |
| `wider` | `letter-spacing: 0.05em` | Wider spacing |
| `widest` | `letter-spacing: 0.1em` | Widest spacing |

## Examples

```html
<div visual="tracking:wide">Wide tracking</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="letter:[custom-value]">Custom</div>
```
