# Ring Color

Set ring color

## Syntax
```
visual="ring-color:[color]/[opacity]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `primary` | `--ss-ring-color: var(--c-primary)` | Primary ring color |
| `blue-500` | `--ss-ring-color: var(--c-blue-500)` | Blue ring color |

## Examples

```html
<button visual="ring:small ring-color:primary">Colored ring</button>
<button visual="ring:small ring-color:primary/50">50% opacity ring</button>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Ring Color

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="ring-color:primary"</code> - Set the color of the focus ring</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="ring:regular ring-color:primary bg:white dark:bg:neutral-800 rounded:small">primary</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-color:danger bg:white dark:bg:neutral-800 rounded:small">danger</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-color:success bg:white dark:bg:neutral-800 rounded:small">success</button>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="ring:regular ring-color:primary bg:white dark:bg:neutral-800 rounded:small">primary</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-color:danger bg:white dark:bg:neutral-800 rounded:small">danger</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-color:success bg:white dark:bg:neutral-800 rounded:small">success</button>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="ring:[custom-value]">Custom</div>
```
