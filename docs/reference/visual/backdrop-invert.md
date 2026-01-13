# Backdrop Invert

Invert backdrop colors

## Syntax
```
visual="backdrop-invert:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `backdrop-filter: invert(0%)` | No inversion |
| `partial` | `backdrop-filter: invert(50%)` | 50% inversion |
| `full` | `backdrop-filter: invert(100%)` | Full inversion |

## Examples

```html
<div visual="backdrop-invert:full">Inverted backdrop</div>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Backdrop Invert

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="backdrop-invert:full"</code> - Invert colors behind element</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">full</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small">full</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="backdrop:[custom-value]">Custom</div>
```
