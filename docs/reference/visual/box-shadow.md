# Box Shadow

Add box shadow

## Syntax
```
visual="shadow:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `box-shadow: var(--shadow-none)` | No shadow |
| `small` | `box-shadow: var(--shadow-small)` | Small shadow |
| `medium` | `box-shadow: var(--shadow-medium)` | Medium shadow |
| `big` | `box-shadow: var(--shadow-big)` | Large shadow |
| `giant` | `box-shadow: var(--shadow-giant)` | Giant shadow |

## Examples

```html
<div visual="shadow:medium">Card with shadow</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
