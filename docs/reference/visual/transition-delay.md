# Transition Delay

Set transition delay

## Syntax
```
visual="delay:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `instant` | `transition-delay: 75ms` | 75ms delay |
| `quick` | `transition-delay: 100ms` | 100ms delay |
| `fast` | `transition-delay: 150ms` | 150ms delay |
| `normal` | `transition-delay: 200ms` | 200ms delay |
| `slow` | `transition-delay: 300ms` | 300ms delay |

## Examples

```html
<div visual="transition:all delay:slow">Delayed transition</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Transition Delay

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="delay:slow"</code> - Delay before transition starts</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all delay:instant hover:scale:110">instant</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all delay:slow hover:scale:110">slow</button>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all delay:instant hover:scale:110">instant</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all delay:slow hover:scale:110">slow</button>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="transition:[custom-value]">Custom</div>
```
