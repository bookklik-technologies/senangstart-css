# State Prefixes

Apply visual styles conditionally based on element state.

## Available Prefixes

| Prefix | Applies when |
|--------|--------------|
| `hover:` | Mouse is over the element |
| `focus:` | Element has focus |
| `active:` | Element is being pressed |
| `disabled:` | Element is disabled |
| `dark:` | Dark mode is active |

## Examples

```html
<!-- Hover effects -->
<button visual="bg:primary hover:bg:[#2563EB]">
  Hover effect
</button>

<!-- Focus effects -->
<input visual="border:grey focus:border:primary">

<!-- Link with hover -->
<a visual="text:grey hover:text:primary underline hover:no-underline">
  Link with hover
</a>

<!-- Disabled state -->
<button visual="bg:primary disabled:opacity:[0.5]" disabled>
  Disabled button
</button>

<!-- Combined states -->
<button visual="bg:white hover:bg:light active:bg:grey">
  Multiple states
</button>
```

## Combining with Responsive

State prefixes can be combined with responsive prefixes:

```html
<div visual="bg:white tab:hover:bg:light">
  Hover effect only on tablet+
</div>
```
