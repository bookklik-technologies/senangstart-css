# Ring Offset

Add gap between ring and element

## Syntax
```
visual="ring-offset:[size]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `--ss-ring-offset-width: 0px` | No offset |
| `2` | `--ss-ring-offset-width: 2px` | 2px offset |
| `4` | `--ss-ring-offset-width: 4px` | 4px offset |

## Examples

```html
<button visual="ring:small ring-offset:2 ring-color:primary">With offset</button>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Ring Offset

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="ring-offset:2"</code> - Add space between ring and element</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:0 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">0</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:2 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">2px</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:4 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">4px</button>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:0 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">0</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:2 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">2px</button>
  <button space="p:small p-x:medium" visual="ring:regular ring-offset:4 ring-color:primary bg:white dark:bg:neutral-800 rounded:small">4px</button>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="ring:[custom-value]">Custom</div>
```
