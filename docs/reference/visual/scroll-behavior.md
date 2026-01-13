# Scroll Behavior

Set scroll behavior

## Syntax
```
visual="scroll-behavior:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `scroll-behavior: auto` | Instant scroll |
| `smooth` | `scroll-behavior: smooth` | Smooth scroll |

## Examples

```html
<html visual="scroll-behavior:smooth">Smooth scrolling</html>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Scroll Behavior

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="scroll-behavior:smooth"</code> - Smooth or instant scrolling</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">smooth</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">auto</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">smooth</div>
</div>
```

</details>

</div>
