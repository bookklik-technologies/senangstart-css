# Scroll Padding

Set scroll padding for snap

## Syntax
```
visual="scroll-p:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `scroll-p` | `scroll-padding: {value}` | All sides |
| `scroll-p-t` | `scroll-padding-top: {value}` | Top padding |
| `scroll-p-r` | `scroll-padding-right: {value}` | Right padding |
| `scroll-p-b` | `scroll-padding-bottom: {value}` | Bottom padding |
| `scroll-p-l` | `scroll-padding-left: {value}` | Left padding |

## Examples

```html
<div visual="scroll-p:big">Scroll padding</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Scroll Padding

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="scroll-p:big"</code> - Padding for scroll snap container</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll-p:big</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll-p:big</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="scroll:[custom-value]">Custom</div>
```
