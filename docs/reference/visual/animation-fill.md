# Animation Fill

Set animation fill mode

## Syntax
```
visual="animation-fill:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `animation-fill-mode: none` | No fill |
| `forwards` | `animation-fill-mode: forwards` | Keep end state |
| `backwards` | `animation-fill-mode: backwards` | Apply start state |
| `both` | `animation-fill-mode: both` | Both directions |

## Examples

```html
<div visual="animate:bounce animation-fill:forwards">Stays at end</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
