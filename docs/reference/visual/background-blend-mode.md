# Background Blend Mode

Set background blend mode

## Syntax
```
visual="bg-blend:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `normal` | `background-blend-mode: normal` | Normal blend |
| `multiply` | `background-blend-mode: multiply` | Multiply blend |
| `screen` | `background-blend-mode: screen` | Screen blend |
| `overlay` | `background-blend-mode: overlay` | Overlay blend |
| `darken` | `background-blend-mode: darken` | Darken blend |
| `lighten` | `background-blend-mode: lighten` | Lighten blend |

## Examples

```html
<div visual="bg-blend:multiply">Multiplied background</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Background Blend Mode

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-blend:multiply"</code> - Blend backgrounds together</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">multiply</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">screen</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">overlay</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">multiply</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">screen</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">overlay</div>
</div>
```

</details>

</div>
