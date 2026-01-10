# Aspect Ratio

Control the aspect ratio of elements with the `layout` attribute.

## Syntax
```
layout="aspect:[value]"
```

## Values

| Value | CSS Output |
|-------|------------|
| `aspect:auto` | `aspect-ratio: auto` |
| `aspect:square` | `aspect-ratio: 1 / 1` |
| `aspect:video` | `aspect-ratio: 16 / 9` |
| `aspect:[4/3]` | `aspect-ratio: 4 / 3` |

## Examples

```html
<!-- Video container -->
<div layout="aspect:video">16:9 video container</div>

<!-- Square image -->
<img layout="aspect:square object:cover" src="photo.jpg">

<!-- Custom aspect ratio -->
<div layout="aspect:[4/3]">4:3 ratio</div>
<div layout="aspect:[21/9]">Ultrawide ratio</div>
```

## Common Patterns

```html
<!-- Responsive video embed -->
<div layout="aspect:video overflow:hidden rounded:medium">
  <iframe src="..." layout="absolute inset:0" space="w:[100%] h:[100%]"></iframe>
</div>

<!-- Square thumbnail grid -->
<div layout="grid grid-cols:3" space="g:small">
  <img layout="aspect:square object:cover" src="1.jpg">
  <img layout="aspect:square object:cover" src="2.jpg">
  <img layout="aspect:square object:cover" src="3.jpg">
</div>
```
