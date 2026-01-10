# Object Fit

Control how images and videos fit their container with the `layout` attribute.

## Values

| Value | CSS Output |
|-------|------------|
| `object:contain` | `object-fit: contain` |
| `object:cover` | `object-fit: cover` |
| `object:fill` | `object-fit: fill` |
| `object:none` | `object-fit: none` |
| `object:scale-down` | `object-fit: scale-down` |

## Examples

```html
<!-- Cover: fills container, may crop -->
<img layout="object:cover" space="w:[100%] h:[200px]" src="hero.jpg">

<!-- Contain: fits inside, may letterbox -->
<img layout="object:contain" space="w:[100%] h:[200px]" src="logo.png">

<!-- Fill: stretches to fit -->
<img layout="object:fill" space="w:[100%] h:[200px]" src="bg.jpg">
```

## Common Patterns

```html
<!-- Card with cover image -->
<div visual="rounded:medium overflow:hidden">
  <img layout="object:cover" space="w:[100%] h:[200px]" src="photo.jpg">
  <div space="p:medium">Card content</div>
</div>
```
