# Background Size

Set background size

## Syntax
```
visual="bg-size:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `background-size: auto` | Original size |
| `cover` | `background-size: cover` | Cover container |
| `contain` | `background-size: contain` | Contain in container |

## Examples

```html
<div visual="bg-size:cover">Full coverage background</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Background Size

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="bg-size:cover"</code> - Scale background image</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">cover</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">contain</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">cover</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">contain</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="background:[custom-value]">Custom</div>
```
