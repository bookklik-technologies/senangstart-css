# Transition Duration

Set transition duration

## Syntax
```
visual="duration:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `instant` | `transition-duration: 75ms` | 75ms |
| `quick` | `transition-duration: 100ms` | 100ms |
| `fast` | `transition-duration: 150ms` | 150ms |
| `normal` | `transition-duration: 200ms` | 200ms |
| `slow` | `transition-duration: 300ms` | 300ms |
| `slower` | `transition-duration: 500ms` | 500ms |
| `lazy` | `transition-duration: 700ms` | 700ms |

## Examples

```html
<div visual="transition:all duration:slow">Slow transition</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Duration

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="duration:slow"</code> - Control transition speed</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all duration:fast hover:scale:110">fast</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all duration:slow hover:scale:110">slow</button>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all duration:fast hover:scale:110">fast</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all duration:slow hover:scale:110">slow</button>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transition:[custom-value]">Custom</div>
```
