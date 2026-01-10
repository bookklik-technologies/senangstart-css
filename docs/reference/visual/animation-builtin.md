# Animation Builtin

Apply built-in animations

## Syntax
```
visual="animate:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `animation: none` | No animation |
| `spin` | `animation: spin 1s linear infinite` | Spinning |
| `ping` | `animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite` | Ping effect |
| `pulse` | `animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite` | Pulsing |
| `bounce` | `animation: bounce 1s infinite` | Bouncing |

## Examples

```html
<div visual="animate:spin">Loading...</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="animation:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
