# Scroll Snap Align

Set scroll snap alignment

## Syntax
```
visual="snap-align:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `start` | `scroll-snap-align: start` | Snap to start |
| `end` | `scroll-snap-align: end` | Snap to end |
| `center` | `scroll-snap-align: center` | Snap to center |
| `none` | `scroll-snap-align: none` | No snap |

## Examples

```html
<div visual="snap-align:start">Snap to start</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Snap Alignment

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="snap-align:start"</code> - Where to snap within container</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">start</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">end</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">start</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">center</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">end</div>
</div>
```

</details>

</div>
