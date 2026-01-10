# Blend Modes

Control how elements blend with their background or other elements.

## Mix Blend Mode

### Syntax
```
visual="mix-blend:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `mix-blend:normal` | `mix-blend-mode: normal` |
| `mix-blend:multiply` | `mix-blend-mode: multiply` |
| `mix-blend:screen` | `mix-blend-mode: screen` |
| `mix-blend:overlay` | `mix-blend-mode: overlay` |
| `mix-blend:darken` | `mix-blend-mode: darken` |
| `mix-blend:lighten` | `mix-blend-mode: lighten` |
| `mix-blend:color-dodge` | `mix-blend-mode: color-dodge` |
| `mix-blend:color-burn` | `mix-blend-mode: color-burn` |
| `mix-blend:hard-light` | `mix-blend-mode: hard-light` |
| `mix-blend:soft-light` | `mix-blend-mode: soft-light` |
| `mix-blend:difference` | `mix-blend-mode: difference` |
| `mix-blend:exclusion` | `mix-blend-mode: exclusion` |
| `mix-blend:hue` | `mix-blend-mode: hue` |
| `mix-blend:saturation` | `mix-blend-mode: saturation` |
| `mix-blend:color` | `mix-blend-mode: color` |
| `mix-blend:luminosity` | `mix-blend-mode: luminosity` |

### Examples

```html
<div visual="mix-blend:multiply">
  Element with multiply mode
</div>

<div visual="mix-blend:screen">
  Element with screen mode
</div>

<div visual="mix-blend:overlay">
  Element with overlay mode
</div>
```

---

## Background Blend Mode

### Syntax
```
visual="bg-blend:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `bg-blend:normal` | `background-blend-mode: normal` |
| `bg-blend:multiply` | `background-blend-mode: multiply` |
| `bg-blend:screen` | `background-blend-mode: screen` |
| `bg-blend:overlay` | `background-blend-mode: overlay` |
| `bg-blend:darken` | `background-blend-mode: darken` |
| `bg-blend:lighten` | `background-blend-mode: lighten` |

### Examples

```html
<div visual="
  bg:primary 
  bg-image:[texture.png] 
  bg-blend:multiply
">
  Background with multiply blend
</div>
```

---

## Blend Mode Descriptions

### Normal
Default mode with no blending.

### Multiply
Multiplies the colors, resulting in a darker color.

### Screen
Invert of multiply, resulting in a lighter color.

### Overlay
Combination of multiply and screen, increases contrast.

### Darken
Selects the darker of the colors.

### Lighten
Selects the lighter of the colors.

### Color Dodge
Brightens the background color.

### Color Burn
Darkens the background color.

### Hard Light
Similar to overlay but more intense.

### Soft Light
Similar to overlay but softer.

### Difference
Subtracts the darker color from the lighter one.

### Exclusion
Similar to difference but with lower contrast.

### Hue
Uses the hue of the top layer.

### Saturation
Uses the saturation of the top layer.

### Color
Uses the hue and saturation of the top layer.

### Luminosity
Uses the luminosity of the top layer.

---

## Full Example

```html
<!-- Mix Blend Mode for text over image -->
<div visual="relative">
  <img src="background.jpg" alt="Background">
  <h1 visual="absolute inset:[0] text:white mix-blend:overlay">
    Text with blend mode
  </h1>
</div>

<!-- Background Blend Mode for texture -->
<div visual="
  bg:primary 
  bg-image:[noise.png] 
  bg-blend:soft-light
  p:big
">
  Content with subtle texture
</div>
```
