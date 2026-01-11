# Border Width

Set border width for all sides or specific sides

## Syntax
```
visual="border-w:[value]" | visual="border-{t|b|l|r|x|y}-w:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `border-width: var(--s-none)` | No border (0px) |
| `thin` | `border-width: var(--s-thin)` | Thin border (1px) |
| `regular` | `border-width: var(--s-regular)` | Standard border (2px) |
| `thick` | `border-width: var(--s-thick)` | Thick border (3px) |

## Examples

```html
<div visual="border:gray-300 border-w:thin">Thin 1px border</div>
<div visual="border:gray-300 border-w:regular">Standard 2px border</div>
<div visual="border:gray-300 border-w:thick">Thick 3px border</div>
<div visual="border-b:primary border-b-w:regular">Bottom border only</div>
<div visual="border-x:primary border-x-w:thin">Horizontal borders</div>
```

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="border:[custom-value]">Custom</div>
```

## Responsive

```html
<!-- Responsive example -->
<div visual="mob:... tab:... lap:...">
  Responsive content
</div>
```
