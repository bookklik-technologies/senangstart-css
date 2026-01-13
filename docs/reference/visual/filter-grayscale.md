# Filter Grayscale

Apply grayscale filter

## Syntax
```
visual="grayscale:[value]"
```

## Values

| Value | CSS Output | Description |
|-------|------------|-------------|
| `none` | `filter: grayscale(0%)` | No grayscale |
| `partial` | `filter: grayscale(50%)` | 50% grayscale |
| `full` | `filter: grayscale(100%)` | Full grayscale |

## Examples

```html
<img visual="grayscale:full">Black and white</img>
```

## Preview

<div space="p-x:big p-b:medium m-t:medium" visual="border-w:thin border:neutral-100 dark:border:neutral-800 rounded:medium">

### Grayscale Filter

<div layout="flex col" space="g:medium">
  <p space="m:none" visual="text:neutral-600 dark:text:neutral-400 text-sm"><code>visual="grayscale:full"</code> - Convert to grayscale</p>
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: grayscale(50%);">partial</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: grayscale(100%);">full</div>
</div>
</div>

<details>
<summary>View Code</summary>

```html
<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small">none</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: grayscale(50%);">partial</div>
  <div space="p:small" visual="bg:primary text:white rounded:small" style="filter: grayscale(100%);">full</div>
</div>
```

</details>

</div>

## Arbitrary Values

Supports custom values using bracket syntax:

```html
<div visual="filter:[custom-value]">Custom</div>
```
