# Animation Direction

Set animation direction

## Syntax
```
visual="animation-direction:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `normal` | `animation-direction: normal` | Normal direction |
| `reverse` | `animation-direction: reverse` | Reverse direction |
| `alternate` | `animation-direction: alternate` | Alternate direction |
| `alternate-reverse` | `animation-direction: alternate-reverse` | Alternate reverse |

## Examples

```html
<div visual="animate:bounce animation-direction:alternate">Alternating</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Animation Direction

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animation-direction:alternate"</code> - Control playback direction</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-direction:normal">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-direction:reverse">reverse</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-direction:alternate">alternate</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-direction:normal">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-direction:reverse">reverse</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-direction:alternate">alternate</div>
</div>
```

</details>

</div>
