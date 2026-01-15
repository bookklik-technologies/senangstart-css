# Cursor

Set cursor style

## Syntax
```
visual="cursor:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `cursor: auto` | Auto cursor |
| `default` | `cursor: default` | Default cursor |
| `pointer` | `cursor: pointer` | Pointer cursor |
| `wait` | `cursor: wait` | Wait cursor |
| `text` | `cursor: text` | Text cursor |
| `move` | `cursor: move` | Move cursor |
| `not-allowed` | `cursor: not-allowed` | Not allowed |
| `grab` | `cursor: grab` | Grab cursor |
| `grabbing` | `cursor: grabbing` | Grabbing cursor |

## Examples

```html
<button visual="cursor:pointer">Clickable</button>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Cursor

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="cursor:pointer"</code> - Change mouse cursor on hover</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small cursor:pointer">pointer</div>
  <div space="p:small" visual="bg:primary text:white rounded:small cursor:wait">wait</div>
  <div space="p:small" visual="bg:primary text:white rounded:small cursor:not-allowed">not-allowed</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small cursor:pointer">pointer</div>
  <div space="p:small" visual="bg:primary text:white rounded:small cursor:wait">wait</div>
  <div space="p:small" visual="bg:primary text:white rounded:small cursor:not-allowed">not-allowed</div>
</div>
```

</details>

</div>
