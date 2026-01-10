# Scroll Margin

Set scroll margin for snap

## Syntax
```
visual="scroll-m:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `scroll-m` | `scroll-margin: {value}` | All sides |
| `scroll-m-t` | `scroll-margin-top: {value}` | Top margin |
| `scroll-m-r` | `scroll-margin-right: {value}` | Right margin |
| `scroll-m-b` | `scroll-margin-bottom: {value}` | Bottom margin |
| `scroll-m-l` | `scroll-margin-left: {value}` | Left margin |

## Examples

```html
<div visual="scroll-m:medium">Scroll margin</div>
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
