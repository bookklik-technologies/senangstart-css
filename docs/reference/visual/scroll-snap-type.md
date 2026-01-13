# Scroll Snap Type

Set scroll snap type

## Syntax
```
visual="snap-type:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `scroll-snap-type: none` | No snapping |
| `x` | `scroll-snap-type: x mandatory` | Horizontal snap |
| `y` | `scroll-snap-type: y mandatory` | Vertical snap |
| `both` | `scroll-snap-type: both mandatory` | Both axes |
| `x-proximity` | `scroll-snap-type: x proximity` | Horizontal proximity |
| `y-proximity` | `scroll-snap-type: y proximity` | Vertical proximity |

## Examples

```html
<div visual="snap-type:x">Horizontal snap container</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Snap Type

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="snap-type:x"</code> - Enable scroll snapping</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>
```

</details>

</div>
