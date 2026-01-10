# Letter Spacing

Control letter spacing with the `visual` attribute.

## Syntax
```
visual="tracking:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `tracking:tighter` | `letter-spacing: -0.05em` |
| `tracking:tight` | `letter-spacing: -0.025em` |
| `tracking:normal` | `letter-spacing: 0` |
| `tracking:wide` | `letter-spacing: 0.025em` |
| `tracking:wider` | `letter-spacing: 0.05em` |
| `tracking:widest` | `letter-spacing: 0.1em` |

## Examples

```html
<h1 visual="tracking:tight">Tight heading</h1>
<span visual="tracking:widest">S P A C E D</span>
<p visual="tracking:normal">Normal tracking</p>
```

## Common Patterns

```html
<!-- Uppercase text often benefits from wider tracking -->
<span visual="uppercase tracking:wide">BUTTON TEXT</span>

<!-- Large headings often look better with tighter tracking -->
<h1 visual="text-size:vast tracking:tight">Hero Title</h1>
```
