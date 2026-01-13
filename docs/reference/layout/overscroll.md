# Overscroll

Control scroll chaining behavior

## Syntax
```
layout="overscroll:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `auto` | `overscroll-behavior: auto` | Default behavior |
| `contain` | `overscroll-behavior: contain` | Contain scroll |
| `none` | `overscroll-behavior: none` | No scroll chaining |

## Examples

```html
<div layout="overscroll:contain">Contained scroll</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Overscroll Contain

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>layout="overscroll:contain"</code> - Prevent scroll from affecting parent</p>
<div layout="overscroll:contain overflow:auto" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px;">
  <p visual="text:neutral-800 dark:text:neutral-200">Scroll here won't chain to parent. Content continues for demo purposes to show scrolling behavior.</p>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="overscroll:contain overflow:auto" space="p:small" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium" style="height: 60px;">
  <p visual="text:neutral-800 dark:text:neutral-200">Scroll here won't chain to parent. Content continues for demo purposes to show scrolling behavior.</p>
</div>
```

</details>

</div>
