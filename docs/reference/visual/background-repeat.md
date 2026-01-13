# Background Repeat

Set background repeat behavior

## Syntax
```
visual="bg-repeat:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `repeat` | `background-repeat: repeat` | Repeat both axes |
| `no-repeat` | `background-repeat: no-repeat` | No repeat |
| `repeat-x` | `background-repeat: repeat-x` | Repeat horizontally |
| `repeat-y` | `background-repeat: repeat-y` | Repeat vertically |
| `round` | `background-repeat: round` | Round repeat |
| `space` | `background-repeat: space` | Spaced repeat |

## Examples

```html
<div visual="bg-repeat:no-repeat">Single background</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Background Repeat

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-repeat:no-repeat"</code> - Control background tiling</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">repeat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">no-repeat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">repeat-x</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">repeat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">no-repeat</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">repeat-x</div>
</div>
```

</details>

</div>
