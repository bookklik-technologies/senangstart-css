# Scroll Snap Stop

Control scroll snap stop behavior

## Syntax
```
visual="snap-stop:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `normal` | `scroll-snap-stop: normal` | Normal stop |
| `always` | `scroll-snap-stop: always` | Always stop |

## Examples

```html
<div visual="snap-stop:always">Always stop here</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Snap Stop

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="snap-stop:always"</code> - Control whether to stop at snap point</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">always</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">always</div>
</div>
```

</details>

</div>
