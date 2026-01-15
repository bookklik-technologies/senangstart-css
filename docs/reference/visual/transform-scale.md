# Transform Scale

Scale element

## Syntax
```
visual="scale:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `0` | `transform: scale(0)` | Scale to 0 |
| `50` | `transform: scale(0.5)` | Scale to 50% |
| `75` | `transform: scale(0.75)` | Scale to 75% |
| `100` | `transform: scale(1)` | Normal scale |
| `110` | `transform: scale(1.1)` | Scale to 110% |
| `125` | `transform: scale(1.25)` | Scale to 125% |
| `150` | `transform: scale(1.5)` | Scale to 150% |

## Examples

```html
<div visual="transition:transform hover:scale:110">Hover to grow</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Scale Transform

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="scale:75"</code> - Scale elements up or down</p>
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small scale:75">75%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small scale:100">100%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small scale:125">125%</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:big p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small scale:75">75%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small scale:100">100%</div>
  <div space="p:small" visual="bg:primary text:white rounded:small scale:125">125%</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transform:[custom-value]">Custom</div>
```
