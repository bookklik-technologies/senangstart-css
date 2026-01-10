# Object Position

Control the position of images/videos within their container with the `layout` attribute.

## Syntax
```
layout="object-pos:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `object-pos:center` | `object-position: center` |
| `object-pos:top` | `object-position: top` |
| `object-pos:bottom` | `object-position: bottom` |
| `object-pos:left` | `object-position: left` |
| `object-pos:right` | `object-position: right` |

## Examples

```html
<!-- Focus on top of image when cropping -->
<img layout="object:cover object-pos:top" src="portrait.jpg">

<!-- Focus on bottom -->
<img layout="object:cover object-pos:bottom" src="landscape.jpg">
```

## Common Patterns

```html
<!-- Portrait image focused on face (usually at top) -->
<div space="h:[300px]">
  <img layout="object:cover object-pos:top" space="w:[100%] h:[100%]" src="person.jpg">
</div>
```
