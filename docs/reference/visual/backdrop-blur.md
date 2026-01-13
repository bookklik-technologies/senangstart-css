# Backdrop Blur

Blur backdrop

## Syntax
```
visual="backdrop-blur:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `backdrop-filter: blur(0)` | No blur |
| `tiny` | `backdrop-filter: blur(2px)` | Tiny blur |
| `small` | `backdrop-filter: blur(4px)` | Small blur |
| `medium` | `backdrop-filter: blur(8px)` | Medium blur |
| `big` | `backdrop-filter: blur(12px)` | Large blur |
| `giant` | `backdrop-filter: blur(24px)` | Giant blur |
| `vast` | `backdrop-filter: blur(48px)` | Vast blur |

## Examples

```html
<div visual="backdrop-blur:medium bg:[rgba(255,255,255,0.5)]">Frosted glass</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Backdrop Blur

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-blur:medium"</code> - Creates a frosted glass effect on content behind the element</p>
<div layout="relative" space="p:medium" visual="rounded:medium" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); min-height: 100px;">
  <div layout="absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%); backdrop-filter: blur(8px); background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 0.5rem;">
    <span visual="text:white">Frosted Glass</span>
  </div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="relative" space="p:medium" visual="rounded:medium" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); min-height: 100px;">
  <div layout="absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%); backdrop-filter: blur(8px); background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 0.5rem;">
    <span visual="text:white">Frosted Glass</span>
  </div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
