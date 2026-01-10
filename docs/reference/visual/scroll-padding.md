# Scroll Padding

Set scroll padding for snap

## Syntax
```
visual="scroll-p:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `scroll-p` | `scroll-padding: {value}` | All sides |
| `scroll-p-t` | `scroll-padding-top: {value}` | Top padding |
| `scroll-p-r` | `scroll-padding-right: {value}` | Right padding |
| `scroll-p-b` | `scroll-padding-bottom: {value}` | Bottom padding |
| `scroll-p-l` | `scroll-padding-left: {value}` | Left padding |

## Examples

```html
<div visual="scroll-p:big">Scroll padding</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="scroll:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
