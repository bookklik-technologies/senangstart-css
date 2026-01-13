# Animation Builtin

Apply built-in animations

## Syntax
```
visual="animate:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `animation: none` | No animation |
| `spin` | `animation: spin 1s linear infinite` | Spinning |
| `ping` | `animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite` | Ping effect |
| `pulse` | `animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite` | Pulsing |
| `bounce` | `animation: bounce 1s infinite` | Bouncing |

## Examples

```html
<div visual="animate:spin">Loading...</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Built-in Animations

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="animate:spin"</code> - Ready-to-use animations</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">spin</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">pulse</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">bounce</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">spin</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">pulse</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">bounce</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="animation:[custom-value]">Custom</div>
```
