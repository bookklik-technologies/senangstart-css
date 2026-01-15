# Animation Delay

Set animation delay

## Syntax
```
visual="animation-delay:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `instant` | `animation-delay: 75ms` | 75ms delay |
| `quick` | `animation-delay: 100ms` | 100ms delay |
| `fast` | `animation-delay: 150ms` | 150ms delay |
| `normal` | `animation-delay: 200ms` | 200ms delay |
| `slow` | `animation-delay: 300ms` | 300ms delay |

## Examples

```html
<div visual="animate:bounce animation-delay:slow">Delayed bounce</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Animation Delay

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animation-delay:slow"</code> - Delay before animation starts</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:pulse animation-delay:instant">instant</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:pulse animation-delay:slow">slow</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:pulse animation-delay:instant">instant</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:pulse animation-delay:slow">slow</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="animation:[custom-value]">Custom</div>
```
