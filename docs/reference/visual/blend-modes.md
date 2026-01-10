# Blend Modes

Set mix blend mode

## Syntax
```
visual="mix-blend:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `normal` | `mix-blend-mode: normal` | Normal blend |
| `multiply` | `mix-blend-mode: multiply` | Multiply blend |
| `screen` | `mix-blend-mode: screen` | Screen blend |
| `overlay` | `mix-blend-mode: overlay` | Overlay blend |
| `darken` | `mix-blend-mode: darken` | Darken blend |
| `lighten` | `mix-blend-mode: lighten` | Lighten blend |

## Examples

```html
<div visual="mix-blend:multiply">Multiply blend</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
