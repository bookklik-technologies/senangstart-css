# Text Shadow

Add text shadow

## Syntax
```
visual="text-shadow:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `text-shadow: none` | No shadow |
| `small` | `text-shadow: 0 1px 2px rgba(0,0,0,0.1)` | Small shadow |
| `medium` | `text-shadow: 0 2px 4px rgba(0,0,0,0.1)` | Medium shadow |
| `big` | `text-shadow: 0 4px 8px rgba(0,0,0,0.1)` | Large shadow |

## Examples

```html
<h1 visual="text-shadow:medium">Shadowed heading</h1>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Text Shadow

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="text-shadow:medium"</code> - Add shadow to text</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="text-shadow: 0 2px 4px rgba(0,0,0,0.3);">shadow</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small" style="text-shadow: 0 2px 4px rgba(0,0,0,0.3);">shadow</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="text:[custom-value]">Custom</div>
```
