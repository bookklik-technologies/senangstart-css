# Ring

Add focus ring around element using box-shadow

## Syntax
```
visual="ring:[size]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `box-shadow: 0 0 0 0 transparent` | No ring |
| `thin` | `box-shadow: var(--ring-inset) 0 0 0 1px var(--ss-ring-color)` | Thin ring (1px) |
| `regular` | `box-shadow: var(--ring-inset) 0 0 0 2px var(--ss-ring-color)` | Regular ring (2px) |
| `small` | `box-shadow: var(--ring-inset) 0 0 0 4px var(--ss-ring-color)` | Small ring (4px) |
| `medium` | `box-shadow: var(--ring-inset) 0 0 0 6px var(--ss-ring-color)` | Medium ring (6px) |
| `big` | `box-shadow: var(--ring-inset) 0 0 0 8px var(--ss-ring-color)` | Big ring (8px) |

## Examples

```html
<button visual="focus-visible:ring:small ring-color:primary">Focus me</button>
<input visual="focus:ring:regular ring-color:blue-500">
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Focus Ring

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="focus-visible:ring:small"</code> - Ring appears on keyboard focus (try Tab key)</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="bg:primary text:white rounded:small focus-visible:ring:small ring-color:blue-300">Tab to me</button>
  <button space="p:small p-x:medium" visual="bg:white dark:bg:neutral-800 border:neutral-300 border-w:thin rounded:small focus-visible:ring:small ring-color:primary">Or me</button>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="bg:primary text:white rounded:small focus-visible:ring:small ring-color:blue-300">Tab to me</button>
  <button space="p:small p-x:medium" visual="bg:white dark:bg:neutral-800 border:neutral-300 border-w:thin rounded:small focus-visible:ring:small ring-color:primary">Or me</button>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="ring:[custom-value]">Custom</div>
```
