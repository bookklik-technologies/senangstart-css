# Background Image

Set background image or gradient

## Syntax
```
visual="bg-image:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `background-image: none` | No background image |
| `gradient-to-t` | `background-image: linear-gradient(to top, var(--tw-gradient-stops))` | Gradient to top |
| `gradient-to-b` | `background-image: linear-gradient(to bottom, var(--tw-gradient-stops))` | Gradient to bottom |
| `gradient-to-l` | `background-image: linear-gradient(to left, var(--tw-gradient-stops))` | Gradient to left |
| `gradient-to-r` | `background-image: linear-gradient(to right, var(--tw-gradient-stops))` | Gradient to right |

## Examples

```html
<div visual="bg-image:gradient-to-r">Gradient background</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="background:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
