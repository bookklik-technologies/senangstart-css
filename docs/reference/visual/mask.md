# Mask

Control CSS mask properties with the `visual` attribute.

## Mask Image

### Syntax
```
visual="mask-image:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `mask-image:[mask.svg]` | `mask-image: url(mask.svg)` |
| `mask-image:[/path/to/mask.png]` | `mask-image: url(/path/to/mask.png)` |

### Examples

```html
<div visual="mask-image:[circle-mask.svg]">
  Element with circular mask
</div>
```

---

## Mask Clip

### Syntax
```
visual="mask-clip:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `mask-clip:border` | `mask-clip: border-box` |
| `mask-clip:padding` | `mask-clip: padding-box` |
| `mask-clip:content` | `mask-clip: content-box` |
| `mask-clip:text` | `mask-clip: text` |

---

## Mask Composite

### Syntax
```
visual="mask-composite:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `mask-composite:add` | `mask-composite: add` |
| `mask-composite:subtract` | `mask-composite: subtract` |
| `mask-composite:intersect` | `mask-composite: intersect` |
| `mask-composite:exclude` | `mask-composite: exclude` |

---

## Mask Mode

### Syntax
```
visual="mask-mode:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `mask-mode:alpha` | `mask-mode: alpha` |
| `mask-mode:luminance` | `mask-mode: luminance` |
| `mask-mode:match-source` | `mask-mode: match-source` |

---

## Mask Origin

### Syntax
```
visual="mask-origin:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `mask-origin:border` | `mask-origin: border-box` |
| `mask-origin:padding` | `mask-origin: padding-box` |
| `mask-origin:content` | `mask-origin: content-box` |

---

## Mask Position

### Syntax
```
visual="mask-position:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `mask-position:center` | `mask-position: center` |
| `mask-position:top` | `mask-position: top` |
| `mask-position:bottom` | `mask-position: bottom` |
| `mask-position:left` | `mask-position: left` |
| `mask-position:right` | `mask-position: right` |
| `mask-position:top-left` | `mask-position: top left` |
| `mask-position:top-right` | `mask-position: top right` |
| `mask-position:bottom-left` | `mask-position: bottom left` |
| `mask-position:bottom-right` | `mask-position: bottom right` |
| `mask-position:[50%_50%]` | `mask-position: 50% 50%` |

---

## Mask Repeat

### Syntax
```
visual="mask-repeat:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `mask-repeat:repeat` | `mask-repeat: repeat` |
| `mask-repeat:no-repeat` | `mask-repeat: no-repeat` |
| `mask-repeat:repeat-x` | `mask-repeat: repeat-x` |
| `mask-repeat:repeat-y` | `mask-repeat: repeat-y` |
| `mask-repeat:round` | `mask-repeat: round` |
| `mask-repeat:space` | `mask-repeat: space` |

---

## Mask Size

### Syntax
```
visual="mask-size:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `mask-size:auto` | `mask-size: auto` |
| `mask-size:cover" | `mask-size: cover` |
| `mask-size:contain` | `mask-size: contain` |
| `mask-size:[100px_100px]` | `mask-size: 100px 100px` |

---

## Mask Type

### Syntax
```
visual="mask-type:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `mask-type:alpha` | `mask-type: alpha` |
| `mask-type:luminance` | `mask-type: luminance` |

---

## Full Example

```html
<!-- Circular mask for an image -->
<div visual="
  mask-image:[circle.svg]
  mask-size:cover
  mask-position:center
  mask-repeat:no-repeat
">
  <img src="photo.jpg" alt="Photo">
</div>

<!-- Mask with compositing -->
<div visual="
  mask-image:[pattern.png]
  mask-composite:intersect
  mask-mode:alpha
  mask-size:contain
">
  Content with complex masking
</div>

<!-- Gradient fade effect using masks -->
<div visual="
  mask-image:[gradient-mask.svg]
  mask-position:top
  mask-size:cover
  mask-repeat:no-repeat
">
  Fade effect with masks
</div>
```

---

## Usage Tips

- Use SVG masks for complex shapes.
- Combine multiple masks using `mask-composite`.
- Use `mask-mode:alpha` for transparency-based masks.
- Use `mask-mode:luminance` for brightness-based masks.
