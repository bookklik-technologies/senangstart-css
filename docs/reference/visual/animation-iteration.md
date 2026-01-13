# Animation Iteration

Set animation iteration count

## Syntax
```
visual="animation-iteration:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `1` | `animation-iteration-count: 1` | Once |
| `infinite` | `animation-iteration-count: infinite` | Forever |

## Examples

```html
<div visual="animate:bounce animation-iteration:1">Bounce once</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Animation Iteration

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animation-iteration:1"</code> - Control number of loops</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">1 (once)</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">infinite</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">1 (once)</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">infinite</div>
</div>
```

</details>

</div>
