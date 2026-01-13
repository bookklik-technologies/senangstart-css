# Transition Timing

Set transition timing function

## Syntax
```
visual="ease:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `linear` | `transition-timing-function: linear` | Linear timing |
| `in` | `transition-timing-function: cubic-bezier(0.4, 0, 1, 1)` | Ease in |
| `out` | `transition-timing-function: cubic-bezier(0, 0, 0.2, 1)` | Ease out |
| `in-out` | `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)` | Ease in-out |

## Examples

```html
<div visual="transition:all ease:out">Ease out effect</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Timing Function

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="ease:out"</code> - Control acceleration curve</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">ease:in</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">ease:out</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">ease:in-out</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">ease:in</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">ease:out</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">ease:in-out</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transition:[custom-value]">Custom</div>
```
