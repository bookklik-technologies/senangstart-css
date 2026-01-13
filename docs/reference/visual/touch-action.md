# Touch Action

Control touch interactions

## Syntax
```
visual="touch:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `touch-action: auto` | Default touch |
| `none` | `touch-action: none` | Disable touch |
| `pan-x` | `touch-action: pan-x` | Pan horizontally |
| `pan-y` | `touch-action: pan-y` | Pan vertically |
| `pan-left` | `touch-action: pan-left` | Pan left |
| `pan-right` | `touch-action: pan-right` | Pan right |
| `pinch-zoom` | `touch-action: pinch-zoom` | Pinch to zoom |
| `manipulation` | `touch-action: manipulation` | Pan and pinch only |

## Examples

```html
<div visual="touch:manipulation">Touch optimized</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Touch Action

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="touch:manipulation"</code> - Control touch gestures</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">pan-x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">pan-y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">manipulation</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">pan-x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">pan-y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">manipulation</div>
</div>
```

</details>

</div>
