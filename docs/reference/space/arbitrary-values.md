# Arbitrary Values

Use brackets `[value]` for specific values beyond the scale.

## Syntax

```
property:[value]
```

The value inside brackets is passed directly to CSS.

## Examples

```html
<!-- Exact pixel values -->
<div space="w:[350px]">350 pixels wide</div>

<!-- Viewport units -->
<div space="h:[50vh]">50% viewport height</div>

<!-- Multiple values -->
<div space="p:[20px_40px]">20px vertical, 40px horizontal</div>

<!-- Rem units -->
<div space="m-t:[5rem]">5rem top margin</div>

<!-- Calc expressions -->
<div space="w:[calc(100%_-_40px)]">Full width minus 40px</div>

<!-- Percentage -->
<div space="max-w:[80%]">80% max width</div>
```

## Notes

- Use underscores `_` instead of spaces inside brackets
- Any valid CSS value is accepted
- Useful when scale values don't match your exact needs
