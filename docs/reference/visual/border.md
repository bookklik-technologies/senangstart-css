# Border Color

Set border color using semantic colors or Tailwind-style color tokens.

## Syntax
```
visual="border:[color]"
visual="border-t:[color]"   <!-- top only -->
visual="border-b:[color]"   <!-- bottom only -->
visual="border-l:[color]"   <!-- left only -->
visual="border-r:[color]"   <!-- right only -->
visual="border-x:[color]"   <!-- left + right -->
visual="border-y:[color]"   <!-- top + bottom -->
```

## Values

All color tokens from the theme are supported (e.g., `primary`, `secondary`, `success`, `warning`, `danger`, `gray-500`, `blue-300`, etc.)

## Examples

### All Sides
```html
<div visual="border:primary border-w:small">Primary border on all sides</div>
<div visual="border:danger border-w:[2px]">Red border on all sides</div>
```

### Directional
```html
<!-- Top border only -->
<div visual="border-t:primary border-t-w:[2px]">Top border</div>

<!-- Bottom border only -->
<div visual="border-b:warning border-b-w:small">Bottom border</div>

<!-- Left and right borders -->
<div visual="border-x:secondary border-x-w:[1px]">Horizontal borders</div>

<!-- Top and bottom borders -->
<div visual="border-y:success border-y-w:tiny">Vertical borders</div>
```

## Arbitrary Values

Supports custom CSS color values:

```html
<div visual="border:[#ff5500] border-w:[2px]">Custom orange border</div>
<div visual="border-t:[rgb(100,150,200)] border-t-w:[1px]">Custom top border</div>
```

## States

```html
<button visual="border:gray-300 border-w:[1px] hover:border:primary focus:border:blue-500">
  Interactive border
</button>
```

## Responsive

```html
<div visual="border:gray-300 tab:border:primary lap:border:success border-w:[1px]">
  Responsive border color
</div>
```

::: tip
When using directional borders, pair the color utility with the matching width utility (e.g., `border-t` with `border-t-w`).
:::
