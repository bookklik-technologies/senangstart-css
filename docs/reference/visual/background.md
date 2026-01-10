# Background

Control background properties with the `visual` attribute.

## Background Color

### Syntax
```
visual="bg:[color]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `bg:white` | `background-color: var(--c-white)` |
| `bg:primary` | `background-color: var(--c-primary)` |
| `bg:[#hex]` | `background-color: #hex` |

### Examples

```html
<div visual="bg:white">White background</div>
<div visual="bg:primary">Primary color</div>
<div visual="bg:[#FF5733]">Custom hex</div>
```

---

## Background Image

### Syntax
```
visual="bg-image:[url]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `bg-image:[image.jpg]` | `background-image: url(image.jpg)` |
| `bg-image:[/path/to/image.png]` | `background-image: url(/path/to/image.png)` |

### Examples

```html
<div visual="bg-image:[hero.jpg]">With background image</div>
```

---

## Background Attachment

### Syntax
```
visual="bg-attachment:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `bg-attachment:scroll` | `background-attachment: scroll` |
| `bg-attachment:fixed` | `background-attachment: fixed` |
| `bg-attachment:local` | `background-attachment: local` |

---

## Background Clip

### Syntax
```
visual="bg-clip:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `bg-clip:border` | `background-clip: border-box` |
| `bg-clip:padding` | `background-clip: padding-box` |
| `bg-clip:content` | `background-clip: content-box` |
| `bg-clip:text` | `background-clip: text` |

---

## Background Origin

### Syntax
```
visual="bg-origin:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `bg-origin:border` | `background-origin: border-box` |
| `bg-origin:padding` | `background-origin: padding-box` |
| `bg-origin:content` | `background-origin: content-box` |

---

## Background Position

### Syntax
```
visual="bg-position:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `bg-position:center` | `background-position: center` |
| `bg-position:top` | `background-position: top` |
| `bg-position:bottom` | `background-position: bottom` |
| `bg-position:left` | `background-position: left` |
| `bg-position:right` | `background-position: right` |
| `bg-position:top-left` | `background-position: top left` |
| `bg-position:top-right` | `background-position: top right` |
| `bg-position:bottom-left` | `background-position: bottom left` |
| `bg-position:bottom-right` | `background-position: bottom right` |
| `bg-position:[50%_50%]` | `background-position: 50% 50%` |

---

## Background Repeat

### Syntax
```
visual="bg-repeat:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `bg-repeat:repeat` | `background-repeat: repeat` |
| `bg-repeat:no-repeat` | `background-repeat: no-repeat` |
| `bg-repeat:repeat-x` | `background-repeat: repeat-x` |
| `bg-repeat:repeat-y` | `background-repeat: repeat-y` |
| `bg-repeat:round` | `background-repeat: round` |
| `bg-repeat:space` | `background-repeat: space` |

---

## Background Size

### Syntax
```
visual="bg-size:[value]"
```

### Values

| Property | CSS Output |
|----------|------------|
| `bg-size:auto` | `background-size: auto` |
| `bg-size:cover" | `background-size: cover` |
| `bg-size:contain` | `background-size: contain` |
| `bg-size:[100px_100px]` | `background-size: 100px 100px` |

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

---

## Full Example

```html
<div visual="
  bg:primary 
  bg-image:[pattern.png] 
  bg-size:cover 
  bg-position:center 
  bg-repeat:no-repeat
">
  Full background configuration
</div>
```
