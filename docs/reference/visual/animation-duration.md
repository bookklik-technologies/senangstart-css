# Animation Duration

Set animation duration

## Syntax
```
visual="animation-duration:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `instant` | `animation-duration: 75ms` | 75ms |
| `quick` | `animation-duration: 100ms` | 100ms |
| `fast` | `animation-duration: 150ms` | 150ms |
| `normal` | `animation-duration: 200ms` | 200ms |
| `slow` | `animation-duration: 300ms` | 300ms |
| `slower` | `animation-duration: 500ms` | 500ms |
| `lazy` | `animation-duration: 700ms` | 700ms |

## Examples

```html
<div visual="animate:spin animation-duration:slow">Slow spin</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Animation Duration

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animation-duration:slow"</code> - Control animation speed</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-duration:fast">fast</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-duration:slow">slow</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-duration:fast">fast</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-duration:slow">slow</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="animation:[custom-value]">Custom</div>
```
