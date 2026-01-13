# Scroll Margin

Set scroll margin for snap

## Syntax
```
visual="scroll-m:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `scroll-m` | `scroll-margin: {value}` | All sides |
| `scroll-m-t` | `scroll-margin-top: {value}` | Top margin |
| `scroll-m-r` | `scroll-margin-right: {value}` | Right margin |
| `scroll-m-b` | `scroll-margin-bottom: {value}` | Bottom margin |
| `scroll-m-l` | `scroll-margin-left: {value}` | Left margin |

## Examples

```html
<div visual="scroll-m:medium">Scroll margin</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Scroll Margin

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="scroll-m:medium"</code> - Offset for scroll snap</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll-m:medium</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">scroll-m:medium</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="scroll:[custom-value]">Custom</div>
```
