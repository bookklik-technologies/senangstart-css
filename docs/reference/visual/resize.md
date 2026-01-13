# Resize

Control element resizing

## Syntax
```
visual="resize:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `resize: none` | No resize |
| `both` | `resize: both` | Resize both |
| `x` | `resize: horizontal` | Resize horizontal |
| `y` | `resize: vertical` | Resize vertical |

## Examples

```html
<textarea visual="resize:y">Vertical resize only</textarea>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Resize

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="resize:y"</code> - Allow element resizing</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">x</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">y</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">both</div>
</div>
```

</details>

</div>
