# Animation Play

Control animation play state

## Syntax
```
visual="animation-play:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `running` | `animation-play-state: running` | Animation running |
| `paused` | `animation-play-state: paused` | Animation paused |

## Examples

```html
<div visual="animate:spin hover:animation-play:paused">Pause on hover</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Animation Play State

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animation-play:paused"</code> - Pause or resume animations</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-play:running">running</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-play:paused">paused</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-play:running">running</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-play:paused">paused</div>
</div>
```

</details>

</div>
